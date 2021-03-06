MessagesModuleConfig = {
    "BusinessControllerConfig": {
        "BusinessControllerClass": "MessagesModule/BusinessControllers/BusinessController",
        "CommandHandler": []
    },
    "Forms": {
        "mobile": {
            "frmMessages": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MessagesModule/frmMessagesController",
                "FormName": "MessagesModule/frmMessages",
                "friendlyName": "frmMessages"
            },
            "frmMessagesDetails": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MessagesModule/frmMessagesDetailsController",
                "FormName": "MessagesModule/frmMessagesDetails",
                "friendlyName": "frmMessagesDetails"
            },
            "frmNewMessage": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MessagesModule/frmNewMessageController",
                "FormName": "MessagesModule/frmNewMessage",
                "friendlyName": "frmNewMessage"
            },
            "frmNewMessageCategory": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MessagesModule/frmNewMessageCategoryController",
                "FormName": "MessagesModule/frmNewMessageCategory",
                "friendlyName": "frmNewMessageCategory"
            }
        },
        "tablet": {
            "frmMessages": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MessagesModule/frmMessagesController",
                "FormName": "MessagesModule/frmMessages",
                "friendlyName": "frmMessages"
            },
            "frmNewMessage": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MessagesModule/frmNewMessageController",
                "FormName": "MessagesModule/frmNewMessage",
                "friendlyName": "frmNewMessage"
            },
            "frmNewMessageCategory": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "MessagesModule/frmNewMessageCategoryController",
                "FormName": "MessagesModule/frmNewMessageCategory",
                "friendlyName": "frmNewMessageCategory"
            }
        }
    },
    "ModuleName": "MessagesModule",
    "PresentationControllerConfig": {
        "Default": {
            "PresentationControllerClass": "MessagesModule/PresentationControllers/PresentationController",
            "PresentationExtensions": []
        },
        "Tablet": {
            "PresentationControllerClass": "MessagesModule/PresentationControllers/PresentationController_Tablet",
            "PresentationExtensions": []
        }
    }
};