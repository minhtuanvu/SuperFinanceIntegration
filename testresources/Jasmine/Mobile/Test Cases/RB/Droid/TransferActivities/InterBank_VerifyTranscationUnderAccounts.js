it("InterBank_VerifyTranscationUnderAccounts", async function() {
  
  // - Verify Transcation under acc is same for all Types of Recipients
  ClickonFirstCheckingAccount();
  VerifyAdvancedSearch();
  MoveBackfromAccountDetails();
  VerifyAccountsDashBoard();
  
},120000);