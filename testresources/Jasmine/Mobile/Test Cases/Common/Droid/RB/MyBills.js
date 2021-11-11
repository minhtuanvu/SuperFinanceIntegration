function navigateToBillPay(){

//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
//   kony.automation.playback.wait(5000);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,5]"]);
//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,5]"]);
//   kony.automation.playback.wait(10000);
  openMenu("My Bills");
  kony.automation.playback.waitFor(["frmBillPay","customHeader","lblLocateUs"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmBillPay","customHeader","lblLocateUs"], "text")).toEqual("My Bills");
  kony.automation.playback.waitFor(["frmBillPay","tbxSearch"],15000);

}

function navigateToManageBillPay(){

  kony.automation.playback.waitFor(["frmBillPay","flxManage"],15000);
  kony.automation.widget.touch(["frmBillPay","flxManage"], [15,51],null,[15,51]);
  kony.automation.playback.waitFor(["frmBillPay","flxManage"],15000);
  kony.automation.flexcontainer.click(["frmBillPay","flxManage"]);
  kony.automation.playback.wait(10000);
  kony.automation.playback.waitFor(["frmBillPayAllPayees","customHeader","lblLocateUs"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmBillPayAllPayees","customHeader","lblLocateUs"], "text")).toEqual("All Payees");
}

function clickOnAddPayeeLinkManually(){

  kony.automation.playback.waitFor(["frmBillPayAllPayees","btnAddPayee"],15000);
  kony.automation.button.click(["frmBillPayAllPayees","btnAddPayee"]);
  kony.automation.playback.waitFor(["frmBillPaySearchPayee","flxAddManually"],15000);
  kony.automation.flexcontainer.click(["frmBillPaySearchPayee","flxAddManually"]);
}

function clickOnAddPayeeCompany(){

  kony.automation.playback.waitFor(["frmBillPayAllPayees","btnAddPayee"],15000);
  kony.automation.button.click(["frmBillPayAllPayees","btnAddPayee"]);

  kony.automation.playback.waitFor(["frmBillPaySearchPayee","tbxSearch"],15000);
  kony.automation.widget.touch(["frmBillPaySearchPayee","tbxSearch"], [95,18],null,null);
  kony.automation.playback.waitFor(["frmBillPaySearchPayee","customSearchbox","tbxSearch"],15000);
  kony.automation.textbox.enterText(["frmBillPaySearchPayee","customSearchbox","tbxSearch"],"at");
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmBillPaySearchPayee","segAddresses"],15000);
  kony.automation.segmentedui.click(["frmBillPaySearchPayee","segAddresses[0,0]"]);
}

function enterPayeeDetails_UsingCompany(unique_Accnumber,unique_PhoneNumber,note){

  kony.automation.playback.waitFor(["frmBillPayZipCode","txtZipCode"],15000);
  kony.automation.textbox.enterText(["frmBillPayZipCode","txtZipCode"],"500055");
  kony.automation.playback.waitFor(["frmBillPayZipCode","btnContinue"],15000);
  kony.automation.button.click(["frmBillPayZipCode","btnContinue"]);

  kony.automation.playback.waitFor(["frmBillPayRelationNumber","keypad","btnOne"],15000);
  for(i=0; i<unique_Accnumber.length; i++){
    kony.automation.button.click(["frmBillPayRelationNumber","keypad", getBtnID(unique_Accnumber.charAt(i))]);
  }
  kony.automation.playback.waitFor(["frmBillPayRelationNumber","btnContinue"],15000);
  kony.automation.button.click(["frmBillPayRelationNumber","btnContinue"]);

  kony.automation.playback.waitFor(["frmBillPayReEnterRelationNumber","keypad","btnOne"],15000);
  for(i=0; i<unique_Accnumber.length; i++){
    kony.automation.button.click(["frmBillPayReEnterRelationNumber","keypad", getBtnID(unique_Accnumber.charAt(i))]);
  }
  kony.automation.playback.waitFor(["frmBillPayReEnterRelationNumber","btnContinue"],15000);
  kony.automation.button.click(["frmBillPayReEnterRelationNumber","btnContinue"]);

  kony.automation.playback.waitFor(["frmBillPayPhoneNumber","keypad","btnFive"],15000);
  for(i=0; i<unique_PhoneNumber.length; i++){
    kony.automation.button.click(["frmBillPayPhoneNumber","keypad", getBtnID(unique_PhoneNumber.charAt(i))]);
  }

  kony.automation.playback.waitFor(["frmBillPayPhoneNumber","btnContinue"],15000);
  kony.automation.button.click(["frmBillPayPhoneNumber","btnContinue"]);

  linkPayee();

  VerifyAddPayeeDetails(note);

}

function enterPayeeDetails_UsingPayeeinfo(unique_RecipitentName,address1,city,state,zipcode,unique_Accnumber,note){

  kony.automation.playback.waitFor(["frmBillPayEditName","txtName"],15000);
  kony.automation.textbox.enterText(["frmBillPayEditName","txtName"],unique_RecipitentName);
  kony.automation.playback.waitFor(["frmBillPayEditName","btnSave"],15000);
  kony.automation.button.click(["frmBillPayEditName","btnSave"]);

  kony.automation.playback.waitFor(["frmBillPayEditAddress","txtAddressLineOne"],15000);
  kony.automation.textbox.enterText(["frmBillPayEditAddress","txtAddressLineOne"],address1);
  kony.automation.playback.waitFor(["frmBillPayEditAddress","txtCity"],15000);
  kony.automation.textbox.enterText(["frmBillPayEditAddress","txtCity"],city);
  kony.automation.playback.waitFor(["frmBillPayEditAddress","txtState"],15000);
  kony.automation.textbox.enterText(["frmBillPayEditAddress","txtState"],state);
  kony.automation.playback.waitFor(["frmBillPayEditAddress","txtZipCode"],15000);
  kony.automation.textbox.enterText(["frmBillPayEditAddress","txtZipCode"],zipcode);
  kony.automation.playback.waitFor(["frmBillPayEditAddress","btnSave"],15000);
  kony.automation.button.click(["frmBillPayEditAddress","btnSave"]);

  kony.automation.playback.waitFor(["frmBillPayEnterAccNo","keypad","btnZero"],15000);
  for(i=0; i<unique_Accnumber.length; i++){
    kony.automation.button.click(["frmBillPayEnterAccNo","keypad", getBtnID(unique_Accnumber.charAt(i))]);
  }

  kony.automation.playback.waitFor(["frmBillPayEnterAccNo","btnContinue"],15000);
  kony.automation.button.click(["frmBillPayEnterAccNo","btnContinue"]);

  kony.automation.playback.waitFor(["frmBillPayReEnterAccNo","keypad","btnZero"],15000);
  for(i=0; i<unique_Accnumber.length; i++){
    kony.automation.button.click(["frmBillPayReEnterAccNo","keypad", getBtnID(unique_Accnumber.charAt(i))]);
  }

  kony.automation.playback.waitFor(["frmBillPayReEnterAccNo","btnContinue"],15000);
  kony.automation.button.click(["frmBillPayReEnterAccNo","btnContinue"]);

  linkPayee();

  VerifyAddPayeeDetails(note);

}

function linkPayee(){

  kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"],15000);
  kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
  kony.automation.playback.waitFor(["frmContracts","btnContinue"],15000);
  kony.automation.button.click(["frmContracts","btnContinue"]);
}

function VerifyAddPayeeDetails(note){

  kony.automation.playback.waitFor(["frmBillPayVerifyDetails","txtNameOnBill"],15000);
  kony.automation.textbox.enterText(["frmBillPayVerifyDetails","txtNameOnBill"],note);
  kony.automation.playback.waitFor(["frmBillPayVerifyDetails","btnContinue"],15000);
  kony.automation.button.click(["frmBillPayVerifyDetails","btnContinue"]);
}

function verifyAddPayeeSuccessMsg(){

  kony.automation.playback.waitFor(["frmAcknowledgement","lblSuccessMessage"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAcknowledgement","lblSuccessMessage"], "text")).not.toBe('');

  //Move Back to DashBoard
  kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"],15000);
  kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
  kony.automation.playback.wait(2000);

  MoveBackfrom_Allpayees();

}

function MoveBackfrom_Allpayees(){

  kony.automation.playback.waitFor(["frmBillPayAllPayees","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmBillPayAllPayees","customHeader","flxBack"]);
  kony.automation.playback.wait(2000);

  MoveBackfrom_Billpay();

}

function MoveBackfrom_Billpay(){

  kony.automation.playback.waitFor(["frmBillPay","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmBillPay","customHeader","flxBack"]);
  kony.automation.playback.wait(2000);
  kony.automation.playback.waitFor(["frmBillPay","Hamburger","segHamburger"],15000);
  kony.automation.segmentedui.click(["frmBillPay","Hamburger","segHamburger[0,0]"]);
  kony.automation.playback.wait(2000);
}

function selectPayee_ManagePayee(PayeeName){

  kony.automation.playback.waitFor(["frmBillPayAllPayees","tbxSearch"],15000);
  kony.automation.widget.touch(["frmBillPayAllPayees","tbxSearch"], [165,20],null,null);
  kony.automation.playback.waitFor(["frmBillPayAllPayees","customSearchbox","tbxSearch"],15000);
  kony.automation.textbox.enterText(["frmBillPayAllPayees","customSearchbox","tbxSearch"],PayeeName);
  kony.automation.playback.wait(2000);
  kony.automation.playback.waitFor(["frmBillPayAllPayees","segAccounts"],15000);
  kony.automation.segmentedui.click(["frmBillPayAllPayees","segAccounts[0,0]"]);
}

function EditPayee_ManagePayee(NickName){

  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","customHeader","btnRight"],15000);
  kony.automation.button.click(["frmBillPayPayeeDetails","customHeader","btnRight"]);
  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","btnEditNickName"],15000);
  kony.automation.button.click(["frmBillPayPayeeDetails","btnEditNickName"]);

  kony.automation.playback.waitFor(["frmBillPayEditName","txtName"],15000);
  kony.automation.textbox.enterText(["frmBillPayEditName","txtName"],NickName);
  kony.automation.playback.waitFor(["frmBillPayEditName","btnSave"],15000);
  kony.automation.button.click(["frmBillPayEditName","btnSave"]);

}

function DeletePayee_ManagePayee(){

  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","btnDeleteRecipient"],15000);
  kony.automation.button.click(["frmBillPayPayeeDetails","btnDeleteRecipient"]);
  kony.automation.playback.wait(5000);
  kony.automation.alert.click(0);
  kony.automation.playback.wait(10000);

  MoveBackfrom_Allpayees();
}

function ActivatePayee_ManagePayee(){

  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","btnActivateEBill"],15000);
  kony.automation.button.click(["frmBillPayPayeeDetails","btnActivateEBill"]);
  kony.automation.playback.wait(5000);
  kony.automation.alert.click(0);
  kony.automation.playback.wait(10000);

  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmBillPayPayeeDetails","customHeader","flxBack"]);
  kony.automation.playback.wait(2000);

  MoveBackfrom_Allpayees();


}

function verifySearch_MyBills(Payee){

  kony.automation.playback.waitFor(["frmBillPay","tbxSearch"],15000);
  kony.automation.widget.touch(["frmBillPay","tbxSearch"], [212,20],null,null);
  kony.automation.playback.waitFor(["frmBillPay","customSearchbox","tbxSearch"],15000);
  kony.automation.textbox.enterText(["frmBillPay","customSearchbox","tbxSearch"],Payee);
  kony.automation.playback.wait(5000);
  //kony.automation.playback.waitFor(["frmBillPay","segTransactions"]);
  //expect(kony.automation.widget.getWidgetProperty(["frmBillPay","segTransactions[0,0]","lblAccountName"], "text")).toEqual("SOMETHING");
  kony.automation.playback.waitFor(["frmBillPay","customSearchbox","btnCancel"],15000);
  kony.automation.button.click(["frmBillPay","customSearchbox","btnCancel"]);

  MoveBackfrom_Billpay();
}

function verifySearch_AllPayees(Payee){

  kony.automation.playback.waitFor(["frmBillPayAllPayees","tbxSearch"],15000);
  kony.automation.widget.touch(["frmBillPayAllPayees","tbxSearch"], [193,14],null,null);
  kony.automation.playback.waitFor(["frmBillPayAllPayees","customSearchbox","tbxSearch"],15000);
  kony.automation.textbox.enterText(["frmBillPayAllPayees","customSearchbox","tbxSearch"],Payee);
  kony.automation.playback.wait(5000);
  //kony.automation.playback.waitFor(["frmBillPayAllPayees","segAccounts"]);
  //expect(kony.automation.widget.getWidgetProperty(["frmBillPayAllPayees","segAccounts[0,0]","lblAccountName"], "text")).toEqual("SOMETHING");
  kony.automation.playback.waitFor(["frmBillPayAllPayees","customSearchbox","btnCancel"],15000);
  kony.automation.button.click(["frmBillPayAllPayees","customSearchbox","btnCancel"]);

  MoveBackfrom_Allpayees();
}


function clickonPayBill_PayeeDetails(){

  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","btnPayAPerson"],15000);
  kony.automation.button.click(["frmBillPayPayeeDetails","btnPayAPerson"]);
}
function EnterBillAmount(amount){

  kony.automation.playback.waitFor(["frmBillPayAmount","keypad","btnTwo"],15000);
  for(i=0; i<amount.length; i++){
    kony.automation.button.click(["frmBillPayAmount","keypad", getBtnID(amount.charAt(i))]);
  }
  kony.automation.playback.waitFor(["frmBillPayAmount","btnContinue"],15000);
  kony.automation.button.click(["frmBillPayAmount","btnContinue"]);
}

function SelectFrequency_BillPay(ValTimePeriod) {


  kony.automation.playback.waitFor(["frmBillPayFrequency","segFrequency"],15000);

  switch(ValTimePeriod){
    case "OneTime":
      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,1]"]);
      break;
    case "Daily":
      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,2]"]);
      break;
    case "Weekly":
      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,3]"]);
      break;
    case "TwoWeeks":
      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,4]"]);
      break;
    case "Monthly":
      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,5]"]);
      break;
    case "QTR":
      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,6]"]);
      break;
    case "TwoYear":
      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,7]"]);
      break;
    case "YEARLY":
      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,8]"]);
      break;
  }

  kony.automation.playback.wait(5000);
}

