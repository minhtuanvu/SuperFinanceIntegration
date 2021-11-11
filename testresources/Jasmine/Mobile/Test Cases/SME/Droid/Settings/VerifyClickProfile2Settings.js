it("VerifyClickProfile2Settings", async function() {
  kony.print("bfuerea@temenos.com logcat assistant \n VerifyClickProfile2Settings START");
/*
  // Login block
  await kony.automation.playback.waitFor(["frmLogin", "tbxPassword"]);
  kony.automation.widget.touch(["frmLogin","tbxPassword"], [187,24],[[187,24]],[187,24]);
  kony.automation.textbox.enterText(["frmLogin","tbxUsername"],"dbxJasmine1234");
  kony.automation.textbox.enterText(["frmLogin","tbxPassword"],"Kony@1234");
  kony.automation.button.click(["frmLogin","btnLogIn"]);
*/
  // wait for page to load and Tap burger menu  
  await kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"]);
  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);

  // wait for menu bar to appear and tap user icon
  await kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","flxHeaderMain"]);
  kony.automation.widget.touch(["frmUnifiedDashboard","Hamburger","flxHeaderMain"], null,null,[43,26]);

  // wait for Settings page to appear. if it appears test case is done
  await kony.automation.playback.waitFor(["frmSettings","customHeader","lblLocateUs"]);


  //logout and return to login screen
  kony.automation.flexcontainer.click(["frmSettings","customHeader","flxBack"]);
  kony.automation.widget.touch(["frmSettings","Hamburger","flxLogout"], null,null,[47,25]);
  await kony.automation.playback.waitFor(["frmLogout","btnLogIn"]);
  kony.automation.button.click(["frmLogout","btnLogIn"]);

  kony.print("bfuerea@temenos.com logcat assistant \n VerifyClickProfile2Settings END");



},90000);