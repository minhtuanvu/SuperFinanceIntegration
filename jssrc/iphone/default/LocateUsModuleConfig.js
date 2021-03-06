LocateUsModuleConfig = {
    "BusinessControllerConfig": {
        "BusinessControllerClass": "LocateUsModule/BusinessControllers/BusinessController",
        "CommandHandler": []
    },
    "Forms": {
        "mobile": {
            "frmLocationDetails": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "LocateUsModule/frmLocationDetailsController",
                "FormName": "LocateUsModule/frmLocationDetails",
                "friendlyName": "frmLocationDetails"
            },
            "frmLocationDirections": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "LocateUsModule/frmLocationDirectionsController",
                "FormName": "LocateUsModule/frmLocationDirections",
                "friendlyName": "frmLocationDirections"
            },
            "frmLocationMap": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "LocateUsModule/frmLocationMapController",
                "FormName": "LocateUsModule/frmLocationMap",
                "friendlyName": "frmLocationMap"
            }
        },
        "tablet": {
            "frmLocationMap": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "LocateUsModule/frmLocationMapController",
                "FormName": "LocateUsModule/frmLocationMap",
                "friendlyName": "frmLocationMap"
            },
            "frmLocationDetails": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "LocateUsModule/frmLocationDetailsController",
                "FormName": "LocateUsModule/frmLocationDetails",
                "friendlyName": "frmLocationDetails"
            },
            "frmLocationDirections": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "LocateUsModule/frmLocationDirectionsController",
                "FormName": "LocateUsModule/frmLocationDirections",
                "friendlyName": "frmLocationDirections"
            }
        }
    },
    "ModuleName": "LocateUsModule",
    "PresentationControllerConfig": {
        "Default": {
            "PresentationControllerClass": "LocateUsModule/PresentationControllers/PresentationController",
            "PresentationExtensions": [
                "LocateUsModule/PresentationControllers/PresentationController_Extn"
            ]
        },
        "Tablet": {
            "PresentationControllerClass": "LocateUsModule/PresentationControllers/PresentationController_Tablet",
            "PresentationExtensions": []
        }
    }
};