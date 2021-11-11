it("GenerateAccountStatement_Saving", async function() {
  //write your automation code here
	openMenu("Account Statements");
	ClickOnCombinedStatment();
	ClickOnGenerateNewAtatment();
	SelectStartDate();
	SelectEndDate();
	SelectAccount(Transfers.savingsAccount.name);
	ClickOnContinue();
	SelectFileFormatAndGenerateStatement("PDF");
	VerifyAcknowledgement();
	GoBackToDashboardFromAccountStatment();
	VerifyAccountsDashBoard();
});