it("DeleteInternationalRecipitent", async function() {
  
  let accNo= ManageRecipient.internationalAccount.IBAN; // "666666";

	NavigateToManageRecipitents();
	VerifyBeneficiaryList();
	if(IsAccountAlreadyAdded(accNo)){
		SearchBeneficiary(accNo);
		DeleteBeneficiary();
		VerifyAccountsDashBoard();
    }
	else{
		MoveBacktoDashboard_ManageRecipitent();
		VerifyAccountsDashBoard();
    }
},120000);