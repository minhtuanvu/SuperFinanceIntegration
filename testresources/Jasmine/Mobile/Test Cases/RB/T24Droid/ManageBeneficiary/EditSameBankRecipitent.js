it("EditSameBankRecipitent", async function() {
  
  let accNo= ManageRecipient.sameBankAccount1.accountNumber; //"108812";

	NavigateToManageRecipitents();
	VerifyBeneficiaryList();
	if(IsAccountAlreadyAdded(accNo)){
		SearchBeneficiary(accNo);
		EditAddress();
    }
  
	MoveBacktoDashboard_ManageRecipitent();
	VerifyAccountsDashBoard();
},120000);