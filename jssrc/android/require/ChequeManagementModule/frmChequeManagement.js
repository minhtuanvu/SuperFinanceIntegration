define("ChequeManagementModule/frmChequeManagement", function() {
    return function(controller) {
        function addWidgetsfrmChequeManagement() {
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
                "skin": "sknFlx1a98ff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
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
                    "btnRight": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                        "isVisible": false
                    },
                    "customHeader": {
                        "isVisible": true
                    },
                    "flxHeaderShadow": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton_1.png"
                    },
                    "lblLocateUs": {
                        "centerX": "50%",
                        "text": kony.i18n.getLocalizedString("kony.mb.CM.chequeManagement"),
                        "left": "viz.val_cleared",
                        "width": "45%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "90dp",
                "centerX": "50%",
                "clipBounds": false,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxAccountDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "blur": {
                    "enabled": false,
                    "value": 0
                },
                "clipBounds": true,
                "height": "50dp",
                "id": "flxAccountDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountDetails.setDefaultUnit(kony.flex.DP);
            var flxAccountType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxAccountType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15dp",
                "width": "25dp"
            }, {}, {});
            flxAccountType.setDefaultUnit(kony.flex.DP);
            var imgAccountType = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAccountType",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "businessaccount.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccountType.add(imgAccountType);
            var lblAccountDetails = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAccountDetails",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl4176A4SSPReg26px",
                "text": "My Checking Account ...3254",
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
            var imgBack = new kony.ui.Image2({
                "centerY": "50%",
                "height": "25dp",
                "id": "imgBack",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "calenderarrowright.png",
                "top": 0,
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2%",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "95%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            flxAccountDetails.add(flxAccountType, lblAccountDetails, imgBack, flxSeparator);
            var flxChequeDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxChequeDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "f9f9",
                "top": 50,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChequeDetails.setDefaultUnit(kony.flex.DP);
            var flxChequeLabels = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "70%",
                "id": "flxChequeLabels",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFFBorder0e1b9768",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxChequeLabels.setDefaultUnit(kony.flex.DP);
            var flxStopChequeLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxStopChequeLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "width": "33%",
                "zIndex": 1
            }, {}, {});
            flxStopChequeLabel.setDefaultUnit(kony.flex.DP);
            var lblStopCheque = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "lblStopCheque",
                "isVisible": true,
                "skin": "sknLblffffffSSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.stopCheques"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxStopChequeLabel.add(lblStopCheque);
            var flxBorder = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBorder",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "width": "0.25%",
                "zIndex": 1
            }, {}, {});
            flxBorder.setDefaultUnit(kony.flex.DP);
            flxBorder.add();
            var flxChequeBooksLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxChequeBooksLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0",
                "width": "33%",
                "zIndex": 1
            }, {}, {});
            flxChequeBooksLabel.setDefaultUnit(kony.flex.DP);
            var lblChequeBooks = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "lblChequeBooks",
                "isVisible": true,
                "skin": "sknlbl003E7536px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.chequeBooks"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxChequeBooksLabel.add(lblChequeBooks);
            var flxBorder1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBorder1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "0",
                "width": "0.25%",
                "zIndex": 1
            }, {}, {});
            flxBorder1.setDefaultUnit(kony.flex.DP);
            flxBorder1.add();
            var flxMyChequesLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMyChequesLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "34%",
                "zIndex": 1
            }, {}, {});
            flxMyChequesLabel.setDefaultUnit(kony.flex.DP);
            var lblMyCheques = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "lblMyCheques",
                "isVisible": true,
                "skin": "sknlbl003E7536px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.myCheques"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxMyChequesLabel.add(lblMyCheques);
            flxChequeLabels.add(flxStopChequeLabel, flxBorder, flxChequeBooksLabel, flxBorder1, flxMyChequesLabel);
            flxChequeDetails.add(flxChequeLabels);
            var flxSearchInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxSearchInfo",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "110dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSearchInfo.setDefaultUnit(kony.flex.DP);
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80%",
                "id": "flxSearch",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": 20,
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "10dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSearch.setDefaultUnit(kony.flex.DP);
            var flxInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxInfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "25dp"
            }, {}, {});
            flxInfo.setDefaultUnit(kony.flex.DP);
            var imgInfo = new kony.ui.Image2({
                "centerY": "50%",
                "height": "100%",
                "id": "imgInfo",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "info_icon.png",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxInfo.add(imgInfo);
            var lblSearchText = new kony.ui.Label({
                "centerY": "45%",
                "id": "lblSearchText",
                "isVisible": true,
                "left": "5dp",
                "right": "5dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.recentCheques"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSearchIcon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSearchIcon",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "5dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "25dp"
            }, {}, {});
            flxSearchIcon.setDefaultUnit(kony.flex.DP);
            var imgSearch = new kony.ui.Image2({
                "centerY": "42%",
                "height": "100%",
                "id": "imgSearch",
                "isVisible": true,
                "skin": "slImage",
                "src": "search1.png",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSearchIcon.add(imgSearch);
            flxSearch.add(flxInfo, lblSearchText, flxSearchIcon);
            var flxSeparator5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2%",
                "id": "flxSeparator5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator5.setDefaultUnit(kony.flex.DP);
            flxSeparator5.add();
            flxSearchInfo.add(flxSearch, flxSeparator5);
            var flxStopCheques = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxStopCheques",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "110dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxStopCheques.setDefaultUnit(kony.flex.DP);
            var segStopCheque = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgDot": "",
                    "lblAccountNo": "5534628647738",
                    "lblChequeNo": "120001-120005",
                    "lblDate": "06/08/2020",
                    "lblStatus": "In Progress"
                }, {
                    "imgDot": "",
                    "lblAccountNo": "5534628647738",
                    "lblChequeNo": "120010",
                    "lblDate": "06/08/2020",
                    "lblStatus": "In Progress"
                }, {
                    "imgDot": "",
                    "lblAccountNo": "5534628647738",
                    "lblChequeNo": "120006",
                    "lblDate": "06/08/2020",
                    "lblStatus": "Completed"
                }, {
                    "imgDot": "",
                    "lblAccountNo": "5534628647738",
                    "lblChequeNo": "120013",
                    "lblDate": "06/08/2020",
                    "lblStatus": "Cheque Destroyed - stopped"
                }, {
                    "imgDot": "",
                    "lblAccountNo": "5534628647738",
                    "lblChequeNo": "120025-120030",
                    "lblDate": "06/08/2020",
                    "lblStatus": "Completed"
                }, {
                    "imgDot": "",
                    "lblAccountNo": "5534628647738",
                    "lblChequeNo": "120013",
                    "lblDate": "06/08/2020",
                    "lblStatus": "Completed"
                }, {
                    "imgDot": "",
                    "lblAccountNo": "5534628647738",
                    "lblChequeNo": "120013",
                    "lblDate": "06/08/2020",
                    "lblStatus": "Completed"
                }, {
                    "imgDot": "",
                    "lblAccountNo": "5534628647738",
                    "lblChequeNo": "120013",
                    "lblDate": "06/08/2020",
                    "lblStatus": "Completed"
                }, {
                    "imgDot": "",
                    "lblAccountNo": "",
                    "lblChequeNo": "",
                    "lblDate": "",
                    "lblStatus": ""
                }, {
                    "imgDot": "",
                    "lblAccountNo": "",
                    "lblChequeNo": "",
                    "lblDate": "",
                    "lblStatus": ""
                }, {
                    "imgDot": "",
                    "lblAccountNo": "",
                    "lblChequeNo": "",
                    "lblDate": "",
                    "lblStatus": ""
                }, {
                    "imgDot": "",
                    "lblAccountNo": "",
                    "lblChequeNo": "",
                    "lblDate": "",
                    "lblStatus": ""
                }, {
                    "imgDot": "",
                    "lblAccountNo": "",
                    "lblChequeNo": "",
                    "lblDate": "",
                    "lblStatus": ""
                }, {
                    "imgDot": "",
                    "lblAccountNo": "",
                    "lblChequeNo": "",
                    "lblDate": "",
                    "lblStatus": ""
                }, {
                    "imgDot": "",
                    "lblAccountNo": "",
                    "lblChequeNo": "",
                    "lblDate": "",
                    "lblStatus": ""
                }, {
                    "imgDot": "",
                    "lblAccountNo": "",
                    "lblChequeNo": "",
                    "lblDate": "",
                    "lblStatus": ""
                }, {
                    "imgDot": "",
                    "lblAccountNo": "",
                    "lblChequeNo": "",
                    "lblDate": "",
                    "lblStatus": ""
                }, {
                    "imgDot": "",
                    "lblAccountNo": "",
                    "lblChequeNo": "",
                    "lblDate": "",
                    "lblStatus": ""
                }],
                "groupCells": false,
                "id": "segStopCheque",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0f19b6e1a233444",
                "rowTemplate": "flxMainContainer",
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
                    "flxDot": "flxDot",
                    "flxLabel1": "flxLabel1",
                    "flxLabel2": "flxLabel2",
                    "flxLabels": "flxLabels",
                    "flxMainContainer": "flxMainContainer",
                    "flxSeparator": "flxSeparator",
                    "flxStatus": "flxStatus",
                    "imgDot": "imgDot",
                    "lblAccountNo": "lblAccountNo",
                    "lblChequeNo": "lblChequeNo",
                    "lblDate": "lblDate",
                    "lblStatus": "lblStatus"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxStopCheques.add(segStopCheque);
            flxMainContainer.add(flxAccountDetails, flxChequeDetails, flxSearchInfo, flxStopCheques);
            var flxNewRequest = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "90dp",
                "id": "flxNewRequest",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNewRequest.setDefaultUnit(kony.flex.DP);
            var flxLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2%",
                "id": "flxLine",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLine.setDefaultUnit(kony.flex.DP);
            flxLine.add();
            var btnNewRequest = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "50dp",
                "id": "btnNewRequest",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.CM.newStopChequeRequest"),
                "width": "90%",
                "zIndex": 100
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNewRequest.add(flxLine, btnNewRequest);
            var flxMenu = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "60dp",
                "id": "flxMenu",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 106
            }, {}, {});
            flxMenu.setDefaultUnit(kony.flex.DP);
            var customFooter = new com.kmb.common.customFooter({
                "height": "60dp",
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
                    "flxBillSelected": {
                        "isVisible": false
                    },
                    "flxMoreSelect": {
                        "isVisible": false
                    },
                    "flxTransferSel": {
                        "isVisible": false
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
            customFooter.flxMore.onClick = controller.AS_FlexContainer_h8f1601135884cbb9bae6c06f5cd660a;
            customFooter.flxTransfer.onClick = controller.AS_FlexContainer_ffa9b06e930f4dca9bf7ea3176053cc4;
            flxMenu.add(customFooter);
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
                "zIndex": 105
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
                "skin": "sknFlxffffff",
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
            this.add(flxHeader, flxMainContainer, flxNewRequest, flxMenu, flxHamburger);
        };
        return [{
            "addWidgets": addWidgetsfrmChequeManagement,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmChequeManagement",
            "init": controller.AS_Form_h6120a17ea924617bb1b40deb9ee8538,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_j15ed94953934b9ba5fe050d9782a242,
            "preShow": function(eventobject) {
                controller.AS_Form_e16f80b335704f548f75afe9a7ec1c35(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.CM.chequeManagement")
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