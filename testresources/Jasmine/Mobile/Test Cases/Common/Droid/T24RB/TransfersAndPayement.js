function navigateToTransfers(){

//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
//   kony.automation.playback.wait(5000);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
//   kony.automation.playback.wait(10000);
  
  openMenu("Transfers");
  
}

function NavigateToPayements(){
  openMenu("Send Money");
}

function SelectFromAccount(fromAccount){
  kony.automation.playback.wait(5000);
 let currFormName = kony.automation.getCurrentForm();

  kony.automation.playback.waitFor([currFormName,"tbxSearch"],15000);
  kony.automation.widget.touch([currFormName,"tbxSearch"], [232,14],null,null);
  kony.automation.playback.waitFor([currFormName,"customSearchbox","tbxSearch"],15000);
  kony.automation.textbox.enterText([currFormName,"customSearchbox","tbxSearch"],fromAccount);
  kony.automation.playback.wait(3000);
  expect(kony.automation.widget.getWidgetProperty([currFormName,"segTransactions[0,0]","lblAccountName"], "text")).not.toBe('');
  kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
  kony.automation.segmentedui.click([currFormName,"segTransactions[0,0]"]);
  kony.automation.playback.wait(5000);

}
function ClickOnTransferToNewRecipient(){

	kony.automation.playback.waitFor(["frmEuropeTransferToAccountSM","btnNewAccount"],15000);
	kony.automation.button.click(["frmEuropeTransferToAccountSM","btnNewAccount"]);
	kony.automation.playback.waitFor(["frmEuropeTransferToAccountNewBen","SegSelectBank"],15000);
}

function SelectToAccount(ToAccReciptent){
	let currFormName = kony.automation.getCurrentForm();
  kony.automation.playback.waitFor([currFormName,"tbxSearch"],15000);
  kony.automation.widget.touch([currFormName,"tbxSearch"], [72,22],null,[72,65]);

  if(ToAccReciptent==="OwnAcc"){
    kony.automation.textbox.enterText([currFormName,"customSearchbox","tbxSearch"],"Saving");
    kony.automation.playback.wait(3000);
    kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
    kony.automation.segmentedui.scrollToRow([currFormName,"segTransactions[0,0]"]);

    expect(kony.automation.widget.getWidgetProperty([currFormName,"segTransactions[0,0]","lblAccountName"], "text")).not.toBe('');
  }else{
    kony.automation.textbox.enterText([currFormName,"customSearchbox","tbxSearch"],ToAccReciptent);
    kony.automation.playback.wait(3000);
    kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
    kony.automation.segmentedui.scrollToRow([currFormName,"segTransactions[0,0]"]);

    expect(kony.automation.widget.getWidgetProperty([currFormName,"segTransactions[0,0]","lblAccountName"], "text")).not.toBe('');
  }  

  kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
  kony.automation.segmentedui.click([currFormName,"segTransactions[0,0]"]);
  kony.automation.playback.wait(5000);
}

function SelectTransferAccount(ToAccReciptent){
  kony.automation.playback.wait(4000);
  let currFormName = kony.automation.getCurrentForm();
  let index = {"i" : 0 , "j" : 0};
  kony.automation.playback.waitFor([currFormName,"tbxSearch"],15000);
  kony.automation.widget.touch([currFormName,"tbxSearch"], [72,22],null,[72,65]);

  if(ToAccReciptent==="OwnAcc"){
    kony.automation.textbox.enterText([currFormName,"customSearchbox","tbxSearch"],"Saving");
    kony.automation.playback.wait(3000);
    kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
    
	let  segData = kony.automation.widget.getWidgetProperty([currFormName,"segTransactions"], "data");
	index = getIndexOfAccount(segData , "Saving");
    kony.automation.segmentedui.scrollToRow([currFormName,"segTransactions["+index.i +"," + index.j + "]"]);

    expect(kony.automation.widget.getWidgetProperty([currFormName,"segTransactions["+index.i +"," + index.j + "]","lblAccountName"], "text")).not.toBe('');
  }else{
    kony.automation.textbox.enterText([currFormName,"customSearchbox","tbxSearch"],ToAccReciptent);
    kony.automation.playback.wait(3000);
    kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
    
    let  segData = kony.automation.widget.getWidgetProperty([currFormName,"segTransactions"], "data");
    index = getIndexOfAccount(segData , ToAccReciptent);
    
    kony.automation.segmentedui.scrollToRow([currFormName,"segTransactions["+index.i +"," + index.j + "]"]);

    expect(kony.automation.widget.getWidgetProperty([currFormName,"segTransactions["+index.i +"," + index.j + "]","lblAccountName"], "text")).not.toBe('');
  }  

  kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
  kony.automation.segmentedui.click([currFormName,"segTransactions["+index.i +"," + index.j + "]"]);
  kony.automation.playback.wait(5000);
}

