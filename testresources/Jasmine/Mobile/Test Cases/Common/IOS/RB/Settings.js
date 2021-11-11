async function enableDisableAccountPreview(){
	await kony.automation.playback.waitFor(["frmSettings","segSettingsLogin"]);
	kony.automation.segmentedui.scrollToRow(["frmSettings","segSettingsLogin[0,0]"]);
	kony.automation.segmentedui.click(["frmSettings","segSettingsLogin[0,0]"]);
	await kony.automation.playback.waitFor(["frmPreferencesAccountPreview","switchPreview"]);
	kony.automation.switch.toggle(["frmPreferencesAccountPreview","switchPreview"]);
	await kony.automation.device.deviceBack();
}

async function goBackToDashboardFromSettings(){
	kony.automation.flexcontainer.click(["frmSettings","customFooter","flxAccounts"]);
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","lblTransaction"]);
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