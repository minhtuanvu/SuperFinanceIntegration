it("Verify_TransferScheduleOnce", async function() {
	// :User Injected Code Snippet [//Prerequisite Verify_Search_In_FromAndToScreen - [1 lines]]
	SearchInFromAndToScreen("normal");
	// :End User Injected Code Snippet {0d4c824b-a9ad-8c0e-5c44-a3292aac96a1}
	await kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnThree"]);
	kony.automation.button.click(["frmMMTransferAmount","keypad","btnThree"]);
	kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	kony.automation.button.click(["frmMMTransferAmount","btnContinue"]);
	await kony.automation.playback.waitFor(["frmMMReview","segDetails"]);
	kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	await kony.automation.playback.waitFor(["frmMMFrequency","segOptions"]);
	kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,0]"]);
	await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"]);
	kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	// :User Injected Code Snippet [//Select a date - [3 lines]]
	await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"]);
		kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxNextMonth"], [178,125],null,[178,125]);
		kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	// :End User Injected Code Snippet {414f83d0-e0a2-735c-c437-a564878872a6}
	await kony.automation.playback.waitFor(["frmMMStartDate","btnContinue"]);
	kony.automation.button.click(["frmMMStartDate","btnContinue"]);
	await kony.automation.playback.waitFor(["frmMMReview","btnTransfer"]);
	kony.automation.button.click(["frmMMReview","btnTransfer"]);
	await kony.automation.playback.waitFor(["frmMMConfirmation","lblSuccessMessage"]);
	kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	
},180000);