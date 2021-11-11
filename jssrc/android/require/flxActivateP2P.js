define("flxActivateP2P", function() {
    return function(controller) {
        var flxActivateP2P = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "125dp",
            "id": "flxActivateP2P",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxf6f6f6BckGrnd",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxActivateP2P.setDefaultUnit(kony.flex.DP);
        var flxActivateP2Pmsg = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40%",
            "id": "flxActivateP2Pmsg",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "25px",
            "width": "100%"
        }, {}, {});
        flxActivateP2Pmsg.setDefaultUnit(kony.flex.DP);
        var lblActivateP2P1 = new kony.ui.Label({
            "centerX": "50%",
            "height": "50%",
            "id": "lblActivateP2P1",
            "isVisible": true,
            "left": "0",
            "skin": "sknlbl4176a4SSPSB12px",
            "text": "You need to activate Person-to-Person to",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblActivateP2P2 = new kony.ui.Label({
            "centerX": "50%",
            "height": "50%",
            "id": "lblActivateP2P2",
            "isVisible": true,
            "left": "0",
            "skin": "sknlbl4176a4SSPSB12px",
            "text": "transfer to recipients",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxActivateP2Pmsg.add(lblActivateP2P1, lblActivateP2P2);
        var btnActivateP2P = new kony.ui.Button({
            "centerX": "50%",
            "focusSkin": "sknbtn003E75txt",
            "height": "25dp",
            "id": "btnActivateP2P",
            "isVisible": true,
            "left": "0",
            "skin": "sknbtn003E75txt",
            "text": "Activate Person-to-Person",
            "top": "0",
            "width": "90%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxActivateP2P.add(flxActivateP2Pmsg, btnActivateP2P);
        return flxActivateP2P;
    }
})