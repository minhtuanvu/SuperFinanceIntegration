function showAccountFilters(){
	kony.automation.playback.waitFor(["frmUnifiedDashboard","flxShowAllAccountTypes"],15000);
	kony.automation.flexcontainer.click(["frmUnifiedDashboard","flxShowAllAccountTypes"]);
}
function createAndApplyCustomView(account){
	clickOnManage();
	clickToCreateCustomView();
	kony.automation.playback.waitFor(["frmSelectAccounts","tbxSearch"],15000);
	kony.automation.textbox.enterText(["frmSelectAccounts","tbxSearch"],account);
	let checkBox = kony.automation.widget.getWidgetProperty(["frmSelectAccounts","managecustomexpandCollapseView","segList[0,0]","imgSelectAccounts"], "src");
	if(checkBox.includes("inactivebox")){
		kony.automation.segmentedui.click(["frmSelectAccounts","managecustomexpandCollapseView","segList[0,0]"]);
	}	
	kony.automation.textbox.enterText(["frmSelectAccounts","tbxSearch"],"");
	kony.automation.button.click(["frmSelectAccounts","btnContinue"]);
	kony.automation.playback.waitFor(["frmCreateCustomGroup","txtCustomName"],15000);
	kony.automation.textbox.enterText(["frmCreateCustomGroup","txtCustomName"],"custom view one");
}

function clickOnManage(){
  kony.automation.playback.waitFor(["frmFilterAccounts","segShowAccounts"],15000);
	kony.automation.playback.wait(3000);
// 	kony.automation.segmentedui.scrollToRow(["frmFilterAccounts","segShowAccounts[0,4]"]);
	kony.automation.flexcontainer.click(["frmFilterAccounts","segShowAccounts[0,4]","flxManage"]);
}

function clickToCreateCustomView(){
	kony.automation.playback.waitFor(["frmManageCustomGroup","customHeader","flxSearch"],15000);
	kony.automation.flexcontainer.click(["frmManageCustomGroup","customHeader","flxSearch"]);
}

function confirmCustomViewName(){
  kony.automation.playback.waitFor(["frmCreateCustomGroup","btnConfirm"],15000);
  kony.automation.button.click(["frmCreateCustomGroup","btnConfirm"]);
}

function applyCustomView_AckScreen(){
  kony.automation.playback.waitFor(["frmCustomAcknowledgement","btnApply"],15000);
	kony.automation.button.click(["frmCustomAcknowledgement","btnApply"]);
}

function verifyDuplicateCustomView() {
	kony.automation.playback.waitFor(["frmCreateCustomGroup","customPopup","lblPopup"],15000);
	let popupmsg = kony.automation.widget.getWidgetProperty(["frmCreateCustomGroup","customPopup","lblPopup"], "text");
	expect(popupmsg).toContain("already been used");
	if(popupmsg.includes("already been used")){
	//cancel custom view creations
		kony.automation.button.click(["frmCreateCustomGroup","customHeader","btnRight"]);
		kony.automation.playback.waitFor(["frmManageCustomGroup","customHeader","flxBack"],15000);
		kony.automation.flexcontainer.click(["frmManageCustomGroup","customHeader","flxBack"]);
		kony.automation.playback.waitFor(["frmFilterAccounts","customHeader","flxSearch"],15000);
		kony.automation.flexcontainer.click(["frmFilterAccounts","customHeader","flxSearch"]);
	}
}

function verifySearchAccountFunctionality(account){
	//clickToCreateCustomView();
	kony.automation.playback.waitFor(["frmSelectAccounts","tbxSearch"],15000);
	kony.automation.textbox.enterText(["frmSelectAccounts","tbxSearch"],account);
	expect(kony.automation.widget.getWidgetProperty(["frmSelectAccounts","managecustomexpandCollapseView","segList[0,0]","lblAccountName"], "text")).not.toBeNull();
	kony.automation.textbox.enterText(["frmSelectAccounts","tbxSearch"],"");
}

function goBackFromAccountSearch() {
	kony.automation.playback.waitFor(["frmSelectAccounts","customHeader","flxBack"],15000);
	kony.automation.flexcontainer.click(["frmSelectAccounts","customHeader","flxBack"]);
	kony.automation.playback.waitFor(["frmManageCustomGroup","customHeader","flxBack"],15000);
	kony.automation.flexcontainer.click(["frmManageCustomGroup","customHeader","flxBack"]);
	kony.automation.playback.waitFor(["frmFilterAccounts","customHeader","flxSearch"],15000);
	kony.automation.flexcontainer.click(["frmFilterAccounts","customHeader","flxSearch"]);
}