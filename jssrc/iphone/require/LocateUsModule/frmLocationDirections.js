define("LocateUsModule/frmLocationDirections", function() {
    return function(controller) {
        function addWidgetsfrmLocationDirections() {
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
                        "isVisible": false
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
            var flxMap = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMap",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMap.setDefaultUnit(kony.flex.DP);
            var mapDirections = new kony.ui.Map({
                "calloutWidth": 80,
                "defaultPinImage": "pinb.png",
                "height": "100%",
                "id": "mapDirections",
                "isVisible": true,
                "left": "0dp",
                "provider": constants.MAP_PROVIDER_GOOGLE,
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {
                "mode": constants.MAP_VIEW_MODE_NORMAL,
                "showCurrentLocation": constants.MAP_VIEW_SHOW_CURRENT_LOCATION_NONE,
                "zoomLevel": 4
            });
            var flxCurrentLocation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "130dp",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxCurrentLocation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "width": "60dp",
                "zIndex": 1
            }, {}, {});
            flxCurrentLocation.setDefaultUnit(kony.flex.DP);
            var imgCurrentLocation = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "35dp",
                "id": "imgCurrentLocation",
                "isVisible": true,
                "skin": "slImage",
                "src": "centralizelocation.png",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCurrentLocation.add(imgCurrentLocation);
            flxMap.add(mapDirections, flxCurrentLocation);
            var flxDirections = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-70%",
                "clipBounds": true,
                "height": "93%",
                "id": "flxDirections",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "81%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxDirections.setDefaultUnit(kony.flex.DP);
            var flxDummy2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7%",
                "id": "flxDummy2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDummy2.setDefaultUnit(kony.flex.DP);
            flxDummy2.add();
            var imgDirections = new kony.ui.Image2({
                "height": "80dp",
                "id": "imgDirections",
                "isVisible": true,
                "left": "0%",
                "skin": "slImage",
                "src": "cardup.png",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxDirectionMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "15%",
                "id": "flxDirectionMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDirectionMain.setDefaultUnit(kony.flex.DP);
            var lblDistanceAndTime = new kony.ui.Label({
                "id": "lblDistanceAndTime",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPSemiBold93pr",
                "text": "2.2 Miles (10 minutes)",
                "textStyle": {},
                "top": "15%",
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
            var lblNavigationSteps = new kony.ui.Label({
                "id": "lblNavigationSteps",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPSemiBold93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.Location.NavigationSteps"),
                "textStyle": {},
                "top": "40%",
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
            var flxSeparator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1Op100",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator2.setDefaultUnit(kony.flex.DP);
            flxSeparator2.add();
            flxDirectionMain.add(lblDistanceAndTime, lblNavigationSteps, flxSeparator2);
            var flxSegDirections = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0%",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "78%",
                "horizontalScrollIndicator": true,
                "id": "flxSegDirections",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknScrFlxffffff",
                "top": "21.80%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSegDirections.setDefaultUnit(kony.flex.DP);
            var segDirections = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgDirection": "arrow3.png",
                    "lblDirection": "Head southwest on S El Camino Real toward W 4th Ave",
                    "lblDistance": "80 Feet ",
                    "lblSeparator": "Label",
                    "lblSeparator2": "Label",
                    "lblTime": "20 Seconds"
                }, {
                    "imgDirection": "arrow3.png",
                    "lblDirection": "Head southwest on S El Camino Real toward W 4th Ave",
                    "lblDistance": "80 Feet ",
                    "lblSeparator": "Label",
                    "lblSeparator2": "Label",
                    "lblTime": "20 Seconds"
                }, {
                    "imgDirection": "arrow3.png",
                    "lblDirection": "Head southwest on S El Camino Real toward W 4th Ave",
                    "lblDistance": "80 Feet ",
                    "lblSeparator": "Label",
                    "lblSeparator2": "Label",
                    "lblTime": "20 Seconds"
                }],
                "groupCells": false,
                "id": "segDirections",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowTemplate": "flxDirections",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxDirectionData": "flxDirectionData",
                    "flxDirections": "flxDirections",
                    "flxDirectionsWrapper": "flxDirectionsWrapper",
                    "flxImgDirection": "flxImgDirection",
                    "flxMain": "flxMain",
                    "imgDirection": "imgDirection",
                    "lblDirection": "lblDirection",
                    "lblDistance": "lblDistance",
                    "lblSeparator": "lblSeparator",
                    "lblSeparator2": "lblSeparator2",
                    "lblTime": "lblTime"
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
            flxSegDirections.add(segDirections);
            flxDirections.add(flxDummy2, imgDirections, flxDirectionMain, flxSegDirections);
            flxMainContainer.add(flxHeader, flxMap, flxDirections);
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
            "addWidgets": addWidgetsfrmLocationDirections,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmLocationDirections",
            "init": controller.AS_Form_f6f9fd7d2e344c078db0a7ae30da059e,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "postShow": controller.AS_Form_ed65cab7cde4448ab5e24d31f2e4e9bf,
            "preShow": function(eventobject) {
                controller.AS_Form_ae418f868c3c483a804be8923c4f6e47(eventobject);
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