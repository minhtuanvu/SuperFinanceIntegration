it("Accounts_Savingsinfoicon_Messagebank", async function() {
	kony.automation.flexcontainer.click(["frmAccountDetails","customHeader","flxSearch"]);
	await kony.automation.playback.waitFor(["frmAccountInfo","btnMsgBank"]);
	kony.automation.button.click(["frmAccountInfo","btnMsgBank"]);
	await kony.automation.playback.waitFor(["frmNewMessageCategory","segCategory"]);
	kony.automation.segmentedui.click(["frmNewMessageCategory","segCategory[0,1]"]);
	kony.automation.textbox.enterText(["frmNewMessage","tbxSubject"],"test");
	kony.automation.textarea.enterText(["frmNewMessage","txtareaDescription"],"test");
	kony.automation.button.click(["frmNewMessage","btnSend"]);
	await kony.automation.playback.waitFor(["frmMessages","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmMessages","customHeader","flxBack"]);
	await kony.automation.playback.wait(1000);
	kony.automation.segmentedui.click(["frmMessages","Hamburger","segHamburger[0,0]"]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","segAccounts"]);
	kony.automation.segmentedui.click(["frmDashboardAggregated","segAccounts[0,0]"]);
});