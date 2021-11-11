it("ModifyInternationalRecipitent", async function() {
  
	let IBAN= ManageRecipient.internationalAccount.IBAN;  //"GB04BARC20474473160944"; 
	let benName= ManageRecipient.internationalAccount.name + getRandomString(5);
	let swiftCode = ManageRecipient.internationalAccount.swiftCode;
  
	NavigateToManageRecipitents();
	VerifyBeneficiaryList();
	ClickOnAddBeneficiary();
	SelectAccountWithOtherBank();
	EnterBeneficiaryName(benName);
	EnterIBAN(IBAN);
	EnterSwiftCode(swiftCode);
    EnterUpdateAddressDetails();
    CancelAddBeneficiary();
    MoveBacktoDashboard_ManageRecipitent();
    VerifyAccountsDashBoard();
  
},120000);