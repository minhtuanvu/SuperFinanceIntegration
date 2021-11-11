define("FeedBackModule/frmInAppFeedbackRating", function() {
    return function(controller) {
        function addWidgetsfrmInAppFeedbackRating() {
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
                "top": "0%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxHeaderShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-5dp",
                "clipBounds": true,
                "height": "5dp",
                "id": "flxHeaderShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderShadow.setDefaultUnit(kony.flex.DP);
            flxHeaderShadow.add();
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
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                        "isVisible": true
                    },
                    "flxBack": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "centerX": "viz.val_cleared",
                        "left": "40%",
                        "text": "Feedback"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(flxHeaderShadow, customHeader);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "20%",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flexStarRating = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "35%",
                "id": "flexStarRating",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "30%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexStarRating.setDefaultUnit(kony.flex.DP);
            var lblProvideRating = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblProvideRating",
                "isVisible": true,
                "skin": "sknLbl424242SSPReg34px",
                "text": kony.i18n.getLocalizedString("kony.mb.feedback.providerating"),
                "textStyle": {},
                "top": "15dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxStarRatingsContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45%",
                "id": "flxStarRatingsContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "75%",
                "zIndex": 1
            }, {}, {});
            flxStarRatingsContainer.setDefaultUnit(kony.flex.DP);
            var flxStar1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "60%",
                "id": "flxStar1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "22dp",
                "width": "12%",
                "zIndex": 1
            }, {}, {});
            flxStar1.setDefaultUnit(kony.flex.DP);
            var imgStar1 = new kony.ui.Image2({
                "height": "33dp",
                "id": "imgStar1",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "inactivestar.png",
                "top": "0dp",
                "width": "33dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxStar1.add(imgStar1);
            var flxStar2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "60%",
                "id": "flxStar2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "22dp",
                "width": "12%",
                "zIndex": 1
            }, {}, {});
            flxStar2.setDefaultUnit(kony.flex.DP);
            var imgStar2 = new kony.ui.Image2({
                "height": "33dp",
                "id": "imgStar2",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "inactivestar.png",
                "top": "0dp",
                "width": "33dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxStar2.add(imgStar2);
            var flxStar3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "60%",
                "id": "flxStar3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "22dp",
                "width": "12%",
                "zIndex": 1
            }, {}, {});
            flxStar3.setDefaultUnit(kony.flex.DP);
            var imgStar3 = new kony.ui.Image2({
                "height": "33dp",
                "id": "imgStar3",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "inactivestar.png",
                "top": "0dp",
                "width": "33dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxStar3.add(imgStar3);
            var flxStar4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "60%",
                "id": "flxStar4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "22dp",
                "width": "12%",
                "zIndex": 1
            }, {}, {});
            flxStar4.setDefaultUnit(kony.flex.DP);
            var imgStar4 = new kony.ui.Image2({
                "height": "33dp",
                "id": "imgStar4",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "inactivestar.png",
                "top": "0dp",
                "width": "33dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxStar4.add(imgStar4);
            var flxStar5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "60%",
                "id": "flxStar5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "22dp",
                "width": "12%",
                "zIndex": 1
            }, {}, {});
            flxStar5.setDefaultUnit(kony.flex.DP);
            var imgStar5 = new kony.ui.Image2({
                "height": "33dp",
                "id": "imgStar5",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "inactivestar.png",
                "top": "0dp",
                "width": "33dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxStar5.add(imgStar5);
            flxStarRatingsContainer.add(flxStar1, flxStar2, flxStar3, flxStar4, flxStar5);
            flexStarRating.add(lblProvideRating, flxStarRatingsContainer);
            var flxTopContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "420dp",
                "id": "flxTopContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "100%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTopContainer.setDefaultUnit(kony.flex.DP);
            var lblRatings = new kony.ui.Label({
                "id": "lblRatings",
                "isVisible": true,
                "left": "20dp",
                "right": "30dp",
                "skin": "sknLbl424242SSP28px",
                "text": "We've noticed you are unhappy with our app, would you mind giving us the feedback on how we can improve on it?",
                "textStyle": {},
                "top": "5dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblImprove = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblImprove",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg34px",
                "text": "What would you like to improve?",
                "textStyle": {},
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxFeedbackOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxFeedbackOptions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxFeedbackOptions.setDefaultUnit(kony.flex.DP);
            var flxButtons1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxButtons1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxButtons1.setDefaultUnit(kony.flex.DP);
            var flxButtonOption1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "32dp",
                "id": "flxButtonOption1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFeedbackFlxdisabled",
                "top": "11dp",
                "width": "45%",
                "zIndex": 1
            }, {}, {});
            flxButtonOption1.setDefaultUnit(kony.flex.DP);
            var btnOption1 = new kony.ui.Button({
                "focusSkin": "sknFeedbackButtonDisabled",
                "height": "100%",
                "id": "btnOption1",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknFeedbackButtonDisabled",
                "text": "User Experience",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var imgTick1 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "10dp",
                "id": "imgTick1",
                "isVisible": false,
                "right": "10dp",
                "skin": "slImage",
                "src": "tickmark_green.png",
                "top": "7dp",
                "width": "10dp",
                "zIndex": 5
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButtonOption1.add(btnOption1, imgTick1);
            var flxButtonOption2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "32dp",
                "id": "flxButtonOption2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50%",
                "isModalContainer": false,
                "skin": "sknFeedbackFlxdisabled",
                "top": "11dp",
                "width": "45%",
                "zIndex": 1
            }, {}, {});
            flxButtonOption2.setDefaultUnit(kony.flex.DP);
            var btnOption2 = new kony.ui.Button({
                "focusSkin": "sknFeedbackButtonDisabled",
                "height": "100%",
                "id": "btnOption2",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknFeedbackButtonDisabled",
                "text": "Features",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var imgTick2 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "10dp",
                "id": "imgTick2",
                "isVisible": false,
                "right": "10dp",
                "skin": "slImage",
                "src": "tickmark_green.png",
                "top": "7dp",
                "width": "10dp",
                "zIndex": 5
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButtonOption2.add(btnOption2, imgTick2);
            flxButtons1.add(flxButtonOption1, flxButtonOption2);
            var flxButtons2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxButtons2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxButtons2.setDefaultUnit(kony.flex.DP);
            var flxButtonOption3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "32dp",
                "id": "flxButtonOption3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFeedbackFlxdisabled",
                "top": "10dp",
                "width": "45%",
                "zIndex": 1
            }, {}, {});
            flxButtonOption3.setDefaultUnit(kony.flex.DP);
            var btnOption3 = new kony.ui.Button({
                "focusSkin": "sknFeedbackButtonDisabled",
                "height": "100%",
                "id": "btnOption3",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknFeedbackButtonDisabled",
                "text": "Look & Feel",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var imgTick3 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "10dp",
                "id": "imgTick3",
                "isVisible": false,
                "right": "10dp",
                "skin": "slImage",
                "src": "tickmark_green.png",
                "top": "7dp",
                "width": "10dp",
                "zIndex": 5
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButtonOption3.add(btnOption3, imgTick3);
            var flxButtonOption4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "32dp",
                "id": "flxButtonOption4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50%",
                "isModalContainer": false,
                "skin": "sknFeedbackFlxdisabled",
                "top": "10dp",
                "width": "45%",
                "zIndex": 1
            }, {}, {});
            flxButtonOption4.setDefaultUnit(kony.flex.DP);
            var btnOption4 = new kony.ui.Button({
                "focusSkin": "sknFeedbackButtonDisabled",
                "height": "100%",
                "id": "btnOption4",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknFeedbackButtonDisabled",
                "text": "Performance",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var imgTick4 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "10dp",
                "id": "imgTick4",
                "isVisible": false,
                "right": "10dp",
                "skin": "slImage",
                "src": "tickmark_green.png",
                "top": "7dp",
                "width": "10dp",
                "zIndex": 5
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButtonOption4.add(btnOption4, imgTick4);
            flxButtons2.add(flxButtonOption3, flxButtonOption4);
            var flxButtons3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxButtons3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxButtons3.setDefaultUnit(kony.flex.DP);
            var flxButtonOption5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "32dp",
                "id": "flxButtonOption5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFeedbackFlxdisabled",
                "top": "10dp",
                "width": "45%",
                "zIndex": 1
            }, {}, {});
            flxButtonOption5.setDefaultUnit(kony.flex.DP);
            var btnOption5 = new kony.ui.Button({
                "focusSkin": "sknFeedbackButtonDisabled",
                "height": "100%",
                "id": "btnOption5",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknFeedbackButtonDisabled",
                "text": "others",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var imgTick5 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "10dp",
                "id": "imgTick5",
                "isVisible": false,
                "right": "10dp",
                "skin": "slImage",
                "src": "tickmark_green.png",
                "top": "7dp",
                "width": "10dp",
                "zIndex": 5
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButtonOption5.add(btnOption5, imgTick5);
            var flxButtonOption6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "32dp",
                "id": "flxButtonOption6",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50%",
                "isModalContainer": false,
                "skin": "sknFeedbackFlxdisabled",
                "top": "13dp",
                "width": "45%",
                "zIndex": 1
            }, {}, {});
            flxButtonOption6.setDefaultUnit(kony.flex.DP);
            var btnOption6 = new kony.ui.Button({
                "focusSkin": "slButtonGlossRed",
                "height": "100%",
                "id": "btnOption6",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknFeedbackButtonDisabled",
                "text": "Features",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var imgTick6 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "10dp",
                "id": "imgTick6",
                "isVisible": false,
                "right": "10dp",
                "skin": "slImage",
                "src": "tickmark_green.png",
                "top": "7dp",
                "width": "10dp",
                "zIndex": 5
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButtonOption6.add(btnOption6, imgTick6);
            flxButtons3.add(flxButtonOption5, flxButtonOption6);
            flxFeedbackOptions.add(flxButtons1, flxButtons2, flxButtons3);
            var flxcomments = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxcomments",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox0e4b0415ed9504aRating",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxcomments.setDefaultUnit(kony.flex.DP);
            var lblComments = new kony.ui.Label({
                "id": "lblComments",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg34px",
                "text": "Add your comments",
                "textStyle": {},
                "top": "0dp",
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
            var lblCharCount = new kony.ui.Label({
                "id": "lblCharCount",
                "isVisible": true,
                "right": "20dp",
                "skin": "a0a0a0",
                "text": "0/1000",
                "textStyle": {},
                "top": "0dp",
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
            var textarea = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_SENTENCES,
                "bottom": "10dp",
                "focusSkin": "textareaFeedbackcomment",
                "height": "80dp",
                "id": "textarea",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "maxTextLength": 1000,
                "numberOfVisibleLines": 3,
                "placeholder": "Optional",
                "restrictCharactersSet": "1000",
                "right": "10dp",
                "skin": "sknTextAreaa0a0a0sspReg26px",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "30dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
                "showCloseButton": true,
                "showProgressIndicator": false,
                "placeholderSkin": "sknTxtAreaSSPREga0a0a028px"
            });
            flxcomments.add(lblComments, lblCharCount, textarea);
            flxTopContainer.add(lblRatings, lblImprove, flxFeedbackOptions, flxcomments);
            flxMainContainer.add(flexStarRating, flxTopContainer);
            var flxBottomContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "110dp",
                "id": "flxBottomContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBottomContainer.setDefaultUnit(kony.flex.DP);
            var btnSubmit = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn055BAFSSPSemiBold26px",
                "height": "50dp",
                "id": "btnSubmit",
                "isVisible": true,
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.common.submit"),
                "top": "10dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var flxIssues = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25%",
                "id": "flxIssues",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "75dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxIssues.setDefaultUnit(kony.flex.DP);
            var lblFacingIssues = new kony.ui.Label({
                "height": "20dp",
                "id": "lblFacingIssues",
                "isVisible": true,
                "left": "24%",
                "skin": "sknLbl000000424242SSP30PxTab",
                "text": kony.i18n.getLocalizedString("kony.mb.feedback.facingissues"),
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnMessages = new kony.ui.Button({
                "focusSkin": "sknBtnHere",
                "height": "20dp",
                "id": "btnMessages",
                "isVisible": true,
                "left": "4dp",
                "right": "30dp",
                "skin": "sknBtnHere",
                "text": "here.",
                "top": 0,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxIssues.add(lblFacingIssues, btnMessages);
            flxBottomContainer.add(btnSubmit, flxIssues);
            this.add(flxHeader, flxMainContainer, flxBottomContainer);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "title": "Cancel"
            },
            "id": "RBarBtnItem0"
        });
        var BBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "title": ""
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmInAppFeedbackRating,
            "enabledForIdleTimeout": true,
            "id": "frmInAppFeedbackRating",
            "init": controller.AS_Form_fe425fe96fbe400d8af9f3ddb7a990ff,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_he0109c27fb4418ab289a05ebe26d191(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.feedback.feedback")
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
            "titleBar": true,
            "titleBarAttributes": {
                "barStyle": constants.BAR_STYLE_DEAFULT,
                "navigationBarHidden": false,
                "translucent": false,
                "tintColor": "ffffff00",
                "hidesBackButton": true,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [],
                "rightBarButtonItems": [RBarBtnItem0],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});