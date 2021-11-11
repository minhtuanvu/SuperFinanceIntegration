function NavigateToManageRecipitents() {

//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
//   kony.automation.playback.wait(5000);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,4]"]);
//   kony.automation.playback.wait(5000);
  openMenu("Manage Beneficiaries");
}

function MoveBacktoDashboard_ManageRecipitent(){

}

function SelectExternalAccount(){

  kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"],15000);
  kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[0,1]"]);
}
function SelectInfinityAccount(){

  kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"],15000);
  kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[0,0]"]);
}
function SelectInternationalAccount(){

  kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"],15000);
  kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[0,2]"]);
}
function SelectP2PAccount(){

  kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"],15000);
  kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[1,0]"]);
}
function clickonAddExternalAccounttab(){

  SelectExternalAccount();
  ClickAddAccountButton();

}

function clickonAddinfinityBankAccounttab(){

  SelectInfinityAccount();
  ClickAddAccountButton();
}

function clickonAddInternationalAccounttab(){

  SelectInternationalAccount();
  ClickAddAccountButton();
}

function clickonAddP2PAccounttab(){

  SelectP2PAccount();
  ClickAddAccountButton();
}

function ClickAddAccountButton(){
  kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"],15000);
  kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);
  kony.automation.playback.wait(5000);
}

function enterExternalBankAccountDetails(Routingno,Accno,unique_RecipitentName){

  kony.print("Intiated method to add enterExternalBankAccountDetails");

  // Enter Routing number
  for(i=0; i<Routingno.length; i++){
    kony.automation.button.click(["frmAddBenRoutNo","keypad", getBtnID(Routingno.charAt(i))]);
  }
  kony.automation.playback.waitFor(["frmAddBenRoutNo","btnContinue"],15000);
  kony.automation.button.click(["frmAddBenRoutNo","btnContinue"]);

  // Enter Account number
  for(i=0; i<Accno.length; i++){
    kony.automation.button.click(["frmEnterBenAccNo","keypad", getBtnID(Accno.charAt(i))]);
  }
  kony.automation.playback.waitFor(["frmEnterBenAccNo","btnContinue"],15000);
  kony.automation.button.click(["frmEnterBenAccNo","btnContinue"]);

  // ReEnter account Name
  for(i=0; i<Accno.length; i++){
    kony.automation.button.click(["frmReEnterBenAccNo","keypad", getBtnID(Accno.charAt(i))]);
  }
  kony.automation.playback.waitFor(["frmReEnterBenAccNo","btnContinue"],15000);
  kony.automation.button.click(["frmReEnterBenAccNo","btnContinue"]);

  // Enter Recipient Name
  kony.automation.playback.waitFor(["frmBenName","txtRecipientName"],15000);
  kony.automation.textbox.enterText(["frmBenName","txtRecipientName"],unique_RecipitentName);
  kony.automation.playback.waitFor(["frmBenName","btnContinue"],15000);
  kony.automation.button.click(["frmBenName","btnContinue"]);

  linkReciptent();
}

function enterInternationalBankAccountDetails(swiftCode,Accno,unique_RecipitentName){

  kony.automation.playback.waitFor(["frmBenSwiftCode","txtSwiftCode"],15000);
  kony.automation.textbox.enterText(["frmBenSwiftCode","txtSwiftCode"],swiftCode);
  kony.automation.playback.waitFor(["frmBenSwiftCode","btnContinue"],15000);
  kony.automation.button.click(["frmBenSwiftCode","btnContinue"]);

  kony.automation.playback.waitFor(["frmEnterBenAccNumorIBAN","tbxAccountNumber"],15000);
  kony.automation.textbox.enterText(["frmEnterBenAccNumorIBAN","tbxAccountNumber"],Accno);
  kony.automation.playback.waitFor(["frmEnterBenAccNumorIBAN","btnContinue"],15000);
  kony.automation.button.click(["frmEnterBenAccNumorIBAN","btnContinue"]);

  kony.automation.playback.waitFor(["frmReEnterBenAccNumorIBAN","tbxReEnteredAccountNumber"],15000);
  kony.automation.textbox.enterText(["frmReEnterBenAccNumorIBAN","tbxReEnteredAccountNumber"],Accno);
  kony.automation.playback.waitFor(["frmReEnterBenAccNumorIBAN","btnContinue"],15000);
  kony.automation.button.click(["frmReEnterBenAccNumorIBAN","btnContinue"]);

  kony.automation.playback.waitFor(["frmBenName","txtRecipientName"],15000);
  kony.automation.textbox.enterText(["frmBenName","txtRecipientName"],unique_RecipitentName);
  kony.automation.playback.waitFor(["frmBenName","btnContinue"],15000);
  kony.automation.button.click(["frmBenName","btnContinue"]);

  linkReciptent();
}

