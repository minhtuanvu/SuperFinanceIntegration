MFAModuleConfig = {
    "BusinessControllerConfig": {
        "CommandHandler": [],
        "BusinessControllerClass": "MFAModule/BusinessControllers/BusinessController"
    },
    "PresentationControllerConfig": {
        "Default": {
            "PresentationExtensions": [],
            "PresentationControllerClass": "MFAModule/PresentationControllers/PresentationController"
        }
    },
    "Forms": {
        "mobile": {
            "frmMFAChangeUsername": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MFAModule/frmMFAChangeUsernameController",
                "FormName": "MFAModule/frmMFAChangeUsername"
            },
            "frmMFAOption1": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MFAModule/frmMFAOption1Controller",
                "FormName": "MFAModule/frmMFAOption1"
            },
            "frmMFAOption2": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MFAModule/frmMFAOption2Controller",
                "FormName": "MFAModule/frmMFAOption2"
            },
            "frmMFAOption3": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MFAModule/frmMFAOption3Controller",
                "FormName": "MFAModule/frmMFAOption3",
                "friendlyName": "frmMFAOption3"
            },
            "frmMFASecurityCode": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MFAModule/frmMFASecurityCodeController",
                "FormName": "MFAModule/frmMFASecurityCode",
                "friendlyName": "frmMFASecurityCode"
            },
            "frmSecurityQuestions": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MFAModule/frmSecurityQuestionsController",
                "FormName": "MFAModule/frmSecurityQuestions",
                "friendlyName": "frmSecurityQuestions"
            }
        }
    },
    "ModuleName": "MFAModule"
};