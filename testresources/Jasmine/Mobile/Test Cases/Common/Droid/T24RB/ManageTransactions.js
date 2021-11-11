function openManageTransactions(){
  openMenu("Manage Transactions");
}

function verifyAllTransferFilter(){

	let flag = isDataPresent("Transfers");
	if(flag){
		selectFilters("All Transfers");
    }
	else{
		expect(flag).toBe(true);
	}  
}

function verifyRecurringAllTransaction(){
  selectRecurringTab();
  let flag = isDataPresent("Recurring");
  if(flag){
		selectFilterAllTransfersInReccurring();
  }else{
    expect(flag).toBe(true);
  }
}

function selectFilters(filter){
// 	kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","SearchAndFilter","flxAdvancedFilter"],20000);
	
  /*
	kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","TransfersListMobileNative","segTransfersList"],20000);
	kony.automation.flexcontainer.click(["frmTransferActivitiesTransfersEurope","SearchAndFilter","flxAdvancedFilter"]);
	kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","SearchAndFilter","sgmtFilterOptions"],15000);
	let segData = kony.automation.widget.getWidgetProperty(["frmTransferActivitiesTransfersEurope","SearchAndFilter","sgmtFilterOptions"], "data");
	let index = getIndexOfFilterOption(segData, filter);
	kony.automation.segmentedui.click(["frmTransferActivitiesTransfersEurope","SearchAndFilter","sgmtFilterOptions[0, " + index + "]"]);
	kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","TransfersListMobileNative","segTransfersList"],15000); 
	*/
  kony.automation.playback.wait(2000);
  let currForm = kony.automation.getCurrentForm();
	kony.automation.playback.waitFor([currForm,"TransfersListMobileNative","segTransfersList"],20000);
	kony.automation.flexcontainer.click([currForm,"SearchAndFilter","flxAdvancedFilter"]);
	kony.automation.playback.waitFor([currForm,"SearchAndFilter","sgmtFilterOptions"],15000);
	let segData = kony.automation.widget.getWidgetProperty([currForm,"SearchAndFilter","sgmtFilterOptions"], "data");
	let index = getIndexOfFilterOption(segData, filter);
	kony.automation.segmentedui.click([currForm,"SearchAndFilter","sgmtFilterOptions[0, " + index + "]"]);
	kony.automation.playback.waitFor([currForm,"TransfersListMobileNative","segTransfersList"],15000); 

}

function selectFilterCompletedTransfers(){
	kony.automation.flexcontainer.click(["frmTransferActivitiesTransfersEurope","SearchAndFilter","flxAdvancedFilter"]);
	kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","SearchAndFilter","sgmtFilterOptions"],15000);
	kony.automation.segmentedui.click(["frmTransferActivitiesTransfersEurope","SearchAndFilter","sgmtFilterOptions[0,5]"]);
	kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","TransfersListMobileNative","segTransfersList"],15000); 
}

function selectFilterAllTransfersInReccurring(){
	kony.automation.playback.waitFor(["frmTransferActivitiesRecurringEurope","SearchAndFilter","flxAdvancedFilter"],10000);
	kony.automation.flexcontainer.click(["frmTransferActivitiesRecurringEurope","SearchAndFilter","flxAdvancedFilter"]);
	kony.automation.segmentedui.click(["frmTransferActivitiesRecurringEurope","SearchAndFilter","sgmtFilterOptions[0,0]"]);
	kony.automation.playback.waitFor(["frmTransferActivitiesRecurringEurope","TransfersListMobileNative","segTransfersList"],10000);
}

function isDataPresent(tabName){
  if(tabName === "Transfers"){
	return !kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","TransfersListMobileNative","lblNoRecords"], 10000);
// 	return kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","SearchAndFilter","flxAdvancedFilter"],10000);
  }else if(tabName === "Recurring"){
	return !kony.automation.playback.waitFor(["frmTransferActivitiesRecurringEurope","TransfersListMobileNative","lblNoRecords"], 10000);
//     return kony.automation.playback.waitFor(["frmTransferActivitiesRecurringEurope","SearchAndFilter","flxAdvancedFilter"],10000);
  }
}

function goBackFromTransfersTabs(){
	kony.automation.playback.wait(2000);
	kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","customHeader","flxBack"],15000);
	kony.automation.playback.wait(2000);
	kony.automation.flexcontainer.click(["frmTransferActivitiesTransfersEurope","customHeader","flxBack"]);
}

