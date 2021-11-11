describe("AccountPreference", function() {
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
	
	
	
	
	beforeEach(async function() {
	// 	jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000;
	    var flgLoginForm = await kony.automation.playback.waitFor(["frmLogin", "login", "btnLogIn"], 2000);
	    var flgLogoutForm = await kony.automation.playback.waitFor(["frmLogout", "btnLogIn"], 2000);
	    kony.print("flgLoginForm: " + flgLoginForm + " ,flgLogoutForm: " + flgLogoutForm);
	
	    if (flgLogoutForm) {
	        kony.automation.button.click(["frmLogout", "btnLogIn"]);
	        kony.automation.playback.waitFor(["frmLogin", "login", "tbxUsername"], 10000);
	        await kony.automation.playback.wait(3000);
	//         expect(kony.automation.widget.getWidgetProperty(["frmLogin", "login", "tbxPassword"], "text")).toEqual("");
	        await login(LoginDetails.username);
	    } else if (flgLoginForm === true || flgLoginForm === 1) {
	        await login(LoginDetails.username);
	    }
	},12000);
	
	
	async function login(username) {
	    await kony.automation.playback.waitFor(["frmLogin", "login", "tbxUsername"]);
	    kony.automation.textbox.enterText(["frmLogin", "login", "tbxUsername"], username);
	    kony.automation.textbox.enterText(["frmLogin", "login", "tbxPassword"], LoginDetails.password);
	    await kony.automation.playback.waitFor(["frmLogin", "login", "btnLogIn"]);
	    kony.automation.button.click(["frmLogin", "login", "btnLogIn"]);
	    //Verifying Terms and Condition page -
	    var frmTnC = await kony.automation.playback.waitFor(["frmTermsAndCondition", "flxCheckBox"], 20000);
	    if (frmTnC) {
	        kony.automation.flexcontainer.click(["frmTermsAndCondition", "flxCheckBox"]);
	        await kony.automation.playback.waitFor(["frmTermsAndCondition", "btnContinue"]);
	        kony.automation.button.click(["frmTermsAndCondition", "btnContinue"]);
	    }
	
	    await kony.automation.playback.waitFor(["frmUnifiedDashboard", "lblBankName"], 15000);
	}
	
	function NavigateToSettings(){
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
	
	function CancelEditAccountPreference(){
	  kony.automation.playback.waitFor(["frmSettings","segSettingsDefaultAccount"]);
		kony.automation.segmentedui.click(["frmSettings","segSettingsDefaultAccount[0,0]"]);
		kony.automation.playback.waitFor(["frmEStmtAccountPreferences","segSelectAccounts"]);
		kony.automation.segmentedui.click(["frmEStmtAccountPreferences","segSelectAccounts[0,0]"]);
		kony.automation.playback.waitFor(["frmEStmtAccountDetails","customHeader","btnRight"]);
		kony.automation.button.click(["frmEStmtAccountDetails","customHeader","btnRight"]);
		kony.automation.playback.waitFor(["frmEStmtAccountDetails","flxCancel"]);
		kony.automation.flexcontainer.click(["frmEStmtAccountDetails","flxCancel"]);
		kony.automation.flexcontainer.click(["frmEStmtAccountDetails","customHeader","flxBack"]);
		kony.automation.playback.waitFor(["frmEStmtAccountPreferences","customHeader","flxBack"]);
		kony.automation.flexcontainer.click(["frmEStmtAccountPreferences","customHeader","flxBack"]);
	}
	
	function VerifyConsentTypeNotClickable(){ 
	  
	// 	kony.automation.playback.waitFor(["frmSettings","segConsentManagement"],15000);
	// 	kony.automation.segmentedui.click(["frmSettings","segConsentManagement[0,0]"]);
		OpenConsentManagement();
		kony.automation.playback.waitFor(["frmConsentManagement","segConsentTypes"],15000);
		kony.automation.segmentedui.click(["frmConsentManagement","segConsentTypes[0,0]"]);
		
		let frmName = kony.automation.getCurrentForm();
		if(frmName !== "frmConsentManagement"){
		expect(true).toBe(false);
		}
	}
	function MoveBackFromConsentToSetting(){
		kony.automation.playback.waitFor(["frmConsentManagement","customHeader","flxBack"],15000);
		kony.automation.flexcontainer.click(["frmConsentManagement","customHeader","flxBack"]);
		kony.automation.playback.waitFor(["frmSettings","segConsentManagement"],15000);
	}
	
	function EditAndSaveConsent(){
	// 	kony.automation.playback.waitFor(["frmSettings","segConsentManagement"],15000);
	// 	kony.automation.segmentedui.click(["frmSettings","segConsentManagement[0,0]"]);
	  OpenConsentManagement();
		kony.automation.playback.waitFor(["frmConsentManagement","customHeader","btnRight"],15000);
		kony.automation.button.click(["frmConsentManagement","customHeader","btnRight"]);
		kony.automation.playback.wait(1000);
		// :User Injected Code Snippet [// - [9 lines]]
		let selectedIndex = kony.automation.widget.getWidgetProperty(["frmConsentManagement","segEditConsent[0,0]","switchSelect"], "selectedIndex");
		
		if(selectedIndex === 1){
		kony.automation.switch.toggle(["frmConsentManagement","segEditConsent[0,0]","switchSelect"]);
		kony.automation.scrollToWidget(["frmConsentManagement","btnSave"]);
			kony.automation.button.click(["frmConsentManagement","btnSave"]);
		}else{
		kony.automation.button.click(["frmConsentManagement","customHeader","btnRight"]);
		}
		// :End User Injected Code Snippet {78c1cf0c-1cfe-3f99-cbb1-452de59d143c}
		kony.automation.playback.wait(5000);
	}
	
	function ValidateSelectedConsent(){
		kony.automation.playback.waitFor(["frmConsentManagement","segConsentTypes"],15000);
		expect(kony.automation.widget.getWidgetProperty(["frmConsentManagement","segConsentTypes[0,0]","lblValue"], "text")).toEqual("Yes"); 
	}
	
	function OpenConsentManagement(){
		kony.automation.playback.waitFor(["frmSettings","segConsentManagement"],15000);
		kony.automation.segmentedui.click(["frmSettings","segConsentManagement[0,0]"]);
		kony.automation.playback.waitFor(["frmConsentManagement","segConsentTypes"],15000);
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
	    kony.automation.playback.waitFor(["frmProfileAddAddress","flxMainContainer","txtResidentialAddressLineOne"],15000);
	    kony.automation.playback.wait(1000);
	    kony.automation.textbox.enterText(["frmProfileAddAddress","flxMainContainer","txtResidentialAddressLineOne"],Address1);
	    kony.automation.playback.waitFor(["frmProfileAddAddress","flxMainContainer","lstbxCountry"],15000);
	    kony.automation.listbox.selectItem(["frmProfileAddAddress","flxMainContainer","lstbxCountry"], "IN");
	    kony.automation.playback.waitFor(["frmProfileAddAddress","flxMainContainer","lstbxState"],15000);
	    kony.automation.listbox.selectItem(["frmProfileAddAddress","flxMainContainer","lstbxState"], "IN-AP");
	    kony.automation.playback.waitFor(["frmProfileAddAddress","flxMainContainer","txtResidentialAddressCity"],15000);
	    kony.automation.textbox.enterText(["frmProfileAddAddress","flxMainContainer","txtResidentialAddressCity"],City);
	    kony.automation.playback.waitFor(["frmProfileAddAddress","flxMainContainer","txtResidentialAddressZipCode"],15000);
	    kony.automation.textbox.enterText(["frmProfileAddAddress","flxMainContainer","txtResidentialAddressZipCode"],Pincode);
	    kony.automation.playback.waitFor(["frmProfileAddAddress","flxMainContainer","btnContinueResidentialAddress"],15000);
	    kony.automation.button.click(["frmProfileAddAddress","flxMainContainer","btnContinueResidentialAddress"]);
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
	
	function enableDisableEStatement(){
		kony.automation.playback.waitFor(["frmSettings","segSettingsDefaultAccount"],15000);
		kony.automation.segmentedui.click(["frmSettings","segSettingsDefaultAccount[0,0]"]);
		kony.automation.playback.waitFor(["frmEStmtAccountPreferences","segSelectAccounts"],15000);
		kony.automation.segmentedui.click(["frmEStmtAccountPreferences","segSelectAccounts[0,0]"]);
		let btnDisable = kony.automation.playback.waitFor(["frmEStmtAccountDetails","btnDisable"],5000);
		
		if(btnDisable){
		kony.automation.button.click(["frmEStmtAccountDetails","btnDisable"]);
		kony.automation.playback.waitFor(["frmEStmtDisableEStatements","btnDisable"],15000);
		kony.automation.button.click(["frmEStmtDisableEStatements","btnDisable"]);
		}else{
		kony.automation.playback.waitFor(["frmEStmtAccountDetails","btnEnable"],5000);
		kony.automation.button.click(["frmEStmtAccountDetails","btnEnable"]);
		kony.automation.playback.waitFor(["frmEStmtEnableEStatements","flxCheckBox"],15000);
		kony.automation.widget.touch(["frmEStmtEnableEStatements","flxCheckBox"], [13,6],null,null);
		kony.automation.button.click(["frmEStmtEnableEStatements","btnEnable"]);
		}
		kony.automation.playback.waitFor(["frmEStmtAccountDetails","customPopup","lblPopup"],30000);
		expect(kony.automation.widget.getWidgetProperty(["frmEStmtAccountDetails","customPopup","lblPopup"], "text")).toContain("success");
		
		kony.automation.playback.waitFor(["frmEStmtAccountDetails","customHeader","flxBack"],15000);
		kony.automation.flexcontainer.click(["frmEStmtAccountDetails","customHeader","flxBack"]);
		kony.automation.playback.waitFor(["frmEStmtAccountPreferences","customHeader","flxBack"],15000);
		kony.automation.flexcontainer.click(["frmEStmtAccountPreferences","customHeader","flxBack"]);
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
	
	it("DisableEStatement", async function() {
	  
	  
	  NavigateToSettings();
	  enableDisableEStatement();
	  MoveBackFromSettings_DashBoard();
	  
	},120000);
	
	it("EnableEStatement", async function() {
	  
	  
	  NavigateToSettings();
	  enableDisableEStatement();
	  MoveBackFromSettings_DashBoard();
	  
	},120000);
	
	it("VerifyCancelEditAccountPreference", async function() {
	  
	  
	  NavigateToSettings();
	  CancelEditAccountPreference();
	  MoveBackFromSettings_DashBoard();
	  
	},120000);
});