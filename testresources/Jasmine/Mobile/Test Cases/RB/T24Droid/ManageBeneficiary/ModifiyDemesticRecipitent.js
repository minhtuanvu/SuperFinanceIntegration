it("ModifiyDemesticRecipitent", async function() {
  
	let IBAN= ManageRecipient.domesticAccount.IBAN;  //"GB04BARC20474473160944"; 
	let benName= ManageRecipient.domesticAccount.name + getRandomString(5);
  
	NavigateToManageRecipitents();
	VerifyBeneficiaryList();
    ClickOnAddBeneficiary();
	SelectAccountWithOtherBank();
	EnterBeneficiaryName(benName);
	EnterIBAN(IBAN);
	EnterUpdateAddressDetails();
    CancelAddBeneficiary();
	MoveBacktoDashboard_ManageRecipitent();
	VerifyAccountsDashBoard();
},120000);