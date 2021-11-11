it("VerifySearchViewAllTranscations", async function() {
  
  VerifyAccountsDashBoard();
  NavigateToViewAllTranscations();
  SelectUncategorizedTranscations();
  VerifySearchFunctionality_ViewAllTranscation();
  MoveBackfromViewAllTranscations();
});