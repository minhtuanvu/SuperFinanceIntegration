it("Verify_AddP2PRecipient", async function() {
  kony.automation.playback.wait(15000);
  OpenManageRecipientP2P();
  await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"],10000);
  kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);
  await kony.automation.playback.waitFor(["frmRegP2PContactType","btnPhoneNumber"],10000);
  kony.automation.button.click(["frmRegP2PContactType","btnPhoneNumber"]);
  await kony.automation.playback.waitFor(["frmP2PRecPhoneNo","keypad","btnOne"],10000);
  kony.automation.button.click(["frmP2PRecPhoneNo","keypad","btnOne"]);
  kony.automation.button.click(["frmP2PRecPhoneNo","keypad","btnTwo"]);
  kony.automation.button.click(["frmP2PRecPhoneNo","keypad","btnThree"]);
  kony.automation.button.click(["frmP2PRecPhoneNo","keypad","btnFour"]);
  kony.automation.button.click(["frmP2PRecPhoneNo","keypad","btnFive"]);
  kony.automation.button.click(["frmP2PRecPhoneNo","keypad","btnSix"]);
  kony.automation.button.click(["frmP2PRecPhoneNo","btnContinue"]);
  await kony.automation.playback.waitFor(["frmP2PRecipientName","txtRecipientName"],10000);
  kony.automation.textbox.enterText(["frmP2PRecipientName","txtRecipientName"],"P2PRecipient");
  kony.automation.button.click(["frmP2PRecipientName","btnContinue"]);
  await kony.automation.playback.waitFor(["frmP2PVerifyDetails","btnContinue"]);
  kony.automation.button.click(["frmP2PVerifyDetails","btnContinue"]);
  await kony.automation.playback.waitFor(["frmManageRecipientList","customPopup","lblPopup"],20000);
  // :User Injected Code Snippet [// - [1 lines]]
  expect(kony.automation.widget.getWidgetProperty(["frmManageRecipientList","customPopup","lblPopup"], "text")).toContain("added");
  // :End User Injected Code Snippet {eb9cb05e-b740-791b-3eef-9d35dcadcb47}
  await kony.automation.playback.waitFor(["frmManageRecipientList","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmManageRecipientList","customHeader","flxBack"]);
  await kony.automation.playback.waitFor(["frmManageRecipientType","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmManageRecipientType","customHeader","flxBack"]);
},180000);