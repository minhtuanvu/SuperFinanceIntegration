it("Verify_Search_Postive", async function() {
	kony.automation.textbox.enterText(["frmLogin","tbxUsername"],"dbxJasmine1234");
	kony.automation.textbox.enterText(["frmLogin","tbxPassword"],"Kony@1234");
	kony.automation.button.click(["frmLogin","btnLogIn"]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","customHeader","flxBack"]);
	await kony.automation.playback.wait(1000);
	kony.automation.flexcontainer.click(["frmDashboardAggregated","customHeader","flxBack"]);
	kony.automation.segmentedui.click(["frmDashboardAggregated","Hamburger","segHamburger[0,7]"]);
	await kony.automation.playback.wait(2000);
	kony.automation.textbox.enterText(["frmCardLessHome","customSearchbox","tbxSearch"],"self");
	kony.automation.segmentedui.click(["frmCardLessHome","segDepositFrom[0,0]"]);
	await kony.automation.playback.wait(1000);
	kony.automation.flexcontainer.click(["frmTransactionDetails","customHeader","flxBack"]);
	await kony.automation.playback.wait(1000);
	kony.automation.flexcontainer.click(["frmCardLessHome","customHeader","flxBack"]);
	await kony.automation.playback.wait(1000);
	kony.automation.widget.touch(["frmCardLessHome","Hamburger","flxLogout"], [35,28],null,[35,28]);
});