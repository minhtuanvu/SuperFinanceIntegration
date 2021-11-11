MoneyMovementModuleConfig = {
    "BusinessControllerConfig": {
        "CommandHandler": [],
        "BusinessControllerClass": "MoneyMovementModule/BusinessControllers/BusinessController"
    },
    "PresentationControllerConfig": {
        "Default": {
            "PresentationExtensions": [],
            "PresentationControllerClass": "MoneyMovementModule/PresentationControllers/PresentationController"
        }
    },
    "Forms": {
        "mobile": {
            "frmMMConfirmation": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmMMConfirmationController",
                "FormName": "MoneyMovementModule/frmMMConfirmation",
                "friendlyName": "frmMMConfirmation"
            },
            "frmMMDuration": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmMMDurationController",
                "FormName": "MoneyMovementModule/frmMMDuration",
                "friendlyName": "frmMMDuration"
            },
            "frmMMEndDate": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmMMEndDateController",
                "FormName": "MoneyMovementModule/frmMMEndDate",
                "friendlyName": "frmMMEndDate"
            },
            "frmMMFrequency": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmMMFrequencyController",
                "FormName": "MoneyMovementModule/frmMMFrequency",
                "friendlyName": "frmMMFrequency"
            },
            "frmMMNumberOfTransfers": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmMMNumberOfTransfersController",
                "FormName": "MoneyMovementModule/frmMMNumberOfTransfers",
                "friendlyName": "frmMMNumberOfTransfers"
            },
            "frmMMReview": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmMMReviewController",
                "FormName": "MoneyMovementModule/frmMMReview",
                "friendlyName": "frmMMReview"
            },
            "frmMMStartDate": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmMMStartDateController",
                "FormName": "MoneyMovementModule/frmMMStartDate",
                "friendlyName": "frmMMStartDate"
            },
            "frmMMTransferAmount": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmMMTransferAmountController",
                "FormName": "MoneyMovementModule/frmMMTransferAmount",
                "friendlyName": "frmMMTransferAmount"
            },
            "frmMMTransferToAccount": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmMMTransferToAccountController",
                "FormName": "MoneyMovementModule/frmMMTransferToAccount",
                "friendlyName": "frmMMTransferToAccount"
            },
            "frmMMTransfers": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmMMTransfersController",
                "FormName": "MoneyMovementModule/frmMMTransfers",
                "friendlyName": "frmMMTransfers"
            },
            "frmMMTransferFromAccount": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmMMTransferFromAccountController",
                "FormName": "MoneyMovementModule/frmMMTransferFromAccount",
                "friendlyName": "frmMMTransferFromAccount"
            },
            "frmMMTransactionDetails": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmMMTransactionDetailsController",
                "FormName": "MoneyMovementModule/frmMMTransactionDetails",
                "friendlyName": "frmMMTransactionDetails"
            },
            "frmMMVerifyP2PDetails": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmMMVerifyP2PDetailsController",
                "FormName": "MoneyMovementModule/frmMMVerifyP2PDetails",
                "friendlyName": "frmMMVerifyP2PDetails"
            },
            "frmMMActivateP2PTransfer": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmMMActivateP2PTransferController",
                "FormName": "MoneyMovementModule/frmMMActivateP2PTransfer",
                "friendlyName": "frmMMActivateP2PTransfer"
            },
          	"frmMMSelectCurrency": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmMMSelectCurrencyController",
                "FormName": "MoneyMovementModule/frmMMSelectCurrency",
                "friendlyName": "frmMMSelectCurrency"
            },
          	"frmTransferActivitiesTransfers": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmTransferActivitiesTransfersController",
                "FormName": "MoneyMovementModule/frmTransferActivitiesTransfers",
                "friendlyName": "frmTransferActivitiesTransfers"
            },
          	"frmTransferActivitiesRecurring": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmTransferActivitiesRecurringController",
                "FormName": "MoneyMovementModule/frmTransferActivitiesRecurring",
                "friendlyName": "frmTransferActivitiesRecurring"
            },
          	"frmTransferActivitiesDirectDebits": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmTransferActivitiesDirectDebitsController",
                "FormName": "MoneyMovementModule/frmTransferActivitiesDirectDebits",
                "friendlyName": "frmTransferActivitiesDirectDebits"
            },
          	"frmTransfersDetails": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmTransfersDetailsController",
                "FormName": "MoneyMovementModule/frmTransfersDetails",
                "friendlyName": "frmTransfersDetails"
            },
          	"frmRecurringDetails": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmRecurringDetailsController",
                "FormName": "MoneyMovementModule/frmRecurringDetails",
                "friendlyName": "frmRecurringDetails"
            },
          	"frmDirectDebitsDetails": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MoneyMovementModule/frmDirectDebitsDetailsController",
                "FormName": "MoneyMovementModule/frmDirectDebitsDetails",
                "friendlyName": "frmDirectDebitsDetails"
            }
        }
    },
    "ModuleName": "MoneyMovementModule"
};