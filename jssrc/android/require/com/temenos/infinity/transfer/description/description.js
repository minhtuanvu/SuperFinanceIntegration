define(function() {
    return function(controller) {
        var description = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "id": "description",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "description"), extendConfig({}, controller.args[1], "description"), extendConfig({}, controller.args[2], "description"));
        description.setDefaultUnit(kony.flex.DP);
        var flxMainPopup = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxMainPopup",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "4dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainPopup"), extendConfig({}, controller.args[1], "flxMainPopup"), extendConfig({}, controller.args[2], "flxMainPopup"));
        flxMainPopup.setDefaultUnit(kony.flex.DP);
        var flxPopupContent = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxPopupContent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "211dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxPopupContent"), extendConfig({}, controller.args[1], "flxPopupContent"), extendConfig({}, controller.args[2], "flxPopupContent"));
        flxPopupContent.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxLabel = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxLabel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "flxLabel"), extendConfig({}, controller.args[1], "flxLabel"), extendConfig({}, controller.args[2], "flxLabel"));
        flxLabel.setDefaultUnit(kony.flex.DP);
        var lblPopupTitle = new kony.ui.Label(extendConfig({
            "id": "lblPopupTitle",
            "isVisible": true,
            "left": 0,
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblPopupTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPopupTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPopupTitle"));
        flxLabel.add(lblPopupTitle);
        var flxCloseImg = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "20dp",
            "id": "flxCloseImg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "top": "15dp",
            "width": "20dp"
        }, controller.args[0], "flxCloseImg"), extendConfig({}, controller.args[1], "flxCloseImg"), extendConfig({}, controller.args[2], "flxCloseImg"));
        flxCloseImg.setDefaultUnit(kony.flex.DP);
        var imgClose = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgClose",
            "isVisible": true,
            "left": "0",
            "src": "imagedrag.png",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "imgClose"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClose"), extendConfig({}, controller.args[2], "imgClose"));
        flxCloseImg.add(imgClose);
        flxHeader.add(flxLabel, flxCloseImg);
        var flxSeparator1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2.50%",
            "isModalContainer": false,
            "top": "50dp",
            "width": "95%",
            "zIndex": 5
        }, controller.args[0], "flxSeparator1"), extendConfig({}, controller.args[1], "flxSeparator1"), extendConfig({}, controller.args[2], "flxSeparator1"));
        flxSeparator1.setDefaultUnit(kony.flex.DP);
        flxSeparator1.add();
        var flxPopupDescription = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxPopupDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "132dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxPopupDescription"), extendConfig({}, controller.args[1], "flxPopupDescription"), extendConfig({}, controller.args[2], "flxPopupDescription"));
        flxPopupDescription.setDefaultUnit(kony.flex.DP);
        var lblPopupDescription = new kony.ui.Label(extendConfig({
            "id": "lblPopupDescription",
            "isVisible": true,
            "left": "40dp",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPopupDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPopupDescription"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPopupDescription"));
        flxPopupDescription.add(lblPopupDescription);
        var flxSeparator2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2.50%",
            "isModalContainer": false,
            "top": "50dp",
            "width": "95%",
            "zIndex": 5
        }, controller.args[0], "flxSeparator2"), extendConfig({}, controller.args[1], "flxSeparator2"), extendConfig({}, controller.args[2], "flxSeparator2"));
        flxSeparator2.setDefaultUnit(kony.flex.DP);
        flxSeparator2.add();
        var flxTermsCondition = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxTermsCondition",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "85dp",
            "isModalContainer": false,
            "top": "3dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxTermsCondition"), extendConfig({}, controller.args[1], "flxTermsCondition"), extendConfig({}, controller.args[2], "flxTermsCondition"));
        flxTermsCondition.setDefaultUnit(kony.flex.DP);
        var lblTermsCondtionTitle = new kony.ui.Label(extendConfig({
            "id": "lblTermsCondtionTitle",
            "isVisible": true,
            "left": "39dp",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "8dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTermsCondtionTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTermsCondtionTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTermsCondtionTitle"));
        var lblTermsCondtion = new kony.ui.Label(extendConfig({
            "id": "lblTermsCondtion",
            "isVisible": true,
            "left": "74dp",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "17dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTermsCondtion"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTermsCondtion"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTermsCondtion"));
        flxTermsCondition.add(lblTermsCondtionTitle, lblTermsCondtion);
        var flxSeparator3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2.50%",
            "isModalContainer": false,
            "top": "50dp",
            "width": "95%",
            "zIndex": 5
        }, controller.args[0], "flxSeparator3"), extendConfig({}, controller.args[1], "flxSeparator3"), extendConfig({}, controller.args[2], "flxSeparator3"));
        flxSeparator3.setDefaultUnit(kony.flex.DP);
        flxSeparator3.add();
        var flxCloseButton = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxCloseButton",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "86dp",
            "isModalContainer": false,
            "top": "8dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCloseButton"), extendConfig({}, controller.args[1], "flxCloseButton"), extendConfig({}, controller.args[2], "flxCloseButton"));
        flxCloseButton.setDefaultUnit(kony.flex.DP);
        var btnClosePopup = new kony.ui.Button(extendConfig({
            "height": "50dp",
            "id": "btnClosePopup",
            "isVisible": true,
            "left": "143dp",
            "text": "Button",
            "top": "14dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "btnClosePopup"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnClosePopup"), extendConfig({}, controller.args[2], "btnClosePopup"));
        flxCloseButton.add(btnClosePopup);
        flxPopupContent.add(flxHeader, flxSeparator1, flxPopupDescription, flxSeparator2, flxTermsCondition, flxSeparator3, flxCloseButton);
        flxMainPopup.add(flxPopupContent);
        description.add(flxMainPopup);
        return description;
    }
})