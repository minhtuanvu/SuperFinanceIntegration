function AS_Button_gf5c0579d6054354be00cf9dff364b16(eventobject) {
    kony.application.showLoadingScreen(null, "", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false, true, {});
    var authParams = {
        "UserName": "5244911778",
        "Password": "Kony@1234",
        "loginOptions": {
            "isOfflineEnabled": false
        }
    };
    authClient = KNYMobileFabric.getIdentityService("DbxUserLogin");
    authClient.login(authParams, successCallback, errorCallback);

    function successCallback(resSuccess) {
        kony.application.dismissLoadingScreen();
        kony.print(resSuccess);
        var ntf = new kony.mvc.Navigation("frmP2PTransferType");
        ntf.navigate();
    }

    function errorCallback(resError) {
        kony.application.dismissLoadingScreen();
        kony.print(resError);
        alert("Sorry ! Something went wrong, Please try again later")
    }
}