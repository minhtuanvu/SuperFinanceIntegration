it("DeleteDomesticRecipitent", async function() {
  
	let IBAN= ManageRecipient.domesticAccount.IBAN; //"NL03ABNA1979747032"; 

	NavigateToManageRecipitents();
	VerifyBeneficiaryList();
	if(IsAccountAlreadyAdded(IBAN)){
		SearchBeneficiary(IBAN);
		DeleteBeneficiary();
		VerifyAccountsDashBoard();
    }else{
		MoveBacktoDashboard_ManageRecipitent();
		VerifyAccountsDashBoard();
    }
},120000);