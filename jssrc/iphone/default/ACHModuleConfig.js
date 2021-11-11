ACHModuleConfig = {
    "BusinessControllerConfig": {
        "CommandHandler": [],
        "BusinessControllerClass": "ACHModule/BusinessControllers/BusinessController"
    },
    "PresentationControllerConfig": {
        "Default": {
            "PresentationExtensions": [],
            "PresentationControllerClass": "ACHModule/PresentationControllers/PresentationController"
        }
    },
    "Forms": {
        "mobile": {
            "frmACHList": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "ACHModule/frmACHListController",
                "FormName": "ACHModule/frmACHList"
            },
            "frmACHTransactionDetail": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "ACHModule/frmACHTransactionDetailController",
                "FormName": "ACHModule/frmACHTransactionDetail",
                "friendlyName": "ACHTransactionDetail"
            },
            "frmACHTransactions": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "ACHModule/frmACHTransactionsController",
                "FormName": "ACHModule/frmACHTransactions",
                "friendlyName": "ACHTransactions"
            }
        }
    },
    "ModuleName": "ACHModule"
};