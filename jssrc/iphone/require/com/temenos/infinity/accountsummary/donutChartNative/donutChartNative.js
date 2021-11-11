define(function() {
    return function(controller) {
        var donutChartNative = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "donutChartNative",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "2dp",
            "isModalContainer": false,
            "postShow": controller.AS_FlexContainer_f893f10d00404743834fc4c2fc8fd028,
            "skin": "slFbox",
            "top": "-2dp",
            "width": "100%"
        }, controller.args[0], "donutChartNative"), extendConfig({}, controller.args[1], "donutChartNative"), extendConfig({}, controller.args[2], "donutChartNative"));
        donutChartNative.setDefaultUnit(kony.flex.DP);
        var flxGraphContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "200dp",
            "id": "flxGraphContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxGraphContainer"), extendConfig({}, controller.args[1], "flxGraphContainer"), extendConfig({}, controller.args[2], "flxGraphContainer"));
        flxGraphContainer.setDefaultUnit(kony.flex.DP);
        var donutchart = new com.temenos.infinity.donutchart(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "200dp",
            "id": "donutchart",
            "isVisible": true,
            "left": 0,
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "sknFlxMainDonut",
            "top": 0,
            "width": "200dp",
            "overrides": {
                "donutchart": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared"
                }
            }
        }, controller.args[0], "donutchart"), extendConfig({
            "overrides": {}
        }, controller.args[1], "donutchart"), extendConfig({
            "overrides": {}
        }, controller.args[2], "donutchart"));
        donutchart.enableLegend = true;
        donutchart.bgColor = "#ffffff";
        donutchart.chartData = {
            "data": [{
                "colorCode": "#1B9ED9",
                "label": "Data1",
                "value": "40"
            }, {
                "colorCode": "#E8672B",
                "label": "Data2",
                "value": "20"
            }, {
                "colorCode": "#76C044",
                "label": "Data3",
                "value": "20"
            }, {
                "colorCode": "#FFC522",
                "label": "Data4",
                "value": "10"
            }, {
                "colorCode": "#97CDED",
                "label": "Data5",
                "value": "10"
            }],
            "schema": [{
                "columnHeaderTemplate": null,
                "columnHeaderText": "Label",
                "columnHeaderType": "text",
                "columnID": "label",
                "columnOnClick": null,
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "c8434b6cbed443e6a6167d99e8c3bdcb"
            }, {
                "columnHeaderTemplate": null,
                "columnHeaderText": "Value",
                "columnHeaderType": "text",
                "columnID": "value",
                "columnOnClick": null,
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "cddb65c1fe8c429bb5a4b5f93bd171ef"
            }, {
                "columnHeaderTemplate": null,
                "columnHeaderText": "Color Code",
                "columnHeaderType": "text",
                "columnID": "colorCode",
                "columnOnClick": null,
                "columnText": "Not Defined",
                "columnType": "text",
                "kuid": "f722303b71a8439eae528d9af9856f30"
            }]
        };
        donutchart.titleFontSize = "12";
        donutchart.enableChartAnimation = true;
        donutchart.chartTitle = "Donut Chart";
        donutchart.legendFontSize = "8";
        donutchart.enableStaticPreview = true;
        donutchart.titleFontColor = "#000000";
        donutchart.legendFontColor = "#000000";
        var flxTotalInstallments = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100dp",
            "id": "flxTotalInstallments",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "50dp",
            "zIndex": 10
        }, controller.args[0], "flxTotalInstallments"), extendConfig({}, controller.args[1], "flxTotalInstallments"), extendConfig({}, controller.args[2], "flxTotalInstallments"));
        flxTotalInstallments.setDefaultUnit(kony.flex.DP);
        var lblTotalValue = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "45%",
            "id": "lblTotalValue",
            "isVisible": true,
            "skin": "ICSknLbl424242SSPR18px",
            "text": "240",
            "textStyle": {},
            "top": "77dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTotalValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTotalValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTotalValue"));
        var lblTotalText = new kony.ui.Label(extendConfig({
            "centerX": "50.00%",
            "id": "lblTotalText",
            "isVisible": true,
            "skin": "ICSknLbl727272SSPR17px",
            "text": "Total",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTotalText"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTotalText"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTotalText"));
        flxTotalInstallments.add(lblTotalValue, lblTotalText);
        flxGraphContainer.add(donutchart, flxTotalInstallments);
        var flxLegends = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxLegends",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLegends"), extendConfig({}, controller.args[1], "flxLegends"), extendConfig({}, controller.args[2], "flxLegends"));
        flxLegends.setDefaultUnit(kony.flex.DP);
        var flxLegendsRow1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxLegendsRow1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLegendsRow1"), extendConfig({}, controller.args[1], "flxLegendsRow1"), extendConfig({}, controller.args[2], "flxLegendsRow1"));
        flxLegendsRow1.setDefaultUnit(kony.flex.DP);
        var flxLegend1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxLegend1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "flxLegend1"), extendConfig({}, controller.args[1], "flxLegend1"), extendConfig({}, controller.args[2], "flxLegend1"));
        flxLegend1.setDefaultUnit(kony.flex.DP);
        var flxLegendLabel1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25dp",
            "id": "flxLegendLabel1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLegendLabel1"), extendConfig({}, controller.args[1], "flxLegendLabel1"), extendConfig({}, controller.args[2], "flxLegendLabel1"));
        flxLegendLabel1.setDefaultUnit(kony.flex.DP);
        var flxLegendColor1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "10dp",
            "id": "flxLegendColor1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20%",
            "isModalContainer": false,
            "skin": "ICSsknflxLegend1",
            "top": "0dp",
            "width": "10dp",
            "zIndex": 1
        }, controller.args[0], "flxLegendColor1"), extendConfig({}, controller.args[1], "flxLegendColor1"), extendConfig({}, controller.args[2], "flxLegendColor1"));
        flxLegendColor1.setDefaultUnit(kony.flex.DP);
        flxLegendColor1.add();
        var lblLegendText1 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblLegendText1",
            "isVisible": true,
            "left": "5%",
            "skin": "ICSknLbl727272SSP15Px",
            "text": "Paid :",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblLegendText1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLegendText1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLegendText1"));
        flxLegendLabel1.add(flxLegendColor1, lblLegendText1);
        var lblLegendValue1 = new kony.ui.Label(extendConfig({
            "id": "lblLegendValue1",
            "isVisible": true,
            "left": "32%",
            "text": "20",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblLegendValue1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLegendValue1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLegendValue1"));
        flxLegend1.add(flxLegendLabel1, lblLegendValue1);
        var flxLegend2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxLegend2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "flxLegend2"), extendConfig({}, controller.args[1], "flxLegend2"), extendConfig({}, controller.args[2], "flxLegend2"));
        flxLegend2.setDefaultUnit(kony.flex.DP);
        var flxLegendLabel2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "25dp",
            "id": "flxLegendLabel2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLegendLabel2"), extendConfig({}, controller.args[1], "flxLegendLabel2"), extendConfig({}, controller.args[2], "flxLegendLabel2"));
        flxLegendLabel2.setDefaultUnit(kony.flex.DP);
        var flxLegendColor2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "10dp",
            "id": "flxLegendColor2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20%",
            "isModalContainer": false,
            "skin": "ICSsknflxLegend1",
            "top": "0dp",
            "width": "10dp",
            "zIndex": 1
        }, controller.args[0], "flxLegendColor2"), extendConfig({}, controller.args[1], "flxLegendColor2"), extendConfig({}, controller.args[2], "flxLegendColor2"));
        flxLegendColor2.setDefaultUnit(kony.flex.DP);
        flxLegendColor2.add();
        var lblLegendText2 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblLegendText2",
            "isVisible": true,
            "left": "5%",
            "skin": "ICSknLbl727272SSP15Px",
            "text": "Overdue :",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblLegendText2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLegendText2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLegendText2"));
        flxLegendLabel2.add(flxLegendColor2, lblLegendText2);
        var lblLegendValue2 = new kony.ui.Label(extendConfig({
            "id": "lblLegendValue2",
            "isVisible": true,
            "left": "32%",
            "text": "03",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblLegendValue2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLegendValue2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLegendValue2"));
        flxLegend2.add(flxLegendLabel2, lblLegendValue2);
        var flxLegend3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxLegend3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "flxLegend3"), extendConfig({}, controller.args[1], "flxLegend3"), extendConfig({}, controller.args[2], "flxLegend3"));
        flxLegend3.setDefaultUnit(kony.flex.DP);
        var flxLegendLabel3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "25dp",
            "id": "flxLegendLabel3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLegendLabel3"), extendConfig({}, controller.args[1], "flxLegendLabel3"), extendConfig({}, controller.args[2], "flxLegendLabel3"));
        flxLegendLabel3.setDefaultUnit(kony.flex.DP);
        var flxLegendColor3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "10dp",
            "id": "flxLegendColor3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20%",
            "isModalContainer": false,
            "skin": "ICSsknflxLegend1",
            "width": "10dp",
            "zIndex": 1
        }, controller.args[0], "flxLegendColor3"), extendConfig({}, controller.args[1], "flxLegendColor3"), extendConfig({}, controller.args[2], "flxLegendColor3"));
        flxLegendColor3.setDefaultUnit(kony.flex.DP);
        flxLegendColor3.add();
        var lblLegendText3 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblLegendText3",
            "isVisible": true,
            "left": "5%",
            "skin": "ICSknLbl727272SSP15Px",
            "text": "Future :",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblLegendText3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLegendText3"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLegendText3"));
        flxLegendLabel3.add(flxLegendColor3, lblLegendText3);
        var lblLegendValue3 = new kony.ui.Label(extendConfig({
            "id": "lblLegendValue3",
            "isVisible": true,
            "left": "32%",
            "text": "200",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblLegendValue3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLegendValue3"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLegendValue3"));
        flxLegend3.add(flxLegendLabel3, lblLegendValue3);
        flxLegendsRow1.add(flxLegend1, flxLegend2, flxLegend3);
        var flxSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator"), extendConfig({}, controller.args[1], "flxSeparator"), extendConfig({}, controller.args[2], "flxSeparator"));
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var flxLegendsRow2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxLegendsRow2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLegendsRow2"), extendConfig({}, controller.args[1], "flxLegendsRow2"), extendConfig({}, controller.args[2], "flxLegendsRow2"));
        flxLegendsRow2.setDefaultUnit(kony.flex.DP);
        var flxLegend4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxLegend4",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "flxLegend4"), extendConfig({}, controller.args[1], "flxLegend4"), extendConfig({}, controller.args[2], "flxLegend4"));
        flxLegend4.setDefaultUnit(kony.flex.DP);
        var flxLegendLabel4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25dp",
            "id": "flxLegendLabel4",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLegendLabel4"), extendConfig({}, controller.args[1], "flxLegendLabel4"), extendConfig({}, controller.args[2], "flxLegendLabel4"));
        flxLegendLabel4.setDefaultUnit(kony.flex.DP);
        var flxLegendColor4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "10dp",
            "id": "flxLegendColor4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20%",
            "isModalContainer": false,
            "skin": "ICSsknflxLegend1",
            "top": "0dp",
            "width": "10dp",
            "zIndex": 1
        }, controller.args[0], "flxLegendColor4"), extendConfig({}, controller.args[1], "flxLegendColor4"), extendConfig({}, controller.args[2], "flxLegendColor4"));
        flxLegendColor4.setDefaultUnit(kony.flex.DP);
        flxLegendColor4.add();
        var lblLegendText4 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblLegendText4",
            "isVisible": true,
            "left": "5%",
            "skin": "ICSknLbl727272SSP15Px",
            "text": "Paid :",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblLegendText4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLegendText4"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLegendText4"));
        flxLegendLabel4.add(flxLegendColor4, lblLegendText4);
        var lblLegendValue4 = new kony.ui.Label(extendConfig({
            "id": "lblLegendValue4",
            "isVisible": true,
            "left": "32%",
            "text": "20",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblLegendValue4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLegendValue4"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLegendValue4"));
        flxLegend4.add(flxLegendLabel4, lblLegendValue4);
        var flxLegend5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxLegend5",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "flxLegend5"), extendConfig({}, controller.args[1], "flxLegend5"), extendConfig({}, controller.args[2], "flxLegend5"));
        flxLegend5.setDefaultUnit(kony.flex.DP);
        var flxLegendLabel5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "25dp",
            "id": "flxLegendLabel5",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLegendLabel5"), extendConfig({}, controller.args[1], "flxLegendLabel5"), extendConfig({}, controller.args[2], "flxLegendLabel5"));
        flxLegendLabel5.setDefaultUnit(kony.flex.DP);
        var flxLegendColor5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "10dp",
            "id": "flxLegendColor5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20%",
            "isModalContainer": false,
            "skin": "ICSsknflxLegend1",
            "top": "0dp",
            "width": "10dp",
            "zIndex": 1
        }, controller.args[0], "flxLegendColor5"), extendConfig({}, controller.args[1], "flxLegendColor5"), extendConfig({}, controller.args[2], "flxLegendColor5"));
        flxLegendColor5.setDefaultUnit(kony.flex.DP);
        flxLegendColor5.add();
        var lblLegendText5 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblLegendText5",
            "isVisible": true,
            "left": "5%",
            "skin": "ICSknLbl727272SSP15Px",
            "text": "Overdue :",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblLegendText5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLegendText5"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLegendText5"));
        flxLegendLabel5.add(flxLegendColor5, lblLegendText5);
        var lblLegendValue5 = new kony.ui.Label(extendConfig({
            "id": "lblLegendValue5",
            "isVisible": true,
            "left": "32%",
            "text": "03",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblLegendValue5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLegendValue5"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLegendValue5"));
        flxLegend5.add(flxLegendLabel5, lblLegendValue5);
        var flxLegend6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxLegend6",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "flxLegend6"), extendConfig({}, controller.args[1], "flxLegend6"), extendConfig({}, controller.args[2], "flxLegend6"));
        flxLegend6.setDefaultUnit(kony.flex.DP);
        var flxLegendLabel6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "25dp",
            "id": "flxLegendLabel6",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLegendLabel6"), extendConfig({}, controller.args[1], "flxLegendLabel6"), extendConfig({}, controller.args[2], "flxLegendLabel6"));
        flxLegendLabel6.setDefaultUnit(kony.flex.DP);
        var flxLegendColor6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "10dp",
            "id": "flxLegendColor6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20%",
            "isModalContainer": false,
            "skin": "ICSsknflxLegend1",
            "width": "10dp",
            "zIndex": 1
        }, controller.args[0], "flxLegendColor6"), extendConfig({}, controller.args[1], "flxLegendColor6"), extendConfig({}, controller.args[2], "flxLegendColor6"));
        flxLegendColor6.setDefaultUnit(kony.flex.DP);
        flxLegendColor6.add();
        var lblLegendText6 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblLegendText6",
            "isVisible": true,
            "left": "5%",
            "skin": "ICSknLbl727272SSP15Px",
            "text": "Future :",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblLegendText6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLegendText6"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLegendText6"));
        flxLegendLabel6.add(flxLegendColor6, lblLegendText6);
        var lblLegendValue6 = new kony.ui.Label(extendConfig({
            "id": "lblLegendValue6",
            "isVisible": true,
            "left": "33%",
            "text": "200",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblLegendValue6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLegendValue6"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLegendValue6"));
        flxLegend6.add(flxLegendLabel6, lblLegendValue6);
        flxLegendsRow2.add(flxLegend4, flxLegend5, flxLegend6);
        flxLegends.add(flxLegendsRow1, flxSeparator, flxLegendsRow2);
        donutChartNative.add(flxGraphContainer, flxLegends);
        return donutChartNative;
    }
})