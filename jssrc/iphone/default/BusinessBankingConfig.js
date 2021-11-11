BusinessBankingConfig = {
    "BusinessControllerConfig": {
        "CommandHandler": [],
        "BusinessControllerClass": "BusinessBanking/BusinessControllers/BusinessController"
    },
    "PresentationControllerConfig": {
        "Default": {
            "PresentationExtensions": [],
            "PresentationControllerClass": "BusinessBanking/PresentationControllers/PresentationController"
        }
    },
    "Forms": {
        "mobile": {
            "frmStausMessage": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "BusinessBanking/frmStausMessageController",
                "FormName": "BusinessBanking/frmStausMessage",
                "friendlyName": "StausMessage"
            },
            "frmUserDetails": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "BusinessBanking/frmUserDetailsController",
                "FormName": "BusinessBanking/frmUserDetails",
                "friendlyName": "UserDetails"
            },
            "frmUserMgmtList": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "BusinessBanking/frmUserMgmtListController",
                "FormName": "BusinessBanking/frmUserMgmtList",
                "friendlyName": "frmUserMgmtList"
            }
        }
    },
    "ModuleName": "BusinessBanking"
};