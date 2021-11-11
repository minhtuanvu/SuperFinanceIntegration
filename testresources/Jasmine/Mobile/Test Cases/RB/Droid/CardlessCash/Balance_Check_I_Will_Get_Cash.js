it("Balance_Check_I_Will_Get_Cash", async function() {
	kony.automation.textbox.enterText(["frmLogin","tbxUsername"],"dbxJasmine1234");
	kony.automation.textbox.enterText(["frmLogin","tbxPassword"],"Kony@1234");
	kony.automation.button.click(["frmLogin","btnLogIn"]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","customHeader","flxBack"]);
	await kony.automation.playback.wait(1000);
	kony.automation.flexcontainer.click(["frmDashboardAggregated","customHeader","flxBack"]);
	kony.automation.segmentedui.click(["frmDashboardAggregated","Hamburger","segHamburger[0,7]"]);
	await kony.automation.playback.wait(3000);
	kony.automation.flexcontainer.click(["frmCardLessHome","flxWithdrawCash"]);
	kony.automation.button.click(["frmCardLessCashRec","btnICollect"]);
	await kony.automation.playback.wait(1000);
	kony.automation.button.click(["frmCardLessWithdraw","keypad","btnOne"]);
	kony.automation.button.click(["frmCardLessWithdraw","keypad","btnZero"]);
	kony.automation.button.click(["frmCardLessWithdraw","keypad","btnZero"]);
	kony.automation.button.click(["frmCardLessWithdraw","keypad","btnZero"]);
	kony.automation.button.click(["frmCardLessWithdraw","keypad","btnZero"]);
	kony.automation.button.click(["frmCardLessWithdraw","keypad","btnZero"]);
	kony.automation.button.click(["frmCardLessWithdraw","keypad","btnZero"]);
	kony.automation.button.click(["frmCardLessWithdraw","btnContinue"]);
	// :User Injected Code Snippet [//Error message assertion - [2 lines]]
	// Verifying Balance error screen
	expect(kony.automation.widget.getWidgetProperty(["frmCardLessWithdraw","flxPopup","customPopup","flxPopupWrapper","lblPopup"], "text")).toContain("greater");
	// :End User Injected Code Snippet {05d532c0-6f1c-22e7-1fbd-6993bf3ab150}
	await kony.automation.playback.wait(1000);
	kony.automation.widget.touch(["frmCardLessWithdraw","keypad","imgClearKeypad"], null,null,[63,41]);
	kony.automation.button.click(["frmCardLessWithdraw","btnContinue"]);
	kony.automation.button.click(["frmCardLessConfWithdraw","btnConfirm"]);
	await kony.automation.playback.wait(1000);
	kony.automation.button.click(["frmCardLessCWCode","btnDone"]);
	await kony.automation.playback.wait(2000);
	kony.automation.flexcontainer.click(["frmCardLessHome","customHeader","flxBack"]);
	await kony.automation.playback.wait(1000);
	kony.automation.widget.touch(["frmCardLessHome","Hamburger","flxLogout"], null,null,[34,36]);
});