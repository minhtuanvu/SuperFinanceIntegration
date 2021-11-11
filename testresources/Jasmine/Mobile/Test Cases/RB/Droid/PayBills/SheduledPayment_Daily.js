it("SheduledPayment_Daily", async function() {
  
  navigateToBillPay();
  navigateToManageBillPay();
  selectPayee_ManagePayee("ABC");
  clickonPayBill_PayeeDetails();
  EnterBillAmount("200");
  SelectFrequency_BillPay("Daily");
  selectDateRange_BillPay();
  enterNoteValue_BillPay("SheduledPayment_Daily");
  MoveBackfrom_Billpay();
  VerifyAccountsDashBoard();
  
},120000);