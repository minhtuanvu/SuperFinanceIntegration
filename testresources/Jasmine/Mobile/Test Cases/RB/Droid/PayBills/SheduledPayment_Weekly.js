it("SheduledPayment_Weekly", async function() {
  
  navigateToBillPay();
  navigateToManageBillPay();
  selectPayee_ManagePayee("ABC");
  clickonPayBill_PayeeDetails();
  EnterBillAmount("200");
  SelectFrequency_BillPay("Weekly");
  selectDateRange_BillPay();
  enterNoteValue_BillPay("SheduledPayment_Weekly");
  MoveBackfrom_Billpay();
  VerifyAccountsDashBoard();
  
},120000);