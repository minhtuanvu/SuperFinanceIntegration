TransactionModuleConfig = {
    "BusinessControllerConfig": {
        "BusinessControllerClass": "TransactionModule/BusinessControllers/BusinessController",
        "CommandHandler": []
    },
    "EUROPE": {
        "BusinessControllerConfig": {
            "BusinessControllerClass": "TransactionModule/BusinessControllers/BusinessController",
            "CommandHandler": []
        },
        "ModuleName": "TransactionModule",
        "PresentationControllerConfig": {
            "Default": {
                "PresentationControllerClass": "TransactionModule/EUROPE/PresentationControllers/PresentationController",
                "PresentationExtensions": []
            },
            "Forms": {
                "mobile": {
                    "frmTransfersEurope": {
                        "Controller": "TransactionModule/frmTransfersEuropeController",
                        "ControllerExtensions": [],
                        "FormController": "kony.mvc.MDAFormController",
                        "FormName": "TransactionModule/frmTransfersEurope",
                        "friendlyName": "frmTransfersEurope"
                    }
                }
            }
        }
    },
    "Forms": {
        "mobile": {
            "frmAdvanceSearch": {
                "Controller": "TransactionModule/frmAdvanceSearchController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "TransactionModule/frmAdvanceSearch",
                "friendlyName": "frmAdvanceSearch"
            },
            "frmDownloadSearchResult": {
                "Controller": "TransactionModule/frmDownloadSearchResultController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "TransactionModule/frmDownloadSearchResult",
                "friendlyName": "frmDownloadSearchResult"
            },
            "frmTransactionDetails": {
                "Controller": "CheckDepositModule/frmTransactionDetailsController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "CheckDepositModule/frmTransactionDetails",
                "friendlyName": "frmTransactionDetails"
            },
            "frmTransfers": {
                "Controller": "TransactionModule/frmTransfersController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "TransactionModule/frmTransfers",
                "friendlyName": "frmTransfers"
            },
            "frmTransfersEurope": {
                "Controller": "TransactionModule/frmTransfersEuropeController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "TransactionModule/frmTransfersEurope",
                "friendlyName": "frmTransfersEurope"
            }
        },
        "tablet": {
            "frmAdvanceSearch": {
                "Controller": "TransactionModule/frmAdvanceSearchController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "TransactionModule/frmAdvanceSearch",
                "friendlyName": "frmAdvanceSearch"
            },
            "frmAdvanceSearchResults": {
                "Controller": "TransactionModule/frmAdvanceSearchResultsController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "TransactionModule/frmAdvanceSearchResults",
                "friendlyName": "frmAdvanceSearchResults"
            },
            "frmTransfers": {
                "Controller": "TransactionModule/frmTransfersController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "TransactionModule/frmTransfers",
                "friendlyName": "frmTransfers"
            }
        }
    },
    "ModuleName": "TransactionModule",
    "PresentationControllerConfig": {
        "Default": {
            "PresentationControllerClass": "TransactionModule/PresentationControllers/PresentationController",
            "PresentationExtensions": []
        },
        "Tablet": {
            "PresentationControllerClass": "TransactionModule/PresentationControllers/PresentationController_Tablet",
            "PresentationExtensions": []
        }
    }
};