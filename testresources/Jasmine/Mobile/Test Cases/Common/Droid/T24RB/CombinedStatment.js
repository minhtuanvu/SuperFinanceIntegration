function ClickOnCombinedStatment(){
	kony.automation.playback.waitFor(["frmAccStatements","btnCombinedStatements"],15000);
	kony.automation.button.click(["frmAccStatements","btnCombinedStatements"]);
	
}

function ClickOnGenerateNewAtatment(){
	kony.automation.button.click(["frmAccStatements","btnGenerate"]);
	kony.automation.playback.waitFor(["frmCombinedStatement","flxShowAdditionalOptions"],15000);
}

function ClickOnShowAdditionalOptions(){
	kony.automation.playback.waitFor(["frmCombinedStatement","flxShowAdditionalOptions"],15000);
	kony.automation.flexcontainer.click(["frmCombinedStatement","flxShowAdditionalOptions"]);
}

function VerifyAllAccountsOption(){
	kony.automation.playback.waitFor(["frmCombinedStatement","segShowFilters[0,0]","flxAccounts"],15000);
	expect(kony.automation.widget.getWidgetProperty(["frmCombinedStatement","segShowFilters[0,0]","lblName"], "text")).toContain("All Accounts");
	kony.automation.flexcontainer.click(["frmCombinedStatement","flxCancel"]);
}

function GoBackToAccountStatement(){
	kony.automation.playback.waitFor(["frmCombinedStatement","customHeader","flxBack"],15000);
	kony.automation.flexcontainer.click(["frmCombinedStatement","customHeader","flxBack"]);
	kony.automation.playback.waitFor(["frmAccStatements","customHeader","flxBack"],15000);
}

function GoBackToDashboardFromAccountStatment(){
	kony.automation.playback.waitFor(["frmAccStatements","customHeader","flxBack"],15000);
	kony.automation.flexcontainer.click(["frmAccStatements","customHeader","flxBack"]);
}

function getIndexOfAccountName(accountName){

let segData = kony.automation.widget.getWidgetProperty(["frmCombinedStatement","segAccounts"], "data");
// kony.print("segData : "+segData[0][1][1].updatedAccountName);
	for(let i=0; i<segData[0][1].length; i++){
		if(segData[0][1][i].updatedAccountName.includes(accountName)){
			return i;
		}
	}
  return 1;
}

function SelectAccount(accountName){
	kony.automation.playback.waitFor(["frmCombinedStatement","segAccounts"],15000);
	kony.automation.playback.wait(3000);
	let index = getIndexOfAccountName(accountName);
	kony.automation.segmentedui.scrollToRow(["frmCombinedStatement","segAccounts[0," +index +"]"]);
	kony.automation.flexcontainer.click(["frmCombinedStatement","segAccounts[0," +index +"]","flxSelect"]);
}

function SelectAllAccount() {
	kony.automation.playback.waitFor(["frmCombinedStatement","segAccounts"],15000);
	kony.automation.flexcontainer.click(["frmCombinedStatement","segAccounts[0,-1]","flxSelectall"]);
}

function SelectStartDate(){
	kony.automation.playback.waitFor(["frmCombinedStatement","lblStartDateValue"],15000);
	kony.automation.widget.touch(["frmCombinedStatement","lblStartDateValue"], [61,13],null,null);
	kony.automation.playback.waitFor(["frmStatementStartDate","customCalendar","flxPreviousMonth"],15000);
	kony.automation.flexcontainer.click(["frmStatementStartDate","customCalendar","flxPreviousMonth"]);
	kony.automation.widget.touch(["frmStatementStartDate","customCalendar","m1CopyLabel0a7f34907bda844"], null,null,[5,12]);
	kony.automation.button.click(["frmStatementStartDate","btnContinue"]);
}

function SelectEndDate(){
	kony.automation.playback.waitFor(["frmCombinedStatement","lblEndDateValue"],15000);
	kony.automation.widget.touch(["frmCombinedStatement","lblEndDateValue"], [33,11],null,null);
	kony.automation.playback.waitFor(["frmStatementsEndDate","btnContinue"],15000);
	kony.automation.button.click(["frmStatementsEndDate","btnContinue"]);
	kony.automation.playback.waitFor(["frmCombinedStatement","segAccounts"],15000);
}


function ClickOnContinue(){
	kony.automation.button.click(["frmCombinedStatement","btnDownload"]);
	kony.automation.playback.waitFor(["frmViewCombinedStatements","segFileFormats"],15000);
}

function SearchAccount(account){
	kony.automation.playback.waitFor(["frmCombinedStatement","tbxSearch"],15000);
	kony.automation.widget.touch(["frmCombinedStatement","tbxSearch"], null,null,[195,13]);
	kony.automation.textbox.enterText(["frmCombinedStatement","customSearchbox","tbxSearch"],account);
	kony.automation.playback.wait(1000);
// 	let isAccountAvailable = ! kony.automation.widget.getWidgetProperty(["frmCombinedStatement","lblNoTransaction"], "isVisible");
// 	if (!isAccountAvailable) {
// 		expect("Account Available").toContain("Not Available");
// 	}
	kony.automation.playback.wait(1000);
	kony.automation.button.click(["frmCombinedStatement","customSearchbox","btnCancel"]);
}

function SelectFileFormatAndGenerateStatement(fileFormat){
	
	let index = getIndexOfFileFormat(fileFormat);
// 	expect(kony.automation.widget.getWidgetProperty(["frmViewCombinedStatements","segFileFormats[0,0]","lblTypeName"], "text")).toEqual("PDF");
	kony.automation.playback.waitFor(["frmViewCombinedStatements","segFileFormats"],15000);
	kony.automation.segmentedui.click(["frmViewCombinedStatements","segFileFormats[0," + index + "]"]);
	kony.automation.button.click(["frmViewCombinedStatements","btnCreate"]);
	
}

function VerifyDownloadOption(){
	kony.automation.playback.waitFor(["frmViewCombinedStatements","btnCreate"],15000);
	expect(kony.automation.widget.getWidgetProperty(["frmViewCombinedStatements","btnCreate"], "isVisible")).toEqual(true);
}

function GoBackFromDownloadScreenToCombinedStatment(){
	kony.automation.playback.waitFor(["frmViewCombinedStatements","customHeader","flxBack"],15000);
	kony.automation.flexcontainer.click(["frmViewCombinedStatements","customHeader","flxBack"]);
	kony.automation.playback.waitFor(["frmCombinedStatement","tbxSearch"],15000);
}

function VerifyAcknowledgement(){
	kony.automation.playback.waitFor(["frmDownLoadCombinedstatement","lblInfoBold"]);
	expect(kony.automation.widget.getWidgetProperty(["frmDownLoadCombinedstatement","lblInfoBold"], "text")).toContain("preparing");
	kony.automation.playback.waitFor(["frmDownLoadCombinedstatement","btnBackToStatement"],15000);
	kony.automation.button.click(["frmDownLoadCombinedstatement","btnBackToStatement"]);
}

function getIndexOfFileFormat(fileFormat){
  let segData = kony.automation.widget.getWidgetProperty(["frmViewCombinedStatements","segFileFormats"],"data");
  for(let i=0; i<segData.length; i++){
	if(segData[i].lblTypeName.includes(fileFormat)){
		return i;
	}
  }
	return -1;
}