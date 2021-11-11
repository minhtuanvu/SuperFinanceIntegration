it("VerifyBankName_Domestic", async function() {
  let fromAccount = Transfers.checkingAccount.accountNumber; //"8378"; //Current
  let toAccount = ManageRecipient.domesticAccount.IBAN; //"NL03ABNA1979747032";
  let amount = Transfers.amount;
  NavigateToPayements();
  SelectFromAccount(fromAccount);
  SelectToAccount(toAccount);
  EnterAmount(amount);
  EnterPaymentReference("OneTime Domestic");
  SelectNormalDomesticPayment();
  verifyBankNameInReviewScreen(fromAccount, "Domestic");
  ConfirmTransfer();
  verifyBankNameInAckScreen(fromAccount, "Domestic");
  VerifyTransferSuccessMessage();
},120000);