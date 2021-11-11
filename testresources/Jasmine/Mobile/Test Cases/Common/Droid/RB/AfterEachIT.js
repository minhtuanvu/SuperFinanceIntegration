afterEach(function() {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 40000;
   // await kony.automation.playback.waitFor(["frmDashboardAggregated","customHeader","flxBack"]);
	kony.automation.flexcontainer.click(["frmDashboardAggregated","customHeader","flxBack"]);
	//await kony.automation.playback.waitFor(["frmDashboardAggregated","Hamburger","flxLogout"]);
	kony.automation.widget.touch(["frmDashboardAggregated","Hamburger","flxLogout"], null,null,[34,28]);
	//await kony.automation.playback.waitFor(["frmLogout","btnLogIn"],10000);
	kony.automation.button.click(["frmLogout","btnLogIn"]);
	//await kony.automation.playback.waitFor(["frmLogin","tbxUsername"],10000);
});