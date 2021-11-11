define("UnifiedTransferFlow/flxInternationalNewAccountAck", function() {
    return function(controller) {
        function addWidgetsflxInternationalNewAccountAck() {
            this.setDefaultUnit(kony.flex.DP);
            var flxInternationalAckMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxInternationalAckMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "top": "0",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxInternationalAckMainContainer.setDefaultUnit(kony.flex.DP);
            var flxContent = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxContent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "ICSknBGFFFFFFNoBorder",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContent.setDefaultUnit(kony.flex.DP);
            var Acknowledgement = new com.temenos.infinityComponents.Acknowledgement({
                "height": "100%",
                "id": "Acknowledgement",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "Acknowledgement": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
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
            Acknowledgement.sknHeaderLabel = "ICSknHeaderFFF";
            Acknowledgement.successTransactionIcon = "success.png";
            Acknowledgement.field1Label = "{i.i18n.konybb.common.referenceId}:";
            Acknowledgement.notesLabel = "";
            Acknowledgement.failureTransactionTitle = "Add Payee Failed";
            Acknowledgement.amountFormat = "{\"locale\":\"\",\"positiveFormat\":\"{CS}{D}\",\"negativeFormat\":\"-{CS}{D}\",\"fractionDigits\":\"2\"}";
            Acknowledgement.headerLabel = "{i.kony.mb.MM.Acknowledgement}";
            Acknowledgement.sknHeaderBackground = "ICSknFlxBg003e7515px";
            Acknowledgement.failureTransactionIcon = "failed.png";
            Acknowledgement.field1Value = "{\"text\":\"{$.c.Id}\",\"fieldType\":\"label\"}";
            Acknowledgement.notesValue = "";
            Acknowledgement.failureTransactionDescription = "{$.c.dbpErrMsg}";
            Acknowledgement.dateFormat = "d-m-Y";
            Acknowledgement.transactionStatus = "{$.c.Id}";
            Acknowledgement.sknRowSeparator = "sknFlxf1f1f1";
            Acknowledgement.field2Label = "{i.i18n.verifyDetails.payeeName}:";
            Acknowledgement.supportingDocumentsLabel = "";
            Acknowledgement.failureButtonAction1 = "{\"id\":\"btnTryAgain\",\"text\":\"Try Again\",\"skin\":\"ICSknBtn003E75RoundedffffffSSP26px\",\"entitlement_keys\":[],\"entitlement_action\":false}";
            Acknowledgement.backendDateFormat = "Y-m-d";
            Acknowledgement.backButtonIcon = "backbutton_1.png";
            Acknowledgement.payeeStatus = "{$.c.payeeFlow}";
            Acknowledgement.sknFieldLabel = "ICSknLbl72727245px";
            Acknowledgement.field2Value = "{\"text\":\"{$.c.payeeName}\",\"fieldType\":\"label\"}";
            Acknowledgement.supportingDocumentsValue = "";
            Acknowledgement.currencyCode = "{$.c.transactionCurrency}";
            Acknowledgement.pngImage = "pdf.png";
            Acknowledgement.sknFieldValue = "ICSknLbl42424245PX";
            Acknowledgement.field3Label = "{i.kony.mb.externalAccounts.accType}:";
            Acknowledgement.addressLabel = "{\"text\":\"{$.c.payeeAddressLabel}\",\"fieldType\":\"label\"}";
            Acknowledgement.jpegImage = "pdf.png";
            Acknowledgement.sknTransactionSuccessLabel = "sknlbl000000SSPSemiBold24px";
            Acknowledgement.field3Value = "{ \"text\": \"{$.c.accountType}\", \"fieldType\": \"label\" }";
            Acknowledgement.addressLine1Value = "{ \"text\": \"{$.c.addressLine1}\", \"fieldType\": \"label\" }";
            Acknowledgement.sknTransactionFailureTitle = "sknlbl000000SSPSemiBold24px";
            Acknowledgement.field4Label = "{i.kony.i18n.verifyDetails.bicSwift}";
            Acknowledgement.addressLine2Value = "{ \"text\": \"{$.c.addressLine2}\", \"fieldType\": \"label\" }";
            Acknowledgement.sknTransactionFailureDescription = "ICsknlbl727272SSP24px";
            Acknowledgement.field4Value = "{ \"text\": \"{$.c.swiftCode}\", \"fieldType\": \"label\" }";
            Acknowledgement.mobileLabel = "{i.kony.mb.ProfilePersonalDetails.Mobile}:";
            Acknowledgement.mobileValue = "{ \"text\": \"{$.c.phone}\", \"fieldType\": \"label\" }";
            Acknowledgement.field5Label = "{i.kony.i18n.verifyDetails.clearingCode1}";
            Acknowledgement.field5Value = "{ \"text\": \"{$.c.clearingCode1}\", \"fieldType\": \"amount\" }";
            Acknowledgement.emailLabel = "{i.i18n.ProfileManagement.EmailId}:";
            Acknowledgement.emailValue = "{ \"text\": \"{$.c.email}\", \"fieldType\": \"label\" }";
            Acknowledgement.field6Label = "{i.kony.i18n.verifyDetails.accountNumber}";
            Acknowledgement.field6Value = "{\"text\":\"{$.c.accountNumber}\",\"fieldType\":\"label\"}";
            Acknowledgement.cityValue = "{ \"text\": \"{$.c.city}\", \"fieldType\": \"label\" }";
            Acknowledgement.field7Label = "{i.i18n.verifyDetails.accountNicknameOptional}:";
            Acknowledgement.field7Value = "{ \"text\": \"{$.c.payeeNickname}\", \"fieldType\": \"label\" }";
            Acknowledgement.stateValue = "{ \"text\": \"{$.c.state}\", \"fieldType\": \"label\" }";
            Acknowledgement.field8Label = "{i.i18n.verifyDetails.phoneNumberOptional}:";
            Acknowledgement.field8Value = "{ \"text\": \"{$.c.phoneNumber}\", \"fieldType\": \"label\" }";
            Acknowledgement.countryValue = "{ \"text\": \"{$.c.country}\", \"fieldType\": \"label\" }";
            Acknowledgement.field9Label = "{i.i18n.verifyDetails.emailAddressOptional}:";
            Acknowledgement.field9Value = "{ \"text\": \"{$.c.emailAddress}\", \"fieldType\": \"label\" }";
            Acknowledgement.postalCodeValue = "{ \"text\": \"{$.c.zipcode}\", \"fieldType\": \"label\" }";
            Acknowledgement.field10Label = "{i.i18n.verifyDetails.linkedWith}:";
            Acknowledgement.field10Value = "{ \"text\": \"{$.c.linkedWith}\", \"fieldType\": \"label\" }";
            Acknowledgement.field11Label = "{i.i18n.verifyDetails.bankName}:";
            Acknowledgement.field11Value = "{ \"text\": \"{$.c.bankName}\", \"fieldType\": \"label\" }";
            Acknowledgement.field12Label = "";
            Acknowledgement.field12Value = "";
            Acknowledgement.field13Label = "";
            Acknowledgement.field13Value = "";
            Acknowledgement.field14Label = "";
            Acknowledgement.field14Value = "";
            Acknowledgement.field15Label = "";
            Acknowledgement.field15Value = "";
            Acknowledgement.field16Label = "";
            Acknowledgement.field16Value = "";
            Acknowledgement.field17Label = "";
            Acknowledgement.field17Value = "";
            Acknowledgement.field18Label = "";
            Acknowledgement.field18Value = "";
            Acknowledgement.field19Label = "";
            Acknowledgement.field19Value = "";
            Acknowledgement.field20Label = "";
            Acknowledgement.field20Value = "";
            Acknowledgement.field21Label = "";
            Acknowledgement.field21Value = "";
            Acknowledgement.field22Label = "";
            Acknowledgement.field22Value = "";
            Acknowledgement.field23Label = "";
            Acknowledgement.field23Value = "";
            Acknowledgement.field24Label = "";
            Acknowledgement.field24Value = "";
            Acknowledgement.successButtonAction1 = "{\"id\":\"NewTransfer\",\"text\":\"{i.kony.mb.MM.NewTransfer}\",\"skin\":\"ICSknBtn003E75RoundedffffffSSP26px\",\"entitlement_keys\":[],\"entitlement_action\":false}";
            Acknowledgement.successButtonAction2 = "{\"id\":\"Accounts\",\"text\":\"Accounts\",\"skin\":\"ICSknBtnffffffRounded003e75SSP26px\",\"entitlement_keys\":[],\"entitlement_action\":false}";
            Acknowledgement.successButtonAction3 = "";
            Acknowledgement.successButtonAction4 = "";
            Acknowledgement.successTransactionTitle = "You have added the new account successfully";
            flxContent.add(Acknowledgement);
            flxInternationalAckMainContainer.add(flxContent);
            var flxBlue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70%",
                "id": "flxBlue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "ICSknFlxBg003e7515px",
                "top": "-20%",
                "width": "100%"
            }, {}, {});
            flxBlue.setDefaultUnit(kony.flex.DP);
            flxBlue.add();
            this.add(flxInternationalAckMainContainer, flxBlue);
        };
        return [{
            "addWidgets": addWidgetsflxInternationalNewAccountAck,
            "enabledForIdleTimeout": false,
            "id": "flxInternationalNewAccountAck",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "onDeviceBack": controller.AS_Form_e04d2b46daca491c86042155d8163678,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "ICSknTitleBar003e75Bg",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});