function enterSameBankAccountDetails(Accno,unique_RecipitentName){

  // Enter Account number
  for(i=0; i<Accno.length; i++){
    kony.automation.button.click(["frmEnterBenAccNo","keypad", getBtnID(Accno.charAt(i))]);
  }
  kony.automation.playback.waitFor(["frmEnterBenAccNo","btnContinue"],15000);
  kony.automation.button.click(["frmEnterBenAccNo","btnContinue"]);

  // ReEnter account Name
  for(i=0; i<Accno.length; i++){
    kony.automation.button.click(["frmReEnterBenAccNo","keypad", getBtnID(Accno.charAt(i))]);
  }
  kony.automation.playback.waitFor(["frmReEnterBenAccNo","btnContinue"],15000);
  kony.automation.button.click(["frmReEnterBenAccNo","btnContinue"]);

  // Enter Recipient Name
  kony.automation.playback.waitFor(["frmBenName","txtRecipientName"],15000);
  kony.automation.textbox.enterText(["frmBenName","txtRecipientName"],unique_RecipitentName);
  kony.automation.playback.waitFor(["frmBenName","btnContinue"],15000);
  kony.automation.button.click(["frmBenName","btnContinue"]);

  linkReciptent();
}

function enterP2PAccountDetails_Email(unique_RecipitentName,email){

  kony.automation.playback.waitFor(["frmRegP2PContactType","btnEmail"],15000);
  kony.automation.button.click(["frmRegP2PContactType","btnEmail"]);
  kony.automation.playback.waitFor(["frmP2PRecEmail","txtEmailId"],15000);
  kony.automation.textbox.enterText(["frmP2PRecEmail","txtEmailId"],email);
  kony.automation.playback.waitFor(["frmP2PRecEmail","btnContinue"],15000);
  kony.automation.button.click(["frmP2PRecEmail","btnContinue"]);
  kony.automation.playback.waitFor(["frmP2PRecipientName","txtRecipientName"],15000);
  kony.automation.textbox.enterText(["frmP2PRecipientName","txtRecipientName"],unique_RecipitentName);
  kony.automation.playback.waitFor(["frmP2PRecipientName","btnContinue"],15000);
  kony.automation.button.click(["frmP2PRecipientName","btnContinue"]);

  kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"],15000);
  kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
  kony.automation.playback.waitFor(["frmContracts","btnContinue"],15000);
  kony.automation.button.click(["frmContracts","btnContinue"]);

  kony.automation.playback.waitFor(["frmP2PVerifyDetails","btnContinue"],15000);
  kony.automation.button.click(["frmP2PVerifyDetails","btnContinue"]);
}

