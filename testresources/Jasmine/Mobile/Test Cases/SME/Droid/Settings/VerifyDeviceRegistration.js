it("VerifyDeviceRegistration", async function() {
  kony.print("bfuerea@temenos.com logcat assistant \n VerifyDeviceRegistration START");
/*

  // Login block
  await kony.automation.playback.waitFor(["frmLogin", "tbxPassword"]);
  kony.automation.widget.touch(["frmLogin","tbxPassword"], [187,24],[[187,24]],[187,24]);
  kony.automation.textbox.enterText(["frmLogin","tbxUsername"],"dbxJasmine1234");
  kony.automation.textbox.enterText(["frmLogin","tbxPassword"],"Kony@1234");
  kony.automation.button.click(["frmLogin","btnLogIn"]);
*/
  // Tap burger menu + settings 
  await kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"]);
  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
  kony.automation.widget.touch(["frmUnifiedDashboard","flxHamburgerWrapper"], [107,753],null,null);
  kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,11]"]);

  // Device Registration + Register Device
  await kony.automation.playback.waitFor(["frmSettings", "segSettingsLogin[0,1]"]);
  kony.automation.segmentedui.click(["frmSettings","segSettingsLogin[0,1]"]);
  kony.automation.button.click(["frmPreferencesDeviceRegistration","btnRegisterDevice"]);

  // Device Registration + De-Register Device
  await kony.automation.playback.waitFor(["frmSettings", "segSettingsLogin[0,1]"]);
  kony.automation.segmentedui.click(["frmSettings","segSettingsLogin[0,1]"]);
  kony.automation.button.click(["frmPreferencesDeviceDeRegistration","btnRegisterDevice"]);

  // tap the login button to get back to the login page
  await kony.automation.playback.waitFor(["frmLogout", "btnLogIn"]);
  kony.automation.button.click(["frmLogout","btnLogIn"]);


  kony.print("bfuerea@temenos.com logcat assistant \n VerifyDeviceRegistration END");

},90000);