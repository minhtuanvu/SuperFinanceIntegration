/**
 * kony_serverevents version 9.2.13
 */
/**
 * Created by Inderpreet Kaur on 3/1/2020.
 * Copyright © 2020 Kony. All rights reserved.
 */
function initializeWebSocketConstants() {
    if (typeof(kony) === "undefined") {
        kony = {};
    }
    if (typeof(kony.sdk) === "undefined") {
        kony.sdk = {};
    }
    kony.sdk.websocket = kony.sdk.websocket || {};
    kony.sdk.websocket.constants = kony.sdk.websocket.constants || {};
    kony.sdk.websocket.constants = {
        BOOLEAN_TRUE: true,
        X_KONY_AUTHORIZATION: "X-Kony-Authorization",
        // Callback Type Constants
        WEBSOCKET_TYPE_ONERROR: "onError",
        WEBSOCKET_TYPE_ONCLOSE: "onClose",
        WEBSOCKET_TYPE_ONMESSAGE: "onMessage",
        WEBSOCKET_TYPE_ONPUBLISH: "onPublish",
        WEBSOCKET_TYPE_ONSUBSCRIBE: "onSubscribe",
        WEBSOCKET_TYPE_ONUNSUBSCRIBE: "onUnsubscribe",
        WEBSOCKET_TYPE_ONPUBLISH_ERROR: "onPublishError",
        WEBSOCKET_TYPE_ONSUBSCRIBE_ERROR: "onSubscribeError",
        WEBSOCKET_TYPE_ONUNSUBSCRIBE_ERROR: "onUnsubscribeError",
        WEBSOCKET_PUBLISH_EVENTS: "events",
        WEBSOCKET_SUBSCRIBE_EVENTS: "subscribe",
        WEBSOCKET_UNSUBSCRIBE_EVENTS: "unsubscribe",
        // Server Response Constants
        WEBSOCKET_RESPONSE_CODE: "code",
        WEBSOCKET_RESPONSE_MESSAGE: "message",
        WEBSOCKET_RESPONSE_FAILED_EVENTS: "failedTopics",
        WEBSOCKET_RESPONSE_SUCCESSFULL_EVENTS: "successTopics",
        // Websocket log messages
        SERVER_EVENTS_NO_INTERNET_MESSAGE: "No internet available, please check device connectivity.",
        SERVER_EVENTS_NOT_INITIALISED_MESSAGE: "Websocket is not initialised, please call setupServerEvents first."
    };
}
/**
 * Created by Inderpreet Kaur on 3/1/2020.
 * Copyright © 2020 Kony. All rights reserved.
 */
