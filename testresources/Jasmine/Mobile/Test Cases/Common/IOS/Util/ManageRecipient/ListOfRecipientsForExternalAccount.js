it("ListOfRecipientsForExternalAccount", async function() {
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
	kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,3]"]);
	await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
	kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[0,1]"]);
	await kony.automation.playback.wait(3000);
	await kony.automation.playback.waitFor(["frmManageRecipientList","flxMainContainer","segRecipients"]);
	// :User Injected Code Snippet [// - [3 lines]]
	var segSize = kony.automation.widget.getWidgetProperty(["frmManageRecipientList","flxMainContainer","segRecipients"],"data");
		
	expect(true).toBe(  segSize.length >=1);
	// :End User Injected Code Snippet {a1a41701-055e-36da-3054-aa7de4bbe26b}
});