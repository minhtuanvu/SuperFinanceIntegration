describe("RB_IOSLoginAndLogout", function() {
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