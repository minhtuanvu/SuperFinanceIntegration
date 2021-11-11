it("AddPayee", async function() {
 
  var unique_RecipitentName="ABCJasmine"+getRandomNumber(4);
  var unique_Accnumber="0"+getRandomNumber(6);
  
  navigateToBillPay();
  navigateToManageBillPay();
  clickOnAddPayeeLinkManually();
  enterPayeeDetails_UsingPayeeinfo(unique_RecipitentName,"LR PALLI","Nellore","AP","500055",unique_Accnumber,unique_RecipitentName);
  verifyAddPayeeSuccessMsg();
  VerifyAccountsDashBoard();
  
},120000);