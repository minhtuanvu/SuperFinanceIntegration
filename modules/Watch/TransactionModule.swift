class Transactions: NSObject {
    static var sharedInstance:Transactions? = nil

    class func getSharedInstance() -> (Transactions) {
        if(sharedInstance == nil){
            sharedInstance =  Transactions();
        }
        return sharedInstance!;
    }

    /*
     @function: fetchTransactions
     @param: { Interface Controller } form
     @param: { AnyObject } context
     @description: initiates "fetch transactions" request from watch to iPhone and get the response
     */
    func fetchTransactions(_ form :frmDashboardController, _ context: AnyObject) {
        form.segAccounts.setHidden(true)
        let loaderInstance = WatchUtils(loadingContainer_: form.grpLoader, loadingImage_: form.imgLoading)
        form.lblLoading.setText("kony.appleWatch.fetchingTransactions".localized())
        loaderInstance.showLoader()
        let rowData = context as! Dictionary<String, AnyObject>
        let sndMsg = SendMessage.getSharedInstance()
        var dict =  [String:Any]()

        dict[Constants.REQUEST_KEY] = Constants.FETCH_TRANSACTION_REQUEST
        dict["accountID"] = rowData ["accountID"]
        var isRequestHandled:Bool = false
        func fetchTransactionsCallback(_ dataResults:[String : Any]) {
            if(!isRequestHandled){
                print("fetch transaction results: \(dataResults)")
                isRequestHandled = true
                let keyExists = dataResults[Constants.ERROR] != nil
                if keyExists == true {
                    WatchUtils.navigateToForm(form,Constants.ERROR_FORM,dataResults)
                } else {
                    var contextWithRowData =  [String:Any]()
                    contextWithRowData["context"] = dataResults
                    contextWithRowData["rowData"] = rowData
                    WatchUtils.navigateToForm(form,Constants.TRANSACTION_FORM,contextWithRowData)
                }
                loaderInstance.stopLoader()
                form.segAccounts.setHidden(false)
            }
        }

        func onErrorCallback(_ error:Error){
            if(!isRequestHandled) {
                isRequestHandled = true
                print(error)
                loaderInstance.stopLoader();
                form.segAccounts.setHidden(false)
                let errorString:String = WatchUtils.getErrorString(error);
                let dataResults:[String:Any] = [Constants.ERROR:errorString]
                WatchUtils.navigateToForm(form,Constants.ERROR_FORM,dataResults)
            }
        }

        if(sndMsg.messageQueue.count > 0) {
            sndMsg.messageQueue.removeAll()
        }

        sndMsg.messageQueue.append(MessageQueueItem(message_: dict , replyHandler_:fetchTransactionsCallback, errorHandler_: onErrorCallback, form_: form))
        let messageQueueItem = sndMsg.messageQueue[0]
        sndMsg.requestData(messageQueueItem.message, replyHandler: messageQueueItem.replyHandler, errorHandler: onErrorCallback, messageQueueItem.form);
    }

    /*
     @function: setDetail
     @param: { Interface Controller } form
     @param: { AnyObject } context
     @description: Using the response in context object set the UI in watch based on group type
     */
    func setDetail(_ form: frmTransactionsController, _ context: AnyObject?) {
        let contextWithRowData = context as! Dictionary<String,AnyObject>
        let info = contextWithRowData["context"] as! Dictionary<String,AnyObject>
        let rowData_local = contextWithRowData["rowData"] as! Dictionary<String,AnyObject>
        var pendingTransactions = info["pendingTransactions"] as! Array<AnyObject>
        var postedTransactions = info["postedTransactions"] as! Array<AnyObject>
        var amountDetails = [String:String]()
        if pendingTransactions == nil {
            pendingTransactions = [AnyObject]()
        }
        if postedTransactions == nil {
            postedTransactions = [AnyObject]()
        }
        let account_type = rowData_local["accountType"] as! String
        print(rowData_local);
        form.lblAccountType!.setText(rowData_local["nickName"] as! String)
        form.lblNoTransactions.setText("kony.mb.accdetails.noTransactionMsg".localized())
        form.lblPostedTransactions.setText("kony.applewatch.transactions.PostedTransactions".localized())
        form.lblPendingTransactions.setText("kony.mb.accdetails.pendingTransactions".localized())

        switch account_type {
        case Constants.ACCOUNT_TYPE_CHECKING:
            //Show Available Balance
            form.grpAvailableBalance.setHidden(false)
            var amount = rowData_local[Constants.KEY_AVAILABLE_BALANCE] as! String != "" ? (rowData_local[Constants.KEY_AVAILABLE_BALANCE] as! String) : Constants.ZERO_BALANCE
            amountDetails = WatchUtils.removeNegativeIfRequired(amount, form.lblCurrencyAvailableBalance)
            form.lblCurrencyAvailableBalance.setText(WatchUtils.getCurrencyString(_currencyCode:rowData_local["currencyCode"] as? String ?? "kony.appleWatch.noCurrency".localized() ))
            amount = amountDetails["amount"]!
            let splitAvailableBalance = amount.split(separator: ".")
            form.lblAmountBeforeDecimalAvailableBalance.setText(String(splitAvailableBalance[0]));
            form.lblAmountAfterDecimalAvailableBalance.setText(String(splitAvailableBalance[1]));
            form.lblAvailableBalance.setText("kony.mb.common.AvailableBalance".localized());

            //Show Current Balance
            form.grpCurrentBalance.setHidden(false)
            var currentAmount = rowData_local[Constants.KEY_CURRENT_BALANCE] as! String != "" ? (rowData_local[Constants.KEY_CURRENT_BALANCE] as! String) : Constants.ZERO_BALANCE
            amountDetails = WatchUtils.removeNegativeIfRequired(currentAmount, form.lblCurrencyCurrentBalance)
            form.lblCurrencyCurrentBalance.setText(WatchUtils.getCurrencyString(_currencyCode: rowData_local["currencyCode"] as? String ?? "kony.appleWatch.noCurrency".localized()))
            currentAmount = amountDetails["amount"]!
            let splitCurrentBalance = currentAmount.split(separator: ".")
            form.lblAmountBeforeDecimalCurrentBalance.setText(String(splitCurrentBalance[0]))
            form.lblAmountAfterDecimalCurrentBalance.setText(String(splitCurrentBalance[1]))
            form.lblCurrentBalance.setText("kony.mb.accounts.CurrentBalance".localized());

            //Hide Outstanding Balance,Upcoming Bill and Maturity Date
            form.grpOutstandingBalance.setHidden(true);
            form.grpUpcomingBill.setHidden(true);
            form.grpMaturityDate.setHidden(true);

            break;

        case Constants.ACCOUNT_TYPE_SAVINGS:
            //Show Available Balance
            form.grpAvailableBalance.setHidden(false)
            var amount = rowData_local[Constants.KEY_AVAILABLE_BALANCE] as! String != "" ? (rowData_local[Constants.KEY_AVAILABLE_BALANCE] as! String) : Constants.ZERO_BALANCE
            amountDetails = WatchUtils.removeNegativeIfRequired(amount, form.lblCurrencyAvailableBalance);      
            form.lblCurrencyAvailableBalance.setText(WatchUtils.getCurrencyString(_currencyCode:rowData_local["currencyCode"] as? String ?? "kony.appleWatch.noCurrency".localized() ))

            amount = amountDetails["amount"]!
            let splitAvailableBalance = amount.split(separator: ".")
            form.lblAmountBeforeDecimalAvailableBalance.setText(String(splitAvailableBalance[0]));
            form.lblAmountAfterDecimalAvailableBalance.setText(String(splitAvailableBalance[1]));
            form.lblAvailableBalance.setText("kony.mb.common.AvailableBalance".localized());

            //Show Current Balance
            form.grpCurrentBalance.setHidden(false)
            var currentAmount = rowData_local[Constants.KEY_CURRENT_BALANCE] as! String != "" ? (rowData_local[Constants.KEY_CURRENT_BALANCE] as! String) : Constants.ZERO_BALANCE
            amountDetails = WatchUtils.removeNegativeIfRequired(currentAmount, form.lblCurrencyCurrentBalance);        
            form.lblCurrencyCurrentBalance.setText(WatchUtils.getCurrencyString(_currencyCode: rowData_local["currencyCode"] as? String ?? "kony.appleWatch.noCurrency".localized()))
            currentAmount = amountDetails["amount"]!
            let splitCurrentBalance = currentAmount.split(separator: ".")
            form.lblAmountBeforeDecimalCurrentBalance.setText(String(splitCurrentBalance[0]))
            form.lblAmountAfterDecimalCurrentBalance.setText(String(splitCurrentBalance[1]))
            form.lblCurrentBalance.setText("kony.mb.accounts.CurrentBalance".localized());

            //Hide Outstanding Balance,Upcoming Bill and Maturity Date
            form.grpOutstandingBalance.setHidden(true);
            form.grpUpcomingBill.setHidden(true);
            form.grpMaturityDate.setHidden(true);

            break;


        case Constants.ACCOUNT_TYPE_CREDIT_CARD:

            //Show Current Balance
            form.grpCurrentBalance.setHidden(false);
            var amount = rowData_local[Constants.KEY_OUT_BALANCE] as! String != "" ? (rowData_local[Constants.KEY_OUT_BALANCE] as! String) : Constants.ZERO_BALANCE
            amountDetails = WatchUtils.removeNegativeIfRequired(amount, form.lblCurrencyCurrentBalance);    
            form.lblCurrencyCurrentBalance.setText(WatchUtils.getCurrencyString(_currencyCode: rowData_local["currencyCode"] as? String ?? "kony.appleWatch.noCurrency".localized()))
            amount = amountDetails["amount"]!
            let splitCurrentBalance = amount.split(separator: ".")
            form.lblAmountBeforeDecimalCurrentBalance.setText(String(splitCurrentBalance[0]))
            form.lblAmountAfterDecimalCurrentBalance.setText(String(splitCurrentBalance[1]))
            form.lblCurrentBalance.setText("kony.mb.accounts.CurrentBalance".localized());

            //Show Upcoming Bill
            form.grpUpcomingBill.setHidden(false);
            var upcomingBillAmount = rowData_local[Constants.KEY_UPCOMING_BILL] as! String != "" ? (rowData_local[Constants.KEY_UPCOMING_BILL] as! String) : Constants.ZERO_BALANCE
            amountDetails = WatchUtils.removeNegativeIfRequired(upcomingBillAmount, form.lblCurrencyUpcomingBill);
            form.lblCurrencyUpcomingBill.setText(WatchUtils.getCurrencyString(_currencyCode: rowData_local["currencyCode"] as? String ?? "kony.appleWatch.noCurrency".localized()))
            upcomingBillAmount = amountDetails["amount"]!
            let splitUpcomingBillAmount = upcomingBillAmount.split(separator: ".")

            form.lblUpcomingBill!.setText("kony.mb.accdetails.upcomingBal".localized())
            form.lblAmountBeforeDecimalUpcomingBill!.setText(String(splitUpcomingBillAmount[0]))
            form.lblAmountAfterDecimalUpcomingBill!.setText(String(splitUpcomingBillAmount[1]))

            //Show Due Date
            let dateStr = rowData_local[Constants.KEY_DUE_DATE] as! String
            form.lblDate.setText(dateStr)
            form.lblDueOn.setText("kony.mb.accountdetails.dueon".localized());

            //Hide Outstanding Balance,Available Balance and Maturity Date
            form.grpOutstandingBalance.setHidden(true);
            form.grpAvailableBalance.setHidden(true);
            form.grpMaturityDate.setHidden(true);
            break;

        case Constants.ACCOUNT_TYPE_LOAN:

            //Show Outstanding Balance
            form.grpOutstandingBalance.setHidden(false);
            var amount = rowData_local[Constants.KEY_OUT_BALANCE] as! String != "" ? (rowData_local[Constants.KEY_OUT_BALANCE] as! String) : Constants.ZERO_BALANCE
            amountDetails = WatchUtils.removeNegativeIfRequired(amount, form.lblCurrencyOutstandingBalance)
            form.lblCurrencyOutstandingBalance.setText(WatchUtils.getCurrencyString(_currencyCode: rowData_local["currencyCode"] as! String))
            amount = amountDetails["amount"]!
            let splitOutstandingBalance = amount.split(separator: ".")
            form.lblAmountBeforeDecimalOutstandingBalance.setText(String(splitOutstandingBalance[0]))
            form.lblAmountAfterDecimalOutstandingBalance.setText(String(splitOutstandingBalance[1]))
        form.lblOutstandingBalance.setText("kony.mb.accounts.OutstandingPrincipleBalance".localized());

            //Show Upcoming Bill
            form.grpUpcomingBill.setHidden(false);
            var upcomingBillAmount = rowData_local[Constants.KEY_CURRENT_DUE] as! String != "" ? (rowData_local[Constants.KEY_CURRENT_DUE] as! String) : Constants.ZERO_BALANCE
            amountDetails = WatchUtils.removeNegativeIfRequired(upcomingBillAmount, form.lblCurrencyUpcomingBill)
            form.lblCurrencyUpcomingBill.setText(WatchUtils.getCurrencyString(_currencyCode: rowData_local["currencyCode"] as? String ?? "kony.appleWatch.noCurrency".localized()))

            upcomingBillAmount = amountDetails["amount"]!
            let splitUpcomingBillAmount = upcomingBillAmount.split(separator: ".")

            form.lblUpcomingBill!.setText("kony.mb.accounts.CurrentDue".localized())
            form.lblAmountBeforeDecimalUpcomingBill!.setText(String(splitUpcomingBillAmount[0]))
            form.lblAmountAfterDecimalUpcomingBill!.setText(String(splitUpcomingBillAmount[1]))

            //Show Due Date
            let dateStr = rowData_local[Constants.KEY_DUE_DATE] as! String
            form.lblDate.setText(dateStr)
            form.lblDueOn.setText("kony.mb.accountdetails.dueon".localized());

            //Hide Available Balance, Current Balance and Maturity Date
            form.grpCurrentBalance.setHidden(true);
            form.grpAvailableBalance.setHidden(true);
            form.grpMaturityDate.setHidden(true);

            break;

        case Constants.ACCOUNT_TYPE_DEPOSIT:

            //Show Current Balance
            form.grpCurrentBalance.setHidden(false);
            var amount = rowData_local[Constants.KEY_CURRENT_BALANCE] as! String != "" ? (rowData_local[Constants.KEY_CURRENT_BALANCE] as! String) : Constants.ZERO_BALANCE

            amountDetails = WatchUtils.removeNegativeIfRequired(amount, form.lblCurrencyCurrentBalance);
            form.lblCurrencyCurrentBalance.setText(WatchUtils.getCurrencyString(_currencyCode: rowData_local["currencyCode"] as? String ?? "kony.appleWatch.noCurrency".localized()))
            amount = amountDetails["amount"]!
            let splitCurrentBalance = amount.split(separator: ".")
            form.lblAmountBeforeDecimalCurrentBalance.setText(String(splitCurrentBalance[0]))
            form.lblAmountAfterDecimalCurrentBalance.setText(String(splitCurrentBalance[1]))
            form.lblCurrentBalance.setText("kony.mb.accounts.CurrentBalance".localized())

            //Show Maturity Date
            form.grpMaturityDate.setHidden(false);
            let dateStr = rowData_local[Constants.KEY_MATURITY_DATE] as! String
            form.lblMaturityDateValue.setText(dateStr);
            form.lblMaturityDateText.setText("kony.mb.accounts.MaturityDate".localized())

            //Hide Available Balance, Outstanding Balance and Upcoming Bill
            form.grpOutstandingBalance.setHidden(true);
            form.grpAvailableBalance.setHidden(true);
            form.grpUpcomingBill.setHidden(true);

            break;


        default:
            break;
        }

        if pendingTransactions.count == 0 && postedTransactions.count == 0 {
            form.lblPendingTransactions.setHidden(true)
            form.lblPostedTransactions.setHidden(true)
            form.lblNoTransactions.setHidden(false)
        } else if pendingTransactions.count == 0 {
            form.lblPendingTransactions.setHidden(true)
        } else if postedTransactions.count == 0{
            form.lblPostedTransactions.setHidden(true)
        }
        //Populate Pending Transactions
        form.segPendingTransactions.setNumberOfRows(pendingTransactions.count, withRowType:Constants.PENDING_TRANSACTION_TEMPLATE_TYPE)
        for index in 0..<pendingTransactions.count {
            var transaction_local = pendingTransactions[index] as! Dictionary<String,AnyObject>
            var segmentRow = form.segPendingTransactions.rowController(at: index)
            var pendingAmount = transaction_local["amount"] as! String;
            amountDetails = WatchUtils.removeNegativeIfRequired(pendingAmount, (segmentRow! as AnyObject).lblCurrencyTransactionDetail)
            pendingAmount = amountDetails["amount"]!
            let transactionType = amountDetails["transactionType"]!
            
            if transactionType == Constants.NEGATIVE_SIGN {
                (segmentRow! as AnyObject).grpIndicator!.setBackgroundColor(UIColor(red:0.93, green:0, blue:0.02, alpha:1))
            }
            else {
                (segmentRow! as AnyObject).grpIndicator!.setBackgroundColor(UIColor(red:0.02, green:0.67, blue:0.09, alpha:1))
            }
            let splitAmountWithDecimal = pendingAmount.split(separator: ".")

            (segmentRow! as AnyObject).lblAmountBeforeDecimalTransactionDetail!.setText(String(splitAmountWithDecimal[0]))
            (segmentRow! as AnyObject).lblAmountAfterDecimalTransactionDetail!.setText(String(splitAmountWithDecimal[1]))
            (segmentRow! as AnyObject).lblCurrencyTransactionDetail!.setText(WatchUtils.getCurrencyString(_currencyCode: transaction_local["transactionCurrency"] as? String ??  "kony.appleWatch.noCurrency".localized()))
            (segmentRow! as AnyObject).lblDatePendingTransaction!.setText(transaction_local["transactionDate"] as! String)
            (segmentRow! as AnyObject).lblTransactionDescription!.setText(transaction_local["description"] as! String)
        }

        //Populate Posted Transactions
        form.segPostedTransactions.setNumberOfRows(postedTransactions.count, withRowType:Constants.POSTED_TRANSACTION_TEMPLATE_TYPE)
        for index in 0..<postedTransactions.count {
            var transaction_local = postedTransactions[index] as! Dictionary<String,AnyObject>
            var segmentRowPosted = form.segPostedTransactions.rowController(at: index)
            var postedAmount = transaction_local["amount"] as! String;
            amountDetails = WatchUtils.removeNegativeIfRequired(postedAmount, (segmentRowPosted! as AnyObject).lblCurrencyTransactionDetail)
            postedAmount = amountDetails["amount"]!
            var transactionType = amountDetails["transactionType"]!

            if transactionType == Constants.NEGATIVE_SIGN {
                (segmentRowPosted! as AnyObject).grpIndicator!.setBackgroundColor(UIColor(red:0.93, green:0, blue:0.02, alpha:1))
            }
            else {
                (segmentRowPosted! as AnyObject).grpIndicator!.setBackgroundColor(UIColor(red:0.02, green:0.67, blue:0.09, alpha:1))
                
            }
            let splitAmountWithDecimal = postedAmount.split(separator: ".")

            (segmentRowPosted! as AnyObject).lblAmountBeforeDecimalTransactionDetail!.setText(String(splitAmountWithDecimal[0]))
            (segmentRowPosted! as AnyObject).lblAmountAfterDecimalTransactionDetail!.setText(String(splitAmountWithDecimal[1]))
            (segmentRowPosted! as AnyObject).lblCurrencyTransactionDetail!.setText(WatchUtils.getCurrencyString(_currencyCode: transaction_local["transactionCurrency"] as? String ?? "kony.appleWatch.noCurrency".localized() ))
            (segmentRowPosted! as AnyObject).lblDatePendingTransaction!.setText(transaction_local["transactionDate"] as! String)
            (segmentRowPosted! as AnyObject).lblTransactionDescription!.setText(transaction_local["description"] as! String)
        }
    }
}
