it("GenerateAccountStatement_AllAccounts", async function() {
  //write your automation code here
	openMenu("Account Statements");
	ClickOnCombinedStatment();
	ClickOnGenerateNewAtatment();
	SelectStartDate();
	SelectEndDate();
	SelectAllAccount();
	ClickOnContinue();
	SelectFileFormatAndGenerateStatement("PDF");
	VerifyAcknowledgement();
	GoBackToDashboardFromAccountStatment();
	VerifyAccountsDashBoard();
});