it("VerifyConsentTypeNotClickable", async function() {
  NavigateToSettings();
  VerifyConsentTypeNotClickable();
  MoveBackFromConsentToSetting();
  MoveBackFromSettings_DashBoard();
},12000);