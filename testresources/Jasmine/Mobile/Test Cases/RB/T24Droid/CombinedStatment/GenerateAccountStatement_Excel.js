it("GenerateAccountStatement_Excel", async function() {
  //write your automation code here
	openMenu("Account Statements");
	ClickOnCombinedStatment();
	ClickOnGenerateNewAtatment();
	SelectStartDate();
	SelectEndDate();
	SelectAccount(Transfers.savingsAccount.name);
	ClickOnContinue();
	SelectFileFormatAndGenerateStatement("Excel");
	VerifyAcknowledgement();
	GoBackToDashboardFromAccountStatment();
	VerifyAccountsDashBoard();
});