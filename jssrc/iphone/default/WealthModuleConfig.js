WealthModuleConfig = {
    "BusinessControllerConfig": {
        "CommandHandler": [],
        "BusinessControllerClass": "WealthModule/BusinessControllers/BusinessController"
    },
    "PresentationControllerConfig": {
        "Default": {
            "PresentationExtensions": [],
            "PresentationControllerClass": "WealthModule/PresentationControllers/PresentationController"
        }
    },
    "Forms": {
        "mobile": {
            "frmInstrumentSearch": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmInstrumentSearchController",
                "FormName": "WealthModule/frmInstrumentSearch",
                "friendlyName": "frmInstrumentSearch"
            },
            "frmPortfolioDetails": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmPortfolioDetailsController",
                "FormName": "WealthModule/frmPortfolioDetails",
                "friendlyName": "frmPortfolioDetails"
            },
            "frmConvertCurrency": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmConvertCurrencyController",
                "FormName": "WealthModule/frmConvertCurrency",
                "friendlyName": "frmConvertCurrency"
            },
            "frmConvertCurrencyAck": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmConvertCurrencyAckController",
                "FormName": "WealthModule/frmConvertCurrencyAck"
            },
            "frmConvertCurrencyVerify": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmConvertCurrencyVerifyController",
                "FormName": "WealthModule/frmConvertCurrencyVerify",
                "friendlyName": "frmConvertCurrencyVerify"
            },
            "frmScheduleDate": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmScheduleDateController",
                "FormName": "WealthModule/frmScheduleDate",
                "friendlyName": "frmScheduleDate"
            },
            "frmSelectCurrency": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmSelectCurrencyController",
                "FormName": "WealthModule/frmSelectCurrency"
            },
            "frmHoldings": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmHoldingsController",
                "FormName": "WealthModule/frmHoldings",
                "friendlyName": "frmHoldings"
            },
            "frmCurrencyChart": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmCurrencyChartController",
                "FormName": "WealthModule/frmCurrencyChart"
            },
            "frmSortBy": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmSortByController",
                "FormName": "WealthModule/frmSortBy",
                "friendlyName": "frmSortBy"
            },
            "frmTransactions": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmTransactionsController",
                "FormName": "WealthModule/frmTransactions",
                "friendlyName": "frmTransactions"
            },
            "frmInstrumentDetails": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmInstrumentDetailsController",
                "FormName": "WealthModule/frmInstrumentDetails",
                "friendlyName": "frmInstrumentDetails"
            },
            "frmDateRange": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmDateRangeController",
                "FormName": "WealthModule/frmDateRange",
                "friendlyName": "frmDateRange"
            },
            "frmAccounts": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmAccountsController",
                "FormName": "WealthModule/frmAccounts",
                "friendlyName": "frmAccounts"
            },
            "frmToCurrency": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmToCurrencyController",
                "FormName": "WealthModule/frmToCurrency",
                "friendlyName": "frmToCurrency"
            },
            "frmTopNews": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmTopNewsController",
                "FormName": "WealthModule/frmTopNews",
                "friendlyName": "frmTopNews"
            },
            "frmTopNewsDetails": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmTopNewsDetailsController",
                "FormName": "WealthModule/frmTopNewsDetails",
                "friendlyName": "frmTopNewsDetails"
            },
            "frmPlaceOrder": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmPlaceOrderController",
                "FormName": "WealthModule/frmPlaceOrder",
                "friendlyName": "frmPlaceOrder"
            },
            "frmPlaceOrderVerifyDetails": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmPlaceOrderVerifyDetailsController",
                "FormName": "WealthModule/frmPlaceOrderVerifyDetails",
                "friendlyName": "frmPlaceOrderVerifyDetails"
            },
            "frmInstrumentOrder": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmInstrumentOrderController",
                "FormName": "WealthModule/frmInstrumentOrder",
                "friendlyName": "frmInstrumentOrder"
            },
            "frmInstrumentOrderAck": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmInstrumentOrderAckController",
                "FormName": "WealthModule/frmInstrumentOrderAck",
                "friendlyName": "frmInstrumentOrderAck"
            },
            "frmOrderType": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmOrderTypeController",
                "FormName": "WealthModule/frmOrderType",
                "friendlyName": "frmOrderType"
            },
            "frmValidity": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmValidityController",
                "FormName": "WealthModule/frmValidity",
                "friendlyName": "frmValidity"
            },
            "frmExpertOpinion": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmExpertOpinionController",
                "FormName": "WealthModule/frmExpertOpinion",
                "friendlyName": "frmExpertOpinion"
            },
            "frmInvestmentAcc": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmInvestmentAccController",
                "FormName": "WealthModule/frmInvestmentAcc"
            },
            "frmOrder": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmOrderController",
                "FormName": "WealthModule/frmOrder",
                "friendlyName": "frmOrder"
            },
            "frmJointAccount": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmJointAccountController",
                "FormName": "WealthModule/frmJointAccount",
                "friendlyName": "frmJointAccount"
            },
            "frmReportType": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmReportTypeController",
                "FormName": "WealthModule/frmReportType",
                "friendlyName": "frmReportType"
            },
            "frmReport": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmReportController",
                "FormName": "WealthModule/frmReport",
                "friendlyName": "frmReport"
            },
            "frmOrders": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmOrdersController",
                "FormName": "WealthModule/frmOrders",
                "friendlyName": "frmOrders"
            },
            "frmViewOrderHistoryDetails": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmViewOrderHistoryDetailsController",
                "FormName": "WealthModule/frmViewOrderHistoryDetails",
                "friendlyName": "frmViewOrderHistoryDetails"
            },
            "frmViewOpenOrderDetails": {
                "ControllerExtensions": [],
                "FormController": "kony.mvc.MDAFormController",
                "Controller": "WealthModule/frmViewOpenOrderDetailsController",
                "FormName": "WealthModule/frmViewOpenOrderDetails",
                "friendlyName": "frmViewOpenOrderDetails"
            }
        }
    },
    "ModuleName": "WealthModule"
};