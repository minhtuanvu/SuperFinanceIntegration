it("SheduledPayment_Yearly", async function() {
  
  navigateToBillPay();
  navigateToManageBillPay();
  selectPayee_ManagePayee("ABC");
  clickonPayBill_PayeeDetails();
  EnterBillAmount("200");
  SelectFrequency_BillPay("YEARLY");
  selectDateRange_BillPay();
  enterNoteValue_BillPay("SheduledPayment_Yearly");
  MoveBackfrom_Billpay();
  VerifyAccountsDashBoard();
  
},120000);