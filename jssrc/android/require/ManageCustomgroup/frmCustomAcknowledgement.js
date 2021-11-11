define("ManageCustomgroup/frmCustomAcknowledgement", function() {
    return function(controller) {
        function addWidgetsfrmCustomAcknowledgement() {
            this.setDefaultUnit(kony.flex.DP);
            var flxSuccessTransaction = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxSuccessTransaction",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "reverseLayoutDirection": false,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxSuccessTransaction.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "10%",
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
                    "btnLeft": {
                        "isVisible": false
                    },
                    "btnRight": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.close"),
                        "isVisible": false
                    },
                    "customHeader": {
                        "centerX": "viz.val_cleared",
                        "height": "10%",
                        "isVisible": true
                    },
                    "flxBack": {
                        "isVisible": true
                    },
                    "flxHeader": {
                        "bottom": 0,
                        "left": 0,
                        "top": 0
                    },
                    "flxHeaderShadow": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "isVisible": false,
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "centerX": "55%",
                        "left": "viz.val_cleared",
                        "text": "Acknowledgment",
                        "width": "45%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxBack.onClick = controller.AS_FlexContainer_ff0bc9d000a74ce49999cc403693ebfd;
            var flxcontent = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "90%",
                "horizontalScrollIndicator": true,
                "id": "flxcontent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxcontent.setDefaultUnit(kony.flex.DP);
            var flxSuccess = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30%",
                "id": "flxSuccess",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxSuccess.setDefaultUnit(kony.flex.DP);
            var imgGreenTick = new kony.ui.Image2({
                "centerX": "50.02%",
                "height": "70dp",
                "id": "imgGreenTick",
                "isVisible": true,
                "skin": "slImage",
                "src": "selectgoal.png",
                "top": "12.00%",
                "width": "70dp",
                "zIndex": 4
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSuccessMessage = new kony.ui.Label({
                "centerX": "50.05%",
                "height": "45%",
                "id": "lblSuccessMessage",
                "isVisible": true,
                "left": "10%",
                "skin": "sknLbl000000SSPSemiBold26px",
                "text": "Custom View has been created successfully",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5.00%",
                "width": "80%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSuccess.add(imgGreenTick, lblSuccessMessage);
            var flxseg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxseg",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "3dp",
                "width": "100%"
            }, {}, {});
            flxseg.setDefaultUnit(kony.flex.DP);
            var flxCustomviewName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCustomviewName",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxCustomviewName.setDefaultUnit(kony.flex.DP);
            var flxSeparatortop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatortop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5.33%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "89.33%",
                "zIndex": 1
            }, {}, {});
            flxSeparatortop.setDefaultUnit(kony.flex.DP);
            flxSeparatortop.add();
            var lblKey = new kony.ui.Label({
                "id": "lblKey",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": "Custom View Name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "14dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 2],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCustomviewName = new kony.ui.Label({
                "id": "lblCustomviewName",
                "isVisible": true,
                "left": "20dp",
                "skin": "ICSknLbl42424215px",
                "text": "3",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 2],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeparatorbottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorbottom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5.33%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "89.33%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorbottom.setDefaultUnit(kony.flex.DP);
            flxSeparatorbottom.add();
            flxCustomviewName.add(flxSeparatortop, lblKey, lblCustomviewName, flxSeparatorbottom);
            var flxTotalcount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTotalcount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxTotalcount.setDefaultUnit(kony.flex.DP);
            var lblCounttitle = new kony.ui.Label({
                "id": "lblCounttitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": "Total Selected Accounts",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "14dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 2],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTotalcount = new kony.ui.Label({
                "id": "lblTotalcount",
                "isVisible": true,
                "left": "20dp",
                "skin": "ICSknLbl42424215px",
                "text": "3",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 2],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxLinebtm = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxLinebtm",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5.33%",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "89.33%",
                "zIndex": 1
            }, {}, {});
            flxLinebtm.setDefaultUnit(kony.flex.DP);
            flxLinebtm.add();
            flxTotalcount.add(lblCounttitle, lblTotalcount, flxLinebtm);
            var segDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblKey": "Selected Personal Accounts",
                    "lblValue": "3"
                }],
                "groupCells": false,
                "id": "segDetails",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Normal",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxCustomAcknowledgementRow",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCustomAcknowledgementRow": "flxCustomAcknowledgementRow",
                    "flxSeparatorbottom": "flxSeparatorbottom",
                    "flxmain": "flxmain",
                    "lblKey": "lblKey",
                    "lblValue": "lblValue"
                },
                "width": "100%",
                "zIndex": 4
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxseg.add(flxCustomviewName, flxTotalcount, segDetails);
            var flxButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "3%",
                "clipBounds": true,
                "height": "19%",
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "2%",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var btnApply = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "41dp",
                "id": "btnApply",
                "isVisible": true,
                "left": "5%",
                "right": "10%",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": "Apply & View Accounts",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnManageCustomgroup = new kony.ui.Button({
                "centerX": "50.00%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "41dp",
                "id": "btnManageCustomgroup",
                "isVisible": true,
                "left": "5%",
                "right": "10%",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.managecustom.btnManageCustomGroup"),
                "top": "10%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButtons.add(btnApply, btnManageCustomgroup);
            flxcontent.add(flxSuccess, flxseg, flxButtons);
            flxSuccessTransaction.add(customHeader, flxcontent);
            this.add(flxSuccessTransaction);
        };
        return [{
            "addWidgets": addWidgetsfrmCustomAcknowledgement,
            "enabledForIdleTimeout": true,
            "id": "frmCustomAcknowledgement",
            "init": controller.AS_Form_ic324fbb8db048abb1afb70a655f7ef8,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmffffff",
            "title": "Acknowledgment"
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