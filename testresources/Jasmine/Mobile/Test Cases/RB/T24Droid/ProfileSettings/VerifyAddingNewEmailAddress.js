it("VerifyAddingNewEmailAddress", async function() {
  
  var isPrimary="NO";
  var emailAddress="testJasmine_" + getRandomNumber(3) +"@gmail.com";
  
  NavigateToSettings();
  verifyAddingNewEmailAddress(isPrimary,emailAddress);
  MoveBackFromSettings_DashBoard();
  
},120000);