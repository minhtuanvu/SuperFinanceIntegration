it("AddSameBankRecipitent", async function() {
  
  let accNo= ManageRecipient.sameBankAccount1.accountNumber;
  let benName= ManageRecipient.sameBankAccount1.name;

  NavigateToManageRecipitents();
  VerifyBeneficiaryList();
  if(!IsAccountAlreadyAdded(accNo)){
    ClickOnAddBeneficiary();
	SelectAccountWithUs();
	EnterBeneficiaryName(benName);
	EnterAccountNumber(accNo);
	ConfirmToAddBeneficiary();
	verifyAddingNewReciptientSuccessMsg();
    VerifyAccountsDashBoard();
  }else{
    MoveBacktoDashboard_ManageRecipitent();
	VerifyAccountsDashBoard();
  }
  
},120000);