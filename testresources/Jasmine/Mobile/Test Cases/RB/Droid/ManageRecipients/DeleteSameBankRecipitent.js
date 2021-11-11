it("DeleteSameBankRecipitent", async function() {

  NavigateToManageRecipitents();
  SelectInfinityAccount();
  SearchforPayee_External("SameBankAccJasmine");
  DeleteReciptent();
  MoveBackfromRecipientList();
  VerifyAccountsDashBoard();
});