it("MakePaymentInternationalRecipitent", async function() {
  
  let accNo= ManageRecipient.internationalAccount.IBAN;  //"GB04BARC20474473160944"; 
  let fromAccount = Transfers.checkingAccount.accountNumber; //"8378";
  let amount = Transfers.amount;
  
	NavigateToManageRecipitents();
	VerifyBeneficiaryList();
	if(IsAccountAlreadyAdded(accNo)){
		SearchBeneficiary(accNo);
		ClickOnMakePayment();
		SelectFromAccount(fromAccount);
		EnterAmount(amount);
		EnterPaymentReference("OneTime International");
		SelectIWillPayFees();
		ConfirmTransfer();
		VerifyTransferSuccessMessage();
    }
	else{
		MoveBacktoDashboard_ManageRecipitent();
		VerifyAccountsDashBoard();
    }
},120000);