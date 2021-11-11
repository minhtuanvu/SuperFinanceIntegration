it("addRecipientSameBank", async function() {
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
	kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,4]"]);
	kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,4]"]);
	await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
	kony.automation.segmentedui.scrollToRow(["frmManageRecipientType","segRecipientType[0,0]"]);
	kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[0,0]"]);
	await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"]);
	kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);
    await kony.automation.playback.waitFor(["frmEnterBenAccNo","keypad","btnOne"]);
    
    let accNo = getRandomNumber(9);
    for(i=0; i<accNo.length; i++){
        let btnID = getBtnID(accNo.charAt(i));
        kony.automation.button.click(["frmEnterBenAccNo","keypad",btnID]);    
    }
	// kony.automation.button.click(["frmEnterBenAccNo","keypad","btnOne"]);
	// kony.automation.button.click(["frmEnterBenAccNo","keypad","btnTwo"]);
	// kony.automation.button.click(["frmEnterBenAccNo","keypad","btnThree"]);
	// kony.automation.button.click(["frmEnterBenAccNo","keypad","btnOne"]);
	// kony.automation.button.click(["frmEnterBenAccNo","keypad","btnTwo"]);
	// kony.automation.button.click(["frmEnterBenAccNo","keypad","btnThree"]);
    
    kony.automation.button.click(["frmEnterBenAccNo","btnContinue"]);
	await kony.automation.playback.waitFor(["frmReEnterBenAccNo","keypad","btnOne"]);
    
    for(i=0; i<accNo.length; i++){
        let btnID = getBtnID(accNo.charAt(i));
        kony.automation.button.click(["frmReEnterBenAccNo","keypad",btnID]);    
    }

    // kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnOne"]);
	// kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnTwo"]);
	// kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnThree"]);
	// kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnOne"]);
	// kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnTwo"]);
	// kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnThree"]);
	kony.automation.button.click(["frmReEnterBenAccNo","btnContinue"]);
    await kony.automation.playback.waitFor(["frmBenName","txtRecipientName"]);
    
    let recipientName = "samebank"+getRandomString(5);
	kony.automation.textbox.enterText(["frmBenName","txtRecipientName"],recipientName);
	kony.automation.button.click(["frmBenName","btnContinue"]);
	await kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"]);
	await kony.automation.playback.wait(1000);
	kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
	await kony.automation.playback.waitFor(["frmContracts","btnContinue"]);
	kony.automation.button.click(["frmContracts","btnContinue"]);
	await kony.automation.playback.waitFor(["frmBenVerifyDetails","btnContinue"]);
	kony.automation.button.click(["frmBenVerifyDetails","btnContinue"]);
	await kony.automation.playback.waitFor(["frmAcknowledgement","lblSuccessMessage"]);
	// :User Injected Code Snippet [// - [1 lines]]
	expect(kony.automation.widget.getWidgetProperty(["frmAcknowledgement","lblSuccessMessage"], "text")).toContain("success");
	// :End User Injected Code Snippet {6828c464-5387-da29-2af1-e55d863135c9}
	await kony.automation.playback.waitFor(["frmAcknowledgement","btnNewTransfer"]);
	kony.automation.button.click(["frmAcknowledgement","btnNewTransfer"]);
	await kony.automation.playback.waitFor(["frmMMTransferFromAccount","customHeader","btnRight"]);
	kony.automation.button.click(["frmMMTransferFromAccount","customHeader","btnRight"]);
	await kony.automation.playback.waitFor(["frmManageRecipientType","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmManageRecipientType","customHeader","flxBack"]);
});