function SelectAccountOndashBoard(account){

  kony.automation.playback.waitFor(["frmUnifiedDashboard","segAccounts"],15000);
  let indices = getIndex(account);
  kony.automation.widget.touch(["frmUnifiedDashboard","segAccounts"], null,null,[80,97]);
  kony.automation.segmentedui.click(["frmUnifiedDashboard","segAccounts[" + indices.i + "," + indices.j +"]"]);
  kony.automation.playback.wait(10000);

  kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","lblAccountName"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","accountSummaryNative","lblAccountName"], "text")).not.toBe('');

}

// function getIndex(account){
//   let segData = kony.automation.widget.getWidgetProperty(["frmUnifiedDashboard","segAccounts"], "data");
//   let i=0;
//   let j=0;

//   for(var a = 0; a<segData.length; a++){
//     for(var b=0; b<segData[a][1].length; b++){
//       if(segData[a][1][b].accountName.includes(account)){
//         i=a;
//         j=b;
//         break;
//       }
//     }
//   }

//   return {
//     i,
//     j
//   };
// }

 function getIndex(account){
  let segData = kony.automation.widget.getWidgetProperty(["frmUnifiedDashboard","segAccounts"], "data");
  let i=0;
  let j=0;

  for(var a = 0; a<segData.length; a++){
    for(var b=0; b<segData[a][1].length; b++){
      if(segData[a][1][b].accountName === undefined){
        kony.automation.flexcontainer.click(["frmUnifiedDashboard","segAccounts[" + a + "," + b +"]","flxViewContainer"]);
        kony.automation.playback.wait(2000);
        return getIndex(account);                                   

      }else{
        if(segData[a][1][b].accountName.includes(account)){
          i=a;
          j=b;
          break;
        }                               
      }
    }
  }
  return {
    i,
    j
  };
}

function ClickonFirstSavingAccount(){

  SelectAccountOndashBoard("Saving");

}

function ClickonFirstCheckingAccount(){

  SelectAccountOndashBoard("Checking");
}

function ClickonFirstLoanAccount(){

  SelectAccountOndashBoard("Loan");
}

function ClickonFirstCreditCardAccount(){

  SelectAccountOndashBoard("Credit Card");
}

function ClickonFirstDepositAccount(){

  SelectAccountOndashBoard("Deposit");
}

function VerifyAccInfo(){

  kony.automation.playback.waitFor(["frmAccountDetails","customHeader","imgSearch"],15000);
  kony.automation.widget.touch(["frmAccountDetails","customHeader","imgSearch"], null,null,[11,9]);
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmAccountInfo","information","lblTab1Header"],15000);
  expect(kony.automation.widget.getWidgetProperty(["frmAccountInfo","information","lblTab1Header"], "text")).not.toBe('');
}

