it("EditSameBankRecipitent", async function() {
  
   var unique_EditNickName="EditNickName"+getRandomString(5);
  
   NavigateToManageRecipitents();
   SelectInfinityAccount();
   SearchforPayee_External("SameBankAccJasmine");
   EditReciptent(unique_EditNickName);
   verifyAddingNewReciptientSuccessMsg();
   VerifyAccountsDashBoard();
  
},120000);