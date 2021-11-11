it("GoBackToDashboard", async function() {
	await kony.automation.playback.waitFor(["frmBillPay","customFooter","flxAccounts"]);
	kony.automation.flexcontainer.click(["frmBillPay","customFooter","flxAccounts"]);
	await kony.automation.playback.wait(3000);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
});