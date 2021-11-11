it("TransferOwnAccount_FromAccountsDashboard", async function() {
  let fromAccount = Transfers.checkingAccount.accountNumber;
  let toAccount = Transfers.savingsAccount.name;
  let amount = Transfers.amount;

  ClickonFirstCheckingAccount();
  initiateTransfer();
  SelectTransferAccount(toAccount);
//   SelectToAccount("Savings");
  EnterAmount(amount);
  EnterPaymentReference("OneTime Own Account Transfer");
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
},180000);