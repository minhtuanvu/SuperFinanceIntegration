it("ManageBillPayShowAllPayee", async function() {
	await kony.automation.playback.waitFor(["frmBillPay","flxManage"]);
	kony.automation.flexcontainer.click(["frmBillPay","flxManage"]);
	await kony.automation.playback.wait(2000);
	// :User Injected Code Snippet [//All payee should be displayed - [8 lines]]
	var isSegAccounts = await kony.automation.playback.waitFor(["frmBillPayAllPayees","flxMainContainer","segAccounts"]);
	if(isSegAccounts){
	var segSize = kony.automation.widget.getWidgetProperty(["frmBillPayAllPayees","flxMainContainer","segAccounts"],"data");	
	expect(true).toBe(segSize.length > 0);
	}
	else{
	expect(isSegAccounts).toBe(true);
	}
	// :End User Injected Code Snippet {2cef7f31-3ef3-b7a0-f1b2-ef596de51464}
	await kony.automation.device.deviceBack();
	await kony.automation.playback.wait(3000);
	await kony.automation.playback.waitFor(["frmBillPay","imgManage"]);
});