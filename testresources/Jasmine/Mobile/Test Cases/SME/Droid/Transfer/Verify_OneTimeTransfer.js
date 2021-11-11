it("Verify_OneTimeTransfer", async function() {
  // :User Injected Code Snippet [//Search and enter Amount - [2 lines]]
  SearchInFromAndToScreen("normal");
  EnterAmount();
  // :End User Injected Code Snippet {77fb80f9-55cf-a5b4-3a11-b38cc89f3d99}
  await kony.automation.playback.waitFor(["frmMMReview","segDetails"],10000);
  kony.automation.segmentedui.click(["frmMMReview","segDetails[0,0]"]);
  await kony.automation.playback.waitFor(["frmMMFrequency","segOptions"],10000);
  kony.automation.segmentedui.click(["frmMMFrequency","segOptions[0,0]"]);
  await kony.automation.playback.waitFor(["frmMMStartDate","btnContinue"],10000);
  kony.automation.button.click(["frmMMStartDate","btnContinue"]);
  await kony.automation.playback.waitFor(["frmMMReview","btnTransfer"],10000);
  kony.automation.button.click(["frmMMReview","btnTransfer"]);
  expect(kony.automation.playback.waitFor(["frmMMConfirmation","btnNewTransfer"],20000)).toBe(true);
  await kony.automation.playback.waitFor(["frmMMConfirmation","btnDashboard"],10000);
  kony.automation.button.click(["frmMMConfirmation","btnDashboard"]);
  await kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
  //Logout();
});