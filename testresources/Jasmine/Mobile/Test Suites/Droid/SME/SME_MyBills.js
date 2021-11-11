describe("SME_MyBills", function() {
	beforeEach(function() {
	
	  var flgDashboard = kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],10000);
	  kony.print("Dashboard : "+flgDashboard);
	  if(flgDashboard){
	
	    // Do Nothing
	
	  }else{
	    var currentwidget;
	
	    try{
	      kony.automation.playback.wait(2000);
	      currentwidget = kony.automation.widget.getWidgetProperty(["frmLogin","login","btnLogIn"], "text");
	      kony.print("The current Form Name ::"+currentwidget);
	    }catch(err){
	      kony.print("Error::"+err.message);
	    }
	    
	    try{
	      kony.automation.playback.wait(3000);
	        var currentwidget1 = kony.automation.widget.getWidgetProperty(["frmLogout","btnLogIn"], "text");
	        kony.print("The current Form Name ::"+currentwidget1);
	        if(currentwidget1 === "Sign In"){
	
	          kony.automation.button.click(["frmLogout","btnLogIn"]);
	          kony.automation.playback.waitFor(["frmLogin","tbxUsername"],10000);
	          currentwidget=currentwidget1;
	        }     
	
	      }catch(err1){
	        kony.print("Error::"+err1.message);
	      }
	
	    if(currentwidget === "Sign In"){
	
	      kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
	      kony.automation.textbox.enterText(["frmLogin","login","tbxUsername"],"dbxJasmine1234SB");
	      kony.automation.textbox.enterText(["frmLogin","login","tbxPassword"],"Kony@1234");
	      kony.automation.button.click(["frmLogin","login","btnLogIn"]);
	
	      // Verifying Terms and conditions screen
	
	      var frmTnC = kony.automation.playback.waitFor(["frmTermsAndCondition","flxCheckBox"],10000);
	      if(frmTnC){
	        kony.automation.flexcontainer.click(["frmTermsAndCondition","flxCheckBox"]);
	        kony.automation.playback.waitFor(["frmTermsAndCondition","btnContinue"]);
	        kony.automation.button.click(["frmTermsAndCondition","btnContinue"]);
	      }
	      kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	      kony.automation.alert.click(0);
	      //kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	    }
	
	  }
	
	},90000);
	
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
	
	it("PayBills_AddPayee", async function() {
		addNewPayee();
	},80000);
	
	it("OneTimeBillPaymentCreditCard", async function() {
		// :User Injected Code Snippet [//Prerequisite OpenMyBillsPage - [1 lines]]
		navigateMyBillPage();
		// :End User Injected Code Snippet {9c2accd2-40f2-933f-8ae9-7c8bd9bb96b9}
		await kony.automation.playback.waitFor(["frmBillPay","flxPayABill"]);
		kony.automation.flexcontainer.click(["frmBillPay","flxPayABill"]);
		await kony.automation.playback.waitFor(["frmBillPaySelectPayee","tbxSearch"]);
		kony.automation.widget.touch(["frmBillPaySelectPayee","tbxSearch"], [168,17],null,null);
		kony.automation.textbox.enterText(["frmBillPaySelectPayee","customSearchbox","tbxSearch"],"Automationuser Credit Card");
		kony.automation.segmentedui.click(["frmBillPaySelectPayee","segAccounts[0,0]"]);
		await kony.automation.playback.waitFor(["frmBillPayAmount","keypad","btnTwo"]);
		kony.automation.button.click(["frmBillPayAmount","keypad","btnTwo"]);
		kony.automation.button.click(["frmBillPayAmount","keypad","btnZero"]);
		kony.automation.button.click(["frmBillPayAmount","keypad","btnZero"]);
		kony.automation.button.click(["frmBillPayAmount","btnContinue"]);
		await kony.automation.playback.waitFor(["frmBillPayFrequency","segFrequency"]);
		kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,1]"]);
		await kony.automation.playback.waitFor(["frmBillPayStartDate","customCalendar","flxNextMonth"]);
		kony.automation.flexcontainer.click(["frmBillPayStartDate","customCalendar","flxNextMonth"]);
		// :User Injected Code Snippet [//Select a date - [3 lines]]
		await kony.automation.playback.waitFor(["frmBillPayStartDate","customCalendar","flxNextMonth"]);
		kony.automation.widget.touch(["frmBillPayStartDate","customCalendar","flxNextMonth"], [178,125],null,[178,125]);
		kony.automation.widget.touch(["frmBillPayStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
		// :End User Injected Code Snippet {8bcca5ef-f943-159e-630f-6d56635bd3dc}
		await kony.automation.playback.waitFor(["frmBillPayStartDate","btnContinue"]);
		kony.automation.button.click(["frmBillPayStartDate","btnContinue"]);
	//     kony.automation.playback.wait(10000);
	//     kony.automation.button.click(["frmBillPayStartDate","btnContinue"]);
	//     await kony.automation.scrollToWidget(["frmBillPayConfirmation","flxCheckBox"]);
	
		await kony.automation.playback.waitFor(["frmBillPayConfirmation","txtDescription"],15000);
		kony.automation.textbox.enterText(["frmBillPayConfirmation","txtDescription"],"Payment by automation");
		await kony.automation.playback.waitFor(["frmBillPayConfirmation","flxCheckBox"],15000);
		kony.automation.flexcontainer.click(["frmBillPayConfirmation","flxCheckBox"]);
		await kony.automation.playback.waitFor(["frmBillPayConfirmation","btnContinue"],15000);
		kony.automation.button.click(["frmBillPayConfirmation","btnContinue"]);
		// :User Injected Code Snippet [//Assert on popup for success message - [3 lines]]
		await kony.automation.playback.waitFor(["frmBillPay","flxPopup","customPopup","flxPopupWrapper","lblPopup"],15000);
		
		expect(kony.automation.widget.getWidgetProperty(["frmBillPay","flxPopup","customPopup","flxPopupWrapper","lblPopup"], "text")).toContain("success");
		// :End User Injected Code Snippet {431282da-2019-5ab3-73e2-bcf00c9e1173}
		await kony.automation.playback.waitFor(["frmBillPay","customHeader","flxBack"]);
		kony.automation.flexcontainer.click(["frmBillPay","customHeader","flxBack"]);
		await kony.automation.playback.waitFor(["frmBillPay","Hamburger","segHamburger"]);
		kony.automation.segmentedui.click(["frmBillPay","Hamburger","segHamburger[0,0]"]);
	    kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	    //Logout();
	},60000);
	
	it("SearchBill", async function() {
		// :User Injected Code Snippet [//Prerequisite "OpenMyBillsPage" - [1 lines]]
		navigateMyBillPage();
		// :End User Injected Code Snippet {e2c29000-1328-e299-4e8c-d6996bc3fcf3}
		await kony.automation.playback.waitFor(["frmBillPay","tbxSearch"]);
		kony.automation.widget.touch(["frmBillPay","tbxSearch"], [135,14],null,null);
		kony.automation.textbox.enterText(["frmBillPay","customSearchbox","tbxSearch"],"Automation");
		await kony.automation.playback.waitFor(["frmBillPay","segTransactions"]);
		// :User Injected Code Snippet [//Assert on search value - [1 lines]]
		expect(kony.automation.widget.getWidgetProperty(["frmBillPay","segTransactions[0,0]","lblAccountName"], "text")).not.toBe(null);
		// :End User Injected Code Snippet {389f65b1-a752-e06f-25f8-c880ec3b179f}
		await kony.automation.playback.waitFor(["frmBillPay","customSearchbox","btnCancel"]);
		kony.automation.button.click(["frmBillPay","customSearchbox","btnCancel"]);
		await kony.automation.playback.waitFor(["frmBillPay","customHeader","flxBack"]);
		kony.automation.flexcontainer.click(["frmBillPay","customHeader","flxBack"]);
		await kony.automation.playback.waitFor(["frmBillPay","Hamburger","segHamburger"]);
		kony.automation.segmentedui.click(["frmBillPay","Hamburger","segHamburger[0,0]"]);
		// :User Injected Code Snippet [//Pause the execution - [1 lines]]
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
		// :End User Injected Code Snippet {e710caad-f947-b4f6-018c-ee7e65a3a7c8}
	},60000);
	
	it("DeletePayee", async function() {
		// :User Injected Code Snippet [// - [1 lines]]
		deletePayee()
		// :End User Injected Code Snippet {ccd80331-f193-6453-9370-74050fc33db0}
	},80000);
});