it("PayBills_EditPayee", async function() {
  
  var NickName="ABCJasmineEdit";
  
  navigateToBillPay();
  navigateToManageBillPay();
  selectPayee_ManagePayee("ABCJasmine");
  EditPayee_ManagePayee(NickName);
  verifyAddPayeeSuccessMsg();
  VerifyAccountsDashBoard();
  
},120000);