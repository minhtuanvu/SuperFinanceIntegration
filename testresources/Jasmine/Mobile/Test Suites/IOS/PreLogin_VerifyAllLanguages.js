describe("PreLogin_VerifyAllLanguages", function() {
	it("PreLogin_VerifyLanguage_UK_English", async function() {
		await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
		kony.automation.flexcontainer.click(["frmLogin","flxLanguageSelection"]);
		await kony.automation.playback.waitFor(["frmLogin","flxSelectLanguage","segSelectLanguage"]);
		await kony.automation.playback.wait(2000);
		kony.automation.segmentedui.click(["frmLogin","flxSelectLanguage","segSelectLanguage[0,1]"]);
		await kony.automation.playback.waitFor(["frmLogin","btnupdateLanguage"]);
		kony.automation.button.click(["frmLogin","btnupdateLanguage"]);
		// :User Injected Code Snippet [// - [1 lines]]
		kony.automation.alert.click(1);
		// :End User Injected Code Snippet {b5c5062c-c6e8-a864-8bf2-8a26497fd66b}
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmLogin","tbxUsername"]);
	});
	
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
	
	it("PreLogin_VerifyLanguage_Spanish", async function() {
		await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
		kony.automation.flexcontainer.click(["frmLogin","flxLanguageSelection"]);
		await kony.automation.playback.waitFor(["frmLogin","segSelectLanguage"]);
		kony.automation.segmentedui.click(["frmLogin","segSelectLanguage[0,2]"]);
		await kony.automation.playback.waitFor(["frmLogin","btnupdateLanguage"]);
		kony.automation.button.click(["frmLogin","btnupdateLanguage"]);
		// :User Injected Code Snippet [//Click "Yes" on alert - [1 lines]]
		kony.automation.alert.click(1);
		// :End User Injected Code Snippet {e50a1016-3ef0-9bc5-a772-20d8070e9965}
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmLogin","tbxUsername"]);
	});
	
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
	
	it("PreLogin_VerifyLanguage_French", async function() {
		await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
		kony.automation.flexcontainer.click(["frmLogin","flxLanguageSelection"]);
		await kony.automation.playback.wait(1000);
		await kony.automation.playback.waitFor(["frmLogin","segSelectLanguage"]);
		kony.automation.segmentedui.click(["frmLogin","segSelectLanguage[0,4]"]);
	});
	
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
	
	it("PreLogin_VerifyLanguage_German", async function() {
		await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
		kony.automation.flexcontainer.click(["frmLogin","flxLanguageSelection"]);
		await kony.automation.playback.wait(1000);
		await kony.automation.playback.waitFor(["frmLogin","segSelectLanguage"]);
		await kony.automation.playback.wait(1000);
		kony.automation.segmentedui.click(["frmLogin","segSelectLanguage[0,3]"]);
		await kony.automation.playback.waitFor(["frmLogin","btnupdateLanguage"]);
		kony.automation.button.click(["frmLogin","btnupdateLanguage"]);
		// :User Injected Code Snippet [//Click yes on alert - [1 lines]]
		kony.automation.alert.click(1);
		// :End User Injected Code Snippet {882f5ccf-7067-2524-24c4-759fdd648821}
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmLogin","tbxUsername"]);
	});
	
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
	
	it("PreLogin_VerifyLanguage_US_English", async function() {
		await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
		kony.automation.flexcontainer.click(["frmLogin","flxLanguageSelection"]);
		await kony.automation.playback.wait(1000);
		await kony.automation.playback.waitFor(["frmLogin","segSelectLanguage"]);
		kony.automation.segmentedui.click(["frmLogin","segSelectLanguage[0,0]"]);
		await kony.automation.playback.waitFor(["frmLogin","btnupdateLanguage"]);
		kony.automation.button.click(["frmLogin","btnupdateLanguage"]);
		// :User Injected Code Snippet [//Click "Yes" on alert - [1 lines]]
		kony.automation.alert.click(1);
		// :End User Injected Code Snippet {1623e0bc-2225-768a-4cf3-4e6395f1522d}
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmLogin","tbxUsername"]);
	});
	
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