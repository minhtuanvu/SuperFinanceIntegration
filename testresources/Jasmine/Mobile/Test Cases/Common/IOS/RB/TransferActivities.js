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

async function VerifyTransferUnderActivities(RecipientName){
  RecipientName = RecipientName.substr(0,4);
  await kony.automation.playback.waitFor(["frmTransferActivitiesTransfers","SearchAndFilter","txtSearchBox"],15000);
  await kony.automation.playback.wait(10000);
  kony.automation.textbox.enterText(["frmTransferActivitiesTransfers","SearchAndFilter","txtSearchBox"],RecipientName);
  await kony.automation.playback.wait(10000);

  var NoResult= await kony.automation.playback.waitFor(["frmTransferActivitiesTransfers","TransfersListMobileNative","lblNoRecords"],15000);
  if(NoResult){
    expect(kony.automation.widget.getWidgetProperty(["frmTransferActivitiesTransfers","TransfersListMobileNative","lblNoRecords"], "text")).not.toBe(null);
  }else{
    await kony.automation.playback.waitFor(["frmTransferActivitiesTransfers","TransfersListMobileNative","segTransfersList"],15000);
    expect(kony.automation.widget.getWidgetProperty(["frmTransferActivitiesTransfers","TransfersListMobileNative","segTransfersList[0,0]","lblField1"], "text")).not.toBe('');
  }
}

async function goBackToDashboardFromTransferActivities(){
	// :User Injected Code Snippet [// - [1 lines]]
	await kony.automation.device.deviceBack();
	// :End User Injected Code Snippet {f8fdcadd-8009-da85-167a-dd62f0fae93e}
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
}

async function VerifyAdvancedSearch(){
	await kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"],15000);
	kony.automation.widget.touch(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"], [17,16],null,null);
	await kony.automation.playback.wait(5000);

await kony.automation.playback.waitFor(["frmAdvanceSearch","segType"]);
kony.automation.segmentedui.click(["frmAdvanceSearch","segType[0,0]"]);
await kony.automation.playback.waitFor(["frmAdvanceSearch","flxAddRangeAmount"]);
kony.automation.flexcontainer.click(["frmAdvanceSearch","flxAddRangeAmount"]);
await kony.automation.playback.waitFor(["frmAdvanceSearch","txtAmountFrom"]);
kony.automation.textbox.enterText(["frmAdvanceSearch","txtAmountFrom"],"1");
await kony.automation.playback.waitFor(["frmAdvanceSearch","txtAmountTo"]);
kony.automation.textbox.enterText(["frmAdvanceSearch","txtAmountTo"],"100");
await kony.automation.playback.waitFor(["frmAdvanceSearch","btnSearch"]);
kony.automation.button.click(["frmAdvanceSearch","btnSearch"]);
await kony.automation.playback.wait(5000);

await kony.automation.device.deviceBack();
kony.automation.playback.wait(5000);
await kony.automation.device.deviceBack();
await kony.automation.device.deviceBack();
kony.automation.playback.wait(5000);

}