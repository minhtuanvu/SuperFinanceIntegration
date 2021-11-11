it("AddTravelPlan", async function() {
  goTocardManagement();
  openManageTravelPlans();
  clickOnAddNewTravelPlan();
  selectTravalDates();
  enterDestination("India");
  selectFirstCard();
  confirmAddTravelPlan();
  goBackFromManageTravelPlans();
  goToDashboardFromCardManagement();
},120000);