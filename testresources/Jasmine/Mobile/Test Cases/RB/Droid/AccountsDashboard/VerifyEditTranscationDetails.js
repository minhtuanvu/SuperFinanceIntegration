it("VerifyEditTranscationDetails", async function() {
  
  VerifyAccountsDashBoard();
  NavigateToViewAllTranscations();
  SelectUncategorizedTranscations();
  VerifySearchFunctionality_ViewAllTranscation();
  VerifyTranscationDetails();
  //Edit Note Value
  EditTranscationDetails("Jasmine Automation");
  //Move back to dashboard
  MoveBackFromTranscationDetails();
  
});