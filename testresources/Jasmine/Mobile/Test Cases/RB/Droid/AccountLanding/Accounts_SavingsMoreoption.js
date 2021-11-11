it("Accounts_SavingsMoreoption", async function() {
	await kony.automation.playback.waitFor(["frmAccountDetails","btnThreeDots"]);
	kony.automation.button.click(["frmAccountDetails","btnThreeDots"]);
	kony.automation.widget.touch(["frmAccountDetails","flxCancel"], [179,29],null,null);
});