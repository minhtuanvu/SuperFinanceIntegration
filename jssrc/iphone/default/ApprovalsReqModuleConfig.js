ApprovalsReqModuleConfig = {
    "BusinessControllerConfig": {
        "CommandHandler": [],
        "BusinessControllerClass": "ApprovalsReqModule/BusinessControllers/BusinessController"
    },
    "PresentationControllerConfig": {
        "Default": {
            "PresentationExtensions": [],
            "PresentationControllerClass": "ApprovalsReqModule/PresentationControllers/PresentationController"
        }
    },
    "Forms": {
        "mobile": {
            "frmApprovalReqMain": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "ApprovalsReqModule/frmApprovalReqMainController",
                "FormName": "ApprovalsReqModule/frmApprovalReqMain"
            }
        }
    },
    "ModuleName": "ApprovalsReqModule"
};