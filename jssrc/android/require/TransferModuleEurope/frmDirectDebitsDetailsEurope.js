define("TransferModuleEurope/frmDirectDebitsDetailsEurope", function() {
    return function(controller) {
        function addWidgetsfrmDirectDebitsDetailsEurope() {
            this.setDefaultUnit(kony.flex.DP);
            var flxDirectDebitsDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDirectDebitsDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDirectDebitsDetails.setDefaultUnit(kony.flex.DP);
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
                        "text": kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.TransactionDetails"),
                        "left": "0%",
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
                "top": "56dp",
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
            DetailsMain.serviceName1 = "RBObjects";
            DetailsMain.field1Label = "Beneficiary Name:";
            DetailsMain.button1 = "{\"title\":\"{i.i18n.DirectDebit.SkipNextPayment}\",\"buttonId\":\"Cancel2\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[\"SKIP_NEXT_PAYMENT\"]}";
            DetailsMain.labelSkin = "{\"skin\":\"ICSknlblSSP72727215px\"}";
            DetailsMain.amountFormat = "{\"locale\":\"\",\"positiveFormat\":\"{CS}{D}\",\"negativeFormat\":\"-({CS}{D})\",\"fractionDigits\":\"2\"}";
            DetailsMain.alertText1 = "{i.kony.mb.directDebits.alertCancel}";
            DetailsMain.iconVisibility = true;
            DetailsMain.retailIcon = "{\"source\":\"personalaccount.png\",\"userIcon\":\"{$.c.isBusinessAccount}\"}";
            DetailsMain.objectName1 = "Transactions";
            DetailsMain.field1Value = "{$.c.beneficiaryName}";
            DetailsMain.valueSkin = "{\"skin\":\"ICSknlblSSP42424215px\"}";
            DetailsMain.currencyCode = "";
            DetailsMain.combinedUserIcon = "{\"source\":\"businessaccount.png\",\"userIcon\":\"{$.c.isBusinessAccount}\"}";
            DetailsMain.operationName1 = "cancelDirectDebit";
            DetailsMain.field1Type = "Label";
            DetailsMain.button2 = "{\"title\":\"{i.kony.mb.DirectDebit.cancelDebit}\",\"buttonId\":\"Cancel1\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[\"DIRECT_DEBIT_CANCEL\"]}";
            DetailsMain.amountSkin = "{\"skin\":\"ICSknlblSSP4176A418px\"}";
            DetailsMain.backendDateFormat = "{\"format\" : \"Y-m-d\"}";
            DetailsMain.dateFormat = "{\"format\" : \"m/d/Y\"}";
            DetailsMain.criteria1 = "{\"directDebitId\": \"{$.c.directDebitId}\"}";
            DetailsMain.statusLabel = "";
            DetailsMain.alertText2 = "{i.i18n.DirectDebit.SkipAlert}";
            DetailsMain.accountNumberFormat = "{\"format\" : \"\\\\d(?=\\\\d{4})\", \"replaceCharacter\" : \".\",  \"modifiers\" : \"g\"}";
            DetailsMain.yesLabel = "{i.kony.mb.common.AlertYes}";
            DetailsMain.button3 = "";
            DetailsMain.statusImageFormat = "";
            DetailsMain.field2Label = "{i.kony.mb.common.FromAccountColon}";
            DetailsMain.noLabel = "{i.kony.mb.common.AlertNo}";
            DetailsMain.separatorSkin = "{\"skin\":\"ICSknflxE3E3E3\"}";
            DetailsMain.accNoLengthDisplay = "4";
            DetailsMain.field2Value = "{\"accountNumber\":\"{$.c.accountID}\",\"nickName\":\"{$.c.fromAccountName}\"}";
            DetailsMain.button4 = "";
            DetailsMain.serviceName2 = "RBObjects";
            DetailsMain.field2Type = "AccountNumberwithNickNameIcon";
            DetailsMain.objectName2 = "Transactions";
            DetailsMain.field3Label = "{i.kony.mb.common.TransactionDateColon}";
            DetailsMain.button5 = "";
            DetailsMain.operationName2 = "stopNextPayment";
            DetailsMain.field3Value = "{$.c.lastPaymentDate}";
            DetailsMain.criteria2 = "{\"Id\": \"{$.c.directDebitId}\", \"mandateReference\": \"{$.c.mandateReference}\"}";
            DetailsMain.field3Type = "Date";
            DetailsMain.field4Label = "{i.kony.mb.DirectDebit.signingDateColon}";
            DetailsMain.field4Value = "{$.c.signingDate}";
            DetailsMain.serviceName3 = "";
            DetailsMain.field4Type = "Date";
            DetailsMain.objectName3 = "";
            DetailsMain.field5Label = "{i.kony.mb.DirectDebit.madateReferenceColon}";
            DetailsMain.operationName3 = "";
            DetailsMain.field5Value = "{$.c.mandateReference}";
            DetailsMain.criteria3 = "";
            DetailsMain.field5Type = "Label";
            DetailsMain.dataAvailability = "Service Call by Form";
            DetailsMain.field6Label = "";
            DetailsMain.serviceIdentifier = "";
            DetailsMain.field6Value = "";
            DetailsMain.field6Type = "";
            DetailsMain.field7Label = "";
            DetailsMain.field7Value = "";
            DetailsMain.field7Type = "";
            DetailsMain.field8Label = "";
            DetailsMain.field8Value = "";
            DetailsMain.field8Type = "";
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
            flxDirectDebitsDetails.add(flxHeader, flxDetails, flxPopup);
            this.add(flxDirectDebitsDetails);
        };
        return [{
            "addWidgets": addWidgetsfrmDirectDebitsDetailsEurope,
            "enabledForIdleTimeout": true,
            "id": "frmDirectDebitsDetailsEurope",
            "init": controller.AS_Form_h86670d15a3f4a4293c3e994e6f0d0a6,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_h00a823d3c194aec972e00cfcadc8bbc(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.TransactionDetails")
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "sknTitle1a98ffffffff30px",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});