function goBackFromRecurringTabs(){
	kony.automation.playback.wait(2000);
	kony.automation.playback.waitFor(["frmTransferActivitiesRecurringEurope","customHeader","flxBack"],15000);
	kony.automation.playback.wait(2000);
	kony.automation.flexcontainer.click(["frmTransferActivitiesRecurringEurope","customHeader","flxBack"]);
}

function selectRecurringTab(){
	kony.automation.playback.wait(5000);
	kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","tabs","flxMainContainer","btnTab2"],15000);
	kony.automation.button.click(["frmTransferActivitiesTransfersEurope","tabs","flxMainContainer","btnTab2"]);
}

function cancelTransaction(){
	kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","TransfersListMobileNative","segTransfersList"],15000);
	kony.automation.segmentedui.click(["frmTransferActivitiesTransfersEurope","TransfersListMobileNative","segTransfersList[0,0]"]);
	kony.automation.playback.waitFor(["frmTransfersDetailsEurope","DetailsMain","flxMain","button2"],15000);
	kony.automation.button.click(["frmTransfersDetailsEurope","DetailsMain","flxMain","button2"]);
	kony.automation.alert.click(0);
	kony.automation.playback.wait(5000);
}

function editRecurringTransaction(){
	kony.automation.playback.waitFor(["frmTransferActivitiesRecurringEurope","TransfersListMobileNative","segTransfersList"],15000);
	kony.automation.segmentedui.click(["frmTransferActivitiesRecurringEurope","TransfersListMobileNative","segTransfersList[0,0]"]);
	kony.automation.playback.waitFor(["frmRecurringDetailsEurope","DetailsMain","flxMain", "button1"],15000);
	kony.automation.button.click(["frmRecurringDetailsEurope","DetailsMain", "flxMain", "button1"]);
	kony.automation.playback.wait(5000);
}

function cancelRecurringTransaction(){
	kony.automation.playback.waitFor(["frmTransferActivitiesRecurringEurope","TransfersListMobileNative","segTransfersList"],15000);
	kony.automation.segmentedui.click(["frmTransferActivitiesRecurringEurope","TransfersListMobileNative","segTransfersList[0,0]"]);
	kony.automation.playback.waitFor(["frmRecurringDetailsEurope","DetailsMain","flxMain","button2"],15000);
	kony.automation.button.click(["frmRecurringDetailsEurope","DetailsMain","flxMain","button2"]);
	kony.automation.alert.click(0);
	kony.automation.playback.wait(5000);
}

function repeatTransaction(){
	kony.automation.playback.waitFor(["frmTransferActivitiesTransfersEurope","TransfersListMobileNative","segTransfersList"],15000);
	kony.automation.segmentedui.click(["frmTransferActivitiesTransfersEurope","TransfersListMobileNative","segTransfersList[0,0]"]);
	kony.automation.playback.waitFor(["frmTransfersDetailsEurope","DetailsMain","flxMain","button1"],15000);
	kony.automation.button.click(["frmTransfersDetailsEurope","DetailsMain","flxMain","button1"]);
	kony.automation.alert.click(0);
	kony.automation.playback.wait(5000);
}

function verifyTransactionStatus(status){
	kony.automation.playback.wait(3000);
	let currForm = kony.automation.getCurrentForm();
	kony.automation.playback.waitFor([currForm,"TransfersListMobileNative","segTransfersList"],15000);
	kony.automation.playback.wait(3000);
	expect(kony.automation.widget.getWidgetProperty([currForm,"TransfersListMobileNative","segTransfersList[0,0]","lblField3"], "text")).toContain(status);
}

function searchTransaction(value){
	kony.automation.playback.wait(2000);
	let currForm = kony.automation.getCurrentForm();
  
	kony.automation.playback.waitFor([currForm,"SearchAndFilter","txtSearchBox"],15000);
	kony.automation.playback.wait(2000);
	kony.automation.textbox.enterText([currForm,"SearchAndFilter","txtSearchBox"],value);
}

function getIndexOfFilterOption(segData, value){
	let i=0;
	let j=0;
	
	for(i=0; i< segData.length; i++){
		if(segData[i].lblFilterOption.text.includes(value)){
			return i;
		}
	}
	return 0;		
}