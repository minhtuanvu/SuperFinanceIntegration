it("OpenMyBillsPage", async function() {
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","flxBillPay"]);
	kony.automation.flexcontainer.click(["frmUnifiedDashboard","customFooter","flxBillPay"]);
	await kony.automation.playback.wait(10000);
	await kony.automation.playback.waitFor(["frmBillPay","tbxSearch"]);
});