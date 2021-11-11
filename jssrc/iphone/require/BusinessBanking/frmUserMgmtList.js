define("BusinessBanking/frmUserMgmtList", function() {
    return function(controller) {
        function addWidgetsfrmUserMgmtList() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": false,
                "height": "100%",
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
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
                        "text": kony.i18n.getLocalizedString("kony.mb.userDetails.userManagement")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSearch.setDefaultUnit(kony.flex.DP);
            var flxSearchMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSearchMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "-0.50%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxSearchMain.setDefaultUnit(kony.flex.DP);
            var imgSearchIcon = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgSearchIcon",
                "isVisible": true,
                "left": "30dp",
                "skin": "slImage",
                "src": "search.png",
                "width": "15dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var tbxSearch = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50.00%",
                "focusSkin": "sknTbxSSPf1f1f1B",
                "height": "38dp",
                "id": "tbxSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "4%",
                "placeholder": kony.i18n.getLocalizedString("kony.mb.ExternalAccounts.Search"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbxSSPf1f1f1B",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "92%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [35, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
                "placeholderSkin": "sknTbxPlaceholderDefault",
                "showClearButton": false,
                "showCloseButton": false,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxSearchMain.add(imgSearchIcon, tbxSearch);
            flxSearch.add(flxSearchMain);
            var flxAllUser = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAllUser",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1dp",
                "width": "100%"
            }, {}, {});
            flxAllUser.setDefaultUnit(kony.flex.DP);
            var flxInner1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxInner1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInner1.setDefaultUnit(kony.flex.DP);
            var flxAllUsersHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAllUsersHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {}, {});
            flxAllUsersHeader.setDefaultUnit(kony.flex.DP);
            var lblUserName = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblUserName",
                "isVisible": true,
                "left": "4%",
                "skin": "sknLbl424242SSP28px",
                "text": "All Users",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblUsersCount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblUsersCount",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLbl424242SSP28px",
                "text": "(20)",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAllUsersHeader.add(lblUserName, lblUsersCount);
            var flxConfirmTick = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxConfirmTick",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "60dp",
                "zIndex": 1
            }, {}, {});
            flxConfirmTick.setDefaultUnit(kony.flex.DP);
            var imgConfirmTick = new kony.ui.Image2({
                "height": "100%",
                "id": "imgConfirmTick",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "filters.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxConfirmTick.add(imgConfirmTick);
            flxInner1.add(flxAllUsersHeader, flxConfirmTick);
            var flxSep = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
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
            flxAllUser.add(flxInner1, flxSep);
            var flxuserList = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "85%",
                "id": "flxuserList",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%"
            }, {}, {});
            flxuserList.setDefaultUnit(kony.flex.DP);
            var segUserManagement = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "lblTimeStamp": "28/07/2020 10:35:55(ET)",
                    "lblUserLevel": "Administrator",
                    "lblUserName": "Nannie Cannon",
                    "lblUserStatus": "Suspend"
                }, {
                    "lblTimeStamp": "28/07/2020 10:35:55(ET)",
                    "lblUserLevel": "Creator",
                    "lblUserName": "John Neil",
                    "lblUserStatus": "Active"
                }, {
                    "lblTimeStamp": "28/07/2020 10:35:55(ET)",
                    "lblUserLevel": "Administrator",
                    "lblUserName": "Nannie Cannon",
                    "lblUserStatus": "Suspend"
                }, {
                    "lblTimeStamp": "28/07/2020 10:35:55(ET)",
                    "lblUserLevel": "Creator",
                    "lblUserName": "John Neil",
                    "lblUserStatus": "Hold"
                }, {
                    "lblTimeStamp": "28/07/2020 10:35:55(ET)",
                    "lblUserLevel": "Administrator",
                    "lblUserName": "Nannie Cannon",
                    "lblUserStatus": "Active"
                }, {
                    "lblTimeStamp": "28/07/2020 10:35:55(ET)",
                    "lblUserLevel": "Creator",
                    "lblUserName": "John Neil",
                    "lblUserStatus": "Suspend"
                }, {
                    "lblTimeStamp": "28/07/2020 10:35:55(ET)",
                    "lblUserLevel": "Administrator",
                    "lblUserName": "Nannie Cannon",
                    "lblUserStatus": "Active"
                }, {
                    "lblTimeStamp": "28/07/2020 10:35:55(ET)",
                    "lblUserLevel": "Creator",
                    "lblUserName": "John Neil",
                    "lblUserStatus": "Suspend"
                }, {
                    "lblTimeStamp": "28/07/2020 10:35:55(ET)",
                    "lblUserLevel": "Administrator",
                    "lblUserName": "Nannie Cannon",
                    "lblUserStatus": "Active"
                }, {
                    "lblTimeStamp": "28/07/2020 10:35:55(ET)",
                    "lblUserLevel": "Creator",
                    "lblUserName": "John Neil",
                    "lblUserStatus": "Suspend"
                }, {
                    "lblTimeStamp": "28/07/2020 10:35:55(ET)",
                    "lblUserLevel": "Creator",
                    "lblUserName": "Nannie Cannon",
                    "lblUserStatus": "Active"
                }, {
                    "lblTimeStamp": "28/07/2020 10:35:55(ET)",
                    "lblUserLevel": "Administrator",
                    "lblUserName": "John Neil",
                    "lblUserStatus": "Suspend"
                }, {
                    "lblTimeStamp": "28/07/2020 10:35:55(ET)",
                    "lblUserLevel": "Creator",
                    "lblUserName": "Nannie Cannon",
                    "lblUserStatus": "Active"
                }, {
                    "lblTimeStamp": "28/07/2020 10:35:55(ET)",
                    "lblUserLevel": "Administrator",
                    "lblUserName": "Nannie Cannon",
                    "lblUserStatus": "Active"
                }, {
                    "lblTimeStamp": "28/07/2020 10:35:55(ET)",
                    "lblUserLevel": "Creator",
                    "lblUserName": "Nannie Cannon",
                    "lblUserStatus": "Active"
                }, {
                    "lblTimeStamp": "28/07/2020 10:35:55(ET)",
                    "lblUserLevel": "Administrator",
                    "lblUserName": "Nannie Cannon",
                    "lblUserStatus": "Active"
                }, {
                    "lblTimeStamp": "28/07/2020 10:35:55(ET)",
                    "lblUserLevel": "Creator",
                    "lblUserName": "Nannie Cannon",
                    "lblUserStatus": "Active"
                }, {
                    "lblTimeStamp": "28/07/2020 10:35:55(ET)",
                    "lblUserLevel": "Administrator",
                    "lblUserName": "Nannie Cannon",
                    "lblUserStatus": "Active"
                }, {
                    "lblTimeStamp": "28/07/2020 10:35:55(ET)",
                    "lblUserLevel": "Creator",
                    "lblUserName": "Nannie Cannon",
                    "lblUserStatus": "Active"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segUserManagement",
                "isVisible": true,
                "left": "4%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Normal",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxUsrmgmtMain",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxContent": "flxContent",
                    "flxInner1": "flxInner1",
                    "flxInner2": "flxInner2",
                    "flxSep": "flxSep",
                    "flxUsrmgmtMain": "flxUsrmgmtMain",
                    "lblTimeStamp": "lblTimeStamp",
                    "lblUserLevel": "lblUserLevel",
                    "lblUserName": "lblUserName",
                    "lblUserStatus": "lblUserStatus"
                },
                "width": "92%",
                "zIndex": 50
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": false
            });
            flxuserList.add(segUserManagement);
            var flxFilters = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxFilters",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxFilters.setDefaultUnit(kony.flex.DP);
            var segFilters = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "lblUserName": "Temenos Org"
                        },
                        [{
                            "imgConfirmTick": "correct.png",
                            "lblCompanyName": "Temenos UK - 5629"
                        }, {
                            "imgConfirmTick": "correct.png",
                            "lblCompanyName": "Temenos US - 6372"
                        }, {
                            "imgConfirmTick": "correct.png",
                            "lblCompanyName": "Temenos Ind - 7363"
                        }, {
                            "imgConfirmTick": "correct.png",
                            "lblCompanyName": "Temenos Aus - 7483"
                        }]
                    ],
                    [{
                            "lblUserName": "Global Pharma "
                        },
                        [{
                            "imgConfirmTick": "correct.png",
                            "lblCompanyName": "Pharma 1- 6382"
                        }, {
                            "imgConfirmTick": "correct.png",
                            "lblCompanyName": "Pharma 2 - 2312"
                        }, {
                            "imgConfirmTick": "correct.png",
                            "lblCompanyName": "Pharma 3 - 3212"
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segFilters",
                "isVisible": true,
                "left": "2%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Normal",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxUsrmgmtMain1",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxUsrmgmtMain2",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxContent": "flxContent",
                    "flxInner1": "flxInner1",
                    "flxInner2": "flxInner2",
                    "flxSep": "flxSep",
                    "flxSep1": "flxSep1",
                    "flxUsrmgmtMain1": "flxUsrmgmtMain1",
                    "flxUsrmgmtMain2": "flxUsrmgmtMain2",
                    "imgConfirmTick": "imgConfirmTick",
                    "lblCompanyName": "lblCompanyName",
                    "lblUserName": "lblUserName"
                },
                "width": "98%",
                "zIndex": 50
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": false
            });
            flxFilters.add(segFilters);
            var flxNoTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": 400,
                "id": "flxNoTransactions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxNoTransactions.setDefaultUnit(kony.flex.DP);
            var lblNoTransaction = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoTransaction",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.maps.NoResultsFound"),
                "textStyle": {},
                "top": "200dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNoTransactions.add(lblNoTransaction);
            flxMainContainer.add(flxHeader, flxSearch, flxAllUser, flxuserList, flxFilters, flxNoTransactions);
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxFooter",
                "isVisible": true,
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
            var flxHamburger = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "63dp",
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
                "right": "0dp",
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
                "right": "0dp",
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
                "right": "-50dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50dp",
                "zIndex": 3
            }, {}, {});
            flxHamburgerDummy.setDefaultUnit(kony.flex.DP);
            flxHamburgerDummy.add();
            flxHamburgerWrapper.add(flxHamburgerContainer, flxHamburgerDummy);
            flxHamburger.add(flxHamburgerWrapper);
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
            this.add(flxMainContainer, flxFooter, flxHamburger, flxPopup);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_b0852dcf6915420b998ea6fb75f79b17,
            "metaData": {
                "image": "backbutton.png"
            },
            "id": "LBarBtnItem0"
        });
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "4b88f100",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "image": ""
            },
            "id": "RBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmUserMgmtList,
            "enabledForIdleTimeout": true,
            "id": "frmUserMgmtList",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_f8d3611d0ece4b42933dab68b8df071f,
            "preShow": function(eventobject) {
                controller.AS_Form_iebe7ba91f5c40c3b6753e2659417a99(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "User Management"
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
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});