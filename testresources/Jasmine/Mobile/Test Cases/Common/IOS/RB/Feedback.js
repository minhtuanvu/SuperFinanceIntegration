async function sendFeedback(){
	await kony.automation.playback.waitFor(["frmInAppFeedbackRating","imgStar4"]);
	kony.automation.flexcontainer.click(["frmInAppFeedbackRating","flxStar4"]);
	await kony.automation.playback.wait(2000);
	kony.automation.textarea.enterText(["frmInAppFeedbackRating","textarea"],"Optional comment");
	kony.automation.button.click(["frmInAppFeedbackRating","btnSubmit"]);
	await kony.automation.playback.waitFor(["frmFeedBackSuccess","btnDone"]);
	kony.automation.button.click(["frmFeedBackSuccess","btnDone"]);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
}