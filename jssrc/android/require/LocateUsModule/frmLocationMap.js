define("LocateUsModule/frmLocationMap", function() {
    return function(controller) {
        function addWidgetsfrmLocationMap() {
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
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxHeaderAndSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "111dp",
                "id": "flxHeaderAndSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxHeaderAndSearch.setDefaultUnit(kony.flex.DP);
            var flxOpenHamburger = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxOpenHamburger",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6.25%",
                "isModalContainer": false,
                "top": "0%",
                "width": "10%",
                "zIndex": 1
            }, {}, {});
            flxOpenHamburger.setDefaultUnit(kony.flex.DP);
            var imgHamburger = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgHamburger",
                "isVisible": true,
                "left": "0%",
                "skin": "slImage",
                "src": "hamburger.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxOpenHamburger.add(imgHamburger);
            var customSearch = new com.kmb.Search.customSearch({
                "height": "111dp",
                "id": "customSearch",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "0%",
                "width": "100%",
                "overrides": {
                    "btnCancel": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.close"),
                        "isVisible": true
                    },
                    "customSearch": {
                        "height": "111dp"
                    },
                    "flxHeader": {
                        "height": "56dp"
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearchIcon": {
                        "src": "search.png"
                    },
                    "lblLocateUs": {
                        "text": "Locate Us"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeaderAndSearch.add(flxOpenHamburger, customSearch);
            var flxHeaderSearchbox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "0dp",
                "id": "flxHeaderSearchbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxHeaderSearchbox.setDefaultUnit(kony.flex.DP);
            var customSearchbox = new com.kmb.Search.customSearchbox({
                "height": "40dp",
                "id": "customSearchbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "imgSearchIcon": {
                        "src": "search.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeaderSearchbox.add(customSearchbox);
            var flxMap = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMap",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "40dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMap.setDefaultUnit(kony.flex.DP);
            var mapLocation = new kony.ui.Map({
                "bottom": "0dp",
                "calloutWidth": 80,
                "defaultPinImage": "pinb.png",
                "id": "mapLocation",
                "isVisible": true,
                "left": "0dp",
                "provider": constants.MAP_PROVIDER_GOOGLE,
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {
                "mode": constants.MAP_VIEW_MODE_NORMAL,
                "showZoomControl": true,
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
            flxMap.add(mapLocation, flxCurrentLocation);
            var flxMapButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxMapButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "56.25%",
                "zIndex": 100
            }, {}, {});
            flxMapButtons.setDefaultUnit(kony.flex.DP);
            var flxBtnListView = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "focusSkin": "sknflx055BAF",
                "height": "100%",
                "id": "flxBtnListView",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlx0095e4B4Radius",
                "top": "0%",
                "width": "51%",
                "zIndex": 1
            }, {}, {});
            flxBtnListView.setDefaultUnit(kony.flex.DP);
            var imgListView = new kony.ui.Image2({
                "centerY": "50%",
                "height": "16dp",
                "id": "imgListView",
                "isVisible": true,
                "left": "10%",
                "skin": "slImage",
                "src": "listview.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblListView = new kony.ui.Label({
                "centerX": "60%",
                "centerY": "50%",
                "id": "lblListView",
                "isVisible": true,
                "skin": "sknLblffffffSSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.Location.ListView"),
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
            flxBtnListView.add(imgListView, lblListView);
            var flxBtnFilters = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflx055BAF",
                "height": "100%",
                "id": "flxBtnFilters",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0%",
                "skin": "sknFlx0095e4B4Radius",
                "top": "0%",
                "width": "51%",
                "zIndex": 1
            }, {}, {});
            flxBtnFilters.setDefaultUnit(kony.flex.DP);
            var imgFilters = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgFilters",
                "isVisible": true,
                "left": "18%",
                "skin": "slImage",
                "src": "filtericon.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblFilters = new kony.ui.Label({
                "centerX": "60%",
                "centerY": "50%",
                "id": "lblFilters",
                "isVisible": true,
                "skin": "sknLblffffffSSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.Location.Filters"),
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
            flxBtnFilters.add(imgFilters, lblFilters);
            var flxBtnsSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "95.50%",
                "id": "flxBtnsSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "1%",
                "zIndex": 10
            }, {}, {});
            flxBtnsSeparator.setDefaultUnit(kony.flex.DP);
            flxBtnsSeparator.add();
            flxMapButtons.add(flxBtnListView, flxBtnFilters, flxBtnsSeparator);
            var flxBranchesList = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0%",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxBranchesList",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "111dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 12
            }, {}, {});
            flxBranchesList.setDefaultUnit(kony.flex.DP);
            var segBranchList = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "80dp",
                "data": [{
                    "imgBank": "group.png",
                    "imgGetDirections": "segmentarrow.png",
                    "lblAddress": "504, Market street, Austin",
                    "lblDistance": "2.2 Miles",
                    "lblName": "Branch Name One",
                    "lblSatus": "OPEN",
                    "lblSeparator": "Label"
                }, {
                    "imgBank": "group.png",
                    "imgGetDirections": "segmentarrow.png",
                    "lblAddress": "504, Market street, Austin",
                    "lblDistance": "2.2 Miles",
                    "lblName": "Branch Name One",
                    "lblSatus": "OPEN",
                    "lblSeparator": "Label"
                }, {
                    "imgBank": "group.png",
                    "imgGetDirections": "segmentarrow.png",
                    "lblAddress": "504, Market street, Austin",
                    "lblDistance": "2.2 Miles",
                    "lblName": "Branch Name One",
                    "lblSatus": "OPEN",
                    "lblSeparator": "Label"
                }],
                "groupCells": false,
                "id": "segBranchList",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "Copyseg0f9a5556b65dc42",
                "rowTemplate": "flxLocation",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxBankImage": "flxBankImage",
                    "flxDistance": "flxDistance",
                    "flxGetDirections": "flxGetDirections",
                    "flxLocation": "flxLocation",
                    "imgBank": "imgBank",
                    "imgGetDirections": "imgGetDirections",
                    "lblAddress": "lblAddress",
                    "lblDistance": "lblDistance",
                    "lblName": "lblName",
                    "lblSatus": "lblSatus",
                    "lblSeparator": "lblSeparator"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBranchesList.add(segBranchList);
            var flxFilters = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFilters",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0%",
                "skin": "sknFlx7e7e7e",
                "top": "0%",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxFilters.setDefaultUnit(kony.flex.DP);
            var flxFiltersMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFiltersMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0%",
                "skin": "f9f9",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFiltersMain.setDefaultUnit(kony.flex.DP);
            var flxFiltersegs = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "60dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxFiltersegs",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "top": "0%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFiltersegs.setDefaultUnit(kony.flex.DP);
            var flxFilterHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10.56%",
                "id": "flxFilterHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFilterHeader.setDefaultUnit(kony.flex.DP);
            var lblAdvanceFilter = new kony.ui.Label({
                "id": "lblAdvanceFilter",
                "isVisible": true,
                "left": "5.94%",
                "skin": "sknLbl0a78d1sspreg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Location.AdvanceFilter"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "50%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxFilterClose = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFilterClose",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "6%",
                "skin": "slFbox",
                "top": "0%",
                "width": "15%",
                "zIndex": 1
            }, {}, {});
            flxFilterClose.setDefaultUnit(kony.flex.DP);
            var imgClose = new kony.ui.Image2({
                "centerY": "65%",
                "height": "15dp",
                "id": "imgClose",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "cancelicon.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFilterClose.add(imgClose);
            flxFilterHeader.add(lblAdvanceFilter, flxFilterClose);
            var flxShow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7.04%",
                "id": "flxShow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShow.setDefaultUnit(kony.flex.DP);
            var lblShow = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblShow",
                "isVisible": true,
                "left": "5.94%",
                "skin": "sknEditChannel",
                "text": kony.i18n.getLocalizedString("kony.mb.Location.Show"),
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
            flxShow.add(lblShow);
            var segShow = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "Branches",
                    "lblSeparator": "5 Miles"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "ATMs",
                    "lblSeparator": "5 Miles"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "Both",
                    "lblSeparator": "5 Miles"
                }],
                "groupCells": false,
                "id": "segShow",
                "isVisible": true,
                "left": "2.81%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "Copyseg0d0f15f4ad2ee4a",
                "rowTemplate": "flxRange",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgCheckbox",
                    "selectedStateImage": "radiobtn.png",
                    "unselectedStateImage": "radiobuttoninactive.png"
                },
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCheckbox": "flxCheckbox",
                    "flxRange": "flxRange",
                    "imgCheckbox": "imgCheckbox",
                    "lblRange": "lblRange",
                    "lblSeparator": "lblSeparator"
                },
                "width": "95%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSelectSearchRange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7.04%",
                "id": "flxSelectSearchRange",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "-0.50%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectSearchRange.setDefaultUnit(kony.flex.DP);
            var lblSelectSearchRange = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSelectSearchRange",
                "isVisible": true,
                "left": "5.94%",
                "skin": "sknEditChannel",
                "text": kony.i18n.getLocalizedString("kony.mb.Location.SelectSearchRange"),
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
            flxSelectSearchRange.add(lblSelectSearchRange);
            var segSelectSearchRange = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "5 Miles",
                    "lblSeparator": "."
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "10 Miles",
                    "lblSeparator": "."
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "25 Miles",
                    "lblSeparator": "."
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "50 Miles",
                    "lblSeparator": "."
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "100 Miles",
                    "lblSeparator": "."
                }],
                "groupCells": false,
                "id": "segSelectSearchRange",
                "isVisible": true,
                "left": "2.81%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "Copyseg0cd770300066740",
                "rowTemplate": "flxRange",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgCheckbox",
                    "selectedStateImage": "radiobtn.png",
                    "unselectedStateImage": "radiobuttoninactive.png"
                },
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCheckbox": "flxCheckbox",
                    "flxRange": "flxRange",
                    "imgCheckbox": "imgCheckbox",
                    "lblRange": "lblRange",
                    "lblSeparator": "lblSeparator"
                },
                "widgetSkin": "seg2Normal",
                "width": "95%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxServicesFilter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7.04%",
                "id": "flxServicesFilter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "-0.50%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxServicesFilter.setDefaultUnit(kony.flex.DP);
            var lblServicesFilter = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblServicesFilter",
                "isVisible": true,
                "left": "5.94%",
                "skin": "sknEditChannel",
                "text": kony.i18n.getLocalizedString("kony.mb.Location.Services"),
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
            flxServicesFilter.add(lblServicesFilter);
            var segServicesFilter = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "All",
                    "lblSeparator": "."
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "Make an Appointment",
                    "lblSeparator": "."
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "Onsite Relationship Manager",
                    "lblSeparator": "."
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "Home Loan Specialists",
                    "lblSeparator": "."
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "Financial Advisors",
                    "lblSeparator": "."
                }],
                "groupCells": false,
                "id": "segServicesFilter",
                "isVisible": true,
                "left": "2.81%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "Copyseg0d0a4bef6e8cd4b",
                "rowTemplate": "flxRange",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_MULTI_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgCheckbox",
                    "selectedStateImage": "remembermetick.png",
                    "unselectedStateImage": "remeberme.png"
                },
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCheckbox": "flxCheckbox",
                    "flxRange": "flxRange",
                    "imgCheckbox": "imgCheckbox",
                    "lblRange": "lblRange",
                    "lblSeparator": "lblSeparator"
                },
                "widgetSkin": "seg2Normal",
                "width": "95%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFiltersegs.add(flxFilterHeader, flxShow, segShow, flxSelectSearchRange, segSelectSearchRange, flxServicesFilter, segServicesFilter);
            var btnApply = new kony.ui.Button({
                "bottom": "10dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnApply",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Location.Apply"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFiltersMain.add(flxFiltersegs, btnApply);
            flxFilters.add(flxFiltersMain);
            var flxDetailsMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "-80dp",
                "clipBounds": true,
                "id": "flxDetailsMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "7dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblStatus = new kony.ui.Label({
                "id": "lblStatus",
                "isVisible": true,
                "left": "20dp",
                "right": "90dp",
                "skin": "sknLbl5daf0bSSP79pr",
                "text": kony.i18n.getLocalizedString("kony.mb.Location.StatusOpen"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "25dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAddress1 = new kony.ui.Label({
                "id": "lblAddress1",
                "isVisible": true,
                "left": "20dp",
                "right": "90dp",
                "skin": "sknLbla0a0a013px",
                "text": "Branch Address one line",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "42dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAddress2 = new kony.ui.Label({
                "id": "lblAddress2",
                "isVisible": true,
                "left": "20dp",
                "right": "90dp",
                "skin": "sknLbla0a0a013px",
                "text": "Branch Address, CIty, Country.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "58dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxDetailsDirections = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
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
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1Op100",
                "top": "0dp",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var flxImgNavigation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "35%",
                "clipBounds": true,
                "height": "35dp",
                "id": "flxImgNavigation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
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
                "bottom": "8dp",
                "centerX": "50%",
                "id": "lblDistance",
                "isVisible": true,
                "skin": "sknLbl0a78d1SSp93pr",
                "text": "2.2 miles",
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
            flxDetailsDirections.add(flxSeparator, flxImgNavigation, lblDistance);
            flxDetailsMain.add(lblBranchName, lblStatus, lblAddress1, lblAddress2, flxDetailsDirections);
            flxMainContainer.add(flxHeaderAndSearch, flxHeaderSearchbox, flxMap, flxMapButtons, flxBranchesList, flxFilters, flxDetailsMain);
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
                "zIndex": 201
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
                "overrides": {
                    "imgPopup": {
                        "src": "imagedrag.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            var flxBg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45%",
                "id": "flxBg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBg.setDefaultUnit(kony.flex.DP);
            flxBg.add();
            this.add(flxMainContainer, flxPopup, flxBg);
        };
        return [{
            "addWidgets": addWidgetsfrmLocationMap,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmLocationMap",
            "init": controller.AS_Form_f874647b49a846cd935713722a1123bd,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_f3926b75c32a4ef4bc18419bfcdaea6e(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.Hamburger.Locateus")
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