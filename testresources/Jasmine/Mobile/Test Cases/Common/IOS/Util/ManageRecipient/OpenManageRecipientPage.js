it("OpenManageRecipientPage", async function() {
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
	kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,3]"]);
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
});