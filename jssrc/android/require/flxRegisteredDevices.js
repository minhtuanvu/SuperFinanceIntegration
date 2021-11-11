define("flxRegisteredDevices", function() {
    return function(controller) {
        var flxRegisteredDevices = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxRegisteredDevices",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxRegisteredDevices.setDefaultUnit(kony.flex.DP);
        var flxDeviceInfo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "20dp",
            "clipBounds": true,
            "height": "60dp",
            "id": "flxDeviceInfo",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxDeviceInfo.setDefaultUnit(kony.flex.DP);
        var flxDeviceInfoLeft = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDeviceInfoLeft",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "55dp",
            "zIndex": 1
        }, {}, {});
        flxDeviceInfoLeft.setDefaultUnit(kony.flex.DP);
        var imgDevice = new kony.ui.Image2({
            "height": "30dp",
            "id": "imgDevice",
            "isVisible": true,
            "left": "14dp",
            "skin": "slImage",
            "src": "device_3.png",
            "top": "16dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDeviceInfoLeft.add(imgDevice);
        var flxDeviceInfoMid = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDeviceInfoMid",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, {}, {});
        flxDeviceInfoMid.setDefaultUnit(kony.flex.DP);
        var flxDeviceInfoMidInner = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDeviceInfoMidInner",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "12dp",
            "width": "100%"
        }, {}, {});
        flxDeviceInfoMidInner.setDefaultUnit(kony.flex.DP);
        var lblDeviceName = new kony.ui.Label({
            "id": "lblDeviceName",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblSSPSemiBold18px424242",
            "text": "Bryan’s iPhone",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxDeviceRegistrationDate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDeviceRegistrationDate",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "8dp",
            "width": "100%"
        }, {}, {});
        flxDeviceRegistrationDate.setDefaultUnit(kony.flex.DP);
        var lblRegisteredOn = new kony.ui.Label({
            "id": "lblRegisteredOn",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl72727215pxSSPR",
            "text": "Registered on:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblDeviceRegisteredDate = new kony.ui.Label({
            "id": "lblDeviceRegisteredDate",
            "isVisible": true,
            "left": "5dp",
            "skin": "ICSknLbl72727215pxSSPR",
            "text": "02/18/2021",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDeviceRegistrationDate.add(lblRegisteredOn, lblDeviceRegisteredDate);
        flxDeviceInfoMidInner.add(lblDeviceName, flxDeviceRegistrationDate);
        flxDeviceInfoMid.add(flxDeviceInfoMidInner);
        var flxDeviceInfoRight = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDeviceInfoRight",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "7%",
            "zIndex": 1
        }, {}, {});
        flxDeviceInfoRight.setDefaultUnit(kony.flex.DP);
        var imgOptions = new kony.ui.Image2({
            "centerY": "50%",
            "height": "26dp",
            "id": "imgOptions",
            "isVisible": true,
            "left": "-20dp",
            "skin": "slImage",
            "src": "more_detail.png",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDeviceInfoRight.add(imgOptions);
        flxDeviceInfo.add(flxDeviceInfoLeft, flxDeviceInfoMid, flxDeviceInfoRight);
        var flxDeviceStatus = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "44dp",
            "id": "flxDeviceStatus",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxDeviceStatus.setDefaultUnit(kony.flex.DP);
        var flxDeviceStatusInner = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "24dp",
            "id": "flxDeviceStatusInner",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "56dp",
            "isModalContainer": false,
            "right": "56dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {}, {});
        flxDeviceStatusInner.setDefaultUnit(kony.flex.DP);
        var imgDeviceStatus = new kony.ui.Image2({
            "centerY": "50%",
            "height": "24dp",
            "id": "imgDeviceStatus",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "confirmation_tick.png",
            "top": "0dp",
            "width": "24dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDeviceStatus = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblDeviceStatus",
            "isVisible": true,
            "left": "10dp",
            "skin": "ICSknLbl42424215pxSSPR",
            "text": "Current Device",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDeviceStatusInner.add(imgDeviceStatus, lblDeviceStatus);
        flxDeviceStatus.add(flxDeviceStatusInner);
        flxRegisteredDevices.add(flxDeviceInfo, flxDeviceStatus);
        return flxRegisteredDevices;
    }
})