function EnterAmount(Amount) {
  kony.automation.playback.wait(3000);
let currFormName = kony.automation.getCurrentForm();
  kony.automation.playback.waitFor([currFormName,"keypad","btnThree"],15000);
  for(i=0; i<Amount.length; i++){
    kony.automation.button.click([currFormName,"keypad", getBtnID(Amount.charAt(i))]);
  }
  kony.automation.playback.waitFor([currFormName,"btnContinue"],15000);
  kony.automation.button.click([currFormName,"btnContinue"]);
  kony.automation.playback.wait(5000);
}

function SelectFrequency(ValTimePeriod) {
  // kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);

  // kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
  
  kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","segDetails"],15000);
  let segData = kony.automation.widget.getWidgetProperty(["frmEuropeVerifyTransferDetails","segDetails"], "data");
  let index = getIndexFromSegment(segData , "Frequency");
  kony.automation.segmentedui.click(["frmEuropeVerifyTransferDetails","segDetails[0,"+index+ "]"]);

  kony.automation.playback.waitFor(["frmEuropeFrequency","segOptions"],15000);
  switch(ValTimePeriod){
    case "Daily":
      kony.automation.segmentedui.click(["frmEuropeFrequency","segOptions[0,1]"]);
      break;
    case "Weekly":
      kony.automation.segmentedui.click(["frmEuropeFrequency","segOptions[0,2]"]);
      break;
    case "HalfY":
      kony.automation.segmentedui.click(["frmEuropeFrequency","segOptions[0,6]"]);
      break;
    case "Yearly":
      kony.automation.segmentedui.click(["frmEuropeFrequency","segOptions[0,7]"]);
      break;
    case "QTR":
      kony.automation.segmentedui.click(["frmEuropeFrequency","segOptions[0,5]"]);
      break;
    case "Monthly":
      kony.automation.segmentedui.click(["frmEuropeFrequency","segOptions[0,4]"]);
      break;
  }

  kony.automation.playback.wait(5000);
}


function SelectDateRange() {

  kony.automation.playback.waitFor(["frmEuropeDuration","segOptions"],15000);
  kony.automation.segmentedui.click(["frmEuropeDuration","segOptions[0,0]"]);

  kony.automation.playback.waitFor(["frmEuropeStartDate","customCalendar","flxNextMonth"],15000);
  kony.automation.flexcontainer.click(["frmEuropeStartDate","customCalendar","flxNextMonth"]);
  // :User Injected Code Snippet [//Select "Start" date - [1 lines]]
  kony.automation.widget.touch(["frmEuropeStartDate","customCalendar","m3CopyLabel0j8ef8b8e650148"], null,null,[20,11]);
  // :End User Injected Code Snippet {1b928f08-dcde-b4a4-8a34-66c9403263c8}
  kony.automation.playback.waitFor(["frmEuropeEndDate","customCalendar","flxNextMonth"],15000);
  kony.automation.flexcontainer.click(["frmEuropeEndDate","customCalendar","flxNextMonth"]);
  kony.automation.playback.waitFor(["frmEuropeEndDate","customCalendar","flxNextMonth"],15000);
  kony.automation.flexcontainer.click(["frmEuropeEndDate","customCalendar","flxNextMonth"]);
  // :User Injected Code Snippet [//select "End" date - [3 lines]]
  //kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0e9e5d9d7b7e84d"]);

  kony.automation.widget.touch(["frmEuropeEndDate","customCalendar","m3CopyLabel0e9e5d9d7b7e84d"], null,null,[20,11]);  // :End User Injected Code Snippet {52f4e47a-c3c2-0551-1005-1c35e4be2ef7}
  kony.automation.playback.waitFor(["frmEuropeEndDate","btnContinue"],15000);
  kony.automation.button.click(["frmEuropeEndDate","btnContinue"]);

  kony.automation.playback.wait(8000);
}

