async function goToTransfers() {
    await kony.automation.playback.waitFor(["frmUnifiedDashboard", "customFooter", "flxTransfer"]);
    kony.automation.flexcontainer.click(["frmUnifiedDashboard", "customFooter", "flxTransfer"]);
    await kony.automation.playback.wait(2000);
    await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "tbxSearch"]);
}

async function searchInFromAndToScreen(fromAccount, toAccount) { //params are case sensitive
    await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "tbxSearch"]);
    kony.automation.widget.touch(["frmMMTransferFromAccount", "tbxSearch"], [110, 23], null, null);
    await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "customSearchbox", "tbxSearch"]);
    await kony.automation.playback.wait(2000);
    kony.automation.textbox.enterText(["frmMMTransferFromAccount", "customSearchbox", "tbxSearch"], fromAccount);
    await kony.automation.playback.wait(2000);
    await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "segTransactions"]);
    kony.automation.segmentedui.scrollToRow(["frmMMTransferFromAccount", "segTransactions[0,0]"]);
    // :User Injected Code Snippet [// - [2 lines]]
//     var fromAccountName = kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount", "segTransactions[0,0]", "lblAccountName"], "text");
//     expect(fromAccountName).toContain(fromAccount);
    // :End User Injected Code Snippet {8ee899e9-e37c-2be5-f725-bbcdb1020dc4}
    kony.automation.segmentedui.click(["frmMMTransferFromAccount", "segTransactions[0,0]"]);
    await kony.automation.playback.waitFor(["frmMMTransferToAccount", "tbxSearch"]);
    kony.automation.widget.touch(["frmMMTransferToAccount", "tbxSearch"], [146, 13], null, null);
    await kony.automation.playback.waitFor(["frmMMTransferToAccount", "customSearchbox", "tbxSearch"]);
    await kony.automation.playback.wait(2000);
    kony.automation.textbox.enterText(["frmMMTransferToAccount", "customSearchbox", "tbxSearch"], toAccount);
    await kony.automation.playback.waitFor(["frmMMTransferToAccount", "segTransactions"]);
    kony.automation.segmentedui.scrollToRow(["frmMMTransferToAccount", "segTransactions[0,0]"]);
    await kony.automation.playback.wait(2000);
    // :User Injected Code Snippet [// - [2 lines]]
//     var accountName = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount", "segTransactions[0,0]", "lblAccountName"], "text");
//     expect(accountName).not.toBe(null);
    // :End User Injected Code Snippet {195a3ae8-db55-4acb-396f-09b3a08ff861}
    kony.automation.segmentedui.click(["frmMMTransferToAccount", "segTransactions[0,0]"]);
    await kony.automation.playback.waitFor(["frmMMTransferAmount", "keypad", "btnThree"]);
}

async function selectFromAccount(fromAccount){
	await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "tbxSearch"]);
    kony.automation.widget.touch(["frmMMTransferFromAccount", "tbxSearch"], [110, 23], null, null);
    await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "customSearchbox", "tbxSearch"]);
    await kony.automation.playback.wait(2000);
    kony.automation.textbox.enterText(["frmMMTransferFromAccount", "customSearchbox", "tbxSearch"], fromAccount);
    await kony.automation.playback.wait(2000);
    await kony.automation.playback.waitFor(["frmMMTransferFromAccount", "segTransactions"]);
    kony.automation.segmentedui.scrollToRow(["frmMMTransferFromAccount", "segTransactions[0,0]"]);
    // :User Injected Code Snippet [// - [2 lines]]
//     var fromAccountName = kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount", "segTransactions[0,0]", "lblAccountName"], "text");
//     expect(fromAccountName).toContain(fromAccount);
    // :End User Injected Code Snippet {8ee899e9-e37c-2be5-f725-bbcdb1020dc4}
    kony.automation.segmentedui.click(["frmMMTransferFromAccount", "segTransactions[0,0]"]);
}

async function selectToAccount(toAccount){
	await kony.automation.playback.waitFor(["frmMMTransferToAccount", "tbxSearch"]);
    kony.automation.widget.touch(["frmMMTransferToAccount", "tbxSearch"], [146, 13], null, null);
    await kony.automation.playback.waitFor(["frmMMTransferToAccount", "customSearchbox", "tbxSearch"]);
    await kony.automation.playback.wait(2000);
    kony.automation.textbox.enterText(["frmMMTransferToAccount", "customSearchbox", "tbxSearch"], toAccount);
    await kony.automation.playback.waitFor(["frmMMTransferToAccount", "segTransactions"]);
    kony.automation.segmentedui.scrollToRow(["frmMMTransferToAccount", "segTransactions[0,0]"]);
    await kony.automation.playback.wait(2000);
    // :User Injected Code Snippet [// - [2 lines]]
//     var accountName = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount", "segTransactions[0,0]", "lblAccountName"], "text");
//     expect(accountName).not.toBe(null);
    // :End User Injected Code Snippet {195a3ae8-db55-4acb-396f-09b3a08ff861}
    kony.automation.segmentedui.click(["frmMMTransferToAccount", "segTransactions[0,0]"]);
}

