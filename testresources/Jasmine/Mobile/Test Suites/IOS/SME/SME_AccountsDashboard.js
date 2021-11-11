describe("SME_AccountsDashboard", function() {
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
	
	it("ViewAllTransactions", async function() {
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
		await kony.automation.scrollToWidget(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
		await kony.automation.playback.wait(1000);
		kony.automation.button.click(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
		await kony.automation.playback.wait(15000);
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
		await kony.automation.device.deviceBack();
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
	});
});