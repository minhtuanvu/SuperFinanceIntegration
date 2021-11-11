it("InterBank_VerifyTranxUnderActivities", async function() {
  
  // Pre requestite is to do atlease one Transfer with this Recipient - which we'll do definetly
  
  navigateToTransferActivities();
  VerifyTransferUnderActivities("InterAccJasmine");
  MoveBackFromTransferActivities();
  VerifyAccountsDashBoard();
  
},90000);