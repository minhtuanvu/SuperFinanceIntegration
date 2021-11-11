define("flxLinkPayeeContractRow", function() {
    return function(controller) {
        var flxLinkPayeeContractRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxLinkPayeeContractRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxLinkPayeeContractRow.setDefaultUnit(kony.flex.DP);
        var flxRowCheckBox = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxRowCheckBox",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "55dp",
            "zIndex": 1
        }, {}, {});
        flxRowCheckBox.setDefaultUnit(kony.flex.DP);
        var imgCheckBox = new kony.ui.Image2({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgCheckBox",
            "isVisible": true,
            "left": "20dp",
            "skin": "slImage",
            "src": "checkbox_normal.png",
            "width": "15dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRowCheckBox.add(imgCheckBox);
        var flxContractHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxContractHeader",
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
        flxContractHeader.setDefaultUnit(kony.flex.DP);
        var lblContract = new kony.ui.Label({
            "id": "lblContract",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl42424234px",
            "text": "Label",
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblCIF = new kony.ui.Label({
            "id": "lblCIF",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl72727230px",
            "text": "Label",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxContractHeader.add(lblContract, lblCIF);
        var flxDropdown = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDropdown",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "f9f9",
            "top": "5dp",
            "width": "55dp",
            "zIndex": 1
        }, {}, {});
        flxDropdown.setDefaultUnit(kony.flex.DP);
        var imgDropdown = new kony.ui.Image2({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgDropdown",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "chevron.png",
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDropdown.add(imgDropdown);
        var flxParentSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxParentSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxParentSeparator.setDefaultUnit(kony.flex.DP);
        flxParentSeparator.add();
        flxLinkPayeeContractRow.add(flxRowCheckBox, flxContractHeader, flxDropdown, flxParentSeparator);
        return flxLinkPayeeContractRow;
    }
})