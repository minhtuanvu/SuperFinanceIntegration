describe("RB_SanitySuite", function() {
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
	
	// async function openMenu(){
	// 	kony.automation.flexcontainer.click(["frmUnifiedDashboard","customFooter","flxMore"]);
	// 	await kony.automation.playback.wait(1000);
	// 	await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxMenu","segHamburger"]);
	// }
	
	async function openMenu(menu){
		kony.automation.flexcontainer.click(["frmUnifiedDashboard","customFooter","flxMore"]);
		await kony.automation.playback.wait(1000);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxMenu","segHamburger"]);
		await kony.automation.playback.wait(1000);
		var menuOptions = kony.automation.widget.getWidgetProperty(["frmUnifiedDashboard","Hamburger","flxMenu","segHamburger"], "data");
		kony.print("menuOptions: "+menuOptions);
		var menuIndex = -1;
		for(i=0; i<menuOptions.length; i++){
			if(menuOptions[i].text === menu){
				menuIndex = i;
				break;
			}
	    }
		if(menuIndex > -1){
			kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0," + menuIndex+ "]" ]);
	    }else{
	      expect(menuIndex).toBeGreaterThan(-1);
	    }
	}
	
	async function listOfRecipients(accountType){
		if(accountType === "PToP") {
	      await listOfP2PRecipients();
	      return;
	    }
		await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
	
		var segAccountType = kony.automation.widget.getWidgetProperty(["frmManageRecipientType","segRecipientType"],"data");
		kony.print("segAccountTyep: "+segAccountType);
		var indexAccountType = -1;
		for(i=0; i<segAccountType[0][1].length; i++){
	      if(segAccountType[0][1][i].lblTransactionMode === accountType){
	        indexAccountType = i;
	        break;
	      }
	    }
		if(indexAccountType > -1){
		kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[0,"+indexAccountType+"]"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmManageRecipientList","flxMainContainer","segRecipients"]);
		// :User Injected Code Snippet [// - [3 lines]]
		var segSize = kony.automation.widget.getWidgetProperty(["frmManageRecipientList","flxMainContainer","segRecipients"],"data");
		
		expect(true).toBe(  segSize.length >=1);
		// :End User Injected Code Snippet {b36868d0-465d-3125-0fdd-6359df041f5d}
	    }else{
	      expect(indexAccountType).toBeGreaterThan(-1);
	    }
	}
	
	async function listOfP2PRecipients(){
		await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
		kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[1,0]"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmManageRecipientList","flxMainContainer","segRecipients"]);
		// :User Injected Code Snippet [// - [3 lines]]
		var segSize = kony.automation.widget.getWidgetProperty(["frmManageRecipientList","flxMainContainer","segRecipients"],"data");
		
		expect(true).toBe(  segSize.length >=1);
	}
	async function addRecipientSameBank(name){
		let benName=name+" "+getRandomString(5);
		let accNumber = getRandomNumber(6);
	  
		await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"]);
		kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);
		await kony.automation.playback.waitFor(["frmEnterBenAccNo","keypad","btnOne"]);
	  
		for(i=0;i<accNumber.length; i++){
			let btnID = getBtnID(accNumber.charAt(i));
			kony.automation.button.click(["frmEnterBenAccNo","keypad", btnID]);
		}
	  
		kony.automation.button.click(["frmEnterBenAccNo","btnContinue"]);
		await kony.automation.playback.waitFor(["frmReEnterBenAccNo","keypad","btnOne"]);
	
		for(i=0;i<accNumber.length; i++){
			let btnID = getBtnID(accNumber.charAt(i));
			kony.automation.button.click(["frmReEnterBenAccNo","keypad", btnID]);
		}
	
		kony.automation.button.click(["frmReEnterBenAccNo","btnContinue"]);
		kony.automation.textbox.enterText(["frmBenName","txtRecipientName"],benName);
		await kony.automation.playback.waitFor(["frmBenName","btnContinue"]);
		kony.automation.button.click(["frmBenName","btnContinue"]);
	  
		await kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"]);
		kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
		await kony.automation.playback.wait(2000);
		kony.automation.button.click(["frmContracts","btnContinue"]);
	  
		await kony.automation.playback.waitFor(["frmBenVerifyDetails","btnContinue"]);
		kony.automation.button.click(["frmBenVerifyDetails","btnContinue"]);
		await kony.automation.playback.wait(3000);
		// :User Injected Code Snippet [// - [2 lines]]
		await kony.automation.playback.waitFor(["frmAcknowledgement","lblSuccessMessage"]);
		expect(kony.automation.widget.getWidgetProperty(["frmAcknowledgement","lblSuccessMessage"], "text")).toContain("success");
		// :End User Injected Code Snippet {6c03a7a9-f57f-f8d9-62f8-21a0ec441e4f}
		await kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"]);
		kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","imgAccounts"]);
	}
	
	async function addRecipientExternalAccount(name){
		let benName=name+" "+getRandomString(5);
		let accNumber = getRandomNumber(4);
		let routNumber = getRandomNumber(6);
			
		await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"]);
		kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);
		await kony.automation.playback.waitFor(["frmAddBenRoutNo","keypad","btnOne"]);
	
		for(i=0;i<routNumber.length; i++){
			let btnID = getBtnID(routNumber.charAt(i));
			kony.automation.button.click(["frmAddBenRoutNo","keypad", btnID]);
		}
	
		kony.automation.button.click(["frmAddBenRoutNo","btnContinue"]);
		await kony.automation.playback.waitFor(["frmEnterBenAccNo","keypad","btnOne"]);
	  
		for(i=0;i<accNumber.length; i++){
			let btnID = getBtnID(accNumber.charAt(i));
			kony.automation.button.click(["frmEnterBenAccNo","keypad", btnID]);
		}
	
		kony.automation.button.click(["frmEnterBenAccNo","btnContinue"]);
		await kony.automation.playback.waitFor(["frmReEnterBenAccNo","keypad","btnOne"]);
		
		for(i=0;i<accNumber.length; i++){
			let btnID = getBtnID(accNumber.charAt(i));
			kony.automation.button.click(["frmReEnterBenAccNo","keypad", btnID]);
		}
	
		kony.automation.button.click(["frmReEnterBenAccNo","btnContinue"]);
		await kony.automation.playback.waitFor(["frmBenName","txtRecipientName"]);
		kony.automation.textbox.enterText(["frmBenName","txtRecipientName"],benName);
		kony.automation.button.click(["frmBenName","btnContinue"]);
	  
		await kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"]);
		kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
		await kony.automation.playback.wait(2000);
		kony.automation.button.click(["frmContracts","btnContinue"]);
	  
		await kony.automation.playback.waitFor(["frmBenVerifyDetails","btnContinue"]);
		kony.automation.button.click(["frmBenVerifyDetails","btnContinue"]);
		await kony.automation.playback.wait(3000);
	// :User Injected Code Snippet [// - [2 lines]]
		await kony.automation.playback.waitFor(["frmAcknowledgement","lblSuccessMessage"]);
		expect(kony.automation.widget.getWidgetProperty(["frmAcknowledgement","lblSuccessMessage"], "text")).toContain("success");
		// :End User Injected Code Snippet {6c03a7a9-f57f-f8d9-62f8-21a0ec441e4f}
		await kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"]);
		kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","imgAccounts"]);
	}
	
	async function addRecipientInternationalAccount(name){
		let benName=name+" "+getRandomString(5);
		let accNumber = getRandomNumber(9);
	  
		await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"]);
		kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);
		await kony.automation.playback.waitFor(["frmBenSwiftCode","txtSwiftCode"]);
		kony.automation.textbox.enterText(["frmBenSwiftCode","txtSwiftCode"],"BOFAUS3N");
		kony.automation.button.click(["frmBenSwiftCode","btnContinue"]);
		await kony.automation.playback.waitFor(["frmEnterBenAccNumorIBAN","tbxAccountNumber"]);
		kony.automation.textbox.enterText(["frmEnterBenAccNumorIBAN","tbxAccountNumber"],accNumber);
		kony.automation.button.click(["frmEnterBenAccNumorIBAN","btnContinue"]);
		await kony.automation.playback.waitFor(["frmReEnterBenAccNumorIBAN","tbxReEnteredAccountNumber"]);
		kony.automation.textbox.enterText(["frmReEnterBenAccNumorIBAN","tbxReEnteredAccountNumber"],accNumber);
		kony.automation.button.click(["frmReEnterBenAccNumorIBAN","btnContinue"]);
		await kony.automation.playback.waitFor(["frmBenName","txtRecipientName"]);
		kony.automation.textbox.enterText(["frmBenName","txtRecipientName"],benName);
		kony.automation.button.click(["frmBenName","btnContinue"]);
	
		await kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"]);
		kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
		await kony.automation.playback.wait(2000);
		kony.automation.button.click(["frmContracts","btnContinue"]);
	
		await kony.automation.playback.waitFor(["frmBenVerifyDetails","btnContinue"]);
		kony.automation.button.click(["frmBenVerifyDetails","btnContinue"]);
		// :User Injected Code Snippet [// - [2 lines]]
		await kony.automation.playback.waitFor(["frmAcknowledgement","lblSuccessMessage"]);
		expect(kony.automation.widget.getWidgetProperty(["frmAcknowledgement","lblSuccessMessage"], "text")).toContain("success");
		// :End User Injected Code Snippet {6c03a7a9-f57f-f8d9-62f8-21a0ec441e4f}
		await kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"]);
		kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","imgAccounts"]);
	}
	
	async function addRecipientPToP(name){
		let unique_PayeeName=name+" "+getRandomString(5);
		let phoneNumber = getRandomNumber(9);
		await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"]);
		kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);
		await kony.automation.playback.waitFor(["frmRegP2PContactType","btnPhoneNumber"]);
		kony.automation.button.click(["frmRegP2PContactType","btnPhoneNumber"]);
	  
		await kony.automation.playback.waitFor(["frmP2PRecPhoneNo","keypad","btnOne"]);
	
		for(i=0;i<phoneNumber.length; i++){
			let btnID = getBtnID(phoneNumber.charAt(i));
			kony.automation.button.click(["frmP2PRecPhoneNo","keypad", btnID]);
		}
	  
		kony.automation.button.click(["frmP2PRecPhoneNo","btnContinue"]);
		await kony.automation.playback.waitFor(["frmP2PRecipientName","txtRecipientName"]);
		kony.automation.textbox.enterText(["frmP2PRecipientName","txtRecipientName"],unique_PayeeName);
		kony.automation.button.click(["frmP2PRecipientName","btnContinue"]);
	
		await kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"]);
		kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
		await kony.automation.playback.wait(2000);
		kony.automation.button.click(["frmContracts","btnContinue"]);
	  
		await kony.automation.playback.waitFor(["frmP2PVerifyDetails","btnContinue"]);
		kony.automation.button.click(["frmP2PVerifyDetails","btnContinue"]);
		await kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"]);
		kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","imgAccounts"]);
	}
	
	async function addRecipientPToPWithEmail(name){
		let unique_PayeeName=name+" "+getRandomString(5);
		let email = "p2pRandom." + getRandomString(9) + "@email.com";
		await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"]);
		kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);	
		await kony.automation.playback.waitFor(["frmRegP2PContactType","btnEmail"]);
		kony.automation.button.click(["frmRegP2PContactType","btnEmail"]);
		await kony.automation.playback.waitFor(["frmP2PRecEmail","txtEmailId"]);
		kony.automation.textbox.enterText(["frmP2PRecEmail","txtEmailId"], email);
		await kony.automation.playback.waitFor(["frmP2PRecEmail","btnContinue"]);
		kony.automation.button.click(["frmP2PRecEmail","btnContinue"]);
	  
		await kony.automation.playback.waitFor(["frmP2PRecipientName","txtRecipientName"]);
		kony.automation.textbox.enterText(["frmP2PRecipientName","txtRecipientName"],unique_PayeeName);
		kony.automation.button.click(["frmP2PRecipientName","btnContinue"]);
	
		await kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"]);
		kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
		await kony.automation.playback.wait(2000);
		kony.automation.button.click(["frmContracts","btnContinue"]);
	  
		await kony.automation.playback.waitFor(["frmP2PVerifyDetails","btnContinue"]);
		kony.automation.button.click(["frmP2PVerifyDetails","btnContinue"]);
		await kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"]);
		kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","imgAccounts"]);
	}
	
	async function openManageRecipientPage(){
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
		kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,3]"]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
	}
	
	async function searchRecipient(name){
		await kony.automation.playback.waitFor(["frmManageRecipientList","tbxSearch"]);
		kony.automation.widget.touch(["frmManageRecipientList","tbxSearch"], [205,24],null,null);
		await kony.automation.playback.wait(1000);
		kony.automation.textbox.enterText(["frmManageRecipientList","customSearchbox","tbxSearch"],name);
		let segRecipients = await kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"],3000);
		
		if(segRecipients){
			let data = kony.automation.widget.getWidgetProperty(["frmManageRecipientList","segRecipients"], "data");
			expect(data).not.toBe(null);
		}
		await kony.automation.playback.wait(1000);
		kony.automation.button.click(["frmManageRecipientList","customSearchbox","btnCancel"]);
		await kony.automation.playback.wait(2000);
	}
	
	async function selectAccountAndInitiateTransfer(account){
		await kony.automation.playback.waitFor(["frmManageRecipientList","tbxSearch"]);
		kony.automation.widget.touch(["frmManageRecipientList","tbxSearch"], [101,11],null,null);
		kony.automation.textbox.enterText(["frmManageRecipientList","customSearchbox","tbxSearch"],account);
		kony.automation.segmentedui.scrollToRow(["frmManageRecipientList","segRecipients[0,0]"]);
		kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);
		await kony.automation.playback.waitFor(["frmManageTransferRecipient","btnTransfer"]);
		kony.automation.button.click(["frmManageTransferRecipient","btnTransfer"]);	
	}
	
	async function selectPToPAccountAndInitiateTransfer(account){
		await kony.automation.playback.waitFor(["frmManageRecipientList","tbxSearch"]);
		kony.automation.widget.touch(["frmManageRecipientList","tbxSearch"], [101,11],null,null);
		await kony.automation.playback.wait(2000);
		kony.automation.textbox.enterText(["frmManageRecipientList","customSearchbox","tbxSearch"],"PToPRecipient");
		await kony.automation.playback.wait(2000);
		kony.automation.segmentedui.scrollToRow(["frmManageRecipientList","segRecipients[0,0]"]);
		await kony.automation.playback.wait(1000);
		kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);
		await kony.automation.playback.waitFor(["frmManageP2pRecipient","btnPayAPerson"]);
		kony.automation.button.click(["frmManageP2pRecipient","btnPayAPerson"]);
	}
	
	async function goBackToDashboardFromManageRecipient(){
		await kony.automation.playback.waitFor(["frmManageRecipientList","flxMainContainer","segRecipients"]);
		// :User Injected Code Snippet [// - [3 lines]]
		kony.automation.device.deviceBack();
		await kony.automation.playback.wait(1000);
		kony.automation.device.deviceBack();
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
	
	async function goToViewAllTransactions(){
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
		await kony.automation.scrollToWidget(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
		await kony.automation.playback.wait(1000);
		kony.automation.button.click(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
		await kony.automation.playback.wait(15000);
	  
	}
	async function viewAllTransactions(){
		
		await goToViewAllTransactions();
		// :User Injected Code Snippet [// - [1 lines]]
		/*
		// :End User Injected Code Snippet {a927007b-13a8-f764-7dfc-39d86cabf84e}
		await kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","flxMainContainer","segTransactions"]);
		// :User Injected Code Snippet [// - [2 lines]]
		var segSize = kony.automation.widget.getWidgetProperty(["frmPFMCategorisedTransactions","flxMainContainer","segTransactions"],"data");
		expect(true).toBe(segSize.length > 0);
		// :End User Injected Code Snippet {9b56cb59-8470-3853-283c-77d3cf4c2dd1}
		kony.automation.segmentedui.click(["frmPFMCategorisedTransactions","segTransactions[0,0]"]);
		await kony.automation.playback.wait(1000);
		await kony.automation.playback.waitFor(["frmPFMTransactionDetails","lblRecurrenceValueTrans"]);
		// :User Injected Code Snippet [// - [12 lines]]
		
		var status = kony.automation.widget.getWidgetProperty(["frmPFMTransactionDetails","lblSuccess"],"text");
		var date = kony.automation.widget.getWidgetProperty(["frmPFMTransactionDetails","lblTransDateValueTrans"],"text");
		var refNumber = kony.automation.widget.getWidgetProperty(["frmPFMTransactionDetails","lblReferenceNoValueTrans"],"text");
		var category = kony.automation.widget.getWidgetProperty(["frmPFMTransactionDetails","lblSelectedCategoryValue"],"text");
		
		if(status!=null && date!=null && refNumber!=null && category!=null){
		expect(true).toBe(true);
		}
		else{
		expect(true).toBe(false);
		}
		// :End User Injected Code Snippet {3f46ce39-be32-664c-6b83-6616fb41acaa}
		await kony.automation.device.deviceBack();
		// :User Injected Code Snippet [// - [1 lines]]
		*/
		// :End User Injected Code Snippet {706673da-c60f-a8ca-5b99-4ebfd68b2385}
	// 	await kony.automation.device.deviceBack();
	// 	await kony.automation.playback.wait(2000);
	// 	await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
	}
	
	async function searchStransaction(){
		
		await goToViewAllTransactions();
	
		kony.automation.flexcontainer.click(["frmPFMCategorisedTransactions","flxDropdownImage"]);
		kony.automation.segmentedui.click(["frmPFMCategorisedTransactions","segTransactionTypes[0,1]"]);
		
		await kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","tbxSearch"]);
		kony.automation.textbox.enterText(["frmPFMCategorisedTransactions","tbxSearch"],"spent on");
		await kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","segTransactions"]);
		kony.automation.segmentedui.scrollToRow(["frmPFMCategorisedTransactions","segTransactions[0,0]"]);
		kony.automation.segmentedui.click(["frmPFMCategorisedTransactions","segTransactions[0,0]"]);
		await kony.automation.playback.waitFor(["frmPFMTransactionDetails","lblDescValueTrans"]);
		// :User Injected Code Snippet [// - [1 lines]]
		expect(kony.automation.widget.getWidgetProperty(["frmPFMTransactionDetails","lblDescValueTrans"], "text")).not.toBe(null);
		// :End User Injected Code Snippet {38d43400-a067-8f8d-9372-35ba7241fb30}
		await kony.automation.device.deviceBack();
		await kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","tbxSearch"]);
	// 	await kony.automation.device.deviceBack();
	// 	await kony.automation.playback.waitFor(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
		await goBackToDashboard();
	}
	
	async function advanceSearch(){
		await kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","flxAdvSearch"]);
			kony.automation.flexcontainer.click(["frmPFMCategorisedTransactions","flxAdvSearch"]);
			await kony.automation.playback.waitFor(["frmPFMAdvancedSearch","tbxSearch"]);
			kony.automation.textbox.enterText(["frmPFMAdvancedSearch","tbxSearch"],"home");
			await kony.automation.playback.waitFor(["frmPFMAdvancedSearch","segTransactionType"]);
			await kony.automation.playback.wait(3000);
			kony.automation.segmentedui.scrollToRow(["frmPFMAdvancedSearch","segTransactionType[0,0]"]);
			// :User Injected Code Snippet [//Assert on searched value - [1 lines]]
			expect(kony.automation.widget.getWidgetProperty(["frmPFMAdvancedSearch","segTransactionType[0,0]","lblName"], "text")).toContain("Home");
			// :End User Injected Code Snippet {d7026c2f-5171-cc3b-09b0-b3f787a69074}
			kony.automation.segmentedui.click(["frmPFMAdvancedSearch","segTransactionType[0,0]"]);
			await kony.automation.scrollToWidget(["frmPFMAdvancedSearch","txtAmountFrom"]);
			kony.automation.textbox.enterText(["frmPFMAdvancedSearch","txtAmountFrom"]," 300");
			await kony.automation.playback.waitFor(["frmPFMAdvancedSearch","btnSearch"]);
			kony.automation.button.click(["frmPFMAdvancedSearch","btnSearch"]);
			await kony.automation.playback.waitFor(["frmPFMAdvanceSearchResults","segTransactions"]);
			await kony.automation.playback.wait(3000);
			kony.automation.segmentedui.scrollToRow(["frmPFMAdvanceSearchResults","segTransactions[0,0]"]);
		expect(kony.automation.widget.getWidgetProperty(["frmPFMAdvanceSearchResults","segTransactions[0,0]","lblTransactionAmount"], "text")).toEqual("-$300.00");		await kony.automation.playback.waitFor(["frmPFMAdvanceSearchResults","customSearchbox","btnCancel"]);
		kony.automation.button.click(["frmPFMAdvanceSearchResults","customSearchbox","btnCancel"]);
		await kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","segTransactions"]);
	}
	async function goBackToDashboard(){
		await kony.automation.device.deviceBack();
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
	}
	
	async function collapseAccounts(){
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxInnerChartSizeToggle"]);
		kony.automation.flexcontainer.click(["frmUnifiedDashboard","flxInnerChartSizeToggle"]);
		await kony.automation.playback.wait(3000);
		kony.automation.flexcontainer.click(["frmUnifiedDashboard","flxInnerChartSizeToggle"]);
	}
	
	async function swipeOnDashboard(){
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxInnerChartSizeToggle"]);
		kony.automation.flexcontainer.click(["frmUnifiedDashboard","flxInnerChartSizeToggle"]);
		await kony.automation.playback.wait(3000);
	
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
		await kony.automation.scrollToWidget(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
		await kony.automation.playback.wait(1000);
	
		await kony.automation.scrollToWidget(["frmUnifiedDashboard","flxInnerChartSizeToggle"]);
		await kony.automation.playback.wait(1000);
		kony.automation.flexcontainer.click(["frmUnifiedDashboard","flxInnerChartSizeToggle"]);
	}
	
	it("ViewAllTransactions", async function() {
		await viewAllTransactions();
		await goBackToDashboard();
	});
	
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
	
	it("SearchInFromAndToScreen", async function() {
		// :User Injected Code Snippet [// - [5 lines]]
		await goToTransfers();
		await searchInFromAndToScreen("Check", "Credit");
		await kony.automation.device.deviceBack();
		await kony.automation.device.deviceBack();
		await kony.automation.device.deviceBack();
		// :End User Injected Code Snippet {cf3928e2-539e-4c52-1a93-19e4aa39a9cd}
		await kony.automation.playback.wait(1000);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","imgTransfer"]);
	});
	
	it("TransferOwnAccountOneTime", async function() {
		// :User Injected Code Snippet [// - [4 lines]]
		await goToTransfers();
		await searchInFromAndToScreen("Check", "Credit");
		await enterAmount();
		await oneTimeTransfer();
		// :End User Injected Code Snippet {b25c4d32-5742-8fd6-a194-4e58ea8338a4}
	});
	
	it("TransferOwnAccountScheduleOnce", async function() {
		// :User Injected Code Snippet [// - [4 lines]]
		await goToTransfers();
		await searchInFromAndToScreen("Check","Credit");
		await enterAmount();
		await transferScheduledOnce();
		// :End User Injected Code Snippet {bc46289f-4cc8-733d-8a0d-8db169bcf97c}
	});
	
	it("ListOfRecipientsExternalAccount", async function() {
		// :User Injected Code Snippet [// - [2 lines]]
		await openMenu("Manage Beneficiaries");
		await listOfRecipients("External Account");
		// :End User Injected Code Snippet {b33c0d83-f774-b00b-3d67-4ec7934816e8}
	});
	
	it("AddRecipientExternalAccount", async function() {
		// :User Injected Code Snippet [// - [2 lines]]
		await addRecipientExternalAccount(ManageRecipient.recipientName.externalAccount);
		//await goBackToDashboardFromManageRecipient();
		// :End User Injected Code Snippet {bb73f386-0da9-5dea-e9d7-34b0ba9a154a}
	});
	
	it("ListOfRecipientsForSameAccount", async function() {
		// :User Injected Code Snippet [// - [2 lines]]
		await openMenu("Manage Beneficiaries");
		await listOfRecipients("Account");
		// :End User Injected Code Snippet {0ab4f8e6-02ad-6df5-5e61-e45d136bef93}
	});
	
	it("AddRecipientSameBank", async function() {
		// :User Injected Code Snippet [// - [2 lines]]
		await addRecipientSameBank(ManageRecipient.recipientName.sameBankAccount);
		//await goBackToDashboardFromManageRecipient();
		// :End User Injected Code Snippet {bb73f386-0da9-5dea-e9d7-34b0ba9a154a}
	});
	
	it("ListOfRecipientsInternationalAccount", async function() {
		// :User Injected Code Snippet [// - [2 lines]]
		await openMenu("Manage Beneficiaries");
		await listOfRecipients("International Account");
		// :End User Injected Code Snippet {b33c0d83-f774-b00b-3d67-4ec7934816e8}
	});
	
	it("AddRecipientInternationalAccount", async function() {
		// :User Injected Code Snippet [// - [2 lines]]
		await addRecipientInternationalAccount(ManageRecipient.recipientName.internationalAccount);
		//await goBackToDashboardFromManageRecipient();
		// :End User Injected Code Snippet {bec13940-9a90-5c8f-8d46-6be6cbedc0f2}
	});
	
	it("TransferSameBankAccountOneTime", async function() {
		// :User Injected Code Snippet [// - [4 lines]]
		await goToTransfers();
		await searchInFromAndToScreen("Check", "samebank");
		await enterAmount();
		await oneTimeTransfer();
		// :End User Injected Code Snippet {b25c4d32-5742-8fd6-a194-4e58ea8338a4}
	});
	
	it("TransferSameBankAccountScheduleOnce", async function() {
		// :User Injected Code Snippet [// - [4 lines]]
		await goToTransfers();
		await searchInFromAndToScreen("Check","samebank");
		await enterAmount();
		await transferScheduledOnce();
		// :End User Injected Code Snippet {bc46289f-4cc8-733d-8a0d-8db169bcf97c}
	});
	
	it("TransferExternalAccountOneTime", async function() {
		// :User Injected Code Snippet [// - [4 lines]]
		await goToTransfers();
		await searchInFromAndToScreen("Check", "ExtAccIOS");
		await enterAmount();
		await oneTimeTransfer();
		// :End User Injected Code Snippet {cbc92a73-fbb1-4eb2-d096-a72bcb460a3c}
	});
	
	it("TransferExternalAccountScheduleOnce", async function() {
		// :User Injected Code Snippet [// - [4 lines]]
		await goToTransfers();
		await searchInFromAndToScreen("Check", "ExtAccIOS");
		await enterAmount();
		await transferScheduledOnce();
		// :End User Injected Code Snippet {cbc92a73-fbb1-4eb2-d096-a72bcb460a3c}
	});
});