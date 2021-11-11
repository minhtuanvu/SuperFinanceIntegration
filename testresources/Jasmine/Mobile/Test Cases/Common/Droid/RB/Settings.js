function NavigateToSettings(){

//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
//   kony.automation.playback.wait(5000);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
//   kony.automation.scrollToWidget(["frmUnifiedDashboard","Hamburger","segHamburger"]);
//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,16]"]);
//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,16]"]);
//   kony.automation.playback.wait(10000);
  
  openMenu("Settings");
}

function enableAccountsPreview(){

  kony.automation.playback.waitFor(["frmSettings","segSettingsLogin"],15000);
  kony.automation.segmentedui.click(["frmSettings","segSettingsLogin[0,0]"]);
  kony.automation.playback.waitFor(["frmPreferencesAccountPreview","switchPreview"],15000);
  kony.automation.switch.toggle(["frmPreferencesAccountPreview","switchPreview"]);
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmPreferencesAccountPreview","switchPreview"],15000);
  kony.automation.switch.toggle(["frmPreferencesAccountPreview","switchPreview"]);

  kony.automation.playback.waitFor(["frmPreferencesAccountPreview","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmPreferencesAccountPreview","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);
}

function MoveBackFromSettings_DashBoard(){

  kony.automation.playback.waitFor(["frmSettings","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmSettings","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmSettings","Hamburger","segHamburger"],15000);
  kony.automation.segmentedui.click(["frmSettings","Hamburger","segHamburger[0,0]"]);

  VerifyAccountsDashBoard();
}

function setDefaultAccounts(){

  kony.automation.playback.waitFor(["frmSettings","segSettingsDefaultAccount"],15000);
  kony.automation.scrollToWidget(["frmSettings","segSettingsDefaultAccount"]);
  kony.automation.segmentedui.scrollToRow(["frmSettings","segSettingsDefaultAccount[0,1]"]);
  kony.automation.segmentedui.click(["frmSettings","segSettingsDefaultAccount[0,1]"]);
  kony.automation.playback.wait(5000);

  kony.automation.playback.waitFor(["frmSetDefaultAccount","segSelectAccounts"],15000);
  kony.automation.segmentedui.click(["frmSetDefaultAccount","segSelectAccounts[0,0]"]);

  kony.automation.playback.waitFor(["frmPreferencesDefaultAccount","segAccounts"],15000);
  var accounts_Size=kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultAccount","segAccounts"],"data");
  var segLength=accounts_Size.length;
  //isCheck=kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultAccount","segAccounts[1,0]","imgRadio"]);

  for(var x = 0; x <segLength; x++) {

    var seg="segAccounts[0,"+x+"]";
    var isCheck=kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultAccount",seg,"imgRadio"],"text");

    if(isCheck){
      kony.print("Already set as default account");
    }else{
      kony.automation.segmentedui.click(["frmPreferencesDefaultAccount",seg]);
      kony.automation.playback.wait(10000);
      break;
    }
  }

  kony.automation.playback.waitFor(["frmSetDefaultAccount","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmSetDefaultAccount","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);

}

function setAccountAlerts(){

  kony.automation.playback.waitFor(["frmSettings","segSettingsAlerts"],15000);
  kony.automation.segmentedui.click(["frmSettings","segSettingsAlerts[0,2]"]);
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmAlertsAccountPref","segTransactions"],15000);
  kony.automation.segmentedui.click(["frmAlertsAccountPref","segTransactions[0,0]"]);
  kony.automation.playback.wait(5000);

  //kony.automation.playback.waitFor(["frmAlertGroupsList","lblInlineMessage"],15000);
  //var isDisable=kony.automation.widget.getWidgetProperty(["frmAlertGroupsList","lblInlineMessage"],"text");

  kony.automation.playback.waitFor(["frmAlertGroupsList","switchReceiveAlerts"],15000);
  kony.automation.switch.toggle(["frmAlertGroupsList","switchReceiveAlerts"]);
  kony.automation.playback.wait(5000);

  kony.automation.alert.click(0);
  kony.automation.playback.wait(10000);

  kony.automation.playback.waitFor(["frmAlertGroupsList","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmAlertGroupsList","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmAlertsAccountPref","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmAlertsAccountPref","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);

}

function VerifyOnClickProfileName(){

  kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
  kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxHeaderMain"],15000);
  kony.automation.widget.touch(["frmUnifiedDashboard","Hamburger","flxHeaderMain"], null,null,[92,28]);
  kony.automation.playback.wait(10000);
}

function NavigateToProfileSettings(){
  
  kony.automation.playback.waitFor(["frmSettings","segSettingsProfile"],15000);
  kony.automation.segmentedui.click(["frmSettings","segSettingsProfile[0,1]"]);
  kony.automation.playback.waitFor(["frmProfilePersonalDetails","customHeader","btnRight"],15000);
  kony.automation.button.click(["frmProfilePersonalDetails","customHeader","btnRight"]);
}
function verifyAddingNewPhoneNumber(isPrimary,MobileNumber){

  NavigateToProfileSettings();
  
  kony.automation.playback.waitFor(["frmProfilePersonalDetails","flxEditPhoneNumbers"],15000);
  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","flxEditPhoneNumbers"]);
  var addNewNumber=kony.automation.playback.waitFor(["frmProfileEditPhoneNumbers","btnContinue"],15000);

  if(addNewNumber){
    kony.automation.button.click(["frmProfileEditPhoneNumbers","btnContinue"]);
    kony.automation.playback.waitFor(["frmProfileSelectLocation","segContactLocation"],15000);
    kony.automation.segmentedui.click(["frmProfileSelectLocation","segContactLocation[0,0]"]);
    kony.automation.playback.waitFor(["frmProfileContactType","segContactType"],15000);
    kony.automation.segmentedui.click(["frmProfileContactType","segContactType[0,1]"]);

    kony.automation.playback.waitFor(["frmProfileEditPhoneNumberMain","keypad","btnEight"],15000);
    for(i=0; i<MobileNumber.length; i++){
      kony.automation.button.click(["frmProfileEditPhoneNumberMain","keypad", getBtnID(MobileNumber.charAt(i))]);
    }

    if(isPrimary==='YES'){
      kony.automation.playback.waitFor(["frmProfileEditPhoneNumberMain","flxCheckboxPrimary"],15000);
      kony.automation.flexcontainer.click(["frmProfileEditPhoneNumberMain","flxCheckboxPrimary"]);
    }

    kony.automation.playback.waitFor(["frmProfileEditPhoneNumberMain","btnVerifyPhoneNumber"],15000);
    kony.automation.button.click(["frmProfileEditPhoneNumberMain","btnVerifyPhoneNumber"]);
    kony.automation.playback.waitFor(["frmProfileConfirmDetails","btnUpdateChanges"],15000);
    kony.automation.button.click(["frmProfileConfirmDetails","btnUpdateChanges"]);

  }
  
  kony.automation.playback.waitFor(["frmProfileEditPhoneNumbers","customHeader","flxBack"]);
  kony.automation.flexcontainer.click(["frmProfileEditPhoneNumbers","customHeader","flxBack"]);
  kony.automation.playback.waitFor(["frmProfilePersonalDetails","customHeader","flxBack"]);
  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","customHeader","flxBack"]);
}

function verifyUpdatingPhoneNumber(){

  kony.automation.playback.waitFor(["frmSettings","segSettingsProfile"],15000);
  kony.automation.segmentedui.click(["frmSettings","segSettingsProfile[0,1]"]);
  kony.automation.playback.waitFor(["frmProfilePersonalDetails","customHeader","btnRight"],15000);
  kony.automation.button.click(["frmProfilePersonalDetails","customHeader","btnRight"]);
  kony.automation.playback.waitFor(["frmProfilePersonalDetails","flxEditPhoneNumbers"],15000);
  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","flxEditPhoneNumbers"]);

  kony.automation.playback.waitFor(["frmProfileEditPhoneNumbers","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmProfileEditPhoneNumbers","customHeader","flxBack"]);
  kony.automation.playback.waitFor(["frmProfilePersonalDetails","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","customHeader","flxBack"]);
}

function verifyAddingNewEmailAddress(isPrimary,emailAddress){

  NavigateToProfileSettings();
  
  kony.automation.playback.waitFor(["frmProfilePersonalDetails","flxEditEmail"],15000);
  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","flxEditEmail"]);
  var addNewEmail=kony.automation.playback.waitFor(["frmProfileEditEmails","btnContinue"],15000);

  if(addNewEmail){
    kony.automation.button.click(["frmProfileEditEmails","btnContinue"]);
    kony.automation.playback.waitFor(["frmProfileEnterEmailID","tbxEmail"],15000);
    kony.automation.textbox.enterText(["frmProfileEnterEmailID","tbxEmail"],emailAddress);
    if(isPrimary==='YES'){
      kony.automation.playback.waitFor(["frmProfileEnterEmailID","flxCheckboxPrimary"],15000);
      kony.automation.flexcontainer.click(["frmProfileEnterEmailID","flxCheckboxPrimary"]);
    }
    kony.automation.playback.waitFor(["frmProfileEnterEmailID","btnContinue"],15000);
    kony.automation.button.click(["frmProfileEnterEmailID","btnContinue"]);
  }

  kony.automation.playback.waitFor(["frmProfileEditEmails","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmProfileEditEmails","customHeader","flxBack"]);
  kony.automation.playback.waitFor(["frmProfilePersonalDetails","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","customHeader","flxBack"]);
}

function verifyUpdatingEmailaddress(){

  NavigateToProfileSettings();

  kony.automation.playback.waitFor(["frmProfilePersonalDetails","flxEditEmail"],15000);
  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","flxEditEmail"]);

  kony.automation.playback.waitFor(["frmProfileEditEmails","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmProfileEditEmails","customHeader","flxBack"]);
  kony.automation.playback.waitFor(["frmProfilePersonalDetails","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","customHeader","flxBack"]);

}


function verifyAddingNewAddress(isPrimary,Address1,City,Pincode){

  NavigateToProfileSettings();

  kony.automation.playback.waitFor(["frmProfilePersonalDetails","flxEditAddress"],15000);
  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","flxEditAddress"]);

  var addNewAddress=kony.automation.playback.waitFor(["frmProfileEditAddressList","btnContinue"],15000);
  if(addNewAddress){
    kony.automation.button.click(["frmProfileEditAddressList","btnContinue"]);
    kony.automation.playback.waitFor(["frmProfileAddAddress","txtResidentialAddressLineOne"],15000);
    kony.automation.textbox.enterText(["frmProfileAddAddress","txtResidentialAddressLineOne"],Address1);
    kony.automation.playback.waitFor(["frmProfileAddAddress","lstbxCountry"],15000);
    kony.automation.listbox.selectItem(["frmProfileAddAddress","lstbxCountry"], "IN");
    kony.automation.playback.waitFor(["frmProfileAddAddress","lstbxState"],15000);
    kony.automation.listbox.selectItem(["frmProfileAddAddress","lstbxState"], "IN-AP");
    kony.automation.playback.waitFor(["frmProfileAddAddress","txtResidentialAddressCity"],15000);
    kony.automation.textbox.enterText(["frmProfileAddAddress","txtResidentialAddressCity"],City);
    kony.automation.playback.waitFor(["frmProfileAddAddress","txtResidentialAddressZipCode"],15000);
    kony.automation.textbox.enterText(["frmProfileAddAddress","txtResidentialAddressZipCode"],Pincode);
    kony.automation.playback.waitFor(["frmProfileAddAddress","btnContinueResidentialAddress"],15000);
    kony.automation.button.click(["frmProfileAddAddress","btnContinueResidentialAddress"]);
    kony.automation.playback.waitFor(["frmProfileAdressType","segAddressType"],15000);
    kony.automation.button.click(["frmProfileAdressType","segAddressType[0,0]","btnOption"]);

    if(isPrimary==="YES"){
      kony.automation.playback.waitFor(["frmProfileConfirmAddressDetails","flxCheckboxPrimary"],15000);
      kony.automation.flexcontainer.click(["frmProfileConfirmAddressDetails","flxCheckboxPrimary"]);
    }

    kony.automation.playback.waitFor(["frmProfileConfirmAddressDetails","btnUpdateChanges"],15000);
    kony.automation.button.click(["frmProfileConfirmAddressDetails","btnUpdateChanges"]);
  }

  kony.automation.playback.waitFor(["frmProfileEditAddressList","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmProfileEditAddressList","customHeader","flxBack"]);
  kony.automation.playback.waitFor(["frmProfilePersonalDetails","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","customHeader","flxBack"]);

}


function verifyUpdatingaddress(){

  NavigateToProfileSettings();

  kony.automation.playback.waitFor(["frmProfilePersonalDetails","flxEditAddress"],15000);
  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","flxEditAddress"]);

  kony.automation.playback.waitFor(["frmProfileEditAddressList","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmProfileEditAddressList","customHeader","flxBack"]);
  kony.automation.playback.waitFor(["frmProfilePersonalDetails","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmProfilePersonalDetails","customHeader","flxBack"]);

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