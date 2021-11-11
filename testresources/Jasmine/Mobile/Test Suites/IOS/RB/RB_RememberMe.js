describe("RB_RememberMe", function() {
	it("LoginWithRememberMe", async function() {
		await kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"]);
		// :User Injected Code Snippet [//Select remember me - [5 lines]]
		var rememberMe= kony.automation.widget.getWidgetProperty(["frmLogin","login","switchRememberMe"],"selectedIndex");
		
		if(rememberMe === 1){
		kony.automation.switch.toggle(["frmLogin","login","switchRememberMe"]);
		}
		// :End User Injected Code Snippet {6dcf31e3-f0f2-1d5b-4816-a67d0500ae7c}
		await kony.automation.playback.wait(1000);
		kony.automation.textbox.enterText(["frmLogin","login","tbxUsername"],"dbxJasmine1234");
		kony.automation.textbox.enterText(["frmLogin","login","tbxPassword"],"Kony@1234");
		kony.automation.button.click(["frmLogin","login","btnLogIn"]);
		await kony.automation.playback.wait(25000);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","flxMore"]);
		kony.automation.flexcontainer.click(["frmUnifiedDashboard","customFooter","flxMore"]);
		kony.automation.widget.touch(["frmUnifiedDashboard","customFooter","imgMore"], [21,21],null,null);
		kony.automation.widget.touch(["frmUnifiedDashboard","customFooter","imgMore"], null,null,[21,21]);
		kony.automation.flexcontainer.click(["frmUnifiedDashboard","customFooter","flxMore"]);
		await kony.automation.playback.wait(2000);
		kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,10]"]);
		await kony.automation.playback.waitFor(["frmSettings","segSettingsLogin"]);
		kony.automation.segmentedui.click(["frmSettings","segSettingsLogin[0,1]"]);
		// :User Injected Code Snippet [//Device Registration should be on - [2 lines]]
			expect(kony.automation.widget.getWidgetProperty(["frmPreferencesDeviceRegistration","lblRegisterDevice3"], "text")).toContain("Do you want to register");
		
		// :End User Injected Code Snippet {be515621-b042-fdc2-0836-a0cbca3353a3}
		expect(kony.automation.widget.getWidgetProperty(["frmPreferencesDeviceRegistration","btnRegisterDevice"], "isVisible")).toEqual(true);
		await kony.automation.device.deviceBack();
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmSettings","customFooter","imgMore"]);
		kony.automation.widget.touch(["frmSettings","customFooter","imgMore"], [19,17],null,null);
		kony.automation.widget.touch(["frmSettings","customFooter","imgMore"], null,null,[19,17]);
		kony.automation.flexcontainer.click(["frmSettings","customFooter","flxMore"]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmSettings","Hamburger","flxLogout"]);
		kony.automation.widget.touch(["frmSettings","Hamburger","flxLogout"], null,null,[46,30]);
		kony.automation.flexcontainer.click(["frmSettings","flxHamburger"]);
		await kony.automation.playback.wait(8000);
		await kony.automation.playback.waitFor(["frmLogout","btnLogIn"]);
		kony.automation.button.click(["frmLogout","btnLogIn"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"]);
	});
	
	it("LoginWithoutRememberMe", async function() {
		await kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"]);
		// :User Injected Code Snippet [//Uncheck remember me - [5 lines]]
		var rememberMe= kony.automation.widget.getWidgetProperty(["frmLogin","login","switchRememberMe"],"selectedIndex");
		
		if(rememberMe == 0){
		kony.automation.switch.toggle(["frmLogin","login","switchRememberMe"]);
		}
		// :End User Injected Code Snippet {6dcf31e3-f0f2-1d5b-4816-a67d0500ae7c}
		await kony.automation.playback.wait(1000);
		kony.automation.textbox.enterText(["frmLogin","login","tbxUsername"],"dbxJasmine1234");
		kony.automation.textbox.enterText(["frmLogin","login","tbxPassword"],"Kony@1234");
		kony.automation.button.click(["frmLogin","login","btnLogIn"]);
		await kony.automation.playback.wait(25000);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","flxMore"]);
		kony.automation.flexcontainer.click(["frmUnifiedDashboard","customFooter","flxMore"]);
		kony.automation.widget.touch(["frmUnifiedDashboard","customFooter","imgMore"], [21,21],null,null);
		kony.automation.widget.touch(["frmUnifiedDashboard","customFooter","imgMore"], null,null,[21,21]);
		kony.automation.flexcontainer.click(["frmUnifiedDashboard","customFooter","flxMore"]);
		await kony.automation.playback.wait(2000);
		kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,10]"]);
		await kony.automation.playback.waitFor(["frmSettings","segSettingsLogin"]);
		kony.automation.segmentedui.click(["frmSettings","segSettingsLogin[0,1]"]);
		// :User Injected Code Snippet [//Device Registration should be off - [2 lines]]
			expect(kony.automation.widget.getWidgetProperty(["frmPreferencesDeviceRegistration","lblRegisterDevice2"], "text")).toContain("To register your device, select Remember Me");
		
		// :End User Injected Code Snippet {be515621-b042-fdc2-0836-a0cbca3353a3}
		await kony.automation.device.deviceBack();
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmSettings","customFooter","imgMore"]);
		kony.automation.widget.touch(["frmSettings","customFooter","imgMore"], [19,17],null,null);
		kony.automation.widget.touch(["frmSettings","customFooter","imgMore"], null,null,[19,17]);
		kony.automation.flexcontainer.click(["frmSettings","customFooter","flxMore"]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmSettings","Hamburger","flxLogout"]);
		kony.automation.widget.touch(["frmSettings","Hamburger","flxLogout"], null,null,[46,30]);
		kony.automation.flexcontainer.click(["frmSettings","flxHamburger"]);
		await kony.automation.playback.wait(8000);
		await kony.automation.playback.waitFor(["frmLogout","btnLogIn"]);
		kony.automation.button.click(["frmLogout","btnLogIn"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"]);
	});
});