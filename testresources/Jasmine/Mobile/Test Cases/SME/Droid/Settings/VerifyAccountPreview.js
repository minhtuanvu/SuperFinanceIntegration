it("VerifyAccountPreview", async function() {
  kony.print("bfuerea@temenos.com logcat assistant \n VerifyAccountPreview START");

  // Burger menu
  kony.print("tap burger menu");
  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);

  // Settings
  //kony.automation.widget.touch(["frmUnifiedDashboard","flxHamburgerWrapper"], [88,738],null,null);
  kony.print("tap Settings");
  kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,11]"]);

  // Account Preview
  kony.print("tap Account Preview - at this point it should be OFF and device registration should also be OFF");
  kony.automation.playback.waitFor(["frmSettings","segSettingsLogin[0,0]"],10000);
  kony.automation.segmentedui.click(["frmSettings","segSettingsLogin[0,0]"]);
  kony.automation.playback.wait(3000);


  // Checking Account Preview Error - check text "For using account preview, register your device & select remember me"
  //expect(kony.automation.widget.getWidgetProperty(["frmPreferencesAccountPreview","lblNote"], "text")).toContain("For using account preview, register your device & select remember me.");

  //B005.b02 tap back
  kony.automation.flexcontainer.click(["frmPreferencesAccountPreview","customHeader","flxBack"]);
  await kony.automation.playback.waitFor(["frmSettings","segSettingsLogin[0,1]"],15000);

  //B005.b03 Device Registration
  kony.automation.segmentedui.click(["frmSettings","segSettingsLogin[0,1]"]);
  //text which could be used, i think the button text - "Register Device"

  //B005.b04 tap Register Device
  kony.automation.button.click(["frmPreferencesDeviceRegistration","btnRegisterDevice"]);
  await kony.automation.playback.waitFor(["frmSettings","segSettingsLogin[0,0]"],15000);

  //B005.b05 automatically returns to settings, so go to account preview
  kony.automation.segmentedui.click(["frmSettings","segSettingsLogin[0,0]"]);



  //B006 = B005.b06 = B005.a01 Enable account preview 
  kony.automation.switch.toggle(["frmPreferencesAccountPreview","switchPreview"]);
  //how to be sure I ENABLED it instead of disabling it???

  //B007 back
  kony.automation.flexcontainer.click(["frmPreferencesAccountPreview","customHeader","flxBack"]);

  //B008 hamburger menu
  kony.automation.flexcontainer.click(["frmSettings","customHeader","flxBack"]);

  //B009 log out!
  kony.automation.widget.touch(["frmSettings","Hamburger","flxLogout"], [29,45],[[29,45],[29,45],[29,45],[29,45],[29,45],[29,45],[29,45],[29,45]],[29,45]);

  //B010 Sign in button
  await kony.automation.playback.waitFor(["frmLogout","btnLogIn"],15000);
  kony.automation.button.click(["frmLogout","btnLogIn"]);



  //B011 Account preview icon
  //await kony.automation.playback.waitFor(["frmLogin","flxAccountPreview"]);
  //kony.automation.flexcontainer.click(["frmLogin","flxDashboard"]);
  kony.automation.flexcontainer.click(["frmLogin","flxDashboard"]);


  //B012 tap 1st account. etc until done
  await kony.automation.playback.waitFor(["frmLogin","segAccountPreview[0,0]"],15000);
  kony.automation.segmentedui.click(["frmLogin","segAccountPreview[0,0]"]);
  kony.automation.segmentedui.click(["frmLogin","segAccountPreview[0,1]"]);
  kony.automation.segmentedui.click(["frmLogin","segAccountPreview[0,2]"]);
  kony.automation.segmentedui.click(["frmLogin","segAccountPreview[0,3]"]);

  //B013 Account preview icon - minimize list
  await kony.automation.playback.waitFor(["frmLogin","flxDashboard"],15000);
  kony.automation.flexcontainer.click(["frmLogin","flxDashboard"]);


  //login and cleanup your mess  
  kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
      kony.automation.textbox.enterText(["frmLogin","login","tbxUsername"],"dbxJasmine1234SB");
      kony.automation.textbox.enterText(["frmLogin","login","tbxPassword"],"Kony@1234");
      kony.automation.button.click(["frmLogin","login","btnLogIn"]);
  await kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
  kony.automation.playback.wait(3000);
  kony.automation.widget.touch(["frmUnifiedDashboard","flxHamburgerWrapper"], [135,732],null,null);
  kony.automation.playback.wait(5000);
  kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,11]"]);
  kony.automation.playback.wait(5000);
  kony.automation.segmentedui.click(["frmSettings","segSettingsLogin[0,1]"]);
  kony.automation.playback.wait(3000);
  kony.automation.button.click(["frmPreferencesDeviceDeRegistration","btnRegisterDevice"]);

  // Clicking the login button to return to login screen
  await kony.automation.playback.waitFor(["frmLogout","btnLogIn"],20000);
  kony.automation.button.click(["frmLogout","btnLogIn"]);  

  kony.print("bfuerea@temenos.com logcat assistant \n VerifyAccountPreview END");

},90000);