define("UnifiedTransferFlow/flxSameBankAcknowledgement", function() {
    return function(controller) {
        function addWidgetsflxSameBankAcknowledgement() {
            this.setDefaultUnit(kony.flex.DP);
            var flxSameBackAckMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxSameBackAckMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "top": "0",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxSameBackAckMainContainer.setDefaultUnit(kony.flex.DP);
            var flxContents = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxContents",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "ICSknBGFFFFFFNoBorder",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxContents.setDefaultUnit(kony.flex.DP);
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
            Acknowledgement.field1Label = "{i.i18n.konybb.common.referenceId}";
            Acknowledgement.notesLabel = "Payment Details:";
            Acknowledgement.failureTransactionTitle = "Transfer Failed";
            Acknowledgement.amountFormat = "{\"locale\":\"\",\"positiveFormat\":\"{CS}{D}\",\"negativeFormat\":\"-{CS}{D}\",\"fractionDigits\":\"2\"}";
            Acknowledgement.headerLabel = "{i.kony.mb.MM.Acknowledgement}";
            Acknowledgement.sknHeaderBackground = "ICSknFlxBg003e7515px";
            Acknowledgement.failureTransactionIcon = "failed.png";
            Acknowledgement.field1Value = "{\"text\":\"{$.c.referenceId}\",\"fieldType\":\"label\"}";
            Acknowledgement.notesValue = "{ \"text\": \"{$.c.transactionsNotes}\", \"fieldType\": \"label\" }";
            Acknowledgement.failureTransactionDescription = "{$.c.dbpErrMsg}";
            Acknowledgement.dateFormat = "d-m-Y";
            Acknowledgement.transactionStatus = "{$.c.referenceId}";
            Acknowledgement.sknRowSeparator = "sknFlxf1f1f1";
            Acknowledgement.field2Label = "{i.kony.mb.common.from}:";
            Acknowledgement.supportingDocumentsLabel = "{i.i18n.TransfersEur.SupportingDocuments}:";
            Acknowledgement.failureButtonAction1 = "{\"id\":\"btnTryAgain\",\"text\":\"Try Again\",\"skin\":\"ICSknBtn003E75RoundedffffffSSP26px\",\"entitlement_keys\":[],\"entitlement_action\":false}";
            Acknowledgement.backendDateFormat = "Y-m-d";
            Acknowledgement.backButtonIcon = "backbutton_1.png";
            Acknowledgement.payeeStatus = "{$.c.payeeFlow}";
            Acknowledgement.sknFieldLabel = "sknLbl727272ssp40px";
            Acknowledgement.field2Value = "{\"text\":\"{$.c.formattedAccountName}\",\"fieldType\":\"label\"}";
            Acknowledgement.supportingDocumentsValue = "{$.c.successfulUploads}";
            Acknowledgement.currencyCode = "{$.c.transactionCurrency}";
            Acknowledgement.pngImage = "pdf.png";
            Acknowledgement.sknFieldValue = "sknLbl424242SSPLight30px";
            Acknowledgement.field3Label = "{i.kony.mb.common.To}:";
            Acknowledgement.addressLabel = "{i.kony.mb.TransfersEurope.BenAddress}:";
            Acknowledgement.jpegImage = "pdf.png";
            Acknowledgement.sknTransactionSuccessLabel = "sknlbl000000SSPSemiBold24px";
            Acknowledgement.field3Value = "{\"text\":\"{$.c.toAccountName}\",\"fieldType\":\"label\"}";
            Acknowledgement.addressLine1Value = "{ \"text\": \"{$.c.addressLine1}\", \"fieldType\": \"label\" }";
            Acknowledgement.sknTransactionFailureTitle = "sknlbl000000SSPSemiBold24px";
            Acknowledgement.field4Label = "{i.i18n.WireTransfer.TransferCurrency}:";
            Acknowledgement.addressLine2Value = "{ \"text\": \"{$.c.addressLine2}\", \"fieldType\": \"label\" }";
            Acknowledgement.sknTransactionFailureDescription = "ICsknlbl727272SSP24px";
            Acknowledgement.field4Value = "{ \"text\": \"{$.c.currency}\", \"fieldType\": \"label\" }";
            Acknowledgement.mobileLabel = "{i.kony.mb.ProfilePersonalDetails.Mobile}:";
            Acknowledgement.mobileValue = "{ \"text\": \"{$.c.phone}\", \"fieldType\": \"label\" }";
            Acknowledgement.field5Label = "{i.kony.mb.common.Amount}:";
            Acknowledgement.field5Value = "{ \"text\": \"{$.c.formattedTransferAmount}\", \"fieldType\": \"amount\" }";
            Acknowledgement.emailLabel = "{i.i18n.ProfileManagement.EmailId}:";
            Acknowledgement.emailValue = "{ \"text\": \"{$.c.email}\", \"fieldType\": \"label\" }";
            Acknowledgement.field6Label = "{i.kony.i18n.verifyDetails.fxRateReference}:";
            Acknowledgement.field6Value = "{ \"text\": \"{$.c.fxRateReference}\", \"fieldType\": \"label\" }";
            Acknowledgement.cityValue = "{ \"text\": \"{$.c.city}\", \"fieldType\": \"label\" }";
            Acknowledgement.field7Label = "{i.i18n.TransfersEur.ExchangeRate}:";
            Acknowledgement.field7Value = "{ \"text\": \"{$.c.exchangeRate}\", \"fieldType\": \"label\" }";
            Acknowledgement.stateValue = "{ \"text\": \"{$.c.state}\", \"fieldType\": \"label\" }";
            Acknowledgement.field8Label = "{i.kony.mb.transaction.frequency}:";
            Acknowledgement.field8Value = "{ \"text\": \"{$.c.frequencyType}\", \"fieldType\": \"label\" }";
            Acknowledgement.countryValue = "{ \"text\": \"{$.c.country}\", \"fieldType\": \"label\" }";
            Acknowledgement.field9Label = "{i.kony.i18n.verifyDetails.sendOn}:";
            Acknowledgement.field9Value = "{ \"text\": \"{$.c.sendOnUI}\", \"fieldType\": \"label\" }";
            Acknowledgement.postalCodeValue = "{ \"text\": \"{$.c.zipcode}\", \"fieldType\": \"label\" }";
            Acknowledgement.field10Label = "{i.kony.mb.common.StartDate}:";
            Acknowledgement.field10Value = "{ \"text\": \"{$.c.startDateUI}\", \"fieldType\": \"date\" }";
            Acknowledgement.field11Label = "{i.i18n.transfers.end_date}:";
            Acknowledgement.field11Value = "{ \"text\": \"{$.c.endDateUI}\", \"fieldType\": \"date\"}";
            Acknowledgement.field12Label = "{i.kony.i18n.verifyDetails.accountNumber}";
            Acknowledgement.field12Value = "{ \"text\": \"{$.c.accountNumber}\", \"fieldType\": \"label\" }";
            Acknowledgement.field13Label = "Transaction Fee:";
            Acknowledgement.field13Value = "{\"text\":\"{$.c.transactionFee}\",\"fieldType\":\"label\"}";
            Acknowledgement.field14Label = "Broker Fee:";
            Acknowledgement.field14Value = "{\"text\":\"{$.c.brokerFee}\",\"fieldType\":\"label\"}";
            Acknowledgement.field15Label = "Transfer Charges:";
            Acknowledgement.field15Value = "{\"text\":\"{$.c.transferCharges}\",\"fieldType\":\"label\"}";
            Acknowledgement.field16Label = "{i.kony.i18n.verifyDetails.exchangeRate}:";
            Acknowledgement.field16Value = "{\"text\":\"{$.c.exchangeRate}\",\"fieldType\":\"label\"}";
            Acknowledgement.field17Label = "{i.kony.i18n.verifyDetails.totalDebitAmount}:";
            Acknowledgement.field17Value = "{\"text\":\"{$.c.totalAmount}\",\"fieldType\":\"label\"}";
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
            Acknowledgement.field23Label = "Service charge:";
            Acknowledgement.field23Value = "{\"text\":\"{$.c.serviceCharge}\",\"fieldType\":\"label\"}";
            Acknowledgement.field24Label = "{i.kony.i18n.verifyDetails.dueDate}:";
            Acknowledgement.field24Value = "{\"text\":\"{$.c.dueDate}\",\"fieldType\":\"label\"}";
            Acknowledgement.successButtonAction1 = "{\"id\":\"NewTransfer\",\"text\":\"{i.kony.mb.MM.NewTransfer}\",\"skin\":\"ICSknBtn003E75RoundedffffffSSP26px\",\"entitlement_keys\":[],\"entitlement_action\":false}";
            Acknowledgement.successButtonAction2 = "{\"id\":\"SaveNewPayee\",\"text\":\"Save New Payee\",\"skin\":\"ICSknBtnffffffRounded003e75SSP26px\",\"entitlement_keys\":[],\"entitlement_action\":false}";
            Acknowledgement.successButtonAction3 = "{\"id\":\"TransferActivities\",\"text\":\"{i.kony.mb.MM.transferActivity}\",\"skin\":\"ICSknBtnffffffRounded003e75SSP26px\",\"entitlement_keys\":[],\"entitlement_action\":false}";
            Acknowledgement.successButtonAction4 = "";
            Acknowledgement.successTransactionTitle = "Your transaction has been completed successfully";
            flxContents.add(Acknowledgement);
            flxSameBackAckMainContainer.add(flxContents);
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
            this.add(flxSameBackAckMainContainer, flxBlue);
        };
        return [{
            "addWidgets": addWidgetsflxSameBankAcknowledgement,
            "enabledForIdleTimeout": false,
            "id": "flxSameBankAcknowledgement",
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
            "onDeviceBack": controller.AS_Form_e2b1541a350849a3aea8c148573ddef2,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "ICSknTitleBar003e75Bg",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});