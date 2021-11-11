async function openMenu(){
	kony.automation.flexcontainer.click(["frmUnifiedDashboard","customFooter","flxMore"]);
	await kony.automation.playback.wait(1000);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxMenu","segHamburger"]);
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

async function listOfRecipients(accountType){
	await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
  
	var segAccountType = kony.automation.widget.getWidgetProperty(["frmManageRecipientType","segRecipientType"],"data");
	kony.print("segAccountTyep: "+segAccountType);
	var indexAccountType = -1;
	for(i=0; i<segAccountType[0][1].length; i++){
      if(segAccountType[0][1][i].lblTransactionMode === accountType){
        indexAccountType = i;
        break;
      }
    }
	if(indexAccountType > -1){
	kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[0,"+indexAccountType+"]"]);
	await kony.automation.playback.wait(3000);
	await kony.automation.playback.waitFor(["frmManageRecipientList","flxMainContainer","segRecipients"]);
	// :User Injected Code Snippet [// - [3 lines]]
	var segSize = kony.automation.widget.getWidgetProperty(["frmManageRecipientList","flxMainContainer","segRecipients"],"data");
	
	expect(true).toBe(  segSize.length >=1);
	// :End User Injected Code Snippet {b36868d0-465d-3125-0fdd-6359df041f5d}
    }else{
      expect(indexAccountType).toBeGreaterThan(-1);
    }
}

async function addRecipientSameBank(){
  await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"]);
	kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);
	await kony.automation.playback.waitFor(["frmEnterBenAccNo","keypad","btnOne"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnOne"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnTwo"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnFour"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnFive"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnSix"]);
	kony.automation.button.click(["frmEnterBenAccNo","btnContinue"]);
	await kony.automation.playback.waitFor(["frmReEnterBenAccNo","keypad","btnOne"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnOne"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnTwo"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnFour"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnFive"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnSix"]);
	kony.automation.button.click(["frmReEnterBenAccNo","btnContinue"]);
	kony.automation.textbox.enterText(["frmBenName","txtRecipientName"],"samebankIOS");
	await kony.automation.playback.waitFor(["frmBenName","btnContinue"]);
	kony.automation.button.click(["frmBenName","btnContinue"]);
	await kony.automation.playback.waitFor(["frmBenVerifyDetails","btnContinue"]);
	kony.automation.button.click(["frmBenVerifyDetails","btnContinue"]);
	await kony.automation.playback.wait(3000);
	// :User Injected Code Snippet [// - [3 lines]]
	await kony.automation.playback.waitFor(["frmManageRecipientList","customPopup","lblPopup"]);
	
	expect(kony.automation.widget.getWidgetProperty(["frmManageRecipientList","customPopup","lblPopup"],"text")).toContain("success");
	// :End User Injected Code Snippet {6c03a7a9-f57f-f8d9-62f8-21a0ec441e4f}
}

async function addRecipientExternalAccount(){
	await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"]);
	kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);
	await kony.automation.playback.waitFor(["frmAddBenRoutNo","keypad","btnOne"]);
	kony.automation.button.click(["frmAddBenRoutNo","keypad","btnOne"]);
	kony.automation.button.click(["frmAddBenRoutNo","keypad","btnTwo"]);
	kony.automation.button.click(["frmAddBenRoutNo","keypad","btnThree"]);
	kony.automation.button.click(["frmAddBenRoutNo","keypad","btnFour"]);
	kony.automation.button.click(["frmAddBenRoutNo","keypad","btnFive"]);
	kony.automation.button.click(["frmAddBenRoutNo","keypad","btnSix"]);
	kony.automation.button.click(["frmAddBenRoutNo","btnContinue"]);
	await kony.automation.playback.waitFor(["frmEnterBenAccNo","keypad","btnOne"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnOne"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnOne"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnOne"]);
	kony.automation.button.click(["frmEnterBenAccNo","keypad","btnOne"]);
	kony.automation.button.click(["frmEnterBenAccNo","btnContinue"]);
	await kony.automation.playback.waitFor(["frmReEnterBenAccNo","keypad","btnOne"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnOne"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnOne"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnOne"]);
	kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnOne"]);
	kony.automation.button.click(["frmReEnterBenAccNo","btnContinue"]);
	await kony.automation.playback.waitFor(["frmBenName","txtRecipientName"]);
	kony.automation.textbox.enterText(["frmBenName","txtRecipientName"],"ExtAccIOS");
	kony.automation.button.click(["frmBenName","btnContinue"]);
	await kony.automation.playback.waitFor(["frmBenVerifyDetails","btnContinue"]);
	kony.automation.button.click(["frmBenVerifyDetails","btnContinue"]);
	await kony.automation.playback.wait(3000);
	// :User Injected Code Snippet [// - [2 lines]]
	await kony.automation.playback.waitFor(["frmAcknowledgement","lblSuccessMessage"]);
	expect(kony.automation.widget.getWidgetProperty(["frmAcknowledgement","lblSuccessMessage"], "text")).toContain("success");
	// :End User Injected Code Snippet {6c03a7a9-f57f-f8d9-62f8-21a0ec441e4f}
	await kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"]);
	kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","imgAccounts"]);
}
async function openManageRecipientPage(){
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
	kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,3]"]);
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
}

async function goBackToDashboardFromManageRecipient(){
	await kony.automation.playback.waitFor(["frmManageRecipientList","flxMainContainer","segRecipients"]);
	// :User Injected Code Snippet [// - [3 lines]]
	kony.automation.device.deviceBack();
	await kony.automation.playback.wait(1000);
	kony.automation.device.deviceBack();
}