function enterP2PAccountDetails_MobileNumber(unique_RecipitentName,phno){

  kony.automation.playback.waitFor(["frmRegP2PContactType","btnPhoneNumber"],15000);
  kony.automation.button.click(["frmRegP2PContactType","btnPhoneNumber"]);

  kony.automation.playback.waitFor(["frmP2PRecPhoneNo"],15000);
  // Enter Phone number
  for(i=0; i<phno.length; i++){
    kony.automation.button.click(["frmP2PRecPhoneNo","keypad", getBtnID(phno.charAt(i))]);
  }
  kony.automation.playback.waitFor(["frmP2PRecPhoneNo","btnContinue"],15000);
  kony.automation.button.click(["frmP2PRecPhoneNo","btnContinue"]);

  kony.automation.playback.waitFor(["frmP2PRecipientName","txtRecipientName"],15000);
  kony.automation.textbox.enterText(["frmP2PRecipientName","txtRecipientName"],"PTOPAccJasmine");
  kony.automation.playback.waitFor(["frmP2PRecipientName","btnContinue"],15000);
  kony.automation.button.click(["frmP2PRecipientName","btnContinue"]);
  kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"],15000);
  kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
  kony.automation.playback.waitFor(["frmContracts","btnContinue"],15000);
  kony.automation.button.click(["frmContracts","btnContinue"]);

  kony.automation.playback.waitFor(["frmP2PVerifyDetails","btnContinue"],15000);
  kony.automation.button.click(["frmP2PVerifyDetails","btnContinue"]);

}

function linkReciptent(){

  kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"],15000);
  kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
  expect(kony.automation.widget.getWidgetProperty(["frmContracts","customHeader","lblLocateUs"], "text")).not.toBe('');
  kony.automation.playback.waitFor(["frmContracts","btnContinue"],15000);
  kony.automation.button.click(["frmContracts","btnContinue"]);

  kony.automation.playback.waitFor(["frmBenVerifyDetails","btnContinue"],15000);
  kony.automation.button.click(["frmBenVerifyDetails","btnContinue"]);
  kony.automation.playback.wait(5000);

}

function verifyAddingNewReciptientSuccessMsg(){

  var Success=kony.automation.playback.waitFor(["frmAcknowledgement","lblSuccessMessage"],15000);
  if(Success){

    kony.automation.playback.waitFor(["frmAcknowledgement","lblSuccessMessage"],15000);
    expect(kony.automation.widget.getWidgetProperty(["frmAcknowledgement","lblSuccessMessage"], "text")).not.toBe('');
    kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"],15000);
    kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
    kony.automation.playback.wait(5000);
  }else{

    kony.automation.playback.waitFor(["frmAcknowledgement","btnTryAgain"],15000);
    kony.automation.button.click(["frmAcknowledgement","btnTryAgain"]);
    kony.automation.playback.waitFor(["frmManageRecipientList","customHeader","flxBack"],15000);
    kony.automation.flexcontainer.click(["frmManageRecipientList","customHeader","flxBack"]);
    kony.automation.playback.waitFor(["frmManageRecipientType","customHeader","flxBack"],15000);
    kony.automation.flexcontainer.click(["frmManageRecipientType","customHeader","flxBack"]);
  }

}


