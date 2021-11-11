LoansPayoffModuleConfig = {
    "BusinessControllerConfig": {
        "CommandHandler": [],
        "BusinessControllerClass": "LoansPayoffModule/BusinessControllers/BusinessController"
    },
    "PresentationControllerConfig": {
        "Default": {
            "PresentationExtensions": [],
            "PresentationControllerClass": "LoansPayoffModule/PresentationControllers/PresentationController"
        }
    },
    "Forms": {
        "mobile": {
            "frmLoansFromAccount": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "LoansPayoffModule/frmLoansFromAccountController",
                "FormName": "LoansPayoffModule/frmLoansFromAccount",
                "friendlyName": "frmLoansFromAccount"
            },
            "frmLoanPayoff": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "LoansPayoffModule/frmLoanPayoffController",
                "FormName": "LoansPayoffModule/frmLoanPayoff",
                "friendlyName": "frmLoanPayoff"
            },
            "frmLoansVerify": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "LoansPayoffModule/frmLoansVerifyController",
                "FormName": "LoansPayoffModule/frmLoansVerify",
                "friendlyName": "frmLoansVerify"
            },
            "frmLoansAcknowledgement": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "LoansPayoffModule/frmLoansAcknowledgementController",
                "FormName": "LoansPayoffModule/frmLoansAcknowledgement",
                "friendlyName": "frmLoansAcknowledgement"
            },
            "frmLoansDate": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "LoansPayoffModule/frmLoansDateController",
                "FormName": "LoansPayoffModule/frmLoansDate",
                "friendlyName": "frmLoansDate"
            }
        }
    },
    "ModuleName": "LoansPayoffModule"
};