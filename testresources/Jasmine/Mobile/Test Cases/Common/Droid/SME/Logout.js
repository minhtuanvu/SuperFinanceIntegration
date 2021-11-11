it("Logout", async function() {
  await kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxLogout"]);
	kony.automation.widget.touch(["frmUnifiedDashboard","Hamburger","flxLogout"], null,null,[37,31]);
	await kony.automation.playback.waitFor(["frmLogout","btnLogIn"]);
	kony.automation.button.click(["frmLogout","btnLogIn"]);
	await kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"]);
},30000);