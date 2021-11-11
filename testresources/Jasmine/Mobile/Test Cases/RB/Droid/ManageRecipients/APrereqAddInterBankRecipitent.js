it("APrereqAddInterBankRecipitent", async function() {
  
   // Add a recipitent and Then delete the same recipitent
  var SwiftCode="BOFAUS3NXXX";
  var Accno="0"+new Date().getTime();
  var unique_RecipitentName="InterAccJasmine"+getRandomString(5);
  
  NavigateToManageRecipitents();
  clickonAddInternationalAccounttab();
  enterInternationalBankAccountDetails(SwiftCode,Accno,unique_RecipitentName);
  verifyAddingNewReciptientSuccessMsg();
  VerifyAccountsDashBoard();
  
},120000);