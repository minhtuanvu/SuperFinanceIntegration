it("SheduledPayment_QTR", async function() {
  
  navigateToBillPay();
  navigateToManageBillPay();
  selectPayee_ManagePayee("ABC");
  clickonPayBill_PayeeDetails();
  EnterBillAmount("200");
  SelectFrequency_BillPay("QTR");
  selectDateRange_BillPay();
  enterNoteValue_BillPay("SheduledPayment_QTR");
  MoveBackfrom_Billpay();
  VerifyAccountsDashBoard();
  
},120000);