function SelectSendOnDate() {

  kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","segDetails"],15000);
  let segData = kony.automation.widget.getWidgetProperty(["frmEuropeVerifyTransferDetails","segDetails"], "data");
  let index = getIndexFromSegment(segData , "Send On");
  kony.automation.segmentedui.click(["frmEuropeVerifyTransferDetails","segDetails[0,"+index+ "]"]);

  // Selet Start date
   kony.automation.playback.waitFor(["frmEuropeStartDate","customCalendar","flxNextMonth"],15000);
	kony.automation.flexcontainer.click(["frmEuropeStartDate","customCalendar","flxNextMonth"]);
  kony.automation.widget.touch(["frmEuropeStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);

  kony.automation.playback.waitFor(["frmEuropeStartDate","btnContinue"],15000);
  kony.automation.button.click(["frmEuropeStartDate","btnContinue"]);
  kony.automation.playback.wait(5000);
}

function SelectOccurences() {

  kony.automation.playback.waitFor(["frmMMDuration","segOptions"],15000);
  kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,1]"]);

  // Selet Start date
  kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
  kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
  kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);

  kony.automation.button.click(["frmMMNumberOfTransfers","keypad","btnTwo"]);
  kony.automation.button.click(["frmMMNumberOfTransfers","btnContinue"]);
  kony.automation.playback.wait(5000);

}

function EnterPaymentReference(notes) {
	kony.automation.playback.waitFor(["frmEuropeTransferReference","tbxReference"],15000);
	kony.automation.textbox.enterText(["frmEuropeTransferReference","tbxReference"],notes);
  kony.automation.playback.waitFor(["frmEuropeTransferReference","btnContinue"],15000);
	kony.automation.button.click(["frmEuropeTransferReference","btnContinue"]);
	kony.automation.playback.wait(5000);
}

function SelectNormalDomesticPayment(){
	kony.automation.playback.waitFor(["frmEuropePaymentMedium","segOptions"],15000);
	kony.automation.segmentedui.click(["frmEuropePaymentMedium","segOptions[0,0]"]);
	kony.automation.playback.waitFor(["frmEuropeFeePayment","segOptions"],15000);
	kony.automation.segmentedui.click(["frmEuropeFeePayment","segOptions[0,0]"]);
	kony.automation.playback.wait(5000);
}

function SelectInstantDomesticPayment(){
	kony.automation.playback.waitFor(["frmEuropePaymentMedium","segOptions"],15000);
	kony.automation.segmentedui.click(["frmEuropePaymentMedium","segOptions[0,1]"]);
	kony.automation.playback.waitFor(["frmEuropeFeePayment","segOptions"],15000);
	kony.automation.segmentedui.click(["frmEuropeFeePayment","segOptions[0,0]"]);
	kony.automation.playback.wait(5000);
}

function SelectIWillPayFees(){
	kony.automation.playback.waitFor(["frmEuropeFeePayment","segOptions"],15000);
	kony.automation.segmentedui.click(["frmEuropeFeePayment","segOptions[0,0]"]);
	kony.automation.playback.wait(5000);
}
/**
 * @function
 *
 */
function ConfirmTransfer() {
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","flxAddIcon"],15000);
  kony.automation.flexcontainer.click(["frmEuropeVerifyTransferDetails","flxAddIcon"]);
  kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","btnClose"],10000);
  kony.automation.button.click(["frmEuropeVerifyTransferDetails","btnClose"]);
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","btnTransfer"],25000);
  kony.automation.button.click(["frmEuropeVerifyTransferDetails","btnTransfer"]);
  kony.automation.playback.wait(5000);
  

}

