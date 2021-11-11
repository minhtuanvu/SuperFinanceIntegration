it("DeleteTravelPlan", async function() {
  goTocardManagement();
  openManageTravelPlans();
  deleteTravelPlan();
  goBackFromManageTravelPlans();
  goToDashboardFromCardManagement();
},120000);