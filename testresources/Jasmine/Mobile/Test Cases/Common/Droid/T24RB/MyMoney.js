function goToMyMoney(){
	openMenu("My Money");
}

function verifyBudgetTotalSpending(){
	kony.automation.playback.waitFor(["frmPFMMyMoney","flxBtnBudget"],15000);
	kony.automation.flexcontainer.click(["frmPFMMyMoney","flxBtnBudget"]);
	kony.automation.playback.waitFor(["frmPFMMyMoney","lblTotalSpendingValue"],15000);
	expect(kony.automation.widget.getWidgetProperty(["frmPFMMyMoney","lblTotalSpendingValue"], "text")).not.toBeNull();
}

function goBackToDashboard_MyMoney(){
	kony.automation.playback.waitFor(["frmPFMMyMoney","customHeader","flxBack"],15000);
	kony.automation.flexcontainer.click(["frmPFMMyMoney","customHeader","flxBack"]);
	kony.automation.playback.waitFor(["frmPFMMyMoney","Hamburger","segHamburger"],15000);
	kony.automation.scrollToWidget(["frmPFMMyMoney","Hamburger","segHamburger"]);
	kony.automation.segmentedui.click(["frmPFMMyMoney","Hamburger","segHamburger[0,0]"]);
	VerifyAccountsDashBoard();
}

