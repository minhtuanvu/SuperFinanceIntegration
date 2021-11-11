define(function() {
    return function(controller) {
        var termsAndConditions = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "termsAndConditions",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_e5b9c23cbeb04880ae15f408175864be(eventobject);
            },
            "skin": "ICSknSlFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "termsAndConditions"), extendConfig({}, controller.args[1], "termsAndConditions"), extendConfig({}, controller.args[2], "termsAndConditions"));
        termsAndConditions.setDefaultUnit(kony.flex.DP);
        var flxTermsConditions = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "0dp",
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "horizontalScrollIndicator": true,
            "id": "flxTermsConditions",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxTermsConditions"), extendConfig({}, controller.args[1], "flxTermsConditions"), extendConfig({}, controller.args[2], "flxTermsConditions"));
        flxTermsConditions.setDefaultUnit(kony.flex.DP);
        var rtxTermsConditionsValue = new kony.ui.RichText(extendConfig({
            "bottom": "0dp",
            "id": "rtxTermsConditionsValue",
            "isVisible": true,
            "left": "6.25%",
            "skin": "sknRtx424242SSP26px",
            "top": "20dp",
            "width": "87.50%",
            "zIndex": 3
        }, controller.args[0], "rtxTermsConditionsValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "rtxTermsConditionsValue"), extendConfig({
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "rtxTermsConditionsValue"));
        var brsrTerms = new kony.ui.Browser(extendConfig({
            "detectTelNumber": true,
            "enableZoom": false,
            "height": "100%",
            "htmlString": "Browser",
            "id": "brsrTerms",
            "isVisible": false,
            "left": "0dp",
            "setAsContent": false,
            "right": "0dp",
            "top": "0dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "brsrTerms"), extendConfig({}, controller.args[1], "brsrTerms"), extendConfig({
            "browserType": constants.BROWSER_TYPE_WKWEBVIEW
        }, controller.args[2], "brsrTerms"));
        flxTermsConditions.add(rtxTermsConditionsValue, brsrTerms);
        termsAndConditions.add(flxTermsConditions);
        return termsAndConditions;
    }
})