define("WealthModule/frmAccounts", function() {
    return function(controller) {
        function addWidgetsfrmAccounts() {
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
                "skin": "slFbox",
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
                        "isVisible": false,
                        "text": "..."
                    },
                    "flxHeaderShadow": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": true,
                        "right": "20dp"
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "height": "25dp",
                        "isVisible": true,
                        "right": "0%",
                        "src": "more_header.png",
                        "width": "25dp"
                    },
                    "lblLocateUs": {
                        "centerY": "49%",
                        "text": "Account Activity"
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
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "-1dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxContainer",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxContainer.setDefaultUnit(kony.flex.DP);
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
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
                "skin": "slFbox",
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
                "centerY": "49%",
                "focusSkin": "sknTbxSSPf1f1f1B",
                "height": "35dp",
                "id": "tbxSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "18dp",
                "placeholder": kony.i18n.getLocalizedString("i18n.wealth.searchKeywords"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbxSSPf1f1f1B",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [35, 3, 30, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
                "placeholderSkin": "sknTbxPlaceholderDefault",
                "showClearButton": false,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var imgClose = new kony.ui.Image2({
                "centerY": "50.00%",
                "height": "30dp",
                "id": "imgClose",
                "isVisible": false,
                "left": "85%",
                "skin": "slImage",
                "src": "clearcircle.png",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSearchMain.add(imgSearchIcon, tbxSearch, imgClose);
            flxSearch.add(flxSearchMain);
            flxContainer.add(flxSearch);
            var flxTimePeriod = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxTimePeriod",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxTimePeriod.setDefaultUnit(kony.flex.DP);
            var flxTime = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "50%",
                "clipBounds": true,
                "id": "flxTime",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTime.setDefaultUnit(kony.flex.DP);
            var flxByTimePeriod = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxByTimePeriod",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "40%"
            }, {}, {});
            flxByTimePeriod.setDefaultUnit(kony.flex.DP);
            var lblTimePeriod = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTimePeriod",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.byTimePeriod"),
                "textStyle": {},
                "top": "0dp",
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxByTimePeriod.add(lblTimePeriod);
            var flxPreviousDays = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxPreviousDays",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "40%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "60%"
            }, {}, {});
            flxPreviousDays.setDefaultUnit(kony.flex.DP);
            var lblPreviousDays = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPreviousDays",
                "isVisible": true,
                "right": "45dp",
                "skin": "sknLbl4176A4SSPReg26px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.previous30Days"),
                "textStyle": {},
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
            var imgPreviousDay = new kony.ui.Image2({
                "centerY": "50%",
                "height": "19dp",
                "id": "imgPreviousDay",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "chevron.png",
                "width": "19dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPreviousDays.add(lblPreviousDays, imgPreviousDay);
            flxTime.add(flxByTimePeriod, flxPreviousDays);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxe3e3e3border",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            flxTimePeriod.add(flxTime, flxSeperator);
            var flxCashAccounts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxCashAccounts",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxCashAccounts.setDefaultUnit(kony.flex.DP);
            var flxCashAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "50%",
                "clipBounds": true,
                "id": "flxCashAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCashAccount.setDefaultUnit(kony.flex.DP);
            var flxByCashAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxByCashAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "50%"
            }, {}, {});
            flxByCashAccount.setDefaultUnit(kony.flex.DP);
            var lblCashAccount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCashAccount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": "Cash Account:",
                "textStyle": {},
                "top": "0dp",
                "width": "55%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxByCashAccount.add(lblCashAccount);
            var flxCash = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxCash",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%"
            }, {}, {});
            flxCash.setDefaultUnit(kony.flex.DP);
            var lblCash = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCash",
                "isVisible": true,
                "right": "45dp",
                "skin": "sknLbl4176A4SSPReg26px",
                "text": "USD-1256",
                "textStyle": {},
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
            var imgCash = new kony.ui.Image2({
                "centerY": "50%",
                "height": "19dp",
                "id": "imgCash",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "chevron.png",
                "width": "19dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCash.add(lblCash, imgCash);
            flxCashAccount.add(flxByCashAccount, flxCash);
            var flxCellSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "3dp",
                "id": "flxCellSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242grad",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxCellSeperator.setDefaultUnit(kony.flex.DP);
            flxCellSeperator.add();
            flxCashAccounts.add(flxCashAccount, flxCellSeperator);
            var segList = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblAmountValue": "$66,232.00",
                    "lblDate": "11/10/2020",
                    "lblName": "Income",
                    "lblValue": "+$550.00"
                }, {
                    "lblAmountValue": "$66,232.00",
                    "lblDate": "11/10/2020",
                    "lblName": "Income",
                    "lblValue": "+$550.00"
                }, {
                    "lblAmountValue": "$66,232.00",
                    "lblDate": "11/10/2020",
                    "lblName": "Income",
                    "lblValue": "+$550.00"
                }, {
                    "lblAmountValue": "$66,232.00",
                    "lblDate": "11/10/2020",
                    "lblName": "Income",
                    "lblValue": "+$550.00"
                }, {
                    "lblAmountValue": "$66,232.00",
                    "lblDate": "11/10/2020",
                    "lblName": "Income",
                    "lblValue": "+$550.00"
                }, {
                    "lblAmountValue": "$66,232.00",
                    "lblDate": "11/10/2020",
                    "lblName": "Income",
                    "lblValue": "+$550.00"
                }, {
                    "lblAmountValue": "$66,232.00",
                    "lblDate": "11/10/2020",
                    "lblName": "Income",
                    "lblValue": "+$550.00"
                }, {
                    "lblAmountValue": "$66,232.00",
                    "lblDate": "11/10/2020",
                    "lblName": "Income",
                    "lblValue": "+$550.00"
                }, {
                    "lblAmountValue": "$66,232.00",
                    "lblDate": "11/10/2020",
                    "lblName": "Income",
                    "lblValue": "+$550.00"
                }, {
                    "lblAmountValue": "$66,232.00",
                    "lblDate": "11/10/2020",
                    "lblName": "Income",
                    "lblValue": "+$550.00"
                }],
                "groupCells": false,
                "id": "segList",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxWealthAccountDetail",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": false,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAmount": "flxAmount",
                    "flxBottomBorder": "flxBottomBorder",
                    "flxDate": "flxDate",
                    "flxName": "flxName",
                    "flxRowOne": "flxRowOne",
                    "flxRowTwo": "flxRowTwo",
                    "flxValue": "flxValue",
                    "flxWealthAccountDetail": "flxWealthAccountDetail",
                    "lblAmountValue": "lblAmountValue",
                    "lblDate": "lblDate",
                    "lblName": "lblName",
                    "lblValue": "lblValue"
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
            var segmentDetailsWealth = new com.temenos.infinity.segmentDetailsWealth({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "id": "segmentDetailsWealth",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "segmentDetailsWealth": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "height": "viz.val_cleared",
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
            segmentDetailsWealth.fieldOneValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.noRecordsFoundText = "{i.i18n.wealth.noAccountMovements}";
            segmentDetailsWealth.fieldOneKey = "";
            segmentDetailsWealth.amountFormat = "{ \"locale\":\"\", \"positiveFormat\" : \"{CS}{D}\", \"negativeFormat\" : \"-{CS}{D}\", \"fractionDigits\":\"2\"}";
            segmentDetailsWealth.operationName = "getAccountActivityOperations";
            segmentDetailsWealth.topFlex = "Accounts";
            segmentDetailsWealth.totalValueKey = "";
            segmentDetailsWealth.referenceCurrency = "currencyId";
            segmentDetailsWealth.featuresAndPermission = "";
            segmentDetailsWealth.fieldTwoValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.dateFormat = "m/d/Y";
            segmentDetailsWealth.objectName = "AccountActivity";
            segmentDetailsWealth.placeholderSearchText = "{i.i18n.wealth.searchKeywords}";
            segmentDetailsWealth.totalValue = "";
            segmentDetailsWealth.fieldThreeValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.fieldFourKey = "";
            segmentDetailsWealth.backendDateFormat = "Ymd";
            segmentDetailsWealth.serviceName = "WealthObjects";
            segmentDetailsWealth.orderToggleIsVisible = "false";
            segmentDetailsWealth.fieldThreeKey = "";
            segmentDetailsWealth.requestParam = "{   \"portfolioId\":\"{$.c.portfolioId}\",   \"accountId\":\"{$.c.accountId}\", \"dateFrom\":\"{$.c.dateFrom}\", \"dateTo\":\"{$.c.dateTo}\", \"listType\":\"{$.c.listType}\", \"sortBy\":\"{$.c.sortBy}\", \"searchByInstrumentName\":\"{$.c.searchByInstrumentName}\" }";
            segmentDetailsWealth.fieldFiveValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.fieldFiveKey = "";
            segmentDetailsWealth.serviceResponseKey = "accountActivityList.body";
            segmentDetailsWealth.fieldFourValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.rowSeperatorSkin = "sknflxe3e3e3border";
            segmentDetailsWealth.fieldOneValue = "";
            segmentDetailsWealth.fieldFiveValue = "balance";
            segmentDetailsWealth.fieldThreeValue = "amount";
            segmentDetailsWealth.fieldTwoValue = "displayName";
            segmentDetailsWealth.fieldFourValue = "bookingDate";
            segmentDetailsWealth.fieldIdOne = "";
            segmentDetailsWealth.fieldName = "";
            segmentDetailsWealth.actionImgSrc = "";
            segmentDetailsWealth.logoImgSrc = "";
            segmentDetailsWealth.logoIsVisible = "false";
            segmentDetailsWealth.actionImgIsVisible = "false";
            segmentDetailsWealth.fieldOneType = "";
            segmentDetailsWealth.fieldThreeType = "Amount";
            segmentDetailsWealth.fieldFiveType = "Amount";
            segmentDetailsWealth.fieldFourType = "accountDateFormat";
            segmentDetailsWealth.fieldTwoType = "Text";
            segmentDetailsWealth.currencyCode = "currencyId";
            segmentDetailsWealth.fieldTwoKey = "";
            segmentDetailsWealth.fieldIdTwo = "";
            segmentDetailsWealth.allFieldKeySkin = "sknlbl727272SSP93pr";
            segmentDetailsWealth.orderStatusIsVisible = "false";
            segmentDetailsWealth.statusImgSrc = "statusImg";
            segmentDetailsWealth.statusText = "orderStatus";
            var flxError = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "10%",
                "id": "flxError",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxError.setDefaultUnit(kony.flex.DP);
            var lblError = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblError",
                "isVisible": true,
                "skin": "sknLbl727272SSPR15px",
                "text": "No accounts available",
                "textStyle": {},
                "top": "5dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxError.add(lblError);
            flxMainContainer.add(flxContainer, flxTimePeriod, flxCashAccounts, segList, segmentDetailsWealth, flxError);
            var flxAdditionalOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAdditionalOptions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1070
            }, {}, {});
            flxAdditionalOptions.setDefaultUnit(kony.flex.DP);
            var flxPerformAdditionalOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 80,
                "clipBounds": true,
                "id": "flxPerformAdditionalOptions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffRadiusffffff10px",
                "zIndex": 2
            }, {}, {});
            flxPerformAdditionalOptions.setDefaultUnit(kony.flex.DP);
            var flxDownloadTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxDownloadTransactions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDownloadTransactions.setDefaultUnit(kony.flex.DP);
            var lblDownloadTransactions = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblDownloadTransactions",
                "isVisible": true,
                "skin": "sknlbl007afsfpdr",
                "text": "Download Account Activity",
                "textStyle": {},
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
            var lblSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "lblSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxe",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            lblSeparator.setDefaultUnit(kony.flex.DP);
            lblSeparator.add();
            flxDownloadTransactions.add(lblDownloadTransactions, lblSeparator);
            var flxSortBy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxSortBy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSortBy.setDefaultUnit(kony.flex.DP);
            var lblSortyBy = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblSortyBy",
                "isVisible": true,
                "skin": "sknlbl007afsfpdr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.sortBy"),
                "textStyle": {},
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
            var lblSep = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "lblSep",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            lblSep.setDefaultUnit(kony.flex.DP);
            lblSep.add();
            flxSortBy.add(lblSortyBy, lblSep);
            flxPerformAdditionalOptions.add(flxDownloadTransactions, flxSortBy);
            var flxCancelOption = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxCancelOption",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffRadiusffffff10px",
                "zIndex": 1070
            }, {}, {});
            flxCancelOption.setDefaultUnit(kony.flex.DP);
            var flxCancel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxCancel",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1070
            }, {}, {});
            flxCancel.setDefaultUnit(kony.flex.DP);
            var lblCancel = new kony.ui.Label({
                "centerX": "50.04%",
                "centerY": "50.00%",
                "id": "lblCancel",
                "isVisible": true,
                "skin": "sknLbl007affsfpdbold",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1070
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxCancel.add(lblCancel);
            flxCancelOption.add(flxCancel);
            flxAdditionalOptions.add(flxPerformAdditionalOptions, flxCancelOption);
            var socialshare = new com.konymp.socialshare({
                "height": "0%",
                "id": "socialshare",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "top": "0dp",
                "width": "0%",
                "overrides": {
                    "socialshare": {
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
            socialshare.title = "Kony";
            this.add(flxHeader, flxMainContainer, flxAdditionalOptions, socialshare);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_b0d3d6feb6d74f3399e2b8febc53048c,
            "metaData": {
                "image": "more_header.png"
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
            "addWidgets": addWidgetsfrmAccounts,
            "bounces": true,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmAccounts",
            "init": controller.AS_Form_bfbf3315049e4d1c91fb34a0475b5ca5,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_b3194da4507f4dd09daddd239d24fe08,
            "preShow": function(eventobject) {
                controller.AS_Form_c9c12c11a87a43559a808dbab6c17681(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Account Activity"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "bounces": true,
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