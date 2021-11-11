it("VerifyAddPrimaryPhoneNumber", async function() {
  
  var isPrimary="YES";
  var MobileNumber="0"+new Date().getTime();
  
  NavigateToSettings();
  verifyAddingNewPhoneNumber(isPrimary,MobileNumber);
  MoveBackFromSettings_DashBoard();
  
},120000);