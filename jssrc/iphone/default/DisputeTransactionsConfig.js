DisputeTransactionsConfig = {
    "BusinessControllerConfig": {
        "CommandHandler": [],
        "BusinessControllerClass": "DisputeTransactions/BusinessControllers/BusinessController"
    },
    "PresentationControllerConfig": {
        "Default": {
            "PresentationExtensions": [],
            "PresentationControllerClass": "DisputeTransactions/PresentationControllers/PresentationController"
        }
    },
    "Forms": {
        "mobile": {
            "frmDisputeTransactionDetails": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "DisputeTransactions/frmDisputeTransactionDetailsController",
                "FormName": "DisputeTransactions/frmDisputeTransactionDetails",
                "friendlyName": "frmDisputeTransactionDetails"
            },
            "frmDisputedTransactionsList": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "DisputeTransactions/frmDisputedTransactionsListController",
                "FormName": "DisputeTransactions/frmDisputedTransactionsList",
                "friendlyName": "frmDisputedTransactionsList"
            },
	    "frmDTAcknowledgement": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "DisputeTransactions/frmDTAcknowledgementController",
                "FormName": "DisputeTransactions/frmDTAcknowledgement",
                "friendlyName": "frmDTAcknowledgement"
            },
            "frmDisputeReason": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "DisputeTransactions/frmDisputeReasonController",
                "FormName": "DisputeTransactions/frmDisputeReason",
                "friendlyName": "frmDisputeReason"
            },
            "frmDTConfirm": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "DisputeTransactions/frmDTConfirmController",
                "FormName": "DisputeTransactions/frmDTConfirm",
                "friendlyName": "frmDTConfirm"
            }
        }
    },
    "ModuleName": "DisputeTransactions"
};