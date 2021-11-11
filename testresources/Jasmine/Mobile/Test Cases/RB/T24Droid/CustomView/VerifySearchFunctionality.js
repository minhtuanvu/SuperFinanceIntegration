it("VerifySearchFunctionality", async function() {
  showAccountFilters();
  clickOnManage();
  clickToCreateCustomView();
  verifySearchAccountFunctionality("8648");
  goBackFromAccountSearch();
  VerifyAccountsDashBoard();
},120000);
