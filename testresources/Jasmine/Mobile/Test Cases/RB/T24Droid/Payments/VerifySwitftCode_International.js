it("VerifySwitftCode_International", async function() {
  let fromAccount = Transfers.checkingAccount.accountNumber; //"8378"; //Current
  let toAccount =ManageRecipient.internationalAccount.IBAN;
  let amount = Transfers.amount;

  NavigateToPayements();
  SelectFromAccount(fromAccount);
  SelectToAccount(toAccount);
  EnterAmount(amount);
  EnterPaymentReference("OneTime International");
  SelectIWillPayFees();
  ConfirmTransfer();
  VerifySwitftCode();
  VerifyTransferSuccessMessage();
},120000);