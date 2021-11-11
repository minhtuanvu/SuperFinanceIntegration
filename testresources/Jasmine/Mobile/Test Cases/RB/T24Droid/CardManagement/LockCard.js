it("LockCard", async function() {
  goTocardManagement();
  lockCard();
  goToDashboardFromCardManagement();
},120000);