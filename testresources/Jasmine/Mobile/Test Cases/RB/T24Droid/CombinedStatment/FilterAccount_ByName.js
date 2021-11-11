it("FilterAccount_ByName", async function() {
  //write your automation code here
	let accontName = "Savings";
	openMenu("Account Statements");
	ClickOnCombinedStatment();
	ClickOnGenerateNewAtatment();
	SelectStartDate();
	SelectEndDate();
	SelectAccount(accontName);
	ClickOnContinue();
	GoBackFromDownloadScreenToCombinedStatment();
	SearchAccount(accontName);
	GoBackToAccountStatement();
	GoBackToDashboardFromAccountStatment();
	VerifyAccountsDashBoard();
});