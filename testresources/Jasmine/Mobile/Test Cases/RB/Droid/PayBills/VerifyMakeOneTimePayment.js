it("VerifyMakeOneTimePayment", async function() {
	
  navigateToBillPay();
  navigateToManageBillPay();
  selectPayee_ManagePayee("ABC");
  clickonPayBill_PayeeDetails();
  EnterBillAmount("200");
  SelectFrequency_BillPay("OneTime");
  selectSendOndate_BillPay();
  enterNoteValue_BillPay("VerifyMakeOneTimePayment");
  MoveBackfrom_Billpay();
  VerifyAccountsDashBoard();
  
},120000);