function MoveBackFromAccInfo(){

  kony.automation.playback.waitFor(["frmAccountInfo","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmAccountInfo","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);
}

function verifyEditAccountNickname(NickName){

  kony.automation.playback.waitFor(["frmAccountInfo","customHeader","btnRight"],15000);
  kony.automation.button.click(["frmAccountInfo","customHeader","btnRight"]);
  kony.automation.playback.waitFor(["frmAccountInfo","btnEditNickName"],15000);
  kony.automation.button.click(["frmAccountInfo","btnEditNickName"]);
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmAccInfoEdit","txtNickName"],15000);
  kony.automation.textbox.enterText(["frmAccInfoEdit","txtNickName"],NickName);
  kony.automation.playback.waitFor(["frmAccInfoEdit","btnSave"],15000);
  kony.automation.button.click(["frmAccInfoEdit","btnSave"]);
  kony.automation.playback.wait(5000);

  MoveBackFromAccInfo();

}
function MoveBackfromAccountDetails(){

  kony.automation.playback.waitFor(["frmAccountDetails","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmAccountDetails","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);
//   kony.automation.playback.waitFor(["frmAccountDetails","Hamburger","segHamburger"],15000);
//   kony.automation.segmentedui.click(["frmAccountDetails","Hamburger","segHamburger[0,0]"]);
//   kony.automation.playback.wait(5000);
}

function VerifyMoreoptionsDisplayed(){

  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","flxLink4"],15000);
  kony.automation.widget.touch(["frmAccountDetails","quicklinksNative","flxLink4"], null,null,[57,28]);

  kony.automation.playback.waitFor(["frmAccountDetails","flxCancel"],15000);
  kony.automation.flexcontainer.click(["frmAccountDetails","flxCancel"]);
}

function VerifyOptionsOnLandingScreen(){

  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink1"],15000);
  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink2"],15000);
  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink3"],15000);
  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","lblLink4"],15000);

  expect(kony.automation.widget.getWidgetProperty(["frmAccountDetails","quicklinksNative","lblLink1"], "text")).not.toBe('');

}

function VerifyPendingTranscations(){

  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"],15000);

  try{
    let isAvailable=kony.automation.widget.getWidgetProperty(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[1,-1]","lblHeaderName"], "text");

    kony.print("is Available "+isAvailable);

    if(isAvailable.includes('Pending')){

      kony.automation.segmentedui.click(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[1,0]"]);
      kony.automation.playback.wait(5000);
      kony.automation.playback.waitFor(["frmMMTransactionDetails","customHeader","lblLocateUs"],15000);
      expect(kony.automation.widget.getWidgetProperty(["frmMMTransactionDetails","customHeader","lblLocateUs"], "text")).not.toBe('');

      kony.automation.playback.waitFor(["frmMMTransactionDetails","customHeader","flxBack"],15000);
      kony.automation.flexcontainer.click(["frmMMTransactionDetails","customHeader","flxBack"]);
      kony.automation.playback.wait(5000);

      MoveBackfromAccountDetails();
    }else{

      MoveBackfromAccountDetails();
    }
  }catch(Exception){
    MoveBackfromAccountDetails();
  }

  //   kony.automation.playback.waitFor(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"]);
  //   kony.automation.segmentedui.click(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[1,0]"]);

  //   kony.automation.playback.wait(5000);

  //   kony.automation.playback.waitFor(["frmMMTransactionDetails","customHeader","lblLocateUs"]);
  //   expect(kony.automation.widget.getWidgetProperty(["frmMMTransactionDetails","customHeader","lblLocateUs"], "text")).not.toBe('');

  //   kony.automation.playback.waitFor(["frmMMTransactionDetails","customHeader","flxBack"]);
  //   kony.automation.flexcontainer.click(["frmMMTransactionDetails","customHeader","flxBack"]);
  //   kony.automation.playback.wait(5000);
}

function VerifyPostedTranscations(){

  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"],15000);

  try{
    let isAvailable=kony.automation.widget.getWidgetProperty(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[2,-1]","lblHeaderName"], "text");

    kony.print("is Available "+isAvailable);

    if(isAvailable.includes('Posted')){

      kony.automation.segmentedui.click(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[2,0]"]);
      kony.automation.playback.wait(5000);
      kony.automation.playback.waitFor(["frmMMTransactionDetails","customHeader","lblLocateUs"],15000);
      expect(kony.automation.widget.getWidgetProperty(["frmMMTransactionDetails","customHeader","lblLocateUs"], "text")).not.toBe('');

      kony.automation.playback.waitFor(["frmMMTransactionDetails","customHeader","flxBack"],15000);
      kony.automation.flexcontainer.click(["frmMMTransactionDetails","customHeader","flxBack"]);
      kony.automation.playback.wait(5000);

      MoveBackfromAccountDetails();
    }else{

      MoveBackfromAccountDetails();
    }
  }catch(Exception){
    MoveBackfromAccountDetails();
  }

  //   kony.automation.playback.waitFor(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"]);
  //   kony.automation.segmentedui.click(["frmAccountDetails","accountsTransactionListNative","segTransactionsList[2,0]"]);

  //   kony.automation.playback.wait(5000);

  //   kony.automation.playback.waitFor(["frmMMTransactionDetails","customHeader","lblLocateUs"]);
  //   expect(kony.automation.widget.getWidgetProperty(["frmMMTransactionDetails","customHeader","lblLocateUs"], "text")).not.toBe('');

  //   kony.automation.playback.waitFor(["frmMMTransactionDetails","customHeader","flxBack"]);
  //   kony.automation.flexcontainer.click(["frmMMTransactionDetails","customHeader","flxBack"]);
  //   kony.automation.playback.wait(5000);

}

function ScrollDownTranscations(){

  kony.automation.playback.waitFor(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"],15000);
  kony.automation.segmentedui.scrollToBottom(["frmAccountDetails","accountsTransactionListNative","segTransactionsList"]);
  kony.automation.playback.wait(5000);
}

function VerifyAdvancedSearch(){

  kony.automation.playback.waitFor(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"],15000);
  kony.automation.widget.touch(["frmAccountDetails","accountSummaryNative","search","imgAdvancedSearchIcon"], [17,16],null,null);
  kony.automation.playback.wait(5000);

  kony.automation.playback.waitFor(["frmAdvanceSearch","segType"],15000);
  kony.automation.segmentedui.click(["frmAdvanceSearch","segType[0,0]"]);
  kony.automation.playback.waitFor(["frmAdvanceSearch","flxAddRangeAmount"],15000);
  kony.automation.flexcontainer.click(["frmAdvanceSearch","flxAddRangeAmount"]);
  kony.automation.playback.waitFor(["frmAdvanceSearch","txtAmountFrom"],15000);
  kony.automation.textbox.enterText(["frmAdvanceSearch","txtAmountFrom"],"1");
  kony.automation.playback.waitFor(["frmAdvanceSearch","txtAmountTo"],15000);
  kony.automation.textbox.enterText(["frmAdvanceSearch","txtAmountTo"],"100");
  kony.automation.playback.waitFor(["frmAdvanceSearch","btnSearch"],15000);
  kony.automation.button.click(["frmAdvanceSearch","btnSearch"]);
  kony.automation.playback.wait(5000);

  kony.automation.playback.waitFor(["frmAdvanceSearchResults","customHeader","flxBack"],15000);
  kony.automation.playback.wait(3000);
  kony.automation.flexcontainer.click(["frmAdvanceSearchResults","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);
  kony.automation.playback.waitFor(["frmAdvanceSearch","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmAdvanceSearch","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);
}

function VerifySavingsAccStatements(){

  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","flxLink4"],15000);
  kony.automation.widget.touch(["frmAccountDetails","quicklinksNative","flxLink4"], null,null,[54,27]);
  kony.automation.playback.waitFor(["frmAccountDetails","flxAddRow6"],15000);
  kony.automation.flexcontainer.click(["frmAccountDetails","flxAddRow6"]);
  kony.automation.playback.waitFor(["frmAccStatements","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmAccStatements","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);

}

function VerifyCheckingAccStatements(){

  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","flxLink4"],15000);
  kony.automation.widget.touch(["frmAccountDetails","quicklinksNative","flxLink4"], null,null,[54,27]);
  kony.automation.playback.waitFor(["frmAccountDetails","flxAddRow6"],15000);
  kony.automation.flexcontainer.click(["frmAccountDetails","flxAddRow6"]);
  kony.automation.playback.waitFor(["frmAccStatements","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmAccStatements","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);

}

function VerifyCreditCardAccStatements(){

  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","flxLink3"],15000);
  kony.automation.flexcontainer.click(["frmAccountDetails","quicklinksNative","flxLink3"]);

  kony.automation.playback.waitFor(["frmAccStatements","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmAccStatements","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);

}

function VerifyLoanAccStatements(){

  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","flxLink2"],15000);
  kony.automation.flexcontainer.click(["frmAccountDetails","quicklinksNative","flxLink2"]);

  kony.automation.playback.waitFor(["frmAccStatements","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmAccStatements","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);

}

function VerifyDepositAccStatements(){

  kony.automation.playback.waitFor(["frmAccountDetails","quicklinksNative","flxLink1"],15000);
  kony.automation.flexcontainer.click(["frmAccountDetails","quicklinksNative","flxLink1"]);

  kony.automation.playback.waitFor(["frmAccStatements","customHeader","flxBack"],15000);
  kony.automation.flexcontainer.click(["frmAccStatements","customHeader","flxBack"]);
  kony.automation.playback.wait(5000);

}