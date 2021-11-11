function lockCard(){
	if(isCardUnlocked()){	
      kony.automation.switch.toggle(["frmCardManageHome","switchActiveorInactive"]);
      kony.automation.playback.waitFor(["frmTermsAndCondition","flxCheckBox"],15000);
      kony.automation.flexcontainer.click(["frmTermsAndCondition","flxCheckBox"]);
      kony.automation.button.click(["frmTermsAndCondition","btnContinue"]);
      kony.automation.playback.waitFor(["frmCardManageHome","customPopup","lblPopup"], 15000);
      expect(kony.automation.widget.getWidgetProperty(["frmCardManageHome","customPopup","lblPopup"], "text")).toContain("success");
	}
}

function goToDashboardFromCardManagement(){
	kony.automation.playback.waitFor(["frmCardManageHome","customHeader","flxBack"],15000);
	kony.automation.flexcontainer.click(["frmCardManageHome","customHeader","flxBack"]);
	kony.automation.segmentedui.click(["frmCardManageHome","Hamburger","segHamburger[0,0]"]);
	
	VerifyAccountsDashBoard();
}

function goTocardManagement(){
  openMenu("Card Management");
}

function unlockCard(){
	
  if(!isCardUnlocked()){	
      kony.automation.switch.toggle(["frmCardManageHome","switchActiveorInactive"]);
      kony.automation.playback.waitFor(["frmCardManageHome","customPopup","lblPopup"], 15000);
      expect(kony.automation.widget.getWidgetProperty(["frmCardManageHome","customPopup","lblPopup"], "text")).toContain("success");
	}
}

function isCardUnlocked(){
	kony.automation.playback.waitFor(["frmCardManageHome","switchActiveorInactive"],15000);	
	let selectedIndex = kony.automation.widget.getWidgetProperty(["frmCardManageHome","switchActiveorInactive"] , "selectedIndex");
	
	return (selectedIndex === 1) ? true : false;
}

function changePin(){
  if(isCardUnlocked()){
    kony.automation.playback.waitFor(["frmCardManageHome","flxChangePin"],15000);
	kony.automation.flexcontainer.click(["frmCardManageHome","flxChangePin"]);
	kony.automation.playback.waitFor(["frmCardMngNewPin","txtCurrentPinValue"],15000);
	kony.automation.textbox.enterText(["frmCardMngNewPin","txtCurrentPinValue"],"4040");
	kony.automation.textbox.enterText(["frmCardMngNewPin","txtNewPin"],"0404");
	kony.automation.textbox.enterText(["frmCardMngNewPin","txtConfirmPin"],"0404");
	kony.automation.button.click(["frmCardMngNewPin","btnContinue"]);
	kony.automation.playback.waitFor(["frmCardManageHome","customPopup","lblPopup"], 15000);
	expect(kony.automation.widget.getWidgetProperty(["frmCardManageHome","customPopup","lblPopup"], "text")).toContain("success");
  }else{
    expect("Crad is locked ").toEqual("Please unlock the card first to change pin.");
  }
}

function setPurchaseLimit(){
	if(isCardUnlocked()){
      kony.automation.playback.waitFor(["frmCardManageHome","flxSetPurchaseLimit"],15000);
      kony.automation.flexcontainer.click(["frmCardManageHome","flxSetPurchaseLimit"]);
      let btnMinus = kony.automation.playback.waitFor(["frmSetPurchaseCardLimit","btnMinus"],5000);
      if(btnMinus){
          kony.automation.button.click(["frmSetPurchaseCardLimit","btnMinus"]);
      }else{
          kony.automation.button.click(["frmSetPurchaseCardLimit","btnPlus"]);
      }
      kony.automation.button.click(["frmSetPurchaseCardLimit","btnConfirm"]);
      kony.automation.playback.waitFor(["frmSetCardLimitConfirmation","lblUpdateMsg"],15000);
      expect(kony.automation.widget.getWidgetProperty(["frmSetCardLimitConfirmation","lblUpdateMsg"], "text")).toContain("updated");
      kony.automation.playback.waitFor(["frmSetCardLimitConfirmation","btnCardsManagement"],15000);
      kony.automation.button.click(["frmSetCardLimitConfirmation","btnCardsManagement"]);
    }else{
      expect("Crad is locked ").toEqual("Please unlock the card first to set purchase limit.");
    }
}

