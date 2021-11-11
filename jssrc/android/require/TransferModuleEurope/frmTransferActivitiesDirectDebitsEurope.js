define("TransferModuleEurope/frmTransferActivitiesDirectDebitsEurope", function() {
    return function(controller) {
        function addWidgetsfrmTransferActivitiesDirectDebitsEurope() {
            this.setDefaultUnit(kony.flex.DP);
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
                        "text": "Transfer Activities",
                        "width": "45%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxTransferActivitiesDirectDebits = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTransferActivitiesDirectDebits",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "56dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxTransferActivitiesDirectDebits.setDefaultUnit(kony.flex.DP);
            var flxTabs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxTabs",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxTabs.setDefaultUnit(kony.flex.DP);
            var tabs = new com.temenos.infinity.tabs({
                "height": "100%",
                "id": "tabs",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "ICSknFlx003E75BlueMb",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "tabs": {
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
            tabs.btnTab2 = "{\"text\":\"{i.kony.mb.tabs.Recurring}\",\"id\":\"Recurring\",\"entitlement\":[\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_VIEW\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_VIEW\",\"INTRA_BANK_FUND_TRANSFER_VIEW\",\"TRANSFER_BETWEEN_OWN_ACCOUNT_VIEW\"]}";
            tabs.separtorSkin = "ICSknFlxffffffShadow";
            tabs.defaultTab = "Tab3";
            tabs.btnTab3 = "{\"text\":\"{i.kony.mb.tabs.DirectDebits}\",\"id\":\"Direct Debits\",\"entitlement\":[\"DIRECT_DEBIT_VIEW\"]}";
            tabs.uselectedTabSkin = "ICSknBtn003E75RoundedFFFFFF28PX";
            tabs.btnTab4 = "";
            tabs.selectedTabSkin = "ICSknBtnFFFFFFRounded003E7528PxMb";
            tabs.btnTab1 = "{\"text\":\"{i.kony.mb.Hamburger.Transfers}\",\"id\":\"Transfers\",\"entitlement\":[\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_VIEW\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_VIEW\",\"INTRA_BANK_FUND_TRANSFER_VIEW\",\"TRANSFER_BETWEEN_OWN_ACCOUNT_VIEW\"]}";
            tabs.backgroundSkin = "ICSknFlx003E75BlueMb";
            flxTabs.add(tabs);
            var flxSearchandFilters = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSearchandFilters",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxSearchandFilters.setDefaultUnit(kony.flex.DP);
            var SearchAndFilter = new com.temenos.infinity.SearchAndFilter({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "id": "SearchAndFilter",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "SearchAndFilter": {
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
            SearchAndFilter.componentVisibility = "Hide Advanced Filter";
            SearchAndFilter.placeholderText = "{i.i18n.Search.PlaceholderText}";
            SearchAndFilter.sknSearchText = "ICSknTxt333333SSPRegular40Px";
            SearchAndFilter.imgSearchIcon = "search_image.png";
            SearchAndFilter.advancedFilterValues = "[{\"id\":\"All\",\"text\":\"{i.i18n.Search.AllTransfers}\"},{\"id\":\"Pending\",\"text\":\"{i.i18n.Search.Pending}\"},{\"id\":\"Rejected\",\"text\":\"{i.i18n.Search.Rejected}\"},{\"id\":\"Cancelled\",\"text\":\"{i.i18n.Search.Cancelled}\"},{\"id\":\"Completed\",\"text\":\"{i.i18n.Search.Completed}\"}]";
            SearchAndFilter.sknSearchTextPlaceholderBox = "ICSknSearchTextPlaceHolder99999935PxSSPRegular";
            SearchAndFilter.closeFilterIcon = "advance_search.png";
            SearchAndFilter.sknFilterHeading = "ICSknLbl424242SSPRegular50Px";
            SearchAndFilter.imgFilterIcon = "advansecsearch.png";
            SearchAndFilter.filterSelected = "[{\"id\":\"All\",\"headerText\":\"{i.i18n.Search.ShowingAllTransfers}\"},{\"id\":\"Pending\",\"headerText\":\"{i.i18n.Search.ShowingPendingTransfers}\"},{\"id\":\"Rejected\",\"headerText\":\"{i.i18n.Search.ShowingRejectedTransfers}\"},{\"id\":\"Cancelled\",\"headerText\":\"{i.i18n.Search.ShowingCancelledTransfers}\"},{\"id\":\"Completed\",\"headerText\":\"{i.i18n.Search.ShowingCompletedTransfers}\"}]";
            SearchAndFilter.sknSearchTextboxFocus = "ICSknTxt333333SSPRegular40Px";
            SearchAndFilter.AdvancedFilterselectedDataIcon = "correct.png";
            SearchAndFilter.showAllButton = "{\"text\":\"{i.i18n.Search.ShowAllButtonText}\",\"skin\":\"ICSknLbl4176a4SSPRegular50Px\"}";
            SearchAndFilter.sknFilterListData = "ICSknFilterOptions4176a450PxSSPRegular";
            SearchAndFilter.cancelSearchIcon = "clear_field.png";
            SearchAndFilter.sknSearchAndFilterBackground = "ICSknFlxf9f9f9Plain";
            SearchAndFilter.sknFilteredDataHeaderBackground = "ICSknFlxf9f9f9Plain";
            SearchAndFilter.sknFilterListHeaderBackground = "ICSknListingOptions";
            flxSearchandFilters.add(SearchAndFilter);
            flxTransferActivitiesDirectDebits.add(flxTabs, flxSearchandFilters);
            var flxTransfersList = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxTransfersList",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "188dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransfersList.setDefaultUnit(kony.flex.DP);
            var TransfersListMobileNative = new com.temenos.infinity.TransfersListMobileNative({
                "height": "100%",
                "id": "TransfersListMobileNative",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "ICSknTNSlfbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "TransfersListMobileNative": {
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
            TransfersListMobileNative.serviceName = "RBObjects";
            TransfersListMobileNative.serviceNameDel = "RBObjects";
            TransfersListMobileNative.field1Label = "{$.rootPath.beneficiaryName}";
            TransfersListMobileNative.separatorSkin = "ICSknTLFlxE3E3E3";
            TransfersListMobileNative.retailIcon = "";
            TransfersListMobileNative.btnSwipableAction1 = "{\"entitlement_keys\":[\"DIRECT_DEBIT_CANCEL\"],\"backgroundSkin\":\"ICSknFlxEE0005\",\"icon\":\"cancel.png\",\"text\":\"{i.kony.mb.nuo.Cancel}\",\"id\":\"delete\",\"txtSkin\":\"ICSknLblFFFFFF15PX\"}";
            TransfersListMobileNative.alertMessageText = "{i.kony.mb.directDebits.alertCancel}";
            TransfersListMobileNative.noRecordsText = "{i.kony.mb.transfers.noRecordFound}";
            TransfersListMobileNative.amountFormat = "{ \"locale\":\"\", \"positiveFormat\" : \"{CS}{D}\", \"negativeFormat\" : \"-{CS}{D}\", \"fractionDigits\":\"2\"}";
            TransfersListMobileNative.listArray = "{$.S1.Transactions}";
            TransfersListMobileNative.searchFields = "[\"beneficiaryName\",\"accountID\", \"lastPaymentDate\",\"mandateReference\", \"signingDate\"]";
            TransfersListMobileNative.objectName = "Transactions";
            TransfersListMobileNative.objectNameDel = "Transactions";
            TransfersListMobileNative.field1Type = "Label";
            TransfersListMobileNative.primaryFieldSkin = "ICSknTLSSP42424215px";
            TransfersListMobileNative.combinedUserIcon = "";
            TransfersListMobileNative.btnSwipableAction2 = "";
            TransfersListMobileNative.yesLabelText = "{i.kony.mb.common.AlertYes}";
            TransfersListMobileNative.noSearchResultsFoundText = " {i.kony.mb.transfers.noSearchResultFound}";
            TransfersListMobileNative.dateFormat = "d/m/Y";
            TransfersListMobileNative.listIdentifier = "rootPath";
            TransfersListMobileNative.sortBy = "{\"sortParam\" : \"scheduledDate\", \"sortOrder\" : \"desc\"}";
            TransfersListMobileNative.operationName = "getDirectDebits";
            TransfersListMobileNative.operationNameDel = "cancelDirectDebit";
            TransfersListMobileNative.field2Label = "";
            TransfersListMobileNative.secondaryFieldSkin = "ICSknTNSSP72727215px";
            TransfersListMobileNative.statusImage = "";
            TransfersListMobileNative.noLabelText = "{i.kony.mb.common.AlertNo}";
            TransfersListMobileNative.backendDateFormat = "Y-m-d";
            TransfersListMobileNative.filterParams = "statusDescription";
            TransfersListMobileNative.getCriteria = "{\"firstRecordNumber\":0}";
            TransfersListMobileNative.getCriteriaDel = "{\"directDebitId\":\"{$.rootPath.directDebitId}\"}";
            TransfersListMobileNative.field2Type = "";
            TransfersListMobileNative.noRecordsIcon = "norecordsavailableicon.png";
            TransfersListMobileNative.percentageFormat = "";
            TransfersListMobileNative.paginatedRecords = "12";
            TransfersListMobileNative.serviceIdentifier = "S1";
            TransfersListMobileNative.field3Label = "{\"accountNumber\":\"{$.rootPath.accountID}\",\"nickName\":\"{$.rootPath.fromNickName}\",\"name\":\"{$.rootPath.fromAccountName}\"}";
            TransfersListMobileNative.currencyCode = "{$.rootPath.transactionCurrency}";
            TransfersListMobileNative.dataAvailability = "Service calls by component";
            TransfersListMobileNative.field3Type = "AccountNumberWithNickname";
            TransfersListMobileNative.accountNumberLength = "4";
            TransfersListMobileNative.field4Label = "{$.rootPath.lastPaymentDate}";
            TransfersListMobileNative.months = "";
            TransfersListMobileNative.field4Type = "Date";
            TransfersListMobileNative.noRecordsFoundSkin = "ICSknTLSSP42424215px";
            TransfersListMobileNative.maxRecords = "{\"mapping\": \"lastRecordNumber\", \"lastRecordNumber\": 1000}";
            flxTransfersList.add(TransfersListMobileNative);
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
            this.add(flxHeader, flxTransferActivitiesDirectDebits, flxTransfersList, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmTransferActivitiesDirectDebitsEurope,
            "bounces": false,
            "enabledForIdleTimeout": true,
            "id": "frmTransferActivitiesDirectDebitsEurope",
            "init": controller.AS_Form_e9e8a799a9e743b1813b30cdf7527e10,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_g6ba5fc4dc1e42188dfb5148df6d0633(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Transfer Activities"
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