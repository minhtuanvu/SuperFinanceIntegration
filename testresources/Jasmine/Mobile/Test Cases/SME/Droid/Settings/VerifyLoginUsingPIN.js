it("VerifyLoginUsingPIN", async function() {
  kony.print("bfuerea@temenos.com logcat assistant \n VerifyLoginUsingPIN START");
/*
  // login
  await kony.automation.playback.waitFor(["frmLogin", "tbxPassword"]);
  kony.automation.textbox.enterText(["frmLogin","tbxUsername"],"dbxJasmine1234");
  kony.automation.textbox.enterText(["frmLogin","tbxPassword"],"Kony@1234");
  kony.automation.button.click(["frmLogin","btnLogIn"]);
*/
  // Burger menu
  await kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"]);
  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);

  // Settings
  kony.automation.widget.touch(["frmUnifiedDashboard","Hamburger","flxHeaderMain"], null,null,[158,35]);

  // Default Sign In 
  await kony.automation.playback.waitFor(["frmSettings","segSettingsLogin[0,2]"]);
  kony.automation.segmentedui.click(["frmSettings","segSettingsLogin[0,2]"]);

  // Checking Default Sign in Error - check text "you can't select a default sign in for an unregistered device, Please register the device first"
  //await kony.automation.playback.waitFor(["frmPreferencesDefaultLogin","customHeader","lblLocateUs"]);
  await kony.automation.playback.waitFor(["frmPreferencesDefaultLogin", "lblNote"]);
  // two scenarios here - 1. device is not registered, 2. device is registered. 
  var registrationStatus = kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultLogin","lblNote"], "text");
  // 	kony.print("bfuerea@temenos.com logcat assistant \n --- this is the labelnote for registration status: " + registrationStatus);
  if (registrationStatus === "You can’t select a default sign in for an unregistered device. Please register the device first.") {
    // Go back
    kony.automation.flexcontainer.click(["frmPreferencesDefaultLogin","customHeader","flxBack"]);
    await kony.automation.playback.waitFor(["frmSettings","segSettingsLogin"]);
    // Device Registration -> tap Register Device
    kony.automation.segmentedui.click(["frmSettings","segSettingsLogin[0,1]"]);
    await kony.automation.playback.waitFor(["frmPreferencesDeviceRegistration","btnRegisterDevice"]);
    kony.automation.button.click(["frmPreferencesDeviceRegistration","btnRegisterDevice"]);
    // Device Registration Successful - green background popup note (upper side) . 
    await kony.automation.playback.waitFor(["frmSettings","segSettingsLogin"]);
    expect(kony.automation.widget.getWidgetProperty(["frmSettings","flxPopup","customPopup","flxPopupWrapper","lblPopup"], "text")).toContain("Successful");
    var popupMsg = kony.automation.widget.getWidgetProperty(["frmSettings","flxPopup","customPopup","flxPopupWrapper","lblPopup"], "text");
    kony.print("bfuerea@temenos.com logcat assistant \n ... " + popupMsg);
    await kony.automation.playback.wait(3000);
    kony.automation.segmentedui.click(["frmSettings","segSettingsLogin[0,2]"]);
    await kony.automation.playback.waitFor(["frmPreferencesDefaultLogin","flxOption1"]);
  }

  var option1 = kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultLogin","flxMainContainer","flxOptions","flxOption1","lblOption1"], "text");
  var option2 = kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultLogin","flxMainContainer","flxOptions","flxOption2","lblOption2"], "text");
  var option3 = kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultLogin","flxMainContainer","flxOptions","flxOption3","lblOption3"], "text");
  var option4 = kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultLogin","flxMainContainer","flxOptions","flxOption4","lblOption4"], "text");
  var option1Sts = kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultLogin","flxMainContainer","flxOptions","flxOption1","lblStatus1"], "text");
  var option2Sts = kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultLogin","flxMainContainer","flxOptions","flxOption2","lblStatus2"], "text");
  var option3Sts = kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultLogin","flxMainContainer","flxOptions","flxOption3","lblStatus3"], "text");
  var option4Sts = kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultLogin","flxMainContainer","flxOptions","flxOption4","lblStatus4"], "text");
  var option1Viz = kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultLogin","flxMainContainer","flxOptions","flxOption1"], "isVisible");
  var option2Viz = kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultLogin","flxMainContainer","flxOptions","flxOption2"], "isVisible");
  var option3Viz = kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultLogin","flxMainContainer","flxOptions","flxOption3"], "isVisible");
  var option4Viz = kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultLogin","flxMainContainer","flxOptions","flxOption4"], "isVisible");
  kony.print("bfuerea@temenos.com logcat assistant \nOption Name - Option Status - Option is Visible? \n" + option1 + " - " + option1Sts + " - " + option1Viz + "\n" + option2 + " - " + option2Sts + " - " + option2Viz + "\n" + option3 + " - " + option3Sts + " - " + option3Viz + "\n" + option4 + " - " + option4Sts + " - " + option4Viz);
  //kony.automation.capture(["frmPreferencesDefaultLogin","flxMainContainer"]);


  await kony.automation.playback.wait(2000);
  kony.print("bfuerea@temenos.com logcat assistant \n - option3Viz value, simple\n" + option3Viz);
  if (option1 === "Username & Password" && option3 === "PIN" && option3Viz === true)  { kony.print("option3Viz is true - scenario");
                                                                                       if (option3Sts === "Generate" ) {
                                                                                         kony.print("bfuerea@temenos.com logcat assistant \n The PIN needs to be generated. ");
                                                                                         // clicking PIN
                                                                                         kony.automation.flexcontainer.click(["frmPreferencesDefaultLogin","flxOption3"]);

                                                                                         // in case PIN not set up we are expecting this message  - "Enter a New PIN"
                                                                                         await kony.automation.playback.waitFor(["frmDevRegPin","keypad","btnOne"]);
                                                                                         expect(kony.automation.widget.getWidgetProperty(["frmDevRegPin","lblPin"], "text")).toEqual("Enter a New PIN");
                                                                                         // type in 123456 as PIN
                                                                                         kony.automation.button.click(["frmDevRegPin","keypad","btnOne"]);
                                                                                         kony.automation.button.click(["frmDevRegPin","keypad","btnTwo"]);
                                                                                         kony.automation.button.click(["frmDevRegPin","keypad","btnThree"]);
                                                                                         kony.automation.button.click(["frmDevRegPin","keypad","btnFour"]);
                                                                                         kony.automation.button.click(["frmDevRegPin","keypad","btnFive"]);
                                                                                         kony.automation.button.click(["frmDevRegPin","keypad","btnSix"]);
                                                                                         // tap continue (or whatever)
                                                                                         kony.automation.button.click(["frmDevRegPin","btnNext"]);
                                                                                         // next page should ask you to confirm pin  - "Re-enter your new PIN"
                                                                                         await kony.automation.playback.wait(2000);
                                                                                         expect(kony.automation.widget.getWidgetProperty(["frmDevRegPin","lblPiinRenter"], "text")).toEqual("Re-enter your new PIN");
                                                                                         // type in 123456 as PIN (again)
                                                                                         kony.automation.button.click(["frmDevRegPin","keypad","btnOne"]);
                                                                                         kony.automation.button.click(["frmDevRegPin","keypad","btnTwo"]);
                                                                                         kony.automation.button.click(["frmDevRegPin","keypad","btnThree"]);
                                                                                         kony.automation.button.click(["frmDevRegPin","keypad","btnFour"]);
                                                                                         kony.automation.button.click(["frmDevRegPin","keypad","btnFive"]);
                                                                                         kony.automation.button.click(["frmDevRegPin","keypad","btnSix"]);
                                                                                         // tap continue (or whatever)
                                                                                         kony.automation.button.click(["frmDevRegPin","btnEnable"]);

                                                                                         // PIN is now set up we are expecting this message - "Activation or deactivation won't apply to other devices that you use for mobile banking"
                                                                                         await kony.automation.playback.waitFor(["frmPreferencesPin","lblNote"]);
                                                                                         expect(kony.automation.widget.getWidgetProperty(["frmPreferencesPin","lblNote"], "text")).toEqual("Activation or deactivation won't apply to other devices that you use for mobile banking.");
                                                                                         // tap set as default login method
                                                                                         kony.automation.button.click(["frmPreferencesPin","btnSetAsDefault"]);
                                                                                         // wait for initial page to login (default login page)
                                                                                         await kony.automation.playback.waitFor(["frmPreferencesDefaultLogin","lblNote"]);
                                                                                         var labelNoteA = kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultLogin","lblNote"], "text");
                                                                                         kony.print("bfuerea@temenos.com logcat assistant \n ---" + labelNoteA);
                                                                                         //                                  kony.automation.flexcontainer.click(["frmPreferencesDefaultLogin","flxOption1"]);

                                                                                       } else if (option3Sts === "Generated") {
                                                                                         kony.print("bfuerea@temenos.com logcat assistant \n The PIN has been already generated and can be used");
                                                                                         // clicking PIN
                                                                                         kony.automation.flexcontainer.click(["frmPreferencesDefaultLogin","flxOption3"]);

                                                                                         // in case PIN is set up we are expecting this message - "Activation or deactivation won't apply to other devices that you use for mobile banking"
                                                                                         await kony.automation.playback.waitFor(["frmPreferencesPin","lblNote"]);
                                                                                         expect(kony.automation.widget.getWidgetProperty(["frmPreferencesPin","lblNote"], "text")).toEqual("Activation or deactivation won't apply to other devices that you use for mobile banking.");
                                                                                         // tap set as default login method
                                                                                         kony.automation.button.click(["frmPreferencesPin","btnSetAsDefault"]);
                                                                                         // wait for initial page to login (default login page)
                                                                                         await kony.automation.playback.waitFor(["frmPreferencesDefaultLogin","lblNote"]);
                                                                                         var labelNoteB = kony.automation.widget.getWidgetProperty(["frmPreferencesDefaultLogin","lblNote"], "text");
                                                                                         kony.print("bfuerea@temenos.com logcat assistant \n ---" + labelNoteB);
                                                                                         //                                  kony.automation.flexcontainer.click(["frmPreferencesDefaultLogin","flxOption1"]);
                                                                                       } else if (option3Sts === "Default Sign In") {
                                                                                         // this option will never exist due to issues in the app (never changes status)
                                                                                         kony.print("bfuerea@temenos.com logcat assistant \n THEY FIXED IT! Special Keyword - issue has been solved");
                                                                                       }
                                                                                      }



  // go back
  kony.automation.flexcontainer.click(["frmPreferencesDefaultLogin","customHeader","flxBack"]);
  kony.print("bfuerea@temenos.com logcat assistant \n---tapping back---");
  await kony.automation.playback.waitFor(["frmSettings","segSettingsLogin[0,1]"]);


  // SIGN OUT option  - to check and sign in using either of them( go back and sign out)
  kony.automation.flexcontainer.click(["frmSettings","customHeader","flxBack"]);
  kony.automation.widget.touch(["frmSettings","Hamburger","flxLogout"], null,null,[32,32]);
  kony.print("bfuerea@temenos.com logcat assistant \n---logging out---");
  await kony.automation.playback.waitFor(["frmLogout","btnLogIn"]);
  kony.automation.button.click(["frmLogout","btnLogIn"]);
  kony.print("bfuerea@temenos.com logcat assistant \n---logging out tapping the login button---"); 



  // login using PIN (should appear by default)
  await kony.automation.playback.waitFor(["frmLogin","login","btnOne"],15000);
  kony.automation.button.click(["frmLogin","login","btnOne"]);
  kony.print("bfuerea@temenos.com logcat assistant \n after 1");
  kony.automation.button.click(["frmLogin","login","btnTwo"]);
  kony.print("bfuerea@temenos.com logcat assistant \n after 2");
  kony.automation.button.click(["frmLogin","login","btnThree"]);
  kony.print("bfuerea@temenos.com logcat assistant \n after 3");
  kony.automation.button.click(["frmLogin","login","btnFour"]);
  kony.print("bfuerea@temenos.com logcat assistant \n after 4");
  kony.automation.button.click(["frmLogin","login","btnFive"]);
  kony.print("bfuerea@temenos.com logcat assistant \n after 5");
  kony.automation.button.click(["frmLogin","login","btnSix"]);
  kony.print("bfuerea@temenos.com logcat assistant \n after 6");



  //cleanup your mess  
  kony.print("bfuerea@temenos.com logcat assistant \n---CLEANUP IN PROGRESS---");
  await kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"]);
  kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
  //kony.automation.widget.touch(["frmUnifiedDashboard","flxHamburgerWrapper"], [135,732],null,null);
  kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,13]"]);
  kony.automation.segmentedui.click(["frmSettings","segSettingsLogin[0,1]"]);
  kony.automation.button.click(["frmPreferencesDeviceDeRegistration","btnRegisterDevice"]);
  kony.print("bfuerea@temenos.com logcat assistant \n---CLEANUP DONE---");
  await kony.automation.playback.waitFor(["frmLogout","btnLogIn"]);
  kony.automation.button.click(["frmLogout","btnLogIn"]);
  //await kony.automation.playback.waitFor(["frmLogin", "tbxPassword"]);

  kony.print("bfuerea@temenos.com logcat assistant \n VerifyLoginUsingPIN END");


},120000);