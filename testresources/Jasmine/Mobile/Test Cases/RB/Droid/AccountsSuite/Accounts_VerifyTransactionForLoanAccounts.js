it("Accounts_VerifyTransactionForLoanAccounts", async function() {
	await kony.automation.playback.waitFor(["frmLogin","tbxUsername"]);
	kony.automation.textbox.enterText(["frmLogin","tbxUsername"],"dbxJasmine1234");
	kony.automation.textbox.enterText(["frmLogin","tbxPassword"],"Kony@1234");
	kony.automation.button.click(["frmLogin","btnLogIn"]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","segAccounts"]);
	kony.automation.widget.touch(["frmDashboardAggregated","segAccounts"], [74,231],null,[74,231]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","segAccounts"]);
	kony.automation.widget.touch(["frmDashboardAggregated","segAccounts[0,3]","flxAccountsNoImage"], [74,21],null,[74,21]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","segAccounts"]);
	kony.automation.segmentedui.click(["frmDashboardAggregated","segAccounts[0,3]"]);
	await kony.automation.playback.waitFor(["frmAccountDetails","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmAccountDetails","customHeader","flxBack"]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmDashboardAggregated","customHeader","flxBack"]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","Hamburger","flxLogout"]);
	kony.automation.widget.touch(["frmDashboardAggregated","Hamburger","flxLogout"], [24,24],null,[24,24]);
	await kony.automation.playback.waitFor(["frmLogout","btnLogIn"]);
	kony.automation.button.click(["frmLogout","btnLogIn"]);
});