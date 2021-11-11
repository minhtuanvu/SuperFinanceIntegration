define("CheckDepositModule/frmUploadCheckImages", function() {
    return function(controller) {
        function addWidgetsfrmUploadCheckImages() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
                "height": "100%",
                "id": "customHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "btnRight": {
                        "isVisible": true,
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel")
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.checkDeposit.uploadCheckImg")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxFront = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "150dp",
                "id": "flxFront",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "CopyslFbox0h7a4fdf9058043",
                "top": "45dp",
                "width": "200dp",
                "zIndex": 1
            }, {}, {});
            flxFront.setDefaultUnit(kony.flex.DP);
            var CamFront = new kony.ui.Camera({
                "cameraSource": constants.CAMERA_SOURCE_REAR,
                "compressionLevel": 20,
                "focusSkin": "slCamera",
                "height": "100%",
                "id": "CamFront",
                "isVisible": true,
                "left": "0dp",
                "onTouchStart": controller.AS_Camera_a847175c63034d0a8c83aa153bdd1ec2,
                "skin": "slCamera",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_INMEMORY,
                "enableOverlay": true,
                "enablePhotoCropFeature": false,
                "overlayConfig": {
                    "captureButtonText": "",
                    "startVideoButtonText": "",
                    "stopVideoButtonText": "",
                    "tapAnywhere": false
                },
                "cameraOptions": {
                    "hideControlBar": true,
                    "flashMode": constants.FLASH_MODE_AUTO
                }
            });
            var flxFrontContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFrontContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFrontContainer.setDefaultUnit(kony.flex.DP);
            var imgFront = new kony.ui.Image2({
                "centerX": "50%",
                "height": "35dp",
                "id": "imgFront",
                "isVisible": true,
                "skin": "slImage",
                "src": "camera.png",
                "top": "45dp",
                "width": "45dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblFront = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblFront",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.checkDeposit.front"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxFrontContainer.add(imgFront, lblFront);
            flxFront.add(CamFront, flxFrontContainer);
            var flxFrontUploaded = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "150dp",
                "id": "flxFrontUploaded",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "CopyslFbox0h7a4fdf9058043",
                "top": "45dp",
                "width": "200dp",
                "zIndex": 1
            }, {}, {});
            flxFrontUploaded.setDefaultUnit(kony.flex.DP);
            var imgCheckFront = new kony.ui.Image2({
                "bottom": "61dp",
                "centerX": "50%",
                "height": "81dp",
                "id": "imgCheckFront",
                "isVisible": true,
                "skin": "slImage",
                "src": "checksmall.png",
                "width": "180dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblFrontUploaded = new kony.ui.Label({
                "bottom": "42dp",
                "centerX": "50%",
                "id": "lblFrontUploaded",
                "isVisible": true,
                "skin": "sknLblA0A0A0SSP20px",
                "text": kony.i18n.getLocalizedString("kony.mb.checkDeposit.front"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperatorFront = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "35dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorFront",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperatorFront.setDefaultUnit(kony.flex.DP);
            flxSeperatorFront.add();
            var btnReTakeFront = new kony.ui.Button({
                "bottom": "0dp",
                "focusSkin": "sknBtn0095e424px",
                "height": "35dp",
                "id": "btnReTakeFront",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e424px",
                "text": kony.i18n.getLocalizedString("kony.mb.checkDeposit.retake"),
                "width": "100%",
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFrontUploaded.add(imgCheckFront, lblFrontUploaded, flxSeperatorFront, btnReTakeFront);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "30dp",
                "width": "88%",
                "zIndex": 3
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "150dp",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "CopyslFbox0h7a4fdf9058043",
                "top": "30dp",
                "width": "200dp",
                "zIndex": 1
            }, {}, {});
            flxBack.setDefaultUnit(kony.flex.DP);
            var CamBack = new kony.ui.Camera({
                "cameraSource": constants.CAMERA_SOURCE_REAR,
                "compressionLevel": 20,
                "focusSkin": "slCamera",
                "height": "100%",
                "id": "CamBack",
                "isVisible": true,
                "left": "0dp",
                "onTouchStart": controller.AS_Camera_if5da83529d4451f8462115a8d154502,
                "skin": "slCamera",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_INMEMORY,
                "enableOverlay": true,
                "enablePhotoCropFeature": false,
                "overlayConfig": {
                    "captureButtonText": "",
                    "startVideoButtonText": "",
                    "stopVideoButtonText": "",
                    "tapAnywhere": false
                },
                "cameraOptions": {
                    "hideControlBar": true,
                    "flashMode": constants.FLASH_MODE_AUTO
                }
            });
            var flxBackCont = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBackCont",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBackCont.setDefaultUnit(kony.flex.DP);
            var imgBack = new kony.ui.Image2({
                "centerX": "50%",
                "height": "35dp",
                "id": "imgBack",
                "isVisible": true,
                "skin": "slImage",
                "src": "camera.png",
                "top": "45dp",
                "width": "45dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblBack = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblBack",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.checkDeposit.back"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxBackCont.add(imgBack, lblBack);
            flxBack.add(CamBack, flxBackCont);
            var flxBackUploaded = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "150dp",
                "id": "flxBackUploaded",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "CopyslFbox0h7a4fdf9058043",
                "top": "30dp",
                "width": "200dp",
                "zIndex": 1
            }, {}, {});
            flxBackUploaded.setDefaultUnit(kony.flex.DP);
            var imgCheckBack = new kony.ui.Image2({
                "bottom": "61dp",
                "centerX": "50%",
                "height": "81dp",
                "id": "imgCheckBack",
                "isVisible": true,
                "skin": "slImage",
                "src": "checksmall.png",
                "width": "180dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblBackUploaded = new kony.ui.Label({
                "bottom": "42dp",
                "centerX": "50%",
                "id": "lblBackUploaded",
                "isVisible": true,
                "skin": "sknLblA0A0A0SSP20px",
                "text": kony.i18n.getLocalizedString("kony.mb.checkDeposit.back"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperatorBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "35dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperatorBack.setDefaultUnit(kony.flex.DP);
            flxSeperatorBack.add();
            var btnReTakeBack = new kony.ui.Button({
                "bottom": "0dp",
                "focusSkin": "sknBtn0095e424px",
                "height": "35dp",
                "id": "btnReTakeBack",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e424px",
                "text": kony.i18n.getLocalizedString("kony.mb.checkDeposit.retake"),
                "width": "100%",
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBackUploaded.add(imgCheckBack, lblBackUploaded, flxSeperatorBack, btnReTakeBack);
            flxMain.add(flxFront, flxFrontUploaded, flxSeperator, flxBack, flxBackUploaded);
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(flxHeader, flxMain, btnContinue);
        };
        return [{
            "addWidgets": addWidgetsfrmUploadCheckImages,
            "enabledForIdleTimeout": true,
            "id": "frmUploadCheckImages",
            "init": controller.AS_Form_def914b2718245b5b2d0b83c0da519f2,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_e19fbdaf3b8543e8b33ec5e4305f63d6,
            "preShow": function(eventobject) {
                controller.AS_Form_a74ff7045db247d1a941bde631a5ec70(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.checkDeposit.uploadCheckImg")
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "sknTitle1a98ffffffff30px",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});