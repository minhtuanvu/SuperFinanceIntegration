ACHModuleConfig = {
    "BusinessControllerConfig": {
        "BusinessControllerClass": "ACHModule/BusinessControllers/BusinessController",
        "CommandHandler": []
    },
    "Forms": {
        "mobile": {
            "frmACHList": {
                "Controller": "ACHModule/frmACHListController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "ACHModule/frmACHList"
            },
            "frmACHTransactionDetail": {
                "Controller": "ACHModule/frmACHTransactionDetailController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "ACHModule/frmACHTransactionDetail",
                "friendlyName": "ACHTransactionDetail"
            },
            "frmACHTransactions": {
                "Controller": "ACHModule/frmACHTransactionsController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "ACHModule/frmACHTransactions",
                "friendlyName": "ACHTransactions"
            }
        }
    },
    "ModuleName": "ACHModule",
    "PresentationControllerConfig": {
        "Default": {
            "PresentationControllerClass": "ACHModule/PresentationControllers/PresentationController",
            "PresentationExtensions": []
        }
    }
};