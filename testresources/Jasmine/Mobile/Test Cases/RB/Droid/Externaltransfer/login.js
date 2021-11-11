it("login", async function() {
	await kony.automation.playback.waitFor(["frmLogin","tbxUsername"]);
	kony.automation.textbox.enterText(["frmLogin","tbxUsername"],"dbxJasmine1234");
	await kony.automation.playback.waitFor(["frmLogin","tbxPassword"]);
	kony.automation.textbox.enterText(["frmLogin","tbxPassword"],"Kony@1234");
	await kony.automation.playback.waitFor(["frmLogin","btnLogIn"]);
	kony.automation.button.click(["frmLogin","btnLogIn"]);
});