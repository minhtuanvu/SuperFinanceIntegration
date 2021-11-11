it("VerifyPFM_TotalSpending", async function() {
	goToMyMoney();
	verifyBudgetTotalSpending();
	goBackToDashboard_MyMoney();
},12000);