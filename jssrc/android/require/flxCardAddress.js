define("flxCardAddress", function() {
    return function(controller) {
        var flxCardAddress = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCardAddress",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCardAddress.setDefaultUnit(kony.flex.DP);
        var flxAddress = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAddress",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxAddress.setDefaultUnit(kony.flex.DP);
        var flxRadioAddress = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxRadioAddress",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "10dp",
            "skin": "slFbox",
            "top": "13dp",
            "width": "30dp",
            "zIndex": 1
        }, {}, {});
        flxRadioAddress.setDefaultUnit(kony.flex.DP);
        var imgRadioAddress = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "15dp",
            "id": "imgRadioAddress",
            "isVisible": true,
            "skin": "slImage",
            "src": "radiobtn.png",
            "width": "15dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRadioAddress.add(imgRadioAddress);
        var lblAddress = new kony.ui.Label({
            "bottom": "10dp",
            "id": "lblAddress",
            "isVisible": true,
            "left": "20dp",
            "right": "80dp",
            "skin": "sknLbl424242SSP26px",
            "text": "201, Cowper street, Santa Clara County California, US, 94301",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxAddress.add(flxRadioAddress, lblAddress);
        var flxSeperatorWrapper = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 1,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperatorWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeperatorWrapper.setDefaultUnit(kony.flex.DP);
        var flxSeperator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "right": "10dp",
            "skin": "sknFlxe3e3e3",
            "top": "0dp",
            "zIndex": 1
        }, {}, {});
        flxSeperator.setDefaultUnit(kony.flex.DP);
        flxSeperator.add();
        flxSeperatorWrapper.add(flxSeperator);
        flxCardAddress.add(flxAddress, flxSeperatorWrapper);
        return flxCardAddress;
    }
})