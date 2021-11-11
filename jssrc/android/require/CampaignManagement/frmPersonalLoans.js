define("CampaignManagement/frmPersonalLoans", function() {
    return function(controller) {
        function addWidgetsfrmPersonalLoans() {
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
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
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
                        "isVisible": true
                    },
                    "customHeader": {
                        "height": "100%"
                    },
                    "flxBack": {
                        "isVisible": true,
                        "top": "0dp"
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "isVisible": false,
                        "src": "cancelicon.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "text": "Personal Loan"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxProductDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxProductDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxProductDetails.setDefaultUnit(kony.flex.DP);
            var flxSeparatorHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeparatorHeader.setDefaultUnit(kony.flex.DP);
            flxSeparatorHeader.add();
            var flxProductDetailsTabs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxProductDetailsTabs",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3Shadow",
                "top": "1dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxProductDetailsTabs.setDefaultUnit(kony.flex.DP);
            var btnFeatures = new kony.ui.Button({
                "focusSkin": "sknBtnf6f6f6424242SSPLight24px",
                "height": "100%",
                "id": "btnFeatures",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtnf6f6f6424242SSPLight24px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAO.Features"),
                "top": "0dp",
                "width": "50%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCharges = new kony.ui.Button({
                "focusSkin": "sknBtnBgD8D8D8SSPLight30pxBrd24px",
                "height": "100%",
                "id": "btnCharges",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknBtnBgD8D8D8SSPLight30pxBrd24px",
                "text": "Amount & Interests",
                "top": "0dp",
                "width": "50%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnInfo = new kony.ui.Button({
                "focusSkin": "sknBtnf6f6f6424242SSP24px",
                "height": "100%",
                "id": "btnInfo",
                "isVisible": false,
                "right": "0dp",
                "skin": "sknBtnf6f6f6424242SSP24px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAO.Info"),
                "top": "0dp",
                "width": "33.20%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxFeaturesSelected = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxFeaturesSelected",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx0095e4",
                "width": "50%",
                "zIndex": 5
            }, {}, {});
            flxFeaturesSelected.setDefaultUnit(kony.flex.DP);
            flxFeaturesSelected.add();
            var flxChargesSelected = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxChargesSelected",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlx0095e4",
                "width": "50%",
                "zIndex": 5
            }, {}, {});
            flxChargesSelected.setDefaultUnit(kony.flex.DP);
            flxChargesSelected.add();
            var flxInfoSelected = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxInfoSelected",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlx0095e4",
                "width": "33.20%",
                "zIndex": 5
            }, {}, {});
            flxInfoSelected.setDefaultUnit(kony.flex.DP);
            flxInfoSelected.add();
            var flxSeparatorTabs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorTabs",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeparatorTabs.setDefaultUnit(kony.flex.DP);
            flxSeparatorTabs.add();
            flxProductDetailsTabs.add(btnFeatures, btnCharges, btnInfo, flxFeaturesSelected, flxChargesSelected, flxInfoSelected, flxSeparatorTabs);
            var flxFeatures = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFeatures",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "40dp",
                "width": "100%"
            }, {}, {});
            flxFeatures.setDefaultUnit(kony.flex.DP);
            var rtxData = new kony.ui.RichText({
                "id": "rtxData",
                "isVisible": false,
                "left": "20dp",
                "linkSkin": "defRichTextLink",
                "skin": "sknRtx424242SSP22px",
                "text": "<b>About Product</b><br/>An Infinity Bank Personal Loan enables you to borrow funds over a variety of periods to allow you to meet your goals. Whether looking for home improvements, a new car, or maybe consolidate a range of existing credit, you can plan for the expected or unexpected.",
                "top": "55dp",
                "width": "88%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblNote0f6cd28f713334c = new kony.ui.Label({
                "id": "CopylblNote0f6cd28f713334c",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknLbl424242SSP28px",
                "text": "About Product",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "31dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylblAccType0ecb13a356bc341 = new kony.ui.Label({
                "id": "CopylblAccType0ecb13a356bc341",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknLbl424242SSP22px26",
                "text": "An Infinity Bank Personal Loan enables you to borrow funds over a variety of periods to allow you to meet your goals. Whether looking for home improvements, a new car, or maybe consolidate a range of existing credit, you can plan for the expected or unexpected.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": 20,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var CopylblAccTypeVal0i11870d9de6240 = new kony.ui.Label({
                "id": "CopylblAccTypeVal0i11870d9de6240",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP28px",
                "text": "Additional Features",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var segProductDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgDot": "pageoffdot.png",
                    "lblProfileHeading": "Affordable borrowing - flexible term based on your ability to  repay."
                }, {
                    "imgDot": "pageoffdot.png",
                    "lblProfileHeading": "Competitive rates."
                }, {
                    "imgDot": "pageoffdot.png",
                    "lblProfileHeading": "No collateral needed. "
                }, {
                    "imgDot": "pageoffdot.png",
                    "lblProfileHeading": "Easy and quick online application process. "
                }, {
                    "imgDot": "pageoffdot.png",
                    "lblProfileHeading": "Enables you to know what you need to pay each month."
                }, {
                    "imgDot": "pageoffdot.png",
                    "lblProfileHeading": "Money is in your account within minutes of acceptance."
                }],
                "groupCells": false,
                "id": "segProductDetails",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegffffff",
                "rowSkin": "sknSegffffff",
                "rowTemplate": "flxAdditionalFeatures",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "5dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAdditionalFeatures": "flxAdditionalFeatures",
                    "imgDot": "imgDot",
                    "lblProfileHeading": "lblProfileHeading"
                },
                "widgetSkin": "sknSegffffff",
                "width": "100%",
                "zIndex": 4
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFeatures.add(rtxData, CopylblNote0f6cd28f713334c, CopylblAccType0ecb13a356bc341, flxSeparator, CopylblAccTypeVal0i11870d9de6240, segProductDetails);
            var flxAmountandCharges = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAmountandCharges",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxAmountandCharges.setDefaultUnit(kony.flex.DP);
            var flxAccNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxAccNo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "55dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccNo.setDefaultUnit(kony.flex.DP);
            var lblAccNo = new kony.ui.Label({
                "id": "lblAccNo",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": "Eligible Amount",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAccNoValue = new kony.ui.Label({
                "bottom": "1dp",
                "id": "lblAccNoValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg30px",
                "text": "10,000",
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
            flxAccNo.add(lblAccNo, lblAccNoValue);
            var flxAccType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAccType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccType.setDefaultUnit(kony.flex.DP);
            var lblAccType = new kony.ui.Label({
                "id": "lblAccType",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Transfers.Duration"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAccTypeVal = new kony.ui.Label({
                "id": "lblAccTypeVal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg30px",
                "text": "12 months",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "28dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblNote = new kony.ui.Label({
                "id": "lblNote",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknLbl727272SSPLight22px",
                "text": "Note: Interest Rate will change based on the duration of  the loan.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "48dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAccType.add(lblAccType, lblAccTypeVal, lblNote);
            var flxRoutingNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxRoutingNo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "13dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoutingNo.setDefaultUnit(kony.flex.DP);
            var lblRoutingNo = new kony.ui.Label({
                "id": "lblRoutingNo",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.interestRate"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCardIssueDateVal = new kony.ui.Label({
                "bottom": "2dp",
                "id": "lblCardIssueDateVal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg30px",
                "text": "12.8%",
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
            flxRoutingNo.add(lblRoutingNo, lblCardIssueDateVal);
            flxAmountandCharges.add(flxAccNo, flxAccType, flxRoutingNo);
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnDarkTheme",
                "text": "Apply Now",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxProductDetails.add(flxSeparatorHeader, flxProductDetailsTabs, flxFeatures, flxAmountandCharges, btnContinue);
            this.add(flxHeader, flxProductDetails);
        };
        return [{
            "addWidgets": addWidgetsfrmPersonalLoans,
            "bounces": false,
            "enabledForIdleTimeout": true,
            "id": "frmPersonalLoans",
            "init": controller.AS_Form_b54b76d573b44f6e855fe28ae7f3d0f4,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_bf6a339a426b4304b9d8c93ca6344aaa(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Personal Loan"
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