it("VerifyBankName_AddInternationalRecipitent", async function() {
  
   // Add a recipitent and Then delete the same recipitent

  let IBAN= ManageRecipient.internationalAccount.IBAN;  //"GB04BARC20474473160944"; 
  let benName= ManageRecipient.internationalAccount.name + getRandomString(5);
  let swiftCode = ManageRecipient.internationalAccount.swiftCode;
  
  NavigateToManageRecipitents();
  VerifyBeneficiaryList();
  if(!IsAccountAlreadyAdded(IBAN)){
    ClickOnAddBeneficiary();
	SelectAccountWithOtherBank();
	EnterBeneficiaryName(benName);
	EnterIBAN(IBAN);
	EnterSwiftCode(swiftCode);
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