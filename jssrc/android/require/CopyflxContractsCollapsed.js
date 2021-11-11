define("CopyflxContractsCollapsed", function() {
    return function(controller) {
        var CopyflxContractsCollapsed = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "CopyflxContractsCollapsed",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        CopyflxContractsCollapsed.setDefaultUnit(kony.flex.DP);
        var flxContract = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxContract",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxContract.setDefaultUnit(kony.flex.DP);
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
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, {}, {});
        flxRowCheckBox.setDefaultUnit(kony.flex.DP);
        var imgCheckBox = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "16dp",
            "id": "imgCheckBox",
            "imageWhileDownloading": "checkbox_normal_1.png",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "checkbox_normal_1.png",
            "top": "0dp",
            "width": "16dp",
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
            "left": "10%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, {}, {});
        flxContractHeader.setDefaultUnit(kony.flex.DP);
        var lblContract = new kony.ui.Label({
            "id": "lblContract",
            "isVisible": true,
            "left": "0dp",
            "text": "Temenos Corp",
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
        var lblCIF = new kony.ui.Label({
            "id": "lblCIF",
            "isVisible": true,
            "left": "0dp",
            "text": "1 of 4 Selected",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxContractHeader.add(lblContract, lblCIF);
        var flxDropdown = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDropdown",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "90%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, {}, {});
        flxDropdown.setDefaultUnit(kony.flex.DP);
        var imgDropdown = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "16dp",
            "id": "imgDropdown",
            "isVisible": true,
            "skin": "slImage",
            "src": "chevron_down_1.png",
            "width": "16dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDropdown.add(imgDropdown);
        var flxParentSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxParentSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxParentSeparator.setDefaultUnit(kony.flex.DP);
        flxParentSeparator.add();
        flxContract.add(flxRowCheckBox, flxContractHeader, flxDropdown, flxParentSeparator);
        var flxCustomer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCustomer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxCustomer.setDefaultUnit(kony.flex.DP);
        var flxCustomerDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "65dp",
            "id": "flxCustomerDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxCustomerDetails.setDefaultUnit(kony.flex.DP);
        var flxCustomerCheckbox = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCustomerCheckbox",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {}, {});
        flxCustomerCheckbox.setDefaultUnit(kony.flex.DP);
        var imgCustomerCheckbox = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "16dp",
            "id": "imgCustomerCheckbox",
            "imageWhileDownloading": "checkbox_normal_1.png",
            "isVisible": true,
            "skin": "slImage",
            "src": "checkbox_normal_1.png",
            "width": "16dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxCustomerCheckbox.add(imgCustomerCheckbox);
        var flxCustomerContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCustomerContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "15%",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, {}, {});
        flxCustomerContainer.setDefaultUnit(kony.flex.DP);
        var flxCustomerContainerData = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCustomerContainerData",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCustomerContainerData.setDefaultUnit(kony.flex.DP);
        var imgIcon = new kony.ui.Image2({
            "height": "16dp",
            "id": "imgIcon",
            "imageWhileDownloading": "businessaccount_1.png",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "businessaccount_1.png",
            "top": "9dp",
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
            "text": "Temenos India",
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
            "top": "29dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxChildCaptionContainer.setDefaultUnit(kony.flex.DP);
        var lblCustomerNumberText = new kony.ui.Label({
            "id": "lblCustomerNumberText",
            "isVisible": true,
            "left": "-1dp",
            "text": "Customer ID: ",
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
        var lblCustomerNumber = new kony.ui.Label({
            "id": "lblCustomerNumber",
            "isVisible": true,
            "left": "-1dp",
            "text": "56709845678",
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
        flxChildCaptionContainer.add(lblCustomerNumberText, lblCustomerNumber);
        flxCustomerContainer.add(flxCustomerContainerData, flxChildCaptionContainer);
        var flxChildSeperator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxChildSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxChildSeperator.setDefaultUnit(kony.flex.DP);
        flxChildSeperator.add();
        flxCustomerDetails.add(flxCustomerCheckbox, flxCustomerContainer, flxChildSeperator);
        flxCustomer.add(flxCustomerDetails);
        CopyflxContractsCollapsed.add(flxContract, flxCustomer);
        return CopyflxContractsCollapsed;
    }
})