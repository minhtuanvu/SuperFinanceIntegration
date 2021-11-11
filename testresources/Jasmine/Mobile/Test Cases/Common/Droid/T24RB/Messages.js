function NavigateToMessages(){

//   kony.automation.playback.waitFor(["frmUnifiedDashboard","customHeader","flxBack"],15000);
//   kony.automation.flexcontainer.click(["frmUnifiedDashboard","customHeader","flxBack"]);
//   kony.automation.playback.wait(5000);

//   kony.automation.playback.waitFor(["frmUnifiedDashboard","Hamburger","segHamburger"],15000);
//   kony.automation.segmentedui.scrollToRow(["frmUnifiedDashboard","Hamburger","segHamburger[0,14]"]);
//   kony.automation.segmentedui.click(["frmUnifiedDashboard","Hamburger","segHamburger[0,14]"]);
  
  openMenu("Messages");

  verifyMessagesScreen();
}

function verifyMessagesScreen(){

  kony.automation.playback.waitFor(["frmMessages","customHeader","lblLocateUs"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmMessages","customHeader","lblLocateUs"], "text")).not.toBe('');

}

function ComposeNewMessage(){

  kony.automation.playback.waitFor(["frmMessages","flxSearch"],15000);
  kony.automation.flexcontainer.click(["frmMessages","flxSearch"]);
  kony.automation.playback.waitFor(["frmNewMessageCategory","customHeader","lblLocateUs"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmNewMessageCategory","customHeader","lblLocateUs"], "text")).toEqual("New Message");
  kony.automation.playback.waitFor(["frmNewMessageCategory","segCategory"],15000);
  kony.automation.segmentedui.click(["frmNewMessageCategory","segCategory[0,1]"]);
  kony.automation.playback.waitFor(["frmNewMessage","tbxSubject"],15000);
  kony.automation.textbox.enterText(["frmNewMessage","tbxSubject"],"testJasmine");
  kony.automation.playback.waitFor(["frmNewMessage","txtareaDescription"],15000);
  kony.automation.textarea.enterText(["frmNewMessage","txtareaDescription"],"testJasmine");
  kony.automation.playback.waitFor(["frmNewMessage","btnSend"],15000);
  kony.automation.button.click(["frmNewMessage","btnSend"]);
  kony.automation.playback.wait(10000);

  verifyMessagesScreen();
}

function selectFirstMessage(){

  kony.automation.playback.waitFor(["frmMessages","flxInbox"],15000);
  kony.automation.flexcontainer.click(["frmMessages","flxInbox"]);
  kony.automation.playback.wait(5000);

  kony.automation.playback.waitFor(["frmMessages","segMessagesInbox"],15000);
  //kony.automation.widget.touch(["frmMessages","segMessagesInbox[0,0]","flxMessagesMain"], [96,42],[[96,42],[96,42]],[96,42]);
  kony.automation.widget.touch(["frmMessages","segMessagesInbox[0,0]","flxmain"], [96,42],[[96,42],[96,42]],[96,42]);
  kony.automation.gesture.tap(["frmMessages","segMessagesInbox[0,0]","flxmain"], {"taps":1,"fingers":1,"point":[287.138671875,126.1083984375]});
  kony.automation.playback.wait(10000);
}

function deleteNewMessage(){

  selectFirstMessage();

  kony.automation.playback.waitFor(["frmMessagesDetails","flxDelete"],15000);
  kony.automation.flexcontainer.click(["frmMessagesDetails","flxDelete"]);
  kony.automation.alert.click(0);
  kony.automation.playback.wait(10000);

  verifyMessagesScreen(); 
}

function replyNewMessage(){

  selectFirstMessage();

  kony.automation.playback.waitFor(["frmMessagesDetails","flxReply"],15000);
  kony.automation.flexcontainer.click(["frmMessagesDetails","flxReply"]);
  kony.automation.textarea.enterText(["frmMessagesDetails","txtAreaReply"],"reply Message");
  kony.automation.playback.waitFor(["frmMessagesDetails","btnSend"],15000);
  kony.automation.button.click(["frmMessagesDetails","btnSend"]);
  kony.automation.playback.wait(10000);

  verifyMessagesScreen();


}

function restoreNewMessage(){

  // Mandate to have 
  kony.automation.playback.waitFor(["frmMessages","flxInbox"],15000);
  kony.automation.flexcontainer.click(["frmMessages","flxInbox"]);
  kony.automation.playback.wait(5000);
  // Mandate to have 

  kony.automation.playback.waitFor(["frmMessages","flxDeleted"],15000);
  kony.automation.flexcontainer.click(["frmMessages","flxDeleted"]);
  kony.automation.playback.wait(5000);

  kony.automation.playback.waitFor(["frmMessages","segMessagesInbox"],15000);
  //kony.automation.widget.touch(["frmMessages","segMessagesInbox[0,0]","flxMessagesMain"], [96,42],[[96,42],[96,42]],[96,42]);
  kony.automation.widget.touch(["frmMessages","segMessagesInbox[0,0]","flxmain"], [96,42],[[96,42],[96,42]],[96,42]);
  kony.automation.gesture.tap(["frmMessages","segMessagesInbox[0,0]","flxmain"], {"taps":1,"fingers":1,"point":[287.138671875,126.1083984375]});
  kony.automation.playback.wait(10000);

  kony.automation.playback.waitFor(["frmMessagesDetails","btnRestore"],15000);
  kony.automation.button.click(["frmMessagesDetails","btnRestore"]);
  kony.automation.playback.wait(10000);

  verifyMessagesScreen();

}

function searchNewMessage(){

  kony.automation.playback.waitFor(["frmMessages","tbxSearch"],15000);
  kony.automation.widget.touch(["frmMessages","tbxSearch"], [108,10],null,null);
  kony.automation.playback.waitFor(["frmMessages","customSearchbox","tbxSearch"],15000);
  kony.automation.textbox.enterText(["frmMessages","customSearchbox","tbxSearch"],"test");
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmMessages","segMessagesInbox"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmMessages","segMessagesInbox[0,0]","lblSubject"], "text")).not.toBe('');
  kony.automation.playback.waitFor(["frmMessages","customSearchbox","btnCancel"],15000);
  kony.automation.widget.touch(["frmMessages","customSearchbox","btnCancel"], null,null,[24,7]);
  kony.automation.playback.waitFor(["frmMessages","customSearchbox","btnCancel"],15000);
  kony.automation.button.click(["frmMessages","customSearchbox","btnCancel"]);
  kony.automation.playback.wait(5000);

  verifyMessagesScreen();


}

function verifyRequestID(){

  selectFirstMessage();

  kony.automation.playback.waitFor(["frmMessagesDetails","segMessageDetails"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmMessagesDetails","segMessageDetails[0,0]","lblReqVal"], "text")).not.toBe('');
  kony.automation.playback.waitFor(["frmMessagesDetails","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmMessagesDetails","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);

  verifyMessagesScreen();
}

function MoveBackToDashBoard_Messages(){

  kony.automation.playback.waitFor(["frmMessages","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmMessages","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmMessages","Hamburger","segHamburger"],15000);
  kony.automation.segmentedui.scrollToRow(["frmMessages","Hamburger","segHamburger[0,0]"]);
  kony.automation.segmentedui.click(["frmMessages","Hamburger","segHamburger[0,0]"]);
  kony.automation.playback.wait(5000);

  VerifyAccountsDashBoard();

}