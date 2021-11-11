async function openMyBillsPage(){
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","flxBillPay"]);
	kony.automation.flexcontainer.click(["frmUnifiedDashboard","customFooter","flxBillPay"]);
	await kony.automation.playback.wait(10000);
	await kony.automation.playback.waitFor(["frmBillPay","tbxSearch"]);
}

async function searchBill(bill){
  await kony.automation.playback.waitFor(["frmBillPay","tbxSearch"]);
	kony.automation.widget.touch(["frmBillPay","tbxSearch"], [111,20],null,null);
	await kony.automation.playback.wait(2000);
	kony.automation.textbox.enterText(["frmBillPay","customSearchbox","tbxSearch"],bill);
	await kony.automation.playback.wait(5000);
	// :User Injected Code Snippet [//Asert on search value - [3 lines]]
	kony.automation.segmentedui.scrollToRow(["frmBillPay","flxMainContainer","segTransactions[0,0]"]);
	await kony.automation.playback.wait(5000);
	//expect(kony.automation.widget.getWidgetProperty(["frmBillPay","flxMainContainer","segTransactions[0,0]","flxAccountName","lblAccountName"], "text")).toContain(bill);
	// :End User Injected Code Snippet {30aa2644-535e-35f6-b6b3-176928a92236}
	await kony.automation.playback.wait(1000);
	await kony.automation.playback.waitFor(["frmBillPay","customSearchbox","btnCancel"]);
	kony.automation.button.click(["frmBillPay","customSearchbox","btnCancel"]);
	await kony.automation.playback.wait(8000);
}

async function goBackToDashboard(){
	await kony.automation.playback.waitFor(["frmBillPay","customFooter","flxAccounts"]);
	kony.automation.flexcontainer.click(["frmBillPay","customFooter","flxAccounts"]);
	await kony.automation.playback.wait(3000);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
}