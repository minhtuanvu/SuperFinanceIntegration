it("Verify_AddP2PRecipient", async function() {
  kony.automation.playback.wait(15000);
  OpenManageRecipientP2P();
  await kony.automation.playback.waitFor(["frmManageRecipientList","btnAddRecipient"],10000);
  kony.automation.button.click(["frmManageRecipientList","btnAddRecipient"]);
  await kony.automation.playback.waitFor(["frmRegP2PContactType","btnPhoneNumber"],10000);
  kony.automation.button.click(["frmRegP2PContactType","btnPhoneNumber"]);
  await kony.automation.playback.waitFor(["frmP2PRecPhoneNo","keypad","btnOne"],10000);
  
  var phnNumber = getRandomNumber(9);
  for(i=0; i<phnNumber.length; i++){
    kony.automation.button.click(["frmP2PRecPhoneNo","keypad", getBtnID(phnNumber.charAt(i))]);
  }

  kony.automation.button.click(["frmP2PRecPhoneNo","btnContinue"]);
  
  var recipientName= "PToPRecipient" + getRandomString(5);
  
  await kony.automation.playback.waitFor(["frmP2PRecipientName","txtRecipientName"],10000);
  kony.automation.textbox.enterText(["frmP2PRecipientName","txtRecipientName"],recipientName);
  kony.automation.button.click(["frmP2PRecipientName","btnContinue"]);
  
  await kony.automation.playback.waitFor(["frmContracts","ContractList","segContract"]);
  kony.automation.flexcontainer.click(["frmContracts","ContractList","segContract[0,-1]","flxRowCheckBox"]);
  await kony.automation.playback.waitFor(["frmContracts","btnContinue"]);
  kony.automation.button.click(["frmContracts","btnContinue"]);
  await kony.automation.playback.waitFor(["frmP2PVerifyDetails","btnContinue"]);
  kony.automation.button.click(["frmP2PVerifyDetails","btnContinue"]);
  await kony.automation.playback.waitFor(["frmAcknowledgement","lblSuccessMessage"]);
  expect(kony.automation.widget.getWidgetProperty(["frmAcknowledgement","lblSuccessMessage"], "text")).toContain("success");
  kony.automation.button.click(["frmAcknowledgement","btnDashboard"]);
//   await kony.automation.playback.waitFor(["frmManageRecipientList","customPopup","lblPopup"],20000);
  // :User Injected Code Snippet [// - [1 lines]]
//   expect(kony.automation.widget.getWidgetProperty(["frmManageRecipientList","customPopup","lblPopup"], "text")).toContain("added");
  // :End User Injected Code Snippet {eb9cb05e-b740-791b-3eef-9d35dcadcb47}
//   await kony.automation.playback.waitFor(["frmManageRecipientList","customHeader","flxBack"],15000);
//   kony.automation.flexcontainer.click(["frmManageRecipientList","customHeader","flxBack"]);
//   await kony.automation.playback.waitFor(["frmManageRecipientType","customHeader","flxBack"],15000);
//   kony.automation.flexcontainer.click(["frmManageRecipientType","customHeader","flxBack"]);
},120000);


