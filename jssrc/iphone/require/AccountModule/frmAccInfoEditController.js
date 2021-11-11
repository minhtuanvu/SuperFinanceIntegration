define("AccountModule/userfrmAccInfoEditController", {
    objRec: '',
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    onNavigate: function(obj) {
        if (obj === undefined) {
            var newObj = {
                "view": "familyCheckingAcc"
            };
            obj = newObj;
        }
        this.objRec = obj;
    },
    txtNickNameTextChange: function() {
        if (this.view.txtNickName.text === "") {
            this.view.btnSave.skin = "sknBtnOnBoardingInactive";
            this.view.btnSave.setEnabled(false);
        } else {
            this.view.btnSave.skin = "sknBtn0095e426pxEnabled";
            this.view.btnSave.setEnabled(true);
        }
    },
    frmEditNickNamePreShow: function() {
        this.view.btnSave.onClick = this.btnSaveOnClick;
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.flxBackOnClick;
        this.view.txtNickName.onTextChange = this.txtNickNameTextChange;
        this.view.txtNickName.onDone = this.btnSaveOnClick;
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        var navigationManager = applicationManager.getNavigationManager();
        var nickName = navigationManager.getCustomInfo("frmAccInfoEdit");
        if (nickName !== null && nickName !== undefined) {
            this.view.txtNickName.text = nickName;
        } else {
            this.view.txtNickName.text = "";
        }
        this.txtNickNameTextChange();
        var currentForm = navigationManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        this.view.txtNickName.setEnabled(true);
        this.view.txtNickName.setFocus(true);
    },
    btnSaveOnClick: function() {
        var nickname = this.view.txtNickName.text;
        var patt = nickname.match(/[a-zA-Z0-9\s]*/);
        if (patt[0] === nickname) {
            var accMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            if (this.view.txtNickName.text !== "" && this.view.txtNickName.text !== null && this.view.txtNickName.text !== undefined) {
                applicationManager.getPresentationUtility().showLoadingScreen();
                accMod.presentationController.editAccountNickName(this.view.txtNickName.text);
            }
        } else {
            this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.invalidNickName"));
        }
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        this.accDetails = navMan.goBack();
    },
    bindGenericError: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    }
});
define("AccountModule/frmAccInfoEditControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_gf9df2332ade4a2a99bc037bbaa18927: function AS_Form_gf9df2332ade4a2a99bc037bbaa18927(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_bee2858cb2d9483aadb2207ce57c3ade: function AS_Form_bee2858cb2d9483aadb2207ce57c3ade(eventobject) {
        var self = this;
        this.view.txtNickName.setEnabled(true);
        this.view.txtNickName.setFocus(true);
    },
    AS_Form_bd5f43b966b644b399683095b3b21d4f: function AS_Form_bd5f43b966b644b399683095b3b21d4f(eventobject) {
        var self = this;
        this.frmEditNickNamePreShow();
    },
    AS_BarButtonItem_dae885c7ddbc44cb946de9bec0b568a2: function AS_BarButtonItem_dae885c7ddbc44cb946de9bec0b568a2(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        this.accDetails = navMan.goBack();
    }
});
define("AccountModule/frmAccInfoEditController", ["AccountModule/userfrmAccInfoEditController", "AccountModule/frmAccInfoEditControllerActions"], function() {
    var controller = require("AccountModule/userfrmAccInfoEditController");
    var controllerActions = ["AccountModule/frmAccInfoEditControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
