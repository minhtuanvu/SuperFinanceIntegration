it("APrereqAddPTOPAccRecipitent", async function() {
  
   // Add a recipitent and Then delete the same recipitent
  var phno="0"+new Date().getTime();
  //var Accno="0"+new Date().getTime();
  var unique_RecipitentName="PTOPAccJasmine"+getRandomString(5);
  
  NavigateToManageRecipitents();
  clickonAddP2PAccounttab();
  enterP2PAccountDetails_MobileNumber(unique_RecipitentName,phno);
  verifyAddingNewReciptientSuccessMsg();
  VerifyAccountsDashBoard();
  
},120000);