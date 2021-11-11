it("Verify_ScheduledTransferMonthly_NoOfOccurances", async function() {  

  SearchInFromAndToScreen("normal");
  EnterAmount();
  SelectFrequency("Monthly");
  SelectNumberOfTransfersAndThenConfirmTransfer("Monthly","normal");

},180000);