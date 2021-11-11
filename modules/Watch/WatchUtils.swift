//
//  Utility.swift
//  KWatchOS2 Extension
//
//  Created by Shradhey Tripathi on 21/08/19.
//
import Foundation
import WatchKit

class WatchUtils : NSObject {
  var loadingContainer: WKInterfaceGroup
  var loadingImage : WKInterfaceImage
  static var currency: String = ""
   static var currencyDic: [String:String] =
  [
      "USD": "$", // US Dollar
      "EUR": "€", // Euro
      "CRC": "₡", // Costa Rican Colón
      "GBP": "£", // British Pound Sterling
      "ILS": "₪", // Israeli New Sheqel
      "INR": "₹", // Indian Rupee
      "JPY": "¥", // Japanese Yen
      "KRW": "₩", // South Korean Won
      "NGN": "₦", // Nigerian Naira
      "PHP": "₱", // Philippine Peso
      "PLN": "zł", // Polish Zloty
      "PYG": "₲", // Paraguayan Guarani
      "THB": "฿", // Thai Baht
      "UAH": "₴", // Ukrainian Hryvnia
      "VND": "₫", // Vietnamese Dong]
  ];

  init(loadingContainer_: WKInterfaceGroup, loadingImage_: WKInterfaceImage) {
    self.loadingContainer = loadingContainer_;
    self.loadingImage = loadingImage_;
    super.init();
  }

  func showLoader() {
    if(self.loadingContainer != nil && self.loadingImage != nil) {
      self.loadingContainer.setHidden(false)
      self.loadingImage.setImageNamed("loading");
      self.loadingImage.startAnimatingWithImages(in: NSMakeRange(1,18), duration: 1, repeatCount: 0)
    }
  }
  func stopLoader() {
    if(self.loadingContainer != nil && self.loadingImage != nil) {
      self.loadingContainer.setHidden(true)
      self.loadingImage.stopAnimating();

    }
  }

  class func navigateToForm(_ fromForm : WKInterfaceController, _ toForm : String, _ context: [String : Any]?) {
    DispatchQueue.main.async {
      fromForm.pushController(withName: toForm, context: context)
    }
  }
  /*
  @function: removeNegativeIfRequired
  @param: { Substring } amount
  @description: Takes amount and remove negatives if required
  */
  class func removeNegativeIfRequired(_ amount: String,_ currencyLabel: WKInterfaceLabel) -> Dictionary<String,String> {
    var amount = amount
    let firstCharacter = String(amount.first!)
    var transactionType = "";
    if(firstCharacter == Constants.NEGATIVE_SIGN) {
      transactionType = Constants.NEGATIVE_SIGN
      amount = String(amount.suffix(from: amount.index(amount.startIndex, offsetBy: 1)))
    }
    currencyLabel.setText(transactionType + WatchUtils.currency)
    let splitAmount = amount.split(separator: ".");
    if splitAmount.count == 1 {
        amount = amount + ".00"
    }
    var amountDetails = [String:String]()
    amountDetails["amount"] = amount
    amountDetails["transactionType"] = transactionType
    return amountDetails;
  }
  class func getErrorString(_ error: Error) -> String {
    let code = (error as NSError).code
    var errorString:String = "kony.appleWatch.genericError".localized()
    switch code {
      case 7001:
      errorString = "kony.appleWatch.genericError".localized()
      case 7005:
      errorString = "kony.appleWatch.deviceNotPairedError".localized()
      case 7007:
      errorString = "kony.appleWatch.reachabilityError".localized()
      case 7012:
      errorString = "kony.appleWatch.timeoutError".localized()
      case 7014:
      errorString = "kony.appleWatch.payloadFailureError".localized()
      default:
      errorString = "kony.appleWatch.genericError".localized()
    }
    return errorString;
  }
   class func getCurrencyString(_currencyCode:String) -> String
      {
       
           return self.currencyDic[_currencyCode] ?? WatchUtils.currency;
       
          
      }

}