function CancelTransfer(){

  kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","customHeader","btnRight"],15000);
  kony.automation.button.click(["frmEuropeVerifyTransferDetails","customHeader","btnRight"]);
  kony.automation.playback.wait(5000);
}

function verifyBankNameInReviewScreen(fromAccount, toAccount){
	kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","lblFromAccountValue"],15000);
  
	fromAccount = fromAccount.substring(0,4);
	toAccount = toAccount.substring(0,4);
	
	expect(kony.automation.widget.getWidgetProperty(["frmEuropeVerifyTransferDetails","lblFromAccountValue"], "text")).toContain(fromAccount);
	expect(kony.automation.widget.getWidgetProperty(["frmEuropeVerifyTransferDetails","lblToAccountValue"], "text")).toContain(toAccount);
}

function verifyBankNameInAckScreen(fromAccount, toAccount){
	kony.automation.playback.wait(5000);
	kony.automation.playback.waitFor(["frmEuropeConfirmation","lblSuccessMessage"],15000);
  
	fromAccount = fromAccount.substring(0,4);
	toAccount = toAccount.substring(0,4);
	
	expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,1]","lblDetails"], "text")).toContain(fromAccount);
	expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,2]","lblDetails"], "text")).toContain(toAccount);
}

function VerifyDataTruncated(){
	kony.automation.playback.waitFor(["frmEuropeConfirmation","segDetails"],15000);
	expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,0]","lblDetails"], "text")).not.toBeNull();
	expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,1]","lblDetails"], "text")).not.toBeNull();
	expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,2]","lblDetails"], "text")).not.toBeNull();
	expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,3]","lblDetails"], "text")).not.toBeNull();
}

function VerifySwitftCode(){
	let swiftCode = kony.automation.playback.waitFor(["frmEuropeConfirmation_1","lblSwiftCodeabc"],2000);
	let address = kony.automation.playback.waitFor(["frmEuropeConfirmation","lblAddress"],2000);
	
	if(swiftCode && address){
	expect(true).toBe(false);
	}
}

function VerifyPaymentMethod(){
	let paymentMethod = kony.automation.playback.waitFor(["frmEuropeConfirmation","segDetails[0,3]","lblTitle"],5000);
	expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,3]","lblTitle"], "text")).not.toEqual("Payment Method");
}

function VerifyTransferSuccessMessage() {

	kony.automation.playback.waitFor(["frmEuropeConfirmation","lblSuccessMessage"],15000);
	expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","lblSuccessMessage"], "text")).not.toBe('');

	kony.automation.playback.waitFor(["frmEuropeConfirmation","flxError"],5000);
	let flxError = kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","flxError"], "isVisible");
	if(flxError){
      expect("Transaction").toBe("successful");
      kony.automation.button.click(["frmEuropeConfirmation","btnTryAgain"]);
      kony.automation.playback.wait(1000);	
      kony.automation.playback.waitFor(["frmEuropeTransferFromAccount","customHeader","btnRight"],15000);
      kony.automation.button.click(["frmEuropeTransferFromAccount","customHeader","btnRight"]);
	}
	else{
      kony.automation.playback.waitFor(["frmEuropeConfirmation","btnDashboard"],15000);
      kony.automation.button.click(["frmEuropeConfirmation","btnDashboard"]);
      kony.automation.playback.wait(5000);
    }
	VerifyAccountsDashBoard();
}

