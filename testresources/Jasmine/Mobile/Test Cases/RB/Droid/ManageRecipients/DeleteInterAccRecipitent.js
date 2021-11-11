it("DeleteInterAccRecipitent", async function() {

  NavigateToManageRecipitents();
  SelectInternationalAccount();
  SearchforPayee_External("InterAccJasmine");
  DeleteReciptent();
  MoveBackfromRecipientList();
  VerifyAccountsDashBoard();
});