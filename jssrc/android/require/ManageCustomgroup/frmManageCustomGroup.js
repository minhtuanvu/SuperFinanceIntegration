define("ManageCustomgroup/frmManageCustomGroup", function() {
    return function(controller) {
        function addWidgetsfrmManageCustomGroup() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMainManageCustomGroup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxMainManageCustomGroup",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainManageCustomGroup.setDefaultUnit(kony.flex.DP);
            var flxMainManageCustom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90%",
                "id": "flxMainManageCustom",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxMainManageCustom.setDefaultUnit(kony.flex.DP);
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
                    "customHeader": {
                        "height": "10%"
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "height": "25dp",
                        "src": "addiconnoborder.png",
                        "width": "25dp"
                    },
                    "lblLocateUs": {
                        "centerY": "50%",
                        "text": "Manage Custom Views"
                    }
                }
            }, {
                "overrides": {
                    "imgSearch": {
                        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS
                    }
                }
            }, {
                "overrides": {}
            });
            var segMansgeCustomeGroup = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "data": [{
                    "imgArrow": "chevron.png",
                    "lblSeparator": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgArrow": "chevron.png",
                    "lblSeparator": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgArrow": "chevron.png",
                    "lblSeparator": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgArrow": "chevron.png",
                    "lblSeparator": "Label",
                    "lblTitle": "Label"
                }, {
                    "imgArrow": "chevron.png",
                    "lblSeparator": "Label",
                    "lblTitle": "Label"
                }],
                "groupCells": false,
                "id": "segMansgeCustomeGroup",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAchlist",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAchlist": "flxAchlist",
                    "flxArrow": "flxArrow",
                    "flxCategory": "flxCategory",
                    "flxcontent": "flxcontent",
                    "imgArrow": "imgArrow",
                    "lblSeparator": "lblSeparator",
                    "lblTitle": "lblTitle"
                },
                "width": "100%",
                "zIndex": 100
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblNodatafound = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "10%",
                "id": "lblNodatafound",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknlbl727272SSP93pr",
                "text": "No Data Found",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxMainManageCustom.add(customHeader, segMansgeCustomeGroup, lblNodatafound);
            flxMainManageCustomGroup.add(flxMainManageCustom);
            var flxEditCustomViewDonPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxEditCustomViewDonPopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxEditCustomViewDonPopup.setDefaultUnit(kony.flex.DP);
            var customGroupDonePopup = new com.kmb.common.customGroupDonePopup({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "customGroupDonePopup",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxEditCustomViewDonPopup.add(customGroupDonePopup);
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
            var flxHamburger = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxHamburger",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxHamburger.setDefaultUnit(kony.flex.DP);
            var flxHamburgerWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHamburgerWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-100%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHamburgerWrapper.setDefaultUnit(kony.flex.DP);
            var flxHamburgerContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHamburgerContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": "50dp",
                "skin": "slFbox",
                "top": "0dp",
                "zIndex": 10
            }, {}, {});
            flxHamburgerContainer.setDefaultUnit(kony.flex.DP);
            var Hamburger = new com.kmb.common.Hamburger({
                "height": "100%",
                "id": "Hamburger",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "imgLogout": {
                        "src": "logout.png"
                    },
                    "imgUser": {
                        "src": "userimg.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHamburgerContainer.add(Hamburger);
            var flxHamburgerDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxHamburgerDummy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50dp",
                "zIndex": 3
            }, {}, {});
            flxHamburgerDummy.setDefaultUnit(kony.flex.DP);
            flxHamburgerDummy.add();
            flxHamburgerWrapper.add(flxHamburgerContainer, flxHamburgerDummy);
            flxHamburger.add(flxHamburgerWrapper);
            var flxManageFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "9%",
                "id": "flxManageFooter",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%"
            }, {}, {});
            flxManageFooter.setDefaultUnit(kony.flex.DP);
            var customFooter = new com.kmb.common.customFooter({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "customFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 300,
                "overrides": {
                    "customFooter": {
                        "height": "100%",
                        "zIndex": 300
                    },
                    "imgAccounts": {
                        "src": "accounts.png"
                    },
                    "imgBillPay": {
                        "src": "billpay.png"
                    },
                    "imgMore": {
                        "src": "more.png"
                    },
                    "imgTransfer": {
                        "src": "transfer.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxManageFooter.add(customFooter);
            this.add(flxMainManageCustomGroup, flxEditCustomViewDonPopup, flxPopup, flxHamburger, flxManageFooter);
        };
        return [{
            "addWidgets": addWidgetsfrmManageCustomGroup,
            "enabledForIdleTimeout": true,
            "id": "frmManageCustomGroup",
            "init": controller.AS_Form_e837690611a7421aa720e6cf3e4073e4,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmffffff",
            "title": "Manage Custom Views"
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
            "titleBarSkin": "sknTitle003e75Bg",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});