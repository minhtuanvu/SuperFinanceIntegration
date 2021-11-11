describe("SME_MyBills", function() {
	beforeEach(async function() {
	// 	jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000;
	    var flgLoginForm = await kony.automation.playback.waitFor(["frmLogin", "login", "btnLogIn"], 2000);
	    var flgLogoutForm = await kony.automation.playback.waitFor(["frmLogout", "btnLogIn"], 2000);
	    kony.print("flgLoginForm: " + flgLoginForm + " ,flgLogoutForm: " + flgLogoutForm);
	
	    if (flgLogoutForm === true || flgLogoutForm === 1) {
	        kony.automation.button.click(["frmLogout", "btnLogIn"]);
	        kony.automation.playback.waitFor(["frmLogin", "login", "tbxUsername"], 10000);
	        await kony.automation.playback.wait(3000);
	        expect(kony.automation.widget.getWidgetProperty(["frmLogin", "login", "tbxPassword"], "text")).toEqual("");
	        await login("dbxJasmine1234SB");
	    } else if (flgLoginForm === true || flgLoginForm === 1) {
	        await login("dbxJasmine1234SB");
	    }
	});
	
	
	async function login(username) {
	    await kony.automation.playback.waitFor(["frmLogin", "login", "tbxUsername"]);
	    kony.automation.textbox.enterText(["frmLogin", "login", "tbxUsername"], username);
	    kony.automation.textbox.enterText(["frmLogin", "login", "tbxPassword"], "Kony@1234");
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
	
	it("SearchBill", async function() {
		// :User Injected Code Snippet [// - [2 lines]]
		await openMyBillsPage();
		await searchBill("credit");
		// :End User Injected Code Snippet {d2140bba-8ba1-7cf1-75e1-9e8afce40bb6}
	});
	
	it("ManageBillPayShowAllPayee", async function() {
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
	});
	
	it("OneTimeBillPaymentCreditCard", async function() {
		// :User Injected Code Snippet [//Prerequisite OpenMyBillsPage - []]
		
		// :End User Injected Code Snippet {a65252e0-747f-ad2a-d557-d03b0160ae0a}
		await kony.automation.playback.waitFor(["frmBillPay","flxPayABill"]);
		kony.automation.flexcontainer.click(["frmBillPay","flxPayABill"]);
		await kony.automation.playback.waitFor(["frmBillPaySelectPayee","tbxSearch"]);
		kony.automation.widget.touch(["frmBillPaySelectPayee","tbxSearch"], [168,17],null,null);
		kony.automation.textbox.enterText(["frmBillPaySelectPayee","customSearchbox","tbxSearch"],"credit");
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
});