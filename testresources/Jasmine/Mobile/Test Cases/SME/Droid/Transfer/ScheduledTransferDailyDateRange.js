it("ScheduledTransferDailyDateRange", async function() {
	await kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnThree"]);
	kony.automation.button.click(["frmMMTransferAmount","keypad","btnThree"]);
	kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	await kony.automation.playback.waitFor(["frmMMTransferAmount","btnContinue"]);
	kony.automation.button.click(["frmMMTransferAmount","btnContinue"]);
	await kony.automation.playback.waitFor(["frmMMReview","segDetails"]);
	kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	await kony.automation.playback.waitFor(["frmMMFrequency","segOptions"]);
	kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,1]"]);
	await kony.automation.playback.waitFor(["frmMMDuration","segOptions"]);
	kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,0]"]);
	await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"]);
	kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	// :User Injected Code Snippet [//Select "Start" date - [1 lines]]
	kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	// :End User Injected Code Snippet {1b928f08-dcde-b4a4-8a34-66c9403263c8}
	await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"]);
	kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"]);
	kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	// :User Injected Code Snippet [//select "End" date - [3 lines]]
	//await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
	
	kony.automation.widget.touch(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	// :End User Injected Code Snippet {52f4e47a-c3c2-0551-1005-1c35e4be2ef7}
	await kony.automation.playback.waitFor(["frmMMEndDate","btnContinue"]);
	kony.automation.button.click(["frmMMEndDate","btnContinue"]);
	await kony.automation.playback.waitFor(["frmMMReview","btnTransfer"]);
	kony.automation.button.click(["frmMMReview","btnTransfer"]);
	await kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"]);
	kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	await kony.automation.playback.waitFor(["frmDashboardAggregated","customHeader","lblLocateUs"]);
});