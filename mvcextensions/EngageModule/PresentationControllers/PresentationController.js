define([], function() {
  function Engage_PresentationController() {
    kony.mvc.Presentation.BasePresenter.call(this);
    this.notificationPending = false;
    this.returnForm = null;
  }
  inheritsFrom(Engage_PresentationController, kony.mvc.Presentation.BasePresenter);
  Engage_PresentationController.prototype.initializePresentationController = function() { };
  /**
   * Called from the MenuHandler each time the menu is presented, to allow pending
   * notifications to be acted upon.
   * @memberof Engage_PresentationController
   */
  Engage_PresentationController.prototype.checkForPendingMessageNotification = function() {
    if (this.notificationPending) {
      if (this.getUnreadMessageCount() > 0) {
        var delayedMessageNotification = function() {
          this.displayNewMessageNotification();
        };
        kony.timer.schedule(
          "engageUnreadMessagesNotification",
          delayedMessageNotification.bind(this),
          1,
          false
        );
      } else {
        this.notificationPending = false;
      }
    }
  };
 /**
   * Function to dismiss any existing "new message" notification bubble.
   * @memberof Engage_PresentationController
   */
  Engage_PresentationController.prototype.dismissNewMessageNotification = function() {
    var currentForm = kony.application.getCurrentForm();
    if (currentForm && currentForm.flxNotification) {
      // Animation of the notification bubble dismissal.
      var transformObject0 = kony.ui.makeAffineTransform();
      transformObject0.scale(1, 1);
      var transformObject100 = kony.ui.makeAffineTransform();
      transformObject100.scale(0, 0);
      currentForm.flxNotification.animate(
        kony.ui.createAnimation({
          "0": {
            "transform": transformObject0,
            "opacity": 1
          },
          "100": {
            "transform": transformObject100,
            "opacity": 0
          }
        }), {
          "duration": 0.3,
          "fillMode": kony.anim.FILL_MODE_FORWARDS
        }, {
          "animationEnd": function() {
            // On completion of the animation, remove and then destroy the notification bubble.
            var currentForm = kony.application.getCurrentForm();
            var flxNotificationRef = currentForm.flxNotification;
            if (flxNotificationRef) {
              flxNotificationRef.parent.remove(flxNotificationRef);
              if (typeof flxNotificationRef.destroy === "function") {
                flxNotificationRef.destroy();
              }
            }
          }
        }
      );
    }
  };
  /**
   * Helper function to search the widget hierarchy of a designated parent widget for a particular
   * child widget.
   * @param {object} parent The parent widget from which to conduct the search.
   * @param {string} widgetId The identifier of the child widget being sought.
   * @return {object} The child widget, or null if no matching widget could be found.
   */
  var findChildWidget = function(parent, widgetId) {
    if (parent) {
      if (parent.id === widgetId) {
        return parent;
      }
      if (parent[widgetId] && parent[widgetId].id === widgetId) {
        return parent[widgetId];
      }
      if (parent.widgets) {
        var children = parent.widgets();
        if (children) {
          for (var i = 0; i < children.length; i++) {
            var foundWidget = findChildWidget(children[i], widgetId);
            if (foundWidget) {
              return foundWidget;
            }
          }
        }
      }
    }
    return null;
  }
  /**
   * Helper function to find the center X co-ordinate of a widget.
   * @param {object} widget The widget for which the center X co-ordinate is sought.
   * @returns {number} The center X co-ordinate of the widget.
   */
  var findWidgetCenterX = function(widget) {
    var x = widget.frame.width / 2;
    var w = widget;
    for ( ; ; ) {
      x += w.frame.x;
      if (!w.parent || w.parent === w) {
        break;
      }
      w = w.parent;
    }
    return x;
  };
  /**
   * Helper function to find whether or not a widget will be visible (taking account of
   * visibility of its parent, grandparent, etc).
   * @param {object} widget The widget for which visibility information is sought.
   * @returns {boolean} True if the widget will be visibile, false if not.
   */
  var findWidgetVisibility = function(widget) {
    var w = widget;
    for ( ; ; ) {
      if (w.isVisible !== true) {
        return false;
      }
      if (!w.parent || w.parent === w) {
        break;
      }
      w = w.parent;
    }
    return true;
  };
  /**
   * Updates the UI to reflect the fact that a new message notification has been received.
   * @memberof Engage_PresentationController
   */
  Engage_PresentationController.prototype.displayNewMessageNotification = function() {
    // Fetch and double-check the message count.
    var messageCount = this.getUnreadMessageCount();
    if (messageCount === 0) {
      return;
    }
    // Check whether the menu is present.
    var currentForm = kony.application.getCurrentForm();
    var menuPresent = false;
    if (currentForm) {
      if (applicationManager.getDeviceUtilManager().isIPhone()) {
        var customFooter = findChildWidget(currentForm, "customFooter");
        var imgMore = findChildWidget(customFooter, "imgMore");
        menuPresent = customFooter &&
          imgMore &&
          findWidgetVisibility(imgMore) === true;
      } else {
        var customHeader = findChildWidget(currentForm, "customHeader");
        var imgBack = findChildWidget(customHeader, "imgBack");
        menuPresent = customHeader &&
          imgBack &&
          findWidgetVisibility(imgBack) === true &&
          imgBack.src.toLowerCase().indexOf("hamburger") >= 0;
      }
    }
    // If we can't display the notification because there's no menu on screen, we set
    // the "notificationPending" flag and display it later, once the user navigates to a
    // screen with a menu.
    if (!menuPresent) {
      this.notificationPending = true;
      return;
    }
    // Unset the "notification pending" flag.
    this.notificationPending = false;
    // Bail out if a notification is already active.
    if (currentForm.flxNotification) {
      return;
    }
    // Work out the width of the notification bubble.
    var deviceInfo = kony.os.deviceInfo();
    var screenWidth = deviceInfo.screenWidth;
    var notificationWidth = Math.floor(deviceInfo.screenWidth * 98 / 100);
    notificationWidth -= (notificationWidth % 2);
    var edgePadding = (screenWidth - notificationWidth) / 2;
    // Figure out the message text.
    var presentationUtility = applicationManager.getPresentationUtility();
    var msgTextResource = (messageCount > 1) ?
      "kony.mb.Engage.newMessages" :
      "kony.mb.Engage.newMessage";
    var msgText = presentationUtility.getStringFromi18n(msgTextResource);
    // Callback for clicking on the notification bubble. Somewhat clumsy because of
    // strange event propogation behaviour through the widget hierarchy in Android.
    var bubbleOnTouchStart = function(eventobject, x, y) {
      this.dismissNewMessageNotification();
      if (x < eventobject.frame.width - 65) {
        this.invokeEngage();
      }
    };
    // Dynamically build a popup to notify the user of the incoming message.
    var flxNotification = new kony.ui.FlexContainer({
      "id": "flxNotification",
      "bottom": "50dp",
      "left": edgePadding.toString() + "dp",
      "height": "60dp",
      "width": notificationWidth.toString() + "dp",
      "zIndex": 500,
      "isVisible": true,
      "layoutType": kony.flex.FREE_FORM,
      // "isModalContainer": true // NB: Modal!
    }, {
      "padding": [0, 0, 0, 0]
    }, {});
    var flxNotificationBubble = new kony.ui.FlexContainer({
      "id": "flxNotificationBubble",
      "top": "0dp",
      "height": "45dp",
      "width": "100%",
      "zIndex": 0,
      "isVisible": true,
      "layoutType": kony.flex.FREE_FORM,
      "onTouchStart": bubbleOnTouchStart.bind(this)
    }, {
      "padding": [0, 0, 0, 0]
    }, {});
    var imgNotificationBubble = new kony.ui.Image2({
      "id": "imgNotificationBubble",
      "top": "0dp",
      "left": "0dp",
      "height": "100%",
      "width": "100%",
      "zIndex": 0,
      "isVisible": true,
      "src": "notificationbubble.png"
    }, {
      "padding": [0, 0, 0, 0],
      "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS
    }, {});
    var imgNotificationIcon = new kony.ui.Image2({
      "id": "imgNotificationIcon",
      "left": "15dp",
      "height": "16dp",
      "width": "15dp",
      "centerY": "50%",
      "zIndex": 1,
      "isVisible": true,
      "src": "engagenotif.png"
    }, {
      "padding": [0, 0, 0, 0],
      "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS
    }, {});
    var lblNotificationText = new kony.ui.Label({
      "id": "lblNotificationText",
      "left": "40dp",
      "width": (notificationWidth - 115).toString() + "dp",
      "centerY": "50%",
      "zIndex": 1,
      "isVisible": true,
      "skin": "sknLblffffffSSPRegular30px",
      "text": msgText
    }, {
      "padding": [0, 0, 0, 0]
    }, {});
    var lblNotificationDismiss = new kony.ui.Label({
      "id": "lblNotificationDismiss",
      "left": (notificationWidth - 60).toString() + "dp",
      "centerY": "50%",
      "zIndex": 1,
      "isVisible": true,
      "skin": "sknLblffffffSSPSemiBold26px",
      "text": presentationUtility.getStringFromi18n("kony.mb.common.Dismiss")
    }, {
      "padding": [0, 0, 0, 0]
    }, {});
    currentForm.add(flxNotification);
    flxNotification.add(flxNotificationBubble);
    flxNotificationBubble.add(imgNotificationBubble);
    flxNotificationBubble.add(imgNotificationIcon);
    flxNotificationBubble.add(lblNotificationText);
    flxNotificationBubble.add(lblNotificationDismiss);
    // Add a tail to the notification bubble (on iPhone only).
    if (applicationManager.getDeviceUtilManager().isIPhone()) {
      var tailPosX = "50%";
      if (currentForm.customFooter.imgMore) {
        var tailCenterX = findWidgetCenterX(currentForm.customFooter.imgMore);
        var notificationLeftX = edgePadding;
        tailPosX = (tailCenterX - notificationLeftX).toString() + "dp";
      }
      var imgNotificationTail = new kony.ui.Image2({
        "id": "imgNotificationTail",
        "top": "45dp",
        "centerX": tailPosX,
        "zIndex": 0,
        "isVisible": true,
        "src": "notificationtail.png"
      }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS
      }, {});
      flxNotification.add(imgNotificationTail);
    }
    // Animation of the notification bubble appearance.
    var transformObject0 = kony.ui.makeAffineTransform();
    transformObject0.scale(0, 0);
    var transformObject100 = kony.ui.makeAffineTransform();
    transformObject100.scale(1, 1);
    flxNotification.animate(
      kony.ui.createAnimation({
        "0": {
          "transform": transformObject0,
          "opacity": 0
        },
        "100": {
          "transform": transformObject100,
          "opacity": 1
        }
      }), {
        "duration": 0.3,
        "fillMode": kony.anim.FILL_MODE_NONE
      }, { }
    );
  };
  /**
   * Get the feature announcement configuration.
   * @memberOf Engage_PresentationController
   */
  Engage_PresentationController.prototype.getFeatureAnnouncementConfiguration = function() {
    return {
      engageAdvertEnabledForNewUsers: true,
      engageAdvertEnabledForExistingUsers: false,
      engageInsertEnabledForNewUsers: true,
      engageInsertEnabledForExistingUsers: false,
      engageInsertLocation: "middle"
    };
  };
  /**
   * Get the unread message count.
   * @memberOf Engage_PresentationController
   * @returns {number} The unread message count.
   */
  Engage_PresentationController.prototype.getUnreadMessageCount = function() {
    return applicationManager.getEngageManager().getUnreadMessageCount();
  };
  /**
   * Function to invoke Engage, provisioning the user first if required.
   * @memberof Engage_PresentationController
   */
  Engage_PresentationController.prototype.invokeEngage = function() {
    var provisioned = applicationManager.getEngageManager().isEngageProvisioned();
    applicationManager.getLoggerManager().log("engage provisioned = " + provisioned);
    if (provisioned !== null && provisioned !== undefined) {
      if (provisioned === true) {
        this.launchEngage();
      } else {
        var provisioningSuccess = function(response) {
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          if (response.success == "true") {
            applicationManager.getLoggerManager().log
              ("Engage provisioning was successful, engageUserId = " + response.engageUserId);
            this.launchEngage();
          } else {
            applicationManager.getLoggerManager().log
              ("Engage provisioning was not successful, response = " + JSON.stringify(response));
            var currentForm = applicationManager.getNavigationManager().currentForm;
            var controller = applicationManager.getPresentationUtility().getController(currentForm, true);
            applicationManager.getDataProcessorUtility().showToastMessageError(controller,
              "Engage user provisioning was not successful, please try again later.");
          }
        };
        var provisioningFailure = function(error) {
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          applicationManager.getLoggerManager().log
            ("Engage provisioning failed, error = " + JSON.stringify(error));
          var currentForm = applicationManager.getNavigationManager().currentForm;
          var controller = applicationManager.getPresentationUtility().getController(currentForm, true);
          applicationManager.getDataProcessorUtility().showToastMessageError(controller,
            "Engage user provisioning failed, please try again later.");
        };
        applicationManager.getPresentationUtility().showLoadingScreen();
        applicationManager.getEngageManager().provisionEngage(
          provisioningSuccess.bind(this),
          provisioningFailure.bind(this)
        );
      }
    }
  };
  /**
   * Function to launch Engage (assumes user provisioning has already occurred).
   * @memberof Engage_PresentationController
   */
  Engage_PresentationController.prototype.launchEngage = function() {
    this.returnForm = applicationManager.getNavigationManager().currentForm;
    var engageAuthModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EngageAuthModule");
    var engageCallbacks = {
      returningCallback: this.onReturnFromEngage.bind(this),
      messagesReadCallback: this.onMessagesRead.bind(this),
      showLoadingScreen: applicationManager.getPresentationUtility().showLoadingScreen,
      dismissLoadingScreen: applicationManager.getPresentationUtility().dismissLoadingScreen
    };
    engageAuthModule.presentationController.onEngageTransition(engageCallbacks);
  };
  /**
   * Processing associated with selection of any menu items pertaining to Engage.
   * @memberof Engage_PresentationController
   * @param {object} targetForm The target form from which the menu is being invoked.
   * @param {string} selectedValue The value selected from the menu.
   * @returns True if an Engage-related menu item was selected and processed, otherwise false.
   */
  Engage_PresentationController.prototype.menuSelection = function(targetForm, selectedValue) {
    if (typeof selectedValue === "object") {
      selectedValue = selectedValue.text;
    }
    if (selectedValue == applicationManager.getConfigurationManager().constants.MENUENGAGE) {
      if (targetForm.flxHamburger) {
        targetForm.flxHamburger.isVisible = false;
      }
      this.invokeEngage();
      return true;
    } else {
      return false;
    }
  };
  /**
   * Processing associated with setup of the menu, to include Engage-related items.
   * @memberof Engage_PresentationController
   * @param {object} targetForm The target form for which the menu is being constructed.
   * @param {array} menuData The array containing setup data for the menu.
   */
  Engage_PresentationController.prototype.menuSetup = function(targetForm, menuData) {
    var engageUnreadCount = this.getUnreadMessageCount();
    this.refreshMenuBadge(targetForm);
    this.checkForPendingMessageNotification();
    for (var i = 0; i < menuData.length; i++) {
      var menuItemText = menuData[i].text;
      if (typeof menuItemText === "object") {
        menuItemText = menuItemText.text;
      }
      if (menuItemText === applicationManager.getConfigurationManager().constants.MENUENGAGE) {
        if (engageUnreadCount > 0) {
          menuData[i].text = { "text": menuItemText, "skin": "sknLbl0a78d1SSPSemiBold26px" };
          menuData[i].backGround = { "isVisible": true };
          menuData[i].info = { "text": engageUnreadCount.toString(), "isVisible": true };
        } else {
          menuData[i].text = menuItemText;
          menuData[i].backGround = { "isVisible": false };
          menuData[i].info = { "isVisible": false };
        }
      }
    }
  };
  /**
   * Function to handle notification from the Engage component that messages have been read.
   * @memberof Engage_PresentationController
   */
  Engage_PresentationController.prototype.onMessagesRead = function() {
    applicationManager.getEngageManager().setUnreadMessageCount(0, true);
  };
  /**
   * Function to perform tasks required after invocation of the Engage coponent.
   * @memberof Engage_PresentationController
   */
  Engage_PresentationController.prototype.onReturnFromEngage = function() {
    // Ensure that unread message count is updated to reflect any messages read.
    applicationManager.getEngageManager().fetchUnreadMessageCount();
    // Return to previously displayed form.
    if (kony.sdk.isNullOrUndefined(this.returnForm)) {
      applicationManager.getModulesPresentationController("AccountModule").showDashboard();
    } else {
      applicationManager.getNavigationManager().navigateTo(this.returnForm);
      this.returnForm = null;
    }
  };
  /**
   * Function to refresh both the application and menu badges.
   * @memberof Engage_PresentationController
   */
  Engage_PresentationController.prototype.refreshBadges = function() {
    // Refresh the application badge (on iOS only).
    if (applicationManager.getDeviceUtilManager().isIPhone()) {
      var unreadMessageCount = this.getUnreadMessageCount();
      var appBadge = (unreadMessageCount > 0) ? unreadMessageCount.toString() : "";
      kony.application.setApplicationBadgeValue(appBadge);
    }
    // Refresh the badge on the menu button, if it's on screen.
    var currentForm = kony.application.getCurrentForm();
    this.refreshMenuBadge(currentForm);
  };
  /**
   * Function to refresh the menu badge.
   * @memberof Engage_PresentationController
   * @param {object} targetForm The target form in which to refresh the menu badge.
   */
  Engage_PresentationController.prototype.refreshMenuBadge = function(targetForm) {
    var unreadMessageCount = this.getUnreadMessageCount();
    var unreadNotifications = applicationManager.getAlertsManager().getUnreadNotifications();
    if (applicationManager.getDeviceUtilManager().isIPhone()) {
      var customFooter = findChildWidget(targetForm, "customFooter");
      var imgMore = findChildWidget(customFooter, "imgMore");
      if (customFooter && imgMore) {
        if (imgMore.src !== "moreunread.png" && unreadMessageCount > 0) {
          imgMore.src = "moreunread.png";
        } else if (imgMore.src === "moreunread.png" && unreadMessageCount === 0) {
          if (kony.sdk.isNullOrUndefined(unreadNotifications) || unreadNotifications === "0") {
            imgMore.src = "more.png";
          }
        }
      }
    } else {
      var customHeader = findChildWidget(targetForm, "customHeader");
      var imgBack = findChildWidget(customHeader, "imgBack");
      if (customHeader && imgBack) {
        if (imgBack.src === "hamburger.png" && unreadMessageCount > 0) {
          imgBack.src = "hamburgerdot.png";
        } else if (imgBack.src === "hamburgerdot.png" && unreadMessageCount === 0) {
          if (kony.sdk.isNullOrUndefined(unreadNotifications) || unreadNotifications === "0") {
            imgBack.src = "hamburger.png";
          }
        }
      }
    }
  };
  return Engage_PresentationController;
});
