describe("RB_PostLogin", function() {
	beforeEach(function() {
	
	  var flgDashboard = kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],10000);
	  kony.print("Dashboard : "+flgDashboard);
	  if(flgDashboard){
	
	    // Do Nothing
	
	  }else{
	    var currentwidget;
	
	    try{
	      kony.automation.playback.wait(2000);
	      currentwidget = kony.automation.widget.getWidgetProperty(["frmLogin","login","btnLogIn"], "text");
	      kony.print("The current Form Name ::"+currentwidget);
	    }catch(err){
	      kony.print("Error::"+err.message);
	    }
	    
	    try{
	      kony.automation.playback.wait(3000);
	        var currentwidget1 = kony.automation.widget.getWidgetProperty(["frmLogout","btnLogIn"], "text");
	        kony.print("The current Form Name ::"+currentwidget1);
	        if(currentwidget1 === "Sign In"){
	
	          kony.automation.button.click(["frmLogout","btnLogIn"]);
	          kony.automation.playback.waitFor(["frmLogin","tbxUsername"],10000);
	          currentwidget=currentwidget1;
	        }     
	
	      }catch(err1){
	        kony.print("Error::"+err1.message);
	      }
	
	    if(currentwidget === "Sign In"){
	
	      kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
	      kony.automation.textbox.enterText(["frmLogin","login","tbxUsername"],"dbxJasmine1234");
	      kony.automation.textbox.enterText(["frmLogin","login","tbxPassword"],"Kony@1234");
	      kony.automation.button.click(["frmLogin","login","btnLogIn"]);
	
	      // Verifying Terms and conditions screen
	
	      var frmTnC = kony.automation.playback.waitFor(["frmTermsAndCondition","flxCheckBox"],10000);
	      if(frmTnC){
	        kony.automation.flexcontainer.click(["frmTermsAndCondition","flxCheckBox"]);
	        kony.automation.playback.waitFor(["frmTermsAndCondition","btnContinue"]);
	        kony.automation.button.click(["frmTermsAndCondition","btnContinue"]);
	      }
	      kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	      kony.automation.alert.click(0);
	      //kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	    }
	
	  }
	
	},90000);
	
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
	
	
	
	
	function clickOnPostLogin_SupportBtn(){
	
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.wait(5000);
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.scrollToWidget(["frmUnifiedDashboard","Hamburger","segHamburger"]);
	//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,19]"]);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,19]"]);
	  
	  openMenu("Support");
	}
	
	function verifyPostLoginAppVersion(){
	
	  kony.automation.playback.waitFor(["frmSupport","lblAppVersion"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmSupport","lblAppVersion"], "text")).not.toBe('');
	  kony.automation.playback.waitFor(["frmSupport","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmSupport","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmSupport","Hamburger","segHamburger"],15000);
	  kony.automation.segmentedui.click(["frmSupport","Hamburger","segHamburger[0,0]"]);
	  kony.automation.playback.wait(10000);
	}
	
	function VerifyPostLogin_FAQLink(){
	
	  kony.automation.playback.waitFor(["frmSupport","segSupport"],15000);
	  kony.automation.segmentedui.click(["frmSupport","segSupport[0,0]"]);
	  kony.automation.playback.waitFor(["frmSupportInfo","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmSupportInfo","customHeader","lblLocateUs"], "text")).not.toBe('');
	}
	function VerifyPostLogin_TermsConditions(){
	
	  kony.automation.playback.waitFor(["frmSupport","segSupport"],15000);
	  kony.automation.segmentedui.click(["frmSupport","segSupport[0,1]"]);
	  kony.automation.playback.waitFor(["frmSupportInfo","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmSupportInfo","customHeader","lblLocateUs"], "text")).not.toBe('');
	}
	
	function VerifyPostLogin_PrivacyPolicy(){
	
	  kony.automation.playback.waitFor(["frmSupport","segSupport"],15000);
	  kony.automation.segmentedui.click(["frmSupport","segSupport[0,2]"]);
	  kony.automation.playback.waitFor(["frmSupportInfo","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmSupportInfo","customHeader","lblLocateUs"], "text")).not.toBe('');
	}
	
	function MoveBackFrom_PostLogin_Support(){
	  
	  kony.automation.playback.waitFor(["frmSupportInfo","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmSupportInfo","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmSupport","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmSupport","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmSupport","Hamburger","segHamburger"],15000);
	  kony.automation.segmentedui.click(["frmSupport","Hamburger","segHamburger[0,0]"]);
	  kony.automation.playback.wait(10000);
	
	}
	
	
	it("PostLogin_VerifyAppVersion", async function() {
	
	 clickOnPostLogin_SupportBtn();
	 verifyPostLoginAppVersion();
	  
	},60000);
	
	it("PostLogin_VerifyFAQ", async function() {
	  
	  clickOnPostLogin_SupportBtn();
	  VerifyPostLogin_FAQLink();
	  MoveBackFrom_PostLogin_Support();
	  
	},60000);
	
	it("PostLogin_VerifyPrivacyPolicy", async function() {
	
	  clickOnPostLogin_SupportBtn();
	  VerifyPostLogin_PrivacyPolicy();
	  MoveBackFrom_PostLogin_Support();
	  
	},60000);
	
	it("PostLogin_VerifyTermsnConditions", async function() {
	  
	 clickOnPostLogin_SupportBtn();
	 VerifyPostLogin_TermsConditions();
	 MoveBackFrom_PostLogin_Support();
	  
	},60000);
});