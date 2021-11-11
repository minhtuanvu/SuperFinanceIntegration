it("DeleteSameBankRecipitent", async function() {

  let accNo= ManageRecipient.sameBankAccount1.accountNumber; //"108812";

  NavigateToManageRecipitents();
  VerifyBeneficiaryList();
  if(IsAccountAlreadyAdded(accNo)){
    SearchBeneficiary(accNo);
    DeleteBeneficiary();
    VerifyAccountsDashBoard();
  }
  else{
    MoveBacktoDashboard_ManageRecipitent();
    VerifyAccountsDashBoard();
  }
},120000);