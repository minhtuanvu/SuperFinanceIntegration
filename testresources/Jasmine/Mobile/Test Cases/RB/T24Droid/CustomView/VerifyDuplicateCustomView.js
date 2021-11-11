it("VerifyDuplicateCustomView", async function() {
  showAccountFilters();
  createAndApplyCustomView("8648");
  confirmCustomViewName();
  verifyDuplicateCustomView();
  VerifyAccountsDashBoard();
},120000);
