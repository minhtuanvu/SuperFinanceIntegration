define(function() {
    return function(controller) {
        var ContractView = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "ContractView",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_a125487d0cbc441f8982d6a52f429585(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "ContractView"), extendConfig({}, controller.args[1], "ContractView"), extendConfig({}, controller.args[2], "ContractView"));
        ContractView.setDefaultUnit(kony.flex.DP);
        var flxMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainContainer"), extendConfig({}, controller.args[1], "flxMainContainer"), extendConfig({}, controller.args[2], "flxMainContainer"));
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var flxSampleContainer = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "horizontalScrollIndicator": true,
            "id": "flxSampleContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSampleContainer"), extendConfig({}, controller.args[1], "flxSampleContainer"), extendConfig({}, controller.args[2], "flxSampleContainer"));
        flxSampleContainer.setDefaultUnit(kony.flex.DP);
        var flxParentWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxParentWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxParentWrapper"), extendConfig({}, controller.args[1], "flxParentWrapper"), extendConfig({}, controller.args[2], "flxParentWrapper"));
        flxParentWrapper.setDefaultUnit(kony.flex.DP);
        var flxParent = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxParent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxParent"), extendConfig({}, controller.args[1], "flxParent"), extendConfig({}, controller.args[2], "flxParent"));
        flxParent.setDefaultUnit(kony.flex.DP);
        var flxParentSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
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
        }, controller.args[0], "flxParentSeparator"), extendConfig({}, controller.args[1], "flxParentSeparator"), extendConfig({}, controller.args[2], "flxParentSeparator"));
        flxParentSeparator.setDefaultUnit(kony.flex.DP);
        flxParentSeparator.add();
        var flxParentImageContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxParentImageContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "54dp",
            "zIndex": 1
        }, controller.args[0], "flxParentImageContainer"), extendConfig({}, controller.args[1], "flxParentImageContainer"), extendConfig({}, controller.args[2], "flxParentImageContainer"));
        flxParentImageContainer.setDefaultUnit(kony.flex.DP);
        var imgTickParent = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "16dp",
            "id": "imgTickParent",
            "isVisible": true,
            "left": "20dp",
            "skin": "slImage",
            "src": "tickmarkbox.png",
            "width": "16dp",
            "zIndex": 1
        }, controller.args[0], "imgTickParent"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgTickParent"), extendConfig({}, controller.args[2], "imgTickParent"));
        flxParentImageContainer.add(imgTickParent);
        var flxParentDataContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxParentDataContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "54dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "flxParentDataContainer"), extendConfig({}, controller.args[1], "flxParentDataContainer"), extendConfig({}, controller.args[2], "flxParentDataContainer"));
        flxParentDataContainer.setDefaultUnit(kony.flex.DP);
        var lblParentTitle = new kony.ui.Label(extendConfig({
            "id": "lblParentTitle",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "Temenos Corp",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "9dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblParentTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblParentTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblParentTitle"));
        var lblParentCaption = new kony.ui.Label(extendConfig({
            "id": "lblParentCaption",
            "isVisible": true,
            "left": "-1dp",
            "skin": "sknlbl949494SSPR13px",
            "text": "1 of 4 Selected",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "29dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblParentCaption"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblParentCaption"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblParentCaption"));
        var flxParentChevronContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "100%",
            "id": "flxParentChevronContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "flxParentChevronContainer"), extendConfig({}, controller.args[1], "flxParentChevronContainer"), extendConfig({}, controller.args[2], "flxParentChevronContainer"));
        flxParentChevronContainer.setDefaultUnit(kony.flex.DP);
        var imgChevronParent = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "7dp",
            "id": "imgChevronParent",
            "isVisible": true,
            "left": "8dp",
            "skin": "slImage",
            "src": "chevron.png",
            "top": "9dp",
            "width": "14dp",
            "zIndex": 1
        }, controller.args[0], "imgChevronParent"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgChevronParent"), extendConfig({}, controller.args[2], "imgChevronParent"));
        flxParentChevronContainer.add(imgChevronParent);
        flxParentDataContainer.add(lblParentTitle, lblParentCaption, flxParentChevronContainer);
        flxParent.add(flxParentSeparator, flxParentImageContainer, flxParentDataContainer);
        flxParentWrapper.add(flxParent);
        var flxChildWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "62dp",
            "id": "flxChildWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxChildWrapper"), extendConfig({}, controller.args[1], "flxChildWrapper"), extendConfig({}, controller.args[2], "flxChildWrapper"));
        flxChildWrapper.setDefaultUnit(kony.flex.DP);
        var flxChild = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxChild",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "18dp",
            "isModalContainer": false,
            "right": "16dp",
            "skin": "slFbox",
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "flxChild"), extendConfig({}, controller.args[1], "flxChild"), extendConfig({}, controller.args[2], "flxChild"));
        flxChild.setDefaultUnit(kony.flex.DP);
        var flxChildSeperator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxChildSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxChildSeperator"), extendConfig({}, controller.args[1], "flxChildSeperator"), extendConfig({}, controller.args[2], "flxChildSeperator"));
        flxChildSeperator.setDefaultUnit(kony.flex.DP);
        flxChildSeperator.add();
        var flxChildImageContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxChildImageContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "54dp",
            "zIndex": 1
        }, controller.args[0], "flxChildImageContainer"), extendConfig({}, controller.args[1], "flxChildImageContainer"), extendConfig({}, controller.args[2], "flxChildImageContainer"));
        flxChildImageContainer.setDefaultUnit(kony.flex.DP);
        var imgTickChild = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "16dp",
            "id": "imgTickChild",
            "isVisible": true,
            "left": "20dp",
            "skin": "slImage",
            "src": "tickmarkbox.png",
            "width": "16dp",
            "zIndex": 1
        }, controller.args[0], "imgTickChild"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgTickChild"), extendConfig({}, controller.args[2], "imgTickChild"));
        flxChildImageContainer.add(imgTickChild);
        var flxChildDataContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxChildDataContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "54dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "zIndex": 1
        }, controller.args[0], "flxChildDataContainer"), extendConfig({}, controller.args[1], "flxChildDataContainer"), extendConfig({}, controller.args[2], "flxChildDataContainer"));
        flxChildDataContainer.setDefaultUnit(kony.flex.DP);
        var lblChildTitle = new kony.ui.Label(extendConfig({
            "id": "lblChildTitle",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "Temenos India",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "9dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblChildTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblChildTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblChildTitle"));
        var flxChildCaptionContainer = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flxChildCaptionContainer"), extendConfig({}, controller.args[1], "flxChildCaptionContainer"), extendConfig({}, controller.args[2], "flxChildCaptionContainer"));
        flxChildCaptionContainer.setDefaultUnit(kony.flex.DP);
        var lblChildCaptionText = new kony.ui.Label(extendConfig({
            "id": "lblChildCaptionText",
            "isVisible": true,
            "left": "-1dp",
            "skin": "sknlbl949494SSPR13px",
            "text": "Customer ID: ",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblChildCaptionText"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblChildCaptionText"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblChildCaptionText"));
        var lblChildCaption = new kony.ui.Label(extendConfig({
            "id": "lblChildCaption",
            "isVisible": true,
            "left": "-1dp",
            "skin": "sknlbl949494SSPR13px",
            "text": "56709845678",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblChildCaption"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblChildCaption"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblChildCaption"));
        flxChildCaptionContainer.add(lblChildCaptionText, lblChildCaption);
        flxChildDataContainer.add(lblChildTitle, flxChildCaptionContainer);
        flxChild.add(flxChildSeperator, flxChildImageContainer, flxChildDataContainer);
        flxChildWrapper.add(flxChild);
        var flxChildContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxChildContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxChildContainer"), extendConfig({}, controller.args[1], "flxChildContainer"), extendConfig({}, controller.args[2], "flxChildContainer"));
        flxChildContainer.setDefaultUnit(kony.flex.DP);
        flxChildContainer.add();
        var flxChildContainerSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxChildContainerSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxChildContainerSeparator"), extendConfig({}, controller.args[1], "flxChildContainerSeparator"), extendConfig({}, controller.args[2], "flxChildContainerSeparator"));
        flxChildContainerSeparator.setDefaultUnit(kony.flex.DP);
        flxChildContainerSeparator.add();
        flxSampleContainer.add(flxParentWrapper, flxChildWrapper, flxChildContainer, flxChildContainerSeparator);
        var flxContentContainer = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "100%",
            "id": "flxContentContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxContentContainer"), extendConfig({}, controller.args[1], "flxContentContainer"), extendConfig({}, controller.args[2], "flxContentContainer"));
        flxContentContainer.setDefaultUnit(kony.flex.DP);
        flxContentContainer.add();
        flxMainContainer.add(flxSampleContainer, flxContentContainer);
        ContractView.add(flxMainContainer);
        return ContractView;
    }
})