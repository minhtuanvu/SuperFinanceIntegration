function NavigateToManageRecipitents() {

//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
//   kony.automation.playback.wait(5000);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,4]"]);
//   kony.automation.playback.wait(5000);
  openMenu("Manage Beneficiaries");
}

function ClickOnAddBeneficiary(){
    kony.automation.playback.waitFor(["frmEuropeManageBeneficiaries","btnApply"],15000);
    kony.automation.button.click(["frmEuropeManageBeneficiaries","btnApply"]);
    kony.automation.playback.wait(2000);
}

function SelectAccountWithUs(){
    kony.automation.playback.waitFor(["frmEuropeTransferToAccountNewBen","SegSelectBank"],15000);
    kony.automation.segmentedui.click(["frmEuropeTransferToAccountNewBen","SegSelectBank[0,1]"]);
    kony.automation.playback.wait(2000);
}

function SelectAccountWithOtherBank(){
    kony.automation.playback.waitFor(["frmEuropeTransferToAccountNewBen","SegSelectBank"],15000);
    kony.automation.segmentedui.click(["frmEuropeTransferToAccountNewBen","SegSelectBank[0,0]"]);
    kony.automation.playback.wait(2000);
}

function EnterBeneficiaryName(name){
    kony.automation.playback.waitFor(["frmBenNameEurope","txtRecipientName"],15000);
    kony.automation.textbox.enterText(["frmBenNameEurope","txtRecipientName"],name);
    kony.automation.button.click(["frmBenNameEurope","btnContinue"]);
    kony.automation.playback.wait(2000);
}

function EnterAccountNumber(accNumber){
    kony.automation.playback.waitFor(["frmEnterBenAccNoEurope","txtAccNo"],15000);
    kony.automation.textbox.enterText(["frmEnterBenAccNoEurope","txtAccNo"],accNumber);
    kony.automation.button.click(["frmEnterBenAccNoEurope","btnContinue"]);
    kony.automation.playback.wait(2000);
}

function EnterIBAN(IBAN){
  kony.automation.playback.waitFor(["frmtransfersIBANEurope","tbxIBAN"],15000);
  kony.automation.textbox.enterText(["frmtransfersIBANEurope","tbxIBAN"],IBAN);
  kony.automation.button.click(["frmtransfersIBANEurope","btnContinue"]);
  kony.automation.playback.wait(2000);
}

function EnterSwiftCode(swift){
  kony.automation.playback.waitFor(["frmBenSwiftCodeEurope","txtSwiftCode"],15000);
  kony.automation.textbox.enterText(["frmBenSwiftCodeEurope","txtSwiftCode"],swift);
  kony.automation.button.click(["frmBenSwiftCodeEurope","btnContinue"]);
  kony.automation.playback.wait(1000);
}

function EnterUpdateAddressDetails(){

  kony.automation.playback.waitFor(["frmBenVerifyDetailsEurope","flxAddress"],5000);
  kony.automation.flexcontainer.click(["frmBenVerifyDetailsEurope","flxAddress"]);
  kony.automation.playback.waitFor(["frmBenAddressEurope","txtResidentialAddressNickName"],5000);
  kony.automation.textbox.enterText(["frmBenAddressEurope","txtResidentialAddressNickName"],"line1");
  kony.automation.textbox.enterText(["frmBenAddressEurope","txtResidentialAddressLineOne"],"line2");
  kony.automation.textbox.enterText(["frmBenAddressEurope","txtResidentialAddressCity"],"city");
  kony.automation.textbox.enterText(["frmBenAddressEurope","txtResidentialAddressZipCode"],"909090");
  kony.automation.textbox.enterText(["frmBenAddressEurope","txtResidentialAddressDummy"],"India");
  kony.automation.widget.touch(["frmBenAddressEurope","btnContinueResidentialAddress"], [294,23],null,null);
  kony.automation.playback.wait(2000);
}

function SearchBeneficiary(nameOrNumber){
  kony.automation.playback.waitFor(["frmEuropeManageBeneficiaries","tbxSearch"],15000);
  kony.automation.widget.touch(["frmEuropeManageBeneficiaries","tbxSearch"], [214,32],null,null);
  kony.automation.textbox.enterText(["frmEuropeManageBeneficiaries","customSearchbox","tbxSearch"],nameOrNumber);
  kony.automation.segmentedui.click(["frmEuropeManageBeneficiaries","segBeneficiaries[0,0]"]);
  kony.automation.playback.wait(3000);
}

