define("flxUserDetails", function() {
    return function(controller) {
        var flxUserDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxUserDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxUserDetails.setDefaultUnit(kony.flex.DP);
        var flxUserEntity = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxUserEntity",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxUserEntity.setDefaultUnit(kony.flex.DP);
        var flxUserAttribute = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxUserAttribute",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxUserAttribute.setDefaultUnit(kony.flex.DP);
        var lblAttribute = new kony.ui.Label({
            "id": "lblAttribute",
            "isVisible": true,
            "left": "0",
            "skin": "sknLbl727272SSPReg22px",
            "text": "Full Name :",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxUserAttribute.add(lblAttribute);
        var flxUserAttributeVal = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "5dp",
            "clipBounds": true,
            "id": "flxUserAttributeVal",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "2dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxUserAttributeVal.setDefaultUnit(kony.flex.DP);
        var lblAttributeVal = new kony.ui.Label({
            "id": "lblAttributeVal",
            "isVisible": true,
            "skin": "sknLbl424242SSP26px",
            "text": "John David",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "60%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblStaus = new kony.ui.Label({
            "id": "lblStaus",
            "isVisible": true,
            "skin": "sknLbl424242SSP26px",
            "text": "Suspended",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxUserAttributeVal.add(lblAttributeVal, lblStaus);
        flxUserEntity.add(flxUserAttribute, flxUserAttributeVal);
        var flxSep = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1dp",
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
        flxUserDetails.add(flxUserEntity, flxSep);
        return flxUserDetails;
    }
})