describe("SME_PreLogin_Support", function() {
	beforeEach(async function() {
	
	    var flgLogoutForm = await kony.automation.playback.waitFor(["frmLogout", "btnLogIn"], 3000);
	    kony.print("flgLogoutForm: " + flgLogoutForm);
	
	    if (flgLogoutForm === true || flgLogoutForm === 1) {
	        kony.automation.button.click(["frmLogout", "btnLogIn"]);
	        kony.automation.playback.waitFor(["frmLogin", "login", "tbxUsername"], 10000);
	        await kony.automation.playback.wait(3000);
	        expect(kony.automation.widget.getWidgetProperty(["frmLogin", "login", "tbxPassword"], "text")).toEqual("");
	    }
	
	});
	
	it("PreLogin_Support_VerifyAppVersion", async function() {
		await kony.automation.playback.waitFor(["frmLogin","btnSupport"]);
		kony.automation.button.click(["frmLogin","btnSupport"]);
	
		await kony.automation.playback.waitFor(["frmSupport","flxAppVersion","lblAppVersion"]);
		var appVersion = kony.automation.widget.getWidgetProperty(["frmSupport","flxAppVersion","lblAppVersion"],"text");
	
		expect(appVersion).toEqual('App Version 2021.01.00');
		kony.automation.flexcontainer.click(["frmSupport","customHeader","flxBack"]);
		await kony.automation.playback.waitFor(["frmLogin","btnSupport"]);
	},60000);
	
	it("PreLogin_VerifyLanguage_French", async function() {
		await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
		kony.automation.flexcontainer.click(["frmLogin","flxLanguageSelection"]);
		await kony.automation.playback.waitFor(["frmLogin","segSelectLanguage"]);
		kony.automation.segmentedui.click(["frmLogin","segSelectLanguage[0,4]"]);
		await kony.automation.playback.waitFor(["frmLogin","btnupdateLanguage"]);
		kony.automation.button.click(["frmLogin","btnupdateLanguage"]);
		kony.automation.alert.click(0);
		await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
	},60000);
	
	it("PreLogin_VerifyLanguage_German", async function() {
		await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
		kony.automation.flexcontainer.click(["frmLogin","flxLanguageSelection"]);
		await kony.automation.playback.waitFor(["frmLogin","segSelectLanguage"]);
		kony.automation.segmentedui.click(["frmLogin","segSelectLanguage[0,3]"]);
		await kony.automation.playback.waitFor(["frmLogin","btnupdateLanguage"]);
		kony.automation.button.click(["frmLogin","btnupdateLanguage"]);
		kony.automation.alert.click(0);
		await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
	},60000);
	
	it("PreLogin_VerifyLanguage_Spanish", async function() {
		await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
		kony.automation.flexcontainer.click(["frmLogin","flxLanguageSelection"]);
		await kony.automation.playback.waitFor(["frmLogin","segSelectLanguage"]);
		kony.automation.segmentedui.click(["frmLogin","segSelectLanguage[0,2]"]);
		await kony.automation.playback.waitFor(["frmLogin","btnupdateLanguage"]);
		kony.automation.button.click(["frmLogin","btnupdateLanguage"]);
		kony.automation.alert.click(0);
		await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
	},60000);
	
	it("PreLogin_VerifyLanguage_UK_English", async function() {
		await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
		kony.automation.flexcontainer.click(["frmLogin","flxLanguageSelection"]);
		await kony.automation.playback.waitFor(["frmLogin","segSelectLanguage"]);
		kony.automation.segmentedui.click(["frmLogin","segSelectLanguage[0,1]"]);
		await kony.automation.playback.waitFor(["frmLogin","btnupdateLanguage"]);
		kony.automation.button.click(["frmLogin","btnupdateLanguage"]);
		kony.automation.alert.click(0);
		await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
	},60000);
	
	it("PreLogin_VerifyLanguage_US_English", async function() {
		await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
		kony.automation.flexcontainer.click(["frmLogin","flxLanguageSelection"]);
		await kony.automation.playback.waitFor(["frmLogin","segSelectLanguage"]);
		kony.automation.segmentedui.click(["frmLogin","segSelectLanguage[0,0]"]);
		await kony.automation.playback.waitFor(["frmLogin","btnupdateLanguage"]);
		kony.automation.button.click(["frmLogin","btnupdateLanguage"]);
		kony.automation.alert.click(0);
		await kony.automation.playback.waitFor(["frmLogin","flxLanguageSelection"]);
	},60000);
	
	it("VerifyFAQTnC", async function() {
	  await kony.automation.playback.waitFor(["frmLogin","btnSupport"]);
	  kony.automation.button.click(["frmLogin","btnSupport"]);
	  await kony.automation.playback.waitFor(["frmSupport","segSupport"]);
	  kony.automation.segmentedui.click(["frmSupport","segSupport[0,0]"]);
	  await kony.automation.playback.waitFor(["frmSupportInfo","segFaq"]);
	  await kony.automation.scrollToWidget(["frmSupportInfo","segFaq"]);
	  await kony.automation.playback.waitFor(["frmSupportInfo","segFaq"]);
	  kony.automation.segmentedui.click(["frmSupportInfo","segFaq[9,4]"]);
	  await kony.automation.playback.waitFor(["frmSupportInfo","customHeader","flxBack"]);
	  kony.automation.flexcontainer.click(["frmSupportInfo","customHeader","flxBack"]);
	  await kony.automation.playback.waitFor(["frmSupport","segSupport"]);
	  kony.automation.segmentedui.click(["frmSupport","segSupport[0,1]"]);
	  await kony.automation.playback.waitFor(["frmSupportInfo","customHeader","flxBack"]);
	  kony.automation.flexcontainer.click(["frmSupportInfo","customHeader","flxBack"]);
	  await kony.automation.playback.waitFor(["frmSupport","segSupport"]);
	  kony.automation.segmentedui.click(["frmSupport","segSupport[0,2]"]);
	  await kony.automation.playback.waitFor(["frmSupportInfo","customHeader","flxBack"]);
	  kony.automation.flexcontainer.click(["frmSupportInfo","customHeader","flxBack"]);
	  await kony.automation.playback.waitFor(["frmSupport","customHeader","flxBack"]);
	  kony.automation.flexcontainer.click(["frmSupport","customHeader","flxBack"]);
	  await kony.automation.playback.waitFor(["frmLogin","btnSupport"]);
	  kony.automation.playback.wait(15000);
	},60000);
});