define(function() {
    return function(controller) {
        var accountsTransactionDetailsNative = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "accountsTransactionDetailsNative",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_a8eea95aae654f4c95ff8cd5c884f1dd(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "accountsTransactionDetailsNative"), extendConfig({}, controller.args[1], "accountsTransactionDetailsNative"), extendConfig({}, controller.args[2], "accountsTransactionDetailsNative"));
        accountsTransactionDetailsNative.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "100%",
            "horizontalScrollIndicator": true,
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "sknScrFlxffffff",
            "top": "0dp",
            "verticalScrollIndicator": false,
            "width": "100%"
        }, controller.args[0], "flxMain"), extendConfig({}, controller.args[1], "flxMain"), extendConfig({}, controller.args[2], "flxMain"));
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxDetails1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDetails1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxDetails1"), extendConfig({}, controller.args[1], "flxDetails1"), extendConfig({}, controller.args[2], "flxDetails1"));
        flxDetails1.setDefaultUnit(kony.flex.DP);
        var flxSeparator1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "0dp",
            "id": "flxSeparator1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknflxE3E3E3",
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator1"), extendConfig({}, controller.args[1], "flxSeparator1"), extendConfig({}, controller.args[2], "flxSeparator1"));
        flxSeparator1.setDefaultUnit(kony.flex.DP);
        flxSeparator1.add();
        var lblDetailsTitle1 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsTitle1",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg22px",
            "text": "Transfer",
            "textStyle": {},
            "top": "19dp",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsTitle1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsTitle1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsTitle1"));
        var lblDetailsValue1 = new kony.ui.Label(extendConfig({
            "height": "18dp",
            "id": "lblDetailsValue1",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl4176a4Reg35px",
            "text": "$368.00",
            "textStyle": {},
            "top": "38dp",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsValue1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsValue1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsValue1"));
        var flxStatus = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxStatus",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "35dp",
            "width": "100dp"
        }, controller.args[0], "flxStatus"), extendConfig({}, controller.args[1], "flxStatus"), extendConfig({}, controller.args[2], "flxStatus"));
        flxStatus.setDefaultUnit(kony.flex.DP);
        var lblStatus = new kony.ui.Label(extendConfig({
            "id": "lblStatus",
            "isVisible": true,
            "right": "0dp",
            "skin": "ICSknLbl42424215px",
            "text": "Successful",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblStatus"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblStatus"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblStatus"));
        var lblStatusIndicator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "lblStatusIndicator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "5dp",
            "skin": "ICSknFlx2a9e05",
            "top": "5dp",
            "width": "10dp",
            "zIndex": 1
        }, controller.args[0], "lblStatusIndicator"), extendConfig({}, controller.args[1], "lblStatusIndicator"), extendConfig({}, controller.args[2], "lblStatusIndicator"));
        lblStatusIndicator.setDefaultUnit(kony.flex.DP);
        lblStatusIndicator.add();
        flxStatus.add(lblStatus, lblStatusIndicator);
        flxDetails1.add(flxSeparator1, lblDetailsTitle1, lblDetailsValue1, flxStatus);
        var flxDetails2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDetails2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxDetails2"), extendConfig({}, controller.args[1], "flxDetails2"), extendConfig({}, controller.args[2], "flxDetails2"));
        flxDetails2.setDefaultUnit(kony.flex.DP);
        var flxSeparator2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknflxE3E3E3",
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator2"), extendConfig({}, controller.args[1], "flxSeparator2"), extendConfig({}, controller.args[2], "flxSeparator2"));
        flxSeparator2.setDefaultUnit(kony.flex.DP);
        flxSeparator2.add();
        var lblDetailsTitle2 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsTitle2",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg22px",
            "text": "Recipient:",
            "textStyle": {},
            "top": "18dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsTitle2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsTitle2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsTitle2"));
        var lblDetailsValue2 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsValue2",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblSSP42424213px",
            "text": "Little John...8982",
            "textStyle": {},
            "top": "35dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsValue2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsValue2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsValue2"));
        flxDetails2.add(flxSeparator2, lblDetailsTitle2, lblDetailsValue2);
        var flxDetails3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDetails3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxDetails3"), extendConfig({}, controller.args[1], "flxDetails3"), extendConfig({}, controller.args[2], "flxDetails3"));
        flxDetails3.setDefaultUnit(kony.flex.DP);
        var flxSeparator3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknflxE3E3E3",
            "top": "10dp",
            "zIndex": 1
        }, controller.args[0], "flxSeparator3"), extendConfig({}, controller.args[1], "flxSeparator3"), extendConfig({}, controller.args[2], "flxSeparator3"));
        flxSeparator3.setDefaultUnit(kony.flex.DP);
        flxSeparator3.add();
        var lblDetailsTitle3 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsTitle3",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg22px",
            "text": "Transferred From:",
            "textStyle": {},
            "top": "18dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsTitle3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsTitle3"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsTitle3"));
        var lblDetailsValue3 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsValue3",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblSSP42424213px",
            "text": "John Checking...8082",
            "textStyle": {},
            "top": "35dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsValue3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsValue3"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsValue3"));
        flxDetails3.add(flxSeparator3, lblDetailsTitle3, lblDetailsValue3);
        var flxDetails4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDetails4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxDetails4"), extendConfig({}, controller.args[1], "flxDetails4"), extendConfig({}, controller.args[2], "flxDetails4"));
        flxDetails4.setDefaultUnit(kony.flex.DP);
        var flxSeparator4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknflxE3E3E3",
            "top": "10dp",
            "zIndex": 1
        }, controller.args[0], "flxSeparator4"), extendConfig({}, controller.args[1], "flxSeparator4"), extendConfig({}, controller.args[2], "flxSeparator4"));
        flxSeparator4.setDefaultUnit(kony.flex.DP);
        flxSeparator4.add();
        var lblDetailsTitle4 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsTitle4",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg22px",
            "text": "Transaction Description:",
            "textStyle": {},
            "top": "18dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsTitle4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsTitle4"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsTitle4"));
        var lblDetailsValue4 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsValue4",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblSSP42424213px",
            "text": "Wire out TRN: 91278651273 Service REF: 090922 BNF: ABA INC",
            "textStyle": {},
            "top": "35dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsValue4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsValue4"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsValue4"));
        flxDetails4.add(flxSeparator4, lblDetailsTitle4, lblDetailsValue4);
        var flxDetails5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDetails5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxDetails5"), extendConfig({}, controller.args[1], "flxDetails5"), extendConfig({}, controller.args[2], "flxDetails5"));
        flxDetails5.setDefaultUnit(kony.flex.DP);
        var flxSeparator5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknflxE3E3E3",
            "top": "10dp",
            "zIndex": 1
        }, controller.args[0], "flxSeparator5"), extendConfig({}, controller.args[1], "flxSeparator5"), extendConfig({}, controller.args[2], "flxSeparator5"));
        flxSeparator5.setDefaultUnit(kony.flex.DP);
        flxSeparator5.add();
        var lblDetailsTitle5 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsTitle5",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg22px",
            "text": "Transaction Date:",
            "textStyle": {},
            "top": "18dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsTitle5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsTitle5"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsTitle5"));
        var lblDetailsValue5 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsValue5",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblSSP42424213px",
            "text": "04/17/2018",
            "textStyle": {},
            "top": "35dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsValue5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsValue5"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsValue5"));
        flxDetails5.add(flxSeparator5, lblDetailsTitle5, lblDetailsValue5);
        var flxDetails6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDetails6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxDetails6"), extendConfig({}, controller.args[1], "flxDetails6"), extendConfig({}, controller.args[2], "flxDetails6"));
        flxDetails6.setDefaultUnit(kony.flex.DP);
        var flxSeparator6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknflxE3E3E3",
            "top": "10dp",
            "zIndex": 1
        }, controller.args[0], "flxSeparator6"), extendConfig({}, controller.args[1], "flxSeparator6"), extendConfig({}, controller.args[2], "flxSeparator6"));
        flxSeparator6.setDefaultUnit(kony.flex.DP);
        flxSeparator6.add();
        var lblDetailsTitle6 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsTitle6",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg22px",
            "text": "Frequency:",
            "textStyle": {},
            "top": "18dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsTitle6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsTitle6"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsTitle6"));
        var lblDetailsValue6 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsValue6",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblSSP42424213px",
            "text": "Monthly Once",
            "textStyle": {},
            "top": "35dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsValue6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsValue6"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsValue6"));
        flxDetails6.add(flxSeparator6, lblDetailsTitle6, lblDetailsValue6);
        var flxDetails7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDetails7",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxDetails7"), extendConfig({}, controller.args[1], "flxDetails7"), extendConfig({}, controller.args[2], "flxDetails7"));
        flxDetails7.setDefaultUnit(kony.flex.DP);
        var flxSeparator7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator7",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknflxE3E3E3",
            "top": "10dp",
            "zIndex": 1
        }, controller.args[0], "flxSeparator7"), extendConfig({}, controller.args[1], "flxSeparator7"), extendConfig({}, controller.args[2], "flxSeparator7"));
        flxSeparator7.setDefaultUnit(kony.flex.DP);
        flxSeparator7.add();
        var lblDetailsTitle7 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsTitle7",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg22px",
            "text": "Reference Number:",
            "textStyle": {},
            "top": "18dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsTitle7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsTitle7"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsTitle7"));
        var lblDetailsValue7 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsValue7",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblSSP42424213px",
            "text": "9898279382479823",
            "textStyle": {},
            "top": "35dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsValue7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsValue7"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsValue7"));
        flxDetails7.add(flxSeparator7, lblDetailsTitle7, lblDetailsValue7);
        var flxDetails8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDetails8",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxDetails8"), extendConfig({}, controller.args[1], "flxDetails8"), extendConfig({}, controller.args[2], "flxDetails8"));
        flxDetails8.setDefaultUnit(kony.flex.DP);
        var flxSeparator8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator8",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknflxE3E3E3",
            "top": "10dp",
            "zIndex": 1
        }, controller.args[0], "flxSeparator8"), extendConfig({}, controller.args[1], "flxSeparator8"), extendConfig({}, controller.args[2], "flxSeparator8"));
        flxSeparator8.setDefaultUnit(kony.flex.DP);
        flxSeparator8.add();
        var lblDetailsTitle8 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsTitle8",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg22px",
            "text": "Currency:",
            "textStyle": {},
            "top": "18dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsTitle8"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsTitle8"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsTitle8"));
        var lblDetailsValue8 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsValue8",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblSSP42424213px",
            "text": "USD",
            "textStyle": {},
            "top": "35dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsValue8"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsValue8"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsValue8"));
        flxDetails8.add(flxSeparator8, lblDetailsTitle8, lblDetailsValue8);
        var flxDetails9 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDetails9",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxDetails9"), extendConfig({}, controller.args[1], "flxDetails9"), extendConfig({}, controller.args[2], "flxDetails9"));
        flxDetails9.setDefaultUnit(kony.flex.DP);
        var flxSeparator9 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator9",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknflxE3E3E3",
            "top": "10dp",
            "zIndex": 1
        }, controller.args[0], "flxSeparator9"), extendConfig({}, controller.args[1], "flxSeparator9"), extendConfig({}, controller.args[2], "flxSeparator9"));
        flxSeparator9.setDefaultUnit(kony.flex.DP);
        flxSeparator9.add();
        var lblDetailsTitle9 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsTitle9",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg22px",
            "text": "Note:",
            "textStyle": {},
            "top": "18dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsTitle9"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsTitle9"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsTitle9"));
        var lblDetailsValue9 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsValue9",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblSSP42424213px",
            "text": "For party with friends",
            "textStyle": {},
            "top": "35dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsValue9"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsValue9"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsValue9"));
        var flxAttachments = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "120px",
            "id": "flxAttachments",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0.00%",
            "skin": "slFbox",
            "top": "12dp",
            "width": "39.11%"
        }, controller.args[0], "flxAttachments"), extendConfig({}, controller.args[1], "flxAttachments"), extendConfig({}, controller.args[2], "flxAttachments"));
        flxAttachments.setDefaultUnit(kony.flex.DP);
        var btnViewAttachments = new kony.ui.Button(extendConfig({
            "focusSkin": "slButtonGlossRed",
            "height": "36dp",
            "id": "btnViewAttachments",
            "isVisible": true,
            "left": "48dp",
            "onClick": controller.AS_Button_c4d03fbc5e444077ad09df894b0dd3bb,
            "skin": "sknBtn004B9528px",
            "text": "View",
            "top": "12dp",
            "width": "81dp",
            "zIndex": 1
        }, controller.args[0], "btnViewAttachments"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnViewAttachments"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnViewAttachments"));
        var imgViewAttachments = new kony.ui.Image2(extendConfig({
            "height": "23dp",
            "id": "imgViewAttachments",
            "isVisible": true,
            "left": "112dp",
            "skin": "slImage",
            "src": "chevronright.png",
            "top": "19dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "imgViewAttachments"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgViewAttachments"), extendConfig({}, controller.args[2], "imgViewAttachments"));
        flxAttachments.add(btnViewAttachments, imgViewAttachments);
        flxDetails9.add(flxSeparator9, lblDetailsTitle9, lblDetailsValue9, flxAttachments);
        var flxDetails10 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDetails10",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxDetails10"), extendConfig({}, controller.args[1], "flxDetails10"), extendConfig({}, controller.args[2], "flxDetails10"));
        flxDetails10.setDefaultUnit(kony.flex.DP);
        var flxSeparator10 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator10",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknflxE3E3E3",
            "top": "10dp",
            "zIndex": 1
        }, controller.args[0], "flxSeparator10"), extendConfig({}, controller.args[1], "flxSeparator10"), extendConfig({}, controller.args[2], "flxSeparator10"));
        flxSeparator10.setDefaultUnit(kony.flex.DP);
        flxSeparator10.add();
        var lblDetailsTitle10 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsTitle10",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg22px",
            "textStyle": {},
            "top": "18dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsTitle10"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsTitle10"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsTitle10"));
        var lblDetailsValue10 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsValue10",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblSSP42424213px",
            "textStyle": {},
            "top": "35dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsValue10"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsValue10"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsValue10"));
        flxDetails10.add(flxSeparator10, lblDetailsTitle10, lblDetailsValue10);
        var flxDetails11 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDetails11",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxDetails11"), extendConfig({}, controller.args[1], "flxDetails11"), extendConfig({}, controller.args[2], "flxDetails11"));
        flxDetails11.setDefaultUnit(kony.flex.DP);
        var flxSeparator11 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator11",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknflxE3E3E3",
            "top": "10dp",
            "zIndex": 1
        }, controller.args[0], "flxSeparator11"), extendConfig({}, controller.args[1], "flxSeparator11"), extendConfig({}, controller.args[2], "flxSeparator11"));
        flxSeparator11.setDefaultUnit(kony.flex.DP);
        flxSeparator11.add();
        var lblDetailsTitle11 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsTitle11",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg22px",
            "textStyle": {},
            "top": "18dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsTitle11"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsTitle11"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsTitle11"));
        var lblDetailsValue11 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsValue11",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblSSP42424213px",
            "textStyle": {},
            "top": "35dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsValue11"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsValue11"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsValue11"));
        flxDetails11.add(flxSeparator11, lblDetailsTitle11, lblDetailsValue11);
        var flxDetails12 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDetails12",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxDetails12"), extendConfig({}, controller.args[1], "flxDetails12"), extendConfig({}, controller.args[2], "flxDetails12"));
        flxDetails12.setDefaultUnit(kony.flex.DP);
        var flxSeparator12 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator12",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknflxE3E3E3",
            "top": "10dp",
            "zIndex": 1
        }, controller.args[0], "flxSeparator12"), extendConfig({}, controller.args[1], "flxSeparator12"), extendConfig({}, controller.args[2], "flxSeparator12"));
        flxSeparator12.setDefaultUnit(kony.flex.DP);
        flxSeparator12.add();
        var lblDetailsTitle12 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsTitle12",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg22px",
            "textStyle": {},
            "top": "18dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsTitle12"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsTitle12"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsTitle12"));
        var lblDetailsValue12 = new kony.ui.Label(extendConfig({
            "id": "lblDetailsValue12",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblSSP42424213px",
            "textStyle": {},
            "top": "35dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDetailsValue12"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailsValue12"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDetailsValue12"));
        flxDetails12.add(flxSeparator12, lblDetailsTitle12, lblDetailsValue12);
        var flxCheckSeperator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCheckSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "ICSknflxE3E3E3",
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxCheckSeperator"), extendConfig({}, controller.args[1], "flxCheckSeperator"), extendConfig({}, controller.args[2], "flxCheckSeperator"));
        flxCheckSeperator.setDefaultUnit(kony.flex.DP);
        flxCheckSeperator.add();
        var flxCheckNo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxCheckNo",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 110
        }, controller.args[0], "flxCheckNo"), extendConfig({}, controller.args[1], "flxCheckNo"), extendConfig({}, controller.args[2], "flxCheckNo"));
        flxCheckNo.setDefaultUnit(kony.flex.DP);
        var lblCheckNumber = new kony.ui.Label(extendConfig({
            "bottom": "17dp",
            "centerY": "50%",
            "id": "lblCheckNumber",
            "isVisible": true,
            "left": "23dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": "Check Number:",
            "textStyle": {},
            "top": "17dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCheckNumber"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCheckNumber"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCheckNumber"));
        var lblCheckNumberValue = new kony.ui.Label(extendConfig({
            "bottom": "17dp",
            "centerY": "51%",
            "id": "lblCheckNumberValue",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknLbl424242SSP22px",
            "text": "123456789",
            "textStyle": {},
            "top": "17dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCheckNumberValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCheckNumberValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCheckNumberValue"));
        flxCheckNo.add(lblCheckNumber, lblCheckNumberValue);
        var segCheckImages = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "imgBack": "checksmall_1.png",
                "imgBackDownload": "download_1.png",
                "imgFront": "checksmall_1.png",
                "imgFrontDownload": "download_1.png",
                "lblBack": "Back Image",
                "lblBackCheckNotAvailable": "Check Image not available",
                "lblFront": "Front Image",
                "lblFrontCheckNotAvailable": "Check Image not available"
            }, {
                "imgBack": "checksmall_1.png",
                "imgBackDownload": "download_1.png",
                "imgFront": "checksmall_1.png",
                "imgFrontDownload": "download_1.png",
                "lblBack": "Back Image",
                "lblBackCheckNotAvailable": "Check Image not available",
                "lblFront": "Front Image",
                "lblFrontCheckNotAvailable": "Check Image not available"
            }, {
                "imgBack": "checksmall_1.png",
                "imgBackDownload": "download_1.png",
                "imgFront": "checksmall_1.png",
                "imgFrontDownload": "download_1.png",
                "lblBack": "Back Image",
                "lblBackCheckNotAvailable": "Check Image not available",
                "lblFront": "Front Image",
                "lblFrontCheckNotAvailable": "Check Image not available"
            }, {
                "imgBack": "checksmall_1.png",
                "imgBackDownload": "download_1.png",
                "imgFront": "checksmall_1.png",
                "imgFrontDownload": "download_1.png",
                "lblBack": "Back Image",
                "lblBackCheckNotAvailable": "Check Image not available",
                "lblFront": "Front Image",
                "lblFrontCheckNotAvailable": "Check Image not available"
            }],
            "groupCells": false,
            "height": "370dp",
            "id": "segCheckImages",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": false,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "sknSegffffff",
            "rowTemplate": "flxICCheckImages",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
            "widgetDataMap": {
                "flxBackDownload": "flxBackDownload",
                "flxBackHeading": "flxBackHeading",
                "flxBackImg": "flxBackImg",
                "flxFrontDownload": "flxFrontDownload",
                "flxFrontHeading": "flxFrontHeading",
                "flxFrontImg": "flxFrontImg",
                "flxICCheckImages": "flxICCheckImages",
                "flxSeperatoBack": "flxSeperatoBack",
                "flxSeperatorFront": "flxSeperatorFront",
                "imgBack": "imgBack",
                "imgBackDownload": "imgBackDownload",
                "imgFront": "imgFront",
                "imgFrontDownload": "imgFrontDownload",
                "lblBack": "lblBack",
                "lblBackCheckNotAvailable": "lblBackCheckNotAvailable",
                "lblFront": "lblFront",
                "lblFrontCheckNotAvailable": "lblFrontCheckNotAvailable"
            },
            "width": "100%",
            "zIndex": 110
        }, controller.args[0], "segCheckImages"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segCheckImages"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segCheckImages"));
        var flxButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "50dp",
            "clipBounds": true,
            "id": "flxButtons",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "reverseLayoutDirection": false,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxButtons"), extendConfig({}, controller.args[1], "flxButtons"), extendConfig({}, controller.args[2], "flxButtons"));
        flxButtons.setDefaultUnit(kony.flex.DP);
        var flxSeparatorBottom = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparatorBottom",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknflxE3E3E3",
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeparatorBottom"), extendConfig({}, controller.args[1], "flxSeparatorBottom"), extendConfig({}, controller.args[2], "flxSeparatorBottom"));
        flxSeparatorBottom.setDefaultUnit(kony.flex.DP);
        flxSeparatorBottom.add();
        var btnContextualAction1 = new kony.ui.Button(extendConfig({
            "height": "48dp",
            "id": "btnContextualAction1",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknBtn003E75RoundedffffffSSP26px",
            "text": "Download Transaction",
            "top": "14dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnContextualAction1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContextualAction1"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnContextualAction1"));
        var btnContextualAction2 = new kony.ui.Button(extendConfig({
            "height": "48dp",
            "id": "btnContextualAction2",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknBtnffffffRounded003e75SSP26px",
            "text": "View Request",
            "top": "18dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnContextualAction2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContextualAction2"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnContextualAction2"));
        var btnContextualAction3 = new kony.ui.Button(extendConfig({
            "height": "48dp",
            "id": "btnContextualAction3",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknBtnffffffRounded003e75SSP26px",
            "text": "Repeat Transaction",
            "top": "18dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnContextualAction3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContextualAction3"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnContextualAction3"));
        var btnContextualAction4 = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "height": "48dp",
            "id": "btnContextualAction4",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknBtnffffffRounded003e75SSP26px",
            "text": "Cancel Payment",
            "top": "18dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnContextualAction4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContextualAction4"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnContextualAction4"));
        var btnContextualAction5 = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "height": "48dp",
            "id": "btnContextualAction5",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknBtnffffffRounded003e75SSP26px",
            "text": "Cancel Payment",
            "top": "18dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnContextualAction5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContextualAction5"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnContextualAction5"));
        flxButtons.add(flxSeparatorBottom, btnContextualAction1, btnContextualAction2, btnContextualAction3, btnContextualAction4, btnContextualAction5);
        flxMain.add(flxDetails1, flxDetails2, flxDetails3, flxDetails4, flxDetails5, flxDetails6, flxDetails7, flxDetails8, flxDetails9, flxDetails10, flxDetails11, flxDetails12, flxCheckSeperator, flxCheckNo, segCheckImages, flxButtons);
        var flxCheckZoomView = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "100%",
            "id": "flxCheckZoomView",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx000000Op50",
            "top": "0dp",
            "width": "100%",
            "zIndex": 130
        }, controller.args[0], "flxCheckZoomView"), extendConfig({}, controller.args[1], "flxCheckZoomView"), extendConfig({}, controller.args[2], "flxCheckZoomView"));
        flxCheckZoomView.setDefaultUnit(kony.flex.DP);
        var imgCheckZoom = new kony.ui.Image2(extendConfig({
            "bottom": "60dp",
            "id": "imgCheckZoom",
            "imageWhileDownloading": "create.png",
            "isVisible": true,
            "left": "40dp",
            "right": "40dp",
            "skin": "slImage",
            "src": "checkbig_1.png",
            "top": "60dp",
            "zIndex": 1
        }, controller.args[0], "imgCheckZoom"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCheckZoom"), extendConfig({}, controller.args[2], "imgCheckZoom"));
        var flxCross = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "45dp",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxCross",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "50dp",
            "skin": "slFbox",
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "flxCross"), extendConfig({}, controller.args[1], "flxCross"), extendConfig({}, controller.args[2], "flxCross"));
        flxCross.setDefaultUnit(kony.flex.DP);
        var imgCross = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgCross",
            "isVisible": true,
            "skin": "slImage",
            "src": "closeimg_1.png",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgCross"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCross"), extendConfig({}, controller.args[2], "imgCross"));
        flxCross.add(imgCross);
        flxCheckZoomView.add(imgCheckZoom, flxCross);
        accountsTransactionDetailsNative.add(flxMain, flxCheckZoomView);
        return accountsTransactionDetailsNative;
    }
})