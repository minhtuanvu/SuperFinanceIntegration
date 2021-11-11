function navigateMyBillPage(){
  kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"]);
  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
  kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
  kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,5]"]);
  kony.automation.playback.waitFor(["frmBillPay","tbxSearch"]);
}

function Logout() {
  kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
  kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxLogout"],5000);
  kony.automation.widget.touch(["frmUnifiedDashboard","Hamburger","flxLogout"], null,null,[34,28]);
  kony.automation.playback.waitFor(["frmLogout","btnLogIn"],10000);
  kony.automation.button.click(["frmLogout","btnLogIn"]);
  kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
}

function addNewPayee(){
  kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"]);
  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
  kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
  kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,5]"]);
  kony.automation.playback.waitFor(["frmBillPay","flxManage"]);
  kony.automation.flexcontainer.click(["frmBillPay","flxManage"]);
  kony.automation.playback.waitFor(["frmBillPayAllPayees","btnAddPayee"]);
  kony.automation.button.click(["frmBillPayAllPayees","btnAddPayee"]);
  kony.automation.playback.waitFor(["frmBillPaySearchPayee","flxAddManually"]);
  kony.automation.flexcontainer.click(["frmBillPaySearchPayee","flxAddManually"]);
  
  unique_PayeeName="Automationuser Credit card "+getRandomString(5);

  kony.automation.playback.waitFor(["frmBillPayEditName","txtName"]);
  kony.automation.textbox.enterText(["frmBillPayEditName","txtName"],unique_PayeeName);
  
  kony.automation.button.click(["frmBillPayEditName","btnSave"]);
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmBillPayEditAddress","txtAddressLineOne"]);
  kony.automation.textbox.enterText(["frmBillPayEditAddress","txtAddressLineOne"],"2");
  kony.automation.textbox.enterText(["frmBillPayEditAddress","txtCity"],"Jersey city");
  kony.automation.textbox.enterText(["frmBillPayEditAddress","txtState"],"New Jersey");
  kony.automation.textbox.enterText(["frmBillPayEditAddress","txtZipCode"],"20971");
  kony.automation.button.click(["frmBillPayEditAddress","btnSave"]);
  kony.automation.playback.wait(8000);
  kony.automation.playback.waitFor(["frmBillPayEnterAccNo","keypad","btnOne"]);
  
    let uniqueAccNumber = getRandomNumber(9);
  kony.print("uniqueAccNumber : "+uniqueAccNumber);

  for(i=0;i<uniqueAccNumber.length; i++){
    let btnID = getBtnID(uniqueAccNumber.charAt(i));
    kony.automation.button.click(["frmBillPayEnterAccNo","keypad", btnID]);
  }

  kony.automation.button.click(["frmBillPayEnterAccNo","btnContinue"]);
  kony.automation.playback.wait(5000);
	
  kony.automation.playback.waitFor(["frmBillPayReEnterAccNo","keypad","btnOne"]);
   for(i=0;i<uniqueAccNumber.length; i++){
	let btnIDNew = getBtnID(uniqueAccNumber.charAt(i));
    kony.automation.button.click(["frmBillPayReEnterAccNo","keypad", btnIDNew]);
  }
  
  kony.automation.button.click(["frmBillPayReEnterAccNo","btnContinue"]);
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"]);
  kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
  kony.automation.playback.waitFor(["frmContracts","btnContinue"]);
  kony.automation.button.click(["frmContracts","btnContinue"]);
  kony.automation.playback.waitFor(["frmBillPayVerifyDetails","txtNameOnBill"]);
  kony.automation.textbox.enterText(["frmBillPayVerifyDetails","txtNameOnBill"],"PhoneVerizon");
  kony.automation.button.click(["frmBillPayVerifyDetails","btnContinue"]);
  kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"]);
	kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
	kony.automation.playback.waitFor(["frmBillPayAllPayees","tbxSearch"]);
	kony.automation.widget.touch(["frmBillPayAllPayees","tbxSearch"], [240,8],null,null);
	kony.automation.textbox.enterText(["frmBillPayAllPayees","customSearchbox","tbxSearch"],"Automation");
	kony.automation.playback.wait(1000);
	expect(kony.automation.widget.getWidgetProperty(["frmBillPayAllPayees","segAccounts[0,0]","lblAccountName"], "text")).not.toBe(null);
	kony.automation.button.click(["frmBillPayAllPayees","customSearchbox","btnCancel"]);
	kony.automation.playback.wait(1000);
	kony.automation.flexcontainer.click(["frmBillPayAllPayees","customHeader","flxBack"]);
	kony.automation.playback.waitFor(["frmBillPay","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmBillPay","customHeader","flxBack"]);
	kony.automation.playback.waitFor(["frmBillPay","Hamburger","segHamburger"]);
	kony.automation.segmentedui.click(["frmBillPay","Hamburger","segHamburger[0,0]"]);
}

/**
 * @deletePayee
 *
 */
function deletePayee(){
  kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"]);
  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
  kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
  kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,5]"]);
  kony.automation.playback.waitFor(["frmBillPay","flxManage"]);
  kony.automation.flexcontainer.click(["frmBillPay","flxManage"]);
  kony.automation.playback.waitFor(["frmBillPayAllPayees","tbxSearch"]);
  kony.automation.widget.touch(["frmBillPayAllPayees","tbxSearch"], [120,17],null,null);
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmBillPayAllPayees","customSearchbox","tbxSearch"]);
  kony.automation.textbox.enterText(["frmBillPayAllPayees","customSearchbox","tbxSearch"],"Automationuser Credit card");
  kony.automation.segmentedui.click(["frmBillPayAllPayees","segAccounts[0,0]"]);
  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","btnDeleteRecipient"]);
  kony.automation.button.click(["frmBillPayPayeeDetails","btnDeleteRecipient"]);
  kony.automation.playback.wait(4000);
  kony.automation.alert.click(0);
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmBillPayAllPayees","customHeader","flxBack"]);
  kony.automation.flexcontainer.click(["frmBillPayAllPayees","customHeader","flxBack"]);
  kony.automation.playback.waitFor(["frmBillPay","customHeader","flxBack"]);
  kony.automation.flexcontainer.click(["frmBillPay","customHeader","flxBack"]);
  kony.automation.playback.waitFor(["frmBillPay","Hamburger","segHamburger"]);
  kony.automation.segmentedui.click(["frmBillPay","Hamburger","segHamburger[0,0]"]);
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