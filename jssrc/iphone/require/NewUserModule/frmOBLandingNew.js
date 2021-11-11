define("NewUserModule/frmOBLandingNew", function() {
    return function(controller) {
        function addWidgetsfrmOBLandingNew() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var btnLogout = new kony.ui.Button({
                "centerY": "50%",
                "height": "40dp",
                "id": "btnLogout",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknBtnffffffSSP28px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.logoutCaps"),
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxHeader.add(btnLogout);
            var flxLanding = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxLanding",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxLanding.setDefaultUnit(kony.flex.DP);
            var flxUser = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "180dp",
                "id": "flxUser",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUser.setDefaultUnit(kony.flex.DP);
            var flxUserImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "47dp",
                "id": "flxUserImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxProfileImage",
                "top": "4dp",
                "width": "47dp",
                "zIndex": 1
            }, {}, {});
            flxUserImage.setDefaultUnit(kony.flex.DP);
            var imgUser = new kony.ui.Image2({
                "height": "100%",
                "id": "imgUser",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "userimg.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUserImage.add(imgUser);
            var lblWelcome = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblWelcome",
                "isVisible": true,
                "skin": "sknLblffffffSSPReg26px",
                "text": "Welcome John. Bruce",
                "textStyle": {},
                "top": "60dp",
                "width": "65%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxProgressBackgroundLanding = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "13dp",
                "id": "flxProgressBackgroundLanding",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknflxffffffBorder100px",
                "top": "111dp",
                "zIndex": 1
            }, {}, {});
            flxProgressBackgroundLanding.setDefaultUnit(kony.flex.DP);
            var flxProgressValueLanding = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "105%",
                "id": "flxProgressValueLanding",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffRadiusffffff10px",
                "top": "-1dp",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxProgressValueLanding.setDefaultUnit(kony.flex.DP);
            flxProgressValueLanding.add();
            flxProgressBackgroundLanding.add(flxProgressValueLanding);
            var lblProgressLanding = new kony.ui.Label({
                "centerX": "50.00%",
                "id": "lblProgressLanding",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknLblffffff20px",
                "text": kony.i18n.getLocalizedString("kony.mb.OBLanding.ProgressLanding"),
                "textStyle": {},
                "top": "135dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUser.add(flxUserImage, lblWelcome, flxProgressBackgroundLanding, lblProgressLanding);
            var flxScroll = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxScroll",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "180dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxScroll.setDefaultUnit(kony.flex.DP);
            var segSteps = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgDone": "greentick.png",
                    "imgGo": "chevron.png",
                    "lblNumber": "1",
                    "lblStepName": "Product Selection"
                }, {
                    "imgDone": "greentick.png",
                    "imgGo": "chevron.png",
                    "lblNumber": "2",
                    "lblStepName": "Personal Info"
                }, {
                    "imgDone": "greentick.png",
                    "imgGo": "chevron.png",
                    "lblNumber": "3",
                    "lblStepName": "Employment Info"
                }, {
                    "imgDone": "greentick.png",
                    "imgGo": "chevron.png",
                    "lblNumber": "4",
                    "lblStepName": "Financial Info"
                }, {
                    "imgDone": "greentick.png",
                    "imgGo": "chevron.png",
                    "lblNumber": "5",
                    "lblStepName": "Identity Verification"
                }, {
                    "imgDone": "greentick.png",
                    "imgGo": "chevron.png",
                    "lblNumber": "6",
                    "lblStepName": "Signature Upload"
                }],
                "groupCells": false,
                "id": "segSteps",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Normal",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSteps",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxNumber": "flxNumber",
                    "flxSteps": "flxSteps",
                    "flxStepsSeperator": "flxStepsSeperator",
                    "imgDone": "imgDone",
                    "imgGo": "imgGo",
                    "lblNumber": "lblNumber",
                    "lblStepName": "lblStepName"
                },
                "widgetSkin": "seg2Normal",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var flxStartNewApplication = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "60dp",
                "id": "flxStartNewApplication",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStartNewApplication.setDefaultUnit(kony.flex.DP);
            var flxOr = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "26dp",
                "id": "flxOr",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50dp",
                "isModalContainer": false,
                "skin": "sknFlxe9e9e9Rounded",
                "width": "26dp",
                "zIndex": 1
            }, {}, {});
            flxOr.setDefaultUnit(kony.flex.DP);
            var lblOr = new kony.ui.Label({
                "centerX": "45%",
                "centerY": "45%",
                "id": "lblOr",
                "isVisible": true,
                "skin": "sknlbl727272SSPSSP79pr",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.Or"),
                "textStyle": {},
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
            flxOr.add(lblOr);
            var lblStartNewApplication = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblStartNewApplication",
                "isVisible": true,
                "skin": "sknLbl0a78d1SSP30px",
                "text": kony.i18n.getLocalizedString("kony.mb.OBLandingNew.StartNewApplication"),
                "textStyle": {},
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
            flxStartNewApplication.add(flxOr, lblStartNewApplication);
            flxScroll.add(segSteps, flxStartNewApplication);
            flxLanding.add(flxUser, flxScroll);
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "33%",
                "id": "flxGradient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxGradient.setDefaultUnit(kony.flex.DP);
            flxGradient.add();
            this.add(flxHeader, flxLanding, flxGradient);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_d393b8c0afea47febe68f4a8c220e4f3,
            "metaData": {
                "title": "Logout"
            },
            "id": "RBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmOBLandingNew,
            "enabledForIdleTimeout": true,
            "id": "frmOBLandingNew",
            "init": controller.AS_Form_b641c89f77244cf2b9a051da43b2a893,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_beee54f559d24b6e97d9372828a7d2d0(eventobject);
            },
            "skin": "sknFrmffffff"
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
                "rightBarButtonItems": [RBarBtnItem0]
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});