import Foundation
import WatchKit


class Accounts: NSObject {
  static var sharedInstance:Accounts? = nil;

  class func getSharedInstance() -> (Accounts) {
    if(sharedInstance == nil){
      sharedInstance =  Accounts();
    }
    return sharedInstance!;
  }

  func createAndActivateSession(){
    let sndMsg = SendMessage.getSharedInstance()
  }

  /*
  @function: fetchAccounts
  @param: { Interface Controller } form
  @description: Initiates "fetchAccounts" request from watch to iPhone and get the response in watch
  */

  func fetchAccounts(_ form :frmSplashScreenController) {
    let loaderInstance = WatchUtils(loadingContainer_: form.grpLoader, loadingImage_: form.imgLoading)
    loaderInstance.showLoader()

    var isRequestHandled:Bool = false

    let sndMsg = SendMessage.getSharedInstance()

    func fetchAccountsCallback(_ dataResults:[String : Any]) {
      if(!isRequestHandled){
        isRequestHandled = true
        print("fetch results: \(dataResults)")
        let keyExists = dataResults[Constants.ERROR] != nil
        var toForm:String = Constants.DASHBOARD_FORM
        if keyExists == true {
          toForm = Constants.ERROR_FORM
        }
        WatchUtils.navigateToForm(form,toForm,dataResults)
        loaderInstance.stopLoader()
      }
    }

    func onErrorCallback(_ error:Error){
      if(!isRequestHandled){
        isRequestHandled = true
        print(error)
        loaderInstance.stopLoader();
        let errorString:String = WatchUtils.getErrorString(error);
        let dataResults:[String:Any] = [Constants.ERROR:errorString]
        WatchUtils.navigateToForm(form,Constants.ERROR_FORM,dataResults)
      }
    }

    let msg = [Constants.REQUEST_KEY: Constants.FETCH_ACCOUNT_REQUEST]
    if(sndMsg.messageQueue.count > 0) {
      sndMsg.messageQueue.removeAll()
    }
    sndMsg.messageQueue.append(MessageQueueItem(message_: msg , replyHandler_:fetchAccountsCallback, errorHandler_: onErrorCallback,form_: form))
    let messageQueueItem = sndMsg.messageQueue[0]
    sndMsg.requestData(messageQueueItem.message, replyHandler: messageQueueItem.replyHandler, errorHandler: onErrorCallback, messageQueueItem.form);
  }

  var accounts = [] as! Array<AnyObject>
  /*
  @function: setAccountsData
  @param: { Interface Controller } form
  @param: { Dictionary<String,AnyObject> } context
  @description: Use the account details in "context" dictionary and set the data to the watch UI
  */
  func setAccountsData(_ form: frmDashboardController, _ context: AnyObject?) {
    let accountsContext = context as! Dictionary<String,AnyObject>
    Bundle.setLanguage(lang: accountsContext["Locale"] as! String)
    var accounts_string = accountsContext["Accounts"] as! String
    let data = accounts_string.data(using: .utf8)!
    do {
      if let jsonArray = try JSONSerialization.jsonObject(with: data, options : .allowFragments) as? [Dictionary<String,Any>]
      {
        accounts = jsonArray as! Array<AnyObject>
        print("Array \(accounts)")

      } else {
        print("bad json")
      }
    } catch let error as NSError {
      print(error)
    }
    let currency = accountsContext["Currency"] as! String
    WatchUtils.currency = currency
    form.segAccounts.setNumberOfRows(accounts.count, withRowType: Constants.ACCOUNT_TEMPLATE_TYPE)

    for index in 0..<accounts.count
    {
      let segmentRow = form.segAccounts.rowController(at: index)
      let info = accounts[index] as! Dictionary<String,AnyObject>
      if(segmentRow != nil)
      {
        let account_type = info["accountType"] as! String
        var amount = "";
        var balanceTypeLabelText = "";
        switch account_type {
          case Constants.ACCOUNT_TYPE_SAVINGS :
          amount = info[Constants.KEY_AVAILABLE_BALANCE] as! String
          balanceTypeLabelText = "kony.mb.common.AvailableBalance"
          break;
          case Constants.ACCOUNT_TYPE_CHECKING :
          amount = info[Constants.KEY_AVAILABLE_BALANCE] as! String
          balanceTypeLabelText = "kony.mb.common.AvailableBalance"
          break;
          case Constants.ACCOUNT_TYPE_CREDIT_CARD:
          amount = info[Constants.KEY_OUT_BALANCE] as! String
          balanceTypeLabelText = "kony.mb.accdetails.outstandingBal"
          break
          case Constants.ACCOUNT_TYPE_LOAN:
          amount = info[Constants.KEY_OUT_BALANCE] as! String
          balanceTypeLabelText = "kony.mb.accdetails.outstandingBal"
          break
          case Constants.ACCOUNT_TYPE_DEPOSIT:
          amount = info[Constants.KEY_CURRENT_BALANCE] as! String
          balanceTypeLabelText = "kony.mb.accounts.CurrentBalance"
          break
          default:
          amount = Constants.ZERO_BALANCE
          balanceTypeLabelText = "kony.mb.common.AvailableBalance"
          break;
        }
        if(amount == "") {
          amount = Constants.ZERO_BALANCE;
        }
        var amountDetails = WatchUtils.removeNegativeIfRequired(amount, (segmentRow! as AnyObject).lblCurrency)
        amount = amountDetails["amount"]!
        let splitAmountWithDecimal = amount.split(separator: ".")
        let account_name = info["nickName"] as! String
        (segmentRow! as AnyObject).lblAccountType!.setText(account_name)
        (segmentRow! as AnyObject).lblCurrency!.setText(WatchUtils.getCurrencyString(_currencyCode: info["currencyCode"] as? String ?? "kony.appleWatch.noCurrency".localized()))
        (segmentRow! as AnyObject).lblAmountBeforeDecimal!.setText(String(splitAmountWithDecimal[0]))
        (segmentRow! as AnyObject).lblAmountAfterDecimal!.setText(String(splitAmountWithDecimal[1]))
        (segmentRow! as AnyObject).lblBalanceType!.setText(balanceTypeLabelText.localized())
      }
    }
  }
  /*
  @function: onClickAccount
  @param: { Interface Controller } form
  @param: { WKInterfaceTable } table
  @param: { Int } rowIndex
  @description: Get called when an account card is clicked and initiates "fetchTransactions" api
  */
  func onClickAccount(_ form: frmDashboardController, _ table: WKInterfaceTable, _ rowIndex: Int) {
     let rowData = accounts[rowIndex];
     Transactions.getSharedInstance().fetchTransactions(form, rowData)
  }
}
