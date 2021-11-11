BBAccountsModuleConfig = {
    "BusinessControllerConfig": {
        "CommandHandler": [],
        "BusinessControllerClass": "BBAccountsModule/BusinessControllers/BusinessController"
    },
    "PresentationControllerConfig": {
        "Default": {
            "PresentationExtensions": [],
            "PresentationControllerClass": "BBAccountsModule/PresentationControllers/PresentationController"
        }
    },
    "Forms": {
        "mobile": {
            "frmAccountDetailsNew": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "BBAccountsModule/frmAccountDetailsNewController",
                "FormName": "BBAccountsModule/frmAccountDetailsNew",
                "friendlyName": "frmAccountDetailsNew"
            },
            "frmAccountInfoNew": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "BBAccountsModule/frmAccountInfoNewController",
                "FormName": "BBAccountsModule/frmAccountInfoNew",
                "friendlyName": "frmAccountInfoNew"

            },
            "frmBusinessDashboard": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "BBAccountsModule/frmBusinessDashboardController",
                "FormName": "BBAccountsModule/frmBusinessDashboard",
                "friendlyName": "frmBusinessDashboard"
            },
            "frmCombinedDashboard": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "BBAccountsModule/frmCombinedDashboardController",
                "FormName": "BBAccountsModule/frmCombinedDashboard",
                "friendlyName": "frmCombinedDashboard"
            }
        }
    },
    "ModuleName": "BBAccountsModule"
};