function setATMWithdrawalLimit(){
	if(isCardUnlocked()){
      kony.automation.playback.waitFor(["frmCardManageHome","flxSetATMWithdrawalLimit"],15000);
      kony.automation.flexcontainer.click(["frmCardManageHome","flxSetATMWithdrawalLimit"]);
      let btnMinus = kony.automation.playback.waitFor(["frmSetWithdrawalCardLimit","btnMinus"],5000);
      if(btnMinus){
          kony.automation.button.click(["frmSetWithdrawalCardLimit","btnMinus"]);
      }else{
          kony.automation.button.click(["frmSetWithdrawalCardLimit","btnPlus"]);
      }

      kony.automation.button.click(["frmSetWithdrawalCardLimit","btnConfirm"]);
      kony.automation.playback.waitFor(["frmSetCardLimitConfirmation","lblUpdateMsg"],15000);
      expect(kony.automation.widget.getWidgetProperty(["frmSetCardLimitConfirmation","lblUpdateMsg"], "text")).toContain("updated");
      kony.automation.playback.waitFor(["frmSetCardLimitConfirmation","btnCardsManagement"],15000);
      kony.automation.button.click(["frmSetCardLimitConfirmation","btnCardsManagement"]);
    }else{
      expect("Crad is locked ").toEqual("Please unlock the card first to set purchase limit.");
    }
}

function verifyCardNoLastDigits(){
	kony.automation.playback.waitFor(["frmCardManageHome","lblCardNoLastDigits"],15000);
	expect(kony.automation.widget.getWidgetProperty(["frmCardManageHome","lblCardNoLastDigits"], "text")).not.toContain("X");  
}

function selectTravalDates(){
	kony.automation.playback.waitFor(["frmManageTravelStartDate","customCalendar","flxNextMonth"],15000);
	kony.automation.flexcontainer.click(["frmManageTravelStartDate","customCalendar","flxNextMonth"]);
	kony.automation.widget.touch(["frmManageTravelStartDate","customCalendar","m3CopyLabel0j8ef8b8e650148"], null,null,[20,11]);
	kony.automation.playback.waitFor(["frmManageTravelStartDate","btnContinue"],15000);
	kony.automation.button.click(["frmManageTravelStartDate","btnContinue"]);
	kony.automation.playback.waitFor(["frmManageTravelEndDate","customCalendar","flxNextMonth"],15000);
	kony.automation.flexcontainer.click(["frmManageTravelEndDate","customCalendar","flxNextMonth"]);
	kony.automation.playback.waitFor(["frmManageTravelEndDate","customCalendar","flxNextMonth"],15000);
	kony.automation.flexcontainer.click(["frmManageTravelEndDate","customCalendar","flxNextMonth"]);	 
	kony.automation.widget.touch(["frmManageTravelEndDate","customCalendar","m3CopyLabel0e9e5d9d7b7e84d"], null,null,[20,11]); 
	kony.automation.playback.waitFor(["frmManageTravelEndDate","btnContinue"],15000);
	kony.automation.button.click(["frmManageTravelEndDate","btnContinue"]);	
}

function openManageTravelPlans(){
	kony.automation.playback.waitFor(["frmCardManageHome","btnManageTravelPlans"],15000);
	kony.automation.button.click(["frmCardManageHome","btnManageTravelPlans"]);
}

function clickOnAddNewTravelPlan(){
	kony.automation.playback.waitFor(["frmManageTravelPlans","btnAddTravelPlans"],15000);
	kony.automation.button.click(["frmManageTravelPlans","btnAddTravelPlans"]);
}


function enterDestination(destination){
	kony.automation.playback.waitFor(["frmManageTravelDestination","tbxSearch"],15000);
	kony.automation.textbox.enterText(["frmManageTravelDestination","tbxSearch"],destination);
	kony.automation.playback.wait(1000);
	kony.automation.segmentedui.click(["frmManageTravelDestination","segTravelDestinationResults[0,0]"]);
	kony.automation.playback.wait(1000);
	kony.automation.button.click(["frmManageTravelDestination","btnAdd"]);
	kony.automation.button.click(["frmManageTravelDestination","btnSave"]);
}

function selectFirstCard(){
	kony.automation.playback.waitFor(["frmManageTravelSelectCards","segSelectCards"],15000);
	kony.automation.segmentedui.click(["frmManageTravelSelectCards","segSelectCards[0,0]"]);
	kony.automation.button.click(["frmManageTravelSelectCards","btnContinue"]);
	kony.automation.playback.waitFor(["frmManageTravelPhoneNumber","btnSkip"],15000);
	kony.automation.button.click(["frmManageTravelPhoneNumber","btnSkip"]);
}

