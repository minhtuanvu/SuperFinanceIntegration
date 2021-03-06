FeedBackModuleConfig = {
    "BusinessControllerConfig": {
        "BusinessControllerClass": "FeedBackModule/BusinessControllers/BusinessController",
        "CommandHandler": []
    },
    "Forms": {
        "mobile": {
            "frmFeedBackSuccess": {
                "Controller": "FeedBackModule/frmFeedBackSuccessController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "FeedBackModule/frmFeedBackSuccess",
                "friendlyName": "frmFeedBackSuccess"
            },
            "frmFeedbackEntry": {
                "Controller": "FeedBackModule/frmFeedbackEntryController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "FeedBackModule/frmFeedbackEntry"
            },
            "frmInAppFeedbackRating": {
                "Controller": "FeedBackModule/frmInAppFeedbackRatingController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "FeedBackModule/frmInAppFeedbackRating",
                "friendlyName": "frmInAppFeedbackRating"
            }
        }
    },
    "ModuleName": "FeedBackModule",
    "PresentationControllerConfig": {
        "Default": {
            "PresentationControllerClass": "FeedBackModule/PresentationControllers/PresentationController",
            "PresentationExtensions": []
        }
    }
};