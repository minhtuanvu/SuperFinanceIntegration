it("Verify_I_Will_Get_Cash_Functionality", async function() {
	kony.automation.textbox.enterText(["frmLogin","tbxUsername"],"dbxJasmine1234");
	kony.automation.textbox.enterText(["frmLogin","tbxPassword"],"Kony@1234");
	kony.automation.button.click(["frmLogin","btnLogIn"]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","customHeader","flxBack"]);
	await kony.automation.playback.wait(1000);
	kony.automation.flexcontainer.click(["frmDashboardAggregated","customHeader","flxBack"]);
	kony.automation.gesture.swipe(["frmDashboardAggregated","flxHamburgerWrapper"], {"swipeDirection":3,"fingers":1,"point":[388.98193359375,1359.947509765625]});
	kony.automation.gesture.swipe(["frmDashboardAggregated","flxHamburgerWrapper"], {"swipeDirection":3,"fingers":1,"point":[388.98193359375,1359.947509765625]});
	kony.automation.gesture.swipe(["frmDashboardAggregated","flxHamburgerWrapper"], {"swipeDirection":3,"fingers":1,"point":[388.98193359375,1336.94677734375]});
	kony.automation.segmentedui.click(["frmDashboardAggregated","Hamburger","segHamburger[0,7]"]);
	await kony.automation.playback.waitFor(["frmCardLessHome","flxWithdrawCash"]);
	await kony.automation.playback.wait(1000);
	kony.automation.flexcontainer.click(["frmCardLessHome","flxWithdrawCash"]);
	kony.automation.button.click(["frmCardLessCashRec","btnICollect"]);
	await kony.automation.playback.wait(5000);
	kony.automation.button.click(["frmCardLessWithdraw","btnChange"]);
	await kony.automation.playback.wait(2000);
	kony.automation.segmentedui.click(["frmCardLessFrom","segToAccount[0,0]"]);
	kony.automation.button.click(["frmCardLessWithdraw","keypad","btnFive"]);
	kony.automation.button.click(["frmCardLessWithdraw","keypad","btnZero"]);
	kony.automation.button.click(["frmCardLessWithdraw","keypad","btnZero"]);
	kony.automation.button.click(["frmCardLessWithdraw","keypad","btnZero"]);
	kony.automation.button.click(["frmCardLessWithdraw","btnContinue"]);
	kony.automation.textarea.enterText(["frmCardLessConfWithdraw","txtDescription"],"Self");
	kony.automation.button.click(["frmCardLessConfWithdraw","btnConfirm"]);
	await kony.automation.playback.wait(5000);
	kony.automation.button.click(["frmCardLessCWCode","btnDone"]);
	await kony.automation.playback.wait(2000);
	kony.automation.flexcontainer.click(["frmCardLessHome","customHeader","flxBack"]);
	kony.automation.widget.touch(["frmCardLessHome","Hamburger","flxLogout"], [29,31],null,[29,31]);
});