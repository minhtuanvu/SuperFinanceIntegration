it("SavingsAccountLanding", async function() {
	kony.automation.textbox.enterText(["frmLogin","tbxUsername"],"dbxJasmine1234");
	kony.automation.textbox.enterText(["frmLogin","tbxPassword"],"Kony@1234");
	kony.automation.button.click(["frmLogin","btnLogIn"]);
	await kony.automation.playback.wait(2000);
	kony.automation.widget.touch(["frmDashboardAggregated","segAccounts"], [150,49],[[150,48],[150,48],[150,48],[151,48]],[151,48]);
	kony.automation.widget.touch(["frmDashboardAggregated","segAccounts[0,0]","flxAccountsNoImage"], [150,49],[[150,48],[150,48],[150,48],[151,48]],[151,48]);
	await kony.automation.playback.wait(3000);
	kony.automation.segmentedui.click(["frmDashboardAggregated","segAccounts[0,0]"]);
});