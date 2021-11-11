it("OneTimePayment_SameBank_FutureDate", async function() {
      
  let fromAccount = Transfers.checkingAccount.accountNumber; //"8378"; //Current
  let toAccount = ManageRecipient.sameBankAccount1.name; // "108812"
  let amount = Transfers.amount;

  NavigateToPayements();
  SelectFromAccount(fromAccount);
  SelectToAccount(toAccount);
  EnterAmount(amount);
  EnterPaymentReference("OneTime SameBank FutureDate");
  SelectSendOnDate();
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
},120000);