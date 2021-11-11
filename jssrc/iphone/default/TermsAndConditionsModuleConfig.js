TermsAndConditionsModuleConfig = {
    "BusinessControllerConfig": {
        "CommandHandler": [],
        "BusinessControllerClass": "TermsAndConditionsModule/BusinessControllers/BusinessController"
    },
    "PresentationControllerConfig": {
        "Default": {
            "PresentationExtensions": [],
            "PresentationControllerClass": "TermsAndConditionsModule/PresentationControllers/PresentationController"
        }
    },
    "Forms": {
        "mobile": {
            "frmTermsAndCondition": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "TermsAndConditionsModule/frmTermsAndConditionController",
                "FormName": "TermsAndConditionsModule/frmTermsAndCondition",
                "friendlyName": "frmTermsAndCondition"
            }
        }
    },
    "ModuleName": "TermsAndConditionsModule"
};