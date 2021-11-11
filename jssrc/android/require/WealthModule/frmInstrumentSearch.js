define("WealthModule/frmInstrumentSearch", function() {
    return function(controller) {
        function addWidgetsfrmInstrumentSearch() {
            this.setDefaultUnit(kony.flex.DP);
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
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
                "top": "0%",
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
                "placeholder": kony.i18n.getLocalizedString("i18n.wealth.searchStocksEtc"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbxSSPf1f1f1B",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "75.99%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [35, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
                "placeholderSkin": "sknTbxPlaceholderDefault",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var imgClose = new kony.ui.Image2({
                "centerY": "50.00%",
                "height": "30dp",
                "id": "imgClose",
                "isVisible": false,
                "left": "70%",
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
            var btnCancel = new kony.ui.Button({
                "centerY": "50.00%",
                "focusSkin": "sknBtn0095e428px",
                "id": "btnCancel",
                "isVisible": true,
                "right": "5%",
                "skin": "sknBtnffffffSSP28px",
                "text": "Cancel",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSearchMain.add(imgSearchIcon, tbxSearch, imgClose, btnCancel);
            flxSearch.add(flxSearchMain);
            var flxSearchResult = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "92%",
                "id": "flxSearchResult",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "1dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "65dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSearchResult.setDefaultUnit(kony.flex.DP);
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
                "skin": "sknlblee0005SSPReg15px",
                "text": "No instruments available",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxError.add(lblError);
            var segInstrument = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "lblInstrumentDet": "Label",
                    "lblInstrumentName": "Label"
                }, {
                    "lblInstrumentDet": "Label",
                    "lblInstrumentName": "Label"
                }, {
                    "lblInstrumentDet": "Label",
                    "lblInstrumentName": "Label"
                }, {
                    "lblInstrumentDet": "Label",
                    "lblInstrumentName": "Label"
                }, {
                    "lblInstrumentDet": "Label",
                    "lblInstrumentName": "Label"
                }, {
                    "lblInstrumentDet": "Label",
                    "lblInstrumentName": "Label"
                }, {
                    "lblInstrumentDet": "Label",
                    "lblInstrumentName": "Label"
                }, {
                    "lblInstrumentDet": "Label",
                    "lblInstrumentName": "Label"
                }, {
                    "lblInstrumentDet": "Label",
                    "lblInstrumentName": "Label"
                }, {
                    "lblInstrumentDet": "Label",
                    "lblInstrumentName": "Label"
                }],
                "groupCells": false,
                "height": "83.63%",
                "id": "segInstrument",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxInstrument",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxBottomBorder": "flxBottomBorder",
                    "flxInstrument": "flxInstrument",
                    "lblInstrumentDet": "lblInstrumentDet",
                    "lblInstrumentName": "lblInstrumentName"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSearchResult.add(flxError, segInstrument);
            this.add(flxSearch, flxSearchResult);
        };
        return [{
            "addWidgets": addWidgetsfrmInstrumentSearch,
            "enabledForIdleTimeout": false,
            "id": "frmInstrumentSearch",
            "init": controller.AS_Form_fd8fc696a77a483bb86f19544a75a7fa,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmTitleBar"
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
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});