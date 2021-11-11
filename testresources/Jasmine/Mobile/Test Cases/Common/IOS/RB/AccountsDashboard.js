async function goToViewAllTransactions(){
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
	await kony.automation.scrollToWidget(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
	await kony.automation.playback.wait(1000);
	kony.automation.button.click(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
	await kony.automation.playback.wait(15000);
  
}
async function viewAllTransactions(){
	
	await goToViewAllTransactions();
	// :User Injected Code Snippet [// - [1 lines]]
	/*
	// :End User Injected Code Snippet {a927007b-13a8-f764-7dfc-39d86cabf84e}
	await kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","flxMainContainer","segTransactions"]);
	// :User Injected Code Snippet [// - [2 lines]]
	var segSize = kony.automation.widget.getWidgetProperty(["frmPFMCategorisedTransactions","flxMainContainer","segTransactions"],"data");
	expect(true).toBe(segSize.length > 0);
	// :End User Injected Code Snippet {9b56cb59-8470-3853-283c-77d3cf4c2dd1}
	kony.automation.segmentedui.click(["frmPFMCategorisedTransactions","segTransactions[0,0]"]);
	await kony.automation.playback.wait(1000);
	await kony.automation.playback.waitFor(["frmPFMTransactionDetails","lblRecurrenceValueTrans"]);
	// :User Injected Code Snippet [// - [12 lines]]
	
	var status = kony.automation.widget.getWidgetProperty(["frmPFMTransactionDetails","lblSuccess"],"text");
	var date = kony.automation.widget.getWidgetProperty(["frmPFMTransactionDetails","lblTransDateValueTrans"],"text");
	var refNumber = kony.automation.widget.getWidgetProperty(["frmPFMTransactionDetails","lblReferenceNoValueTrans"],"text");
	var category = kony.automation.widget.getWidgetProperty(["frmPFMTransactionDetails","lblSelectedCategoryValue"],"text");
	
	if(status!=null && date!=null && refNumber!=null && category!=null){
	expect(true).toBe(true);
	}
	else{
	expect(true).toBe(false);
	}
	// :End User Injected Code Snippet {3f46ce39-be32-664c-6b83-6616fb41acaa}
	await kony.automation.device.deviceBack();
	// :User Injected Code Snippet [// - [1 lines]]
	*/
	// :End User Injected Code Snippet {706673da-c60f-a8ca-5b99-4ebfd68b2385}
// 	await kony.automation.device.deviceBack();
// 	await kony.automation.playback.wait(2000);
// 	await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
}

async function searchStransaction(){
	
	await goToViewAllTransactions();

	kony.automation.flexcontainer.click(["frmPFMCategorisedTransactions","flxDropdownImage"]);
	kony.automation.segmentedui.click(["frmPFMCategorisedTransactions","segTransactionTypes[0,1]"]);
	
	await kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","tbxSearch"]);
	kony.automation.textbox.enterText(["frmPFMCategorisedTransactions","tbxSearch"],"spent on");
	await kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","segTransactions"]);
	kony.automation.segmentedui.scrollToRow(["frmPFMCategorisedTransactions","segTransactions[0,0]"]);
	kony.automation.segmentedui.click(["frmPFMCategorisedTransactions","segTransactions[0,0]"]);
	await kony.automation.playback.waitFor(["frmPFMTransactionDetails","lblDescValueTrans"]);
	// :User Injected Code Snippet [// - [1 lines]]
	expect(kony.automation.widget.getWidgetProperty(["frmPFMTransactionDetails","lblDescValueTrans"], "text")).not.toBe(null);
	// :End User Injected Code Snippet {38d43400-a067-8f8d-9372-35ba7241fb30}
	await kony.automation.device.deviceBack();
	await kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","tbxSearch"]);
// 	await kony.automation.device.deviceBack();
// 	await kony.automation.playback.waitFor(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
	await goBackToDashboard();
}

async function advanceSearch(){
	await kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","flxAdvSearch"]);
		kony.automation.flexcontainer.click(["frmPFMCategorisedTransactions","flxAdvSearch"]);
		await kony.automation.playback.waitFor(["frmPFMAdvancedSearch","tbxSearch"]);
		kony.automation.textbox.enterText(["frmPFMAdvancedSearch","tbxSearch"],"home");
		await kony.automation.playback.waitFor(["frmPFMAdvancedSearch","segTransactionType"]);
		await kony.automation.playback.wait(3000);
		kony.automation.segmentedui.scrollToRow(["frmPFMAdvancedSearch","segTransactionType[0,0]"]);
		// :User Injected Code Snippet [//Assert on searched value - [1 lines]]
		expect(kony.automation.widget.getWidgetProperty(["frmPFMAdvancedSearch","segTransactionType[0,0]","lblName"], "text")).toContain("Home");
		// :End User Injected Code Snippet {d7026c2f-5171-cc3b-09b0-b3f787a69074}
		kony.automation.segmentedui.click(["frmPFMAdvancedSearch","segTransactionType[0,0]"]);
		await kony.automation.scrollToWidget(["frmPFMAdvancedSearch","txtAmountFrom"]);
		kony.automation.textbox.enterText(["frmPFMAdvancedSearch","txtAmountFrom"]," 300");
		await kony.automation.playback.waitFor(["frmPFMAdvancedSearch","btnSearch"]);
		kony.automation.button.click(["frmPFMAdvancedSearch","btnSearch"]);
		await kony.automation.playback.waitFor(["frmPFMAdvanceSearchResults","segTransactions"]);
		await kony.automation.playback.wait(3000);
		kony.automation.segmentedui.scrollToRow(["frmPFMAdvanceSearchResults","segTransactions[0,0]"]);
	expect(kony.automation.widget.getWidgetProperty(["frmPFMAdvanceSearchResults","segTransactions[0,0]","lblTransactionAmount"], "text")).toEqual("-$300.00");		await kony.automation.playback.waitFor(["frmPFMAdvanceSearchResults","customSearchbox","btnCancel"]);
	kony.automation.button.click(["frmPFMAdvanceSearchResults","customSearchbox","btnCancel"]);
	await kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","segTransactions"]);
}
async function goBackToDashboard(){
	await kony.automation.device.deviceBack();
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
}

async function collapseAccounts(){
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxInnerChartSizeToggle"]);
	kony.automation.flexcontainer.click(["frmUnifiedDashboard","flxInnerChartSizeToggle"]);
	await kony.automation.playback.wait(3000);
	kony.automation.flexcontainer.click(["frmUnifiedDashboard","flxInnerChartSizeToggle"]);
}

async function swipeOnDashboard(){
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxInnerChartSizeToggle"]);
	kony.automation.flexcontainer.click(["frmUnifiedDashboard","flxInnerChartSizeToggle"]);
	await kony.automation.playback.wait(3000);

	await kony.automation.playback.waitFor(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
	await kony.automation.scrollToWidget(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
	await kony.automation.playback.wait(1000);

	await kony.automation.scrollToWidget(["frmUnifiedDashboard","flxInnerChartSizeToggle"]);
	await kony.automation.playback.wait(1000);
	kony.automation.flexcontainer.click(["frmUnifiedDashboard","flxInnerChartSizeToggle"]);
}