function confirmAddTravelPlan(){
	kony.automation.playback.waitFor(["frmManageTravelConfirmation","btnConfirm"],15000);
	kony.automation.button.click(["frmManageTravelConfirmation","btnConfirm"]);
	kony.automation.playback.waitFor(["frmManageTravelPlans","customPopup","lblPopup"],15000);
	expect(kony.automation.widget.getWidgetProperty(["frmManageTravelPlans","customPopup","lblPopup"], "text")).toContain("success");
}

function goBackFromManageTravelPlans(){
	kony.automation.playback.waitFor(["frmManageTravelPlans","customHeader","flxBack"],15000);
	kony.automation.flexcontainer.click(["frmManageTravelPlans","customHeader","flxBack"]);
}

function deleteTravelPlan(){
	let segTravelPlans = kony.automation.playback.waitFor(["frmManageTravelPlans","segTravelPlans"],2000);
	
    if(segTravelPlans){
      kony.automation.playback.waitFor(["frmManageTravelPlans","segTravelPlans"],15000);
      kony.automation.segmentedui.click(["frmManageTravelPlans","segTravelPlans[0,0]"]);
      kony.automation.playback.waitFor(["frmManageTravelDetails","btnDelete"],15000);
      kony.automation.button.click(["frmManageTravelDetails","btnDelete"]);
      kony.automation.alert.click(0);
      kony.automation.playback.waitFor(["frmManageTravelPlans","customPopup","lblPopup"],15000);
      expect(kony.automation.widget.getWidgetProperty(["frmManageTravelPlans","customPopup","lblPopup"], "text")).toContain("success");
	}
	else{
      expect("No travel plans are added.").toBe("Please add a travel plan first");
	}  
}

function editTravelDestination(){
	let segTravelPlans = kony.automation.playback.waitFor(["frmManageTravelPlans","segTravelPlans"],15000);
	
    if(segTravelPlans){
	kony.automation.playback.waitFor(["frmManageTravelPlans","segTravelPlans"],15000);
	kony.automation.segmentedui.click(["frmManageTravelPlans","segTravelPlans[0,0]"]);
	kony.automation.playback.waitFor(["frmManageTravelDetails","customHeader","btnRight"],15000);
	kony.automation.button.click(["frmManageTravelDetails","customHeader","btnRight"]);
	kony.automation.flexcontainer.click(["frmManageTravelDetails","flxEditTravelDestination"]); 
    }
	else{
      expect("No travel plans are added.").toBe("Please add a travel plan first");
    }
}

function goBackFromTravelDetails_To_ManageTravelPlans(){
	kony.automation.playback.waitFor(["frmManageTravelDetails","customHeader","flxBack"],15000);
	kony.automation.flexcontainer.click(["frmManageTravelDetails","customHeader","flxBack"]);
}

function viewTransactions(){
	kony.automation.playback.waitFor(["frmCardManageHome","btnTransactionTab"],15000);
	kony.automation.button.click(["frmCardManageHome","btnTransactionTab"]);
	kony.automation.playback.waitFor(["frmCardManageHome","lblCreditAmount"],15000);
	expect(kony.automation.widget.getWidgetProperty(["frmCardManageHome","lblCreditAmount"], "text")).not.toBeNull();
	kony.automation.playback.wait(3000);
	kony.automation.button.click(["frmCardManageHome","btnManageTab"]);
}

function verifyCardDetails(){
  
    if(isCardUnlocked()){
      kony.automation.playback.waitFor(["frmCardManageHome","flxCardDetails"],15000);
      kony.automation.flexcontainer.click(["frmCardManageHome","flxCardDetails"]);
      kony.automation.playback.waitFor(["frmCardManageDetails","lblCardNoValue"],15000);
      expect(kony.automation.widget.getWidgetProperty(["frmCardManageDetails","lblCardNoValue"], "text")).not.toBeNull();
      expect(kony.automation.widget.getWidgetProperty(["frmCardManageDetails","segCardDetails[0,0]","lblValue"], "text")).not.toBeNull();
      expect(kony.automation.widget.getWidgetProperty(["frmCardManageDetails","segCardDetails[0,2]","lblValue"], "text")).not.toBeNull();
      expect(kony.automation.widget.getWidgetProperty(["frmCardManageDetails","segCardDetails[0,5]","lblValue"], "text")).not.toBeNull();
      kony.automation.playback.wait(1000);
      kony.automation.playback.waitFor(["frmCardManageDetails","customHeader","flxBack"],15000);
      kony.automation.flexcontainer.click(["frmCardManageDetails","customHeader","flxBack"]);
    }
	else{
       expect("Crad is locked ").toEqual("Please unlock the card first.");
    }
}