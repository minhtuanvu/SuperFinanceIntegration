LoansPayoffModuleConfig = {
    "BusinessControllerConfig": {
        "BusinessControllerClass": "LoansPayoffModule/BusinessControllers/BusinessController",
        "CommandHandler": []
    },
    "Forms": {
        "mobile": {
            "frmLoanPayoff": {
                "Controller": "LoansPayoffModule/frmLoanPayoffController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "LoansPayoffModule/frmLoanPayoff",
                "friendlyName": "frmLoanPayoff"
            },
            "frmLoansAcknowledgement": {
                "Controller": "LoansPayoffModule/frmLoansAcknowledgementController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "LoansPayoffModule/frmLoansAcknowledgement",
                "friendlyName": "frmLoansAcknowledgement"
            },
            "frmLoansDate": {
                "Controller": "LoansPayoffModule/frmLoansDateController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "LoansPayoffModule/frmLoansDate",
                "friendlyName": "frmLoansDate"
            },
            "frmLoansFromAccount": {
                "Controller": "LoansPayoffModule/frmLoansFromAccountController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "LoansPayoffModule/frmLoansFromAccount",
                "friendlyName": "frmLoansFromAccount"
            },
            "frmLoansVerify": {
                "Controller": "LoansPayoffModule/frmLoansVerifyController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "LoansPayoffModule/frmLoansVerify",
                "friendlyName": "frmLoansVerify"
            }
        }
    },
    "ModuleName": "LoansPayoffModule",
    "PresentationControllerConfig": {
        "Default": {
            "PresentationControllerClass": "LoansPayoffModule/PresentationControllers/PresentationController",
            "PresentationExtensions": []
        }
    }
};