it("OneTimeBillPaymentCreditCard", async function() {
	// :User Injected Code Snippet [//Prerequisite OpenMyBillsPage - [1 lines]]
	navigateMyBillPage();
	// :End User Injected Code Snippet {9c2accd2-40f2-933f-8ae9-7c8bd9bb96b9}
	await kony.automation.playback.waitFor(["frmBillPay","flxPayABill"]);
	kony.automation.flexcontainer.click(["frmBillPay","flxPayABill"]);
	await kony.automation.playback.waitFor(["frmBillPaySelectPayee","tbxSearch"]);
	kony.automation.widget.touch(["frmBillPaySelectPayee","tbxSearch"], [168,17],null,null);
	kony.automation.textbox.enterText(["frmBillPaySelectPayee","customSearchbox","tbxSearch"],"automationuser");
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
},80000);