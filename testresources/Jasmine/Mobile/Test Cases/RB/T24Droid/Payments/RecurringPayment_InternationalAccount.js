it("RecurringPayment_InternationalAccount", async function() {
  let fromAccount = Transfers.checkingAccount.accountNumber; //"8378"; //Current
  let toAccount =ManageRecipient.internationalAccount.IBAN;
  let amount = Transfers.amount;

  NavigateToPayements();
  SelectFromAccount(fromAccount);
  SelectToAccount(toAccount);
  EnterAmount(amount);
  EnterPaymentReference("Recurring Daily International");
  SelectIWillPayFees();
  SelectFrequency("Daily");
  SelectDateRange();
  ConfirmTransfer();
  VerifyTransferSuccessMessage();
  
},120000);