define(function() {
    return function(controller) {
        var Acknowledgement = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "Acknowledgement",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_f8ea97813c8d4810a7e95f0b7be598f2(eventobject);
            },
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "Acknowledgement"), extendConfig({}, controller.args[1], "Acknowledgement"), extendConfig({}, controller.args[2], "Acknowledgement"));
        Acknowledgement.setDefaultUnit(kony.flex.DP);
        var flxPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf54b5e",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxPopup"), extendConfig({}, controller.args[1], "flxPopup"), extendConfig({}, controller.args[2], "flxPopup"));
        flxPopup.setDefaultUnit(kony.flex.DP);
        var customPopup = new com.kmb.common.customPopup(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "height": "100%",
            "id": "customPopup",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_DEFAULT,
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "overrides": {
                "imgPopup": {
                    "src": "errormessage.png",
                    "top": "10dp"
                },
                "lblPopup": {
                    "top": "10dp"
                }
            }
        }, controller.args[0], "customPopup"), extendConfig({
            "overrides": {}
        }, controller.args[1], "customPopup"), extendConfig({
            "overrides": {}
        }, controller.args[2], "customPopup"));
        flxPopup.add(customPopup);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "imgBack",
            "isVisible": false,
            "left": "23dp",
            "src": "backbutton_1.png",
            "top": "15dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBack"), extendConfig({}, controller.args[2], "imgBack"));
        var lblAcknowledgement = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblAcknowledgement",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknHeaderFFF",
            "text": " Acknowledgment",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "60dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblAcknowledgement"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAcknowledgement"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAcknowledgement"));
        flxHeader.add(imgBack, lblAcknowledgement);
        var flxMain = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "85%",
            "horizontalScrollIndicator": true,
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "110dp",
            "verticalScrollIndicator": true,
            "width": "100%"
        }, controller.args[0], "flxMain"), extendConfig({}, controller.args[1], "flxMain"), extendConfig({}, controller.args[2], "flxMain"));
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxSuccess = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "100%",
            "horizontalScrollIndicator": true,
            "id": "flxSuccess",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%"
        }, controller.args[0], "flxSuccess"), extendConfig({}, controller.args[1], "flxSuccess"), extendConfig({}, controller.args[2], "flxSuccess"));
        flxSuccess.setDefaultUnit(kony.flex.DP);
        var flxDetails = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "60%",
            "horizontalScrollIndicator": true,
            "id": "flxDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDetails"), extendConfig({}, controller.args[1], "flxDetails"), extendConfig({}, controller.args[2], "flxDetails"));
        flxDetails.setDefaultUnit(kony.flex.DP);
        var flxMessage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMessage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMessage"), extendConfig({}, controller.args[1], "flxMessage"), extendConfig({}, controller.args[2], "flxMessage"));
        flxMessage.setDefaultUnit(kony.flex.DP);
        var imgSuccess = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "70dp",
            "id": "imgSuccess",
            "isVisible": true,
            "src": "success.png",
            "top": "11dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "imgSuccess"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSuccess"), extendConfig({}, controller.args[2], "imgSuccess"));
        var lblSuccess = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblSuccess",
            "isVisible": true,
            "skin": "sknlbl000000SSPSemiBold24px",
            "text": "You have saved the payee successfully",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "91dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblSuccess"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSuccess"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSuccess"));
        flxMessage.add(imgSuccess, lblSuccess);
        var flxSeparator1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "top": "10dp",
            "width": "91%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator1"), extendConfig({}, controller.args[1], "flxSeparator1"), extendConfig({}, controller.args[2], "flxSeparator1"));
        flxSeparator1.setDefaultUnit(kony.flex.DP);
        flxSeparator1.add();
        var segDetails = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblFieldLabel": "Reference ID:",
                "lblFieldValue": "878566910255"
            }, {
                "lblFieldLabel": "From:",
                "lblFieldValue": "My Checking...0792"
            }, {
                "lblFieldLabel": "To:",
                "lblFieldValue": "John Bailey…3456"
            }, {
                "lblFieldLabel": "Currency:",
                "lblFieldValue": "EUR(€)"
            }, {
                "lblFieldLabel": "Amount:",
                "lblFieldValue": "€500.00"
            }, {
                "lblFieldLabel": "FX Rate Reference:",
                "lblFieldValue": "FX123456"
            }, {
                "lblFieldLabel": "Exchange Rate:",
                "lblFieldValue": "1.24"
            }, {
                "lblFieldLabel": "Frequency:",
                "lblFieldValue": "Once"
            }, {
                "lblFieldLabel": "Transfer Date:",
                "lblFieldValue": "11/12/2020"
            }, {
                "lblFieldLabel": "Transaction Fee:",
                "lblFieldValue": "$1.24"
            }, {
                "lblFieldLabel": "Broker Fee:",
                "lblFieldValue": "$0.60"
            }, {
                "lblFieldLabel": "Transfer Charges:",
                "lblFieldValue": "$1.03"
            }],
            "groupCells": false,
            "id": "segDetails",
            "isVisible": true,
            "left": "20dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxICAcknowledgeRow",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "f1f1f100",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "10dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxICAcknowledgeRow": "flxICAcknowledgeRow",
                "flxSeparator": "flxSeparator",
                "lblFieldLabel": "lblFieldLabel",
                "lblFieldValue": "lblFieldValue"
            },
            "width": "90.57%",
            "zIndex": 1
        }, controller.args[0], "segDetails"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segDetails"), extendConfig({}, controller.args[2], "segDetails"));
        var flxNotes = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNotes",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxNotes"), extendConfig({}, controller.args[1], "flxNotes"), extendConfig({}, controller.args[2], "flxNotes"));
        flxNotes.setDefaultUnit(kony.flex.DP);
        var flxSeparator2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "91%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator2"), extendConfig({}, controller.args[1], "flxSeparator2"), extendConfig({}, controller.args[2], "flxSeparator2"));
        flxSeparator2.setDefaultUnit(kony.flex.DP);
        flxSeparator2.add();
        var lblNotesLabel = new kony.ui.Label(extendConfig({
            "id": "lblNotesLabel",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl727272ssp40px",
            "text": "Notes:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblNotesLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNotesLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNotesLabel"));
        var lblNotesValue = new kony.ui.Label(extendConfig({
            "id": "lblNotesValue",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl424242SSPLight30px",
            "text": "Transfer money for personal use",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblNotesValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNotesValue"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNotesValue"));
        flxNotes.add(flxSeparator2, lblNotesLabel, lblNotesValue);
        var flxAddress = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAddress",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxAddress"), extendConfig({}, controller.args[1], "flxAddress"), extendConfig({}, controller.args[2], "flxAddress"));
        flxAddress.setDefaultUnit(kony.flex.DP);
        var flxSeparator3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "91%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator3"), extendConfig({}, controller.args[1], "flxSeparator3"), extendConfig({}, controller.args[2], "flxSeparator3"));
        flxSeparator3.setDefaultUnit(kony.flex.DP);
        flxSeparator3.add();
        var lblAddressLabel = new kony.ui.Label(extendConfig({
            "id": "lblAddressLabel",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl727272ssp40px",
            "text": "Beneficiary Address:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddressLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAddressLabel"));
        var lblAddress1 = new kony.ui.Label(extendConfig({
            "id": "lblAddress1",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl424242SSPLight30px",
            "text": "1010, Easy st, hill view Oxford, Nova",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3dp",
            "width": "65%",
            "zIndex": 1
        }, controller.args[0], "lblAddress1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddress1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAddress1"));
        var lblAddress2 = new kony.ui.Label(extendConfig({
            "id": "lblAddress2",
            "isVisible": false,
            "left": "0dp",
            "skin": "sknLbl424242SSPLight30px",
            "text": "scota BOL 1E0",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "1dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddress2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddress2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAddress2"));
        var flxMobile = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMobile",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxMobile"), extendConfig({}, controller.args[1], "flxMobile"), extendConfig({}, controller.args[2], "flxMobile"));
        flxMobile.setDefaultUnit(kony.flex.DP);
        var lblMobileLabel = new kony.ui.Label(extendConfig({
            "id": "lblMobileLabel",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl424242SSPLight30px",
            "text": "Mobile:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMobileLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMobileLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMobileLabel"));
        var lblMobileValue = new kony.ui.Label(extendConfig({
            "id": "lblMobileValue",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknLbl424242SSPLight30px",
            "text": "(+1)-123-1234-1234",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMobileValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMobileValue"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMobileValue"));
        flxMobile.add(lblMobileLabel, lblMobileValue);
        var flxEmail = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxEmail",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxEmail"), extendConfig({}, controller.args[1], "flxEmail"), extendConfig({}, controller.args[2], "flxEmail"));
        flxEmail.setDefaultUnit(kony.flex.DP);
        var lblEmailLabel = new kony.ui.Label(extendConfig({
            "id": "lblEmailLabel",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl424242SSPLight30px",
            "text": "Email:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblEmailLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEmailLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEmailLabel"));
        var lblEmailValue = new kony.ui.Label(extendConfig({
            "id": "lblEmailValue",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknLbl424242SSPLight30px",
            "text": "name@email.com",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblEmailValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEmailValue"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEmailValue"));
        flxEmail.add(lblEmailLabel, lblEmailValue);
        flxAddress.add(flxSeparator3, lblAddressLabel, lblAddress1, lblAddress2, flxMobile, flxEmail);
        var flxSeparator4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "top": "10dp",
            "width": "91%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator4"), extendConfig({}, controller.args[1], "flxSeparator4"), extendConfig({}, controller.args[2], "flxSeparator4"));
        flxSeparator4.setDefaultUnit(kony.flex.DP);
        flxSeparator4.add();
        var flxDocuments = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDocuments",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDocuments"), extendConfig({}, controller.args[1], "flxDocuments"), extendConfig({}, controller.args[2], "flxDocuments"));
        flxDocuments.setDefaultUnit(kony.flex.DP);
        var lblDocuementsLabel = new kony.ui.Label(extendConfig({
            "id": "lblDocuementsLabel",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272ssp40px",
            "text": "Supporting Documents:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDocuementsLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDocuementsLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDocuementsLabel"));
        var segAttachments = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "imgAttachment": "",
                "imgRemove": "",
                "lblAttachment": ""
            }],
            "groupCells": false,
            "id": "segAttachments",
            "isVisible": true,
            "left": "20dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowTemplate": "flxICAttachments",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "25dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxICAttachments": "flxICAttachments",
                "imgAttachment": "imgAttachment",
                "lblAttachment": "lblAttachment"
            },
            "width": "95.24%",
            "zIndex": 1
        }, controller.args[0], "segAttachments"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segAttachments"), extendConfig({}, controller.args[2], "segAttachments"));
        flxDocuments.add(lblDocuementsLabel, segAttachments);
        var flxSeparator5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "top": "10dp",
            "width": "91%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator5"), extendConfig({}, controller.args[1], "flxSeparator5"), extendConfig({}, controller.args[2], "flxSeparator5"));
        flxSeparator5.setDefaultUnit(kony.flex.DP);
        flxSeparator5.add();
        flxDetails.add(flxMessage, flxSeparator1, segDetails, flxNotes, flxAddress, flxSeparator4, flxDocuments, flxSeparator5);
        var flxSuccessButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "20dp",
            "clipBounds": true,
            "id": "flxSuccessButtons",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "reverseLayoutDirection": true,
            "left": "0dp",
            "isModalContainer": false,
            "width": "100.00%",
            "zIndex": 1
        }, controller.args[0], "flxSuccessButtons"), extendConfig({}, controller.args[1], "flxSuccessButtons"), extendConfig({}, controller.args[2], "flxSuccessButtons"));
        flxSuccessButtons.setDefaultUnit(kony.flex.DP);
        var btnSuccessAction4 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "ICBtn003E7534px",
            "height": "50dp",
            "id": "btnSuccessAction4",
            "isVisible": false,
            "skin": "ICBtn003E7534px",
            "text": "Try again",
            "top": "8dp",
            "width": "330dp",
            "zIndex": 1
        }, controller.args[0], "btnSuccessAction4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSuccessAction4"), extendConfig({}, controller.args[2], "btnSuccessAction4"));
        var btnSuccessAction3 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "ICSknBtnffffffRounded003e75SSP26px",
            "height": "50dp",
            "id": "btnSuccessAction3",
            "isVisible": true,
            "skin": "ICSknBtnffffffRounded003e75SSP26px",
            "text": "Transfer Activities",
            "top": "10dp",
            "width": "330dp",
            "zIndex": 1
        }, controller.args[0], "btnSuccessAction3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSuccessAction3"), extendConfig({}, controller.args[2], "btnSuccessAction3"));
        var btnSuccessAction2 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "ICSknBtnffffffRounded003e75SSP26px",
            "height": "50dp",
            "id": "btnSuccessAction2",
            "isVisible": true,
            "skin": "ICSknBtnffffffRounded003e75SSP26px",
            "text": "Save New Payee",
            "top": "13dp",
            "width": "330dp",
            "zIndex": 1
        }, controller.args[0], "btnSuccessAction2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSuccessAction2"), extendConfig({}, controller.args[2], "btnSuccessAction2"));
        var btnSuccessAction1 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "ICBtn003E7534px",
            "height": "50dp",
            "id": "btnSuccessAction1",
            "isVisible": true,
            "skin": "ICSknBtn003E75RoundedffffffSSP26px",
            "text": "New Transfer",
            "top": "0dp",
            "width": "330dp",
            "zIndex": 1
        }, controller.args[0], "btnSuccessAction1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSuccessAction1"), extendConfig({}, controller.args[2], "btnSuccessAction1"));
        var flxSuccessBtnSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "20dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSuccessBtnSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe9e9e9",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSuccessBtnSeparator"), extendConfig({}, controller.args[1], "flxSuccessBtnSeparator"), extendConfig({}, controller.args[2], "flxSuccessBtnSeparator"));
        flxSuccessBtnSeparator.setDefaultUnit(kony.flex.DP);
        flxSuccessBtnSeparator.add();
        flxSuccessButtons.add(btnSuccessAction4, btnSuccessAction3, btnSuccessAction2, btnSuccessAction1, flxSuccessBtnSeparator);
        flxSuccess.add(flxDetails, flxSuccessButtons);
        var flxFail = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "85%",
            "id": "flxFail",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFail"), extendConfig({}, controller.args[1], "flxFail"), extendConfig({}, controller.args[2], "flxFail"));
        flxFail.setDefaultUnit(kony.flex.DP);
        var imgFail = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "70dp",
            "id": "imgFail",
            "isVisible": true,
            "src": "failed.png",
            "top": "100dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "imgFail"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFail"), extendConfig({}, controller.args[2], "imgFail"));
        var lblFailTitle = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblFailTitle",
            "isVisible": true,
            "skin": "sknlbl000000SSPSemiBold24px",
            "text": "Transfer Failed",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "187dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblFailTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFailTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFailTitle"));
        var lblFailDescription = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblFailDescription",
            "isVisible": true,
            "skin": "sknlbl000000SSP26px",
            "text": "Transfer failed because of  server error.",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "240dp",
            "width": "65%",
            "zIndex": 1
        }, controller.args[0], "lblFailDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFailDescription"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFailDescription"));
        var flxFailureButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "0dp",
            "clipBounds": true,
            "id": "flxFailureButtons",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "4dp",
            "isModalContainer": false,
            "top": "80%",
            "width": "100.00%",
            "zIndex": 1
        }, controller.args[0], "flxFailureButtons"), extendConfig({}, controller.args[1], "flxFailureButtons"), extendConfig({}, controller.args[2], "flxFailureButtons"));
        flxFailureButtons.setDefaultUnit(kony.flex.DP);
        var btnFailureAction1 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "50dp",
            "id": "btnFailureAction1",
            "isVisible": true,
            "skin": "ICBtn003E7534px",
            "text": "Try Again",
            "top": "0dp",
            "width": "330dp",
            "zIndex": 1
        }, controller.args[0], "btnFailureAction1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFailureAction1"), extendConfig({}, controller.args[2], "btnFailureAction1"));
        flxFailureButtons.add(btnFailureAction1);
        flxFail.add(imgFail, lblFailTitle, lblFailDescription, flxFailureButtons);
        flxMain.add(flxSuccess, flxFail);
        Acknowledgement.add(flxPopup, flxHeader, flxMain);
        return Acknowledgement;
    }
})