describe("MyBills", function() {
	function VerifyAccountsDashBoard() {
	
	  kony.automation.playback.waitFor(["frmUnifiedDashboard"],30000);
	
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","lblSelectedAccountType"],30000);
	  expect(kony.automation.widget.getWidgetProperty(["frmUnifiedDashboard","lblSelectedAccountType"], "text")).not.toBe('');
	}
	
	function VerifySwipeOperationOnDashBoard(){
	
	  //kony.automation.scrollToWidget(["frmUnifiedDashboard","lblBarTitle"]);
	  kony.automation.scrollToWidget(["frmUnifiedDashboard","lblNetWorthSummary"]);
	}
	
	function VerifyNotchOperationOnDashBoard(){
	
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","flxInnerChartSizeToggle"],15000);
	  kony.automation.flexcontainer.click(["frmUnifiedDashboard","flxInnerChartSizeToggle"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.flexcontainer.click(["frmUnifiedDashboard","flxInnerChartSizeToggle"]);
	  kony.automation.playback.wait(5000);
	
	}
	
	function NavigateToViewAllTranscations() {
	
	  // Scroll to View All form
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","btnViewTransactionsGraph"],15000);
	  kony.automation.scrollToWidget(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
	  kony.automation.button.click(["frmUnifiedDashboard","btnViewTransactionsGraph"]);
	}
	
	function SelectUncategorizedTranscations(){
	
	  // Select Uncategorized Transcations
	  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","flxDropdownImage"],15000);
	  kony.automation.flexcontainer.click(["frmPFMCategorisedTransactions","flxDropdownImage"]);
	  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","segTransactionTypes"],15000);
	  kony.automation.segmentedui.click(["frmPFMCategorisedTransactions","segTransactionTypes[0,1]"]);
	}
	
	function VerifySearchFunctionality_ViewAllTranscation(){
	
	  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","tbxSearch"],15000);
	  kony.automation.textbox.enterText(["frmPFMCategorisedTransactions","tbxSearch"],"Spent");
	  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","segTransactions"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPFMCategorisedTransactions","segTransactions[0,0]","lblTransaction"], "text")).toContain("Spent");
	}
	
	function MoveBackfromViewAllTranscations(){
	
	  //MoveBack from viewAll Transcations
	  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmPFMCategorisedTransactions","customHeader","flxBack"]);
	
	  VerifyAccountsDashBoard();
	}
	
	
	function VerifyTranscationDetails(){
	
	  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","segTransactions"],15000);
	  kony.automation.segmentedui.click(["frmPFMCategorisedTransactions","segTransactions[0,0]"]);
	
	  kony.automation.playback.waitFor(["frmPFMTransactionDetails","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPFMTransactionDetails","customHeader","lblLocateUs"], "text")).not.toBe('');
	
	  kony.automation.playback.waitFor(["frmPFMTransactionDetails","lblTransferredToTrans"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPFMTransactionDetails","lblTransferredToTrans"], "text")).not.toBe('');
	
	  kony.automation.playback.waitFor(["frmPFMTransactionDetails","lblTransferredFromTrans"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmPFMTransactionDetails","lblTransferredFromTrans"], "text")).not.toBe('');
	}
	
	function MoveBackFromTranscationDetails(){
	
	  kony.automation.playback.waitFor(["frmPFMTransactionDetails","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmPFMTransactionDetails","customHeader","flxBack"]);
	  MoveBackfromViewAllTranscations();
	  VerifyAccountsDashBoard();
	}
	
	function EditTranscationDetails(Note){
	
	  kony.automation.playback.waitFor(["frmPFMTransactionDetails","customHeader","btnRight"],15000);
	  kony.automation.button.click(["frmPFMTransactionDetails","customHeader","btnRight"]);
	  kony.automation.playback.waitFor(["frmPFMTransactionDetails","flxOption2"],15000);
	  kony.automation.flexcontainer.click(["frmPFMTransactionDetails","flxOption2"]);
	  kony.automation.playback.waitFor(["frmPFMNote","txtNote"],15000);
	  kony.automation.textarea.enterText(["frmPFMNote","txtNote"],Note);
	  kony.automation.playback.waitFor(["frmPFMNote","btnSave"],15000);
	  kony.automation.button.click(["frmPFMNote","btnSave"]);
	
	}
	
	function VerifyAccountsOrder(){
	
	
	}
	
	function openMenu(menu){
	  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
	  var menuOptions = kony.automation.widget.getWidgetProperty(["frmUnifiedDashboard","Hamburger","segHamburger"], "data");
	  kony.print("menuOptions: "+menuOptions);
	  var menuIndex = -1;
	  for(i=0; i<menuOptions.length; i++){
	    if(menuOptions[i].text === menu){
	      menuIndex = i;
	      break;
	    }
	  }
	  if(menuIndex > -1){
	    kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0," + menuIndex+ "]" ]);
	    kony.automation.playback.wait(10000);
	  }else{
	    expect(menuIndex).toBeGreaterThan(-1);
	  }
	}
	
	
	
	
	function navigateToBillPay(){
	
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,5]"]);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,5]"]);
	//   kony.automation.playback.wait(10000);
	  openMenu("My Bills");
	  kony.automation.playback.waitFor(["frmBillPay","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPay","customHeader","lblLocateUs"], "text")).toEqual("My Bills");
	  kony.automation.playback.waitFor(["frmBillPay","tbxSearch"],15000);
	
	}
	
	function navigateToManageBillPay(){
	
	  kony.automation.playback.waitFor(["frmBillPay","flxManage"],15000);
	//   kony.automation.widget.touch(["frmBillPay","flxManage"], [15,51],null,[15,51]);
	//   kony.automation.playback.waitFor(["frmBillPay","flxManage"],15000);
	  kony.automation.flexcontainer.click(["frmBillPay","flxManage"]);
	  kony.automation.playback.wait(10000);
	  kony.automation.playback.waitFor(["frmBillPayAllPayees","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmBillPayAllPayees","customHeader","lblLocateUs"], "text")).toEqual("All Payees");
	}
	
	function clickOnAddPayeeLinkManually(){
	
		kony.automation.playback.waitFor(["frmBillPayAllPayees","manageBillerNative","btnAllPayees"],15000);
		kony.automation.button.click(["frmBillPayAllPayees","manageBillerNative","btnAllPayees"]);
	//   kony.automation.playback.waitFor(["frmBillPaySearchPayee","flxAddManually"],15000);
	//   kony.automation.flexcontainer.click(["frmBillPaySearchPayee","flxAddManually"]);
	  kony.automation.playback.waitFor(["frmBillPaySearchPayee","autoDataFill","flx4"],15000);
		kony.automation.widget.touch(["frmBillPaySearchPayee","autoDataFill","flx4","lblField3"], null,null,[78,12]);
	}
	
	function clickOnAddPayeeCompany(){
	
	  kony.automation.playback.waitFor(["frmBillPayAllPayees","btnAddPayee"],15000);
	  kony.automation.button.click(["frmBillPayAllPayees","btnAddPayee"]);
	
	  kony.automation.playback.waitFor(["frmBillPaySearchPayee","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmBillPaySearchPayee","tbxSearch"], [95,18],null,null);
	  kony.automation.playback.waitFor(["frmBillPaySearchPayee","customSearchbox","tbxSearch"],15000);
	  kony.automation.textbox.enterText(["frmBillPaySearchPayee","customSearchbox","tbxSearch"],"at");
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmBillPaySearchPayee","segAddresses"],15000);
	  kony.automation.segmentedui.click(["frmBillPaySearchPayee","segAddresses[0,0]"]);
	}
	
	function enterPayeeDetails_UsingCompany(unique_Accnumber,unique_PhoneNumber,note){
	
	  kony.automation.playback.waitFor(["frmBillPayZipCode","txtZipCode"],15000);
	  kony.automation.textbox.enterText(["frmBillPayZipCode","txtZipCode"],"500055");
	  kony.automation.playback.waitFor(["frmBillPayZipCode","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayZipCode","btnContinue"]);
	
	  kony.automation.playback.waitFor(["frmBillPayRelationNumber","keypad","btnOne"],15000);
	  for(i=0; i<unique_Accnumber.length; i++){
	    kony.automation.button.click(["frmBillPayRelationNumber","keypad", getBtnID(unique_Accnumber.charAt(i))]);
	  }
	  kony.automation.playback.waitFor(["frmBillPayRelationNumber","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayRelationNumber","btnContinue"]);
	
	  kony.automation.playback.waitFor(["frmBillPayReEnterRelationNumber","keypad","btnOne"],15000);
	  for(i=0; i<unique_Accnumber.length; i++){
	    kony.automation.button.click(["frmBillPayReEnterRelationNumber","keypad", getBtnID(unique_Accnumber.charAt(i))]);
	  }
	  kony.automation.playback.waitFor(["frmBillPayReEnterRelationNumber","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayReEnterRelationNumber","btnContinue"]);
	
	  kony.automation.playback.waitFor(["frmBillPayPhoneNumber","keypad","btnFive"],15000);
	  for(i=0; i<unique_PhoneNumber.length; i++){
	    kony.automation.button.click(["frmBillPayPhoneNumber","keypad", getBtnID(unique_PhoneNumber.charAt(i))]);
	  }
	
	  kony.automation.playback.waitFor(["frmBillPayPhoneNumber","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayPhoneNumber","btnContinue"]);
	
	  linkPayee();
	
	  VerifyAddPayeeDetails(note);
	
	}
	
	function enterPayeeDetails_UsingPayeeinfo(unique_RecipitentName,address1,city,state,zipcode,unique_Accnumber,note){
	
	  kony.automation.playback.waitFor(["frmBillPayEditName","txtName"],15000);
	  kony.automation.textbox.enterText(["frmBillPayEditName","txtName"],unique_RecipitentName);
	  kony.automation.playback.waitFor(["frmBillPayEditName","btnSave"],15000);
	  kony.automation.button.click(["frmBillPayEditName","btnSave"]);
	
	  kony.automation.playback.waitFor(["frmBillPayEditAddress","txtAddressLineOne"],15000);
	  kony.automation.textbox.enterText(["frmBillPayEditAddress","txtAddressLineOne"],address1);
	  kony.automation.playback.waitFor(["frmBillPayEditAddress","txtCity"],15000);
	  kony.automation.textbox.enterText(["frmBillPayEditAddress","txtCity"],city);
	  kony.automation.playback.waitFor(["frmBillPayEditAddress","txtState"],15000);
	  kony.automation.textbox.enterText(["frmBillPayEditAddress","txtState"],state);
	  kony.automation.playback.waitFor(["frmBillPayEditAddress","txtZipCode"],15000);
	  kony.automation.textbox.enterText(["frmBillPayEditAddress","txtZipCode"],zipcode);
	  kony.automation.playback.waitFor(["frmBillPayEditAddress","btnSave"],15000);
	  kony.automation.button.click(["frmBillPayEditAddress","btnSave"]);
	
	  kony.automation.playback.waitFor(["frmBillPayEnterAccNo","keypad","btnZero"],15000);
	  for(i=0; i<unique_Accnumber.length; i++){
	    kony.automation.button.click(["frmBillPayEnterAccNo","keypad", getBtnID(unique_Accnumber.charAt(i))]);
	  }
	
	  kony.automation.playback.waitFor(["frmBillPayEnterAccNo","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayEnterAccNo","btnContinue"]);
	
	  kony.automation.playback.waitFor(["frmBillPayReEnterAccNo","keypad","btnZero"],15000);
	  for(i=0; i<unique_Accnumber.length; i++){
	    kony.automation.button.click(["frmBillPayReEnterAccNo","keypad", getBtnID(unique_Accnumber.charAt(i))]);
	  }
	
	  kony.automation.playback.waitFor(["frmBillPayReEnterAccNo","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayReEnterAccNo","btnContinue"]);
	
	  linkPayee();
	
	  VerifyAddPayeeDetails(note);
	
	}
	
	function linkPayee(){
	
	  kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"],15000);
	  kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
	  kony.automation.playback.waitFor(["frmContracts","btnContinue"],15000);
	  kony.automation.button.click(["frmContracts","btnContinue"]);
	}
	
	function VerifyAddPayeeDetails(note){
	
	  kony.automation.playback.waitFor(["frmBillPayVerifyDetails","txtNameOnBill"],15000);
	  kony.automation.textbox.enterText(["frmBillPayVerifyDetails","txtNameOnBill"],note);
	  kony.automation.playback.waitFor(["frmBillPayVerifyDetails","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayVerifyDetails","btnContinue"]);
	}
	
	function verifyAddPayeeSuccessMsg(){
	
	  kony.automation.playback.waitFor(["frmAcknowledgement","lblSuccessMessage"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmAcknowledgement","lblSuccessMessage"], "text")).not.toBe('');
	
	  //Move Back to DashBoard
	  kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"],15000);
	  kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
	  kony.automation.playback.wait(2000);
	
	  MoveBackfrom_Allpayees();
	
	}
	
	function MoveBackfrom_Allpayees(){
	
	  kony.automation.playback.waitFor(["frmBillPayAllPayees","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmBillPayAllPayees","customHeader","flxBack"]);
	  kony.automation.playback.wait(2000);
	
	  MoveBackfrom_Billpay();
	
	}
	
	function MoveBackfrom_Billpay(){
	
	  kony.automation.playback.waitFor(["frmBillPay","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmBillPay","customHeader","flxBack"]);
	  kony.automation.playback.wait(2000);
	  kony.automation.playback.waitFor(["frmBillPay","Hamburger","segHamburger"],15000);
	  kony.automation.segmentedui.click(["frmBillPay","Hamburger","segHamburger[0,0]"]);
	  kony.automation.playback.wait(2000);
	}
	
	function selectPayee_ManagePayee(PayeeName){
	
	  kony.automation.playback.waitFor(["frmBillPayAllPayees","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmBillPayAllPayees","tbxSearch"], [165,20],null,null);
	  kony.automation.playback.waitFor(["frmBillPayAllPayees","customSearchbox","tbxSearch"],15000);
	  kony.automation.textbox.enterText(["frmBillPayAllPayees","customSearchbox","tbxSearch"],PayeeName);
	  kony.automation.playback.wait(2000);
	  kony.automation.playback.waitFor(["frmBillPayAllPayees","segAccounts"],15000);
	  kony.automation.segmentedui.click(["frmBillPayAllPayees","segAccounts[0,0]"]);
	}
	
	function EditPayee_ManagePayee(NickName){
	
	  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","customHeader","btnRight"],15000);
	  kony.automation.button.click(["frmBillPayPayeeDetails","customHeader","btnRight"]);
	  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","btnEditNickName"],15000);
	  kony.automation.button.click(["frmBillPayPayeeDetails","btnEditNickName"]);
	
	  kony.automation.playback.waitFor(["frmBillPayEditName","txtName"],15000);
	  kony.automation.textbox.enterText(["frmBillPayEditName","txtName"],NickName);
	  kony.automation.playback.waitFor(["frmBillPayEditName","btnSave"],15000);
	  kony.automation.button.click(["frmBillPayEditName","btnSave"]);
	
	}
	
	function DeletePayee_ManagePayee(){
	
	  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","btnDeleteRecipient"],15000);
	  kony.automation.button.click(["frmBillPayPayeeDetails","btnDeleteRecipient"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.alert.click(0);
	  kony.automation.playback.wait(10000);
	
	  MoveBackfrom_Allpayees();
	}
	
	function ActivatePayee_ManagePayee(){
	
	  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","btnActivateEBill"],15000);
	  kony.automation.button.click(["frmBillPayPayeeDetails","btnActivateEBill"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.alert.click(0);
	  kony.automation.playback.wait(10000);
	
	  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmBillPayPayeeDetails","customHeader","flxBack"]);
	  kony.automation.playback.wait(2000);
	
	  MoveBackfrom_Allpayees();
	
	
	}
	
	function verifySearch_MyBills(Payee){
	
	  kony.automation.playback.waitFor(["frmBillPay","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmBillPay","tbxSearch"], [212,20],null,null);
	  kony.automation.playback.waitFor(["frmBillPay","customSearchbox","tbxSearch"],15000);
	  kony.automation.textbox.enterText(["frmBillPay","customSearchbox","tbxSearch"],Payee);
	  kony.automation.playback.wait(5000);
	  //kony.automation.playback.waitFor(["frmBillPay","segTransactions"]);
	  //expect(kony.automation.widget.getWidgetProperty(["frmBillPay","segTransactions[0,0]","lblAccountName"], "text")).toEqual("SOMETHING");
	  kony.automation.playback.waitFor(["frmBillPay","customSearchbox","btnCancel"],15000);
	  kony.automation.button.click(["frmBillPay","customSearchbox","btnCancel"]);
	
	  MoveBackfrom_Billpay();
	}
	
	function verifySearch_AllPayees(Payee){
	
	  kony.automation.playback.waitFor(["frmBillPayAllPayees","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmBillPayAllPayees","tbxSearch"], [193,14],null,null);
	  kony.automation.playback.waitFor(["frmBillPayAllPayees","customSearchbox","tbxSearch"],15000);
	  kony.automation.textbox.enterText(["frmBillPayAllPayees","customSearchbox","tbxSearch"],Payee);
	  kony.automation.playback.wait(5000);
	  //kony.automation.playback.waitFor(["frmBillPayAllPayees","segAccounts"]);
	  //expect(kony.automation.widget.getWidgetProperty(["frmBillPayAllPayees","segAccounts[0,0]","lblAccountName"], "text")).toEqual("SOMETHING");
	  kony.automation.playback.waitFor(["frmBillPayAllPayees","customSearchbox","btnCancel"],15000);
	  kony.automation.button.click(["frmBillPayAllPayees","customSearchbox","btnCancel"]);
	
	  MoveBackfrom_Allpayees();
	}
	
	
	function clickonPayBill_PayeeDetails(){
	
	  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","btnPayAPerson"],15000);
	  kony.automation.button.click(["frmBillPayPayeeDetails","btnPayAPerson"]);
	}
	function EnterBillAmount(amount){
	
	  kony.automation.playback.waitFor(["frmBillPayAmount","keypad","btnTwo"],15000);
	  for(i=0; i<amount.length; i++){
	    kony.automation.button.click(["frmBillPayAmount","keypad", getBtnID(amount.charAt(i))]);
	  }
	  kony.automation.playback.waitFor(["frmBillPayAmount","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayAmount","btnContinue"]);
	}
	
	function SelectFrequency_BillPay(ValTimePeriod) {
	
	
	  kony.automation.playback.waitFor(["frmBillPayFrequency","segFrequency"],15000);
	
	  switch(ValTimePeriod){
	    case "OneTime":
	      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,1]"]);
	      break;
	    case "Daily":
	      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,2]"]);
	      break;
	    case "Weekly":
	      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,3]"]);
	      break;
	    case "TwoWeeks":
	      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,4]"]);
	      break;
	    case "Monthly":
	      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,5]"]);
	      break;
	    case "QTR":
	      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,6]"]);
	      break;
	    case "TwoYear":
	      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,7]"]);
	      break;
	    case "YEARLY":
	      kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,8]"]);
	      break;
	  }
	
	  kony.automation.playback.wait(5000);
	}
	
	function selectSendOndate_BillPay(){
	
	  // Selet Start date
	  kony.automation.playback.waitFor(["frmBillPayStartDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmBillPayStartDate","customCalendar","flxNextMonth"]);
	  kony.automation.widget.touch(["frmBillPayStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	
	  kony.automation.playback.waitFor(["frmBillPayStartDate","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayStartDate","btnContinue"]);
	
	}
	
	function selectDateRange_BillPay(){
	
	  // Selet Start date
	  kony.automation.playback.waitFor(["frmBillPayDuration","segDuration"],15000);
	  kony.automation.segmentedui.click(["frmBillPayDuration","segDuration[0,0]"]);
	
	  kony.automation.playback.waitFor(["frmBillPayStartDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmBillPayStartDate","customCalendar","flxNextMonth"]);
	  kony.automation.widget.touch(["frmBillPayStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	
	  kony.automation.playback.waitFor(["frmBillPayStartDate","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayStartDate","btnContinue"]);
	
	  kony.automation.playback.waitFor(["frmBillPayEndDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmBillPayEndDate","customCalendar","flxNextMonth"]);
	  kony.automation.widget.touch(["frmBillPayEndDate","customCalendar","flxMonth","m3CopyLabel0a7f34907bda844"], null,null,[17,9]);
	
	  kony.automation.playback.waitFor(["frmBillPayEndDate","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayEndDate","btnContinue"]);
	}
	
	function enterNoteValue_BillPay(notes){
	
	  kony.automation.playback.waitFor(["frmBillPayConfirmation","txtDescription"],15000);
	  kony.automation.textbox.enterText(["frmBillPayConfirmation","txtDescription"],notes);
	
	  kony.automation.playback.waitFor(["frmBillPayConfirmation","flxCheckBox"],15000);
	  kony.automation.flexcontainer.click(["frmBillPayConfirmation","flxCheckBox"]);
	  kony.automation.playback.waitFor(["frmBillPayConfirmation","btnContinue"],15000);
	  kony.automation.button.click(["frmBillPayConfirmation","btnContinue"]);
	  kony.automation.playback.wait(5000);
	
	}
	
	function CancelMyBill(){
	
	  kony.automation.playback.waitFor(["frmBillPayFrequency","customHeader","btnRight"],15000);
	  kony.automation.button.click(["frmBillPayFrequency","customHeader","btnRight"]);
	  kony.automation.playback.waitFor(["frmBillPayPayeeDetails","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmBillPayPayeeDetails","customHeader","flxBack"]);
	
	  MoveBackfrom_Allpayees();
	
	}
	
	
	function EditSheduledPayBill(){
	
	  kony.automation.playback.waitFor(["frmBillPay","segTransactions"],15000);
	
	  var sheduledPay= kony.automation.widget.getWidgetProperty(["frmBillPay","segTransactions[1,-1]","lblHeader"], "text");
	  if(sheduledPay){
	
	    kony.automation.segmentedui.click(["frmBillPay","segTransactions[1,0]"]);
	    kony.automation.playback.wait(5000);
	
	    kony.automation.playback.waitFor(["frmTransactionDetails","customHeader","btnRight"],15000);
	    kony.automation.button.click(["frmTransactionDetails","customHeader","btnRight"]);
	    kony.automation.playback.wait(5000);
	
	    kony.automation.playback.waitFor(["frmBillPayAmount","btnContinue"],15000);
	    kony.automation.button.click(["frmBillPayAmount","btnContinue"]);
	    kony.automation.playback.waitFor(["frmBillPayFrequency","segFrequency"],15000);
	    kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,0]"]);
	    kony.automation.playback.waitFor(["frmBillPayConfirmation","txtDescription"],15000);
	    kony.automation.textbox.enterText(["frmBillPayConfirmation","txtDescription"],"Edit Billpay");
	    kony.automation.playback.waitFor(["frmBillPayConfirmation","flxCheckBox"],15000);
	    kony.automation.flexcontainer.click(["frmBillPayConfirmation","flxCheckBox"]);
	    kony.automation.playback.waitFor(["frmBillPayConfirmation","btnContinue"],15000);
	    kony.automation.button.click(["frmBillPayConfirmation","btnContinue"]);
	    kony.automation.playback.wait(5000);
	
	    MoveBackfrom_Billpay();
	
	  }else{
	    MoveBackfrom_Billpay();
	  }
	
	}
	
	function RepeatSheduledPayBill(){
	
	  kony.automation.playback.waitFor(["frmBillPay","segTransactions"],15000);
	
	  var RepeatPay= kony.automation.widget.getWidgetProperty(["frmBillPay","segTransactions[2,-1]","lblHeader"], "text");
	  if(RepeatPay){
	
	    kony.automation.segmentedui.click(["frmBillPay","segTransactions[2,0]"]);
	    kony.automation.playback.wait(5000);
	    kony.automation.playback.waitFor(["frmTransactionDetails","btnRepeatTransBP"],15000);
	    kony.automation.button.click(["frmTransactionDetails","btnRepeatTransBP"]);
	    kony.automation.playback.wait(5000);
	    kony.automation.playback.waitFor(["frmBillPayAmount","btnContinue"],15000);
	    kony.automation.button.click(["frmBillPayAmount","btnContinue"]);
	    kony.automation.playback.waitFor(["frmBillPayFrequency","segFrequency"],15000);
	    kony.automation.segmentedui.click(["frmBillPayFrequency","segFrequency[0,0]"]);
	    kony.automation.playback.waitFor(["frmBillPayConfirmation","txtDescription"],15000);
	    kony.automation.textbox.enterText(["frmBillPayConfirmation","txtDescription"],"Repeat Billpay");
	    kony.automation.playback.waitFor(["frmBillPayConfirmation","flxCheckBox"],15000);
	    kony.automation.flexcontainer.click(["frmBillPayConfirmation","flxCheckBox"]);
	    kony.automation.playback.waitFor(["frmBillPayConfirmation","btnContinue"],15000);
	    kony.automation.button.click(["frmBillPayConfirmation","btnContinue"]);
	    kony.automation.playback.wait(5000);
	
	    MoveBackfrom_Billpay();
	
	  }else{
	    MoveBackfrom_Billpay();
	  }
	
	}
	
	function getRandomString(length) {
	  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	  var result = '';
	  for ( var i = 0; i < length; i++ ) {
	    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
	  }
	  return result;
	}
	
	function getBtnID(num){
	  switch(num){
	    case '0' :
	      return "btnZero";
	    case '1' :
	      return "btnOne";
	    case '2' :
	      return "btnTwo";
	    case '3' :
	      return "btnThree";
	    case '4' :
	      return "btnFour";
	    case '5' :
	      return "btnFive";
	    case '6' :
	      return "btnSix";
	    case '7' :
	      return "btnSeven";
	    case '8' :
	      return "btnEight";
	    case '9' :
	      return "btnNine";
	  }
	}
	
	function getRandomNumber(length) {
	  var randomChars = '0123456789';
	  var result = '';
	  for ( var i = 0; i < length; i++ ) {
	    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
	  }
	  return result;
	}
	
	// OLDER Functions
	
	// function Logout() {
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxLogout"],5000);
	//   kony.automation.widget.touch(["frmUnifiedDashboard","Hamburger","flxLogout"], null,null,[34,28]);
	//   kony.automation.playback.waitFor(["frmLogout","btnLogIn"],10000);
	//   kony.automation.button.click(["frmLogout","btnLogIn"]);
	//   kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
	// }
	
	// /**
	//  * @addNewPayee
	//  *
	//  */
	// function addNewPayee(){
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,5]"]);
	//   kony.automation.playback.waitFor(["frmBillPay","flxManage"]);
	//   kony.automation.flexcontainer.click(["frmBillPay","flxManage"]);
	//   kony.automation.playback.waitFor(["frmBillPayAllPayees","btnAddPayee"]);
	//   kony.automation.button.click(["frmBillPayAllPayees","btnAddPayee"]);
	//   kony.automation.playback.waitFor(["frmBillPaySearchPayee","flxAddManually"]);
	//   kony.automation.flexcontainer.click(["frmBillPaySearchPayee","flxAddManually"]);
	
	//   unique_PayeeName="Automationuser Credit card "+getRandomString(5);
	
	//   kony.automation.playback.waitFor(["frmBillPayEditName","txtName"]);
	//   kony.automation.textbox.enterText(["frmBillPayEditName","txtName"],unique_PayeeName);
	//   kony.automation.button.click(["frmBillPayEditName","btnSave"]);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmBillPayEditAddress","txtAddressLineOne"]);
	//   kony.automation.textbox.enterText(["frmBillPayEditAddress","txtAddressLineOne"],"2");
	//   kony.automation.textbox.enterText(["frmBillPayEditAddress","txtCity"],"Jersey city");
	//   kony.automation.textbox.enterText(["frmBillPayEditAddress","txtState"],"New Jersey");
	//   kony.automation.textbox.enterText(["frmBillPayEditAddress","txtZipCode"],"20971");
	//   kony.automation.button.click(["frmBillPayEditAddress","btnSave"]);
	//   kony.automation.playback.wait(8000);
	//   kony.automation.playback.waitFor(["frmBillPayEnterAccNo","keypad","btnOne"]);
	
	//   let uniqueAccNumber = getRandomNumber(9);
	//   kony.print("uniqueAccNumber : "+uniqueAccNumber);
	
	//   for(i=0;i<uniqueAccNumber.length; i++){
	//     let btnID = getBtnID(uniqueAccNumber.charAt(i));
	//     kony.automation.button.click(["frmBillPayEnterAccNo","keypad", btnID]);
	//   }
	
	//   kony.automation.button.click(["frmBillPayEnterAccNo","btnContinue"]);
	//   kony.automation.playback.wait(5000);
	
	//   kony.automation.playback.waitFor(["frmBillPayReEnterAccNo","keypad","btnOne"]);
	//   for(i=0;i<uniqueAccNumber.length; i++){
	//     let btnIDNew = getBtnID(uniqueAccNumber.charAt(i));
	//     kony.automation.button.click(["frmBillPayReEnterAccNo","keypad", btnIDNew]);
	//   }
	
	//   kony.automation.button.click(["frmBillPayReEnterAccNo","btnContinue"]);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"]);
	//   kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
	//   kony.automation.playback.waitFor(["frmContracts","btnContinue"]);
	//   kony.automation.button.click(["frmContracts","btnContinue"]);
	//   kony.automation.playback.waitFor(["frmBillPayVerifyDetails","txtNameOnBill"]);
	//   kony.automation.textbox.enterText(["frmBillPayVerifyDetails","txtNameOnBill"],"PhoneVerizon");
	//   kony.automation.button.click(["frmBillPayVerifyDetails","btnContinue"]);
	//   kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"]);
	//   kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
	//   kony.automation.playback.waitFor(["frmBillPayAllPayees","tbxSearch"]);
	//   kony.automation.widget.touch(["frmBillPayAllPayees","tbxSearch"], [240,8],null,null);
	//   kony.automation.textbox.enterText(["frmBillPayAllPayees","customSearchbox","tbxSearch"],"Automationuser");
	//   kony.automation.playback.wait(1000);
	//   kony.automation.playback.waitFor(["frmBillPayAllPayees","segAccounts"]);
	//   kony.automation.segmentedui.scrollToRow(["frmBillPayAllPayees","segAccounts[0,0]"]);
	//   expect(kony.automation.widget.getWidgetProperty(["frmBillPayAllPayees","segAccounts[0,0]","lblAccountName"], "text")).not.toBe(null);
	//   kony.automation.button.click(["frmBillPayAllPayees","customSearchbox","btnCancel"]);
	//   kony.automation.playback.wait(1000);
	//   kony.automation.flexcontainer.click(["frmBillPayAllPayees","customHeader","flxBack"]);
	//   kony.automation.playback.waitFor(["frmBillPay","customHeader","flxBack"]);
	//   kony.automation.flexcontainer.click(["frmBillPay","customHeader","flxBack"]);
	//   kony.automation.playback.waitFor(["frmBillPay","Hamburger","segHamburger"]);
	//   kony.automation.segmentedui.click(["frmBillPay","Hamburger","segHamburger[0,0]"]);
	// }
	
	// /**
	//  * @deletePayee
	//  *
	//  */
	// function deletePayee(){
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,5]"]);
	//   kony.automation.playback.waitFor(["frmBillPay","flxManage"]);
	//   kony.automation.flexcontainer.click(["frmBillPay","flxManage"]);
	//   kony.automation.playback.waitFor(["frmBillPayAllPayees","tbxSearch"]);
	//   kony.automation.widget.touch(["frmBillPayAllPayees","tbxSearch"], [120,17],null,null);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmBillPayAllPayees","customSearchbox","tbxSearch"]);
	//   kony.automation.textbox.enterText(["frmBillPayAllPayees","customSearchbox","tbxSearch"],"Automationuser");
	//   kony.automation.segmentedui.click(["frmBillPayAllPayees","segAccounts[0,0]"]);
	//   kony.automation.playback.waitFor(["frmBillPayPayeeDetails","btnDeleteRecipient"]);
	//   kony.automation.button.click(["frmBillPayPayeeDetails","btnDeleteRecipient"]);
	//   kony.automation.playback.wait(4000);
	//   kony.automation.alert.click(0);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmBillPayAllPayees","customHeader","flxBack"]);
	//   kony.automation.flexcontainer.click(["frmBillPayAllPayees","customHeader","flxBack"]);
	//   kony.automation.playback.waitFor(["frmBillPay","customHeader","flxBack"]);
	//   kony.automation.flexcontainer.click(["frmBillPay","customHeader","flxBack"]);
	//   kony.automation.playback.waitFor(["frmBillPay","Hamburger","segHamburger"]);
	//   kony.automation.segmentedui.click(["frmBillPay","Hamburger","segHamburger[0,0]"]);
	// }
	
	function navigateToTransfers(){
	
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	//   kony.automation.playback.wait(10000);
	  
	  openMenu("Transfers");
	  
	}
	
	function NavigateToPayements(){
	  openMenu("Send Money");
	}
	
	function SelectFromAccount(fromAccount){
	  kony.automation.playback.wait(5000);
	 let currFormName = kony.automation.getCurrentForm();
	
	  kony.automation.playback.waitFor([currFormName,"tbxSearch"],15000);
	  kony.automation.widget.touch([currFormName,"tbxSearch"], [232,14],null,null);
	  kony.automation.playback.waitFor([currFormName,"customSearchbox","tbxSearch"],15000);
	  kony.automation.textbox.enterText([currFormName,"customSearchbox","tbxSearch"],fromAccount);
	  kony.automation.playback.wait(3000);
	  expect(kony.automation.widget.getWidgetProperty([currFormName,"segTransactions[0,0]","lblAccountName"], "text")).not.toBe('');
	  kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
	  kony.automation.segmentedui.click([currFormName,"segTransactions[0,0]"]);
	  kony.automation.playback.wait(5000);
	
	}
	function ClickOnTransferToNewRecipient(){
	
		kony.automation.playback.waitFor(["frmEuropeTransferToAccountSM","btnNewAccount"],15000);
		kony.automation.button.click(["frmEuropeTransferToAccountSM","btnNewAccount"]);
		kony.automation.playback.waitFor(["frmEuropeTransferToAccountNewBen","SegSelectBank"],15000);
	}
	
	function SelectToAccount(ToAccReciptent){
		let currFormName = kony.automation.getCurrentForm();
	  kony.automation.playback.waitFor([currFormName,"tbxSearch"],15000);
	  kony.automation.widget.touch([currFormName,"tbxSearch"], [72,22],null,[72,65]);
	
	  if(ToAccReciptent==="OwnAcc"){
	    kony.automation.textbox.enterText([currFormName,"customSearchbox","tbxSearch"],"Saving");
	    kony.automation.playback.wait(3000);
	    kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
	    kony.automation.segmentedui.scrollToRow([currFormName,"segTransactions[0,0]"]);
	
	    expect(kony.automation.widget.getWidgetProperty([currFormName,"segTransactions[0,0]","lblAccountName"], "text")).not.toBe('');
	  }else{
	    kony.automation.textbox.enterText([currFormName,"customSearchbox","tbxSearch"],ToAccReciptent);
	    kony.automation.playback.wait(3000);
	    kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
	    kony.automation.segmentedui.scrollToRow([currFormName,"segTransactions[0,0]"]);
	
	    expect(kony.automation.widget.getWidgetProperty([currFormName,"segTransactions[0,0]","lblAccountName"], "text")).not.toBe('');
	  }  
	
	  kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
	  kony.automation.segmentedui.click([currFormName,"segTransactions[0,0]"]);
	  kony.automation.playback.wait(5000);
	}
	
	function SelectTransferAccount(ToAccReciptent){
	  kony.automation.playback.wait(4000);
	  let currFormName = kony.automation.getCurrentForm();
	  let index = {"i" : 0 , "j" : 0};
	  kony.automation.playback.waitFor([currFormName,"tbxSearch"],15000);
	  kony.automation.widget.touch([currFormName,"tbxSearch"], [72,22],null,[72,65]);
	
	  if(ToAccReciptent==="OwnAcc"){
	    kony.automation.textbox.enterText([currFormName,"customSearchbox","tbxSearch"],"Saving");
	    kony.automation.playback.wait(3000);
	    kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
	    
		let  segData = kony.automation.widget.getWidgetProperty([currFormName,"segTransactions"], "data");
		index = getIndexOfAccount(segData , "Saving");
	    kony.automation.segmentedui.scrollToRow([currFormName,"segTransactions["+index.i +"," + index.j + "]"]);
	
	    expect(kony.automation.widget.getWidgetProperty([currFormName,"segTransactions["+index.i +"," + index.j + "]","lblAccountName"], "text")).not.toBe('');
	  }else{
	    kony.automation.textbox.enterText([currFormName,"customSearchbox","tbxSearch"],ToAccReciptent);
	    kony.automation.playback.wait(3000);
	    kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
	    
	    let  segData = kony.automation.widget.getWidgetProperty([currFormName,"segTransactions"], "data");
	    index = getIndexOfAccount(segData , ToAccReciptent);
	    
	    kony.automation.segmentedui.scrollToRow([currFormName,"segTransactions["+index.i +"," + index.j + "]"]);
	
	    expect(kony.automation.widget.getWidgetProperty([currFormName,"segTransactions["+index.i +"," + index.j + "]","lblAccountName"], "text")).not.toBe('');
	  }  
	
	  kony.automation.playback.waitFor([currFormName,"segTransactions"],15000);
	  kony.automation.segmentedui.click([currFormName,"segTransactions["+index.i +"," + index.j + "]"]);
	  kony.automation.playback.wait(5000);
	}
	
	function EnterAmount(Amount) {
	  kony.automation.playback.wait(3000);
	let currFormName = kony.automation.getCurrentForm();
	  kony.automation.playback.waitFor([currFormName,"keypad","btnThree"],15000);
	  for(i=0; i<Amount.length; i++){
	    kony.automation.button.click([currFormName,"keypad", getBtnID(Amount.charAt(i))]);
	  }
	  kony.automation.playback.waitFor([currFormName,"btnContinue"],15000);
	  kony.automation.button.click([currFormName,"btnContinue"]);
	  kony.automation.playback.wait(5000);
	}
	
	function SelectFrequency(ValTimePeriod) {
	  // kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	
	  // kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	  
	  kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","segDetails"],15000);
	  let segData = kony.automation.widget.getWidgetProperty(["frmEuropeVerifyTransferDetails","segDetails"], "data");
	  let index = getIndexFromSegment(segData , "Frequency");
	  kony.automation.segmentedui.click(["frmEuropeVerifyTransferDetails","segDetails[0,"+index+ "]"]);
	
	  kony.automation.playback.waitFor(["frmEuropeFrequency","segOptions"],15000);
	  switch(ValTimePeriod){
	    case "Daily":
	      kony.automation.segmentedui.click(["frmEuropeFrequency","segOptions[0,1]"]);
	      break;
	    case "Weekly":
	      kony.automation.segmentedui.click(["frmEuropeFrequency","segOptions[0,2]"]);
	      break;
	    case "HalfY":
	      kony.automation.segmentedui.click(["frmEuropeFrequency","segOptions[0,6]"]);
	      break;
	    case "Yearly":
	      kony.automation.segmentedui.click(["frmEuropeFrequency","segOptions[0,7]"]);
	      break;
	    case "QTR":
	      kony.automation.segmentedui.click(["frmEuropeFrequency","segOptions[0,5]"]);
	      break;
	    case "Monthly":
	      kony.automation.segmentedui.click(["frmEuropeFrequency","segOptions[0,4]"]);
	      break;
	  }
	
	  kony.automation.playback.wait(5000);
	}
	
	
	function SelectDateRange() {
	
	  kony.automation.playback.waitFor(["frmEuropeDuration","segOptions"],15000);
	  kony.automation.segmentedui.click(["frmEuropeDuration","segOptions[0,0]"]);
	
	  kony.automation.playback.waitFor(["frmEuropeStartDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmEuropeStartDate","customCalendar","flxNextMonth"]);
	  // :User Injected Code Snippet [//Select "Start" date - [1 lines]]
	  kony.automation.widget.touch(["frmEuropeStartDate","customCalendar","m3CopyLabel0j8ef8b8e650148"], null,null,[20,11]);
	  // :End User Injected Code Snippet {1b928f08-dcde-b4a4-8a34-66c9403263c8}
	  kony.automation.playback.waitFor(["frmEuropeEndDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmEuropeEndDate","customCalendar","flxNextMonth"]);
	  kony.automation.playback.waitFor(["frmEuropeEndDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmEuropeEndDate","customCalendar","flxNextMonth"]);
	  // :User Injected Code Snippet [//select "End" date - [3 lines]]
	  //kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0e9e5d9d7b7e84d"]);
	
	  kony.automation.widget.touch(["frmEuropeEndDate","customCalendar","m3CopyLabel0e9e5d9d7b7e84d"], null,null,[20,11]);  // :End User Injected Code Snippet {52f4e47a-c3c2-0551-1005-1c35e4be2ef7}
	  kony.automation.playback.waitFor(["frmEuropeEndDate","btnContinue"],15000);
	  kony.automation.button.click(["frmEuropeEndDate","btnContinue"]);
	
	  kony.automation.playback.wait(8000);
	}
	
	function SelectSendOnDate() {
	
	  kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","segDetails"],15000);
	  let segData = kony.automation.widget.getWidgetProperty(["frmEuropeVerifyTransferDetails","segDetails"], "data");
	  let index = getIndexFromSegment(segData , "Send On");
	  kony.automation.segmentedui.click(["frmEuropeVerifyTransferDetails","segDetails[0,"+index+ "]"]);
	
	  // Selet Start date
	   kony.automation.playback.waitFor(["frmEuropeStartDate","customCalendar","flxNextMonth"],15000);
		kony.automation.flexcontainer.click(["frmEuropeStartDate","customCalendar","flxNextMonth"]);
	  kony.automation.widget.touch(["frmEuropeStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	
	  kony.automation.playback.waitFor(["frmEuropeStartDate","btnContinue"],15000);
	  kony.automation.button.click(["frmEuropeStartDate","btnContinue"]);
	  kony.automation.playback.wait(5000);
	}
	
	function SelectOccurences() {
	
	  kony.automation.playback.waitFor(["frmMMDuration","segOptions"],15000);
	  kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,1]"]);
	
	  // Selet Start date
	  kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	  kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	
	  kony.automation.button.click(["frmMMNumberOfTransfers","keypad","btnTwo"]);
	  kony.automation.button.click(["frmMMNumberOfTransfers","btnContinue"]);
	  kony.automation.playback.wait(5000);
	
	}
	
	function EnterPaymentReference(notes) {
		kony.automation.playback.waitFor(["frmEuropeTransferReference","tbxReference"],15000);
		kony.automation.textbox.enterText(["frmEuropeTransferReference","tbxReference"],notes);
	  kony.automation.playback.waitFor(["frmEuropeTransferReference","btnContinue"],15000);
		kony.automation.button.click(["frmEuropeTransferReference","btnContinue"]);
		kony.automation.playback.wait(5000);
	}
	
	function SelectNormalDomesticPayment(){
		kony.automation.playback.waitFor(["frmEuropePaymentMedium","segOptions"],15000);
		kony.automation.segmentedui.click(["frmEuropePaymentMedium","segOptions[0,0]"]);
		kony.automation.playback.waitFor(["frmEuropeFeePayment","segOptions"],15000);
		kony.automation.segmentedui.click(["frmEuropeFeePayment","segOptions[0,0]"]);
		kony.automation.playback.wait(5000);
	}
	
	function SelectInstantDomesticPayment(){
		kony.automation.playback.waitFor(["frmEuropePaymentMedium","segOptions"],15000);
		kony.automation.segmentedui.click(["frmEuropePaymentMedium","segOptions[0,1]"]);
		kony.automation.playback.waitFor(["frmEuropeFeePayment","segOptions"],15000);
		kony.automation.segmentedui.click(["frmEuropeFeePayment","segOptions[0,0]"]);
		kony.automation.playback.wait(5000);
	}
	
	function SelectIWillPayFees(){
		kony.automation.playback.waitFor(["frmEuropeFeePayment","segOptions"],15000);
		kony.automation.segmentedui.click(["frmEuropeFeePayment","segOptions[0,0]"]);
		kony.automation.playback.wait(5000);
	}
	/**
	 * @function
	 *
	 */
	function ConfirmTransfer() {
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","flxAddIcon"],15000);
	  kony.automation.flexcontainer.click(["frmEuropeVerifyTransferDetails","flxAddIcon"]);
	  kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","btnClose"],10000);
	  kony.automation.button.click(["frmEuropeVerifyTransferDetails","btnClose"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","btnTransfer"],25000);
	  kony.automation.button.click(["frmEuropeVerifyTransferDetails","btnTransfer"]);
	  kony.automation.playback.wait(5000);
	  
	
	}
	
	function CancelTransfer(){
	
	  kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","customHeader","btnRight"],15000);
	  kony.automation.button.click(["frmEuropeVerifyTransferDetails","customHeader","btnRight"]);
	  kony.automation.playback.wait(5000);
	}
	
	function verifyBankNameInReviewScreen(fromAccount, toAccount){
		kony.automation.playback.waitFor(["frmEuropeVerifyTransferDetails","lblFromAccountValue"],15000);
	  
		fromAccount = fromAccount.substring(0,4);
		toAccount = toAccount.substring(0,4);
		
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeVerifyTransferDetails","lblFromAccountValue"], "text")).toContain(fromAccount);
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeVerifyTransferDetails","lblToAccountValue"], "text")).toContain(toAccount);
	}
	
	function verifyBankNameInAckScreen(fromAccount, toAccount){
		kony.automation.playback.wait(5000);
		kony.automation.playback.waitFor(["frmEuropeConfirmation","lblSuccessMessage"],15000);
	  
		fromAccount = fromAccount.substring(0,4);
		toAccount = toAccount.substring(0,4);
		
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,1]","lblDetails"], "text")).toContain(fromAccount);
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,2]","lblDetails"], "text")).toContain(toAccount);
	}
	
	function VerifyDataTruncated(){
		kony.automation.playback.waitFor(["frmEuropeConfirmation","segDetails"],15000);
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,0]","lblDetails"], "text")).not.toBeNull();
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,1]","lblDetails"], "text")).not.toBeNull();
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,2]","lblDetails"], "text")).not.toBeNull();
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,3]","lblDetails"], "text")).not.toBeNull();
	}
	
	function VerifySwitftCode(){
		let swiftCode = kony.automation.playback.waitFor(["frmEuropeConfirmation_1","lblSwiftCodeabc"],2000);
		let address = kony.automation.playback.waitFor(["frmEuropeConfirmation","lblAddress"],2000);
		
		if(swiftCode && address){
		expect(true).toBe(false);
		}
	}
	
	function VerifyPaymentMethod(){
		let paymentMethod = kony.automation.playback.waitFor(["frmEuropeConfirmation","segDetails[0,3]","lblTitle"],5000);
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","segDetails[0,3]","lblTitle"], "text")).not.toEqual("Payment Method");
	}
	
	function VerifyTransferSuccessMessage() {
	
		kony.automation.playback.waitFor(["frmEuropeConfirmation","lblSuccessMessage"],15000);
		expect(kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","lblSuccessMessage"], "text")).not.toBe('');
	
		kony.automation.playback.waitFor(["frmEuropeConfirmation","flxError"],5000);
		let flxError = kony.automation.widget.getWidgetProperty(["frmEuropeConfirmation","flxError"], "isVisible");
		if(flxError){
	      expect("Transaction").toBe("successful");
	      kony.automation.button.click(["frmEuropeConfirmation","btnTryAgain"]);
	      kony.automation.playback.wait(1000);	
	      kony.automation.playback.waitFor(["frmEuropeTransferFromAccount","customHeader","btnRight"],15000);
	      kony.automation.button.click(["frmEuropeTransferFromAccount","customHeader","btnRight"]);
		}
		else{
	      kony.automation.playback.waitFor(["frmEuropeConfirmation","btnDashboard"],15000);
	      kony.automation.button.click(["frmEuropeConfirmation","btnDashboard"]);
	      kony.automation.playback.wait(5000);
	    }
		VerifyAccountsDashBoard();
	}
	
	function MoveBackToLandingScreen_Transfers(){
	
		kony.automation.playback.waitFor(["frmMMTransferAmount","customHeader","btnRight"],15000);
		kony.automation.button.click(["frmMMTransferAmount","customHeader","btnRight"]);
		kony.automation.playback.wait(5000);
	    VerifyAccountsDashBoard();
	}
	
	function getRandomString(length) {
	  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	  var result = '';
	  for ( var i = 0; i < length; i++ ) {
	    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
	  }
	  return result;
	}
	
	function getBtnID(num){
	  switch(num){
	    case '0' :
	      return "btnZero";
	    case '1' :
	      return "btnOne";
	    case '2' :
	      return "btnTwo";
	    case '3' :
	      return "btnThree";
	    case '4' :
	      return "btnFour";
	    case '5' :
	      return "btnFive";
	    case '6' :
	      return "btnSix";
	    case '7' :
	      return "btnSeven";
	    case '8' :
	      return "btnEight";
	    case '9' :
	      return "btnNine";
	  }
	}
	
	function getRandomNumber(length) {
	  var randomChars = '0123456789';
	  var result = '';
	  for ( var i = 0; i < length; i++ ) {
	    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
	  }
	  return result;
	}
	
	function getIndexFromSegment(segData , val){
		for(let i=0; i < segData.length; i++){
			if(segData[i].property === val){
				return i;
			}
		}
		return 0; //default
	}
	
	function getIndexOfAccount(segData , accountName){
	  let i=0;
	  let j=0;
	  for(i=0; i<segData.length; i++){
	      if(segData[i].length > 1){
	          for(j=0; j<segData[i][1].length; j++){
	              if(segData[i][1][j].processedName.includes(accountName)){
	                  return { i, j};
	              }
	          }
	      }
	  }
	  return {i,j };
	}
	
	
	// Previous Functions- Commenting
	
	// function SearchInFromAndToScreen(valType) {
	
	//   try{
	
	
	//     var currentwidget1 = kony.automation.widget.getWidgetProperty(["frmLogout","btnLogIn"], "text");
	//     kony.print("The current Form Name ::"+currentwidget1);
	//     if(currentwidget1 === "Sign In"){
	
	//       kony.automation.button.click(["frmLogout","btnLogIn"]);
	//       kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
	//       kony.automation.textbox.enterText(["frmLogin","login","tbxUsername"],"dbxJasmine1234");
	//       kony.automation.textbox.enterText(["frmLogin","login","tbxPassword"],"Kony@1234");
	//       kony.automation.button.click(["frmLogin","login","btnLogIn"]);
	//       kony.automation.playback.wait(25000);
	//     }    
	
	//   }catch(err){
	//     kony.print("Unable to find widget");
	//   }
	//   //kony.automation.playback.wait(25000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	//   kony.automation.playback.wait(8000);
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"],15000);
	//   kony.automation.widget.touch(["frmMMTransferFromAccount","tbxSearch"], null,null,null);
	//   kony.automation.textbox.enterText(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],"check");
	//   //Kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	//   // :User Injected Code Snippet [//Expect Checking Account - [2 lines]]
	//   //var checkingAcc = ;
	//   expect(kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount","segTransactions[0,0]","lblAccountName"], "text")).not.toBe(null);
	//   // :End User Injected Code Snippet {391e3878-1a4a-6cd5-312f-c42e3dc249f3}
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	//   kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"]);
	//   kony.automation.widget.touch(["frmMMTransferToAccount","tbxSearch"], [72,22],null,[72,65]);
	//   if(valType==="normal"){
	//     kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"credit");
	//   }else{
	//     kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"PToPRecipient");
	//   }  
	//   kony.automation.playback.wait(1000);
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
	//   kony.automation.segmentedui.scrollToRow(["frmMMTransferToAccount","segTransactions[0,0]"]);
	//   var creditCard = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount","segTransactions[0,0]","lblAccountName"],"text");
	
	//   expect(creditCard).not.toBe(null);
	
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],10000);
	//   kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[0,0]"]);
	// }
	
	
	// // function EnterAmount() {
	// //   kony.automation.playback.wait(5000);
	// //   kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnThree"],10000);
	// //   kony.automation.button.click(["frmMMTransferAmount","keypad","btnThree"]);
	// //   kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	// //   kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	// //   kony.automation.button.click(["frmMMTransferAmount","btnContinue"]);
	// //   kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],10000);
	// // }
	
	
	// function SelectFrequencyOnceAndTransfer() {
	
	//   kony.automation.playback.waitFor(["frmMMReview","segDetails"],10000);
	//   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	//   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMStartDate","btnContinue"],15000);
	//   kony.automation.button.click(["frmMMStartDate","btnContinue"]);
	//   kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],15000);
	//   kony.automation.button.click(["frmMMReview","btnTransfer"]);
	//   expect(kony.automation.playback.waitFor(["frmMMConfirmation","lblSuccessMessage"],20000)).toEqual(true);
	//   kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	// }
	
	
	// function TransferScheduleOnce() {
	//   // :User Injected Code Snippet [//Prerequisite Verify_Search_In_FromAndToScreen - []]
	
	//   // :End User Injected Code Snippet {0d4c824b-a9ad-8c0e-5c44-a3292aac96a1}
	//   kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnThree"],10000);
	//   kony.automation.button.click(["frmMMTransferAmount","keypad","btnThree"]);
	//   kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	//   kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	//   kony.automation.button.click(["frmMMTransferAmount","btnContinue"]);
	//   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	//   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	//   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
	//   kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	//   // :User Injected Code Snippet [//Select a date - [3 lines]]
	//   kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
	//   kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxNextMonth"], [178,125],null,[178,125]);
	//   kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	//   // :End User Injected Code Snippet {414f83d0-e0a2-735c-c437-a564878872a6}
	//   kony.automation.playback.waitFor(["frmMMStartDate","btnContinue"],15000);
	//   kony.automation.button.click(["frmMMStartDate","btnContinue"]);
	//   kony.automation.playback.waitFor(["frmMMReview","btnTransfer"]);
	//   kony.automation.button.click(["frmMMReview","btnTransfer"]);
	//   expect(kony.automation.playback.waitFor(["frmMMConfirmation","btnToAccount"],10000)).toContain(true);
	//   kony.automation.button.click(["frmMMConfirmation","btnToAccount"]);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	// }
	
	// function SelectNumberOfTransfersAndThenConfirmTransfer(valTimePeriod,valueType) {
	//   kony.automation.playback.waitFor(["frmMMDuration","segOptions"],10000);
	//   kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,1]"]);
	//   kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
	//   kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	//   // :User Injected Code Snippet [//Select a Start Date - [1 lines]]
	//   kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	//   // :End User Injected Code Snippet {83f58aab-137d-4051-a051-d2801329c71d}
	//   kony.automation.playback.waitFor(["frmMMNumberOfTransfers","keypad","btnFive"],15000);
	//   kony.automation.button.click(["frmMMNumberOfTransfers","keypad","btnFive"]);
	//   kony.automation.playback.waitFor(["frmMMNumberOfTransfers","btnContinue"],15000);
	//   kony.automation.button.click(["frmMMNumberOfTransfers","btnContinue"]);
	//   kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],15000);
	//   kony.automation.button.click(["frmMMReview","btnTransfer"]);
	//   expect(kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"],10000)).toBe(true);
	//   kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	// }
	
	
	// function ScheduledTransferDailyDateRange() {
	//   kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnThree"],10000);
	//   kony.automation.button.click(["frmMMTransferAmount","keypad","btnThree"]);
	//   kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	//   kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	//   kony.automation.playback.waitFor(["frmMMTransferAmount","btnContinue"],15000);
	//   kony.automation.button.click(["frmMMTransferAmount","btnContinue"]);
	//   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	//   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	//   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,1]"]);
	//   kony.automation.playback.waitFor(["frmMMDuration","segOptions"],15000);
	//   kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
	//   kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	//   // :User Injected Code Snippet [//Select "Start" date - [1 lines]]
	//   kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	//   // :End User Injected Code Snippet {1b928f08-dcde-b4a4-8a34-66c9403263c8}
	//   kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
	//   kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	//   kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
	//   kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	//   // :User Injected Code Snippet [//select "End" date - [3 lines]]
	//   //kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
	
	//   kony.automation.widget.touch(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	//   // :End User Injected Code Snippet {52f4e47a-c3c2-0551-1005-1c35e4be2ef7}
	//   kony.automation.playback.waitFor(["frmMMEndDate","btnContinue"],15000);
	//   kony.automation.button.click(["frmMMEndDate","btnContinue"]);
	//   kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],15000);
	//   kony.automation.button.click(["frmMMReview","btnTransfer"]);
	//   kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"],15000);
	//   kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","lblLocateUs"],10000);
	// }
	
	
	
	// function SearchP2PInFromAndToScreen() {
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],10000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.playback.wait(2000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"],15000);
	//   kony.automation.widget.touch(["frmMMTransferFromAccount","tbxSearch"], [100,13],null,[100,56]);
	//   kony.automation.textbox.enterText(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],"checki");
	//   kony.automation.playback.wait(1000);
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	//   // :User Injected Code Snippet [//Expect Checking Account - [2 lines]]
	//   //var checkingAcc = ;
	//   expect(kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount","segTransactions[0,0]","lblAccountName"], "text")).toContain("Check");
	//   // :End User Injected Code Snippet {391e3878-1a4a-6cd5-312f-c42e3dc249f3}
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	//   kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"],15000);
	//   kony.automation.widget.touch(["frmMMTransferToAccount","tbxSearch"], [72,22],null,[72,65]);
	//   kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"P2P");
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
	//   // :User Injected Code Snippet [//Expect P2P recipient - [2 lines]]
	//   var creditCard = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount","segTransactions[0,0]","lblAccountName"],"text");
	//   expect(creditCard).not.toBe(null);
	//   // :End User Injected Code Snippet {2875156c-0fc0-2414-6f01-69c86f59b306}
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],10000);
	//   kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[0,0]"]);
	// }
	
	// function SearchSameBankInFromAndToScreen() {
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],10000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"],15000);
	//   kony.automation.widget.touch(["frmMMTransferFromAccount","tbxSearch"], [100,13],null,[100,56]);
	//   kony.automation.textbox.enterText(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],"checki");
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	//   // :User Injected Code Snippet [//Expect Checking Account - [2 lines]]
	//   //var checkingAcc = ;
	//   expect(kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount","segTransactions[0,0]","lblAccountName"], "text")).not.toBe(null);
	//   // :End User Injected Code Snippet {391e3878-1a4a-6cd5-312f-c42e3dc249f3}
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	//   kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"],15000);
	//   kony.automation.widget.touch(["frmMMTransferToAccount","tbxSearch"], [72,22],null,[72,65]);
	//   kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"samebank2");
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
	//   // :User Injected Code Snippet [//Expect Credit Card - [2 lines]]
	//   var creditCard = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount","segTransactions[0,0]","lblAccountName"],"text");
	//   expect(creditCard).not.toBe(null);
	//   // :End User Injected Code Snippet {2875156c-0fc0-2414-6f01-69c86f59b306}
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],10000);
	//   kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[0,0]"]);
	// }
	
	
	
	// function SelectDateRangeAndConfirmTransfer(ValTimePeriod, valueType) {
	//   //write your automation code here
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmMMDuration","segOptions[0,0]"],10000);
	//   kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
	//   kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	//   // :User Injected Code Snippet [//Select "Start" date - [1 lines]]
	//   kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	//   // :End User Injected Code Snippet {1b928f08-dcde-b4a4-8a34-66c9403263c8}
	//   kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	//   kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
	//   kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	//   // :User Injected Code Snippet [//select "End" date - [3 lines]]
	//   // kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
	
	//   kony.automation.widget.touch(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	//   // :End User Injected Code Snippet {52f4e47a-c3c2-0551-1005-1c35e4be2ef7}
	//   kony.automation.playback.waitFor(["frmMMEndDate","btnContinue"],15000);
	//   kony.automation.button.click(["frmMMEndDate","btnContinue"]);
	//   kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],10000);
	//   kony.automation.button.click(["frmMMReview","btnTransfer"]);
	//   try{
	//     kony.automation.playback.wait(10000);
	//     var errorMsg1 = kony.automation.widget.getWidgetProperty(["frmMMConfirmation","btnNewTransfer"], "text");
	
	//     if(errorMsg1==="New Transfer"){
	//       kony.print("Error::Inside New Transfer");
	//       kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"],15000);
	//       kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	
	//     }else{
	//       kony.print("***********************");
	//       //       var lblMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblMessage"], "text");
	//       // 		var lblSuccessMessage = kony.automation.widget.getWidgetProperty(["frmMMConfirmation", "lblSuccessMessage"], "text");
	
	//       // 		expect(lblMessage.toLowerCase()).toContain("success");
	//       // 		expect(lblSuccessMessage.toLowerCase()).toContain("success");
	
	//       var tempB=kony.automation.widget.getWidgetProperty(["frmMMConfirmation","lblMessage"], "text");
	//       kony.print("TeLL Me the Value :"+tempB);
	//       expect(tempB).toContain("Successfully Scheduled Transfer");
	//       kony.automation.playback.waitFor(["frmMMConfirmation","btnToAccount"],15000);
	//       kony.automation.button.click(["frmMMConfirmation","btnToAccount"]);
	//     }
	
	//   }catch(err){
	//     kony.print("Error::Unable to find element");
	
	//     try{
	//       kony.automation.playback.wait(10000);
	//       var currentwidget1 = kony.automation.widget.getWidgetProperty(["frmLogout","btnLogIn"], "text");
	//       kony.print("The current Form Name ::"+currentwidget1);
	//       if(currentwidget1 === "Sign In"){
	
	//         kony.automation.button.click(["frmLogout","btnLogIn"]);
	//         kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
	//         kony.automation.textbox.enterText(["frmLogin","login","tbxUsername"],"dbxJasmine1234");
	//         kony.automation.textbox.enterText(["frmLogin","login","tbxPassword"],"Kony@1234");
	//         kony.automation.button.click(["frmLogin","login","btnLogIn"]);
	//         kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],5000);
	//         /***********************************/
	
	//         //ValTimePeriod, ValueType
	//         SearchInFromAndToScreen(valueType);
	//         EnterAmount();
	//         SelectFrequency(ValTimePeriod);
	//         SelectDateRangeAndConfirmTransfer(ValTimePeriod, valueType);
	
	//       }     
	
	//     }catch(err1){
	//       kony.print("Error::"+err1.message);
	//     }
	//   }
	//   kony.automation.playback.wait(10000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	// }
	
	
	// // function SelectFrequencyDaily() {
	// //   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	// //   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	// //   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	// //   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,1]"]);
	// // }
	
	// // function SelectFrequencyHalfYearly() {
	// //   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	// //   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	// //   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	// //   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,6]"]);
	// // }
	
	
	// // function SelectFrequencyMonthly() {
	// //   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	// //   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	// //   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	// //   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,4]"]);
	// // }
	
	// // function SelectFrequencyQuarterly() {
	// //   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	// //   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	// //   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	// //   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,5]"]);
	// // }
	
	// // function SelectFrequencyWeekly() {
	// //   kony.automation.playback.waitFor(["frmMMReview","segDetails"]);
	// //   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	// //   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"]);
	// //   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,2]"]);
	// // }
	
	
	// // function SelectFrequencyYearly() {
	// //   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	// //   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	// //   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	// //   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,7]"]);
	// // }
	
	// function OpenManageRecipientP2P() {
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.playback.wait(2000);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,4]"]);
	//   kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"],15000);
	//   kony.automation.playback.wait(2000);
	//   kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[1,0]"]);
	//   kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"],15000);
	// }
	
	
	// function SearchP2PInFromAndToScreen() {
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.wait(2000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"],15000);
	//   kony.automation.widget.touch(["frmMMTransferFromAccount","tbxSearch"], [100,13],null,[100,56]);
	//   kony.automation.textbox.enterText(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],"checki");
	//   kony.automation.playback.wait(1000);
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	//   // :User Injected Code Snippet [//Expect Checking Account - [2 lines]]
	//   //var checkingAcc = ;
	//   expect(kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount","segTransactions[0,0]","lblAccountName"], "text")).not.toBe(null);
	//   // :End User Injected Code Snippet {391e3878-1a4a-6cd5-312f-c42e3dc249f3}
	//   kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	//   kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"],15000);
	//   kony.automation.widget.touch(["frmMMTransferToAccount","tbxSearch"], [72,22],null,[72,65]);
	//   kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"P2P");
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
	//   // :User Injected Code Snippet [//Expect P2P recipient - [2 lines]]
	//   var creditCard = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount","segTransactions[0,0]]","flxAccountsNoImageTransfers","flxMain","flxAccountName","lblAccountName"],"text");
	//   expect(creditCard).not.toBe(null);
	//   // :End User Injected Code Snippet {2875156c-0fc0-2414-6f01-69c86f59b306}
	//   kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
	//   kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[0,0]"]);
	// }
	
	// function GoBackToDB() {
	//   kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"],10000);
	//   kony.automation.playback.waitFor(["frmManageRecipientList","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmManageRecipientList","customHeader","flxBack"]);
	//   kony.automation.playback.waitFor(["frmManageRecipientType","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmManageRecipientType","customHeader","flxBack"]);
	
	// }
	
	// function Logout() {
	//   kony.automation.playback.wait(25000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.wait(3000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxLogout"],5000);
	//   kony.automation.widget.touch(["frmUnifiedDashboard","Hamburger","flxLogout"], null,null,[34,28]);
	//   kony.automation.playback.waitFor(["frmLogout","btnLogIn"],10000);
	//   kony.automation.button.click(["frmLogout","btnLogIn"]);
	//   kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
	// }
	
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
});