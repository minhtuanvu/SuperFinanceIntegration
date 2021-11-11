it("MakePaymentDomesticRecipitent", async function() {
  
  let IBAN= ManageRecipient.domesticAccount.IBAN;  //"GB04BARC20474473160944"; 
  let fromAccount = Transfers.checkingAccount.accountNumber; //"8378";
  let amount = Transfers.amount;

	NavigateToManageRecipitents();
	VerifyBeneficiaryList();
	if(IsAccountAlreadyAdded(IBAN)){
		SearchBeneficiary(IBAN);
		ClickOnMakePayment();
		SelectFromAccount(fromAccount);
		EnterAmount(amount);
		EnterPaymentReference("OneTime Domestic");
		SelectInstantDomesticPayment();
		ConfirmTransfer();
		VerifyTransferSuccessMessage();
    }
	else{
		MoveBacktoDashboard_ManageRecipitent();
		VerifyAccountsDashBoard();
    }
},120000);