it("LoginAndWaitForDashboard", async function() {
	kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
      kony.automation.textbox.enterText(["frmLogin","login","tbxUsername"],"dbxJasmine1234");
      kony.automation.textbox.enterText(["frmLogin","login","tbxPassword"],"Kony@1234");
      kony.automation.button.click(["frmLogin","login","btnLogIn"]);
	
	// Verifying Terms and conditions screen
	var frmTnC = await kony.automation.playback.waitFor(["frmTermsAndCondition","flxCheckBox"],20000);
	if(frmTnC){
		kony.automation.flexcontainer.click(["frmTermsAndCondition","flxCheckBox"]);
		await kony.automation.playback.waitFor(["frmTermsAndCondition","btnContinue"]);
		kony.automation.button.click(["frmTermsAndCondition","btnContinue"]);
    }
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],5000);
},90000);