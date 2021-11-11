define("BusinessBanking/frmUserManagementTransactionLimits", function() {
    return function(controller) {
        function addWidgetsfrmUserManagementTransactionLimits() {
            this.setDefaultUnit(kony.flex.DP);
            var flxmain = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxmain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxmain.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
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
                    "flxHeader": {
                        "left": "0.00%",
                        "top": "0.07%"
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "text": "Account Nick Name-X5269",
                        "width": "80%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var lblNodatafound = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNodatafound",
                "isVisible": false,
                "left": "136dp",
                "skin": "sknlabel424242Regular42px",
                "text": "No Data Found",
                "textStyle": {},
                "top": "3%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxcollapse = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "92%",
                "horizontalScrollIndicator": true,
                "id": "flxcollapse",
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
            flxcollapse.setDefaultUnit(kony.flex.DP);
            var expandCollapseView = new com.kmb.common.expandCollapseView.expandCollapseView({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "id": "expandCollapseView",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "expandCollapseView": {
                        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                        "isVisible": true
                    },
                    "lblHeaderBar1": {
                        "text": "..",
                        "top": "viz.val_cleared",
                        "width": "85%"
                    },
                    "segList": {
                        "data": [
                            [{
                                    "imgUpArrow": "arrowdown.png",
                                    "lblHeader": "Transactions"
                                },
                                [{
                                    "imgIndicator": "",
                                    "lblDate": "",
                                    "lblTransaction": "",
                                    "lblTransactionAmount": ""
                                }]
                            ],
                            [{
                                    "imgUpArrow": "arrowdown.png",
                                    "lblHeader": "Transactions"
                                },
                                [{
                                    "imgIndicator": "",
                                    "lblDate": "",
                                    "lblTransaction": "",
                                    "lblTransactionAmount": ""
                                }]
                            ]
                        ]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxcollapse.add(expandCollapseView);
            flxmain.add(flxHeader, lblNodatafound, flxcollapse);
            this.add(flxmain);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_ee676e09ed06468886335ffb2ae262ba,
            "metaData": {
                "image": "backbutton.png"
            },
            "id": "LBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmUserManagementTransactionLimits,
            "enabledForIdleTimeout": true,
            "id": "frmUserManagementTransactionLimits",
            "init": controller.AS_Form_h7727a656ba14614acd949ee3c789a15,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmffffffTab"
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
                "leftBarButtonItems": [
                    LBarBtnItem0
                ],
                "rightBarButtonItems": []
            },
            "titleBarSkin": "sknTitle003e75Bg"
        }]
    }
});