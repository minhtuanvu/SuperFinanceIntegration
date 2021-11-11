it("ListOfRecipientsP2P", async function() {
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
	await kony.automation.playback.wait(1000);
	kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,3]"]);
	await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
	await kony.automation.playback.wait(1000);
	kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[1,0]"]);
	await kony.automation.playback.waitFor(["frmManageRecipientList","flxMainContainer","segRecipients"]);
	kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,6]"]);
	// :User Injected Code Snippet [// - [3 lines]]
	var segSize = kony.automation.widget.getWidgetProperty(["frmManageRecipientList","flxMainContainer","segRecipients"],"data");
		
		expect(true).toBe(  segSize.length >=1);
	// :End User Injected Code Snippet {01397e9f-01f6-8f91-094d-803d52e8c03e}
});