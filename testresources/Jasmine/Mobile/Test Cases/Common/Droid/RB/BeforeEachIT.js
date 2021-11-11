beforeEach(function() {

  var flgDashboard = kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],10000);
  kony.print("Dashboard : "+flgDashboard);
  if(flgDashboard){

    // Do Nothing

  }else{
    var currentwidget;

    try{
      kony.automation.playback.wait(2000);
      currentwidget = kony.automation.widget.getWidgetProperty(["frmLogin","login","btnLogIn"], "text");
      kony.print("The current Form Name ::"+currentwidget);
    }catch(err){
      kony.print("Error::"+err.message);
    }
    
    try{
      kony.automation.playback.wait(3000);
        var currentwidget1 = kony.automation.widget.getWidgetProperty(["frmLogout","btnLogIn"], "text");
        kony.print("The current Form Name ::"+currentwidget1);
        if(currentwidget1 === "Sign In"){

          kony.automation.button.click(["frmLogout","btnLogIn"]);
          kony.automation.playback.waitFor(["frmLogin","tbxUsername"],10000);
          currentwidget=currentwidget1;
        }     

      }catch(err1){
        kony.print("Error::"+err1.message);
      }

    if(currentwidget === "Sign In"){

      kony.automation.playback.waitFor(["frmLogin","login","tbxUsername"],10000);
      kony.automation.textbox.enterText(["frmLogin","login","tbxUsername"],"dbxJasmine1234");
      kony.automation.textbox.enterText(["frmLogin","login","tbxPassword"],"Kony@1234");
      kony.automation.button.click(["frmLogin","login","btnLogIn"]);

      // Verifying Terms and conditions screen

      var frmTnC = kony.automation.playback.waitFor(["frmTermsAndCondition","flxCheckBox"],10000);
      if(frmTnC){
        kony.automation.flexcontainer.click(["frmTermsAndCondition","flxCheckBox"]);
        kony.automation.playback.waitFor(["frmTermsAndCondition","btnContinue"]);
        kony.automation.button.click(["frmTermsAndCondition","btnContinue"]);
      }
      kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
      kony.automation.alert.click(0);
      //kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
    }

  }

},90000);