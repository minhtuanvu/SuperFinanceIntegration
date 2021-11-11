ForeignExchangeConfig = {
    "BusinessControllerConfig": {
        "CommandHandler": [],
        "BusinessControllerClass": "ForeignExchange/BusinessControllers/BusinessController"
    },
    "PresentationControllerConfig": {
        "Default": {
            "PresentationExtensions": [],
            "PresentationControllerClass": "ForeignExchange/PresentationControllers/PresentationController"
        }
    },
    "Forms": {
        "mobile": {
            "frmForexDashboard": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "ForeignExchange/frmForexDashboardController",
                "FormName": "ForeignExchange/frmForexDashboard",
                "friendlyName": "frmForexDashboard"
            },
          "frmBuyCurrency": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "ForeignExchange/frmBuyCurrencyController",
                "FormName": "ForeignExchange/frmBuyCurrency",
                "friendlyName": "frmBuyCurrency"
            }
        }
    },
    "ModuleName": "ForeignExchange"
};