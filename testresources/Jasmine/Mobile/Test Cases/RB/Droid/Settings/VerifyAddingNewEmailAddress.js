it("VerifyAddingNewEmailAddress", async function() {
  
  var isPrimary="NO";
  var emailAddress="testJasmine@gmail.com";
  
  NavigateToSettings();
  verifyAddingNewEmailAddress(isPrimary,emailAddress);
  MoveBackFromSettings_DashBoard();
  
},120000);