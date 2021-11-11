describe("RB_PostLogin_Support", function() {
	beforeEach(async function() {
	// 	jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000;
	    var flgLoginForm = await kony.automation.playback.waitFor(["frmLogin", "login", "btnLogIn"], 2000);
	    var flgLogoutForm = await kony.automation.playback.waitFor(["frmLogout", "btnLogIn"], 2000);
	    kony.print("flgLoginForm: " + flgLoginForm + " ,flgLogoutForm: " + flgLogoutForm);
	
	    if (flgLogoutForm) {
	        kony.automation.button.click(["frmLogout", "btnLogIn"]);
	        kony.automation.playback.waitFor(["frmLogin", "login", "tbxUsername"], 10000);
	        await kony.automation.playback.wait(3000);
	//         expect(kony.automation.widget.getWidgetProperty(["frmLogin", "login", "tbxPassword"], "text")).toEqual("");
	        await login(LoginDetails.username);
	    } else if (flgLoginForm === true || flgLoginForm === 1) {
	        await login(LoginDetails.username);
	    }
	});
	
	
	async function login(username) {
	    await kony.automation.playback.waitFor(["frmLogin", "login", "tbxUsername"]);
	    kony.automation.textbox.enterText(["frmLogin", "login", "tbxUsername"], username);
	    kony.automation.textbox.enterText(["frmLogin", "login", "tbxPassword"], LoginDetails.password);
	    await kony.automation.playback.waitFor(["frmLogin", "login", "btnLogIn"]);
	    kony.automation.button.click(["frmLogin", "login", "btnLogIn"]);
	    //Verifying Terms and Condition page -
	    var frmTnC = await kony.automation.playback.waitFor(["frmTermsAndCondition", "flxCheckBox"], 20000);
	    if (frmTnC) {
	        kony.automation.flexcontainer.click(["frmTermsAndCondition", "flxCheckBox"]);
	        await kony.automation.playback.waitFor(["frmTermsAndCondition", "btnContinue"]);
	        kony.automation.button.click(["frmTermsAndCondition", "btnContinue"]);
	    }
	
	    await kony.automation.playback.waitFor(["frmUnifiedDashboard", "lblBankName"], 15000);
	}
	
	async function PostLogin_FAQ_TnC(){
		await kony.automation.playback.waitFor(["frmSupport","segSupport"]);
		kony.automation.segmentedui.click(["frmSupport","segSupport[0,0]"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmSupportInfo","segFaq"]);
		kony.automation.segmentedui.scrollToRow(["frmSupportInfo","segFaq[9,5]"]);
		await kony.automation.device.deviceBack();
		await kony.automation.playback.waitFor(["frmSupport","segSupport"]);
		kony.automation.segmentedui.click(["frmSupport","segSupport[0,1]"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmSupportInfo","browserContent"]);
		await kony.automation.scrollToWidget(["frmSupportInfo","browserContent"]);
		await kony.automation.device.deviceBack();
		await kony.automation.playback.wait(1000);
		await kony.automation.playback.waitFor(["frmSupport","segSupport"]);
		kony.automation.segmentedui.click(["frmSupport","segSupport[0,2]"]);
		await kony.automation.playback.waitFor(["frmSupportInfo","browserContent"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.device.deviceBack();
		await kony.automation.device.deviceBack();
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
	}
	
	async function PostLogin_VerifyAppVersion(){
		await kony.automation.playback.waitFor(["frmSupport","lblAppVersion"]);
		expect(kony.automation.widget.getWidgetProperty(["frmSupport","lblAppVersion"], "text")).toEqual(appDetails.appVersion);
		await kony.automation.device.deviceBack();
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
	}
	
	async function openMenu(menu){
		kony.automation.flexcontainer.click(["frmUnifiedDashboard","customFooter","flxMore"]);
		await kony.automation.playback.wait(1000);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxMenu","segHamburger"]);
		await kony.automation.playback.wait(1000);
		var menuOptions = kony.automation.widget.getWidgetProperty(["frmUnifiedDashboard","Hamburger","flxMenu","segHamburger"], "data");
		kony.print("menuOptions: "+menuOptions);
		var menuIndex = -1;
		for(i=0; i<menuOptions.length; i++){
			if(menuOptions[i].text === menu){
				menuIndex = i;
				break;
			}
	    }
		if(menuIndex > -1){
			kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0," + menuIndex+ "]" ]);
	    }else{
	      expect(menuIndex).toBeGreaterThan(-1);
	    }
	}
	
	it("PostLogin_Support_FAQ_TnC", async function() {
		// :User Injected Code Snippet [// - [2 lines]]
		await openMenu("Support");
		await PostLogin_FAQ_TnC();
		// :End User Injected Code Snippet {ac0e5feb-3e1f-d7e3-65e2-44c3ffde1f96}
	});
	
	it("PostLogin_Support_VerifyAppVersion", async function() {
		// :User Injected Code Snippet [// - [2 lines]]
		await openMenu("Support");
		await PostLogin_VerifyAppVersion();
		// :End User Injected Code Snippet {da1e5d79-27be-8fe6-d36a-d0543f75f501}
	});
});