it("VerifyAddNewPhoneNumber", async function() {
  
  var isPrimary="NO";
  var MobileNumber="0"+new Date().getTime();
  
  NavigateToSettings();
  verifyAddingNewPhoneNumber(isPrimary,MobileNumber);
  MoveBackFromSettings_DashBoard();
  
},120000);