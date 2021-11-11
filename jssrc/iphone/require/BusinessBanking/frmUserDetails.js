define("BusinessBanking/frmUserDetails", function() {
    return function(controller) {
        function addWidgetsfrmUserDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMain = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
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
                    "flxHeaderShadow": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.userDetails.userDetails")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxInnerMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "92%",
                "id": "flxInnerMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxInnerMain.setDefaultUnit(kony.flex.DP);
            var flxScrollContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxScrollContainer.setDefaultUnit(kony.flex.DP);
            var flxuserDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxuserDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "92%"
            }, {}, {});
            flxuserDetails.setDefaultUnit(kony.flex.DP);
            var segUserDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblAttribute": "Full Name :",
                    "lblAttributeVal": "John David",
                    "lblStaus": "Suspended"
                }, {
                    "lblAttribute": "Full Name :",
                    "lblAttributeVal": "John David",
                    "lblStaus": "Suspended"
                }, {
                    "lblAttribute": "Full Name :",
                    "lblAttributeVal": "John David",
                    "lblStaus": "Suspended"
                }, {
                    "lblAttribute": "Full Name :",
                    "lblAttributeVal": "John David",
                    "lblStaus": "Suspended"
                }, {
                    "lblAttribute": "Full Name :",
                    "lblAttributeVal": "John David",
                    "lblStaus": "Suspended"
                }, {
                    "lblAttribute": "Full Name :",
                    "lblAttributeVal": "John David",
                    "lblStaus": "Suspended"
                }, {
                    "lblAttribute": "Full Name :",
                    "lblAttributeVal": "John David",
                    "lblStaus": "Suspended"
                }, {
                    "lblAttribute": "Full Name :",
                    "lblAttributeVal": "John David",
                    "lblStaus": "Suspended"
                }, {
                    "lblAttribute": "Full Name :",
                    "lblAttributeVal": "John David",
                    "lblStaus": "Suspended"
                }],
                "groupCells": false,
                "id": "segUserDetails",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxUserDetails",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSep": "flxSep",
                    "flxUserAttribute": "flxUserAttribute",
                    "flxUserAttributeVal": "flxUserAttributeVal",
                    "flxUserDetails": "flxUserDetails",
                    "flxUserEntity": "flxUserEntity",
                    "lblAttribute": "lblAttribute",
                    "lblAttributeVal": "lblAttributeVal",
                    "lblStaus": "lblStaus"
                },
                "width": "100%",
                "zIndex": 2
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
            var flxFullName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxFullName",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "5dp",
                "width": "100%"
            }, {}, {});
            flxFullName.setDefaultUnit(kony.flex.DP);
            var flxUserEntity = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUserEntity",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserEntity.setDefaultUnit(kony.flex.DP);
            var flxUserAttribute = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUserAttribute",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserAttribute.setDefaultUnit(kony.flex.DP);
            var lblAttribute = new kony.ui.Label({
                "id": "lblAttribute",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Full Name :",
                "textStyle": {},
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUserAttribute.add(lblAttribute);
            var flxUserAttributeVal = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "5dp",
                "clipBounds": true,
                "id": "flxUserAttributeVal",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserAttributeVal.setDefaultUnit(kony.flex.DP);
            var lblAttributeVal = new kony.ui.Label({
                "id": "lblAttributeVal",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "John David",
                "textStyle": {},
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblStaus = new kony.ui.Label({
                "id": "lblStaus",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "Suspended",
                "textStyle": {},
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUserAttributeVal.add(lblAttributeVal, lblStaus);
            flxUserEntity.add(flxUserAttribute, flxUserAttributeVal);
            var flxSep = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep.setDefaultUnit(kony.flex.DP);
            flxSep.add();
            flxFullName.add(flxUserEntity, flxSep);
            var flxEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxEmail",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "10dp",
                "width": "100%"
            }, {}, {});
            flxEmail.setDefaultUnit(kony.flex.DP);
            var flxUserEntity1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUserEntity1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserEntity1.setDefaultUnit(kony.flex.DP);
            var flxUserAttribut1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUserAttribut1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserAttribut1.setDefaultUnit(kony.flex.DP);
            var lblEmailID = new kony.ui.Label({
                "id": "lblEmailID",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Email ID  :",
                "textStyle": {},
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUserAttribut1.add(lblEmailID);
            var flxUserAttributeVal1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "5dp",
                "clipBounds": true,
                "id": "flxUserAttributeVal1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserAttributeVal1.setDefaultUnit(kony.flex.DP);
            var lblEmailIDVal = new kony.ui.Label({
                "id": "lblEmailIDVal",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl424242SSP26px",
                "text": "John David",
                "textStyle": {},
                "top": "0",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUserAttributeVal1.add(lblEmailIDVal);
            flxUserEntity1.add(flxUserAttribut1, flxUserAttributeVal1);
            var flxSep1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep1.setDefaultUnit(kony.flex.DP);
            flxSep1.add();
            flxEmail.add(flxUserEntity1, flxSep1);
            var flxDOB = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDOB",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "10dp",
                "width": "100%"
            }, {}, {});
            flxDOB.setDefaultUnit(kony.flex.DP);
            var flxUserEntity2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUserEntity2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserEntity2.setDefaultUnit(kony.flex.DP);
            var flxUserAttribut2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUserAttribut2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserAttribut2.setDefaultUnit(kony.flex.DP);
            var lblDOB = new kony.ui.Label({
                "id": "lblDOB",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Date of Birth :",
                "textStyle": {},
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUserAttribut2.add(lblDOB);
            var flxUserAttributeVal2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "5dp",
                "clipBounds": true,
                "id": "flxUserAttributeVal2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserAttributeVal2.setDefaultUnit(kony.flex.DP);
            var lblDOBVal = new kony.ui.Label({
                "id": "lblDOBVal",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl424242SSP26px",
                "text": "John David",
                "textStyle": {},
                "top": "0",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUserAttributeVal2.add(lblDOBVal);
            flxUserEntity2.add(flxUserAttribut2, flxUserAttributeVal2);
            var flxSep2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep2.setDefaultUnit(kony.flex.DP);
            flxSep2.add();
            flxDOB.add(flxUserEntity2, flxSep2);
            var flxSSN = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSSN",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "5dp",
                "width": "100%"
            }, {}, {});
            flxSSN.setDefaultUnit(kony.flex.DP);
            var flxUserEntity3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUserEntity3",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserEntity3.setDefaultUnit(kony.flex.DP);
            var flxUserAttribut3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUserAttribut3",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserAttribut3.setDefaultUnit(kony.flex.DP);
            var lblSSN = new kony.ui.Label({
                "id": "lblSSN",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl727272SSPReg22px",
                "text": "SSN  :",
                "textStyle": {},
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUserAttribut3.add(lblSSN);
            var flxUserAttributeVal3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "5dp",
                "clipBounds": true,
                "id": "flxUserAttributeVal3",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserAttributeVal3.setDefaultUnit(kony.flex.DP);
            var lblSSNVal = new kony.ui.Label({
                "id": "lblSSNVal",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl424242SSP26px",
                "text": "John David",
                "textStyle": {},
                "top": "0",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUserAttributeVal3.add(lblSSNVal);
            flxUserEntity3.add(flxUserAttribut3, flxUserAttributeVal3);
            var flxSep3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep3.setDefaultUnit(kony.flex.DP);
            flxSep3.add();
            flxSSN.add(flxUserEntity3, flxSep3);
            var flxDriversLicense = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDriversLicense",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "10dp",
                "width": "100%"
            }, {}, {});
            flxDriversLicense.setDefaultUnit(kony.flex.DP);
            var flxUserEntity4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUserEntity4",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserEntity4.setDefaultUnit(kony.flex.DP);
            var flxUserAttribut4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUserAttribut4",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserAttribut4.setDefaultUnit(kony.flex.DP);
            var lblDriversLicense = new kony.ui.Label({
                "id": "lblDriversLicense",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Full Name :",
                "textStyle": {},
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUserAttribut4.add(lblDriversLicense);
            var flxUserAttributeVal4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "5dp",
                "clipBounds": true,
                "id": "flxUserAttributeVal4",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserAttributeVal4.setDefaultUnit(kony.flex.DP);
            var lblDriversLicenseVal = new kony.ui.Label({
                "id": "lblDriversLicenseVal",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl424242SSP26px",
                "text": "John David",
                "textStyle": {},
                "top": "0",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUserAttributeVal4.add(lblDriversLicenseVal);
            flxUserEntity4.add(flxUserAttribut4, flxUserAttributeVal4);
            var flxSep4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep4.setDefaultUnit(kony.flex.DP);
            flxSep4.add();
            flxDriversLicense.add(flxUserEntity4, flxSep4);
            var flxPhoneNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxPhoneNumber",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "5dp",
                "width": "100%"
            }, {}, {});
            flxPhoneNumber.setDefaultUnit(kony.flex.DP);
            var flxUserEntity5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUserEntity5",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserEntity5.setDefaultUnit(kony.flex.DP);
            var flxUserAttribut5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUserAttribut5",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserAttribut5.setDefaultUnit(kony.flex.DP);
            var lblPhonrNo = new kony.ui.Label({
                "id": "lblPhonrNo",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Full Name :",
                "textStyle": {},
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUserAttribut5.add(lblPhonrNo);
            var flxUserAttributeVal5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "5dp",
                "clipBounds": true,
                "id": "flxUserAttributeVal5",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserAttributeVal5.setDefaultUnit(kony.flex.DP);
            var lblPhoneNoVal = new kony.ui.Label({
                "id": "lblPhoneNoVal",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl424242SSP26px",
                "text": "John David",
                "textStyle": {},
                "top": "0",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUserAttributeVal5.add(lblPhoneNoVal);
            flxUserEntity5.add(flxUserAttribut5, flxUserAttributeVal5);
            var flxSep5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep5.setDefaultUnit(kony.flex.DP);
            flxSep5.add();
            flxPhoneNumber.add(flxUserEntity5, flxSep5);
            var flxUserID = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUserID",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "10dp",
                "width": "100%"
            }, {}, {});
            flxUserID.setDefaultUnit(kony.flex.DP);
            var flxUserEntity6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUserEntity6",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserEntity6.setDefaultUnit(kony.flex.DP);
            var flxUserAttribut6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUserAttribut6",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserAttribut6.setDefaultUnit(kony.flex.DP);
            var lblUserID = new kony.ui.Label({
                "id": "lblUserID",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Full Name :",
                "textStyle": {},
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUserAttribut6.add(lblUserID);
            var flxUserAttributVal6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "5dp",
                "clipBounds": true,
                "id": "flxUserAttributVal6",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserAttributVal6.setDefaultUnit(kony.flex.DP);
            var lblUserIDVal = new kony.ui.Label({
                "id": "lblUserIDVal",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl424242SSP26px",
                "text": "John David",
                "textStyle": {},
                "top": "0",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUserAttributVal6.add(lblUserIDVal);
            flxUserEntity6.add(flxUserAttribut6, flxUserAttributVal6);
            var flxSep6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep6.setDefaultUnit(kony.flex.DP);
            flxSep6.add();
            flxUserID.add(flxUserEntity6, flxSep6);
            var flxAccessDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAccessDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "10dp",
                "width": "100%"
            }, {}, {});
            flxAccessDetails.setDefaultUnit(kony.flex.DP);
            var flxUserEntity7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUserEntity7",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserEntity7.setDefaultUnit(kony.flex.DP);
            var flxUserAttribut7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUserAttribut7",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxUserAttribut7.setDefaultUnit(kony.flex.DP);
            var lblAccessDetails = new kony.ui.Label({
                "id": "lblAccessDetails",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Full Name :",
                "textStyle": {},
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUserAttribut7.add(lblAccessDetails);
            var flxUserAttributVal7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "5dp",
                "clipBounds": true,
                "id": "flxUserAttributVal7",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "25dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxUserAttributVal7.setDefaultUnit(kony.flex.DP);
            var lblAccessDetailsVal = new kony.ui.Label({
                "id": "lblAccessDetailsVal",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl424242SSP26px",
                "text": "John David",
                "textStyle": {},
                "top": "0",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUserAttributVal7.add(lblAccessDetailsVal);
            var flxImg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxImg",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "right": 0,
                "skin": "slFbox",
                "top": "15dp",
                "width": "10%",
                "zIndex": 1
            }, {}, {});
            flxImg.setDefaultUnit(kony.flex.DP);
            var ImgArrow = new kony.ui.Image2({
                "centerX": "50%",
                "height": "20dp",
                "id": "ImgArrow",
                "isVisible": true,
                "skin": "slImage",
                "src": "segmentarrow.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImg.add(ImgArrow);
            flxUserEntity7.add(flxUserAttribut7, flxUserAttributVal7, flxImg);
            var flxSep7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep7",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep7.setDefaultUnit(kony.flex.DP);
            flxSep7.add();
            flxAccessDetails.add(flxUserEntity7, flxSep7);
            flxuserDetails.add(segUserDetails, flxFullName, flxEmail, flxDOB, flxSSN, flxDriversLicense, flxPhoneNumber, flxUserID, flxAccessDetails);
            var flxSep9 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep9",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep9.setDefaultUnit(kony.flex.DP);
            flxSep9.add();
            var flxBtns = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "10dp",
                "clipBounds": true,
                "id": "flxBtns",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "16dp",
                "isModalContainer": false,
                "right": "18dp",
                "skin": "slFbox",
                "top": "10dp",
                "width": "92%",
                "zIndex": 2
            }, {}, {});
            flxBtns.setDefaultUnit(kony.flex.DP);
            var btnViewUserDet = new kony.ui.Button({
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "48dp",
                "id": "btnViewUserDet",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.userDetails.viewUserDetails"),
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnActivate = new kony.ui.Button({
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "48dp",
                "id": "btnActivate",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.userDetails.activate"),
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnresendActLink = new kony.ui.Button({
                "focusSkin": "sknbtn0095e4Border0095e4SSP26pxffffff",
                "height": "50dp",
                "id": "btnresendActLink",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknbtn0095e4Border0095e4SSP26pxffffff",
                "text": kony.i18n.getLocalizedString("kony.mb.userDetails.resendActivationLink"),
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnDeactivate = new kony.ui.Button({
                "bottom": "10dp",
                "focusSkin": "sknbtn0095e4Border0095e4SSP26pxffffff",
                "height": "48dp",
                "id": "btnDeactivate",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknbtn0095e4Border0095e4SSP26pxffffff",
                "text": kony.i18n.getLocalizedString("kony.mb.userDetails.deactivate"),
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxBtns.add(btnViewUserDet, btnActivate, btnresendActLink, btnDeactivate);
            flxScrollContainer.add(flxuserDetails, flxSep9, flxBtns);
            flxInnerMain.add(flxScrollContainer);
            flxMain.add(flxHeader, flxInnerMain);
            var flxConfirmationPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxConfirmationPopUp",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxConfirmationPopUp.setDefaultUnit(kony.flex.DP);
            var confirmationPopUp = new com.kmb.common.confirmationPopUp({
                "height": "100%",
                "id": "confirmationPopUp",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "confirmationPopUp": {
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
            flxConfirmationPopUp.add(confirmationPopUp);
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
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxFooter",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var customFooter = new com.kmb.common.customFooter({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
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
                    "customFooter": {
                        "zIndex": 300
                    },
                    "flxAccSelect": {
                        "isVisible": false
                    },
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
            flxFooter.add(customFooter);
            this.add(flxMain, flxConfirmationPopUp, flxPopup, flxFooter);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_b3377372322f42eeb39855386e2bddb0,
            "metaData": {
                "image": "backbutton.png"
            },
            "id": "LBarBtnItem0"
        });
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
        return [{
            "addWidgets": addWidgetsfrmUserDetails,
            "enabledForIdleTimeout": true,
            "id": "frmUserDetails",
            "init": controller.AS_Form_de34b661208a41d18dab4cfcee9fb249,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_fa9be54355f044b5a2e89a93fc0c37db,
            "preShow": function(eventobject) {
                controller.AS_Form_i009f473282244788f6a6a053e2a415f(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "User Details"
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
                "leftItemsSupplementBackButton": false,
                "leftBarButtonItems": [
                    LBarBtnItem0
                ],
                "rightBarButtonItems": [RBarBtnItem0]
            },
            "titleBarSkin": "sknTitle003e75Bg"
        }]
    }
});