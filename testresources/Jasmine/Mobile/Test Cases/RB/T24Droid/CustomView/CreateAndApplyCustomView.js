it("CreateAndApplyCustomView", async function() {
  showAccountFilters();
  createAndApplyCustomView("8648");
  confirmCustomViewName();
  applyCustomView_AckScreen();
  VerifyAccountsDashBoard();
},120000);