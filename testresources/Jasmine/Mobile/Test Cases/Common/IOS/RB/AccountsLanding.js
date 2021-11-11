async function verifyAccountLanding(account){
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","segAccounts"]);
	await kony.automation.playback.wait(3000);
	// :User Injected Code Snippet [// - [2 lines]]
		//expect(kony.automation.widget.getWidgetProperty(["frmUnifiedDashboard","segAccounts[1,0]","lblAccountName"], "text")).toContain("Savings");	
	// :End User Injected Code Snippet {d678cb91-1471-1413-3757-81ff050d6960}
	let indices = await getIndex(account);
	kony.automation.segmentedui.click(["frmUnifiedDashboard","segAccounts[" + indices.i + "," + indices.j +"]"]);
	await kony.automation.playback.wait(3000);
  
	// :User Injected Code Snippet [// - [2 lines]]
	await kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","lblField1"]);
    await kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","lblField2"]);
}


async function verifyAccountInfo(){
  expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","accountSummaryNative","lblField1"], "text")).not.toBe(null);
	expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","accountSummaryNative","lblField2"], "text")).not.toBe(null);
	// :End User Injected Code Snippet {099e4d91-7590-fe3a-35e9-6b62fd3cd475}
	await kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","lblField2"]);
}

async function goToDashboardFromAccounts() {
	await kony.automation.playback.waitFor(["frmAccountDetails","customFooter","lblAccounts"]);
	kony.automation.flexcontainer.click(["frmAccountDetails","customFooter","flxAccounts"]);
	await kony.automation.playback.wait(3000);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
}

async function verifyTransactionDetails(){
	await kony.automation.playback.waitFor(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"]);
	kony.automation.segmentedui.scrollToRow(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[0,0]"]);
	kony.automation.segmentedui.click(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[0,0]"]);
	await kony.automation.playback.waitFor(["frmMMTransactionDetails","accountsTransactionDetailsNative","lblDetailsValue3"]);
	// :User Injected Code Snippet [// - [3 lines]]
	expect(kony.automation.widget.getWidgetProperty(["frmMMTransactionDetails","accountsTransactionDetailsNative","lblDetailsValue3"], "text")).not.toBe(null);
	
	expect(kony.automation.widget.getWidgetProperty(["frmMMTransactionDetails","accountsTransactionDetailsNative","lblDetailsValue4"], "text")).not.toBe(null);
	// :End User Injected Code Snippet {eb55123f-c04f-627b-122f-624614f982bc}
	await kony.automation.device.deviceBack();
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmAccountDetails","flxAccountTransactions","accountsTransactionListNative","segTransactionsList"]);
}

async function initiateTransfer(){
	await kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","flxLink2"]);
	let widgetID = getFlexID("Transfer money");
	kony.automation.flexcontainer.click(["frmAccountDetails","quicklinksNative",widgetID]);
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"]);	
}

async function verifyOptionsOfSavingsAccount(){
	await kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink4"]);
	expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink4"], "text")).not.toBe(null);
	expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink3"], "text")).not.toBe(null);
}

async function verifyOptionsOfCheckingAccount(){
	await kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink4"]);
	expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink4"], "text")).not.toBe(null);
	expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink3"], "text")).not.toBe(null);
}

async function verifyOptionsOfCreditCardAccount(){
	await kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink4"]);
	expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink4"], "text")).not.toBe(null);
	expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink1"], "text")).not.toBe(null);
}

async function verifyOptionsOfLoanAccount(){
	await kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink4"]);
	expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink4"], "text")).not.toBe(null);
	expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink1"], "text")).not.toBe(null);
}

async function verifyOptionsOfDepositAccount(){
	await kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink1"]);
	expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink1"], "text")).not.toBe(null);
	expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink2"], "text")).not.toBe(null);
}

async function advanceSearchAccountsDetail(){
	await kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"]);
	kony.automation.widget.touch(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"], [26,21],null,null);
	await kony.automation.playback.waitFor(["frmAdvanceSearch","segType"]);
	await kony.automation.scrollToWidget(["frmAdvanceSearch","segType"]);
	kony.automation.segmentedui.click(["frmAdvanceSearch","segType[0,0]"]);
	await kony.automation.playback.waitFor(["frmAdvanceSearch","flxAddRangeAmount"]);
	kony.automation.flexcontainer.click(["frmAdvanceSearch","flxAddRangeAmount"]);
	kony.automation.textbox.enterText(["frmAdvanceSearch","txtAmountFrom"],"1");
	kony.automation.textbox.enterText(["frmAdvanceSearch","txtAmountTo"],"99999");
	await kony.automation.playback.waitFor(["frmAdvanceSearch","btnSearch"]);
	kony.automation.button.click(["frmAdvanceSearch","btnSearch"]);
	await kony.automation.playback.wait(2000);
	await kony.automation.playback.waitFor(["frmAdvanceSearchResults","accountsTransactionListNative","segTransactionsList"]);
	await kony.automation.device.deviceBack();
	await kony.automation.device.deviceBack();
}
async function verifyScrollAccountTransactions(){
	await kony.automation.playback.waitFor(["frmAccountDetails","flxAccountTransactions","accountsTransactionListNative","segTransactionsList"]);
	
	let segData = kony.automation.widget.getWidgetProperty(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"], "data");
	
	let a = segData.length-1;
	let b = segData[a][1].length-1;
	
	kony.automation.segmentedui.scrollToRow(["frmAccountDetails","accountsTransactionListNative","segTransactionsList["+a +"," +b+ "]" ]);
	await kony.automation.playback.wait(1000);
}

function getFlexID(text){

	let labelID = "";

	for(let i=1; i<=3; i++){
		labelID = kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","flxLink"+i, "lblLink"+i], "text");
		if(labelID === text) return "flxLink"+i;
	}

	return "flxLink1"; //mostly is it flxLink1
}

async function repeatTransaction(){
	await kony.automation.playback.waitFor(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"],5000);
  await kony.automation.playback.wait(5000);
	let scheduledPay = kony.automation.widget.getWidgetProperty(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[1,-1]","lblHeaderName"],"text");

	if(scheduledPay){
		kony.automation.segmentedui.click(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[1,0]"]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmMMTransactionDetails","btnRepeatTransactionTrans"]);
		kony.automation.button.click(["frmMMTransactionDetails","btnRepeatTransactionTrans"]);
		await kony.automation.playback.wait(5000);	
		await kony.automation.playback.waitFor(["frmMMReview","btnTransfer"]);
		kony.automation.button.click(["frmMMReview","btnTransfer"]);
		await kony.automation.playback.waitFor(["frmMMConfirmation","flxNoTransfer"]);
		kony.automation.button.click(["frmMMConfirmation","btnToAccount"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxOne"]);
	}else{
      await kony.automation.device.deviceBack();
    }
}

async function getIndex(account){
		let segData = kony.automation.widget.getWidgetProperty(["frmUnifiedDashboard","segAccounts"], "data");
		let i=0;
		let j=0;
	
		for(var a = 0; a<segData.length; a++){
			for(var b=0; b<segData[a][1].length; b++){
				if(segData[a][1][b].accountName === undefined){
					kony.automation.flexcontainer.click(["frmUnifiedDashboard","segAccounts[" + a + "," + b +"]","flxViewContainer"]);
					await kony.automation.playback.wait(2000);
					return await getIndex(account);									
				}else{
					if(segData[a][1][b].accountName.includes(account)){
						i=a;
						j=b;
						break;
					}								
				}
			}
		}
	return {
      i,
      j
    };
}
