it("ListOfRecipientsForSameAccount", async function() {
	await kony.automation.playback.waitFor(["frmDashboardAggregated","Hamburger","segHamburger"]);
	kony.automation.segmentedui.click(["frmDashboardAggregated","Hamburger","segHamburger[0,3]"]);
	await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
	kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[0,0]"]);
	await kony.automation.playback.wait(3000);
	await kony.automation.playback.waitFor(["frmManageRecipientList","flxMainContainer","segRecipients"]);
	// :User Injected Code Snippet [// - [3 lines]]
	var segSize = kony.automation.widget.getWidgetProperty(["frmManageRecipientList","flxMainContainer","segRecipients"],"data");
	
	expect(true).toBe(  segSize.length >=1);
	// :End User Injected Code Snippet {b36868d0-465d-3125-0fdd-6359df041f5d}
});