it("EditDomesticRecipitent", async function() {
  
  let IBAN= ManageRecipient.domesticAccount.IBAN; //"NL03ABNA1979747032"; 

	NavigateToManageRecipitents();
	VerifyBeneficiaryList();
	if(IsAccountAlreadyAdded(IBAN)){
		SearchBeneficiary(IBAN);
		EditAddress();
    }
  
	MoveBacktoDashboard_ManageRecipitent();
	VerifyAccountsDashBoard();
},120000);