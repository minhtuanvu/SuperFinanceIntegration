define("CampaignManagement/frmSpecialBonus", function() {
    return function(controller) {
        function addWidgetsfrmSpecialBonus() {
            this.setDefaultUnit(kony.flex.DP);
            var flxParent = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxParent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxParent.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
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
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "left": "34%",
                        "text": "Special Bonus",
                        "top": "4.74%",
                        "width": kony.flex.USE_PREFFERED_SIZE
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxBack.onClick = controller.AS_FlexContainer_b686609ced024f64a93d4c33b08315c6;
            flxHeader.add(customHeader);
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "92%",
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "8%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var lblAboutProduct = new kony.ui.Label({
                "id": "lblAboutProduct",
                "isVisible": true,
                "left": "6.13%",
                "skin": "sknLbl424242SSP28px",
                "text": "Offer Details",
                "textStyle": {},
                "top": "3.12%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgProduct = new kony.ui.Image2({
                "height": "29%",
                "id": "imgProduct",
                "isVisible": true,
                "left": "6.13%",
                "skin": "slImage",
                "src": "details_specialoffer_banner.png",
                "top": "9%",
                "width": "88%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDetails = new kony.ui.Label({
                "height": "10%",
                "id": "lblDetails",
                "isVisible": true,
                "left": "6.40%",
                "skin": "sknLbl424242SSP22px26",
                "text": "We will also provide you with a Savings Plus account where you can earn an incredible 3% interest on deposits over      €1000",
                "textStyle": {},
                "top": "39%",
                "width": "88%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDetails3 = new kony.ui.Label({
                "height": "5%",
                "id": "lblDetails3",
                "isVisible": true,
                "left": "6.13%",
                "skin": "sknLbl424242SSP22px26",
                "text": "On clicking accept and continue, we will create your savings plus account and transfer the €100.",
                "textStyle": {},
                "top": "50%",
                "width": "332dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblDetails2 = new kony.ui.Label({
                "id": "lblDetails2",
                "isVisible": true,
                "left": "6.13%",
                "skin": "sknLbl424242SSP22px26",
                "text": " We appreciate your business.",
                "textStyle": {},
                "top": "57%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnAcceptContinue = new kony.ui.Button({
                "height": "48dp",
                "id": "btnAcceptContinue",
                "isVisible": true,
                "left": "6.13%",
                "onClick": controller.AS_Button_ged08c468ffa41f6acf83d5cfc915cce,
                "skin": "sknBtn0095e426pxEnabled",
                "text": "Accept & Continue",
                "top": "90%",
                "width": "88%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxDetails.add(lblAboutProduct, imgProduct, lblDetails, lblDetails3, lblDetails2, btnAcceptContinue);
            flxParent.add(flxHeader, flxDetails);
            this.add(flxParent);
        };
        return [{
            "addWidgets": addWidgetsfrmSpecialBonus,
            "enabledForIdleTimeout": true,
            "id": "frmSpecialBonus",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmf9f9f9"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});