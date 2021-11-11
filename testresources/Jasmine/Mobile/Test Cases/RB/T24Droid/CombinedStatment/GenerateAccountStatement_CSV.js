it("GenerateAccountStatement_CSV", async function() {
  //write your automation code here
	openMenu("Account Statements");
	ClickOnCombinedStatment();
	ClickOnGenerateNewAtatment();
	SelectStartDate();
	SelectEndDate();
	SelectAccount(Transfers.savingsAccount.name);
	ClickOnContinue();
	SelectFileFormatAndGenerateStatement("CSV");
	VerifyAcknowledgement();
	GoBackToDashboardFromAccountStatment();
	VerifyAccountsDashBoard();
});