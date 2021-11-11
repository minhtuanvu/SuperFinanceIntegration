afterSuite(function() {
    kony.automation.playback.waitFor(["frmDashboardAggregated","customHeader","flxBack"],20000);
	kony.automation.flexcontainer.click(["frmDashboardAggregated","customHeader","flxBack"]);
	kony.automation.playback.waitFor(["frmDashboardAggregated","Hamburger","flxLogout"],15000);
	kony.automation.widget.touch(["frmDashboardAggregated","Hamburger","flxLogout"], null,null,[34,28]);
	kony.automation.playback.waitFor(["frmLogout","btnLogIn"],30000);
	kony.automation.button.click(["frmLogout","btnLogIn"]);
	kony.automation.playback.waitFor(["frmLogin","tbxUsername"],30000);
});