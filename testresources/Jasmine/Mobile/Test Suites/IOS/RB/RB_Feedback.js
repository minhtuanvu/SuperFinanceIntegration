describe("RB_Feedback", function() {
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
	});
	
	
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
	
	async function sendFeedback(){
		await kony.automation.playback.waitFor(["frmInAppFeedbackRating","imgStar4"]);
		kony.automation.flexcontainer.click(["frmInAppFeedbackRating","flxStar4"]);
		await kony.automation.playback.wait(2000);
		kony.automation.textarea.enterText(["frmInAppFeedbackRating","textarea"],"Optional comment");
		kony.automation.button.click(["frmInAppFeedbackRating","btnSubmit"]);
		await kony.automation.playback.waitFor(["frmFeedBackSuccess","btnDone"]);
		kony.automation.button.click(["frmFeedBackSuccess","btnDone"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","flxDashboard","segAccounts"]);
	}
	
	// async function openMenu(){
	// 	kony.automation.flexcontainer.click(["frmUnifiedDashboard","customFooter","flxMore"]);
	// 	await kony.automation.playback.wait(1000);
	// 	await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxMenu","segHamburger"]);
	// }
	
	async function openMenu(menu){
		kony.automation.flexcontainer.click(["frmUnifiedDashboard","customFooter","flxMore"]);
		await kony.automation.playback.wait(1000);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxMenu","segHamburger"]);
		await kony.automation.playback.wait(1000);
		var menuOptions = kony.automation.widget.getWidgetProperty(["frmUnifiedDashboard","Hamburger","flxMenu","segHamburger"], "data");
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
	    }else{
	      expect(menuIndex).toBeGreaterThan(-1);
	    }
	}
	
	async function listOfRecipients(accountType){
		if(accountType === "PToP") {
	      await listOfP2PRecipients();
	      return;
	    }
		await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
	
		var segAccountType = kony.automation.widget.getWidgetProperty(["frmManageRecipientType","segRecipientType"],"data");
		kony.print("segAccountTyep: "+segAccountType);
		var indexAccountType = -1;
		for(i=0; i<segAccountType[0][1].length; i++){
	      if(segAccountType[0][1][i].lblTransactionMode === accountType){
	        indexAccountType = i;
	        break;
	      }
	    }
		if(indexAccountType > -1){
		kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[0,"+indexAccountType+"]"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmManageRecipientList","flxMainContainer","segRecipients"]);
		// :User Injected Code Snippet [// - [3 lines]]
		var segSize = kony.automation.widget.getWidgetProperty(["frmManageRecipientList","flxMainContainer","segRecipients"],"data");
		
		expect(true).toBe(  segSize.length >=1);
		// :End User Injected Code Snippet {b36868d0-465d-3125-0fdd-6359df041f5d}
	    }else{
	      expect(indexAccountType).toBeGreaterThan(-1);
	    }
	}
	
	async function listOfP2PRecipients(){
		await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
		kony.automation.segmentedui.click(["frmManageRecipientType","segRecipientType[1,0]"]);
		await kony.automation.playback.wait(3000);
		await kony.automation.playback.waitFor(["frmManageRecipientList","flxMainContainer","segRecipients"]);
		// :User Injected Code Snippet [// - [3 lines]]
		var segSize = kony.automation.widget.getWidgetProperty(["frmManageRecipientList","flxMainContainer","segRecipients"],"data");
		
		expect(true).toBe(  segSize.length >=1);
	}
	async function addRecipientSameBank(name){
		let benName=name+" "+getRandomString(5);
		let accNumber = getRandomNumber(6);
	  
		await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"]);
		kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);
		await kony.automation.playback.waitFor(["frmEnterBenAccNo","keypad","btnOne"]);
	  
		for(i=0;i<accNumber.length; i++){
			let btnID = getBtnID(accNumber.charAt(i));
			kony.automation.button.click(["frmEnterBenAccNo","keypad", btnID]);
		}
	  
		kony.automation.button.click(["frmEnterBenAccNo","btnContinue"]);
		await kony.automation.playback.waitFor(["frmReEnterBenAccNo","keypad","btnOne"]);
	
		for(i=0;i<accNumber.length; i++){
			let btnID = getBtnID(accNumber.charAt(i));
			kony.automation.button.click(["frmReEnterBenAccNo","keypad", btnID]);
		}
	
		kony.automation.button.click(["frmReEnterBenAccNo","btnContinue"]);
		kony.automation.textbox.enterText(["frmBenName","txtRecipientName"],benName);
		await kony.automation.playback.waitFor(["frmBenName","btnContinue"]);
		kony.automation.button.click(["frmBenName","btnContinue"]);
	  
		await kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"]);
		kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
		await kony.automation.playback.wait(2000);
		kony.automation.button.click(["frmContracts","btnContinue"]);
	  
		await kony.automation.playback.waitFor(["frmBenVerifyDetails","btnContinue"]);
		kony.automation.button.click(["frmBenVerifyDetails","btnContinue"]);
		await kony.automation.playback.wait(3000);
		// :User Injected Code Snippet [// - [2 lines]]
		await kony.automation.playback.waitFor(["frmAcknowledgement","lblSuccessMessage"]);
		expect(kony.automation.widget.getWidgetProperty(["frmAcknowledgement","lblSuccessMessage"], "text")).toContain("success");
		// :End User Injected Code Snippet {6c03a7a9-f57f-f8d9-62f8-21a0ec441e4f}
		await kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"]);
		kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","imgAccounts"]);
	}
	
	async function addRecipientExternalAccount(name){
		let benName=name+" "+getRandomString(5);
		let accNumber = getRandomNumber(4);
		let routNumber = getRandomNumber(6);
			
		await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"]);
		kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);
		await kony.automation.playback.waitFor(["frmAddBenRoutNo","keypad","btnOne"]);
	
		for(i=0;i<routNumber.length; i++){
			let btnID = getBtnID(routNumber.charAt(i));
			kony.automation.button.click(["frmAddBenRoutNo","keypad", btnID]);
		}
	
		kony.automation.button.click(["frmAddBenRoutNo","btnContinue"]);
		await kony.automation.playback.waitFor(["frmEnterBenAccNo","keypad","btnOne"]);
	  
		for(i=0;i<accNumber.length; i++){
			let btnID = getBtnID(accNumber.charAt(i));
			kony.automation.button.click(["frmEnterBenAccNo","keypad", btnID]);
		}
	
		kony.automation.button.click(["frmEnterBenAccNo","btnContinue"]);
		await kony.automation.playback.waitFor(["frmReEnterBenAccNo","keypad","btnOne"]);
		
		for(i=0;i<accNumber.length; i++){
			let btnID = getBtnID(accNumber.charAt(i));
			kony.automation.button.click(["frmReEnterBenAccNo","keypad", btnID]);
		}
	
		kony.automation.button.click(["frmReEnterBenAccNo","btnContinue"]);
		await kony.automation.playback.waitFor(["frmBenName","txtRecipientName"]);
		kony.automation.textbox.enterText(["frmBenName","txtRecipientName"],benName);
		kony.automation.button.click(["frmBenName","btnContinue"]);
	  
		await kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"]);
		kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
		await kony.automation.playback.wait(2000);
		kony.automation.button.click(["frmContracts","btnContinue"]);
	  
		await kony.automation.playback.waitFor(["frmBenVerifyDetails","btnContinue"]);
		kony.automation.button.click(["frmBenVerifyDetails","btnContinue"]);
		await kony.automation.playback.wait(3000);
	// :User Injected Code Snippet [// - [2 lines]]
		await kony.automation.playback.waitFor(["frmAcknowledgement","lblSuccessMessage"]);
		expect(kony.automation.widget.getWidgetProperty(["frmAcknowledgement","lblSuccessMessage"], "text")).toContain("success");
		// :End User Injected Code Snippet {6c03a7a9-f57f-f8d9-62f8-21a0ec441e4f}
		await kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"]);
		kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","imgAccounts"]);
	}
	
	async function addRecipientInternationalAccount(name){
		let benName=name+" "+getRandomString(5);
		let accNumber = getRandomNumber(9);
	  
		await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"]);
		kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);
		await kony.automation.playback.waitFor(["frmBenSwiftCode","txtSwiftCode"]);
		kony.automation.textbox.enterText(["frmBenSwiftCode","txtSwiftCode"],"BOFAUS3N");
		kony.automation.button.click(["frmBenSwiftCode","btnContinue"]);
		await kony.automation.playback.waitFor(["frmEnterBenAccNumorIBAN","tbxAccountNumber"]);
		kony.automation.textbox.enterText(["frmEnterBenAccNumorIBAN","tbxAccountNumber"],accNumber);
		kony.automation.button.click(["frmEnterBenAccNumorIBAN","btnContinue"]);
		await kony.automation.playback.waitFor(["frmReEnterBenAccNumorIBAN","tbxReEnteredAccountNumber"]);
		kony.automation.textbox.enterText(["frmReEnterBenAccNumorIBAN","tbxReEnteredAccountNumber"],accNumber);
		kony.automation.button.click(["frmReEnterBenAccNumorIBAN","btnContinue"]);
		await kony.automation.playback.waitFor(["frmBenName","txtRecipientName"]);
		kony.automation.textbox.enterText(["frmBenName","txtRecipientName"],benName);
		kony.automation.button.click(["frmBenName","btnContinue"]);
	
		await kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"]);
		kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
		await kony.automation.playback.wait(2000);
		kony.automation.button.click(["frmContracts","btnContinue"]);
	
		await kony.automation.playback.waitFor(["frmBenVerifyDetails","btnContinue"]);
		kony.automation.button.click(["frmBenVerifyDetails","btnContinue"]);
		// :User Injected Code Snippet [// - [2 lines]]
		await kony.automation.playback.waitFor(["frmAcknowledgement","lblSuccessMessage"]);
		expect(kony.automation.widget.getWidgetProperty(["frmAcknowledgement","lblSuccessMessage"], "text")).toContain("success");
		// :End User Injected Code Snippet {6c03a7a9-f57f-f8d9-62f8-21a0ec441e4f}
		await kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"]);
		kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","imgAccounts"]);
	}
	
	async function addRecipientPToP(name){
		let unique_PayeeName=name+" "+getRandomString(5);
		let phoneNumber = getRandomNumber(9);
		await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"]);
		kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);
		await kony.automation.playback.waitFor(["frmRegP2PContactType","btnPhoneNumber"]);
		kony.automation.button.click(["frmRegP2PContactType","btnPhoneNumber"]);
	  
		await kony.automation.playback.waitFor(["frmP2PRecPhoneNo","keypad","btnOne"]);
	
		for(i=0;i<phoneNumber.length; i++){
			let btnID = getBtnID(phoneNumber.charAt(i));
			kony.automation.button.click(["frmP2PRecPhoneNo","keypad", btnID]);
		}
	  
		kony.automation.button.click(["frmP2PRecPhoneNo","btnContinue"]);
		await kony.automation.playback.waitFor(["frmP2PRecipientName","txtRecipientName"]);
		kony.automation.textbox.enterText(["frmP2PRecipientName","txtRecipientName"],unique_PayeeName);
		kony.automation.button.click(["frmP2PRecipientName","btnContinue"]);
	
		await kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"]);
		kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
		await kony.automation.playback.wait(2000);
		kony.automation.button.click(["frmContracts","btnContinue"]);
	  
		await kony.automation.playback.waitFor(["frmP2PVerifyDetails","btnContinue"]);
		kony.automation.button.click(["frmP2PVerifyDetails","btnContinue"]);
		await kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"]);
		kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","imgAccounts"]);
	}
	
	async function addRecipientPToPWithEmail(name){
		let unique_PayeeName=name+" "+getRandomString(5);
		let email = "p2pRandom." + getRandomString(9) + "@email.com";
		await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"]);
		kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);	
		await kony.automation.playback.waitFor(["frmRegP2PContactType","btnEmail"]);
		kony.automation.button.click(["frmRegP2PContactType","btnEmail"]);
		await kony.automation.playback.waitFor(["frmP2PRecEmail","txtEmailId"]);
		kony.automation.textbox.enterText(["frmP2PRecEmail","txtEmailId"], email);
		await kony.automation.playback.waitFor(["frmP2PRecEmail","btnContinue"]);
		kony.automation.button.click(["frmP2PRecEmail","btnContinue"]);
	  
		await kony.automation.playback.waitFor(["frmP2PRecipientName","txtRecipientName"]);
		kony.automation.textbox.enterText(["frmP2PRecipientName","txtRecipientName"],unique_PayeeName);
		kony.automation.button.click(["frmP2PRecipientName","btnContinue"]);
	
		await kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"]);
		kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
		await kony.automation.playback.wait(2000);
		kony.automation.button.click(["frmContracts","btnContinue"]);
	  
		await kony.automation.playback.waitFor(["frmP2PVerifyDetails","btnContinue"]);
		kony.automation.button.click(["frmP2PVerifyDetails","btnContinue"]);
		await kony.automation.playback.waitFor(["frmAcknowledgement","btnDashboard"]);
		kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","customFooter","imgAccounts"]);
	}
	
	async function openManageRecipientPage(){
		await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"]);
		kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,3]"]);
		await kony.automation.playback.wait(2000);
		await kony.automation.playback.waitFor(["frmManageRecipientType","segRecipientType"]);
	}
	
	async function searchRecipient(name){
		await kony.automation.playback.waitFor(["frmManageRecipientList","tbxSearch"]);
		kony.automation.widget.touch(["frmManageRecipientList","tbxSearch"], [205,24],null,null);
		await kony.automation.playback.wait(1000);
		kony.automation.textbox.enterText(["frmManageRecipientList","customSearchbox","tbxSearch"],name);
		let segRecipients = await kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"],3000);
		
		if(segRecipients){
			let data = kony.automation.widget.getWidgetProperty(["frmManageRecipientList","segRecipients"], "data");
			expect(data).not.toBe(null);
		}
		await kony.automation.playback.wait(1000);
		kony.automation.button.click(["frmManageRecipientList","customSearchbox","btnCancel"]);
		await kony.automation.playback.wait(2000);
	}
	
	async function selectAccountAndInitiateTransfer(account){
		await kony.automation.playback.waitFor(["frmManageRecipientList","tbxSearch"]);
		kony.automation.widget.touch(["frmManageRecipientList","tbxSearch"], [101,11],null,null);
		kony.automation.textbox.enterText(["frmManageRecipientList","customSearchbox","tbxSearch"],account);
		kony.automation.segmentedui.scrollToRow(["frmManageRecipientList","segRecipients[0,0]"]);
		kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);
		await kony.automation.playback.waitFor(["frmManageTransferRecipient","btnTransfer"]);
		kony.automation.button.click(["frmManageTransferRecipient","btnTransfer"]);	
	}
	
	async function selectPToPAccountAndInitiateTransfer(account){
		await kony.automation.playback.waitFor(["frmManageRecipientList","tbxSearch"]);
		kony.automation.widget.touch(["frmManageRecipientList","tbxSearch"], [101,11],null,null);
		await kony.automation.playback.wait(2000);
		kony.automation.textbox.enterText(["frmManageRecipientList","customSearchbox","tbxSearch"],"PToPRecipient");
		await kony.automation.playback.wait(2000);
		kony.automation.segmentedui.scrollToRow(["frmManageRecipientList","segRecipients[0,0]"]);
		await kony.automation.playback.wait(1000);
		kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);
		await kony.automation.playback.waitFor(["frmManageP2pRecipient","btnPayAPerson"]);
		kony.automation.button.click(["frmManageP2pRecipient","btnPayAPerson"]);
	}
	
	async function goBackToDashboardFromManageRecipient(){
		await kony.automation.playback.waitFor(["frmManageRecipientList","flxMainContainer","segRecipients"]);
		// :User Injected Code Snippet [// - [3 lines]]
		kony.automation.device.deviceBack();
		await kony.automation.playback.wait(1000);
		kony.automation.device.deviceBack();
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
	
	it("SendFeedback", async function() {
		// :User Injected Code Snippet [// - [2 lines]]
		await openMenu("Feedback");
		await sendFeedback();
		// :End User Injected Code Snippet {3f9a061b-0475-878d-c1ad-b8f81fc57711}
	});
});