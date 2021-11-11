it("EditInternationalRecipitent", async function() {
  
  let accNo= ManageRecipient.internationalAccount.IBAN; // "666666";

	NavigateToManageRecipitents();
	VerifyBeneficiaryList();
	if(IsAccountAlreadyAdded(accNo)){
		SearchBeneficiary(accNo);
		EditAddress();
    }
  
	MoveBacktoDashboard_ManageRecipitent();
	VerifyAccountsDashBoard();
},120000);