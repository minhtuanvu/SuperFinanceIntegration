describe("RB_MyBills", function() {
	beforeEach(async function() {
	// 	jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000;
	    var flgLoginForm = await kony.automation.playback.waitFor(["frmLogin", "login", "btnLogIn"], 2000);
	    var flgLogoutForm = await kony.automation.playback.waitFor(["frmLogout", "btnLogIn"], 2000);
	    kony.print("flgLoginForm: " + flgLoginForm + " ,flgLogoutForm: " + flgLogoutForm);
	
	    if (flgLogoutForm) {
	        kony.automation.button.click(["frmLogout", "btnLogIn"]);
	        kony.automation.playback.waitFor(["frmLogin", "login", "tbxUsername"], 10000);
	        await kony.automation.playback.wait(3000);
	//         expect(kony.automation.widget.getWidgetProperty(["frmLogin", "login", "tbxPassword"], "text")).toEqual("");
	        await login(LoginDetails.username);
	    } else if (flgLoginForm === true || flgLoginForm === 1) {
	        await login(LoginDetails.username);
	    }
	});
	
	
	async function login(username) {
	    await kony.automation.playback.waitFor(["frmLogin", "login", "tbxUsername"]);
	    kony.automation.textbox.enterText(["frmLogin", "login", "tbxUsername"], username);
	    kony.automation.textbox.enterText(["frmLogin", "login", "tbxPassword"], LoginDetails.password);
	    await kony.automation.playback.waitFor(["frmLogin", "login", "btnLogIn"]);
	    kony.automation.button.click(["frmLogin", "login", "btnLogIn"]);
	    //Verifying Terms and Condition page -
	    var frmTnC = await kony.automation.playback.waitFor(["frmTermsAndCondition", "flxCheckBox"], 20000);
	    if (frmTnC) {
	        kony.automation.flexcontainer.click(["frmTermsAndCondition", "flxCheckBox"]);
	        await kony.automation.playback.waitFor(["frmTermsAndCondition", "btnContinue"]);
	        kony.automation.button.click(["frmTermsAndCondition", "btnContinue"]);
	    }
	
	    await kony.automation.playback.waitFor(["frmUnifiedDashboard", "lblBankName"], 15000);
	}
	
	async function openMyBillsPage(){
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","flxBillPay"]);
		kony.automation.flexcontainer.click(["frmUnifiedDashboard","customFooter","flxBillPay"]);
		await kony.automation.playback.wait(10000);
		await kony.automation.playback.waitFor(["frmBillPay","tbxSearch"]);
	}
	
	async function openManagePayee(){
		await kony.automation.playback.waitFor(["frmBillPay","flxManage"]);
		kony.automation.flexcontainer.click(["frmBillPay","flxManage"]);
		await kony.automation.playback.waitFor(["frmBillPayAllPayees","btnAddPayee"]);
	}
	
	async function searchBill(bill){
	  await kony.automation.playback.waitFor(["frmBillPay","tbxSearch"]);
		kony.automation.widget.touch(["frmBillPay","tbxSearch"], [111,20],null,null);
		await kony.automation.playback.wait(2000);
		kony.automation.textbox.enterText(["frmBillPay","customSearchbox","tbxSearch"],bill);
		await kony.automation.playback.wait(5000);
		// :User Injected Code Snippet [//Asert on search value - [3 lines]]
		kony.automation.segmentedui.scrollToRow(["frmBillPay","flxMainContainer","segTransactions[0,0]"]);
		await kony.automation.playback.wait(5000);
		//expect(kony.automation.widget.getWidgetProperty(["frmBillPay","flxMainContainer","segTransactions[0,0]","flxAccountName","lblAccountName"], "text")).toContain(bill);
		// :End User Injected Code Snippet {30aa2644-535e-35f6-b6b3-176928a92236}
		await kony.automation.playback.wait(1000);
		await kony.automation.playback.waitFor(["frmBillPay","customSearchbox","btnCancel"]);
		kony.automation.button.click(["frmBillPay","customSearchbox","btnCancel"]);
		await kony.automation.playback.wait(8000);
	}
	
	async function goBackToDashboard(){
		await kony.automation.playback.waitFor(["frmBillPay","customFooter","flxAccounts"]);
		kony.automation.flexcontainer.click(["frmBillPay","customFooter","flxAccounts"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
	}
	
	async function selectPayee(payee){
		await kony.automation.playback.waitFor(["frmBillPaySelectPayee","tbxSearch"]);
		kony.automation.widget.touch(["frmBillPaySelectPayee","tbxSearch"], [168,17],null,null);
		kony.automation.textbox.enterText(["frmBillPaySelectPayee","customSearchbox","tbxSearch"],payee);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmBillPaySelectPayee","flxMainContainer","segAccounts"]);
		kony.automation.segmentedui.scrollToRow(["frmBillPaySelectPayee","segAccounts[0,0]"]);
		kony.automation.segmentedui.click(["frmBillPaySelectPayee","segAccounts[0,0]"]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmBillPayAmount","keypad","btnTwo"]);
	}
	
	async function enterBillAmount(){
		await kony.automation.playback.waitFor(["frmBillPayAmount","keypad","btnTwo"]);
		kony.automation.button.click(["frmBillPayAmount","keypad","btnTwo"]);
		kony.automation.button.click(["frmBillPayAmount","keypad","btnZero"]);
		kony.automation.button.click(["frmBillPayAmount","keypad","btnZero"]);
		kony.automation.button.click(["frmBillPayAmount","btnContinue"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmBillPayFrequency","segFrequency"]);
	}
	
	async function selectFrequencyOneTimeAndTransfer(){
		await kony.automation.playback.waitFor(["frmBillPayFrequency","segFrequency"]);
		kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,1]"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmBillPayStartDate","customCalendar","flxNextMonth"]);
		kony.automation.flexcontainer.click(["frmBillPayStartDate","customCalendar","flxNextMonth"]);
		await kony.automation.playback.wait(2000);
		// :User Injected Code Snippet [//Select a date - [6 lines]]
		await kony.automation.playback.waitFor(["frmBillPayStartDate","customCalendar","flxNextMonth"]);
		kony.automation.widget.touch(["frmBillPayStartDate","customCalendar","flxNextMonth"], [178,125],null,[178,125]);
		kony.automation.widget.touch(["frmBillPayStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
		
		await kony.automation.playback.waitFor(["frmBillPayStartDate","btnContinue"]);
		kony.automation.button.click(["frmBillPayStartDate","btnContinue"]);
		// :End User Injected Code Snippet {8bcca5ef-f943-159e-630f-6d56635bd3dc}
		await kony.automation.playback.wait(4000);
		await kony.automation.playback.waitFor(["frmBillPayConfirmation","txtDescription"]);
		kony.automation.textbox.enterText(["frmBillPayConfirmation","txtDescription"],"Payment by automation");
		kony.automation.flexcontainer.click(["frmBillPayConfirmation","flxCheckBox"]);
		await kony.automation.playback.wait(1000);
		await kony.automation.playback.waitFor(["frmBillPayConfirmation","btnContinue"]);
		kony.automation.button.click(["frmBillPayConfirmation","btnContinue"]);
		await kony.automation.playback.wait(2000);
		// :User Injected Code Snippet [//Assert on popup for success message - [3 lines]]
		await kony.automation.playback.waitFor(["frmBillPay","flxPopup","customPopup","flxPopupWrapper","lblPopup"],15000);
		
		expect(kony.automation.widget.getWidgetProperty(["frmBillPay","flxPopup","customPopup","flxPopupWrapper","lblPopup"], "text")).not.toBe(null);
		// :End User Injected Code Snippet {431282da-2019-5ab3-73e2-bcf00c9e1173}
		await kony.automation.playback.wait(3000);
		// :User Injected Code Snippet [// - [1 lines]]
		await goBackToDashboard();
		// :End User Injected Code Snippet {4b660dbc-0926-fb06-9a96-286702418fa9}
	}
	
	
	async function addNewPayee(name){
		let PayeeName=name+" "+getRandomString(5);
		let accNumber = getRandomNumber(9);
	  
		kony.automation.button.click(["frmBillPayAllPayees","btnAddPayee"]);
		await kony.automation.playback.waitFor(["frmBillPaySearchPayee","flxAddManually"]);
		kony.automation.flexcontainer.click(["frmBillPaySearchPayee","flxAddManually"]);
		await kony.automation.playback.waitFor(["frmBillPayEditName","txtName"]);
		kony.automation.textbox.enterText(["frmBillPayEditName","txtName"],PayeeName);
		kony.automation.button.click(["frmBillPayEditName","btnSave"]);
		await kony.automation.playback.waitFor(["frmBillPayEditAddress","txtAddressLineOne"]);
		kony.automation.textbox.enterText(["frmBillPayEditAddress","txtAddressLineOne"],"address line1");
		kony.automation.textbox.enterText(["frmBillPayEditAddress","txtCity"],"city");
		kony.automation.textbox.enterText(["frmBillPayEditAddress","txtState"],"state");
		kony.automation.textbox.enterText(["frmBillPayEditAddress","txtZipCode"],"909090");
		kony.automation.button.click(["frmBillPayEditAddress","btnSave"]);
	  
		await kony.automation.playback.waitFor(["frmBillPayEnterAccNo","keypad","btnOne"]);
		for(i=0;i<accNumber.length; i++){
			let btnID = getBtnID(accNumber.charAt(i));
			kony.automation.button.click(["frmBillPayEnterAccNo","keypad", btnID]);
		}
		kony.automation.button.click(["frmBillPayEnterAccNo","btnContinue"]);
	
	    await kony.automation.playback.waitFor(["frmBillPayReEnterAccNo","keypad","btnOne"]);
	  
		for(i=0;i<accNumber.length; i++){
			let btnID = getBtnID(accNumber.charAt(i));
			kony.automation.button.click(["frmBillPayReEnterAccNo","keypad", btnID]);
		}
	  
		kony.automation.button.click(["frmBillPayReEnterAccNo","btnContinue"]);
		await kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"]);
		await kony.automation.playback.wait(2000);
		kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
		await kony.automation.playback.wait(2000);
		kony.automation.button.click(["frmContracts","btnContinue"]);
		await kony.automation.playback.waitFor(["frmBillPayVerifyDetails","txtNameOnBill"]);
		kony.automation.textbox.enterText(["frmBillPayVerifyDetails","txtNameOnBill"],"Automation");
		kony.automation.button.click(["frmBillPayVerifyDetails","btnContinue"]);
		// :User Injected Code Snippet [// - [3 lines]]
		await kony.automation.playback.waitFor(["frmAcknowledgement","lblSuccessMessage"]);
		expect(kony.automation.widget.getWidgetProperty(["frmAcknowledgement","lblSuccessMessage"], "text")).toContain("success");
		
		// :End User Injected Code Snippet {a28130d7-6d25-eb2b-1b39-f8718cf3e927}
		kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
		await kony.automation.playback.waitFor(["frmBillPayAllPayees","btnAddPayee"]);
		await kony.automation.device.deviceBack();
		await kony.automation.playback.waitFor(["frmBillPay","customFooter","imgBillPay"]);
	}
	
	async function addNewPayeeBillPayFlow(name){
		let PayeeName=name+" "+getRandomString(5);
		let accNumber = getRandomNumber(9);
	  
		kony.automation.button.click(["frmBillPaySelectPayee","btnAddPayee"]);
		await kony.automation.playback.waitFor(["frmBillPaySearchPayee","flxAddManually"]);
		kony.automation.flexcontainer.click(["frmBillPaySearchPayee","flxAddManually"]);
		await kony.automation.playback.waitFor(["frmBillPayEditName","txtName"]);
		kony.automation.textbox.enterText(["frmBillPayEditName","txtName"],PayeeName);
		kony.automation.button.click(["frmBillPayEditName","btnSave"]);
		await kony.automation.playback.waitFor(["frmBillPayEditAddress","txtAddressLineOne"]);
		kony.automation.textbox.enterText(["frmBillPayEditAddress","txtAddressLineOne"],"address line1");
		kony.automation.textbox.enterText(["frmBillPayEditAddress","txtCity"],"city");
		kony.automation.textbox.enterText(["frmBillPayEditAddress","txtState"],"state");
		kony.automation.textbox.enterText(["frmBillPayEditAddress","txtZipCode"],"909090");
		kony.automation.button.click(["frmBillPayEditAddress","btnSave"]);
	  
		await kony.automation.playback.waitFor(["frmBillPayEnterAccNo","keypad","btnOne"]);
		for(i=0;i<accNumber.length; i++){
			let btnID = getBtnID(accNumber.charAt(i));
			kony.automation.button.click(["frmBillPayEnterAccNo","keypad", btnID]);
		}
		kony.automation.button.click(["frmBillPayEnterAccNo","btnContinue"]);
	
	    await kony.automation.playback.waitFor(["frmBillPayReEnterAccNo","keypad","btnOne"]);
	  
		for(i=0;i<accNumber.length; i++){
			let btnID = getBtnID(accNumber.charAt(i));
			kony.automation.button.click(["frmBillPayReEnterAccNo","keypad", btnID]);
		}
	  
		kony.automation.button.click(["frmBillPayReEnterAccNo","btnContinue"]);
		await kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"]);
		await kony.automation.playback.wait(2000);
		kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
		await kony.automation.playback.wait(2000);
		kony.automation.button.click(["frmContracts","btnContinue"]);
		await kony.automation.playback.waitFor(["frmBillPayVerifyDetails","txtNameOnBill"]);
		kony.automation.textbox.enterText(["frmBillPayVerifyDetails","txtNameOnBill"],"Automation");
		kony.automation.button.click(["frmBillPayVerifyDetails","btnContinue"]);
		// :User Injected Code Snippet [// - [3 lines]]
		await kony.automation.playback.waitFor(["frmAcknowledgement","lblSuccessMessage"]);
		expect(kony.automation.widget.getWidgetProperty(["frmAcknowledgement","lblSuccessMessage"], "text")).toContain("success");
		
		// :End User Injected Code Snippet {a28130d7-6d25-eb2b-1b39-f8718cf3e927}
		// kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
		// await kony.automation.playback.waitFor(["frmBillPayAllPayees","btnAddPayee"]);
		// await kony.automation.device.deviceBack();
		// await kony.automation.playback.waitFor(["frmBillPay","customFooter","imgBillPay"]);
		await kony.automation.playback.waitFor(["frmAcknowledgement","btnNewTransfer"]);
		kony.automation.button.click(["frmAcknowledgement","btnNewTransfer"]);
		await kony.automation.playback.waitFor(["frmBillPayAmount","keypad","btnThree"]);
	}
	
	async function searchPayee(payeeName){
		await kony.automation.playback.waitFor(["frmBillPay","flxManage"]);
		kony.automation.flexcontainer.click(["frmBillPay","flxManage"]);
		await kony.automation.playback.waitFor(["frmBillPayAllPayees","tbxSearch"]);
		kony.automation.widget.touch(["frmBillPayAllPayees","tbxSearch"], [130,22],null,null);
		await kony.automation.playback.waitFor(["frmBillPayAllPayees","customSearchbox","tbxSearch"]);
		kony.automation.textbox.enterText(["frmBillPayAllPayees","customSearchbox","tbxSearch"],payeeName);
		await kony.automation.playback.wait(1000);
		kony.automation.segmentedui.scrollToRow(["frmBillPayAllPayees","segAccounts[0,0]"]);
		kony.automation.segmentedui.click(["frmBillPayAllPayees","segAccounts[0,0]"]);
		await kony.automation.playback.waitFor(["frmBillPayPayeeDetails","lblPayeeFullNameValue"]);
		// :User Injected Code Snippet [// - [1 lines]]
		expect(kony.automation.widget.getWidgetProperty(["frmBillPayPayeeDetails","lblPayeeFullNameValue"], "text")).not.toBe(null);
		// :End User Injected Code Snippet {8ed93d5f-ac8c-6032-9d92-4ff995953cab}
	}
	
	async function deviceBack(){
		await kony.automation.device.deviceBack();
	}
	
	async function deletePayee(){
		await kony.automation.playback.waitFor(["frmBillPayPayeeDetails","btnDeleteRecipient"]);
		kony.automation.button.click(["frmBillPayPayeeDetails","btnDeleteRecipient"]);
		kony.automation.alert.click(0);
		// :User Injected Code Snippet [// - [3 lines]]
		await kony.automation.playback.waitFor(["frmBillPayAllPayees","customPopup","lblPopup"]);
		expect(kony.automation.widget.getWidgetProperty(["frmBillPayAllPayees","customPopup","lblPopup"], "text")).toContain("deleted");
		// :End User Injected Code Snippet {ca09e390-ab44-012b-0b1c-aab05edca783}
	}
	
	async function activateDeactivateEBill(){
		await kony.automation.playback.waitFor(["frmBillPayPayeeDetails","lblPayeeFullNameValue"]);
		let isBtnActivateVisible = kony.automation.widget.getWidgetProperty(["frmBillPayPayeeDetails","btnActivateEBill"],"isVisible");
		if(isBtnActivateVisible){
			kony.automation.button.click(["frmBillPayPayeeDetails","btnActivateEBill"]);
		}
		else{ //Deactivate EBill
			kony.automation.button.click(["frmBillPayPayeeDetails","btnDeactivateEBill"]);
		}
		kony.automation.alert.click(0);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmBillPayPayeeDetails","customPopup","lblPopup"]);
		expect(kony.automation.widget.getWidgetProperty(["frmBillPayPayeeDetails","customPopup","lblPopup"], "text")).toContain("success");
	}
	
	async function enterBillAmount(){
		kony.automation.button.click(["frmBillPayAmount","keypad","btnThree"]);
		kony.automation.button.click(["frmBillPayAmount","keypad","btnZero"]);
		kony.automation.button.click(["frmBillPayAmount","keypad","btnZero"]);
		kony.automation.button.click(["frmBillPayAmount","btnContinue"]);
		await kony.automation.playback.waitFor(["frmBillPayFrequency","segFrequency"]);
	}
	
	async function selectFrequencyBillPay(frequency){
		await kony.automation.playback.waitFor(["frmBillPayFrequency","segFrequency"]); 
	   	await kony.automation.playback.wait(3000);
	
	    switch(frequency){
	    	case "Now":
	            kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,0]"]);
	            break;
	    	case "Daily":
	            kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,2]"]);
	            break;
	          case "Weekly":
	            kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,3]"]);
	            break;
	          case "HalfY":
	            kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,7]"]);
	            break;
	          case "Yearly":
	            kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,8]"]);
	            break;
	          case "QTR":
	            kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,6]"]);
	            break;
	          case "Monthly":
	            kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,5]"]);
	            break;
	    }
	    
	    await kony.automation.playback.wait(5000);
	}
	
	async function selectStartDate(){
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmBillPayStartDate","customCalendar","flxNextMonth"]);
		kony.automation.flexcontainer.click(["frmBillPayStartDate","customCalendar","flxNextMonth"]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmBillPayStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
		kony.automation.widget.touch(["frmBillPayStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[12,16]);
		await kony.automation.playback.wait(2000);
	
	}
	
	async function selectDateRange_BillPay(){
	
	  // Selet Start date
	  await kony.automation.playback.waitFor(["frmBillPayDuration","segDuration"],15000);
	  kony.automation.segmentedui.click(["frmBillPayDuration","segDuration[0,0]"]);
	
	  await kony.automation.playback.wait(2000);
	  await kony.automation.playback.waitFor(["frmBillPayStartDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmBillPayStartDate","customCalendar","flxNextMonth"]);
	  await kony.automation.playback.wait(2000);
	  	await kony.automation.playback.waitFor(["frmBillPayStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
	  kony.automation.widget.touch(["frmBillPayStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	
	  await kony.automation.playback.waitFor(["frmBillPayStartDate","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayStartDate","btnContinue"]);
	  await kony.automation.playback.wait(2000);
	
	  await kony.automation.playback.waitFor(["frmBillPayEndDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmBillPayEndDate","customCalendar","flxNextMonth"]);
	  await kony.automation.playback.waitFor(["frmBillPayEndDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmBillPayEndDate","customCalendar","flxNextMonth"]);
	
	  await kony.automation.playback.wait(2000);
	  await kony.automation.playback.waitFor(["frmBillPayEndDate","customCalendar","flxMonth","m1CopyLabel0jabb5d0fd60346"]);
	  kony.automation.widget.touch(["frmBillPayEndDate","customCalendar","flxMonth","m1CopyLabel0jabb5d0fd60346"], null,null,[17,9]);
	
	  await kony.automation.playback.waitFor(["frmBillPayEndDate","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayEndDate","btnContinue"]);
	
	}
	
	async function clickOnPayBill(){
		await kony.automation.playback.waitFor(["frmBillPayPayeeDetails","btnPayAPerson"]);
		kony.automation.button.click(["frmBillPayPayeeDetails","btnPayAPerson"]);
		await kony.automation.playback.waitFor(["frmBillPayAmount","keypad","btnOne"]);
	}
	
	async function initiateBillPayment(){
		await await kony.automation.playback.waitFor(["frmBillPay","flxPayABill"]);
		kony.automation.flexcontainer.click(["frmBillPay","flxPayABill"]);
		await kony.automation.playback.waitFor(["frmBillPaySelectPayee","btnAddPayee"]);
	}
	
	async function enterNoteValue_BillPay(notes){
	
	  await kony.automation.playback.waitFor(["frmBillPayConfirmation","txtDescription"],15000);
	  kony.automation.textbox.enterText(["frmBillPayConfirmation","txtDescription"],notes);
	
	  await kony.automation.playback.waitFor(["frmBillPayConfirmation","flxCheckBox"],15000);
	  kony.automation.flexcontainer.click(["frmBillPayConfirmation","flxCheckBox"]);
	  await kony.automation.playback.waitFor(["frmBillPayConfirmation","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayConfirmation","btnContinue"]);
	  await kony.automation.playback.wait(5000);
	
	}
	
	async function repeatSheduledPayBill(){
	
	  await kony.automation.playback.waitFor(["frmBillPay","segTransactions"],15000);
	
	  var RepeatPay= kony.automation.widget.getWidgetProperty(["frmBillPay","segTransactions[2,-1]","lblHeader"], "text");
	  if(RepeatPay){
	
	    kony.automation.segmentedui.click(["frmBillPay","segTransactions[2,0]"]);
	    await kony.automation.playback.wait(5000);
	    await kony.automation.playback.waitFor(["frmTransactionDetails","btnRepeatTransBP"],15000);
	    kony.automation.button.click(["frmTransactionDetails","btnRepeatTransBP"]);
	    await kony.automation.playback.wait(5000);
	    await kony.automation.playback.waitFor(["frmBillPayAmount","btnContinue"],15000);
	    kony.automation.button.click(["frmBillPayAmount","btnContinue"]);
	    await kony.automation.playback.waitFor(["frmBillPayFrequency","segFrequency"],15000);
	    kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,0]"]);
	    await kony.automation.playback.waitFor(["frmBillPayConfirmation","txtDescription"],15000);
	    kony.automation.textbox.enterText(["frmBillPayConfirmation","txtDescription"],"Repeat Billpay");
	    await kony.automation.playback.waitFor(["frmBillPayConfirmation","flxCheckBox"],15000);
	    kony.automation.flexcontainer.click(["frmBillPayConfirmation","flxCheckBox"]);
	    await kony.automation.playback.waitFor(["frmBillPayConfirmation","btnContinue"],15000);
	    kony.automation.button.click(["frmBillPayConfirmation","btnContinue"]);
	    await kony.automation.playback.wait(5000);
	  }
	  
	  await goBackToDashboard();
	
	}
	
	async function cancelScheduledBillPay(){
		 await kony.automation.playback.waitFor(["frmBillPay","segTransactions"],15000);
		let scheduledPay = kony.automation.widget.getWidgetProperty(["frmBillPay","segTransactions[2,-1]","lblHeader"], "text");
	
		if(scheduledPay){
			kony.automation.segmentedui.click(["frmBillPay","segTransactions[2,0]"]);
	    	await kony.automation.playback.wait(5000);
			await kony.automation.playback.waitFor(["frmTransactionDetails","btnCancelThisOccurenceBP"]);
			kony.automation.button.click(["frmTransactionDetails","btnCancelThisOccurenceBP"]);
			kony.automation.alert.click(0);
			await kony.automation.playback.wait(5000);		
		}
		await goBackToDashboard();	
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
	
	async function goToTransfers() {
	    await kony.automation.playback.waitFor(["frmUnifiedDashboard", "customFooter", "flxTransfer"]);
	    kony.automation.flexcontainer.click(["frmUnifiedDashboard", "customFooter", "flxTransfer"]);
	    await kony.automation.playback.wait(2000);
	    await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "tbxSearch"]);
	}
	
	async function searchInFromAndToScreen(fromAccount, toAccount) { //params are case sensitive
	    await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "tbxSearch"]);
	    kony.automation.widget.touch(["frmMMTransferFromAccount", "tbxSearch"], [110, 23], null, null);
	    await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "customSearchbox", "tbxSearch"]);
	    await kony.automation.playback.wait(2000);
	    kony.automation.textbox.enterText(["frmMMTransferFromAccount", "customSearchbox", "tbxSearch"], fromAccount);
	    await kony.automation.playback.wait(2000);
	    await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "segTransactions"]);
	    kony.automation.segmentedui.scrollToRow(["frmMMTransferFromAccount", "segTransactions[0,0]"]);
	    // :User Injected Code Snippet [// - [2 lines]]
	//     var fromAccountName = kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount", "segTransactions[0,0]", "lblAccountName"], "text");
	//     expect(fromAccountName).toContain(fromAccount);
	    // :End User Injected Code Snippet {8ee899e9-e37c-2be5-f725-bbcdb1020dc4}
	    kony.automation.segmentedui.click(["frmMMTransferFromAccount", "segTransactions[0,0]"]);
	    await kony.automation.playback.waitFor(["frmMMTransferToAccount", "tbxSearch"]);
	    kony.automation.widget.touch(["frmMMTransferToAccount", "tbxSearch"], [146, 13], null, null);
	    await kony.automation.playback.waitFor(["frmMMTransferToAccount", "customSearchbox", "tbxSearch"]);
	    await kony.automation.playback.wait(2000);
	    kony.automation.textbox.enterText(["frmMMTransferToAccount", "customSearchbox", "tbxSearch"], toAccount);
	    await kony.automation.playback.waitFor(["frmMMTransferToAccount", "segTransactions"]);
	    kony.automation.segmentedui.scrollToRow(["frmMMTransferToAccount", "segTransactions[0,0]"]);
	    await kony.automation.playback.wait(2000);
	    // :User Injected Code Snippet [// - [2 lines]]
	//     var accountName = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount", "segTransactions[0,0]", "lblAccountName"], "text");
	//     expect(accountName).not.toBe(null);
	    // :End User Injected Code Snippet {195a3ae8-db55-4acb-396f-09b3a08ff861}
	    kony.automation.segmentedui.click(["frmMMTransferToAccount", "segTransactions[0,0]"]);
	    await kony.automation.playback.waitFor(["frmMMTransferAmount", "keypad", "btnThree"]);
	}
	
	async function selectFromAccount(fromAccount){
		await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "tbxSearch"]);
	    kony.automation.widget.touch(["frmMMTransferFromAccount", "tbxSearch"], [110, 23], null, null);
	    await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "customSearchbox", "tbxSearch"]);
	    await kony.automation.playback.wait(2000);
	    kony.automation.textbox.enterText(["frmMMTransferFromAccount", "customSearchbox", "tbxSearch"], fromAccount);
	    await kony.automation.playback.wait(2000);
	    await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "segTransactions"]);
	    kony.automation.segmentedui.scrollToRow(["frmMMTransferFromAccount", "segTransactions[0,0]"]);
	    // :User Injected Code Snippet [// - [2 lines]]
	//     var fromAccountName = kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount", "segTransactions[0,0]", "lblAccountName"], "text");
	//     expect(fromAccountName).toContain(fromAccount);
	    // :End User Injected Code Snippet {8ee899e9-e37c-2be5-f725-bbcdb1020dc4}
	    kony.automation.segmentedui.click(["frmMMTransferFromAccount", "segTransactions[0,0]"]);
	}
	
	async function selectToAccount(toAccount){
		await kony.automation.playback.waitFor(["frmMMTransferToAccount", "tbxSearch"]);
	    kony.automation.widget.touch(["frmMMTransferToAccount", "tbxSearch"], [146, 13], null, null);
	    await kony.automation.playback.waitFor(["frmMMTransferToAccount", "customSearchbox", "tbxSearch"]);
	    await kony.automation.playback.wait(2000);
	    kony.automation.textbox.enterText(["frmMMTransferToAccount", "customSearchbox", "tbxSearch"], toAccount);
	    await kony.automation.playback.waitFor(["frmMMTransferToAccount", "segTransactions"]);
	    kony.automation.segmentedui.scrollToRow(["frmMMTransferToAccount", "segTransactions[0,0]"]);
	    await kony.automation.playback.wait(2000);
	    // :User Injected Code Snippet [// - [2 lines]]
	//     var accountName = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount", "segTransactions[0,0]", "lblAccountName"], "text");
	//     expect(accountName).not.toBe(null);
	    // :End User Injected Code Snippet {195a3ae8-db55-4acb-396f-09b3a08ff861}
	    kony.automation.segmentedui.click(["frmMMTransferToAccount", "segTransactions[0,0]"]);
	}
	
	async function enterAmount() {
	    await kony.automation.playback.waitFor(["frmMMTransferAmount", "keypad", "btnThree"]);
	    kony.automation.button.click(["frmMMTransferAmount", "keypad", "btnThree"]);
	    kony.automation.button.click(["frmMMTransferAmount", "keypad", "btnZero"]);
	    kony.automation.button.click(["frmMMTransferAmount", "keypad", "btnZero"]);
	    kony.automation.button.click(["frmMMTransferAmount", "btnContinue"]);
	    await kony.automation.playback.waitFor(["frmMMReview", "flxConfirmationDetails", "segDetails"]);
	}
	
	async function oneTimeTransfer() {
	
	    await kony.automation.playback.waitFor(["frmMMReview", "btnTransfer"]);
	    kony.automation.button.click(["frmMMReview", "btnTransfer"]);
	    await kony.automation.playback.waitFor(["frmMMConfirmation", "lblSuccessMessage"]);
	    // :User Injected Code Snippet [//Assert success message - [1 lines]]
	// 	var lblMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblMessage"], "text");
		var lblSuccessMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text");
			            
	// 	expect(lblMessage.toLowerCase()).toContain("success");
		expect(lblSuccessMessage.toLowerCase()).toContain("success");
	    //expect(kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text")).toContain("uccess");
	    // :End User Injected Code Snippet {d03b935e-9e64-4c3e-db7c-f2e1959569b7}
	    await kony.automation.playback.waitFor(["frmMMConfirmation", "btnDashboard"]);
	    kony.automation.button.click(["frmMMConfirmation", "btnDashboard"]);
	    await kony.automation.playback.waitFor(["frmUnifiedDashboard", "flxDashboard", "segAccounts"]);
	}
	
	async function transferScheduledOnce() {
	    await kony.automation.playback.waitFor(["frmMMReview", "segDetails"]);
	    kony.automation.segmentedui.click(["frmMMReview", "segDetails[0,0]"]);
	    await kony.automation.playback.wait(3000);
	    await kony.automation.playback.waitFor(["frmMMFrequency", "segOptions"]);
	    kony.automation.segmentedui.click(["frmMMFrequency", "segOptions[0,0]"]);
	    await kony.automation.playback.wait(5000);
	    await kony.automation.playback.waitFor(["frmMMStartDate", "customCalendar", "flxNextMonth"]);
	    kony.automation.flexcontainer.click(["frmMMStartDate", "customCalendar", "flxNextMonth"]);
	    await kony.automation.playback.wait(2000);
	    // :User Injected Code Snippet [//Select a date - [3 lines]]
	    await kony.automation.playback.waitFor(["frmMMStartDate", "customCalendar", "flxNextMonth"]);
	    kony.automation.widget.touch(["frmMMStartDate", "customCalendar", "flxNextMonth"], [178, 125], null, [178, 125]);
	    kony.automation.widget.touch(["frmMMStartDate", "customCalendar", "flxMonth", "m3CopyLabel0ac5bc532de9c4c"], null, null, [17, 17]);
	    // :End User Injected Code Snippet {414f83d0-e0a2-735c-c437-a564878872a6}
	    await kony.automation.playback.wait(3000);
	    await kony.automation.playback.waitFor(["frmMMStartDate", "btnContinue"]);
	    kony.automation.button.click(["frmMMStartDate", "btnContinue"]);
	    await kony.automation.playback.wait(4000);
	    await kony.automation.playback.waitFor(["frmMMReview", "btnTransfer"]);
	    kony.automation.button.click(["frmMMReview", "btnTransfer"]);
	    await kony.automation.playback.wait(7000);
	  
	  await kony.automation.playback.waitFor(["frmMMConfirmation", "lblSuccessMessage"]);
	    // :User Injected Code Snippet [//Asser for success - [1 lines]]
	// 	var lblMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblMessage"], "text");
		var lblSuccessMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text");
	  
	// 	expect(lblMessage.toLowerCase()).toContain("success");
		expect(lblSuccessMessage.toLowerCase()).toContain("success");
	    //expect(kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text")).toEqual("We successfully scheduled your transfer");
	    // :End User Injected Code Snippet {ca0bdba2-106a-5d30-5a72-5e4aa2ed92df}
		await kony.automation.playback.waitFor(["frmMMConfirmation", "btnDashboard"]);
	    kony.automation.button.click(["frmMMConfirmation", "btnDashboard"]);
	    await kony.automation.playback.wait(8000);
	    await kony.automation.playback.waitFor(["frmUnifiedDashboard", "flxDashboard", "segAccounts"]);
	}
	
	async function ScheduledTransferDailyDateRange() {
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMReview","segDetails"]);
		kony.automation.segmentedui.scrollToRow(["frmMMReview","segDetails[0,0]"]);
		kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
		await kony.automation.playback.waitFor(["frmMMFrequency","segOptions"]);
		kony.automation.segmentedui.scrollToRow(["frmMMFrequency","segOptions[0,1]"]);
		kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,1]"]);
		await kony.automation.playback.waitFor(["frmMMDuration","segOptions"]);
		kony.automation.segmentedui.scrollToRow(["frmMMDuration","segOptions[0,0]"]);
		kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,0]"]);
	  /*
	   kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	  // :User Injected Code Snippet [//Select "Start" date - [1 lines]]
	  kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	  // :End User Injected Code Snippet {1b928f08-dcde-b4a4-8a34-66c9403263c8}
	  kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	  kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	  // :User Injected Code Snippet [//select "End" date - [3 lines]]
	  // kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
	
	  kony.automation.widget.touch(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	  // :End User Injected Code Snippet {52f4e47a-c3c2-0551-1005-1c35e4be2ef7}
	  */
	  
	  	// :User Injected Code Snippet [// - [6 lines]]
		await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"]);
			kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
		await kony.automation.playback.wait(2000);
			await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
			kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[12,16]);
		
		// :End User Injected Code Snippet {984fd65f-f6ee-e93d-49a5-284e394be9f6}
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"]);
		kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
		await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"]);
		kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m1CopyLabel0jabb5d0fd60346"]);
		kony.automation.widget.touch(["frmMMEndDate","customCalendar","flxMonth","m1CopyLabel0jabb5d0fd60346"], null,null,[15,11]);
	 
	  kony.automation.playback.waitFor(["frmMMEndDate","btnContinue"],15000);
	  kony.automation.button.click(["frmMMEndDate","btnContinue"]);
	  kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],15000);
	  kony.automation.button.click(["frmMMReview","btnTransfer"]);
		
	  await kony.automation.playback.waitFor(["frmMMConfirmation", "lblSuccessMessage"]);
		//let lblMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblMessage"], "text");
		let lblSuccessMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text");
	  
		//expect(lblMessage.toLowerCase()).toContain("success");
		expect(lblSuccessMessage.toLowerCase()).toContain("success");
	  
	  kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"],15000);
	  kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","lblLocateUs"],10000);
	  
	 }
	
	async function selectDurationDateRange(){
		await kony.automation.playback.waitFor(["frmMMDuration","segOptions"]);
		kony.automation.segmentedui.scrollToRow(["frmMMDuration","segOptions[0,0]"]);
		kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,0]"]);
	  	
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"]);
		kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
		kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[12,16]);
		
		// :End User Injected Code Snippet {984fd65f-f6ee-e93d-49a5-284e394be9f6}
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"]);
		kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
		await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"]);
		kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m1CopyLabel0jabb5d0fd60346"]);
		kony.automation.widget.touch(["frmMMEndDate","customCalendar","flxMonth","m1CopyLabel0jabb5d0fd60346"], null,null,[15,11]);
	 
		kony.automation.playback.waitFor(["frmMMEndDate","btnContinue"],15000);
		kony.automation.button.click(["frmMMEndDate","btnContinue"]);
	}
	
	async function selectDurationNumberOfTransfers(){
		await kony.automation.playback.wait(500);
		await kony.automation.playback.waitFor(["frmMMDuration","segOptions"]);
		kony.automation.segmentedui.scrollToRow(["frmMMDuration","segOptions[0,1]"]);
		kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,1]"]);
	}
	
	async function selectStartDate(){
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"]);
		kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
		kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[12,16]);
		await kony.automation.playback.wait(2000);
	
	}
	
	async function enterNumberOfTransfer(){	
		await kony.automation.playback.waitFor(["frmMMNumberOfTransfers","keypad","btnFive"]);
		kony.automation.button.click(["frmMMNumberOfTransfers","keypad","btnFive"]);
		kony.automation.button.click(["frmMMNumberOfTransfers","btnContinue"]);
	}
	
	async function confirmTransfer(){
		await kony.automation.playback.waitFor(["frmMMReview","btnTransfer"]);
		kony.automation.button.click(["frmMMReview","btnTransfer"]);
		await kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"]);
		kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard", "flxDashboard", "segAccounts"]);
	}
	
	async function selectFrequency(frequency){
	  await kony.automation.playback.waitFor(["frmMMReview", "segDetails"]);
	    kony.automation.segmentedui.click(["frmMMReview", "segDetails[0,0]"]);
	    await kony.automation.playback.wait(3000);
	    await kony.automation.playback.waitFor(["frmMMFrequency", "segOptions"]);
	
	    switch(frequency){
	    	case "Once":
	            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,0]"]);
	            break;
	    	case "Daily":
	            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,1]"]);
	            break;
	          case "Weekly":
	            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,2]"]);
	            break;
	          case "HalfY":
	            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,6]"]);
	            break;
	          case "Yearly":
	            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,7]"]);
	            break;
	          case "QTR":
	            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,5]"]);
	            break;
	          case "Monthly":
	            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,4]"]);
	            break;
	    }
	    
	    await kony.automation.playback.wait(5000);
	}
	
	async function confirmTransfer(){
		await kony.automation.playback.waitFor(["frmMMReview","btnTransfer"]);
		kony.automation.button.click(["frmMMReview","btnTransfer"]);
	  
		await kony.automation.playback.waitFor(["frmMMConfirmation", "lblSuccessMessage"]);
		//let lblMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblMessage"], "text");
		let lblSuccessMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text");
	  
		//expect(lblMessage.toLowerCase()).toContain("success");
		expect(lblSuccessMessage.toLowerCase()).toContain("success");
	  
		await kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"]);
		kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard", "flxDashboard", "segAccounts"]);
	}
	
	it("SearchBill", async function() {
		// :User Injected Code Snippet [// - [3 lines]]
		await openMyBillsPage();
		await searchBill(myBills.payeeName.electricity);
		await goBackToDashboard();
		// :End User Injected Code Snippet {d2140bba-8ba1-7cf1-75e1-9e8afce40bb6}
	});
	
	it("ManageBillPayShowAllPayee", async function() {
		// :User Injected Code Snippet [// - [1 lines]]
		await openMyBillsPage();
		// :End User Injected Code Snippet {64875ab1-bcb2-d478-fcb4-5e577eb9bf10}
		await kony.automation.playback.waitFor(["frmBillPay","flxManage"]);
		kony.automation.flexcontainer.click(["frmBillPay","flxManage"]);
		await kony.automation.playback.wait(2000);
		// :User Injected Code Snippet [//All payee should be displayed - [8 lines]]
		var isSegAccounts = await kony.automation.playback.waitFor(["frmBillPayAllPayees","flxMainContainer","segAccounts"]);
		if(isSegAccounts){
		var segSize = kony.automation.widget.getWidgetProperty(["frmBillPayAllPayees","flxMainContainer","segAccounts"],"data");	
		expect(true).toBe(segSize.length > 0);
		}
		else{
		expect(isSegAccounts).toBe(true);
		}
		// :End User Injected Code Snippet {2cef7f31-3ef3-b7a0-f1b2-ef596de51464}
		await kony.automation.device.deviceBack();
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmBillPay","imgManage"]);
		// :User Injected Code Snippet [// - [1 lines]]
		await goBackToDashboard();
		// :End User Injected Code Snippet {31d692bf-7a05-dfcc-5c43-ce2298879b97}
	});
	
	it("AddNewPayee", async function() {
		// :User Injected Code Snippet [// - [4 lines]]
		await openMyBillsPage();
		await openManagePayee();
		await addNewPayee(myBills.payeeName.automation);
		await goBackToDashboard();
		// :End User Injected Code Snippet {e7004a5e-4f0b-976f-cc29-8b714aa6e080}
	});
	
	it("AddPayeeBillPayFlow", async function() {
		// :User Injected Code Snippet [// - [8 lines]]
		await openMyBillsPage();
		await initiateBillPayment();
		await addNewPayeeBillPayFlow(myBills.payeeName.automation);
		await enterBillAmount();
		await selectFrequencyBillPay("HalfY");
		await selectDateRange_BillPay();
		await enterNoteValue_BillPay("automation");
		await goBackToDashboard();
		// :End User Injected Code Snippet {4f748cad-13cf-ea20-4563-e87ffb7d0e55}
	});
	
	it("OneTimeBillPaymentCreditCard", async function() {
		// :User Injected Code Snippet [//Prerequisite OpenMyBillsPage - [1 lines]]
		await openMyBillsPage();
		// :End User Injected Code Snippet {a65252e0-747f-ad2a-d557-d03b0160ae0a}
		await kony.automation.playback.waitFor(["frmBillPay","flxPayABill"]);
		kony.automation.flexcontainer.click(["frmBillPay","flxPayABill"]);
		await kony.automation.playback.waitFor(["frmBillPaySelectPayee","tbxSearch"]);
		kony.automation.widget.touch(["frmBillPaySelectPayee","tbxSearch"], [168,17],null,null);
		kony.automation.textbox.enterText(["frmBillPaySelectPayee","customSearchbox","tbxSearch"],myBills.payeeName.creditCard);
		await kony.automation.playback.wait(2000);
		kony.automation.segmentedui.click(["frmBillPaySelectPayee","segAccounts[0,0]"]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmBillPayAmount","keypad","btnTwo"]);
		kony.automation.button.click(["frmBillPayAmount","keypad","btnTwo"]);
		kony.automation.button.click(["frmBillPayAmount","keypad","btnZero"]);
		kony.automation.button.click(["frmBillPayAmount","keypad","btnZero"]);
		kony.automation.button.click(["frmBillPayAmount","btnContinue"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmBillPayFrequency","segFrequency"]);
		kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,1]"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmBillPayStartDate","customCalendar","flxNextMonth"]);
		kony.automation.flexcontainer.click(["frmBillPayStartDate","customCalendar","flxNextMonth"]);
		await kony.automation.playback.wait(2000);
		// :User Injected Code Snippet [//Select a date - [6 lines]]
		await kony.automation.playback.waitFor(["frmBillPayStartDate","customCalendar","flxNextMonth"]);
		kony.automation.widget.touch(["frmBillPayStartDate","customCalendar","flxNextMonth"], [178,125],null,[178,125]);
		kony.automation.widget.touch(["frmBillPayStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
		
		await kony.automation.playback.waitFor(["frmBillPayStartDate","btnContinue"]);
		kony.automation.button.click(["frmBillPayStartDate","btnContinue"]);
		// :End User Injected Code Snippet {8bcca5ef-f943-159e-630f-6d56635bd3dc}
		await kony.automation.playback.wait(4000);
		await kony.automation.playback.waitFor(["frmBillPayConfirmation","txtDescription"]);
		kony.automation.textbox.enterText(["frmBillPayConfirmation","txtDescription"],"Payment by automation");
		kony.automation.flexcontainer.click(["frmBillPayConfirmation","flxCheckBox"]);
		await kony.automation.playback.wait(1000);
		await kony.automation.playback.waitFor(["frmBillPayConfirmation","btnContinue"]);
		kony.automation.button.click(["frmBillPayConfirmation","btnContinue"]);
		await kony.automation.playback.wait(2000);
		// :User Injected Code Snippet [//Assert on popup for success message - [3 lines]]
		await kony.automation.playback.waitFor(["frmBillPay","flxPopup","customPopup","flxPopupWrapper","lblPopup"],15000);
		
		expect(kony.automation.widget.getWidgetProperty(["frmBillPay","flxPopup","customPopup","flxPopupWrapper","lblPopup"], "text")).not.toBe(null);
		// :End User Injected Code Snippet {431282da-2019-5ab3-73e2-bcf00c9e1173}
		await kony.automation.playback.wait(3000);
		// :User Injected Code Snippet [// - [1 lines]]
		await goBackToDashboard();
		// :End User Injected Code Snippet {4b660dbc-0926-fb06-9a96-286702418fa9}
	});
	
	it("SearchPayee", async function() {
		// :User Injected Code Snippet [// - [5 lines]]
		await openMyBillsPage();
		await searchPayee(myBills.payeeName.creditCard);
		await deviceBack();
		await deviceBack();
		await goBackToDashboard();
		// :End User Injected Code Snippet {dbfc39c3-5c0f-2787-be51-73ec3b60bc35}
	});
	
	it("BillPay_PayeeDetails", async function() {
		// :User Injected Code Snippet [// - [7 lines]]
		await openMyBillsPage();
		await searchPayee(myBills.payeeName.automation);
		await clickOnPayBill();
		await enterBillAmount();
		await selectFrequencyBillPay("Now");
		await enterNoteValue_BillPay("automation");
		await goBackToDashboard();
		// :End User Injected Code Snippet {3fc5f056-7707-280d-8412-962eafcd671e}
	});
	
	it("ActivateDeactivateEBill", async function() {
		// :User Injected Code Snippet [// - [7 lines]]
		await openMyBillsPage();
		await searchPayee(myBills.payeeName.automation);
		await activateDeactivateEBill();
		await deviceBack();
		await deviceBack();
		await goBackToDashboard();
		
		// :End User Injected Code Snippet {684b3e30-98b8-fe69-d329-7dcdbb6b3933}
	});
	
	it("RepeatBillPayement", async function() {
		// :User Injected Code Snippet [// - [2 lines]]
		await openMyBillsPage();
		await repeatSheduledPayBill();
		// :End User Injected Code Snippet {a7c969af-3713-9b9e-054b-711b873f8f99}
	});
	
	it("CancelBillPayment", async function() {
		// :User Injected Code Snippet [// - [2 lines]]
		await openMyBillsPage();
		await cancelScheduledBillPay();
		// :End User Injected Code Snippet {c3ca4a4c-9099-4075-f9d8-da986ad94a6a}
	});
	
	it("SchedulePayment_Daily", async function() {
		// :User Injected Code Snippet [// - [8 lines]]
		await openMyBillsPage();
		await searchPayee(myBills.payeeName.creditCard);
		await clickOnPayBill();
		await enterBillAmount();
		await selectFrequencyBillPay("Daily");
		await selectDateRange_BillPay();
		await enterNoteValue_BillPay("automation");
		await goBackToDashboard();
		// :End User Injected Code Snippet {936b33f3-04dd-fc09-f9cf-3e5666767d7f}
	});
	
	it("SchedulePayment_HalfYearly", async function() {
		// :User Injected Code Snippet [// - [8 lines]]
		await openMyBillsPage();
		await searchPayee(myBills.payeeName.creditCard);
		await clickOnPayBill();
		await enterBillAmount();
		await selectFrequencyBillPay("HalfY");
		await selectDateRange_BillPay();
		await enterNoteValue_BillPay("automation");
		await goBackToDashboard();
		// :End User Injected Code Snippet {936b33f3-04dd-fc09-f9cf-3e5666767d7f}
	});
	
	it("SchedulePayment_Monthly", async function() {
		// :User Injected Code Snippet [// - [8 lines]]
		await openMyBillsPage();
		await searchPayee(myBills.payeeName.creditCard);
		await clickOnPayBill();
		await enterBillAmount();
		await selectFrequencyBillPay("Monthly");
		await selectDateRange_BillPay();
		await enterNoteValue_BillPay("automation");
		await goBackToDashboard();
		// :End User Injected Code Snippet {936b33f3-04dd-fc09-f9cf-3e5666767d7f}
	});
	
	it("SchedulePayment_QTR", async function() {
		// :User Injected Code Snippet [// - [8 lines]]
		await openMyBillsPage();
		await searchPayee(myBills.payeeName.creditCard);
		await clickOnPayBill();
		await enterBillAmount();
		await selectFrequencyBillPay("QTR");
		await selectDateRange_BillPay();
		await enterNoteValue_BillPay("automation");
		await goBackToDashboard();
		// :End User Injected Code Snippet {936b33f3-04dd-fc09-f9cf-3e5666767d7f}
	});
	
	it("SchedulePayment_Weekly", async function() {
		// :User Injected Code Snippet [// - [8 lines]]
		await openMyBillsPage();
		await searchPayee(myBills.payeeName.creditCard);
		await clickOnPayBill();
		await enterBillAmount();
		await selectFrequencyBillPay("Weekly");
		await selectDateRange_BillPay();
		await enterNoteValue_BillPay("automation");
		await goBackToDashboard();
		// :End User Injected Code Snippet {936b33f3-04dd-fc09-f9cf-3e5666767d7f}
	});
	
	it("SchedulePayment_Yearly", async function() {
		// :User Injected Code Snippet [// - [8 lines]]
		await openMyBillsPage();
		await searchPayee(myBills.payeeName.creditCard);
		await clickOnPayBill();
		await enterBillAmount();
		await selectFrequencyBillPay("Yearly");
		await selectDateRange_BillPay();
		await enterNoteValue_BillPay("automation");
		await goBackToDashboard();
		// :End User Injected Code Snippet {936b33f3-04dd-fc09-f9cf-3e5666767d7f}
	});
});