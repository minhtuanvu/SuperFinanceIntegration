it("openMenu", async function() {
	kony.automation.flexcontainer.click(["frmUnifiedDashboard","customFooter","flxMore"]);
	await kony.automation.playback.wait(1000);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxMenu","segHamburger"]);
});