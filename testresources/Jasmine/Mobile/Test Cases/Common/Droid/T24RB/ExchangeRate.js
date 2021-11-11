function verifyExchangeRate(){
	kony.automation.playback.waitFor(["frmForexDashboard","tbxBaseCurrency"],15000);
	kony.automation.textbox.enterText(["frmForexDashboard","tbxBaseCurrency"],"1");
	kony.automation.playback.waitFor(["frmForexDashboard","segCurrencyRates[0,0]","lblConversionValue"], 15000);
	expect(kony.automation.widget.getWidgetProperty(["frmForexDashboard","segCurrencyRates[0,0]","lblConversionValue"], "text")).not.toBeNull();
}

function moveBackToDashboard_ExchangeRate(){
	kony.automation.playback.waitFor(["frmForexDashboard","customHeader","flxBack"],15000);
	kony.automation.flexcontainer.click(["frmForexDashboard","customHeader","flxBack"]);
	kony.automation.playback.waitFor(["frmForexDashboard","Hamburger","segHamburger"],15000);
	kony.automation.segmentedui.scrollToRow(["frmForexDashboard","Hamburger","segHamburger[0,0]"]);
	kony.automation.segmentedui.click(["frmForexDashboard","Hamburger","segHamburger[0,0]"]);
	VerifyAccountsDashBoard();
}

function goToExchangeRate(){
	openMenu("Exchange Rates");
}