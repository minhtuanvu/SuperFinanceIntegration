describe("RB_AccountsLandingCreditCard", function() {
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
	
	async function verifyAccountLanding(account){
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","segAccounts"]);
		await kony.automation.playback.wait(3000);
		// :User Injected Code Snippet [// - [2 lines]]
			//expect(kony.automation.widget.getWidgetProperty(["frmUnifiedDashboard","segAccounts[1,0]","lblAccountName"], "text")).toContain("Savings");	
		// :End User Injected Code Snippet {d678cb91-1471-1413-3757-81ff050d6960}
		let indices = await getIndex(account);
		kony.automation.segmentedui.click(["frmUnifiedDashboard","segAccounts[" + indices.i + "," + indices.j +"]"]);
		await kony.automation.playback.wait(3000);
	  
		// :User Injected Code Snippet [// - [2 lines]]
		await kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","lblField1"]);
	    await kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","lblField2"]);
	}
	
	
	async function verifyAccountInfo(){
	  expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","accountSummaryNative","lblField1"], "text")).not.toBe(null);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","accountSummaryNative","lblField2"], "text")).not.toBe(null);
		// :End User Injected Code Snippet {099e4d91-7590-fe3a-35e9-6b62fd3cd475}
		await kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","lblField2"]);
	}
	
	async function goToDashboardFromAccounts() {
		await kony.automation.playback.waitFor(["frmAccountDetails","customFooter","lblAccounts"]);
		kony.automation.flexcontainer.click(["frmAccountDetails","customFooter","flxAccounts"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
	}
	
	async function verifyTransactionDetails(){
		await kony.automation.playback.waitFor(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"]);
		kony.automation.segmentedui.scrollToRow(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[0,0]"]);
		kony.automation.segmentedui.click(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[0,0]"]);
		await kony.automation.playback.waitFor(["frmMMTransactionDetails","accountsTransactionDetailsNative","lblDetailsValue3"]);
		// :User Injected Code Snippet [// - [3 lines]]
		expect(kony.automation.widget.getWidgetProperty(["frmMMTransactionDetails","accountsTransactionDetailsNative","lblDetailsValue3"], "text")).not.toBe(null);
		
		expect(kony.automation.widget.getWidgetProperty(["frmMMTransactionDetails","accountsTransactionDetailsNative","lblDetailsValue4"], "text")).not.toBe(null);
		// :End User Injected Code Snippet {eb55123f-c04f-627b-122f-624614f982bc}
		await kony.automation.device.deviceBack();
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmAccountDetails","flxAccountTransactions","accountsTransactionListNative","segTransactionsList"]);
	}
	
	async function initiateTransfer(){
		await kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","flxLink2"]);
		let widgetID = getFlexID("Transfer money");
		kony.automation.flexcontainer.click(["frmAccountDetails","quicklinksNative",widgetID]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"]);	
	}
	
	async function verifyOptionsOfSavingsAccount(){
		await kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink4"]);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink4"], "text")).not.toBe(null);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink3"], "text")).not.toBe(null);
	}
	
	async function verifyOptionsOfCheckingAccount(){
		await kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink4"]);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink4"], "text")).not.toBe(null);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink3"], "text")).not.toBe(null);
	}
	
	async function verifyOptionsOfCreditCardAccount(){
		await kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink4"]);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink4"], "text")).not.toBe(null);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink1"], "text")).not.toBe(null);
	}
	
	async function verifyOptionsOfLoanAccount(){
		await kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink4"]);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink4"], "text")).not.toBe(null);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink1"], "text")).not.toBe(null);
	}
	
	async function verifyOptionsOfDepositAccount(){
		await kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink1"]);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink1"], "text")).not.toBe(null);
		expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink2"], "text")).not.toBe(null);
	}
	
	async function advanceSearchAccountsDetail(){
		await kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"]);
		kony.automation.widget.touch(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"], [26,21],null,null);
		await kony.automation.playback.waitFor(["frmAdvanceSearch","segType"]);
		await kony.automation.scrollToWidget(["frmAdvanceSearch","segType"]);
		kony.automation.segmentedui.click(["frmAdvanceSearch","segType[0,0]"]);
		await kony.automation.playback.waitFor(["frmAdvanceSearch","flxAddRangeAmount"]);
		kony.automation.flexcontainer.click(["frmAdvanceSearch","flxAddRangeAmount"]);
		kony.automation.textbox.enterText(["frmAdvanceSearch","txtAmountFrom"],"1");
		kony.automation.textbox.enterText(["frmAdvanceSearch","txtAmountTo"],"99999");
		await kony.automation.playback.waitFor(["frmAdvanceSearch","btnSearch"]);
		kony.automation.button.click(["frmAdvanceSearch","btnSearch"]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmAdvanceSearchResults","accountsTransactionListNative","segTransactionsList"]);
		await kony.automation.device.deviceBack();
		await kony.automation.device.deviceBack();
	}
	async function verifyScrollAccountTransactions(){
		await kony.automation.playback.waitFor(["frmAccountDetails","flxAccountTransactions","accountsTransactionListNative","segTransactionsList"]);
		
		let segData = kony.automation.widget.getWidgetProperty(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"], "data");
		
		let a = segData.length-1;
		let b = segData[a][1].length-1;
		
		kony.automation.segmentedui.scrollToRow(["frmAccountDetails","accountsTransactionListNative","segTransactionsList["+a +"," +b+ "]" ]);
		await kony.automation.playback.wait(1000);
	}
	
	function getFlexID(text){
	
		let labelID = "";
	
		for(let i=1; i<=3; i++){
			labelID = kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","flxLink"+i, "lblLink"+i], "text");
			if(labelID === text) return "flxLink"+i;
		}
	
		return "flxLink1"; //mostly is it flxLink1
	}
	
	async function repeatTransaction(){
		await kony.automation.playback.waitFor(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"],5000);
	  await kony.automation.playback.wait(5000);
		let scheduledPay = kony.automation.widget.getWidgetProperty(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[1,-1]","lblHeaderName"],"text");
	
		if(scheduledPay){
			kony.automation.segmentedui.click(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[1,0]"]);
			await kony.automation.playback.wait(2000);
			await kony.automation.playback.waitFor(["frmMMTransactionDetails","btnRepeatTransactionTrans"]);
			kony.automation.button.click(["frmMMTransactionDetails","btnRepeatTransactionTrans"]);
			await kony.automation.playback.wait(5000);	
			await kony.automation.playback.waitFor(["frmMMReview","btnTransfer"]);
			kony.automation.button.click(["frmMMReview","btnTransfer"]);
			await kony.automation.playback.waitFor(["frmMMConfirmation","flxNoTransfer"]);
			kony.automation.button.click(["frmMMConfirmation","btnToAccount"]);
			await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxOne"]);
		}else{
	      await kony.automation.device.deviceBack();
	    }
	}
	
	async function getIndex(account){
			let segData = kony.automation.widget.getWidgetProperty(["frmUnifiedDashboard","segAccounts"], "data");
			let i=0;
			let j=0;
		
			for(var a = 0; a<segData.length; a++){
				for(var b=0; b<segData[a][1].length; b++){
					if(segData[a][1][b].accountName === undefined){
						kony.automation.flexcontainer.click(["frmUnifiedDashboard","segAccounts[" + a + "," + b +"]","flxViewContainer"]);
						await kony.automation.playback.wait(2000);
						return await getIndex(account);									
					}else{
						if(segData[a][1][b].accountName.includes(account)){
							i=a;
							j=b;
							break;
						}								
					}
				}
			}
		return {
	      i,
	      j
	    };
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
	
	it("verifyCreditCardAccountLandingPage", async function() {
		await verifyAccountLanding(accountsLanding.creditCard);
		await goToDashboardFromAccounts();
	});
	
	it("verifyAccountInfoCreditCard", async function() {
		await verifyAccountLanding(accountsLanding.creditCard);
		await verifyAccountInfo();
		await goToDashboardFromAccounts();
	});
	
	it("verifyTransactionDetails", async function() {
		await verifyAccountLanding(accountsLanding.creditCard);
		await verifyTransactionDetails();
		await goToDashboardFromAccounts();
	});
	
	it("verifyAdvanceSearch", async function() {
		// :User Injected Code Snippet [// - [4 lines]]
		await verifyAccountLanding(accountsLanding.creditCard);
		await advanceSearchAccountsDetail();
		await goToDashboardFromAccounts();
		
		// :End User Injected Code Snippet {47cf1cdf-70f8-6611-cdb1-88ed75dff5a4}
	});
	
	it("verifyOptions_CreditCardAccount", async function() {
		// :User Injected Code Snippet [// - [4 lines]]
		await verifyAccountLanding(accountsLanding.creditCard);
		await verifyOptionsOfCheckingAccount();
		await goToDashboardFromAccounts();
		
		// :End User Injected Code Snippet {1799b08d-0ca4-7fd3-5d77-ce7a7dd92660}
	});
	
	it("verifyScrollTransactions_CreditCard", async function() {
		// :User Injected Code Snippet [// - [3 lines]]
		await verifyAccountLanding(accountsLanding.creditCard);
		await verifyScrollAccountTransactions();
		await goToDashboardFromAccounts();
		// :End User Injected Code Snippet {0943e832-3800-2224-2a11-d9e718f3cf5e}
	});
});