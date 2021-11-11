it("Verify_Search_Negative", async function() {
	kony.automation.textbox.enterText(["frmLogin","tbxUsername"],"dbxJasmine1234");
	kony.automation.textbox.enterText(["frmLogin","tbxPassword"],"Kony@1234");
	kony.automation.button.click(["frmLogin","btnLogIn"]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","customHeader","flxBack"]);
	await kony.automation.playback.wait(1000);
	kony.automation.flexcontainer.click(["frmDashboardAggregated","customHeader","flxBack"]);
	kony.automation.segmentedui.click(["frmDashboardAggregated","Hamburger","segHamburger[0,7]"]);
	await kony.automation.playback.wait(2000);
	kony.automation.widget.touch(["frmCardLessHome","tbxSearch"], [60,12],null,[60,28]);
	kony.automation.textbox.enterText(["frmCardLessHome","customSearchbox","tbxSearch"],"deposits");
	await kony.automation.playback.wait(2000);
	kony.automation.button.click(["frmCardLessHome","customSearchbox","btnCancel"]);
	kony.automation.flexcontainer.click(["frmCardLessHome","customHeader","flxBack"]);
	await kony.automation.playback.wait(1000);
	kony.automation.widget.touch(["frmCardLessHome","Hamburger","flxLogout"], [27,27],null,[27,27]);
});