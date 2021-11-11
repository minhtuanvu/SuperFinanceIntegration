it("SheduledPayment_TwoWeeks", async function() {
  
  navigateToBillPay();
  navigateToManageBillPay();
  selectPayee_ManagePayee("ABC");
  clickonPayBill_PayeeDetails();
  EnterBillAmount("200");
  SelectFrequency_BillPay("TwoWeeks");
  selectDateRange_BillPay();
  enterNoteValue_BillPay("SheduledPayment_TwoWeeks");
  MoveBackfrom_Billpay();
  VerifyAccountsDashBoard();
  
},120000);