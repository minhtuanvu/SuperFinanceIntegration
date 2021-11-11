beforeEach(async function() {

  var flgLogoutForm = kony.automation.playback.waitFor(["frmLogout","btnLogIn"],3000);
  kony.print("flgLogoutForm: "+flgLogoutForm);
  
  if(flgLogoutForm === true || flgLogoutForm === 1){
	kony.automation.button.click(["frmLogout","btnLogIn"]);
	kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
    await kony.automation.playback.wait(3000);
	expect(kony.automation.widget.getWidgetProperty(["frmLogin","login","tbxPassword"], "text")).toEqual("");
  }
  
});
