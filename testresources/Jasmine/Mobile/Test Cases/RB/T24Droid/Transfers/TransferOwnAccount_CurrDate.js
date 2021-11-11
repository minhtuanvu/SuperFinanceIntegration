it("TransferOwnAccount_CurrDate", async function() {
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
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
},180000);