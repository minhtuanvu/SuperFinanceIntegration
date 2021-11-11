define(function() {
    return function(controller) {
        var segmentDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "segmentDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "segmentDetails"), extendConfig({}, controller.args[1], "segmentDetails"), extendConfig({}, controller.args[2], "segmentDetails"));
        segmentDetails.setDefaultUnit(kony.flex.DP);
        var segList = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "imgChevron": "chevron.png",
                "imgLogo": "imagedrag.png",
                "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                "lblFiveValue": "Buy",
                "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                "lblFourValue": "10",
                "lblId": "US02079K1079 | NASDAQ",
                "lblName": "Alphabet C class",
                "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                "lblOneValue": "07/22/2020",
                "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                "lblThreeValue": "$11,000.00",
                "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                "lblTwoValue": "$10.90"
            }, {
                "imgChevron": "chevron.png",
                "imgLogo": "imagedrag.png",
                "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                "lblFiveValue": "Buy",
                "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                "lblFourValue": "10",
                "lblId": "US02079K1079 | NASDAQ",
                "lblName": "Alphabet C class",
                "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                "lblOneValue": "07/22/2020",
                "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                "lblThreeValue": "$11,000.00",
                "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                "lblTwoValue": "$10.90"
            }, {
                "imgChevron": "chevron.png",
                "imgLogo": "imagedrag.png",
                "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                "lblFiveValue": "Buy",
                "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                "lblFourValue": "10",
                "lblId": "US02079K1079 | NASDAQ",
                "lblName": "Alphabet C class",
                "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                "lblOneValue": "07/22/2020",
                "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                "lblThreeValue": "$11,000.00",
                "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                "lblTwoValue": "$10.90"
            }, {
                "imgChevron": "chevron.png",
                "imgLogo": "imagedrag.png",
                "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                "lblFiveValue": "Buy",
                "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                "lblFourValue": "10",
                "lblId": "US02079K1079 | NASDAQ",
                "lblName": "Alphabet C class",
                "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                "lblOneValue": "07/22/2020",
                "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                "lblThreeValue": "$11,000.00",
                "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                "lblTwoValue": "$10.90"
            }, {
                "imgChevron": "chevron.png",
                "imgLogo": "imagedrag.png",
                "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                "lblFiveValue": "Buy",
                "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                "lblFourValue": "10",
                "lblId": "US02079K1079 | NASDAQ",
                "lblName": "Alphabet C class",
                "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                "lblOneValue": "07/22/2020",
                "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                "lblThreeValue": "$11,000.00",
                "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                "lblTwoValue": "$10.90"
            }, {
                "imgChevron": "chevron.png",
                "imgLogo": "imagedrag.png",
                "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                "lblFiveValue": "Buy",
                "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                "lblFourValue": "10",
                "lblId": "US02079K1079 | NASDAQ",
                "lblName": "Alphabet C class",
                "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                "lblOneValue": "07/22/2020",
                "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                "lblThreeValue": "$11,000.00",
                "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                "lblTwoValue": "$10.90"
            }, {
                "imgChevron": "chevron.png",
                "imgLogo": "imagedrag.png",
                "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                "lblFiveValue": "Buy",
                "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                "lblFourValue": "10",
                "lblId": "US02079K1079 | NASDAQ",
                "lblName": "Alphabet C class",
                "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                "lblOneValue": "07/22/2020",
                "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                "lblThreeValue": "$11,000.00",
                "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                "lblTwoValue": "$10.90"
            }, {
                "imgChevron": "chevron.png",
                "imgLogo": "imagedrag.png",
                "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                "lblFiveValue": "Buy",
                "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                "lblFourValue": "10",
                "lblId": "US02079K1079 | NASDAQ",
                "lblName": "Alphabet C class",
                "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                "lblOneValue": "07/22/2020",
                "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                "lblThreeValue": "$11,000.00",
                "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                "lblTwoValue": "$10.90"
            }, {
                "imgChevron": "chevron.png",
                "imgLogo": "imagedrag.png",
                "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                "lblFiveValue": "Buy",
                "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                "lblFourValue": "10",
                "lblId": "US02079K1079 | NASDAQ",
                "lblName": "Alphabet C class",
                "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                "lblOneValue": "07/22/2020",
                "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                "lblThreeValue": "$11,000.00",
                "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                "lblTwoValue": "$10.90"
            }, {
                "imgChevron": "chevron.png",
                "imgLogo": "imagedrag.png",
                "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                "lblFiveValue": "Buy",
                "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                "lblFourValue": "10",
                "lblId": "US02079K1079 | NASDAQ",
                "lblName": "Alphabet C class",
                "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                "lblOneValue": "07/22/2020",
                "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                "lblThreeValue": "$11,000.00",
                "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                "lblTwoValue": "$10.90"
            }],
            "groupCells": false,
            "id": "segList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "onRowClick": controller.AS_onRowClick_h137710a4b0e4cdf9f94936ab645ce5a,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxDetailsList",
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
                "flxBottomBorder": "flxBottomBorder",
                "flxClick": "flxClick",
                "flxDetail": "flxDetail",
                "flxDetailFive": "flxDetailFive",
                "flxDetailFour": "flxDetailFour",
                "flxDetailOne": "flxDetailOne",
                "flxDetailThree": "flxDetailThree",
                "flxDetailTwo": "flxDetailTwo",
                "flxDetailsList": "flxDetailsList",
                "flxMain": "flxMain",
                "flxRowFour": "flxRowFour",
                "flxRowOne": "flxRowOne",
                "flxRowThree": "flxRowThree",
                "flxRowTwo": "flxRowTwo",
                "imgChevron": "imgChevron",
                "imgLogo": "imgLogo",
                "lblFiveKey": "lblFiveKey",
                "lblFiveValue": "lblFiveValue",
                "lblFourKey": "lblFourKey",
                "lblFourValue": "lblFourValue",
                "lblId": "lblId",
                "lblName": "lblName",
                "lblOneKey": "lblOneKey",
                "lblOneValue": "lblOneValue",
                "lblThreeKey": "lblThreeKey",
                "lblThreeValue": "lblThreeValue",
                "lblTwoKey": "lblTwoKey",
                "lblTwoValue": "lblTwoValue"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segList"), extendConfig({}, controller.args[2], "segList"));
        segmentDetails.add(segList);
        return segmentDetails;
    }
})