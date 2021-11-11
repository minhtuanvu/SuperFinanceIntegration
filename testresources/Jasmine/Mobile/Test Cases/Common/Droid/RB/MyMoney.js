function NavigateToMyMoney(){

//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
//   kony.automation.playback.wait(5000);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
//   kony.automation.scrollToWidget(["frmUnifiedDashboard","Hamburger","segHamburger"]);
//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,12]"]);
//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,12]"]);
//   kony.automation.playback.wait(5000);
  openMenu("My Money");
  kony.automation.playback.waitFor(["frmPFMMyMoney","customHeader","lblLocateUs"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmPFMMyMoney","customHeader","lblLocateUs"], "text")).not.toBe('');

}

function ClickonViewAllTranxButton(){

  kony.automation.playback.waitFor(["frmPFMMyMoney","btnViewTransactions"],15000);
  kony.automation.button.click(["frmPFMMyMoney","btnViewTransactions"]);
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","customHeader","lblLocateUs"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmPFMCategorisedTransactions","customHeader","lblLocateUs"], "text")).not.toBe('');
}

function VerifyMyMoneyViewAllTranscation(){

  ClickonViewAllTranxButton();

  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","lblSelectedType"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmPFMCategorisedTransactions","lblSelectedType"], "text")).not.toBe('');

  // Move Back from View All
  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmPFMCategorisedTransactions","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);

  MoveBackFromMyMoney();

}

function MoveBackFromMyMoney(){

  // MoveBack from MyMoney
  kony.automation.playback.waitFor(["frmPFMMyMoney","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmPFMMyMoney","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmPFMMyMoney","Hamburger","segHamburger"],15000);
  kony.automation.segmentedui.click(["frmPFMMyMoney","Hamburger","segHamburger[0,0]"]);
  kony.automation.playback.wait(5000);
}

function VerifyMymoneySearchTranscation(){

  ClickonViewAllTranxButton();
  
  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","tbxSearch"],15000);
  kony.automation.textbox.enterText(["frmPFMCategorisedTransactions","tbxSearch"],"Spent");
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","segTransactions"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmPFMCategorisedTransactions","segTransactions[0,0]","lblTransaction"], "text")).toContain("Spent");

  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmPFMCategorisedTransactions","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);

  MoveBackFromMyMoney();

}

function MoveBackfromMyMoneyTranscationDetails(){

  kony.automation.playback.waitFor(["frmPFMTransactionDetails","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmPFMTransactionDetails","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);

  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmPFMCategorisedTransactions","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);

  MoveBackFromMyMoney();
}

function ClickonMymoneyFirstTranscation(){
  
  kony.automation.playback.waitFor(["frmPFMCategorisedTransactions","segTransactions"],15000);
  kony.automation.segmentedui.click(["frmPFMCategorisedTransactions","segTransactions[0,0]"]);
  kony.automation.playback.wait(5000);
}
function VerifyMyMoneyTranscationDetails(){

  ClickonViewAllTranxButton();
  ClickonMymoneyFirstTranscation();
  
  kony.automation.playback.waitFor(["frmPFMTransactionDetails","customHeader","lblLocateUs"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmPFMTransactionDetails","customHeader","lblLocateUs"], "text")).not.toBe();

  MoveBackfromMyMoneyTranscationDetails();

}

function VerifyEditMyMoneyTranscationDetails(){

  ClickonViewAllTranxButton();
  ClickonMymoneyFirstTranscation();
 
  kony.automation.playback.waitFor(["frmPFMTransactionDetails","customHeader","btnRight"],15000);
  kony.automation.button.click(["frmPFMTransactionDetails","customHeader","btnRight"]);
  kony.automation.playback.waitFor(["frmPFMTransactionDetails","flxOption2"],15000);
  kony.automation.flexcontainer.click(["frmPFMTransactionDetails","flxOption2"]);
  kony.automation.playback.waitFor(["frmPFMNote","txtNote"],15000);
  kony.automation.textarea.enterText(["frmPFMNote","txtNote"],"Jasmine");
  kony.automation.playback.waitFor(["frmPFMNote","btnSave"],15000);
  kony.automation.button.click(["frmPFMNote","btnSave"]);
  kony.automation.playback.wait(5000);

  MoveBackfromMyMoneyTranscationDetails();


}