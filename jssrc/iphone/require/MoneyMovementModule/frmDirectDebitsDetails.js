define("MoneyMovementModule/frmDirectDebitsDetails", function() {
    return function(controller) {
        function addWidgetsfrmDirectDebitsDetails() {
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
            DetailsMain.serviceName1 = "RBObjects";
            DetailsMain.field1Label = "Beneficiary Name:";
            DetailsMain.button1 = "{\"title\":\"{i.kony.mb.DirectDebit.cancelDebit}\",\"buttonId\":\"Cancel1\",\"skin\":\"ICSknBtnFFFFFF003E7515px\",\"entitlement\":[\"DIRECT_DEBIT_CANCEL\"]}";
            DetailsMain.labelSkin = "{\"skin\":\"ICSknlblSSP72727215px\"}";
            DetailsMain.amountFormat = "{\"locale\":\"\",\"positiveFormat\":\"{CS}{D}\",\"negativeFormat\":\"-({CS}{D})\",\"fractionDigits\":\"2\"}";
            DetailsMain.alertText1 = "{i.kony.mb.directDebits.alertCancel}";
            DetailsMain.iconVisibility = true;
            DetailsMain.retailIcon = "personalaccount.png";
            DetailsMain.objectName1 = "Transactions";
            DetailsMain.field1Value = "{$.c.beneficiaryName}";
            DetailsMain.valueSkin = "{\"skin\":\"ICSknlblSSP42424215px\"}";
            DetailsMain.currencyCode = "";
            DetailsMain.combinedUserIcon = "businessaccount.png";
            DetailsMain.operationName1 = "cancelDirectDebit";
            DetailsMain.field1Type = "Label";
            DetailsMain.button2 = "";
            DetailsMain.amountSkin = "{\"skin\":\"ICSknlblSSP4176A418px\"}";
            DetailsMain.backendDateFormat = "{\"format\" : \"Y-m-d\"}";
            DetailsMain.dateFormat = "{\"format\" : \"m/d/Y\"}";
            DetailsMain.criteria1 = "{\"directDebitId\": \"{$.c.directDebitId}\"}";
            DetailsMain.statusLabel = "";
            DetailsMain.alertText2 = "";
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
            DetailsMain.serviceName2 = "";
            DetailsMain.field2Type = "AccountNumberwithNickName";
            DetailsMain.objectName2 = "";
            DetailsMain.field3Label = "{i.kony.mb.common.TransactionDateColon}";
            DetailsMain.button5 = "";
            DetailsMain.operationName2 = "";
            DetailsMain.field3Value = "{$.c.lastPaymentDate}";
            DetailsMain.criteria2 = "";
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
            flxDirectDebitsDetails.add(flxHeader, flxDetails);
            this.add(flxDirectDebitsDetails);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_c192f1dd63c844b4862f03f0b602cb13,
            "metaData": {
                "image": "backbutton.png"
            },
            "id": "LBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmDirectDebitsDetails,
            "enabledForIdleTimeout": true,
            "id": "frmDirectDebitsDetails",
            "init": controller.AS_Form_j0eec1b69af04151ab4241048fa5ec74,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_ga4a50ae3a764c7ea206279652e40e79(eventobject);
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
                "translucent": true,
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