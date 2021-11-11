it("SearchInFromAndToScreen", async function() {
	await kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"]);
	kony.automation.widget.touch(["frmMMTransferFromAccount","tbxSearch"], [135,17],null,null);
	await kony.automation.playback.wait(1000);
	await kony.automation.playback.waitFor(["frmMMTransferFromAccount","customSearchbox","tbxSearch"]);
	kony.automation.textbox.enterText(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],"check");
	await kony.automation.playback.wait(10000);
	kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[0,0]"]);
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"]);
	kony.automation.widget.touch(["frmMMTransferToAccount","tbxSearch"], [146,13],null,null);
	await kony.automation.playback.wait(1000);
	await kony.automation.playback.waitFor(["frmMMTransferToAccount","customSearchbox","tbxSearch"]);
	kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"credit");
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"]);
	kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[0,0]"]);
});