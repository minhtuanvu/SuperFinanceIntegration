it("Verify_ScheduledTransferHalfY_NoOfOccurances", async function() {  

  SearchInFromAndToScreen("normal");
  EnterAmount();
  SelectFrequency("HalfY");
  SelectNumberOfTransfersAndThenConfirmTransfer("HalfY","normal");
  
},180000);