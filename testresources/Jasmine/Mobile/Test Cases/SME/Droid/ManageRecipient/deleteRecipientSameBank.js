it("deleteRecipientSameBank", async function() {
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
	kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,4]"]);
	kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,4]"]);
	await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
	kony.automation.segmentedui.scrollToRow(["frmManageRecipientType","segRecipientType[0,0]"]);
	kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[0,0]"]);
	await kony.automation.playback.waitFor(["frmManageRecipientList","tbxSearch"]);
	kony.automation.widget.touch(["frmManageRecipientList","tbxSearch"], [219,19],null,null);
	kony.automation.textbox.enterText(["frmManageRecipientList","customSearchbox","tbxSearch"],"samebank");
	await kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"]);
	kony.automation.segmentedui.scrollToRow(["frmManageRecipientList","segRecipients[0,0]"]);
	kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);
	await kony.automation.playback.waitFor(["frmManageTransferRecipient","customHeader","flxSearch"]);
	kony.automation.flexcontainer.click(["frmManageTransferRecipient","customHeader","flxSearch"]);
	await kony.automation.playback.waitFor(["frmManageTransferRecipientInfo","btnDeleteRecipient"]);
	kony.automation.button.click(["frmManageTransferRecipientInfo","btnDeleteRecipient"]);
	await kony.automation.playback.wait(1000);
	kony.automation.alert.click(0);
	await kony.automation.playback.wait(1000);
	await kony.automation.playback.waitFor(["frmManageRecipientList","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmManageRecipientList","customHeader","flxBack"]);
	await kony.automation.playback.waitFor(["frmManageRecipientType","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmManageRecipientType","customHeader","flxBack"]);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","lblACHTransaction"]);
});