define(function() {
    return function(controller) {
        var campaignPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "campaignPopup",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx000000Op50",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "campaignPopup"), extendConfig({}, controller.args[1], "campaignPopup"), extendConfig({}, controller.args[2], "campaignPopup"));
        campaignPopup.setDefaultUnit(kony.flex.DP);
        var flxPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "id": "flxPopup",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFBorder1px",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "flxPopup"), extendConfig({}, controller.args[1], "flxPopup"), extendConfig({}, controller.args[2], "flxPopup"));
        flxPopup.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "23dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxClose = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12dp",
            "id": "flxClose",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "11dp",
            "skin": "slFbox",
            "top": "11dp",
            "width": "12dp",
            "zIndex": 1
        }, controller.args[0], "flxClose"), extendConfig({}, controller.args[1], "flxClose"), extendConfig({}, controller.args[2], "flxClose"));
        flxClose.setDefaultUnit(kony.flex.DP);
        var imgClose = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgClose",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "closeicon.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgClose"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClose"), extendConfig({}, controller.args[2], "imgClose"));
        flxClose.add(imgClose);
        flxHeader.add(flxClose);
        var flxCampaignHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCampaignHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCampaignHeader"), extendConfig({}, controller.args[1], "flxCampaignHeader"), extendConfig({}, controller.args[2], "flxCampaignHeader"));
        flxCampaignHeader.setDefaultUnit(kony.flex.DP);
        var lblHeading = new kony.ui.Label(extendConfig({
            "id": "lblHeading",
            "isVisible": true,
            "left": "20dp",
            "right": "30dp",
            "skin": "sknLbl53px003E75",
            "text": "Spend less, earn more Interest",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblHeading"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeading"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblHeading"));
        flxCampaignHeader.add(lblHeading);
        var flxCampaignDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCampaignDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "4dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCampaignDescription"), extendConfig({}, controller.args[1], "flxCampaignDescription"), extendConfig({}, controller.args[2], "flxCampaignDescription"));
        flxCampaignDescription.setDefaultUnit(kony.flex.DP);
        var lblDescription = new kony.ui.Label(extendConfig({
            "id": "lblDescription",
            "isVisible": true,
            "left": "20dp",
            "right": "30dp",
            "skin": "sknLbl27px424242",
            "text": "Get 1.95% APY on your savings with the new Infinity savings account. ",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDescription"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDescription"));
        flxCampaignDescription.add(lblDescription);
        var flxCampaignImage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "170dp",
            "id": "flxCampaignImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "19dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCampaignImage"), extendConfig({}, controller.args[1], "flxCampaignImage"), extendConfig({}, controller.args[2], "flxCampaignImage"));
        flxCampaignImage.setDefaultUnit(kony.flex.DP);
        var imgPopup = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgPopup",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "campaign_bonus.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgPopup"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPopup"), extendConfig({}, controller.args[2], "imgPopup"));
        flxCampaignImage.add(imgPopup);
        var flxButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxButtons",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxButtons"), extendConfig({}, controller.args[1], "flxButtons"), extendConfig({}, controller.args[2], "flxButtons"));
        flxButtons.setDefaultUnit(kony.flex.DP);
        var btnYes = new kony.ui.Button(extendConfig({
            "bottom": "10dp",
            "centerX": "50%",
            "focusSkin": "sknbtnBf003E75Border1pxFontFFFFFF",
            "height": "40dp",
            "id": "btnYes",
            "isVisible": true,
            "skin": "sknbtnBf003E75Border1pxFontFFFFFF",
            "text": "Read Now",
            "top": "20dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnYes"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnYes"), extendConfig({}, controller.args[2], "btnYes"));
        var btnNo = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "height": "40dp",
            "id": "btnNo",
            "isVisible": true,
            "skin": "sknBtnBgFFFFFFBorder1px003E75",
            "text": "Read Later",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnNo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNo"), extendConfig({}, controller.args[2], "btnNo"));
        flxButtons.add(btnYes, btnNo);
        flxPopup.add(flxHeader, flxCampaignHeader, flxCampaignDescription, flxCampaignImage, flxButtons);
        campaignPopup.add(flxPopup);
        return campaignPopup;
    }
})