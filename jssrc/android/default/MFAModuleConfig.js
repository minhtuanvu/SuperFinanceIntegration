MFAModuleConfig = {
    "BusinessControllerConfig": {
        "BusinessControllerClass": "MFAModule/BusinessControllers/BusinessController",
        "CommandHandler": []
    },
    "Forms": {
        "mobile": {
            "frmMFAChangeUsername": {
                "Controller": "MFAModule/frmMFAChangeUsernameController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "MFAModule/frmMFAChangeUsername"
            },
            "frmMFAOption1": {
                "Controller": "MFAModule/frmMFAOption1Controller",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "MFAModule/frmMFAOption1"
            },
            "frmMFAOption2": {
                "Controller": "MFAModule/frmMFAOption2Controller",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "MFAModule/frmMFAOption2"
            },
            "frmMFAOption3": {
                "Controller": "MFAModule/frmMFAOption3Controller",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "MFAModule/frmMFAOption3",
                "friendlyName": "frmMFAOption3"
            },
            "frmMFASecurityCode": {
                "Controller": "MFAModule/frmMFASecurityCodeController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "MFAModule/frmMFASecurityCode",
                "friendlyName": "frmMFASecurityCode"
            },
            "frmMFAValidation": {
                "Controller": "MFAModule/frmMFAValidationController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "MFAModule/frmMFAValidation",
                "friendlyName": "frmMFAValidation"
            },
            "frmSecurityQuestions": {
                "Controller": "MFAModule/frmSecurityQuestionsController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "MFAModule/frmSecurityQuestions",
                "friendlyName": "frmSecurityQuestions"
            }
        },
        "tablet": {
            "frmMFAOption3": {
                "Controller": "MFAModule/frmMFAOption3Controller",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "MFAModule/frmMFAOption3"
            },
            "frmMFASecurityCode": {
                "Controller": "MFAModule/frmMFASecurityCodeController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "MFAModule/frmMFASecurityCode"
            },
            "frmSecurityQuestions": {
                "Controller": "MFAModule/frmSecurityQuestionsController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "MFAModule/frmSecurityQuestions"
            }
        }
    },
    "ModuleName": "MFAModule",
    "PresentationControllerConfig": {
        "Default": {
            "PresentationControllerClass": "MFAModule/PresentationControllers/PresentationController",
            "PresentationExtensions": []
        }
    }
};