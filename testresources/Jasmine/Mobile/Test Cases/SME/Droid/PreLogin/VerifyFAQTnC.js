it("VerifyFAQTnC", async function() {
  await kony.automation.playback.waitFor(["frmLogin","btnSupport"]);
  kony.automation.button.click(["frmLogin","btnSupport"]);
  await kony.automation.playback.waitFor(["frmSupport","segSupport"]);
  kony.automation.segmentedui.click(["frmSupport","segSupport[0,0]"]);
  await kony.automation.playback.waitFor(["frmSupportInfo","segFaq"]);
  await kony.automation.scrollToWidget(["frmSupportInfo","segFaq"]);
  await kony.automation.playback.waitFor(["frmSupportInfo","segFaq"]);
  kony.automation.segmentedui.click(["frmSupportInfo","segFaq[9,4]"]);
  await kony.automation.playback.waitFor(["frmSupportInfo","customHeader","flxBack"]);
  kony.automation.flexcontainer.click(["frmSupportInfo","customHeader","flxBack"]);
  await kony.automation.playback.waitFor(["frmSupport","segSupport"]);
  kony.automation.segmentedui.click(["frmSupport","segSupport[0,1]"]);
  await kony.automation.playback.waitFor(["frmSupportInfo","customHeader","flxBack"]);
  kony.automation.flexcontainer.click(["frmSupportInfo","customHeader","flxBack"]);
  await kony.automation.playback.waitFor(["frmSupport","segSupport"]);
  kony.automation.segmentedui.click(["frmSupport","segSupport[0,2]"]);
  await kony.automation.playback.waitFor(["frmSupportInfo","customHeader","flxBack"]);
  kony.automation.flexcontainer.click(["frmSupportInfo","customHeader","flxBack"]);
  await kony.automation.playback.waitFor(["frmSupport","customHeader","flxBack"]);
  kony.automation.flexcontainer.click(["frmSupport","customHeader","flxBack"]);
  await kony.automation.playback.waitFor(["frmLogin","btnSupport"]);
  kony.automation.playback.wait(15000);
},60000);