it("Accounts_SavingsWithdrawCash", async function() {
	kony.automation.button.click(["frmAccountDetails","btnWithdrawCash"]);
	kony.automation.button.click(["frmCardLessCashRec","btnICollect"]);
	await kony.automation.playback.waitFor(["frmCardLessWithdraw","keypad","btnFive"]);
	kony.automation.button.click(["frmCardLessWithdraw","keypad","btnFive"]);
	kony.automation.button.click(["frmCardLessWithdraw","keypad","btnZero"]);
	kony.automation.button.click(["frmCardLessWithdraw","keypad","btnZero"]);
	kony.automation.button.click(["frmCardLessWithdraw","keypad","btnZero"]);
	await kony.automation.playback.waitFor(["frmCardLessWithdraw","btnContinue"]);
	kony.automation.button.click(["frmCardLessWithdraw","btnContinue"]);
	kony.automation.button.click(["frmCardLessConfWithdraw","btnConfirm"]);
	await kony.automation.playback.waitFor(["frmCardLessCWCode","btnDone"]);
	kony.automation.button.click(["frmCardLessCWCode","btnDone"]);
});