it("VerifyTranscationDetails", async function() {
  
  VerifyAccountsDashBoard();
  NavigateToViewAllTranscations();
  SelectUncategorizedTranscations();
  VerifySearchFunctionality_ViewAllTranscation();
  VerifyTranscationDetails();
  MoveBackFromTranscationDetails();
  
});