it("AddDomesticRecipient_OneTimePayment", async function() {
  
  let IBAN= ManageRecipient.domesticAccount.IBAN;  //"GB04BARC20474473160944"; 
  let benName= ManageRecipient.domesticAccount.name + getRandomString(5);
  let fromAccount = Transfers.checkingAccount.accountNumber; //"8378";
  let amount = Transfers.amount;
  
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
  
  NavigateToPayements();
  SelectFromAccount(fromAccount);
  ClickOnTransferToNewRecipient();
  
  SelectAccountWithOtherBank();
  EnterBeneficiaryName(benName);
  EnterIBAN(IBAN);
   
  ConfirmToAddBeneficiary();
  EnterAmount(amount);
  EnterPaymentReference("OneTime new Recipient Domestic");
  SelectInstantDomesticPayment();
//  SelectSendOnDate();
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
},120000);