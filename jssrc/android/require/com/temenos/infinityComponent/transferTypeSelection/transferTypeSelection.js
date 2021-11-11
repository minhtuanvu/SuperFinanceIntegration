define(function() {
    return function(controller) {
        var transferTypeSelection = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "isMaster": true,
            "id": "transferTypeSelection",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_b5d61132d80242e0811a92557cd00595(eventobject);
            },
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "transferTypeSelection"), extendConfig({}, controller.args[1], "transferTypeSelection"), extendConfig({}, controller.args[2], "transferTypeSelection"));
        transferTypeSelection.setDefaultUnit(kony.flex.DP);
        var flxTransferTypes = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxTransferTypes",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTransferTypes"), extendConfig({}, controller.args[1], "flxTransferTypes"), extendConfig({}, controller.args[2], "flxTransferTypes"));
        flxTransferTypes.setDefaultUnit(kony.flex.DP);
        var flxTransactionType = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": false,
            "height": "142dp",
            "id": "flxTransactionType",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "3%",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E3Bdr8Px",
            "top": "0dp",
            "width": "94%",
            "zIndex": 1
        }, controller.args[0], "flxTransactionType"), extendConfig({}, controller.args[1], "flxTransactionType"), extendConfig({}, controller.args[2], "flxTransactionType"));
        flxTransactionType.setDefaultUnit(kony.flex.DP);
        var imgTransactionIcon = new kony.ui.Image2(extendConfig({
            "height": "150dp",
            "id": "imgTransactionIcon",
            "isVisible": false,
            "left": "176dp",
            "src": "imagedrag.png",
            "top": "13dp",
            "width": "150dp",
            "zIndex": 1
        }, controller.args[0], "imgTransactionIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgTransactionIcon"), extendConfig({}, controller.args[2], "imgTransactionIcon"));
        var lblTransactionType = new kony.ui.Label(extendConfig({
            "height": "23dp",
            "id": "lblTransactionType",
            "isVisible": true,
            "left": "5%",
            "skin": "ICSknLbl42424241PX",
            "text": "Within Same Bank",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTransactionType"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTransactionType"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTransactionType"));
        var rtLearnMore = new kony.ui.RichText(extendConfig({
            "height": "41dp",
            "id": "rtLearnMore",
            "isVisible": true,
            "left": "5%",
            "linkSkin": "ICSknLink4176A439PX",
            "right": "5%",
            "skin": "ICSknRText72727239PX",
            "text": "Transfer between your own accounts or other accounts..<a href=\"#\">Learn More</a>",
            "top": "3dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "rtLearnMore"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "rtLearnMore"), extendConfig({}, controller.args[2], "rtLearnMore"));
        var flxDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDescription",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "3dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDescription"), extendConfig({}, controller.args[1], "flxDescription"), extendConfig({}, controller.args[2], "flxDescription"));
        flxDescription.setDefaultUnit(kony.flex.DP);
        var transactionDescription = new kony.ui.Label(extendConfig({
            "id": "transactionDescription",
            "isVisible": false,
            "left": "21dp",
            "right": "75dp",
            "text": "Transfer between your own accounts or other accounts in the same bank…",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "transactionDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "transactionDescription"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "transactionDescription"));
        var btnMoreLink = new kony.ui.Button(extendConfig({
            "id": "btnMoreLink",
            "isVisible": false,
            "left": "164dp",
            "text": "Learn More",
            "top": "13dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnMoreLink"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnMoreLink"), extendConfig({}, controller.args[2], "btnMoreLink"));
        flxDescription.add(transactionDescription, btnMoreLink);
        var flxSeperator1 = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E31PX",
            "top": "8dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxSeperator1"), extendConfig({}, controller.args[1], "flxSeperator1"), extendConfig({}, controller.args[2], "flxSeperator1"));
        flxSeperator1.setDefaultUnit(kony.flex.DP);
        flxSeperator1.add();
        var flxBtnContainer = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "47dp",
            "id": "flxBtnContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": false,
            "left": "0dp",
            "isModalContainer": false,
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBtnContainer"), extendConfig({}, controller.args[1], "flxBtnContainer"), extendConfig({}, controller.args[2], "flxBtnContainer"));
        flxBtnContainer.setDefaultUnit(kony.flex.DP);
        var btnAction1 = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSknBtn4176A435PX",
            "id": "btnAction1",
            "isVisible": true,
            "left": "1%",
            "skin": "ICSknBtn4176A435PX",
            "text": "Make Transfer",
            "top": "14dp",
            "width": "45%",
            "zIndex": 1
        }, controller.args[0], "btnAction1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAction1"), extendConfig({}, controller.args[2], "btnAction1"));
        var flxSeperator2 = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "24dp",
            "id": "flxSeperator2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1%",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E31PX",
            "top": "14dp",
            "width": "1dp",
            "zIndex": 1
        }, controller.args[0], "flxSeperator2"), extendConfig({}, controller.args[1], "flxSeperator2"), extendConfig({}, controller.args[2], "flxSeperator2"));
        flxSeperator2.setDefaultUnit(kony.flex.DP);
        flxSeperator2.add();
        var btnAction2 = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSknBtn4176A435PX",
            "id": "btnAction2",
            "isVisible": true,
            "left": "3%",
            "skin": "ICSknBtn4176A435PX",
            "text": "Add New Account",
            "top": "14dp",
            "width": "45%",
            "zIndex": 1
        }, controller.args[0], "btnAction2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAction2"), extendConfig({}, controller.args[2], "btnAction2"));
        flxBtnContainer.add(btnAction1, flxSeperator2, btnAction2);
        flxTransactionType.add(imgTransactionIcon, lblTransactionType, rtLearnMore, flxDescription, flxSeperator1, flxBtnContainer);
        var flxDescriptionPage = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "671dp",
            "horizontalScrollIndicator": true,
            "id": "flxDescriptionPage",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxDescriptionPage"), extendConfig({}, controller.args[1], "flxDescriptionPage"), extendConfig({}, controller.args[2], "flxDescriptionPage"));
        flxDescriptionPage.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx003E75Grd1E588b",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxDescriptionTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDescriptionTop",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxDescriptionTop"), extendConfig({}, controller.args[1], "flxDescriptionTop"), extendConfig({}, controller.args[2], "flxDescriptionTop"));
        flxDescriptionTop.setDefaultUnit(kony.flex.DP);
        var imgBackBtn = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "imgBackBtn",
            "isVisible": true,
            "left": "23dp",
            "src": "backbutton.png",
            "top": "15dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgBackBtn"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBackBtn"), extendConfig({}, controller.args[2], "imgBackBtn"));
        flxDescriptionTop.add(imgBackBtn);
        var lblTransactionHearder = new kony.ui.Label(extendConfig({
            "id": "lblTransactionHearder",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblFFFFFF34PX",
            "text": "Transfer Type",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "11dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTransactionHearder"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTransactionHearder"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTransactionHearder"));
        flxHeader.add(flxDescriptionTop, lblTransactionHearder);
        var imgTransDescriptionIcon = new kony.ui.Image2(extendConfig({
            "height": "79dp",
            "id": "imgTransDescriptionIcon",
            "isVisible": true,
            "left": "21dp",
            "src": "imagedrag.png",
            "top": "19dp",
            "width": "80dp",
            "zIndex": 1
        }, controller.args[0], "imgTransDescriptionIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgTransDescriptionIcon"), extendConfig({}, controller.args[2], "imgTransDescriptionIcon"));
        var lblDescriptionHeading = new kony.ui.Label(extendConfig({
            "id": "lblDescriptionHeading",
            "isVisible": true,
            "left": "22dp",
            "text": "Within Same Bank",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDescriptionHeading"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDescriptionHeading"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDescriptionHeading"));
        var lblDescription = new kony.ui.Label(extendConfig({
            "id": "lblDescription",
            "isVisible": true,
            "left": "22dp",
            "skin": "ICSknLbl72727235PX",
            "text": "Transfer between your own accounts or other accounts in the same bank. Whether you're transferring money between your own accounts or sending money to someone else at the same bank, the transaction is made on the bank's internal network and servers. Since transfers within the same bank don't require any external resources, they're usually free and quick.",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "8dp",
            "width": "320dp",
            "zIndex": 1
        }, controller.args[0], "lblDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDescription"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDescription"));
        var flxDescriptionActionBtn = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "130dp",
            "id": "flxDescriptionActionBtn",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "210dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDescriptionActionBtn"), extendConfig({}, controller.args[1], "flxDescriptionActionBtn"), extendConfig({}, controller.args[2], "flxDescriptionActionBtn"));
        flxDescriptionActionBtn.setDefaultUnit(kony.flex.DP);
        var btnDescriptionActionBtn1 = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSknBtn003E7535PX",
            "height": "48dp",
            "id": "btnDescriptionActionBtn1",
            "isVisible": true,
            "left": "5%",
            "right": "19dp",
            "skin": "ICSknBtn003E7535PX",
            "text": "Make Transfer",
            "top": "5dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnDescriptionActionBtn1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDescriptionActionBtn1"), extendConfig({}, controller.args[2], "btnDescriptionActionBtn1"));
        var btnDescriptionActionBtn2 = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSknBtnFFFFFF35PX003E751PX",
            "height": "48dp",
            "id": "btnDescriptionActionBtn2",
            "isVisible": true,
            "left": "5%",
            "right": "5%",
            "skin": "ICSknBtnFFFFFF35PX003E751PX",
            "text": "Add New Account",
            "top": "17dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnDescriptionActionBtn2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDescriptionActionBtn2"), extendConfig({}, controller.args[2], "btnDescriptionActionBtn2"));
        flxDescriptionActionBtn.add(btnDescriptionActionBtn1, btnDescriptionActionBtn2);
        flxDescriptionPage.add(flxHeader, imgTransDescriptionIcon, lblDescriptionHeading, lblDescription, flxDescriptionActionBtn);
        flxTransferTypes.add(flxTransactionType, flxDescriptionPage);
        var flxSpace = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSpace",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "8dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSpace"), extendConfig({}, controller.args[1], "flxSpace"), extendConfig({}, controller.args[2], "flxSpace"));
        flxSpace.setDefaultUnit(kony.flex.DP);
        flxSpace.add();
        var flxPopup = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "85dp",
            "isModalContainer": true,
            "top": "203dp",
            "width": "100%",
            "zIndex": 3
        }, controller.args[0], "flxPopup"), extendConfig({}, controller.args[1], "flxPopup"), extendConfig({}, controller.args[2], "flxPopup"));
        flxPopup.setDefaultUnit(kony.flex.DP);
        var description = new com.temenos.infinity.transfer.description(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "id": "description",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "overrides": {
                "description": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "height": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared"
                }
            }
        }, controller.args[0], "description"), extendConfig({
            "overrides": {}
        }, controller.args[1], "description"), extendConfig({
            "overrides": {}
        }, controller.args[2], "description"));
        flxPopup.add(description);
        transferTypeSelection.add(flxTransferTypes, flxSpace, flxPopup);
        return transferTypeSelection;
    }
})