function DeleteBeneficiary(){
	kony.automation.playback.waitFor(["frmBeneficiaryDetailsEurope","customHeader","btnRight"]);
	kony.automation.button.click(["frmBeneficiaryDetailsEurope","customHeader","btnRight"]);
	kony.automation.playback.wait(1000);
	kony.automation.widget.touch(["frmBeneficiaryDetailsEurope","flxRemoveBeneficiary"], [77,40],null,null);
	kony.automation.playback.wait(1000);
	kony.automation.alert.click(0);
	kony.automation.playback.waitFor(["frmEuropeAcknowledgement","btnDashboard"]);
	expect(kony.automation.widget.getWidgetProperty(["frmEuropeAcknowledgement","lblSuccessMessage"], "text")).toContain("success");
	kony.automation.playback.wait(1000);
	kony.automation.button.click(["frmEuropeAcknowledgement","btnDashboard"]);
}

function EditAddress(){
  
  let editAddress = "Edit " +getRandomString(3);
  kony.automation.playback.waitFor(["frmBeneficiaryDetailsEurope","customHeader","btnRight"],5000);
  kony.automation.button.click(["frmBeneficiaryDetailsEurope","customHeader","btnRight"]);
  kony.automation.widget.touch(["frmBeneficiaryDetailsEurope","flxAddress"], [268,32],null,null);
  kony.automation.playback.wait(2000);

  kony.automation.playback.waitFor(["frmBenAddressEurope","txtResidentialAddressNickName"],5000);
  kony.automation.textbox.enterText(["frmBenAddressEurope","txtResidentialAddressNickName"],"line1 "+editAddress);
  kony.automation.textbox.enterText(["frmBenAddressEurope","txtResidentialAddressLineOne"],"line2 " +editAddress);
  kony.automation.textbox.enterText(["frmBenAddressEurope","txtResidentialAddressCity"],"city "+ editAddress);
  kony.automation.textbox.enterText(["frmBenAddressEurope","txtResidentialAddressZipCode"],"909090");
  kony.automation.textbox.enterText(["frmBenAddressEurope","txtResidentialAddressDummy"],"India");
  kony.automation.widget.touch(["frmBenAddressEurope","btnContinueResidentialAddress"], [294,23],null,null);
  kony.automation.playback.wait(3000);

  //kony.automation.button.click(["frmBenAddressEurope","btnContinueResidentialAddress"]);
//   expect(kony.automation.widget.getWidgetProperty(["frmBeneficiaryDetailsEurope","customPopup","lblPopup"], "text")).toContain("updated");
  kony.automation.playback.waitFor(["frmBeneficiaryDetailsEurope","lblBenAddress"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmBeneficiaryDetailsEurope","lblBenAddress"], "text")).toContain(editAddress);
  kony.automation.playback.wait(2000);
  kony.automation.playback.waitFor(["frmBeneficiaryDetailsEurope","customHeader","flxBack"],8000);
  kony.automation.flexcontainer.click(["frmBeneficiaryDetailsEurope","customHeader","flxBack"]);
  kony.automation.playback.wait(2000);
}

function ClickOnMakePayment(){
	kony.automation.playback.waitFor(["frmBeneficiaryDetailsEurope","btnBack"]);
	kony.automation.button.click(["frmBeneficiaryDetailsEurope","btnBack"]);
	kony.automation.playback.wait(3000);
}

function CancelAddBeneficiary(){
  kony.automation.playback.waitFor(["frmBenVerifyDetailsEurope","customHeader","btnRight"]);
  kony.automation.button.click(["frmBenVerifyDetailsEurope","customHeader","btnRight"]);
  kony.automation.playback.wait(2000);
  kony.automation.alert.click(0);
  kony.automation.playback.wait(2000);
}
function ConfirmToAddBeneficiary(){
    kony.automation.playback.waitFor(["frmBenVerifyDetailsEurope","btnContinue"],15000);
    kony.automation.button.click(["frmBenVerifyDetailsEurope","btnContinue"]);
    kony.automation.playback.wait(5000);
}

function VerifyDuplicateEntry(){
	kony.automation.playback.waitFor(["frmBenVerifyDetailsEurope","btnContinue"],15000);
	kony.automation.button.click(["frmBenVerifyDetailsEurope","btnContinue"]);
	let popup = kony.automation.playback.waitFor(["frmBenVerifyDetailsEurope","customPopup","lblPopup"],15000);
	if(popup){
		expect(kony.automation.widget.getWidgetProperty(["frmBenVerifyDetailsEurope","customPopup","lblPopup"], "text")).toContain("already associated");	
	}
	else{
		expect("popup message").toBe("appeared");
	}
	kony.automation.button.click(["frmBenVerifyDetailsEurope","customHeader","btnRight"]);
	kony.automation.alert.click(0);
	kony.automation.playback.waitFor(["frmEuropeTransferToAccountSM","customHeader","btnRight"],15000);
	kony.automation.button.click(["frmEuropeTransferToAccountSM","customHeader","btnRight"]);
}

function VerifyBankNameInReviewPage(){
  let value = kony.automation.playback.waitFor(["frmBenVerifyDetailsEurope","lblAccHolderValue"],15000);
  if(value){
	expect(kony.automation.widget.getWidgetProperty(["frmBenVerifyDetailsEurope","lblAccHolderValue"], "text")).not.toBeNull();  
  }
}

function VerifBankNameInAckPage(){
  let Success=kony.automation.playback.waitFor(["frmEuropeAcknowledgement","lblSuccessMessage"],15000);
  if(Success){
    expect(kony.automation.widget.getWidgetProperty(["frmEuropeAcknowledgement","segDetails[0,1]","lblDetails"], "text")).not.toBeNull();
  }
}

function VerifySuccessMessage(){
  kony.automation.playback.waitFor(["frmEuropeAcknowledgement","lblSuccessMessage"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmEuropeAcknowledgement","lblSuccessMessage"], "text")).toContain("success");
  kony.automation.playback.waitFor(["frmEuropeAcknowledgement","btnDashboard"],15000);
  kony.automation.button.click(["frmEuropeAcknowledgement","btnDashboard"]);
  kony.automation.playback.wait(5000);
}

function VerifyBeneficiaryList(){
   kony.automation.playback.waitFor(["frmEuropeManageBeneficiaries","tbxSearch"],15000);
   kony.automation.playback.waitFor(["frmEuropeManageBeneficiaries","segBeneficiaries"],15000);
}

function MoveBacktoDashboard_ManageRecipitent(){
    kony.automation.playback.waitFor(["frmEuropeManageBeneficiaries","customHeader","flxBack"],15000);
    kony.automation.flexcontainer.click(["frmEuropeManageBeneficiaries","customHeader","flxBack"]);
    kony.automation.playback.wait(5000);
}

function IsAccountAlreadyAdded(accNumber){

  kony.automation.playback.waitFor(["frmEuropeManageBeneficiaries","tbxSearch"],15000);
  kony.automation.widget.touch(["frmEuropeManageBeneficiaries","tbxSearch"], [87,26],null,null);
  kony.automation.textbox.enterText(["frmEuropeManageBeneficiaries","customSearchbox","tbxSearch"],accNumber);
  kony.automation.playback.wait(2000);
  
  let isBenAlreadyAdded = !kony.automation.widget.getWidgetProperty(["frmEuropeManageBeneficiaries","flxNoBeneficiaries"], "isVisible");

  kony.automation.button.click(["frmEuropeManageBeneficiaries","customSearchbox","btnCancel"]);
  return isBenAlreadyAdded;
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

  var Success=kony.automation.playback.waitFor(["frmEuropeAcknowledgement","lblSuccessMessage"],15000);
  if(Success){

    kony.automation.playback.waitFor(["frmEuropeAcknowledgement","lblSuccessMessage"],15000);
    expect(kony.automation.widget.getWidgetProperty(["frmEuropeAcknowledgement","lblSuccessMessage"], "text")).not.toBe('');
    kony.automation.playback.waitFor(["frmEuropeAcknowledgement","btnDashboard"],15000);
    kony.automation.button.click(["frmEuropeAcknowledgement","btnDashboard"]);
    kony.automation.playback.wait(5000);
  }else{

    kony.automation.playback.waitFor(["frmEuropeAcknowledgement","btnTryAgain"],15000);
    kony.automation.button.click(["frmEuropeAcknowledgement","btnTryAgain"]);
    kony.automation.playback.waitFor(["frmEuropeManageBeneficiaries","customHeader","flxBack"],15000);
    kony.automation.flexcontainer.click(["frmEuropeManageBeneficiaries","customHeader","flxBack"]);
    // kony.automation.playback.waitFor(["frmManageRecipientType","customHeader","flxBack"],15000);
    // kony.automation.flexcontainer.click(["frmManageRecipientType","customHeader","flxBack"]);
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
