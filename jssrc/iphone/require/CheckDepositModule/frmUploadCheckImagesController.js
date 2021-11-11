define("CheckDepositModule/userfrmUploadCheckImagesController", {
    uploadCheckImagesInit: function() {
        var FormValidator = require("FormValidatorManager");
        this.fv = new FormValidator(2);
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.fv.submissionView(this.view.btnContinue);
        this.setCameraProperties();
        this.setInitialUI();
        this.view.CamFront.zIndex = 10;
        this.view.CamBack.zIndex = 10;
        this.view.CamFront.onCapture = this.onFrontCamCapture.bind(this);
        this.view.CamBack.onCapture = this.onBackCamCapture.bind(this);
        this.view.btnReTakeFront.onClick = this.onReTakeFrontClick.bind(this);
        this.view.btnReTakeBack.onClick = this.onReTakeBackClick.bind(this);
        this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.view.btnContinue.zIndex = 10;
        this.view.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
        this.view.customHeader.flxBack.onClick = this.flxBackHeaderOnClick;
        this.renderTitleBar();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    postShow: function() {
        this.setOverlayForm();
    },
    setOverlay: function(type) {
        var self = this;
        if (type == "front") {
            formOverlay.lblFrontText1.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cameraOverlay.frontOfCheck");
            formOverlay.flxCameraButton.onClick = this.takePic.bind(this, "front");
            formOverlay.flxCloseButton.onClick = this.closeCam.bind(this, "front");
        } else {
            formOverlay.lblFrontText1.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cameraOverlay.backOfCheck");
            formOverlay.flxCameraButton.onClick = this.takePic.bind(this, "back");
            formOverlay.flxCloseButton.onClick = this.closeCam.bind(this, "back");
        }
    },
    setOverlayForm: function() {
        var overlayConfig = {
            "captureButtonText": "",
            "startVideoButtonText": "",
            "stopVideoButtonText": "",
            "overlayForm": formOverlay,
            "referenceImageToCrop": formOverlay.imgCropRef,
            "tapAnywhere": false
        };
        this.view.CamBack.overlayConfig = overlayConfig;
        this.view.CamFront.overlayConfig = overlayConfig;
    },
    takePic: function(type) {
        if (type == "front") {
            this.view.CamFront.takePicture();
        } else {
            this.view.CamBack.takePicture();
        }
    },
    closeCam: function(type) {
        if (type == "front") {
            this.view.CamFront.closeCamera();
        } else {
            this.view.CamBack.closeCamera();
        }
    },
    setInitialUI: function() {
        this.fv.checkAndUpdateStatusForNull(0, "");
        this.fv.checkAndUpdateStatusForNull(1, "");
        this.view.flxFrontUploaded.setVisibility(false);
        this.view.flxBackUploaded.setVisibility(false);
        this.view.flxFront.setVisibility(true);
        this.view.flxBack.setVisibility(true);
        var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
        var depObj = checkDepositModule.presentationController.getDepositObjInView();
        if (depObj) {
            if (depObj.checkImage) {
                this.fv.checkAndUpdateStatusForNull(0, "captured");
                this.view.flxFrontUploaded.setVisibility(true);
                this.view.flxFront.setVisibility(false);
            }
            if (depObj.checkImageBack) {
                this.fv.checkAndUpdateStatusForNull(1, "captured");
                this.view.flxBackUploaded.setVisibility(true);
                this.view.flxBack.setVisibility(false);
            }
        }
    },
    renderTitleBar: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var isIphone = deviceUtilManager.isIPhone();
        if (isIphone) {
            this.view.flxHeader.setVisibility(false);
        }
    },
    afterImageCapture: function(orientation) {
        if (orientation === "front") {
            this.view.flxFront.setVisibility(false);
            this.view.flxFrontUploaded.setVisibility(true);
            this.fv.checkAndUpdateStatusForNull(0, "captured");
        } else {
            this.view.flxBack.setVisibility(false);
            this.view.flxBackUploaded.setVisibility(true);
            this.fv.checkAndUpdateStatusForNull(1, "captured");
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    onFrontCamCapture: function(cameraObject) {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
        var isIphone = deviceUtilManager.isIPhone();
        var scope = this;
        if (!isIphone) {
            checkDepositModule.presentationController.commonFunctionForNavigation("frmUploadCheckImages");
        }
        applicationManager.getPresentationUtility().showLoadingScreen();
        var rawBytes = scope.view.CamFront.rawBytes;
        var imageObject = kony.image.createImage(rawBytes);
        imageObject.scale(0.3);
        imageObject.compress(0.3);
        var rawBytesAfterCompression = imageObject.getImageAsRawBytes();
        var base64Str = kony.convertToBase64(rawBytesAfterCompression);
        if (isIphone) {
            scope.view.imgCheckFront.base64 = base64Str;
        } else {
            scope.view.imgCheckFront.rawBytes = rawBytes;
        }
        this.view.forceLayout();
        checkDepositModule.presentationController.captureCheckImage(base64Str, "front");
    },
    onBackCamCapture: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
        var isIphone = deviceUtilManager.isIPhone();
        var scope = this;
        if (!isIphone) {
            checkDepositModule.presentationController.commonFunctionForNavigation("frmUploadCheckImages");
        }
        applicationManager.getPresentationUtility().showLoadingScreen();
        var rawBytes = scope.view.CamBack.rawBytes;
        var imageObject = kony.image.createImage(rawBytes);
        imageObject.scale(0.3);
        imageObject.compress(0.3);
        var rawBytesAfterCompression = imageObject.getImageAsRawBytes();
        var base64Str = kony.convertToBase64(rawBytesAfterCompression);
        if (isIphone) {
            scope.view.imgCheckBack.base64 = base64Str;
        } else {
            scope.view.imgCheckBack.rawBytes = rawBytes;
        }
        this.view.forceLayout();
        checkDepositModule.presentationController.captureCheckImage(base64Str, "back");
    },
    btnContinueOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
        checkDepositModule.presentationController.navigateToConfirmTransfer();
    },
    flxBackHeaderOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    onCancelClick: function() {
        var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
        checkDepositModule.presentationController.cancelDeposit();
    },
    onReTakeFrontClick: function() {
        this.setOverlay("front");
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var isIphone = deviceUtilManager.isIPhone();
        if (isIphone) this.view.CamFront.takePicture();
        else this.view.CamFront.openCamera();
        //custom metric API to generate Reports
        KNYMetricsService.sendCustomMetrics("frmUploadCheckImages", {
            "Check Retake": "Check Image Retake"
        });
    },
    onReTakeBackClick: function() {
        this.setOverlay("back");
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var isIphone = deviceUtilManager.isIPhone();
        if (isIphone) this.view.CamBack.takePicture();
        else this.view.CamBack.openCamera();
        //custom metric API to generate Reports
        KNYMetricsService.sendCustomMetrics("frmUploadCheckImages", {
            "Check Retake": "Check Image Retake"
        });
    },
    setCameraProperties: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var isIphone = deviceUtilManager.isIPhone();
        this.view.CamFront.cameraOptions = {
            hideControlBar: true
        };
        this.view.CamBack.cameraOptions = {
            hideControlBar: true
        };
        if (isIphone) {
            var transform = kony.ui.makeAffineTransform();
            var devManager = applicationManager.getDeviceUtilManager();
            if (devManager.isFaceIdSupported() || kony.os.deviceInfo().model == "iPhone XS") {
                transform.scale(2.0, 2.0);
            } else {
                transform.scale(1.4, 1.4);
            }
            this.view.CamFront.previewTransform = transform;
            this.view.CamBack.previewTransform = transform;
        }
    }
});
define("CheckDepositModule/frmUploadCheckImagesControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Camera_if5da83529d4451f8462115a8d154502: function AS_Camera_if5da83529d4451f8462115a8d154502(eventobject, x, y) {
        var self = this;
        this.setOverlay("back");
    },
    AS_Camera_a847175c63034d0a8c83aa153bdd1ec2: function AS_Camera_a847175c63034d0a8c83aa153bdd1ec2(eventobject, x, y) {
        var self = this;
        this.setOverlay("front");
    },
    AS_Form_def914b2718245b5b2d0b83c0da519f2: function AS_Form_def914b2718245b5b2d0b83c0da519f2(eventobject) {
        var self = this;
        this.uploadCheckImagesInit();
    },
    AS_Form_e19fbdaf3b8543e8b33ec5e4305f63d6: function AS_Form_e19fbdaf3b8543e8b33ec5e4305f63d6(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_a74ff7045db247d1a941bde631a5ec70: function AS_Form_a74ff7045db247d1a941bde631a5ec70(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_ee4b82ab4d16438d80d5406f0773ec15: function AS_BarButtonItem_ee4b82ab4d16438d80d5406f0773ec15(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("CheckDepositModule/frmUploadCheckImagesController", ["CheckDepositModule/userfrmUploadCheckImagesController", "CheckDepositModule/frmUploadCheckImagesControllerActions"], function() {
    var controller = require("CheckDepositModule/userfrmUploadCheckImagesController");
    var controllerActions = ["CheckDepositModule/frmUploadCheckImagesControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