function VerifyRecipientList(){

  kony.automation.playback.waitFor(["frmManageRecipientList","customHeader","lblLocateUs"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmManageRecipientList","customHeader","lblLocateUs"], "text")).not.toBe('');

  MoveBackfromRecipientList();

}

function CancelSearchRecipient(){

  kony.automation.playback.waitFor(["frmManageRecipientList","customSearchbox","btnCancel"],15000);
  kony.automation.button.click(["frmManageRecipientList","customSearchbox","btnCancel"]);
}

function MoveBackfromRecipientList(){

  // MoveBack to DashBoard
  kony.automation.playback.waitFor(["frmManageRecipientList","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmManageRecipientList","customHeader","flxBack"]);
  kony.automation.playback.waitFor(["frmManageRecipientType","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmManageRecipientType","customHeader","flxBack"]);
}
function SearchforPayee_External(payeeName){

  // Search for Recipient
  kony.automation.playback.waitFor(["frmManageRecipientList","tbxSearch"],15000);
  kony.automation.widget.touch(["frmManageRecipientList","tbxSearch"], [87,24],null,null);
  kony.automation.playback.waitFor(["frmManageRecipientList","customSearchbox","tbxSearch"],15000);
  kony.automation.textbox.enterText(["frmManageRecipientList","customSearchbox","tbxSearch"],payeeName);
  kony.automation.playback.wait(5000);
  expect(kony.automation.widget.getWidgetProperty(["frmManageRecipientList","segRecipients[0,0]","flxcontent"], "text")).not.toBe('');
}

function DeleteReciptent(){

  kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"],15000);
  kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);
  kony.automation.playback.waitFor(["frmManageTransferRecipient","customHeader","flxSearch"],15000);
  kony.automation.flexcontainer.click(["frmManageTransferRecipient","customHeader","flxSearch"]);
  kony.automation.playback.waitFor(["frmManageTransferRecipientInfo","customHeader","btnRight"],15000);
  kony.automation.button.click(["frmManageTransferRecipientInfo","customHeader","btnRight"]);

  kony.automation.button.click(["frmManageTransferRecipientInfo","btnDeleteRecipient"]);
  kony.automation.alert.click(0);
  kony.automation.playback.waitFor(["frmManageRecipientList","customHeader","lblLocateUs"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmManageRecipientList","customHeader","lblLocateUs"], "text")).not.toBe('');
}

function DeletePTOPReciptent(){

  kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"],15000);
  kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);

  kony.automation.playback.waitFor(["frmManageP2pRecipient","btnDeleteRecipient"],15000);
  kony.automation.button.click(["frmManageP2pRecipient","btnDeleteRecipient"]);
  kony.automation.alert.click(0);
  kony.automation.playback.waitFor(["frmManageRecipientList","customHeader","lblLocateUs"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmManageRecipientList","customHeader","lblLocateUs"], "text")).not.toBe('');
}

function EditReciptent(UniqueUpdatedNickName){

  //Update Recipient
  kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"],15000);
  kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);
  kony.automation.playback.waitFor(["frmManageTransferRecipient","customHeader","flxSearch"],15000);
  kony.automation.flexcontainer.click(["frmManageTransferRecipient","customHeader","flxSearch"]);
  kony.automation.playback.waitFor(["frmManageTransferRecipientInfo","customHeader","btnRight"],15000);
  kony.automation.button.click(["frmManageTransferRecipientInfo","customHeader","btnRight"]);
  kony.automation.playback.waitFor(["frmManageTransferRecipientInfo","btnEditRecipientDetails"],15000);
  kony.automation.button.click(["frmManageTransferRecipientInfo","btnEditRecipientDetails"]);
  kony.automation.playback.waitFor(["frmManageEditRecipient","txtRecipientName"],15000);
  kony.automation.textbox.enterText(["frmManageEditRecipient","txtRecipientName"],UniqueUpdatedNickName);
  kony.automation.playback.waitFor(["frmManageEditRecipient","btnSave"],15000);
  kony.automation.button.click(["frmManageEditRecipient","btnSave"]);
}

function EditPTOPReciptent(UniqueUpdatedNickName){

  kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"],15000);
  kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);
  //Update Recipient
  kony.automation.playback.waitFor(["frmManageP2pRecipient","customHeader","btnRight"],15000);
  kony.automation.button.click(["frmManageP2pRecipient","customHeader","btnRight"]);
  kony.automation.playback.waitFor(["frmManageP2pRecipient","btnEditRecipientDetails"],15000);
  kony.automation.button.click(["frmManageP2pRecipient","btnEditRecipientDetails"]);
  kony.automation.playback.waitFor(["frmManageEditRecipient","txtRecipientName"],15000);
  kony.automation.textbox.enterText(["frmManageEditRecipient","txtRecipientName"],"PToPAccJasmineHCrfjNICK");
  kony.automation.playback.waitFor(["frmManageEditRecipient","btnSave"],15000);
  kony.automation.button.click(["frmManageEditRecipient","btnSave"]);
}

function doTransferOnRecipient(AmountValue,Notes){

  kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"],15000);
  kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmManageTransferRecipient","btnTransfer"],15000);
  kony.automation.button.click(["frmManageTransferRecipient","btnTransfer"]);
  SelectFromAccount();
  EnterAmount(AmountValue);
  EnterNoteValue(Notes);
  ConfirmTransfer();
  VerifyTransferSuccessMessage();

}
