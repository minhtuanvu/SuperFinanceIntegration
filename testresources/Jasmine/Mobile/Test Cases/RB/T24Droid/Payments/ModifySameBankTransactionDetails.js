it("ModifySameBankTransactionDetails", async function() {
  
  let fromAccount = Transfers.checkingAccount.accountNumber; //"8378"; //Current
  let toAccount = ManageRecipient.sameBankAccount1.accountNumber; // "108812"
  let amount = Transfers.amount;

  NavigateToPayements();
  SelectFromAccount(fromAccount);
  SelectToAccount(toAccount);
  EnterAmount(amount);
  EnterPaymentReference("Recurring Daily SameBank");
  SelectFrequency("Daily");
  SelectDateRange();
  SelectFrequency("Weekly"); //Modifying the frequency
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
  
},120000);