function MoveBackToLandingScreen_Transfers(){

	kony.automation.playback.waitFor(["frmMMTransferAmount","customHeader","btnRight"],15000);
	kony.automation.button.click(["frmMMTransferAmount","customHeader","btnRight"]);
	kony.automation.playback.wait(5000);
    VerifyAccountsDashBoard();
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

function getIndexFromSegment(segData , val){
	for(let i=0; i < segData.length; i++){
		if(segData[i].property === val){
			return i;
		}
	}
	return 0; //default
}

function getIndexOfAccount(segData , accountName){
  let i=0;
  let j=0;
  for(i=0; i<segData.length; i++){
      if(segData[i].length > 1){
          for(j=0; j<segData[i][1].length; j++){
              if(segData[i][1][j].processedName.includes(accountName)){
                  return { i, j};
              }
          }
      }
  }
  return {i,j };
}


// Previous Functions- Commenting

// function SearchInFromAndToScreen(valType) {

//   try{


//     var currentwidget1 = kony.automation.widget.getWidgetProperty(["frmLogout","btnLogIn"], "text");
//     kony.print("The current Form Name ::"+currentwidget1);
//     if(currentwidget1 === "Sign In"){

//       kony.automation.button.click(["frmLogout","btnLogIn"]);
//       kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
//       kony.automation.textbox.enterText(["frmLogin","login","tbxUsername"],"dbxJasmine1234");
//       kony.automation.textbox.enterText(["frmLogin","login","tbxPassword"],"Kony@1234");
//       kony.automation.button.click(["frmLogin","login","btnLogIn"]);
//       kony.automation.playback.wait(25000);
//     }    

//   }catch(err){
//     kony.print("Unable to find widget");
//   }
//   //kony.automation.playback.wait(25000);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
//   kony.automation.playback.wait(5000);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
//   kony.automation.playback.wait(8000);
//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"],15000);
//   kony.automation.widget.touch(["frmMMTransferFromAccount","tbxSearch"], null,null,null);
//   kony.automation.textbox.enterText(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],"check");
//   //Kony.automation.playback.wait(5000);
//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
//   // :User Injected Code Snippet [//Expect Checking Account - [2 lines]]
//   //var checkingAcc = ;
//   expect(kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount","segTransactions[0,0]","lblAccountName"], "text")).not.toBe(null);
//   // :End User Injected Code Snippet {391e3878-1a4a-6cd5-312f-c42e3dc249f3}
//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
//   kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[0,0]"]);
//   kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"]);
//   kony.automation.widget.touch(["frmMMTransferToAccount","tbxSearch"], [72,22],null,[72,65]);
//   if(valType==="normal"){
//     kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"credit");
//   }else{
//     kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"PToPRecipient");
//   }  
//   kony.automation.playback.wait(1000);
//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
//   kony.automation.segmentedui.scrollToRow(["frmMMTransferToAccount","segTransactions[0,0]"]);
//   var creditCard = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount","segTransactions[0,0]","lblAccountName"],"text");

//   expect(creditCard).not.toBe(null);

//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],10000);
//   kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[0,0]"]);
// }


// // function EnterAmount() {
// //   kony.automation.playback.wait(5000);
// //   kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnThree"],10000);
// //   kony.automation.button.click(["frmMMTransferAmount","keypad","btnThree"]);
// //   kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
// //   kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
// //   kony.automation.button.click(["frmMMTransferAmount","btnContinue"]);
// //   kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],10000);
// // }


// function SelectFrequencyOnceAndTransfer() {

//   kony.automation.playback.waitFor(["frmMMReview","segDetails"],10000);
//   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
//   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
//   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,0]"]);
//   kony.automation.playback.waitFor(["frmMMStartDate","btnContinue"],15000);
//   kony.automation.button.click(["frmMMStartDate","btnContinue"]);
//   kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],15000);
//   kony.automation.button.click(["frmMMReview","btnTransfer"]);
//   expect(kony.automation.playback.waitFor(["frmMMConfirmation","lblSuccessMessage"],20000)).toEqual(true);
//   kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
// }


// function TransferScheduleOnce() {
//   // :User Injected Code Snippet [//Prerequisite Verify_Search_In_FromAndToScreen - []]

//   // :End User Injected Code Snippet {0d4c824b-a9ad-8c0e-5c44-a3292aac96a1}
//   kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnThree"],10000);
//   kony.automation.button.click(["frmMMTransferAmount","keypad","btnThree"]);
//   kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
//   kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
//   kony.automation.button.click(["frmMMTransferAmount","btnContinue"]);
//   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
//   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
//   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
//   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,0]"]);
//   kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
//   kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
//   // :User Injected Code Snippet [//Select a date - [3 lines]]
//   kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
//   kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxNextMonth"], [178,125],null,[178,125]);
//   kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
//   // :End User Injected Code Snippet {414f83d0-e0a2-735c-c437-a564878872a6}
//   kony.automation.playback.waitFor(["frmMMStartDate","btnContinue"],15000);
//   kony.automation.button.click(["frmMMStartDate","btnContinue"]);
//   kony.automation.playback.waitFor(["frmMMReview","btnTransfer"]);
//   kony.automation.button.click(["frmMMReview","btnTransfer"]);
//   expect(kony.automation.playback.waitFor(["frmMMConfirmation","btnToAccount"],10000)).toContain(true);
//   kony.automation.button.click(["frmMMConfirmation","btnToAccount"]);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
// }

// function SelectNumberOfTransfersAndThenConfirmTransfer(valTimePeriod,valueType) {
//   kony.automation.playback.waitFor(["frmMMDuration","segOptions"],10000);
//   kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,1]"]);
//   kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
//   kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
//   // :User Injected Code Snippet [//Select a Start Date - [1 lines]]
//   kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
//   // :End User Injected Code Snippet {83f58aab-137d-4051-a051-d2801329c71d}
//   kony.automation.playback.waitFor(["frmMMNumberOfTransfers","keypad","btnFive"],15000);
//   kony.automation.button.click(["frmMMNumberOfTransfers","keypad","btnFive"]);
//   kony.automation.playback.waitFor(["frmMMNumberOfTransfers","btnContinue"],15000);
//   kony.automation.button.click(["frmMMNumberOfTransfers","btnContinue"]);
//   kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],15000);
//   kony.automation.button.click(["frmMMReview","btnTransfer"]);
//   expect(kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"],10000)).toBe(true);
//   kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
// }


// function ScheduledTransferDailyDateRange() {
//   kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnThree"],10000);
//   kony.automation.button.click(["frmMMTransferAmount","keypad","btnThree"]);
//   kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
//   kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
//   kony.automation.playback.waitFor(["frmMMTransferAmount","btnContinue"],15000);
//   kony.automation.button.click(["frmMMTransferAmount","btnContinue"]);
//   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
//   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
//   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
//   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,1]"]);
//   kony.automation.playback.waitFor(["frmMMDuration","segOptions"],15000);
//   kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,0]"]);
//   kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
//   kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
//   // :User Injected Code Snippet [//Select "Start" date - [1 lines]]
//   kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
//   // :End User Injected Code Snippet {1b928f08-dcde-b4a4-8a34-66c9403263c8}
//   kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
//   kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
//   kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
//   kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
//   // :User Injected Code Snippet [//select "End" date - [3 lines]]
//   //kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);

//   kony.automation.widget.touch(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
//   // :End User Injected Code Snippet {52f4e47a-c3c2-0551-1005-1c35e4be2ef7}
//   kony.automation.playback.waitFor(["frmMMEndDate","btnContinue"],15000);
//   kony.automation.button.click(["frmMMEndDate","btnContinue"]);
//   kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],15000);
//   kony.automation.button.click(["frmMMReview","btnTransfer"]);
//   kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"],15000);
//   kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","lblLocateUs"],10000);
// }



// function SearchP2PInFromAndToScreen() {
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],10000);
//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"],15000);
//   kony.automation.playback.wait(2000);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"],15000);
//   kony.automation.widget.touch(["frmMMTransferFromAccount","tbxSearch"], [100,13],null,[100,56]);
//   kony.automation.textbox.enterText(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],"checki");
//   kony.automation.playback.wait(1000);
//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
//   // :User Injected Code Snippet [//Expect Checking Account - [2 lines]]
//   //var checkingAcc = ;
//   expect(kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount","segTransactions[0,0]","lblAccountName"], "text")).toContain("Check");
//   // :End User Injected Code Snippet {391e3878-1a4a-6cd5-312f-c42e3dc249f3}
//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
//   kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[0,0]"]);
//   kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"],15000);
//   kony.automation.widget.touch(["frmMMTransferToAccount","tbxSearch"], [72,22],null,[72,65]);
//   kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"P2P");
//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
//   // :User Injected Code Snippet [//Expect P2P recipient - [2 lines]]
//   var creditCard = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount","segTransactions[0,0]","lblAccountName"],"text");
//   expect(creditCard).not.toBe(null);
//   // :End User Injected Code Snippet {2875156c-0fc0-2414-6f01-69c86f59b306}
//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],10000);
//   kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[0,0]"]);
// }

