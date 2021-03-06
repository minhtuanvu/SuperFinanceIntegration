ChequeManagementModuleConfig = {
    "BusinessControllerConfig": {
        "CommandHandler": [],
        "BusinessControllerClass": "ChequeManagementModule/BusinessControllers/BusinessController"
    },
    "PresentationControllerConfig": {
        "Default": {
            "PresentationExtensions": [],
            "PresentationControllerClass": "ChequeManagementModule/PresentationControllers/PresentationController"
        }
    },
    "Forms": {
        "mobile": {
            "frmCMReview": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "ChequeManagementModule/frmCMReviewController",
                "FormName": "ChequeManagementModule/frmCMReview",
                "friendlyName": "frmCMReview"
            },
            "frmCMChequeBooks": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "ChequeManagementModule/frmCMChequeBooksController",
                "FormName": "ChequeManagementModule/frmCMChequeBooks",
                "friendlyName": "frmCMChequeBooks"
            },
            "frmCMConfirmation": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "ChequeManagementModule/frmCMConfirmationController",
                "FormName": "ChequeManagementModule/frmCMConfirmation",
                "friendlyName": "frmCMConfirmation"
            },
            "frmChequeManagement": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "ChequeManagementModule/frmChequeManagementController",
                "FormName": "ChequeManagementModule/frmChequeManagement",
                "friendlyName": "frmChequeManagement"
            },
            "frmChequeTransactionDetails": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "ChequeManagementModule/frmChequeTransactionDetailsController",
                "FormName": "ChequeManagementModule/frmChequeTransactionDetails",
                "friendlyName": "frmChequeTransactionDetails"
            },
            "frmCMSearch": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "ChequeManagementModule/frmCMSearchController",
                "FormName": "ChequeManagementModule/frmCMSearch",
                "friendlyName": "frmCMSearch"
            },
            "frmCMSearchResult": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "ChequeManagementModule/frmCMSearchResultController",
                "FormName": "ChequeManagementModule/frmCMSearchResult",
                "friendlyName": "frmCMSearchResult"
            },
            "frmCMSelectAccount": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "ChequeManagementModule/frmCMSelectAccountController",
                "FormName": "ChequeManagementModule/frmCMSelectAccount",
                "friendlyName": "frmCMSelectAccount"
            },
            "frmDeliveryType": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "ChequeManagementModule/frmDeliveryTypeController",
                "FormName": "ChequeManagementModule/frmDeliveryType",
                "friendlyName": "frmDeliveryType"
            },
             	  
        }
    },
    "ModuleName": "ChequeManagementModule"
};