it("TransferOwnAccount_FutureDate", async function() {
  
  let fromAccount = Transfers.checkingAccount.accountNumber;
  let toAccount = Transfers.savingsAccount.name;
  let amount = Transfers.amount;

  navigateToTransfers();
//   SelectFromAccount("Current");
  SelectTransferAccount(fromAccount);
  SelectTransferAccount(toAccount);
//   SelectToAccount("Savings");
  EnterAmount(amount);
  EnterPaymentReference("OneTime Own Account Transfer");
  SelectSendOnDate();
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
},120000);