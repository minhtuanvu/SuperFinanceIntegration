it("Accounts_OrderAccounts", async function() {
	kony.automation.widget.touch(["frmDashboardAggregated","segAccounts"], [253,275],[[253,275],[252,274],[252,273],[252,270],[252,261],[252,252]],[252,531]);
	kony.automation.widget.touch(["frmDashboardAggregated","segAccounts[0,3]","flxAccountsNoImage"], [253,64],[[253,64],[252,64],[252,62],[252,60]],[252,261]);
	kony.automation.widget.touch(["frmDashboardAggregated","segAccounts"], [279,53],[[279,54],[279,54],[279,55],[278,57],[276,64],[274,73]],[274,305]);
	await kony.automation.playback.wait(1000);
	kony.automation.widget.touch(["frmDashboardAggregated","segAccounts[0,0]","flxAccountsNoImage"], [279,53],[[279,54],[279,54],[279,55],[278,57]],[276,64]);
	kony.automation.flexcontainer.click(["frmDashboardAggregated","customHeader","flxBack"]);
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","Hamburger","flxLogout"]);
	kony.automation.widget.touch(["frmDashboardAggregated","Hamburger","flxLogout"], [42,28],[[42,28],[42,28],[42,28],[42,28],[43,28],[43,28],[43,28],[43,27]],[43,27]);
});