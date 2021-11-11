it("SearchBy_BeneficiaryName", async function() {

  let benName  = ManageRecipient.sameBankAccount1.name;

	NavigateToManageRecipitents();
	VerifyBeneficiaryList();
	if(!IsAccountAlreadyAdded(benName)){
		expect("There's no beneficiary with this account").toBe("Found beneficiary");
    }
	MoveBacktoDashboard_ManageRecipitent();
	VerifyAccountsDashBoard();
});