define("UnifiedTransferFlow/frmP2PTransferType", function() {
    return function(controller) {
        function addWidgetsfrmP2PTransferType() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
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
            var flxHeaderTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxHeaderTop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxHeaderTop.setDefaultUnit(kony.flex.DP);
            var imgBack = new kony.ui.Image2({
                "height": "30dp",
                "id": "imgBack",
                "isVisible": true,
                "left": "23dp",
                "onTouchStart": controller.AS_Image_d88aff863d2843e1afeef01c13d0ee41,
                "src": "backbutton_1.png",
                "top": "15dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxHeaderTop.add(imgBack);
            var lblAcknowledgement = new kony.ui.Label({
                "bottom": "15dp",
                "id": "lblAcknowledgement",
                "isVisible": true,
                "left": "17dp",
                "skin": "ICSknHeaderFFF",
                "text": "Transfer Type",
                "textStyle": {},
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxHeader.add(flxHeaderTop, lblAcknowledgement);
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
                "textStyle": {},
                "top": "13dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxSelectTransferDescription.add(lblSelectTransferDescription);
            var flxP2PTrnsfer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxP2PTrnsfer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxP2PTrnsfer.setDefaultUnit(kony.flex.DP);
            var transferTypeSelection4 = new com.temenos.infinityComponent.transferTypeSelection({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "id": "transferTypeSelection4",
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
            transferTypeSelection4.iconVisibility = "Off";
            transferTypeSelection4.moreLink = "Learn More";
            transferTypeSelection4.BREAKPTS = "{\"BP1\":\"640\",\"BP2\":\"1024\",\"BP3\":\"1366\",\"BP4\":\"1380\"}";
            transferTypeSelection4.boxSkin = "{\"default\":\"ICSknFlxE3E3E3Bdr8Px\",\"$.BREAKPTS.BP1\":\"ICSknFlxE3E3E3Bdr1PX\",\"$.BREAKPTS.BP2\":\"ICSknFlxE3E3E3Bdr1PX\",\"$.BREAKPTS.BP3\":\"ICSknFlxE3E3E3Bdr1PX\",\"$.BREAKPTS.BP4\":\"ICSknFlxE3E3E3Bdr1PX\"}";
            transferTypeSelection4.icon = "p2ptransfer.png";
            transferTypeSelection4.moreLinkAction = "New Form";
            transferTypeSelection4.titleSkin = "{\"default\":\"ICSknLbl42424241PX\",\"$.BREAKPTS.BP1\":\"ICSknLbl42424218PX\",\"$.BREAKPTS.BP2\":\"ICSknLbl42424218PX\",\"$.BREAKPTS.BP3\":\"ICSknLbl42424218PX\",\"$.BREAKPTS.BP4\":\"ICSknLbl42424218PX\"}";
            transferTypeSelection4.title = "Pay a Person";
            transferTypeSelection4.actionButton1 = "{\"id\":\"MakeTransfer\",\"text\":\"Make Transfer\",\"callBack\":\"makeTransfer\",\"entitlement_keys\":[\"P2P_CREATE\"]}";
            transferTypeSelection4.descriptionSkin = "{\"default\":\"ICSknRText72727239PX\",\"$.BREAKPTS.BP1\":\"ICSknLbl72727213PX\",\"$.BREAKPTS.BP2\":\"ICSknLbl72727213PX\",\"$.BREAKPTS.BP3\":\"ICSknLbl72727213PX\",\"$.BREAKPTS.BP4\":\"ICSknLbl72727213PX\"}";
            transferTypeSelection4.description = "{i.i18n.unified.p2pDescription}";
            transferTypeSelection4.actionButton2 = "{\"id\":\"AddNewAccount\",\"text\":\"Add New Account\",\"callBack\":\"addNewAccount\",\"entitlement_keys\":[\"P2P_CREATE_RECEPIENT\"]}";
            transferTypeSelection4.moreLinkSkin = "{\"default\":{\"normal\":\"ICSknLink4176A439PX\",\"Hover\":\"ICSknLink4176A439PX\",\"Active\":\"ICSknLink4176A439PX\"},\"$.BREAKPTS.BP1\":{\"normal\":\"ICSknLink4176A413PX\",\"Hover\":\"ICSknLink4176A413PX\",\"Active\":\"ICSknLink4176A413PX\"},\"$.BREAKPTS.BP2\":{\"normal\":\"ICSknLink4176A413PX\",\"Hover\":\"ICSknLink4176A413PX\",\"Active\":\"ICSknLink4176A413PX\"},\"$.BREAKPTS.BP3\":{\"normal\":\"ICSknLink4176A413PX\",\"Hover\":\"ICSknLink4176A413PX\",\"Active\":\"ICSknLink4176A413PX\"},\"$.BREAKPTS.BP4\":{\"normal\":\"ICSknLink4176A413PX\",\"Hover\":\"ICSknLink4176A413PX\",\"Active\":\"ICSknLink4176A413PX\"}}";
            transferTypeSelection4.descriptionRendering = "{\"default\":{\"length\":60,\"ellipsis\":\"...\"},\"$.BREAKPTS.BP1\":{\"length\":60,\"ellipsis\":\"...\"},\"$.BREAKPTS.BP2\":{\"length\":60,\"ellipsis\":\"...\"},\"$.BREAKPTS.BP3\":{\"length\":60,\"ellipsis\":\"...\"},\"$.BREAKPTS.BP4\":{\"length\":60,\"ellipsis\":\"...\"}}";
            transferTypeSelection4.detailsActionButton1 = "{\"id\":\"MakeTransfer\",\"text\":\"Make Transfer\",\"callBack\":\"makeTransfer\",\"entitlement_keys\":[\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"DOMESTIC_WIRE_TRANSFER_VIEW_BULK_FILES\"]}";
            transferTypeSelection4.actionButton1Skin = "{\"default\":{\"normal\":\"ICSknBtn4176A435PX\",\"Hover\":\"ICSknBtn4176A435PX\",\"Active\":\"ICSknBtn4176A435PX\"},\"$.BREAKPTS.BP1\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP2\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP3\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP4\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"}}";
            transferTypeSelection4.teamsConditions = "Ut ut ipsum eget lacus ullamcorper volutpat id nec justo. Nulla malesuada lectus purus, pellentesque gravida arcu ultricies id.   Donec eget ligula elit. Vivamus consequat feugiat vulputate.   Aenean placerat lectus pretium, convallis felis a, varius urna.   Cras non mauris id nisi sodales tincidunt ut non lorem. Vivamus turpis nibh, luctus tempor elementum eu, luctus vel turpis.   Proin interdum ante a ligula auctor, vel tempus metus ornare.   Donec sed tincidunt quam. Ut posuere metus at consectetur feugiat. Donec viverra lectus vitae tristique dictum. Aliquam ac fringilla lectus.  Maecenas nec condimentum purus, ut commodo justo. Nullam ac nisl justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vehicula nulla ligula, et lobortis ex malesuada id. Quisque lacinia leo est, sit amet venenatis lorem pulvinar ut. Nam imperdiet mattis augue, et imperdiet lorem porta et. Suspendisse mattis tristique ultrices. Donec et lobortis magna. Phasellus et sapien vitae velit aliquet ultrices nec a nibh. Pellentesque convallis velit in vehicula bibendum. Nunc accumsan dui nec est ultricies varius. Aenean dignissim convallis lacinia. Donec sit amet purus ultrices, finibus elit at, aliquam nisl.";
            transferTypeSelection4.detailsActionButton2 = "{\"id\":\"AddNewAccount\",\"text\":\"Add New Account\",\"callBack\":\"addNewAccount\",\"entitlement_keys\":[\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"DOMESTIC_WIRE_TRANSFER_VIEW_BULK_FILES\"]}";
            transferTypeSelection4.actionButton2Skin = "{\"default\":{\"normal\":\"ICSknBtn4176A435PX\",\"Hover\":\"ICSknBtn4176A435PX\",\"Active\":\"ICSknBtn4176A435PX\"},\"$.BREAKPTS.BP1\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP2\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP3\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"},\"$.BREAKPTS.BP4\":{\"normal\":\"ICSknBtn4176A415PX\",\"Hover\":\"ICSknBtn4176A415PX\",\"Active\":\"ICSknBtn4176A415PX\"}}";
            transferTypeSelection4.detailsActionButton1Skin = "{\"normal\":\"ICSknBtn003E7535PX\",\"Hover\":\"ICSknBtn003E7535PX\",\"Active\":\"ICSknBtn003E7535PX\"}";
            transferTypeSelection4.detailsActionButton2Skin = "{\"normal\":\"ICSknBtnFFFFFF35PX003E751PX\",\"Hover\":\"ICSknBtnFFFFFF35PX003E751PX\",\"Active\":\"ICSknBtnFFFFFF35PX003E751PX\"}";
            transferTypeSelection4.detailDescriptionSkn = "ICSknLbl72727235PX";
            transferTypeSelection4.detailDescHeadingSkn = "ICSknLbl42424255PX";
            transferTypeSelection4.popupTitleSkin = "ICSknLbl42424215PX";
            transferTypeSelection4.popupDescriptionSkn = "ICSknLbl72727213PX";
            transferTypeSelection4.termsConditionTitleSkn = "ICSknLbl42424215PX";
            transferTypeSelection4.termsConditionSkn = "ICSknLbl72727213PX";
            transferTypeSelection4.popupCloseBtnSkn = "ICSknBtn003E7515PXBrd3PX";
            flxP2PTrnsfer.add(transferTypeSelection4);
            flxMainContainer.add(flxHeader, flxSelectTransferDescription, flxP2PTrnsfer);
            this.add(flxMainContainer);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "4b88f100",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "title": ""
            },
            "id": "RBarBtnItem0"
        });
        var BBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "title": ""
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmP2PTransferType,
            "enabledForIdleTimeout": false,
            "id": "frmP2PTransferType",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "ICSknForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": true,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "statusBarStyle": constants.STATUS_BAR_STYLE_LIGHT_CONTENT,
            "titleBar": true,
            "titleBarAttributes": {
                "barStyle": constants.BAR_STYLE_DEAFULT,
                "navigationBarHidden": false,
                "translucent": false,
                "tintColor": "ffffff00",
                "hidesBackButton": false,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [],
                "rightBarButtonItems": [RBarBtnItem0],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "ICSknTitleBar003e75Bg"
        }]
    }
});