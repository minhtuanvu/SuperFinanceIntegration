it("Verify_ScheduledTransferQTR_NoOfOccurances", async function() {  

  SearchInFromAndToScreen("normal");
  EnterAmount();
  SelectFrequency("QTR");
  SelectNumberOfTransfersAndThenConfirmTransfer("QTR","normal");
  
},180000);