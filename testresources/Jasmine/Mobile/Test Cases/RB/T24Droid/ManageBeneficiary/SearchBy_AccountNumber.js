it("SearchBy_AccountNumber", async function() {

    let accNo= ManageRecipient.sameBankAccount1.accountNumber;
  
	NavigateToManageRecipitents();
	VerifyBeneficiaryList();
	if(!IsAccountAlreadyAdded(accNo)){
		expect("There's no beneficiary with this account").toBe("Found beneficiary");
    }
	MoveBacktoDashboard_ManageRecipitent();
	VerifyAccountsDashBoard();
});