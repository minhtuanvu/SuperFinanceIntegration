define("UnifiedTransferFlow/frmSelectTransferType", function() {
    return function(controller) {
        function addWidgetsfrmSelectTransferType() {
            this.setDefaultUnit(kony.flex.DP);
            var flxSelectTransferType = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxSelectTransferType",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectTransferType.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxTop.setDefaultUnit(kony.flex.DP);
            var imgBack = new kony.ui.Image2({
                "height": "30dp",
                "id": "imgBack",
                "isVisible": true,
                "left": "23dp",
                "onTouchStart": controller.AS_Image_h6b8c2c73f4d4d1490f518bb2e399f3c,
                "src": "backbutton_1.png",
                "top": "15dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTop.add(imgBack);
            var lblAcknowledgement = new kony.ui.Label({
                "bottom": "10dp",
                "height": "40dp",
                "id": "lblAcknowledgement",
                "isVisible": true,
                "left": "17dp",
                "skin": "ICSknHeaderFFF",
                "text": "Transfer Type",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHeader.add(flxTop, lblAcknowledgement);
            var flxSelectTransferDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "48dp",
                "id": "flxSelectTransferDescription",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectTransferDescription.setDefaultUnit(kony.flex.DP);
            var lblSelectTransferDescription = new kony.ui.Label({
                "bottom": "18dp",
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblSelectTransferDescription",
                "isVisible": true,
                "left": "75dp",
                "skin": "ICSknLbl42424234px",
                "text": "Please select transfer type",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "13dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSelectTransferDescription.add(lblSelectTransferDescription);
            var flxSelectTransferTypeDivider = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxSelectTransferTypeDivider",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "ICSknFlxA6A6A6Gradient",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectTransferTypeDivider.setDefaultUnit(kony.flex.DP);
            flxSelectTransferTypeDivider.add();
            var flxTransferType1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTransferType1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransferType1.setDefaultUnit(kony.flex.DP);
            var transferTypeSelection1 = new com.temenos.infinityComponent.transferTypeSelection({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "id": "transferTypeSelection1",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "transferTypeSelection": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "height": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            transferTypeSelection1.iconVisibility = "Off";
            transferTypeSelection1.moreLink = "Learn More";
            transferTypeSelection1.BREAKPTS = "{\"BP1\":\"640\",\"BP2\":\"1024\",\"BP3\":\"1366\",\"BP4\":\"1380\"}";
            transferTypeSelection1.boxSkin = "{\"default\":\"ICSknFlxE3E3E3Bdr8Px\",\"$.BREAKPTS.BP1\":\"ICSknFlxE3E3E3Bdr1PX\",\"$.BREAKPTS.BP2\":\"ICSknFlxE3E3E3Bdr1PX\",\"$.BREAKPTS.BP3\":\"ICSknFlxE3E3E3Bdr1PX\",\"$.BREAKPTS.BP4\":\"ICSknFlxE3E3E3Bdr1PX\"}";
            transferTypeSelection1.icon = "samebank.png";
            transferTypeSelection1.moreLinkAction = "New Form";
            transferTypeSelection1.titleSkin = "{\"default\":\"ICSknLbl42424241PX\",\"$.BREAKPTS.BP1\":\"ICSknLbl42424218PX\",\"$.BREAKPTS.BP2\":\"ICSknLbl42424218PX\",\"$.BREAKPTS.BP3\":\"ICSknLbl42424218PX\",\"$.BREAKPTS.BP4\":\"ICSknLbl42424218PX\"}";
            transferTypeSelection1.title = "Within Same Bank";
            transferTypeSelection1.actionButton1 = "{\"id\":\"MakeTransfer\",\"text\":\"Make Transfer\",\"callBack\":\"makeTransfer\",\"entitlement_keys\":[\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\"]}";
            transferTypeSelection1.descriptionSkin = "{\"default\":\"ICSknRText72727239PX\",\"$.BREAKPTS.BP1\":\"ICSknLbl72727213PX\",\"$.BREAKPTS.BP2\":\"ICSknLbl72727213PX\",\"$.BREAKPTS.BP3\":\"ICSknLbl72727213PX\",\"$.BREAKPTS.BP4\":\"ICSknLbl72727213PX\"}";
            transferTypeSelection1.description = "{i.i18n.unified.sameBankDescription}";
            transferTypeSelection1.actionButton2 = "{\"id\":\"AddNewAccount\",\"text\":\"Add New Account\",\"callBack\":\"addNewAccount\",\"entitlement_keys\":[\"INTRA_BANK_FUND_TRANSFER_CREATE_RECEPIENT\",\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE_RECEPIENT\"]}";
            transferTypeSelection1.moreLinkSkin = "{\"default\":{\"normal\":\"ICSknLink4176A439PX\",\"Hover\":\"ICSknLink4176A439PX\",\"Active\":\"ICSknLink4176A439PX\"},\"$.BREAKPTS.BP1\":{\"normal\":\"ICSknLink4176A413PX\",\"Hover\":\"ICSknLink4176A413PX\",\"Active\":\"ICSknLink4176A413PX\"},\"$.BREAKPTS.BP2\":{\"normal\":\"ICSknLink4176A413PX\",\"Hover\":\"ICSknLink4176A413PX\",\"Active\":\"ICSknLink4176A413PX\"},\"$.BREAKPTS.BP3\":{\"normal\":\"ICSknLink4176A413PX\",\"Hover\":\"ICSknLink4176A413PX\",\"Active\":\"ICSknLink4176A413PX\"},\"$.BREAKPTS.BP4\":{\"normal\":\"ICSknLink4176A413PX\",\"Hover\":\"ICSknLink4176A413PX\",\"Active\":\"ICSknLink4176A413PX\"}}";
            transferTypeSelection1.descriptionRendering = "{\"default\":{\"length\":60,\"ellipsis\":\"...\"},\"$.BREAKPTS.BP1\":{\"length\":60,\"ellipsis\":\"...\"},\"$.BREAKPTS.BP2\":{\"length\":60,\"ellipsis\":\"...\"},\"$.BREAKPTS.BP3\":{\"length\":60,\"ellipsis\":\"...\"},\"$.BREAKPTS.BP4\":{\"length\":60,\"ellipsis\":\"...\"}}";
            transferTypeSelection1.detailsActionButton1 = "{\"id\":\"MakeTransfer\",\"text\":\"Make Transfer\",\"callBack\":\"makeTransfer\",\"entitlement_keys\":[\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"DOMESTIC_WIRE_TRANSFER_VIEW_BULK_FILES\"]}";
            transferTypeSelection1.actionButton1Skin = "{\"default\":{\"normal\":\"ICSknBtn4176A435PX\",\"Hover\":\"ICSknBtn4176A435PX\",\"Active\":\"ICSknBtn4176A435PX\"},\"$.BREAKPTS.BP1\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP2\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP3\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP4\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"}}";
            transferTypeSelection1.teamsConditions = "Ut ut ipsum eget lacus ullamcorper volutpat id nec justo. Nulla malesuada lectus purus, pellentesque gravida arcu ultricies id.   Donec eget ligula elit. Vivamus consequat feugiat vulputate.   Aenean placerat lectus pretium, convallis felis a, varius urna.   Cras non mauris id nisi sodales tincidunt ut non lorem. Vivamus turpis nibh, luctus tempor elementum eu, luctus vel turpis.   Proin interdum ante a ligula auctor, vel tempus metus ornare.   Donec sed tincidunt quam. Ut posuere metus at consectetur feugiat. Donec viverra lectus vitae tristique dictum. Aliquam ac fringilla lectus.  Maecenas nec condimentum purus, ut commodo justo. Nullam ac nisl justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vehicula nulla ligula, et lobortis ex malesuada id. Quisque lacinia leo est, sit amet venenatis lorem pulvinar ut. Nam imperdiet mattis augue, et imperdiet lorem porta et. Suspendisse mattis tristique ultrices. Donec et lobortis magna. Phasellus et sapien vitae velit aliquet ultrices nec a nibh. Pellentesque convallis velit in vehicula bibendum. Nunc accumsan dui nec est ultricies varius. Aenean dignissim convallis lacinia. Donec sit amet purus ultrices, finibus elit at, aliquam nisl.";
            transferTypeSelection1.detailsActionButton2 = "{\"id\":\"AddNewAccount\",\"text\":\"Add New Account\",\"callBack\":\"addNewAccount\",\"entitlement_keys\":[\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"DOMESTIC_WIRE_TRANSFER_VIEW_BULK_FILES\"]}";
            transferTypeSelection1.actionButton2Skin = "{\"default\":{\"normal\":\"ICSknBtn4176A435PX\",\"Hover\":\"ICSknBtn4176A435PX\",\"Active\":\"ICSknBtn4176A435PX\"},\"$.BREAKPTS.BP1\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP2\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP3\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP4\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"}}";
            transferTypeSelection1.detailsActionButton1Skin = "{\"normal\":\"ICSknBtn003E7535PX\",\"Hover\":\"ICSknBtn003E7535PX\",\"Active\":\"ICSknBtn003E7535PX\"}";
            transferTypeSelection1.detailsActionButton2Skin = "{\"normal\":\"ICSknBtnFFFFFF35PX003E751PX\",\"Hover\":\"ICSknBtnFFFFFF35PX003E751PX\",\"Active\":\"ICSknBtnFFFFFF35PX003E751PX\"}";
            transferTypeSelection1.detailDescriptionSkn = "ICSknLbl72727235PX";
            transferTypeSelection1.detailDescHeadingSkn = "ICSknLbl42424255PX";
            transferTypeSelection1.popupTitleSkin = "ICSknLbl42424215PX";
            transferTypeSelection1.popupDescriptionSkn = "ICSknLbl72727213PX";
            transferTypeSelection1.termsConditionTitleSkn = "ICSknLbl42424215PX";
            transferTypeSelection1.termsConditionSkn = "ICSknLbl72727213PX";
            transferTypeSelection1.popupCloseBtnSkn = "ICSknBtn003E7515PXBrd3PX";
            flxTransferType1.add(transferTypeSelection1);
            var flxTransferType2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTransferType2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransferType2.setDefaultUnit(kony.flex.DP);
            var transferTypeSelection2 = new com.temenos.infinityComponent.transferTypeSelection({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "id": "transferTypeSelection2",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "transferTypeSelection": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "height": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            transferTypeSelection2.iconVisibility = "Off";
            transferTypeSelection2.moreLink = "Learn More";
            transferTypeSelection2.BREAKPTS = "{\"BP1\":\"640\",\"BP2\":\"1024\",\"BP3\":\"1366\",\"BP4\":\"1380\"}";
            transferTypeSelection2.boxSkin = "{\"default\":\"ICSknFlxE3E3E3Bdr8Px\",\"$.BREAKPTS.BP1\":\"ICSknFlxE3E3E3Bdr1PX\",\"$.BREAKPTS.BP2\":\"ICSknFlxE3E3E3Bdr1PX\",\"$.BREAKPTS.BP3\":\"ICSknFlxE3E3E3Bdr1PX\",\"$.BREAKPTS.BP4\":\"ICSknFlxE3E3E3Bdr1PX\"}";
            transferTypeSelection2.icon = "otherbank.png";
            transferTypeSelection2.moreLinkAction = "New Form";
            transferTypeSelection2.titleSkin = "{\"default\":\"ICSknLbl42424241PX\",\"$.BREAKPTS.BP1\":\"ICSknLbl42424218PX\",\"$.BREAKPTS.BP2\":\"ICSknLbl42424218PX\",\"$.BREAKPTS.BP3\":\"ICSknLbl42424218PX\",\"$.BREAKPTS.BP4\":\"ICSknLbl42424218PX\"}";
            transferTypeSelection2.title = "Domestic Transfer";
            transferTypeSelection2.actionButton1 = "{\"id\":\"MakeTransfer\",\"text\":\"Make Transfer\",\"callBack\":\"makeTransfer\",\"entitlement_keys\":[\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\"]}";
            transferTypeSelection2.descriptionSkin = "{\"default\":\"ICSknRText72727239PX\",\"$.BREAKPTS.BP1\":\"ICSknLbl72727213PX\",\"$.BREAKPTS.BP2\":\"ICSknLbl72727213PX\",\"$.BREAKPTS.BP3\":\"ICSknLbl72727213PX\",\"$.BREAKPTS.BP4\":\"ICSknLbl72727213PX\"}";
            transferTypeSelection2.description = "{i.i18n.unified.domesticDescription}";
            transferTypeSelection2.actionButton2 = "{\"id\":\"AddNewAccount\",\"text\":\"Add New Account\",\"callBack\":\"addNewAccount\",\"entitlement_keys\":[\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE_RECEPIENT\"]}";
            transferTypeSelection2.moreLinkSkin = "{\"default\":{\"normal\":\"ICSknLink4176A439PX\",\"Hover\":\"ICSknLink4176A439PX\",\"Active\":\"ICSknLink4176A439PX\"},\"$.BREAKPTS.BP1\":{\"normal\":\"ICSknLink4176A413PX\",\"Hover\":\"ICSknLink4176A413PX\",\"Active\":\"ICSknLink4176A413PX\"},\"$.BREAKPTS.BP2\":{\"normal\":\"ICSknLink4176A413PX\",\"Hover\":\"ICSknLink4176A413PX\",\"Active\":\"ICSknLink4176A413PX\"},\"$.BREAKPTS.BP3\":{\"normal\":\"ICSknLink4176A413PX\",\"Hover\":\"ICSknLink4176A413PX\",\"Active\":\"ICSknLink4176A413PX\"},\"$.BREAKPTS.BP4\":{\"normal\":\"ICSknLink4176A413PX\",\"Hover\":\"ICSknLink4176A413PX\",\"Active\":\"ICSknLink4176A413PX\"}}";
            transferTypeSelection2.descriptionRendering = "{\"default\":{\"length\":60,\"ellipsis\":\"...\"},\"$.BREAKPTS.BP1\":{\"length\":60,\"ellipsis\":\"...\"},\"$.BREAKPTS.BP2\":{\"length\":60,\"ellipsis\":\"...\"},\"$.BREAKPTS.BP3\":{\"length\":60,\"ellipsis\":\"...\"},\"$.BREAKPTS.BP4\":{\"length\":60,\"ellipsis\":\"...\"}}";
            transferTypeSelection2.detailsActionButton1 = "{\"id\":\"MakeTransfer\",\"text\":\"Make Transfer\",\"callBack\":\"makeTransfer\",\"entitlement_keys\":[\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"DOMESTIC_WIRE_TRANSFER_VIEW_BULK_FILES\"]}";
            transferTypeSelection2.actionButton1Skin = "{\"default\":{\"normal\":\"ICSknBtn4176A435PX\",\"Hover\":\"ICSknBtn4176A435PX\",\"Active\":\"ICSknBtn4176A435PX\"},\"$.BREAKPTS.BP1\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP2\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP3\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP4\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"}}";
            transferTypeSelection2.teamsConditions = "Ut ut ipsum eget lacus ullamcorper volutpat id nec justo. Nulla malesuada lectus purus, pellentesque gravida arcu ultricies id.   Donec eget ligula elit. Vivamus consequat feugiat vulputate.   Aenean placerat lectus pretium, convallis felis a, varius urna.   Cras non mauris id nisi sodales tincidunt ut non lorem. Vivamus turpis nibh, luctus tempor elementum eu, luctus vel turpis.   Proin interdum ante a ligula auctor, vel tempus metus ornare.   Donec sed tincidunt quam. Ut posuere metus at consectetur feugiat. Donec viverra lectus vitae tristique dictum. Aliquam ac fringilla lectus.  Maecenas nec condimentum purus, ut commodo justo. Nullam ac nisl justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vehicula nulla ligula, et lobortis ex malesuada id. Quisque lacinia leo est, sit amet venenatis lorem pulvinar ut. Nam imperdiet mattis augue, et imperdiet lorem porta et. Suspendisse mattis tristique ultrices. Donec et lobortis magna. Phasellus et sapien vitae velit aliquet ultrices nec a nibh. Pellentesque convallis velit in vehicula bibendum. Nunc accumsan dui nec est ultricies varius. Aenean dignissim convallis lacinia. Donec sit amet purus ultrices, finibus elit at, aliquam nisl.";
            transferTypeSelection2.detailsActionButton2 = "{\"id\":\"AddNewAccount\",\"text\":\"Add New Account\",\"callBack\":\"addNewAccount\",\"entitlement_keys\":[\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"DOMESTIC_WIRE_TRANSFER_VIEW_BULK_FILES\"]}";
            transferTypeSelection2.actionButton2Skin = "{\"default\":{\"normal\":\"ICSknBtn4176A435PX\",\"Hover\":\"ICSknBtn4176A435PX\",\"Active\":\"ICSknBtn4176A435PX\"},\"$.BREAKPTS.BP1\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP2\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP3\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP4\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"}}";
            transferTypeSelection2.detailsActionButton1Skin = "{\"normal\":\"ICSknBtn003E7535PX\",\"Hover\":\"ICSknBtn003E7535PX\",\"Active\":\"ICSknBtn003E7535PX\"}";
            transferTypeSelection2.detailsActionButton2Skin = "{\"normal\":\"ICSknBtnFFFFFF35PX003E751PX\",\"Hover\":\"ICSknBtnFFFFFF35PX003E751PX\",\"Active\":\"ICSknBtnFFFFFF35PX003E751PX\"}";
            transferTypeSelection2.detailDescriptionSkn = "ICSknLbl72727235PX";
            transferTypeSelection2.detailDescHeadingSkn = "ICSknLbl42424255PX";
            transferTypeSelection2.popupTitleSkin = "ICSknLbl42424215PX";
            transferTypeSelection2.popupDescriptionSkn = "ICSknLbl72727213PX";
            transferTypeSelection2.termsConditionTitleSkn = "ICSknLbl42424215PX";
            transferTypeSelection2.termsConditionSkn = "ICSknLbl72727213PX";
            transferTypeSelection2.popupCloseBtnSkn = "ICSknBtn003E7515PXBrd3PX";
            flxTransferType2.add(transferTypeSelection2);
            var flxTransferType3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTransferType3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransferType3.setDefaultUnit(kony.flex.DP);
            var transferTypeSelection3 = new com.temenos.infinityComponent.transferTypeSelection({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "id": "transferTypeSelection3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "transferTypeSelection": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "height": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            transferTypeSelection3.iconVisibility = "Off";
            transferTypeSelection3.moreLink = "Learn More";
            transferTypeSelection3.BREAKPTS = "{\"BP1\":\"640\",\"BP2\":\"1024\",\"BP3\":\"1366\",\"BP4\":\"1380\"}";
            transferTypeSelection3.boxSkin = "{\"default\":\"ICSknFlxE3E3E3Bdr8Px\",\"$.BREAKPTS.BP1\":\"ICSknFlxE3E3E3Bdr1PX\",\"$.BREAKPTS.BP2\":\"ICSknFlxE3E3E3Bdr1PX\",\"$.BREAKPTS.BP3\":\"ICSknFlxE3E3E3Bdr1PX\",\"$.BREAKPTS.BP4\":\"ICSknFlxE3E3E3Bdr1PX\"}";
            transferTypeSelection3.icon = "internationalbank.png";
            transferTypeSelection3.moreLinkAction = "New Form";
            transferTypeSelection3.titleSkin = "{\"default\":\"ICSknLbl42424241PX\",\"$.BREAKPTS.BP1\":\"ICSknLbl42424218PX\",\"$.BREAKPTS.BP2\":\"ICSknLbl42424218PX\",\"$.BREAKPTS.BP3\":\"ICSknLbl42424218PX\",\"$.BREAKPTS.BP4\":\"ICSknLbl42424218PX\"}";
            transferTypeSelection3.title = "International Transfer";
            transferTypeSelection3.actionButton1 = "{\"id\":\"MakeTransfer\",\"text\":\"Make Transfer\",\"callBack\":\"makeTransfer\",\"entitlement_keys\":[\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\"]}";
            transferTypeSelection3.descriptionSkin = "{\"default\":\"ICSknRText72727239PX\",\"$.BREAKPTS.BP1\":\"ICSknLbl72727213PX\",\"$.BREAKPTS.BP2\":\"ICSknLbl72727213PX\",\"$.BREAKPTS.BP3\":\"ICSknLbl72727213PX\",\"$.BREAKPTS.BP4\":\"ICSknLbl72727213PX\"}";
            transferTypeSelection3.description = "{i.i18n.unified.internationalDescription}";
            transferTypeSelection3.actionButton2 = "{\"id\":\"AddNewAccount\",\"text\":\"Add New Account\",\"callBack\":\"addNewAccount\",\"entitlement_keys\":[\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE_RECEPIENT\"]}";
            transferTypeSelection3.moreLinkSkin = "{\"default\":{\"normal\":\"ICSknLink4176A439PX\",\"Hover\":\"ICSknLink4176A439PX\",\"Active\":\"ICSknLink4176A439PX\"},\"$.BREAKPTS.BP1\":{\"normal\":\"ICSknLink4176A413PX\",\"Hover\":\"ICSknLink4176A413PX\",\"Active\":\"ICSknLink4176A413PX\"},\"$.BREAKPTS.BP2\":{\"normal\":\"ICSknLink4176A413PX\",\"Hover\":\"ICSknLink4176A413PX\",\"Active\":\"ICSknLink4176A413PX\"},\"$.BREAKPTS.BP3\":{\"normal\":\"ICSknLink4176A413PX\",\"Hover\":\"ICSknLink4176A413PX\",\"Active\":\"ICSknLink4176A413PX\"},\"$.BREAKPTS.BP4\":{\"normal\":\"ICSknLink4176A413PX\",\"Hover\":\"ICSknLink4176A413PX\",\"Active\":\"ICSknLink4176A413PX\"}}";
            transferTypeSelection3.descriptionRendering = "{\"default\":{\"length\":60,\"ellipsis\":\"...\"},\"$.BREAKPTS.BP1\":{\"length\":60,\"ellipsis\":\"...\"},\"$.BREAKPTS.BP2\":{\"length\":60,\"ellipsis\":\"...\"},\"$.BREAKPTS.BP3\":{\"length\":60,\"ellipsis\":\"...\"},\"$.BREAKPTS.BP4\":{\"length\":60,\"ellipsis\":\"...\"}}";
            transferTypeSelection3.detailsActionButton1 = "{\"id\":\"MakeTransfer\",\"text\":\"Make Transfer\",\"callBack\":\"makeTransfer\",\"entitlement_keys\":[\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"DOMESTIC_WIRE_TRANSFER_VIEW_BULK_FILES\"]}";
            transferTypeSelection3.actionButton1Skin = "{\"default\":{\"normal\":\"ICSknBtn4176A435PX\",\"Hover\":\"ICSknBtn4176A435PX\",\"Active\":\"ICSknBtn4176A435PX\"},\"$.BREAKPTS.BP1\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP2\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP3\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP4\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"}}";
            transferTypeSelection3.teamsConditions = "Ut ut ipsum eget lacus ullamcorper volutpat id nec justo. Nulla malesuada lectus purus, pellentesque gravida arcu ultricies id.   Donec eget ligula elit. Vivamus consequat feugiat vulputate.   Aenean placerat lectus pretium, convallis felis a, varius urna.   Cras non mauris id nisi sodales tincidunt ut non lorem. Vivamus turpis nibh, luctus tempor elementum eu, luctus vel turpis.   Proin interdum ante a ligula auctor, vel tempus metus ornare.   Donec sed tincidunt quam. Ut posuere metus at consectetur feugiat. Donec viverra lectus vitae tristique dictum. Aliquam ac fringilla lectus.  Maecenas nec condimentum purus, ut commodo justo. Nullam ac nisl justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vehicula nulla ligula, et lobortis ex malesuada id. Quisque lacinia leo est, sit amet venenatis lorem pulvinar ut. Nam imperdiet mattis augue, et imperdiet lorem porta et. Suspendisse mattis tristique ultrices. Donec et lobortis magna. Phasellus et sapien vitae velit aliquet ultrices nec a nibh. Pellentesque convallis velit in vehicula bibendum. Nunc accumsan dui nec est ultricies varius. Aenean dignissim convallis lacinia. Donec sit amet purus ultrices, finibus elit at, aliquam nisl.";
            transferTypeSelection3.detailsActionButton2 = "{\"id\":\"AddNewAccount\",\"text\":\"Add New Account\",\"callBack\":\"addNewAccount\",\"entitlement_keys\":[\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"DOMESTIC_WIRE_TRANSFER_VIEW_BULK_FILES\"]}";
            transferTypeSelection3.actionButton2Skin = "{\"default\":{\"normal\":\"ICSknBtn4176A435PX\",\"Hover\":\"ICSknBtn4176A435PX\",\"Active\":\"ICSknBtn4176A435PX\"},\"$.BREAKPTS.BP1\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP2\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP3\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP4\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"}}";
            transferTypeSelection3.detailsActionButton1Skin = "{\"normal\":\"ICSknBtn003E7535PX\",\"Hover\":\"ICSknBtn003E7535PX\",\"Active\":\"ICSknBtn003E7535PX\"}";
            transferTypeSelection3.detailsActionButton2Skin = "{\"normal\":\"ICSknBtnFFFFFF35PX003E751PX\",\"Hover\":\"ICSknBtnFFFFFF35PX003E751PX\",\"Active\":\"ICSknBtnFFFFFF35PX003E751PX\"}";
            transferTypeSelection3.detailDescriptionSkn = "ICSknLbl72727235PX";
            transferTypeSelection3.detailDescHeadingSkn = "ICSknLbl42424255PX";
            transferTypeSelection3.popupTitleSkin = "ICSknLbl42424215PX";
            transferTypeSelection3.popupDescriptionSkn = "ICSknLbl72727213PX";
            transferTypeSelection3.termsConditionTitleSkn = "ICSknLbl42424215PX";
            transferTypeSelection3.termsConditionSkn = "ICSknLbl72727213PX";
            transferTypeSelection3.popupCloseBtnSkn = "ICSknBtn003E7515PXBrd3PX";
            flxTransferType3.add(transferTypeSelection3);
            var flxSpace = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSpace",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSpace.setDefaultUnit(kony.flex.DP);
            flxSpace.add();
            flxSelectTransferType.add(flxHeader, flxSelectTransferDescription, flxSelectTransferTypeDivider, flxTransferType1, flxTransferType2, flxTransferType3, flxSpace);
            this.add(flxSelectTransferType);
        };
        return [{
            "addWidgets": addWidgetsfrmSelectTransferType,
            "enabledForIdleTimeout": false,
            "id": "frmSelectTransferType",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "ICSknForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "onDeviceBack": controller.AS_Form_f5f5bfac92f94ab19ea4920c55409a8e,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "ICSknTitleBar003e75Bg",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});