describe("Demo_2021", function() {
	it("LoginAndWaitForDashboard", async function() {
		await kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"]);
		kony.automation.textbox.enterText(["frmLogin","login","tbxUsername"],"dbxJasmine1234");
		kony.automation.textbox.enterText(["frmLogin","login","tbxPassword"],"Kony@1234");
		await kony.automation.playback.waitFor(["frmLogin","login","btnLogIn"]);
		kony.automation.button.click(["frmLogin","login","btnLogIn"]);
		//Verifying Terms and Condition page -
			var frmTnC = await kony.automation.playback.waitFor(["frmTermsAndCondition","flxCheckBox"],20000);
			if(frmTnC){
				kony.automation.flexcontainer.click(["frmTermsAndCondition","flxCheckBox"]);
				await kony.automation.playback.waitFor(["frmTermsAndCondition","btnContinue"]);
				kony.automation.button.click(["frmTermsAndCondition","btnContinue"]);
		}
		
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","lblBankName"],5000);
	},90000);
	
	it("PreLogin_Support_VerifyAppVersion", async function() {
		await kony.automation.playback.waitFor(["frmLogin","btnSupport"]);
		kony.automation.button.click(["frmLogin","btnSupport"]);
		await kony.automation.playback.waitFor(["frmSupport","lblAppVersion"]);
		expect(kony.automation.widget.getWidgetProperty(["frmSupport","lblAppVersion"], "text")).toEqual(appDetails.appVersion);
		await kony.automation.device.deviceBack();
		await kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"]);
	});
});