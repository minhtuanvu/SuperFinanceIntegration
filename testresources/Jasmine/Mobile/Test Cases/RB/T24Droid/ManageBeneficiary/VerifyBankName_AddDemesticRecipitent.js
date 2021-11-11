it("VerifyBankName_AddDemesticRecipitent", async function() {
  
  let IBAN= ManageRecipient.domesticAccount.IBAN;  //"GB04BARC20474473160944"; 
  let benName= ManageRecipient.domesticAccount.name + getRandomString(5);
  
  NavigateToManageRecipitents();
  VerifyBeneficiaryList();
  if(!IsAccountAlreadyAdded(IBAN)){
    ClickOnAddBeneficiary();
	SelectAccountWithOtherBank();
	EnterBeneficiaryName(benName);
	EnterIBAN(IBAN);
    VerifyBankNameInReviewPage();
    ConfirmToAddBeneficiary();
    VerifBankNameInAckPage();
	verifyAddingNewReciptientSuccessMsg();
    VerifyAccountsDashBoard();
  }else{
    MoveBacktoDashboard_ManageRecipitent();
	VerifyAccountsDashBoard();
  }
  
},120000);