// function SearchSameBankInFromAndToScreen() {
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],10000);
//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"],15000);
//   kony.automation.widget.touch(["frmMMTransferFromAccount","tbxSearch"], [100,13],null,[100,56]);
//   kony.automation.textbox.enterText(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],"checki");
//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
//   // :User Injected Code Snippet [//Expect Checking Account - [2 lines]]
//   //var checkingAcc = ;
//   expect(kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount","segTransactions[0,0]","lblAccountName"], "text")).not.toBe(null);
//   // :End User Injected Code Snippet {391e3878-1a4a-6cd5-312f-c42e3dc249f3}
//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
//   kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[0,0]"]);
//   kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"],15000);
//   kony.automation.widget.touch(["frmMMTransferToAccount","tbxSearch"], [72,22],null,[72,65]);
//   kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"samebank2");
//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
//   // :User Injected Code Snippet [//Expect Credit Card - [2 lines]]
//   var creditCard = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount","segTransactions[0,0]","lblAccountName"],"text");
//   expect(creditCard).not.toBe(null);
//   // :End User Injected Code Snippet {2875156c-0fc0-2414-6f01-69c86f59b306}
//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],10000);
//   kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[0,0]"]);
// }



// function SelectDateRangeAndConfirmTransfer(ValTimePeriod, valueType) {
//   //write your automation code here
//   kony.automation.playback.wait(5000);
//   kony.automation.playback.waitFor(["frmMMDuration","segOptions[0,0]"],10000);
//   kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,0]"]);
//   kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
//   kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
//   // :User Injected Code Snippet [//Select "Start" date - [1 lines]]
//   kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
//   // :End User Injected Code Snippet {1b928f08-dcde-b4a4-8a34-66c9403263c8}
//   kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
//   kony.automation.playback.wait(5000);
//   kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
//   kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
//   kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
//   // :User Injected Code Snippet [//select "End" date - [3 lines]]
//   // kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);

