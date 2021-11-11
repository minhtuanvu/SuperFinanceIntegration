it("Accounts_VerifyAccountSummaryForCreditCardAccounts", async function() {
	await kony.automation.playback.waitFor(["frmLogin","tbxUsername"]);
	kony.automation.textbox.enterText(["frmLogin","tbxUsername"],"dbxJasmine1234");
	kony.automation.textbox.enterText(["frmLogin","tbxPassword"],"Kony@1234");
	kony.automation.button.click(["frmLogin","btnLogIn"]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","segAccounts"]);
	
	
	await kony.automation.playback.waitFor(["frmDashboardAggregated","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmDashboardAggregated","customHeader","flxBack"]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","Hamburger","flxLogout"]);
	kony.automation.widget.touch(["frmDashboardAggregated","Hamburger","flxLogout"], [33,27],null,[33,27]);
	await kony.automation.playback.waitFor(["frmLogout","btnLogIn"]);
	kony.automation.button.click(["frmLogout","btnLogIn"]);
  	//Test comment
});