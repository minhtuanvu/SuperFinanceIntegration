it("EditTravelPlan", async function() {
  goTocardManagement();
  openManageTravelPlans();
  editTravelDestination();
  enterDestination("Australia");
  goBackFromTravelDetails_To_ManageTravelPlans();
  goBackFromManageTravelPlans();
  goToDashboardFromCardManagement();
},120000);