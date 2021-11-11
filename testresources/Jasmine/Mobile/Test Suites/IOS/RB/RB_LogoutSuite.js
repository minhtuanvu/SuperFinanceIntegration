describe("RB_LogoutSuite", function() {
	it("Logout", async function() {
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","flxMore"]);
		kony.automation.flexcontainer.click(["frmUnifiedDashboard","customFooter","flxMore"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxLogout"]);
		kony.automation.widget.touch(["frmUnifiedDashboard","Hamburger","flxLogout"], null,null,[50,31]);
		await kony.automation.playback.wait(4000);
		await kony.automation.playback.waitFor(["frmLogout","btnLogIn"]);
		kony.automation.button.click(["frmLogout","btnLogIn"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"]);
		expect(kony.automation.widget.getWidgetProperty(["frmLogin","login","tbxPassword"], "text")).toEqual("");
	});
});