DisputeTransactionsConfig = {
    "BusinessControllerConfig": {
        "BusinessControllerClass": "DisputeTransactions/BusinessControllers/BusinessController",
        "CommandHandler": []
    },
    "Forms": {
        "mobile": {
            "frmDTAcknowledgement": {
                "Controller": "DisputeTransactions/frmDTAcknowledgementController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "DisputeTransactions/frmDTAcknowledgement",
                "friendlyName": "frmDTAcknowledgement"
            },
            "frmDTConfirm": {
                "Controller": "DisputeTransactions/frmDTConfirmController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "DisputeTransactions/frmDTConfirm",
                "friendlyName": "frmDTConfirm"
            },
            "frmDisputeReason": {
                "Controller": "DisputeTransactions/frmDisputeReasonController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "DisputeTransactions/frmDisputeReason",
                "friendlyName": "frmDisputeReason"
            },
            "frmDisputeTransactionDetails": {
                "Controller": "DisputeTransactions/frmDisputeTransactionDetailsController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "DisputeTransactions/frmDisputeTransactionDetails",
                "friendlyName": "frmDisputeTransactionDetails"
            },
            "frmDisputedTransactionsList": {
                "Controller": "DisputeTransactions/frmDisputedTransactionsListController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "DisputeTransactions/frmDisputedTransactionsList",
                "friendlyName": "frmDisputedTransactionsList"
            }
        }
    },
    "ModuleName": "DisputeTransactions",
    "PresentationControllerConfig": {
        "Default": {
            "PresentationControllerClass": "DisputeTransactions/PresentationControllers/PresentationController",
            "PresentationExtensions": []
        }
    }
};