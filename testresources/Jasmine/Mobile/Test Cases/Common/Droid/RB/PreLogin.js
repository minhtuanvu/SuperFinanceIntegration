function clickOnPreLogin_SupportBtn(){

  kony.automation.playback.waitFor(["frmLogin","btnSupport"],15000);
  kony.automation.button.click(["frmLogin","btnSupport"]);
}

function verifyAppVersion(){

  kony.automation.playback.waitFor(["frmSupport","lblAppVersion"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmSupport","lblAppVersion"], "text")).not.toBe('');
  kony.automation.playback.waitFor(["frmSupport","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmSupport","customHeader","flxBack"]);
  kony.automation.playback.wait(10000);
}

function VerifyPreLogin_FAQLink(){

  kony.automation.playback.waitFor(["frmSupport","segSupport"],15000);
  kony.automation.segmentedui.click(["frmSupport","segSupport[0,0]"]);
  kony.automation.playback.waitFor(["frmSupportInfo","customHeader","lblLocateUs"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmSupportInfo","customHeader","lblLocateUs"], "text")).not.toBe('');
}
function VerifyPreLogin_TermsConditions(){

  kony.automation.playback.waitFor(["frmSupport","segSupport"],15000);
  kony.automation.segmentedui.click(["frmSupport","segSupport[0,1]"]);
  kony.automation.playback.waitFor(["frmSupportInfo","customHeader","lblLocateUs"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmSupportInfo","customHeader","lblLocateUs"], "text")).not.toBe('');
}

function VerifyPreLogin_PrivacyPolicy(){

  kony.automation.playback.waitFor(["frmSupport","segSupport"],15000);
  kony.automation.segmentedui.click(["frmSupport","segSupport[0,2]"]);
  kony.automation.playback.waitFor(["frmSupportInfo","customHeader","lblLocateUs"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmSupportInfo","customHeader","lblLocateUs"], "text")).not.toBe('');
}

function MoveBackFrom_Support(){

  kony.automation.playback.waitFor(["frmSupportInfo","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmSupportInfo","customHeader","flxBack"]);
  kony.automation.playback.waitFor(["frmSupport","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmSupport","customHeader","flxBack"]);
  kony.automation.playback.wait(10000);

}