async function enterAmount() {
    await kony.automation.playback.waitFor(["frmMMTransferAmount", "keypad", "btnThree"]);
    kony.automation.button.click(["frmMMTransferAmount", "keypad", "btnThree"]);
    kony.automation.button.click(["frmMMTransferAmount", "keypad", "btnZero"]);
    kony.automation.button.click(["frmMMTransferAmount", "keypad", "btnZero"]);
    kony.automation.button.click(["frmMMTransferAmount", "btnContinue"]);
    await kony.automation.playback.waitFor(["frmMMReview", "flxConfirmationDetails", "segDetails"]);
}

async function oneTimeTransfer() {

    await kony.automation.playback.waitFor(["frmMMReview", "btnTransfer"]);
    kony.automation.button.click(["frmMMReview", "btnTransfer"]);
    await kony.automation.playback.waitFor(["frmMMConfirmation", "lblSuccessMessage"]);
    // :User Injected Code Snippet [//Assert success message - [1 lines]]
// 	var lblMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblMessage"], "text");
	var lblSuccessMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text");
		            
// 	expect(lblMessage.toLowerCase()).toContain("success");
	expect(lblSuccessMessage.toLowerCase()).toContain("success");
    //expect(kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text")).toContain("uccess");
    // :End User Injected Code Snippet {d03b935e-9e64-4c3e-db7c-f2e1959569b7}
    await kony.automation.playback.waitFor(["frmMMConfirmation", "btnDashboard"]);
    kony.automation.button.click(["frmMMConfirmation", "btnDashboard"]);
    await kony.automation.playback.waitFor(["frmUnifiedDashboard", "flxDashboard", "segAccounts"]);
}

async function transferScheduledOnce() {
    await kony.automation.playback.waitFor(["frmMMReview", "segDetails"]);
    kony.automation.segmentedui.click(["frmMMReview", "segDetails[0,0]"]);
    await kony.automation.playback.wait(3000);
    await kony.automation.playback.waitFor(["frmMMFrequency", "segOptions"]);
    kony.automation.segmentedui.click(["frmMMFrequency", "segOptions[0,0]"]);
    await kony.automation.playback.wait(5000);
    await kony.automation.playback.waitFor(["frmMMStartDate", "customCalendar", "flxNextMonth"]);
    kony.automation.flexcontainer.click(["frmMMStartDate", "customCalendar", "flxNextMonth"]);
    await kony.automation.playback.wait(2000);
    // :User Injected Code Snippet [//Select a date - [3 lines]]
    await kony.automation.playback.waitFor(["frmMMStartDate", "customCalendar", "flxNextMonth"]);
    kony.automation.widget.touch(["frmMMStartDate", "customCalendar", "flxNextMonth"], [178, 125], null, [178, 125]);
    kony.automation.widget.touch(["frmMMStartDate", "customCalendar", "flxMonth", "m3CopyLabel0ac5bc532de9c4c"], null, null, [17, 17]);
    // :End User Injected Code Snippet {414f83d0-e0a2-735c-c437-a564878872a6}
    await kony.automation.playback.wait(3000);
    await kony.automation.playback.waitFor(["frmMMStartDate", "btnContinue"]);
    kony.automation.button.click(["frmMMStartDate", "btnContinue"]);
    await kony.automation.playback.wait(4000);
    await kony.automation.playback.waitFor(["frmMMReview", "btnTransfer"]);
    kony.automation.button.click(["frmMMReview", "btnTransfer"]);
    await kony.automation.playback.wait(7000);
  
  await kony.automation.playback.waitFor(["frmMMConfirmation", "lblSuccessMessage"]);
    // :User Injected Code Snippet [//Asser for success - [1 lines]]
// 	var lblMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblMessage"], "text");
	var lblSuccessMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text");
  
// 	expect(lblMessage.toLowerCase()).toContain("success");
	expect(lblSuccessMessage.toLowerCase()).toContain("success");
    //expect(kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text")).toEqual("We successfully scheduled your transfer");
    // :End User Injected Code Snippet {ca0bdba2-106a-5d30-5a72-5e4aa2ed92df}
	await kony.automation.playback.waitFor(["frmMMConfirmation", "btnDashboard"]);
    kony.automation.button.click(["frmMMConfirmation", "btnDashboard"]);
    await kony.automation.playback.wait(8000);
    await kony.automation.playback.waitFor(["frmUnifiedDashboard", "flxDashboard", "segAccounts"]);
}

