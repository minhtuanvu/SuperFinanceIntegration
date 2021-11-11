define(function() {
    function LoginUtility() {}
    LoginUtility.prototype.detectDynamicInstrumentation = function() {};
    LoginUtility.prototype.showLoadingScreen = function() {
        kony.application.showLoadingScreen(null, "", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    };
    LoginUtility.prototype.dismissLoadingScreen = function() {
        kony.application.dismissLoadingScreen();
    };
    LoginUtility.prototype.getDeviceName = function() {
        var device = kony.os.deviceInfo().name;
        if (device === "iPhone" || device === "iPad") return "iPhone";
        else return device;
    };
    /**
     * This function checks whether the userName is masked or not
     * @param {string} userName entered username in user field
     * @returns {boolean}  true if the username is masked ,false if the username is not masked
     */
    LoginUtility.prototype.isUserNameMasked = function(userName) {
        userName = userName.substring(3, userName.length - 2);
        for (var i = 0; i < userName.length; i++) {
            if (userName.charAt(i) !== '*') {
                return false;
            }
        }
        return true;
    };
    /**
     * Method to mask  and return the username
     * @param {string} userName - user name
     * @returns {string} maskedUserName - masked user name
     */
    LoginUtility.prototype.maskUserName = function(userName) {
        var maskedUserName = '';
        var firstThree = userName.substring(0, 3);
        var lastTwo = userName.substring(userName.length - 2, userName.length);
        var xLength = userName.length - 5;
        var maskString = '';
        for (var i = 0; i < xLength; i++) {
            maskString = maskString + '*';
        }
        maskedUserName = firstThree + maskString + lastTwo;
        return maskedUserName;
    };
    return LoginUtility;
});