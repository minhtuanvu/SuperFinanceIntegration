function clickOnPostLogin_SupportBtn(){

//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
//   kony.automation.playback.wait(5000);
//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
//   kony.automation.scrollToWidget(["frmUnifiedDashboard","Hamburger","segHamburger"]);
//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,19]"]);
//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,19]"]);
  
  openMenu("Support");
}

function verifyPostLoginAppVersion(){

  kony.automation.playback.waitFor(["frmSupport","lblAppVersion"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmSupport","lblAppVersion"], "text")).not.toBe('');
  kony.automation.playback.waitFor(["frmSupport","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmSupport","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmSupport","Hamburger","segHamburger"],15000);
  kony.automation.segmentedui.click(["frmSupport","Hamburger","segHamburger[0,0]"]);
  kony.automation.playback.wait(10000);
}

function VerifyPostLogin_FAQLink(){

  kony.automation.playback.waitFor(["frmSupport","segSupport"],15000);
  kony.automation.segmentedui.click(["frmSupport","segSupport[0,0]"]);
  kony.automation.playback.waitFor(["frmSupportInfo","customHeader","lblLocateUs"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmSupportInfo","customHeader","lblLocateUs"], "text")).not.toBe('');
}
function VerifyPostLogin_TermsConditions(){

  kony.automation.playback.waitFor(["frmSupport","segSupport"],15000);
  kony.automation.segmentedui.click(["frmSupport","segSupport[0,1]"]);
  kony.automation.playback.waitFor(["frmSupportInfo","customHeader","lblLocateUs"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmSupportInfo","customHeader","lblLocateUs"], "text")).not.toBe('');
}

function VerifyPostLogin_PrivacyPolicy(){

  kony.automation.playback.waitFor(["frmSupport","segSupport"],15000);
  kony.automation.segmentedui.click(["frmSupport","segSupport[0,2]"]);
  kony.automation.playback.waitFor(["frmSupportInfo","customHeader","lblLocateUs"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmSupportInfo","customHeader","lblLocateUs"], "text")).not.toBe('');
}

function MoveBackFrom_PostLogin_Support(){
  
  kony.automation.playback.waitFor(["frmSupportInfo","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmSupportInfo","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmSupport","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmSupport","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmSupport","Hamburger","segHamburger"],15000);
  kony.automation.segmentedui.click(["frmSupport","Hamburger","segHamburger[0,0]"]);
  kony.automation.playback.wait(10000);

}
