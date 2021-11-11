define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_f7fa01f6196a476bab10b8b1a1f46fd6: function AS_Button_f7fa01f6196a476bab10b8b1a1f46fd6(eventobject) {
        var self = this;
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.checkAppinit = true;
        authMode.presentationController.commonFunctionForNavigation("frmEnrollActivateProfile");
    },
    AS_Button_e871bfd24cd74f03b0880c9f934f9980: function AS_Button_e871bfd24cd74f03b0880c9f934f9980(eventobject) {
        var self = this;
        this.onLocateUSClick();
    },
    AS_Button_ddca20b68415486faf31bad9fd1fa798: function AS_Button_ddca20b68415486faf31bad9fd1fa798(eventobject) {
        var self = this;
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.checkAppinit = true;
        authMode.presentationController.commonFunctionForNavigation("frmSupport");
    },
    AS_FlexContainer_e8059ee060174b45b4f31a06f675663c: function AS_FlexContainer_e8059ee060174b45b4f31a06f675663c(eventobject) {
        var self = this;
        this.customAlertPopUpFlxCancelOnClick();
        //to enable the screen
        this.view.flxWelcome.setEnabled(true);
        this.view.flxContent.setEnabled(true);
        this.view.flxFooter.setEnabled(true);
    },
    AS_FlexContainer_g4eafa9b97c74a1c81c2eed992281565: function AS_FlexContainer_g4eafa9b97c74a1c81c2eed992281565(eventobject) {
        var self = this;
        this.navToNUOPhone();
    },
    AS_Form_i93d45a3a71a4e18b4c0123ddd1ff557: function AS_Form_i93d45a3a71a4e18b4c0123ddd1ff557(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_eb9b89592ac242958770cc625d8d058b: function AS_Form_eb9b89592ac242958770cc625d8d058b(eventobject) {
        var self = this;
        return self.frmLoginPreShow.call(this);
    },
    AS_Image_jd291611a9c34167af6f8b4970001df9: function AS_Image_jd291611a9c34167af6f8b4970001df9(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 1);
    },
    AS_Image_c3d9c988cf0d49bd8945b5190c359853: function AS_Image_c3d9c988cf0d49bd8945b5190c359853(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 2);
    },
    AS_Image_caf642f394ec4dc6ac32e850b6890c91: function AS_Image_caf642f394ec4dc6ac32e850b6890c91(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 3);
    },
    AS_Image_h2eb335453f64e20b873e1581f6ca411: function AS_Image_h2eb335453f64e20b873e1581f6ca411(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 4);
    },
    AS_Image_b6447e350f804c3198447f6ef626956c: function AS_Image_b6447e350f804c3198447f6ef626956c(eventobject, imagesrc, issuccess) {
        var self = this;
        this.onAdDownloadComplete(issuccess, 5);
    },
    AS_UWI_c879a677a36e49a5bb4e677f7b9de35b: function AS_UWI_c879a677a36e49a5bb4e677f7b9de35b(enteredUsername) {
        var self = this;
        return self.forgotNavigation.call(this, enteredUsername);
    },
    AS_UWI_c92847fddf334e4ea77acad963cfb155: function AS_UWI_c92847fddf334e4ea77acad963cfb155() {
        var self = this;
        return self.hideFlxDashboard.call(this);
    },
    AS_UWI_j4838f66c9b04c4fa5401fe4b285bc15: function AS_UWI_j4838f66c9b04c4fa5401fe4b285bc15() {
        var self = this;
        return self.animateflxContentAndWelcomeFlexBack.call(this);
    },
    AS_UWI_c84d1f445dcc400980f1e7b38e3ae368: function AS_UWI_c84d1f445dcc400980f1e7b38e3ae368() {
        var self = this;
        return self.tbxOnTouchStart.call(this);
    },
    AS_UWI_a5e6e86715694f53980d99d1d774cc76: function AS_UWI_a5e6e86715694f53980d99d1d774cc76(loginSuccessObj) {
        var self = this;
        return self.loginSuccessNavigate.call(this, loginSuccessObj);
    },
    AS_UWI_h1921d30f65c4565b0725ffda75ecd92: function AS_UWI_h1921d30f65c4565b0725ffda75ecd92(errorData) {
        var self = this;
        return self.setErrorStatus.call(this, errorData);
    }
});