//   kony.automation.widget.touch(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
//   // :End User Injected Code Snippet {52f4e47a-c3c2-0551-1005-1c35e4be2ef7}
//   kony.automation.playback.waitFor(["frmMMEndDate","btnContinue"],15000);
//   kony.automation.button.click(["frmMMEndDate","btnContinue"]);
//   kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],10000);
//   kony.automation.button.click(["frmMMReview","btnTransfer"]);
//   try{
//     kony.automation.playback.wait(10000);
//     var errorMsg1 = kony.automation.widget.getWidgetProperty(["frmMMConfirmation","btnNewTransfer"], "text");

//     if(errorMsg1==="New Transfer"){
//       kony.print("Error::Inside New Transfer");
//       kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"],15000);
//       kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);

//     }else{
//       kony.print("***********************");
//       //       var lblMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblMessage"], "text");
//       // 		var lblSuccessMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text");

//       // 		expect(lblMessage.toLowerCase()).toContain("success");
//       // 		expect(lblSuccessMessage.toLowerCase()).toContain("success");

//       var tempB=kony.automation.widget.getWidgetProperty(["frmMMConfirmation","lblMessage"], "text");
//       kony.print("TeLL Me the Value :"+tempB);
//       expect(tempB).toContain("Successfully Scheduled Transfer");
//       kony.automation.playback.waitFor(["frmMMConfirmation","btnToAccount"],15000);
//       kony.automation.button.click(["frmMMConfirmation","btnToAccount"]);
//     }

//   }catch(err){
//     kony.print("Error::Unable to find element");

//     try{
//       kony.automation.playback.wait(10000);
//       var currentwidget1 = kony.automation.widget.getWidgetProperty(["frmLogout","btnLogIn"], "text");
//       kony.print("The current Form Name ::"+currentwidget1);
//       if(currentwidget1 === "Sign In"){

