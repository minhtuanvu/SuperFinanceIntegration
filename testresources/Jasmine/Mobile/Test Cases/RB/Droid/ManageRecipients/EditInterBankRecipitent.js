it("EditInterBankRecipitent", async function() {
  
   var unique_EditNickName="EditNickName"+getRandomString(5);
  
   NavigateToManageRecipitents();
   SelectInternationalAccount();
   SearchforPayee_External("InterAccJasmine");
   EditReciptent(unique_EditNickName);
   verifyAddingNewReciptientSuccessMsg();
   VerifyAccountsDashBoard();
  
},120000);