function initializeWebSocketHandler() {
    kony.sdk.websocket = kony.sdk.websocket || {};
    /**
     *    Generates and returns websocket url.
     */
    kony.sdk.websocket.generateServerEventsURL = function() {
        if (kony.sdk.util.isNullOrUndefinedOrEmptyObject(konyRef.serverEventsUrl)) {
            kony.sdk.logsdk.error("KonyWebSocketManager::generateServerEventsURL:: serverEventsUrl is null or undefined");
            return "";
        }
        var url = konyRef.serverEventsUrl;
        var authToken = konyRef.currentClaimToken;
        if (!kony.sdk.util.isNullOrUndefinedOrEmptyObject(authToken)) {
            authToken = kony.sdk.getCurrentInstance().currentClaimToken;
            if (!kony.sdk.util.isNullOrUndefinedOrEmptyObject(authToken)) {
                url = url + "?" + kony.sdk.websocket.constants.X_KONY_AUTHORIZATION + "=" + authToken;
            } else {
                kony.sdk.logsdk.error("KonyWebSocketManager::generateServerEventsURL:: authToken is null or undefined");
                return "";
            }
        }
        return url;
    };
    // iOS Web socket native bindings
    kony.sdk.websocket.setupServerEvents = function(url, onMessage, onError, onClose, setupOptions) {
        var LOG_PREFIX = "kony.sdk.webSocket.setupServerEvents";
        kony.sdk.logsdk.trace(" Entering " + LOG_PREFIX);
        var KonyWebSocketObj = kony.sdk.KonyWebSocketClasses.import();
        var KonyWebSocketInstance = KonyWebSocketObj.KonyWebSocket.alloc().jsinit();
        KonyWebSocketInstance.setupServerEventsOnMessageOnErrorOnCloseSetupOptions(url, onMessage, onError, onClose, setupOptions);
    };
    kony.sdk.websocket.publishServerEvents = function(events, onPublish, publishOptions) {
        var LOG_PREFIX = "kony.sdk.webSocket.publishServerEvents";
        kony.sdk.logsdk.trace(" Entering " + LOG_PREFIX);
        var KonyWebSocketObj = kony.sdk.KonyWebSocketClasses.import();
        var KonyWebSocketInstance = KonyWebSocketObj.KonyWebSocket.alloc().jsinit();
        KonyWebSocketInstance.publishServerEventsOnPublishPublishOptions(events, onPublish, publishOptions);
    };
    kony.sdk.websocket.subscribeServerEvents = function(events, onSubscribe, subscribeOptions) {
        var LOG_PREFIX = "kony.sdk.webSocket.subscribeServerEvents";
        kony.sdk.logsdk.trace(" Entering " + LOG_PREFIX);
        var KonyWebSocketObj = kony.sdk.KonyWebSocketClasses.import();
        var KonyWebSocketInstance = KonyWebSocketObj.KonyWebSocket.alloc().jsinit();
        KonyWebSocketInstance.subscribeServerEventsOnSubscribeSubscribeOptions(events, onSubscribe, subscribeOptions);
    };
    kony.sdk.websocket.unSubscribeServerEvents = function(events, onUnsubscribe, unSubscribeOptions) {
        var LOG_PREFIX = "kony.sdk.webSocket.unSubscribeServerEvents";
        kony.sdk.logsdk.trace(" Entering " + LOG_PREFIX);
        var KonyWebSocket = kony.sdk.KonyWebSocketClasses.import();
        var KonyWebSocketInstance = KonyWebSocket.KonyWebSocket.alloc().jsinit();
        KonyWebSocketInstance.unSubscribeServerEventsOnUnsubscribeUnSubscribeOptions(events, onUnsubscribe, unSubscribeOptions);
    };
    kony.sdk.websocket.isWebSocketAvailable = function() {
        var LOG_PREFIX = "kony.sdk.webSocket.isWebSocketAvailable";
        kony.sdk.logsdk.trace(" Entering " + LOG_PREFIX);
        var KonyWebSocket = kony.sdk.KonyWebSocketClasses.import();
        var KonyWebSocketInstance = KonyWebSocket.KonyWebSocket.alloc().jsinit();
        return KonyWebSocketInstance.isWebSocketAvailable();
    };
}
/**
 * Created by Inderpreet Kaur on 3/1/2020.
 * Copyright © 2020 Kony. All rights reserved.
 */
if (typeof(kony) === "undefined") {
    kony = {};
}
if (typeof(kony.sdk) === "undefined") {
    kony.sdk = {};
}
// kony.serverEvents is a flag to know whether KonyServerEvents.js file is loaded or not.
kony.serverEvents = true;

