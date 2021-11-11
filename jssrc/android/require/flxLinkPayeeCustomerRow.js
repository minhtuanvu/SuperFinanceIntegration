define("flxLinkPayeeCustomerRow", function() {
    return function(controller) {
        var flxLinkPayeeCustomerRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxLinkPayeeCustomerRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxLinkPayeeCustomerRow.setDefaultUnit(kony.flex.DP);
        var flxIcon = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxIcon",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "55dp",
            "zIndex": 1
        }, {}, {});
        flxIcon.setDefaultUnit(kony.flex.DP);
        var imgIcons = new kony.ui.Image2({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgIcons",
            "isVisible": true,
            "left": "20dp",
            "skin": "slImage",
            "src": "businessaccount.png",
            "width": "15dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxIcon.add(imgIcons);
        var flxCustomerContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCustomerContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "55dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "f9f9",
            "top": "0dp",
            "width": "70%",
            "zIndex": 1
        }, {}, {});
        flxCustomerContainer.setDefaultUnit(kony.flex.DP);
        var flxCustomerContainerData = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCustomerContainerData",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxCustomerContainerData.setDefaultUnit(kony.flex.DP);
        var imgIcon = new kony.ui.Image2({
            "height": "16dp",
            "id": "imgIcon",
            "isVisible": false,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "16dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblCustomerName = new kony.ui.Label({
            "id": "lblCustomerName",
            "isVisible": true,
            "left": "2dp",
            "skin": "ICSknLbl42424234px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "9dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxCustomerContainerData.add(imgIcon, lblCustomerName);
        var flxChildCaptionContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxChildCaptionContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxChildCaptionContainer.setDefaultUnit(kony.flex.DP);
        var lblCustomerNumberText = new kony.ui.Label({
            "bottom": "12dp",
            "id": "lblCustomerNumberText",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl949494SSP30PX",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblCustomerNumber = new kony.ui.Label({
            "bottom": "12dp",
            "id": "lblCustomerNumber",
            "isVisible": true,
            "left": "1dp",
            "skin": "ICSknLbl949494SSP30PX",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxChildCaptionContainer.add(lblCustomerNumberText, lblCustomerNumber);
        flxCustomerContainer.add(flxCustomerContainerData, flxChildCaptionContainer);
        var flxCustomerCheckBox = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCustomerCheckBox",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "f9f9",
            "top": "5dp",
            "width": "55dp",
            "zIndex": 1
        }, {}, {});
        flxCustomerCheckBox.setDefaultUnit(kony.flex.DP);
        var imgCustomerCheckBox = new kony.ui.Image2({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgCustomerCheckBox",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "inactive_checkbox.png",
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxCustomerCheckBox.add(imgCustomerCheckBox);
        var flxChildSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxChildSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxChildSeparator.setDefaultUnit(kony.flex.DP);
        flxChildSeparator.add();
        flxLinkPayeeCustomerRow.add(flxIcon, flxCustomerContainer, flxCustomerCheckBox, flxChildSeparator);
        return flxLinkPayeeCustomerRow;
    }
})