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
	// :User Injected Code Snippet [//Select a date - [3 lines]]
	await kony.automation.playback.waitFor(["frmBillPayStartDate","customCalendar","flxNextMonth"]);
	kony.automation.widget.touch(["frmBillPayStartDate","customCalendar","flxNextMonth"], [178,125],null,[178,125]);
	kony.automation.widget.touch(["frmBillPayStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
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
	
	expect(kony.automation.widget.getWidgetProperty(["frmBillPay","flxPopup","customPopup","flxPopupWrapper","lblPopup"], "text")).toContain("uccess");
	// :End User Injected Code Snippet {431282da-2019-5ab3-73e2-bcf00c9e1173}
	await kony.automation.playback.wait(3000);
});