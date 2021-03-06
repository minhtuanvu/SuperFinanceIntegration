NewAccountOpeningModuleConfig = {
    "BusinessControllerConfig": {
        "BusinessControllerClass": "NewAccountOpeningModule/BusinessControllers/BusinessController",
        "CommandHandler": []
    },
    "Forms": {
        "mobile": {
            "frmNAOAck": {
                "Controller": "NewAccountOpeningModule/frmNAOAckController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "NewAccountOpeningModule/frmNAOAck",
                "friendlyName": "frmNAOAck"
            },
            "frmNAOProductDetails": {
                "Controller": "NewAccountOpeningModule/frmNAOProductDetailsController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "NewAccountOpeningModule/frmNAOProductDetails",
                "friendlyName": "frmNAOProductDetails"
            },
            "frmNAOReviewProduct": {
                "Controller": "NewAccountOpeningModule/frmNAOReviewProductController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "NewAccountOpeningModule/frmNAOReviewProduct",
                "friendlyName": "frmNAOReviewProduct"
            },
            "frmNAOSelectProduct": {
                "Controller": "NewAccountOpeningModule/frmNAOSelectProductController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "NewAccountOpeningModule/frmNAOSelectProduct",
                "friendlyName": "frmNAOSelectProduct"
            }
        },
        "tablet": {
            "frmNAOAck": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "NewAccountOpeningModule/frmNAOAckController",
                "FormName": "NewAccountOpeningModule/frmNAOAck",
                "friendlyName": "frmNAOAck"
            },
            "frmNAOProductDetails": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "NewAccountOpeningModule/frmNAOProductDetailsController",
                "FormName": "NewAccountOpeningModule/frmNAOProductDetails",
                "friendlyName": "frmNAOProductDetails"
            },
            "frmNAOSelectProduct": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "NewAccountOpeningModule/frmNAOSelectProductController",
                "FormName": "NewAccountOpeningModule/frmNAOSelectProduct",
                "friendlyName": "frmNAOSelectProduct"
            },
            "frmNAOReviewProduct": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "NewAccountOpeningModule/frmNAOReviewProductController",
                "FormName": "NewAccountOpeningModule/frmNAOReviewProduct",
                "friendlyName": "frmNAOReviewProduct"
            }
        }
    },
    "ModuleName": "NewAccountOpeningModule",
    "PresentationControllerConfig": {
        "Default": {
            "PresentationControllerClass": "NewAccountOpeningModule/PresentationControllers/PresentationController",
            "PresentationExtensions": []
        },
        "Tablet": {
            "PresentationControllerClass": "NewAccountOpeningModule/PresentationControllers/PresentationController_Tablet",
            "PresentationExtensions": []
        }
    }
};