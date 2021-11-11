it("VerifyViewAllAccounts", async function() {
  //write your automation code here
	openMenu("Account Statements");
	ClickOnCombinedStatment();
	ClickOnGenerateNewAtatment();
	ClickOnShowAdditionalOptions();
	VerifyAllAccountsOption();
	GoBackToAccountStatement();
	GoBackToDashboardFromAccountStatment();
	VerifyAccountsDashBoard();
});