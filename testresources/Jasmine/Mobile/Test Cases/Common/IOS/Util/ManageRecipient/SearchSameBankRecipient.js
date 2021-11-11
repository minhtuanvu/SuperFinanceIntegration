it("SearchSameBankRecipient", async function() {
	kony.automation.widget.touch(["frmManageRecipientList","tbxSearch"], [113,18],null,null);
	kony.automation.textbox.enterText(["frmManageRecipientList","customSearchbox","tbxSearch"],"samebank");
});