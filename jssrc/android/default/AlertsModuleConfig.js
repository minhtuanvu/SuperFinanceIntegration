AlertsModuleConfig = {
    "BusinessControllerConfig": {
        "BusinessControllerClass": "AlertsModule/BusinessControllers/BusinessController",
        "CommandHandler": []
    },
    "Forms": {
        "mobile": {
            "frmAlertFilter": {
                "Controller": "AlertsModule/frmAlertFilterController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "AlertsModule/frmAlertFilter",
                "friendlyName": "frmAlertFilter"
            },
            "frmAlertsDetails": {
                "Controller": "AlertsModule/frmAlertsDetailsController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "AlertsModule/frmAlertsDetails",
                "friendlyName": "frmAlertsDetails"
            },
            "frmAlertsLanding": {
                "Controller": "AlertsModule/frmAlertsLandingController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "AlertsModule/frmAlertsLanding",
                "friendlyName": "frmAlertsLanding"
            }
        }
    },
    "ModuleName": "AlertsModule",
    "PresentationControllerConfig": {
        "Default": {
            "PresentationControllerClass": "AlertsModule/PresentationControllers/PresentationController",
            "PresentationExtensions": []
        }
    }
};