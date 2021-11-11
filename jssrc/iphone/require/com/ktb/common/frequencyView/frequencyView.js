define(function() {
    return function(controller) {
        var frequencyView = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "frequencyView",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_d0e9bf1a18af496bbe4ee48c0096667d(eventobject);
            },
            "skin": "sknFlxBgFFFFFFTab",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "frequencyView"), extendConfig({}, controller.args[1], "frequencyView"), extendConfig({}, controller.args[2], "frequencyView"));
        frequencyView.setDefaultUnit(kony.flex.DP);
        var flxFrequency = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "52dp",
            "id": "flxFrequency",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFrequency"), extendConfig({}, controller.args[1], "flxFrequency"), extendConfig({}, controller.args[2], "flxFrequency"));
        flxFrequency.setDefaultUnit(kony.flex.DP);
        var flxFrequencyData = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxFrequencyData",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFrequencyData"), extendConfig({}, controller.args[1], "flxFrequencyData"), extendConfig({}, controller.args[2], "flxFrequencyData"));
        flxFrequencyData.setDefaultUnit(kony.flex.DP);
        var lblTransferFrequency = new kony.ui.Label(extendConfig({
            "centerY": "50.00%",
            "id": "lblTransferFrequency",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblA0A0A0SSP32PxTab",
            "text": kony.i18n.getLocalizedString("kony.tab.BillPay.TransferFrequency"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTransferFrequency"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTransferFrequency"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTransferFrequency"));
        var lblDaily = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblDaily",
            "isVisible": true,
            "left": "170dp",
            "skin": "sknLbl3E4F56SSP32pxTab",
            "text": kony.i18n.getLocalizedString("kony.tab.transfer.daily"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDaily"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDaily"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDaily"));
        flxFrequencyData.add(lblTransferFrequency, lblDaily);
        var flxSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBGF1F1F1Tab",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator"), extendConfig({}, controller.args[1], "flxSeparator"), extendConfig({}, controller.args[2], "flxSeparator"));
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxFrequency.add(flxFrequencyData, flxSeparator);
        var flxFrequencyDate = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "52dp",
            "id": "flxFrequencyDate",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFrequencyDate"), extendConfig({}, controller.args[1], "flxFrequencyDate"), extendConfig({}, controller.args[2], "flxFrequencyDate"));
        flxFrequencyDate.setDefaultUnit(kony.flex.DP);
        var flxDate = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxDate",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDate"), extendConfig({}, controller.args[1], "flxDate"), extendConfig({}, controller.args[2], "flxDate"));
        flxDate.setDefaultUnit(kony.flex.DP);
        var lblDateStart = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblDateStart",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblA0A0A0SSP32PxTab",
            "text": "Start Date",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDateStart"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDateStart"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDateStart"));
        var lblDateStartValue = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblDateStartValue",
            "isVisible": true,
            "left": "170dp",
            "skin": "sknLbl3E4F56SSP32pxTab",
            "text": "12 / 16 / 2017",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDateStartValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDateStartValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDateStartValue"));
        flxDate.add(lblDateStart, lblDateStartValue);
        var flxSeparatorD = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSeparatorD",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBGF1F1F1Tab",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeparatorD"), extendConfig({}, controller.args[1], "flxSeparatorD"), extendConfig({}, controller.args[2], "flxSeparatorD"));
        flxSeparatorD.setDefaultUnit(kony.flex.DP);
        flxSeparatorD.add();
        flxFrequencyDate.add(flxDate, flxSeparatorD);
        var flxFrequencyRange = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "52dp",
            "id": "flxFrequencyRange",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFrequencyRange"), extendConfig({}, controller.args[1], "flxFrequencyRange"), extendConfig({}, controller.args[2], "flxFrequencyRange"));
        flxFrequencyRange.setDefaultUnit(kony.flex.DP);
        var flxRange = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxRange",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "15dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRange"), extendConfig({}, controller.args[1], "flxRange"), extendConfig({}, controller.args[2], "flxRange"));
        flxRange.setDefaultUnit(kony.flex.DP);
        var lblFrequency = new kony.ui.Label(extendConfig({
            "centerY": "50.00%",
            "id": "lblFrequency",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknLblA0A0A0SSP32PxTab",
            "text": kony.i18n.getLocalizedString("kony.tab.SetFrequency"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFrequency"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFrequency"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFrequency"));
        var lblFrequencyRange = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblFrequencyRange",
            "isVisible": true,
            "left": "170dp",
            "skin": "sknLbl3E4F56SSP32pxTab",
            "text": kony.i18n.getLocalizedString("kony.tab.Transfer.DateRange"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFrequencyRange"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFrequencyRange"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFrequencyRange"));
        flxRange.add(lblFrequency, lblFrequencyRange);
        var flxSeparatorB = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSeparatorB",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBGF1F1F1Tab",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeparatorB"), extendConfig({}, controller.args[1], "flxSeparatorB"), extendConfig({}, controller.args[2], "flxSeparatorB"));
        flxSeparatorB.setDefaultUnit(kony.flex.DP);
        flxSeparatorB.add();
        flxFrequencyRange.add(flxRange, flxSeparatorB);
        var flxSetFrequency = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "52dp",
            "id": "flxSetFrequency",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSetFrequency"), extendConfig({}, controller.args[1], "flxSetFrequency"), extendConfig({}, controller.args[2], "flxSetFrequency"));
        flxSetFrequency.setDefaultUnit(kony.flex.DP);
        var lblSetFrequency = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblSetFrequency",
            "isVisible": true,
            "onTouchStart": controller.AS_onHandleAction_ad06b5674c104ceaa3a1cb5461fc4d72,
            "skin": "sknLbl004b95SSP30PxTab",
            "text": "Set Frequency",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSetFrequency"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSetFrequency"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSetFrequency"));
        var flxSeparatorL = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSeparatorL",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBGF1F1F1Tab",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeparatorL"), extendConfig({}, controller.args[1], "flxSeparatorL"), extendConfig({}, controller.args[2], "flxSeparatorL"));
        flxSeparatorL.setDefaultUnit(kony.flex.DP);
        flxSeparatorL.add();
        flxSetFrequency.add(lblSetFrequency, flxSeparatorL);
        frequencyView.add(flxFrequency, flxFrequencyDate, flxFrequencyRange, flxSetFrequency);
        return frequencyView;
    }
})