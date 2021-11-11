it("MakePaymentSameBankRecipitent", async function() {
  
  let fromAccount = Transfers.checkingAccount.accountNumber; //"8378"; //Current
  let accNo = ManageRecipient.sameBankAccount1.accountNumber; // "108812"
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