//         kony.automation.button.click(["frmLogout","btnLogIn"]);
//         kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
//         kony.automation.textbox.enterText(["frmLogin","login","tbxUsername"],"dbxJasmine1234");
//         kony.automation.textbox.enterText(["frmLogin","login","tbxPassword"],"Kony@1234");
//         kony.automation.button.click(["frmLogin","login","btnLogIn"]);
//         kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],5000);
//         /***********************************/

//         //ValTimePeriod, ValueType
//         SearchInFromAndToScreen(valueType);
//         EnterAmount();
//         SelectFrequency(ValTimePeriod);
//         SelectDateRangeAndConfirmTransfer(ValTimePeriod, valueType);

//       }     

//     }catch(err1){
//       kony.print("Error::"+err1.message);
//     }
//   }
//   kony.automation.playback.wait(10000);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
// }


// // function SelectFrequencyDaily() {
// //   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
// //   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
// //   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
// //   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,1]"]);
// // }

// // function SelectFrequencyHalfYearly() {
// //   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
// //   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
// //   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
// //   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,6]"]);
// // }


// // function SelectFrequencyMonthly() {
// //   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
// //   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
// //   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
// //   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,4]"]);
// // }

// // function SelectFrequencyQuarterly() {
// //   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
// //   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
// //   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
// //   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,5]"]);
// // }

// // function SelectFrequencyWeekly() {
// //   kony.automation.playback.waitFor(["frmMMReview","segDetails"]);
// //   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
// //   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"]);
// //   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,2]"]);
// // }


// // function SelectFrequencyYearly() {
// //   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
// //   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
// //   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
// //   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,7]"]);
// // }

// function OpenManageRecipientP2P() {
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
//   kony.automation.playback.wait(2000);
//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,4]"]);
//   kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"],15000);
//   kony.automation.playback.wait(2000);
//   kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[1,0]"]);
//   kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"],15000);
// }


// function SearchP2PInFromAndToScreen() {
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
//   kony.automation.playback.wait(2000);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"],15000);
//   kony.automation.widget.touch(["frmMMTransferFromAccount","tbxSearch"], [100,13],null,[100,56]);
//   kony.automation.textbox.enterText(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],"checki");
//   kony.automation.playback.wait(1000);
//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
//   // :User Injected Code Snippet [//Expect Checking Account - [2 lines]]
//   //var checkingAcc = ;
//   expect(kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount","segTransactions[0,0]","lblAccountName"], "text")).not.toBe(null);
//   // :End User Injected Code Snippet {391e3878-1a4a-6cd5-312f-c42e3dc249f3}
//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
//   kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[0,0]"]);
//   kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"],15000);
//   kony.automation.widget.touch(["frmMMTransferToAccount","tbxSearch"], [72,22],null,[72,65]);
//   kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"P2P");
//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
//   // :User Injected Code Snippet [//Expect P2P recipient - [2 lines]]
//   var creditCard = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount","segTransactions[0,0]]","flxAccountsNoImageTransfers","flxMain","flxAccountName","lblAccountName"],"text");
//   expect(creditCard).not.toBe(null);
//   // :End User Injected Code Snippet {2875156c-0fc0-2414-6f01-69c86f59b306}
//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
//   kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[0,0]"]);
// }

// function GoBackToDB() {
//   kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"],10000);
//   kony.automation.playback.waitFor(["frmManageRecipientList","customHeader","flxBack"],15000);
//   kony.automation.flexcontainer.click(["frmManageRecipientList","customHeader","flxBack"]);
//   kony.automation.playback.waitFor(["frmManageRecipientType","customHeader","flxBack"],15000);
//   kony.automation.flexcontainer.click(["frmManageRecipientType","customHeader","flxBack"]);

// }

// function Logout() {
//   kony.automation.playback.wait(25000);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
//   kony.automation.playback.wait(3000);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxLogout"],5000);
//   kony.automation.widget.touch(["frmUnifiedDashboard","Hamburger","flxLogout"], null,null,[34,28]);
//   kony.automation.playback.waitFor(["frmLogout","btnLogIn"],10000);
//   kony.automation.button.click(["frmLogout","btnLogIn"]);
//   kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
// }