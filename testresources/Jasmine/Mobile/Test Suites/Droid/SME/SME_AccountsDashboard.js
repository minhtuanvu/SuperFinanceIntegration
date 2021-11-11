describe("SME_AccountsDashboard", function() {
	it("changeFilter", async function() {
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxShowAllAccountTypes"]);
		kony.automation.flexcontainer.click(["frmUnifiedDashboard","flxShowAllAccountTypes"]);
		await kony.automation.playback.waitFor(["frmFilterAccounts","segSortBy"]);
		kony.automation.segmentedui.scrollToRow(["frmFilterAccounts","segSortBy[0,0]"]);
		kony.automation.segmentedui.click(["frmFilterAccounts","segSortBy[0,0]"]);
		await kony.automation.playback.waitFor(["frmFilterAccounts","btnApplyFilter"]);
		kony.automation.button.click(["frmFilterAccounts","btnApplyFilter"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxSelectedAccounts"]);
	},30000);
});