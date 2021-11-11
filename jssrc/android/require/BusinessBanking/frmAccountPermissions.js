define("BusinessBanking/frmAccountPermissions", function() {
    return function(controller) {
        function addWidgetsfrmAccountPermissions() {
            this.setDefaultUnit(kony.flex.DP);
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
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "width": "80%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "92%",
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
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
            flxMainContainer.add(expandCollapseView);
            this.add(flxHeader, flxMainContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmAccountPermissions,
            "enabledForIdleTimeout": true,
            "id": "frmAccountPermissions",
            "init": controller.AS_Form_bbb6e1223f8547b78c3609f41bb9e311,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "needAppMenu": false,
            "skin": "sknFrmffffff"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "sknTitle0a78d1ffffff30px2",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});