async function ScheduledTransferDailyDateRange() {
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmMMReview","segDetails"]);
	kony.automation.segmentedui.scrollToRow(["frmMMReview","segDetails[0,0]"]);
	kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	await kony.automation.playback.waitFor(["frmMMFrequency","segOptions"]);
	kony.automation.segmentedui.scrollToRow(["frmMMFrequency","segOptions[0,1]"]);
	kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,1]"]);
	await kony.automation.playback.waitFor(["frmMMDuration","segOptions"]);
	kony.automation.segmentedui.scrollToRow(["frmMMDuration","segOptions[0,0]"]);
	kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,0]"]);
  /*
   kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
  kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
  // :User Injected Code Snippet [//Select "Start" date - [1 lines]]
  kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
  // :End User Injected Code Snippet {1b928f08-dcde-b4a4-8a34-66c9403263c8}
  kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
  kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
  kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
  kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
  // :User Injected Code Snippet [//select "End" date - [3 lines]]
  // kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);

  kony.automation.widget.touch(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
  // :End User Injected Code Snippet {52f4e47a-c3c2-0551-1005-1c35e4be2ef7}
  */
  
  	// :User Injected Code Snippet [// - [6 lines]]
	await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"]);
		kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
		kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[12,16]);
	
	// :End User Injected Code Snippet {984fd65f-f6ee-e93d-49a5-284e394be9f6}
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"]);
	kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"]);
	kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m1CopyLabel0jabb5d0fd60346"]);
	kony.automation.widget.touch(["frmMMEndDate","customCalendar","flxMonth","m1CopyLabel0jabb5d0fd60346"], null,null,[15,11]);
 
  kony.automation.playback.waitFor(["frmMMEndDate","btnContinue"],15000);
  kony.automation.button.click(["frmMMEndDate","btnContinue"]);
  kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],15000);
  kony.automation.button.click(["frmMMReview","btnTransfer"]);
	
  await kony.automation.playback.waitFor(["frmMMConfirmation", "lblSuccessMessage"]);
	//let lblMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblMessage"], "text");
	let lblSuccessMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text");
  
	//expect(lblMessage.toLowerCase()).toContain("success");
	expect(lblSuccessMessage.toLowerCase()).toContain("success");
  
  kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"],15000);
  kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
  kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","lblLocateUs"],10000);
  
 }

async function selectDurationDateRange(){
	await kony.automation.playback.waitFor(["frmMMDuration","segOptions"]);
	kony.automation.segmentedui.scrollToRow(["frmMMDuration","segOptions[0,0]"]);
	kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,0]"]);
  	
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"]);
	kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
	kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[12,16]);
	
	// :End User Injected Code Snippet {984fd65f-f6ee-e93d-49a5-284e394be9f6}
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"]);
	kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"]);
	kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m1CopyLabel0jabb5d0fd60346"]);
	kony.automation.widget.touch(["frmMMEndDate","customCalendar","flxMonth","m1CopyLabel0jabb5d0fd60346"], null,null,[15,11]);
 
	kony.automation.playback.waitFor(["frmMMEndDate","btnContinue"],15000);
	kony.automation.button.click(["frmMMEndDate","btnContinue"]);
}

async function selectDurationNumberOfTransfers(){
	await kony.automation.playback.wait(500);
	await kony.automation.playback.waitFor(["frmMMDuration","segOptions"]);
	kony.automation.segmentedui.scrollToRow(["frmMMDuration","segOptions[0,1]"]);
	kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,1]"]);
}

async function selectStartDate(){
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"]);
	kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
	kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[12,16]);
	await kony.automation.playback.wait(2000);

}

async function enterNumberOfTransfer(){	
	await kony.automation.playback.waitFor(["frmMMNumberOfTransfers","keypad","btnFive"]);
	kony.automation.button.click(["frmMMNumberOfTransfers","keypad","btnFive"]);
	kony.automation.button.click(["frmMMNumberOfTransfers","btnContinue"]);
}

async function confirmTransfer(){
	await kony.automation.playback.waitFor(["frmMMReview","btnTransfer"]);
	kony.automation.button.click(["frmMMReview","btnTransfer"]);
	await kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"]);
	kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard", "flxDashboard", "segAccounts"]);
}

async function selectFrequency(frequency){
  await kony.automation.playback.waitFor(["frmMMReview", "segDetails"]);
    kony.automation.segmentedui.click(["frmMMReview", "segDetails[0,0]"]);
    await kony.automation.playback.wait(3000);
    await kony.automation.playback.waitFor(["frmMMFrequency", "segOptions"]);

    switch(frequency){
    	case "Once":
            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,0]"]);
            break;
    	case "Daily":
            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,1]"]);
            break;
          case "Weekly":
            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,2]"]);
            break;
          case "HalfY":
            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,6]"]);
            break;
          case "Yearly":
            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,7]"]);
            break;
          case "QTR":
            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,5]"]);
            break;
          case "Monthly":
            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,4]"]);
            break;
    }
    
    await kony.automation.playback.wait(5000);
}

async function confirmTransfer(){
	await kony.automation.playback.waitFor(["frmMMReview","btnTransfer"]);
	kony.automation.button.click(["frmMMReview","btnTransfer"]);
  
	await kony.automation.playback.waitFor(["frmMMConfirmation", "lblSuccessMessage"]);
	//let lblMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblMessage"], "text");
	let lblSuccessMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text");
  
	//expect(lblMessage.toLowerCase()).toContain("success");
	expect(lblSuccessMessage.toLowerCase()).toContain("success");
  
	await kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"]);
	kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard", "flxDashboard", "segAccounts"]);
}