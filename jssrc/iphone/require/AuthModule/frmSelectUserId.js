define("AuthModule/frmSelectUserId", function() {
    return function(controller) {
        function addWidgetsfrmSelectUserId() {
            this.setDefaultUnit(kony.flex.DP);
            var flxSelectUserIdContainer = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxSelectUserIdContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxSelectUserIdContainer.setDefaultUnit(kony.flex.DP);
            var flxSelectUserIdHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "flxSelectUserIdHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx003e75Bg",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectUserIdHeader.setDefaultUnit(kony.flex.DP);
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15dp",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            flxBack.setDefaultUnit(kony.flex.DP);
            var imgBack = new kony.ui.Image2({
                "height": "100%",
                "id": "imgBack",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "backbutton.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBack.add(imgBack);
            var lblSelectUserId = new kony.ui.Label({
                "id": "lblSelectUserId",
                "isVisible": true,
                "left": "20dp",
                "skin": "ICSknHeaderFFF34px",
                "text": "Select User ID",
                "textStyle": {},
                "top": "50dp",
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
            flxSelectUserIdHeader.add(flxBack, lblSelectUserId);
            var flxSelectUserIdMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "85%",
                "id": "flxSelectUserIdMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectUserIdMain.setDefaultUnit(kony.flex.DP);
            var flxUsersList = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "60dp",
                "clipBounds": true,
                "id": "flxUsersList",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUsersList.setDefaultUnit(kony.flex.DP);
            var segUsersList = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "imgIsUserSelected": "radiobtn.png",
                    "lblUserId": "john.baiely"
                }, {
                    "imgIsUserSelected": "radiobuttoninactive.png",
                    "lblUserId": "lucille.morris"
                }, {
                    "imgIsUserSelected": "radiobuttoninactive.png",
                    "lblUserId": "helena.owen"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segUsersList",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSelectUserId",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSelectUserId": "flxSelectUserId",
                    "imgIsUserSelected": "imgIsUserSelected",
                    "lblUserId": "lblUserId"
                },
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
            flxUsersList.add(segUsersList);
            var flxDone = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "48dp",
                "id": "flxDone",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDone.setDefaultUnit(kony.flex.DP);
            var btnDone = new kony.ui.Button({
                "height": "100%",
                "id": "btnDone",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnBg003E75Border1pxFont15pxFFFFFF",
                "text": "Done",
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxDone.add(btnDone);
            flxSelectUserIdMain.add(flxUsersList, flxDone);
            flxSelectUserIdContainer.add(flxSelectUserIdHeader, flxSelectUserIdMain);
            this.add(flxSelectUserIdContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmSelectUserId,
            "enabledForIdleTimeout": false,
            "id": "frmSelectUserId",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_e9dec8a39b9245cb9aefd0776354a9ce(eventobject);
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
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});