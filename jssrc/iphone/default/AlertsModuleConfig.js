AlertsModuleConfig = {
    "BusinessControllerConfig": {
        "CommandHandler": [],
        "BusinessControllerClass": "AlertsModule/BusinessControllers/BusinessController"
    },
    "PresentationControllerConfig": {
        "Default": {
            "PresentationExtensions": [],
            "PresentationControllerClass": "AlertsModule/PresentationControllers/PresentationController"
        }
    },
    "Forms": {
        "mobile": {
            "frmAlertsLanding": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "AlertsModule/frmAlertsLandingController",
                "FormName": "AlertsModule/frmAlertsLanding",
                "friendlyName": "frmAlertsLanding"
            }
        }
    },
    "ModuleName": "AlertsModule"
};