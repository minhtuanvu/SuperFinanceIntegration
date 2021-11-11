it("ExternalBank_VerifyTranxUnderActivities", async function() {
  
  // Pre requestite is to do atlease one Transfer with this Recipient - which we'll do definetly
  
  navigateToTransferActivities();
  VerifyTransferUnderActivities("ExtAccJasmine");
  MoveBackFromTransferActivities();
  VerifyAccountsDashBoard();
  
},90000);