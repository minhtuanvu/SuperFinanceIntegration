it("VerifyAddPayeeBillPayFlow", async function() {
 
  //var unique_Accnumber="0"+new Date().getTime();
  //var unique_PhoneNumber="1"+new Date().getTime();
  
  //navigateToBillPay();
  //navigateToManageBillPay();
  //clickOnAddPayeeCompany();
  //enterPayeeDetails_UsingCompany(unique_Accnumber,unique_PhoneNumber,"AT");
  //verifyAddPayeeSuccessMsg();
  //VerifyAccountsDashBoard();
  
  var unique_RecipitentName="ABCJasmine"+getRandomNumber(4);
  var unique_Accnumber="0"+getRandomNumber(6);
  
  navigateToBillPay();
  navigateToManageBillPay();
  clickOnAddPayeeLinkManually();
  enterPayeeDetails_UsingPayeeinfo(unique_RecipitentName,"LR PALLI","Nellore","AP","500055",unique_Accnumber,unique_RecipitentName);
  verifyAddPayeeSuccessMsg();
  VerifyAccountsDashBoard();
  
},120000);