function initializeServerEvents() {
    var onErrorCallback = null;
    const ErrorCodes = {
        ON_ERROR: 7201,
        ON_PUBLISH_ERROR: 6205,
        ON_UNSUBSCRIBE_ERROR: 6208,
        ON_SUBS_ERROR: 6202
    };
    Object.freeze(ErrorCodes);
    var callbackErrorInvoker = function(type, message, callback) {
        var finalMessage = {};
        switch (type) {
            case kony.sdk.websocket.constants.WEBSOCKET_TYPE_ONERROR:
                finalMessage.code = ErrorCodes.ON_ERROR;
                break;
            case kony.sdk.websocket.constants.WEBSOCKET_TYPE_ONPUBLISH_ERROR:
                finalMessage.code = ErrorCodes.ON_PUBLISH_ERROR;
                break;
            case kony.sdk.websocket.constants.WEBSOCKET_TYPE_ONUNSUBSCRIBE_ERROR:
                finalMessage.code = ErrorCodes.ON_UNSUBSCRIBE_ERROR;
                break;
            case kony.sdk.websocket.constants.WEBSOCKET_TYPE_ONSUBSCRIBE_ERROR:
                finalMessage.code = ErrorCodes.ON_SUBS_ERROR;
                break;
            default:
                finalMessage.code = ErrorCodes.ON_ERROR;
                break;
        }
        finalMessage.message = message;
        if ((!callback || (finalMessage.code === ErrorCodes.ON_ERROR)) && onErrorCallback) {
            finalMessage.code = ErrorCodes.ON_ERROR;
            kony.sdk.verifyAndCallClosure(onErrorCallback, JSON.stringify(finalMessage));
        } else if (callback) {
            kony.sdk.verifyAndCallClosure(callback, JSON.stringify(finalMessage));
        }
    };
    /**
     * Create events string with key and value
     * @param eventKey the key to be used for events object
     * @param events the value to be used for events object
     * @returns {string}
     */
    var createEventsString = function(eventKey, events) {
        var eventsObj = {};
        eventsObj[eventKey] = events;
        try {
            var eventsString = JSON.stringify(eventsObj);
        } catch (error) {
            throw error;
        }
        return eventsString;
    };
    /**
     * Method setup Server Events
     *
     * @param setupOptions    setup server events options
     */
    kony.sdk.prototype.setupServerEvents = function(setupOptions) {
        if (!kony.sdk.util.isNullOrUndefinedOrEmptyObject(setupOptions)) {
            if (!setupOptions.onFailureCallback) {
                kony.sdk.logsdk.error("KonyServerEvents::setupServerEvents:: onFailureCallback callback is null or undefined");
                return;
            } else {
                onErrorCallback = setupOptions.onFailureCallback;
            }
            if (!setupOptions.onEventCallback) {
                kony.sdk.logsdk.error("KonyServerEvents::setupServerEvents:: onEventCallback callback is null or undefined");
                callbackErrorInvoker(kony.sdk.websocket.constants.WEBSOCKET_TYPE_ONERROR, "onEventCallback callback is null or undefined.", onErrorCallback);
                return;
            }
            if (!setupOptions.onCloseCallback) {
                setupOptions.onCloseCallback = null;
            }
        } else {
            kony.sdk.logsdk.error("KonyServerEvents::setupServerEvents:: setupOptions are null or undefined");
            return;
        }
        if (!kony.sdk.isNetworkAvailable()) {
            kony.sdk.logsdk.error("KonyServerEvents::setupServerEvents:: " + kony.sdk.websocket.constants.SERVER_EVENTS_NO_INTERNET_MESSAGE);
            callbackErrorInvoker(kony.sdk.websocket.constants.WEBSOCKET_TYPE_ONERROR, kony.sdk.websocket.constants.SERVER_EVENTS_NO_INTERNET_MESSAGE, onErrorCallback);
            return;
        }
        kony.sdk.claimsRefresh(function() {
            var url = kony.sdk.websocket.generateServerEventsURL();
            kony.sdk.websocket.setupServerEvents(url, setupOptions.onEventCallback, setupOptions.onFailureCallback, setupOptions.onCloseCallback, setupOptions);
        }, function(error) {
            kony.sdk.logsdk.error("KonyServerEvents::setupServerEvents::onFailure Error:", error);
            callbackErrorInvoker(kony.sdk.websocket.constants.WEBSOCKET_TYPE_ONERROR, error, onErrorCallback);
        });
    };
    /**
     * Publish events to the server.
     *
     * example : [{"topic" : "transaction/deposit",
                       "data" : { "amount": "1500",
                       "user": "clientevents",
                       "account": "1000",
                       "transaction": "deposit" }}]
     * @param events         events string to be published to the server
     * @param publishOptions additional options for publishing
     */
    kony.sdk.prototype.publishServerEvents = function(events, publishOptions) {
        if (kony.sdk.util.isNullOrUndefinedOrEmptyObject(publishOptions)) {
            publishOptions = {};
        }
        if (!kony.sdk.isNetworkAvailable()) {
            kony.sdk.logsdk.error("KonyServerEvents::publishServerEvents:: " + kony.sdk.websocket.constants.SERVER_EVENTS_NO_INTERNET_MESSAGE);
            callbackErrorInvoker(kony.sdk.websocket.constants.WEBSOCKET_TYPE_ONERROR, kony.sdk.websocket.constants.SERVER_EVENTS_NO_INTERNET_MESSAGE, onErrorCallback);
            return;
        }
        if (kony.sdk.websocket && !kony.sdk.websocket.isWebSocketAvailable()) {
            kony.sdk.logsdk.error("KonyServerEvents::publishServerEvents:: " + kony.sdk.websocket.constants.SERVER_EVENTS_NOT_INITIALISED_MESSAGE);
            callbackErrorInvoker(kony.sdk.websocket.constants.WEBSOCKET_TYPE_ONPUBLISH_ERROR, kony.sdk.websocket.constants.SERVER_EVENTS_NOT_INITIALISED_MESSAGE, publishOptions.onPublishCallback);
            return;
        }
        if (kony.sdk.util.isNullOrUndefinedOrEmptyObject(events)) {
            kony.sdk.logsdk.error("KonyServerEvents::publishServerEvents:: Events to be published are null or undefined or empty.");
            callbackErrorInvoker(kony.sdk.websocket.constants.WEBSOCKET_TYPE_ONPUBLISH_ERROR, "Events to be published are null or undefined or empty.", publishOptions.onPublishCallback);
            return;
        }
        try {
            var eventsString = createEventsString(kony.sdk.websocket.constants.WEBSOCKET_PUBLISH_EVENTS, events);
        } catch (error) {
            kony.sdk.logsdk.error("KonyServerEvents::publishServerEvents:: Error : ", error);
            callbackErrorInvoker(kony.sdk.websocket.constants.WEBSOCKET_TYPE_ONPUBLISH_ERROR, error, publishOptions.onPublishCallback);
            return;
        }
        if (publishOptions.onPublishCallback) {
            kony.sdk.websocket.publishServerEvents(eventsString, publishOptions.onPublishCallback, publishOptions);
        } else {
            kony.sdk.websocket.publishServerEvents(eventsString, null, publishOptions);
        }
    };
    /**
     * Subscribe to server events.
     *
     * example : ["transaction/deposit",
     *            "transaction/withdraw"]
     * @param events            events string to be sent to the server
     * @param subscribeOptions additional options for subscribing
     */
    kony.sdk.prototype.subscribeServerEvents = function(events, subscribeOptions) {
        if (kony.sdk.util.isNullOrUndefinedOrEmptyObject(subscribeOptions)) {
            subscribeOptions = {};
        }
        if (!kony.sdk.isNetworkAvailable()) {
            kony.sdk.logsdk.error("KonyServerEvents::subscribeServerEvents:: " + kony.sdk.websocket.constants.SERVER_EVENTS_NO_INTERNET_MESSAGE);
            callbackErrorInvoker(kony.sdk.websocket.constants.WEBSOCKET_TYPE_ONERROR, kony.sdk.websocket.constants.SERVER_EVENTS_NO_INTERNET_MESSAGE, onErrorCallback);
            return;
        }
        if (kony.sdk.websocket && !kony.sdk.websocket.isWebSocketAvailable()) {
            kony.sdk.logsdk.error("KonyServerEvents::subscribeServerEvents:: " + kony.sdk.websocket.constants.SERVER_EVENTS_NOT_INITIALISED_MESSAGE);
            callbackErrorInvoker(kony.sdk.websocket.constants.WEBSOCKET_TYPE_ONSUBSCRIBE_ERROR, kony.sdk.websocket.constants.SERVER_EVENTS_NOT_INITIALISED_MESSAGE, subscribeOptions.onSubscribeCallback);
            return;
        }
        if (kony.sdk.util.isNullOrUndefinedOrEmptyObject(events)) {
            kony.sdk.logsdk.error("KonyServerEvents::subscribeServerEvents:: Events to be subscribed for are null or undefined or empty.");
            callbackErrorInvoker(kony.sdk.websocket.constants.WEBSOCKET_TYPE_ONSUBSCRIBE_ERROR, "Events to be subscribed are null or undefined or empty.", subscribeOptions.onSubscribeCallback);
            return;
        }
        try {
            var eventsString = createEventsString(kony.sdk.websocket.constants.WEBSOCKET_SUBSCRIBE_EVENTS, events);
        } catch (error) {
            kony.sdk.logsdk.error("KonyServerEvents::subscribeServerEvents:: Error : ", error);
            callbackErrorInvoker(kony.sdk.websocket.constants.WEBSOCKET_TYPE_ONSUBSCRIBE_ERROR, error, subscribeOptions.onSubscribeCallback);
            return;
        }
        if (subscribeOptions.onSubscribeCallback) {
            kony.sdk.websocket.subscribeServerEvents(eventsString, subscribeOptions.onSubscribeCallback, subscribeOptions);
        } else {
            kony.sdk.websocket.subscribeServerEvents(eventsString, null, subscribeOptions);
        }
    };
    /**
     * Unsubscribe from server events.
     *
     * example : ["transaction/deposit",
     *            "transaction/withdraw"]
     * @param events             events string to unsubscribe
     * @param unSubscribeOptions additional options to unsubscribe
     */
    kony.sdk.prototype.unSubscribeServerEvents = function(events, unSubscribeOptions) {
        if (kony.sdk.util.isNullOrUndefinedOrEmptyObject(unSubscribeOptions)) {
            unSubscribeOptions = {};
        }
        if (!kony.sdk.isNetworkAvailable()) {
            kony.sdk.logsdk.error("KonyServerEvents::unSubscribeServerEvents:: " + kony.sdk.websocket.constants.SERVER_EVENTS_NO_INTERNET_MESSAGE);
            callbackErrorInvoker(kony.sdk.websocket.constants.WEBSOCKET_TYPE_ONERROR, kony.sdk.websocket.constants.SERVER_EVENTS_NO_INTERNET_MESSAGE, onErrorCallback);
            return;
        }
        if (kony.sdk.websocket && !kony.sdk.websocket.isWebSocketAvailable()) {
            kony.sdk.logsdk.error("KonyServerEvents::unSubscribeServerEvents:: " + kony.sdk.websocket.constants.SERVER_EVENTS_NOT_INITIALISED_MESSAGE);
            callbackErrorInvoker(kony.sdk.websocket.constants.WEBSOCKET_TYPE_ONUNSUBSCRIBE_ERROR, kony.sdk.websocket.constants.SERVER_EVENTS_NOT_INITIALISED_MESSAGE, unSubscribeOptions.onUnsubscribeCallback);
            return;
        }
        if (kony.sdk.util.isNullOrUndefinedOrEmptyObject(events)) {
            if (unSubscribeOptions && unSubscribeOptions.closeConnection && unSubscribeOptions.closeConnection === kony.sdk.websocket.constants.BOOLEAN_TRUE) {
                kony.sdk.websocket.util.closeWebSocket();
                return;
            } else {
                kony.sdk.logsdk.error("KonyServerEvents::unSubscribeServerEvents:: Events to be unsubscribed are null or undefined or empty.");
                callbackErrorInvoker(kony.sdk.websocket.constants.WEBSOCKET_TYPE_ONUNSUBSCRIBE_ERROR, "Events to be unsubscribed are null or undefined or empty.", unSubscribeOptions.onUnsubscribeCallback);
                return;
            }
        }
        try {
            var eventsString = createEventsString(kony.sdk.websocket.constants.WEBSOCKET_UNSUBSCRIBE_EVENTS, events);
        } catch (error) {
            kony.sdk.logsdk.error("KonyServerEvents::unSubscribeServerEvents:: Error : ", error);
            callbackErrorInvoker(kony.sdk.websocket.constants.WEBSOCKET_TYPE_ONUNSUBSCRIBE_ERROR, error, unSubscribeOptions.onUnsubscribeCallback);
            return;
        }
        if (unSubscribeOptions.onUnsubscribeCallback) {
            kony.sdk.websocket.unSubscribeServerEvents(eventsString, unSubscribeOptions.onUnsubscribeCallback, unSubscribeOptions);
        } else {
            kony.sdk.websocket.unSubscribeServerEvents(eventsString, null, unSubscribeOptions);
        }
    };
    // Initialise serverEvents
    initializeWebSocketConstants();
    initializeWebSocketHandler();
}