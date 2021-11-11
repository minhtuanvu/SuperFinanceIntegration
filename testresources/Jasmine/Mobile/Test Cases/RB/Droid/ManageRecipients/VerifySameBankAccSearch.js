it("VerifySameBankAccSearch", async function() {
  
  NavigateToManageRecipitents();
  SelectInfinityAccount();
  SearchforPayee_External("SameBankAccJasmine");
  CancelSearchRecipient();
  MoveBackfromRecipientList();
  VerifyAccountsDashBoard();
  
},90000);