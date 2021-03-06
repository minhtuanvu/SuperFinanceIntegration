EnrollModuleConfig = {
    "BusinessControllerConfig": {
        "BusinessControllerClass": "EnrollModule/BusinessControllers/BusinessController",
        "CommandHandler": []
    },
    "Forms": {
        "mobile": {
            "frmEnrollAccinfo": {
                "Controller": "EnrollModule/frmEnrollAccinfoController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "EnrollModule/frmEnrollAccinfo",
                "friendlyName": "frmEnrollAccinfo"
            },
            "frmEnrollActivateProfile":{
              	"Controller": "EnrollModule/frmEnrollActivateProfileController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "EnrollModule/frmEnrollActivateProfile",
                "friendlyName": "frmEnrollActivateProfile"
            },
            "frmEnrollCVV": {
                "Controller": "EnrollModule/frmEnrollCVVController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "EnrollModule/frmEnrollCVV",
                "friendlyName": "frmEnrollCVV"
            },
            "frmEnrollDOB": {
                "Controller": "EnrollModule/frmEnrollDOBController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "EnrollModule/frmEnrollDOB",
                "friendlyName": "frmEnrollDOB"
            },
            "frmEnrollLastName": {
                "Controller": "EnrollModule/frmEnrollLastNameController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "EnrollModule/frmEnrollLastName",
                "friendlyName": "frmEnrollLastName"
            },
            "frmEnrollSSn": {
                "Controller": "EnrollModule/frmEnrollSSnController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "EnrollModule/frmEnrollSSn",
                "friendlyName": "frmEnrollSSn"
            },
            "frmEnrollSecurity": {
                "Controller": "EnrollModule/frmEnrollSecurityController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "EnrollModule/frmEnrollSecurity",
                "friendlyName": "frmEnrollSecurity"
            },
            "frmEnrollSecurityCheck": {
                "Controller": "EnrollModule/frmEnrollSecurityCheckController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "EnrollModule/frmEnrollSecurityCheck",
                "friendlyName": "frmEnrollSecurityCheck"
            },
            "frmEnrollSignUp": {
                "Controller": "EnrollModule/frmEnrollSignUpController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "EnrollModule/frmEnrollSignUp",
                "friendlyName": "frmEnrollSignUp"
            }
        },
        "tablet": {
            "frmEnrollCVV": {
                "Controller": "EnrollModule/frmEnrollCVVController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "EnrollModule/frmEnrollCVV",
                "friendlyName": "frmEnrollCVV"
            },
            "frmEnrollCVVNumber": {
                "Controller": "EnrollModule/frmEnrollCVVNumberController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "EnrollModule/frmEnrollCVVNumber",
                "friendlyName": "frmEnrollCVVNumber"
            },
            "frmEnrollDOB": {
                "Controller": "EnrollModule/frmEnrollDOBController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "EnrollModule/frmEnrollDOB",
                "friendlyName": "frmEnrollDOB"
            },
            "frmEnrollLastName": {
                "Controller": "EnrollModule/frmEnrollLastNameController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "EnrollModule/frmEnrollLastName",
                "friendlyName": "frmEnrollLastName"
            },
            "frmEnrollSSn": {
                "Controller": "EnrollModule/frmEnrollSSnController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "EnrollModule/frmEnrollSSn",
                "friendlyName": "frmEnrollSSn"
            },
            "frmEnrollSecurity": {
                "Controller": "EnrollModule/frmEnrollSecurityController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "EnrollModule/frmEnrollSecurity",
                "friendlyName": "frmEnrollSecurity"
            },
            "frmEnrollSecurityCheck": {
                "Controller": "EnrollModule/frmEnrollSecurityCheckController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "EnrollModule/frmEnrollSecurityCheck",
                "friendlyName": "frmEnrollSecurityCheck"
            },
            "frmEnrollSignUp": {
                "Controller": "EnrollModule/frmEnrollSignUpController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "EnrollModule/frmEnrollSignUp",
                "friendlyName": "frmEnrollSignUp"
            },
            "frmAlreadyEnrolled": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "EnrollModule/frmAlreadyEnrolledController",
                "FormName": "EnrollModule/frmAlreadyEnrolled",
                "friendlyName": "frmAlreadyEnrolled"
            }
        }
    },
    "ModuleName": "EnrollModule",
    "PresentationControllerConfig": {
        "Default": {
            "PresentationControllerClass": "EnrollModule/PresentationControllers/PresentationController",
            "PresentationExtensions": [
                "EnrollModule/PresentationControllers/PresentationController_Extn"
            ]
        },
        "Tablet": {
            "PresentationControllerClass": "EnrollModule/PresentationControllers/PresentationController_Tablet",
            "PresentationExtensions": []
        }
    }
};