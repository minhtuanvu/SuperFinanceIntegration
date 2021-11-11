it("Verify_DeleteP2PRecipient_P2P", async function() {
  kony.automation.playback.wait(10000);
  OpenManageRecipientP2P();
  await kony.automation.playback.waitFor(["frmManageRecipientList","tbxSearch"],10000);
  kony.automation.widget.touch(["frmManageRecipientList","tbxSearch"], [101,9],null,null);
  await kony.automation.playback.waitFor(["frmManageRecipientList","customSearchbox","tbxSearch"],10000);
  kony.automation.textbox.enterText(["frmManageRecipientList","customSearchbox","tbxSearch"],"P2P");
  await kony.automation.playback.waitFor(["frmManageRecipientList","segRecipients"],10000);
  kony.automation.segmentedui.click(["frmManageRecipientList","segRecipients[0,0]"]);
  await kony.automation.playback.waitFor(["frmManageP2pRecipient","btnDeleteRecipient"],10000);
  kony.automation.button.click(["frmManageP2pRecipient","btnDeleteRecipient"]);
  kony.automation.alert.click(0);
  // :User Injected Code Snippet [// - [2 lines]]
  await kony.automation.playback.waitFor(["frmManageRecipientList","customPopup","lblPopup"],10000);
  expect(kony.automation.widget.getWidgetProperty(["frmManageRecipientList","customPopup","lblPopup"], "text")).toContain("deleted");
  // :End User Injected Code Snippet {e2be7ffa-f94b-2680-c773-a2012940db2d}
  await kony.automation.playback.waitFor(["frmManageRecipientList","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmManageRecipientList","customHeader","flxBack"]);
  await kony.automation.playback.waitFor(["frmManageRecipientType","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmManageRecipientType","customHeader","flxBack"]);
},180000);