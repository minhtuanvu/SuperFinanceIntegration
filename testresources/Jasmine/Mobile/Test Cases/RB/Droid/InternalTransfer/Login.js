it("Login", async function() {
	kony.automation.textbox.enterText(["frmLogin","tbxUsername"],"dbxJasmine1234");
	kony.automation.textbox.enterText(["frmLogin","tbxPassword"],"Kony@1234");
	await kony.automation.playback.waitFor(["frmLogin","btnLogIn"]);
	kony.automation.button.click(["frmLogin","btnLogIn"]);
});