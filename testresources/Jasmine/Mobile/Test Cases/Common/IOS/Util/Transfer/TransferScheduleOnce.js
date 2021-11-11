it("TransferScheduleOnce", async function() {
	await kony.automation.playback.waitFor(["frmMMReview","segDetails"]);
	kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	await kony.automation.playback.wait(3000);
	await kony.automation.playback.waitFor(["frmMMFrequency","segOptions"]);
	kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,0]"]);
	await kony.automation.playback.wait(5000);
	await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"]);
	kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	await kony.automation.playback.wait(2000);
	// :User Injected Code Snippet [//Select a date - [3 lines]]
	await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"]);
		kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxNextMonth"], [178,125],null,[178,125]);
		kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	// :End User Injected Code Snippet {414f83d0-e0a2-735c-c437-a564878872a6}
	await kony.automation.playback.wait(3000);
	await kony.automation.playback.waitFor(["frmMMStartDate","btnContinue"]);
	kony.automation.button.click(["frmMMStartDate","btnContinue"]);
	await kony.automation.playback.wait(4000);
	await kony.automation.playback.waitFor(["frmMMReview","btnTransfer"]);
	kony.automation.button.click(["frmMMReview","btnTransfer"]);
	await kony.automation.playback.wait(7000);
	// :User Injected Code Snippet [//Asser for success - [1 lines]]
	expect(kony.automation.widget.getWidgetProperty(["frmMMConfirmation","lblSuccessMessage"], "text")).toEqual("We successfully scheduled your transfer");
	// :End User Injected Code Snippet {ca0bdba2-106a-5d30-5a72-5e4aa2ed92df}
	kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	await kony.automation.playback.wait(8000);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
});