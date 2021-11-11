it("DeletePTOPAccRecipitent", async function() {

  NavigateToManageRecipitents();
  SelectP2PAccount();
  SearchforPayee_External("PTOPAccJasmine");
  DeletePTOPReciptent();
  MoveBackfromRecipientList();
  VerifyAccountsDashBoard();
});