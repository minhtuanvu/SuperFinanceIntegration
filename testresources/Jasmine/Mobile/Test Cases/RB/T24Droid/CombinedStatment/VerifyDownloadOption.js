it("VerifyDownloadOption", async function() {
  //write your automation code here
	openMenu("Account Statements");
	ClickOnCombinedStatment();
	ClickOnGenerateNewAtatment();
	SelectStartDate();
	SelectEndDate();
	SelectAllAccount();
	ClickOnContinue();
	VerifyDownloadOption();
	GoBackFromDownloadScreenToCombinedStatment();
	GoBackToAccountStatement();
	GoBackToDashboardFromAccountStatment();
	VerifyAccountsDashBoard();
});