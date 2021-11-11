define(function() {
    return function(controller) {
        var investmentLineChart = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "investmentLineChart",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_g69c25f04167498998479958c04b31bd(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "investmentLineChart"), extendConfig({}, controller.args[1], "investmentLineChart"), extendConfig({}, controller.args[2], "investmentLineChart"));
        investmentLineChart.setDefaultUnit(kony.flex.DP);
        var flxInvestmentContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "350dp",
            "id": "flxInvestmentContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFChart",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxInvestmentContainer"), extendConfig({}, controller.args[1], "flxInvestmentContainer"), extendConfig({}, controller.args[2], "flxInvestmentContainer"));
        flxInvestmentContainer.setDefaultUnit(kony.flex.DP);
        var flxlineChartFilterContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxlineChartFilterContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxlineChartFilterContainer"), extendConfig({}, controller.args[1], "flxlineChartFilterContainer"), extendConfig({}, controller.args[2], "flxlineChartFilterContainer"));
        flxlineChartFilterContainer.setDefaultUnit(kony.flex.DP);
        var flxlineChartFilter = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxlineChartFilter",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 1,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "flxlineChartFilter"), extendConfig({}, controller.args[1], "flxlineChartFilter"), extendConfig({}, controller.args[2], "flxlineChartFilter"));
        flxlineChartFilter.setDefaultUnit(kony.flex.DP);
        var lblDate = new kony.ui.Label(extendConfig({
            "centerX": "32%",
            "height": "40dp",
            "id": "lblDate",
            "isVisible": true,
            "left": "0",
            "right": "5dp",
            "text": "1M",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "lblDate"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDate"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDate"));
        var lblOneYear = new kony.ui.Label(extendConfig({
            "height": "40dp",
            "id": "lblOneYear",
            "isVisible": true,
            "left": "0",
            "right": "5dp",
            "text": "1Y",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "lblOneYear"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOneYear"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblOneYear"));
        var lblFiveYear = new kony.ui.Label(extendConfig({
            "height": "40dp",
            "id": "lblFiveYear",
            "isVisible": true,
            "left": "0",
            "right": "5dp",
            "text": "5Y",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "lblFiveYear"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFiveYear"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFiveYear"));
        var lblStartYear = new kony.ui.Label(extendConfig({
            "height": "40dp",
            "id": "lblStartYear",
            "isVisible": true,
            "text": "YTD",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "45dp",
            "zIndex": 1
        }, controller.args[0], "lblStartYear"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblStartYear"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblStartYear"));
        flxlineChartFilter.add(lblDate, lblOneYear, lblFiveYear, lblStartYear);
        flxlineChartFilterContainer.add(flxlineChartFilter);
        var flxInvesmentChartContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "280dp",
            "id": "flxInvesmentChartContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "4dp",
            "width": "98%",
            "zIndex": 1
        }, controller.args[0], "flxInvesmentChartContainer"), extendConfig({}, controller.args[1], "flxInvesmentChartContainer"), extendConfig({}, controller.args[2], "flxInvesmentChartContainer"));
        flxInvesmentChartContainer.setDefaultUnit(kony.flex.DP);
        var brwInvestmentChart = new kony.ui.Browser(extendConfig({
            "detectTelNumber": true,
            "enableZoom": false,
            "height": "100%",
            "id": "brwInvestmentChart",
            "isVisible": true,
            "left": "0dp",
            "setAsContent": false,
            "requestURLConfig": {
                "URL": "",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "brwInvestmentChart"), extendConfig({}, controller.args[1], "brwInvestmentChart"), extendConfig({}, controller.args[2], "brwInvestmentChart"));
        flxInvesmentChartContainer.add(brwInvestmentChart);
        flxInvestmentContainer.add(flxlineChartFilterContainer, flxInvesmentChartContainer);
        investmentLineChart.add(flxInvestmentContainer);
        return investmentLineChart;
    }
})