function selectSendOndate_BillPay(){

  // Selet Start date
  kony.automation.playback.waitFor(["frmBillPayStartDate","customCalendar","flxNextMonth"],15000);
  kony.automation.flexcontainer.click(["frmBillPayStartDate","customCalendar","flxNextMonth"]);
  kony.automation.widget.touch(["frmBillPayStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);

  kony.automation.playback.waitFor(["frmBillPayStartDate","btnContinue"],15000);
  kony.automation.button.click(["frmBillPayStartDate","btnContinue"]);

}

function selectDateRange_BillPay(){

  // Selet Start date
  kony.automation.playback.waitFor(["frmBillPayDuration","segDuration"],15000);
  kony.automation.segmentedui.click(["frmBillPayDuration","segDuration[0,0]"]);

  kony.automation.playback.waitFor(["frmBillPayStartDate","customCalendar","flxNextMonth"],15000);
  kony.automation.flexcontainer.click(["frmBillPayStartDate","customCalendar","flxNextMonth"]);
  kony.automation.widget.touch(["frmBillPayStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);

  kony.automation.playback.waitFor(["frmBillPayStartDate","btnContinue"],15000);
  kony.automation.button.click(["frmBillPayStartDate","btnContinue"]);

  kony.automation.playback.waitFor(["frmBillPayEndDate","customCalendar","flxNextMonth"],15000);
  kony.automation.flexcontainer.click(["frmBillPayEndDate","customCalendar","flxNextMonth"]);
  kony.automation.widget.touch(["frmBillPayEndDate","customCalendar","flxMonth","m3CopyLabel0a7f34907bda844"], null,null,[17,9]);

  kony.automation.playback.waitFor(["frmBillPayEndDate","btnContinue"],15000);
  kony.automation.button.click(["frmBillPayEndDate","btnContinue"]);
}

function enterNoteValue_BillPay(notes){

  kony.automation.playback.waitFor(["frmBillPayConfirmation","txtDescription"],15000);
  kony.automation.textbox.enterText(["frmBillPayConfirmation","txtDescription"],notes);

  kony.automation.playback.waitFor(["frmBillPayConfirmation","flxCheckBox"],15000);
  kony.automation.flexcontainer.click(["frmBillPayConfirmation","flxCheckBox"]);
  kony.automation.playback.waitFor(["frmBillPayConfirmation","btnContinue"],15000);
  kony.automation.button.click(["frmBillPayConfirmation","btnContinue"]);
  kony.automation.playback.wait(5000);

}

function CancelMyBill(){

  kony.automation.playback.waitFor(["frmBillPayFrequency","customHeader","btnRight"],15000);
  kony.automation.button.click(["frmBillPayFrequency","customHeader","btnRight"]);
  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmBillPayPayeeDetails","customHeader","flxBack"]);

  MoveBackfrom_Allpayees();

}


function EditSheduledPayBill(){

  kony.automation.playback.waitFor(["frmBillPay","segTransactions"],15000);

  var sheduledPay= kony.automation.widget.getWidgetProperty(["frmBillPay","segTransactions[1,-1]","lblHeader"], "text");
  if(sheduledPay){

    kony.automation.segmentedui.click(["frmBillPay","segTransactions[1,0]"]);
    kony.automation.playback.wait(5000);

    kony.automation.playback.waitFor(["frmTransactionDetails","customHeader","btnRight"],15000);
    kony.automation.button.click(["frmTransactionDetails","customHeader","btnRight"]);
    kony.automation.playback.wait(5000);

    kony.automation.playback.waitFor(["frmBillPayAmount","btnContinue"],15000);
    kony.automation.button.click(["frmBillPayAmount","btnContinue"]);
    kony.automation.playback.waitFor(["frmBillPayFrequency","segFrequency"],15000);
    kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,0]"]);
    kony.automation.playback.waitFor(["frmBillPayConfirmation","txtDescription"],15000);
    kony.automation.textbox.enterText(["frmBillPayConfirmation","txtDescription"],"Edit Billpay");
    kony.automation.playback.waitFor(["frmBillPayConfirmation","flxCheckBox"],15000);
    kony.automation.flexcontainer.click(["frmBillPayConfirmation","flxCheckBox"]);
    kony.automation.playback.waitFor(["frmBillPayConfirmation","btnContinue"],15000);
    kony.automation.button.click(["frmBillPayConfirmation","btnContinue"]);
    kony.automation.playback.wait(5000);

    MoveBackfrom_Billpay();

  }else{
    MoveBackfrom_Billpay();
  }

}

function RepeatSheduledPayBill(){

  kony.automation.playback.waitFor(["frmBillPay","segTransactions"],15000);

  var RepeatPay= kony.automation.widget.getWidgetProperty(["frmBillPay","segTransactions[2,-1]","lblHeader"], "text");
  if(RepeatPay){

    kony.automation.segmentedui.click(["frmBillPay","segTransactions[2,0]"]);
    kony.automation.playback.wait(5000);
    kony.automation.playback.waitFor(["frmTransactionDetails","btnRepeatTransBP"],15000);
    kony.automation.button.click(["frmTransactionDetails","btnRepeatTransBP"]);
    kony.automation.playback.wait(5000);
    kony.automation.playback.waitFor(["frmBillPayAmount","btnContinue"],15000);
    kony.automation.button.click(["frmBillPayAmount","btnContinue"]);
    kony.automation.playback.waitFor(["frmBillPayFrequency","segFrequency"],15000);
    kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,0]"]);
    kony.automation.playback.waitFor(["frmBillPayConfirmation","txtDescription"],15000);
    kony.automation.textbox.enterText(["frmBillPayConfirmation","txtDescription"],"Repeat Billpay");
    kony.automation.playback.waitFor(["frmBillPayConfirmation","flxCheckBox"],15000);
    kony.automation.flexcontainer.click(["frmBillPayConfirmation","flxCheckBox"]);
    kony.automation.playback.waitFor(["frmBillPayConfirmation","btnContinue"],15000);
    kony.automation.button.click(["frmBillPayConfirmation","btnContinue"]);
    kony.automation.playback.wait(5000);

    MoveBackfrom_Billpay();

  }else{
    MoveBackfrom_Billpay();
  }

}

function getRandomString(length) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var result = '';
  for ( var i = 0; i < length; i++ ) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}

function getBtnID(num){
  switch(num){
    case '0' :
      return "btnZero";
    case '1' :
      return "btnOne";
    case '2' :
      return "btnTwo";
    case '3' :
      return "btnThree";
    case '4' :
      return "btnFour";
    case '5' :
      return "btnFive";
    case '6' :
      return "btnSix";
    case '7' :
      return "btnSeven";
    case '8' :
      return "btnEight";
    case '9' :
      return "btnNine";
  }
}

function getRandomNumber(length) {
  var randomChars = '0123456789';
  var result = '';
  for ( var i = 0; i < length; i++ ) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}

// OLDER Functions

// function Logout() {
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxLogout"],5000);
//   kony.automation.widget.touch(["frmUnifiedDashboard","Hamburger","flxLogout"], null,null,[34,28]);
//   kony.automation.playback.waitFor(["frmLogout","btnLogIn"],10000);
//   kony.automation.button.click(["frmLogout","btnLogIn"]);
//   kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
// }

// /**
//  * @addNewPayee
//  *
//  */
// function addNewPayee(){
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"]);
//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,5]"]);
//   kony.automation.playback.waitFor(["frmBillPay","flxManage"]);
//   kony.automation.flexcontainer.click(["frmBillPay","flxManage"]);
//   kony.automation.playback.waitFor(["frmBillPayAllPayees","btnAddPayee"]);
//   kony.automation.button.click(["frmBillPayAllPayees","btnAddPayee"]);
//   kony.automation.playback.waitFor(["frmBillPaySearchPayee","flxAddManually"]);
//   kony.automation.flexcontainer.click(["frmBillPaySearchPayee","flxAddManually"]);

//   unique_PayeeName="Automationuser Credit card "+getRandomString(5);

//   kony.automation.playback.waitFor(["frmBillPayEditName","txtName"]);
//   kony.automation.textbox.enterText(["frmBillPayEditName","txtName"],unique_PayeeName);
//   kony.automation.button.click(["frmBillPayEditName","btnSave"]);
//   kony.automation.playback.wait(5000);
//   kony.automation.playback.waitFor(["frmBillPayEditAddress","txtAddressLineOne"]);
//   kony.automation.textbox.enterText(["frmBillPayEditAddress","txtAddressLineOne"],"2");
//   kony.automation.textbox.enterText(["frmBillPayEditAddress","txtCity"],"Jersey city");
//   kony.automation.textbox.enterText(["frmBillPayEditAddress","txtState"],"New Jersey");
//   kony.automation.textbox.enterText(["frmBillPayEditAddress","txtZipCode"],"20971");
//   kony.automation.button.click(["frmBillPayEditAddress","btnSave"]);
//   kony.automation.playback.wait(8000);
//   kony.automation.playback.waitFor(["frmBillPayEnterAccNo","keypad","btnOne"]);

//   let uniqueAccNumber = getRandomNumber(9);
//   kony.print("uniqueAccNumber : "+uniqueAccNumber);

//   for(i=0;i<uniqueAccNumber.length; i++){
//     let btnID = getBtnID(uniqueAccNumber.charAt(i));
//     kony.automation.button.click(["frmBillPayEnterAccNo","keypad", btnID]);
//   }

//   kony.automation.button.click(["frmBillPayEnterAccNo","btnContinue"]);
//   kony.automation.playback.wait(5000);

//   kony.automation.playback.waitFor(["frmBillPayReEnterAccNo","keypad","btnOne"]);
//   for(i=0;i<uniqueAccNumber.length; i++){
//     let btnIDNew = getBtnID(uniqueAccNumber.charAt(i));
//     kony.automation.button.click(["frmBillPayReEnterAccNo","keypad", btnIDNew]);
//   }

//   kony.automation.button.click(["frmBillPayReEnterAccNo","btnContinue"]);
//   kony.automation.playback.wait(5000);
//   kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"]);
//   kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
//   kony.automation.playback.waitFor(["frmContracts","btnContinue"]);
//   kony.automation.button.click(["frmContracts","btnContinue"]);
//   kony.automation.playback.waitFor(["frmBillPayVerifyDetails","txtNameOnBill"]);
//   kony.automation.textbox.enterText(["frmBillPayVerifyDetails","txtNameOnBill"],"PhoneVerizon");
//   kony.automation.button.click(["frmBillPayVerifyDetails","btnContinue"]);
//   kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"]);
//   kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
//   kony.automation.playback.waitFor(["frmBillPayAllPayees","tbxSearch"]);
//   kony.automation.widget.touch(["frmBillPayAllPayees","tbxSearch"], [240,8],null,null);
//   kony.automation.textbox.enterText(["frmBillPayAllPayees","customSearchbox","tbxSearch"],"Automationuser");
//   kony.automation.playback.wait(1000);
//   kony.automation.playback.waitFor(["frmBillPayAllPayees","segAccounts"]);
//   kony.automation.segmentedui.scrollToRow(["frmBillPayAllPayees","segAccounts[0,0]"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmBillPayAllPayees","segAccounts[0,0]","lblAccountName"], "text")).not.toBe(null);
//   kony.automation.button.click(["frmBillPayAllPayees","customSearchbox","btnCancel"]);
//   kony.automation.playback.wait(1000);
//   kony.automation.flexcontainer.click(["frmBillPayAllPayees","customHeader","flxBack"]);
//   kony.automation.playback.waitFor(["frmBillPay","customHeader","flxBack"]);
//   kony.automation.flexcontainer.click(["frmBillPay","customHeader","flxBack"]);
//   kony.automation.playback.waitFor(["frmBillPay","Hamburger","segHamburger"]);
//   kony.automation.segmentedui.click(["frmBillPay","Hamburger","segHamburger[0,0]"]);
// }

// /**
//  * @deletePayee
//  *
//  */
// function deletePayee(){
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"]);
//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,5]"]);
//   kony.automation.playback.waitFor(["frmBillPay","flxManage"]);
//   kony.automation.flexcontainer.click(["frmBillPay","flxManage"]);
//   kony.automation.playback.waitFor(["frmBillPayAllPayees","tbxSearch"]);
//   kony.automation.widget.touch(["frmBillPayAllPayees","tbxSearch"], [120,17],null,null);
//   kony.automation.playback.wait(5000);
//   kony.automation.playback.waitFor(["frmBillPayAllPayees","customSearchbox","tbxSearch"]);
//   kony.automation.textbox.enterText(["frmBillPayAllPayees","customSearchbox","tbxSearch"],"Automationuser");
//   kony.automation.segmentedui.click(["frmBillPayAllPayees","segAccounts[0,0]"]);
//   kony.automation.playback.waitFor(["frmBillPayPayeeDetails","btnDeleteRecipient"]);
//   kony.automation.button.click(["frmBillPayPayeeDetails","btnDeleteRecipient"]);
//   kony.automation.playback.wait(4000);
//   kony.automation.alert.click(0);
//   kony.automation.playback.wait(5000);
//   kony.automation.playback.waitFor(["frmBillPayAllPayees","customHeader","flxBack"]);
//   kony.automation.flexcontainer.click(["frmBillPayAllPayees","customHeader","flxBack"]);
//   kony.automation.playback.waitFor(["frmBillPay","customHeader","flxBack"]);
//   kony.automation.flexcontainer.click(["frmBillPay","customHeader","flxBack"]);
//   kony.automation.playback.waitFor(["frmBillPay","Hamburger","segHamburger"]);
//   kony.automation.segmentedui.click(["frmBillPay","Hamburger","segHamburger[0,0]"]);
// }