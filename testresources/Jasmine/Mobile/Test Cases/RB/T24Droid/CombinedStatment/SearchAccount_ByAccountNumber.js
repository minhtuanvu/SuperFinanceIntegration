it("SearchAccount_ByAccountNumber", async function() {
  //write your automation code here
	let accontName = Transfers.savingsAccount.name;
	let accountNumber = Transfers.savingsAccount.accountNumber;
	openMenu("Account Statements");
	ClickOnCombinedStatment();
	ClickOnGenerateNewAtatment();
	SelectStartDate();
	SelectEndDate();
	SelectAccount(accontName);
	ClickOnContinue();
	GoBackFromDownloadScreenToCombinedStatment();
	SearchAccount(accountNumber);
	GoBackToAccountStatement();
	GoBackToDashboardFromAccountStatment();
	VerifyAccountsDashBoard();
});