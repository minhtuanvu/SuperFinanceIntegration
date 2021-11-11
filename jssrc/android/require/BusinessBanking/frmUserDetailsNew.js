define("BusinessBanking/frmUserDetailsNew", function() {
    return function(controller) {
        function addWidgetsfrmUserDetailsNew() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
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
            var segUserDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "lblDaily": "Daily",
                    "lblDailyVal": "$10,000",
                    "lblLimitsType": "Individual Tranaction Limits",
                    "lblPerTransaction": "Per Transaction",
                    "lblTitle": "Customer Name :",
                    "lblTransactionVal": "$10,000",
                    "lblVal1": "TEMENOS UK",
                    "lblVal2": "ACTIVE",
                    "lblWeekly": "Weekly",
                    "lblWeeklyVal": "$10,000"
                }, {
                    "lblDaily": "Daily",
                    "lblDailyVal": "$10,000",
                    "lblLimitsType": "Individual Tranaction Limits",
                    "lblPerTransaction": "Per Transaction",
                    "lblTitle": "Customer Name :",
                    "lblTransactionVal": "$10,000",
                    "lblVal1": "TEMENOS UK",
                    "lblVal2": "ACTIVE",
                    "lblWeekly": "Weekly",
                    "lblWeeklyVal": "$10,000"
                }, {
                    "lblDaily": "Daily",
                    "lblDailyVal": "$10,000",
                    "lblLimitsType": "Individual Tranaction Limits",
                    "lblPerTransaction": "Per Transaction",
                    "lblTitle": "Customer Name :",
                    "lblTransactionVal": "$10,000",
                    "lblVal1": "TEMENOS UK",
                    "lblVal2": "ACTIVE",
                    "lblWeekly": "Weekly",
                    "lblWeeklyVal": "$10,000"
                }, {
                    "lblDaily": "Daily",
                    "lblDailyVal": "$10,000",
                    "lblLimitsType": "Individual Tranaction Limits",
                    "lblPerTransaction": "Per Transaction",
                    "lblTitle": "Customer Name :",
                    "lblTransactionVal": "$10,000",
                    "lblVal1": "TEMENOS UK",
                    "lblVal2": "ACTIVE",
                    "lblWeekly": "Weekly",
                    "lblWeeklyVal": "$10,000"
                }, {
                    "lblDaily": "Daily",
                    "lblDailyVal": "$10,000",
                    "lblLimitsType": "Individual Tranaction Limits",
                    "lblPerTransaction": "Per Transaction",
                    "lblTitle": "Customer Name :",
                    "lblTransactionVal": "$10,000",
                    "lblVal1": "TEMENOS UK",
                    "lblVal2": "ACTIVE",
                    "lblWeekly": "Weekly",
                    "lblWeeklyVal": "$10,000"
                }, {
                    "lblDaily": "Daily",
                    "lblDailyVal": "$10,000",
                    "lblLimitsType": "Individual Tranaction Limits",
                    "lblPerTransaction": "Per Transaction",
                    "lblTitle": "Customer Name :",
                    "lblTransactionVal": "$10,000",
                    "lblVal1": "TEMENOS UK",
                    "lblVal2": "ACTIVE",
                    "lblWeekly": "Weekly",
                    "lblWeeklyVal": "$10,000"
                }, {
                    "lblDaily": "Daily",
                    "lblDailyVal": "$10,000",
                    "lblLimitsType": "Individual Tranaction Limits",
                    "lblPerTransaction": "Per Transaction",
                    "lblTitle": "Customer Name :",
                    "lblTransactionVal": "$10,000",
                    "lblVal1": "TEMENOS UK",
                    "lblVal2": "ACTIVE",
                    "lblWeekly": "Weekly",
                    "lblWeeklyVal": "$10,000"
                }, {
                    "lblDaily": "Daily",
                    "lblDailyVal": "$10,000",
                    "lblLimitsType": "Individual Tranaction Limits",
                    "lblPerTransaction": "Per Transaction",
                    "lblTitle": "Customer Name :",
                    "lblTransactionVal": "$10,000",
                    "lblVal1": "TEMENOS UK",
                    "lblVal2": "ACTIVE",
                    "lblWeekly": "Weekly",
                    "lblWeeklyVal": "$10,000"
                }, {
                    "lblDaily": "Daily",
                    "lblDailyVal": "$10,000",
                    "lblLimitsType": "Individual Tranaction Limits",
                    "lblPerTransaction": "Per Transaction",
                    "lblTitle": "Customer Name :",
                    "lblTransactionVal": "$10,000",
                    "lblVal1": "TEMENOS UK",
                    "lblVal2": "ACTIVE",
                    "lblWeekly": "Weekly",
                    "lblWeeklyVal": "$10,000"
                }, {
                    "lblDaily": "Daily",
                    "lblDailyVal": "$10,000",
                    "lblLimitsType": "Individual Tranaction Limits",
                    "lblPerTransaction": "Per Transaction",
                    "lblTitle": "Customer Name :",
                    "lblTransactionVal": "$10,000",
                    "lblVal1": "TEMENOS UK",
                    "lblVal2": "ACTIVE",
                    "lblWeekly": "Weekly",
                    "lblWeeklyVal": "$10,000"
                }],
                "groupCells": false,
                "height": "90%",
                "id": "segUserDetails",
                "isVisible": false,
                "left": "10dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "70dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxDaily": "flxDaily",
                    "flxInner1": "flxInner1",
                    "flxInner2": "flxInner2",
                    "flxLimits": "flxLimits",
                    "flxPerTransaction": "flxPerTransaction",
                    "flxSep": "flxSep",
                    "flxUserDetNew": "flxUserDetNew",
                    "flxValue": "flxValue",
                    "flxWeekly": "flxWeekly",
                    "lblDaily": "lblDaily",
                    "lblDailyVal": "lblDailyVal",
                    "lblLimitsType": "lblLimitsType",
                    "lblPerTransaction": "lblPerTransaction",
                    "lblTitle": "lblTitle",
                    "lblTransactionVal": "lblTransactionVal",
                    "lblVal1": "lblVal1",
                    "lblVal2": "lblVal2",
                    "lblWeekly": "lblWeekly",
                    "lblWeeklyVal": "lblWeeklyVal"
                },
                "width": "95%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxDetails = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "20dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "15dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "70dp",
                "verticalScrollIndicator": true,
                "width": "93%",
                "zIndex": 1
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var flxCustomerName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 7,
                "clipBounds": true,
                "id": "flxCustomerName",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 10,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCustomerName.setDefaultUnit(kony.flex.DP);
            var lblCustomerName = new kony.ui.Label({
                "id": "lblCustomerName",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.usermanagement.customerName"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxValue.setDefaultUnit(kony.flex.DP);
            var lblCustomerVal = new kony.ui.Label({
                "id": "lblCustomerVal",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "TEMENOS UK",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
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
                "right": 5,
                "skin": "sknLbl424242SSP19px",
                "text": "ACTIVE",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxValue.add(lblCustomerVal, lblStatus);
            flxCustomerName.add(lblCustomerName, flxValue);
            var flxSep = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSep",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep.setDefaultUnit(kony.flex.DP);
            flxSep.add();
            var flxCustomerID = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 7,
                "clipBounds": true,
                "id": "flxCustomerID",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCustomerID.setDefaultUnit(kony.flex.DP);
            var lblCustomerID = new kony.ui.Label({
                "id": "lblCustomerID",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.usermanagement.customerID"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCustomerIDVal = new kony.ui.Label({
                "id": "lblCustomerIDVal",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "TEMENOS UK",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCustomerID.add(lblCustomerID, lblCustomerIDVal);
            var flxSep1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSep1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep1.setDefaultUnit(kony.flex.DP);
            flxSep1.add();
            var flxContract = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 7,
                "clipBounds": true,
                "id": "flxContract",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContract.setDefaultUnit(kony.flex.DP);
            var lblContract = new kony.ui.Label({
                "id": "lblContract",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.usermanagement.contract"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblContractVal = new kony.ui.Label({
                "id": "lblContractVal",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "TEMENOS UK",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxContract.add(lblContract, lblContractVal);
            var flxSep2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSep2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep2.setDefaultUnit(kony.flex.DP);
            flxSep2.add();
            var flxuserRole = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 7,
                "clipBounds": true,
                "id": "flxuserRole",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxuserRole.setDefaultUnit(kony.flex.DP);
            var lblUserRole = new kony.ui.Label({
                "id": "lblUserRole",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.usermanagement.userRole"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblUserRoleVal = new kony.ui.Label({
                "id": "lblUserRoleVal",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "TEMENOS UK",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxuserRole.add(lblUserRole, lblUserRoleVal);
            var flxSep3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSep3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep3.setDefaultUnit(kony.flex.DP);
            flxSep3.add();
            var flxAccountAccess = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 7,
                "clipBounds": true,
                "id": "flxAccountAccess",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountAccess.setDefaultUnit(kony.flex.DP);
            var lblAccountAccess = new kony.ui.Label({
                "id": "lblAccountAccess",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.usermanagement.accountAccess"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAccountAccessVal = new kony.ui.Label({
                "id": "lblAccountAccessVal",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "TEMENOS UK",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAccountAccess.add(lblAccountAccess, lblAccountAccessVal);
            var flxep6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxep6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxep6.setDefaultUnit(kony.flex.DP);
            flxep6.add();
            var flxAccountLevelPermissions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 7,
                "clipBounds": true,
                "id": "flxAccountLevelPermissions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountLevelPermissions.setDefaultUnit(kony.flex.DP);
            var lblAccountAccessPermission = new kony.ui.Label({
                "id": "lblAccountAccessPermission",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.usermanagement.accountLevelPermission"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAccountLevelPermissionVal = new kony.ui.Label({
                "id": "lblAccountLevelPermissionVal",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "TEMENOS UK",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAccountLevelPermissions.add(lblAccountAccessPermission, lblAccountLevelPermissionVal);
            var flxSep4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSep4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep4.setDefaultUnit(kony.flex.DP);
            flxSep4.add();
            var flxOtherFetaurePermissions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 7,
                "clipBounds": true,
                "id": "flxOtherFetaurePermissions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOtherFetaurePermissions.setDefaultUnit(kony.flex.DP);
            var lblOtherPermissions = new kony.ui.Label({
                "id": "lblOtherPermissions",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.usermanagement.otherPermission"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblOtherPermissionsVal = new kony.ui.Label({
                "id": "lblOtherPermissionsVal",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "Other Feature Permissions",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxOtherFetaurePermissions.add(lblOtherPermissions, lblOtherPermissionsVal);
            var flxSep5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSep5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep5.setDefaultUnit(kony.flex.DP);
            flxSep5.add();
            var flxAutoSyncAccounts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 7,
                "clipBounds": true,
                "id": "flxAutoSyncAccounts",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAutoSyncAccounts.setDefaultUnit(kony.flex.DP);
            var lblAutoSync = new kony.ui.Label({
                "id": "lblAutoSync",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.usermanagement.AutoAccessAccounts"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAutoSyncVal = new kony.ui.Label({
                "id": "lblAutoSyncVal",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "Off",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAutoSyncAccounts.add(lblAutoSync, lblAutoSyncVal);
            var flxSep7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSep7",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep7.setDefaultUnit(kony.flex.DP);
            flxSep7.add();
            var flxIndTransactionLimit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 7,
                "clipBounds": true,
                "id": "flxIndTransactionLimit",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxIndTransactionLimit.setDefaultUnit(kony.flex.DP);
            var lbIndTransLimit = new kony.ui.Label({
                "id": "lbIndTransLimit",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSP32px",
                "text": kony.i18n.getLocalizedString("kony.mb.usermanagement.individualTransactionLimits"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxLimits = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxLimits",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "8dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLimits.setDefaultUnit(kony.flex.DP);
            var flxPerTransaction = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxPerTransaction",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            flxPerTransaction.setDefaultUnit(kony.flex.DP);
            var lblPerTransaction = new kony.ui.Label({
                "id": "lblPerTransaction",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.user.PerTransaction"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lbPerTransactionVal = new kony.ui.Label({
                "id": "lbPerTransactionVal",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "$10,000",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxPerTransaction.add(lblPerTransaction, lbPerTransactionVal);
            var flxDaily = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDaily",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            flxDaily.setDefaultUnit(kony.flex.DP);
            var lblDaily = new kony.ui.Label({
                "id": "lblDaily",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.user.Daily"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDailyVal = new kony.ui.Label({
                "id": "lblDailyVal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "$10,000",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDaily.add(lblDaily, lblDailyVal);
            var flxWeekly = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxWeekly",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            flxWeekly.setDefaultUnit(kony.flex.DP);
            var lblWeekly = new kony.ui.Label({
                "id": "lblWeekly",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.user.Weekly"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblWeeklyVal = new kony.ui.Label({
                "id": "lblWeeklyVal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "$10,000",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxWeekly.add(lblWeekly, lblWeeklyVal);
            flxLimits.add(flxPerTransaction, flxDaily, flxWeekly);
            flxIndTransactionLimit.add(lbIndTransLimit, flxLimits);
            var flxSep6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSep6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep6.setDefaultUnit(kony.flex.DP);
            flxSep6.add();
            var flxBulkTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 7,
                "clipBounds": true,
                "id": "flxBulkTransactions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBulkTransactions.setDefaultUnit(kony.flex.DP);
            var lblBulkTransactionLimit = new kony.ui.Label({
                "id": "lblBulkTransactionLimit",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSP32px",
                "text": kony.i18n.getLocalizedString("kony.mb.usermanagement.bulkTransactionLimits"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxBulkLimitVal = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBulkLimitVal",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "8dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBulkLimitVal.setDefaultUnit(kony.flex.DP);
            var flxBulkPerTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBulkPerTrans",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            flxBulkPerTrans.setDefaultUnit(kony.flex.DP);
            var lblBulkPerTrans = new kony.ui.Label({
                "id": "lblBulkPerTrans",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.user.PerTransaction"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblBulkPerTransVal = new kony.ui.Label({
                "id": "lblBulkPerTransVal",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": "$10,000",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxBulkPerTrans.add(lblBulkPerTrans, lblBulkPerTransVal);
            var flxBulkDaily = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBulkDaily",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            flxBulkDaily.setDefaultUnit(kony.flex.DP);
            var lblBulkDaily = new kony.ui.Label({
                "id": "lblBulkDaily",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.user.Daily"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblBulkDailyVal = new kony.ui.Label({
                "id": "lblBulkDailyVal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "$10,000",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxBulkDaily.add(lblBulkDaily, lblBulkDailyVal);
            var flxBulkWeekly = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBulkWeekly",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            flxBulkWeekly.setDefaultUnit(kony.flex.DP);
            var lblBulkWeekly = new kony.ui.Label({
                "id": "lblBulkWeekly",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.user.Weekly"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblBulkWeeklyVal = new kony.ui.Label({
                "id": "lblBulkWeeklyVal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "$10,000",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxBulkWeekly.add(lblBulkWeekly, lblBulkWeeklyVal);
            flxBulkLimitVal.add(flxBulkPerTrans, flxBulkDaily, flxBulkWeekly);
            flxBulkTransactions.add(lblBulkTransactionLimit, flxBulkLimitVal);
            flxDetails.add(flxCustomerName, flxSep, flxCustomerID, flxSep1, flxContract, flxSep2, flxuserRole, flxSep3, flxAccountAccess, flxep6, flxAccountLevelPermissions, flxSep4, flxOtherFetaurePermissions, flxSep5, flxAutoSyncAccounts, flxSep7, flxIndTransactionLimit, flxSep6, flxBulkTransactions);
            flxMain.add(flxHeader, segUserDetails, flxDetails);
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "60dp",
                "id": "flxFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 106
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
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
            flxFooter.add(customFooter);
            this.add(flxMain, flxFooter);
        };
        return [{
            "addWidgets": addWidgetsfrmUserDetailsNew,
            "enabledForIdleTimeout": false,
            "id": "frmUserDetailsNew",
            "init": controller.AS_Form_f70770bb12ac4097972c3795a342d888,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmffffff",
            "title": "User Details"
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