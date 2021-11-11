it("SheduledPayment_Monthly", async function() {
  
  navigateToBillPay();
  navigateToManageBillPay();
  selectPayee_ManagePayee("ABC");
  clickonPayBill_PayeeDetails();
  EnterBillAmount("200");
  SelectFrequency_BillPay("Monthly");
  selectDateRange_BillPay();
  enterNoteValue_BillPay("SheduledPayment_Monthly");
  MoveBackfrom_Billpay();
  VerifyAccountsDashBoard();
  
},120000);