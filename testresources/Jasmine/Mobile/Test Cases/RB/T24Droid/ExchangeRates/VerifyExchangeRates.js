it("VerifyExchangeRates", async function() {
	goToExchangeRate();
	verifyExchangeRate();
	moveBackToDashboard_ExchangeRate();
},120000);