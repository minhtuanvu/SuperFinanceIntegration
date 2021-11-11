define("TransferModuleEurope/frmTransfersDetailsEurope", function() {
    return function(controller) {
        function addWidgetsfrmTransfersDetailsEurope() {
            this.setDefaultUnit(kony.flex.DP);
            var flxTransfersDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxTransfersDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransfersDetails.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "customHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "height": "25dp",
                        "src": "info.png",
                        "width": "25dp"
                    },
                    "lblLocateUs": {
                        "centerX": "50%",
                        "left": "0%",
                        "text": "Transaction Details",
                        "width": "45%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var DetailsMain = new com.temenos.infinity.DetailsComponent.DetailsMain({
                "height": "100%",
                "id": "DetailsMain",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "ICSknFlxBox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "DetailsMain": {
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
            DetailsMain.serviceName1 = "TransactionObjects";
            DetailsMain.field1Label = "{i.i18n.wealth.amount}";
            DetailsMain.button1 = "{\"mapping\":\"{$.c.serviceName}\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\":{\"statusMapping\":\"{$.c.statusDescription}\",\"Pending\":{\"title\":\"{i.kony.mb.transaction.repeatTransaction}\",\"buttonId\":\"{i.kony.mb.transaction.repeatTransaction}\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtn003E75FFFFFF15px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]},\"Completed\":{\"title\":\"{i.kony.mb.transaction.repeatTransaction}\",\"buttonId\":\"{i.kony.mb.transaction.repeatTransaction}\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtn003E75FFFFFF15px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]},\"Scheduled\":{\"title\":\"{i.kony.mb.transaction.repeatTransaction}\",\"buttonId\":\"{i.kony.mb.transaction.repeatTransaction}\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtn003E75FFFFFF15px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]},\"Failed\":{\"title\":\"{i.kony.mb.transaction.repeatTransaction}\",\"buttonId\":\"{i.kony.mb.transaction.repeatTransaction}\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtn003E75FFFFFF15px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]},\"Awaiting Funds\":{\"title\":\"{i.kony.mb.Transfers.cancelTransfer}\",\"buttonId\":\"Cancel1\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]}},\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\":{\"statusMapping\":\"{$.c.statusDescription}\",\"Pending\":{\"title\":\"{i.kony.mb.transaction.repeatTransaction}\",\"buttonId\":\"{i.kony.mb.transaction.repeatTransaction}\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtn003E75FFFFFF15px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]},\"Completed\":{\"title\":\"{i.kony.mb.transaction.repeatTransaction}\",\"buttonId\":\"Repeat Transaction\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtn003E75FFFFFF15px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]},\"Scheduled\":{\"title\":\"{i.kony.mb.transaction.repeatTransaction}\",\"buttonId\":\"{i.kony.mb.transaction.repeatTransaction}\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtn003E75FFFFFF15px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]},\"Failed\":{\"title\":\"{i.kony.mb.transaction.repeatTransaction}\",\"buttonId\":\"{i.kony.mb.transaction.repeatTransaction}\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtn003E75FFFFFF15px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]},\"Awaiting Funds\":{\"title\":\"{i.kony.mb.Transfers.cancelTransfer}\",\"buttonId\":\"Cancel1\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]}},\"INTRA_BANK_FUND_TRANSFER_CREATE\":{\"statusMapping\":\"{$.c.statusDescription}\",\"Pending\":{\"title\":\"{i.kony.mb.transaction.repeatTransaction}\",\"buttonId\":\"{i.kony.mb.transaction.repeatTransaction}\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtn003E75FFFFFF15px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]},\"Completed\":{\"title\":\"{i.kony.mb.transaction.repeatTransaction}\",\"buttonId\":\"Repeat Transaction\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtn003E75FFFFFF15px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]},\"Scheduled\":{\"title\":\"{i.kony.mb.transaction.repeatTransaction}\",\"buttonId\":\"{i.kony.mb.transaction.repeatTransaction}\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtn003E75FFFFFF15px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]},\"Failed\":{\"title\":\"{i.kony.mb.transaction.repeatTransaction}\",\"buttonId\":\"{i.kony.mb.transaction.repeatTransaction}\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtn003E75FFFFFF15px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]},\"Awaiting Funds\":{\"title\":\"{i.kony.mb.Transfers.cancelTransfer}\",\"buttonId\":\"Cancel1\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]}},\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\":{\"statusMapping\":\"{$.c.statusDescription}\",\"Pending\":{\"title\":\"{i.kony.mb.transaction.repeatTransaction}\",\"buttonId\":\"{i.kony.mb.transaction.repeatTransaction}\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtn003E75FFFFFF15px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]},\"Completed\":{\"title\":\"{i.kony.mb.transaction.repeatTransaction}\",\"buttonId\":\"Repeat Transaction\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtn003E75FFFFFF15px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]},\"Scheduled\":{\"title\":\"{i.kony.mb.transaction.repeatTransaction}\",\"buttonId\":\"{i.kony.mb.transaction.repeatTransaction}\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtn003E75FFFFFF15px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]},\"Failed\":{\"title\":\"{i.kony.mb.transaction.repeatTransaction}\",\"buttonId\":\"{i.kony.mb.transaction.repeatTransaction}\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtn003E75FFFFFF15px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]},\"Awaiting Funds\":{\"title\":\"{i.kony.mb.Transfers.cancelTransfer}\",\"buttonId\":\"Cancel1\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]}}}";
            DetailsMain.labelSkin = "{\"skin\":\"ICSknlblSSP72727215px\"}";
            DetailsMain.amountFormat = "{\"locale\":\"\",\"positiveFormat\":\"{CS}{D}\",\"negativeFormat\":\"-({CS}{D})\",\"fractionDigits\":\"2\"}";
            DetailsMain.alertText1 = "{i.kony.mb.AreyousuredoyouwanttocancelTransaction?}";
            DetailsMain.iconVisibility = true;
            DetailsMain.retailIcon = "{\"source\":\"personalaccount.png\",\"userIcon\":\"{$.c.isBusinessAccount}\"}";
            DetailsMain.objectName1 = "Transaction";
            DetailsMain.field1Value = "{$.c.amount}";
            DetailsMain.valueSkin = "{\"skin\":\"ICSknlblSSP42424215px\"}";
            DetailsMain.currencyCode = "{$.c.transactionCurrency}";
            DetailsMain.combinedUserIcon = "{\"source\":\"businessaccount.png\",\"userIcon\":\"{$.c.isBusinessAccount}\"}";
            DetailsMain.operationName1 = "{\"mapping\":\"{$.c.serviceName}\",\"INTRA_BANK_FUND_TRANSFER_CREATE\":\"IntraBankAccFundTransferDelete\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\":\"InterBankFundTransferDelete\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\":\"InternationalFundTransferDelete\",\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\":\"TransferToOwnAccountsDelete\"}";
            DetailsMain.field1Type = "Amount";
            DetailsMain.button2 = "{\"restrictActions\":\"{$.c.pendingApproval}\",\"mapping\":\"{$.c.serviceName}\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\":{\"statusMapping\":\"{$.c.statusDescription}\",\"Pending\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]},\"Completed\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]},\"Scheduled\":{\"title\":\"{i.kony.mb.Transfers.cancelTransfer}\",\"buttonId\":\"Cancel1\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]},\"Failed\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]}},\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\":{\"statusMapping\":\"{$.c.statusDescription}\",\"Pending\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]},\"Completed\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]},\"Scheduled\":{\"title\":\"{i.kony.mb.Transfers.cancelTransfer}\",\"buttonId\":\"Cancel1\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]},\"Failed\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]}},\"INTRA_BANK_FUND_TRANSFER_CREATE\":{\"statusMapping\":\"{$.c.statusDescription}\",\"Pending\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]},\"Completed\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]},\"Scheduled\":{\"title\":\"{i.kony.mb.Transfers.cancelTransfer}\",\"buttonId\":\"Cancel1\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]},\"Failed\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]}},\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\":{\"statusMapping\":\"{$.c.statusDescription}\",\"Pending\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]},\"Completed\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]},\"Scheduled\":{\"title\":\"{i.kony.mb.Transfers.cancelTransfer}\",\"buttonId\":\"Cancel1\",\"visibilityMapping\":\"\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"P2P_CREATE\"]},\"Failed\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]}}}";
            DetailsMain.amountSkin = "{\"skin\":\"ICSknlblSSP4176A418px\"}";
            DetailsMain.backendDateFormat = "{\"format\" : \"Y-m-d\"}";
            DetailsMain.dateFormat = "{\"format\" : \"m/d/Y\"}";
            DetailsMain.criteria1 = "{\"frequencyType\":\"{$.c.frequencyType}\",\"transactionId\":\"{$.c.transactionId}\",\"status\":\"{$.rootPath.statusDescription}\"}";
            DetailsMain.statusLabel = "{$.c.statusDescription}";
            DetailsMain.alertText2 = "";
            DetailsMain.accountNumberFormat = "{\"format\" : \"\\\\d(?=\\\\d{4})\", \"replaceCharacter\" : \".\",  \"modifiers\" : \"g\"}";
            DetailsMain.yesLabel = "{i.kony.mb.common.AlertYes}";
            DetailsMain.button3 = "{\"mapping\":\"{$.c.serviceName}\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\":{\"statusMapping\":\"{$.c.statusDescription}\",\"Scheduled\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]},\"Awaiting Funds\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]},\"Cancelled\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]}},\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\":{\"statusMapping\":\"{$.c.statusDescription}\",\"Scheduled\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]},\"Awaiting Funds\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]},\"Cancelled\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]}},\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\":{\"statusMapping\":\"{$.c.statusDescription}\",\"Scheduled\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]},\"Awaiting Funds\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]},\"Cancelled\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]}},\"INTRA_BANK_FUND_TRANSFER_CREATE\":{\"statusMapping\":\"{$.c.statusDescription}\",\"Scheduled\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]},\"Awaiting Funds\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]},\"Cancelled\":{\"title\":\"{i.kony.mb.Transfers.viewAttachment}\",\"buttonId\":\"{i.kony.mb.Transfers.viewAttachment}\",\"visibilityMapping\":\"{$.c.fileNames}\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[]}}}";
            DetailsMain.statusImageFormat = "{\"Pending\":\"orange.png\",\"Completed\":\"green.png\",\"Scheduled\":\"grey.png\",\"Awaiting Funds\":\"orange.png\",\"Failed\":\"red.png\",\"Cancelled\":\"grey.png\"}";
            DetailsMain.field2Label = "{i.i18n.savingspot.toAck}";
            DetailsMain.noLabel = "{i.kony.mb.common.AlertNo}";
            DetailsMain.separatorSkin = "{\"skin\":\"ICSknflxE3E3E3\"}";
            DetailsMain.accNoLengthDisplay = "4";
            DetailsMain.field2Value = "{\"accountNumber\":\"{$.c.toAccountNumber}\",\"nickName\":\"{$.c.toAccountName}\"}";
            DetailsMain.button4 = "";
            DetailsMain.serviceName2 = "";
            DetailsMain.field2Type = "AccountNumberwithNickName";
            DetailsMain.objectName2 = "";
            DetailsMain.field3Label = "{i.i18n.savingspot.fromAck}";
            DetailsMain.button5 = "";
            DetailsMain.operationName2 = "";
            DetailsMain.field3Value = "{\"accountNumber\":\"{$.c.fromAccountNumber}\",\"nickName\":\"{$.c.fromAccountName}\"}";
            DetailsMain.criteria2 = "";
            DetailsMain.field3Type = "AccountNumberwithNickNameIcon";
            DetailsMain.field4Label = "{i.kony.mb.TransfersEurope.ScheduledDateColon}";
            DetailsMain.field4Value = "{$.c.scheduledDate}";
            DetailsMain.serviceName3 = "";
            DetailsMain.field4Type = "Date";
            DetailsMain.objectName3 = "";
            DetailsMain.field5Label = "{i.kony.mb.common.frequencyColon}";
            DetailsMain.operationName3 = "";
            DetailsMain.field5Value = "{$.c.frequencyType}";
            DetailsMain.criteria3 = "";
            DetailsMain.field5Type = "Label";
            DetailsMain.dataAvailability = "Service Call by Form";
            DetailsMain.field6Label = "{i.kony.mb.TransfersEurope.PaymentMethodColon}";
            DetailsMain.serviceIdentifier = "";
            DetailsMain.field6Value = "{\"mapping\":\"{$.c.serviceName}\",\"UIMapping\":{\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\":\"International\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\":\"Domestic\",\"INTRA_BANK_FUND_TRANSFER_CREATE\":\"Within Bank\"}}";
            DetailsMain.field6Type = "Label";
            DetailsMain.field7Label = "{i.kony.mb.common.refNumberColon}";
            DetailsMain.field7Value = "{$.c.transactionId}";
            DetailsMain.field7Type = "Label";
            DetailsMain.field8Label = "{i.kony.mb.transfersEurope.referenceColon}";
            DetailsMain.field8Value = "{$.c.description}";
            DetailsMain.field8Type = "Label";
            DetailsMain.field9Label = "";
            DetailsMain.field9Value = "";
            DetailsMain.field9Type = "";
            DetailsMain.field10Label = "";
            DetailsMain.field10Value = "";
            DetailsMain.field10Type = "";
            DetailsMain.field11Label = "";
            DetailsMain.field11Value = "";
            DetailsMain.field11Type = "";
            DetailsMain.field12Label = "";
            DetailsMain.field12Value = "";
            DetailsMain.field12Type = "";
            flxDetails.add(DetailsMain);
            var flxPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10.50%",
                "id": "flxPopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf54b5e",
                "top": "0dp",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxPopup.setDefaultUnit(kony.flex.DP);
            var customPopup = new com.kmb.common.customPopup({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "customPopup",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "imgPopup": {
                        "src": "imagedrag.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            flxTransfersDetails.add(flxHeader, flxDetails, flxPopup);
            this.add(flxTransfersDetails);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_d6de241edd424def97c193ec8a7f4217,
            "metaData": {
                "image": "backbutton.png"
            },
            "id": "LBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmTransfersDetailsEurope,
            "enabledForIdleTimeout": true,
            "id": "frmTransfersDetailsEurope",
            "init": controller.AS_Form_f118a073b0f8439a9258dd70cc026568,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_eccc1a1d85444ee2bd6375fbfa25ff29(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.TransactionDetails")
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarAttributes": {
                "barStyle": constants.BAR_STYLE_DEAFULT,
                "navigationBarHidden": false,
                "translucent": false,
                "tintColor": "ffffff00",
                "hidesBackButton": true,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [
                    LBarBtnItem0
                ],
                "rightBarButtonItems": []
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});