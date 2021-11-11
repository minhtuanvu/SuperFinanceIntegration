it("SearchAccount_ByName", async function() {
  //write your automation code here
	let accontName = Transfers.savingsAccount.name;
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