ChatBotModuleConfig = {
    "BusinessControllerConfig": {
        "BusinessControllerClass": "ChatBotModule/BusinessControllers/BusinessController",
        "CommandHandler": []
    },
    "Forms": {
        "mobile": {
            "frmChatbot": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "ChatBotModule/frmChatbotController",
                "FormName": "ChatBotModule/frmChatbot",
                "friendlyName": "frmChatbot"
            }
        },
        "tablet": {
            "frmChatbot": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "ChatBotModule/frmChatbotController",
                "FormName": "ChatBotModule/frmChatbot",
				"friendlyName": "frmChatbot"
            }
        }
    },
    "ModuleName": "ChatBotModule",
    "PresentationControllerConfig": {
        "Default": {
            "PresentationControllerClass": "ChatBotModule/PresentationControllers/PresentationController",
            "PresentationExtensions": [
                "ChatBotModule/PresentationControllers/PresentationController_Extn"
            ]
        },
        "Tablet": {
            "PresentationControllerClass": "ChatBotModule/PresentationControllers/PresentationController_Tablet",
            "PresentationExtensions": []
        }
    }
};