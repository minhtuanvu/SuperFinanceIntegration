ForeignExchangeConfig = {
    "BusinessControllerConfig": {
        "BusinessControllerClass": "ForeignExchange/BusinessControllers/BusinessController",
        "CommandHandler": []
    },
    "Forms": {
        "mobile": {
            "frmBuyCurrency": {
                "Controller": "ForeignExchange/frmBuyCurrencyController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "ForeignExchange/frmBuyCurrency",
                "friendlyName": "frmBuyCurrency"
            },
            "frmForexDashboard": {
                "Controller": "ForeignExchange/frmForexDashboardController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "ForeignExchange/frmForexDashboard",
                "friendlyName": "frmForexDashboard"
            }
        }
    },
    "ModuleName": "ForeignExchange",
    "PresentationControllerConfig": {
        "Default": {
            "PresentationControllerClass": "ForeignExchange/PresentationControllers/PresentationController",
            "PresentationExtensions": []
        }
    }
};