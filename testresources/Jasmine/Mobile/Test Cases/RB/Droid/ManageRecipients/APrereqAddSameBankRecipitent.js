it("APrereqAddSameBankRecipitent", async function() {
  
   // Add a recipitent and Then delete the same recipitent

  var Accno="0"+new Date().getTime();
  var unique_RecipitentName="SameBankAccJasmine"+getRandomString(5);
  
  NavigateToManageRecipitents();
  clickonAddinfinityBankAccounttab();
  enterSameBankAccountDetails(Accno,unique_RecipitentName);
  verifyAddingNewReciptientSuccessMsg();
  VerifyAccountsDashBoard();
  
},120000);