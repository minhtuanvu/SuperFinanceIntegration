define("flxUsrmgmtMain2", function() {
    return function(controller) {
        var flxUsrmgmtMain2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxUsrmgmtMain2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxUsrmgmtMain2.setDefaultUnit(kony.flex.DP);
        var flxContent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxContent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxContent.setDefaultUnit(kony.flex.DP);
        var flxInner1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxInner1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxInner1.setDefaultUnit(kony.flex.DP);
        var lblUserName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblUserName",
            "isVisible": true,
            "left": "4%",
            "skin": "sknLbl424242SSP28px",
            "text": "Temenos Org",
            "textStyle": {},
            "width": "96%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxInner1.add(lblUserName);
        var flxSep = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSep",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSep.setDefaultUnit(kony.flex.DP);
        flxSep.add();
        flxContent.add(flxInner1, flxSep);
        flxUsrmgmtMain2.add(flxContent);
        return flxUsrmgmtMain2;
    }
})