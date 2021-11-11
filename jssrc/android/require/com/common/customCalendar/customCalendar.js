define(function() {
    return function(controller) {
        var customCalendar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "280dp",
            "id": "customCalendar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_b3a16e34cb524c87a802ad00f287980e(eventobject);
            },
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "customCalendar"), extendConfig({}, controller.args[1], "customCalendar"), extendConfig({}, controller.args[2], "customCalendar"));
        customCalendar.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35dp",
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
        var flxPreviousMonth = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPreviousMonth",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "flxPreviousMonth"), extendConfig({}, controller.args[1], "flxPreviousMonth"), extendConfig({}, controller.args[2], "flxPreviousMonth"));
        flxPreviousMonth.setDefaultUnit(kony.flex.DP);
        var imgPreviousMonth = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgPreviousMonth",
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "calenderarrowleft.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgPreviousMonth"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPreviousMonth"), extendConfig({}, controller.args[2], "imgPreviousMonth"));
        flxPreviousMonth.add(imgPreviousMonth);
        var flxNextMonth = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxNextMonth",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "flxNextMonth"), extendConfig({}, controller.args[1], "flxNextMonth"), extendConfig({}, controller.args[2], "flxNextMonth"));
        flxNextMonth.setDefaultUnit(kony.flex.DP);
        var imgNextMonth = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgNextMonth",
            "isVisible": true,
            "right": "10dp",
            "skin": "slImage",
            "src": "calenderarrowright.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgNextMonth"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgNextMonth"), extendConfig({}, controller.args[2], "imgNextMonth"));
        flxNextMonth.add(imgNextMonth);
        var lblMonth = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblMonth",
            "isVisible": true,
            "skin": "sknLblA0A0A0SSP32px",
            "text": "November 1995",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMonth"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMonth"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMonth"));
        flxHeader.add(flxPreviousMonth, flxNextMonth, lblMonth);
        var flxWeek = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15dp",
            "id": "flxWeek",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "50dp",
            "zIndex": 1
        }, controller.args[0], "flxWeek"), extendConfig({}, controller.args[1], "flxWeek"), extendConfig({}, controller.args[2], "flxWeek"));
        flxWeek.setDefaultUnit(kony.flex.DP);
        var lblSun = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblSun",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbla0a0a0SSPSemi26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "lblSun"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSun"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSun"));
        var lblMon = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblMon",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbla0a0a0SSPSemi26px",
            "text": "M",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "lblMon"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMon"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMon"));
        var lblTue = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblTue",
            "isVisible": true,
            "left": "30%",
            "skin": "sknLbla0a0a0SSPSemi26px",
            "text": "T",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "lblTue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTue"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTue"));
        var lblWed = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblWed",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbla0a0a0SSPSemi26px",
            "text": "W",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "lblWed"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWed"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblWed"));
        var lblThu = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblThu",
            "isVisible": true,
            "left": "60%",
            "skin": "sknLbla0a0a0SSPSemi26px",
            "text": "T",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "lblThu"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblThu"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblThu"));
        var lblFri = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblFri",
            "isVisible": true,
            "left": "75%",
            "skin": "sknLbla0a0a0SSPSemi26px",
            "text": "F",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "lblFri"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFri"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFri"));
        var lblSat = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblSat",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbla0a0a0SSPSemi26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "lblSat"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSat"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSat"));
        flxWeek.add(lblSun, lblMon, lblTue, lblWed, lblThu, lblFri, lblSat);
        var flxMonth = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "216dp",
            "id": "flxMonth",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "68dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxMonth"), extendConfig({}, controller.args[1], "flxMonth"), extendConfig({}, controller.args[2], "flxMonth"));
        flxMonth.setDefaultUnit(kony.flex.DP);
        var flxMonthOne = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "216dp",
            "id": "flxMonthOne",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMonthOne"), extendConfig({}, controller.args[1], "flxMonthOne"), extendConfig({}, controller.args[2], "flxMonthOne"));
        flxMonthOne.setDefaultUnit(kony.flex.DP);
        var flxWeekOne = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxWeekOne",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "3dp",
            "zIndex": 1
        }, controller.args[0], "flxWeekOne"), extendConfig({}, controller.args[1], "flxWeekOne"), extendConfig({}, controller.args[2], "flxWeekOne"));
        flxWeekOne.setDefaultUnit(kony.flex.DP);
        var CopyLabel0h896370364c647 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0h896370364c647",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl0095e4ffffffSSPReg26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0h896370364c647"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0h896370364c647"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0h896370364c647"));
        var CopyLabel0c17fd38ae73541 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0c17fd38ae73541",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0c17fd38ae73541"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0c17fd38ae73541"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0c17fd38ae73541"));
        var CopyLabel0ebdb65cb337e40 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0ebdb65cb337e40",
            "isVisible": true,
            "left": "30%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0ebdb65cb337e40"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0ebdb65cb337e40"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0ebdb65cb337e40"));
        var CopyLabel0ebebef81288b49 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0ebebef81288b49",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0ebebef81288b49"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0ebebef81288b49"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0ebebef81288b49"));
        var CopyLabel0jd77222a5bf043 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0jd77222a5bf043",
            "isVisible": true,
            "left": "60%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0jd77222a5bf043"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0jd77222a5bf043"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0jd77222a5bf043"));
        var CopyLabel0bd3347987a2d42 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0bd3347987a2d42",
            "isVisible": true,
            "left": "75%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0bd3347987a2d42"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0bd3347987a2d42"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0bd3347987a2d42"));
        var CopyLabel0db83591229ee48 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0db83591229ee48",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0db83591229ee48"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0db83591229ee48"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0db83591229ee48"));
        flxWeekOne.add(CopyLabel0h896370364c647, CopyLabel0c17fd38ae73541, CopyLabel0ebdb65cb337e40, CopyLabel0ebebef81288b49, CopyLabel0jd77222a5bf043, CopyLabel0bd3347987a2d42, CopyLabel0db83591229ee48);
        var flxWeekTwo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxWeekTwo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "36dp",
            "zIndex": 1
        }, controller.args[0], "flxWeekTwo"), extendConfig({}, controller.args[1], "flxWeekTwo"), extendConfig({}, controller.args[2], "flxWeekTwo"));
        flxWeekTwo.setDefaultUnit(kony.flex.DP);
        var CopyLabel0bf31efe96e8544 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0bf31efe96e8544",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl0095e4SSPRegular26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0bf31efe96e8544"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0bf31efe96e8544"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0bf31efe96e8544"));
        var CopyLabel0fdca447397194f = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0fdca447397194f",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0fdca447397194f"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0fdca447397194f"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0fdca447397194f"));
        var CopyLabel0f818d2b46a9443 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0f818d2b46a9443",
            "isVisible": true,
            "left": "30%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0f818d2b46a9443"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0f818d2b46a9443"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0f818d2b46a9443"));
        var CopyLabel0iacbb14118244b = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0iacbb14118244b",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0iacbb14118244b"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0iacbb14118244b"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0iacbb14118244b"));
        var CopyLabel0ab34c408890a48 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0ab34c408890a48",
            "isVisible": true,
            "left": "60%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0ab34c408890a48"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0ab34c408890a48"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0ab34c408890a48"));
        var CopyLabel0b0a37999379943 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0b0a37999379943",
            "isVisible": true,
            "left": "75%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0b0a37999379943"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0b0a37999379943"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0b0a37999379943"));
        var CopyLabel0e6c614860b2e49 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0e6c614860b2e49",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0e6c614860b2e49"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0e6c614860b2e49"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0e6c614860b2e49"));
        flxWeekTwo.add(CopyLabel0bf31efe96e8544, CopyLabel0fdca447397194f, CopyLabel0f818d2b46a9443, CopyLabel0iacbb14118244b, CopyLabel0ab34c408890a48, CopyLabel0b0a37999379943, CopyLabel0e6c614860b2e49);
        var flxWeekThree = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxWeekThree",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "72dp",
            "zIndex": 1
        }, controller.args[0], "flxWeekThree"), extendConfig({}, controller.args[1], "flxWeekThree"), extendConfig({}, controller.args[2], "flxWeekThree"));
        flxWeekThree.setDefaultUnit(kony.flex.DP);
        var CopyLabel0fd179b6989af49 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0fd179b6989af49",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblf9f9f9da8b08SSPReg26px",
            "text": "31",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0fd179b6989af49"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0fd179b6989af49"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0fd179b6989af49"));
        var CopyLabel0eb2ee0908f754b = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0eb2ee0908f754b",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0eb2ee0908f754b"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0eb2ee0908f754b"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0eb2ee0908f754b"));
        var CopyLabel0ec3ea718928e43 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0ec3ea718928e43",
            "isVisible": true,
            "left": "30%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0ec3ea718928e43"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0ec3ea718928e43"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0ec3ea718928e43"));
        var CopyLabel0c37cb272050745 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0c37cb272050745",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0c37cb272050745"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0c37cb272050745"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0c37cb272050745"));
        var CopyLabel0h55e7685c4484d = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0h55e7685c4484d",
            "isVisible": true,
            "left": "60%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0h55e7685c4484d"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0h55e7685c4484d"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0h55e7685c4484d"));
        var CopyLabel0e467834fb93444 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0e467834fb93444",
            "isVisible": true,
            "left": "75%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0e467834fb93444"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0e467834fb93444"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0e467834fb93444"));
        var CopyLabel0f7c31ea05bdd4e = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0f7c31ea05bdd4e",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0f7c31ea05bdd4e"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0f7c31ea05bdd4e"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0f7c31ea05bdd4e"));
        flxWeekThree.add(CopyLabel0fd179b6989af49, CopyLabel0eb2ee0908f754b, CopyLabel0ec3ea718928e43, CopyLabel0c37cb272050745, CopyLabel0h55e7685c4484d, CopyLabel0e467834fb93444, CopyLabel0f7c31ea05bdd4e);
        var flxWeekFour = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxWeekFour",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "108dp",
            "zIndex": 1
        }, controller.args[0], "flxWeekFour"), extendConfig({}, controller.args[1], "flxWeekFour"), extendConfig({}, controller.args[2], "flxWeekFour"));
        flxWeekFour.setDefaultUnit(kony.flex.DP);
        var CopyLabel0bf70befd32634d = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0bf70befd32634d",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl424242SSP26pxOp40",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0bf70befd32634d"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0bf70befd32634d"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0bf70befd32634d"));
        var CopyLabel0c0d1ace9366e41 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0c0d1ace9366e41",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0c0d1ace9366e41"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0c0d1ace9366e41"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0c0d1ace9366e41"));
        var CopyLabel0c6604e04cd0746 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0c6604e04cd0746",
            "isVisible": true,
            "left": "30%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0c6604e04cd0746"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0c6604e04cd0746"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0c6604e04cd0746"));
        var CopyLabel0f56560e182094f = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0f56560e182094f",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0f56560e182094f"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0f56560e182094f"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0f56560e182094f"));
        var CopyLabel0ga2fb49aa72949 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0ga2fb49aa72949",
            "isVisible": true,
            "left": "60%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0ga2fb49aa72949"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0ga2fb49aa72949"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0ga2fb49aa72949"));
        var CopyLabel0ddfbd882ca6e49 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0ddfbd882ca6e49",
            "isVisible": true,
            "left": "75%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0ddfbd882ca6e49"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0ddfbd882ca6e49"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0ddfbd882ca6e49"));
        var CopyLabel0d441e1e8b5f745 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0d441e1e8b5f745",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0d441e1e8b5f745"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0d441e1e8b5f745"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0d441e1e8b5f745"));
        flxWeekFour.add(CopyLabel0bf70befd32634d, CopyLabel0c0d1ace9366e41, CopyLabel0c6604e04cd0746, CopyLabel0f56560e182094f, CopyLabel0ga2fb49aa72949, CopyLabel0ddfbd882ca6e49, CopyLabel0d441e1e8b5f745);
        var flxWeekFive = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxWeekFive",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "144dp",
            "zIndex": 1
        }, controller.args[0], "flxWeekFive"), extendConfig({}, controller.args[1], "flxWeekFive"), extendConfig({}, controller.args[2], "flxWeekFive"));
        flxWeekFive.setDefaultUnit(kony.flex.DP);
        var CopyLabel0b4b0a19342f045 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0b4b0a19342f045",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0b4b0a19342f045"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0b4b0a19342f045"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0b4b0a19342f045"));
        var CopyLabel0j9b527661d284c = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0j9b527661d284c",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0j9b527661d284c"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0j9b527661d284c"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0j9b527661d284c"));
        var CopyLabel0h8af2ed5093c4b = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0h8af2ed5093c4b",
            "isVisible": true,
            "left": "30%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0h8af2ed5093c4b"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0h8af2ed5093c4b"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0h8af2ed5093c4b"));
        var CopyLabel0a76a5b3ff1614d = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0a76a5b3ff1614d",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0a76a5b3ff1614d"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0a76a5b3ff1614d"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0a76a5b3ff1614d"));
        var CopyLabel0j0d027a8ae2a4b = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0j0d027a8ae2a4b",
            "isVisible": true,
            "left": "60%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0j0d027a8ae2a4b"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0j0d027a8ae2a4b"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0j0d027a8ae2a4b"));
        var CopyLabel0hbe2d314e8e74d = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0hbe2d314e8e74d",
            "isVisible": true,
            "left": "75%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0hbe2d314e8e74d"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0hbe2d314e8e74d"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0hbe2d314e8e74d"));
        var CopyLabel0dba531ea66c843 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0dba531ea66c843",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0dba531ea66c843"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0dba531ea66c843"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0dba531ea66c843"));
        flxWeekFive.add(CopyLabel0b4b0a19342f045, CopyLabel0j9b527661d284c, CopyLabel0h8af2ed5093c4b, CopyLabel0a76a5b3ff1614d, CopyLabel0j0d027a8ae2a4b, CopyLabel0hbe2d314e8e74d, CopyLabel0dba531ea66c843);
        var flxWeekSix = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxWeekSix",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "180dp",
            "zIndex": 1
        }, controller.args[0], "flxWeekSix"), extendConfig({}, controller.args[1], "flxWeekSix"), extendConfig({}, controller.args[2], "flxWeekSix"));
        flxWeekSix.setDefaultUnit(kony.flex.DP);
        var CopyLabel0gdf09240d4ec41 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0gdf09240d4ec41",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0gdf09240d4ec41"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0gdf09240d4ec41"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0gdf09240d4ec41"));
        var CopyLabel0g3fdaa072d5a41 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0g3fdaa072d5a41",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0g3fdaa072d5a41"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0g3fdaa072d5a41"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0g3fdaa072d5a41"));
        var CopyLabel0c0073a9abe6c45 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0c0073a9abe6c45",
            "isVisible": true,
            "left": "30%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0c0073a9abe6c45"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0c0073a9abe6c45"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0c0073a9abe6c45"));
        var CopyLabel0d80c4e36d51442 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0d80c4e36d51442",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0d80c4e36d51442"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0d80c4e36d51442"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0d80c4e36d51442"));
        var CopyLabel0b03e3bad6b9d44 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0b03e3bad6b9d44",
            "isVisible": true,
            "left": "60%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0b03e3bad6b9d44"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0b03e3bad6b9d44"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0b03e3bad6b9d44"));
        var CopyLabel0ia4215695fd748 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0ia4215695fd748",
            "isVisible": true,
            "left": "75%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0ia4215695fd748"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0ia4215695fd748"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0ia4215695fd748"));
        var CopyLabel0i924d509954a45 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0i924d509954a45",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0i924d509954a45"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0i924d509954a45"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0i924d509954a45"));
        flxWeekSix.add(CopyLabel0gdf09240d4ec41, CopyLabel0g3fdaa072d5a41, CopyLabel0c0073a9abe6c45, CopyLabel0d80c4e36d51442, CopyLabel0b03e3bad6b9d44, CopyLabel0ia4215695fd748, CopyLabel0i924d509954a45);
        flxMonthOne.add(flxWeekOne, flxWeekTwo, flxWeekThree, flxWeekFour, flxWeekFive, flxWeekSix);
        flxMonth.add(flxMonthOne);
        var flxMonthDummy = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "216dp",
            "id": "flxMonthDummy",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "68dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMonthDummy"), extendConfig({}, controller.args[1], "flxMonthDummy"), extendConfig({}, controller.args[2], "flxMonthDummy"));
        flxMonthDummy.setDefaultUnit(kony.flex.DP);
        var flxMonthOneDummy = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "216dp",
            "id": "flxMonthOneDummy",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMonthOneDummy"), extendConfig({}, controller.args[1], "flxMonthOneDummy"), extendConfig({}, controller.args[2], "flxMonthOneDummy"));
        flxMonthOneDummy.setDefaultUnit(kony.flex.DP);
        var CopyflxWeekOne0j9c234405c184f = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "CopyflxWeekOne0j9c234405c184f",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "3dp",
            "zIndex": 1
        }, controller.args[0], "CopyflxWeekOne0j9c234405c184f"), extendConfig({}, controller.args[1], "CopyflxWeekOne0j9c234405c184f"), extendConfig({}, controller.args[2], "CopyflxWeekOne0j9c234405c184f"));
        CopyflxWeekOne0j9c234405c184f.setDefaultUnit(kony.flex.DP);
        var CopyLabel0c337ca75834644 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0c337ca75834644",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl0095e4ffffffSSPReg26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0c337ca75834644"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0c337ca75834644"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0c337ca75834644"));
        var CopyLabel0c4ece711d79f4e = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0c4ece711d79f4e",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0c4ece711d79f4e"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0c4ece711d79f4e"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0c4ece711d79f4e"));
        var CopyLabel0j6d69ee188fa44 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0j6d69ee188fa44",
            "isVisible": true,
            "left": "30%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0j6d69ee188fa44"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0j6d69ee188fa44"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0j6d69ee188fa44"));
        var CopyLabel0afb21220dd1048 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0afb21220dd1048",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0afb21220dd1048"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0afb21220dd1048"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0afb21220dd1048"));
        var CopyLabel0edffbde993a940 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0edffbde993a940",
            "isVisible": true,
            "left": "60%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0edffbde993a940"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0edffbde993a940"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0edffbde993a940"));
        var CopyLabel0c5a024606df845 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0c5a024606df845",
            "isVisible": true,
            "left": "75%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0c5a024606df845"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0c5a024606df845"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0c5a024606df845"));
        var CopyLabel0e8d8a4d3e58849 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0e8d8a4d3e58849",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0e8d8a4d3e58849"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0e8d8a4d3e58849"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0e8d8a4d3e58849"));
        CopyflxWeekOne0j9c234405c184f.add(CopyLabel0c337ca75834644, CopyLabel0c4ece711d79f4e, CopyLabel0j6d69ee188fa44, CopyLabel0afb21220dd1048, CopyLabel0edffbde993a940, CopyLabel0c5a024606df845, CopyLabel0e8d8a4d3e58849);
        var CopyflxWeekTwo0a55fa508a80940 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "CopyflxWeekTwo0a55fa508a80940",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "36dp",
            "zIndex": 1
        }, controller.args[0], "CopyflxWeekTwo0a55fa508a80940"), extendConfig({}, controller.args[1], "CopyflxWeekTwo0a55fa508a80940"), extendConfig({}, controller.args[2], "CopyflxWeekTwo0a55fa508a80940"));
        CopyflxWeekTwo0a55fa508a80940.setDefaultUnit(kony.flex.DP);
        var CopyLabel0c794c17e585342 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0c794c17e585342",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl0095e4SSPRegular26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0c794c17e585342"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0c794c17e585342"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0c794c17e585342"));
        var CopyLabel0cc83f69a493043 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0cc83f69a493043",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0cc83f69a493043"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0cc83f69a493043"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0cc83f69a493043"));
        var CopyLabel0je9b142f13ab4b = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0je9b142f13ab4b",
            "isVisible": true,
            "left": "30%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0je9b142f13ab4b"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0je9b142f13ab4b"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0je9b142f13ab4b"));
        var CopyLabel0db19adcb608047 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0db19adcb608047",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0db19adcb608047"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0db19adcb608047"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0db19adcb608047"));
        var CopyLabel0a94ff9ecd91948 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0a94ff9ecd91948",
            "isVisible": true,
            "left": "60%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0a94ff9ecd91948"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0a94ff9ecd91948"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0a94ff9ecd91948"));
        var CopyLabel0e9e5d9d7b7e84d = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0e9e5d9d7b7e84d",
            "isVisible": true,
            "left": "75%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0e9e5d9d7b7e84d"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0e9e5d9d7b7e84d"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0e9e5d9d7b7e84d"));
        var CopyLabel0e852119c331944 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0e852119c331944",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0e852119c331944"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0e852119c331944"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0e852119c331944"));
        CopyflxWeekTwo0a55fa508a80940.add(CopyLabel0c794c17e585342, CopyLabel0cc83f69a493043, CopyLabel0je9b142f13ab4b, CopyLabel0db19adcb608047, CopyLabel0a94ff9ecd91948, CopyLabel0e9e5d9d7b7e84d, CopyLabel0e852119c331944);
        var CopyflxWeekThree0dcfbe0f81f2449 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "CopyflxWeekThree0dcfbe0f81f2449",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "72dp",
            "zIndex": 1
        }, controller.args[0], "CopyflxWeekThree0dcfbe0f81f2449"), extendConfig({}, controller.args[1], "CopyflxWeekThree0dcfbe0f81f2449"), extendConfig({}, controller.args[2], "CopyflxWeekThree0dcfbe0f81f2449"));
        CopyflxWeekThree0dcfbe0f81f2449.setDefaultUnit(kony.flex.DP);
        var CopyLabel0f8aff737641343 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0f8aff737641343",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblf9f9f9da8b08SSPReg26px",
            "text": "31",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0f8aff737641343"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0f8aff737641343"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0f8aff737641343"));
        var CopyLabel0c2fe2e1e8eda49 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0c2fe2e1e8eda49",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0c2fe2e1e8eda49"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0c2fe2e1e8eda49"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0c2fe2e1e8eda49"));
        var CopyLabel0j9097edf90d941 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0j9097edf90d941",
            "isVisible": true,
            "left": "30%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0j9097edf90d941"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0j9097edf90d941"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0j9097edf90d941"));
        var CopyLabel0a7f34907bda844 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0a7f34907bda844",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0a7f34907bda844"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0a7f34907bda844"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0a7f34907bda844"));
        var CopyLabel0f53913d0edcb47 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0f53913d0edcb47",
            "isVisible": true,
            "left": "60%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0f53913d0edcb47"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0f53913d0edcb47"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0f53913d0edcb47"));
        var CopyLabel0ac5bc532de9c4c = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0ac5bc532de9c4c",
            "isVisible": true,
            "left": "75%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0ac5bc532de9c4c"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0ac5bc532de9c4c"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0ac5bc532de9c4c"));
        var CopyLabel0e6fe72848e344a = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0e6fe72848e344a",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0e6fe72848e344a"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0e6fe72848e344a"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0e6fe72848e344a"));
        CopyflxWeekThree0dcfbe0f81f2449.add(CopyLabel0f8aff737641343, CopyLabel0c2fe2e1e8eda49, CopyLabel0j9097edf90d941, CopyLabel0a7f34907bda844, CopyLabel0f53913d0edcb47, CopyLabel0ac5bc532de9c4c, CopyLabel0e6fe72848e344a);
        var CopyflxWeekFour0ee4fc0d15aa143 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "CopyflxWeekFour0ee4fc0d15aa143",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "108dp",
            "zIndex": 1
        }, controller.args[0], "CopyflxWeekFour0ee4fc0d15aa143"), extendConfig({}, controller.args[1], "CopyflxWeekFour0ee4fc0d15aa143"), extendConfig({}, controller.args[2], "CopyflxWeekFour0ee4fc0d15aa143"));
        CopyflxWeekFour0ee4fc0d15aa143.setDefaultUnit(kony.flex.DP);
        var CopyLabel0fe12c8baabcb4d = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0fe12c8baabcb4d",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl424242SSP26pxOp40",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0fe12c8baabcb4d"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0fe12c8baabcb4d"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0fe12c8baabcb4d"));
        var CopyLabel0b563e30ec2824f = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0b563e30ec2824f",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0b563e30ec2824f"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0b563e30ec2824f"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0b563e30ec2824f"));
        var CopyLabel0hf980c6b814d4d = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0hf980c6b814d4d",
            "isVisible": true,
            "left": "30%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0hf980c6b814d4d"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0hf980c6b814d4d"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0hf980c6b814d4d"));
        var CopyLabel0j8ef8b8e650148 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0j8ef8b8e650148",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0j8ef8b8e650148"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0j8ef8b8e650148"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0j8ef8b8e650148"));
        var CopyLabel0h2f10f32e1fd4f = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0h2f10f32e1fd4f",
            "isVisible": true,
            "left": "60%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0h2f10f32e1fd4f"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0h2f10f32e1fd4f"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0h2f10f32e1fd4f"));
        var CopyLabel0jabb5d0fd60346 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0jabb5d0fd60346",
            "isVisible": true,
            "left": "75%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0jabb5d0fd60346"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0jabb5d0fd60346"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0jabb5d0fd60346"));
        var CopyLabel0b8ef4801079c4c = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0b8ef4801079c4c",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0b8ef4801079c4c"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0b8ef4801079c4c"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0b8ef4801079c4c"));
        CopyflxWeekFour0ee4fc0d15aa143.add(CopyLabel0fe12c8baabcb4d, CopyLabel0b563e30ec2824f, CopyLabel0hf980c6b814d4d, CopyLabel0j8ef8b8e650148, CopyLabel0h2f10f32e1fd4f, CopyLabel0jabb5d0fd60346, CopyLabel0b8ef4801079c4c);
        var CopyflxWeekFive0b687d978ccc044 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "CopyflxWeekFive0b687d978ccc044",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "144dp",
            "zIndex": 1
        }, controller.args[0], "CopyflxWeekFive0b687d978ccc044"), extendConfig({}, controller.args[1], "CopyflxWeekFive0b687d978ccc044"), extendConfig({}, controller.args[2], "CopyflxWeekFive0b687d978ccc044"));
        CopyflxWeekFive0b687d978ccc044.setDefaultUnit(kony.flex.DP);
        var CopyLabel0ad59c12db08643 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0ad59c12db08643",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0ad59c12db08643"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0ad59c12db08643"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0ad59c12db08643"));
        var CopyLabel0cf3274f2e04840 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0cf3274f2e04840",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0cf3274f2e04840"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0cf3274f2e04840"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0cf3274f2e04840"));
        var CopyLabel0ccf691c38dc243 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0ccf691c38dc243",
            "isVisible": true,
            "left": "30%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0ccf691c38dc243"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0ccf691c38dc243"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0ccf691c38dc243"));
        var CopyLabel0e00c84dc99004f = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0e00c84dc99004f",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0e00c84dc99004f"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0e00c84dc99004f"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0e00c84dc99004f"));
        var CopyLabel0e4a9d687aebf4d = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0e4a9d687aebf4d",
            "isVisible": true,
            "left": "60%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0e4a9d687aebf4d"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0e4a9d687aebf4d"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0e4a9d687aebf4d"));
        var CopyLabel0e0548d4e525a42 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0e0548d4e525a42",
            "isVisible": true,
            "left": "75%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0e0548d4e525a42"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0e0548d4e525a42"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0e0548d4e525a42"));
        var CopyLabel0d59af6efb7ff4a = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0d59af6efb7ff4a",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0d59af6efb7ff4a"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0d59af6efb7ff4a"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0d59af6efb7ff4a"));
        CopyflxWeekFive0b687d978ccc044.add(CopyLabel0ad59c12db08643, CopyLabel0cf3274f2e04840, CopyLabel0ccf691c38dc243, CopyLabel0e00c84dc99004f, CopyLabel0e4a9d687aebf4d, CopyLabel0e0548d4e525a42, CopyLabel0d59af6efb7ff4a);
        var CopyflxWeekSix0gb0f6f7dcf9647 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "CopyflxWeekSix0gb0f6f7dcf9647",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "180dp",
            "zIndex": 1
        }, controller.args[0], "CopyflxWeekSix0gb0f6f7dcf9647"), extendConfig({}, controller.args[1], "CopyflxWeekSix0gb0f6f7dcf9647"), extendConfig({}, controller.args[2], "CopyflxWeekSix0gb0f6f7dcf9647"));
        CopyflxWeekSix0gb0f6f7dcf9647.setDefaultUnit(kony.flex.DP);
        var CopyLabel0ac994ad2fdf342 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0ac994ad2fdf342",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0ac994ad2fdf342"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0ac994ad2fdf342"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0ac994ad2fdf342"));
        var CopyLabel0cf1b7a0899f349 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0cf1b7a0899f349",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0cf1b7a0899f349"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0cf1b7a0899f349"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0cf1b7a0899f349"));
        var CopyLabel0i267b78a713146 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0i267b78a713146",
            "isVisible": true,
            "left": "30%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0i267b78a713146"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0i267b78a713146"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0i267b78a713146"));
        var CopyLabel0e685cf3c7c9c41 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0e685cf3c7c9c41",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0e685cf3c7c9c41"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0e685cf3c7c9c41"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0e685cf3c7c9c41"));
        var CopyLabel0ffe9fb5523a34d = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0ffe9fb5523a34d",
            "isVisible": true,
            "left": "60%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0ffe9fb5523a34d"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0ffe9fb5523a34d"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0ffe9fb5523a34d"));
        var CopyLabel0g5ad75159d0a41 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0g5ad75159d0a41",
            "isVisible": true,
            "left": "75%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0g5ad75159d0a41"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0g5ad75159d0a41"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0g5ad75159d0a41"));
        var CopyLabel0dbfad1b9135149 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0dbfad1b9135149",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "CopyLabel0dbfad1b9135149"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyLabel0dbfad1b9135149"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopyLabel0dbfad1b9135149"));
        CopyflxWeekSix0gb0f6f7dcf9647.add(CopyLabel0ac994ad2fdf342, CopyLabel0cf1b7a0899f349, CopyLabel0i267b78a713146, CopyLabel0e685cf3c7c9c41, CopyLabel0ffe9fb5523a34d, CopyLabel0g5ad75159d0a41, CopyLabel0dbfad1b9135149);
        flxMonthOneDummy.add(CopyflxWeekOne0j9c234405c184f, CopyflxWeekTwo0a55fa508a80940, CopyflxWeekThree0dcfbe0f81f2449, CopyflxWeekFour0ee4fc0d15aa143, CopyflxWeekFive0b687d978ccc044, CopyflxWeekSix0gb0f6f7dcf9647);
        flxMonthDummy.add(flxMonthOneDummy);
        var flxHighlight = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "216dp",
            "id": "flxHighlight",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": 20,
            "skin": "slFbox",
            "top": "68dp",
            "zIndex": 1
        }, controller.args[0], "flxHighlight"), extendConfig({}, controller.args[1], "flxHighlight"), extendConfig({}, controller.args[2], "flxHighlight"));
        flxHighlight.setDefaultUnit(kony.flex.DP);
        var FlexContainer0deb41bfaec504d = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "220dp",
            "id": "FlexContainer0deb41bfaec504d",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "34dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "34dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "FlexContainer0deb41bfaec504d"), extendConfig({}, controller.args[1], "FlexContainer0deb41bfaec504d"), extendConfig({}, controller.args[2], "FlexContainer0deb41bfaec504d"));
        FlexContainer0deb41bfaec504d.setDefaultUnit(kony.flex.DP);
        FlexContainer0deb41bfaec504d.add();
        flxHighlight.add(FlexContainer0deb41bfaec504d);
        customCalendar.add(flxHeader, flxWeek, flxMonth, flxMonthDummy, flxHighlight);
        return customCalendar;
    }
})