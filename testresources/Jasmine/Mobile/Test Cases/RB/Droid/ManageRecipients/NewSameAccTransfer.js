it("NewSameAccTransfer", async function() {
  
  NavigateToManageRecipitents();
  SelectInfinityAccount();
  SearchforPayee_External("SameBankAccJasmine");
  doTransferOnRecipient("200","NewSameAccTransfer");
  
},120000);