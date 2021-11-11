it("APrereqAddExternalBankRecipitent", async function() {
  
   // Add a recipitent and Then delete the same recipitent
  var Routingno="1234567890";
  var Accno="0"+new Date().getTime();
  var unique_RecipitentName="ExtAccJasmine"+getRandomString(5);
  
  NavigateToManageRecipitents();
  clickonAddExternalAccounttab();
  enterExternalBankAccountDetails(Routingno,Accno,unique_RecipitentName);
  verifyAddingNewReciptientSuccessMsg();
  VerifyAccountsDashBoard();
  
},120000);