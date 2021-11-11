it("RecurringTransfer_OwnAccount", async function() {
  let fromAccount = Transfers.checkingAccount.accountNumber;
  let toAccount = Transfers.savingsAccount.name;
  let amount = Transfers.amount;
  
  navigateToTransfers();
//   SelectFromAccount("Current");
  SelectTransferAccount(fromAccount);
  SelectTransferAccount(toAccount);
//   SelectToAccount("Savings");
  EnterAmount(amount);
  EnterPaymentReference("Recurring Own Account Transfer");
  SelectFrequency("Daily");
  SelectDateRange();
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
},120000);