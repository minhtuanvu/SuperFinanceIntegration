FeedBackModuleConfig = {
    "BusinessControllerConfig": {
        "CommandHandler": [],
        "BusinessControllerClass": "FeedBackModule/BusinessControllers/BusinessController"
    },
    "PresentationControllerConfig": {
        "Default": {
            "PresentationExtensions": [],
            "PresentationControllerClass": "FeedBackModule/PresentationControllers/PresentationController"
        }
    },
    "Forms": {
        "mobile": {
            "frmInAppFeedbackRating": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "FeedBackModule/frmInAppFeedbackRatingController",
                "FormName": "FeedBackModule/frmInAppFeedbackRating",
                "friendlyName": "frmInAppFeedbackRating"
            },
            "frmFeedBackSuccess": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "FeedBackModule/frmFeedBackSuccessController",
                "FormName": "FeedBackModule/frmFeedBackSuccess",
                "friendlyName": "frmFeedBackSuccess"
            }
        }
    },
    "ModuleName": "FeedBackModule"
};