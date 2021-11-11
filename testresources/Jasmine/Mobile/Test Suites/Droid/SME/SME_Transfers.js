describe("SME_Transfers", function() {
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
	      kony.automation.textbox.enterText(["frmLogin","login","tbxUsername"],"dbxJasmine1234SB");
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
	
	function SearchInFromAndToScreen(valType) {
	
	  try{
	
	
	    var currentwidget1 = kony.automation.widget.getWidgetProperty(["frmLogout","btnLogIn"], "text");
	    kony.print("The current Form Name ::"+currentwidget1);
	    if(currentwidget1 === "Sign In"){
	
	      kony.automation.button.click(["frmLogout","btnLogIn"]);
	      kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
	      kony.automation.textbox.enterText(["frmLogin","login","tbxUsername"],"dbxJasmine1234SB");
	      kony.automation.textbox.enterText(["frmLogin","login","tbxPassword"],"Kony@1234");
	      kony.automation.button.click(["frmLogin","login","btnLogIn"]);
	      kony.automation.playback.wait(25000);
	    }    
	
	  }catch(err){
	    kony.print("Unable to find widget");
	  }
	  kony.automation.playback.wait(15000);
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	  kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	  kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	  kony.automation.playback.wait(8000);
	  kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmMMTransferFromAccount","tbxSearch"], null,null,null);
	  kony.automation.textbox.enterText(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],"Business");
	  //Kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	  // :User Injected Code Snippet [//Expect Checking Account - [2 lines]]
	  //var checkingAcc = ;
	  expect(kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount","segTransactions[0,0]","lblAccountName"], "text")).not.toBe(null);
	
	  // :End User Injected Code Snippet {391e3878-1a4a-6cd5-312f-c42e3dc249f3}
	  kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	  kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[0,0]"]);
	  kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"]);
	  kony.automation.widget.touch(["frmMMTransferToAccount","tbxSearch"], [72,22],null,[72,65]);
	  if(valType==="normal"){
	    kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"Business");
	  }else{
	    kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"samebank");
	  }  
	  kony.automation.playback.wait(1000);
	  kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
	  kony.automation.segmentedui.scrollToRow(["frmMMTransferToAccount","segTransactions[0,0]"]);
	  var creditCard = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount","segTransactions[0,0]","lblAccountName"],"text");
	  
	  expect(creditCard).not.toBe(null);
	
	  kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],10000);
	  kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[0,0]"]);
	}
	
	
	function EnterAmount() {
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnThree"],10000);
	  kony.automation.button.click(["frmMMTransferAmount","keypad","btnThree"]);
	  kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	  kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	  kony.automation.button.click(["frmMMTransferAmount","btnContinue"]);
	  kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],10000);
	}
	
	
	function SelectFrequencyOnceAndTransfer() {
	
	  kony.automation.playback.waitFor(["frmMMReview","segDetails"],10000);
	  kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	  kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	  kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,0]"]);
	  kony.automation.playback.waitFor(["frmMMStartDate","btnContinue"],15000);
	  kony.automation.button.click(["frmMMStartDate","btnContinue"]);
	  kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],15000);
	  kony.automation.button.click(["frmMMReview","btnTransfer"]);
	  expect(kony.automation.playback.waitFor(["frmMMConfirmation","lblSuccessMessage"],20000)).toEqual(true);
	  kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	}
	
	
	function TransferScheduleOnce() {
	  // :User Injected Code Snippet [//Prerequisite Verify_Search_In_FromAndToScreen - []]
	
	  // :End User Injected Code Snippet {0d4c824b-a9ad-8c0e-5c44-a3292aac96a1}
	  kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnThree"],10000);
	  kony.automation.button.click(["frmMMTransferAmount","keypad","btnThree"]);
	  kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	  kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	  kony.automation.button.click(["frmMMTransferAmount","btnContinue"]);
	  kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	  kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	  kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	  kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,0]"]);
	  kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	  // :User Injected Code Snippet [//Select a date - [3 lines]]
	  kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxNextMonth"], [178,125],null,[178,125]);
	  kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	  // :End User Injected Code Snippet {414f83d0-e0a2-735c-c437-a564878872a6}
	  kony.automation.playback.waitFor(["frmMMStartDate","btnContinue"],15000);
	  kony.automation.button.click(["frmMMStartDate","btnContinue"]);
	  kony.automation.playback.waitFor(["frmMMReview","btnTransfer"]);
	  kony.automation.button.click(["frmMMReview","btnTransfer"]);
	  expect(kony.automation.playback.waitFor(["frmMMConfirmation","btnNewTransfer"],20000)).toContain(true);
	  kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	}
	
	function SelectNumberOfTransfersAndThenConfirmTransfer(valTimePeriod,valueType) {
	  kony.automation.playback.waitFor(["frmMMDuration","segOptions"],10000);
	  kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,1]"]);
	  kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	  // :User Injected Code Snippet [//Select a Start Date - [1 lines]]
	  kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	  // :End User Injected Code Snippet {83f58aab-137d-4051-a051-d2801329c71d}
	  kony.automation.playback.waitFor(["frmMMNumberOfTransfers","keypad","btnFive"],15000);
	  kony.automation.button.click(["frmMMNumberOfTransfers","keypad","btnFive"]);
	  kony.automation.playback.waitFor(["frmMMNumberOfTransfers","btnContinue"],15000);
	  kony.automation.button.click(["frmMMNumberOfTransfers","btnContinue"]);
	  kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],15000);
	  kony.automation.button.click(["frmMMReview","btnTransfer"]);
	  expect(kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"],15000)).toBe(true);
	  kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"],10000);
	  kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	  kony.automation.playback.wait(10000);
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	}
	
	
	function ScheduledTransferDailyDateRange() {
	  kony.automation.playback.waitFor(["frmMMTransferAmount","keypad","btnThree"],10000);
	  kony.automation.button.click(["frmMMTransferAmount","keypad","btnThree"]);
	  kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	  kony.automation.button.click(["frmMMTransferAmount","keypad","btnZero"]);
	  kony.automation.playback.waitFor(["frmMMTransferAmount","btnContinue"],15000);
	  kony.automation.button.click(["frmMMTransferAmount","btnContinue"]);
	  kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	  kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	  kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	  kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,1]"]);
	  kony.automation.playback.waitFor(["frmMMDuration","segOptions"],15000);
	  kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,0]"]);
	  kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	  // :User Injected Code Snippet [//Select "Start" date - [1 lines]]
	  kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	  // :End User Injected Code Snippet {1b928f08-dcde-b4a4-8a34-66c9403263c8}
	  kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	  kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	  // :User Injected Code Snippet [//select "End" date - [3 lines]]
	  // kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
	
	  kony.automation.widget.touch(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	  // :End User Injected Code Snippet {52f4e47a-c3c2-0551-1005-1c35e4be2ef7}
	  kony.automation.playback.waitFor(["frmMMEndDate","btnContinue"],15000);
	  kony.automation.button.click(["frmMMEndDate","btnContinue"]);
	  kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],15000);
	  kony.automation.button.click(["frmMMReview","btnTransfer"]);
	  kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"],15000);
	  kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","lblLocateUs"],10000);
	}
	
	
	
	function SearchP2PInFromAndToScreen() {
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],10000);
	  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	  kony.automation.playback.wait(2000);
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	  kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	  kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmMMTransferFromAccount","tbxSearch"], [100,13],null,[100,56]);
	  kony.automation.textbox.enterText(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],"Business");
	  kony.automation.playback.wait(1000);
	  kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	  // :User Injected Code Snippet [//Expect Checking Account - [2 lines]]
	  //var checkingAcc = ;
	  expect(kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount","segTransactions[0,0]","lblAccountName"], "text")).toContain("Business");
	  // :End User Injected Code Snippet {391e3878-1a4a-6cd5-312f-c42e3dc249f3}
	  kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	  kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[0,0]"]);
	  kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmMMTransferToAccount","tbxSearch"], [72,22],null,[72,65]);
	  kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"samebank");
	  kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
	  // :User Injected Code Snippet [//Expect P2P recipient - [2 lines]]
	  var creditCard = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount","segTransactions[0,0]","lblAccountName"], "text");
	  expect(creditCard).toContain("samebank");
	  // :End User Injected Code Snippet {2875156c-0fc0-2414-6f01-69c86f59b306}
	  kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],10000);
	  kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[0,0]"]);
	}
	
	function SearchSameBankInFromAndToScreen() {
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],10000);
	  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	  kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	  kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmMMTransferFromAccount","tbxSearch"], [100,13],null,[100,56]);
	  kony.automation.textbox.enterText(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],"Business");
	  kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	  // :User Injected Code Snippet [//Expect Checking Account - [2 lines]]
	  //var checkingAcc = ;
	  expect(kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount","segTransactions[0,0]","lblAccountName"], "text")).toContain("Business");
	  // :End User Injected Code Snippet {391e3878-1a4a-6cd5-312f-c42e3dc249f3}
	  kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	  kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[0,0]"]);
	  kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmMMTransferToAccount","tbxSearch"], [72,22],null,[72,65]);
	  kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"samebank2");
	  kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
	  // :User Injected Code Snippet [//Expect Credit Card - [2 lines]]
	  var creditCard = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount","segTransactions[0,0]","lblAccountName"], "text");
	  expect(creditCard).toContain("samebank");
	  // :End User Injected Code Snippet {2875156c-0fc0-2414-6f01-69c86f59b306}
	  kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],10000);
	  kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[0,0]"]);
	}
	
	
	
	function SelectDateRangeAndConfirmTransfer(ValTimePeriod, valueType) {
	  //write your automation code here
	  kony.automation.playback.wait(5000);
	  kony.automation.playback.waitFor(["frmMMDuration","segOptions[0,0]"],10000);
	  kony.automation.segmentedui.click(["frmMMDuration","segOptions[0,0]"]);
	  kony.automation.playback.waitFor(["frmMMStartDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmMMStartDate","customCalendar","flxNextMonth"]);
	  // :User Injected Code Snippet [//Select "Start" date - [1 lines]]
	  kony.automation.widget.touch(["frmMMStartDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	  // :End User Injected Code Snippet {1b928f08-dcde-b4a4-8a34-66c9403263c8}
	  kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.playback.wait(5000);
	  kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	  kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxNextMonth"],15000);
	  kony.automation.flexcontainer.click(["frmMMEndDate","customCalendar","flxNextMonth"]);
	  // :User Injected Code Snippet [//select "End" date - [3 lines]]
	  // kony.automation.playback.waitFor(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"]);
	
	  kony.automation.widget.touch(["frmMMEndDate","customCalendar","flxMonth","m3CopyLabel0ac5bc532de9c4c"], null,null,[17,17]);
	  // :End User Injected Code Snippet {52f4e47a-c3c2-0551-1005-1c35e4be2ef7}
	  kony.automation.playback.waitFor(["frmMMEndDate","btnContinue"],15000);
	  kony.automation.button.click(["frmMMEndDate","btnContinue"]);
	  kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],10000);
	  kony.automation.button.click(["frmMMReview","btnTransfer"]);
	  try{
	    kony.automation.playback.wait(10000);
	    var errorMsg1 = kony.automation.widget.getWidgetProperty(["frmMMConfirmation","btnNewTransfer"], "text");
	
	    if(errorMsg1==="New Transfer"){
	      kony.print("Erro::Inside New Transfer");
	      kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"],15000);
	      kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	
	    }else{
	      kony.print("***********************");
	      var tempB=kony.automation.widget.getWidgetProperty(["frmMMConfirmation","lblMessage"], "text");
	      kony.print("TeLL Me the Value :"+tempB);
	      expect(tempB).toContain("Successfully Scheduled Transfer");
	      kony.automation.playback.waitFor(["frmMMConfirmation","btnToAccount"],15000);
	      kony.automation.button.click(["frmMMConfirmation","btnToAccount"]);
	    }
	
	  }catch(err){
	    kony.print("Erro::Unable to find element");
	
	    try{
	      kony.automation.playback.wait(10000);
	      var currentwidget1 = kony.automation.widget.getWidgetProperty(["frmLogout","btnLogIn"], "text");
	      kony.print("The current Form Name ::"+currentwidget1);
	      if(currentwidget1 === "Sign In"){
	
	        kony.automation.button.click(["frmLogout","btnLogIn"]);
	        kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
	        kony.automation.textbox.enterText(["frmLogin","login","tbxUsername"],"dbxJasmine1234SB");
	        kony.automation.textbox.enterText(["frmLogin","login","tbxPassword"],"Kony@1234");
	        kony.automation.button.click(["frmLogin","login","btnLogIn"]);
	        kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],5000);
	        /***********************************/
	
	        //ValTimePeriod, ValueType
	        SearchInFromAndToScreen(valueType);
	        EnterAmount();
			SelectFrequency(ValTimePeriod);
	        SelectDateRangeAndConfirmTransfer(ValTimePeriod, valueType);
	
	      }     
	
	    }catch(err1){
	      kony.print("Error::"+err1.message);
	    }
	  }
	  kony.automation.playback.wait(10000);
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	}
	
	function SelectFrequency(ValTimePeriod) {
	  kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	  kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	  kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	  switch(ValTimePeriod){
	          case "Daily":
	            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,1]"]);
	            break;
	          case "Weekly":
	            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,2]"]);
	            break;
	          case "HalfY":
	            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,6]"]);
	            break;
	          case "Yearly":
	            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,7]"]);
	            break;
	          case "QTR":
	            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,5]"]);
	            break;
	          case "Monthly":
	            kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,4]"]);
	            break;
	    }
	  
	}
	
	// function SelectFrequencyDaily() {
	//   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	//   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	//   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,1]"]);
	// }
	
	// function SelectFrequencyHalfYearly() {
	//   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	//   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	//   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,6]"]);
	// }
	
	
	// function SelectFrequencyMonthly() {
	//   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	//   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	//   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,4]"]);
	// }
	
	// function SelectFrequencyQuarterly() {
	//   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	//   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	//   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,5]"]);
	// }
	
	// function SelectFrequencyWeekly() {
	//   kony.automation.playback.waitFor(["frmMMReview","segDetails"]);
	//   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"]);
	//   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,2]"]);
	// }
	
	
	// function SelectFrequencyYearly() {
	//   kony.automation.playback.waitFor(["frmMMReview","segDetails"],15000);
	//   kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	//   kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],15000);
	//   kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,7]"]);
	// }
	
	function OpenManageRecipientP2P() {
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	  kony.automation.playback.wait(2000);
	  kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,4]"]);
	  kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"],15000);
	  kony.automation.playback.wait(2000);
	  kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[1,0]"]);
	  kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"],15000);
	}
	
	
	function SearchP2PInFromAndToScreen() {
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	  kony.automation.playback.wait(2000);
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
	  kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,1]"]);
	  kony.automation.playback.waitFor(["frmMMTransferFromAccount","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmMMTransferFromAccount","tbxSearch"], [100,13],null,[100,56]);
	  kony.automation.textbox.enterText(["frmMMTransferFromAccount","customSearchbox","tbxSearch"],"Business");
	  kony.automation.playback.wait(1000);
	  kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	  // :User Injected Code Snippet [//Expect Checking Account - [2 lines]]
	  //var checkingAcc = ;
	  expect(kony.automation.widget.getWidgetProperty(["frmMMTransferFromAccount","segTransactions[0,0]","lblAccountName"], "text")).toContain("Business");
	  // :End User Injected Code Snippet {391e3878-1a4a-6cd5-312f-c42e3dc249f3}
	  kony.automation.playback.waitFor(["frmMMTransferFromAccount","segTransactions"],15000);
	  kony.automation.segmentedui.click(["frmMMTransferFromAccount","segTransactions[0,0]"]);
	  kony.automation.playback.waitFor(["frmMMTransferToAccount","tbxSearch"],15000);
	  kony.automation.widget.touch(["frmMMTransferToAccount","tbxSearch"], [72,22],null,[72,65]);
	  kony.automation.textbox.enterText(["frmMMTransferToAccount","customSearchbox","tbxSearch"],"P2P");
	  kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
	  // :User Injected Code Snippet [//Expect P2P recipient - [2 lines]]
	  var creditCard = kony.automation.widget.getWidgetProperty(["frmMMTransferToAccount","segTransactions[0,0]","lblAccountName"], "text");
	  expect(creditCard).toContain("samebank");
	  // :End User Injected Code Snippet {2875156c-0fc0-2414-6f01-69c86f59b306}
	  kony.automation.playback.waitFor(["frmMMTransferToAccount","segTransactions"],15000);
	  kony.automation.segmentedui.click(["frmMMTransferToAccount","segTransactions[0,0]"]);
	}
	
	function GoBackToDB() {
	  kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"],10000);
	  kony.automation.playback.waitFor(["frmManageRecipientList","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmManageRecipientList","customHeader","flxBack"]);
	  kony.automation.playback.waitFor(["frmManageRecipientType","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmManageRecipientType","customHeader","flxBack"]);
	
	}
	
	function Logout() {
	  kony.automation.playback.wait(25000);
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
	  kony.automation.playback.wait(3000);
	  kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxLogout"],5000);
	  kony.automation.widget.touch(["frmUnifiedDashboard","Hamburger","flxLogout"], null,null,[34,28]);
	  kony.automation.playback.waitFor(["frmLogout","btnLogIn"],10000);
	  kony.automation.button.click(["frmLogout","btnLogIn"]);
	  kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
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
	
	it("addRecipientSameBank", async function() {
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"]);
		kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
		kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,4]"]);
		kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,4]"]);
		await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
		kony.automation.segmentedui.scrollToRow(["frmManageRecipientType","segRecipientType[0,0]"]);
		kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[0,0]"]);
		await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"]);
		kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);
	    await kony.automation.playback.waitFor(["frmEnterBenAccNo","keypad","btnOne"]);
	    
	    let accNo = getRandomNumber(9);
	    for(i=0; i<accNo.length; i++){
	        let btnID = getBtnID(accNo.charAt(i));
	        kony.automation.button.click(["frmEnterBenAccNo","keypad",btnID]);    
	    }
		// kony.automation.button.click(["frmEnterBenAccNo","keypad","btnOne"]);
		// kony.automation.button.click(["frmEnterBenAccNo","keypad","btnTwo"]);
		// kony.automation.button.click(["frmEnterBenAccNo","keypad","btnThree"]);
		// kony.automation.button.click(["frmEnterBenAccNo","keypad","btnOne"]);
		// kony.automation.button.click(["frmEnterBenAccNo","keypad","btnTwo"]);
		// kony.automation.button.click(["frmEnterBenAccNo","keypad","btnThree"]);
	    
	    kony.automation.button.click(["frmEnterBenAccNo","btnContinue"]);
		await kony.automation.playback.waitFor(["frmReEnterBenAccNo","keypad","btnOne"]);
	    
	    for(i=0; i<accNo.length; i++){
	        let btnID = getBtnID(accNo.charAt(i));
	        kony.automation.button.click(["frmReEnterBenAccNo","keypad",btnID]);    
	    }
	
	    // kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnOne"]);
		// kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnTwo"]);
		// kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnThree"]);
		// kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnOne"]);
		// kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnTwo"]);
		// kony.automation.button.click(["frmReEnterBenAccNo","keypad","btnThree"]);
		kony.automation.button.click(["frmReEnterBenAccNo","btnContinue"]);
	    await kony.automation.playback.waitFor(["frmBenName","txtRecipientName"]);
	    
	    let recipientName = "samebank"+getRandomString(5);
		kony.automation.textbox.enterText(["frmBenName","txtRecipientName"],recipientName);
		kony.automation.button.click(["frmBenName","btnContinue"]);
		await kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"]);
		await kony.automation.playback.wait(1000);
		kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
		await kony.automation.playback.waitFor(["frmContracts","btnContinue"]);
		kony.automation.button.click(["frmContracts","btnContinue"]);
		await kony.automation.playback.waitFor(["frmBenVerifyDetails","btnContinue"]);
		kony.automation.button.click(["frmBenVerifyDetails","btnContinue"]);
		await kony.automation.playback.waitFor(["frmAcknowledgement","lblSuccessMessage"]);
		// :User Injected Code Snippet [// - [1 lines]]
		expect(kony.automation.widget.getWidgetProperty(["frmAcknowledgement","lblSuccessMessage"], "text")).toContain("success");
		// :End User Injected Code Snippet {6828c464-5387-da29-2af1-e55d863135c9}
		await kony.automation.playback.waitFor(["frmAcknowledgement","btnNewTransfer"]);
		kony.automation.button.click(["frmAcknowledgement","btnNewTransfer"]);
		await kony.automation.playback.waitFor(["frmMMTransferFromAccount","customHeader","btnRight"]);
		kony.automation.button.click(["frmMMTransferFromAccount","customHeader","btnRight"]);
		await kony.automation.playback.waitFor(["frmManageRecipientType","customHeader","flxBack"]);
		kony.automation.flexcontainer.click(["frmManageRecipientType","customHeader","flxBack"]);
	});
	
	it("Verify_OneTimeTransfer", async function() {
	  // :User Injected Code Snippet [//Search and enter Amount - [2 lines]]
	  SearchInFromAndToScreen("normal");
	  EnterAmount();
	  // :End User Injected Code Snippet {77fb80f9-55cf-a5b4-3a11-b38cc89f3d99}
	  await kony.automation.playback.waitFor(["frmMMReview","segDetails"],10000);
	  kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
	  await kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],10000);
	  kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,0]"]);
	  await kony.automation.playback.waitFor(["frmMMStartDate","btnContinue"],10000);
	  kony.automation.button.click(["frmMMStartDate","btnContinue"]);
	  await kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],10000);
	  kony.automation.button.click(["frmMMReview","btnTransfer"]);
	  expect(kony.automation.playback.waitFor(["frmMMConfirmation","btnNewTransfer"],20000)).toBe(true);
	  await kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"],10000);
	  kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
	  await kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
	  //Logout();
	});
	
	it("Verify_OneTimeTransfer_SameBank", async function() {
	
	  SearchInFromAndToScreen("P2P");
	  EnterAmount();
	  SelectFrequencyOnceAndTransfer();
	  //Logout();
	},180000);
	
	it("Verify_ScheduledTransferDaily_DateRange", async function() {
	  
	  SearchInFromAndToScreen("normal");
	  EnterAmount();
	  SelectFrequency("Daily");
	  SelectDateRangeAndConfirmTransfer("Daily","normal");
	},180000);
	
	it("Verify_ScheduledTransferDaily_DateRange_SameBank", async function() {
	  
	  SearchInFromAndToScreen("P2P");
	  EnterAmount();
	  SelectFrequency("Daily");
	  SelectDateRangeAndConfirmTransfer("Daily","P2P");
	},180000);
	
	it("Verify_ScheduledTransferDaily_NoOfOccurances", async function() {  
	
	  SearchInFromAndToScreen("normal");
	  EnterAmount();
	  SelectFrequency("Daily");
	  SelectNumberOfTransfersAndThenConfirmTransfer("Daily","normal");
	  
	},180000);
	
	it("Verify_ScheduledTransferDaily_NoOfOccurances_SameBank", async function() {  
	
	  SearchInFromAndToScreen("P2P");
	  EnterAmount();
	  SelectFrequency("Daily");
	  SelectNumberOfTransfersAndThenConfirmTransfer("Daily","P2P");
	  
	},180000);
	
	it("Verify_ScheduledTransferHalfY_DateRange", async function() {
	  
	  SearchInFromAndToScreen("normal");
	  EnterAmount();
	  SelectFrequency("HalfY");
	  SelectDateRangeAndConfirmTransfer("HalfY","normal");
	},180000);
	
	it("Verify_ScheduledTransferHalfY_DateRange_SameBank", async function() {
	  
	  SearchInFromAndToScreen("P2P");
	  EnterAmount();
	  SelectFrequency("HalfY");
	  SelectDateRangeAndConfirmTransfer("HalfY","P2P");
	},180000);
	
	it("Verify_ScheduledTransferHalfY_NoOfOccurances", async function() {  
	
	  SearchInFromAndToScreen("normal");
	  EnterAmount();
	  SelectFrequency("HalfY");
	  SelectNumberOfTransfersAndThenConfirmTransfer("HalfY","normal");
	  
	},180000);
	
	it("Verify_ScheduledTransferHalfY_NoOfOccurances_SameBank", async function() {  
	
	  SearchInFromAndToScreen("P2P");
	  EnterAmount();
	  SelectFrequency("HalfY");
	  SelectNumberOfTransfersAndThenConfirmTransfer("HalfY","P2P");
	  
	},180000);
	
	it("Verify_ScheduledTransferMonthly_DateRange", async function() {
	  
	  SearchInFromAndToScreen("normal");
	  EnterAmount();
	  SelectFrequency("Monthly");
	  SelectDateRangeAndConfirmTransfer("Monthly","normal");
	
	},180000);
	
	it("Verify_ScheduledTransferMonthly_DateRange_SameBank", async function() {
	  
	  SearchInFromAndToScreen("P2P");
	  EnterAmount();
	  SelectFrequency("Monthly");
	  SelectDateRangeAndConfirmTransfer("Monthly","P2P");
	},180000);
	
	it("Verify_ScheduledTransferMonthly_NoOfOccurances", async function() {  
	
	  SearchInFromAndToScreen("normal");
	  EnterAmount();
	  SelectFrequency("Monthly");
	  SelectNumberOfTransfersAndThenConfirmTransfer("Monthly","normal");
	
	},180000);
	
	it("Verify_ScheduledTransferMonthly_NoOfOccurances_SameBank", async function() {  
	
	  SearchInFromAndToScreen("P2P");
	  EnterAmount();
	  SelectFrequency("Monthly");
	  SelectNumberOfTransfersAndThenConfirmTransfer("Monthly","P2P");
	  
	},180000);
	
	it("Verify_ScheduledTransferQTR_DateRange", async function() {
	  
	  SearchInFromAndToScreen("normal");
	  EnterAmount();
	  SelectFrequency("QTR");
	  SelectDateRangeAndConfirmTransfer("QTR","normal");
	},180000);
	
	it("Verify_ScheduledTransferQTR_DateRange_SameBank", async function() {
	  
	  SearchInFromAndToScreen("P2P");
	  EnterAmount();
	  SelectFrequency("QTR");
	  SelectDateRangeAndConfirmTransfer("QTR","P2P");
	},180000);
	
	it("Verify_ScheduledTransferQTR_NoOfOccurances", async function() {  
	
	  SearchInFromAndToScreen("normal");
	  EnterAmount();
	  SelectFrequency("QTR");
	  SelectNumberOfTransfersAndThenConfirmTransfer("QTR","normal");
	  
	},180000);
	
	it("Verify_ScheduledTransferQTR_NoOfOccurances_SameBank", async function() {  
	
	  SearchInFromAndToScreen("P2P");
	  EnterAmount();
	  SelectFrequency("QTR");
	  SelectNumberOfTransfersAndThenConfirmTransfer("QTR","P2P");
	  
	},180000);
	
	it("Verify_ScheduledTransferWeekly_DateRange", async function() {
	  
	  SearchInFromAndToScreen("normal");
	  EnterAmount();
	  SelectFrequency("Weekly");
	  SelectDateRangeAndConfirmTransfer("Weekly","normal");
	},180000);
	
	it("Verify_ScheduledTransferWeekly_DateRange_SameBank", async function() {
	  
	  SearchInFromAndToScreen("P2P");
	  EnterAmount();
	  SelectFrequency("Weekly");
	  SelectDateRangeAndConfirmTransfer("Weekly","P2P");
	},180000);
	
	it("Verify_ScheduledTransferWeekly_NoOfOccurances", async function() {  
	
	  SearchInFromAndToScreen("normal");
	  EnterAmount();
	  SelectFrequency("Weekly");
	  SelectNumberOfTransfersAndThenConfirmTransfer("Weekly","normal");
	  
	},180000);
	
	it("Verify_ScheduledTransferWeekly_NoOfOccurances_SameBank", async function() {  
	
	  SearchInFromAndToScreen("P2P");
	  EnterAmount();
	  SelectFrequency("Weekly");
	  SelectNumberOfTransfersAndThenConfirmTransfer("Weekly","P2P");
	  
	},180000);
	
	it("Verify_ScheduledTransferYearly_DateRange", async function() {
	  
	  SearchInFromAndToScreen("normal");
	  EnterAmount();
	  SelectFrequency("Yearly");
	  SelectDateRangeAndConfirmTransfer("Yearly","normal");
	  
	},180000);
	
	it("Verify_ScheduledTransferYearly_DateRange_SameBank", async function() {
	  
	  SearchInFromAndToScreen("P2P");
	  EnterAmount();
	  SelectFrequency("Yearly");
	  SelectDateRangeAndConfirmTransfer("Yearly","P2P");
	},180000);
	
	it("Verify_ScheduledTransferYearly_NoOfOccurances", async function() {  
	
	  SearchInFromAndToScreen("normal");
	  EnterAmount();
	  SelectFrequency("Yearly");
	  SelectNumberOfTransfersAndThenConfirmTransfer("Yearly","normal");
	  
	},180000);
	
	it("Verify_ScheduledTransferYearly_NoOfOccurances_SameBank", async function() {  
	
	  SearchInFromAndToScreen("P2P");
	  kony.automation.playback.wait(15000);
	  EnterAmount();
	  SelectFrequency("Yearly");
	  SelectNumberOfTransfersAndThenConfirmTransfer("Yearly","P2P");
	  
	},180000);
	
	it("deleteRecipientSameBank", async function() {
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"]);
		kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
		kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,4]"]);
		kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,4]"]);
		await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
		kony.automation.segmentedui.scrollToRow(["frmManageRecipientType","segRecipientType[0,0]"]);
		kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[0,0]"]);
		await kony.automation.playback.waitFor(["frmManageRecipientList","tbxSearch"]);
		kony.automation.widget.touch(["frmManageRecipientList","tbxSearch"], [219,19],null,null);
		kony.automation.textbox.enterText(["frmManageRecipientList","customSearchbox","tbxSearch"],"samebank");
		await kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"]);
		kony.automation.segmentedui.scrollToRow(["frmManageRecipientList","segRecipients[0,0]"]);
		kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);
		await kony.automation.playback.waitFor(["frmManageTransferRecipient","customHeader","flxSearch"]);
		kony.automation.flexcontainer.click(["frmManageTransferRecipient","customHeader","flxSearch"]);
		await kony.automation.playback.waitFor(["frmManageTransferRecipientInfo","btnDeleteRecipient"]);
		kony.automation.button.click(["frmManageTransferRecipientInfo","btnDeleteRecipient"]);
		await kony.automation.playback.wait(1000);
		kony.automation.alert.click(0);
		await kony.automation.playback.wait(1000);
		await kony.automation.playback.waitFor(["frmManageRecipientList","customHeader","flxBack"]);
		kony.automation.flexcontainer.click(["frmManageRecipientList","customHeader","flxBack"]);
		await kony.automation.playback.waitFor(["frmManageRecipientType","customHeader","flxBack"]);
		kony.automation.flexcontainer.click(["frmManageRecipientType","customHeader","flxBack"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","lblACHTransaction"]);
	});
});