it("VerifyAddingNewAddress", async function() {
  
  var isPrimary="NO";
  var Address1="LR PALLI";
  var City="HYD";
  var Pincode="500055";
  
  NavigateToSettings();
  verifyAddingNewAddress(isPrimary,Address1,City,Pincode);
  MoveBackFromSettings_DashBoard();
  
},120000);