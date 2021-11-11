beforeEach(async function() {
// 	jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000;
    var flgLoginForm = await kony.automation.playback.waitFor(["frmLogin", "login", "btnLogIn"], 2000);
    var flgLogoutForm = await kony.automation.playback.waitFor(["frmLogout", "btnLogIn"], 2000);
    kony.print("flgLoginForm: " + flgLoginForm + " ,flgLogoutForm: " + flgLogoutForm);

    if (flgLogoutForm === true || flgLogoutForm === 1) {
        kony.automation.button.click(["frmLogout", "btnLogIn"]);
        kony.automation.playback.waitFor(["frmLogin", "login", "tbxUsername"], 10000);
        await kony.automation.playback.wait(3000);
        expect(kony.automation.widget.getWidgetProperty(["frmLogin", "login", "tbxPassword"], "text")).toEqual("");
        await login("dbxJasmine1234SB");
    } else if (flgLoginForm === true || flgLoginForm === 1) {
        await login("dbxJasmine1234SB");
    }
});


async function login(username) {
    await kony.automation.playback.waitFor(["frmLogin", "login", "tbxUsername"]);
    kony.automation.textbox.enterText(["frmLogin", "login", "tbxUsername"], username);
    kony.automation.textbox.enterText(["frmLogin", "login", "tbxPassword"], "Kony@1234");
    await kony.automation.playback.waitFor(["frmLogin", "login", "btnLogIn"]);
    kony.automation.button.click(["frmLogin", "login", "btnLogIn"]);
    //Verifying Terms and Condition page -
    var frmTnC = await kony.automation.playback.waitFor(["frmTermsAndCondition", "flxCheckBox"], 20000);
    if (frmTnC) {
        kony.automation.flexcontainer.click(["frmTermsAndCondition", "flxCheckBox"]);
        await kony.automation.playback.waitFor(["frmTermsAndCondition", "btnContinue"]);
        kony.automation.button.click(["frmTermsAndCondition", "btnContinue"]);
    }

    await kony.automation.playback.waitFor(["frmUnifiedDashboard", "lblBankName"], 15000);
}