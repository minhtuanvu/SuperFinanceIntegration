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