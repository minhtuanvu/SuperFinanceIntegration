it("ViewAllTransactions", async function() {
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
	await kony.automation.scrollToWidget(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
	await kony.automation.playback.wait(1000);
	kony.automation.button.click(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
	await kony.automation.playback.wait(15000);
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
	await kony.automation.device.deviceBack();
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
});