it("PayBills_DeletePayee", async function() {
  
  var unique_RecipitentName="TestJasmine"+getRandomNumber(4);
  var unique_Accnumber="0"+getRandomNumber(6);
  
  navigateToBillPay();
  navigateToManageBillPay();
  clickOnAddPayeeLinkManually();
  enterPayeeDetails_UsingPayeeinfo(unique_RecipitentName,"LR PALLI","Nellore","AP","500055",unique_Accnumber,unique_RecipitentName);
  verifyAddPayeeSuccessMsg();
  VerifyAccountsDashBoard();
  
  // Delete Same payee
  navigateToBillPay();
  navigateToManageBillPay();
  selectPayee_ManagePayee("TestJasmine");
  DeletePayee_ManagePayee();
  VerifyAccountsDashBoard();
  
},120000);