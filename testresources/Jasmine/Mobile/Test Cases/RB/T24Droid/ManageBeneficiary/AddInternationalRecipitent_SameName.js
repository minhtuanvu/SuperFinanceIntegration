it("AddInternationalRecipitent_SameName", async function() {
  
  let IBAN =  getRandomNumber(6);//"666666"; //to be fetched from global testData file
  let benName= ManageRecipient.internationalAccount.name; // + getRandomString(5);
  let swiftCode = ManageRecipient.internationalAccount.swiftCode;

  NavigateToManageRecipitents();
  VerifyBeneficiaryList();
  if(!IsAccountAlreadyAdded(IBAN)){
    ClickOnAddBeneficiary();
	SelectAccountWithOtherBank();
	EnterBeneficiaryName(benName);
	EnterIBAN(IBAN);
	EnterSwiftCode(swiftCode);
    ConfirmToAddBeneficiary();
	verifyAddingNewReciptientSuccessMsg();
    VerifyAccountsDashBoard();
  }else{
    MoveBacktoDashboard_ManageRecipitent();
	VerifyAccountsDashBoard();
  }
  
},120000);