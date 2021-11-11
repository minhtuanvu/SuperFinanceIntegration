describe("Messages", function() {
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
	
	
	
	
	function NavigateToMessages(){
	
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	//   kony.automation.playback.wait(5000);
	
	//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,14]"]);
	//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,14]"]);
	  
	  openMenu("Messages");
	
	  verifyMessagesScreen();
	}
	
	function verifyMessagesScreen(){
	
	  kony.automation.playback.waitFor(["frmMessages","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmMessages","customHeader","lblLocateUs"], "text")).not.toBe('');
	
	}
	
	function ComposeNewMessage(){
	
	  kony.automation.playback.waitFor(["frmMessages","flxSearch"],15000);
	  kony.automation.flexcontainer.click(["frmMessages","flxSearch"]);
	  kony.automation.playback.waitFor(["frmNewMessageCategory","customHeader","lblLocateUs"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmNewMessageCategory","customHeader","lblLocateUs"], "text")).toEqual("New Message");
	  kony.automation.playback.waitFor(["frmNewMessageCategory","segCategory"],15000);
	  kony.automation.segmentedui.click(["frmNewMessageCategory","segCategory[0,1]"]);
	  kony.automation.playback.waitFor(["frmNewMessage","tbxSubject"],15000);
	  kony.automation.textbox.enterText(["frmNewMessage","tbxSubject"],"testJasmine");
	  kony.automation.playback.waitFor(["frmNewMessage","txtareaDescription"],15000);
	  kony.automation.textarea.enterText(["frmNewMessage","txtareaDescription"],"testJasmine");
	  kony.automation.playback.waitFor(["frmNewMessage","btnSend"],15000);
	  kony.automation.button.click(["frmNewMessage","btnSend"]);
	  kony.automation.playback.wait(10000);
	
	  verifyMessagesScreen();
	}
	
	function selectFirstMessage(){
	
	  kony.automation.playback.waitFor(["frmMessages","flxInbox"],15000);
	  kony.automation.flexcontainer.click(["frmMessages","flxInbox"]);
	  kony.automation.playback.wait(5000);
	
	  kony.automation.playback.waitFor(["frmMessages","segMessagesInbox"],15000);
	  //kony.automation.widget.touch(["frmMessages","segMessagesInbox[0,0]","flxMessagesMain"], [96,42],[[96,42],[96,42]],[96,42]);
	  kony.automation.widget.touch(["frmMessages","segMessagesInbox[0,0]","flxmain"], [96,42],[[96,42],[96,42]],[96,42]);
	  kony.automation.gesture.tap(["frmMessages","segMessagesInbox[0,0]","flxmain"], {"taps":1,"fingers":1,"point":[287.138671875,126.1083984375]});
	  kony.automation.playback.wait(10000);
	}
	
	function deleteNewMessage(){
	
	  selectFirstMessage();
	
	  kony.automation.playback.waitFor(["frmMessagesDetails","flxDelete"],15000);
	  kony.automation.flexcontainer.click(["frmMessagesDetails","flxDelete"]);
	  kony.automation.alert.click(0);
	  kony.automation.playback.wait(10000);
	
	  verifyMessagesScreen(); 
	}
	
	function replyNewMessage(){
	
	  selectFirstMessage();
	
	  kony.automation.playback.waitFor(["frmMessagesDetails","flxReply"],15000);
	  kony.automation.flexcontainer.click(["frmMessagesDetails","flxReply"]);
	  kony.automation.textarea.enterText(["frmMessagesDetails","txtAreaReply"],"reply Message");
	  kony.automation.playback.waitFor(["frmMessagesDetails","btnSend"],15000);
	  kony.automation.button.click(["frmMessagesDetails","btnSend"]);
	  kony.automation.playback.wait(10000);
	
	  verifyMessagesScreen();
	
	
	}
	
	function restoreNewMessage(){
	
	  // Mandate to have 
	  kony.automation.playback.waitFor(["frmMessages","flxInbox"],15000);
	  kony.automation.flexcontainer.click(["frmMessages","flxInbox"]);
	  kony.automation.playback.wait(5000);
	  // Mandate to have 
	
	  kony.automation.playback.waitFor(["frmMessages","flxDeleted"],15000);
	  kony.automation.flexcontainer.click(["frmMessages","flxDeleted"]);
	  kony.automation.playback.wait(5000);
	
	  kony.automation.playback.waitFor(["frmMessages","segMessagesInbox"],15000);
	  //kony.automation.widget.touch(["frmMessages","segMessagesInbox[0,0]","flxMessagesMain"], [96,42],[[96,42],[96,42]],[96,42]);
	  kony.automation.widget.touch(["frmMessages","segMessagesInbox[0,0]","flxmain"], [96,42],[[96,42],[96,42]],[96,42]);
	  kony.automation.gesture.tap(["frmMessages","segMessagesInbox[0,0]","flxmain"], {"taps":1,"fingers":1,"point":[287.138671875,126.1083984375]});
	  kony.automation.playback.wait(10000);
	
	  kony.automation.playback.waitFor(["frmMessagesDetails","btnRestore"],15000);
	  kony.automation.button.click(["frmMessagesDetails","btnRestore"]);
	  kony.automation.playback.wait(10000);
	
	  verifyMessagesScreen();
	
	}
	
	function searchNewMessage(){
	
	  kony.automation.playback.waitFor(["frmMessages","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmMessages","tbxSearch"], [108,10],null,null);
	  kony.automation.playback.waitFor(["frmMessages","customSearchbox","tbxSearch"],15000);
	  kony.automation.textbox.enterText(["frmMessages","customSearchbox","tbxSearch"],"test");
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmMessages","segMessagesInbox"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmMessages","segMessagesInbox[0,0]","lblSubject"], "text")).not.toBe('');
	  kony.automation.playback.waitFor(["frmMessages","customSearchbox","btnCancel"],15000);
	  kony.automation.widget.touch(["frmMessages","customSearchbox","btnCancel"], null,null,[24,7]);
	  kony.automation.playback.waitFor(["frmMessages","customSearchbox","btnCancel"],15000);
	  kony.automation.button.click(["frmMessages","customSearchbox","btnCancel"]);
	  kony.automation.playback.wait(5000);
	
	  verifyMessagesScreen();
	
	
	}
	
	function verifyRequestID(){
	
	  selectFirstMessage();
	
	  kony.automation.playback.waitFor(["frmMessagesDetails","segMessageDetails"],15000);
	  expect(kony.automation.widget.getWidgetProperty(["frmMessagesDetails","segMessageDetails[0,0]","lblReqVal"], "text")).not.toBe('');
	  kony.automation.playback.waitFor(["frmMessagesDetails","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmMessagesDetails","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	
	  verifyMessagesScreen();
	}
	
	function MoveBackToDashBoard_Messages(){
	
	  kony.automation.playback.waitFor(["frmMessages","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmMessages","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmMessages","Hamburger","segHamburger"],15000);
	  kony.automation.segmentedui.scrollToRow(["frmMessages","Hamburger","segHamburger[0,0]"]);
	  kony.automation.segmentedui.click(["frmMessages","Hamburger","segHamburger[0,0]"]);
	  kony.automation.playback.wait(5000);
	
	  VerifyAccountsDashBoard();
	
	}
	
	it("CreateNewMessage", async function() {
	  
	  NavigateToMessages();
	  ComposeNewMessage();
	  MoveBackToDashBoard_Messages();
	  
	},120000);
	
	it("DeleteMessage", async function() {
	  
	  NavigateToMessages();
	  ComposeNewMessage();
	  deleteNewMessage();
	  MoveBackToDashBoard_Messages();
	  
	},120000);
	
	it("ReplytoMessage", async function() {
	 
	  NavigateToMessages();
	  ComposeNewMessage();
	  replyNewMessage();
	  MoveBackToDashBoard_Messages();
	  
	},120000);
	
	it("RestoreMessage", async function() {
	
	  NavigateToMessages();
	  ComposeNewMessage();
	  deleteNewMessage();
	  restoreNewMessage();
	  MoveBackToDashBoard_Messages();
	  
	},120000);
	
	it("SearchFunctionality", async function() {
	  
	  NavigateToMessages();
	  searchNewMessage();
	  MoveBackToDashBoard_Messages();
	  
	},90000);
	
	it("VerifyRequestID", async function() {
	  
	  NavigateToMessages();
	  verifyRequestID();
	  MoveBackToDashBoard_Messages();
	  
	},90000);
});