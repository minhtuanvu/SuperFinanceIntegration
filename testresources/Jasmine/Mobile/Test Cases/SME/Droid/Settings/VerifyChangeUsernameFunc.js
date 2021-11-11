it("VerifyChangeUsernameFunc", async function() {
  kony.print("bfuerea@temenos.com logcat assistant \n VerifyChangeUsernameFunc START");
/*
  // Login block
  await kony.automation.playback.waitFor(["frmLogin", "tbxPassword"]);
  kony.automation.widget.touch(["frmLogin","tbxPassword"], [187,24],[[187,24]],[187,24]);
  kony.automation.textbox.enterText(["frmLogin","tbxUsername"],"dbxJasmine1234");
  kony.automation.textbox.enterText(["frmLogin","tbxPassword"],"Kony@1234");
  kony.automation.button.click(["frmLogin","btnLogIn"]);*/

  // Tap burger menu + settings 
  await kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"]);
  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
  //kony.automation.widget.touch(["frmUnifiedDashboard","flxHamburgerWrapper"], [107,753],null,null);
  kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,11]"]); 

  // go to Alert Settings
  kony.automation.segmentedui.click(["frmSettings","segSettingsProfile[0,0]"]);
  kony.automation.textbox.enterText(["frmProfileUsername","tbxUsername"],"dbxJasmine1234SB");
  kony.automation.button.click(["frmProfileUsername","btnContinue"]);
  await kony.automation.device.deviceBack();

  //logout and return to login screen
  kony.automation.flexcontainer.click(["frmSettings","customHeader","flxBack"]);
  kony.automation.widget.touch(["frmSettings","Hamburger","flxLogout"], null,null,[47,25]);
  await kony.automation.playback.waitFor(["frmLogout","btnLogIn"]);
  kony.automation.button.click(["frmLogout","btnLogIn"]);


  kony.print("bfuerea@temenos.com logcat assistant \n VerifyChangeUsernameFunc END");








});