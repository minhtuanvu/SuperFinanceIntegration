define("flxAchFilelist", function() {
    return function(controller) {
        var flxAchFilelist = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAchFilelist",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxWhite",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAchFilelist.setDefaultUnit(kony.flex.DP);
        var flxmain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxmain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxmain.setDefaultUnit(kony.flex.DP);
        var flxcon = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxcon",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "65%",
            "zIndex": 1
        }, {}, {});
        flxcon.setDefaultUnit(kony.flex.DP);
        var lblFilename = new kony.ui.Label({
            "id": "lblFilename",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSP26px",
            "text": "File Name",
            "textStyle": {},
            "top": "0dp",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblAdmin = new kony.ui.Label({
            "bottom": "10dp",
            "id": "lblAdmin",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl727272SSP93pr",
            "text": "Admin",
            "textStyle": {},
            "top": "9dp",
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxcon.add(lblFilename, lblAdmin);
        var flxstatus = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxstatus",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "65%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "35%",
            "zIndex": 1
        }, {}, {});
        flxstatus.setDefaultUnit(kony.flex.DP);
        var lblStatus = new kony.ui.Label({
            "id": "lblStatus",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSP26px",
            "text": "Sent",
            "textStyle": {},
            "top": "15dp",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxstatus.add(lblStatus);
        var flxsep = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxsep",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxsep.setDefaultUnit(kony.flex.DP);
        flxsep.add();
        flxmain.add(flxcon, flxstatus, flxsep);
        flxAchFilelist.add(flxmain);
        return flxAchFilelist;
    }
})