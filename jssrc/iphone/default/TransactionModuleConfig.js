TransactionModuleConfig = {
    "BusinessControllerConfig": {
        "BusinessControllerClass": "TransactionModule/BusinessControllers/BusinessController",
        "CommandHandler": []
    },
    "Forms": {
        "mobile": {
            "frmAdvanceSearch": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "TransactionModule/frmAdvanceSearchController",
                "FormName": "TransactionModule/frmAdvanceSearch",
                "friendlyName": "frmAdvanceSearch"
            },
            "frmTransactionDetails": {
                "Controller": "CheckDepositModule/frmTransactionDetailsController",
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "FormName": "CheckDepositModule/frmTransactionDetails",
                "friendlyName": "frmTransactionDetails"
            },
            "frmTransfers": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "TransactionModule/frmTransfersController",
                "FormName": "TransactionModule/frmTransfers",
                "friendlyName": "frmTransfers"
            }
        },
        "tablet": {
            "frmAdvanceSearch": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "TransactionModule/frmAdvanceSearchController",
                "FormName": "TransactionModule/frmAdvanceSearch",
                "friendlyName": "frmAdvanceSearch"
            },
            "frmTransfers": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "TransactionModule/frmTransfersController",
                "FormName": "TransactionModule/frmTransfers",
				"friendlyName": "frmTransfers"
            },
            "frmAdvanceSearchResults": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "TransactionModule/frmAdvanceSearchResultsController",
                "FormName": "TransactionModule/frmAdvanceSearchResults",
                "friendlyName": "frmAdvanceSearchResults"
            }
        }
    },
    "ModuleName": "TransactionModule",
    "PresentationControllerConfig": {
        "Default": {
            "PresentationControllerClass": "TransactionModule/PresentationControllers/PresentationController",
            "PresentationExtensions": []
        },
        "Tablet": {
            "PresentationControllerClass": "TransactionModule/PresentationControllers/PresentationController_Tablet",
            "PresentationExtensions": []
        }
    },
    "EUROPE":{
    	"ModuleName": "TransactionModule",
        "BusinessControllerConfig": {
        	"BusinessControllerClass": "TransactionModule/BusinessControllers/BusinessController",
        	"CommandHandler": []
     	},
     	"PresentationControllerConfig": {
        	"Default": {
        	    "PresentationControllerClass": "TransactionModule/EUROPE/PresentationControllers/PresentationController",
        	    "PresentationExtensions": []
        },
        "Forms": {
        	"mobile": {
        	    "frmTransfersEurope": {
        	        "Controller": "TransactionModule/frmTransfersEuropeController",
        	        "ControllerExtensions": [],
            	    "FormController": "kony.mvc.MDAFormController",
                	"FormName": "TransactionModule/frmTransfersEurope",
                	"friendlyName": "frmTransfersEurope"
            	}
        	}
         }
      }
   }
};