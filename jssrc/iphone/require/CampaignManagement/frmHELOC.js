define("CampaignManagement/frmHELOC", function() {
    return function(controller) {
        function addWidgetsfrmHELOC() {
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
                        "left": "32%",
                        "text": "Home Equity LOC",
                        "top": "4.74%",
                        "width": kony.flex.USE_PREFFERED_SIZE
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxBack.onClick = controller.AS_FlexContainer_cedb852dbd29422a9d30175122cabedb;
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
                "text": "About Product",
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
                "height": "27%",
                "id": "imgProduct",
                "isVisible": true,
                "left": "6.13%",
                "skin": "slImage",
                "src": "heloc_product.png",
                "top": "8%",
                "width": "88%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDetails = new kony.ui.Label({
                "height": "10.50%",
                "id": "lblDetails",
                "isVisible": true,
                "left": "6.40%",
                "skin": "sknLbl424242SSP22px26",
                "text": "You can find a Home which is right for you buying, refinancing or just dreaming, we are here to help you to with all of your home needs.",
                "textStyle": {},
                "top": "36%",
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
            var lblAdditionalFeatures = new kony.ui.Label({
                "id": "lblAdditionalFeatures",
                "isVisible": true,
                "left": "6.13%",
                "skin": "sknLbl424242SSP28px",
                "text": "Additional Features",
                "textStyle": {},
                "top": "52%",
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
            var flxProductDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "16.02%",
                "id": "flxProductDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6.13%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "57%",
                "width": "88%",
                "zIndex": 1
            }, {}, {});
            flxProductDetails.setDefaultUnit(kony.flex.DP);
            var lblHeaderOneDetails = new kony.ui.Label({
                "height": "15dp",
                "id": "lblHeaderOneDetails",
                "isVisible": true,
                "left": "11dp",
                "skin": "sknLbl424242SSP22px26",
                "text": "Great personalized interest rates",
                "textStyle": {},
                "top": "0dp",
                "width": "250dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblHeaderTwoDetails = new kony.ui.Label({
                "height": "16dp",
                "id": "lblHeaderTwoDetails",
                "isVisible": true,
                "left": "11dp",
                "skin": "sknLbl424242SSP22px26",
                "text": "Loan to value up to 100%",
                "textStyle": {},
                "top": "19dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblHeaderThreeDetails = new kony.ui.Label({
                "height": "16dp",
                "id": "lblHeaderThreeDetails",
                "isVisible": true,
                "left": "11dp",
                "skin": "sknLbl424242SSP22px26",
                "text": "Potential tax benefits",
                "textStyle": {},
                "top": "40dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblHeaderFourDetails = new kony.ui.Label({
                "height": "17dp",
                "id": "lblHeaderFourDetails",
                "isVisible": true,
                "left": "11dp",
                "skin": "sknLbl424242SSP22px26",
                "text": "Personal advisor to guide your loan",
                "textStyle": {},
                "top": "61dp",
                "width": "200dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgDotOne = new kony.ui.Image2({
                "height": "6dp",
                "id": "imgDotOne",
                "isVisible": true,
                "left": "0%",
                "skin": "slImage",
                "src": "pageoffdot.png",
                "top": "4dp",
                "width": "6dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgDotTwo = new kony.ui.Image2({
                "height": "6dp",
                "id": "imgDotTwo",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "pageoffdot.png",
                "top": "24dp",
                "width": "6dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgDotThree = new kony.ui.Image2({
                "height": "6dp",
                "id": "imgDotThree",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "pageoffdot.png",
                "top": "45dp",
                "width": "6dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgDotFour = new kony.ui.Image2({
                "height": "6dp",
                "id": "imgDotFour",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "pageoffdot.png",
                "top": "66dp",
                "width": "6dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxProductDetails.add(lblHeaderOneDetails, lblHeaderTwoDetails, lblHeaderThreeDetails, lblHeaderFourDetails, imgDotOne, imgDotTwo, imgDotThree, imgDotFour);
            var lblCheckNow = new kony.ui.Label({
                "height": "54dp",
                "id": "lblCheckNow",
                "isVisible": true,
                "left": "6.13%",
                "skin": "sknLbl424242SSP22px26",
                "text": "Check out the Customized options and avail Loan for your selected choice (You will be taken to 3rd -party website)",
                "textStyle": {},
                "top": "72%",
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblCheckNowLink = new kony.ui.Label({
                "height": "16dp",
                "id": "lblCheckNowLink",
                "isVisible": true,
                "left": "6.13%",
                "onTouchEnd": controller.AS_Label_e5011a180a314d4eb42b3af0f6fef870,
                "skin": "sknLblCheckNowLink",
                "text": "Check Now",
                "textStyle": {},
                "top": "82%",
                "width": "63dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnApplyNow = new kony.ui.Button({
                "height": "48dp",
                "id": "btnApplyNow",
                "isVisible": true,
                "left": "6.13%",
                "skin": "sknBtn0095e426pxEnabled",
                "text": "Apply Now",
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
            var lblHorizontalLine = new kony.ui.Label({
                "height": "1dp",
                "id": "lblHorizontalLine",
                "isVisible": true,
                "left": "0%",
                "text": "Label",
                "textStyle": {},
                "top": "49%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxDetails.add(lblAboutProduct, imgProduct, lblDetails, lblAdditionalFeatures, flxProductDetails, lblCheckNow, lblCheckNowLink, btnApplyNow, lblHorizontalLine);
            flxParent.add(flxHeader, flxDetails);
            this.add(flxParent);
        };
        return [{
            "addWidgets": addWidgetsfrmHELOC,
            "enabledForIdleTimeout": true,
            "id": "frmHELOC",
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