it("Verify_OneTimeTransfer_P2P", async function() {

  SearchInFromAndToScreen("P2P");
  EnterAmount();
  SelectFrequencyOnceAndTransfer();
  Logout();
},120000);