it("ManageRecipient_AddRecipient_InternationalRecipient", async function() {
	await kony.automation.playback.waitFor(["frmDashboardAggregated","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmDashboardAggregated","customHeader","flxBack"]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","Hamburger","segHamburger"]);
	kony.automation.segmentedui.click(["frmDashboardAggregated","Hamburger","segHamburger[0,4]"]);
	await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
	kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[0,2]"]);
	await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"]);
	kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);
	await kony.automation.playback.waitFor(["frmBenSwiftCode","txtSwiftCode"]);
	kony.automation.textbox.enterText(["frmBenSwiftCode","txtSwiftCode"],"CTBAAU2S");
	await kony.automation.playback.waitFor(["frmBenSwiftCode","btnContinue"]);
	kony.automation.button.click(["frmBenSwiftCode","btnContinue"]);
	await kony.automation.playback.waitFor(["frmEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnThree"]);
	await kony.automation.playback.waitFor(["frmEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnThree"]);
	await kony.automation.playback.waitFor(["frmEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnThree"]);
	await kony.automation.playback.waitFor(["frmEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnThree"]);
	await kony.automation.playback.waitFor(["frmEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnThree"]);
	await kony.automation.playback.waitFor(["frmEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnThree"]);
	await kony.automation.playback.waitFor(["frmEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnThree"]);
	await kony.automation.playback.waitFor(["frmEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnThree"]);
	await kony.automation.playback.waitFor(["frmEnterBenAccNo","btnContinue"]);
	kony.automation.button.click(["frmEnterBenAccNo","btnContinue"]);
	await kony.automation.playback.waitFor(["frmReEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnThree"]);
	await kony.automation.playback.waitFor(["frmReEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnThree"]);
	await kony.automation.playback.waitFor(["frmReEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnThree"]);
	await kony.automation.playback.waitFor(["frmReEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnThree"]);
	await kony.automation.playback.waitFor(["frmReEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnThree"]);
	await kony.automation.playback.waitFor(["frmReEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnThree"]);
	await kony.automation.playback.waitFor(["frmReEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnThree"]);
	await kony.automation.playback.waitFor(["frmReEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnThree"]);
	await kony.automation.playback.waitFor(["frmReEnterBenAccNo","btnContinue"]);
	kony.automation.button.click(["frmReEnterBenAccNo","btnContinue"]);
	await kony.automation.playback.waitFor(["frmBenName","txtRecipientName"]);
	kony.automation.textbox.enterText(["frmBenName","txtRecipientName"],"Intluser1");
	await kony.automation.playback.waitFor(["frmBenName","btnContinue"]);
	kony.automation.button.click(["frmBenName","btnContinue"]);
	await kony.automation.playback.waitFor(["frmBenVerifyDetails","btnContinue"]);
	kony.automation.button.click(["frmBenVerifyDetails","btnContinue"]);
});