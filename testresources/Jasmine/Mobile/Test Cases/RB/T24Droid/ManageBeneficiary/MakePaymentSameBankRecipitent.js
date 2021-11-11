it("MakePaymentSameBankRecipitent", async function() {
  
  let accNo= ManageRecipient.sameBankAccount1.accountNumber;
  let fromAccount = Transfers.checkingAccount.accountNumber; //"8378";
  let amount = Transfers.amount;
  
	NavigateToManageRecipitents();
	VerifyBeneficiaryList();
	if(IsAccountAlreadyAdded(accNo)){
		SearchBeneficiary(accNo);
		ClickOnMakePayment();
		SelectFromAccount(fromAccount);
		EnterAmount(amount);
		EnterPaymentReference("OneTime SameBank");
		ConfirmTransfer();
		VerifyTransferSuccessMessage();
    }
	else{
		MoveBacktoDashboard_ManageRecipitent();
		VerifyAccountsDashBoard();
    }
},120000);