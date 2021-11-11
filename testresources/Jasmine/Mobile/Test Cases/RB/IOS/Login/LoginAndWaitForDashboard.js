it("LoginAndWaitForDashboard", async function() {
	await kony.automation.playback.waitFor(["frmLogin","tbxUsername"]);
	kony.automation.textbox.enterText(["frmLogin","tbxUsername"],LoginDetails.username);
	kony.automation.textbox.enterText(["frmLogin","tbxPassword"],LoginDetails.password);
	await kony.automation.playback.waitFor(["frmLogin","btnLogIn"]);
	kony.automation.button.click(["frmLogin","btnLogIn"]);
	//Verifying Terms and Condition page -
		var frmTnC = await kony.automation.playback.waitFor(["frmTermsAndCondition","flxCheckBox"],20000);
		if(frmTnC){
			kony.automation.flexcontainer.click(["frmTermsAndCondition","flxCheckBox"]);
			await kony.automation.playback.waitFor(["frmTermsAndCondition","btnContinue"]);
			kony.automation.button.click(["frmTermsAndCondition","btnContinue"]);
	}
	
	await kony.automation.playback.waitFor(["frmDashboardAggregated","lblBankName"],5000);
},26000);