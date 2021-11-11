define("LocateUsModule/frmLocationDetails", function() {
    return function(controller) {
        function addWidgetsfrmLocationDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
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
                    "flxSearch": {
                        "isVisible": false,
                        "right": "6.25%",
                        "top": "0dp"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.Hamburger.Locateus")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "80dp",
                "clipBounds": true,
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var flxBranchDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBranchDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100.00%",
                "zIndex": 100
            }, {}, {});
            flxBranchDetails.setDefaultUnit(kony.flex.DP);
            var flxBranchDetailsMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxBranchDetailsMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBranchDetailsMain.setDefaultUnit(kony.flex.DP);
            var flxDetailsMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDetailsMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 11
            }, {}, {});
            flxDetailsMain.setDefaultUnit(kony.flex.DP);
            var lblBranchName = new kony.ui.Label({
                "height": "18dp",
                "id": "lblBranchName",
                "isVisible": true,
                "left": "20dp",
                "maxNumberOfLines": 1,
                "right": "90dp",
                "skin": "sknLbl424242SSPSemiBold93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.Location.BranchName"),
                "textStyle": {},
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "12dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblStatus = new kony.ui.Label({
                "id": "lblStatus",
                "isVisible": true,
                "left": "20dp",
                "right": "90dp",
                "skin": "sknLbl5daf0bSSP79pr",
                "text": kony.i18n.getLocalizedString("kony.mb.Location.StatusOpen"),
                "textStyle": {},
                "top": "30dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblAddress1 = new kony.ui.Label({
                "id": "lblAddress1",
                "isVisible": true,
                "left": "20dp",
                "right": "90dp",
                "skin": "sknLbl424242SSP93prSansRegularPro",
                "text": "Branch Address one line",
                "textStyle": {},
                "top": "47dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblAddress2 = new kony.ui.Label({
                "bottom": "12dp",
                "id": "lblAddress2",
                "isVisible": true,
                "left": "20dp",
                "right": "90dp",
                "skin": "sknLbl424242SSP93pr",
                "text": "Branch Address",
                "textStyle": {},
                "top": "63dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxDetailsDirections = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100dp",
                "id": "flxDetailsDirections",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "10dp",
                "width": "85dp",
                "zIndex": 11
            }, {}, {});
            flxDetailsDirections.setDefaultUnit(kony.flex.DP);
            var flxImgNavigation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "35dp",
                "id": "flxImgNavigation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "35dp",
                "zIndex": 1
            }, {}, {});
            flxImgNavigation.setDefaultUnit(kony.flex.DP);
            var imgNavigation = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "29dp",
                "id": "imgNavigation",
                "isVisible": false,
                "skin": "slImage",
                "src": "navigationicon.png",
                "width": "29dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var getdirection = new com.konymp.getdirection({
                "height": "100%",
                "id": "getdirection",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "getdirection": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            getdirection.travelModesForGoogleMaps = "none";
            getdirection.travelModesForAppleMaps = "none";
            getdirection.iOSMapOptions = "Both Maps";
            getdirection.destinationPlaceId = "";
            getdirection.originPlace = "";
            getdirection.originPlaceId = "";
            getdirection.destinationPlace = "";
            getdirection.wayPoints = "";
            getdirection.waypointPlaceIds = "";
            getdirection.turnByTurnNavigation = false;
            flxImgNavigation.add(imgNavigation, getdirection);
            var lblDistance = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDistance",
                "isVisible": true,
                "skin": "sknLbl0a78d1SSp93pr",
                "text": "2.2 miles",
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
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "15dp",
                "clipBounds": true,
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "minHeight": "70dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1Op100",
                "top": "5dp",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            flxDetailsDirections.add(flxImgNavigation, lblDistance, flxSeparator);
            flxDetailsMain.add(lblBranchName, lblStatus, lblAddress1, lblAddress2, flxDetailsDirections);
            var flxOperationHours = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxOperationHours",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOperationHours.setDefaultUnit(kony.flex.DP);
            var lblOperationalHours = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblOperationalHours",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPSemiBold93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.Location.OperationalHours"),
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
            flxOperationHours.add(lblOperationalHours);
            var segOperationalHours = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblDay": "Tue",
                    "lblTimings": "10:00 am to 5:00 pm"
                }, {
                    "lblDay": "Tue",
                    "lblTimings": "10:00 am to 5:00 pm"
                }, {
                    "lblDay": "Wednesday",
                    "lblTimings": "10:00 am to 5:00 pm"
                }, {
                    "lblDay": "asds",
                    "lblTimings": ""
                }, {
                    "lblDay": "asx",
                    "lblTimings": ""
                }, {
                    "lblDay": "asa",
                    "lblTimings": ""
                }, {
                    "lblDay": "as",
                    "lblTimings": ""
                }],
                "groupCells": false,
                "id": "segOperationalHours",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "right": "0%",
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxOperationHours",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "10dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxOperationHours": "flxOperationHours",
                    "lblDay": "lblDay",
                    "lblTimings": "lblTimings"
                },
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": false,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var flxServices = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxServices",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxServices.setDefaultUnit(kony.flex.DP);
            var lblServices = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblServices",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPSemiBold93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.Location.Services"),
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
            flxServices.add(lblServices);
            var segServices = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblBullet": "Label",
                    "lblService": "ATM- 24 Hours"
                }, {
                    "lblBullet": "Label",
                    "lblService": "ATM- 24 Hours"
                }],
                "groupCells": false,
                "id": "segServices",
                "isVisible": true,
                "left": "0%",
                "minHeight": "25%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "right": "0%",
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxServices",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "10dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxServices": "flxServices",
                    "lblBullet": "lblBullet",
                    "lblService": "lblService"
                },
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": false,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            flxBranchDetailsMain.add(flxDetailsMain, flxOperationHours, segOperationalHours, flxServices, segServices);
            flxBranchDetails.add(flxBranchDetailsMain);
            flxDetails.add(flxBranchDetails);
            var flxBtnCallBranch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxBtnCallBranch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0%",
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBtnCallBranch.setDefaultUnit(kony.flex.DP);
            var btnCallBranch = new kony.ui.Button({
                "bottom": "0%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "100%",
                "id": "btnCallBranch",
                "isVisible": true,
                "left": "6.25%",
                "right": "6.25%",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Location.CallBranch"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxBtnCallBranch.add(btnCallBranch);
            flxMainContainer.add(flxHeader, flxDetails, flxBtnCallBranch);
            var flxPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10.50%",
                "id": "flxPopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf54b5e",
                "top": "0dp",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxPopup.setDefaultUnit(kony.flex.DP);
            var customPopup = new com.kmb.common.customPopup({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "customPopup",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            this.add(flxMainContainer, flxPopup);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "title": ""
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
            "addWidgets": addWidgetsfrmLocationDetails,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmLocationDetails",
            "init": controller.AS_Form_bd676377fd5945c68133233e4c2f2289,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "postShow": controller.AS_Form_ha3fad745f9d4715a91986b157705a9a,
            "preShow": function(eventobject) {
                controller.AS_Form_efb878f944564a6995a7b43a23755ffa(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.Hamburger.Locateus")
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
                "hidesBackButton": false,
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