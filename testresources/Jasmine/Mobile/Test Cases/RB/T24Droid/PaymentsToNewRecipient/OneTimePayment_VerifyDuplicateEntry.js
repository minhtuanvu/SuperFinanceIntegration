it("OneTimePayment_NewRecipient_SameBank_CurrDate", async function() {
  
  let accNo= "105635"; //ManageRecipient.sameBankAccount1.accountNumber;
  let benName= "Antony"; //ManageRecipient.sameBankAccount1.name;
  let fromAccount = "8648"; //Transfers.checkingAccount.accountNumber; //"8378"; //Current

//   NavigateToManageRecipitents();
//   VerifyBeneficiaryList();
//   if(IsAccountAlreadyAdded(accNo)){
// 	SearchBeneficiary(accNo);
// 	DeleteBeneficiary();
// 	VerifyAccountsDashBoard();
//   }else{
//     MoveBacktoDashboard_ManageRecipitent();
// 	VerifyAccountsDashBoard();
//   }
  
  NavigateToPayements();
  SelectFromAccount(fromAccount);
  ClickOnTransferToNewRecipient();

  SelectAccountWithUs();
  EnterBeneficiaryName(benName);
  EnterAccountNumber(accNo);
  VerifyDuplicateEntry();
  VerifyAccountsDashBoard();
},120000);