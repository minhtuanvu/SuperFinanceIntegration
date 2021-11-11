function navigateToTransferActivities(){

//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
//   kony.automation.playback.wait(5000);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
//   kony.automation.scrollToWidget(["frmUnifiedDashboard","Hamburger","segHamburger"]);
//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,3]"]);
//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,3]"]);
//   kony.automation.playback.wait(10000);
  
  openMenu("Manage Transactions");
  
  kony.automation.playback.waitFor(["frmTransferActivitiesTransfers","customHeader","lblLocateUs"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmTransferActivitiesTransfers","customHeader","lblLocateUs"], "text")).not.toBe('');
}

function VerifyTransferUnderActivities(RecipientName){

  kony.automation.playback.waitFor(["frmTransferActivitiesTransfers","SearchAndFilter","txtSearchBox"],15000);
  kony.automation.textbox.enterText(["frmTransferActivitiesTransfers","SearchAndFilter","txtSearchBox"],RecipientName);
  kony.automation.playback.wait(5000);

  var NoResult=kony.automation.playback.waitFor(["frmTransferActivitiesTransfers","TransfersListMobileNative","lblNoRecords"],15000);
  if(NoResult){
    expect(kony.automation.widget.getWidgetProperty(["frmTransferActivitiesTransfers","TransfersListMobileNative","lblNoRecords"], "text")).toContain('No Search Result');
  }else{
    kony.automation.playback.waitFor(["frmTransferActivitiesTransfers","TransfersListMobileNative","segTransfersList"],15000);
    expect(kony.automation.widget.getWidgetProperty(["frmTransferActivitiesTransfers","TransfersListMobileNative","segTransfersList[0,0]","lblField1"], "text")).not.toBe('');
  }
}

function MoveBackFromTransferActivities(){

  kony.automation.playback.waitFor(["frmTransferActivitiesTransfers","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmTransferActivitiesTransfers","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);
}

function VerifyPostedTranscationDetails(){

  var Posted=kony.automation.playback.waitFor(["frmTransferActivitiesTransfers","TransfersListMobileNative","segTransfersList"],15000);

  if(Posted){
    kony.automation.segmentedui.click(["frmTransferActivitiesTransfers","TransfersListMobileNative","segTransfersList[0,0]"]);
    kony.automation.playback.wait(5000);
    kony.automation.playback.waitFor(["frmTransfersDetails","customHeader","lblLocateUs"],15000);
    expect(kony.automation.widget.getWidgetProperty(["frmTransfersDetails","customHeader","lblLocateUs"], "text")).not.toBe('');

    kony.automation.playback.waitFor(["frmTransfersDetails","customHeader","flxBack"],15000);
    kony.automation.flexcontainer.click(["frmTransfersDetails","customHeader","flxBack"]);
    kony.automation.playback.wait(5000);

    MoveBackFromTransferActivities();
    
  }else{
    kony.print('No Posted Transcations available');
    MoveBackFromTransferActivities();
  }

}

function VerifySheduledTranscationDetails(){

  kony.automation.playback.waitFor(["frmTransferActivitiesTransfers","tabs","btnTab2"],15000);
  kony.automation.button.click(["frmTransferActivitiesTransfers","tabs","btnTab2"]);
  kony.automation.playback.wait(5000);

  var Sheduled=kony.automation.playback.waitFor(["frmTransferActivitiesRecurring","TransfersListMobileNative","segTransfersList"],15000);
  if(Sheduled){

    kony.automation.segmentedui.click(["frmTransferActivitiesRecurring","TransfersListMobileNative","segTransfersList[0,0]"]);
    kony.automation.playback.wait(5000);
    kony.automation.playback.waitFor(["frmRecurringDetails","customHeader","lblLocateUs"],15000);
    expect(kony.automation.widget.getWidgetProperty(["frmRecurringDetails","customHeader","lblLocateUs"], "text")).not.toBe('');
    kony.automation.playback.waitFor(["frmRecurringDetails","customHeader","flxBack"],15000);
    kony.automation.flexcontainer.click(["frmRecurringDetails","customHeader","flxBack"]);
    kony.automation.playback.wait(5000);

  }else{
    kony.print('No Sheduled Transcations available');
    kony.automation.playback.waitFor(["frmTransferActivitiesRecurring","customHeader","flxBack"],15000);
    kony.automation.flexcontainer.click(["frmTransferActivitiesRecurring","customHeader","flxBack"]);
    kony.automation.playback.wait(5000);
  }

}

