it("DeleteRecipientP2P", async function() {
	await kony.automation.playback.waitFor(["frmManageRecipientList","tbxSearch"]);
	kony.automation.widget.touch(["frmManageRecipientList","tbxSearch"], [104,24],null,null);
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmManageRecipientList","customSearchbox","tbxSearch"]);
	kony.automation.textbox.enterText(["frmManageRecipientList","customSearchbox","tbxSearch"],"P2PRecipientIOS");
	await kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"]);
	kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);
	await kony.automation.playback.waitFor(["frmManageP2pRecipient","btnDeleteRecipient"]);
	kony.automation.button.click(["frmManageP2pRecipient","btnDeleteRecipient"]);
	kony.automation.alert.click(0);
	// :User Injected Code Snippet [// - [2 lines]]
	await kony.automation.playback.waitFor(["frmManageRecipientList","customPopup","lblPopup"]);
	expect(kony.automation.widget.getWidgetProperty(["frmManageRecipientList","customPopup","lblPopup"], "text")).toContain("deleted");
	// :End User Injected Code Snippet {816f60d7-1e92-4a83-840f-e1f4183424e1}
});