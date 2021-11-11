it("OneTimePayment_NewRecipient_SameBank_CurrDate", async function() {
  
  let accNo= ManageRecipient.sameBankAccount1.accountNumber;
  let benName= ManageRecipient.sameBankAccount1.name;
  let fromAccount = Transfers.checkingAccount.accountNumber; //"8378"; //Current
  let amount = Transfers.amount;

  NavigateToManageRecipitents();
  VerifyBeneficiaryList();
  if(IsAccountAlreadyAdded(accNo)){
	SearchBeneficiary(accNo);
	DeleteBeneficiary();
	VerifyAccountsDashBoard();
  }else{
    MoveBacktoDashboard_ManageRecipitent();
	VerifyAccountsDashBoard();
  }
  
  NavigateToPayements();
  SelectFromAccount(fromAccount);
  ClickOnTransferToNewRecipient();

  SelectAccountWithUs();
  EnterBeneficiaryName(benName);
  EnterAccountNumber(accNo);
  ConfirmToAddBeneficiary();
  EnterAmount(amount);
  EnterPaymentReference("OneTime new Recipient SameBank");
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
},120000);