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
    kony.automation.playback.wait(5000);
  }else{
    expect(menuIndex).toBeGreaterThan(-1);
  }
}


