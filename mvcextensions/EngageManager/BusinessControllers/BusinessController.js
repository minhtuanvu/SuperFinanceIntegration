/**
 * @module EngageManager
 */
define([], function () {
  /**
   * This class handles the business logic for Engage integration.
   * @alias module:EngageManager
   */
  function EngageManager() {
    var regManager = applicationManager.getRegistrationManager();
    regManager.addPushNotificationSubscriber("ENGAGE", this.receivedPushNotification.bind(this));
    this.provisioned = undefined;
    this.unreadMessageCount = 0;
  }
  inheritsFrom(EngageManager, kony.mvc.Business.Delegator);
  EngageManager.prototype.initializeBusinessController = function() { };
  /**
   * Clears the Engage unread message count.
   * @memberof EngageManager
   */
  EngageManager.prototype.clearUnreadMessageCount = function() {
    this.unreadMessageCount = 0;
  };
  /**
  * Fetches the current Engage unread message count.
  * @memberof EngageManager
  * @returns {number} The current Engage unread message count.
  */
  EngageManager.prototype.getUnreadMessageCount = function() {
    return this.unreadMessageCount;
  };
  /**
   * Determines whether or not the current user has been provisioned for Engage.
   * @memberof EngageManager
   * @param {function} successCallback Callback function to invoke on success
   * @param {function} failureCallback Callback function to invoke on failure
   */
  EngageManager.prototype.checkProvisioning = function(successCallback, failureCallback) {
    var sdkInstance = kony.sdk.getCurrentInstance();
    var configManager = applicationManager.getConfigurationManager();
    var identityObject = sdkInstance.getIdentityService(configManager.constants.IDENTITYSERVICENAME);
    identityObject.getUserAttributes(checkSuccess, checkFailure);
    function checkSuccess(res) {
      var isEngageProvisioned = res.isEngageProvisioned;
      if (kony.sdk.isNullOrUndefined(isEngageProvisioned)) {
        failureCallback("User attribute 'isEngageProvisioned' is not present in identity response");
      } else {
        successCallback(isEngageProvisioned == "true");
      }
    }
    function checkFailure(err) {
      failureCallback(err);
    }
  };
  /**
   * Function to determine whether or not Engage is provisioned.
   * @memberof EngageManager
   * @returns {boolean} Whether or not Engage is provisioned for the current user.
   */
  EngageManager.prototype.isEngageProvisioned = function() {
    return this.provisioned;
  };
  /**
   * On returning to foreground, check whether the badge count has been altered while
   * app was backgrounded. NB: iOS only!
   */
  EngageManager.prototype.onForeground = function() {
    if (applicationManager.getDeviceUtilManager().isIPhone()) {
      var badgeCount = kony.application.getApplicationBadgeValue();
      if (kony.sdk.isNullOrUndefined(badgeCount)) {
        badgeCount = 0;
      } else {
        badgeCount = badgeCount.trim();
        if (badgeCount === "") {
          badgeCount = 0;
        } else if (isNaN(badgeCount)) {
          badgeCount = 0;
        } else {
          badgeCount = parseInt(badgeCount, 10);
        }
      }
      // If badge doesn't agree with unread message count, get the correct number by
      // asking the Engage back-end to verify.
      if (badgeCount !== this.unreadMessageCount) {
        this.fetchUnreadMessageCount();
      }
    } else {
      // Get correct badge count from the Engage back-end.
      this.fetchUnreadMessageCount();
    }
  };
  /**
   * Performs necessary initialisation tasks on a successful login.
   * @memberof EngageManager
   */
  EngageManager.prototype.onSuccessfulLogin = function() {
    this.provisioned = undefined;
    this.unreadMessageCount = 0;
    var successCallback = function(isEngageProvisioned) {
      this.provisioned = isEngageProvisioned;
      if (isEngageProvisioned === true) {
        this.fetchUnreadMessageCount();
      }
    };
    var failureCallback = function(err) {
      if (err) {
        applicationManager.getLoggerManager().log(JSON.stringify(err));
      }
    };
    this.checkProvisioning(successCallback.bind(this), failureCallback.bind(this));
    // Remove callback registration first to avoid duplication error
    // on second and subsequent logins.
    try {
      kony.application.removeApplicationCallbacks({
        "onforeground": [ "EngageUnreadItemRefresh" ]
      });
    } catch (error) {
      // Ignore errors thrown if the callback registration doesn't exist yet.
    }
    kony.application.addApplicationCallbacks({
      "onforeground": { "EngageUnreadItemRefresh": this.onForeground.bind(this) }
    });
  };
  /**
   * Fetch the unread message count from the Engage back-end (via Fabric).
   * @memberof EngageManager
   */
  EngageManager.prototype.fetchUnreadMessageCount = function() {
    var serviceName = "EngageService";
    var operationName = "GetUnreadMessagesCount";
    var params = { };
    var headers = { };
    var serviceSuccess = function(res) {
      if (res.success == "true" &&
          !kony.sdk.isNullOrUndefined(res.unreadMessagesCount) &&
          !isNaN(res.unreadMessagesCount)) {
        var unreadMsgCount = parseInt(res.unreadMessagesCount, 10);
        applicationManager.getLoggerManager().log
          ("New unread message count fetched from Engage: " + unreadMsgCount);
        this.setUnreadMessageCount(unreadMsgCount, true);
      } else {
        applicationManager.getLoggerManager().log(
          "Call to get Engage unread message count was not successful, response = " +
          JSON.stringify(res)
        );
      }
    };
    var serviceFailure = function(err) {
      applicationManager.getLoggerManager().log(
        "Call to get Engage unread message count returned error: " +
        JSON.stringify(err)
      );
    };
    try {
      var service = kony.sdk.getCurrentInstance().getIntegrationService(serviceName);
      service.invokeOperation(
        operationName,
        headers,
        params,
        serviceSuccess.bind(this),
        serviceFailure.bind(this)
      );
    }
    catch (error) {
      serviceFailure(error);
    }
  };
  /**
   * Method to provision the current user in Engage, by calling a Fabric integration service.
   * @memberof EngageManager
   * @param {function} successCallback Callback function to invoke on success
   * @param {function} failureCallback Callback function to invoke on failure
   */
  EngageManager.prototype.provisionEngage = function(successCallback, failureCallback) {
    var serviceName = "EngageService";
    var operationName = "CreateCustomer";
    var userObj = applicationManager.getUserPreferencesManager();
    var params = {
      "firstName": userObj.getUserFirstName(),
      "lastName": userObj.getUserLastName(),
      "registerPushNotification": "true"
    };
    var headers = { };
    var provisionSuccess = function(res) {
      this.provisioned = true;
      successCallback(res);
    };
    var provisionFailure = function(err) {
      failureCallback(err);
    };
    try {
      var service = kony.sdk.getCurrentInstance().getIntegrationService(serviceName);
      service.invokeOperation(
        operationName,
        headers,
        params,
        provisionSuccess.bind(this),
        provisionFailure.bind(this)
      );
    }
    catch (error) {
      failureCallback(error);
    }
  };
  /**
   * Callback function for handling incoming in-app push notifications.
   * @memberof EngageManager
   * @param {object} message The incoming push notification message object.
   * @param {string} onlineOrOffline The mode via which the push notification was received - 'online' or 'offline'.
   */
  EngageManager.prototype.receivedPushNotification = function(message, onlineOrOffline) {
    // Ignore any push notifications not related to Engage.
    if (message.messageType !== "ENGAGE") {
      return;
    }
    // Derive a new unread message count.
    var newUnreadMessageCount = message.engageUnreadMessageCount;
    if (kony.sdk.isNullOrUndefined(newUnreadMessageCount) ||
        isNaN(newUnreadMessageCount)) {
      newUnreadMessageCount = this.unreadMessageCount + 1;
    } else {
      newUnreadMessageCount = parseInt(newUnreadMessageCount, 10);
    }
    // Update the unread message count.
    this.setUnreadMessageCount(newUnreadMessageCount, true);
  };
  /**
   * Sets a new value for the Engage unread message count, optionally updating the UI.
   * @memberof EngageManager
   * @param {number} newUnreadMessageCount The new unread message count.
   * @param {boolean} [updateUI=true] Flag to indicate whether or not to update the UI.
   */
  EngageManager.prototype.setUnreadMessageCount = function(newUnreadMessageCount, updateUI) {
    updateUI = typeof updateUI !== 'undefined' ? updateUI : true;
    var oldUnreadMessageCount = this.unreadMessageCount;
    this.unreadMessageCount = newUnreadMessageCount;
    if (updateUI === true) {
      var engageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('EngageModule');
      if (newUnreadMessageCount > oldUnreadMessageCount) {
        engageModule.presentationController.displayNewMessageNotification();
      } else if (newUnreadMessageCount === 0) {
        engageModule.presentationController.dismissNewMessageNotification();
      }
      engageModule.presentationController.refreshBadges();
    }
  };
  return EngageManager;
});