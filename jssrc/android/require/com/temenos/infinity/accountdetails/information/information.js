define(function() {
    return function(controller) {
        var information = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "information",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_dd3ef7b2d399455ebcd2a66ae23cdc4c(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "information"), extendConfig({}, controller.args[1], "information"), extendConfig({}, controller.args[2], "information"));
        information.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "7%",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxBg003e7515px",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var imgIndicator = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "imgIndicator",
            "isVisible": false,
            "left": "20dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "3dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgIndicator"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgIndicator"), extendConfig({}, controller.args[2], "imgIndicator"));
        var lblAccountType = new kony.ui.Label(extendConfig({
            "id": "lblAccountType",
            "isVisible": true,
            "left": "0",
            "skin": "ICSknHeaderFFF34px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblAccountType"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAccountType"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAccountType"));
        flxHeader.add(imgIndicator, lblAccountType);
        var flxContainerAccountDetails = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": false,
            "clipBounds": false,
            "enableScrolling": true,
            "height": "93%",
            "horizontalScrollIndicator": true,
            "id": "flxContainerAccountDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFbox",
            "top": "0%",
            "verticalScrollIndicator": false,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxContainerAccountDetails"), extendConfig({}, controller.args[1], "flxContainerAccountDetails"), extendConfig({}, controller.args[2], "flxContainerAccountDetails"));
        flxContainerAccountDetails.setDefaultUnit(kony.flex.DP);
        var flxBankName = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "59dp",
            "id": "flxBankName",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxffffffShadowNoborder",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBankName"), extendConfig({}, controller.args[1], "flxBankName"), extendConfig({}, controller.args[2], "flxBankName"));
        flxBankName.setDefaultUnit(kony.flex.DP);
        var imgBankLogo = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "23dp",
            "id": "imgBankLogo",
            "isVisible": true,
            "left": "21dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "23dp",
            "zIndex": 1
        }, controller.args[0], "imgBankLogo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBankLogo"), extendConfig({}, controller.args[2], "imgBankLogo"));
        var blBankNameDA = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "blBankNameDA",
            "isVisible": true,
            "left": "53dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": "Bank of America",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "blBankNameDA"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "blBankNameDA"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "blBankNameDA"));
        flxBankName.add(imgBankLogo, blBankNameDA);
        var flxTab1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "60dp",
            "id": "flxTab1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxF6F6F6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab1"), extendConfig({}, controller.args[1], "flxTab1"), extendConfig({}, controller.args[2], "flxTab1"));
        flxTab1.setDefaultUnit(kony.flex.DP);
        var lblTab1Header = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblTab1Header",
            "isVisible": true,
            "left": "20dp",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.accountSummary"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTab1Header"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab1Header"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab1Header"));
        var flxTopShadowTab1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "9dp",
            "id": "flxTopShadowTab1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "ICSknFlxHeaderShadow",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxTopShadowTab1"), extendConfig({}, controller.args[1], "flxTopShadowTab1"), extendConfig({}, controller.args[2], "flxTopShadowTab1"));
        flxTopShadowTab1.setDefaultUnit(kony.flex.DP);
        flxTopShadowTab1.add();
        var flxBottomShadowTab1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxBottomShadowTab1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "ICSknFlxHeaderShadow",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxBottomShadowTab1"), extendConfig({}, controller.args[1], "flxBottomShadowTab1"), extendConfig({}, controller.args[2], "flxBottomShadowTab1"));
        flxBottomShadowTab1.setDefaultUnit(kony.flex.DP);
        flxBottomShadowTab1.add();
        flxTab1.add(lblTab1Header, flxTopShadowTab1, flxBottomShadowTab1);
        var flxTab1DetailsContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab1DetailsContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxffffffShadowNoborder",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab1DetailsContainer"), extendConfig({}, controller.args[1], "flxTab1DetailsContainer"), extendConfig({}, controller.args[2], "flxTab1DetailsContainer"));
        flxTab1DetailsContainer.setDefaultUnit(kony.flex.DP);
        var flxTab1Field1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab1Field1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Field1"), extendConfig({}, controller.args[1], "flxTab1Field1"), extendConfig({}, controller.args[2], "flxTab1Field1"));
        flxTab1Field1.setDefaultUnit(kony.flex.DP);
        var lblTab1Field1Label = new kony.ui.Label(extendConfig({
            "id": "lblTab1Field1Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab1Field1Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab1Field1Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab1Field1Label"));
        var flxTab1Field1Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab1Field1Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Field1Value"), extendConfig({}, controller.args[1], "flxTab1Field1Value"), extendConfig({}, controller.args[2], "flxTab1Field1Value"));
        flxTab1Field1Value.setDefaultUnit(kony.flex.DP);
        flxTab1Field1Value.add();
        flxTab1Field1.add(lblTab1Field1Label, flxTab1Field1Value);
        var flxTab1Field2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab1Field2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Field2"), extendConfig({}, controller.args[1], "flxTab1Field2"), extendConfig({}, controller.args[2], "flxTab1Field2"));
        flxTab1Field2.setDefaultUnit(kony.flex.DP);
        var lblTab1Field2Label = new kony.ui.Label(extendConfig({
            "id": "lblTab1Field2Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab1Field2Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab1Field2Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab1Field2Label"));
        var flxTab1Field2Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab1Field2Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Field2Value"), extendConfig({}, controller.args[1], "flxTab1Field2Value"), extendConfig({}, controller.args[2], "flxTab1Field2Value"));
        flxTab1Field2Value.setDefaultUnit(kony.flex.DP);
        flxTab1Field2Value.add();
        flxTab1Field2.add(lblTab1Field2Label, flxTab1Field2Value);
        var flxTab1Field3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab1Field3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Field3"), extendConfig({}, controller.args[1], "flxTab1Field3"), extendConfig({}, controller.args[2], "flxTab1Field3"));
        flxTab1Field3.setDefaultUnit(kony.flex.DP);
        var lblTab1Field3Label = new kony.ui.Label(extendConfig({
            "id": "lblTab1Field3Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab1Field3Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab1Field3Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab1Field3Label"));
        var flxTab1Field3Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab1Field3Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Field3Value"), extendConfig({}, controller.args[1], "flxTab1Field3Value"), extendConfig({}, controller.args[2], "flxTab1Field3Value"));
        flxTab1Field3Value.setDefaultUnit(kony.flex.DP);
        flxTab1Field3Value.add();
        flxTab1Field3.add(lblTab1Field3Label, flxTab1Field3Value);
        var flxTab1Field4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab1Field4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Field4"), extendConfig({}, controller.args[1], "flxTab1Field4"), extendConfig({}, controller.args[2], "flxTab1Field4"));
        flxTab1Field4.setDefaultUnit(kony.flex.DP);
        var lblTab1Field4Label = new kony.ui.Label(extendConfig({
            "id": "lblTab1Field4Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab1Field4Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab1Field4Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab1Field4Label"));
        var flxTab1Field4Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab1Field4Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Field4Value"), extendConfig({}, controller.args[1], "flxTab1Field4Value"), extendConfig({}, controller.args[2], "flxTab1Field4Value"));
        flxTab1Field4Value.setDefaultUnit(kony.flex.DP);
        flxTab1Field4Value.add();
        flxTab1Field4.add(lblTab1Field4Label, flxTab1Field4Value);
        var flxTab1Field5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab1Field5",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Field5"), extendConfig({}, controller.args[1], "flxTab1Field5"), extendConfig({}, controller.args[2], "flxTab1Field5"));
        flxTab1Field5.setDefaultUnit(kony.flex.DP);
        var lblTab1Field5Label = new kony.ui.Label(extendConfig({
            "id": "lblTab1Field5Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab1Field5Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab1Field5Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab1Field5Label"));
        var flxTab1Field5Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab1Field5Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Field5Value"), extendConfig({}, controller.args[1], "flxTab1Field5Value"), extendConfig({}, controller.args[2], "flxTab1Field5Value"));
        flxTab1Field5Value.setDefaultUnit(kony.flex.DP);
        flxTab1Field5Value.add();
        flxTab1Field5.add(lblTab1Field5Label, flxTab1Field5Value);
        var flxTab1Field6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab1Field6",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Field6"), extendConfig({}, controller.args[1], "flxTab1Field6"), extendConfig({}, controller.args[2], "flxTab1Field6"));
        flxTab1Field6.setDefaultUnit(kony.flex.DP);
        var lblTab1Field6Label = new kony.ui.Label(extendConfig({
            "id": "lblTab1Field6Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab1Field6Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab1Field6Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab1Field6Label"));
        var flxTab1Field6Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab1Field6Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Field6Value"), extendConfig({}, controller.args[1], "flxTab1Field6Value"), extendConfig({}, controller.args[2], "flxTab1Field6Value"));
        flxTab1Field6Value.setDefaultUnit(kony.flex.DP);
        flxTab1Field6Value.add();
        flxTab1Field6.add(lblTab1Field6Label, flxTab1Field6Value);
        var flxTab1Field7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab1Field7",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Field7"), extendConfig({}, controller.args[1], "flxTab1Field7"), extendConfig({}, controller.args[2], "flxTab1Field7"));
        flxTab1Field7.setDefaultUnit(kony.flex.DP);
        var lblTab1Field7Label = new kony.ui.Label(extendConfig({
            "id": "lblTab1Field7Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab1Field7Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab1Field7Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab1Field7Label"));
        var flxTab1Field7Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab1Field7Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Field7Value"), extendConfig({}, controller.args[1], "flxTab1Field7Value"), extendConfig({}, controller.args[2], "flxTab1Field7Value"));
        flxTab1Field7Value.setDefaultUnit(kony.flex.DP);
        flxTab1Field7Value.add();
        flxTab1Field7.add(lblTab1Field7Label, flxTab1Field7Value);
        var flxTab1Field8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab1Field8",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Field8"), extendConfig({}, controller.args[1], "flxTab1Field8"), extendConfig({}, controller.args[2], "flxTab1Field8"));
        flxTab1Field8.setDefaultUnit(kony.flex.DP);
        var lblTab1Field8Label = new kony.ui.Label(extendConfig({
            "id": "lblTab1Field8Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab1Field8Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab1Field8Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab1Field8Label"));
        var flxTab1Field8Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab1Field8Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Field8Value"), extendConfig({}, controller.args[1], "flxTab1Field8Value"), extendConfig({}, controller.args[2], "flxTab1Field8Value"));
        flxTab1Field8Value.setDefaultUnit(kony.flex.DP);
        flxTab1Field8Value.add();
        flxTab1Field8.add(lblTab1Field8Label, flxTab1Field8Value);
        var flxTab1Field9 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab1Field9",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Field9"), extendConfig({}, controller.args[1], "flxTab1Field9"), extendConfig({}, controller.args[2], "flxTab1Field9"));
        flxTab1Field9.setDefaultUnit(kony.flex.DP);
        var lblTab1Field9Label = new kony.ui.Label(extendConfig({
            "id": "lblTab1Field9Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab1Field9Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab1Field9Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab1Field9Label"));
        var flxTab1Field9Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab1Field9Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Field9Value"), extendConfig({}, controller.args[1], "flxTab1Field9Value"), extendConfig({}, controller.args[2], "flxTab1Field9Value"));
        flxTab1Field9Value.setDefaultUnit(kony.flex.DP);
        flxTab1Field9Value.add();
        flxTab1Field9.add(lblTab1Field9Label, flxTab1Field9Value);
        var flxTab1Field10 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab1Field10",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Field10"), extendConfig({}, controller.args[1], "flxTab1Field10"), extendConfig({}, controller.args[2], "flxTab1Field10"));
        flxTab1Field10.setDefaultUnit(kony.flex.DP);
        var lblTab1Field10Label = new kony.ui.Label(extendConfig({
            "id": "lblTab1Field10Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab1Field10Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab1Field10Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab1Field10Label"));
        var flxTab1Field10Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab1Field10Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Field10Value"), extendConfig({}, controller.args[1], "flxTab1Field10Value"), extendConfig({}, controller.args[2], "flxTab1Field10Value"));
        flxTab1Field10Value.setDefaultUnit(kony.flex.DP);
        flxTab1Field10Value.add();
        flxTab1Field10.add(lblTab1Field10Label, flxTab1Field10Value);
        var flxTab1Dummy = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab1Dummy",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab1Dummy"), extendConfig({}, controller.args[1], "flxTab1Dummy"), extendConfig({}, controller.args[2], "flxTab1Dummy"));
        flxTab1Dummy.setDefaultUnit(kony.flex.DP);
        flxTab1Dummy.add();
        flxTab1DetailsContainer.add(flxTab1Field1, flxTab1Field2, flxTab1Field3, flxTab1Field4, flxTab1Field5, flxTab1Field6, flxTab1Field7, flxTab1Field8, flxTab1Field9, flxTab1Field10, flxTab1Dummy);
        var flxTab2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "60dp",
            "id": "flxTab2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxF6F6F6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab2"), extendConfig({}, controller.args[1], "flxTab2"), extendConfig({}, controller.args[2], "flxTab2"));
        flxTab2.setDefaultUnit(kony.flex.DP);
        var lblTab2Header = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblTab2Header",
            "isVisible": true,
            "left": "20dp",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.accountSummary"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTab2Header"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab2Header"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab2Header"));
        var flxTopShadowTab2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "9dp",
            "id": "flxTopShadowTab2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "ICSknFlxHeaderShadow",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxTopShadowTab2"), extendConfig({}, controller.args[1], "flxTopShadowTab2"), extendConfig({}, controller.args[2], "flxTopShadowTab2"));
        flxTopShadowTab2.setDefaultUnit(kony.flex.DP);
        flxTopShadowTab2.add();
        var flxBottomShadowTab2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxBottomShadowTab2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "ICSknFlxHeaderShadow",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxBottomShadowTab2"), extendConfig({}, controller.args[1], "flxBottomShadowTab2"), extendConfig({}, controller.args[2], "flxBottomShadowTab2"));
        flxBottomShadowTab2.setDefaultUnit(kony.flex.DP);
        flxBottomShadowTab2.add();
        flxTab2.add(lblTab2Header, flxTopShadowTab2, flxBottomShadowTab2);
        var flxTab2DetailsContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab2DetailsContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxffffffShadowNoborder",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab2DetailsContainer"), extendConfig({}, controller.args[1], "flxTab2DetailsContainer"), extendConfig({}, controller.args[2], "flxTab2DetailsContainer"));
        flxTab2DetailsContainer.setDefaultUnit(kony.flex.DP);
        var flxTab2Field1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab2Field1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Field1"), extendConfig({}, controller.args[1], "flxTab2Field1"), extendConfig({}, controller.args[2], "flxTab2Field1"));
        flxTab2Field1.setDefaultUnit(kony.flex.DP);
        var lblTab2Field1Label = new kony.ui.Label(extendConfig({
            "id": "lblTab2Field1Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab2Field1Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab2Field1Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab2Field1Label"));
        var flxTab2Field1Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab2Field1Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Field1Value"), extendConfig({}, controller.args[1], "flxTab2Field1Value"), extendConfig({}, controller.args[2], "flxTab2Field1Value"));
        flxTab2Field1Value.setDefaultUnit(kony.flex.DP);
        flxTab2Field1Value.add();
        flxTab2Field1.add(lblTab2Field1Label, flxTab2Field1Value);
        var flxTab2Field2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab2Field2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Field2"), extendConfig({}, controller.args[1], "flxTab2Field2"), extendConfig({}, controller.args[2], "flxTab2Field2"));
        flxTab2Field2.setDefaultUnit(kony.flex.DP);
        var lblTab2Field2Label = new kony.ui.Label(extendConfig({
            "id": "lblTab2Field2Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab2Field2Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab2Field2Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab2Field2Label"));
        var flxTab2Field2Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab2Field2Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Field2Value"), extendConfig({}, controller.args[1], "flxTab2Field2Value"), extendConfig({}, controller.args[2], "flxTab2Field2Value"));
        flxTab2Field2Value.setDefaultUnit(kony.flex.DP);
        flxTab2Field2Value.add();
        flxTab2Field2.add(lblTab2Field2Label, flxTab2Field2Value);
        var flxTab2Field3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab2Field3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Field3"), extendConfig({}, controller.args[1], "flxTab2Field3"), extendConfig({}, controller.args[2], "flxTab2Field3"));
        flxTab2Field3.setDefaultUnit(kony.flex.DP);
        var lblTab2Field3Label = new kony.ui.Label(extendConfig({
            "id": "lblTab2Field3Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab2Field3Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab2Field3Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab2Field3Label"));
        var flxTab2Field3Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab2Field3Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Field3Value"), extendConfig({}, controller.args[1], "flxTab2Field3Value"), extendConfig({}, controller.args[2], "flxTab2Field3Value"));
        flxTab2Field3Value.setDefaultUnit(kony.flex.DP);
        flxTab2Field3Value.add();
        flxTab2Field3.add(lblTab2Field3Label, flxTab2Field3Value);
        var flxTab2Field4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab2Field4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Field4"), extendConfig({}, controller.args[1], "flxTab2Field4"), extendConfig({}, controller.args[2], "flxTab2Field4"));
        flxTab2Field4.setDefaultUnit(kony.flex.DP);
        var lblTab2Field4Label = new kony.ui.Label(extendConfig({
            "id": "lblTab2Field4Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab2Field4Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab2Field4Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab2Field4Label"));
        var flxTab2Field4Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab2Field4Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Field4Value"), extendConfig({}, controller.args[1], "flxTab2Field4Value"), extendConfig({}, controller.args[2], "flxTab2Field4Value"));
        flxTab2Field4Value.setDefaultUnit(kony.flex.DP);
        flxTab2Field4Value.add();
        flxTab2Field4.add(lblTab2Field4Label, flxTab2Field4Value);
        var flxTab2Field5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab2Field5",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Field5"), extendConfig({}, controller.args[1], "flxTab2Field5"), extendConfig({}, controller.args[2], "flxTab2Field5"));
        flxTab2Field5.setDefaultUnit(kony.flex.DP);
        var lblTab2Field5Label = new kony.ui.Label(extendConfig({
            "id": "lblTab2Field5Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab2Field5Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab2Field5Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab2Field5Label"));
        var flxTab2Field5Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab2Field5Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Field5Value"), extendConfig({}, controller.args[1], "flxTab2Field5Value"), extendConfig({}, controller.args[2], "flxTab2Field5Value"));
        flxTab2Field5Value.setDefaultUnit(kony.flex.DP);
        flxTab2Field5Value.add();
        flxTab2Field5.add(lblTab2Field5Label, flxTab2Field5Value);
        var flxTab2Field6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab2Field6",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Field6"), extendConfig({}, controller.args[1], "flxTab2Field6"), extendConfig({}, controller.args[2], "flxTab2Field6"));
        flxTab2Field6.setDefaultUnit(kony.flex.DP);
        var lblTab2Field6Label = new kony.ui.Label(extendConfig({
            "id": "lblTab2Field6Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab2Field6Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab2Field6Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab2Field6Label"));
        var flxTab2Field6Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab2Field6Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Field6Value"), extendConfig({}, controller.args[1], "flxTab2Field6Value"), extendConfig({}, controller.args[2], "flxTab2Field6Value"));
        flxTab2Field6Value.setDefaultUnit(kony.flex.DP);
        flxTab2Field6Value.add();
        flxTab2Field6.add(lblTab2Field6Label, flxTab2Field6Value);
        var flxTab2Field7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab2Field7",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Field7"), extendConfig({}, controller.args[1], "flxTab2Field7"), extendConfig({}, controller.args[2], "flxTab2Field7"));
        flxTab2Field7.setDefaultUnit(kony.flex.DP);
        var lblTab2Field7Label = new kony.ui.Label(extendConfig({
            "id": "lblTab2Field7Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab2Field7Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab2Field7Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab2Field7Label"));
        var flxTab2Field7Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab2Field7Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Field7Value"), extendConfig({}, controller.args[1], "flxTab2Field7Value"), extendConfig({}, controller.args[2], "flxTab2Field7Value"));
        flxTab2Field7Value.setDefaultUnit(kony.flex.DP);
        flxTab2Field7Value.add();
        flxTab2Field7.add(lblTab2Field7Label, flxTab2Field7Value);
        var flxTab2Field8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab2Field8",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Field8"), extendConfig({}, controller.args[1], "flxTab2Field8"), extendConfig({}, controller.args[2], "flxTab2Field8"));
        flxTab2Field8.setDefaultUnit(kony.flex.DP);
        var lblTab2Field8Label = new kony.ui.Label(extendConfig({
            "id": "lblTab2Field8Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab2Field8Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab2Field8Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab2Field8Label"));
        var flxTab2Field8Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab2Field8Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Field8Value"), extendConfig({}, controller.args[1], "flxTab2Field8Value"), extendConfig({}, controller.args[2], "flxTab2Field8Value"));
        flxTab2Field8Value.setDefaultUnit(kony.flex.DP);
        flxTab2Field8Value.add();
        flxTab2Field8.add(lblTab2Field8Label, flxTab2Field8Value);
        var flxTab2Field9 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab2Field9",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Field9"), extendConfig({}, controller.args[1], "flxTab2Field9"), extendConfig({}, controller.args[2], "flxTab2Field9"));
        flxTab2Field9.setDefaultUnit(kony.flex.DP);
        var lblTab2Field9Label = new kony.ui.Label(extendConfig({
            "id": "lblTab2Field9Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab2Field9Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab2Field9Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab2Field9Label"));
        var flxTab2Field9Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab2Field9Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Field9Value"), extendConfig({}, controller.args[1], "flxTab2Field9Value"), extendConfig({}, controller.args[2], "flxTab2Field9Value"));
        flxTab2Field9Value.setDefaultUnit(kony.flex.DP);
        flxTab2Field9Value.add();
        flxTab2Field9.add(lblTab2Field9Label, flxTab2Field9Value);
        var flxTab2Field10 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab2Field10",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Field10"), extendConfig({}, controller.args[1], "flxTab2Field10"), extendConfig({}, controller.args[2], "flxTab2Field10"));
        flxTab2Field10.setDefaultUnit(kony.flex.DP);
        var lblTab2Field10Label = new kony.ui.Label(extendConfig({
            "id": "lblTab2Field10Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab2Field10Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab2Field10Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab2Field10Label"));
        var flxTab2Field10Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab2Field10Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Field10Value"), extendConfig({}, controller.args[1], "flxTab2Field10Value"), extendConfig({}, controller.args[2], "flxTab2Field10Value"));
        flxTab2Field10Value.setDefaultUnit(kony.flex.DP);
        flxTab2Field10Value.add();
        flxTab2Field10.add(lblTab2Field10Label, flxTab2Field10Value);
        var flxTab2Dummy = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab2Dummy",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab2Dummy"), extendConfig({}, controller.args[1], "flxTab2Dummy"), extendConfig({}, controller.args[2], "flxTab2Dummy"));
        flxTab2Dummy.setDefaultUnit(kony.flex.DP);
        flxTab2Dummy.add();
        flxTab2DetailsContainer.add(flxTab2Field1, flxTab2Field2, flxTab2Field3, flxTab2Field4, flxTab2Field5, flxTab2Field6, flxTab2Field7, flxTab2Field8, flxTab2Field9, flxTab2Field10, flxTab2Dummy);
        var flxTab3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "60dp",
            "id": "flxTab3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxF6F6F6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab3"), extendConfig({}, controller.args[1], "flxTab3"), extendConfig({}, controller.args[2], "flxTab3"));
        flxTab3.setDefaultUnit(kony.flex.DP);
        var lblTab3Header = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblTab3Header",
            "isVisible": true,
            "left": "20dp",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.accountSummary"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTab3Header"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab3Header"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab3Header"));
        var flxTopShadowTab3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "9dp",
            "id": "flxTopShadowTab3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "ICSknFlxHeaderShadow",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxTopShadowTab3"), extendConfig({}, controller.args[1], "flxTopShadowTab3"), extendConfig({}, controller.args[2], "flxTopShadowTab3"));
        flxTopShadowTab3.setDefaultUnit(kony.flex.DP);
        flxTopShadowTab3.add();
        var flxBottomShadowTab3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxBottomShadowTab3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "ICSknFlxHeaderShadow",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxBottomShadowTab3"), extendConfig({}, controller.args[1], "flxBottomShadowTab3"), extendConfig({}, controller.args[2], "flxBottomShadowTab3"));
        flxBottomShadowTab3.setDefaultUnit(kony.flex.DP);
        flxBottomShadowTab3.add();
        flxTab3.add(lblTab3Header, flxTopShadowTab3, flxBottomShadowTab3);
        var flxTab3DetailsContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab3DetailsContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxffffffShadowNoborder",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab3DetailsContainer"), extendConfig({}, controller.args[1], "flxTab3DetailsContainer"), extendConfig({}, controller.args[2], "flxTab3DetailsContainer"));
        flxTab3DetailsContainer.setDefaultUnit(kony.flex.DP);
        var flxTab3Field1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab3Field1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Field1"), extendConfig({}, controller.args[1], "flxTab3Field1"), extendConfig({}, controller.args[2], "flxTab3Field1"));
        flxTab3Field1.setDefaultUnit(kony.flex.DP);
        var lblTab3Field1Label = new kony.ui.Label(extendConfig({
            "id": "lblTab3Field1Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab3Field1Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab3Field1Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab3Field1Label"));
        var flxTab3Field1Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab3Field1Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Field1Value"), extendConfig({}, controller.args[1], "flxTab3Field1Value"), extendConfig({}, controller.args[2], "flxTab3Field1Value"));
        flxTab3Field1Value.setDefaultUnit(kony.flex.DP);
        flxTab3Field1Value.add();
        flxTab3Field1.add(lblTab3Field1Label, flxTab3Field1Value);
        var flxTab3Field2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab3Field2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Field2"), extendConfig({}, controller.args[1], "flxTab3Field2"), extendConfig({}, controller.args[2], "flxTab3Field2"));
        flxTab3Field2.setDefaultUnit(kony.flex.DP);
        var lblTab3Field2Label = new kony.ui.Label(extendConfig({
            "id": "lblTab3Field2Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab3Field2Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab3Field2Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab3Field2Label"));
        var flxTab3Field2Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab3Field2Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "reverseLayoutDirection": false,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "43%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Field2Value"), extendConfig({}, controller.args[1], "flxTab3Field2Value"), extendConfig({}, controller.args[2], "flxTab3Field2Value"));
        flxTab3Field2Value.setDefaultUnit(kony.flex.DP);
        flxTab3Field2Value.add();
        flxTab3Field2.add(lblTab3Field2Label, flxTab3Field2Value);
        var flxTab3Field3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab3Field3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Field3"), extendConfig({}, controller.args[1], "flxTab3Field3"), extendConfig({}, controller.args[2], "flxTab3Field3"));
        flxTab3Field3.setDefaultUnit(kony.flex.DP);
        var lblTab3Field3Label = new kony.ui.Label(extendConfig({
            "id": "lblTab3Field3Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab3Field3Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab3Field3Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab3Field3Label"));
        var flxTab3Field3Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab3Field3Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Field3Value"), extendConfig({}, controller.args[1], "flxTab3Field3Value"), extendConfig({}, controller.args[2], "flxTab3Field3Value"));
        flxTab3Field3Value.setDefaultUnit(kony.flex.DP);
        flxTab3Field3Value.add();
        flxTab3Field3.add(lblTab3Field3Label, flxTab3Field3Value);
        var flxTab3Field4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab3Field4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Field4"), extendConfig({}, controller.args[1], "flxTab3Field4"), extendConfig({}, controller.args[2], "flxTab3Field4"));
        flxTab3Field4.setDefaultUnit(kony.flex.DP);
        var lblTab3Field4Label = new kony.ui.Label(extendConfig({
            "id": "lblTab3Field4Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab3Field4Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab3Field4Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab3Field4Label"));
        var flxTab3Field4Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab3Field4Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Field4Value"), extendConfig({}, controller.args[1], "flxTab3Field4Value"), extendConfig({}, controller.args[2], "flxTab3Field4Value"));
        flxTab3Field4Value.setDefaultUnit(kony.flex.DP);
        flxTab3Field4Value.add();
        flxTab3Field4.add(lblTab3Field4Label, flxTab3Field4Value);
        var flxTab3Field5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab3Field5",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Field5"), extendConfig({}, controller.args[1], "flxTab3Field5"), extendConfig({}, controller.args[2], "flxTab3Field5"));
        flxTab3Field5.setDefaultUnit(kony.flex.DP);
        var lblTab3Field5Label = new kony.ui.Label(extendConfig({
            "id": "lblTab3Field5Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab3Field5Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab3Field5Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab3Field5Label"));
        var flxTab3Field5Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab3Field5Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Field5Value"), extendConfig({}, controller.args[1], "flxTab3Field5Value"), extendConfig({}, controller.args[2], "flxTab3Field5Value"));
        flxTab3Field5Value.setDefaultUnit(kony.flex.DP);
        flxTab3Field5Value.add();
        flxTab3Field5.add(lblTab3Field5Label, flxTab3Field5Value);
        var flxTab3Field6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab3Field6",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Field6"), extendConfig({}, controller.args[1], "flxTab3Field6"), extendConfig({}, controller.args[2], "flxTab3Field6"));
        flxTab3Field6.setDefaultUnit(kony.flex.DP);
        var lblTab3Field6Label = new kony.ui.Label(extendConfig({
            "id": "lblTab3Field6Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab3Field6Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab3Field6Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab3Field6Label"));
        var flxTab3Field6Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab3Field6Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Field6Value"), extendConfig({}, controller.args[1], "flxTab3Field6Value"), extendConfig({}, controller.args[2], "flxTab3Field6Value"));
        flxTab3Field6Value.setDefaultUnit(kony.flex.DP);
        flxTab3Field6Value.add();
        flxTab3Field6.add(lblTab3Field6Label, flxTab3Field6Value);
        var flxTab3Field7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab3Field7",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Field7"), extendConfig({}, controller.args[1], "flxTab3Field7"), extendConfig({}, controller.args[2], "flxTab3Field7"));
        flxTab3Field7.setDefaultUnit(kony.flex.DP);
        var lblTab3Field7Label = new kony.ui.Label(extendConfig({
            "id": "lblTab3Field7Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab3Field7Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab3Field7Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab3Field7Label"));
        var flxTab3Field7Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab3Field7Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Field7Value"), extendConfig({}, controller.args[1], "flxTab3Field7Value"), extendConfig({}, controller.args[2], "flxTab3Field7Value"));
        flxTab3Field7Value.setDefaultUnit(kony.flex.DP);
        flxTab3Field7Value.add();
        flxTab3Field7.add(lblTab3Field7Label, flxTab3Field7Value);
        var flxTab3Field8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab3Field8",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Field8"), extendConfig({}, controller.args[1], "flxTab3Field8"), extendConfig({}, controller.args[2], "flxTab3Field8"));
        flxTab3Field8.setDefaultUnit(kony.flex.DP);
        var lblTab3Field8Label = new kony.ui.Label(extendConfig({
            "id": "lblTab3Field8Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab3Field8Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab3Field8Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab3Field8Label"));
        var flxTab3Field8Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab3Field8Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Field8Value"), extendConfig({}, controller.args[1], "flxTab3Field8Value"), extendConfig({}, controller.args[2], "flxTab3Field8Value"));
        flxTab3Field8Value.setDefaultUnit(kony.flex.DP);
        flxTab3Field8Value.add();
        flxTab3Field8.add(lblTab3Field8Label, flxTab3Field8Value);
        var flxTab3Field9 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab3Field9",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Field9"), extendConfig({}, controller.args[1], "flxTab3Field9"), extendConfig({}, controller.args[2], "flxTab3Field9"));
        flxTab3Field9.setDefaultUnit(kony.flex.DP);
        var lblTab3Field9Label = new kony.ui.Label(extendConfig({
            "id": "lblTab3Field9Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab3Field9Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab3Field9Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab3Field9Label"));
        var flxTab3Field9Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab3Field9Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Field9Value"), extendConfig({}, controller.args[1], "flxTab3Field9Value"), extendConfig({}, controller.args[2], "flxTab3Field9Value"));
        flxTab3Field9Value.setDefaultUnit(kony.flex.DP);
        flxTab3Field9Value.add();
        flxTab3Field9.add(lblTab3Field9Label, flxTab3Field9Value);
        var flxTab3Field10 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab3Field10",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Field10"), extendConfig({}, controller.args[1], "flxTab3Field10"), extendConfig({}, controller.args[2], "flxTab3Field10"));
        flxTab3Field10.setDefaultUnit(kony.flex.DP);
        var lblTab3Field10Label = new kony.ui.Label(extendConfig({
            "id": "lblTab3Field10Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab3Field10Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab3Field10Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab3Field10Label"));
        var flxTab3Field10Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab3Field10Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Field10Value"), extendConfig({}, controller.args[1], "flxTab3Field10Value"), extendConfig({}, controller.args[2], "flxTab3Field10Value"));
        flxTab3Field10Value.setDefaultUnit(kony.flex.DP);
        flxTab3Field10Value.add();
        flxTab3Field10.add(lblTab3Field10Label, flxTab3Field10Value);
        var flxTab3Dummy = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab3Dummy",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab3Dummy"), extendConfig({}, controller.args[1], "flxTab3Dummy"), extendConfig({}, controller.args[2], "flxTab3Dummy"));
        flxTab3Dummy.setDefaultUnit(kony.flex.DP);
        flxTab3Dummy.add();
        flxTab3DetailsContainer.add(flxTab3Field1, flxTab3Field2, flxTab3Field3, flxTab3Field4, flxTab3Field5, flxTab3Field6, flxTab3Field7, flxTab3Field8, flxTab3Field9, flxTab3Field10, flxTab3Dummy);
        var flxTab4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "60dp",
            "id": "flxTab4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxF6F6F6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab4"), extendConfig({}, controller.args[1], "flxTab4"), extendConfig({}, controller.args[2], "flxTab4"));
        flxTab4.setDefaultUnit(kony.flex.DP);
        var lblTab4Header = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblTab4Header",
            "isVisible": true,
            "left": "20dp",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.accountSummary"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTab4Header"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab4Header"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab4Header"));
        var flxTopShadowTab4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "9dp",
            "id": "flxTopShadowTab4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "ICSknFlxHeaderShadow",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxTopShadowTab4"), extendConfig({}, controller.args[1], "flxTopShadowTab4"), extendConfig({}, controller.args[2], "flxTopShadowTab4"));
        flxTopShadowTab4.setDefaultUnit(kony.flex.DP);
        flxTopShadowTab4.add();
        var flxBottomShadowTab4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxBottomShadowTab4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "ICSknFlxHeaderShadow",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxBottomShadowTab4"), extendConfig({}, controller.args[1], "flxBottomShadowTab4"), extendConfig({}, controller.args[2], "flxBottomShadowTab4"));
        flxBottomShadowTab4.setDefaultUnit(kony.flex.DP);
        flxBottomShadowTab4.add();
        flxTab4.add(lblTab4Header, flxTopShadowTab4, flxBottomShadowTab4);
        var flxTab4DetailsContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab4DetailsContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxffffffShadowNoborder",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab4DetailsContainer"), extendConfig({}, controller.args[1], "flxTab4DetailsContainer"), extendConfig({}, controller.args[2], "flxTab4DetailsContainer"));
        flxTab4DetailsContainer.setDefaultUnit(kony.flex.DP);
        var flxTab4Field1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab4Field1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Field1"), extendConfig({}, controller.args[1], "flxTab4Field1"), extendConfig({}, controller.args[2], "flxTab4Field1"));
        flxTab4Field1.setDefaultUnit(kony.flex.DP);
        var lblTab4Field1Label = new kony.ui.Label(extendConfig({
            "id": "lblTab4Field1Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab4Field1Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab4Field1Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab4Field1Label"));
        var flxTab4Field1Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab4Field1Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Field1Value"), extendConfig({}, controller.args[1], "flxTab4Field1Value"), extendConfig({}, controller.args[2], "flxTab4Field1Value"));
        flxTab4Field1Value.setDefaultUnit(kony.flex.DP);
        flxTab4Field1Value.add();
        flxTab4Field1.add(lblTab4Field1Label, flxTab4Field1Value);
        var flxTab4Field2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab4Field2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Field2"), extendConfig({}, controller.args[1], "flxTab4Field2"), extendConfig({}, controller.args[2], "flxTab4Field2"));
        flxTab4Field2.setDefaultUnit(kony.flex.DP);
        var lblTab4Field2Label = new kony.ui.Label(extendConfig({
            "id": "lblTab4Field2Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab4Field2Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab4Field2Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab4Field2Label"));
        var flxTab4Field2Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab4Field2Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Field2Value"), extendConfig({}, controller.args[1], "flxTab4Field2Value"), extendConfig({}, controller.args[2], "flxTab4Field2Value"));
        flxTab4Field2Value.setDefaultUnit(kony.flex.DP);
        flxTab4Field2Value.add();
        flxTab4Field2.add(lblTab4Field2Label, flxTab4Field2Value);
        var flxTab4Field3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab4Field3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Field3"), extendConfig({}, controller.args[1], "flxTab4Field3"), extendConfig({}, controller.args[2], "flxTab4Field3"));
        flxTab4Field3.setDefaultUnit(kony.flex.DP);
        var lblTab4Field3Label = new kony.ui.Label(extendConfig({
            "id": "lblTab4Field3Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab4Field3Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab4Field3Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab4Field3Label"));
        var flxTab4Field3Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab4Field3Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Field3Value"), extendConfig({}, controller.args[1], "flxTab4Field3Value"), extendConfig({}, controller.args[2], "flxTab4Field3Value"));
        flxTab4Field3Value.setDefaultUnit(kony.flex.DP);
        flxTab4Field3Value.add();
        flxTab4Field3.add(lblTab4Field3Label, flxTab4Field3Value);
        var flxTab4Field4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab4Field4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Field4"), extendConfig({}, controller.args[1], "flxTab4Field4"), extendConfig({}, controller.args[2], "flxTab4Field4"));
        flxTab4Field4.setDefaultUnit(kony.flex.DP);
        var lblTab4Field4Label = new kony.ui.Label(extendConfig({
            "id": "lblTab4Field4Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab4Field4Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab4Field4Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab4Field4Label"));
        var flxTab4Field4Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab4Field4Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Field4Value"), extendConfig({}, controller.args[1], "flxTab4Field4Value"), extendConfig({}, controller.args[2], "flxTab4Field4Value"));
        flxTab4Field4Value.setDefaultUnit(kony.flex.DP);
        flxTab4Field4Value.add();
        flxTab4Field4.add(lblTab4Field4Label, flxTab4Field4Value);
        var flxTab4Field5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab4Field5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Field5"), extendConfig({}, controller.args[1], "flxTab4Field5"), extendConfig({}, controller.args[2], "flxTab4Field5"));
        flxTab4Field5.setDefaultUnit(kony.flex.DP);
        var lblTab4Field5Label = new kony.ui.Label(extendConfig({
            "id": "lblTab4Field5Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab4Field5Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab4Field5Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab4Field5Label"));
        var flxTab4Field5Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab4Field5Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Field5Value"), extendConfig({}, controller.args[1], "flxTab4Field5Value"), extendConfig({}, controller.args[2], "flxTab4Field5Value"));
        flxTab4Field5Value.setDefaultUnit(kony.flex.DP);
        flxTab4Field5Value.add();
        flxTab4Field5.add(lblTab4Field5Label, flxTab4Field5Value);
        var flxTab4Field6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab4Field6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Field6"), extendConfig({}, controller.args[1], "flxTab4Field6"), extendConfig({}, controller.args[2], "flxTab4Field6"));
        flxTab4Field6.setDefaultUnit(kony.flex.DP);
        var lblTab4Field6Label = new kony.ui.Label(extendConfig({
            "id": "lblTab4Field6Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab4Field6Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab4Field6Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab4Field6Label"));
        var flxTab4Field6Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab4Field6Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Field6Value"), extendConfig({}, controller.args[1], "flxTab4Field6Value"), extendConfig({}, controller.args[2], "flxTab4Field6Value"));
        flxTab4Field6Value.setDefaultUnit(kony.flex.DP);
        flxTab4Field6Value.add();
        flxTab4Field6.add(lblTab4Field6Label, flxTab4Field6Value);
        var flxTab4Field7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab4Field7",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Field7"), extendConfig({}, controller.args[1], "flxTab4Field7"), extendConfig({}, controller.args[2], "flxTab4Field7"));
        flxTab4Field7.setDefaultUnit(kony.flex.DP);
        var lblTab4Field7Label = new kony.ui.Label(extendConfig({
            "id": "lblTab4Field7Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab4Field7Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab4Field7Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab4Field7Label"));
        var flxTab4Field7Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab4Field7Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Field7Value"), extendConfig({}, controller.args[1], "flxTab4Field7Value"), extendConfig({}, controller.args[2], "flxTab4Field7Value"));
        flxTab4Field7Value.setDefaultUnit(kony.flex.DP);
        flxTab4Field7Value.add();
        flxTab4Field7.add(lblTab4Field7Label, flxTab4Field7Value);
        var flxTab4Field8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab4Field8",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Field8"), extendConfig({}, controller.args[1], "flxTab4Field8"), extendConfig({}, controller.args[2], "flxTab4Field8"));
        flxTab4Field8.setDefaultUnit(kony.flex.DP);
        var lblTab4Field8Label = new kony.ui.Label(extendConfig({
            "id": "lblTab4Field8Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab4Field8Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab4Field8Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab4Field8Label"));
        var flxTab4Field8Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab4Field8Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Field8Value"), extendConfig({}, controller.args[1], "flxTab4Field8Value"), extendConfig({}, controller.args[2], "flxTab4Field8Value"));
        flxTab4Field8Value.setDefaultUnit(kony.flex.DP);
        flxTab4Field8Value.add();
        flxTab4Field8.add(lblTab4Field8Label, flxTab4Field8Value);
        var flxTab4Field9 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab4Field9",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Field9"), extendConfig({}, controller.args[1], "flxTab4Field9"), extendConfig({}, controller.args[2], "flxTab4Field9"));
        flxTab4Field9.setDefaultUnit(kony.flex.DP);
        var lblTab4Field9Label = new kony.ui.Label(extendConfig({
            "id": "lblTab4Field9Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab4Field9Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab4Field9Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab4Field9Label"));
        var flxTab4Field9Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab4Field9Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Field9Value"), extendConfig({}, controller.args[1], "flxTab4Field9Value"), extendConfig({}, controller.args[2], "flxTab4Field9Value"));
        flxTab4Field9Value.setDefaultUnit(kony.flex.DP);
        flxTab4Field9Value.add();
        flxTab4Field9.add(lblTab4Field9Label, flxTab4Field9Value);
        var flxTab4Field10 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTab4Field10",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "18dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Field10"), extendConfig({}, controller.args[1], "flxTab4Field10"), extendConfig({}, controller.args[2], "flxTab4Field10"));
        flxTab4Field10.setDefaultUnit(kony.flex.DP);
        var lblTab4Field10Label = new kony.ui.Label(extendConfig({
            "id": "lblTab4Field10Label",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl727272SSP15Px",
            "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblTab4Field10Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTab4Field10Label"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTab4Field10Label"));
        var flxTab4Field10Value = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab4Field10Value",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": 0,
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Field10Value"), extendConfig({}, controller.args[1], "flxTab4Field10Value"), extendConfig({}, controller.args[2], "flxTab4Field10Value"));
        flxTab4Field10Value.setDefaultUnit(kony.flex.DP);
        flxTab4Field10Value.add();
        flxTab4Field10.add(lblTab4Field10Label, flxTab4Field10Value);
        var flxTab4Dummy = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxTab4Dummy",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab4Dummy"), extendConfig({}, controller.args[1], "flxTab4Dummy"), extendConfig({}, controller.args[2], "flxTab4Dummy"));
        flxTab4Dummy.setDefaultUnit(kony.flex.DP);
        flxTab4Dummy.add();
        flxTab4DetailsContainer.add(flxTab4Field1, flxTab4Field2, flxTab4Field3, flxTab4Field4, flxTab4Field5, flxTab4Field6, flxTab4Field7, flxTab4Field8, flxTab4Field9, flxTab4Field10, flxTab4Dummy);
        var flxButtonsContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxButtonsContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxffffffShadowNoborder",
            "top": "0dp",
            "width": "100%",
            "zIndex": 110
        }, controller.args[0], "flxButtonsContainer"), extendConfig({}, controller.args[1], "flxButtonsContainer"), extendConfig({}, controller.args[2], "flxButtonsContainer"));
        flxButtonsContainer.setDefaultUnit(kony.flex.DP);
        var flxTopShadowButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "2dp",
            "id": "flxTopShadowButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "ICSknFlxHeaderShadow",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxTopShadowButtons"), extendConfig({}, controller.args[1], "flxTopShadowButtons"), extendConfig({}, controller.args[2], "flxTopShadowButtons"));
        flxTopShadowButtons.setDefaultUnit(kony.flex.DP);
        flxTopShadowButtons.add();
        var btnContactUs = new kony.ui.Button(extendConfig({
            "centerX": "50.00%",
            "focusSkin": "ICSknLbl003E7515pxSSPR",
            "height": "48dp",
            "id": "btnContactUs",
            "isVisible": true,
            "left": "20dp",
            "onClick": controller.AS_Button_jcfd1926911a46c296e1208a9e0b6596,
            "right": "20dp",
            "skin": "ICSknLbl003E7515pxSSPR",
            "text": kony.i18n.getLocalizedString("i18n.accountDetail.contactUs"),
            "top": "20dp",
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "btnContactUs"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContactUs"), extendConfig({}, controller.args[2], "btnContactUs"));
        var flxButtonsDummy = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxButtonsDummy",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxButtonsDummy"), extendConfig({}, controller.args[1], "flxButtonsDummy"), extendConfig({}, controller.args[2], "flxButtonsDummy"));
        flxButtonsDummy.setDefaultUnit(kony.flex.DP);
        flxButtonsDummy.add();
        var flxBottomShadowButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxBottomShadowButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "ICSknFlxHeaderShadow",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxBottomShadowButtons"), extendConfig({}, controller.args[1], "flxBottomShadowButtons"), extendConfig({}, controller.args[2], "flxBottomShadowButtons"));
        flxBottomShadowButtons.setDefaultUnit(kony.flex.DP);
        flxBottomShadowButtons.add();
        flxButtonsContainer.add(flxTopShadowButtons, btnContactUs, flxButtonsDummy, flxBottomShadowButtons);
        flxContainerAccountDetails.add(flxBankName, flxTab1, flxTab1DetailsContainer, flxTab2, flxTab2DetailsContainer, flxTab3, flxTab3DetailsContainer, flxTab4, flxTab4DetailsContainer, flxButtonsContainer);
        information.add(flxHeader, flxContainerAccountDetails);
        return information;
    }
})