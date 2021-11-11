it("VerifyOrderOfAccounts", async function() {
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","segAccounts"]);
	kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","segAccounts[0,3]"]);
	kony.automation.flexcontainer.click(["frmUnifiedDashboard","segAccounts[0,3]","flxViewContainer"]);
	await kony.automation.playback.wait(1000);
	// :User Injected Code Snippet [// - [30 lines]]
	let segDetails = kony.automation.widget.getWidgetProperty(["frmUnifiedDashboard","segAccounts"],"data");
			let i=0;
			
			for(i=0; i<5; i++){
			verifyOrderOfAccounts(i);
			}
			
			function verifyOrderOfAccounts(i){
			switch(i){
			case 0:
			expect(segDetails[0][1][i].accountType).toEqual("Savings");
			break;
			
			case 1:
			expect(segDetails[0][1][i].accountType).toEqual("Checking");
			break;
			
			case 2:
			expect(segDetails[0][1][i].accountType).toEqual("Credit Card");
			break;
			
			case 3:
			expect(segDetails[0][1][i].accountType).toEqual("Loan");
			break;
			
			case 4:
			expect(segDetails[0][1][i].accountType).toEqual("Deposit");
			break;
			}
		}
	// :End User Injected Code Snippet {8b5a4c12-53ad-4dbc-53fb-44b321a072a9}
});