define("UnifiedTransferFlow/frmNewPayee", function() {
    return function(controller) {
        function addWidgetsfrmNewPayee() {
            this.setDefaultUnit(kony.flex.DP);
            var flxSaveNewPayee = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "101.44%",
                "horizontalScrollIndicator": true,
                "id": "flxSaveNewPayee",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "top": "-10dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxSaveNewPayee.setDefaultUnit(kony.flex.DP);
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
            var saveNewPayee = new com.temenos.infinityComponents.saveNewPayee({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "saveNewPayee",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "saveNewPayee": {
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
            saveNewPayee.objectServiceName = "PayeeObjects";
            saveNewPayee.sknHeaderLabel = "ICSknHeaderFFF";
            saveNewPayee.successAcknowledgementTitle = "Saved Successfully";
            saveNewPayee.failureAcknowledgementTitle = "Save Payee Failed";
            saveNewPayee.successImage = "success.png";
            saveNewPayee.headerLabel = "Payee Nickname";
            saveNewPayee.nicknameDescription = "Enter the payee nickname";
            saveNewPayee.operationName = "createExternalPayee";
            saveNewPayee.sknHeaderBackground = "ICSknFlxBg003e7515px";
            saveNewPayee.successAcknowledgementDescription = "Payee nickname saved successfully for future transactions.";
            saveNewPayee.failureAcknowledgementDescription = "{$.c.dbpErrMsg}";
            saveNewPayee.failureImage = "failed.png";
            saveNewPayee.nicknameTextboxValue = "{\"text\":\"{$.c.payeeNickname}\",\"placeHolder\":\"Enter Payee Nickname\",\"inputMode\":\"ANY\",\"min\":\"3\",\"max\":\"34\"}";
            saveNewPayee.payeeStatus = "";
            saveNewPayee.objectName = "Recipients";
            saveNewPayee.sknNicknameDescription = "ICSknLbl42424234px";
            saveNewPayee.backbuttonIcon = "backbutton.png";
            saveNewPayee.successButtonAction1 = "{\"id\":\"NewTransfer\",\"text\":\"{i.kony.mb.MM.NewTransfer}\",\"skin\":\"ICSknBtn003E75RoundedffffffSSP26px\",\"entitlement_keys\":[],\"entitlement_action\":false}";
            saveNewPayee.failureButtonAction1 = "{\"id\":\"TryAgain\",\"text\":\"Try Again\",\"skin\":\"ICSknBtn003E75RoundedffffffSSP26px\",\"entitlement_keys\":[],\"entitlement_action\":false}";
            saveNewPayee.nicknameButton = "{\"id\":\"Continue\",\"text\":\"Continue\",\"skin\":\"sknBtnOnBoardingInactive\",\"entitlement_keys\":[],\"entitlement_action\":false}";
            saveNewPayee.serviceResponseIdentifier = "S1";
            saveNewPayee.sknNicknameDescriptionBackground = "sknFlxffffff";
            saveNewPayee.successButtonAction2 = "{\"id\":\"TransferActivities\",\"text\":\"{i.kony.mb.MM.transferActivity}\",\"skin\":\"ICSknBtnffffffRounded003e75SSP26px\",\"entitlement_keys\":[],\"entitlement_action\":false}";
            saveNewPayee.sknRowSeparator = "sknFlxSeparatora6a6a6";
            saveNewPayee.criteria = "{\"accountNumber\":\"{$.c.accountNumber}\",\"IBAN\":\"{$.c.IBAN}\",\"beneficiaryName\":\"{$.c.beneficiaryName}\",\"bankName\":\"{$.c.toBankName}\",\"nickName\":\"{$.c.nickName}\",\"addressLine1\":\"{$.c.addressLine1}\",\"addressLine2\":\"{$.c.addressLine2}\",\"country\":\"{$.c.country}\",\"city\":\"{$.c.city}\",\"state\":\"{$.c.state}\",\"zipcode\":\"{$.c.zipcode}\",\"phone\":\"{$.c.phone}\",\"email\":\"{$.c.email}\",\"swiftCode\":\"{$.c.swiftCode}\",\"isVerified\":\"true\",\"isSameBankAccount\":\"{$.c.isSameBankAccount}\",\"isInternationalAccount\":\"{$.c.isInternationalAccount}\"}";
            saveNewPayee.successButtonAction3 = "";
            saveNewPayee.sknNicknameTextbox = "ICSknTxtE3E3E31px34px";
            saveNewPayee.successButtonAction4 = "";
            saveNewPayee.sknSuccessAcknowledgementTitle = "sknlbl000000SSPSemiBold24px";
            saveNewPayee.sknFailureAcknowledgementTitle = "sknlbl000000SSPSemiBold24px";
            saveNewPayee.sknSuccessAcknowledgementDescription = "ICsknlbl727272SSP24px";
            saveNewPayee.sknFailureAcknowledgementDescription = "ICsknlbl727272SSP24px";
            saveNewPayee.sknEnabledButton = "ICSknBtn003E75RoundedffffffSSP26px";
            saveNewPayee.sknDisabledButton = "sknBtna0a0a0SSPReg26px";
            flxContents.add(saveNewPayee);
            flxSaveNewPayee.add(flxContents);
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
                "top": -20,
                "width": "100%"
            }, {}, {});
            flxBlue.setDefaultUnit(kony.flex.DP);
            flxBlue.add();
            this.add(flxSaveNewPayee, flxBlue);
        };
        return [{
            "addWidgets": addWidgetsfrmNewPayee,
            "enabledForIdleTimeout": false,
            "id": "frmNewPayee",
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
            "onDeviceBack": controller.AS_Form_f61ffb9c2ea44c309507da7464a7d89c,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "ICSknTitleBar003e75Bg",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});