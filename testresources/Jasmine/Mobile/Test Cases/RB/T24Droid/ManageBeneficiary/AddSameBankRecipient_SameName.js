it("AddSameBankRecipient_SameName", async function() {
  
  let accNo= ManageRecipient.sameBankAccount2.accountNumber;
  let benName= ManageRecipient.sameBankAccount2.name;

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