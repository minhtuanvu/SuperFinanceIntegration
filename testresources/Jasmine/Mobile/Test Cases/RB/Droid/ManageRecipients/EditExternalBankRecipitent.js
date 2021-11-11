it("EditExternalBankRecipitent", async function() {
  
   var unique_EditNickName="EditNickName"+getRandomString(5);
  
   NavigateToManageRecipitents();
   SelectExternalAccount();
   SearchforPayee_External("ExtAccJasmine");
   EditReciptent(unique_EditNickName);
   verifyAddingNewReciptientSuccessMsg();
   VerifyAccountsDashBoard();
  
},120000);