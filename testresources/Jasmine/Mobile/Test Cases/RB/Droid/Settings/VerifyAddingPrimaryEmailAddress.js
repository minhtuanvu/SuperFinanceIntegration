it("VerifyAddingPrimaryEmailAddress", async function() {
  
  var isPrimary="YES";
  var emailAddress="testJasmine@gmail.com";
  
  NavigateToSettings();
  verifyAddingNewEmailAddress(isPrimary,emailAddress);
  MoveBackFromSettings_DashBoard();
  
},120000);