define([ './ParserUtilsManager','./UnifiedTransferDAO','./ValidationUtilManager','FormatUtil','./DataProcessorUtility'], function (ParserUtilsManager, UnifiedTransferDAO, ValidationUtilManager,FormatUtil,DataProcessorUtility)  {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

      this.keypadString = '0.00',
      this.isPeriodUsed = false;
      this.toAccountsUnicode = "";
      this.isToAccountEdit = false;
      this.fromAccountBackupContext = {};
      this.amountSelectedFlowType = "";
      this.enableBankDate = "";
      this._sknVerifyBalanceValues = "";
      this.selectedDateFormat = "";
      this.daysToRestrict = "";
      this.dateContinue = "";
      this.sknhighlightedDate = "";
      this._loanCriteria="";
      this._loanObjectName="";
      this._loanObjectServiceName="";
      this._loanOperationName="";
      this._CCoperationname="";
      this._CCObjectServiceName="";
      this._CCObjectname="";
      this._CCcriteria="";
      this._CCServiceResponseIdenfier="";
      this.Icons = {
        "clearText" : "",
        "dropdownExpand" : "",
        "CITI_BANK_IMAGE" : "",
        "CHASE_BANK_IMAGE" : "",
        "BOA_BANK_IMAGE" : "",
        "HDFC_BANK_IMAGE" : "",
        "INFINITY_BANK_IMAGE" : "",
        "EXTERNAL_BANK_IMAGE" : ""
      };
      this.defaultFrequency="";
      this.newPayee = "";
      this._verifyBeneMobile="";
      this._verifyBeneZipcode="";
      this._verifyBeneCountry="";
      this._verifyBeneAddLine1="";
      this._verifyBeneCity="";
      this._verifyBeneEmail="";
      this._verifyBeneState="";
      this._verifyBeneAddLine2="";
      this._filterTypeList="";
      this.processFlowType = "";
      this.UnifiedTransferDAO = new UnifiedTransferDAO();
      this.validationUtilManager = new ValidationUtilManager();
      this.dataProcessorUtility = new DataProcessorUtility();
      this.FormatUtils = new FormatUtil();
      this._otherAmtBtn = "";
      this._otherAmtHeader = "";
      this._startDateLabel="";
      this._endDateLabel="";
      this._sendOnDateLabel="";
      this._currentServiceBankDate="";
      this._lblBICSwiftQuestion="";
      this._swiftSrchObjServiceName="";
      this._verifyNotesLabel = "";
      this._verifyNotesValue = "";
      this._sknCurrencyselection="";
      this.backUpFromAccountList="";
      this.backUpFromAccountMapping="";
      this.isToChevron = "";
      this.formatedToAccBackup="";
      this.isToSearchApplied = false;
      this.toAccRecordsArray ="";
      this.toAccClearSearchApplied=true;
      this.toAccSegmentData = "";
      this._countryServiceIdentifier = ""; 
      this._creaditcardObjectName = "";
      this._creditcardOperationName = "";
      this._creditcardCriteria = "";
      this._creditcardResponseIdentifier = "";
      this.response="";
      this._TCobjectServiceName = "";
      this._TCobjectName = "";
      this._TCoperationName = "";
      this._TCcriteria = "";
      this._lblReadOnlyField1Label="";
      this._lblReadOnlyField1Value="";
      this._lblReadOnlyField2Label="";
      this._lblReadOnlyField2Value="";
      this._lblReadOnlyField3Label="";
      this._lblReadOnlyField3Value="";
      this._lblReadOnlyField4Label="";
      this._lblReadOnlyField4Value="";
      this._lblReadOnlyField5Label="";
      this._lblReadOnlyField5Value="";
      this._lblReadOnlyField6Label="";
      this._lblReadOnlyField6Value="";
      this._lblReadOnlyField7Label="";
      this._lblReadOnlyField7Value="";
      this._lblReadOnlyField8Label="";
      this._lblReadOnlyField8Value="";
      this._TCserviceResponseIdentifier = "";
      this._DateServiceResponseIdentifier = "";
      this._DateCriteria = "";
      this._DateOperationName = "";
      this._DateObjectName = "";
      this._DateObjectServiceName = "";
      this._ValServiceResponseIdentifier = "";
      this._ValCriteria = "";
      this._ValOperationName = "";
      this._ValObjName = "";
      this._ValObjectServiceName = "";
      this._serviceFeesPaidValues="";
      this._serviceDefaultFeesPaid ="";
      this._servicePaymentMethodValues="";
      this._serviceDefaultPaymentMethod="";
      this._transferTypePermission="";
      // Create transaction service params
      this._transObjectName = "";
      this._transServiceResponseIdentifier = "";
      this._transCriteria = "";
      this._transOperationName = "";
      this._transObjectServiceName = "";
      this._enableMFA = "";
      this._sknQuestionLbl = "";
      this._sknVerifyFieldLabel = "";
      this._sknVerifyFieldValue = "";
      this._sknVerifyChargesValue = "";
      this.lastSelectedRow = [];
      this._iconSelectGrnTick="";
      this._sknSegOptionNotSelected="";
      this._sknSegOptionSelected="";
      this._sknSegCurrencyValues="";
      this._sknFeesPaidOptionHeader= "";
      this._sknFeesPaidOptionDescription= "";
      this._researchSwiftBtn="";
      this.selectedCurr = "";
      this.segmentData = "";
      this.isBusinessAccountListValue="";
      this.setPaymentMethodValue="";
      this.isPaymentMethodSelected="";
      this.fromUnicode="";
      this.currencyFlowCheck="";
      this.fromAccountEdit=false;
      this.recordsArray="";
      this.fromResponse="";
      this.searchApplied=false;
      this.clearSearchApplied=false;
      this.setFeesPaidSelected="";
      this._citiBankImg;
      this._chaseBankImg;
      this._boaBankImg;
      this._hdfcBankImg;
      this._infinityBankImg;
      this._externalBankImg;
      this._businessIcon;
      this._retailIcon;
      this._btnUseSwift="";
      //declaration for Object Name in the group:From Account List Service
      this._fromAccountObjectName="";

      //declaration for Object Service Name in the group:From Account List Service
      this._fromAccountObjectServiceName="";

      //declaration for Object Service Name in the group:From Account List Service
      this._fromAccountObjectName="";

      //declaration for Title in the group:From Account
      this._fromAccountsTitle="";

      //declaration for Header Label in the group:Skins
      this._sknHeaderLbl="";

      //declaration for Field From Label in the group:Transfer Amount
      this._fieldFromLblAmtScrn="";

      //declaration for Title in the group:To Account
      this._toAccountsTitle="";

      //declaration for Currency Title in the group:Currency
      this._currencyPageTitle="";

      //declaration for Title in the group:Payment Method
      this._paymentMethodTitle="";

      //declaration for Title in the group:BIC/SWIFT Code
      this._titleBICSwiftCode="";

      //declaration for Title in the group:SWIFT BIC Search
      this._swiftLookupHeader="";

      //declaration for Object Name in the group:SWIFT search Service
      this._swiftSrchObjectName="";

      //declaration for Title Label in the group:Required Code
      this._titleRequiredCode="";

      //declaration for Title Label in the group:General
      this._titleCalenderSendOn="";

      //declaration for Verify Section Title in the group:Verify Details
      this._verifySectionTitle="";

      //declaration for Title in the group:Fees Paid By
      this._feesPaidTitle="";

      //declaration for Title Label in the group:Add Address Fields
      this._titleAddAddress="";

      //declaration for Object Service Name in the group:To Account List Service
      this._toAccObjServiceName="";

      //declaration for Cancel button in the group:Common Properties
      this._cancelButton="";

      //declaration for Object Name in the group:Search Service
      this._searchObjectName="";

      //declaration for Field Label 1 in the group:Amount
      this._amountLable1="";

      //declaration for Flow Type in the group:General
      this._flowType="";

      //declaration for Frequency Page Title in the group:Frequency
      this._frequencyPageTitle="";

      //declaration for  Title in the group:Fees Paid By
      this._feesPaidTitle="";

      //declaration for  Title in the group:Frequency
      this._defaultFrequency="";

      //declaration for Title Label in the group:FX Rate Reference
      this._titleReferenceLbl="";

      //declaration for Title  Label in the group:Intermediary BIC
      this._titleIntermediaryBIC="";

      //declaration for Title  Label in the group:E2E
      this._titleE2ERef="";

      //declaration for Title  Label in the group:Recipient's Name
      this._titleRecipientName="";

      //declaration for Title Label in the group:Account Number
      this._titleAccountNumber="";

      //declaration for Title Label in the group:Payee Nickname
      this._titlePayeeNickname="";

      //declaration for Title Label in the group:Payee Success Screen
      this._titlePayeeNicknameSuccess="";

      //declaration for  Title in the group:Contact Type
      this._contactTypeTitle="";
      this._contactTypeDescription ="";
      this._contactEmailError="";
      this._contactOROption="";

      //declaration for Title in the group:Country Code
      this._countryCodeTitle="";

      //declaration for Active Icon in the group:Icons
      this._iconActive="";

      //declaration for Supported File Format in the group:Supporting Document
      this._supportedFileFormat="";

      //declaration for Transfer type in the group:Context setting
      this._transferType="";

      //declaration for Data Validation Config in the group:Data Validation
      this._dvfConfig="";

      //declaration for Operation Name in the group:From Account List Service
      this._fromAccountOperationName="";

      //declaration for Description Label in the group:From Account
      this._fromdescriptionLabel="";

      //declaration for Field From Value in the group:Transfer Amount
      this._fieldFromValueAmtScrn="";

      //declaration for Enable Button Skin in the group:Skins
      this._sknEnableContexualBtn="";

      //declaration for Description Label in the group:To Account
      this._todescriptionLabel="";

      //declaration for Transfer Currency Values in the group:Currency
      this._dropdownTransferCurrency="";

      //declaration for Text Input Label in the group:Payment Method
      this._lblPaymentMethod="";

      //declaration for Text Label in the group:BIC/SWIFT Code
      this._lblBICSwiftCode="";

      //declaration for Description in the group:SWIFT BIC Search
      this._swiftLookupDescription="";

      //declaration for Operation Name in the group:SWIFT search Service
      this._swiftSrchOperationName="";

      //declaration for Text Label in the group:Required Code
      this._requiredCodeLbl="";

      //declaration for Text Label in the group:General
      this._lblCalenderDate="";

      //declaration for Field From Label in the group:Verify Details
      this._fieldFromLbl="";

      //declaration for default in the group:Payment Method
      this._defaultPaymentMethod="";

      //declaration for default in the group:Payment Method
      this._defaultFeesPaidBy="";

      //declaration for Text Input Label in the group:Fees Paid By
      this._lblFeesPaidBy="";

      //declaration for Text Label in the group:Add Address Fields
      this._lblAddAddress="";

      //declaration for Object Name in the group:To Account List Service
      this._toAccObjectName="";

      //declaration for Header Background in the group:Skins
      this._sknHeaderBg="";

      //declaration for Search properties in the group:Common Properties
      this._searchProperties="";

      //declaration for Operation Name in the group:Search Service
      this._searchOperationName="";

      //declaration for Field Value 1 in the group:Amount
      this._amountValue1="";

      //declaration for Transfer Type in the group:General
      this._transferTypes="";

      //declaration for Transfer Frequency Dropdown Values in the group:Frequency
      this._dropdownFrequency="";

      //declaration for Text Input Label in the group:Fees Paid By
      this._lblFeesPaidBy="";

      //declaration for Text  Label in the group:FX Rate Reference
      this._lblfxRateReference="";

      //declaration for Text Input Label in the group:Intermediary BIC
      this._lblIntermediaryBIC="";

      //declaration for Text  Label in the group:E2E
      this._lblE2ERef="";

      //declaration for Text Label in the group:Recipient's Name
      this._lblRecipientName="";

      this._recipientRestrictChars = "";

      //declaration for Text Label in the group:Account Number
      this._lblAccountNumber="";

      //declaration for Text  Label in the group:Payee Nickname
      this._lblPayeeNickname="";

      //declaration for Success Label in the group:Payee Success Screen
      this._lblPayeeNicknameSuccess="";

      //declaration for Mobile Number Label in the group:Contact Type
      this._lblMobileNumber="";

      //declaration for Country Search Box Properties in the group:Country Code
      this._countrySearchProperty="";

      this._countryObjectServiceName = "";

      this._countryObjectName = "";

      this._countryOperationName = "";

      this._countryCriteria = "";

      this._CountryIdentifier = "";

      //declaration for Add Icon in the group:Icons
      this._iconAdd="";

      //declaration for Supporting Documents Label in the group:Supporting Document
      this._lblSupportingDocuments="";

      //declaration for Select Option 1 Label in the group:Supporting Document
      this._selectOption1 = "";

      //declaration for Select Option 2 Label in the group:Supporting Document
      this._selectOption2 = "";

      //declaration for Select Option 3 Label in the group:Supporting Document
      this._selectOption3 = "";

      //declaration for Select Option 4 Label in the group:Supporting Document
      this._selectOption4 = "";
      this._removeDocsTitle = "";
      this._sizepopupTitle = "";
      this._popupActionbtns = "";

      this._iphoneFileExtension = "";

      this._addDocumentIcon = "";

      //declaration for Cancel Option Label in the group:Supporting Document
      this._cancelOption  = "";

      //declaration for Minimum Amount in the group:Data Validation
      this._minAmount="";

      //declaration for Field 1 Value in the group:From Account
      this._fromField1Value="";

      //declaration for Criteria in the group:From Account List Service
      this._fromAccountsCriteria="";

      //declaration for From Available Balance Label in the group:Transfer Amount
      this._fieldFromBalanceLblAmtScrn="";

      //declaration for Field 1 Value in the group:To Account
      this._toField1Value="";

      //declaration for Option 1 in the group:Payment Method
      this._paymentMethodOption1="";

      //declaration for Text Input Value in the group:BIC/SWIFT Code
      this._txtInputBICSwiftCode="";

      //declaration for Field 1 Label in the group:SWIFT BIC Search
      this._searchField1Label="";

      //declaration for Criteria in the group:SWIFT search Service
      this._swiftSrchCriteria="";

      //declaration for Field 1 Label in the group:Required Code
      this._requiredCodeField1Lbl="";

      //declaration for Text Input Value in the group:General
      this._txtInputSendOn="";

      //declaration for Field From Value in the group:Verify Details
      this._fieldFromValue="";

      //declaration for Option 1 in the group:Fees Paid By
      this._feesPaidOption1="";

      //declaration for Field 1 Label in the group:Add Address Fields
      this._addAddressField1Lbl="";

      //declaration for Operation Name in the group:To Account List Service
      this._toAccOperationName="";

      //declaration for Cancel button in the group:Skins
      this._sknCancelBtn="";

      //declaration for Empty Record Messge in the group:Common Properties
      this._lblEmptyRecord="";

      //declaration for Criteria in the group:Search Service
      this._searchCriteria="";

      //declaration for Field Label 2 in the group:Amount
      this._amountLable2="";

      //declaration for Segregation Types in the group:General
      this._segregationTypes="";

      //declaration for Option 1 in the group:Fees Paid By
      this._feesPaidOption1="";

      //declaration for Text Input Value in the group:FX Rate Reference
      this._txtInputfxRateReference="";

      //declaration for  Text Input Value in the group:Intermediary BIC
      this._txtInputIntermediaryBIC="";

      //declaration for Text Input Value in the group:E2E
      this._txtInputE2ERef="";

      //declaration for Text Input Value in the group:Recipient's Name
      this._txtInputRecipientName="";

      //declaration for Re-enter  Text Input Label in the group:Account Number
      this._lblReEnterAccountNumber="";

      //declaration for  Text Input Value in the group:Payee Nickname
      this._txtInputPayeeNickname="";

      //declaration for Success Description in the group:Payee Success Screen
      this._lblPayeeNicknameSuccessDescription="";

      //declaration for Mobile Number Value in the group:Contact Type
      this._txtInputMobileNumber="";

      //declaration for Right Arrow in the group:Icons
      this._iconRightArrow="";

      //declaration for SelectedFile in the group:Supporting Document
      this._selectedFileValue="";

      //declaration for Field 2 Value in the group:From Account
      this._fromField2Value="";

      //declaration for Service Response Identifier in the group:From Account List Service
      this._fromServiceResponseIdentifier="";

      //declaration for From Available Balance Value in the group:Transfer Amount
      this._fieldFromBalanceValueAmtScrn="";

      //declaration for Field 2 Value in the group:To Account
      this._toField2Value="";

      //declaration for Option 2 in the group:Payment Method
      this._paymentMethodOption2="";

      //declaration for Continue Button in the group:BIC/SWIFT Code
      this._btnBICSwiftCode="";

      //declaration for Field 1 Value in the group:SWIFT BIC Search
      this._searchField1Value="";

      //declaration for Service Response Identifier in the group:SWIFT search Service
      this._swiftSrchServiceResIdentifier="";

      //declaration for Field 1 Value in the group:Required Code
      this._requiredCodeField1Value="";

      //declaration for Calender continue Button in the group:General
      this._calenderContinueBtn="";

      //declaration for From Available Balance Label in the group:Verify Details
      this._fieldFromBalanceLbl="";

      //declaration for Option 2 in the group:Fees Paid By
      this._feesPaidOption2="";

      //declaration for Field 1 Value in the group:Add Address Fields
      this._addAddressField1Value="";

      //declaration for Criteria in the group:To Account List Service
      this._toAccCriteria="";

      //declaration for Search box in the group:Skins
      this._sknSearchBox="";

      //declaration for Field Value 2 in the group:Amount
      this._amountValue2="";

      //declaration for Option 2 in the group:Fees Paid By
      this._feesPaidOption2="";

      //declaration for Reference Button in the group:FX Rate Reference
      this._referenceBtn="";

      //declaration for Intermediary Button in the group:Intermediary BIC
      this._IntermediaryBtn="";

      //declaration for E2E Button in the group:E2E
      this._E2EBtn="";

      //declaration for Recipient  Button in the group:Recipient's Name
      this._recipientBtn="";

      //declaration for  Text Input Value in the group:Account Number
      this._txtInputAccountNumber="";

      //declaration for Nickname  Button in the group:Payee Nickname
      this._payeeNicknameBtn="";

      //declaration for New Transfer  Button in the group:Payee Success Screen
      this._payeeNicknameNewTransfer="";

      //declaration for Email Label in the group:Contact Type
      this._lblEmail="";

      //declaration for Data Identifier in the group:General
      this._dataIdentifier="";

      //declaration for Back Icon in the group:Icons
      this._iconBack="";

      //declaration for Field 3 Value in the group:From Account
      this._fromField3Value="";

      //declaration for Field To Label in the group:Transfer Amount
      this._fieldToLabelAmtScrn="";

      //declaration for Field 3 Value in the group:To Account
      this._toField3Value="";

      //declaration for Option 3 in the group:Payment Method
      this._paymentMethodOption3="";

      //declaration for Look Up Button in the group:BIC/SWIFT Code
      this._btnBICSWIFTLookup="";

      //declaration for Field 2 Label in the group:SWIFT BIC Search
      this._searchField2Label="";

      //declaration for Field 2 Label in the group:Required Code
      this._requiredCodeField2Lbl="";

      //declaration for From Available Balance Value in the group:Verify Details
      this._fieldFromBalanceValue="";

      //declaration for Option 3 in the group:Fees Paid By
      this._feesPaidOption3="";

      //declaration for Field 2 Label in the group:Add Address Fields
      this._addAddressField2Lbl="";

      //declaration for Service Response Identifier in the group:To Account List Service
      this._toAccServiceResIdentifier="";

      //declaration for Search Text Area in the group:Skins
      this._sknSearchTextArea="";

      //declaration for Field Label 3 in the group:Amount
      this._amountLable3="";

      //declaration for Option 3 in the group:Fees Paid By
      this._feesPaidOption3="";

      //declaration for Re-enter  Text Input Value in the group:Account Number
      this._txtInputReEnterAccountNumber="";

      //declaration for Account Number Error Message in the group:Account Number
      this._accNumErrorMessage="";
      this._accountNumberExistMsg = "";
      this._accountNumberNotMatch = "";
      //declaration for Re-Enterred Account Number Error Message in the group:Account Number
      this.reEnterAccNumErrorMessage="";

      //declaration for Transfer Activities  Button in the group:Payee Success Screen
      this._payeeNicknameTransferActivities="";

      //declaration for Email Value in the group:Contact Type
      this._txtInputEmail="";

      //declaration for Listing Account Types in the group:General
      this._accountTypesList="";

      //declaration for Business in the group:Icons
      this._iconBusiness="";

      //declaration for Field 4 Value in the group:From Account
      this._fromField4Value="";

      //declaration for Field To Value in the group:Transfer Amount
      this._fieldToValueAmtScrn="";

      //declaration for Field 4 Value in the group:To Account
      this._toField4Value="";

      //declaration for Option 4 in the group:Payment Method
      this._paymentMethodOption4="";

      //declaration for Option 5 in the group:Payment Method
      this._paymentMethodOption5="";

      //declaration for Option 6 in the group:Payment Method
      this._paymentMethodOption6="";

      //declaration for Field 2 Value in the group:SWIFT BIC Search
      this._searchField2Value="";

      //declaration for Field 2 Value in the group:Required Code
      this._requiredCodeField2Value="";

      //declaration for Field To Label in the group:Verify Details
      this._fieldToLabel="";

      //declaration for Field 2 Value in the group:Add Address Fields
      this._addAddressField2Value="";

      //declaration for Description Background in the group:Skins
      this._sknDescriptionBg="";

      //declaration for Field Value 3 in the group:Amount
      this._amountValue3="";

      //declaration for Account Number Button in the group:Account Number
      this._accountNumberBtn="";

      //declaration for Phone Number Choose Button in the group:Contact Type
      this._phoneNumberChooseBtn="";

      //declaration for CalenderArrowLeft in the group:Icons
      this._iconCalenderArrowLeft="";

      //declaration for Data Object in the group:General
      this._dataObject="";

      //declaration for To Available Balance Label in the group:Transfer Amount
      this._fieldToBalanceLblAmtScrn="";

      //declaration for To Account Button in the group:To Account
      this._toAccountBtn="";

      //declaration for Field 3 Label in the group:SWIFT BIC Search
      this._searchField3Label="";

      //declaration for Field 3 Label in the group:Required Code
      this._requiredCodeField3Lbl="";

      //declaration for Field To Value in the group:Verify Details
      this._fieldToValue="";

      //declaration for Field 3 Label in the group:Add Address Fields
      this._addAddressField3Lbl="";

      //declaration for Description Label in the group:Skins
      this._sknDescriptionLbl="";

      //declaration for Other Amount Label in the group:Amount
      this._otherAmountLabel="";

      //declaration for Email Choose Button in the group:Contact Type
      this._emailChooseBtn="";

      //declaration for CalenderArrowRight in the group:Icons
      this._iconCalenderArrowRight="";

      //declaration for To Available Balance Value in the group:Transfer Amount
      this._fieldToBalanceValueAmtScrn="";

      //declaration for Field 3 Value in the group:SWIFT BIC Search
      this._searchField3Value="";

      //declaration for Field 3 Value in the group:Required Code
      this._requiredCodeField3Value="";

      //declaration for To Available Balance Label in the group:Verify Details
      this._fieldToBalanceLbl="";

      //declaration for Field 3 Value in the group:Add Address Fields
      this._addAddressField3Value="";

      //declaration for Description Separator in the group:Skins
      this._sknDescriptionSeparator="";

      //declaration for Other Amount Value in the group:Amount
      this._otherAmountValue="";

      //declaration for Contact Type Button in the group:Contact Type
      this._contactTypeBtn="";

      //declaration for Cancel keypad Icon in the group:Icons
      this._iconCancelKeypad="";

      //declaration for Transfer Currency Label in the group:Transfer Amount
      this._lblTransferCurrency="";

      //declaration for Field 4 Label in the group:SWIFT BIC Search
      this._searchField4Label="";

      //declaration for Required Code Button in the group:Required Code
      this._requiredCodeBtn="";

      //declaration for To Available Balance Value in the group:Verify Details
      this._fieldToBalanceValue="";

      //declaration for Field 4 Label in the group:Add Address Fields
      this._addAddressField4Lbl="";

      //declaration for Group header label in the group:Skins
      this._sknGroupHeaderLbl="";

      //declaration for Chevron in the group:Icons
      this._iconChevron="";

      //declaration for Transfer Currency Value in the group:Transfer Amount
      this._transferCurrency="";

      //declaration for Field 4 Value in the group:SWIFT BIC Search
      this._searchField4Value="";

      //declaration for BIC/SWIFT Button in the group:Required Code
      this._swiftBICBtn="";

      //declaration for Field 1 Label in the group:Verify Details
      this._verifyField1Label="";

      //declaration for Field 4 Value in the group:Add Address Fields
      this._addAddressField4Value="";

      //declaration for Group header background in the group:Skins
      this._sknGroupHeaderBg="";

      //declaration for ChevronRight in the group:Icons
      this._iconChevronRight="";

      //declaration for Transfer Amount Label in the group:Transfer Amount
      this._lblTransferAmount="";

      //declaration for Get Details Button in the group:SWIFT BIC Search
      this._getDetailsBtn="";

      //declaration for Clearing Code1 Button in the group:Required Code
      this._clearingCode1Btn="";

      //declaration for Field 1 Value in the group:Verify Details
      this._verifyField1Value="";

      //declaration for Field 5 Label in the group:Add Address Fields
      this._addAddressField5Lbl="";

      //declaration for Primary field 1 in the group:Skins
      this._sknPrimaryField1="";

      //declaration for ChevronWhiteLeft in the group:Icons
      this._iconChevronWhiteLeft="";

      //declaration for Transfer Amount Value in the group:Transfer Amount
      this._txtInputTransferAmount="";

      //declaration for Search Text Label in the group:SWIFT BIC Search
      this._lblSwiftSearchResult="";

      //declaration for Clearing Code2 Button in the group:Required Code
      this._clearingCode2Btn="";

      //declaration for Field 2 Label in the group:Verify Details
      this._verifyField2Label="";

      //declaration for Field 5 Value in the group:Add Address Fields
      this._addAddressField5Value="";

      //declaration for Primary field 2 in the group:Skins
      this._sknPrimaryField2="";

      //declaration for ChevronWhiteRight in the group:Icons
      this._iconChevronWhiteRight="";

      //declaration for Amount Continue Button in the group:Transfer Amount
      this._amountBtn="";

      //declaration for Search Result Value in the group:SWIFT BIC Search
      this._searchResultValue="";

      //declaration for Field 2 Value in the group:Verify Details
      this._verifyField2Value="";

      //declaration for Field 6 Label in the group:Add Address Fields
      this._addAddressField6Lbl="";

      //declaration for Secondary fields in the group:Skins
      this._sknSecondaryFields="";

      //declaration for clear in the group:Icons
      this._iconClear="";

      //declaration for Field 3 Label in the group:Verify Details
      this._verifyField3Label="";

      //declaration for Field 6 Value in the group:Add Address Fields
      this._addAddressField6Value="";

      //declaration for Row separator in the group:Skins
      this._sknRowSeparator="";

      //declaration for Confirmation Tick in the group:Icons
      this._iconConfirmationTick="";

      //declaration for Field 3 Value in the group:Verify Details
      this._verifyField3Value="";

      //declaration for Field 7 Label in the group:Add Address Fields
      this._addAddressField7Lbl="";

      //declaration for Row skin in the group:Skins
      this._sknRow="";

      //declaration for Currency Selection Arrow in the group:Icons
      this._iconCurrencySelection="";

      //declaration for Field 4 Label in the group:Verify Details
      this._verifyField4Label="";

      //declaration for Field 7 Value in the group:Add Address Fields
      this._addAddressField7Value="";

      //declaration for Segment shadow in the group:Skins
      this._sknSegmentShadow="";

      //declaration for Download  in the group:Icons
      this._iconDownload="";

      //declaration for Field 4 Value in the group:Verify Details
      this._verifyField4Value="";

      //declaration for Field 8 Label in the group:Add Address Fields
      this._addAddressField8Lbl="";

      //declaration for Disable Button Skin in the group:Skins
      this._sknDisabledContexualBtn="";

      //declaration for Confirmation Error  in the group:Icons
      this._iconConfirmationError="";

      //declaration for Field 5 Label in the group:Verify Details
      this._verifyField5Label="";

      //declaration for Field 8 Value in the group:Add Address Fields
      this._addAddressField8Value="";

      //declaration for Input Box Placeholder in the group:Skins
      this._sknInputBoxPlaceholder="";

      //declaration for Group Expand  in the group:Icons
      this._iconGroupExpand="";

      this._iconSearchClose = "";

      //declaration for Field 5 Value in the group:Verify Details
      this._verifyField5Value="";

      //declaration for Add Address Button in the group:Add Address Fields
      this._addAddressBtn="";

      //declaration for Add Address Error Message in the group:Add Address Fields
      this._addAddressErrorMsg="";

      //declaration for Input Box Border in the group:Skins
      this._sknInputBoxBorder="";
      //declaration for Text Box Border in the group:Skins
      this._textBoxNormalSkin = "";

      //declaration for Text Box Error in the group:Skins
      this._textBoxErrorSkin = "";

      //declaration for Group Collapse in the group:Icons
      this._iconGroupCollapse="";

      //declaration for Field 6 Label in the group:Verify Details
      this._verifyField6Label="";

      //declaration for Box Skin in the group:Skins
      this._boxSkn="";

      //declaration for InActive in the group:Icons
      this._iconInactive="";

      //declaration for Field 6 Value in the group:Verify Details
      this._verifyField6Value="";

      //declaration for Selected Box Skin in the group:Skins
      this._selectedBoxSkn="";

      //declaration for Info in the group:Icons
      this._iconInfo="";

      //declaration for Field 7 Label in the group:Verify Details
      this._verifyField7Label="";

      //declaration for Title Skin in the group:Skins
      this._titleSkn="";

      //declaration for Search in the group:Icons
      this._iconSearch="";

      //declaration for Field 7 Value in the group:Verify Details
      this._verifyField7Value="";

      //declaration for Description Skin in the group:Skins
      this._descriptionSkn="";

      //declaration for Field 8 Label in the group:Verify Details
      this._verifyField8Label="";

      this._sknHighlightedFlex = "";
      this._sknFlexNormal = "";
      //declaration for Look Up Button Skin in the group:Skins
      this._lookUpSkn="";

      //declaration for Personal in the group:Icons
      this._iconPersonal="";

      //declaration for Field 8 Value in the group:Verify Details
      this._verifyField8Value="";

      //declaration for Success Label in the group:Skins
      this._successLabelSkn="";

      //declaration for Field 9 Label in the group:Verify Details
      this._verifyField9Label="";

      //declaration for Error Validation Skin in the group:Skins
      this._errorValidationSkn="";

      //declaration for Field 9 Value in the group:Verify Details
      this._verifyField9Value="";

      //declaration for Field 10 Label in the group:Verify Details
      this._verifyField10Label="";

      //declaration for Field 10 Value in the group:Verify Details
      this._verifyField10Value="";

      //declaration for Field 11 Label in the group:Verify Details
      this._verifyField11Label="";

      //declaration for Field 11 Value in the group:Verify Details
      this._verifyField11Value="";

      //declaration for Field 12 Label in the group:Verify Details
      this._verifyField12Label="";

      //declaration for Field 12 Value in the group:Verify Details
      this._verifyField12Value="";

      //declaration for Field 13 Label in the group:Verify Details
      this._verifyField13Label="";

      //declaration for Field 13 Value in the group:Verify Details
      this._verifyField13Value="";

      //declaration for Field 14 Label in the group:Verify Details
      this._verifyField14Label="";

      //declaration for Field 14 Value in the group:Verify Details
      this._verifyField14Value="";

      //declaration for Field 15 Label in the group:Verify Details
      this._verifyField15Label="";

      //declaration for Field 15 Value in the group:Verify Details
      this._verifyField15Value="";

      //declaration for Field 16 Label in the group:Verify Details
      this._verifyField16Label="";

      //declaration for Field 16 Value in the group:Verify Details
      this._verifyField16Value="";

      //declaration for Field 17 Label in the group:Verify Details
      this._verifyField17Label="";

      //declaration for Field 17 Value in the group:Verify Details
      this._verifyField17Value="";

      //declaration for Field 18 Label in the group:Verify Details
      this._verifyField18Label="";

      //declaration for Field 18 Value in the group:Verify Details
      this._verifyField18Value="";

      //declaration for Transfer Charges Label in the group:Verify Details
      this._transferChargesLbl="";

      //declaration for Transfer Charges Value in the group:Verify Details
      this._transferChargesValue="";

      //declaration for Broker Fee Label in the group:Verify Details
      this._brockedFee="";

      //declaration for Broker Fee Value in the group:Verify Details
      this._brokerValue="";

      //declaration for Transfer Fee Label in the group:Verify Details
      this._transferFee="";

      //declaration for Transfer Fee Value in the group:Verify Details
      this._transferFeeValue="";

      //declaration for Verify Button in the group:Verify Details
      this._verifyTransferBtn="";

      //declaration for Address Object Service in the group:Address Services (State & Country Related)
      this._addressObjectService="";

      //declaration for Object Service Name in the group:Country Service
      this._countryObjectServiceName="";

      //declaration for phoneNumberRestrictCharacterSet in the group:Add Address Field
      this._phoneNumberRestrictCharacterSet="";

      //declaration for Get Countries Operation in the group:Address Services (State & Country Related)
      this._getCountriesOperation="";

      //declaration for Get Countries Criteria in the group:Address Services (State & Country Related)
      this._getCountriesCriteria="";

      //declaration for Get Countries Identifier in the group:Address Services (State & Country Related)
      this._getCountriesIdentifier="";

      //declaration for States Object in the group:Address Services (State & Country Related)
      this._statesObject="";

      //declaration for Get States Operation in the group:Address Services (State & Country Related)
      this._getStatesOperation="";

      //declaration for Get States Criteria in the group:Address Services (State & Country Related)
      this._getStatesCriteria="";

      //declaration for Get States Identifier in the group:Address Services (State & Country Related)
      this._getStatesIdentifier="";

      //declaration for ListBox skin in the group:Skins
      this._listBoxSkin = "";

      //declaration for T ListBox Focusskin in the group:Skins
      this._listBoxFocusSkin = "";

      //declaration for  ListBox placeHolderskin in the group:Skins
      this._listBoxPlaceHolderSkin = "";

      //declaration for  ListBox placeHolderskin in the group:Skins
      this._listBoxDropDownImage = "";

      //declaration for subTitleSkin in the group:Skins
      this._subTitleSkin = "";

      this._sknPopupCloseButton = "";

      this._sknPopupCancelButton = "";

      this._sknSupportingTextHeader = "";

      this._sknSupportingActionBtns = ""; 

      this._sknRemoveSupportingDocsTitle = "";

      this._sknCameraWidget = "";

      this._sknSelectOption = "";

      //declaration for accNumInputFieldSkin in the group:Skins
      this._accNumInputFieldSkin = "";

      //declaration for reEnterAccNumInputFieldSkin in the group:Skins
      this._reEnterAccNumInputFieldSkin = "";

      //declaration for addressRestrictCharacterSet in the group:Skins
      this._addressRestrictCharacterSet = "";

      //declaration for accNumInputLineSkin in the group:Skins
      this._accNumInputLineSkin = "";

      //Parser Util Object
      this.parserUtilsManager = new ParserUtilsManager();

      //declaration for IBANObjectServiceName in the group: IBAN Validate Service
      this._IBANObjectServiceName ="";
      //declaration for IBANObjectName in the group: IBAN Validate Service
      this._IBANObjectName ="";
      //declaration for IBANOperationName in the group: IBAN Validate Service
      this._IBANOperationName ="";
      //declaration for IBANCriteria in the group: IBAN Validate Service
      this._IBANCriteria ="";
      //declaration for getBeneficiaryService in the group: Get beneficiary Name Service
      this._getBeneficiaryService ="";
      //declaration for getBeneficiaryObject in the group: Get beneficiary Name Service
      this._getBeneficiaryObject ="";
      //declaration for getBeneficiaryOperation in the group: Get beneficiary Name Service
      this._getBeneficiaryOperation ="";
      //declaration for getBeneficiaryCriteria in the group: Get beneficiary Name Service
      this._getBeneficiaryCriteria ="";

      this._IBANSwiftObjectServiceName="";
      this._IBANSwiftObjectName="";
      this._IBANSwiftOperationName="";
      this._IBANSwiftCriteria="";
      this._bankNameKeyIdentifier = "";
      this._swiftCodeKeyIdentifier = "";
      this._valOTTobjectServiceName="";
      this._OTTserviceResponseIdentifier="";
      this._valOTTcriteria="";
      this._OTTobjectServiceName="";
      this._valOTTobjectName="";
      this._OTTobjectName="";
      this._valOTTserviceResponseIdentifier="";
      this._OTTcriteria="";
      this._valOTToperationName="";
      this._OTToperationName="";

      // Global Variables
      this.context = {};
      this.currentBankDate = "";
      this.payeeFlow = "";
      this.transferTypeContext = "";
      this.stack = [];
      this.headerTitleStack = [];
      this.ContactNumberkeypadString = "";
      this.countryDetails = []; 
      this._countryFlagVisibility = "";
      this.fileNamePrefix = 'Attachment';
      this.fileNames = [];
      this.fileContents = [];
      this.fileTypes = [];
      this.existingAttachments = [];
      this.fileSizeError = "";
      this.fileTypeError = "";
      this.fileSize = "";
      this.deletedDocuments = [];
      this.importNativeClasses = null;
      this.vctrl = null;
      this.docs = "";
      this.toAccounts = "";
      this.updateFrequency="";
      this.selectFeesPaidByValue = "";
      this.selectPaymentMethod = "";
      this.sendOnDate = "";
      this.startDate = "";
      this.endDate = "";
      this.highlightedDate = "";
      this.selectedFlowType = "";
      this.disableOptions = "";
      this._countriesList = [];
      this._statesList = [];
      this.serviceCounter = 0;
      this.countriesMasterData = [];
      this.statesMasterData = [];
      this.selectedCountry = "";
      this.selectedState = "";
      this.addressPhoneNumber = "";
      this.isIBANValid = "";
      this.validAddress = "";
      this.mfaOperationName = "";
      this.existToAccounts = "";
      this.flxname = "";
      parent_scope = this;
      parent_scope.contactTypeForContacts = "";
      parent_scope.contactPickerObject = null;								   
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineSetter(this, "loanCriteria", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._loanCriteria = val;
        }
      });
      defineGetter(this, "loanCriteria", function () {
        return this._loanCriteria;
      });

      defineSetter(this, "loanObjectName", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._loanObjectName = val;
        }
      });
      defineGetter(this, "loanObjectName", function () {
        return this._loanObjectName;
      });

      defineSetter(this, "loanObjectServiceName", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._loanObjectServiceName = val;
        }
      });
      defineGetter(this, "loanObjectServiceName", function () {
        return this._loanObjectServiceName;
      });

      defineSetter(this, "loanOperationName", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._loanOperationName = val;
        }
      });
      
      defineGetter(this, "loanOperationName", function () {
        return this._loanOperationName;
      });
      defineSetter(this, "CCcriteria", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._CCcriteria = val;
        }
      });
      defineGetter(this, "CCcriteria", function () {
        return this._CCcriteria;
      });
      
      defineSetter(this, "filterTypeList", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._filterTypeList = val;
        }
      });
      
      defineGetter(this, "filterTypeList", function () {
        return this._filterTypeList;
      });

      defineSetter(this, "CCObjectServiceName", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._CCObjectServiceName = val;
        }
      });
      defineGetter(this, "CCObjectServiceName", function () {
        return this._CCObjectServiceName;
      });

      defineSetter(this, "CCObjectname", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._CCObjectname = val;
        }
      });
      defineGetter(this, "CCObjectname", function () {
        return this._CCObjectname;
      });

      defineSetter(this, "CCoperationname", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._CCoperationname = val;
        }
      });
      defineGetter(this, "CCoperationname", function () {
        return this._CCoperationname;
      });
      defineSetter(this, "CCServiceResponseIdenfier", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._CCServiceResponseIdenfier = val;
        }
      });
      defineGetter(this, "CCServiceResponseIdenfier", function () {
        return this._CCServiceResponseIdenfier;
      });
      defineSetter(this, "valOTTobjectServiceName", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._valOTTobjectServiceName = val;
        }
      });
      defineGetter(this, "valOTTobjectServiceName", function () {
        return this._valOTTobjectServiceName;
      });
      defineSetter(this, "OTTserviceResponseIdentifier", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._OTTserviceResponseIdentifier = val;
        }
      });
      defineGetter(this, "OTTserviceResponseIdentifier", function () {
        return this._OTTserviceResponseIdentifier;
      });
      defineSetter(this, "valOTTcriteria", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._valOTTcriteria = val;
        }
      });
      defineGetter(this, "valOTTcriteria", function () {
        return this._valOTTcriteria;
      });
      defineSetter(this, "sknVerifyBalanceValues", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._sknVerifyBalanceValues = val;
        }
      });
      defineGetter(this, "sknVerifyBalanceValues", function () {
        return this._sknVerifyBalanceValues;
      });
      defineSetter(this, "OTTobjectServiceName", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._OTTobjectServiceName = val;
        }
      });
      defineGetter(this, "OTTobjectServiceName", function () {
        return this._OTTobjectServiceName;
      });
      defineSetter(this, "selectedDateFormat", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._selectedDateFormat = val;
        }
      });
      defineGetter(this, "selectedDateFormat", function () {
        return this._selectedDateFormat;
      });
      defineSetter(this, "daysToRestrict", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._daysToRestrict = val;
        }
      });
      defineGetter(this, "daysToRestrict", function () {
        return this._daysToRestrict;
      });
      defineSetter(this, "dateContinue", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._dateContinue = val;
        }
      });
      defineGetter(this, "dateContinue", function () {
        return this._dateContinue;
      });
      defineSetter(this, "sknhighlightedDate", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._sknhighlightedDate = val;
        }
      });
      defineGetter(this, "sknhighlightedDate", function () {
        return this._sknhighlightedDate;
      });
      defineSetter(this, "valOTTobjectName", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._valOTTobjectName = val;
        }
      });
      defineGetter(this, "valOTTobjectName", function () {
        return this._valOTTobjectName;
      });
      defineSetter(this, "OTTobjectName", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._OTTobjectName = val;
        }
      });
      defineGetter(this, "OTTobjectName", function () {
        return this._OTTobjectName;
      });
      defineSetter(this, "valOTTserviceResponseIdentifier", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._valOTTserviceResponseIdentifier = val;
        }
      });
      defineGetter(this, "valOTTserviceResponseIdentifier", function () {
        return this._valOTTserviceResponseIdentifier;
      });
      defineSetter(this, "OTTcriteria", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._OTTcriteria = val;
        }
      });
      defineGetter(this, "OTTcriteria", function () {
        return this._OTTcriteria;
      });
      defineSetter(this, "valOTToperationName", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._valOTToperationName = val;
        }
      });
      defineGetter(this, "valOTToperationName", function () {
        return this._valOTToperationName;
      });
      defineSetter(this, "OTToperationName", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._OTToperationName = val;
        }
      });
      defineGetter(this, "OTToperationName", function () {
        return this._OTToperationName;
      });
      defineSetter(this, "verifyBeneAddLbl", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._verifyBeneAddLbl = val;
        }
      });
      defineGetter(this, "verifyBeneAddLbl", function () {
        return this._verifyBeneAddLbl;
      });
      defineSetter(this, "verifyBeneMobile", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._verifyBeneMobile = val;
        }
      });
      defineGetter(this, "verifyBeneMobile", function () {
        return this._verifyBeneMobile;
      });
      defineSetter(this, "verifyBeneZipcode", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._verifyBeneZipcode = val;
        }
      });
      defineGetter(this, "verifyBeneZipcode", function () {
        return this._verifyBeneZipcode;
      });
      defineSetter(this, "verifyBeneCountry", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._verifyBeneCountry = val;
        }
      });
      defineGetter(this, "verifyBeneCountry", function () {
        return this._verifyBeneCountry;
      });
      defineSetter(this, "verifyBeneAddLine1", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._verifyBeneAddLine1 = val;
        }
      });
      defineGetter(this, "verifyBeneAddLine1", function () {
        return this._verifyBeneAddLine1;
      });
      defineSetter(this, "verifyBeneCity", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._verifyBeneCity = val;
        }
      });
      defineGetter(this, "verifyBeneCity", function () {
        return this._verifyBeneCity;
      });
      defineSetter(this, "verifyBeneEmail", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._verifyBeneEmail = val;
        }
      });
      defineGetter(this, "verifyBeneEmail", function () {
        return this._verifyBeneEmail;
      });
      defineSetter(this, "verifyBeneState", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._verifyBeneState = val;
        }
      });
      defineGetter(this, "verifyBeneState", function () {
        return this._verifyBeneState;
      });
      defineSetter(this, "verifyBeneAddLine2", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._verifyBeneAddLine2 = val;
        }
      });
      defineGetter(this, "verifyBeneAddLine2", function () {
        return this._verifyBeneAddLine2;
      });
      defineSetter(this, "IBANSwiftObjectServiceName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._IBANSwiftObjectServiceName=val;
        }
      });

      defineGetter(this, "IBANSwiftObjectServiceName", function() {
        return this._IBANSwiftObjectServiceName;
      });

      defineSetter(this, "IBANSwiftObjectName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._IBANSwiftObjectName=val;
        }
      });

      defineGetter(this, "IBANSwiftObjectName", function() {
        return this._IBANSwiftObjectName;
      });

      defineSetter(this, "IBANSwiftOperationName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._IBANSwiftOperationName=val;
        }
      });

      defineGetter(this, "IBANSwiftOperationName", function() {
        return this._IBANSwiftOperationName;
      });

      defineSetter(this, "IBANSwiftCriteria", function(val) {
        if((typeof val=='string') && (val != "")){
          this._IBANSwiftCriteria=val;
        }
      });

      defineGetter(this, "IBANSwiftCriteria", function() {
        return this._IBANSwiftCriteria;
      });

       defineSetter(this, "swiftCodeKeyIdentifier", function(val) {
        if((typeof val=='string') && (val != "")){
          this._swiftCodeKeyIdentifier=val;
        }
      });

      defineGetter(this, "swiftCodeKeyIdentifier", function() {
        return this._swiftCodeKeyIdentifier;
      });
      
      defineSetter(this, "sknCurrencyselection", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknCurrencyselection=val;
        }
      });

      defineGetter(this, "sknCurrencyselection", function() {
        return this._sknCurrencyselection;
      });

       defineSetter(this, "bankNameKeyIdentifier", function(val) {
        if((typeof val=='string') && (val != "")){
          this._bankNameKeyIdentifier=val;
        }
      });

      defineGetter(this, "bankNameKeyIdentifier", function() {
        return this._bankNameKeyIdentifier;
      });

      defineSetter(this, "sendOnDateLabel", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._sendOnDateLabel = val;
        }
      });
      defineGetter(this, "sendOnDateLabel", function () {
        return this._sendOnDateLabel;
      });

      defineSetter(this, "startDateLabel", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._startDateLabel = val;
        }
      });
      defineGetter(this, "startDateLabel", function () {
        return this._startDateLabel;
      });

      defineSetter(this, "endDateLabel", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._endDateLabel = val;
        }
      });
      defineGetter(this, "endDateLabel", function () {
        return this._endDateLabel;
      });
      defineSetter(this, "currentServiceBankDate", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._currentServiceBankDate = val;
        }
      });
      defineGetter(this, "currentServiceBankDate", function () {
        return this._currentServiceBankDate;
      });
      defineSetter(this, "lblReadOnlyField1Label", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._lblReadOnlyField1Label = val;
        }
      });
      defineGetter(this, "lblReadOnlyField1Label", function () {
        return this._lblReadOnlyField1Label;
      });
      defineSetter(this, "lblReadOnlyField1Value", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._lblReadOnlyField1Value = val;
        }
      });
      defineGetter(this, "lblReadOnlyField1Value", function () {
        return this._lblReadOnlyField1Value;
      });
      defineSetter(this, "lblReadOnlyField2Label", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._lblReadOnlyField2Label = val;
        }
      });
      defineGetter(this, "lblReadOnlyField2Label", function () {
        return this._lblReadOnlyField2Label;
      });
      defineSetter(this, "lblReadOnlyField2Value", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._lblReadOnlyField2Value = val;
        }
      });
      defineGetter(this, "lblReadOnlyField2Value", function () {
        return this._lblReadOnlyField2Value;
      });
      defineSetter(this, "lblReadOnlyField3Label", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._lblReadOnlyField3Label = val;
        }
      });
      defineGetter(this, "lblReadOnlyField3Label", function () {
        return this._lblReadOnlyField3Label;
      });
      defineSetter(this, "lblReadOnlyField3Value", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._lblReadOnlyField3Value = val;
        }
      });
      defineGetter(this, "lblReadOnlyField3Value", function () {
        return this._lblReadOnlyField3Value;
      });
      defineSetter(this, "lblReadOnlyField4Label", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._lblReadOnlyField4Label = val;
        }
      });
      defineGetter(this, "lblReadOnlyField4Label", function () {
        return this._lblReadOnlyField4Label;
      });
      defineSetter(this, "lblReadOnlyField4Value", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._lblReadOnlyField4Value = val;
        }
      });
      defineGetter(this, "lblReadOnlyField4Value", function () {
        return this._lblReadOnlyField4Value;
      });
      defineSetter(this, "lblReadOnlyField5Label", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._lblReadOnlyField5Label = val;
        }
      });
      defineGetter(this, "lblReadOnlyField5Label", function () {
        return this._lblReadOnlyField5Label;
      });
      defineSetter(this, "lblReadOnlyField5Value", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._lblReadOnlyField5Value = val;
        }
      });
      defineGetter(this, "lblReadOnlyField5Value", function () {
        return this._lblReadOnlyField5Value;
      });
      defineSetter(this, "lblReadOnlyField6Label", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._lblReadOnlyField6Label = val;
        }
      });
      defineGetter(this, "lblReadOnlyField6Label", function () {
        return this._lblReadOnlyField6Label;
      });
      defineSetter(this, "lblReadOnlyField6Value", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._lblReadOnlyField6Value = val;
        }
      });
      defineGetter(this, "lblReadOnlyField6Value", function () {
        return this._lblReadOnlyField6Value;
      });
      defineSetter(this, "lblReadOnlyField7Label", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._lblReadOnlyField7Label = val;
        }
      });
      defineGetter(this, "lblReadOnlyField7Label", function () {
        return this._lblReadOnlyField7Label;
      });
      defineSetter(this, "lblReadOnlyField7Value", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._lblReadOnlyField7Value = val;
        }
      });
      defineGetter(this, "lblReadOnlyField7Value", function () {
        return this._lblReadOnlyField7Value;
      });
      defineSetter(this, "lblReadOnlyField8Label", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._lblReadOnlyField8Label = val;
        }
      });
      defineGetter(this, "lblReadOnlyField8Label", function () {
        return this._lblReadOnlyField8Label;
      });
      defineSetter(this, "lblReadOnlyField8Value", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._lblReadOnlyField8Value = val;
        }
      });
      defineGetter(this, "lblReadOnlyField8Value", function () {
        return this._lblReadOnlyField8Value;
      });
      //setter method for Object Name in the group:From Account List Service
      defineSetter(this, "fromAccountObjectName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fromAccountObjectName=val;
        }
      });

      //getter method for Object Name in the group:From Account List Service
      defineGetter(this, "fromAccountObjectName", function() {
        return this._fromAccountObjectName;
      });

      //setter method for Title in the group:From Account
      defineSetter(this, "fromAccountsTitle", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fromAccountsTitle=val;
        }
      });

      //getter method for Title in the group:From Account
      defineGetter(this, "fromAccountsTitle", function() {
        return this._fromAccountsTitle;
      });
	  
		//setter method for Title in the group:defaultFrequency
      defineSetter(this, "defaultFrequency", function(val) {
        if((typeof val=='string') && (val != "")){
          this._defaultFrequency=val;
        }
      });

      //getter method for Title in the group:defaultFrequency
      defineGetter(this, "defaultFrequency", function() {
        return this._defaultFrequency;
      });
	  
      //setter method for Header Label in the group:Skins
      defineSetter(this, "sknHeaderLbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknHeaderLbl=val;
        }
      });
      //getter method for sknVerifyFieldValue
      defineGetter(this, "sknVerifyFieldLabel", function() {
        return this._sknVerifyFieldLabel;
      });

      //setter method for sknVerifyFieldValue
      defineSetter(this, "sknVerifyFieldLabel", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknVerifyFieldLabel=val;
        }
      });
      //getter method for sknVerifyFieldValue
      defineGetter(this, "sknVerifyFieldValue", function() {
        return this._sknVerifyFieldValue;
      });

      //setter method for sknVerifyFieldValue
      defineSetter(this, "sknVerifyFieldValue", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknVerifyFieldValue=val;
        }
      });
      
      //getter method for ssknVerifyChargesValue
      defineGetter(this, "sknVerifyChargesValue", function() {
        return this._sknVerifyChargesValue;
      });

      //setter method for sknVerifyChargesValue
      defineSetter(this, "sknVerifyChargesValue", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknVerifyChargesValue=val;
        }
      });

      //getter method for Header Label in the group:Skins
      defineGetter(this, "sknHeaderLbl", function() {
        return this._sknHeaderLbl;
      });

      //setter method for Field From Label in the group:Transfer Amount
      defineSetter(this, "fieldFromLblAmtScrn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fieldFromLblAmtScrn=val;
        }
      });

      //getter method for Field From Label in the group:Transfer Amount
      defineGetter(this, "fieldFromLblAmtScrn", function() {
        return this._fieldFromLblAmtScrn;
      });

      //setter method for Title in the group:To Account
      defineSetter(this, "toAccountsTitle", function(val) {
        if((typeof val=='string') && (val != "")){
          this._toAccountsTitle=val;
        }
      });

      //getter method for Title in the group:To Account
      defineGetter(this, "toAccountsTitle", function() {
        return this._toAccountsTitle;
      });

      //setter method for Currency Title in the group:Currency
      defineSetter(this, "currencyPageTitle", function(val) {
        if((typeof val=='string') && (val != "")){
          this._currencyPageTitle=val;
        }
      });

      //getter method for Currency Title in the group:Currency
      defineGetter(this, "currencyPageTitle", function() {
        return this._currencyPageTitle;
      });

      //setter method for Title in the group:Payment Method
      defineSetter(this, "paymentMethodTitle", function(val) {
        if((typeof val=='string') && (val != "")){
          this._paymentMethodTitle=val;
        }
      });

      //getter method for Title in the group:Payment Method
      defineGetter(this, "paymentMethodTitle", function() {
        return this._paymentMethodTitle;
      });

      //setter method for Title in the group:BIC/SWIFT Code
      defineSetter(this, "titleBICSwiftCode", function(val) {
        if((typeof val=='string') && (val != "")){
          this._titleBICSwiftCode=val;
        }
      });

      //getter method for Title in the group:BIC/SWIFT Code
      defineGetter(this, "titleBICSwiftCode", function() {
        return this._titleBICSwiftCode;
      });

      //setter method for Title in the group:SWIFT BIC Search
      defineSetter(this, "swiftLookupHeader", function(val) {
        if((typeof val=='string') && (val != "")){
          this._swiftLookupHeader=val;
        }
      });

      //getter method for Title in the group:SWIFT BIC Search
      defineGetter(this, "swiftLookupHeader", function() {
        return this._swiftLookupHeader;
      });

      //setter method for Object Name in the group:SWIFT search Service
      defineSetter(this, "swiftSrchObjectName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._swiftSrchObjectName=val;
        }
      });
      
       defineSetter(this, "transferTypePermission", function (val) {
        if ((typeof val === 'string') && (val !== "")) {
          this._transferTypePermission = val;
        }
      });
      defineGetter(this, "transferTypePermission", function () {
        return this._transferTypePermission;
      });

      //getter method for transObjectName
      defineGetter(this, "transObjectName", function() {
        return this._transObjectName;
      });

      //setter method for transObjectName
      defineSetter(this, "transObjectName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._transObjectName=val;
        }
      });
      
      //getter method for transServiceResponseIdentifier
      defineGetter(this, "transServiceResponseIdentifier", function() {
        return this._transServiceResponseIdentifier;
      });

      //setter method for transServiceResponseIdentifier
      defineSetter(this, "transServiceResponseIdentifier", function(val) {
        if((typeof val=='string') && (val != "")){
          this._transServiceResponseIdentifier=val;
        }
      });
      
      //getter method for transCriteria
      defineGetter(this, "transCriteria", function() {
        return this._transCriteria;
      });

      //setter method for transCriteria
      defineSetter(this, "transCriteria", function(val) {
        if((typeof val=='string') && (val != "")){
          this._transCriteria=val;
        }
      });
      
      //getter method for transOperationName
      defineGetter(this, "transOperationName", function() {
        return this._transOperationName;
      });

      //setter method for transOperationName
      defineSetter(this, "transOperationName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._transOperationName=val;
        }
      });
      
      //getter method for transOperationName
      defineGetter(this, "transObjectServiceName", function() {
        return this._transObjectServiceName;
      });

      //setter method for transOperationName
      defineSetter(this, "transObjectServiceName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._transObjectServiceName=val;
        }
      });
      
      //getter method for enableBankDate
      defineGetter(this, "enableBankDate", function() {
        return this._enableBankDate;
      });

      //setter method for enableBankDate
      defineSetter(this, "enableBankDate", function(val) {
        if((typeof val=='boolean') && (val != "")){
          this._enableBankDate=val;
        }
      });
      
      //getter method for Object Name in the group:SWIFT search Service
      defineGetter(this, "swiftSrchObjectName", function() {
        return this._swiftSrchObjectName;
      });

      //setter method for Title Label in the group:Required Code
      defineSetter(this, "titleRequiredCode", function(val) {
        if((typeof val=='string') && (val != "")){
          this._titleRequiredCode=val;
        }
      });

      //getter method for Title Label in the group:Required Code
      defineGetter(this, "titleRequiredCode", function() {
        return this._titleRequiredCode;
      });
      
      //setter method for Title Label in the group:Required Code
      defineSetter(this, "verifyNotesValue", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyNotesValue=val;
        }
      });

      //getter method for Title Label in the group:Required Code
      defineGetter(this, "verifyNotesValue", function() {
        return this._verifyNotesValue;
      });
      
      //setter method for Title Label in the group:Required Code
      defineSetter(this, "verifyNotesLabel", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyNotesLabel=val;
        }
      });

      //getter method for Title Label in the group:Required Code
      defineGetter(this, "verifyNotesLabel", function() {
        return this._verifyNotesLabel;
      });

      //setter method for Object Service Name in the group:From Account  Service
      defineSetter(this, "fromObjectServiceName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fromObjectServiceName=val;
        }
      });

      //getter method for Object Service Name in the group:From Account  Service
      defineGetter(this, "fromObjectServiceName", function() {
        return this._fromObjectServiceName;
      });

      //setter method for Enable Button Skin in the group:Skins
      defineSetter(this, "sknEnableContexualBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknEnableContexualBtn=val;
        }
      });
      //getter method for Enable Button Skin in the group:Skins
      defineGetter(this, "sknEnableContexualBtn", function() {
        return this._sknEnableContexualBtn;
      });

      //setter method for Object Service Name in the group:From Account List Service
      defineSetter(this, "fromAccountObjectServiceName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fromAccountObjectServiceName=val;
        }
      });

      //getter method for Object Service Name in the group:From Account List Service
      defineGetter(this, "fromAccountObjectServiceName", function() {
        return this._fromAccountObjectServiceName;
      });

      //setter method for Title Label in the group:General
      defineSetter(this, "titleCalenderSendOn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._titleCalenderSendOn=val;
        }
      });

      //getter method for Title Label in the group:General
      defineGetter(this, "titleCalenderSendOn", function() {
        return this._titleCalenderSendOn;
      });

      //setter method for Verify Section Title in the group:Verify Details
      defineSetter(this, "verifySectionTitle", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifySectionTitle=val;
        }
      });

      //getter method for Verify Section Title in the group:Verify Details
      defineGetter(this, "verifySectionTitle", function() {
        return this._verifySectionTitle;
      });

      //setter method for Title in the group:Fees Paid By
      defineSetter(this, "feesPaidTitle", function(val) {
        if((typeof val=='string') && (val != "")){
          this._feesPaidTitle=val;
        }
      });

      //getter method for Title in the group:Fees Paid By
      defineGetter(this, "feesPaidTitle", function() {
        return this._feesPaidTitle;
      });

      //setter method for Title Label in the group:Add Address Fields
      defineSetter(this, "titleAddAddress", function(val) {
        if((typeof val=='string') && (val != "")){
          this._titleAddAddress=val;
        }
      });

      //getter method for Title Label in the group:Add Address Fields
      defineGetter(this, "titleAddAddress", function() {
        return this._titleAddAddress;
      });

      //setter method for Object Service Name in the group:To Account List Service
      defineSetter(this, "toAccObjServiceName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._toAccObjServiceName=val;
        }
      });

      //getter method for Object Service Name in the group:To Account List Service
      defineGetter(this, "toAccObjServiceName", function() {
        return this._toAccObjServiceName;
      });

      //setter method for Cancel button in the group:Common Properties
      defineSetter(this, "cancelButton", function(val) {
        if((typeof val=='string') && (val != "")){
          this._cancelButton=val;
        }
      });

      //getter method for Cancel button in the group:Common Properties
      defineGetter(this, "cancelButton", function() {
        return this._cancelButton;
      });

      //setter method for Object Name in the group:Search Service
      defineSetter(this, "searchObjectName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._searchObjectName=val;
        }
      });

      //getter method for Object Name in the group:Search Service
      defineGetter(this, "searchObjectName", function() {
        return this._searchObjectName;
      });

      //setter method for Field Label 1 in the group:Amount
      defineSetter(this, "amountLable1", function(val) {
        if((typeof val=='string') && (val != "")){
          this._amountLable1=val;
        }
      });

      //getter method for Field Label 1 in the group:Amount
      defineGetter(this, "amountLable1", function() {
        return this._amountLable1;
      });

      //setter method for Flow Type in the group:General
      defineSetter(this, "flowType", function(val) {
        if((typeof val=='string') && (val != "")){
          this._flowType=val;
        }
      });

      //getter method for Flow Type in the group:General
      defineGetter(this, "flowType", function() {
        return this._flowType;
      });

      //setter method for Frequency Page Title in the group:Frequency
      defineSetter(this, "frequencyPageTitle", function(val) {
        if((typeof val=='string') && (val != "")){
          this._frequencyPageTitle=val;
        }
      });

      //getter method for Frequency Page Title in the group:Frequency
      defineGetter(this, "frequencyPageTitle", function() {
        return this._frequencyPageTitle;
      });
	  
	   //setter method for  Title in the group:Fees Paid By
      defineSetter(this, "serviceDefaultFeesPaid ", function(val) {
        if((typeof val=='string') && (val != "")){
          this._serviceDefaultFeesPaid =val;
        }
      });

      //getter method for  Title in the group:Fees Paid By
      defineGetter(this, "serviceDefaultFeesPaid ", function() {
        return this._serviceDefaultFeesPaid ;
      });
      
       //getter method for  Title in the group:Fees Paid By
      defineGetter(this, "serviceFeesPaidValues", function() {
        return this._serviceFeesPaidValues;
      });
      
      //setter method for  Title in the group:Fees Paid By
      defineSetter(this, "serviceFeesPaidValues", function(val) {
        if((typeof val=='string') && (val != "")){
          this._serviceFeesPaidValues=val;
        }
      });

      //setter method for  Title in the group:Fees Paid By
      defineSetter(this, "feesPaidTitle", function(val) {
        if((typeof val=='string') && (val != "")){
          this._feesPaidTitle=val;
        }
      });

      //getter method for  Title in the group:Fees Paid By
      defineGetter(this, "feesPaidTitle", function() {
        return this._feesPaidTitle;
      });
	  
	   //setter method for  Title in the group:Fees Paid By
      defineSetter(this, "serviceDefaultPaymentMethod", function(val) {
        if((typeof val=='string') && (val != "")){
          this._serviceDefaultPaymentMethod =val;
        }
      });

      //getter method for  Title in the group:Fees Paid By
      defineGetter(this, "serviceDefaultPaymentMethod", function() {
        return this._serviceDefaultPaymentMethod ;
      });
      
       //setter method for  Title in the group:Fees Paid By
      defineSetter(this, "servicePaymentMethodValues", function(val) {
        if((typeof val=='string') && (val != "")){
          this._servicePaymentMethodValues =val;
        }
      });

      //getter method for  Title in the group:Fees Paid By
      defineGetter(this, "servicePaymentMethodValues", function() {
        return this._servicePaymentMethodValues ;
      });
      
      
      //setter method for  DateServiceResponseIdentifier
      defineSetter(this, "DateServiceResponseIdentifier", function(val) {
        if((typeof val=='string') && (val != "")){
          this._DateServiceResponseIdentifier=val;
        }
      });

      //getter method for  Title in the group:Fees Paid By
      defineGetter(this, "DateServiceResponseIdentifier", function() {
        return this._DateServiceResponseIdentifier;
      });
      
      //setter method for  Title in the group:Fees Paid By
      defineSetter(this, "DateCriteria", function(val) {
        if((typeof val=='string') && (val != "")){
          this._DateCriteria=val;
        }
      });

      //getter method for  Title in the group:Fees Paid By
      defineGetter(this, "DateCriteria", function() {
        return this._DateCriteria;
      });
      
      //setter method for  Title in the group:Fees Paid By
      defineSetter(this, "DateOperationName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._DateOperationName=val;
        }
      });

      //getter method for  Title in the group:Fees Paid By
      defineGetter(this, "DateOperationName", function() {
        return this._DateOperationName;
      });
      
      //setter method for  Title in the group:Fees Paid By
      defineSetter(this, "DateObjectName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._DateObjectName=val;
        }
      });

      //getter method for  Title in the group:Fees Paid By
      defineGetter(this, "DateObjectName", function() {
        return this._DateObjectName;
      });
      
      //setter method for  Title in the group:Fees Paid By
      defineSetter(this, "DateObjectServiceName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._DateObjectServiceName=val;
        }
      });

      //getter method for  Title in the group:Fees Paid By
      defineGetter(this, "DateObjectServiceName", function() {
        return this._DateObjectServiceName;
      });
      
      //setter method for  Title in the group:Fees Paid By
      defineSetter(this, "ValServiceResponseIdentifier", function(val) {
        if((typeof val=='string') && (val != "")){
          this._ValServiceResponseIdentifier=val;
        }
      });

      //getter method for  Title in the group:Fees Paid By
      defineGetter(this, "ValServiceResponseIdentifier", function() {
        return this._ValServiceResponseIdentifier;
      });
      
      //setter method for  Title in the group:Fees Paid By
      defineSetter(this, "ValCriteria", function(val) {
        if((typeof val=='string') && (val != "")){
          this._ValCriteria=val;
        }
      });

      //getter method for  Title in the group:Fees Paid By
      defineGetter(this, "ValCriteria", function() {
        return this._ValCriteria;
      });
      
      //setter method for  Title in the group:Fees Paid By
      defineSetter(this, "ValOperationName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._ValOperationName=val;
        }
      });

      //getter method for  Title in the group:Fees Paid By
      defineGetter(this, "ValOperationName", function() {
        return this._ValOperationName;
      });
      
      //setter method for  Title in the group:Fees Paid By
      defineSetter(this, "ValObjName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._ValObjName=val;
        }
      });

      //getter method for  Title in the group:Fees Paid By
      defineGetter(this, "ValObjName", function() {
        return this._ValObjName;
      });
      
      //setter method for  Title in the group:Fees Paid By
      defineSetter(this, "ValObjectServiceName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._ValObjectServiceName=val;
        }
      });

      //getter method for  Title in the group:Fees Paid By
      defineGetter(this, "ValObjectServiceName", function() {
        return this._ValObjectServiceName;
      });
      
      //setter method for  Title in the group:Fees Paid By
      defineSetter(this, "TCserviceResponseIdentifier", function(val) {
        if((typeof val=='string') && (val != "")){
          this._TCserviceResponseIdentifier=val;
        }
      });

      //getter method for  Title in the group:Fees Paid By
      defineGetter(this, "TCserviceResponseIdentifier", function() {
        return this._TCserviceResponseIdentifier;
      });
      
      //setter method for  Title in the group:Fees Paid By
      defineSetter(this, "TCoperationName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._TCoperationName=val;
        }
      });

      //getter method for  Title in the group:Fees Paid By
      defineGetter(this, "TCoperationName", function() {
        return this._TCoperationName;
      });
      
      //setter method for  Title in the group:Fees Paid By
      defineSetter(this, "TCobjectName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._TCobjectName=val;
        }
      });

      //getter method for  Title in the group:Fees Paid By
      defineGetter(this, "TCobjectName", function() {
        return this._TCobjectName;
      });
      
      //setter method for  Title in the group:Fees Paid By
      defineSetter(this, "TCobjectServiceName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._TCobjectServiceName=val;
        }
      });

      //getter method for  Title in the group:Fees Paid By
      defineGetter(this, "TCobjectServiceName", function() {
        return this._TCobjectServiceName;
      });
      
      //setter method for  Title in the group:Fees Paid By
      defineSetter(this, "TCcriteria", function(val) {
        if((typeof val=='string') && (val != "")){
          this._TCcriteria=val;
        }
      });

      //getter method for  Title in the group:Fees Paid By
      defineGetter(this, "TCcriteria", function() {
        return this._TCcriteria;
      });
      
     
      //setter method for Title Label in the group:FX Rate Reference
      defineSetter(this, "titleReferenceLbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._titleReferenceLbl=val;
        }
      });

      //getter method for Title Label in the group:FX Rate Reference
      defineGetter(this, "titleReferenceLbl", function() {
        return this._titleReferenceLbl;
      });

      //setter method for Title  Label in the group:Intermediary BIC
      defineSetter(this, "titleIntermediaryBIC", function(val) {
        if((typeof val=='string') && (val != "")){
          this._titleIntermediaryBIC=val;
        }
      });

      //getter method for Title  Label in the group:Intermediary BIC
      defineGetter(this, "titleIntermediaryBIC", function() {
        return this._titleIntermediaryBIC;
      });

      //setter method for Title  Label in the group:E2E
      defineSetter(this, "titleE2ERef", function(val) {
        if((typeof val=='string') && (val != "")){
          this._titleE2ERef=val;
        }
      });

      //getter method for Title  Label in the group:E2E
      defineGetter(this, "titleE2ERef", function() {
        return this._titleE2ERef;
      });

      //setter method for Title  Label in the group:Recipient's Name
      defineSetter(this, "titleRecipientName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._titleRecipientName=val;
        }
      });

      //getter method for Title  Label in the group:Recipient's Name
      defineGetter(this, "titleRecipientName", function() {
        return this._titleRecipientName;
      });

      //setter method for Title Label in the group:Account Number
      defineSetter(this, "titleAccountNumber", function(val) {
        if((typeof val=='string') && (val != "")){
          this._titleAccountNumber=val;
        }
      });

      //getter method for Title Label in the group:Account Number
      defineGetter(this, "titleAccountNumber", function() {
        return this._titleAccountNumber;
      });

      //setter method for Title Label in the group:Payee Nickname
      defineSetter(this, "titlePayeeNickname", function(val) {
        if((typeof val=='string') && (val != "")){
          this._titlePayeeNickname=val;
        }
      });

      //getter method for Title Label in the group:Payee Nickname
      defineGetter(this, "titlePayeeNickname", function() {
        return this._titlePayeeNickname;
      });

      //setter method for Title Label in the group:Payee Success Screen
      defineSetter(this, "titlePayeeNicknameSuccess", function(val) {
        if((typeof val=='string') && (val != "")){
          this._titlePayeeNicknameSuccess=val;
        }
      });

      //getter method for Title Label in the group:Payee Success Screen
      defineGetter(this, "titlePayeeNicknameSuccess", function() {
        return this._titlePayeeNicknameSuccess;
      });

      //setter method for  Title in the group:Contact Type
      defineSetter(this, "contactTypeTitle", function(val) {
        if((typeof val=='string') && (val != "")){
          this._contactTypeTitle=val;
        }
      });

      //getter method for  Title in the group:Contact Type
      defineGetter(this, "contactTypeTitle", function() {
        return this._contactTypeTitle;
      });

      //setter method for Title in the group:Country Code
      defineSetter(this, "countryCodeTitle", function(val) {
        if((typeof val=='string') && (val != "")){
          this._countryCodeTitle=val;
        }
      });

      //getter method for Title in the group:Country Code
      defineGetter(this, "countryCodeTitle", function() {
        return this._countryCodeTitle;
      });

      //setter method for Country Flag Properties in the group:Country Service
      defineSetter(this, "countryFlagVisibility", function(val) {
        if((typeof val=='string') && (val != "")){
          this._countryFlagVisibility=val;
        }
      });

      //getter method for Country Flag Properties in the group:Country Code
      defineGetter(this, "countryFlagVisibility", function() {
        return this._countryFlagVisibility;
      });

      //setter method for Active Icon in the group:Icons
      defineSetter(this, "iconActive", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconActive=val;
        }
      });

      //getter method for Active Icon in the group:Icons
      defineGetter(this, "iconActive", function() {
        return this._iconActive;
      });

      //setter method for Supported File Format in the group:Supporting Document
      defineSetter(this, "supportedFileFormat", function(val) {
        if((typeof val=='string') && (val != "")){
          this._supportedFileFormat=val;
        }
      });

      //getter method for Supported File Format in the group:Supporting Document
      defineGetter(this, "supportedFileFormat", function() {
        return this._supportedFileFormat;
      });

      //setter method for iphone Extension in the group:Supporting Document
      defineSetter(this, "iphoneFileExtension", function(val) {
        if((typeof val==='string') && (val !== "")){
          this._iphoneFileExtension=val;
        }
      });

      //getter method for iphone Extension in the group:Supporting Document
      defineGetter(this, "iphoneFileExtension", function() {
        return this._iphoneFileExtension;
      });

      //setter method for Transfer type in the group:Context setting
      defineSetter(this, "transferType", function(val) {
        if((typeof val=='string') && (val != "")){
          this._transferType=val;
        }
      });

      //getter method for Transfer type in the group:Context setting
      defineGetter(this, "transferType", function() {
        return this._transferType;
      });

      //setter method for Data Validation Config in the group:Data Validation
      defineSetter(this, "dvfConfig", function(val) {
        if((typeof val=='string') && (val != "")){
          this._dvfConfig=val;
        }
      });

      //getter method for Data Validation Config in the group:Data Validation
      defineGetter(this, "dvfConfig", function() {
        return this._dvfConfig;
      });

      //setter method for Operation Name in the group:From Account List Service
      defineSetter(this, "fromAccountOperationName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fromAccountOperationName=val;
        }
      });

      //getter method for Operation Name in the group:From Account List Service
      defineGetter(this, "fromAccountOperationName", function() {
        return this._fromAccountOperationName;
      });

      //setter method for Description Label in the group:From Account
      defineSetter(this, "fromdescriptionLabel", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fromdescriptionLabel=val;
        }
      });

      //getter method for Description Label in the group:From Account
      defineGetter(this, "fromdescriptionLabel", function() {
        return this._fromdescriptionLabel;
      });

      //setter method for Field From Value in the group:Transfer Amount
      defineSetter(this, "fieldFromValueAmtScrn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fieldFromValueAmtScrn=val;
        }
      });

      //getter method for Field From Value in the group:Transfer Amount
      defineGetter(this, "fieldFromValueAmtScrn", function() {
        return this._fieldFromValueAmtScrn;
      });

      //setter method for Description Label in the group:To Account
      defineSetter(this, "todescriptionLabel", function(val) {
        if((typeof val=='string') && (val != "")){
          this._todescriptionLabel=val;
        }
      });

      //getter method for Description Label in the group:To Account
      defineGetter(this, "todescriptionLabel", function() {
        return this._todescriptionLabel;
      });

      //setter method for Transfer Currency Values in the group:Currency
      defineSetter(this, "dropdownTransferCurrency", function(val) {
        if((typeof val=='string') && (val != "")){
          this._dropdownTransferCurrency=val;
        }
      });

      //getter method for Transfer Currency Values in the group:Currency
      defineGetter(this, "dropdownTransferCurrency", function() {
        return this._dropdownTransferCurrency;
      });

      //setter method for Text Input Label in the group:Payment Method
      defineSetter(this, "lblPaymentMethod", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblPaymentMethod=val;
        }
      });

      //getter method for Text Input Label in the group:Payment Method
      defineGetter(this, "lblPaymentMethod", function() {
        return this._lblPaymentMethod;
      });

      //setter method for Text Label in the group:BIC/SWIFT Code
      defineSetter(this, "lblBICSwiftCode", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblBICSwiftCode=val;
        }
      });

      //getter method for Text Label in the group:BIC/SWIFT Code
      defineGetter(this, "lblBICSwiftCode", function() {
        return this._lblBICSwiftCode;
      });

      //setter method for Description in the group:SWIFT BIC Search
      defineSetter(this, "swiftLookupDescription", function(val) {
        if((typeof val=='string') && (val != "")){
          this._swiftLookupDescription=val;
        }
      });

      //getter method for Description in the group:SWIFT BIC Search
      defineGetter(this, "swiftLookupDescription", function() {
        return this._swiftLookupDescription;
      });

      //setter method for Operation Name in the group:SWIFT search Service
      defineSetter(this, "swiftSrchOperationName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._swiftSrchOperationName=val;
        }
      });

      //getter method for Operation Name in the group:SWIFT search Service
      defineGetter(this, "swiftSrchOperationName", function() {
        return this._swiftSrchOperationName;
      });

      //setter method for Text Label in the group:Required Code
      defineSetter(this, "requiredCodeLbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._requiredCodeLbl=val;
        }
      });

      //getter method for Text Label in the group:Required Code
      defineGetter(this, "requiredCodeLbl", function() {
        return this._requiredCodeLbl;
      });

      //setter method for Text Label in the group:General
      defineSetter(this, "lblCalenderDate", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblCalenderDate=val;
        }
      });

      //getter method for Text Label in the group:General
      defineGetter(this, "lblCalenderDate", function() {
        return this._lblCalenderDate;
      });

      //setter method for Field From Label in the group:Verify Details
      defineSetter(this, "fieldFromLbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fieldFromLbl=val;
        }
      });

      //getter method for Field From Label in the group:Verify Details
      defineGetter(this, "fieldFromLbl", function() {
        return this._fieldFromLbl;
      });

      //setter method for Text Input Label in the group:Fees Paid By
      defineSetter(this, "lblFeesPaidBy", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblFeesPaidBy=val;
        }
      });

      //getter method for Text Input Label in the group:Fees Paid By
      defineGetter(this, "lblFeesPaidBy", function() {
        return this._lblFeesPaidBy;
      });

      //setter method for Text Label in the group:Add Address Fields
      defineSetter(this, "lblAddAddress", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblAddAddress=val;
        }
      });

      //getter method for Text Label in the group:Add Address Fields
      defineGetter(this, "lblAddAddress", function() {
        return this._lblAddAddress;
      });

      //setter method for Object Name in the group:To Account List Service
      defineSetter(this, "toAccObjectName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._toAccObjectName=val;
        }
      });

      //getter method for Object Name in the group:To Account List Service
      defineGetter(this, "toAccObjectName", function() {
        return this._toAccObjectName;
      });

      //setter method for Header Background in the group:Skins
      defineSetter(this, "sknHeaderBg", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknHeaderBg=val;
        }
      });

      //getter method for Header Background in the group:Skins
      defineGetter(this, "sknHeaderBg", function() {
        return this._sknHeaderBg;
      });

      //setter method for Select Option Properties in the group:Skins
      defineSetter(this, "sknSelectOption", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknSelectOption=val;
        }
      });

      //getter method for Select option Properties in the group:Skins
      defineGetter(this, "sknSelectOption", function() {
        return this._sknSelectOption;
      });

      //setter method for cameraWidget Properties in the group:Skins
      defineSetter(this, "sknCameraWidget", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknCameraWidget=val;
        }
      });

      //getter method for cameraWidget Properties in the group:Skins
      defineGetter(this, "sknCameraWidget", function() {
        return this._sknCameraWidget;
      });

      //setter method for Supporting Documents Action Buttons in the group:Skins
      defineSetter(this, "sknSupportingActionBtns", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknSupportingActionBtns=val;
        }
      });

      //getter method for Supporting Documents Action Buttons Properties in the group:Skins
      defineGetter(this, "sknSupportingActionBtns", function() {
        return this._sknSupportingActionBtns;
      });

      //setter method for Remove Supporting Documents Title in the group:Skins
      defineSetter(this, "sknRemoveSupportingDocsTitle", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknRemoveSupportingDocsTitle=val;
        }
      });

      //getter method for Remove Supporting Documents Title Properties in the group:Skins
      defineGetter(this, "removeSupportingDocsTitle", function() {
        return this._removeSupportingDocsTitle;
      });

      //setter method for Pop-up CloseButton Properties in the group:Skins
      defineSetter(this, "sknPopupCloseButton", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknPopupCloseButton=val;
        }
      });

      //getter method for Pop-up CloseButton Properties in the group:Skins
      defineGetter(this, "sknPopupCloseButton", function() {
        return this._sknPopupCloseButton;
      });

      //setter method for Popup CancelButton Properties in the group:Skins
      defineSetter(this, "sknPopupCancelButton", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknPopupCancelButton=val;
        }
      });

      //getter method for Popup CancelButton Properties in the group:Skins
      defineGetter(this, "sknPopupCancelButton", function() {
        return this._sknPopupCancelButton;
      });

       //setter method for FlexNormal in the group:Skins
      defineSetter(this, "sknFlexNormal", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknFlexNormal=val;
        }
      });

      //getter method for FlexNormal in the group:Skins
      defineGetter(this, "sknFlexNormal", function() {
        return this._sknFlexNormal;
      });

      //setter method for FlexNormal in the group:Skins
      defineSetter(this, "sknHighlightedFlex", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknHighlightedFlex=val;
        }
      });

      //getter method for FlexNormal in the group:Skins
      defineGetter(this, "sknHighlightedFlex", function() {
        return this._sknHighlightedFlex;
      });

      //setter method for Supporting Header Text Buttons in the group:Skins
      defineSetter(this, "sknSupportingTextHeader", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknSupportingTextHeader=val;
        }
      });

      //getter method for Supporting Header Text Properties in the group:Skins
      defineGetter(this, "sknSupportingTextHeader", function() {
        return this._sknSupportingTextHeader;
      });
 
      //setter method for Search properties in the group:Common Properties
      defineSetter(this, "searchProperties", function(val) {
        if((typeof val=='string') && (val != "")){
          this._searchProperties=val;
        }
      });

      //getter method for Search properties in the group:Common Properties
      defineGetter(this, "searchProperties", function() {
        return this._searchProperties;
      });

      //setter method for Operation Name in the group:Search Service
      defineSetter(this, "searchOperationName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._searchOperationName=val;
        }
      });

      //getter method for Operation Name in the group:Search Service
      defineGetter(this, "searchOperationName", function() {
        return this._searchOperationName;
      });

      //setter method for Field Value 1 in the group:Amount
      defineSetter(this, "amountValue1", function(val) {
        if((typeof val=='string') && (val != "")){
          this._amountValue1=val;
        }
      });

      //getter method for Field Value 1 in the group:Amount
      defineGetter(this, "amountValue1", function() {
        return this._amountValue1;
      });

      //setter method for Transfer Type in the group:General
      defineSetter(this, "transferTypes", function(val) {
        if((typeof val=='string') && (val != "")){
          this._transferTypes=val;
        }
      });

      //getter method for Transfer Type in the group:General
      defineGetter(this, "transferTypes", function() {
        return this._transferTypes;
      });

      //setter method for Transfer Frequency Dropdown Values in the group:Frequency
      defineSetter(this, "dropdownFrequency", function(val) {
        if((typeof val=='string') && (val != "")){
          this._dropdownFrequency=val;
        }
      });

      //getter method for Transfer Frequency Dropdown Values in the group:Frequency
      defineGetter(this, "dropdownFrequency", function() {
        return this._dropdownFrequency;
      });

      //setter method for Text Input Label in the group:Fees Paid By
      defineSetter(this, "lblFeesPaidBy", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblFeesPaidBy=val;
        }
      });

      //getter method for Text Input Label in the group:Fees Paid By
      defineGetter(this, "lblFeesPaidBy", function() {
        return this._lblFeesPaidBy;
      });

      //setter method for Text  Label in the group:FX Rate Reference
      defineSetter(this, "lblfxRateReference", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblfxRateReference=val;
        }
      });

      //getter method for Text  Label in the group:FX Rate Reference
      defineGetter(this, "lblfxRateReference", function() {
        return this._lblfxRateReference;
      });

      //setter method for Text Input Label in the group:Intermediary BIC
      defineSetter(this, "lblIntermediaryBIC", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblIntermediaryBIC=val;
        }
      });

      //getter method for Text Input Label in the group:Intermediary BIC
      defineGetter(this, "lblIntermediaryBIC", function() {
        return this._lblIntermediaryBIC;
      });

      //setter method for Text  Label in the group:E2E
      defineSetter(this, "lblE2ERef", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblE2ERef=val;
        }
      });

      //getter method for Text  Label in the group:E2E
      defineGetter(this, "lblE2ERef", function() {
        return this._lblE2ERef;
      });

      //setter method for Text Label in the group:Recipient's Name
      defineSetter(this, "lblRecipientName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblRecipientName=val;
        }
      });

      //getter method for Text Label in the group:Recipient's Name
      defineGetter(this, "lblRecipientName", function() {
        return this._lblRecipientName;
      });

      //setter method for Text Label in the group:Account Number
      defineSetter(this, "lblAccountNumber", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblAccountNumber=val;
        }
      });

      //getter method for Text Label in the group:Account Number
      defineGetter(this, "lblAccountNumber", function() {
        return this._lblAccountNumber;
      });

      //setter method for AccountNumber Exist Error Msg in the group:Account Number
      defineSetter(this, "accountNumberExistMsg", function(val) {
        if((typeof val=='string') && (val != "")){
          this._accountNumberExistMsg=val;
        }
      });

      //getter method for AccountNumber Exist Error Msg in the group:Account Number
      defineGetter(this, "accountNumberExistMsg", function() {
        return this._accountNumberExistMsg;
      });

      //setter method for AccountNumber Records Match Msg in the group:Account Number
      defineSetter(this, "accountNumberNotMatch", function(val) {
        if((typeof val=='string') && (val != "")){
          this._accountNumberNotMatch=val;
        }
      });

      //getter method for AccountNumber Records Match Msg in the group:Account Number
      defineGetter(this, "accountNumberNotMatch", function() {
        return this._accountNumberNotMatch;
      });
      //setter method for Text  Label in the group:Payee Nickname
      defineSetter(this, "lblPayeeNickname", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblPayeeNickname=val;
        }
      });

      //getter method for Text  Label in the group:Payee Nickname
      defineGetter(this, "lblPayeeNickname", function() {
        return this._lblPayeeNickname;
      });

      //setter method for Success Label in the group:Payee Success Screen
      defineSetter(this, "lblPayeeNicknameSuccess", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblPayeeNicknameSuccess=val;
        }
      });

      //getter method for Success Label in the group:Payee Success Screen
      defineGetter(this, "lblPayeeNicknameSuccess", function() {
        return this._lblPayeeNicknameSuccess;
      });

      //setter method for Mobile Number Label in the group:Contact Type
      defineSetter(this, "lblMobileNumber", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblMobileNumber=val;
        }
      });

      //getter method for Mobile Number Label in the group:Contact Type
      defineGetter(this, "lblMobileNumber", function() {
        return this._lblMobileNumber;
      });

      //setter method for Country Search Box Properties in the group:Country Code
      defineSetter(this, "countrySearchProperty", function(val) {
        if((typeof val=='string') && (val != "")){
          this._countrySearchProperty=val;
        }
      });

      //getter method for Country Search Box Properties in the group:Country Code
      defineGetter(this, "countrySearchProperty", function() {
        return this._countrySearchProperty;
      });

      //setter method for Country Object Service Properties in the group:Country Service
      defineSetter(this, "countryObjectServiceName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._countryObjectServiceName=val;
        }
      });

      //getter method for Country Object Service Properties in the group:Country Code
      defineGetter(this, "countryObjectServiceName", function() {
        return this._countryObjectServiceName;
      });
      
      //setter method for phoneNumberRestrictCharacterSet Properties in the group:Add Address Field
      defineSetter(this, "phoneNumberRestrictCharacterSet", function(val) {
        if((typeof val=='string') && (val != "")){
          this._phoneNumberRestrictCharacterSet=val;
        }
      });

      //getter method for phoneNumberRestrictCharacterSet Properties in the group:Add Address Field
      defineGetter(this, "phoneNumberRestrictCharacterSet", function() {
        return this._phoneNumberRestrictCharacterSet;
      });

      //setter method for Country Object Name Properties in the group:Country Service
      defineSetter(this, "countryObjectName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._countryObjectName=val;
        }
      });

      //getter method for Country Object Name Properties in the group:Country Code
      defineGetter(this, "countryObjectName", function() {
        return this._countryObjectName;
      });

      //setter method for Country Operation Name Properties in the group:Country Service
      defineSetter(this, "countryOperationName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._countryOperationName=val;
        }
      });

      //getter method for Country Operation Name Properties in the group:Country Code
      defineGetter(this, "countryOperationName", function() {
        return this._countryOperationName;
      });

      //setter method for Country Criteria Properties in the group:Country Service
      defineSetter(this, "countryCriteria", function(val) {
        if((typeof val=='string') && (val != "")){
          this._countryCriteria=val;
        }
      });

      //getter method for Country criteria Properties in the group:Country Code
      defineGetter(this, "countryCriteria", function() {
        return this._countryCriteria;
      });

      //setter method for Country Criteria Properties in the group:Country Service
      defineSetter(this, "countryIdentifier", function(val) {
        if((typeof val=='string') && (val != "")){
          this._countryIdentifier=val;
        }
      });

      //getter method for Country criteria Properties in the group:Country Code
      defineGetter(this, "countryIdentifier", function() {
        return this._countryIdentifier;
      });

      //setter method for Country Object in the group:Address Services (State & Country Related)
      defineSetter(this, "countryServiceIdentifier", function(val) {
        if((typeof val=='string') && (val != "")){
          this._countryServiceIdentifier=val;
        }
      });

      //getter method for Country Object in the group:Address Services (State & Country Related)
      defineGetter(this, "countryServiceIdentifier", function() {
        return this._countryServiceIdentifier;
      });

      //setter method for Add Icon in the group:Icons
      defineSetter(this, "iconAdd", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconAdd=val;
        }
      });

      //getter method for Add Icon in the group:Icons
      defineGetter(this, "iconAdd", function() {
        return this._iconAdd;
      });

            //setter method for Search Close Icon in the group:Icons
      defineSetter(this, "iconSearchClose", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconSearchClose=val;
        }
      });

      //getter method for Search Close Icon in the group:Icons
      defineGetter(this, "iconSearchClose", function() {
        return this._iconSearchClose;
      });
      //setter method for Supporting Documents Label in the group:Supporting Document
      defineSetter(this, "lblSupportingDocuments", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblSupportingDocuments=val;
        }
      });

      //getter method for Supporting Documents Label in the group:Supporting Document
      defineGetter(this, "lblSupportingDocuments", function() {
        return this._lblSupportingDocuments;
      });

      //setter method for file size Error in the group:Supporting Document
      defineSetter(this, "fileSizeError", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fileSizeError=val;
        }
      });

      //getter method for file size Error in the group:Supporting Document
      defineGetter(this, "fileSizeError", function() {
        return this._fileSizeError;
      });

      //setter method for file Type Error in the group:Supporting Document
      defineSetter(this, "fileTypeError", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fileTypeError=val;
        }
      });

      //getter method for file Type Error in the group:Supporting Document
      defineGetter(this, "fileTypeError", function() {
        return this._fileTypeError;
      });

      //setter method for file size in the group:Supporting Document
      defineSetter(this, "fileSize", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fileSize=val;
        }
      });

      //getter method for file size in the group:Supporting Document
      defineGetter(this, "fileSize", function() {
        return this._fileSize;
      });

      defineSetter(this, "removeDocsTitle", function(val) {
        if((typeof val=='string') && (val != "")){
          this._removeDocsTitle=val;
        }
      });

      //getter method for Remove DocsTitle in the group:Supporting Document
      defineGetter(this, "removeDocsTitle", function() {
        return this._removeDocsTitle;
      });

      defineSetter(this, "sizepopupTitle", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sizepopupTitle=val;
        }
      });

      //getter method for Size Popup Title in the group:Supporting Document
      defineGetter(this, "sizepopupTitle", function() {
        return this._sizepopupTitle;
      });

      defineSetter(this, "popupActionbtns", function(val) {
        if((typeof val=='string') && (val != "")){
          this._popupActionbtns=val;
        }
      });

      //getter method for Size Popup Title in the group:Supporting Document
      defineGetter(this, "popupActionbtns", function() {
        return this._popupActionbtns;
      });

      //setter method for Select option 1 in the group:Supporting Document
      defineSetter(this, "selectOption1", function(val) {
        if((typeof val==='string') && (val !== "")){
          this._selectOption1=val;
        }
      });

      //getter method for Select option 1 in the group:Supporting Document
      defineGetter(this, "selectOption1", function() {
        return this._selectOption1;
      });

      //setter method for Select option 2 in the group:Supporting Document
      defineSetter(this, "selectOption2", function(val) {
        if((typeof val==='string') && (val !== "")){
          this._selectOption2=val;
        }
      });

      //getter method for Select option 2 in the group:Supporting Document
      defineGetter(this, "selectOption2", function() {
        return this._selectOption2;
      });

      //setter method for Select option 3 in the group:Supporting Document
      defineSetter(this, "selectOption3", function(val) {
        if((typeof val==='string') && (val !== "")){
          this._selectOption3=val;
        }
      });

      //getter method for Select option 3 in the group:Supporting Document
      defineGetter(this, "selectOption3", function() {
        return this._selectOption3;
      });

      //setter method for Select option 4 in the group:Supporting Document
      defineSetter(this, "selectOption4", function(val) {
        if((typeof val==='string') && (val !== "")){
          this._selectOption4=val;
        }
      });

      //getter method for Select option 4 in the group:Supporting Document
      defineGetter(this, "selectOption4", function() {
        return this._selectOption4;
      });

      //setter method for Add Icon in the group:Supporting Document
      defineSetter(this, "addDocumentIcon", function(val) {
        if((typeof val==='string') && (val !== "")){
          this._addDocumentIcon=val;
        }
      });

      //getter method for Add Icon in the group:Supporting Document
      defineGetter(this, "addDocumentIcon", function() {
        return this._addDocumentIcon;
      });

      //setter method for Cancel option in the group:Supporting Document
      defineSetter(this, "cancelOption", function(val) {
        if((typeof val==='string') && (val !== "")){
          this._cancelOption=val;
        }
      });

      //getter method for cancel option in the group:Supporting Document
      defineGetter(this, "cancelOption", function() {
        return this._cancelOption;
      });

      //setter method for Minimum Amount in the group:Data Validation
      defineSetter(this, "minAmount", function(val) {
        if((typeof val=='string') && (val != "")){
          this._minAmount=val;
        }
      });

      //getter method for Minimum Amount in the group:Data Validation
      defineGetter(this, "minAmount", function() {
        return this._minAmount;
      });

      //setter method for Field 1 Value in the group:From Account
      defineSetter(this, "fromField1Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fromField1Value=val;
        }
      });

      //getter method for Field 1 Value in the group:From Account
      defineGetter(this, "fromField1Value", function() {
        return this._fromField1Value;
      });

      //setter method for Criteria in the group:From Account List Service
      defineSetter(this, "fromAccountsCriteria", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fromAccountsCriteria=val;
        }
      });

      //getter method for Criteria in the group:From Account List Service
      defineGetter(this, "fromAccountsCriteria", function() {
        return this._fromAccountsCriteria;
      });

      //setter method for From Available Balance Label in the group:Transfer Amount
      defineSetter(this, "fieldFromBalanceLblAmtScrn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fieldFromBalanceLblAmtScrn=val;
        }
      });

      //getter method for From Available Balance Label in the group:Transfer Amount
      defineGetter(this, "fieldFromBalanceLblAmtScrn", function() {
        return this._fieldFromBalanceLblAmtScrn;
      });

      //setter method for Field 1 Value in the group:To Account
      defineSetter(this, "toField1Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._toField1Value=val;
        }
      });

      //getter method for Field 1 Value in the group:To Account
      defineGetter(this, "toField1Value", function() {
        return this._toField1Value;
      });

      //setter method for Option 1 in the group:Payment Method
      defineSetter(this, "paymentMethodOption1", function(val) {
        if((typeof val=='string') && (val != "")){
          this._paymentMethodOption1=val;
        }
      });

      //getter method for Option 1 in the group:Payment Method
      defineGetter(this, "paymentMethodOption1", function() {
        return this._paymentMethodOption1;
      });

      //setter method for Text Input Value in the group:BIC/SWIFT Code
      defineSetter(this, "txtInputBICSwiftCode", function(val) {
        if((typeof val=='string') && (val != "")){
          this._txtInputBICSwiftCode=val;
        }
      });

      //getter method for Text Input Value in the group:BIC/SWIFT Code
      defineGetter(this, "txtInputBICSwiftCode", function() {
        return this._txtInputBICSwiftCode;
      });

      //setter method for Field 1 Label in the group:SWIFT BIC Search
      defineSetter(this, "searchField1Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._searchField1Label=val;
        }
      });

      //getter method for Field 1 Label in the group:SWIFT BIC Search
      defineGetter(this, "searchField1Label", function() {
        return this._searchField1Label;
      });

      //setter method for Criteria in the group:SWIFT search Service
      defineSetter(this, "swiftSrchCriteria", function(val) {
        if((typeof val=='string') && (val != "")){
          this._swiftSrchCriteria=val;
        }
      });

      //getter method for Criteria in the group:SWIFT search Service
      defineGetter(this, "swiftSrchCriteria", function() {
        return this._swiftSrchCriteria;
      });

      //setter method for Field 1 Label in the group:Required Code
      defineSetter(this, "requiredCodeField1Lbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._requiredCodeField1Lbl=val;
        }
      });

      //getter method for Field 1 Label in the group:Required Code
      defineGetter(this, "requiredCodeField1Lbl", function() {
        return this._requiredCodeField1Lbl;
      });

      //setter method for Text Input Value in the group:General
      defineSetter(this, "txtInputSendOn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._txtInputSendOn=val;
        }
      });

      //getter method for Text Input Value in the group:General
      defineGetter(this, "txtInputSendOn", function() {
        return this._txtInputSendOn;
      });

      //setter method for Field From Value in the group:Verify Details
      defineSetter(this, "fieldFromValue", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fieldFromValue=val;
        }
      });

      //getter method for Field From Value in the group:Verify Details
      defineGetter(this, "fieldFromValue", function() {
        return this._fieldFromValue;
      });

      //setter method for Option 1 in the group:Fees Paid By
      defineSetter(this, "feesPaidOption1", function(val) {
        if((typeof val=='string') && (val != "")){
          this._feesPaidOption1=val;
        }
      });

      //getter method for Option 1 in the group:Fees Paid By
      defineGetter(this, "feesPaidOption1", function() {
        return this._feesPaidOption1;
      });

      //setter method for Field 1 Label in the group:Add Address Fields
      defineSetter(this, "addAddressField1Lbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._addAddressField1Lbl=val;
        }
      });

      //getter method for Field 1 Label in the group:Add Address Fields
      defineGetter(this, "addAddressField1Lbl", function() {
        return this._addAddressField1Lbl;
      });

      //setter method for Operation Name in the group:To Account List Service
      defineSetter(this, "toAccOperationName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._toAccOperationName=val;
        }
      });

      //getter method for Operation Name in the group:To Account List Service
      defineGetter(this, "toAccOperationName", function() {
        return this._toAccOperationName;
      });

      //setter method for Cancel button in the group:Skins
      defineSetter(this, "sknCancelBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknCancelBtn=val;
        }
      });

      //getter method for Cancel button in the group:Skins
      defineGetter(this, "sknCancelBtn", function() {
        return this._sknCancelBtn;
      });

      //setter method for Empty Record Messge in the group:Common Properties
      defineSetter(this, "lblEmptyRecord", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblEmptyRecord=val;
        }
      });

      //getter method for Empty Record Messge in the group:Common Properties
      defineGetter(this, "lblEmptyRecord", function() {
        return this._lblEmptyRecord;
      });

      //setter method for Criteria in the group:Search Service
      defineSetter(this, "searchCriteria", function(val) {
        if((typeof val=='string') && (val != "")){
          this._searchCriteria=val;
        }
      });

      //getter method for Criteria in the group:Search Service
      defineGetter(this, "searchCriteria", function() {
        return this._searchCriteria;
      });

      //setter method for Field Label 2 in the group:Amount
      defineSetter(this, "amountLable2", function(val) {
        if((typeof val=='string') && (val != "")){
          this._amountLable2=val;
        }
      });

      //getter method for Field Label 2 in the group:Amount
      defineGetter(this, "amountLable2", function() {
        return this._amountLable2;
      });

      //setter method for Segregation Types in the group:General
      defineSetter(this, "segregationTypes", function(val) {
        if((typeof val=='string') && (val != "")){
          this._segregationTypes=val;
        }
      });

      //getter method for Segregation Types in the group:General
      defineGetter(this, "segregationTypes", function() {
        return this._segregationTypes;
      });

      //setter method for Option 1 in the group:Fees Paid By
      defineSetter(this, "feesPaidOption1", function(val) {
        if((typeof val=='string') && (val != "")){
          this._feesPaidOption1=val;
        }
      });

      //getter method for Option 1 in the group:Fees Paid By
      defineGetter(this, "feesPaidOption1", function() {
        return this._feesPaidOption1;
      });

      //setter method for Text Input Value in the group:FX Rate Reference
      defineSetter(this, "txtInputfxRateReference", function(val) {
        if((typeof val=='string') && (val != "")){
          this._txtInputfxRateReference=val;
        }
      });

      //getter method for Text Input Value in the group:FX Rate Reference
      defineGetter(this, "txtInputfxRateReference", function() {
        return this._txtInputfxRateReference;
      });

      //setter method for  Text Input Value in the group:Intermediary BIC
      defineSetter(this, "txtInputIntermediaryBIC", function(val) {
        if((typeof val=='string') && (val != "")){
          this._txtInputIntermediaryBIC=val;
        }
      });

      //getter method for  Text Input Value in the group:Intermediary BIC
      defineGetter(this, "txtInputIntermediaryBIC", function() {
        return this._txtInputIntermediaryBIC;
      });

      //setter method for Text Input Value in the group:E2E
      defineSetter(this, "txtInputE2ERef", function(val) {
        if((typeof val=='string') && (val != "")){
          this._txtInputE2ERef=val;
        }
      });

      //getter method for Text Input Value in the group:E2E
      defineGetter(this, "txtInputE2ERef", function() {
        return this._txtInputE2ERef;
      });

      //setter method for Text Input Value in the group:Recipient's Name
      defineSetter(this, "txtInputRecipientName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._txtInputRecipientName=val;
        }
      });

      //getter method for Text Input Value in the group:Recipient's Name
      defineGetter(this, "txtInputRecipientName", function() {
        return this._txtInputRecipientName;
      });

      //setter method for Text Input Restrict Characters in the group:Recipient's Name
      defineSetter(this, "recipientRestrictChars", function(val) {
        if((typeof val=='string') && (val != "")){
          this._recipientRestrictChars=val;
        }
      });

      //getter method for Text Input Restrict Characters in the group:Recipient's Name
      defineGetter(this, "recipientRestrictChars", function() {
        return this._recipientRestrictChars;
      });

      //setter method for Re-enter  Text Input Label in the group:Account Number
      defineSetter(this, "lblReEnterAccountNumber", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblReEnterAccountNumber=val;
        }
      });

      //getter method for Re-enter  Text Input Label in the group:Account Number
      defineGetter(this, "lblReEnterAccountNumber", function() {
        return this._lblReEnterAccountNumber;
      });

      //setter method for  Text Input Value in the group:Payee Nickname
      defineSetter(this, "txtInputPayeeNickname", function(val) {
        if((typeof val=='string') && (val != "")){
          this._txtInputPayeeNickname=val;
        }
      });

      //getter method for  Text Input Value in the group:Payee Nickname
      defineGetter(this, "txtInputPayeeNickname", function() {
        return this._txtInputPayeeNickname;
      });

      //setter method for Success Description in the group:Payee Success Screen
      defineSetter(this, "lblPayeeNicknameSuccessDescription", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblPayeeNicknameSuccessDescription=val;
        }
      });

      //getter method for Success Description in the group:Payee Success Screen
      defineGetter(this, "lblPayeeNicknameSuccessDescription", function() {
        return this._lblPayeeNicknameSuccessDescription;
      });

      //setter method for Mobile Number Value in the group:Contact Type
      defineSetter(this, "txtInputMobileNumber", function(val) {
        if((typeof val=='string') && (val != "")){
          this._txtInputMobileNumber=val;
        }
      });

      //getter method for Mobile Number Value in the group:Contact Type
      defineGetter(this, "txtInputMobileNumber", function() {
        return this._txtInputMobileNumber;
      });

      //setter method for Right Arrow in the group:Icons
      defineSetter(this, "iconRightArrow", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconRightArrow=val;
        }
      });

      //getter method for Right Arrow in the group:Icons
      defineGetter(this, "iconRightArrow", function() {
        return this._iconRightArrow;
      });

      //setter method for SelectedFile in the group:Supporting Document
      defineSetter(this, "selectedFileValue", function(val) {
        if((typeof val=='string') && (val != "")){
          this._selectedFileValue=val;
        }
      });

      //getter method for SelectedFile in the group:Supporting Document
      defineGetter(this, "selectedFileValue", function() {
        return this._selectedFileValue;
      });

      //setter method for Field 2 Value in the group:From Account
      defineSetter(this, "fromField2Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fromField2Value=val;
        }
      });

      //getter method for Field 2 Value in the group:From Account
      defineGetter(this, "fromField2Value", function() {
        return this._fromField2Value;
      });

      //setter method for Service Response Identifier in the group:From Account List Service
      defineSetter(this, "fromServiceResponseIdentifier", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fromServiceResponseIdentifier=val;
        }
      });

      //getter method for Service Response Identifier in the group:From Account List Service
      defineGetter(this, "fromServiceResponseIdentifier", function() {
        return this._fromServiceResponseIdentifier;
      });

      //setter method for From Available Balance Value in the group:Transfer Amount
      defineSetter(this, "fieldFromBalanceValueAmtScrn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fieldFromBalanceValueAmtScrn=val;
        }
      });

      //getter method for From Available Balance Value in the group:Transfer Amount
      defineGetter(this, "fieldFromBalanceValueAmtScrn", function() {
        return this._fieldFromBalanceValueAmtScrn;
      });

      //setter method for Field 2 Value in the group:To Account
      defineSetter(this, "toField2Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._toField2Value=val;
        }
      });

      //getter method for Field 2 Value in the group:To Account
      defineGetter(this, "toField2Value", function() {
        return this._toField2Value;
      });

      //setter method for Option 2 in the group:Payment Method
      defineSetter(this, "paymentMethodOption2", function(val) {
        if((typeof val=='string') && (val != "")){
          this._paymentMethodOption2=val;
        }
      });

      //getter method for Option 2 in the group:Payment Method
      defineGetter(this, "paymentMethodOption2", function() {
        return this._paymentMethodOption2;
      });

      //setter method for Continue Button in the group:BIC/SWIFT Code
      defineSetter(this, "btnBICSwiftCode", function(val) {
        if((typeof val=='string') && (val != "")){
          this._btnBICSwiftCode=val;
        }
      });

      //getter method for Continue Button in the group:BIC/SWIFT Code
      defineGetter(this, "btnBICSwiftCode", function() {
        return this._btnBICSwiftCode;
      });

      //setter method for Field 1 Value in the group:SWIFT BIC Search
      defineSetter(this, "searchField1Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._searchField1Value=val;
        }
      });

      //getter method for Field 1 Value in the group:SWIFT BIC Search
      defineGetter(this, "searchField1Value", function() {
        return this._searchField1Value;
      });

      //setter method for Service Response Identifier in the group:SWIFT search Service
      defineSetter(this, "swiftSrchServiceResIdentifier", function(val) {
        if((typeof val=='string') && (val != "")){
          this._swiftSrchServiceResIdentifier=val;
        }
      });

      //getter method for Service Response Identifier in the group:SWIFT search Service
      defineGetter(this, "swiftSrchServiceResIdentifier", function() {
        return this._swiftSrchServiceResIdentifier;
      });

      //setter method for Field 1 Value in the group:Required Code
      defineSetter(this, "requiredCodeField1Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._requiredCodeField1Value=val;
        }
      });

      //getter method for Field 1 Value in the group:Required Code
      defineGetter(this, "requiredCodeField1Value", function() {
        return this._requiredCodeField1Value;
      });

      //setter method for Calender continue Button in the group:General
      defineSetter(this, "calenderContinueBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._calenderContinueBtn=val;
        }
      });

      //getter method for Calender continue Button in the group:General
      defineGetter(this, "calenderContinueBtn", function() {
        return this._calenderContinueBtn;
      });

      //setter method for From Available Balance Label in the group:Verify Details
      defineSetter(this, "fieldFromBalanceLbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fieldFromBalanceLbl=val;
        }
      });

      //getter method for From Available Balance Label in the group:Verify Details
      defineGetter(this, "fieldFromBalanceLbl", function() {
        return this._fieldFromBalanceLbl;
      });

      //setter method for Option 2 in the group:Fees Paid By
      defineSetter(this, "feesPaidOption2", function(val) {
        if((typeof val=='string') && (val != "")){
          this._feesPaidOption2=val;
        }
      });

      //getter method for Option 2 in the group:Fees Paid By
      defineGetter(this, "feesPaidOption2", function() {
        return this._feesPaidOption2;
      });

      //setter method for Field 1 Value in the group:Add Address Fields
      defineSetter(this, "addAddressField1Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._addAddressField1Value=val;
        }
      });

      //getter method for Field 1 Value in the group:Add Address Fields
      defineGetter(this, "addAddressField1Value", function() {
        return this._addAddressField1Value;
      });

      //setter method for Criteria in the group:To Account List Service
      defineSetter(this, "toAccCriteria", function(val) {
        if((typeof val=='string') && (val != "")){
          this._toAccCriteria=val;
        }
      });

      //getter method for Criteria in the group:To Account List Service
      defineGetter(this, "toAccCriteria", function() {
        return this._toAccCriteria;
      });

      //setter method for Search box in the group:Skins
      defineSetter(this, "sknSearchBox", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknSearchBox=val;
        }
      });

      //getter method for Search box in the group:Skins
      defineGetter(this, "sknSearchBox", function() {
        return this._sknSearchBox;
      });

      //setter method for Field Value 2 in the group:Amount
      defineSetter(this, "amountValue2", function(val) {
        if((typeof val=='string') && (val != "")){
          this._amountValue2=val;
        }
      });

      //getter method for Field Value 2 in the group:Amount
      defineGetter(this, "amountValue2", function() {
        return this._amountValue2;
      });

      //setter method for Option 2 in the group:Fees Paid By
      defineSetter(this, "feesPaidOption2", function(val) {
        if((typeof val=='string') && (val != "")){
          this._feesPaidOption2=val;
        }
      });

      //getter method for Option 2 in the group:Fees Paid By
      defineGetter(this, "feesPaidOption2", function() {
        return this._feesPaidOption2;
      });

      //setter method for Reference Button in the group:FX Rate Reference
      defineSetter(this, "referenceBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._referenceBtn=val;
        }
      });

      //getter method for Reference Button in the group:FX Rate Reference
      defineGetter(this, "referenceBtn", function() {
        return this._referenceBtn;
      });

      //setter method for Intermediary Button in the group:Intermediary BIC
      defineSetter(this, "IntermediaryBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._IntermediaryBtn=val;
        }
      });

      //getter method for Intermediary Button in the group:Intermediary BIC
      defineGetter(this, "IntermediaryBtn", function() {
        return this._IntermediaryBtn;
      });

      //setter method for E2E Button in the group:E2E
      defineSetter(this, "E2EBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._E2EBtn=val;
        }
      });

      //getter method for E2E Button in the group:E2E
      defineGetter(this, "E2EBtn", function() {
        return this._E2EBtn;
      });

      //setter method for Recipient  Button in the group:Recipient's Name
      defineSetter(this, "recipientBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._recipientBtn=val;
        }
      });

      //getter method for Recipient  Button in the group:Recipient's Name
      defineGetter(this, "recipientBtn", function() {
        return this._recipientBtn;
      });

      //setter method for  Text Input Value in the group:Account Number
      defineSetter(this, "txtInputAccountNumber", function(val) {
        if((typeof val=='string') && (val != "")){
          this._txtInputAccountNumber=val;
        }
      });

      //getter method for  Text Input Value in the group:Account Number
      defineGetter(this, "txtInputAccountNumber", function() {
        return this._txtInputAccountNumber;
      });

      //setter method for Nickname  Button in the group:Payee Nickname
      defineSetter(this, "payeeNicknameBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._payeeNicknameBtn=val;
        }
      });

      //getter method for Nickname  Button in the group:Payee Nickname
      defineGetter(this, "payeeNicknameBtn", function() {
        return this._payeeNicknameBtn;
      });

      //setter method for New Transfer  Button in the group:Payee Success Screen
      defineSetter(this, "payeeNicknameNewTransfer", function(val) {
        if((typeof val=='string') && (val != "")){
          this._payeeNicknameNewTransfer=val;
        }
      });

      //getter method for New Transfer  Button in the group:Payee Success Screen
      defineGetter(this, "payeeNicknameNewTransfer", function() {
        return this._payeeNicknameNewTransfer;
      });

      //setter method for Email Label in the group:Contact Type
      defineSetter(this, "lblEmail", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblEmail=val;
        }
      });

      //getter method for Email Label in the group:Contact Type
      defineGetter(this, "lblEmail", function() {
        return this._lblEmail;
      });

      //setter method for Data Identifier in the group:General
      defineSetter(this, "dataIdentifier", function(val) {
        if((typeof val=='string') && (val != "")){
          this._dataIdentifier=val;
        }
      });

      //getter method for Data Identifier in the group:General
      defineGetter(this, "dataIdentifier", function() {
        return this._dataIdentifier;
      });

      //setter method for Back Icon in the group:Icons
      defineSetter(this, "iconBack", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconBack=val;
        }
      });

      //getter method for Back Icon in the group:Icons
      defineGetter(this, "iconBack", function() {
        return this._iconBack;
      });

      //setter method for Field 3 Value in the group:From Account
      defineSetter(this, "fromField3Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fromField3Value=val;
        }
      });

      //getter method for Field 3 Value in the group:From Account
      defineGetter(this, "fromField3Value", function() {
        return this._fromField3Value;
      });

      //setter method for Field To Label in the group:Transfer Amount
      defineSetter(this, "fieldToLabelAmtScrn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fieldToLabelAmtScrn=val;
        }
      });

      //getter method for Field To Label in the group:Transfer Amount
      defineGetter(this, "fieldToLabelAmtScrn", function() {
        return this._fieldToLabelAmtScrn;
      });

      //setter method for Field 3 Value in the group:To Account
      defineSetter(this, "toField3Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._toField3Value=val;
        }
      });

      //getter method for Field 3 Value in the group:To Account
      defineGetter(this, "toField3Value", function() {
        return this._toField3Value;
      });

      //setter method for Option 3 in the group:Payment Method
      defineSetter(this, "paymentMethodOption3", function(val) {
        if((typeof val=='string') && (val != "")){
          this._paymentMethodOption3=val;
        }
      });

      //getter method for Option 3 in the group:Payment Method
      defineGetter(this, "paymentMethodOption3", function() {
        return this._paymentMethodOption3;
      });

      //setter method for Look Up Button in the group:BIC/SWIFT Code
      defineSetter(this, "btnBICSWIFTLookup", function(val) {
        if((typeof val=='string') && (val != "")){
          this._btnBICSWIFTLookup=val;
        }
      });

      //getter method for Look Up Button in the group:BIC/SWIFT Code
      defineGetter(this, "btnBICSWIFTLookup", function() {
        return this._btnBICSWIFTLookup;
      });

      //setter method for Field 2 Label in the group:SWIFT BIC Search
      defineSetter(this, "searchField2Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._searchField2Label=val;
        }
      });

      //getter method for Field 2 Label in the group:SWIFT BIC Search
      defineGetter(this, "searchField2Label", function() {
        return this._searchField2Label;
      });

      //setter method for Field 2 Label in the group:Required Code
      defineSetter(this, "requiredCodeField2Lbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._requiredCodeField2Lbl=val;
        }
      });

      //getter method for Field 2 Label in the group:Required Code
      defineGetter(this, "requiredCodeField2Lbl", function() {
        return this._requiredCodeField2Lbl;
      });

      //setter method for From Available Balance Value in the group:Verify Details
      defineSetter(this, "fieldFromBalanceValue", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fieldFromBalanceValue=val;
        }
      });

      //getter method for From Available Balance Value in the group:Verify Details
      defineGetter(this, "fieldFromBalanceValue", function() {
        return this._fieldFromBalanceValue;
      });

      //setter method for Option 3 in the group:Fees Paid By
      defineSetter(this, "feesPaidOption3", function(val) {
        if((typeof val=='string') && (val != "")){
          this._feesPaidOption3=val;
        }
      });

      //getter method for Option 3 in the group:Fees Paid By
      defineGetter(this, "feesPaidOption3", function() {
        return this._feesPaidOption3;
      });

      //setter method for Field 2 Label in the group:Add Address Fields
      defineSetter(this, "addAddressField2Lbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._addAddressField2Lbl=val;
        }
      });

      //getter method for Field 2 Label in the group:Add Address Fields
      defineGetter(this, "addAddressField2Lbl", function() {
        return this._addAddressField2Lbl;
      });

      //setter method for Service Response Identifier in the group:To Account List Service
      defineSetter(this, "toAccServiceResIdentifier", function(val) {
        if((typeof val=='string') && (val != "")){
          this._toAccServiceResIdentifier=val;
        }
      });

      //getter method for Service Response Identifier in the group:To Account List Service
      defineGetter(this, "toAccServiceResIdentifier", function() {
        return this._toAccServiceResIdentifier;
      });

      //setter method for Search Text Area in the group:Skins
      defineSetter(this, "sknSearchTextArea", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknSearchTextArea=val;
        }
      });

      //getter method for Search Text Area in the group:Skins
      defineGetter(this, "sknSearchTextArea", function() {
        return this._sknSearchTextArea;
      });

      //setter method for Field Label 3 in the group:Amount
      defineSetter(this, "amountLable3", function(val) {
        if((typeof val=='string') && (val != "")){
          this._amountLable3=val;
        }
      });

      //getter method for Field Label 3 in the group:Amount
      defineGetter(this, "amountLable3", function() {
        return this._amountLable3;
      });

      //setter method for Option 3 in the group:Fees Paid By
      defineSetter(this, "feesPaidOption3", function(val) {
        if((typeof val=='string') && (val != "")){
          this._feesPaidOption3=val;
        }
      });

      //getter method for Option 3 in the group:Fees Paid By
      defineGetter(this, "feesPaidOption3", function() {
        return this._feesPaidOption3;
      });

      //setter method for Re-enter  Text Input Value in the group:Account Number
      defineSetter(this, "txtInputReEnterAccountNumber", function(val) {
        if((typeof val=='string') && (val != "")){
          this._txtInputReEnterAccountNumber=val;
        }
      });

      //getter method for Re-enter  Text Input Value in the group:Account Number
      defineGetter(this, "txtInputReEnterAccountNumber", function() {
        return this._txtInputReEnterAccountNumber;
      });

      //setter method for Acc Number Error messgae in the group:Account Number
      defineSetter(this, "accNumErrorMessage", function(val) {
        if((typeof val=='string') && (val != "")){
          this._accNumErrorMessage=val;
        }
      });

      //getter method for Acc Number Error messgae in the group:Account Number
      defineGetter(this, "accNumErrorMessage", function() {
        return this._accNumErrorMessage;
      });

      //setter method for Re-enter Acc Number Error messgae in the group:Account Number
      defineSetter(this, "reEnterAccNumErrorMessage", function(val) {
        if((typeof val=='string') && (val != "")){
          this._reEnterAccNumErrorMessage=val;
        }
      });

      //getter method for Re-enter Acc Number Error messgae in the group:Account Number
      defineGetter(this, "reEnterAccNumErrorMessage", function() {
        return this._reEnterAccNumErrorMessage;
      });

      //setter method for Transfer Activities  Button in the group:Payee Success Screen
      defineSetter(this, "payeeNicknameTransferActivities", function(val) {
        if((typeof val=='string') && (val != "")){
          this._payeeNicknameTransferActivities=val;
        }
      });

      //getter method for Transfer Activities  Button in the group:Payee Success Screen
      defineGetter(this, "payeeNicknameTransferActivities", function() {
        return this._payeeNicknameTransferActivities;
      });

      //setter method for Email Value in the group:Contact Type
      defineSetter(this, "txtInputEmail", function(val) {
        if((typeof val=='string') && (val != "")){
          this._txtInputEmail=val;
        }
      });

      //getter method for Email Value in the group:Contact Type
      defineGetter(this, "txtInputEmail", function() {
        return this._txtInputEmail;
      });

      //setter method for Listing Account Types in the group:General
      defineSetter(this, "accountTypesList", function(val) {
        if((typeof val=='string') && (val != "")){
          this._accountTypesList=val;
        }
      });

      //getter method for Listing Account Types in the group:General
      defineGetter(this, "accountTypesList", function() {
        return this._accountTypesList;
      });

      //setter method for Business in the group:Icons
      defineSetter(this, "iconBusiness", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconBusiness=val;
        }
      });

      //getter method for Business in the group:Icons
      defineGetter(this, "iconBusiness", function() {
        return this._iconBusiness;
      });

      //setter method for Field 4 Value in the group:From Account
      defineSetter(this, "fromField4Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fromField4Value=val;
        }
      });

      //getter method for Field 4 Value in the group:From Account
      defineGetter(this, "fromField4Value", function() {
        return this._fromField4Value;
      });

      //setter method for Field To Value in the group:Transfer Amount
      defineSetter(this, "fieldToValueAmtScrn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fieldToValueAmtScrn=val;
        }
      });

      //getter method for Field To Value in the group:Transfer Amount
      defineGetter(this, "fieldToValueAmtScrn", function() {
        return this._fieldToValueAmtScrn;
      });

      //setter method for Field 4 Value in the group:To Account
      defineSetter(this, "toField4Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._toField4Value=val;
        }
      });

      //getter method for Field 4 Value in the group:To Account
      defineGetter(this, "toField4Value", function() {
        return this._toField4Value;
      });
	  
	  
      //setter method for default in the group:Payment Method
      defineSetter(this, "defaultPaymentMethod", function(val) {
        if((typeof val=='string') && (val != "")){
          this._defaultPaymentMethod=val;
        }
      });

      //getter method for default in the group:Payment Method
      defineGetter(this, "defaultPaymentMethod", function() {
        return this._defaultPaymentMethod;
      });
      
       //setter method for default in the group:Payment Method
      defineSetter(this, "defaultFeesPaidBy", function(val) {
        if((typeof val=='string') && (val != "")){
          this._defaultFeesPaidBy=val;
        }
      });

      //getter method for default in the group:Payment Method
      defineGetter(this, "defaultFeesPaidBy", function() {
        return this._defaultFeesPaidBy;
      });

      //setter method for Option 4 in the group:Payment Method
      defineSetter(this, "paymentMethodOption4", function(val) {
        if((typeof val=='string') && (val != "")){
          this._paymentMethodOption4=val;
        }
      });

      //getter method for Option 4 in the group:Payment Method
      defineGetter(this, "paymentMethodOption4", function() {
        return this._paymentMethodOption4;
      });
	
	//setter method for Option 5 in the group:Payment Method
      defineSetter(this, "paymentMethodOption5", function(val) {
        if((typeof val=='string') && (val != "")){
          this._paymentMethodOption5=val;
        }
      });

      //getter method for Option 5 in the group:Payment Method
      defineGetter(this, "paymentMethodOption5", function() {
        return this._paymentMethodOption5;
      });
      
      //setter method for Option 6 in the group:Payment Method
      defineSetter(this, "paymentMethodOption6", function(val) {
        if((typeof val=='string') && (val != "")){
          this._paymentMethodOption6=val;
        }
      });
	  
	   //getter method for Option 6 in the group:Payment Method
      defineGetter(this, "paymentMethodOption6", function() {
        return this._paymentMethodOption6;
      });
	  
      //setter method for Field 2 Value in the group:SWIFT BIC Search
      defineSetter(this, "searchField2Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._searchField2Value=val;
        }
      });

      //getter method for Field 2 Value in the group:SWIFT BIC Search
      defineGetter(this, "searchField2Value", function() {
        return this._searchField2Value;
      });

      //setter method for Field 2 Value in the group:Required Code
      defineSetter(this, "requiredCodeField2Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._requiredCodeField2Value=val;
        }
      });

      //getter method for Field 2 Value in the group:Required Code
      defineGetter(this, "requiredCodeField2Value", function() {
        return this._requiredCodeField2Value;
      });

      //setter method for Field To Label in the group:Verify Details
      defineSetter(this, "fieldToLabel", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fieldToLabel=val;
        }
      });

      //getter method for Field To Label in the group:Verify Details
      defineGetter(this, "fieldToLabel", function() {
        return this._fieldToLabel;
      });

      //setter method for Field 2 Value in the group:Add Address Fields
      defineSetter(this, "addAddressField2Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._addAddressField2Value=val;
        }
      });

      //getter method for Field 2 Value in the group:Add Address Fields
      defineGetter(this, "addAddressField2Value", function() {
        return this._addAddressField2Value;
      });

      //setter method for Description Background in the group:Skins
      defineSetter(this, "sknDescriptionBg", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknDescriptionBg=val;
        }
      });

      //getter method for Description Background in the group:Skins
      defineGetter(this, "sknDescriptionBg", function() {
        return this._sknDescriptionBg;
      });

      //setter method for Field Value 3 in the group:Amount
      defineSetter(this, "amountValue3", function(val) {
        if((typeof val=='string') && (val != "")){
          this._amountValue3=val;
        }
      });

      //getter method for Field Value 3 in the group:Amount
      defineGetter(this, "amountValue3", function() {
        return this._amountValue3;
      });

      //setter method for Account Number Button in the group:Account Number
      defineSetter(this, "accountNumberBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._accountNumberBtn=val;
        }
      });

      //getter method for Account Number Button in the group:Account Number
      defineGetter(this, "accountNumberBtn", function() {
        return this._accountNumberBtn;
      });

      //setter method for Phone Number Choose Button in the group:Contact Type
      defineSetter(this, "phoneNumberChooseBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._phoneNumberChooseBtn=val;
        }
      });

      //getter method for Phone Number Choose Button in the group:Contact Type
      defineGetter(this, "phoneNumberChooseBtn", function() {
        return this._phoneNumberChooseBtn;
      });

      //setter method for CalenderArrowLeft in the group:Icons
      defineSetter(this, "iconCalenderArrowLeft", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconCalenderArrowLeft=val;
        }
      });

      //getter method for CalenderArrowLeft in the group:Icons
      defineGetter(this, "iconCalenderArrowLeft", function() {
        return this._iconCalenderArrowLeft;
      });

      //setter method for Data Object in the group:General
      defineSetter(this, "dataObject", function(val) {
        if((typeof val=='string') && (val != "")){
          this._dataObject=val;
        }
      });

      //getter method for Data Object in the group:General
      defineGetter(this, "dataObject", function() {
        return this._dataObject;
      });

      //setter method for To Available Balance Label in the group:Transfer Amount
      defineSetter(this, "fieldToBalanceLblAmtScrn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fieldToBalanceLblAmtScrn=val;
        }
      });

      //getter method for To Available Balance Label in the group:Transfer Amount
      defineGetter(this, "fieldToBalanceLblAmtScrn", function() {
        return this._fieldToBalanceLblAmtScrn;
      });

      //setter method for To Account Button in the group:To Account
      defineSetter(this, "toAccountBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._toAccountBtn=val;
        }
      });

      //getter method for To Account Button in the group:To Account
      defineGetter(this, "toAccountBtn", function() {
        return this._toAccountBtn;
      });

      //setter method for Field 3 Label in the group:SWIFT BIC Search
      defineSetter(this, "searchField3Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._searchField3Label=val;
        }
      });

      //getter method for Field 3 Label in the group:SWIFT BIC Search
      defineGetter(this, "searchField3Label", function() {
        return this._searchField3Label;
      });

      //setter method for Field 3 Label in the group:Required Code
      defineSetter(this, "requiredCodeField3Lbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._requiredCodeField3Lbl=val;
        }
      });

      //getter method for Field 3 Label in the group:Required Code
      defineGetter(this, "requiredCodeField3Lbl", function() {
        return this._requiredCodeField3Lbl;
      });

      //setter method for Field To Value in the group:Verify Details
      defineSetter(this, "fieldToValue", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fieldToValue=val;
        }
      });

      //getter method for Field To Value in the group:Verify Details
      defineGetter(this, "fieldToValue", function() {
        return this._fieldToValue;
      });

      //setter method for Field 3 Label in the group:Add Address Fields
      defineSetter(this, "addAddressField3Lbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._addAddressField3Lbl=val;
        }
      });

      //getter method for Field 3 Label in the group:Add Address Fields
      defineGetter(this, "addAddressField3Lbl", function() {
        return this._addAddressField3Lbl;
      });

      //setter method for Description Label in the group:Skins
      defineSetter(this, "sknDescriptionLbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknDescriptionLbl=val;
        }
      });

      //getter method for Description Label in the group:Skins
      defineGetter(this, "sknDescriptionLbl", function() {
        return this._sknDescriptionLbl;
      });

      //setter method for Other Amount Label in the group:Amount
      defineSetter(this, "otherAmountLabel", function(val) {
        if((typeof val=='string') && (val != "")){
          this._otherAmountLabel=val;
        }
      });

      //getter method for Other Amount Label in the group:Amount
      defineGetter(this, "otherAmountLabel", function() {
        return this._otherAmountLabel;
      });

      //setter method for Email Choose Button in the group:Contact Type
      defineSetter(this, "emailChooseBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._emailChooseBtn=val;
        }
      });

      //getter method for Email Choose Button in the group:Contact Type
      defineGetter(this, "emailChooseBtn", function() {
        return this._emailChooseBtn;
      });

      //setter method for CalenderArrowRight in the group:Icons
      defineSetter(this, "iconCalenderArrowRight", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconCalenderArrowRight=val;
        }
      });

      //getter method for CalenderArrowRight in the group:Icons
      defineGetter(this, "iconCalenderArrowRight", function() {
        return this._iconCalenderArrowRight;
      });

      //setter method for To Available Balance Value in the group:Transfer Amount
      defineSetter(this, "fieldToBalanceValueAmtScrn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fieldToBalanceValueAmtScrn=val;
        }
      });

      //getter method for To Available Balance Value in the group:Transfer Amount
      defineGetter(this, "fieldToBalanceValueAmtScrn", function() {
        return this._fieldToBalanceValueAmtScrn;
      });

      //setter method for Field 3 Value in the group:SWIFT BIC Search
      defineSetter(this, "searchField3Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._searchField3Value=val;
        }
      });

      //getter method for Field 3 Value in the group:SWIFT BIC Search
      defineGetter(this, "searchField3Value", function() {
        return this._searchField3Value;
      });

      //setter method for Field 3 Value in the group:Required Code
      defineSetter(this, "requiredCodeField3Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._requiredCodeField3Value=val;
        }
      });

      //getter method for Field 3 Value in the group:Required Code
      defineGetter(this, "requiredCodeField3Value", function() {
        return this._requiredCodeField3Value;
      });

      //setter method for To Available Balance Label in the group:Verify Details
      defineSetter(this, "fieldToBalanceLbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fieldToBalanceLbl=val;
        }
      });

      //getter method for To Available Balance Label in the group:Verify Details
      defineGetter(this, "fieldToBalanceLbl", function() {
        return this._fieldToBalanceLbl;
      });

      //setter method for Field 3 Value in the group:Add Address Fields
      defineSetter(this, "addAddressField3Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._addAddressField3Value=val;
        }
      });

      //getter method for Field 3 Value in the group:Add Address Fields
      defineGetter(this, "addAddressField3Value", function() {
        return this._addAddressField3Value;
      });

      //setter method for Description Separator in the group:Skins
      defineSetter(this, "sknDescriptionSeparator", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknDescriptionSeparator=val;
        }
      });

      //getter method for Description Separator in the group:Skins
      defineGetter(this, "sknDescriptionSeparator", function() {
        return this._sknDescriptionSeparator;
      });

      //setter method for Other Amount Value in the group:Amount
      defineSetter(this, "otherAmountValue", function(val) {
        if((typeof val=='string') && (val != "")){
          this._otherAmountValue=val;
        }
      });

      //getter method for Other Amount Value in the group:Amount
      defineGetter(this, "otherAmountValue", function() {
        return this._otherAmountValue;
      });

      //setter method for Contact Type Button in the group:Contact Type
      defineSetter(this, "contactTypeBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._contactTypeBtn=val;
        }
      });

      //getter method for Contact Type Button in the group:Contact Type
      defineGetter(this, "contactTypeBtn", function() {
        return this._contactTypeBtn;
      });

       //setter method for Contact Type Description in the group:Contact Type
      defineSetter(this, "contactTypeDescription", function(val) {
        if((typeof val=='string') && (val != "")){
          this._contactTypeDescription=val;
        }
      });

      //getter method for Contact Type Description in the group:Contact Type
      defineGetter(this, "contactTypeDescription", function() {
        return this._contactTypeDescription;
      });

      //setter method for Contact Email Error Message in the group:Contact Type
      defineSetter(this, "contactEmailError", function(val) {
        if((typeof val=='string') && (val != "")){
          this._contactEmailError=val;
        }
      });

      //getter method for Contact Email Error Message in the group:Contact Type
      defineGetter(this, "contactEmailError", function() {
        return this._contactEmailError;
      });

      //setter method for Contact Email Error Message in the group:Contact Type
      defineSetter(this, "contactOROption", function(val) {
        if((typeof val=='string') && (val != "")){
          this._contactOROption=val;
        }
      });

      //getter method for Contact Email Error Message in the group:Contact Type
      defineGetter(this, "contactOROption", function() {
        return this._contactOROption;
      });

      //setter method for Cancel keypad Icon in the group:Icons
      defineSetter(this, "iconCancelKeypad", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconCancelKeypad=val;
        }
      });

      //getter method for Cancel keypad Icon in the group:Icons
      defineGetter(this, "iconCancelKeypad", function() {
        return this._iconCancelKeypad;
      });

      //setter method for Transfer Currency Label in the group:Transfer Amount
      defineSetter(this, "lblTransferCurrency", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblTransferCurrency=val;
        }
      });

      //getter method for Transfer Currency Label in the group:Transfer Amount
      defineGetter(this, "lblTransferCurrency", function() {
        return this._lblTransferCurrency;
      });

      //setter method for Field 4 Label in the group:SWIFT BIC Search
      defineSetter(this, "searchField4Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._searchField4Label=val;
        }
      });

      //getter method for Field 4 Label in the group:SWIFT BIC Search
      defineGetter(this, "searchField4Label", function() {
        return this._searchField4Label;
      });

      //setter method for Required Code Button in the group:Required Code
      defineSetter(this, "requiredCodeBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._requiredCodeBtn=val;
        }
      });

      //getter method for Required Code Button in the group:Required Code
      defineGetter(this, "requiredCodeBtn", function() {
        return this._requiredCodeBtn;
      });

      //setter method for To Available Balance Value in the group:Verify Details
      defineSetter(this, "fieldToBalanceValue", function(val) {
        if((typeof val=='string') && (val != "")){
          this._fieldToBalanceValue=val;
        }
      });

      //getter method for To Available Balance Value in the group:Verify Details
      defineGetter(this, "fieldToBalanceValue", function() {
        return this._fieldToBalanceValue;
      });

      //setter method for Field 4 Label in the group:Add Address Fields
      defineSetter(this, "addAddressField4Lbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._addAddressField4Lbl=val;
        }
      });

      //getter method for Field 4 Label in the group:Add Address Fields
      defineGetter(this, "addAddressField4Lbl", function() {
        return this._addAddressField4Lbl;
      });

      //setter method for Group header label in the group:Skins
      defineSetter(this, "sknGroupHeaderLbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknGroupHeaderLbl=val;
        }
      });

      //getter method for Group header label in the group:Skins
      defineGetter(this, "sknGroupHeaderLbl", function() {
        return this._sknGroupHeaderLbl;
      });

      //setter method for Chevron in the group:Icons
      defineSetter(this, "iconChevron", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconChevron=val;
        }
      });

      //getter method for Chevron in the group:Icons
      defineGetter(this, "iconChevron", function() {
        return this._iconChevron;
      });

      //setter method for Transfer Currency Value in the group:Transfer Amount
      defineSetter(this, "transferCurrency", function(val) {
        if((typeof val=='string') && (val != "")){
          this._transferCurrency=val;
        }
      });

      //getter method for Transfer Currency Value in the group:Transfer Amount
      defineGetter(this, "transferCurrency", function() {
        return this._transferCurrency;
      });

      //setter method for Field 4 Value in the group:SWIFT BIC Search
      defineSetter(this, "searchField4Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._searchField4Value=val;
        }
      });

      //getter method for Field 4 Value in the group:SWIFT BIC Search
      defineGetter(this, "searchField4Value", function() {
        return this._searchField4Value;
      });

      //setter method for BIC/SWIFT Button in the group:Required Code
      defineSetter(this, "swiftBICBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._swiftBICBtn=val;
        }
      });

      //getter method for BIC/SWIFT Button in the group:Required Code
      defineGetter(this, "swiftBICBtn", function() {
        return this._swiftBICBtn;
      });

      //setter method for Field 1 Label in the group:Verify Details
      defineSetter(this, "verifyField1Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField1Label=val;
        }
      });

      //getter method for Field 1 Label in the group:Verify Details
      defineGetter(this, "verifyField1Label", function() {
        return this._verifyField1Label;
      });

      //setter method for Field 4 Value in the group:Add Address Fields
      defineSetter(this, "addAddressField4Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._addAddressField4Value=val;
        }
      });

      //getter method for Field 4 Value in the group:Add Address Fields
      defineGetter(this, "addAddressField4Value", function() {
        return this._addAddressField4Value;
      });

      //setter method for Group header background in the group:Skins
      defineSetter(this, "sknGroupHeaderBg", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknGroupHeaderBg=val;
        }
      });

      //getter method for Group header background in the group:Skins
      defineGetter(this, "sknGroupHeaderBg", function() {
        return this._sknGroupHeaderBg;
      });

      //setter method for ChevronRight in the group:Icons
      defineSetter(this, "iconChevronRight", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconChevronRight=val;
        }
      });

      //getter method for ChevronRight in the group:Icons
      defineGetter(this, "iconChevronRight", function() {
        return this._iconChevronRight;
      });

      //setter method for Transfer Amount Label in the group:Transfer Amount
      defineSetter(this, "lblTransferAmount", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblTransferAmount=val;
        }
      });

      //getter method for Transfer Amount Label in the group:Transfer Amount
      defineGetter(this, "lblTransferAmount", function() {
        return this._lblTransferAmount;
      });

      //setter method for Get Details Button in the group:SWIFT BIC Search
      defineSetter(this, "getDetailsBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._getDetailsBtn=val;
        }
      });

      //getter method for Get Details Button in the group:SWIFT BIC Search
      defineGetter(this, "getDetailsBtn", function() {
        return this._getDetailsBtn;
      });

      //setter method for Clearing Code1 Button in the group:Required Code
      defineSetter(this, "clearingCode1Btn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._clearingCode1Btn=val;
        }
      });

      //getter method for Clearing Code1 Button in the group:Required Code
      defineGetter(this, "clearingCode1Btn", function() {
        return this._clearingCode1Btn;
      });

      //setter method for Field 1 Value in the group:Verify Details
      defineSetter(this, "verifyField1Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField1Value=val;
        }
      });

      //getter method for Field 1 Value in the group:Verify Details
      defineGetter(this, "verifyField1Value", function() {
        return this._verifyField1Value;
      });

      //setter method for Field 5 Label in the group:Add Address Fields
      defineSetter(this, "addAddressField5Lbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._addAddressField5Lbl=val;
        }
      });

      //getter method for Field 5 Label in the group:Add Address Fields
      defineGetter(this, "addAddressField5Lbl", function() {
        return this._addAddressField5Lbl;
      });

      //setter method for Primary field 1 in the group:Skins
      defineSetter(this, "sknPrimaryField1", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknPrimaryField1=val;
        }
      });

      //getter method for Primary field 1 in the group:Skins
      defineGetter(this, "sknPrimaryField1", function() {
        return this._sknPrimaryField1;
      });

      //setter method for ChevronWhiteLeft in the group:Icons
      defineSetter(this, "iconChevronWhiteLeft", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconChevronWhiteLeft=val;
        }
      });

      //getter method for ChevronWhiteLeft in the group:Icons
      defineGetter(this, "iconChevronWhiteLeft", function() {
        return this._iconChevronWhiteLeft;
      });

      //setter method for Transfer Amount Value in the group:Transfer Amount
      defineSetter(this, "txtInputTransferAmount", function(val) {
        if((typeof val=='string') && (val != "")){
          this._txtInputTransferAmount=val;
        }
      });

      //getter method for Transfer Amount Value in the group:Transfer Amount
      defineGetter(this, "txtInputTransferAmount", function() {
        return this._txtInputTransferAmount;
      });

      //setter method for Search Text Label in the group:SWIFT BIC Search
      defineSetter(this, "lblSwiftSearchResult", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblSwiftSearchResult=val;
        }
      });

      //getter method for Search Text Label in the group:SWIFT BIC Search
      defineGetter(this, "lblSwiftSearchResult", function() {
        return this._lblSwiftSearchResult;
      });

      //setter method for Clearing Code2 Button in the group:Required Code
      defineSetter(this, "clearingCode2Btn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._clearingCode2Btn=val;
        }
      });

      //getter method for Clearing Code2 Button in the group:Required Code
      defineGetter(this, "clearingCode2Btn", function() {
        return this._clearingCode2Btn;
      });

      //setter method for Field 2 Label in the group:Verify Details
      defineSetter(this, "verifyField2Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField2Label=val;
        }
      });

      //getter method for Field 2 Label in the group:Verify Details
      defineGetter(this, "verifyField2Label", function() {
        return this._verifyField2Label;
      });

      //setter method for Field 5 Value in the group:Add Address Fields
      defineSetter(this, "addAddressField5Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._addAddressField5Value=val;
        }
      });

      //getter method for Field 5 Value in the group:Add Address Fields
      defineGetter(this, "addAddressField5Value", function() {
        return this._addAddressField5Value;
      });

      //setter method for Primary field 2 in the group:Skins
      defineSetter(this, "sknPrimaryField2", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknPrimaryField2=val;
        }
      });

      //getter method for Primary field 2 in the group:Skins
      defineGetter(this, "sknPrimaryField2", function() {
        return this._sknPrimaryField2;
      });

      //setter method for ChevronWhiteRight in the group:Icons
      defineSetter(this, "iconChevronWhiteRight", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconChevronWhiteRight=val;
        }
      });

      //getter method for ChevronWhiteRight in the group:Icons
      defineGetter(this, "iconChevronWhiteRight", function() {
        return this._iconChevronWhiteRight;
      });

      //setter method for Amount Continue Button in the group:Transfer Amount
      defineSetter(this, "amountBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._amountBtn=val;
        }
      });

      //getter method for Amount Continue Button in the group:Transfer Amount
      defineGetter(this, "amountBtn", function() {
        return this._amountBtn;
      });

      //setter method for Search Result Value in the group:SWIFT BIC Search
      defineSetter(this, "searchResultValue", function(val) {
        if((typeof val=='string') && (val != "")){
          this._searchResultValue=val;
        }
      });

      //getter method for Search Result Value in the group:SWIFT BIC Search
      defineGetter(this, "searchResultValue", function() {
        return this._searchResultValue;
      });

      //setter method for Field 2 Value in the group:Verify Details
      defineSetter(this, "verifyField2Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField2Value=val;
        }
      });

      //getter method for Field 2 Value in the group:Verify Details
      defineGetter(this, "verifyField2Value", function() {
        return this._verifyField2Value;
      });

      //setter method for Field 6 Label in the group:Add Address Fields
      defineSetter(this, "addAddressField6Lbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._addAddressField6Lbl=val;
        }
      });

      //getter method for Field 6 Label in the group:Add Address Fields
      defineGetter(this, "addAddressField6Lbl", function() {
        return this._addAddressField6Lbl;
      });

      //setter method for Secondary fields in the group:Skins
      defineSetter(this, "sknSecondaryFields", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknSecondaryFields=val;
        }
      });

      //getter method for Secondary fields in the group:Skins
      defineGetter(this, "sknSecondaryFields", function() {
        return this._sknSecondaryFields;
      });

      //setter method for clear in the group:Icons
      defineSetter(this, "iconClear", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconClear=val;
        }
      });

      //getter method for clear in the group:Icons
      defineGetter(this, "iconClear", function() {
        return this._iconClear;
      });

      //setter method for Field 3 Label in the group:Verify Details
      defineSetter(this, "verifyField3Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField3Label=val;
        }
      });

      //getter method for Field 3 Label in the group:Verify Details
      defineGetter(this, "verifyField3Label", function() {
        return this._verifyField3Label;
      });

      //setter method for Field 6 Value in the group:Add Address Fields
      defineSetter(this, "addAddressField6Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._addAddressField6Value=val;
        }
      });

      //getter method for Field 6 Value in the group:Add Address Fields
      defineGetter(this, "addAddressField6Value", function() {
        return this._addAddressField6Value;
      });

      //setter method for Row separator in the group:Skins
      defineSetter(this, "sknRowSeparator", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknRowSeparator=val;
        }
      });

      //getter method for Row separator in the group:Skins
      defineGetter(this, "sknRowSeparator", function() {
        return this._sknRowSeparator;
      });

      //setter method for Confirmation Tick in the group:Icons
      defineSetter(this, "iconConfirmationTick", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconConfirmationTick=val;
        }
      });

      //getter method for Confirmation Tick in the group:Icons
      defineGetter(this, "iconConfirmationTick", function() {
        return this._iconConfirmationTick;
      });

      //setter method for Field 3 Value in the group:Verify Details
      defineSetter(this, "verifyField3Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField3Value=val;
        }
      });

      //getter method for Field 3 Value in the group:Verify Details
      defineGetter(this, "verifyField3Value", function() {
        return this._verifyField3Value;
      });

      //setter method for Field 7 Label in the group:Add Address Fields
      defineSetter(this, "addAddressField7Lbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._addAddressField7Lbl=val;
        }
      });

      //getter method for Field 7 Label in the group:Add Address Fields
      defineGetter(this, "addAddressField7Lbl", function() {
        return this._addAddressField7Lbl;
      });

      //setter method for Row skin in the group:Skins
      defineSetter(this, "sknRow", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknRow=val;
        }
      });

      //getter method for Row skin in the group:Skins
      defineGetter(this, "sknRow", function() {
        return this._sknRow;
      });

      //setter method for Currency Selection Arrow in the group:Icons
      defineSetter(this, "iconCurrencySelection", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconCurrencySelection=val;
        }
      });

      //getter method for Currency Selection Arrow in the group:Icons
      defineGetter(this, "iconCurrencySelection", function() {
        return this._iconCurrencySelection;
      });

      //setter method for Field 4 Label in the group:Verify Details
      defineSetter(this, "verifyField4Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField4Label=val;
        }
      });

      //getter method for Field 4 Label in the group:Verify Details
      defineGetter(this, "verifyField4Label", function() {
        return this._verifyField4Label;
      });

      //setter method for Field 7 Value in the group:Add Address Fields
      defineSetter(this, "addAddressField7Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._addAddressField7Value=val;
        }
      });

      //getter method for Field 7 Value in the group:Add Address Fields
      defineGetter(this, "addAddressField7Value", function() {
        return this._addAddressField7Value;
      });

      //setter method for Segment shadow in the group:Skins
      defineSetter(this, "sknSegmentShadow", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknSegmentShadow=val;
        }
      });

      //getter method for Segment shadow in the group:Skins
      defineGetter(this, "sknSegmentShadow", function() {
        return this._sknSegmentShadow;
      });

      //setter method for Download  in the group:Icons
      defineSetter(this, "iconDownload", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconDownload=val;
        }
      });

      //getter method for Download  in the group:Icons
      defineGetter(this, "iconDownload", function() {
        return this._iconDownload;
      });

      //setter method for Field 4 Value in the group:Verify Details
      defineSetter(this, "verifyField4Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField4Value=val;
        }
      });

      //getter method for Field 4 Value in the group:Verify Details
      defineGetter(this, "verifyField4Value", function() {
        return this._verifyField4Value;
      });

      //setter method for Field 8 Label in the group:Add Address Fields
      defineSetter(this, "addAddressField8Lbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._addAddressField8Lbl=val;
        }
      });

      //getter method for Field 8 Label in the group:Add Address Fields
      defineGetter(this, "addAddressField8Lbl", function() {
        return this._addAddressField8Lbl;
      });

      //setter method for Disable Button Skin in the group:Skins
      defineSetter(this, "sknDisabledContexualBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknDisabledContexualBtn=val;
        }
      });

      //getter method for Disable Button Skin in the group:Skins
      defineGetter(this, "sknDisabledContexualBtn", function() {
        return this._sknDisabledContexualBtn;
      });

      //setter method for Confirmation Error  in the group:Icons
      defineSetter(this, "iconConfirmationError", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconConfirmationError=val;
        }
      });

      //getter method for Confirmation Error  in the group:Icons
      defineGetter(this, "iconConfirmationError", function() {
        return this._iconConfirmationError;
      });

      //setter method for Field 5 Label in the group:Verify Details
      defineSetter(this, "verifyField5Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField5Label=val;
        }
      });

      //getter method for Field 5 Label in the group:Verify Details
      defineGetter(this, "verifyField5Label", function() {
        return this._verifyField5Label;
      });

      //setter method for Field 8 Value in the group:Add Address Fields
      defineSetter(this, "addAddressField8Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._addAddressField8Value=val;
        }
      });

      //getter method for Field 8 Value in the group:Add Address Fields
      defineGetter(this, "addAddressField8Value", function() {
        return this._addAddressField8Value;
      });

      //setter method for Input Box Placeholder in the group:Skins
      defineSetter(this, "sknInputBoxPlaceholder", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknInputBoxPlaceholder=val;
        }
      });

      //getter method for Input Box Placeholder in the group:Skins
      defineGetter(this, "sknInputBoxPlaceholder", function() {
        return this._sknInputBoxPlaceholder;
      });

      //setter method for Group Expand  in the group:Icons
      defineSetter(this, "iconGroupExpand", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconGroupExpand=val;
        }
      });

      //getter method for Group Expand  in the group:Icons
      defineGetter(this, "iconGroupExpand", function() {
        return this._iconGroupExpand;
      });

      //setter method for Field 5 Value in the group:Verify Details
      defineSetter(this, "verifyField5Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField5Value=val;
        }
      });

      //getter method for Field 5 Value in the group:Verify Details
      defineGetter(this, "verifyField5Value", function() {
        return this._verifyField5Value;
      });

      //setter method for Add Address Button in the group:Add Address Fields
      defineSetter(this, "addAddressBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._addAddressBtn=val;
        }
      });

      //getter method for Add Address Button in the group:Add Address Fields
      defineGetter(this, "addAddressBtn", function() {
        return this._addAddressBtn;
      });

      //setter method for Add Address Button in the group:Add Address Fields
      defineSetter(this, "addAddressErrorMsg", function(val) {
        if((typeof val=='string') && (val != "")){
          this._addAddressErrorMsg=val;
        }
      });

      //getter method for Add Address Error Message in the group:Add Address Fields
      defineGetter(this, "addAddressErrorMsg", function() {
        return this._addAddressErrorMsg;
      });
      //setter method for Input Box Border in the group:Skins
      defineSetter(this, "sknInputBoxBorder", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknInputBoxBorder=val;
        }
      });

      //getter method for Input Box Border in the group:Skins
      defineGetter(this, "sknInputBoxBorder", function() {
        return this._sknInputBoxBorder;
      });

      //setter method for Group Collapse in the group:Icons
      defineSetter(this, "iconGroupCollapse", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconGroupCollapse=val;
        }
      });

      //getter method for Group Collapse in the group:Icons
      defineGetter(this, "iconGroupCollapse", function() {
        return this._iconGroupCollapse;
      });

      //setter method for Field 6 Label in the group:Verify Details
      defineSetter(this, "verifyField6Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField6Label=val;
        }
      });

      //getter method for Field 6 Label in the group:Verify Details
      defineGetter(this, "verifyField6Label", function() {
        return this._verifyField6Label;
      });

      //setter method for Box Skin in the group:Skins
      defineSetter(this, "boxSkn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._boxSkn=val;
        }
      });

      //getter method for Box Skin in the group:Skins
      defineGetter(this, "boxSkn", function() {
        return this._boxSkn;
      });

      //setter method for InActive in the group:Icons
      defineSetter(this, "iconInactive", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconInactive=val;
        }
      });

      //getter method for InActive in the group:Icons
      defineGetter(this, "iconInactive", function() {
        return this._iconInactive;
      });

      //setter method for Field 6 Value in the group:Verify Details
      defineSetter(this, "verifyField6Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField6Value=val;
        }
      });

      //getter method for Field 6 Value in the group:Verify Details
      defineGetter(this, "verifyField6Value", function() {
        return this._verifyField6Value;
      });

      //setter method for Selected Box Skin in the group:Skins
      defineSetter(this, "selectedBoxSkn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._selectedBoxSkn=val;
        }
      });

      //getter method for Selected Box Skin in the group:Skins
      defineGetter(this, "selectedBoxSkn", function() {
        return this._selectedBoxSkn;
      });

      //setter method for Info in the group:Icons
      defineSetter(this, "iconInfo", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconInfo=val;
        }
      });

      //getter method for Info in the group:Icons
      defineGetter(this, "iconInfo", function() {
        return this._iconInfo;
      });

      //setter method for Field 7 Label in the group:Verify Details
      defineSetter(this, "verifyField7Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField7Label=val;
        }
      });

      //getter method for Field 7 Label in the group:Verify Details
      defineGetter(this, "verifyField7Label", function() {
        return this._verifyField7Label;
      });

      //setter method for Title Skin in the group:Skins
      defineSetter(this, "titleSkn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._titleSkn=val;
        }
      });

      //getter method for Title Skin in the group:Skins
      defineGetter(this, "titleSkn", function() {
        return this._titleSkn;
      });

      //setter method for Search in the group:Icons
      defineSetter(this, "iconSearch", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconSearch=val;
        }
      });

      //getter method for Search in the group:Icons
      defineGetter(this, "iconSearch", function() {
        return this._iconSearch;
      });

      //setter method for Field 7 Value in the group:Verify Details
      defineSetter(this, "verifyField7Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField7Value=val;
        }
      });

      //getter method for Field 7 Value in the group:Verify Details
      defineGetter(this, "verifyField7Value", function() {
        return this._verifyField7Value;
      });

      //setter method for Description Skin in the group:Skins
      defineSetter(this, "descriptionSkn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._descriptionSkn=val;
        }
      });

      //getter method for Description Skin in the group:Skins
      defineGetter(this, "descriptionSkn", function() {
        return this._descriptionSkn;
      });

      //setter method for Field 8 Label in the group:Verify Details
      defineSetter(this, "verifyField8Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField8Label=val;
        }
      });

      //getter method for Field 8 Label in the group:Verify Details
      defineGetter(this, "verifyField8Label", function() {
        return this._verifyField8Label;
      });

      //setter method for Look Up Button Skin in the group:Skins
      defineSetter(this, "lookUpSkn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lookUpSkn=val;
        }
      });

      //getter method for Look Up Button Skin in the group:Skins
      defineGetter(this, "lookUpSkn", function() {
        return this._lookUpSkn;
      });

      //setter method for Personal in the group:Icons
      defineSetter(this, "iconPersonal", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconPersonal=val;
        }
      });

      //getter method for Personal in the group:Icons
      defineGetter(this, "iconPersonal", function() {
        return this._iconPersonal;
      });

      //setter method for Field 8 Value in the group:Verify Details
      defineSetter(this, "verifyField8Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField8Value=val;
        }
      });

      //getter method for Field 8 Value in the group:Verify Details
      defineGetter(this, "verifyField8Value", function() {
        return this._verifyField8Value;
      });

      //setter method for Success Label in the group:Skins
      defineSetter(this, "successLabelSkn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._successLabelSkn=val;
        }
      });

      //getter method for Success Label in the group:Skins
      defineGetter(this, "successLabelSkn", function() {
        return this._successLabelSkn;
      });

      //setter method for Field 9 Label in the group:Verify Details
      defineSetter(this, "verifyField9Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField9Label=val;
        }
      });

      //getter method for Field 9 Label in the group:Verify Details
      defineGetter(this, "verifyField9Label", function() {
        return this._verifyField9Label;
      });

      //setter method for Error Validation Skin in the group:Skins
      defineSetter(this, "errorValidationSkn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._errorValidationSkn=val;
        }
      });

      //getter method for Error Validation Skin in the group:Skins
      defineGetter(this, "errorValidationSkn", function() {
        return this._errorValidationSkn;
      });

      //setter method for TextBox normal Skin in the group:Skins
      defineSetter(this, "textBoxNormalSkin", function(val) {
        if((typeof val=='string') && (val != "")){
          this._textBoxNormalSkin=val;
        }
      });

      //getter method for TextBox normal Skin in the group:Skins
      defineGetter(this, "textBoxNormalSkin", function() {
        return this._textBoxNormalSkin;
      });

      //setter method for TextBox normal Skin in the group:Skins
      defineSetter(this, "textBoxErrorSkin", function(val) {
        if((typeof val=='string') && (val != "")){
          this._textBoxErrorSkin=val;
        }
      });

      //getter method for TextBox normal Skin in the group:Skins
      defineGetter(this, "textBoxErrorSkin", function() {
        return this._textBoxErrorSkin;
      });
      //setter method for Field 9 Value in the group:Verify Details
      defineSetter(this, "verifyField9Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField9Value=val;
        }
      });

      //getter method for Field 9 Value in the group:Verify Details
      defineGetter(this, "verifyField9Value", function() {
        return this._verifyField9Value;
      });

      //setter method for Field 10 Label in the group:Verify Details
      defineSetter(this, "verifyField10Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField10Label=val;
        }
      });

      //getter method for Field 10 Label in the group:Verify Details
      defineGetter(this, "verifyField10Label", function() {
        return this._verifyField10Label;
      });

      //setter method for Field 10 Value in the group:Verify Details
      defineSetter(this, "verifyField10Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField10Value=val;
        }
      });

      //getter method for Field 10 Value in the group:Verify Details
      defineGetter(this, "verifyField10Value", function() {
        return this._verifyField10Value;
      });

      //setter method for Field 11 Label in the group:Verify Details
      defineSetter(this, "verifyField11Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField11Label=val;
        }
      });

      //getter method for Field 11 Label in the group:Verify Details
      defineGetter(this, "verifyField11Label", function() {
        return this._verifyField11Label;
      });

      //setter method for Field 11 Value in the group:Verify Details
      defineSetter(this, "verifyField11Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField11Value=val;
        }
      });

      //getter method for Field 11 Value in the group:Verify Details
      defineGetter(this, "verifyField11Value", function() {
        return this._verifyField11Value;
      });

      //setter method for Field 12 Label in the group:Verify Details
      defineSetter(this, "verifyField12Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField12Label=val;
        }
      });

      //getter method for Field 12 Label in the group:Verify Details
      defineGetter(this, "verifyField12Label", function() {
        return this._verifyField12Label;
      });

      //setter method for Field 12 Value in the group:Verify Details
      defineSetter(this, "verifyField12Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField12Value=val;
        }
      });

      //getter method for Field 12 Value in the group:Verify Details
      defineGetter(this, "verifyField12Value", function() {
        return this._verifyField12Value;
      });

      //setter method for Field 13 Label in the group:Verify Details
      defineSetter(this, "verifyField13Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField13Label=val;
        }
      });

      //getter method for Field 13 Label in the group:Verify Details
      defineGetter(this, "verifyField13Label", function() {
        return this._verifyField13Label;
      });

      //setter method for Field 13 Value in the group:Verify Details
      defineSetter(this, "verifyField13Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField13Value=val;
        }
      });

      //getter method for Field 13 Value in the group:Verify Details
      defineGetter(this, "verifyField13Value", function() {
        return this._verifyField13Value;
      });

      //setter method for Field 14 Label in the group:Verify Details
      defineSetter(this, "verifyField14Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField14Label=val;
        }
      });

      //getter method for Field 14 Label in the group:Verify Details
      defineGetter(this, "verifyField14Label", function() {
        return this._verifyField14Label;
      });

      //setter method for Field 14 Value in the group:Verify Details
      defineSetter(this, "verifyField14Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField14Value=val;
        }
      });

      //getter method for Field 14 Value in the group:Verify Details
      defineGetter(this, "verifyField14Value", function() {
        return this._verifyField14Value;
      });

      //setter method for Field 15 Label in the group:Verify Details
      defineSetter(this, "verifyField15Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField15Label=val;
        }
      });

      //getter method for Field 15 Label in the group:Verify Details
      defineGetter(this, "verifyField15Label", function() {
        return this._verifyField15Label;
      });

      //setter method for Field 15 Value in the group:Verify Details
      defineSetter(this, "verifyField15Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField15Value=val;
        }
      });

      //getter method for Field 15 Value in the group:Verify Details
      defineGetter(this, "verifyField15Value", function() {
        return this._verifyField15Value;
      });

      //setter method for Field 16 Label in the group:Verify Details
      defineSetter(this, "verifyField16Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField16Label=val;
        }
      });

      //getter method for Field 16 Label in the group:Verify Details
      defineGetter(this, "verifyField16Label", function() {
        return this._verifyField16Label;
      });

      //setter method for Field 16 Value in the group:Verify Details
      defineSetter(this, "verifyField16Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField16Value=val;
        }
      });

      //getter method for Field 16 Value in the group:Verify Details
      defineGetter(this, "verifyField16Value", function() {
        return this._verifyField16Value;
      });

      //setter method for Field 17 Label in the group:Verify Details
      defineSetter(this, "verifyField17Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField17Label=val;
        }
      });

      //getter method for Field 17 Label in the group:Verify Details
      defineGetter(this, "verifyField17Label", function() {
        return this._verifyField17Label;
      });

      //setter method for Field 17 Value in the group:Verify Details
      defineSetter(this, "verifyField17Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField17Value=val;
        }
      });

      //getter method for Field 17 Value in the group:Verify Details
      defineGetter(this, "verifyField17Value", function() {
        return this._verifyField17Value;
      });

      //setter method for Field 18 Label in the group:Verify Details
      defineSetter(this, "verifyField18Label", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField18Label=val;
        }
      });

      //getter method for Field 18 Label in the group:Verify Details
      defineGetter(this, "verifyField18Label", function() {
        return this._verifyField18Label;
      });

      //setter method for Field 18 Value in the group:Verify Details
      defineSetter(this, "verifyField18Value", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyField18Value=val;
        }
      });

      //getter method for Field 18 Value in the group:Verify Details
      defineGetter(this, "verifyField18Value", function() {
        return this._verifyField18Value;
      });

      //setter method for Transfer Charges Label in the group:Verify Details
      defineSetter(this, "transferChargesLbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._transferChargesLbl=val;
        }
      });

      //getter method for Transfer Charges Label in the group:Verify Details
      defineGetter(this, "transferChargesLbl", function() {
        return this._transferChargesLbl;
      });

      //setter method for Transfer Charges Value in the group:Verify Details
      defineSetter(this, "transferChargesValue", function(val) {
        if((typeof val=='string') && (val != "")){
          this._transferChargesValue=val;
        }
      });

      //getter method for Transfer Charges Value in the group:Verify Details
      defineGetter(this, "transferChargesValue", function() {
        return this._transferChargesValue;
      });

      //setter method for Broker Fee Label in the group:Verify Details
      defineSetter(this, "brockedFee", function(val) {
        if((typeof val=='string') && (val != "")){
          this._brockedFee=val;
        }
      });

      //getter method for Broker Fee Label in the group:Verify Details
      defineGetter(this, "brockedFee", function() {
        return this._brockedFee;
      });

      //setter method for Broker Fee Value in the group:Verify Details
      defineSetter(this, "brokerValue", function(val) {
        if((typeof val=='string') && (val != "")){
          this._brokerValue=val;
        }
      });

      //getter method for Broker Fee Value in the group:Verify Details
      defineGetter(this, "brokerValue", function() {
        return this._brokerValue;
      });

      //setter method for Transfer Fee Label in the group:Verify Details
      defineSetter(this, "transferFee", function(val) {
        if((typeof val=='string') && (val != "")){
          this._transferFee=val;
        }
      });

      //getter method for Transfer Fee Label in the group:Verify Details
      defineGetter(this, "transferFee", function() {
        return this._transferFee;
      });

      //setter method for Transfer Fee Value in the group:Verify Details
      defineSetter(this, "transferFeeValue", function(val) {
        if((typeof val=='string') && (val != "")){
          this._transferFeeValue=val;
        }
      });

      //getter method for Transfer Fee Value in the group:Verify Details
      defineGetter(this, "transferFeeValue", function() {
        return this._transferFeeValue;
      });

      //setter method for Verify Button in the group:Verify Details
      defineSetter(this, "verifyTransferBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._verifyTransferBtn=val;
        }
      });

      //getter method for Verify Button in the group:Verify Details
      defineGetter(this, "verifyTransferBtn", function() {
        return this._verifyTransferBtn;
      });

      //setter method for sknCurrecyLbl in the group:sknCurrecyLbl
      defineSetter(this, "sknQuestionLbl", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknQuestionLbl=val;
        }
      });

      //getter method for sknCurrecyLbl in the group:sknCurrecyLbl
      defineGetter(this, "sknQuestionLbl", function() {
        return this._sknQuestionLbl;
      });

      //setter method for otherAmtBtn in the group:otherAmtBtn
      defineSetter(this, "otherAmtBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._otherAmtBtn=val;
        }
      });

      //getter method for otherAmtBtn in the group:otherAmtBtn
      defineGetter(this, "otherAmtBtn", function() {
        return this._otherAmtBtn;
      });

      //setter method for otherAmtHeader in the group:otherAmtHeader
      defineSetter(this, "otherAmtHeader", function(val) {
        if((typeof val=='string') && (val != "")){
          this._otherAmtHeader=val;
        }
      });

      //getter method for otherAmtHeader in the group:otherAmtHeader
      defineGetter(this, "otherAmtHeader", function() {
        return this._otherAmtHeader;
      }); 
	  
	       //setter method for lblBICSwiftQuestion in the group:lblBICSwiftQuestion
      defineSetter(this, "lblBICSwiftQuestion", function(val) {
        if((typeof val=='string') && (val != "")){
          this._lblBICSwiftQuestion=val;
        }
      });

      //getter method for lblBICSwiftQuestion in the group:lblBICSwiftQuestion
      defineGetter(this, "lblBICSwiftQuestion", function() {
        return this._lblBICSwiftQuestion;
      }); 
       //setter method for swiftSrchObjServiceName in the group:swiftSrchObjServiceName
      defineSetter(this, "swiftSrchObjServiceName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._swiftSrchObjServiceName=val;
        }
      });

      //getter method for swiftSrchObjServiceName in the group:swiftSrchObjServiceName
      defineGetter(this, "swiftSrchObjServiceName", function() {
        return this._swiftSrchObjServiceName;
      }); 

       //setter method for iconSelectGrnTick in the group:iconSelectGrnTick
      defineSetter(this, "iconSelectGrnTick", function(val) {
        if((typeof val=='string') && (val != "")){
          this._iconSelectGrnTick=val;
        }
      });

      //getter method for iconSelectGrnTick in the group:iconSelectGrnTick
      defineGetter(this, "iconSelectGrnTick", function() {
        return this._iconSelectGrnTick;
      }); 
      
       //setter method for sknSegOptionNotSelected in the group:sknSegOptionNotSelected
      defineSetter(this, "sknSegOptionNotSelected", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknSegOptionNotSelected=val;
        }
      });

      //getter method for sknSegOptionNotSelected in the group:sknSegOptionNotSelected
      defineGetter(this, "sknSegOptionNotSelected", function() {
        return this._sknSegOptionNotSelected;
      }); 

             //setter method for sknSegOptionSelected in the group:sknSegOptionSelected
      defineSetter(this, "sknSegOptionSelected", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknSegOptionSelected=val;
        }
      });

      //getter method for sknSegOptionSelected in the group:sknSegOptionSelected
      defineGetter(this, "sknSegOptionSelected", function() {
        return this._sknSegOptionSelected;
      }); 
	  
	  //setter method for sknSegCurrencyValues in the group:sknSegCurrencyValues
        defineSetter(this, "sknSegCurrencyValues", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknSegCurrencyValues=val;
        }
      });

      //getter method for sknSegCurrencyValues in the group:sknSegCurrencyValues
      defineGetter(this, "sknSegCurrencyValues", function() {
        return this._sknSegCurrencyValues;
      }); 
      
      //setter method for _sknFeesPaidOptionHeader in the group:_sknFeesPaidOptionHeader
        defineSetter(this, "sknFeesPaidOptionHeader", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknFeesPaidOptionHeader=val;
        }
      });

      //getter method for sknFeesPaidOptionHeader in the group:sknFeesPaidOptionHeader
      defineGetter(this, "sknFeesPaidOptionHeader", function() {
        return this._sknFeesPaidOptionHeader;
      }); 
      
       //setter method for sknFeesPaidOptionDescription in the group:sknFeesPaidOptionDescription
        defineSetter(this, "sknFeesPaidOptionDescription", function(val) {
        if((typeof val=='string') && (val != "")){
          this._sknFeesPaidOptionDescription=val;
        }
      });

      //getter method for sknFeesPaidOptionDescription in the group:sknFeesPaidOptionDescription
      defineGetter(this, "sknFeesPaidOptionDescription", function() {
        return this._sknFeesPaidOptionDescription;
      }); 
      
      
                   //setter method for btnUseSwift in the group:btnUseSwift
      defineSetter(this, "btnUseSwift", function(val) {
        if((typeof val=='string') && (val != "")){
          this._btnUseSwift=val;
        }
      });

      //getter method for btnUseSwift in the group:btnUseSwift
      defineGetter(this, "btnUseSwift", function() {
        return this._btnUseSwift;
      }); 
      
                         //setter method for researchSwiftBtn in the group:researchSwiftBtn
      defineSetter(this, "researchSwiftBtn", function(val) {
        if((typeof val=='string') && (val != "")){
          this._researchSwiftBtn=val;
        }
      });

      //getter method for researchSwiftBtn in the group:researchSwiftBtn
      defineGetter(this, "researchSwiftBtn", function() {
        return this._researchSwiftBtn;
      }); 
	  
	  //setter method for Address Object Service in the group:Address Services (State & Country Related)
      defineSetter(this, "addressObjectService", function(val) {
        if((typeof val=='string') && (val != "")){
          this._addressObjectService=val;
        }
      });

      //getter method for Address Object Service in the group:Address Services (State & Country Related)
      defineGetter(this, "addressObjectService", function() {
        return this._addressObjectService;
      });

      //setter method for Country Object in the group:Address Services (State & Country Related)
      defineSetter(this, "countryObject", function(val) {
        if((typeof val=='string') && (val != "")){
          this._countryObject=val;
        }
      });

      //getter method for Country Object in the group:Address Services (State & Country Related)
      defineGetter(this, "countryObject", function() {
        return this._countryObject;
      });

      //setter method for Get Countries Operation in the group:Address Services (State & Country Related)
      defineSetter(this, "getCountriesOperation", function(val) {
        if((typeof val=='string') && (val != "")){
          this._getCountriesOperation=val;
        }
      });

      //getter method for Get Countries Operation in the group:Address Services (State & Country Related)
      defineGetter(this, "getCountriesOperation", function() {
        return this._getCountriesOperation;
      });

      //setter method for Get Countries Criteria in the group:Address Services (State & Country Related)
      defineSetter(this, "getCountriesCriteria", function(val) {
        if((typeof val=='string') && (val != "")){
          this._getCountriesCriteria=val;
        }
      });

      //getter method for Get Countries Criteria in the group:Address Services (State & Country Related)
      defineGetter(this, "getCountriesCriteria", function() {
        return this._getCountriesCriteria;
      });

      //setter method for Get Countries Identifier in the group:Address Services (State & Country Related)
      defineSetter(this, "getCountriesIdentifier", function(val) {
        if((typeof val=='string') && (val != "")){
          this._getCountriesIdentifier=val;
        }
      });

      //getter method for Get Countries Identifier in the group:Address Services (State & Country Related)
      defineGetter(this, "getCountriesIdentifier", function() {
        return this._getCountriesIdentifier;
      });

      //setter method for States Object in the group:Address Services (State & Country Related)
      defineSetter(this, "statesObject", function(val) {
        if((typeof val=='string') && (val != "")){
          this._statesObject=val;
        }
      });

      //getter method for States Object in the group:Address Services (State & Country Related)
      defineGetter(this, "statesObject", function() {
        return this._statesObject;
      });

      //setter method for Get States Operation in the group:Address Services (State & Country Related)
      defineSetter(this, "getStatesOperation", function(val) {
        if((typeof val=='string') && (val != "")){
          this._getStatesOperation=val;
        }
      });

      //getter method for Get States Operation in the group:Address Services (State & Country Related)
      defineGetter(this, "getStatesOperation", function() {
        return this._getStatesOperation;
      });

      //setter method for Get States Criteria in the group:Address Services (State & Country Related)
      defineSetter(this, "getStatesCriteria", function(val) {
        if((typeof val=='string') && (val != "")){
          this._getStatesCriteria=val;
        }
      });

      //getter method for Get States Criteria in the group:Address Services (State & Country Related)
      defineGetter(this, "getStatesCriteria", function() {
        return this._getStatesCriteria;
      });

      //setter method for Get States Identifier in the group:Address Services (State & Country Related)
      defineSetter(this, "getStatesIdentifier", function(val) {
        if((typeof val=='string') && (val != "")){
          this._getStatesIdentifier=val;
        }
      });

      //getter method for Get States Identifier in the group:Address Services (State & Country Related)
      defineGetter(this, "getStatesIdentifier", function() {
        return this._getStatesIdentifier;
      });
      
      //setter method for listBoxSkin in the group:skins
      defineSetter(this, "listBoxSkin", function(val) {
        if((typeof val=='string') && (val != "")){
          this._listBoxSkin=val;
        }
      });

      //getter method for listBoxSkin in the group:skins
      defineGetter(this, "listBoxSkin", function() {
        return this._listBoxSkin;
      });
      
      //setter method for listBoxFocusSkin in the group:skins
      defineSetter(this, "listBoxFocusSkin", function(val) {
        if((typeof val=='string') && (val != "")){
          this._listBoxFocusSkin=val;
        }
      });

      //getter method for listBoxFocusSkinin the group:skins
      defineGetter(this, "listBoxFocusSkin", function() {
        return this._listBoxFocusSkin;
      });
      
      //setter method for listBoxPlaceHolderSkin in the group:skins
      defineSetter(this, "listBoxPlaceHolderSkin", function(val) {
        if((typeof val=='string') && (val != "")){
          this._listBoxPlaceHolderSkin=val;
        }
      });

      //getter method for listBoxPlaceHolderSkin in the group:skins
      defineGetter(this, "listBoxPlaceHolderSkin", function() {
        return this._listBoxPlaceHolderSkin;
      });
      
      //setter method for listBoxDropDownImage in the group:skins
      defineSetter(this, "listBoxDropDownImage", function(val) {
        if((typeof val=='string') && (val != "")){
          this._listBoxDropDownImage=val;
        }
      });

      //getter method for listBoxDropDownImage in the group:skins
      defineGetter(this, "listBoxDropDownImage", function() {
        return this._listBoxDropDownImage;
      });
      
      //setter method for subTitleSkin in the group:skins
      defineSetter(this, "subTitleSkin", function(val) {
        if((typeof val=='string') && (val != "")){
          this._subTitleSkin=val;
        }
      });

      //getter method for subTitleSkin in the group:skins
      defineGetter(this, "subTitleSkin", function() {
        return this._subTitleSkin;
      });
	        //setter method for retailIcon in the group:retailIcon
      defineSetter(this, "retailIcon", function(val) {
        if((typeof val=='string') && (val != "")){
          this._retailIcon=val;
        }
      });

      //getter method for retailIcon in the group:retailIcon
      defineGetter(this, "retailIcon", function() {
        return this._retailIcon;
      }); 
      
	  //setter method for accNumInputLineSkin in the group:skins
      defineSetter(this, "accNumInputLineSkin", function(val) {
        if((typeof val=='string') && (val != "")){
          this._accNumInputLineSkin=val;
        }
      });

      //getter method for accNumInputLineSkin in the group:skins
      defineGetter(this, "accNumInputLineSkin", function() {
        return this._accNumInputLineSkin;
      });
      
      //setter method for accNumInputFieldSkin in the group:skins
      defineSetter(this, "accNumInputFieldSkin", function(val) {
        if((typeof val=='string') && (val != "")){
          this._accNumInputFieldSkin=val;
        }
      });

      //getter method for accNumInputFieldSkin in the group:skins
      defineGetter(this, "accNumInputFieldSkin", function() {
        return this._accNumInputFieldSkin;				 
      });	
	  
      //setter method for reEnterAccNumInputFieldSkin in the group:skins
      defineSetter(this, "reEnterAccNumInputFieldSkin", function(val) {
        if((typeof val=='string') && (val != "")){
          this._reEnterAccNumInputFieldSkin=val;
        }
      });

      //getter method for reEnterAccNumInputFieldSkin in the group:skins
      defineGetter(this, "reEnterAccNumInputFieldSkin", function() {
        return this._reEnterAccNumInputFieldSkin;
      });
      
      //setter method for addressRestrictCharacterSet in the group:skins
      defineSetter(this, "addressRestrictCharacterSet", function(val) {
        if((typeof val=='string') && (val != "")){
          this._addressRestrictCharacterSet=val;
        }
      });

      //getter method for addressRestrictCharacterSet in the group:skins
      defineGetter(this, "addressRestrictCharacterSet", function() {
        return this._addressRestrictCharacterSet;															
									 
      });
       //setter method for businessIcon in the group:businessIcon
      defineSetter(this, "businessIcon", function(val) {
        if((typeof val=='string') && (val != "")){
          this._businessIcon=val;
        }
      });

      //getter method for businessIcon in the group:businessIcon
      defineGetter(this, "businessIcon", function() {
        return this._businessIcon;
      });
	  
	    //setter method for citiBankImg in the group:citiBankImg
      defineSetter(this, "citiBankImg", function(val) {
        if((typeof val=='string') && (val != "")){
          this._citiBankImg=val;
        }
      });

      //getter method for citiBankImg in the group:citiBankImg
      defineGetter(this, "citiBankImg", function() {
        return this._citiBankImg;
      });  
        //setter method for chaseBankImg in the group:chaseBankImg
      defineSetter(this, "chaseBankImg", function(val) {
        if((typeof val=='string') && (val != "")){
          this._chaseBankImg=val;
        }
      });

      //getter method for chaseBankImg in the group:chaseBankImg
      defineGetter(this, "chaseBankImg", function() {
        return this._chaseBankImg;
      });   
      
      //setter method for boaBankImg in the group:boaBankImg
      defineSetter(this, "boaBankImg", function(val) {
        if((typeof val=='string') && (val != "")){
          this._boaBankImg=val;
        }
      });

      //getter method for boaBankImg in the group:boaBankImg
      defineGetter(this, "boaBankImg", function() {
        return this._boaBankImg;
      });   
      
      //setter method for hdfcBankImg in the group:hdfcBankImg
      defineSetter(this, "hdfcBankImg", function(val) {
        if((typeof val=='string') && (val != "")){
          this._hdfcBankImg=val;
        }
      });

      //getter method for hdfcBankImg in the group:hdfcBankImg
      defineGetter(this, "hdfcBankImg", function() {
        return this._hdfcBankImg;
      });   
      
      //setter method for infinityBankImg in the group:infinityBankImg
      defineSetter(this, "infinityBankImg", function(val) {
        if((typeof val=='string') && (val != "")){
          this._infinityBankImg=val;
        }
      });

      //getter method for infinityBankImg in the group:infinityBankImg
      defineGetter(this, "infinityBankImg", function() {
        return this._infinityBankImg;
      });   
      
       //setter method for externalBankImg in the group:externalBankImg
      defineSetter(this, "externalBankImg", function(val) {
        if((typeof val=='string') && (val != "")){
          this._externalBankImg=val;
        }
      });

      //getter method for externalBankImg in the group:externalBankImg
      defineGetter(this, "externalBankImg", function() {
        return this._externalBankImg;
      });  

            //setter method for IBANObjectServiceName in the group: IBAN Validate Service
      defineSetter(this, "IBANObjectServiceName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._IBANObjectServiceName=val;
        }
      });

      //getter method for IBANObjectServiceName in the group:IBAN Validate Service
      defineGetter(this, "IBANObjectServiceName", function() {
        return this._IBANObjectServiceName;
      });
      //setter method for IBANObjectName in the group: IBAN Validate Service
      defineSetter(this, "IBANObjectName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._IBANObjectName=val;
        }
      });

      //getter method for IBANObjectName in the group:IBAN Validate Service
      defineGetter(this, "IBANObjectName", function() {
        return this._IBANObjectName;
      });

      //setter method for IBANCriteria in the group: IBAN Validate Service
      defineSetter(this, "IBANCriteria", function(val) {
        if((typeof val=='string') && (val != "")){
          this._IBANCriteria=val;
        }
      });

      //getter method for IBANCriteria in the group:IBAN Validate Service
      defineGetter(this, "IBANCriteria", function() {
        return this._IBANCriteria;
      });
      //setter method for IBANOperationName in the group: IBAN Validate Service
      defineSetter(this, "IBANOperationName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._IBANOperationName=val;
        }
      });

      //getter method for IBANOperationName in the group:IBAN Validate Service
      defineGetter(this, "IBANOperationName", function() {
        return this._IBANOperationName;
      });
      //setter method for getBeneficiaryService in the group: Get beneficiaryname service
      defineSetter(this, "getBeneficiaryService", function(val) {
        if((typeof val=='string') && (val != "")){
          this._getBeneficiaryService=val;
        }
      });

      //getter method for getBeneficiaryService in the group: Get beneficiaryname service
      defineGetter(this, "getBeneficiaryService", function() {
        return this._getBeneficiaryService;
      });
      //setter method for getBeneficiaryObject in the group: Get beneficiaryname service
      defineSetter(this, "getBeneficiaryObject", function(val) {
        if((typeof val=='string') && (val != "")){
          this._getBeneficiaryObject=val;
        }
      });

      //getter method for getBeneficiaryObject in the group: Get beneficiaryname service
      defineGetter(this, "getBeneficiaryObject", function() {
        return this._getBeneficiaryObject;
      });
      //setter method for getBeneficiaryOperation in the group: Get beneficiaryname service
      defineSetter(this, "getBeneficiaryOperation", function(val) {
        if((typeof val=='string') && (val != "")){
          this._getBeneficiaryOperation=val;
        }
      });

      //getter method for getBeneficiaryOperation in the group: Get beneficiaryname service
      defineGetter(this, "getBeneficiaryOperation", function() {
        return this._getBeneficiaryOperation;
      });
      //setter method for getBeneficiaryCriteria in the group: Get beneficiaryname service
      defineSetter(this, "getBeneficiaryCriteria", function(val) {
        if((typeof val=='string') && (val != "")){
          this._getBeneficiaryCriteria=val;
        }
      });

      //getter method for getBeneficiaryCriteria in the group: Get beneficiaryname service
      defineGetter(this, "getBeneficiaryCriteria", function() {
        return this._getBeneficiaryCriteria;
      });
	  
	       //setter method for creditcardObjServName in the group:creditcardObjServName
      defineSetter(this, "creditcardObjServName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._creditcardObjServName=val;
        }
      });

      //getter method for creditcardObjServName in the group:creditcardObjServName
      defineGetter(this, "creditcardObjServName", function() {
        return this._creditcardObjServName;
      });  
      //setter method for creaditcardObjectName in the group:creaditcardObjectName
      defineSetter(this, "creaditcardObjectName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._creaditcardObjectName=val;
        }
      });

      //getter method for creaditcardObjectName in the group:creaditcardObjectName
      defineGetter(this, "creaditcardObjectName", function() {
        return this._creaditcardObjectName;
      }); 
      //setter method for creditcardOperationName in the group:creditcardOperationName
      defineSetter(this, "creditcardOperationName", function(val) {
        if((typeof val=='string') && (val != "")){
          this._creditcardOperationName=val;
        }
      });

      //getter method for creditcardOperationName in the group:creditcardOperationName
      defineGetter(this, "creditcardOperationName", function() {
        return this._creditcardOperationName;
      }); 
      //setter method for creditcardCriteria in the group:creditcardCriteria
      defineSetter(this, "creditcardCriteria", function(val) {
        if((typeof val=='string') && (val != "")){
          this._creditcardCriteria=val;
        }
      });

      //getter method for creditcardCriteria in the group:creditcardCriteria
      defineGetter(this, "creditcardCriteria", function() {
        return this._creditcardCriteria;
      });
      //setter method for creditcardResponseIdentifier in the group:creditcardResponseIdentifier
      defineSetter(this, "creditcardResponseIdentifier", function(val) {
        if((typeof val=='string') && (val != "")){
          this._creditcardResponseIdentifier=val;
        }
      });

      //getter method for creditcardResponseIdentifier in the group:creditcardResponseIdentifier
      defineGetter(this, "creditcardResponseIdentifier", function() {
        return this._creditcardResponseIdentifier;
      }); 
	  //setter method for transferAmountHeader in the group:transferAmountHeader
      defineSetter(this, "transferAmountHeader", function(val) {
        if((typeof val=='string') && (val != "")){
          this._transferAmountHeader=val;
        }
      });

      //getter method for transferAmountHeader in the group:transferAmountHeader
      defineGetter(this, "transferAmountHeader", function() {
        return this._transferAmountHeader;
      }); 

    },
    /**
     * Component setContext.
     * To collect the context object required for the component. 
     * @param: context{JSONobject} - account object.
     */
    setContext: function(context) {
      try{
        var scope = this;
        this.context = context;
        this.parserUtilsManager.setContext(context);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setContext method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component getTransferTypeFromContext.
     * To set transfer type from the context object.
     */
    getTransferTypeFromContext :function(){
      try {
        this.transferTypeContext = this.parserUtilsManager.getParsedValue(this._transferType);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in getTransferTypeFromContext method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },

    /**
     * Component preShow
     * Reponsible to retain the data for custom properties for multiple entries into the component
     * Invoke the DAO layer to collect information from the service
     */
    preShow: function() {
      try {
        var scope = this;
        scope.setFlexVisibilty();
        scope.newPayee = false;
        scope.payeeFlow = "";
        scope.dateFlag = 0;
        scope.stack = ['flxFromAccount'];
        scope.getTransferTypeFromContext();
        scope.amountKeyboardDataSetting();
        scope.OtherAmtKeyboardDataSetting();
        scope.getFromAccounts();
        if(scope._enableBankDate)
        {
          scope.getBankDate();
        }
        else
        {
          scope.currentBankDate = this.FormatUtils.getFormatedDateString(new Date(), "m/d/Y");
        }
        scope.storeIconValues();
        scope.view.customCalendar.updateDateBullets = scope.updateDateBullets;
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in preshow method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setFlexVisibilty
     * To set all the flex visbility as off.
     **/
    setFlexVisibilty: function() {
      try {
        var scope = this;
        var widgets = scope.view.widgets();
        for(var i=0; i<widgets.length; i++) {
          widgets[i].isVisible = false;
        }
        scope.stack = [];
        scope.headerTitleStack  = [];
        scope.fileNames = [];
        scope.fileContents = [];
        scope.fileTypes= [];
        scope.selectedFlowType = "";
        scope.view.forceLayout();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setFlexVisibilty method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

     /**
     * Component isDataInContext
     * Verifies if the value is in context or not
     * contextparam {string} - value to be verified
     * @return : {boolean} - validity of the value passed
     */
    isDataInContext: function(contextparam) {
      try {
        var scope = this;
        if(!this.isEmptyNullUndefined(contextparam)) {
          var response = !this.isEmptyNullUndefined(scope.context[contextparam]) ?  true : false;
          return response;
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in isDataInContext method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * @Component : updateContext
     * updates context.
     * @return : NA
     */
    updateContext: function(key, value) {
      try {
        var scope = this;
        if(!scope.isEmptyNullUndefined(key) && !kony.sdk.isNullOrUndefined(value))
        {
          scope.context[key] = value;
          scope.parserUtilsManager.setContext(scope.context);
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in updateContext method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

     /**
     * @Component : enableButton
     * To set skin and enable specific button.
     * @return : NA
     */
    enableButton: function(btnName) {
      try {
        var scope = this;
        scope.view[btnName].setEnabled(true);
        scope.view[btnName].skin = scope.getFieldValue(scope._sknEnableContexualBtn);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in enableButton method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * @Component : disableButton
     * To set skin and disable specific button.
     * @return : NA
     */
    disableButton: function(btnName) {
      try {
        var scope = this;
        scope.view[btnName].setEnabled(false);
        scope.view[btnName].skin = scope.getFieldValue(scope._sknDisabledContexualBtn);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in disableButton method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component getFieldValue
     * Parse the exposed contract value based on accountType selected and breakpoint consideration
     * @param: Value{string} - value collected from exposed contract
     * @param: key{string} - lookup key in the JSON string
     * @return : {string} - Processed value
     */
    getFieldValue: function (Value, key) {
      try {
        var value = Value;
        if (typeof(Value) === "string") {
          value = JSON.parse(Value);
        }
        if (value[this.context["accountType"]]) {
          value = value[this.context["accountType"]];
        }
        if (value["default"]) {
          value = value["default"];
        }
        if (!this.isEmptyNullUndefined(value) && !this.isEmptyNullUndefined(key)) {
          value = value[key];
        }
        if (value !== null && value !== "" && value !== undefined) {
          if (typeof(value) === "string") 
            return this.getProcessedText(value);
          else{
            //var text=this.breakPointParser(value,kony.application.getCurrentBreakpoint());
            return this.getProcessedText(value);
          }

        } else 
          return "";

      } catch (err) {
        kony.print(err);
      }
      return this.getProcessedText(value);
    },

    /**
     * Component setHeaderProperties
     * To make custom header visibility based on platform.
     */
    setHeaderProperties: function(headerFlex) {
      try {
        var scope = this;
         if(kony.os.deviceInfo().name === "iPhone") {
           scope.view[headerFlex].setVisibility(false);
         } else {
           scope.view[headerFlex].setVisibility(true);
         }
        scope.view.forceLayout();
      } catch (err) {
        var errorObj = {
          "errorInfo": "Error in setHeaderProperties method of the component.",
          "errorLevel": "Configuration",
          "error": err
        };
        scope.onError(errorObj);
      } 
    },

    /**
     * Component getFromAccounts
     * Reponsible to call the DAO method for invoking service api.
     */
   getFromAccounts: function () {
      var self = this;
      this.setHeaderProperties("flxFromTop");
     if(kony.os.deviceInfo().name === "iPhone") {
        this.headerTitleStack.push(this.getFieldValue(this._fromAccountsTitle));
     var properties = {
       "stack" : self.stack,
       "headerTitle": self.getFieldValue(self._fromAccountsTitle),
        "cancelText" : !self.isEmptyNullUndefined(self.getFieldValue(self._cancelButton)) ? self.getFieldValue(self._cancelButton) : "",
       "backButtonImage" : self.getFieldValue(self._iconBack)
     }
     self.iPhoneHeaderProps(properties);
     }
      this.setCriteria(this._fromAccountsCriteria);
      try {		
        this.view.flxFromAccount.setVisibility(true);        
        this.onRequestStart();
        this.searchApplied =false;
        this.clearSearchApplied=false;
        this.context.currency="";
        this.selectedCurr="";
        this.isPaymentMethodSelected="";
        this.view.tbxFromSearch.text="";      
        this.view.btnCancel.text = this.getFieldValue(this._cancelButton);
        this.view.btnCancel.onClick = this.onBackButtonClick;
        this.view.flxBack.onTouchStart = function(){
          this.onBackButtonClick();
        }
        this.view.imgFromCloseIcon.setVisibility(false);
        this.view.tbxFromSearch.onTextChange = this.txtBoxOnKeyUp;
        this.view.imgFromCloseIcon.onTouchStart = this.clearTextBoxTexts;
        this.view.flxFromHeader.skin=this.getFieldValue(this._sknHeaderBg);
        this.view.imgBack.src=this.getFieldValue(this._iconBack);
        this.view.lblTransferFrom.text = this.getFieldValue(this._fromAccountsTitle);
        this.view.lblTransferFrom.skin = this.getFieldValue(this._sknHeaderLbl);       
        this.view.imgFromSearch.src=this.getFieldValue(this._iconSearch);
        this.view.tbxFromSearch.skin=this.getFieldValue(this._sknSearchBox);
        this.view.imgFromCloseIcon.src=this.getFieldValue(this._iconSearchClose);
        this.view.flxFromDescription.skin=this.getFieldValue(this._sknDescriptionBg);
        this.view.lblFromDescription.text = this.getFieldValue(this._fromdescriptionLabel);
        this.view.lblFromDescription.skin = this.getFieldValue(this._sknDescriptionLbl);
        this.view.flxSeparator.skin=this.getFieldValue(this._sknDescriptionSeparator);           
        this.UnifiedTransferDAO.fetchAccounts(this._fromObjectServiceName, this._fromAccountOperationName, this._fromAccountObjectName, this.getCriteria(), this._dataIdentifier, this.setFromAccountsData, this.fromFailureValidation);

      } catch (err) {
        var errorObj = {
          "errorInfo": "Error in doing service call to fetch transactions",
          "errorLevel": "Business",
          "error": err
        };
        self.onError(errorObj);
      }
    },
    
    
	 /**
     * Component failureValidation
     * Responsible to process the failureValidation
     */
    fromFailureValidation : function(response)
    {
      var scope = this;
      try{
         scope.view.segFromAccounts.setVisibility(false);
          scope.view.flxFromNoResults.setVisibility(true);
        scope.onRequestEnd();
        this.dataProcessorUtility.showToastMessageError(scope, kony.i18n.getLocalizedString("kony.error.StandardErrorMessage"));
      }
      catch(err) {
        scope.onRequestEnd();
        var errObj = {
          "errorInfo" : "Error in failureValidation method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
	
    /**     
	 * Component setFromAccountsData
     * To generate the JSONpath for service response
     * response{JSONObject} - response received from the backend
     * unicode{string}      - unique code to identify the service response in case of multiple service calls.
     */
	setFromAccountsData: function (response,unicode) {
      var scope = this;
      try{
       
        if(response!=null||response!=undefined){
          scope.view.btnCancel.onClick = function()
          {  this.clearSearchApplied = false;
           scope.onBackButtonClick();
          }
          scope.view.flxBack.onTouchStart = function(){
            this.clearSearchApplied = false;
            scope.onBackButtonClick();
          }
          this.segmentData='';
          scope.view.btnCancel.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)) ? true : false;
          scope.view.btnCancel.text = scope.getFieldValue(scope._cancelButton);
           scope.view.tbxFromSearch.placeholder = scope.getFieldValue(scope._searchProperties, "placeHolder");     
          this.view.tbxFromSearch.onTextChange = this.txtBoxOnKeyUp;
          this.view.imgFromCloseIcon.onTouchStart = this.clearTextBoxTexts;
          this.view.flxFromHeader.skin=this.getFieldValue(this._sknHeaderBg);
          this.view.imgBack.src=this.getFieldValue(this._iconBack);
          this.view.lblTransferFrom.text = this.getFieldValue(this._fromAccountsTitle);
          this.view.lblTransferFrom.skin = this.getFieldValue(this._sknHeaderLbl);       
          this.view.imgFromSearch.src=this.getFieldValue(this._iconSearch);
          this.view.tbxFromSearch.skin=this.getFieldValue(scope._sknSearchBox);
          this.view.imgFromCloseIcon.src=this.getFieldValue(this._iconSearchClose);
          this.view.flxFromDescription.skin=this.getFieldValue(this._sknDescriptionBg);
          this.view.lblFromDescription.text = this.getFieldValue(this._fromdescriptionLabel);
          this.view.lblFromDescription.skin = this.getFieldValue(this._sknDescriptionLbl);
          this.view.flxSeparator.skin=this.getFieldValue(scope._sknDescriptionSeparator); 
          var transferType = scope.getFieldValue(scope._flowType);
          if(!scope.isEmptyNullUndefined(scope.context["fromAccountNumber"])&& transferType[scope.selectedFlowType] === "EDIT")  {            
            this.view.segFromAccounts.widgetDataMap = scope.backUpFromAccountMapping;
            this.view.segFromAccounts.setData(scope.backUpFromAccountList);
            this.view.flxFromAccount.segFromAccounts.onRowClick = this.selectFromAccount;
          }
          else if(!scope.isEmptyNullUndefined(scope.context["fromAccountNumber"])&& this.amountSelectedFlowType === "From")  {            
            this.view.segFromAccounts.widgetDataMap = scope.backUpFromAccountMapping;
            this.view.segFromAccounts.setData(scope.backUpFromAccountList);
            this.view.flxFromAccount.segFromAccounts.onRowClick = this.selectFromAccount;
          }
          else if(this.searchApplied !=true && this.clearSearchApplied!=true){
            if(transferType[scope.selectedFlowType] !== "EDIT" && this.amountSelectedFlowType !== "From") {
              this.response=response;
            }
            this.fromUnicode=unicode;         
            this.map = {};
            this.readObject(response);
            this.parserUtilsManager.setResponseData(unicode,this.map);
            var record={};     
            var data = [];
            var responseObj=response[this._fromAccountObjectName];
            var Valuekeys = Object.keys(responseObj).length;
            var fieldValue;
            var fromAccountsList= scope.groupResponseData(response[this._fromAccountObjectName],"accountType");
            var keys = Object.keys(fromAccountsList);
            if (keys.length !== 0) 
              if (Valuekeys !== 0) 
                var j=0;   
            for (j = 0; j < Valuekeys; j ++)
            {
              record={};         
              for (i = 0; i < 4; i ++)
              {
                var fieldValue=scope.getFieldValue((eval("scope._fromField"+(i+1)+"Value")));
                var labelType = scope.getFieldValue(eval("this._fromField"+(i+1)+"Value"),"labelType");
                var fieldType = scope.getFieldValue(eval("this._fromField"+(i+1)+"Value"),"fieldType");
                if(labelType=="Value")
                {
                  if(fieldType=="AccountName")
                  {
                    var accountName=scope.getFormattedData(fieldValue,responseObj[j]);
                    record["lblField"+(i+1)] = {
                      "text":accountName,
                      "skin":this._sknPrimaryField1
                    };
                    record["formattedFromAccountName"] = accountName;                  
                  }
                  else
                    if(fieldType=="Amount")
                    {
                      if(responseObj[j]["accountType"]=="CreditCard")
                      {this.context["accountType"]=="CreditCard";
                       var fieldValue=scope.getFieldValue((eval("scope._fromField"+(i+1)+"Value","Checking")));					
                       this.context["accountType"]="";
                      }
                      else if(responseObj[j]["accountType"]=="Loan")
                      {this.context["accountType"]="Loan";
                       var fieldValue=scope.getFieldValue((eval("scope._fromField"+(i+1)+"Value","Loan")));
                       this.context["accountType"]="";
                      }
                      var amount=scope.getFormattedData(fieldValue,responseObj[j]);
                      record["fromAvailableBalance"] = amount;             
                      record["lblField"+(i+1)] = {
                        "text":amount,
                         "skin":this._sknPrimaryField1
                      };
                    }
                  else{
                    record["lblField"+(i+1)] = {
                      "text" : responseObj[j][fieldValue.text],
                       "skin":this._sknSecondaryFields
                     
                    };
                    var bankIcon = (!kony.sdk.isNullOrUndefined(this.getBankIcon(responseObj[j].bankName)))?this.getBankIcon(responseObj[j].bankName):null;
                    record["imgIcon"+(i+1)+"1"]={
                      "src" :bankIcon,
                      "isVisible": responseObj[j].isSameBankAccount === "false" && !kony.sdk.isNullOrUndefined(bankIcon) ? true : false
                    };
                    var businessAccount=this.isBusinessAccount(responseObj);
                    var retailAccount=this.isRetailAccount(responseObj);
                    if(businessAccount !=0 && retailAccount!=0){
                      if(responseObj[j].isBusinessAccount==="true" || responseObj[j].isBusinessPayee==="1"){
                        record["imgIcon3"]={
                          "src":this.getFieldValue(this._businessIcon),
                          "isVisible":!this.isEmptyNullUndefined(this.getFieldValue(this._businessIcon))
                        };
                      }else if(responseObj[j].isBusinessAccount=== undefined && responseObj[j].isBusinessPayee===undefined){
                        record["imgIcon3"]={
                          "isVisible": false
                        };

                      }else{
                        record["imgIcon3"]={
                          "src":this.getFieldValue(this._retailIcon),
                          "isVisible":!this.isEmptyNullUndefined(this.getFieldValue(this._retailIcon))
                        };
                      }
                    }
                    if( (!this.isEmptyNullUndefined(record["imgIcon31"]) && record["imgIcon31"].isVisible==true) )
                    {        
                      if(!this.isEmptyNullUndefined(record["imgIcon3"]) && record["imgIcon3"].isVisible==true)
                      {
                        record["flxIcon3"]={
                          "width":"46dp"
                        }
                      }
                      else
                      {
                        record["flxIcon3"]={
                          "width":"23dp"
                        }
                      }   
                    }
                    else
                    {
                      if(!this.isEmptyNullUndefined(record["imgIcon3"]) && record["imgIcon3"].isVisible==true)
                      {
                        record["flxIcon3"]={
                          "width":"23dp"
                        }
                      }
                      else
                      {
                        record["flxIcon3"]={
                          "width":"0dp"
                        }
                      }  
                    }
                  }
                }
                else if(this.isEmptyNullUndefined(labelType))
                  {
                     record["lblField"+(i+1)] = {
                      text : "",
                    };
                  }
                else 
                {
                  if(amount=="")
                  {
                    record["lblField"+(i+1)] = {
                      text : "",
                    };
                  }
                  else
                  {
                    record["lblField"+(i+1)] = {
                      "text" : fieldValue.text,
                      "skin":this._sknSecondaryFields                                      
                    };
                  }
                }
                record["fromAccountNumber"] = responseObj[j]["accountID"],
                  record["fromTransactionCurrency"] = responseObj[j]["currencyCode"];
                record["fromAccountName"] =  responseObj[j]["accountName"];
                record["fromAccountType"]=responseObj[j]["accountType"];
                record["fromIsBusinessAccount"]=responseObj[j]["isBusinessAccount"];
                record["fromMembershipName"]=responseObj[j]["MembershipName"];
                record["fromActions"]=responseObj[j]["actions"];
              }
              data.push(record);
            }
            this.recordsArray=data;
            data = this.filterRecordsList();
          }
          else
          {
            data=response;
          }
          if(!scope.isEmptyNullUndefined(scope.context["fromAccountNumber"])&& transferType[scope.selectedFlowType] === "EDIT")  { 
            var sectionData=[];
            if(scope.searchApplied=="false"){
              sectionData=scope.backUpFromAccountList;
            }
            else
            {
              sectionData=response;
              data=response;
              var fromAccountsData=[];       
              sectionData=this.groupBusinessAndRetail(sectionData,data,response);          
            }            
          }
          else{
            var fromAccountsData=[];
            if(data.length==undefined||data.length==null||data.length=="")
            {
              data=data[this._fromAccountObjectName];
            }         
            sectionData=this.groupBusinessAndRetail(sectionData,data,response);             
          }
          dataMapping = {
            "flxUnifiedTransferHeader":"flxUnifiedTransferHeader",
            "flxTransactionsHeader":"flxTransactionsHeader",
            "flxUpShadow":"flxUpShadow",
            "flxIcon1":"flxIcon1",
            "flxIcon2":"flxIcon2",
            "flxIcon3":"flxIcon3",
            "flxIcon4":"flxIcon4",
            "imgIcon1":"imgIcon1",
            "imgIcon2":"imgIcon2",
            "imgIcon3":"imgIcon3",
            "imgIcon31":"imgIcon31",
            "imgIcon4":"imgIcon4",
            "lblHeaderName": "lblHeaderName",
            "lblField1": "lblField1",
            "lblField2": "lblField2",
            "lblField3": "lblField3",
            "lblField4": "lblField4",
            "flxGroup1":"flxGroup1",
            "flxGroup2":"flxGroup2",
            "flxGroup3":"flxGroup3",
            "flxGroup4":"flxGroup4",
            "lblCount":"lblCount",
            "flxSeparator":"flxSeparator",
            "transactionId": "transactionId",
            "flxNoRecords": "flxNoRecords",
            "imgChevron": "imgChevron",
            "lblNoRecords": "lblNoRecords",
            "imgIcon": "imgIcon",
            "flxRow":"flxRow"
          };
          if(this.searchApplied!=true)
          {
            this.backUpFromAccountList=sectionData;
            this.backUpFromAccountMapping=dataMapping;
          }
          scope.view.segFromAccounts.setVisibility(true);
          this.view.segFromAccounts.widgetDataMap = dataMapping;
          this.view.segFromAccounts.setData(sectionData);
          this.view.flxFromAccount.segFromAccounts.onRowClick = this.selectFromAccount;  
        }
        else{
          scope.view.segFromAccounts.setVisibility(false);
          scope.view.flxFromNoResults.setVisibility(true);
        }
        this.view.flxFromAccount.forceLayout();
        this.onRequestEnd();
        return sectionData;
      }catch (err) {
        var errorObj = {
          "errorInfo": "Error in SetFromAccounts",
          "errorLevel": "Configuration",
          "error": err
        };
      }
    },
	 
	 /**     
	 * Component selectFromAccount
     * To pass the selected data to next screen.
     */
    selectFromAccount:function() {
      var scope=this;
      try{
        var selectedData = this.view.segFromAccounts.selectedRowItems; 
        var transferType = scope.getFieldValue(scope._flowType); 
        if(scope.amountSelectedFlowType === "From"  && transferType[scope.selectedFlowType] === "EDIT" ) 
        {
          scope.updateContext("fromAccountName", selectedData[0].formattedFromAccountName);        
          scope.updateContext("fromAccountNumber", selectedData[0].fromAccountNumber);
          scope.updateContext("fromAccountType", selectedData[0].fromAccountType);
          scope.updateContext("fromAvailableBalance", selectedData[0].fromAvailableBalance);
          scope.updateContext("fromAccountCurrency", selectedData[0].fromTransactionCurrency); 
          this.view.tbxFromSearch.text="";
          this.view.imgFromCloseIcon.setVisibility(false);
          this.view.segFromAccounts.widgetDataMap = scope.backUpFromAccountMapping;
          this.view.segFromAccounts.setData(scope.backUpFromAccountList);
          scope.searchApplied="false";
          scope.clearSearchApplied="false";        
          scope.setTransferAmount();
          this.navigateTo("flxAmount","flxAmountTop",this.getFieldValue(this._transferAmountHeader));
        }
        else if(scope.amountSelectedFlowType === "From"  && transferType[scope.selectedFlowType] != "EDIT" ) 
        {
          scope.updateContext("fromAccountName", selectedData[0].formattedFromAccountName);        
          scope.updateContext("fromAccountNumber", selectedData[0].fromAccountNumber);
          scope.updateContext("fromAccountType", selectedData[0].fromAccountType);
          scope.updateContext("fromAvailableBalance", selectedData[0].fromAvailableBalance);
          scope.updateContext("fromAccountCurrency", selectedData[0].fromTransactionCurrency); 
          this.view.tbxFromSearch.text="";
          this.view.imgFromCloseIcon.setVisibility(false);
          this.view.segFromAccounts.widgetDataMap = scope.backUpFromAccountMapping;
          this.view.segFromAccounts.setData(scope.backUpFromAccountList);
          scope.searchApplied="false";
          scope.clearSearchApplied="false";        
          scope.setTransferAmount();
          this.navigateTo("flxAmount","flxAmountTop",this.getFieldValue(this._transferAmountHeader));
        }
        else if(transferType[scope.selectedFlowType] === "EDIT" ) 
        {
          scope.updateContext("fromAccountName", selectedData[0].formattedFromAccountName);        
          scope.updateContext("fromAccountNumber", selectedData[0].fromAccountNumber);
          scope.updateContext("fromAccountType", selectedData[0].fromAccountType);
          scope.updateContext("fromAvailableBalance", selectedData[0].fromAvailableBalance);
          scope.updateContext("fromAccountCurrency", selectedData[0].fromTransactionCurrency);  
          this.view.tbxFromSearch.text="";
          this.view.imgFromCloseIcon.setVisibility(false);
          this.view.segFromAccounts.widgetDataMap = scope.backUpFromAccountMapping;
          this.view.segFromAccounts.setData(scope.backUpFromAccountList);
          scope.searchApplied="false";
          scope.clearSearchApplied="false";
          scope.setVerifyDetails();
          scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
        }
        else
        {
          scope.updateContext("fromAccountName", selectedData[0].fromAccountName);
          scope.updateContext("fromAccountNumber", selectedData[0].fromAccountNumber);
          scope.updateContext("fromAccountType", selectedData[0].fromAccountType);
          scope.updateContext("fromAvailableBalance", selectedData[0].fromAvailableBalance);
          scope.updateContext("fromAccountCurrency", selectedData[0].fromTransactionCurrency);
          scope.fromAccountBackupContext = JSON.parse(JSON.stringify(scope.context));
          this.view.tbxFromSearch.text="";
          this.view.imgFromCloseIcon.setVisibility(false);
          this.view.segFromAccounts.widgetDataMap = scope.backUpFromAccountMapping;
          this.view.segFromAccounts.setData(scope.backUpFromAccountList);
          scope.searchApplied="false";
          scope.clearSearchApplied="false";
          scope.getToAccounts();      
          scope.navigateTo("flxToAccount","flxToTop",scope.getFieldValue(scope._toAccountsTitle));

        }
      }catch (err) {
        var errorObj = {
          "errorInfo": "Error in SelectFromAccounts",
          "errorLevel": "Configuration",
          "error": err
        };

      }
    },
    
     /*
     * Component filterRecordsList
     * Responsible to perform filter operation based on the contract
     */
    filterRecordsList	:	function(){
      var self = this;
      try{
        if(!this.isEmptyNullUndefined(this.getFieldValue(this._filterTypeList))){
          var filterListObject = JSON.parse(this._filterTypeList);
          if(!this.isEmptyNullUndefined(filterListObject.list) && !this.isEmptyNullUndefined(filterListObject.identifier)){
            var filterList = filterListObject.list.split(",");
            var filterVariable = filterListObject.identifier;
            var tempRecords = this.recordsArray;
            var filteredRecords =tempRecords.filter(function (record) {
              var removeRecord =  false;
              for(var i=0;i<filterList.length;i++){
                if(record[filterVariable] == filterList[i])
                {
                  removeRecord =  true;
                }
              }  
              return !removeRecord;
            });
            this.recordsArray = filteredRecords;
          }
			return this.recordsArray;
        }
      }
      catch(e){
        var errorObj =
            {
              "errorInfo" : "Error in performing filter operation",
              "errorLevel" : "Buisness",
              "error": e
            };
        self.onError(errorObj);
      }
    },
    
    /**     
	 * Component groupBusinessAndRetail
     * To group business and retail accounts
     */
    groupBusinessAndRetail: function(sectionData,data,response)
    {
      var scope =this;
      try{
        var fromAccountsData=[];
        var data=scope.filterDataBasedOnPermissions(data, scope.transferTypeContext);
        if(!this.isEmptyNullUndefined(data))
        {
          var businessAccountsList=[];
          var personalAccountsList=[],i=0,k=0;
          for(var j=0;j<data.length;j++)
          {
            if(data[j]["fromIsBusinessAccount"] =="true")
            {
              businessAccountsList[i]=data[j];
              i++;
            }
            else
            {
              personalAccountsList[k]=data[j];
              k++;
            }
          }
          if(businessAccountsList.length>0)               
          {
            this.isBusinessAccountListValue=true;
            fromAccountsData = scope.groupResponseData(businessAccountsList,"fromMembershipName");
            if(personalAccountsList.length>0){
              fromAccountsData["Personal Accounts"]=personalAccountsList;
            }
          }
          else if(personalAccountsList.length>0 && this.isBusinessAccountListValue==true)
          {
            fromAccountsData["Personal Accounts"]=personalAccountsList;
          }
        }
        if( this.isBusinessAccountListValue!=true)
        {                
          fromAccountsData = scope.groupResponseData(data,"fromAccountType");               
        }
        var fromAccountsDataKeys = Object.keys(fromAccountsData);
        var sectionData=[];
        for(i=0;i<fromAccountsDataKeys.length;i++){
          var fromData={};
          if( this.isBusinessAccountListValue!=true){
            if(fromAccountsDataKeys[i]=="Savings" ||fromAccountsDataKeys[i]=="Checking"||fromAccountsDataKeys[i]=="Deposit"||fromAccountsDataKeys[i]=="Loan"||fromAccountsDataKeys[i]=="Credit Card")
            {
              fromData=[
                {"lblHeaderName":{
                  "text" :fromAccountsDataKeys[i]+" Accounts  ("+fromAccountsData[fromAccountsDataKeys[i]].length+")",
                "skin":this._sknGroupHeaderLbl
                }, 
                 "imgChevron": this._iconGroupExpand,                 
                 "flxUnifiedTransferHeader":{"skin":this._sknGroupHeaderBg},
                 "flxUpShadow":{"skin":this._sknSegmentShadow}                           
                },fromAccountsData[fromAccountsDataKeys[i]]
              ]
            }
          }
          else
          {
            fromData=[
              {"lblHeaderName":{
                "text" :fromAccountsDataKeys[i]+"  ("+fromAccountsData[fromAccountsDataKeys[i]].length+")",
               "skin":this._sknGroupHeaderLbl
              }, 
               "imgChevron": this._iconGroupExpand,
               "flxUnifiedTransferHeader":{"skin":this._sknGroupHeaderBg},
               "flxUpShadow":{"skin":this._sknSegmentShadow}
              },fromAccountsData[fromAccountsDataKeys[i]]
            ]
          }
          sectionData.push(fromData);
        }
        return sectionData;
      }catch(err)
      {
        var errorObj = {
          "errorInfo": "Error in groupBusinessAndRetail",
          "errorLevel": "Configuration",
          "error": err
        };
      }
    },    
    
    /**     
	 * Component filterDataBasedOnPermissions
     * To filter Data Based On Permissions
     */
    filterDataBasedOnPermissions:function(data,transferTypeContext){
      var scope=this;
      try{
        var dataPermissions=[],j=0;
        for(var i=0;i<data.length;i++)
        {
          if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T1")){
            if(data[i]["fromActions"].includes(scope.getFieldValue(scope._transferTypePermission,scope.transferTypeContext)))
            {
              dataPermissions[j]=data[i];
              j++;
            }
          }
          else if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T2")){
            if(data[i]["fromActions"].includes(scope.getFieldValue(scope._transferTypePermission,scope.transferTypeContext)))
            {
              dataPermissions[j]=data[i];
              j++;
            }
          }
          else if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T3")){
            if(data[i]["fromActions"].includes(scope.getFieldValue(scope._transferTypePermission,scope.transferTypeContext)))
            {
              dataPermissions[j]=data[i];
              j++;
            }
          }
          else if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T4")){
            if(data[i]["fromActions"].includes(scope.getFieldValue(scope._transferTypePermission,scope.transferTypeContext)))
            {
              dataPermissions[j]=data[i];
              j++;
            }
          }
        }
        if(dataPermissions.length==0)
        {
          data=[];
          return data;
        }
        else
        {
          return dataPermissions;
        }
      }catch(err)
      {
        var errorObj = {
          "errorInfo": "Error in filterDataBasedOnPermissions",
          "errorLevel": "Configuration",
          "error": err
        };
      }
    },

	 /*
     * Component isRetailAccount
     * Responsible to check retail accounts present in response
     */
    isRetailAccount: function(responseObj)
    {
      var scope=this;
      try{
        var retailCount=0;
        for(var j=0;j<responseObj.length;j++)
        {
          if(responseObj[j].isBusinessAccount==="false" || responseObj[j].isBusinessPayee!="1"){
            retailCount=retailCount+1;
          }
        }
        return retailCount;

      }
      catch(err)
      {
        var errorObj = {
          "errorInfo": "Error in isRetailAccount",
          "errorLevel": "Configuration",
          "error": err
        };
      }

    },
    
    /*
     * Component isBusinessAccount
     * Responsible to check retail accounts present in response
     */
    isBusinessAccount: function(responseObj)
    {
      var scope=this;
      try{
        var businessCount=0;
        for(var j=0;j<responseObj.length;j++)
        {
          if(responseObj[j].isBusinessAccount==="true" || responseObj[j].isBusinessPayee==="1"){
            businessCount=businessCount+1;
          }
        }
        return businessCount;
      }
      catch(err)
      {
        var errorObj = {
          "errorInfo": "Error in isBusinessAccount",
          "errorLevel": "Configuration",
          "error": err
        };
      }

    },
	
	/*
     * Component txtBoxOnKeyUp
     * Responsible to perform search operation and update segment data 
     */
	 txtBoxOnKeyUp	:	function(){
      var self = this;
      try{
        this.view.imgFromCloseIcon.setVisibility(true);
        var searchTxt = this.view.tbxFromSearch.text.toLowerCase();
        this.searchApplied = false;
        if(searchTxt != ""){
          var result=[];
          var data = this.recordsArray;
          for(var i=0;i<data.length;i++){
            if(data[i].lblField1.text.toLowerCase().indexOf(searchTxt) != -1 || data[i].lblField2.text.toLowerCase().indexOf(searchTxt) != -1 || data[i].lblField3.text.toLowerCase().indexOf(searchTxt) != -1){
              result.push(data[i]);
            }
          }
          if(!(result.length > 0)){
            this.view.segFromAccounts.setVisibility(false);
            this.view.flxFromNoResults.setVisibility(true);
          }else{
            this.searchApplied = true;
            result = this.setFromAccountsData(result);
          }
        }
        else{
          this.clearTextBoxTexts();
          this.searchApplied = false;         
          this.view.segFromAccounts.removeAll();
          this.setFromAccountsData(this.recordsArray);
          this.view.segFromAccounts.setVisibility(true);
          this.view.flxFromNoResults.setVisibility(false);
          this.view.imgFromCloseIcon.setVisibility(false);
        }
        this.view.forceLayout();
      }
      catch(e){
        var errorObj =
            {
              "errorInfo" : "Error in performing search",
              "errorLevel" : "Buisness",
              "error": e
            };
        self.onError(errorObj);
      }

    },

	
	 /*
     * Component clearTextBoxTexts
     * Responsible to clear text box texts  
     */
     clearTextBoxTexts	:	function(){
      this.clearSearchApplied=true;
      this.view.tbxFromSearch.text="";
      this.view.imgFromCloseIcon.setVisibility(false);
      this.searchApplied = false;
      this.view.segFromAccounts.removeAll();
      this.setFromAccountsData(this.recordsArray);   
      this.view.segFromAccounts.setVisibility(true);
      this.view.flxFromNoResults.setVisibility(false);
    },
	
	 /**
     * Component groupResponseData
     * group the service response by status decider
     * data {object} - should be array of objects
     * key {string} - should be a string 
     * @return : {boolean} - grouped response datas will be passed
     */
    groupResponseData: function (data, key) {
      var self = this;
      try{
        if(data!==undefined && data!="" && data!=null)
          return data.reduce(function (value, obj) {
            (value[obj[key]] = value[obj[key]] || []).push(obj);
            return value;
          }, {});
        else return {};
      }catch(err){
        var errorObj =
            {
              "errorInfo" : "Error in setting groupResponseData",
              "errorLevel" : "Configuration",
              "error": err
            };
        self.onError(errorObj);
      }
    },
	
    /**
     * Component readObject
     * Helper method to parse the backend response
     * obj{JSONArray} - object containing any value
     * jsonPath{String} - jsonPath traversed till the search field is reachable
     */
    readObject: function(obj, jsonPath) {
      var self = this;
      try
      {
        var keysItr = Object.keys(obj);
        var parentPath = jsonPath;
        for (var i = 0; i < keysItr.length; i++) {
          var key = keysItr[i];
          var value = obj[key]
          if(parentPath)
            jsonPath = parentPath + "." + key;
          else
            jsonPath = key;
          if (value instanceof Array) {
            this.map[key] = value;
            this.readArray(value, jsonPath);
          } else if (value instanceof Object) {
            this.map[key] = value;
            this.readObject(value, jsonPath);
          } else { // is a value
            if(isNaN(value) && (value.indexOf("{")>-1 ||value.indexOf("[")>-1))
              value=eval('('+value+')');
            if (value instanceof Array) {
              this.readArray(value, jsonPath);
            } else if (value instanceof Object) {
              this.readObject(value, jsonPath);
            }else{
              this.map[jsonPath] = value;
            }
          }
        }
      }
      catch(err)
      {
        var errorObj =
            {
              "errorInfo" : "Error in reading the Object.",
              "errorLevel" : "Business",
              "error": err
            };
        self.onError(errorObj);
      }
    },
    
    /**
     * Component readArray
     * Parse the array in response and add it to the map
     * @param: array{Array} - array in the response
     * @param: jsonPath{string} - JSON path in the map
     */
    readArray: function(array, jsonPath) {
      var parentPath = jsonPath;
      for (var i = 0; i < array.length; i++) {
        var value = array[i];
        jsonPath = parentPath + "[" + i + "]";
        if (value instanceof Array) {
          this.readArray(value, jsonPath);
        } else if (value instanceof Object) {
          this.readObject(value, jsonPath);
        } else { // is a value
          if(isNaN(value) && (value.indexOf("{")>-1 || value.indexOf("[")>-1)){
            value=eval('('+value+')');
          }
          if (value instanceof Array) {
            this.readArray(value, jsonPath);
          } else if (value instanceof Object) {
            this.readObject(value, jsonPath);
          }else{
            this.map[jsonPath] = value;
          }
        }
      }
    },
	
	/**     
	 * Component rowExpandCollapse
     * To expand and collapse group
    **/ 
    rowExpandCollapse: function (context) {
      var self = this;
      try{
        var stackLength = self.stack.length;
        var currentScreen = self.stack[stackLength - 1];
        if(currentScreen=="flxToAccount")
        {
          this.toAccRowExpandCollapse(context);      
        }
        else{
          var sectionIndex = context.section;
          if (this.segmentData === '') 
            this.segmentData = JSON.parse(JSON.stringify(this.view.segFromAccounts.data));

          var data = this.view.segFromAccounts.data;
          var selectedHeaderData = data[sectionIndex][0];
          if (!JSON.stringify(data).includes("flxNoRecords")) {
            if (selectedHeaderData["imgChevron"] === this._iconGroupExpand) {
              selectedHeaderData["imgChevron"] = this._iconGroupCollapse;
              data[sectionIndex][1] = [];
              this.view.segFromAccounts.setData(data);
            } else {
              selectedHeaderData["imgChevron"] = this._iconGroupExpand;
              data[sectionIndex][1] = this.segmentData[sectionIndex][1];
              this.view.segFromAccounts.setData(data);
            }
          }
        }
      }catch (err) {
        var errorObj = {
          "errorInfo": "Error in rowExpandCollapse",
          "errorLevel": "Configuration",
          "error": err
        };
        self.onError(errorObj);
      }
    },
	
	  /**     
	 * Component toAccRowExpandCollapse
     * To expand and collapse group
    **/ 
  toAccRowExpandCollapse: function (context) {
      var self = this;
      try{
        var sectionIndex = context.section;
        if (this.toAccSegmentData === '') 
        this.toAccSegmentData = JSON.parse(JSON.stringify(this.view.segToAccounts.data));

        var data = this.view.segToAccounts.data;
        
        var selectedHeaderData = data[sectionIndex][0];
        if (!JSON.stringify(data).includes("flxNoRecords")) {
          if (selectedHeaderData["imgChevron"] === this._iconGroupExpand) {
            selectedHeaderData["imgChevron"] = this._iconGroupCollapse;
            data[sectionIndex][1] = [];
            this.view.segToAccounts.setData(data);
          } else {
            selectedHeaderData["imgChevron"] = this._iconGroupExpand;
            data[sectionIndex][1] = this.toAccSegmentData[sectionIndex][1];
            this.view.segToAccounts.setData(data);
          }
        }
      }catch (err) {
        var errorObj = {
          "errorInfo": "Error in rowExpandCollapse",
          "errorLevel": "Configuration",
          "error": err
        };
        self.onError(errorObj);
      }
    },
    
	
    /**     
	 * Component setAddAddressScreenData
     * To set skin and text for widgets 
    **/  
    setAddAddressScreenData: function(){
      try{
        var scope =this;
        //skins
        scope.view.flxAddAddressHeader.skin = scope.getFieldValue(scope._sknHeaderBg);
        scope.view.imgAddAddressBack.src = scope.getFieldValue(scope._iconBack);
        scope.view.btnAddAddressCancel.skin = scope.getFieldValue(scope._sknCancelBtn);
        scope.view.lblAddAddressHeader.skin = scope.getFieldValue(scope._sknHeaderLbl);
        scope.view.flxAddAddressDesciption.skin = scope.getFieldValue(scope._sknDescriptionBg);
        scope.view.lblAddAddressDescription.skin = scope.getFieldValue(scope._sknDescriptionLbl);
        scope.view.flxAddAddressSeparator.skin = scope.getFieldValue(scope._sknDescriptionSeparator);
        scope.view.lblAddAddressErrorMsg.skin = scope.getFieldValue(scope._errorValidationSkn);
        scope.view.flxAddAddressMain.skin = scope.getFieldValue(scope._sknDescriptionBg);
		scope.view.btnSave.focusSkin = scope.getFieldValue(scope._sknEnableContexualBtn);
        for(var i=1; i<=8; i++){
          var fieldType = scope.getFieldValue(eval("scope._addAddressField"+i+"Value"), "fieldType");
         /*// if(i === 5 || i ===6 ){
            eval("scope.view.lblAddressField"+i).skin = scope.getFieldValue(scope._sknQuestionLbl);
            eval("scope.view.txtAddressFieldValue"+i).skin = scope.getFieldValue(scope._listBoxSkin);
            eval("scope.view.txtAddressFieldValue"+i).focusSkin = scope.getFieldValue(scope._listBoxFocusSkin); 
            eval("scope.view.txtAddressFieldValue"+i).dropDownImage = scope.getFieldValue(scope._listBoxDropDownImage); 
          }else{*/
          if(fieldType === "phoneNumber"){
            eval("scope.view.txtAddressFieldValue"+i).textInputMode = constants.TEXTBOX_INPUT_MODE_NUMERIC;
          }
          eval("scope.view.lblAddressField"+i).skin = scope.getFieldValue(scope._sknQuestionLbl);
          eval("scope.view.txtAddressFieldValue"+i).skin = scope.getFieldValue(scope._textBoxNormalSkin); 
          eval("scope.view.txtAddressFieldValue"+i).focusSkin = scope.getFieldValue(scope._sknInputBoxBorder);
        }
        //fieldText
        scope.view.lblAddAddressHeader.text = scope.getFieldValue(scope._titleAddAddress);      
        scope.view.lblAddAddressDescription.text = scope.getFieldValue(scope._lblAddAddress);
        scope.view.btnAddAddressCancel.text = scope.getFieldValue(scope._cancelButton);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setAddAddressScreenData method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**     
	 * Component setBeneficiaryAddress
     * To add beneficiary address 
     * Enabling default parameters
    **/  
    setBeneficiaryAddress: function(){      
      try {
        var scope = this;
        scope.setAddAddressScreenData();
        scope.view.btnSave.text= scope.getFieldValue(scope._addAddressBtn, "text");
        for(var i=1;i<=8;i++){
          scope.view["lblAddressField"+i].text = scope.getFieldValue(eval("scope._addAddressField"+i+"Lbl"), "text");
        }
        var transferType = scope.getFieldValue(scope._flowType);
        if(transferType[scope.selectedFlowType] === "EDIT") {
          scope.populateValuesforEdit();
          for(var i=1;i<=8;i++){
            eval("scope.view.txtAddressFieldValue"+i).skin = scope.getFieldValue(scope._textBoxNormalSkin);
            eval("scope.view.txtAddressFieldValue"+i).focusSkin = scope.getFieldValue(scope._sknInputBoxBorder);
			eval("scope.view.txtAddressFieldValue" + i).maxTextLength = scope.getFieldValue(scope.getFieldValue(eval("scope._addAddressField" + i + "Value"), "length"), "max");
          }
        }else{
          for(var i=1;i<=8;i++){
            var fieldJSON = scope.getFieldValue(eval("scope._addAddressField"+i+"Value"));
            if(fieldJSON){
              scope.setTextBoxInputModeAndMasking(fieldJSON, "txtAddressFieldValue"+i); 
              scope.setTextBoxPlaceHolder(fieldJSON, "txtAddressFieldValue"+i);
              scope.updateContextAddAddress(("txtAddressFieldValue"+i), eval("scope.view.txtAddressFieldValue" + i).text);  
              eval("scope.view.txtAddressFieldValue"+i).maxTextLength = scope.getFieldValue(scope.getFieldValue(eval("scope._addAddressField"+i+"Value"),"length"),"max");
            }
          }
        }
        scope.enableButton("btnSave");
        //scope.getCountriesandStates();
        scope.view.txtAddressFieldValue1.onTextChange = scope.onBeneficiaryAddressTextChange.bind(this, "txtAddressFieldValue1",scope.getFieldValue(scope._addAddressField1Value, "fieldType"));
        scope.view.txtAddressFieldValue2.onTextChange = scope.onBeneficiaryAddressTextChange.bind(this, "txtAddressFieldValue2",scope.getFieldValue(scope._addAddressField2Value, "fieldType"));
        scope.view.txtAddressFieldValue3.onTextChange = scope.onBeneficiaryAddressTextChange.bind(this, "txtAddressFieldValue3",scope.getFieldValue(scope._addAddressField3Value, "fieldType"));
        scope.view.txtAddressFieldValue4.onTextChange = scope.onBeneficiaryAddressTextChange.bind(this, "txtAddressFieldValue4",scope.getFieldValue(scope._addAddressField4Value, "fieldType"));
        scope.view.txtAddressFieldValue5.onTextChange = scope.onBeneficiaryAddressTextChange.bind(this, "txtAddressFieldValue5",scope.getFieldValue(scope._addAddressField5Value, "fieldType"));
        scope.view.txtAddressFieldValue6.onTextChange = scope.onBeneficiaryAddressTextChange.bind(this, "txtAddressFieldValue6",scope.getFieldValue(scope._addAddressField6Value, "fieldType"));
        scope.view.txtAddressFieldValue7.onTextChange = scope.onBeneficiaryAddressTextChange.bind(this, "txtAddressFieldValue7",scope.getFieldValue(scope._addAddressField7Value, "fieldType"));
        scope.view.txtAddressFieldValue8.onTextChange = scope.onBeneficiaryAddressTextChange.bind(this, "txtAddressFieldValue8",scope.getFieldValue(scope._addAddressField8Value, "fieldType"));
        scope.view.flxAddAddress.flxBtnSave.btnSave.onClick = scope.onBeneficiaryAddressOnClick;
        scope.view.flxAddAddressBack.onTouchEnd = scope.goBack;
        scope.view.btnAddAddressCancel.onClick = scope.onBackButtonClick;
        scope.view.flxAddAddress.forceLayout();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setBeneficiaryAddress method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /*
    * onBeneficiaryAddressTextChange
    * sets the data from fields to context
    */
    onBeneficiaryAddressTextChange: function(fieldJSON,fieldType){
      try{
        var scope = this;
        var inputText = eval("scope.view."+fieldJSON).text;
        var fieldLength = eval("scope.view."+fieldJSON).length;
        scope.view.lblAddAddressErrorMsg.setVisibility(false);
         if(!scope.isEmptyNullUndefined(inputText)){
          if(fieldType === "phoneNumber"){
            scope.addressPhoneNumber = inputText;
            scope.addressPhoneNumber = scope.addressPhoneNumber.replace(/\+1/g, "");
            scope.addressPhoneNumber = scope.addressPhoneNumber.replace(/\(/g, "");
             scope.addressPhoneNumber = scope.addressPhoneNumber.replace(/\)/g, "");
             scope.addressPhoneNumber = scope.addressPhoneNumber.replace(/-/g, "");
             scope.addressPhoneNumber = scope.addressPhoneNumber.replace(/ /g, "");
            var phoneNoFormatted = "";
            var text =  eval("scope.view."+fieldJSON).text;
            var phoneNo = text;
            phoneNo = phoneNo.replace(/\+1/g, "");
            phoneNo = phoneNo.replace(/\(/g, "");
            phoneNo = phoneNo.replace(/\)/g, "");
            phoneNo = phoneNo.replace(/-/g, "");
            phoneNo = phoneNo.replace(/ /g, "");
            phoneNoFormatted= "+1 " + "(" + phoneNo.slice(0, 3) + ") " + phoneNo.slice(3, 6) + "-" + phoneNo.slice(6, 10);
            if(phoneNoFormatted == "+1 () -" || phoneNoFormatted == "+1 () " || phoneNoFormatted == "+1 "){
               phoneNoFormatted = "";
            }
             eval("scope.view."+fieldJSON).text = phoneNoFormatted;
            scope.enableButton("btnSave");																			
          }else{
            scope.enableButton("btnSave");																			
          }
        }else{
          eval("scope.view."+fieldJSON).skin = scope.getFieldValue(scope._textBoxNormalSkin); 
          scope.enableButton("btnSave");																					  
        }
       scope.view.flxAddAddress.forceLayout();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onBeneficiaryAddressTextChange method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /*
    * onBeneficiaryAddressOnClick
    * @api : onBeneficiaryAddressOnClick
    * button click event
    */
    onBeneficiaryAddressOnClick: function(){
      try{
        var scope = this;
        scope.onBeneficiaryAddressvalidation();
        if(scope.validAddress){
        scope.addressMinLengthValidation();
        }
        var noErrorText = scope.view.lblAddAddressErrorMsg.text;
        if(scope.isEmptyNullUndefined(noErrorText) && scope.validAddress === true) {
          scope.setVerifyDetails();
          scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
        }
        scope.view.flxAddAddress.forceLayout();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onBeneficiaryAddressOnClick method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**
     * onBeneficiaryAddressvalidation
     * @api : onBeneficiaryAddressvalidation
     * validation for button onClick
     * @return : NA
     */
    onBeneficiaryAddressvalidation: function(){      
      try{
        var scope = this;
        scope.view.lblAddAddressErrorMsg.text = "";
        for(var i=1; i<=8; i++){
          var fieldContext = eval("scope._addAddressField"+i+"Value");
          var fieldType = scope.getFieldValue(fieldContext, "fieldType");
          var fieldText = eval("scope.view.txtAddressFieldValue"+i).text;
          var fieldName = "txtAddressFieldValue"+i;
          if(!scope.isEmptyNullUndefined(fieldText)) {
            switch(fieldType){
              case "phoneNumber":
                var isValidPhoneNumber = scope.validationUtilManager.isValidPhoneNumber(fieldText.toString());              
                if(isValidPhoneNumber){
                  scope.updateContextAddAddress(fieldName, fieldText);
                }else{
                  eval("scope.view."+fieldName).skin = scope.getFieldValue(scope._textBoxErrorSkin);
                  eval("scope.view."+fieldName).focusSkin = scope.getFieldValue(scope._textBoxErrorSkin);
                  scope.view.lblAddAddressErrorMsg.setVisibility(true);
                  scope.view.lblAddAddressErrorMsg.text = scope.getFieldValue(scope._addAddressErrorMsg);
                }
                break;
              case "emailAddress":
                var isValidEmail = scope.validationUtilManager.isValidEmail(fieldText);
                if(isValidEmail){
                  scope.updateContextAddAddress(fieldName, fieldText);
                }else{
                  eval("scope.view."+fieldName).skin = scope.getFieldValue(scope._textBoxErrorSkin);
                  eval("scope.view."+fieldName).focusSkin = scope.getFieldValue(scope._textBoxErrorSkin);
                  scope.view.lblAddAddressErrorMsg.setVisibility(true);
                  scope.view.lblAddAddressErrorMsg.text = scope.getFieldValue(scope._addAddressErrorMsg);
                }
                break;
              case "postalCode":
                var isValidZip = scope.validationUtilManager.isValidZip(fieldText);
                if(isValidZip){
                  scope.updateContextAddAddress(fieldName, fieldText);
                }else{
                  eval("scope.view."+fieldName).skin = scope.getFieldValue(scope._textBoxErrorSkin);
                  eval("scope.view."+fieldName).focusSkin = scope.getFieldValue(scope._textBoxErrorSkin);
                  scope.view.lblAddAddressErrorMsg.setVisibility(true);
                  scope.view.lblAddAddressErrorMsg.text = scope.getFieldValue(scope._addAddressErrorMsg);
                }
                break;
              case "city":
                var isValidCity = scope.validationUtilManager.isInvalidCharacterPresent(fieldText);
                if(isValidCity){
                  scope.updateContextAddAddress(fieldName, fieldText);
                }else{
                  eval("scope.view."+fieldName).skin = scope.getFieldValue(scope._textBoxErrorSkin);
                  eval("scope.view."+fieldName).focusSkin = scope.getFieldValue(scope._textBoxErrorSkin);
                  scope.view.lblAddAddressErrorMsg.setVisibility(true);
                  scope.view.lblAddAddressErrorMsg.text = scope.getFieldValue(scope._addAddressErrorMsg);
                }
                break;
              case "country":
                var isValidCountry = scope.validationUtilManager.isInvalidCharacterPresent(fieldText);
                if(isValidCountry){
                  scope.updateContextAddAddress(fieldName, fieldText);
                }else{
                  eval("scope.view."+fieldName).skin = scope.getFieldValue(scope._textBoxErrorSkin);
                  eval("scope.view."+fieldName).focusSkin = scope.getFieldValue(scope._textBoxErrorSkin);
                  scope.view.lblAddAddressErrorMsg.setVisibility(true);
                  scope.view.lblAddAddressErrorMsg.text = scope.getFieldValue(scope._addAddressErrorMsg);
                }
                break;
              case "state":
                var isValidState = scope.validationUtilManager.isInvalidCharacterPresent(fieldText);
                if(isValidState){
                  scope.updateContextAddAddress(fieldName, fieldText);
                }else{
                  eval("scope.view."+fieldName).skin = scope.getFieldValue(scope._textBoxErrorSkin);
                  eval("scope.view."+fieldName).focusSkin = scope.getFieldValue(scope._textBoxErrorSkin);
                  scope.view.lblAddAddressErrorMsg.setVisibility(true);
                  scope.view.lblAddAddressErrorMsg.text = scope.getFieldValue(scope._addAddressErrorMsg);
                }
                break;
              default:
                scope.updateContextAddAddress(fieldName, fieldText);
            }
            var noErrorText = scope.view.lblAddAddressErrorMsg.text;
            if(!scope.isEmptyNullUndefined(noErrorText)) {
              scope.disableButton("btnSave");
              scope.validAddress = false;
              break;
            }else{
              scope.enableButton("btnSave");
              scope.validAddress = true;
            } 
          }else{
            scope.updateContextAddAddress(fieldName, fieldText);
            scope.validAddress = true;
          }
        }
        scope.view.flxAddAddress.forceLayout();
      }catch(err) {
        var errObj = {
          "errorInfo" : "Error in onBeneficiaryAddressvalidation method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**
     * addressMinLengthValidation
     * @api : addressMinLengthValidation
     * validation for minimum length
     * @return : NA
     */
    addressMinLengthValidation: function(){
      try{
        var scope = this;
        scope.view.lblAddAddressErrorMsg.text = "";
        for(var i=1; i<=8; i++){
          var inputText = eval("scope.view.txtAddressFieldValue"+i).text;
          if(!this.isEmptyNullUndefined(inputText)) {
            var minLength = scope.getFieldValue(scope.getFieldValue(eval("scope._addAddressField"+i+"Value"),"length"),"min");
            var fieldLength = (eval("scope.view.txtAddressFieldValue"+i).text).length;
            if(fieldLength < minLength){
              eval("scope.view.txtAddressFieldValue"+i).skin = scope.getFieldValue(scope._textBoxErrorSkin);
              eval("scope.view.txtAddressFieldValue"+i).focusSkin = scope.getFieldValue(scope._textBoxErrorSkin);
              scope.view.lblAddAddressErrorMsg.setVisibility(true);
              scope.view.lblAddAddressErrorMsg.text = scope.getFieldValue(scope._addAddressErrorMsg);
            }
           var noErrorText = scope.view.lblAddAddressErrorMsg.text;
            if(!scope.isEmptyNullUndefined(noErrorText)) {
              scope.disableButton("btnSave");
               scope.validAddress = false;
            }else{
              scope.enableButton("btnSave");
               scope.validAddress = true;
            } 
          }
        }
        scope.view.flxAddAddress.forceLayout()();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in addressMinLengthValidation method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**
     * setTextBoxInputModeAndMasking
     * @api : setTextBoxInputModeAndMasking
     * sets the input mode of the text box based on contract config
     * @return : NA
     */
    setTextBoxInputModeAndMasking: function(contractJSON, srcWidget) {
      try {
        var scope = this;
        if(!(scope.isEmptyNullUndefined(contractJSON.inputMode))) {
          var characterSet = scope.getFieldValue(scope._addressRestrictCharacterSet);
          if(contractJSON.inputMode === "NUMERIC" && contractJSON.fieldType !== "phoneNumber"){
            scope.view[srcWidget].restrictCharactersSet = characterSet;       																												 
          } 
          else if(contractJSON.inputMode === "NUMERIC" && contractJSON.fieldType === "phoneNumber"){
            scope.view[srcWidget].restrictCharactersSet =  scope.getFieldValue(scope._phoneNumberRestrictCharacterSet);
          }else {
            scope.view[srcWidget].restrictCharactersSet = "";                      
          }
          return;
        } 
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setTextBoxInputModeAndMasking method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**
     * setTextBoxPlaceHolder
     * @api : setTextBoxPlaceHolder
     * maps the value of textbox to the placeholder assigned in contracts
     * @return : NA
     */
    setTextBoxPlaceHolder: function(contractJSON, tbxWidget) {
      try{
        var scope = this;
        //if(tbxWidget !== "txtAddressFieldValue5" || tbxWidget !== "txtAddressFieldValue6"){
        if(!(scope.isEmptyNullUndefined(contractJSON.placeHolder))) {
          var placeHolderValue = contractJSON.placeHolder;
          scope.view[tbxWidget].placeholder =
            placeHolderValue ? placeHolderValue : "";
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setTextBoxPlaceHolder method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },    
    /**
     * @api : populateValuesforEdit
     * populate the values for each text boxes on edit mode
     * @return : NA
     */
    populateValuesforEdit: function() {
      try{
        var scope = this;
        for(var i=1;i<=8;i++){
          var fieldJSON = scope.getFieldValue(eval("scope._addAddressField"+i+"Value"));
          if(fieldJSON){
            scope.setTextBoxInputModeAndMasking(fieldJSON, "txtAddressFieldValue"+i); 
            scope.setTextBoxPlaceHolder(fieldJSON, "txtAddressFieldValue"+i);
            scope.populateTextIntoTextInput(fieldJSON, "txtAddressFieldValue"+i);
            scope.updateContextAddAddress(("txtAddressFieldValue"+i), eval("scope.view.txtAddressFieldValue" + i).text);
          }
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in populateValuesforEdit method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**
     * populateTextIntoTextInput
     * @api : populateTextIntoTextInput
     * sets the data from the contractJSON to source widget
     * @return : NA
     */
    populateTextIntoTextInput: function(contractJSON, srcWidget) {
      try{
        var scope = this;
        if(!(scope.isEmptyNullUndefined(contractJSON))) {
          /*if(srcWidget === "txtAddressFieldValue5"){
            scope.view[srcWidget].selectedKey = scope.selectedCountry;
          }
          else if(srcWidget === "txtAddressFieldValue6"){
            scope.view[srcWidget].selectedKey = scope.selectedState;
          }*/			   
          var contractJSONValue = scope.getFieldValue(contractJSON);
          var contextValue = scope.getFieldValue(contractJSONValue.text);
          scope.view[srcWidget].text = contextValue;
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in populateTextIntoTextInput method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**
     * @api : updateContextAddAddress
     * updates context
     * @return : NA
     */
    updateContextAddAddress: function(key, value) {
      try{
        switch(key) 
        {
          case "txtAddressFieldValue1" :{
            this.updateContext("phone", value);
            break;
          }
          case "txtAddressFieldValue2" :{
            this.updateContext("email", value);
            break;
          }
          case "txtAddressFieldValue3" :{
            this.updateContext("addressLine1", value);
            break;
          }
          case "txtAddressFieldValue4" :{
            this.updateContext("addressLine2", value);
            break;
          }
          case "txtAddressFieldValue5" :{
            this.updateContext("country", value);
            break;
          }
          case "txtAddressFieldValue6" :{
            this.updateContext("state", value);
            break;
          }
          case "txtAddressFieldValue7" :{
            this.updateContext("city", value);
            break;
          }
          case "txtAddressFieldValue8" :{
            this.updateContext("zipcode", value);
            break;
          }
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in updateContextAddAddress method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**
     * @api : getCountriesandStates
     * gets the list of countries and states
     * @return : NA
     */
    getCountriesandStates: function() {
      try{
        this.invokeAddressCountryServiceMasterData();
        this.invokeAddressStateServiceMasterData(); 
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in getCountriesandStates method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**
     * @api : invokeAddressCountryServiceMasterData
     * invoke service for retrieving list of countries
     * @return : NA
     */
    invokeAddressCountryServiceMasterData: function() {
      try{
        var scope = this;      
        var objSvcName = scope.getFieldValue(scope._addressObjectService);
        var objName = scope.getFieldValue(scope._countryObject);
        var operationName = scope.getFieldValue(scope._getCountriesOperation);
        var criteria = scope.getCriteria(scope._getCountriesCriteria);
        var identifier = scope.getFieldValue(scope._getCountriesIdentifier);
        scope.UnifiedTransferDAO.fetchCountriesList(objSvcName,objName,operationName,criteria,scope.onSuccessAddressFetchCountriesList,identifier,scope.failureValidation);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in invokeAddressCountryServiceMasterData method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**
     * @api : onSuccessAddressFetchCountriesList
     * success callback for retrieving countries list
     * @return : NA
     */
    onSuccessAddressFetchCountriesList: function(response, unicode) {
      try{
        this._countriesList = response;
        this.serviceCounter++;
        if(this.serviceCounter === 2){
          this.setCountryAndStateMasterData();
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onSuccessAddressFetchCountriesList method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**
     * @api : setCountryAndStateMasterData
     * sets the list of countries and states in respective widgets
     * @return : NA
     */
    setCountryAndStateMasterData: function() {
      try{
        var countryWidget = "";
        var stateWidget = "";      
        countryWidget = "txtAddressFieldValue5";
        stateWidget = "txtAddressFieldValue6";   
        this.onRequestEnd();
        if(!this.view[countryWidget].isVisible) {
          return;
        }
        this.serviceCounter = 0;
        var countryNew = [];
        var countryPlaceHolderText = this.getFieldValue(this._addAddressField5Value, "placeHolder");
        countryNew.push(["0", countryPlaceHolderText]);
        for(var i=0; i<this._countriesList.records.length; i++){
          var country = this._countriesList;
          countryNew.push([country.records[i].id, country.records[i].Name]);
        }  
        var stateNew = [];
        var statePlaceHolderText = this.getFieldValue(this._addAddressField6Value, "placeHolder");
        stateNew.push(["1", statePlaceHolderText]);
        for(var i=0; i<this._statesList.records.length; i++){
          var state = this._statesList;
          stateNew.push([state.records[i].id, state.records[i].Name]);
        }  
        this.view[countryWidget].masterData = countryNew;
        this.countriesMasterData = countryNew;
        var countrySelected = countryNew[0][0];
        var stateSelected = stateNew[0][0];
        this.view[stateWidget].masterData = stateNew;
        this.statesMasterData = stateNew;
        this.countryMasterData = countryNew;
        if(countryWidget === "txtAddressFieldValue5") {
          this.view[countryWidget].selectedKey = countrySelected;  
        }
        else {
          this.highlightSelectedCountry(countryWidget);  
        }
        var countryId = this.view[countryWidget].selectedKeyValue[0];
        if (countryId === "0") {
          this.view[stateWidget].setEnabled(false);
        }
        if(stateWidget === "listState") {
          var data = this.getSpecifiedStates(countryId);
          this.statesMasterData = data.states;
          this.view[stateWidget].masterData = this.statesMasterData;
          this.highlightSelectedState(stateWidget);
        }
        var self = this;
        this.view[countryWidget].onSelection = function() {
          var data = [];
          var countryId = self.view[countryWidget].selectedKeyValue[0];
          self.selectedCountry = countryId;
          self.updateContext("countryID", self.selectedCountry);
          if (countryId === "0") {
            self.view[stateWidget].masterData = stateNew;
            self.view[stateWidget].selectedKey = stateSelected;
            self.view[countryWidget].selectedKey = countryId;
			self.selectedCountry = countryId;
            self.view[stateWidget].setEnabled(false);
          } else {
            self.view[stateWidget].setEnabled(true);
            self.view[countryWidget].selectedKey = countryId;
            if (stateWidget === "listState") {
              self.updateContext("listCountry",self.view[countryWidget].selectedKeyValue[1]);
            }
            else {
              self.updateContext("country",self.view[countryWidget].selectedKeyValue[1]);
            }
            data = self.getSpecifiedStates(countryId);
            self.view[stateWidget].masterData = data.states;
            self.view[stateWidget].selectedKey = data.stateSelected;
			var stateId = self.view[stateWidget].selectedKey;													   
            var transferType = self.getFieldValue(self._flowType);
           if(transferType[self.selectedFlowType] === "EDIT") {
              self.view[countryWidget].masterData = countryNew;
              self.view[countryWidget].selectedKey = countryId;
            }              
          }        
        };
        this.view[stateWidget].onSelection = function() {
          if (stateWidget === "listState") {
            var stateId = self.view[stateWidget].selectedKey[0];
            self.selectedState = stateId;
            self.updateContext("stateID", self.selectedState);
            self.updateContext("listState",self.view[stateWidget].selectedKeyValue[1]);
          }
          else {
            var stateId = self.view[stateWidget].selectedKeyValue[0];
            self.selectedState = stateId;
            self.updateContext("stateID", self.selectedState);
            self.updateContext("state",self.view[stateWidget].selectedKeyValue[1]);  
          }        
        };
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setCountryAndStateMasterData method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },

    /**
     * @api : getSpecifiedStates
     * returns the states of the specific country selected
     * @return : list of states
     */
    getSpecifiedStates: function(addressId) {
      try{
        var data = [];
        var statesList = [];
        statesList.push(["1", "Select a State"]);
        for (var i = 0; i < this._statesList.records.length; ++i) {
          if (this._statesList.records[i].Country_id === addressId) {
            statesList.push([this._statesList.records[i].id, this._statesList.records[i].Name]);
          }
        }
        data = {
          "states": statesList,
          "stateSelected" : statesList[0]
        };
        return data;
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in getSpecifiedStates method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },

    /**
     * @api : invokeAddressStateServiceMasterData
     * invoke service for retrieving list of states of respective countries
     * @return : NA
     */
    invokeAddressStateServiceMasterData: function() {
      try{
        var scope = this;
        var objSvcName = scope.getFieldValue(scope._addressObjectService);
        var objName = scope.getFieldValue(scope._statesObject);
        var operationName = scope.getFieldValue(scope._getStatesOperation);
        var criteria = scope.getCriteria(scope._getStatesCriteria);
        var identifier = scope.getFieldValue(scope._getStatesIdentifier);
        scope.UnifiedTransferDAO.fetchStatesList(objSvcName,objName,operationName,criteria,scope.onSuccessAddressFetchStatesList,identifier,scope.failureValidation);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in invokeAddressStateServiceMasterData method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**
     * @api : onSuccessAddressFetchStatesList
     * success callback for retrieving states list
     * @return : NA
     */
    onSuccessAddressFetchStatesList: function(response, unicode) {
      try{
        this._statesList = response;
        this.serviceCounter++;
        if(this.serviceCounter === 2){
          this.setCountryAndStateMasterData();
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onSuccessAddressFetchStatesList method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**  
	 * Component keyboardDataSettingAccountNumber
     * To bind the functions for each keybroad butttons
     */
    keyboardDataSettingAccountNumber:function(){
      try{
        this.view.flxRowOne.btnNumber1.onClick = this.setKeypadCharAccountNumber.bind(this, 1);
        this.view.flxRowOne.btnNumber2.onClick = this.setKeypadCharAccountNumber.bind(this, 2);
        this.view.flxRowOne.btnNumber3.onClick = this.setKeypadCharAccountNumber.bind(this, 3);
        this.view.flxRowTwo.btnNumber4.onClick = this.setKeypadCharAccountNumber.bind(this, 4);
        this.view.flxRowTwo.btnNumber5.onClick = this.setKeypadCharAccountNumber.bind(this, 5);
        this.view.flxRowTwo.btnNumber6.onClick = this.setKeypadCharAccountNumber.bind(this, 6);
        this.view.flxRowThree.btnNumber7.onClick = this.setKeypadCharAccountNumber.bind(this, 7);
        this.view.flxRowThree.btnNumber8.onClick = this.setKeypadCharAccountNumber.bind(this, 8);
        this.view.flxRowThree.btnNumber9.onClick = this.setKeypadCharAccountNumber.bind(this, 9);
        this.view.flxRowFour.btnNumber0.onClick = this.setKeypadCharAccountNumber.bind(this, 0);
        this.view.flxRowFour.imgKeypadClear.onTouchEnd = this.clearKeypadCharAccountNumber;
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in keyboardDataSettingAccountNumber method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**     
	 * Component keyboardDataSettingReEnterAccountNumber
     * To bind the functions for each keybroad butttons
     */
    keyboardDataSettingReEnterAccountNumber:function(){
      try{
        this.view.flxRow1.btnNumberOne.onClick = this.setKeypadCharAccountNumber.bind(this, 1);
        this.view.flxRow1.btnNumberTwo.onClick = this.setKeypadCharAccountNumber.bind(this, 2);
        this.view.flxRow1.btnNumberThree.onClick = this.setKeypadCharAccountNumber.bind(this, 3);
        this.view.flxRow2.btnNumberFour.onClick = this.setKeypadCharAccountNumber.bind(this, 4);
        this.view.flxRow2.btnNumberFive.onClick = this.setKeypadCharAccountNumber.bind(this, 5);
        this.view.flxRow2.btnNumberSix.onClick = this.setKeypadCharAccountNumber.bind(this, 6);
        this.view.flxRow3.btnNumberSeven.onClick = this.setKeypadCharAccountNumber.bind(this, 7);
        this.view.flxRow3.btnNumberEight.onClick = this.setKeypadCharAccountNumber.bind(this, 8);
        this.view.flxRow3.btnNumberNine.onClick = this.setKeypadCharAccountNumber.bind(this, 9);
        this.view.flxRow4.btnNumberZero.onClick = this.setKeypadCharAccountNumber.bind(this, 0);
        this.view.flxRow4.imgKeypadClearButton.onTouchEnd = this.clearKeypadCharAccountNumber;
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in keyboardDataSettingReEnterAccountNumber method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**     
	 * Component setScreenDataEnterAccountNumber
     * setting primary skins and text
    **/
    setScreenDataEnterAccountNumber: function(){
      try{
        var scope =this;
        //skins
        scope.view.flxAccountNumberHeader.skin = scope.getFieldValue(scope._sknHeaderBg);
        scope.view.imgAccountNumberBack.src = scope.getFieldValue(scope._iconBack);
        scope.view.btnAccountNumberCancel.skin = scope.getFieldValue(scope._sknCancelBtn);        
        scope.view.lblAccountNumber.skin = scope.getFieldValue(scope._sknHeaderLbl);        
        scope.view.flxAccountNumberDescription.skin = scope.getFieldValue(scope._sknDescriptionBg);
        scope.view.lblAccountNumberDescription.skin = scope.getFieldValue(scope._sknDescriptionLbl);
        scope.view.flxAccountNumberSeparator.skin = scope.getFieldValue(scope._sknDescriptionSeparator);       
        scope.view.lblAccNoErrorMsg.skin = scope.getFieldValue(scope._errorValidationSkn);
        scope.view.flxAccountNumberInputLine.skin =  scope.getFieldValue(scope._accNumInputLineSkin);
		scope.view.btnAccNumberContinue.focusSkin = scope.getFieldValue(scope._sknEnableContexualBtn);
        for(var i=1; i<=16; i++){
          eval("scope.view.lblDigit"+i).skin = scope.getFieldValue(scope._accNumInputFieldSkin);
        }
        //text
        scope.view.lblAccountNumber.text = scope.getFieldValue(scope._titleAccountNumber);
        scope.view.lblAccountNumberDescription.text = scope.getFieldValue(scope._lblAccountNumber);
        scope.view.btnAccNumberContinue.text = scope.getFieldValue(scope._accountNumberBtn, "AccNumText");
        scope.view.btnAccountNumberCancel.text = scope.getFieldValue(scope._cancelButton);
        scope.view.btnAccountNumberCancel.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)) ? true : false;
        //Account Number or IBAN text box properties
        scope.view.txtAccountNumberorIBAN.skin = scope.getFieldValue(scope._textBoxNormalSkin);
        scope.view.txtAccountNumberorIBAN.focusSkin = scope.getFieldValue(scope._sknInputBoxBorder);
        scope.view.txtAccountNumberorIBAN.restrictCharactersSet = scope.getFieldValue(scope._txtInputAccountNumber,"restrictChars");
        scope.view.txtAccountNumberorIBAN.placeholder = scope.getFieldValue(scope._txtInputAccountNumber,"placeHolder");
        scope.view.txtAccountNumberorIBAN.maxTextLength = scope.getFieldValue(scope.getFieldValue(scope._txtInputAccountNumber,"IBANLength"),"max");
        scope.view.txtAccountNumberorIBAN.secureTextEntry = scope.getFieldValue(scope._txtInputAccountNumber, "mask");   
        } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setScreenDataEnterAccountNumber method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },	 
   /**     
	 * Component setPayeeAccountNumber
     * To add beneficiary accountNumber 
     * Enabling default parameters
    **/  
    setPayeeAccountNumber: function(){     
      try {
         var scope = this;       
        scope.setScreenDataEnterAccountNumber();
        scope.keypadStringAccountNumber = '';
        scope.initialAccountNumber = '';
        scope.flxNameAccountNoScreen = "flxInputAccNo";                                                                                          
        scope.isAccountNumberMasked = scope.getFieldValue(scope._txtInputAccountNumber, "mask");
        scope.view.btnAccNumberContinue.onClick = scope.btnInitialAccountNumberContinueOnClick;
        scope.view.flxAccountNumberBack.onTouchEnd = scope.btnAccNumberBackOnClick;
        scope.view.txtAccountNumberorIBAN.onTextChange = scope.onAccountNumberorIBANTextChange;
        scope.view.btnAccountNumberCancel.onClick = scope.onBackButtonClick;
        scope.incompleteCodeView();
        var transferType = scope.getFieldValue(scope._flowType);
        if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T2")|| scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T3")) {
          scope.view.flxAccountNumberWrapper.setVisibility(false);
          scope.view.flxAccountNumberInputLine.setVisibility(false);
          scope.view.flxAccountNumberKeyboard.setVisibility(false);
          scope.view.flxAccountNumberorIBANWrapper.setVisibility(true);
          scope.view.txtAccountNumberorIBAN.setFocus(true);
          if(transferType[scope.selectedFlowType] === "EDIT") {
            scope.view.txtAccountNumberorIBAN.text = scope.getFieldValue(scope._txtInputAccountNumber, "text");
            scope.onAccountNumberorIBANTextChange();
            } else {
              scope.view.txtAccountNumberorIBAN.text = "";
            }
          } else if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T1")) {
          if(transferType[scope.selectedFlowType] === "EDIT") {          
            var accountNumberEdit = scope.getFieldValue(scope._txtInputAccountNumber, "text");
            for(var i=1; i<= 16; i++){
              if(i <= (accountNumberEdit.length)){
                for(var j=1; j<= accountNumberEdit.length; j++){
              eval("scope.view.lblDigit"+j).text = accountNumberEdit[j-1];
               scope.keypadStringAccountNumber = accountNumberEdit;
                }
              }else{
                eval("scope.view.lblDigit"+i).text = "";
              }
            }
               scope.enterCodePostAction();
               scope.updateInputBulletsAccountNumber(scope.isAccountNumberMasked, scope.flxNameAccountNoScreen);
          }else{
            for(var i=1; i<=16;i++){
             eval("scope.view.lblDigit"+i).text = "";
            }
          }
            scope.view.flxAccountNumberWrapper.setVisibility(true);
            scope.view.flxAccountNumberInputLine.setVisibility(true);
            scope.view.flxAccountNumberKeyboard.setVisibility(true);
            scope.view.flxAccountNumberorIBANWrapper.setVisibility(false);
          }    
        scope.view.flxAccountNumber.forceLayout();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPayeeAccountNumber method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component onAccountNumberorIBANTextChange
     * Enabling continue button based on characters.
    **/
    onAccountNumberorIBANTextChange: function() {
      try {
        var scope = this;
        if(scope.flxNameAccountNoScreen === "flxInputAccNo") {
          var length = scope.getFieldValue(scope._txtInputAccountNumber, "IBANLength");
          var minlength = length["min"], maxlength = length["max"], title = scope.view.txtAccountNumberorIBAN.text;
          if(title.length >= minlength && title.length <= maxlength) {
            scope.enableButton("btnAccNumberContinue");
          }
          else {
            scope.disableButton("btnAccNumberContinue");
          }
          scope.view.lblAccNoErrorMsg.setVisibility(false);
          scope.view.txtAccountNumberorIBAN.skin = scope.getFieldValue(scope._sknInputBoxBorder);
        }
        if(scope.flxNameAccountNoScreen === "flxReInputAccNo") {
          var length = scope.getFieldValue(scope._txtInputReEnterAccountNumber, "IBANLength");
          var minlength = length["min"], maxlength = length["max"], title = scope.view.txtReAccountNumberorIBAN.text;
          if(title.length >= minlength && title.length <= maxlength) {
            scope.enableButton("btnReEnterAccNumberContinue");
          }
          else {
            scope.disableButton("btnReEnterAccNumberContinue");
          }
          scope.view.lblReEnterAccNoErrorMsg.setVisibility(false);
          scope.view.txtReAccountNumberorIBAN.skin = scope.getFieldValue(scope._sknInputBoxBorder);
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onAccountNumberorIBANTextChange method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**     
	 * Component setScreenDataReEnterAccountNumber
     * setting primary skins and text
    **/
    setScreenDataReEnterAccountNumber: function(){
      try{
        var scope =this;
        //skins
        scope.view.flxReEnterAccountNumberHeader.skin = scope.getFieldValue(scope._sknHeaderBg);
        scope.view.imgReEnterAccountNumberBack.src = scope.getFieldValue(scope._iconBack);
        scope.view.btnReEnterAccountNumberCancel.skin = scope.getFieldValue(scope._sknCancelBtn);        
        scope.view.lblReEnterAccountNumber.skin = scope.getFieldValue(scope._sknHeaderLbl);        
        scope.view.flxReEnterAccountNumberDescription.skin = scope.getFieldValue(scope._sknDescriptionBg);
        scope.view.lblReEnterAccountNumberDescription.skin = scope.getFieldValue(scope._sknDescriptionLbl);
        scope.view.flxReEnterAccountNumberSeparator.skin = scope.getFieldValue(scope._sknDescriptionSeparator);       
        scope.view.lblReEnterAccNoErrorMsg.skin = scope.getFieldValue(scope._errorValidationSkn);
        scope.view.flxReEnterAccountNumberInputLine.skin =  scope.getFieldValue(scope._accNumInputLineSkin);
        for(var i=1; i<=16; i++){
          eval("scope.view.lblDigit0"+i).skin = scope.getFieldValue(scope._reEnterAccNumInputFieldSkin);
        }
        scope.view.lblReEnterAccNoErrorMsg.setVisibility(false); 
        scope.view.btnReEnterAccNumberContinue.focusSkin = scope.getFieldValue(scope._sknEnableContexualBtn);
        //text
        scope.view.lblReEnterAccountNumber.text = scope.getFieldValue(scope._titleAccountNumber);
        scope.view.lblReEnterAccountNumberDescription.text = scope.getFieldValue(scope._lblReEnterAccountNumber);
        scope.view.btnReEnterAccNumberContinue.text = scope.getFieldValue(scope._accountNumberBtn, "ReEnterAccNumText");
        scope.view.btnReEnterAccountNumberCancel.text = scope.getFieldValue(scope._cancelButton);
        scope.view.btnReEnterAccountNumberCancel.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)) ? true : false;
        // Re-enter Account number or IBAN textbox properties.
        scope.view.txtReAccountNumberorIBAN.skin = scope.getFieldValue(scope._textBoxNormalSkin);
        scope.view.txtReAccountNumberorIBAN.focusSkin = scope.getFieldValue(scope._sknInputBoxBorder);
        scope.view.txtReAccountNumberorIBAN.restrictCharactersSet = scope.getFieldValue(scope._txtInputReEnterAccountNumber, "restrictChars");
        scope.view.txtReAccountNumberorIBAN.placeholder = scope.getFieldValue(scope._txtInputReEnterAccountNumber, "placeHolder");
        scope.view.txtReAccountNumberorIBAN.maxTextLength = scope.getFieldValue(scope.getFieldValue(scope._txtInputReEnterAccountNumber, "IBANLength"),"max");
        } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setScreenDataReEnterAccountNumber method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**     
	 * Component setPayeeReEnterAccountNumber
     * Re-entering account number for verification
     * Enabling default parameters
    **/
    setPayeeReEnterAccountNumber: function(){
      try {
        var scope = this;
        scope.setScreenDataReEnterAccountNumber();
        scope.keypadStringAccountNumber = '';
        scope.flxNameAccountNoScreen = "flxReInputAccNo";                                                                                                           
        scope.isAccountNumberMasked = scope.getFieldValue(scope._txtInputReEnterAccountNumber, "mask");
        scope.view.btnReEnterAccNumberContinue.onClick = scope.btnReEnterAccountNumberContinueOnClick;
        scope.view.flxReEnterAccountNumberBack.onTouchEnd = scope.btnReEnterAccNumberBackOnClick;
        scope.view.txtReAccountNumberorIBAN.onTextChange = scope.onAccountNumberorIBANTextChange;
        scope.view.btnReEnterAccountNumberCancel.onClick = scope.onBackButtonClick;
        scope.incompleteCodeView();
        var transferType = scope.getFieldValue(scope._flowType);
        if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T2") || scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T3")) {
          scope.view.flxReEnterAccountNumberWrapper.setVisibility(false);
          scope.view.flxReEnterAccountNumberInputLine.setVisibility(false);
          scope.view.flxReEnterAccountNumberKeypad.setVisibility(false);
          scope.view.flxReAccountNumberorIBANWrapper.setVisibility(true);
          scope.view.txtReAccountNumberorIBAN.setFocus(true);
          if(transferType[scope.selectedFlowType] === "EDIT") {
            scope.view.txtReAccountNumberorIBAN.text = scope.getFieldValue(scope._txtInputReEnterAccountNumber, "text");
            scope.onAccountNumberorIBANTextChange();
          } else {
            scope.view.txtReAccountNumberorIBAN.text = "";
          }
        } else if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T1")) {
          if(transferType[scope.selectedFlowType] === "EDIT") {   
            var accountNumberEdit = scope.getFieldValue(scope._txtInputReEnterAccountNumber, "text");
            for(var i=1; i<=16;i++){
              if(i <= (accountNumberEdit.length)){
                for(var j=1; j<= accountNumberEdit.length; j++){
                  eval("scope.view.lblDigit0"+j).text = accountNumberEdit[j-1];
                  scope.keypadStringAccountNumber = accountNumberEdit;
                }
              }else{
                eval("scope.view.lblDigit0"+i).text = "";
              }
            }
            scope.enterCodePostAction();
          }else{
            for(var i=1; i<=16;i++){
              eval("scope.view.lblDigit0"+i).text = "";
            }
          }
          scope.view.flxReEnterAccountNumberWrapper.setVisibility(true);
          scope.view.flxReEnterAccountNumberInputLine.setVisibility(true);
          scope.view.flxReEnterAccountNumberKeypad.setVisibility(true);
          scope.view.flxReAccountNumberorIBANWrapper.setVisibility(false);
        }   
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPayeeReEnterAccountNumber method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },

    /**     
	 * Component setKeypadCharAccountNumber
     * Input parameter of char is passed from keyboard
     * Function to add input from keyboard to string
    **/
    setKeypadCharAccountNumber: function(char) {
      try{
        this.keypadStringAccountNumber = this.keypadStringAccountNumber + char;
        if (this.keypadStringAccountNumber.length > 0 && this.keypadStringAccountNumber.length < 17) {
          this.enterCodePostAction();
        } else if (this.keypadStringAccountNumber.length < 1) {
          this.incompleteCodeView();
        } else if (this.keypadStringAccountNumber.length > 16) {
          this.keypadStringAccountNumber = this.keypadStringAccountNumber.slice(0, 16);
          return;
        }
        this.updateInputBulletsAccountNumber(this.isAccountNumberMasked, this.flxNameAccountNoScreen);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setKeypadCharAccountNumber method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**     
	 * Component clearKeypadCharAccountNumber
     * To clear char from keyboard
    **/
    clearKeypadCharAccountNumber: function() {
      try{
        if (this.keypadStringAccountNumber.length === 1) {
          this.keypadStringAccountNumber = '';
          this.updateInputBulletsAccountNumber(this.isAccountNumberMasked, this.flxNameAccountNoScreen);
        }
        if (this.keypadStringAccountNumber.length !== 0) {
          this.keypadStringAccountNumber = this.keypadStringAccountNumber.substr(0, this.keypadStringAccountNumber.length - 1);
          if (this.keypadStringAccountNumber.length < 1) {
            this.incompleteCodeView();
          }
          this.updateInputBulletsAccountNumber(this.isAccountNumberMasked, this.flxNameAccountNoScreen);
        }
        if (this.keypadStringAccountNumber.length < 1) {
          this.incompleteCodeView();
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in clearKeypadCharAccountNumber method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**     
	 * Component updateInputBulletsAccountNumber
     * Update field with underscore
    **/
    updateInputBulletsAccountNumber: function(isAccountNumberMasked, inputFlx) {
      try{
        var widgets = this.view[inputFlx].widgets();
        if(inputFlx === "flxInputAccNo"){
          isAccountNumberMasked = this.getFieldValue(this._txtInputAccountNumber, "mask");
        }
        for (var i = 0; i < this.keypadStringAccountNumber.length; i++) {
          //widgets[i].skin = "sknLbl484848sspReg50px";
          if(isAccountNumberMasked === true){
            //widgets[i].skin = "ICSknLbl94949487px";
            widgets[i].text = ".";
            widgets[i].skin = "ICSknLbl94949487px";
          }else{
            widgets[i].skin = "ICSknLbl42424255px";
            widgets[i].text = this.keypadStringAccountNumber[i];
          }        
        }
        for (var i = this.keypadStringAccountNumber.length; i < widgets.length; i++) {
          //widgets[i].skin = "sknLble3e3e3SSP60px";
          widgets[i].text = '';
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in updateInputBulletsAccountNumber method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**     
	 * Component enterCodePostAction
     * To enable button 
    **/
    enterCodePostAction: function() {
      try{
        if(this.flxNameAccountNoScreen === "flxInputAccNo"){
          var length = this.getFieldValue(this._txtInputAccountNumber, "length");
          var minlength = length["min"], maxlength = length["max"], title = this.keypadStringAccountNumber;
          if(title.length >= minlength && title.length <= maxlength) {
            this.enableButton("btnAccNumberContinue");														  
          }
          else{
            this.incompleteCodeView();
          }
        }
        if(this.flxNameAccountNoScreen === "flxReInputAccNo"){
          var length = this.getFieldValue(this._txtInputReEnterAccountNumber, "length");
          var minlength = length["min"], maxlength = length["max"], title = this.keypadStringAccountNumber;
          if(title.length >= minlength && title.length <= maxlength) {
            this.enableButton("btnReEnterAccNumberContinue");																 
          }
          else{
            this.incompleteCodeView();
          }
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in enterCodePostAction method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**     
	 * Component incompleteCodeView
     * To disable button 
    **/
    incompleteCodeView: function() {
      try{
        if(this.flxNameAccountNoScreen === "flxInputAccNo"){
          this.disableButton("btnAccNumberContinue");														 
        }
        if(this.flxNameAccountNoScreen === "flxReInputAccNo"){
          this.disableButton("btnReEnterAccNumberContinue");																
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in incompleteCodeView method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },

  /**   
	 * Component btnInitialAccountNumberContinueOnClick
     * To navigate next page 
     * Validation for input account number
    **/
    btnInitialAccountNumberContinueOnClick: function() {
      var scope = this;
      try{ 
         scope.view.lblAccNoErrorMsg.setVisibility(false);
        if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T2") || scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T3")) {
          if(scope.validationUtilManager.isValidIBANNumber(scope.view.txtAccountNumberorIBAN.text) || scope.validationUtilManager.isValidAccountNumber(scope.view.txtAccountNumberorIBAN.text)){
            scope.updateContext("accountNumber", scope.view.txtAccountNumberorIBAN.text);
            scope.updateContext("toAccountNumber", scope.view.txtAccountNumberorIBAN.text);
            scope.view.txtAccountNumberorIBAN.skin = scope.getFieldValue(scope._textBoxNormalSkin);
            scope.view.lblAccNoErrorMsg.setVisibility(false);
            scope.navigateTo("flxReEnterAccountNumber", "flxReEnterAccountNumberTop", scope.getFieldValue(scope._titleAccountNumber));
            scope.keyboardDataSettingReEnterAccountNumber();
            scope.setPayeeReEnterAccountNumber();
          } else {
            scope.incompleteCodeView();																	 
            scope.view.lblAccNoErrorMsg.text = scope.getFieldValue(scope._accNumErrorMessage, "invalidAccNumberOrIBAN");
            scope.view.txtAccountNumberorIBAN.skin = scope.getFieldValue(scope._textBoxErrorSkin);
            scope.view.lblAccNoErrorMsg.setVisibility(true);
          } 
        } else {
          if(scope.validationUtilManager.isValidAccountNumber(scope.keypadStringAccountNumber)){
            scope.updateContext("accountNumber", scope.keypadStringAccountNumber);
            scope.updateContext("toAccountNumber", scope.keypadStringAccountNumber);
            scope.initialAccountNumber = scope.keypadStringAccountNumber;
            scope.view.lblAccNoErrorMsg.setVisibility(false);
            scope.navigateTo("flxReEnterAccountNumber", "flxReEnterAccountNumberTop", scope.getFieldValue(scope._titleAccountNumber));
            scope.setPayeeReEnterAccountNumber();
            scope.keyboardDataSettingReEnterAccountNumber();															
        } else {
            scope.keypadStringAccountNumber = '';
            scope.updateInputBulletsAccountNumber(this.isAccountNumberMasked, this.flxNameAccountNoScreen);
            scope.incompleteCodeView();																	 
            scope.view.lblAccNoErrorMsg.text = scope.getFieldValue(scope._accNumErrorMessage, "invalidAccNumber");
            scope.view.lblAccNoErrorMsg.setVisibility(true);
          } 
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in btnInitialAccountNumberContinueOnClick method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

	/**     
	 * Component getLastNDigits
     * To get last n number of digits
    **/
     getLastNDigits: function(string, n){
     return string.substring(string.length - n)
    },

     /**     
	 * Component isValidAccountNumberOrNot
     * Verifying both inputs are same
    **/
    isValidAccountNumberOrNot: function() {
      try {
        var scope = this;
        if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T2") || scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T3")) {
          if(scope.view.txtAccountNumberorIBAN.text === scope.view.txtReAccountNumberorIBAN.text) {
            scope.view.txtReAccountNumberorIBAN.skin = scope.getFieldValue(scope._textBoxNormalSkin);
			var accountName = scope.getFieldValue(scope._txtInputRecipientName, "text") +"...."+ scope.getLastNDigits(scope.view.txtAccountNumberorIBAN.text, 4);
            scope.updateContext("toAccountName", accountName);
            scope.updateContext("IBAN", scope.view.txtReAccountNumberorIBAN.text);
            scope.updateContext("toAccountNumber", scope.view.txtReAccountNumberorIBAN.text);
            scope.updateContext("payeeAccountNumberOrIBAN", scope.view.txtReAccountNumberorIBAN.text);
            scope.updateContext("accountNumber", scope.view.txtReAccountNumberorIBAN.text);
            return true; 
          } else {
            return false;
          }
        } else {
          if(scope.initialAccountNumber === scope.keypadStringAccountNumber) {
			var accountName = scope.getFieldValue(scope._txtInputRecipientName, "text") +"...."+ scope.getLastNDigits(scope.initialAccountNumber, 4);
            scope.updateContext("toAccountName", accountName);
            scope.updateContext("toAccountNumber", scope.initialAccountNumber);
            scope.updateContext("accountNumber", scope.initialAccountNumber);
            return true;
          } else {
            scope.keypadStringAccountNumber = '';
            scope.updateInputBulletsAccountNumber(scope.isAccountNumberMasked,"flxReInputAccNo");
            return false;
          }
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in isValidAccountNumberOrNot method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

     /**     
	 * Component onAccountNumberContinueNavigation
     * Navigate to next screen based on flow type.
    **/
    onAccountNumberContinueNavigation: function() {
      try {
      var scope = this;
      var transferType = scope.getFieldValue(scope._flowType);
      if(transferType[scope.selectedFlowType] === "EDIT") {
          scope.setVerifyDetails();
          scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
        }
        else if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T2") || scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T3")) {																
          scope.setRequiredCode();
          scope.navigateTo("flxRequiredCode","flxRequiredCodeTop",scope.getFieldValue(scope._titleRequiredCode));
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onAccountNumberContinueNavigation method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component onIBANSuccess
     * Method to be invoke on IBAN success call back.
    **/
    onIBANSuccess: function(response) {
      try {
        var scope = this;
        var transferType = scope.getFieldValue(scope._flowType);
        scope.onRequestEnd();
        scope.isIBANValid = response.isIBANValid;
        if(scope.payeeFlow === "Existing") {
          if(transferType[scope.selectedFlowType] === "EDIT" && this.isToAccountEdit=="true") {
            scope.setVerifyDetails();
            scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
          }else{
            scope.navigateTo("flxAmount","flxAmountTop",scope.getFieldValue(scope._transferAmountHeader));
            scope.setTransferAmount();
          }
        } else {
          if(scope.isIBANValid === "YES") {
            scope.invokeSwiftServiceFromIBAN();
          }
          else {
            scope.onAccountNumberContinueNavigation();
          }
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onIBANSuccess method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component invokeSwiftServiceFromIBAN
     * Invoke service to get swift code for IBAN.
    **/
     invokeSwiftServiceFromIBAN : function(){
      try {
      var scope = this;
      scope.onRequestStart();
      scope.setCriteria(scope._IBANSwiftCriteria);  
      var objSvcName = scope.getFieldValue(scope._IBANSwiftObjectServiceName);
      var objName = scope.getFieldValue(scope._IBANSwiftObjectName);
      var operationName = scope.getFieldValue(scope._IBANSwiftOperationName);
      var criteria = scope.getCriteria();
      scope.UnifiedTransferDAO.getSwiftCode
       (objSvcName,objName,operationName,criteria,scope.setSwiftCodeForNewPayee,scope.onSwiftServiceFailure);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in invokeSwiftServiceFromIBAN method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
     },

    onSwiftServiceFailure: function() {
      try {
      var scope = this;
      scope.failureValidation();
      scope.onAccountNumberContinueNavigation();    
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onSwiftServiceFailure method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
     /**     
	 * Component setSwiftCodeForNewPayee
     * Get swift code anad bank Name from response and set to the context.
    **/
    setSwiftCodeForNewPayee : function(response) {
      try {
      var scope = this;
      var bic = response[scope.getFieldValue(scope._swiftCodeKeyIdentifier)];
      var bankName = response[scope.getFieldValue(scope._bankNameKeyIdentifier)];
      if(!scope.isEmptyNullUndefined(bic))  {
      scope.updateContext("swiftCode", bic);
      } 
      if(!scope.isEmptyNullUndefined(bankName)) { 
      scope.updateContext("bankName", bankName);
      }
      scope.onRequestEnd();
      scope.onAccountNumberContinueNavigation();  
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setSwiftCodeForNewPayee method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component onAccountNumberSuccess
     * Method to be invoke on Account Number success call back.
    **/
    onAccountNumberSuccess: function(response) {
      try {
        var scope = this;
        scope.onRequestEnd();
        var transferType = scope.getFieldValue(scope._flowType);
        if(response.beneficiaryName == "" ) {                    
          scope.view.lblReEnterAccNoErrorMsg.text = scope.getFieldValue(scope._accountNumberNotMatch);
          scope.view.lblReEnterAccNoErrorMsg.setVisibility(true);
          scope.incompleteCodeView();
        } else {
          scope.updateContext("toAvailableBalance",response.beneficiaryName);
          if(transferType[scope.selectedFlowType] === "EDIT") {
            scope.setVerifyDetails();
            scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
          }
          else{
            if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T1")){
              scope.setTransferAmount();
              scope.navigateTo("flxAmount","flxAmountTop",scope.getFieldValue(scope._transferAmountHeader));													 
            } 
          }
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onAccountNumberSuccess method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component isExistingAccount
     * Checking whether it is existing account Number.
    **/
    isExistingAccount: function(accountNumber) {
      try {
        var scope = this;
        var existingAccounts = scope.existToAccounts;
        for(var index in existingAccounts) {
          if(!scope.isEmptyNullUndefined(existingAccounts[index].accountNumber)) {
            if(accountNumber.toUpperCase() === existingAccounts[index].accountNumber.toUpperCase()) {
              return accountNumber;
            }
          }
          else if(!scope.isEmptyNullUndefined(existingAccounts[index].accountID)) {
            if(accountNumber.toUpperCase() === existingAccounts[index].accountID.toUpperCase()) {
              return accountNumber;
            }
          }
        }
        return "";
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in isExistingAccount method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component invokeValidateIBANService
     * Invoke validate IBAN service to check valid or not.
    **/
     invokeValidateIBANService : function() {
       try {
         var scope = this;
         scope.onRequestStart();
         scope.setCriteria(scope._IBANCriteria);
         var objSvcName = scope.getFieldValue(scope._IBANObjectServiceName);
         var objName = scope.getFieldValue(scope._IBANObjectName);
         var operationName = scope.getFieldValue(scope._IBANOperationName);
         var criteria = scope.getCriteria();
         scope.UnifiedTransferDAO.validateIBAN
         (objSvcName,objName,operationName,criteria,scope.onIBANSuccess,scope.failureValidation); 
       } catch(err) {
        var errObj = {
          "errorInfo" : "Error in invokeValidateIBANService method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
     },

    /**     
	 * Component btnReEnterAccountNumberContinueOnClick
     * To navigate to next page 
     * Validation for input account number
     * Verifying both inputs are same
    **/
    btnReEnterAccountNumberContinueOnClick: function() {
      var scope = this;
      try {
        scope.view.lblReEnterAccNoErrorMsg.setVisibility(false);
        var isValidAccNo = scope.isValidAccountNumberOrNot();
        var transferType = scope.getFieldValue(scope._flowType);
        if(isValidAccNo) {
         if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T2") || scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T3")){
			if(scope.validationUtilManager.isValidIBAN(scope.view.txtAccountNumberorIBAN.text) || scope.validationUtilManager.isValidAccountNumber(scope.view.txtAccountNumberorIBAN.text)){
           var existingToAccounts = scope.isExistingAccount(scope.view.txtAccountNumberorIBAN.text);
            if(existingToAccounts.length === 0) {
              scope.invokeValidateIBANService();          
            } else {
              scope.view.lblReEnterAccNoErrorMsg.text =scope.getFieldValue(scope._accountNumberExistMsg); 
              scope.view.lblReEnterAccNoErrorMsg.setVisibility(true);
              scope.view.txtReAccountNumberorIBAN.skin = scope.getFieldValue(scope._textBoxErrorSkin);
              scope.incompleteCodeView();
            }
            } else {
              scope.incompleteCodeView();																	 
              scope.view.lblReEnterAccNoErrorMsg.text = scope.getFieldValue(scope._accNumErrorMessage, "invalidAccNumberOrIBAN");
              scope.view.txtReAccountNumberorIBAN.skin = scope.getFieldValue(scope._textBoxErrorSkin);
              scope.view.lblReEnterAccNoErrorMsg.setVisibility(true);
            }
          } else {
            var results = scope.isExistingAccount(scope.initialAccountNumber);
            if(results.length === 0) {            
              scope.onRequestStart();
              scope.setCriteria(scope._getBeneficiaryCriteria)
              var objSvcName = scope.getFieldValue(scope._getBeneficiaryService);
              var objName = scope.getFieldValue(scope._getBeneficiaryObject);
              var operationName = scope.getFieldValue(scope._getBeneficiaryOperation);
              var criteria = scope.getCriteria();
              scope.UnifiedTransferDAO.getBeneficiaryName
              (objSvcName,objName,operationName,criteria,scope.onAccountNumberSuccess,scope.failureValidation);
            } else {
              scope.view.lblReEnterAccNoErrorMsg.text =scope.getFieldValue(scope._accountNumberExistMsg); 
              scope.view.lblReEnterAccNoErrorMsg.setVisibility(true);
              scope.incompleteCodeView();
            }
          }
        }
        else {
          scope.updateInputBulletsAccountNumber(this.isAccountNumberMasked, this.flxNameAccountNoScreen);
          scope.incompleteCodeView();
          scope.view.lblReEnterAccNoErrorMsg.skin = scope._errorValidationSkn;
          scope.view.lblReEnterAccNoErrorMsg.text = scope.getFieldValue(scope._reEnterAccNumErrorMessage); 
          scope.view.lblReEnterAccNoErrorMsg.setVisibility(true);
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in btnReEnterAccountNumberContinueOnClick method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },

    /**     
	 * Component btnAccNumberBackOnClick
     * Function for back navigation - Account Number 
    **/
    btnAccNumberBackOnClick: function(){
      try {
        var scope = this;       
        scope.goBack();														 
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in btnAccNumberBackOnClick method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**     
	 * Component btnReEnterAccNumberBackOnClick
     * Function for back navigation - Re-enter Account Number
    **/
    btnReEnterAccNumberBackOnClick: function(){
      try{
        var scope = this; 
        scope.flxNameAccountNoScreen = "flxInputAccNo";
        scope.keypadStringAccountNumber = scope.initialAccountNumber;
        scope.goBack();														
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in btnReEnterAccNumberBackOnClick method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**     
	 * Component setScreenDataE2EReference
     * setting primary skins and data for the screen
    **/ 
    setScreenDataE2EReference: function(){
      try{
        var scope = this;
        //skins
        scope.view.flxE2EHeader.skin = scope.getFieldValue(scope._sknHeaderBg);
        scope.view.imgE2EBack.src = scope.getFieldValue(scope._iconBack);
        scope.view.btnE2ECancel.skin = scope.getFieldValue(scope._sknCancelBtn);
        scope.view.lblE2EHeader.skin = scope.getFieldValue(scope._sknHeaderLbl);
        scope.view.lblE2E.skin = scope.getFieldValue(scope._subTitleSkin);
        scope.view.btnE2EContinue.skin = scope.getFieldValue(scope._sknEnableContexualBtn);
        scope.view.txtE2E.skin = scope.getFieldValue(scope._textBoxNormalSkin); 
        scope.view.txtE2E.focusSkin = scope.getFieldValue(scope._sknInputBoxBorder);
        scope.view.skin = scope.getFieldValue(scope._sknDescriptionBg);
		scope.view.btnE2EContinue.focusSkin = scope.getFieldValue(scope._sknEnableContexualBtn);
        //text
        scope.view.lblE2EHeader.text = scope.getFieldValue(scope._titleE2ERef);
        scope.view.flxE2EMainContainer.lblE2E.text = scope.getFieldValue(scope._lblE2ERef);
        scope.view.btnE2EContinue.text =  scope.getFieldValue(scope._E2EBtn, "text"); 
        scope.view.btnE2ECancel.text = scope.getFieldValue(scope._cancelButton);
        scope.view.btnE2ECancel.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)) ? true : false;
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setScreenDataE2EReference method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**
	 * Component setE2EReference
     * Enabling default parameters
    **/  
    setE2EReference: function(){      
      try {
        var scope = this;
        scope.setScreenDataE2EReference();  
        scope.view.flxE2EWrapper.txtE2E.placeholder = scope.getFieldValue(scope._txtInputE2ERef, "placeHolder");
        scope.view.flxE2EWrapper.txtE2E.textInputMode = scope.getFieldValue(scope._txtInputE2ERef, "inputMode");
        scope.view.flxE2EWrapper.txtE2E.maxTextLength = scope.getFieldValue(scope.getFieldValue(scope._txtInputE2ERef,"length"),"max");
        scope.view.flxE2EWrapper.txtE2E.onTextChange = scope.onE2EReferenceTextChange;
        scope.view.btnE2EContinue.onClick = scope.btnE2EContinueOnClick;
        scope.view.flxE2EBack.onTouchEnd = scope.goBack;
        scope.view.btnE2ECancel.onClick = scope.onBackButtonClick;
        if(!this.isEmptyNullUndefined(this.context.e2eReference)){
        scope.view.flxE2EWrapper.txtE2E.text = scope.getFieldValue(scope._txtInputE2ERef, "text");
        this.enableButton("btnE2EContinue");
      } else {
        scope.view.flxE2EWrapper.txtE2E.text = "";
        this.disableButton("btnE2EContinue");
      }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setE2EReference method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },

    /**
     * Component onE2EReferenceTextChange
     * Continue button Validation based on recipeintname limit.
     */
    onE2EReferenceTextChange: function() {
      try {
        var scope = this;
        var length = scope.getFieldValue(scope._txtInputE2ERef, "length");
        var minlength = length["min"],  title = scope.view.txtE2E.text;
        if(!scope.isEmptyNullUndefined(title)) {
          if(title.length >= minlength) {
            scope.enableButton("btnE2EContinue");
          } else {
            scope.disableButton("btnE2EContinue");
          }
        }else{
          scope.disableButton("btnE2EContinue");																							  
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onE2EReferenceTextChange method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**     
	 * Component btnE2EContinueOnClick
     *Continue button action based of flow type
    **/
     btnE2EContinueOnClick: function(){
     try{
        var scope = this;
        if(!(scope.isEmptyNullUndefined(scope.view.txtE2E.text))) {
          scope.updateContext("e2eReference", scope.view.txtE2E.text);
          scope.setVerifyDetails();
          scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in btnE2EContinueOnClick method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
        
    /**
     * Component getToAccounts
     * Reponsible to call the DAO method for invoking service api.
     */
    getToAccounts:function(){
	  this.onRequestStart();
      this.getCreditcardAccounts();
      this.setCriteria(this._toAccCriteria);
	  this.toAccClearSearchApplied = true;
      this.view.tbxToSearch.text = "";
      this.view.imgToCloseIcon.setVisibility(false);
      this.isToSearchApplied = false;
      this.view.segToAccounts.removeAll();
      this.view.segToAccounts.setVisibility(true);
      this.view.flxNoResults.setVisibility(false);
      this.UnifiedTransferDAO.fetchAccounts(this._toAccObjServiceName, this._toAccOperationName, this._toAccObjectName, this.getCriteria(), this._toAccServiceResIdentifier, this.setToAccounts, this.failureValidation);
    },
	 /**
     * Component getToAccounts
     * Reponsible to call the DAO method for invoking service api.
     */
    getCreditcardAccounts:function(){
      this.setCriteria(this._creditcardCriteria);
      this.UnifiedTransferDAO.fetchAccounts(this._creditcardObjServName, this._creditcardOperationName, this._creaditcardObjectName, this.getCriteria(), this._creditcardResponseIdentifier, this.creditcardAccounts, this.OnError);
    },
    /**
     * Component getLoanAccountDetails
     * Reponsible to call the DAO method for invoking service api.
     */
    getLoanAccountDetails:function(){
      this.onRequestStart();
      this.setCriteria(this._loanCriteria);
      this.UnifiedTransferDAO.fetchAccounts(this._loanObjectServiceName, this._loanOperationName, this._loanObjectName, this.getCriteria(), this._creditcardResponseIdentifier, this.getSuccessLoanDetails, this.getFailureLoanDetails);
    },
    /**
     * Component creditcardAccounts
     * set creditcard accounts to globel variable.
     */
    creditcardAccounts:function(creditcardData){
      this.creditcardData = creditcardData.Accounts;
    },
    /**
     * Component getSuccessLoanDetails
     * setloan details
     */
	getSuccessLoanDetails : function(response)
    {
      var scope = this;
      var dueDate = response.Accounts[0].nextPaymentDate;
      
      this.onRequestEnd();
      if(!scope.isEmptyNullUndefined(dueDate))
      {
        scope.updateContext("dueDate", this.FormatUtils.getFormatedDateString(new Date(dueDate),scope._selectedDateFormat));
        scope.view.lblDueDate.text = "(Due Date: "+scope.context["dueDate"]+")";
        scope.view.lblDueDate.setVisibility(true);
      }
      else
      {
        scope.view.lblDueDate.setVisibility(false);
      }
      scope.navigateTo("flxOtherAmount","flxOtherAmountTop",this.getFieldValue(this._otherAmtHeader));
      scope.setTransferOtherAmount();
    },
    /**
     * Component getFailureLoanDetails
     * setloan details
     */
	getFailureLoanDetails : function(response)
    {
      var scope = this;
      this.onRequestEnd();
      scope.navigateTo("flxOtherAmount","flxOtherAmountTop",this.getFieldValue(this._otherAmtHeader));
      scope.setTransferOtherAmount();
    },
   /**     
	 * Component setToAccounts
     * To generate the JSONpath for service response
     * backendResponse{JSONObject} - response received from the backend
     * unicode{string}             - unique code to identify the service response in case of multiple service calls.
     */
    setToAccounts:function(toData,unicode){
     
      if(this.transferTypeContext === this.getFieldValue(this._transferTypes,"T4")) {
        this.view.btnTransferNewPayee.setVisibility(false);
      } else {
        this.view.btnTransferNewPayee.setVisibility(true);
      }
	   this.toAccSegmentData = '';
	  this.view.lbltransferTo.text = this.getFieldValue(this._toAccountsTitle);
      this.view.segToAccounts.setVisibility(true);
      this.parserUtilsManager.setResponseData(toData,unicode);
      this.view.btnTransferNewPayee.onClick = this.setAddNewPayeeData;
      this.view.btnToTransferNewPayee.onClick = this.setAddNewPayeeData;
      this.view.flxClearAmount.onTouchEnd = this.clearAmountKeypad;      
      this.view.imgToBack.onTouchEnd = this.goBack;
      this.view.imgToBack.src=this.getFieldValue(this._iconBack);
      this.view.btnToCancel.onClick = this.onBackButtonClick;
      this.view.btnToCancel.isVisible = !this.isEmptyNullUndefined(this.getFieldValue(this._cancelButton)) ? true : false;
      this.view.btnToCancel.text = this.getFieldValue(this._cancelButton);
      this.view.tbxToSearch.onTextChange = this.toAccSearch;
      this.view.tbxToSearch.skin=this.getFieldValue(this._sknSearchBox);
	  this.view.tbxToSearch.placeholder = this.getFieldValue(this._searchProperties, "placeHolder");
      this.view.imgToCloseIcon.onTouchStart = this.clearToSearchTxt;
      this.view.imgToCloseIcon.src=this.getFieldValue(this._iconSearchClose);
	  this.view.imgToCloseIcon.setVisibility(false);											
      this.view.imgToSearch.src=this.getFieldValue(this._iconSearch);
	  this.view.lblToDescription.text = this.getFieldValue(this._todescriptionLabel);
      this.view.lbltransferTo.skin = this.getFieldValue(this._sknHeaderLbl);
      this.view.flxToHeader.skin = this.getFieldValue(this._sknHeaderBg);
      this.view.flxToDescription.skin = this.getFieldValue(this._sknDescriptionBg);
      this.view.lblToDescription.skin = this.getFieldValue(this._sknDescriptionLbl);
      this.view.flxToSeparator.skni = this.getFieldValue(this._sknDescriptionSeparator);
      if(this.isToSearchApplied !=true && this.toAccClearSearchApplied === true){
      this.toAccounts = toData;
      var data = toData.ExternalAccounts;
      var accounts = [];
      if(this.transferTypeContext == "Within Same Bank") {
        for(var i = 0; i < data.length;i++){
          if(data[i].isSameBankAccount === "true"){
            accounts.push(data[i]);
            accounts[accounts.length-1]["groupType"] = "All Payees";
            accounts[accounts.length-1]["beneType"] = "external"
          }
        }
		var internalAccounts=[];
        var internalAccounts =  this.response[this._fromAccountObjectName];
        for(var i=0; i<internalAccounts.length;i++){
          if(internalAccounts[i].accountID !== this.context.fromAccountNumber) {
            accounts.push(internalAccounts[i]);
            accounts[accounts.length-1]["groupType"] = internalAccounts[i].accountType;
            accounts[accounts.length-1]["beneType"] = "internal";
          }
        }
        var creditcardAccounts = this.creditcardData;
        for(var i=0; i<creditcardAccounts.length;i++){
          accounts.push(creditcardAccounts[i]);
          accounts[accounts.length-1]["groupType"] = creditcardAccounts[i].accountType;
          accounts[accounts.length-1]["beneType"] = "internal";
        }
      }
      if(this.transferTypeContext == "Domestic Transfer") {
        for(var i = 0; i < data.length;i++){
          if(data[i].isSameBankAccount === "false" && data[i].isInternationalAccount === "false"){
            accounts.push(data[i]);
            accounts[accounts.length-1]["groupType"] = "All Payees";
            accounts[accounts.length-1]["beneType"] = "external";
          }
        }
      }
      if(this.transferTypeContext === "International Transfer") {
        for(var i = 0; i < data.length;i++){
          if(data[i].isSameBankAccount === "false" && data[i].isInternationalAccount === "true"){
            accounts.push(data[i]);
            accounts[accounts.length-1]["groupType"] = "All Payees";
            accounts[accounts.length-1]["beneType"] = "external";
          }
        }
      }
      if(this.transferTypeContext === "Pay a Person"){
        var p2pAccounts = toData.PayPerson;
        for(var i = 0; i < p2pAccounts.length;i++){
          accounts.push(p2pAccounts[i]);
          accounts[accounts.length-1]["groupType"] = "All Payees";
          accounts[accounts.length-1]["beneType"] = "external";
        }
      }
      this.existToAccounts = accounts;
      for(var i = 0; i < accounts.length;i++){
        var formatedData = this.getFormattedData(this.getFieldValue(this._toField1Value),accounts[i]);
        accounts[i]["toAccountName"] = formatedData;
        accounts[i]["lblField1"]={
          "text":formatedData,
          "isVisible":!this.isEmptyNullUndefined(formatedData)
        }; 
        formatedData = this.getFormattedData(this.getFieldValue(this._toField2Value),accounts[i]);
        accounts[i]["lblField2"]={
          "text":formatedData,
          "isVisible":!this.isEmptyNullUndefined(formatedData)
        };
        accounts[i]["toAvailableBalance"] = !this.isEmptyNullUndefined(formatedData)? formatedData:"";
        this.context["accountType"] =!this.isEmptyNullUndefined(accounts[i].accountType)? accounts[i].accountType.toLowerCase():"";
        accounts[i]["lblField4"]={
          "text":this.getFieldValue(this._toField4Value),
          "isVisible":!this.isEmptyNullUndefined(formatedData)
        }; 
        formatedData = this.getFormattedData(this.getFieldValue(this._toField3Value),accounts[i]);
        accounts[i]["lblField3"]={
          "text":formatedData,
          "isVisible":!this.isEmptyNullUndefined(formatedData)
        };
         var bankIcon = (!kony.sdk.isNullOrUndefined(this.getBankIcon(accounts[i].bankName)))?this.getBankIcon(accounts[i].bankName):null;
          
        accounts[i]["imgIcon31"]={
          "src":bankIcon,
          "isVisible":accounts[i].isSameBankAccount === "false" && !kony.sdk.isNullOrUndefined(bankIcon) ? true : false
        };
        var businessAccount=this.isBusinessAccount(accounts);
        var retailAccount=this.isRetailAccount(accounts);
        if(businessAccount !=0 && retailAccount!=0){
          if(accounts[i].isBusinessAccount==="true" || accounts[i].isBusinessPayee==="1"){
          accounts[i]["imgIcon3"]={
            "src":this.getFieldValue(this._businessIcon),
            "isVisible":!this.isEmptyNullUndefined(this.getFieldValue(this._businessIcon))
          };
        }else if(accounts[i].isBusinessAccount=== undefined && accounts[i].isBusinessPayee===undefined){
          accounts[i]["imgIcon3"]={
            "isVisible": false
          };

        }else{
          accounts[i]["imgIcon3"]={
            "src":this.getFieldValue(this._retailIcon),
            "isVisible":!this.isEmptyNullUndefined(this.getFieldValue(this._retailIcon))
          }; 
        }
        }
       if( (!this.isEmptyNullUndefined(accounts[i]["imgIcon31"]) && accounts[i]["imgIcon31"].isVisible==true) )
        {        
          if(!this.isEmptyNullUndefined(accounts[i]["imgIcon3"]) && accounts[i]["imgIcon3"].isVisible==true)
          {
             accounts[i]["flxIcon3"]={
            "width":"46dp"
             }
          }
          else
          {
             accounts[i]["flxIcon3"]={
            "width":"23dp"
            }
          }   
         
        }
        else
        {
          if(!this.isEmptyNullUndefined(accounts[i]["imgIcon3"]) && accounts[i]["imgIcon3"].isVisible==true)
          {
             accounts[i]["flxIcon3"]={
            "width":"23dp"
             }
          }
          else
          {
             accounts[i]["flxIcon3"]={
            "width":"0dp"
            }
          }  
        }
        this.toAccRecordsArray = accounts;
      }
      }
      else{
        accounts=toData;
      }
      var groupedToAcc=[]; 
      groupedToAcc = this.groupResponseData(accounts,"groupType");
      var groupedToAccKey = Object.keys(groupedToAcc);
      var sectionData=[];
      for(i=0;i<groupedToAccKey.length;i++){
        var toAccData={};
        toAccData=[
          {"lblHeaderName":{
            text :groupedToAccKey[i]+"  ("+groupedToAcc[groupedToAccKey[i]].length+")"}, 
           "imgChevron": this._iconGroupExpand,
          },groupedToAcc[groupedToAccKey[i]]
        ]
        sectionData.push(toAccData);
      }
      if(sectionData.length !== 0){
        if(this.isToSearchApplied !=true){
        this.formatedToAccBackup = sectionData;
        }
        this.view.flxToAccountMain.segToAccounts.widgetDataMap = this.backUpFromAccountMapping;
        this.view.flxToAccountMain.segToAccounts.onRowClick = this.selectToAccount;
        this.view.flxToAccountMain.segToAccounts.setData(sectionData);
      }else{
        this.view.segToAccounts.setVisibility(false);
        this.view.flxNoResults.setVisibility(true);
        this.view.btnToTransferNewPayee.onClick = this.setAddNewPayeeData;
      }
      
      this.view.flxToAccount.forceLayout();
      this.onRequestEnd();
    },
         /*
     * Component toAccSearch
     * Responsible to perform search operation and update segment data 
     */
	  toAccSearch:function(){
      var self = this;
      try{
        var searchTxt = this.view.tbxToSearch.text.toLowerCase();
        this.isToSearchApplied = false;
        if(searchTxt != ""){
          var result=[];
		   this.view.imgToCloseIcon.setVisibility(true);											   
          var data = this.toAccRecordsArray;
           for (var i = 0; i < data.length; i++) {
			for (var j = 0; j < 3; j++) {
				if (!kony.sdk.isNullOrUndefined(data[i]["lblField"+(j+1)]["text"]) && 
				data[i]["lblField"+(j+1)]["text"].toLowerCase().indexOf(searchTxt) >= 0) {
                result.push(data[i]);
               break;
            }
        }
        }
          if(!(result.length > 0)){
            this.view.segToAccounts.setVisibility(false);
            this.view.flxNoResults.setVisibility(true);
          }else{
            this.isToSearchApplied = true;
            result = this.setToAccounts(result);
          }
        }
        else{
          this.clearToSearchTxt();         
          this.view.segToAccounts.removeAll();
          this.setToAccounts(this.toAccounts);
          this.view.segToAccounts.setVisibility(true);
          this.view.flxNoResults.setVisibility(false);
          this.view.imgToCloseIcon.setVisibility(false);
        }
        this.view.forceLayout();
      }
      catch(e){
        var errorObj =
            {
              "errorInfo" : "Error in performing search",
              "errorLevel" : "Buisness",
              "error": e
            };
        self.onError(errorObj);
      }

    },
	
	 /*
     * Component clearToSearchTxt
     * Responsible to clear text box texts  
     */
    clearToSearchTxt:function(){
      this.toAccClearSearchApplied=true;
      this.view.tbxToSearch.text="";
      this.view.imgToCloseIcon.setVisibility(false);
      this.isToSearchApplied = false;
      this.view.segToAccounts.removeAll();
      this.setToAccounts(this.toAccounts);   
      this.view.segToAccounts.setVisibility(true);
      this.view.flxNoResults.setVisibility(false);
    },
    /*
     * Component getBankIcon
     * Responsible to get bank icon based on bank name
     * return image
     */
    getBankIcon : function(bankName){
      var img ;
      if(!kony.sdk.isNullOrUndefined(bankName)){
        if(bankName.toLowerCase().includes("citi"))
          img= this.Icons.CITI_BANK_IMAGE;
        else if(bankName.toLowerCase().includes("chase"))
          img= this.IconsCHASE_BANK_IMAGE;
        else if(bankName.toLowerCase().includes("boa") || bankName.toLowerCase().includes("america") )
          img= this.Icons.BOA_BANK_IMAGE;
        else if(bankName.toLowerCase().includes("hdfc"))
          img = this.Icons.HDFC_BANK_IMAGE;
        else if(bankName.toLowerCase().includes("infintiy"))
          img = this.Icons.INFINITY_BANK_IMAGE;
        else
          img= this.Icons.EXTERNAL_BANK_IMAGE;
      }
      return img;
    }, 
    
       /*
     * Component storeIconValues
     * Responsible to get the parsed images values and store in icon lists
     */
    storeIconValues: function(){
      var self = this;
      try{
        this.Icons = {
          "clearText" : this.getFieldValue(this._iconClearFilter),
          "dropdownExpand" : this.getFieldValue(this._iconDropdownExpand),
          "CITI_BANK_IMAGE" : this.getFieldValue(this._citiBankImg),
          "CHASE_BANK_IMAGE" :this.getFieldValue(this._chaseBankImg),
          "BOA_BANK_IMAGE" : this.getFieldValue(this._boaBankImg),
          "HDFC_BANK_IMAGE" : this.getFieldValue(this._hdfcBankImg),
          "INFINITY_BANK_IMAGE" : this.getFieldValue(this._infinityBankImg),
          "EXTERNAL_BANK_IMAGE" : this.getFieldValue(this._externalBankImg)
        }
      }
      catch(err)
      {
        var errorObj =
            {
              "errorInfo" : "Error in setting the parsed icon value for autocomplete dropdown",
              "errorLevel" : "Business",
              "error": err
            };
        self.onError(errorObj);

      }
    },
	
	/*
     * Component getFormattedData
     * Responsible to format data based on the format contract
     * return String 
     */
    getFormattedData : function(contractJSON,record){
      var self = this;
      try{
        if(!this.isEmptyNullUndefined(contractJSON)){         
          var isMaskingRequired = contractJSON["isMaskingEnabled"];
          if(typeof(contractJSON) === "string"){
          var FieldMapping = JSON.parse(contractJSON);
          }else{
            var FieldMapping = contractJSON;
          }
          if(FieldMapping.fieldType == "AccountName"){
            var fields = FieldMapping.mapping;
            var data = "";
            for(var i=0;i<fields.length;i++){

            if(!this.isEmptyNullUndefined(fields[i])){
               
                var lblFieldMapping =  this.getInternalExternalFieldValue(fields[i],record);;
                var fieldData = record[lblFieldMapping];
                if(!this.isEmptyNullUndefined(fields[i].format))
                {
                  if(!this.isEmptyNullUndefined(fields[i].format.truncateLength)){
                    data = data + fieldData.substring(0,fields[i].format.truncateLength) + fields[i].format.appendString;
                  }
                  if(!this.isEmptyNullUndefined(fields[i].format.sliceLength)){                  
                    if(isMaskingRequired === true) {
                    data = data + fieldData.slice(fields[i].format.sliceLength);
                  } else {
                    data = data + fieldData;
                  }
                    
                  }
                }else{
                  data = data + fieldData;
                }
              }
            }
            return data;
          }else if(FieldMapping.fieldType == "Amount"){
            var data = "";
            if(!this.isEmptyNullUndefined(FieldMapping.mapping[0])){
              var fieldMapping =  this.getInternalExternalFieldValue(FieldMapping.mapping[0],record);
              var fieldData = record[fieldMapping];
              var currencyMapping =  this.getFieldValue(FieldMapping.currency);
              var currencyCode = record[currencyMapping];
              if(!this.isEmptyNullUndefined(fieldData)){
                if(!this.isEmptyNullUndefined(FieldMapping.mapping[0].format)){
                 data = this.FormatUtils.formatAmountandAppendCurrencySymbol(fieldData,currencyCode,FieldMapping.mapping[0].format);
                  data = data.text;
                }
                else{
                  data = this.FormatUtils.getCurrencySymbol(currencyCode) + fieldData;
                }
              }
              else{
                return data;
              }
           }
          }
          else {
            var data = "";
            if(!this.isEmptyNullUndefined(FieldMapping.mapping[0])) {
              var fieldMapping =  this.getInternalExternalFieldValue(FieldMapping.mapping[0],record);
              if(!fieldMapping.includes(",")) {
              data = record[fieldMapping];
              } else {
                var fieldMapList = fieldMapping.split(",");
                  for(var i=0;i<fieldMapList.length;i++){
                    if(record[fieldMapList[i]])
                      data = record[fieldMapList[i]];
                  }
              }
            }
          }
          return data;
        }
      }
      catch(err){
        var errorObj =
            {
              "errorInfo" : "Error in formatting data b",
              "errorLevel" : "Configuration",
              "error": err
            };
        self.onError(errorObj);
      }
    },
    
    /*
     * Component getInternalExternalFieldValue
     * Responsible to check the account internal or external
     * return mapping value string 
     */
  getInternalExternalFieldValue : function(contractJSON,record){
    if(!this.isEmptyNullUndefined(record.beneType)){
      if(record.beneType === "external"){
        if(!this.isEmptyNullUndefined(contractJSON.external)){
          return this.getFieldValue(contractJSON.external.fieldMap);
        }else{
          return this.getFieldValue(contractJSON.fieldMap);
        }     
      }else if (record.beneType === "internal") {
        if(!this.isEmptyNullUndefined(contractJSON.internal)){
          var internalMapping = contractJSON.internal;
           if(!this.isEmptyNullUndefined(record.accountType)){
          if(record.accountType.toLowerCase().indexOf("creditcard") != -1){
            return this.getFieldValue(internalMapping.creditcard.fieldMap);
          }else if(record.accountType.toLowerCase().indexOf("loan") != -1){
            return this.getFieldValue(internalMapping.Loan.fieldMap);
          }else{
            return this.getFieldValue(internalMapping.other.fieldMap);
          }
           }else{
            return this.getFieldValue(internalMapping.other.fieldMap);
          }
        }
        else{
          return this.getFieldValue(contractJSON.fieldMap);
        }
      }else{
        return this.getFieldValue(contractJSON.fieldMap);
      }
    }else{
        return this.getFieldValue(contractJSON.fieldMap);
      }
    },
    
   /**     
	 * Component setSwiftBICCode
     * To generate the JSONpath for service response
     * backendResponse{JSONObject} - response received from the backend
     * unicode{string}             - unique code to identify the service response in case of multiple service calls.
     */
    setSwiftBICCode:function(){
      var scope = this;
      this.view.lblBICSwiftCodeHeader.text = this.getFieldValue(this._titleBICSwiftCode);
      this.view.imgBICSwiftCodeBack.onTouchEnd = this.goBack;
      this.view.imgBICSwiftCodeBack = this.getFieldValue(this._iconBack);
      this.view.btnBICSwiftCodeCancel.onClick = this.onBackButtonClick;
      this.view.lblBICSwiftCodeDescription.text = this.getFieldValue(this._lblBICSwiftQuestion);
      this.view.lblBICSwiftCode.text = this.getFieldValue(this._lblBICSwiftCode);
      this.view.txtBICSwiftCode.placeholder = this.getFieldValue(this._txtInputBICSwiftCode,"placeHolder");
      this.view.flxBICSwiftCodeHeader.skin = this.getFieldValue(this._sknHeaderBg);
      this.view.lblBICSwiftCodeHeader.skin = this.getFieldValue(this._sknHeaderLbl);
      this.view.flxBICSwiftCodeDescription.skin = this.getFieldValue(this._sknDescriptionBg);
      this.view.lblBICSwiftCodeDescription.skin = this.getFieldValue(this._sknDescriptionLbl);
      this.view.flxBICSwiftCodeSeparator.skin = this.getFieldValue(this._sknDescriptionSeparator);
      scope.view.txtBICSwiftCode.focusSkin = scope.getFieldValue(scope._sknInputBoxBorder);
      this.view.txtBICSwiftCode.onTextChange = function(){
        if(scope.view.txtBICSwiftCode.text === "") {
          scope.view.btnBICSwiftCodeContinue.skin = scope.getFieldValue(scope._sknDisabledContexualBtn);
          scope.view.btnBICSwiftCodeContinue.setEnabled(false);
        }else{
          scope.view.btnBICSwiftCodeContinue.skin = scope.getFieldValue(scope._sknEnableContexualBtn);
          scope.view.btnBICSwiftCodeContinue.setEnabled(true);
        } 
      };
      this.view.btnBICSwiftCodeLookUp.text = this.getFieldValue(this._btnBICSWIFTLookup,"text");
      this.view.btnBICSwiftCodeLookUp.onClick = this.setSwiftSearchInput;
      this.view.btnBICSwiftCodeContinue.text = this.getFieldValue(this._btnBICSwiftCode,"text");
      this.view.btnBICSwiftCodeContinue.onClick = this.onSwiftBICContinue;
      var transferType = scope.getFieldValue(scope._flowType);
      if(transferType[scope.selectedFlowType] === "EDIT") {
      if(!this.isEmptyNullUndefined(this.context.swiftCode)){
        this.view.txtBICSwiftCode.text = this.context.swiftCode;
        scope.view.btnBICSwiftCodeContinue.skin = scope.getFieldValue(scope._sknEnableContexualBtn);
        scope.view.btnBICSwiftCodeContinue.setEnabled(true);
      }
      } else {
        this.view.txtBICSwiftCode.text = "";
        this.disableButton("btnBICSwiftCodeContinue");
      }
    },
    
     /**     
	 * Component setRequiredCode
     * To generate the JSONpath for service response
     * backendResponse{JSONObject} - response received from the backend
     * unicode{string}             - unique code to identify the service response in case of multiple service calls.
     */
    setRequiredCode:function(){
     var scope = this;
      if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T3")) {
        this.view.flxClearingCode2.setVisibility(false);
        this.view.flxRequiredClearingCode1Separator.setVisibility(false);
      } else {
        this.view.flxRequiredClearingCode1Separator.setVisibility(true);
        this.view.flxClearingCode2.setVisibility(true);
      }
        this.view.imgRequireCodeBack.onTouchEnd = this.goBack;
		this.view.imgRequireCodeBack.src =this.getFieldValue(this._iconBack);
        this.view.lblRequiredCodeHeader.text = this.getFieldValue(this._titleRequiredCode);
        this.view.lblRequiredCodeDescription.text = this.getFieldValue(this._requiredCodeLbl);
        this.view.lblRequiredBICSwift.text = this.getFieldValue(this._requiredCodeField1Lbl);
        this.view.txtRequiredBICSwift.placeholder = this.getFieldValue(this._requiredCodeField1Value,"placeHolder");
        this.view.txtRequiredBICSwift.maxTextLength = this.getFieldValue(this.getFieldValue(this._requiredCodeField1Value,"length"),"max");
        this.view.txtRequiredBICSwift.onTextChange = this.enableRequireCodeContinue;
        this.view.btnRequiredBICSwiftCodeLookUp.text = this.getFieldValue(this._swiftBICBtn,"text");
        this.view.btnRequiredBICSwiftCodeLookUp.onClick= this.setSwiftSearchInput;
        this.view.lblRequiredClearingCode1.text = this.getFieldValue(this._requiredCodeField2Lbl);
        this.view.txtRequiredClearingCode1.placeholder = this.getFieldValue(this._requiredCodeField2Value,"placeHolder");
        this.view.txtRequiredClearingCode1.maxTextLength = this.getFieldValue(this.getFieldValue(this._requiredCodeField2Value,"length"),"max");
        this.view.txtRequiredClearingCode1.onTextChange = this.enableRequireCodeContinue;
        this.view.lblRequiredClearingCode2.text = this.getFieldValue(this._requiredCodeField3Lbl);
        this.view.txtRequiredClearingCode2.placeholder = this.getFieldValue(this._requiredCodeField3Value,"placeHolder");
        this.view.txtRequiredClearingCode2.maxTextLength = this.getFieldValue(this.getFieldValue(this._requiredCodeField3Value,"length"),"max");
        this.view.txtRequiredClearingCode2.onTextChange = this.enableRequireCodeContinue;
		this.view.flxRequiredCodeDescription.skin = this.getFieldValue(this._sknDescriptionBg);
        this.view.lblRequiredCodeHeader.skin = this.getFieldValue(this._sknHeaderLbl);
        this.view.lblRequiredCodeDescription.skin = this.getFieldValue(this._sknDescriptionLbl);
        this.view.flxRequiredCodeHeader.skin = this.getFieldValue(this._sknHeaderBg);
        this.view.flxRequiredCodeSeparator.skin = this.getFieldValue(this._sknDescriptionSeparator);
		this.view.txtRequiredBICSwift.focusSkin = scope.getFieldValue(scope._sknInputBoxBorder);
        this.view.txtRequiredClearingCode1.focusSkin = scope.getFieldValue(scope._sknInputBoxBorder);
        this.view.txtRequiredClearingCode2.focusSkin = scope.getFieldValue(scope._sknInputBoxBorder);
      
      if(!this.isEmptyNullUndefined(this.getFieldValue(this._clearingCode1Btn))){
          this.view.btnRequiredClearingCode1LookUp.text = this.getFieldValue(this._clearingCode1Btn, "text");
          this.view.flxRequiredClearingCode1or.setVisibility(true);
        }else{
          this.view.btnRequiredClearingCode1LookUp.setVisibility(false);
          this.view.flxRequiredClearingCode1or.setVisibility(false);
        } 
        this.view.btnRequiredClearingCode2LookUp.text = this.getFieldValue(this._clearingCode2Btn, "text");
        if(!this.isEmptyNullUndefined(this.getFieldValue(this._clearingCode2Btn))){
          this.view.btnRequiredClearingCode2LookUp.text = this.getFieldValue(this._clearingCode2Btn, "text");
          this.view.flxRequiredClearingCode2Or.setVisibility(true);
        }else{
          this.view.btnRequiredClearingCode2LookUp.setVisibility(false);
          this.view.flxRequiredClearingCode2Or.setVisibility(false);
        }
        this.view.btnRequiredCodeContinue.text = this.getFieldValue(this._requiredCodeBtn,"text");
        this.view.btnRequiredCodeContinue.onClick = this.onRequireCodeContinue;
        this.view.btnRequiredCodeContinue.skin = this.getFieldValue(this._sknDisabledContexualBtn);
        this.view.btnRequiredCodeContinue.setEnabled(false);
		this.view.btnRequireCodeCancel.onClick = this.onBackButtonClick;
      scope.view.btnRequireCodeCancel.text = scope.getFieldValue(scope._cancelButton);
      scope.view.btnRequireCodeCancel.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)) ? true : false;
      var transferType = this.getFieldValue(this._flowType);
      if(transferType[this.selectedFlowType] === "EDIT") {
        if(!this.isEmptyNullUndefined(this.context.swiftCode)){
          this.view.txtRequiredBICSwift.text =this.context.swiftCode;
          this.view.btnRequiredCodeContinue.skin = this.getFieldValue(this._sknEnableContexualBtn);
          this.view.btnRequiredCodeContinue.setEnabled(true);
        }
        if(!this.isEmptyNullUndefined(this.context.clearingCode1)){
          this.view.txtRequiredClearingCode1.text =this.context.clearingCode1;
          this.view.btnRequiredCodeContinue.skin = this.getFieldValue(this._sknEnableContexualBtn);
          this.view.btnRequiredCodeContinue.setEnabled(true);
        }
        if(!this.isEmptyNullUndefined(this.context.clearingCode2)){
          this.view.txtRequiredClearingCode2.text =this.context.clearingCode2;
          this.view.btnRequiredCodeContinue.skin = this.getFieldValue(this._sknEnableContexualBtn);
          this.view.btnRequiredCodeContinue.setEnabled(true);
        }
      } else {
        this.view.txtRequiredBICSwift.text = "";
        this.view.txtRequiredClearingCode1.text = "";
        this.view.txtRequiredClearingCode2.text = "";
        this.disableButton("btnRequiredCodeContinue");
      }
    },
	
     /**     
	 * Component enableRequireCodeContinue
     * To enable the continue button based on the data
     */
    enableRequireCodeContinue: function() {
        var scope = this;
        var requiredBICLength = scope.getFieldValue(this._requiredCodeField1Value, "length");
        var clearingCode1Length = scope.getFieldValue(this._requiredCodeField2Value,"length");
		var clearingCode2Length = scope.getFieldValue(this._requiredCodeField3Value,"length");
      if((this.view.txtRequiredBICSwift.text !== null && scope.view.txtRequiredBICSwift.text.length >= requiredBICLength["min"] && scope.view.txtRequiredBICSwift.text.length <= requiredBICLength["max"]) || (this.view.txtRequiredClearingCode1.text !== null && this.view.txtRequiredClearingCode1.text.length >= clearingCode1Length["min"] && this.view.txtRequiredClearingCode1.text.length <= clearingCode1Length["max"]) || (this.view.txtRequiredClearingCode2.text !== null && this.view.txtRequiredClearingCode2.text.length >= clearingCode2Length["min"] && this.view.txtRequiredClearingCode2.text.length <= clearingCode2Length["max"]) ){
        scope.enableButton("btnRequiredCodeContinue");
      } else {
        scope.disableButton("btnRequiredCodeContinue");
      }
    },
	
     /**     
	 * Component setSwiftSearchInput
     * To generate the JSONpath for service response
     * backendResponse{JSONObject} - response received from the backend
     * unicode{string}             - unique code to identify the service response in case of multiple service calls.
     */
    setSwiftSearchInput:function(){
	  this.view.imgSwiftBICSearchBack.src = this.getFieldValue(this._iconBack);
      this.navigateTo("flxSwiftBICSearch","flxSwiftBICSearchHeaderTop",this.getFieldValue(this._swiftLookupHeader));
      this.view.lblSwiftBICSearchHeader.text = this.getFieldValue(this._swiftLookupHeader);
	  this.view.imgSwiftBICSearchBack.onTouchEnd = this.goBack;
      this.view.lblSwiftBICSearchDescription.text =this.getFieldValue(this._swiftLookupDescription);
	  this.view.flxSwiftBICSearchHeader.skin = this.getFieldValue(this._sknHeaderBg);
      this.view.lblSwiftBICSearchHeader.skin = this.getFieldValue(this._sknHeaderLbl);
      this.view.flxSwiftBICSearchDescription.skin = this.getFieldValue(this._sknDescriptionBg);
      this.view.lblSwiftBICSearchDescription.skin = this.getFieldValue(this._sknDescriptionLbl);
      this.view.flxSwiftBICSearchSeparator.skin = this.getFieldValue(this._sknDescriptionSeparator);
      for(var i=1 ; i<=4 ;i++){
        this.view["lblSwiftBICSearchField"+i].text = this.getFieldValue(eval("this._searchField"+i+"Label"));
        this.view["txtSwiftBICSearchValue"+i].placeholder = this.getFieldValue(eval("this._searchField"+i+"Value"),"placeHolder");
      }
      this.view.btnGetDetails.text = this.getFieldValue(this._getDetailsBtn,"text");
      this.view.btnGetDetails.onClick = this.getSwiftResult;
       this.view.btnGetDetails.skin = this.getFieldValue(this._sknEnableContexualBtn);

      this.view.forceLayout();
      
    },
    
   /**
     * Component getSwiftResult
     * Reponsible to call the DAO method for invoking service api.
     */
    getSwiftResult:function(){
      var searchInput = [];
      for(var i=1; i<=4;i++){
        if(this.getFieldValue(eval("this._searchField"+i+"Value"),"id") === "bankName"){
          searchInput["bankName"] = this.view["txtSwiftBICSearchValue"+i].text;
        }else if(this.getFieldValue(eval("this._searchField"+i+"Value"),"id") === "country"){
          searchInput["country"] = this.view["txtSwiftBICSearchValue"+i].text;
        }else if(this.getFieldValue(eval("this._searchField"+i+"Value"),"id") === "city"){
          searchInput["city"] = this.view["txtSwiftBICSearchValue"+i].text;
        }else if(this.getFieldValue(eval("this._searchField"+i+"Value"),"id") === "branchName"){
          searchInput["branch"] = this.view["txtSwiftBICSearchValue"+i].text;
        }
      }
     this.setCriteria(this._swiftSrchCriteria);
      var criteria = this.getCriteria();
      for(var key in criteria){
        if(searchInput[key] !== null){
          criteria[key] = searchInput[key];
        }else{
          criteria[key] = "";
        }
      }
      
      this.UnifiedTransferDAO.fetchSwiftCode(this._swiftSrchObjServiceName, this._swiftSrchOperationName, this._swiftSrchObjectName, criteria, this._swiftSrchServiceResIdentifier, this.setSwiftSearchReult, this.failureValidation);
    },

    /**     
	 * Component setSwiftSearchReult
     * To generate the JSONpath for service response
     * backendResponse{JSONObject} - response received from the backend
     * unicode{string}             - unique code to identify the service response in case of multiple service calls.
     */

setSwiftSearchReult:function(swiftResponse,unicode){
  this.lastSelectedRow = "";
	  this.view.imgSwiftBICSearchListBack.src = this.getFieldValue(this._iconBack);
      this.navigateTo("flxSwiftBICSearchList","flxSwiftBICSearchTop",this.getFieldValue(this._swiftLookupHeader));
	  this.view.lblSwiftBICSearchListHeader.text = this.getFieldValue(this._swiftLookupHeader);
      this.view.imgSwiftBICSearchListBack.onTouchEnd = this.goBack;
	  this.view.flxSwiftBICSearchListHeader.skin = this.getFieldValue(this._sknHeaderBg);
      this.view.lblSwiftBICSearchListHeader.skin = this.getFieldValue(this._sknHeaderLbl);
      this.view.flxSwiftBICSearchListDescription.skin = this.getFieldValue(this._sknDescriptionBg);
      this.view.lblSwiftBICSearchListDescription.skin = this.getFieldValue(this._sknDescriptionLbl);
      this.view.flxSwiftBICSearchListSeparator.skin = this.getFieldValue(this._sknDescriptionSeparator);
      if(!this.isEmptyNullUndefined(swiftResponse.swiftCodes)){
      this.view.flxSwiftBICSearchListScroll.setVisibility(true);
      this.parserUtilsManager.setResponseData(swiftResponse,unicode);
      var swiftCodes = swiftResponse.swiftCodes;
      var swiftCodeSeg= [];
      for(var i = 0; i < swiftCodes.length;i++){
         if(!this.isEmptyNullUndefined(swiftCodes[i][this.getFieldValue(this._searchResultValue,"resultHeading")])){
        swiftCodes[i]["lblSwiftBICSearchListName"]={
          "text":this.getFieldValue(this._searchResultValue,"label")
        };
           var city = (!this.isEmptyNullUndefined(swiftCodes[i].city)? swiftCodes[i].city:"" ) + (!this.isEmptyNullUndefined(swiftCodes[i].country)? ",":"");
           var country = !this.isEmptyNullUndefined(swiftCodes[i].country)? swiftCodes[i].country : ""+ !this.isEmptyNullUndefined(swiftCodes[i].countryRegion)? ",":"";
           var countryRegion = !this.isEmptyNullUndefined(swiftCodes[i].countryRegion)?swiftCodes[i].countryRegion:"";
        swiftCodes[i]["branchDetails"]=city+country+countryRegion;
        swiftCodes[i]["lblSwiftBICSearchListHeader"]={
          "text":swiftCodes[i][this.getFieldValue(this._searchResultValue,"resultHeading")]
        };
        swiftCodes[i]["lblBICSwiftBICSearchListDescription"]={
          "text":swiftCodes[i][this.getFieldValue(this._searchResultValue,"resultDescription")]
        };
        swiftCodes[i]["flxSwiftBICSearchOptions"]={
          "skin":this.getFieldValue(this._sknSegOptionNotSelected)
        };
        swiftCodes[i]["imgSwiftBICSearchListTick"]={
          "src":this.getFieldValue(this._iconSelectGrnTick),
          "isVisible":false
        };
           swiftCodeSeg.push(swiftCodes[i]);
         }
      }
      var widgetMap = {
        "lblSwiftBICSearchListName":"lblSwiftBICSearchListName",
        "lblSwiftBICSearchListHeader":"lblSwiftBICSearchListHeader",
        "lblBICSwiftBICSearchListDescription":"lblBICSwiftBICSearchListDescription",
        "flxSwiftBICSearchOptions":"flxSwiftBICSearchOptions",
        "imgSwiftBICSearchListTick":"imgSwiftBICSearchListTick"
      };

      this.view.segSwiftBICSearchList.widgetDataMap = widgetMap;
      this.view.segSwiftBICSearchList.setData(swiftCodeSeg);
      this.view.flxSwiftBICSearchList.forceLayout();
      this.view.segSwiftBICSearchList.onRowClick = this.selectSwiftCode.bind(this,swiftCodeSeg);
      }else{
        this.view.flxSwiftBICSearchListScroll.setVisibility(false);
        this.view.flxNoSearchResult.setVisibility(true);
      }
      this.view.btnUseSwift.text = this.getFieldValue(this._btnUseSwift,"text");
      this.view.btnUseSwift.skin = this.getFieldValue(this._sknDisabledContexualBtn);
      this.view.btnUseSwift.setEnabled(false);
      this.view.btnSearchAgain.text = this.getFieldValue(this._researchSwiftBtn,"text");
      this.view.btnSearchAgain.onClick = this.researchSwiftCode;
    },

   /**     
	 * Component confirmSwiftCode
     * To set the swift/bic code to the text box
     */
    confirmSwiftCode:function(selectedSwift){
      var scope =this;
      if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T2") || scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T3")){
      this.view.txtRequiredBICSwift.text = selectedSwift.bic;
      this.view.btnRequiredCodeContinue.skin = this.getFieldValue(this._sknEnableContexualBtn);
      this.view.btnRequiredCodeContinue.setEnabled(true);
      this.navigateTo("flxRequiredCode","flxRequiredCodeTop",this.getFieldValue(this._titleRequiredCode));
      }
      scope.updateContext("toAvailableBalance",selectedSwift.bankName);
    },

	/**     
	 * Component researchSwiftCode
     * To go back to search input page
     */
    researchSwiftCode:function(){
	  this.navigateTo("flxSwiftBICSearch");
    },
   /**     
	 * Component selectSwiftCode
     * To select the swift/bic code highlight and use the swift/bic code
     */
    selectSwiftCode:function(swiftCodes){
      var rowIndex = this.view.segSwiftBICSearchList.selectedRowIndex[1];
      if(rowIndex !== this.lastSelectedRow){
        swiftCodes[rowIndex].flxSwiftBICSearchOptions.skin = this.getFieldValue(this._sknSegOptionSelected);
        swiftCodes[rowIndex].imgSwiftBICSearchListTick.isVisible = true;

        this.view.segSwiftBICSearchList.setDataAt(swiftCodes[rowIndex], rowIndex);
        this.view.flxSwiftBICSearchList.forceLayout();
        if(this.lastSelectedRow === "" || this.lastSelectedRow === null || this.lastSelectedRow.length === 0){
          this.lastSelectedRow =rowIndex;
        }else{
          var lastSwift = this.lastSelectedRow;
          swiftCodes[lastSwift].flxSwiftBICSearchOptions.skin = this.getFieldValue(this._sknSegOptionNotSelected);
          swiftCodes[lastSwift].imgSwiftBICSearchListTick.isVisible = false;
          this.view.segSwiftBICSearchList.setDataAt(swiftCodes[lastSwift], lastSwift);
          this.lastSelectedRow =rowIndex;
        }
        this.view.btnUseSwift.skin = this.getFieldValue(this._sknEnableContexualBtn);
        this.view.btnUseSwift.setEnabled(true);
        this.view.flxSwiftBICSearchButtons.forceLayout();
        this.view.btnUseSwift.onClick = this.confirmSwiftCode.bind(this,swiftCodes[rowIndex]);
      }
    },
	
   /**     
	 * Component onSwiftBICContinue
     * To set swift/bic and go to next page
     */
    onSwiftBICContinue:function(){
      var scope = this;
      var transferType = this.getFieldValue(this._flowType);
      this.updateContext("swiftCode",  this.view.txtBICSwiftCode.text);
      if(transferType[this.selectedFlowType] !== "EDIT") {
        scope.setTransferAmount();
        scope.navigateTo("flxAmount","flxAmountTop",scope.getFieldValue(scope._transferAmountHeader));
      }
      if(transferType[this.selectedFlowType] === "EDIT") {
        this.setVerifyDetails();
        scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
      }
    },
	
    /**     
	 * Component setIntermediaryBIC
     * To update the values of the  IntermediaryBIC fields
     */
    setIntermediaryBIC:function(){
      var transferType = this.getFieldValue(this._flowType);
        this.view.flxIntermediaryHeader.lblIntermediaryBICHeader.text = this.getFieldValue(this._titleIntermediaryBIC);
        this.view.imgIntermediaryBack.onTouchEnd = this.goBack;
        this.view.flxIntermediaryBICMainContainer.lblIntermediaryBIC.text = this.getFieldValue(this._lblIntermediaryBIC);
        this.view.flxIntermediaryBICWrapper.txtIntermediaryBIC.placeholder = this.getFieldValue(this._txtInputIntermediaryBIC, "placeHolder");
        this.view.flxIntermediaryBICWrapper.txtIntermediaryBIC.maxTextLength = this.getFieldValue(this.getFieldValue(this._txtInputIntermediaryBIC, "length"),"max");
        this.view.flxIntermediaryBICWrapper.txtIntermediaryBIC.onTextChange = this.enableIntermediaryBICBtn;
        this.view.txtIntermediaryBIC.focusSkin = this.getFieldValue(this._sknInputBoxBorder);  
        this.view.flxIntermediaryBICMainContainer.btnIntermediaryBICContinue.text = this.getFieldValue(this._IntermediaryBtn, "text");
        this.view.btnIntermediaryBICContinue.text = this.getFieldValue(this._IntermediaryBtn,"text");
        this.view.btnIntermediaryBICContinue.skin = this.getFieldValue(this._sknDisabledContexualBtn);
        this.view.btnIntermediaryBICContinue.setEnabled(false);
        this.view.btnIntermediaryBICContinue.onClick = this.IntermediaryBICBtnContinue;
        this.view.btnIntermediaryCancel.onClick = this.onBackButtonClick;
        this.view.btnIntermediaryCancel.text = this.getFieldValue(this._cancelButton);
        this.view.btnIntermediaryCancel.isVisible = !this.isEmptyNullUndefined(this.getFieldValue(this._cancelButton)) ? true : false;
		this.view.flxIntermediaryHeader.lblIntermediaryBICHeader.skin = this.getFieldValue(this._sknHeaderLbl);
        this.view.flxIntermediaryHeader.skin = this.getFieldValue(this._sknHeaderBg);
      if(!this.isEmptyNullUndefined(this.context.intermediaryBIC)){
        this.view.flxIntermediaryBICWrapper.txtIntermediaryBIC.text =this.context.intermediaryBIC;
        this.enableButton("btnIntermediaryBICContinue");
      } else  {
        this.view.txtIntermediaryBIC.text = "";
        this.disableButton("btnIntermediaryBICContinue");
      }
    },
	
     /**     
	 * Component enableIntermediaryBICBtn
     * To enable the continue button for Intermediary BIC page
     */
    enableIntermediaryBICBtn:function(){
      if(this.view.flxIntermediaryBICWrapper.txtIntermediaryBIC.text.length >= 8){
        this.view.btnIntermediaryBICContinue.skin = this.getFieldValue(this._sknEnableContexualBtn);
         this.view.btnIntermediaryBICContinue.setEnabled(true);
      }else{
         this.view.btnIntermediaryBICContinue.skin = this.getFieldValue(this._sknDisabledContexualBtn);
       this.view.btnIntermediaryBICContinue.setEnabled(false);
      }
    },
    
    /**     
	 * Component IntermediaryBICBtnContinue
     * To navigate to next page with Intermediary BIC data
     */
    IntermediaryBICBtnContinue:function(){
      this.updateContext("intermediaryBIC",this.view.flxIntermediaryBICWrapper.txtIntermediaryBIC.text);
      this.setVerifyDetails();
      this.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", this.getFieldValue(this._verifySectionTitle));
    },
	
    /**     
	 * Component onRequireCodeContinue
     * To set swift/bic and go to next page
     */
    onRequireCodeContinue:function(){
      var transferType = this.getFieldValue(this._flowType);
      this.updateContext("swiftCode",  this.view.txtRequiredBICSwift.text);
      this.updateContext("clearingCode1",  this.view.txtRequiredClearingCode1.text);
      this.updateContext("clearingCode2",  this.view.txtRequiredClearingCode2.text);
      if(transferType[this.selectedFlowType] !== "EDIT") {
        this.setTransferAmount();
        this.navigateTo("flxAmount","flxAmountTop",this.getFieldValue(this._transferAmountHeader));
      }
      if(transferType[this.selectedFlowType] === "EDIT") {
        this.setVerifyDetails();
        this.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", this.getFieldValue(this._verifySectionTitle));
      }
    },

    /**     
	 * Component setAddNewPayeeData
     * To generate the JSONpath for service response
     * backendResponse{JSONObject} - response received from the backend
     * unicode{string}             - unique code to identify the service response in case of multiple service calls.
     */
    setAddNewPayeeData:function(){
      try {
        var scope = this;
        scope.payeeFlow = "New";
        scope.fileNames = [];
        scope.fileContents = [];
        scope.fileTypes= [];
        scope.context = JSON.parse(JSON.stringify(scope.fromAccountBackupContext));
        if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T1"))
          {
            scope.updateContext("isSameBankAccount","true");
            scope.updateContext("isInternationalAccount","false");
          }
        if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T2"))
          {
            scope.updateContext("isSameBankAccount","false");
            scope.updateContext("isInternationalAccount","false");
            scope.updateContext("swiftCode","");
          }
        if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T3"))
          {
            scope.updateContext("isSameBankAccount","false");
            scope.updateContext("isInternationalAccount","true");
            scope.updateContext("swiftCode","");
          }
        if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T4"))
          {
            scope.updateContext("isSameBankAccount","true");
            scope.updateContext("isInternationalAccount","false");
          }
        scope.setRecipientName();
        scope.navigateTo("flxRecipientsName", "flxRecipientsNameTop", scope.getFieldValue(scope._titleRecipientName));
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setAddNewPayeeData method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setFXRateReference
     * Reponsible to set field properties of Rate Reference.
     */
    setFXRateReference: function() {
      try {
        var scope = this;
        scope.view.flxFXRateReferenceBack.onTouchStart = scope.goBack;
        scope.view.lblFXRateReferenceHeader.text = scope.getFieldValue(scope._titleReferenceLbl);
        scope.view.lblFxRateReference.text = scope.getFieldValue(scope._lblfxRateReference);
        scope.view.txtFXRateReference.placeholder = scope.getFieldValue(scope._txtInputfxRateReference, "placeHolder");
        scope.view.txtFXRateReference.restrictCharactersSet = scope.getFieldValue(scope._txtInputfxRateReference, "restrictChars");
        scope.view.btnFxRateContinue.text = scope.getFieldValue(scope._referenceBtn, "text");
        scope.view.txtFXRateReference.onTextChange = scope.onFXRateReferenceTextChange;
        scope.view.btnFxRateContinue.onClick = scope.onFXRateReferenceContinueClick;
        scope.view.btnFxRateContinue.setEnabled(false);
        var transferType = scope.getFieldValue(scope._flowType);
        if(transferType[scope.selectedFlowType] === "EDIT") {
          scope.view.txtFXRateReference.text = scope.getFieldValue(scope._txtInputfxRateReference, "text");
          scope.onFXRateReferenceTextChange();
        } else {
          scope.view.txtFXRateReference.text = "";
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setFXRateReference method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

     /**
     * Component onFXRateReferenceTextChange
     * Continue button Validation based on recipeintname limit.
     */
     onFXRateReferenceTextChange: function(){
       try {
         var scope = this;
         var length = scope.getFieldValue(scope._txtInputfxRateReference, "length");
         var minlength = length["min"], maxlength = length["max"], title = scope.view.txtFXRateReference.text;
         if(title.length >= minlength && title.length <= maxlength) {
           scope.view.btnFxRateContinue.setEnabled(true);
           scope.view.btnFxRateContinue.skin = scope.getFieldValue(this._sknEnableContexualBtn);
         } else {
           scope.view.btnFxRateContinue.setEnabled(false);
           scope.view.btnFxRateContinue.skin = scope.getFieldValue(this._sknDisabledContexualBtn);
         }
       } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onFXRateReferenceTextChange method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
     },

    /**
     * Component onFXRateReferenceContinueClick
     * Navigate to next form based on transfer type.
     */
    onFXRateReferenceContinueClick: function(){
      try {
        var scope = this;
        if(!kony.sdk.isNullOrUndefined(scope.view.txtFXRateReference.text) && scope.view.txtFXRateReference.text !== "") {
          scope.context["fxRateRef"] = scope.view.txtFXRateReference.text;
          scope.parserUtilsManager.setContext(scope.context);
        }
        var transferType = scope.getFieldValue(scope._flowType);
        if(transferType[scope.selectedFlowType] === "EDIT") {
          this.setVerifyDetails();
          scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
        } 
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onFXRateReferenceContinueClick method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

        /**     
	 * Component setTransferAmount
     * To set data for amount screen and visibility
     */
    setTransferAmount:function(){
      var scope=this;
      var transferType = this.getFieldValue(this._flowType);
      this.view.imgAmountBack.onTouchEnd = this.goBack;
      this.view.btnAmountCancel.onClick = this.onBackButtonClick;
      scope.view.btnAmountCancel.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)) ? true : false;
       scope.view.btnAmountCancel.text = scope.getFieldValue(scope._cancelButton);
       this.view.lblCurrencyTitle.text = this.getFieldValue(this._lblTransferCurrency);
       this.view.lblCurrencyTitle.skin = this.getFieldValue(this._sknQuestionLbl);
       this.view.lblAmountHeader.text = scope.getFieldValue(scope._transferAmountHeader);
      this.view.flxAmountFromAccount.onClick = function(){
        scope.amountSelectedFlowType = "From";
        scope.fromAccountEdit = "false";
        scope.setFromAccountsData(scope.backUpFromAccountList, scope.fromUnicode);
        scope.navigateTo("flxFromAccount","flxFromTop");
      };
      this.view.flxAmountToAccount.onClick = function(){
        scope.amountSelectedFlowType = "To";
        scope.isToAccountEdit = "false";
        scope.navigateTo("flxToAccount","flxToTop",scope.getFieldValue(scope._toAccountsTitle));
      };
      this.view.imgAmountBack.src = this.getFieldValue(this._iconBack); 
      this.view.lblFromAccountValue.text = this.getFieldValue(this._fieldFromValueAmtScrn, "text");
      if(!this.isEmptyNullUndefined(this.getFieldValue(this._fieldFromBalanceValueAmtScrn, "text"))){
        this.view.lblFromBalanceValue.text = this.getFieldValue(this._fieldFromBalanceValueAmtScrn, "text");        
      }
      else
      {
        this.view.lblFromavailableBal.text="";
        this.view.lblFromBalanceValue.text="";
      }        
      if(!this.isEmptyNullUndefined(this.getFieldValue(this._fieldToValueAmtScrn, "text"))){
        this.view.lblToAccountValue.text = this.getFieldValue(this._fieldToValueAmtScrn, "text");
      }
      this.view.lblToAvailableBalance.text = this.getFieldValue(this._fieldToBalanceLblAmtScrn,"text");
      this.view.lblToBalanceValue.text = this.getFieldValue(this._fieldToBalanceValueAmtScrn, "text");
      if(transferType[this.selectedFlowType] !== "EDIT") {
        this.clearAmountKeypad();
        this.view.flxAmountHeaderTop.skin = this.getFieldValue(this._sknHeaderBg);
        this.view.flxAmountFromAccount.lblFromAccount.text = this.getFieldValue(this._fieldFromLblAmtScrn);
        this.view.flxAmountToAccount.lblToAccount.text = this.getFieldValue(this._fieldToLabelAmtScrn);        
		this.view.imgCurrenySelection.src=this.getFieldValue(this._iconChevron);
        this.view.flxSelectCurrency.lblCurrencyTitle.text = this.getFieldValue(this._lblTransferCurrency);
        this.view.flxSelectCurrency.lblCurrencyTitle.skin = this.getFieldValue(this._sknQuestionLbl);
        this.view.flxCurrencyWrapper.onTouchStart=function()
        {          
          var currencyFlow=scope.setCurrency();
          this.currencyFlowCheck=currencyFlow;
          if(currencyFlow==false)
          {
            scope.navigateTo("flxCurrencySelection","flxCurrencyTop",scope.getFieldValue(scope._currencyPageTitle));

          }
        }
        if( this.selectedCurr!="" && scope.context.currency != "")
        {
          this.setCurrencySymbol(scope.context.currency);        
        }
        else
        {
          if( scope.context.toAccountType=="Checking" ||  scope.context.toAccountType=="Loan" )
          {
            this.setCurrencySymbol(scope.context.fromAccountCurrency); 
          }
          else{
            this.setCurrencySymbol(scope.context.fromAccountCurrency); 
          }
        }
        this.view.flxMainAmount.lblAmountTitle.text= this.getFieldValue(this._lblTransferAmount);
        this.view.flxMainAmount.lblAmountTitle.skin= this.getFieldValue(this._sknQuestionLbl);
        this.view.flxAmount.btnContinue.text = this.getFieldValue(this._amountBtn, "text");
        this.view.flxAmount.btnContinue.onClick = this.transferAmountContinue;
        this.view.imgAmountBack.onTouchEnd = this.goBack;
        this.view.btnAmountCancel.onClick = this.onBackButtonClick;
        this.view.flxAmount.forceLayout();
      }
      if(transferType[this.selectedFlowType] === "EDIT") {
        this.selectedCurr = this.context.transactionCurrency;
        this.view.flxAmountWrapper.lblAmount.text = this.context.formattedTransferAmount.substring(1);
        this.setCurrencySymbol(this.context.currency);
        var formatedAmount = this.FormatUtils.getCurrencySymbol(this.context.transactionCurrency)+this.view.flxAmountWrapper.lblAmount.text;
        this.updateContext("formattedTransferAmount",formatedAmount);       
      }
    },  
    /**     
	 * Component setCurrencySymbol
     * To setting data to Currency-Symbol screen
     */
     setCurrencySymbol:function(currency){
      var scope=this; 
       var locale = JSON.parse(scope._txtInputTransferAmount);
	  if( this.selectedCurr=="")
          {
			scope.updateContext("transactionCurrency",currency);   
          }           
      if(currency=="USD")
      {
        this.view.lblCurrency.text = currency+"($)";
        locale.format.locale = "en-US";
      }
      else if(currency=="EUR")
      {
        this.view.lblCurrency.text = currency+"(€)";
         locale.format.locale = "es-ES";
      }
      else if(currency=="YEN")
      {
        this.view.lblCurrency.text = currency+"(¥)";
         locale.format.locale = "en-US";
      }
      else if(currency=="INR")
      {
        this.view.lblCurrency.text = currency+"(₹)";
         locale.format.locale = "en-US";
      }
      else if(currency=="GBP")
      {
        this.view.lblCurrency.text = currency+"(£)";
         locale.format.locale = "en-GB";
      }
       scope._txtInputTransferAmount = JSON.stringify(locale);
       scope.updateContext("currency",this.view.lblCurrency.text ); 
    },
	
	 	 /**     
	 * Component transferAmountContinue
     * To setting data on next of the amount flow
     */
    transferAmountContinue:function() {
       var scope = this;
      scope.amountSelectedFlowType = "";
      if(this.context.transactionCurrency === "EUR") {
        var amount = this.view.lblAmount.text.replace(/\./g, '');
        amount = amount.replace(/,/g, '.');
      } else {
        var amount = this.view.lblAmount.text.replace(/,/g, '');
      }
      if(amount >= 1) {
        var formatedAmount = this.FormatUtils.getCurrencySymbol(this.context.transactionCurrency)+this.view.flxAmountWrapper.lblAmount.text;
        this.updateContext("formattedTransferAmount",formatedAmount);
        this.updateContext("transferAmount",this.view.flxAmountWrapper.lblAmount.text.replace(/,/g, '.'));
        this.setVerifyDetails();
        this.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", this.getFieldValue(this._verifySectionTitle));
      } else {
        var symbol = this.FormatUtils.getCurrencySymbol(this.context.transactionCurrency);
        var errMsg = kony.i18n.getLocalizedString("kony.mb.entitlements.minTransactionLimitUnreached")+" "+symbol+"1.00";
        this.dataProcessorUtility.showToastMessageError(scope, errMsg);
        this.disableButton("btnContinue");
      }
    },

    /**     
	 * Component amountKeyboardDataSetting
     * To bind the functions for each keybroad butttons
     */
    amountKeyboardDataSetting:function(){
      this.view.flxKeypadRowOne.btnOne.onClick = this.setAmountKeypadChar.bind(this, 1);
      this.view.flxKeypadRowOne.btnTwo.onClick = this.setAmountKeypadChar.bind(this, 2);
      this.view.flxKeypadRowOne.btnThree.onClick = this.setAmountKeypadChar.bind(this, 3);
      this.view.flxKeypadRowTwo.btnFour.onClick = this.setAmountKeypadChar.bind(this, 4);
      this.view.flxKeypadRowTwo.btnFive.onClick = this.setAmountKeypadChar.bind(this, 5);
      this.view.flxKeypadRowTwo.btnSix.onClick = this.setAmountKeypadChar.bind(this, 6);
      this.view.flxKeypadRowThree.btnSeven.onClick = this.setAmountKeypadChar.bind(this, 7);
      this.view.flxKeypadRowThree.btnEight.onClick = this.setAmountKeypadChar.bind(this, 8);
      this.view.flxKeypadRowThree.btnNine.onClick = this.setAmountKeypadChar.bind(this, 9);
      this.view.flxKeypadRowFour.btnZero.onClick = this.setAmountKeypadChar.bind(this, 0);
      this.view.flxKeypadRowFour.imgClearKeypad.onTouchEnd = this.clearAmountKeypadChar;
    },

    /**     
	 * Component setAmountKeypadChar
     * To set the key and update the value based on clicked button in keyboard
     * char - parameter contain the clicked keyboard button value
     */
    setAmountKeypadChar: function (char) {
      if (char === '.') {
        if (this.isPeriodUsed === false) {
          this.isPeriodUsed = true;
        } else {
          return;
        }
      }
      this.keypadString = this.keypadString + char;
      var firstChar = this.keypadString[0];
      this.keypadString = this.keypadString.split("");
      for (var i = 1; i < this.keypadString.length; i++) {
        if (this.keypadString[i] === '.') {
          this.keypadString[i - 1] = this.keypadString[i + 1];
          i++;
        } else {
          this.keypadString[i - 1] = this.keypadString[i];
        }
      }
      this.keypadString = this.keypadString.join("");
      this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
      if (firstChar !== '0') {
        this.keypadString = firstChar + this.keypadString;
      }
      this.updateAmountValue();
    },

    /**     
	 * Component clearAmountKeypadChar
     * To clear the data one by one while clicking on clear button from keyboard
     */  
    clearAmountKeypadChar: function () {
      if (this.keypadString === '0.00') return;
      this.keypadString = this.keypadString.split("");
      for (var i = this.keypadString.length - 2; i >= 0; i--) {
        if (this.keypadString[i] === '.') {
          this.keypadString[i + 1] = this.keypadString[i - 1];
          i--;
        } else {
          this.keypadString[i + 1] = this.keypadString[i];
        }
      }
      this.keypadString = this.keypadString.join("");
      this.keypadString = this.keypadString.substr(1);
      if (this.keypadString[0] === '.') {
        this.keypadString = '0' + this.keypadString;
      }
      this.updateAmountValue();
    },

    /**     
	 * Component clearAmountKeypad
     * To clear all the data while clicking on clear image
     */ 
    clearAmountKeypad: function(){
      this.keypadString ='0.00';
      this.updateAmountValue();
    },

    /**     
	 * Component updateAmountValue
     * To updating values by clicking the value from keyborad 
     */  
    updateAmountValue: function () {
      if (this.keypadString === '0.00' || this.keypadString === '0') {
        this.view.flxAmountWrapper.lblAmount.text = this.FormatUtils.formatAmount(this.keypadString,this.getFieldValue(this._txtInputTransferAmount,"format"));
        this.view.flxAmount.btnContinue.skin = this.getFieldValue(this._sknDisabledContexualBtn);
        this.view.flxAmount.btnContinue.setEnabled(false);
        this.view.flxClearAmount.setVisibility(false);
      } else {
        var keypadStringCommas = '';
        var beforeDecimal = this.keypadString.split('.')[0];
        var afterDecimal = this.keypadString.split('.')[1];
        if (beforeDecimal.length > 3) {
          var withoutCommas = (beforeDecimal.length) % 3;
          var temp = '';
          if (withoutCommas !== 0) {
            temp = beforeDecimal.substr(0, withoutCommas) + ',';
          }
          for (var i = withoutCommas; i < beforeDecimal.length; i += 3) {
            temp += beforeDecimal.substr(i, 3) + ',';
          }
          beforeDecimal = temp.substr(0, temp.length - 1);
        }
        keypadStringCommas = beforeDecimal + '.' + afterDecimal;
        this.view.flxAmountWrapper.lblAmount.text = this.FormatUtils.formatAmount(this.keypadString,this.getFieldValue(this._txtInputTransferAmount,"format"));
        //Checking with Available balance
         this.view.flxMain.lblAmountErrorMsg.setVisibility(false);
         this.view.flxAmount.btnContinue.skin = this.getFieldValue(this._sknEnableContexualBtn);
         this.view.flxAmount.btnContinue.setEnabled(true);
        this.view.flxClearAmount.setVisibility(true);
      }
    },

    /**     
	 * Component formatAmount
     * To format the amount value based on the selected country
     * keypadString - entered amount value
     * return amount - will return the formated amount
     */ 
    formatAmount : function(keypadString){
      var seperator,decimalPoint,amount;
      var tillPoint = keypadString.substring(0,keypadString.indexOf('.'));
      var afterPoint = keypadString.substring(keypadString.indexOf('.')+1,keypadString.length);
      var locale = kony.i18n.getCurrentLocale();
      kony.print("current locale : "+locale);
      if(locale == 'en' || locale == "en_GB" || locale == "en_US"){
        seperator = ',';
        decimalPoint = '.';
        amount = tillPoint.replace(/,/g, decimalPoint) + seperator + afterPoint;
        kony.print("amount is "+amount);
        return amount;
      }
      else if (locale == 'es_ES' || locale == "de_DE"){
        seperator = ',';
        decimalPoint = '.';
        amount = tillPoint.replace(/,/g, decimalPoint) + seperator + afterPoint;
        kony.print("amount is "+amount);
        return amount;
      }
      else if (locale == "fr_FR"|| locale == "sv_SE"){
        seperator = ' ';
        decimalPoint = ',';
        amount = tillPoint.replace(/,/g, seperator) + decimalPoint + afterPoint;
        kony.print("amount is "+amount);
        return amount;
      }
    },


    /**     
	 * Component amountKeyboardDataSetting
     * To bind the functions for each keybroad butttons
     */
    OtherAmtKeyboardDataSetting:function(){

      this.view.btnOtherAmtKey1.onClick = this.setOtherAmtKeypadChar.bind(this, 1);
      this.view.btnOtherAmtKey2.onClick = this.setOtherAmtKeypadChar.bind(this, 2);
      this.view.btnOtherAmtKey3.onClick = this.setOtherAmtKeypadChar.bind(this, 3);
      this.view.btnOtherAmtKey4.onClick = this.setOtherAmtKeypadChar.bind(this, 4);
      this.view.btnOtherAmtKey5.onClick = this.setOtherAmtKeypadChar.bind(this, 5);
      this.view.btnOtherAmtKey6.onClick = this.setOtherAmtKeypadChar.bind(this, 6);
      this.view.btnOtherAmtKey7.onClick = this.setOtherAmtKeypadChar.bind(this, 7);
      this.view.btnOtherAmtKey8.onClick = this.setOtherAmtKeypadChar.bind(this, 8);
      this.view.btnOtherAmtKey9.onClick = this.setOtherAmtKeypadChar.bind(this, 9);
      this.view.btnOtherAmtKey0.onClick = this.setOtherAmtKeypadChar.bind(this, 0);
      this.view.imgOtherAmtKeyClearKeypad.onTouchEnd = this.clearOtherAmtKeypadChar;
    },

   /**     
	 * Component setTransferOtherAmount
     * To setting data to other amount transfer screen
     */
  setTransferOtherAmount:function(){
      var scope = this;
      var currencyCode = "";
      var selectedData = this.view.segToAccounts.selectedRowItems[0];
      this.view.flxOtherAmountHeaderTop.skin = this.getFieldValue(this._sknHeaderBg);
      this.view.lblOtherAmountHeader.text = this.getFieldValue(this._otherAmtHeader);
      this.view.lblAmountType1.text = this.getFieldValue(this._amountLable1);
      this.view.lblAmount1.text = this.getFormattedData(this._amountValue1, selectedData);
      this.view.btnOtherAmountContinue.text = this.getFieldValue(this._otherAmtBtn, "text");
      this.view.imgOtherAmountClear.onTouchEnd = this.clearOtherAmtKeypad;
      this.view.btnOtherAmountContinue.onClick = this.transferOtherAmtContinue;
      this.view.imgOtherAmountBack.onTouchEnd = this.goBack;
      this.view.imgOtherAmountBack.src = scope.getFieldValue(scope._iconBack);
      this.view.btnOtherAmountCancel.onClick = this.onBackButtonClick;
      scope.view.btnOtherAmountCancel.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)) ? true : false;
      this.view.btnOtherAmountCancel.text = scope.getFieldValue(scope._cancelButton);
      this.view.flxOtherAmountInput.setVisibility(false);
      this.view.flxKeypad.setVisibility(false);
	  this.view.btnOtherAmountContinue.skin = scope.getFieldValue(scope._sknEnableContexualBtn);
      this.view.btnOtherAmountContinue.setEnabled(true);
      this.OtherAmtKeyboardDataSetting();
      this.view.flxOtherAmounts1.onClick = function(){
        scope.view.imgactive1.setVisibility(true);
        scope.view.imgactive2.setVisibility(false);
        scope.view.imgactive3.setVisibility(false);
        scope.view.imgactive4.setVisibility(false);
        scope.view.imgInactive1.setVisibility(false);
        scope.view.imgInactive2.setVisibility(true);
        scope.view.imgInactive3.setVisibility(true);
        scope.view.imgInactive4.setVisibility(true);
        scope.view.flxOtherAmountInput.setVisibility(false);
        scope.view.flxKeypad.setVisibility(false);
        scope.view.btnOtherAmountContinue.skin = scope.getFieldValue(scope._sknEnableContexualBtn);
        scope.view.btnOtherAmountContinue.setEnabled(true);
        scope.view.flxOtherAmount.forceLayout();
      };

      this.view.lblAmountType2.text = this.getFieldValue(this._amountLable2);
      this.view.lblAmount2.text = this.getFormattedData(this._amountValue2, selectedData);
      this.view.flxOtherAmounts2.onClick = function(){
        scope.view.imgactive1.setVisibility(false);
        scope.view.imgactive2.setVisibility(true);
        scope.view.imgactive3.setVisibility(false);
        scope.view.imgactive4.setVisibility(false);
        scope.view.imgInactive1.setVisibility(true);
        scope.view.imgInactive2.setVisibility(false);
        scope.view.imgInactive3.setVisibility(true);
        scope.view.imgInactive4.setVisibility(true);
        scope.view.flxOtherAmountInput.setVisibility(false);
        scope.view.flxKeypad.setVisibility(false);

        scope.view.btnOtherAmountContinue.skin = scope.getFieldValue(scope._sknEnableContexualBtn);
        scope.view.btnOtherAmountContinue.setEnabled(true);
        scope.view.flxOtherAmount.forceLayout();
      };
      this.view.lblAmountType3.text = this.getFieldValue(this._amountLable3);
      this.view.lblAmount3.text = this.getFormattedData(this._amountValue3, selectedData);
      this.view.flxOtherAmounts3.onClick = function(){
        scope.view.imgactive1.setVisibility(false);
        scope.view.imgactive2.setVisibility(false);
        scope.view.imgactive3.setVisibility(true);
        scope.view.imgactive4.setVisibility(false);
        scope.view.imgInactive1.setVisibility(true);
        scope.view.imgInactive2.setVisibility(true);
        scope.view.imgInactive3.setVisibility(false);
        scope.view.imgInactive4.setVisibility(true);
        scope.view.flxOtherAmountInput.setVisibility(false);
        scope.view.flxKeypad.setVisibility(false);

        scope.view.btnOtherAmountContinue.skin = scope.getFieldValue(scope._sknEnableContexualBtn);
        scope.view.btnOtherAmountContinue.setEnabled(true);
        scope.view.flxOtherAmount.forceLayout();
      };

      this.view.lblAmountType4.text = this.getFieldValue(this._otherAmountLabel);
      this.view.lblCurrencySymbol.text =this.FormatUtils.getCurrencySymbol(this.context.currencyCode);
      this.view.flxOtherAmounts4.onClick = function(){
        scope.view.imgactive1.setVisibility(false);
        scope.view.imgactive2.setVisibility(false);
        scope.view.imgactive3.setVisibility(false);
        scope.view.imgactive4.setVisibility(true);
        scope.view.imgInactive1.setVisibility(true);
        scope.view.imgInactive2.setVisibility(true);
        scope.view.imgInactive3.setVisibility(true);
        scope.view.imgInactive4.setVisibility(false);
        scope.view.flxOtherAmountInput.setVisibility(true);
        scope.view.flxKeypad.setVisibility(true);

        if(scope.view.lblOtherAmount.text ==="0.00"||scope.view.lblOtherAmount.text ==="0"){
          scope.view.btnOtherAmountContinue.skin = scope.getFieldValue(scope._sknDisabledContexualBtn);
          scope.view.btnOtherAmountContinue.setEnabled(false);
        }else{
          scope.view.btnOtherAmountContinue.skin = scope.getFieldValue(scope._sknEnableContexualBtn);
          scope.view.btnOtherAmountContinue.setEnabled(true);
        }
        scope.view.flxOtherAmount.forceLayout();
      };
if(this.view.imgactive4.isVisible === true){
      scope.view.imgactive1.setVisibility(false);
      scope.view.imgactive2.setVisibility(false);
      scope.view.imgactive3.setVisibility(false);
      scope.view.imgactive4.setVisibility(true);
      scope.view.imgInactive1.setVisibility(true);
      scope.view.imgInactive2.setVisibility(true);
      scope.view.imgInactive3.setVisibility(true);
      scope.view.imgInactive4.setVisibility(false);
      scope.view.flxOtherAmountInput.setVisibility(true);
      scope.view.flxKeypad.setVisibility(true);
      if(scope.view.lblOtherAmount.text ==="0.00"||scope.view.lblOtherAmount.text ==="0"){
        scope.view.btnOtherAmountContinue.skin = scope.getFieldValue(scope._sknDisabledContexualBtn);
        scope.view.btnOtherAmountContinue.setEnabled(false);
      }else{
        scope.view.btnOtherAmountContinue.skin = scope.getFieldValue(scope._sknEnableContexualBtn);
        scope.view.btnOtherAmountContinue.setEnabled(true);
      }
      scope.view.flxOtherAmount.forceLayout();
    }
    },

    /**     
	 * Component setOtherAmtKeypadChar
     * To set the key and update the value based on clicked button in keyboard
     * char - parameter contain the clicked keyboard button value
     */
    setOtherAmtKeypadChar: function (char) {
      if (char === '.') {
        if (this.isPeriodUsed === false) {
          this.isPeriodUsed = true;
        } else {
          return;
        }
      }
      this.keypadString = this.keypadString + char;
      var firstChar = this.keypadString[0];
      this.keypadString = this.keypadString.split("");
      for (var i = 1; i < this.keypadString.length; i++) {
        if (this.keypadString[i] === '.') {
          this.keypadString[i - 1] = this.keypadString[i + 1];
          i++;
        } else {
          this.keypadString[i - 1] = this.keypadString[i];
        }
      }
      this.keypadString = this.keypadString.join("");
      this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
      if (firstChar !== '0') {
        this.keypadString = firstChar + this.keypadString;
      }
      this.updateOtherAmtValue();
    },

    /**     
	 * Component clearOtherAmtKeypadChar
     * To clear the data one by one while clicking on clear button from keyboard
     */  
    clearOtherAmtKeypadChar: function () {
      if (this.keypadString === '0.00') return;
      this.keypadString = this.keypadString.split("");
      for (var i = this.keypadString.length - 2; i >= 0; i--) {
        if (this.keypadString[i] === '.') {
          this.keypadString[i + 1] = this.keypadString[i - 1];
          i--;
        } else {
          this.keypadString[i + 1] = this.keypadString[i];
        }
      }
      this.keypadString = this.keypadString.join("");
      this.keypadString = this.keypadString.substr(1);
      if (this.keypadString[0] === '.') {
        this.keypadString = '0' + this.keypadString;
      }
      this.updateOtherAmtValue();
    },

    /**     
	 * Component clearOtherAmtKeypad
     * To clear all the data while clicking on clear image
     */ 
    clearOtherAmtKeypad: function(){
      this.keypadString ='0.00';
      this.updateOtherAmtValue();
    },

    /**     
	 * Component updateOtherAmtValue
     * To updating values by clicking the value from keyborad 
     */  
    updateOtherAmtValue: function () {
      if (this.keypadString === '0.00' || this.keypadString === '0') {
        this.view.lblOtherAmount.text = this.FormatUtils.formatAmount(this.keypadString,this.getFieldValue(this._otherAmountValue,"format"));
        this.view.btnOtherAmountContinue.skin = this.getFieldValue(this._sknDisabledContexualBtn);
        this.view.btnOtherAmountContinue.setEnabled(false);
        this.view.flxOtherAmountClear.setVisibility(false);
      } else {
        var keypadStringCommas = '';
        var beforeDecimal = this.keypadString.split('.')[0];
        var afterDecimal = this.keypadString.split('.')[1];
        if (beforeDecimal.length > 3) {
          var withoutCommas = (beforeDecimal.length) % 3;
          var temp = '';
          if (withoutCommas !== 0) {
            temp = beforeDecimal.substr(0, withoutCommas) + ',';
          }
          for (var i = withoutCommas; i < beforeDecimal.length; i += 3) {
            temp += beforeDecimal.substr(i, 3) + ',';
          }
          beforeDecimal = temp.substr(0, temp.length - 1);
        }
        keypadStringCommas = beforeDecimal + '.' + afterDecimal;
        this.view.lblOtherAmount.text = this.FormatUtils.formatAmount(this.keypadString,this.getFieldValue(this._otherAmountValue,"format"));
        this.view.btnOtherAmountContinue.skin = this.getFieldValue(this._sknEnableContexualBtn);
        this.view.btnOtherAmountContinue.setEnabled(true);
        this.view.flxOtherAmountClear.setVisibility(true);
      }
    },
    /**     
	 * Component transferAmountContinue
     * To setting data on next of the amount flow
     */
  transferOtherAmtContinue:function(){
     if(this.view.imgactive1.isVisible === true){
      this.updateContext("formattedTransferAmount", this.view.lblAmount1.text);
      this.updateContext("transferAmount",this.view.lblAmount1.text.replace(/,/g, '').substring(1));
      }
      if(this.view.imgactive2.isVisible === true){
      this.updateContext("formattedTransferAmount", this.view.lblAmount2.text);
      this.updateContext("transferAmount",this.view.lblAmount2.text.replace(/,/g, '').substring(1));
      }
      if(this.view.imgactive3.isVisible === true){
      this.updateContext("formattedTransferAmount", this.view.lblAmount3.text);
      this.updateContext("transferAmount",this.view.lblAmount3.text.replace(/,/g, '').substring(1));
      }
      if(this.view.imgactive4.isVisible === true){
      this.updateContext("formattedTransferAmount", this.FormatUtils.getCurrencySymbol(this.context.currencyCode) + this.view.lblOtherAmount.text);
      this.updateContext("transferAmount",this.view.lblOtherAmount.text.replace(/,/g, ''));
      }
      this.setVerifyDetails();
      this.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", this.getFieldValue(this._verifySectionTitle));
    },		

    /**
     * Component setCurrency
     * Reponsible to set field properties of Currency.
     */    
     setCurrency:function()
    {
      var scope=this;
      try{
        scope.view.imgCurrencyBack.src = scope.getFieldValue(scope._iconBack);          
        this.view.flxCurrencyHeaderTop.skin = this.getFieldValue(this._sknHeaderBg);         
        this.view.lblCurrencyHeader.text = this.getFieldValue(this._currencyPageTitle);
        this.view.lblCurrencyHeader.skin = this.getFieldValue(this._sknHeaderLbl); 
        scope.view.flxCurrencyBack.onTouchStart=scope.goBack;
        if(scope.transferTypeContext == "Within Same Bank") {
          if(this.context.fromAccountCurrency==this.context.toTransactionCurrency)
          {
            scope.view.flxCurrencyWrapper.setEnabled(false);
            scope.currencyFlowCheck =true;
            return true;
          }
          else if(this.context.fromAccountCurrency!=this.context.toTransactionCurrency)
          {
            if(this.context.toTransactionCurrency=="" || this.context.toTransactionCurrency==undefined)
            {
              scope.view.flxCurrencyWrapper.setEnabled(false);
              scope.currencyFlowCheck =true;
              return true;
            }
            else
            {
              var CurrencyOptions=
                  {
                    "optionValues":this.context.fromAccountCurrency+","+this.context.toTransactionCurrency,
                    "optionBackendValues":this.context.fromAccountCurrency+","+this.context.toTransactionCurrency,
                    "selectedValue":"$.c.currency"
                  }
              var CurrencyArray = (CurrencyOptions.optionValues).split(',');
              for(var i = 0; i < CurrencyArray.length; i++) {
                CurrencyArray[i] = CurrencyArray[i].replace(/^\s*/, "").replace(/\s*$/, "");
              }
              var currencyList=[];
              for(var i = 0; i < CurrencyArray.length;i++){
                var currencyArr={};
                currencyArr["lblFrequency"] = {
                  "skin" : this.getFieldValue(this._sknSegCurrencyValues),
                  "text": CurrencyArray[i]
                }
                if(this.context.transactionCurrency!=null&&this.context.transactionCurrency!=undefined && this.context.transactionCurrency==CurrencyArray[i])
                {
                  currencyArr["flxMain"] = {
                    "skin" :  this.getFieldValue(this._sknCurrencyselection)             
                  }
                }else{
                  currencyArr["flxMain"] = {
                    "skin" : ""
                  }
                }
                currencyList.push(currencyArr);
              };  
              var widgetMap = {
                "flxMain":"flxMain",
                "lblFrequency":"lblFrequency"                        
              };
              this.view.flxCurrencyMainContainer.segCurrencyOptions.widgetDataMap = widgetMap;
              var selectedCurrency = this.view.flxCurrencyMainContainer.segCurrencyOptions.onRowClick = this.selectCurrency;
              this.view.flxCurrencyMainContainer.segCurrencyOptions.setData(currencyList);
              this.view.flxCurrencyMainContainer.forceLayout();
              scope.currencyFlowCheck =false;
              return false;
              if(selectedCurrency!="")
              {
                return selectedCurrency;
              }
            }
          } 
        }
        else {        
          if(scope.transferTypeContext == "Within Same Bank") 
          {            
            var CurrencyOptions=
                {
                  "optionValues":this.context.fromAccountCurrency+","+this.context.toTransactionCurrency,
                  "optionBackendValues":this.context.fromAccountCurrency+","+this.context.toTransactionCurrency,
                  "selectedValue":"$.c.currency"
                }
            }          
          else {
            var CurrencyOptions=this.getFieldValue(this._dropdownTransferCurrency);
          }
          var CurrencyArray = (CurrencyOptions.optionValues).split(',');
          for(var i = 0; i < CurrencyArray.length; i++) {
            CurrencyArray[i] = CurrencyArray[i].replace(/^\s*/, "").replace(/\s*$/, "");
          }
          var currencyList=[];
          for(var i = 0; i < CurrencyArray.length;i++){
            var currencyArr={};
            currencyArr["lblFrequency"] = {
              "skin" : this.getFieldValue(this._sknSegCurrencyValues),
              "text": CurrencyArray[i]
            }
            if(this.context.transactionCurrency!=null&&this.context.transactionCurrency!=undefined && this.context.transactionCurrency==CurrencyArray[i])
              {
                 currencyArr["flxMain"] = {
              "skin" :  this.getFieldValue(this._sknCurrencyselection)             
            }
              }else{
             currencyArr["flxMain"] = {
              "skin" : ""
             }
            }
            currencyList.push(currencyArr);
          };  
          var widgetMap = {
            "flxMain":"flxMain",
            "lblFrequency":"lblFrequency"                        
          };
          this.view.flxCurrencyMainContainer.segCurrencyOptions.widgetDataMap = widgetMap;
          var selectedCurrency = this.view.flxCurrencyMainContainer.segCurrencyOptions.onRowClick = this.selectCurrency;
          this.view.flxCurrencyMainContainer.segCurrencyOptions.setData(currencyList);
          this.view.flxCurrencyMainContainer.forceLayout();
          scope.currencyFlowCheck =false;
          return false;
          if(selectedCurrency!="")
          {
            return selectedCurrency;
          }

        }
      }catch (err) {
        kony.print(err.message);
        var errorObj = {
          "errorInfo": "Error in the setCurrency of the component.",
          "errorLevel": "Configuration",
          "error": err
        };
        scope.onError(errorObj);
      }
    },
	
	
    /**     
	 * Component selectCurrency
     * To pass the selected data to next screen.
     */
    selectCurrency:function()
    {
      try{
        var scope = this;
        this.selectedCurr=true;
        var currencyFormatted="";
        
        var selectedData=this.view.segCurrencyOptions.selectedRowItems; 
        selectedData[0]["flxMain"] = {
              "skin" :  this.getFieldValue(this._sknCurrencyselection)       
            };
        var transferType = scope.getFieldValue(scope._flowType);     
		var selectedRow=this.view.segCurrencyOptions.selectedRowIndex[1];
         this.view.segCurrencyOptions.setDataAt(selectedData[0], selectedRow);
        
        //this.view.segCurrencyOptions.seDataAt(selectedData[0].flxMain.skin,selectedRow);
        scope.updateContext("transactionCurrency",selectedData[0].lblFrequency.text);
        scope.setCurrencySymbol(selectedData[0].lblFrequency.text);
        var formatedAmount = this.FormatUtils.getCurrencySymbol(this.context.transactionCurrency)+this.view.flxAmountWrapper.lblAmount.text;
        this.updateContext("formattedTransferAmount",formatedAmount); 

        var defaultPaymentContract = JSON.parse(scope._serviceDefaultPaymentMethod);
        var paymentUI = "";
        var paymentService = "";
        if(scope.context["transactionCurrency"]!="EUR" || this.isPaymentMethodSelected!=true){
          if(!scope.isEmptyNullUndefined(defaultPaymentContract[scope.context["transactionCurrency"]]) )
          {
            paymentUI = defaultPaymentContract[scope.context["transactionCurrency"]].name;
            paymentService = defaultPaymentContract[scope.context["transactionCurrency"]].value;
          }
          else
          {
            paymentUI = defaultPaymentContract["other"]["name"];
            paymentService = defaultPaymentContract["other"]["value"];
          }
          scope.context["selectedServicePayment"]  =  paymentService  ;
          scope.context["selectedPaymentMethod"]  =  paymentUI  ;
        }

        if(transferType[scope.selectedFlowType] === "EDIT") {
          scope.setVerifyDetails();
          scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
        }
        else
        {
          this.setTransferAmount();
          this.navigateTo("flxAmount","flxAmountTop",this.getFieldValue(this._transferAmountHeader));
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in selectCurrency method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setFrequency
     * Reponsible to set field properties of Frequency.
     */
     setFrequency:function()
    {
      var scope=this;
      try{
		scope.view.imgFrequencyBack.src = scope.getFieldValue(scope._iconBack);          
        this.view.flxFrequencyHeaderTop.skin = this.getFieldValue(this._sknHeaderBg); 
        this.view.lblFrequencyHeader.text = this.getFieldValue(this._frequencyPageTitle);
        this.view.lblFrequencyHeader.skin = this.getFieldValue(this._sknHeaderLbl);
        scope.view.flxFrequencyBack.onTouchStart=scope.goBack;
        var FrequencyOptions=this.getFieldValue(this._dropdownFrequency);     
        var FrequencyArray = (FrequencyOptions.optionValues).split(',');
        for(var i = 0; i < FrequencyArray.length; i++) {
          FrequencyArray[i] = FrequencyArray[i].replace(/^\s*/, "").replace(/\s*$/, "");
        }
        var frequencyList=[];
        for(var i = 0; i < FrequencyArray.length;i++){
          var frequencyArr={};
          frequencyArr["lblFrequency"] = {
            "skin" : this.getFieldValue(this._sknSegCurrencyValues),
            "text": FrequencyArray[i]
          }
           if(this.context.frequency!=null&&this.context.frequency!=undefined && this.context.frequency==FrequencyArray[i])
              {
                 frequencyArr["flxMain"] = {
              "skin" :this.getFieldValue(this._sknCurrencyselection)            
            }
              }else{
             frequencyArr["flxMain"] = {
              "skin" : ""
             }
            }
          frequencyList.push(frequencyArr);          
        };  
        var widgetMap = {
          "flxMain":"flxMain",
          "lblFrequency":"lblFrequency"
        };
        this.view.segFrequencyOptions.widgetDataMap = widgetMap;
        var selectedFrequency = this.view.segFrequencyOptions.onRowClick = this.selectFrequency;
        this.view.segFrequencyOptions.setData(frequencyList);
        this.view.flxMainContainer.forceLayout();
        if(selectedFrequency!="")
        {
          return selectedFrequency;
        }
      }catch (err) {
        kony.print(err.message);
        var errorObj = {
          "errorInfo": "Error in the setFrequency of the component.",
          "errorLevel": "Configuration",
          "error": err
        };
        self.onError(errorObj);
      }
    },

    /**     
	 * Component selectFrequency
     * To pass the selected data to next screen.
     */
     selectFrequency:function()
    {
      try{
        var scope = this; 
        var segmentData=JSON.parse(JSON.stringify(this.view.segFrequencyOptions.data));
        var selectedData=this.view.segFrequencyOptions.selectedRowItems;
        var transferType = scope.getFieldValue(scope._flowType);     
        var selectedRow=this.view.segFrequencyOptions.selectedRowIndex[1];            
        for(var i=0;i<segmentData.length;i++){         
          segmentData[i]["flxMain"] = {
            "skin" :""            
          };                    
        }
        selectedData[0]["flxMain"] = {
          "skin" : this.getFieldValue(this._sknCurrencyselection)              
        };
        this.view.segFrequencyOptions.setData(segmentData);       
        this.view.segFrequencyOptions.setDataAt(selectedData[0], selectedRow);   
        this.updateFrequency=selectedData[0].lblFrequency.text;
        if( this.updateFrequency=="Once")
        {
          scope.updateContext("frequency",this.updateFrequency);
          scope.setVerifyDetails();
          scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
        }
        else
        {
          // scope.getBankDate();
          scope.setDate("flxStartDate");
          scope.navigateTo("flxDate", "flxSendOnTop", scope.getFieldValue(scope._startDateLabel));
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onClickFrequency method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setFeesPaidBy
     * Reponsible to set field properties of FeesPaidBy.
     */
     setFeesPaidBy:function()
    {
      var scope=this;
      try{      
        this.view.flxFeesPaidByBack.onTouchStart=this.goBack;
        if(scope.setFeesPaidSelected=="")
        {
          if(scope.transferTypeContext == scope.getFieldValue(scope._transferTypes,"T3") || scope.transferTypeContext == scope.getFieldValue(scope._transferTypes,"T4")) {
            this.setFeesPaidByFieldValues();
            for(var i=1;i<=3;i++)
            { 
              var defaultFeesPaidBy= scope.getFieldValue(scope._defaultFeesPaidBy);
              if(scope.view["lblFeesPaidByOption"+i+"Header"].text ==  defaultFeesPaidBy)
              {
                scope.view["flxFeesPaidByOption"+i].skin=scope.getFieldValue(scope._sknSegOptionSelected);
                scope.view["imgFeesPaidByTick"+i].setVisibility(true);
                var disableOptions=i;
                this.disableOptions =i;
                scope.updateContext("selectedFeesPaidBy", scope.view["lblFeesPaidByOption"+i+"Header"].text);                
              }
              scope.view["flxFeesPaidByOption"+i].onTouchStart = scope.selectFeesPaidByOption.bind(this, i);
            }
          }
          else if(scope.transferTypeContext == scope.getFieldValue(scope._transferTypes,"T2"))
          {
            this.setFeesPaidByFieldValues();
            if(scope.context.selectedPaymentMethod == "SEPA" || scope.context.selectedPaymentMethod == "INSTANT")
            {
              for(var i=1;i<=3;i++)
              {
                if(scope.view["lblFeesPaidByOption"+i+"Header"].text == "Both (Shared)" )
                {
                  scope.view["flxFeesPaidByOption"+i].skin=scope.getFieldValue(scope._sknSegOptionSelected);
                  scope.view["imgFeesPaidByTick"+i].setVisibility(true);
                  var disableOptions=i;
                  scope.updateContext("selectedFeesPaidBy", scope.view["lblFeesPaidByOption"+i+"Header"].text);                
                }
                else
                {
                  scope.view["flxFeesPaidByOption"+i].setEnabled(false);
                  scope.view["flxFeesPaidByOption"+i].skin=scope.getFieldValue(scope._sknSegOptionNotSelected);
                  scope.view["imgFeesPaidByTick"+i].setVisibility(false);
                }
              }
            }
            else
            {            
              for(var i=1;i<=3;i++)
              { 
                var defaultFeesPaidBy= scope.getFieldValue(scope._defaultFeesPaidBy);
                if(scope.view["lblFeesPaidByOption"+i+"Header"].text ==  defaultFeesPaidBy)
                {
                  scope.view["flxFeesPaidByOption"+i].skin=scope.getFieldValue(scope._sknSegOptionSelected);
                  scope.view["imgFeesPaidByTick"+i].setVisibility(true);
                  var disableOptions=i;
                  this.disableOptions =i;
                  scope.updateContext("selectedFeesPaidBy", scope.view["lblFeesPaidByOption"+i+"Header"].text);                
                }
                scope.view["flxFeesPaidByOption"+i].onTouchStart = scope.selectFeesPaidByOption.bind(this, i);
              }
            }
          }
        }
        else
        {        
          for(i=1;i<=3;i++)
          {           
            if( this.disableOptions!=i){
              scope.view["flxFeesPaidByOption"+i].setEnabled(true);
              scope.view["flxFeesPaidByOption"+i].skin=scope.getFieldValue(scope._sknSegOptionNotSelected);
              scope.view["imgFeesPaidByTick"+i].setVisibility(false);         
            }
            else
            {
              scope.view["flxFeesPaidByOption"+i].setEnabled(true);
              scope.view["flxFeesPaidByOption"+i].skin=scope.getFieldValue(scope._sknSegOptionSelected);
              scope.view["imgFeesPaidByTick"+i].setVisibility(true);
            }
          }      
        }
        scope.view.forceLayout();
      }catch (err) {
        kony.print(err.message);
        var errorObj = {
          "errorInfo": "Error in the setFeesPaidBy of the component.",
          "errorLevel": "Configuration",
          "error": err
        };
        scope.onError(errorObj);
      }
    },

   /**     
	 * Component setFeesPaidByFieldValues
     * To pass the selected data to next screen.
     */
    setFeesPaidByFieldValues: function()
    {
      var scope=this;
      try
      {
        this.view.flxFeesPaidByHeader.skin=this.getFieldValue(this._sknHeaderBg);
        this.view.imgFeedPaidBack.src=this.getFieldValue(this._iconBack);
        this.view.lblFeesPaidByHeader.text = this.getFieldValue(this._feesPaidTitle);
        this.view.lblFeesPaidByHeader.skin = this.getFieldValue(this._sknHeaderLbl);
        this.view.flxFeesPaidByBack.onTouchStart=this.goBack;
        this.view.lblFeesPaidByDescription.text = this.getFieldValue(this._lblFeesPaidBy);
        this.view.flxFeesPaidByDescription.skin=this.getFieldValue(this._sknDescriptionBg);
        this.view.lblFeesPaidByDescription.skin = this.getFieldValue(this._sknDescriptionLbl);
        this.view.flxFeesPaidBySeparator.skin=this.getFieldValue(scope._sknDescriptionSeparator);
        this.view.imgFeesPaidByTick1.src=this.getFieldValue(this._iconSelectGrnTick);
        this.view.imgFeesPaidByTick2.src=this.getFieldValue(this._iconSelectGrnTick);
        this.view.imgFeesPaidByTick3.src=this.getFieldValue(this._iconSelectGrnTick);
        this.view.lblFeesPaidByOption1Header.text = this.getFieldValue(this._feesPaidOption1,"optionValue");
        this.view.lblFeesPaidByOption1Header.skin=this.getFieldValue(this._sknFeesPaidOptionHeader);
        this.view.lblFeesPaidByOption1Description.text = this.getFieldValue(this._feesPaidOption1,"description");
        this.view.lblFeesPaidByOption1Description.skin=this.getFieldValue(this._sknFeesPaidOptionDescription);
        this.view.lblFeesPaidByOption2Header.text = this.getFieldValue(this._feesPaidOption2,"optionValue");
        this.view.lblFeesPaidByOption2Header.skin=this.getFieldValue(this._sknFeesPaidOptionHeader);
        this.view.lblFeesPaidByOption2Description.text = this.getFieldValue(this._feesPaidOption2,"description");
        this.view.lblFeesPaidByOption2Description.skin=this.getFieldValue(this._sknFeesPaidOptionDescription);
        this.view.lblFeesPaidByOption3Header.text = this.getFieldValue(this._feesPaidOption3,"optionValue");
        this.view.lblFeesPaidByOption3Header.skin=this.getFieldValue(this._sknFeesPaidOptionHeader);
        this.view.lblFeesPaidByOption3Description.text = this.getFieldValue(this._feesPaidOption3,"description");  
        this.view.lblFeesPaidByOption3Description.skin=this.getFieldValue(this._sknFeesPaidOptionDescription);
        this.view.forceLayout();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setFeesPaidByFieldValues method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
	
	
    /**     
	 * Component selectFeesPaidBy
     * To pass the selected data to next screen.
     */   
     selectFeesPaidByOption:function(selectedFeesPaidBy)
    {
      try{
        var scope = this;   
        scope.setFeesPaidSelected=true;
        if(scope.transferTypeContext == scope.getFieldValue(scope._transferTypes,"T3") || scope.transferTypeContext == scope.getFieldValue(scope._transferTypes,"T4")) {
          if(this.disableOptions == "")
          {
            this.disableOptions =selectedFeesPaidBy;
            this.selectFeesPaidByValue=true;
            scope.view["flxFeesPaidByOption"+selectedFeesPaidBy].skin=scope.getFieldValue(scope._sknSegOptionSelected);
            scope.view["imgFeesPaidByTick"+selectedFeesPaidBy].setVisibility(true);
            scope.updateContext("selectedFeesPaidBy",scope.view["lblFeesPaidByOption"+selectedFeesPaidBy+"Header"].text);
            scope.UpdateFeesPaidServiceValue(this.context[selectedFeesPaidBy]);
            scope.setVerifyDetails();
            scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
          }
          else
          {
            scope.view["flxFeesPaidByOption"+this.disableOptions].skin=scope.getFieldValue(scope._sknSegOptionNotSelected);
            scope.view["imgFeesPaidByTick"+this.disableOptions].setVisibility(false);             
            this.disableOptions =selectedFeesPaidBy;          
            scope.view["flxFeesPaidByOption"+selectedFeesPaidBy].skin=scope.getFieldValue(scope._sknSegOptionSelected);
            scope.view["imgFeesPaidByTick"+selectedFeesPaidBy].setVisibility(true);
            scope.updateContext("selectedFeesPaidBy",scope.view["lblFeesPaidByOption"+selectedFeesPaidBy+"Header"].text);
           scope.UpdateFeesPaidServiceValue(this.context[selectedFeesPaidBy]);
            scope.setVerifyDetails();
            scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
          }
        }
        else if(scope.transferTypeContext == scope.getFieldValue(scope._transferTypes,"T2"))
        {
          if( this.disableOptions == "")
          {
            this.disableOptions =selectedFeesPaidBy;
            this.selectFeesPaidByValue=true;
            scope.view["flxFeesPaidByOption"+selectedFeesPaidBy].skin=scope.getFieldValue(scope._sknSegOptionSelected);
            scope.view["imgFeesPaidByTick"+selectedFeesPaidBy].setVisibility(true);
            scope.updateContext("selectedFeesPaidBy", scope.view["lblFeesPaidByOption"+selectedFeesPaidBy+"Header"].text);
            scope.UpdateFeesPaidServiceValue(this.context.selectedFeesPaidBy);
           scope.setVerifyDetails();
            scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
          }
          else
          {
            scope.view["flxFeesPaidByOption"+this.disableOptions].skin=scope.getFieldValue(scope._sknSegOptionNotSelected);
            scope.view["imgFeesPaidByTick"+this.disableOptions].setVisibility(false);             
            this.disableOptions =selectedFeesPaidBy;          
            scope.view["flxFeesPaidByOption"+selectedFeesPaidBy].skin=scope.getFieldValue(scope._sknSegOptionSelected);
            scope.view["imgFeesPaidByTick"+selectedFeesPaidBy].setVisibility(true);
            scope.updateContext("selectedFeesPaidBy",scope.view["lblFeesPaidByOption"+selectedFeesPaidBy+"Header"].text);            
            scope.UpdateFeesPaidServiceValue(this.context.selectedFeesPaidBy);
            scope.setVerifyDetails();
            scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
          }   
        }
        scope.view.forceLayout();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in selectFeesPaidBy method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
	
	 /**
     * Component UpdateFeesPaidServiceValue
     * Reponsible to update the Fees paid service option value
     */  
    UpdateFeesPaidServiceValue : function(selectedFeesPaidBy)
    {
      var scope=this;
      try{
        var serviceFeesPaidOptions=scope.getFieldValue(scope._serviceFeesPaidValues);
        var keys = Object.keys(serviceFeesPaidOptions);
        for(key=0;key<keys.length;key++)
        {
          if(selectedFeesPaidBy==keys[key])
          {
            var selectedValue=serviceFeesPaidOptions[keys[key]]["paidBy"];
            scope.updateContext("selectedServiceFeesPaidBy",selectedValue);
          }
        }
      }
      catch(err)
      {
        var errObj = {
          "errorInfo" : "Error in UpdateFeesPaidServiceValue method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);

      }
    },

    /**
     * Component setPaymentMethod
     * Reponsible to set field properties of PaymentMethod.
     */    
  setPaymentMethod:function()
    {
      var scope=this;
      try{     
        if(scope.transferTypeContext ==  scope.getFieldValue(scope._transferTypes,"T2")) {
          this.setPaymentMethodFieldValues();              
          if(scope.context["transactionCurrency"] == "EUR")
          {
            if(scope.isIBANValid=="NO")
            {
              for(var i=1;i<=4;i++)
              {
                if(scope.view["lblPaymentMethodOption"+i+"Header"].text == "SWIFT" )
                {
                  scope.view["flxPaymentMethodOption"+i].skin=scope._sknSegOptionSelected;
                  scope.view["imgPaymentMethodTick"+i].setVisibility(true);                
                  var disableOptions=i;
                  scope.updateContext("selectedPaymentMethod", scope.view["lblPaymentMethodOption"+i+"Header"].text);                  
                }
                else
                {
                  scope.view["flxPaymentMethodOption"+i].setEnabled(false);
                  scope.view["flxPaymentMethodOption"+i].skin=scope._sknSegOptionNotSelected;
                  scope.view["imgPaymentMethodTick"+i].setVisibility(false);
                }
              }
            }
            else if(scope.isIBANValid=="YES")
            {
              if(scope.setPaymentMethodValue=="")
              {
                for(var i=1;i<=4;i++)
                {
                  if(scope.view["lblPaymentMethodOption"+i+"Header"].text == "SEPA" && scope.selectPaymentMethod =="")
                  {
                    scope.view["flxPaymentMethodOption"+i].skin=scope._sknSegOptionSelected;
                    scope.view["imgPaymentMethodTick"+i].setVisibility(true);
                    var disableOptions=i;
                    scope.updateContext("selectedPaymentMethod",scope.view["lblPaymentMethodOption"+i+"Header"].text);                
                  }
                  else
                  {
                    if(scope.view["flxPaymentMethodOption"+i].skin == scope._sknSegOptionSelected )
                    {
                      scope.view["flxPaymentMethodOption"+i].skin=scope._sknSegOptionNotSelected;
                      scope.view["imgPaymentMethodTick"+i].setVisibility(false);
                    }
                    else{
                      scope.view["flxPaymentMethodOption"+i].setEnabled(true);
                      scope.view["flxPaymentMethodOption"+i].skin=scope._sknSegOptionNotSelected;
                      scope.view["imgPaymentMethodTick"+i].setVisibility(false);
                    }
                  }
                  scope.view["flxPaymentMethodOption"+i].onTouchStart = scope.selectPaymentMethodOption.bind(this, i);
                }
              }
              else
              {
                for(var i=1;i<=4;i++){
                  if( this.selectPaymentMethod !=i)
                  {
                    scope.view["flxPaymentMethodOption"+i].setEnabled(true);
                    scope.view["flxPaymentMethodOption"+i].skin=scope._sknSegOptionNotSelected;
                    scope.view["imgPaymentMethodTick"+i].setVisibility(false);
                  }
                  else
                  {
                    scope.view["flxPaymentMethodOption"+i].setEnabled(true);
                    scope.view["flxPaymentMethodOption"+i].skin=scope._sknSegOptionSelected;
                    scope.view["imgPaymentMethodTick"+i].setVisibility(true);
                  }
				  scope.view["flxPaymentMethodOption"+i].onTouchStart = scope.selectPaymentMethodOption.bind(this, i);
                }
              }
            }
          }          
          else if(scope.context["transactionCurrency"]== "BGN")
          {
            scope.setPaymentMethodFieldValues();
            if(scope.setPaymentMethodValue=="")
            {
              for(var i=1;i<=2;i++)
              {
                scope.view["flxPaymentMethodOption"+i].setEnabled(true);
                scope.view["flxPaymentMethodOption"+i].skin=scope._sknSegOptionNotSelected;
                scope.view["imgPaymentMethodTick"+i].setVisibility(false);
                scope.view["flxPaymentMethodOption"+i].onTouchStart = scope.selectPaymentMethodOption.bind(this, i);
              }
            }
            else
            {
              if( this.selectPaymentMethod !=i)
              {
                scope.view["flxPaymentMethodOption"+i].setEnabled(true);
                scope.view["flxPaymentMethodOption"+i].skin=scope._sknSegOptionNotSelected;
                scope.view["imgPaymentMethodTick"+i].setVisibility(false);

              }
              else
              {
                scope.view["flxPaymentMethodOption"+i].setEnabled(true);
                scope.view["flxPaymentMethodOption"+i].skin=scope._sknSegOptionSelected;
                scope.view["imgPaymentMethodTick"+i].setVisibility(true);

              }
            }
          }
          else
          {
            for(var i=1;i<=4;i++)
            {
              if(scope.view["lblPaymentMethodOption"+i+"Header"].text == "SWIFT" )
              {
                scope.view["flxPaymentMethodOption"+i].skin=scope._sknSegOptionSelected;
                scope.view["imgPaymentMethodTick"+i].setVisibility(true);
                scope.updateContext("selectedPaymentMethod",scope.view["lblPaymentMethodOption"+i+"Header"].text);
                scope.updateContext("selectedPaymentMethod", scope.view["lblPaymentMethodOption"+i+"Header"].text);           
              }
              else
              {
                scope.view["flxPaymentMethodOption"+i].enable=false;
                scope.view["flxPaymentMethodOption"+i].setEnabled(false);
                scope.view["flxPaymentMethodOption"+i].skin=scope._sknSegOptionNotSelected;
                scope.view["imgPaymentMethodTick"+i].setVisibility(false);
              }
            }
          }
        }  
        scope.view.forceLayout();
      }catch (err) {
        kony.print(err.message);
        var errorObj = {
          "errorInfo": "Error in the setPaymentMethod of the component.",
          "errorLevel": "Configuration",
          "error": err
        };
        scope.onError(errorObj);
      }
    },

	
    /**     
	 * Component setPaymentMethodFieldValues
     * To pass the selected data to next screen.
     */
     setPaymentMethodFieldValues:function()
    {
      var scope=this;
      try{
       
        if(scope.context["transactionCurrency"]== "BGN")
        {
          this.view.flxPaymentMethodHeader.skin=this.getFieldValue(this._sknHeaderBg);
          this.view.imgPaymentMethodBack.src=this.getFieldValue(this._iconBack);
          this.view.lblPaymentMethodHeader.text = this.getFieldValue(this._paymentMethodTitle);
          this.view.lblPaymentMethodHeader.skin = this.getFieldValue(this._sknHeaderLbl);
          scope.view.flxPaymentMethodBack.onTouchStart=scope.goBack;
          this.view.lblPaymentMethodDescription.text = this.getFieldValue(this._lblPaymentMethod);
          this.view.lblPaymentMethodDescription.skin = this.getFieldValue(this._sknDescriptionLbl);
          this.view.flxPaymentMethodSeparator.skin=this.getFieldValue(scope._sknDescriptionSeparator);
          this.view.flxPaymentMethodDescription.skin=this.getFieldValue(this._sknDescriptionBg); 
          this.view.imgPaymentMethodTick1.src=this.getFieldValue(this._iconSelectGrnTick);
          this.view.imgPaymentMethodTick2.src=this.getFieldValue(this._iconSelectGrnTick);
          this.view.imgPaymentMethodTick3.src=this.getFieldValue(this._iconSelectGrnTick);
          this.view.lblPaymentMethodOption1Header.text = this.getFieldValue(this._paymentMethodOption5,"optionValue");
          this.view.lblPaymentMethodOption1Header.skin=this.getFieldValue(this._sknFeesPaidOptionHeader);
          this.view.lblPaymentMethodOption1Description.text = this.getFieldValue(this._paymentMethodOption5,"description");  
          this.view.lblPaymentMethodOption1Description.skin=this.getFieldValue(this._sknFeesPaidOptionDescription);
          this.view.lblPaymentMethodOption2Header.text = this.getFieldValue(this._paymentMethodOption6,"optionValue");
          this.view.lblPaymentMethodOption2Header.skin=this.getFieldValue(this._sknFeesPaidOptionHeader);
          this.view.lblPaymentMethodOption2Description.text = this.getFieldValue(this._paymentMethodOption6,"description");  
          this.view.lblPaymentMethodOption2Description.skin=this.getFieldValue(this._sknFeesPaidOptionDescription);
          this.view.flxPaymentMethodOption3Container.setVisibility(false);
          this.view.flxPaymentMethodOption4Container.setVisibility(false);
        }
        else{
          this.view.flxPaymentMethodHeader.skin=this.getFieldValue(this._sknHeaderBg);
          this.view.imgPaymentMethodBack.src=this.getFieldValue(this._iconBack);
          this.view.lblPaymentMethodHeader.text = this.getFieldValue(this._paymentMethodTitle);
          this.view.lblPaymentMethodHeader.skin = this.getFieldValue(this._sknHeaderLbl);
          scope.view.flxPaymentMethodBack.onTouchStart=scope.goBack;
          this.view.flxPaymentMethodDescription.skin=this.getFieldValue(this._sknDescriptionBg); 
          this.view.imgPaymentMethodTick1.src=this.getFieldValue(this._iconSelectGrnTick);
          this.view.imgPaymentMethodTick2.src=this.getFieldValue(this._iconSelectGrnTick);
          this.view.imgPaymentMethodTick3.src=this.getFieldValue(this._iconSelectGrnTick);
          this.view.lblPaymentMethodDescription.text = this.getFieldValue(this._lblPaymentMethod);
          this.view.lblPaymentMethodDescription.skin = this.getFieldValue(this._sknDescriptionLbl);
          this.view.flxPaymentMethodSeparator.skin=this.getFieldValue(scope._sknDescriptionSeparator);
          this.view.lblPaymentMethodOption1Header.text = this.getFieldValue(this._paymentMethodOption1,"optionValue");
          this.view.lblPaymentMethodOption1Header.skin=this.getFieldValue(this._sknFeesPaidOptionHeader);
          this.view.lblPaymentMethodOption1Description.text = this.getFieldValue(this._paymentMethodOption1,"description");
          this.view.lblPaymentMethodOption1Description.skin=this.getFieldValue(this._sknFeesPaidOptionDescription);
          this.view.lblPaymentMethodOption2Header.text = this.getFieldValue(this._paymentMethodOption2,"optionValue");
          this.view.lblPaymentMethodOption2Header.skin=this.getFieldValue(this._sknFeesPaidOptionHeader);
          this.view.lblPaymentMethodOption2Description.text = this.getFieldValue(this._paymentMethodOption2,"description");
          this.view.lblPaymentMethodOption2Description.skin=this.getFieldValue(this._sknFeesPaidOptionDescription);
          this.view.lblPaymentMethodOption3Header.text = this.getFieldValue(this._paymentMethodOption3,"optionValue");
          this.view.lblPaymentMethodOption3Header.skin=this.getFieldValue(this._sknFeesPaidOptionHeader);
          this.view.lblPaymentMethodOption3Description.text = this.getFieldValue(this._paymentMethodOption3,"description");  
          this.view.lblPaymentMethodOption3Description.skin=this.getFieldValue(this._sknFeesPaidOptionDescription);
          this.view.lblPaymentMethodOption4Header.text = this.getFieldValue(this._paymentMethodOption4,"optionValue");
          this.view.lblPaymentMethodOption4Header.skin=this.getFieldValue(this._sknFeesPaidOptionHeader);
          this.view.lblPaymentMethodOption4Description.text = this.getFieldValue(this._paymentMethodOption4,"description");  
          this.view.lblPaymentMethodOption4Description.skin=this.getFieldValue(this._sknFeesPaidOptionDescription);
        }
        this.view.flxPaymentMethodOption4Container.setVisibility(false);
        this.view.forceLayout();
      }catch (err) {
        kony.print(err.message);
        var errorObj = {
          "errorInfo": "Error in the setPaymentMethodField values of the component.",
          "errorLevel": "Configuration",
          "error": err
        };
        self.onError(errorObj);
      }
    },
   
    /**     
	 * Component selectPaymentMethodOption
     * To pass the selected data to next screen.
     */
     selectPaymentMethodOption:function(selectedPaymentMethods)
    {
      try{
        var scope = this; 
        this.isPaymentMethodSelected=true;
        this.setPaymentMethodValue=true;
        if(scope.transferTypeContext == scope.getFieldValue(scope._transferTypes,"T2")){
          if( this.selectPaymentMethod == "")
          {
            this.selectPaymentMethod =selectedPaymentMethods;
            for(var i=1;i<=4;i++)
            {
              if(scope.view["flxPaymentMethodOption"+i].skin == scope.getFieldValue(scope._sknSegOptionSelected))
              {
                scope.view["flxPaymentMethodOption"+i].skin=scope.getFieldValue(scope._sknSegOptionNotSelected);
                scope.view["imgPaymentMethodTick"+i].setVisibility(false);
              }
            }
            scope.view["flxPaymentMethodOption"+selectedPaymentMethods].skin=scope.getFieldValue(scope._sknSegOptionSelected);
            scope.view["imgPaymentMethodTick"+selectedPaymentMethods].setVisibility(true);
            scope.updateContext("selectedPaymentMethod",scope.view["lblPaymentMethodOption"+selectedPaymentMethods+"Header"].text);  
            scope.UpdatePaymentServiceValue(scope.context.selectedPaymentMethod);
            scope.setVerifyDetails();
            scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
          }
          else
          {
            for(var i=1;i<=4;i++)
            {
              if(scope.view["flxPaymentMethodOption"+i].skin == scope.getFieldValue(scope._sknSegOptionSelected) )
              {
                scope.view["flxPaymentMethodOption"+i].skin=scope.getFieldValue(scope._sknSegOptionNotSelected);
                scope.view["imgPaymentMethodTick"+i].setVisibility(false);
              }
            }
            scope.view["flxPaymentMethodOption"+this.selectPaymentMethod].skin=scope.getFieldValue(scope._sknSegOptionNotSelected);
            scope.view["imgPaymentMethodTick"+this.selectPaymentMethod].setVisibility(false);             
            this.selectPaymentMethod =selectedPaymentMethods;          
            scope.view["flxPaymentMethodOption"+selectedPaymentMethods].skin=scope.getFieldValue(scope._sknSegOptionSelected);
            scope.view["imgPaymentMethodTick"+selectedPaymentMethods].setVisibility(true);
            scope.updateContext("selectedPaymentMethod", scope.view["lblPaymentMethodOption"+selectedPaymentMethods+"Header"].text);
            scope.UpdatePaymentServiceValue(scope.context.selectedPaymentMethod);            
            scope.setVerifyDetails();
            scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
          }
        }
        scope.view.forceLayout();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in selectPaymentMethod method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
	
	/**
     * Component UpdatePaymentServiceValue
     * Reponsible to update the payment service option value
     */  
    UpdatePaymentServiceValue : function(selectedPayment)
    {
      var scope=this;
      try{
        var servicePaymentOptions=scope.getFieldValue(scope._servicePaymentMethodValues);
        var keys = Object.keys(servicePaymentOptions);
        for(key=0;key<keys.length;key++)
        {
          if(selectedPayment==keys[key])
          {
            var selectedValue=servicePaymentOptions[keys[key]]["paymentType"];
            scope.updateContext("selectedServicePayment",selectedValue);
          }
        }
      }
      catch(err)
      {
        var errObj = {
          "errorInfo" : "Error in UpdatePaymentServiceValue method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);

      }
    },

    /**
     * Component setRecipientName
     * Reponsible to set field properties of RecipientName.
     */
    setRecipientName: function() {
      try {
        var scope = this;
        scope.setRecipientNameWidgetProps();
        scope.view.btnRecipientsNameContinue.onClick = scope.onRecipientsContinueClick;
        scope.view.txtRecipientName.onTextChange = scope.onRecipientNameTextChange;
        scope.view.flxRecipientsNameBack.onTouchStart = scope.goBack;
        scope.view.btnRecipientsNameCancel.onClick = scope.onBackButtonClick;
        scope.view.txtRecipientName.maxTextLength = scope.getFieldValue(scope.getFieldValue(scope._txtInputRecipientName,"length"),"max");
        scope.view.txtRecipientName.setFocus(true);
        scope.view.txtRecipientName.text = "";
        scope.disableButton("btnRecipientsNameContinue");
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setRecipientName method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

     /**
     * Component setRecipientNameWidgetProps
     * Setting the field label and skin properties of recipient's screen.
     */
    setRecipientNameWidgetProps: function() {
      try {
        var scope = this;
        // Skin for widget Properties.
        scope.view.flxRecipientsNameHeader.skin = scope.getFieldValue(scope._sknHeaderBg);
        scope.view.imgRecipientsNameBack.src = scope.getFieldValue(scope._iconBack);
        scope.view.lblRecipientsNameHeader.skin = scope.getFieldValue(scope._sknHeaderLbl);
        scope.view.flxRecipientsNameDescription.skin = scope.getFieldValue(scope._sknDescriptionBg);
        scope.view.lblRecipientsNameDescription.skin = scope.getFieldValue(scope._sknDescriptionLbl);
        scope.view.flxRecipientsnameSeparator.skin = scope.getFieldValue(scope._sknDescriptionSeparator);
        scope.view.txtRecipientName.skin = scope.getFieldValue(scope._textBoxNormalSkin);
        scope.view.txtRecipientName.focusSkin = scope.getFieldValue(scope._sknInputBoxBorder);
        scope.view.btnRecipientsNameCancel.skin = scope.getFieldValue(scope._sknCancelBtn);
        // Text Properties.
        scope.view.btnRecipientsNameCancel.text = scope.getFieldValue(scope._cancelButton);
        scope.view.btnRecipientsNameCancel.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)) ? true : false;
        scope.view.lblRecipientsNameHeader.text = scope.getFieldValue(scope._titleRecipientName);
        scope.view.txtRecipientName.restrictCharactersSet = scope.getFieldValue(scope._recipientRestrictChars);
        scope.view.lblRecipientsNameDescription.text = scope.getFieldValue(scope._lblRecipientName);
        scope.view.txtRecipientName.placeholder = scope.getFieldValue(scope._txtInputRecipientName, "placeHolder");
        scope.view.txtRecipientName.textInputMode = scope.getFieldValue(scope._txtInputRecipientName, "inputMode");
        scope.view.btnRecipientsNameContinue.text = scope.getFieldValue(scope._recipientBtn, "text");
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setRecipientNameWidgetProps method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component onRecipientNameTextChange
     * Continue button Validation based on recipeintname limit.
     */
    onRecipientNameTextChange: function() {
      try {
        var scope = this;
        var length = scope.getFieldValue(scope._txtInputRecipientName, "length");
        var minlength = length["min"], maxlength = length["max"], title = scope.view.txtRecipientName.text;
        if(scope.validationUtilManager.isValidUserName(title, minlength, maxlength)) {
          scope.enableButton("btnRecipientsNameContinue");
        } else {
          scope.disableButton("btnRecipientsNameContinue");
        }
        scope.view.txtRecipientName.skin = scope.getFieldValue(scope._sknInputBoxBorder);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onRecipientNameTextChange method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component onRecipientsContinueClick
     * Navigate to next form based on transferType.
     */
    onRecipientsContinueClick: function() {
      try {
        var scope = this;
        scope.view.txtRecipientName.skin = scope.getFieldValue(scope._textBoxNormalSkin);
        if(!kony.sdk.isNullOrUndefined(scope.view.txtRecipientName.text) && scope.view.txtRecipientName.text !== "") {
          scope.updateContext("beneficiaryName", scope.view.txtRecipientName.text)
        }
          if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T4")) {
            scope.setContactType();
            scope.navigateTo("flxContactType", "flxContactTypeTop", scope.getFieldValue(scope._contactTypeTitle));
          } else {
            scope.navigateTo("flxAccountNumber", "flxAccountNumberTop", scope.getFieldValue(scope._titleAccountNumber));
            scope.setPayeeAccountNumber();
            scope.keyboardDataSettingAccountNumber();
          }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onRecipientsContinueClick method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setContactType
     * Reponsible to set field properties of ContactType.
     */
    setContactType: function() {
      try {
        var scope = this;
        scope.setContactTypeWidgetProps();
        scope.view.btnContactTypeContinue.onClick = scope.onContactTypeContinueClick;
        scope.view.btnChooseContactList.onClick = scope.navigateToContacts.bind(this, "phone");
        scope.view.btnChooseFromContactsEmail.onClick = scope.navigateToContacts.bind(this, "email");
        scope.view.flxMobileNumber.onTouchStart = scope.onContactNumberTouch;
        scope.view.txtContactTypeEmail.onTextChange = scope.onContactEmailTextChange;
        scope.view.txtContactTypeEmail.onDone = scope.onContactTypeEmailDone;
        scope.view.btnContactTypeDone.onClick = scope.onContactNumberKeyboardDone;
        scope.view.imgContactTypeKeypadClear.onTouchStart = scope.clearContactNumberKeypadChar;
        scope.view.flxContactTypeBack.onTouchStart = scope.goBack;
        scope.view.flxFlagAndCodeContainer.onTouchStart = scope.onFlagandCodeFlexClick;
        scope.view.imgContactTypeFlag.setVisibility(scope.getFieldValue(scope._countryFlagVisibility));
        scope.view.btnContactTypeCancel.onClick = scope.onBackButtonClick;
        var transferType = scope.getFieldValue(scope._flowType);
        if(transferType[scope.selectedFlowType] === "EDIT") {
          var phoneNumber = scope.getFieldValue(scope._txtInputMobileNumber, "mapping");
          var email = scope.getFieldValue(scope._txtInputEmail, "mapping");
          if(!scope.isEmptyNullUndefined(phoneNumber)) {
            phoneNumber = phoneNumber.split("-");
            scope.view.lblMobileNumber.text = phoneNumber[1];  
          }
          if(!scope.isEmptyNullUndefined(email)) {
          scope.view.txtContactTypeEmail.text = email;
          }
          scope.enableButton("btnContactTypeContinue");
        } else {
          scope.view.lblMobileNumber.text = scope.getFieldValue(scope._txtInputMobileNumber, "placeHolder");
          scope.view.txtContactTypeEmail.text = "";
          scope.disableButton("btnContactTypeContinue");
        }
        for (var i =0; i <= 9; i++) {
          scope.view["btnContactType"+i].onClick = scope.setContactNumberKeyboardChar.bind(this, i);
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setContactType method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component navigateToContacts.
     * Validation based on Access permissions.
     */
    navigateToContacts: function(type) {
      try {
      var scope = this;
      parent_scope.contactTypeForContacts = type;
      var options = {
        isAccessModeAlways:true
      };
      var result = kony.application.checkPermission(kony.os.RESOURCE_CONTACTS,options);
        if(result.status === kony.application.PERMISSION_DENIED) {
          kony.application.requestPermission(kony.os.RESOURCE_CONTACTS,function success(response){
            if(response.status === kony.application.PERMISSION_GRANTED) {
              parent_scope.pickContact();
            }
            else if(response.status === kony.application.PERMISSION_DENIED) {
              parent_scope.showToastMessageforContacts();
            }
        });
      }
      else if(result.status === kony.application.PERMISSION_GRANTED ) {
        this.pickContact();
      }
      } catch(err) {
          var errObj = {
            "errorInfo" : "Error in navigateToContacts method of the component.",
            "errorLevel" : "Configuration",
            "error": err
          };
          scope.onError(errObj);
        }
    },

    showToastMessageforContacts: function() {
      var scope = this;
      scope.dataProcessorUtility.showToastMessageError(scope, kony.i18n.getLocalizedString("kony.mb.cardLess.permissionContacts"));
    },

    pickContact: function() {
      try {
        var scope = this;
        var contactsAPI = java.import("com.konyffi.contacts.ContactPicker");
        if(!parent_scope.contactPickerObject) {
          parent_scope.contactPickerObject = new contactsAPI();
        }
        if(parent_scope.contactTypeForContacts === "phone") {
          parent_scope.contactPickerObject.selectSinglePhoneNumber(parent_scope.contactCallBack);
        } else {
          parent_scope.contactPickerObject.selectSingleEmail(parent_scope.contactCallBack);
        } } catch(err){
          var errObj = {
            "errorInfo" : "Error in pickContact method of the component.",
            "errorLevel" : "Configuration",
            "error": err
          };
          scope.onError(errObj);
        }
    },

    contactCallBack:function(object) {
      try {
        var scope = this;
        var resultContact=(JSON.parse(object));
        if(parent_scope.contactTypeForContacts === "phone") {
          if(resultContact["phone"])
            scope.view.lblMobileNumber.text = resultContact["phone"];
          scope.onContactTypeEmailDone();
        } else {
          if(resultContact["email"])
            scope.view.txtContactTypeEmail.text = resultContact["email"];
          scope.onContactTypeEmailDone();
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in contactCallBack method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setContactTypeWidgetProps
     * Setting the field label and skin properties of contact type screen.
     */
    setContactTypeWidgetProps: function() {
      try {
        var scope = this;
        scope.view.flxContactTypeHeader.skin = scope.getFieldValue(scope._sknHeaderBg);
        scope.view.imgContactTypeBack.src = scope.getFieldValue(scope._iconBack);
        scope.view.btnContactTypeCancel.skin = scope.getFieldValue(scope._sknCancelBtn);
        scope.view.lblContactTypeHeader.skin = scope.getFieldValue(scope._sknHeaderLbl);
        scope.view.lblContactTypeDescription.skin = scope.getFieldValue(scope._sknDescriptionLbl);
        scope.view.flxContactTypeSeparator.skin = scope.getFieldValue(scope._sknDescriptionSeparator);
        scope.view.lblEmailErrorMsg.skin = scope.getFieldValue(scope._errorValidationSkn);
        scope.view.lblContactTypePhoneNumber.skin = scope.getFieldValue(scope._subTitleSkin);
        scope.view.flxFlagAndCodeContainer.skin = scope.getFieldValue(scope._sknFlexNormal);
        scope.view.lblMobileNumber.skin = scope.getFieldValue(scope._sknDescriptionLbl);
        scope.view.lblContactCode.skin = scope.getFieldValue(scope._sknDescriptionLbl);
        scope.view.flxMobileNumber.skin = scope.getFieldValue(scope._sknFlexNormal);
        scope.view.lblContactTypeOr.skin = scope.getFieldValue(scope._subTitleSkin);
        scope.view.flxContactTypeNumberSeparator.skin = scope.getFieldValue(scope._sknFlexNormal);
        scope.view.txtContactTypeEmail.skin = scope.getFieldValue(scope._textBoxNormalSkin);
        scope.view.lblContactTypeEmailOr.skin = scope.getFieldValue(scope._subTitleSkin);
        scope.view.lblContactTypeEmailAddress.skin = scope.getFieldValue(scope._subTitleSkin);
        scope.view.btnChooseContactList.skin = scope.getFieldValue(scope._lookUpSkn);
        scope.view.lblContactTypeEmailAddress.skin = scope.getFieldValue(scope._sknQuestionLbl);
        scope.view.btnChooseFromContactsEmail.skin = scope.getFieldValue(scope._lookUpSkn);
        scope.view.btnContactTypeCancel.skin = scope.getFieldValue(scope._sknCancelBtn);
        // Text Properties.
        scope.view.lblContactTypeHeader.text = scope.getFieldValue(scope._contactTypeTitle);
        scope.view.btnContactTypeCancel.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)) ? true : false;
        scope.view.btnContactTypeCancel.text = scope.getFieldValue(scope._cancelButton);
        scope.view.lblContactTypeDescription.text = scope.getFieldValue(scope._contactTypeDescription);
        scope.view.lblEmailErrorMsg.text = scope.getFieldValue(scope._contactEmailError);
        scope.view.lblContactTypePhoneNumber.text = scope.getFieldValue(scope._lblMobileNumber);
        scope.view.lblContactCode.text = scope.getFieldValue(scope._txtInputMobileNumber, "defaultCountryCode");
        scope.view.lblMobileNumber.text = scope.getFieldValue(scope._txtInputMobileNumber, "placeHolder");
        scope.view.lblContactTypeOr.text = scope.getFieldValue(scope._contactOROption);
        scope.view.btnChooseContactList.text = scope.getFieldValue(scope._phoneNumberChooseBtn, "text");
        scope.view.lblContactTypeEmailAddress.text = scope.getFieldValue(scope._lblEmail);
        scope.view.txtContactTypeEmail.placeholder = scope.getFieldValue(scope._txtInputEmail, "placeHolder");
        scope.view.btnChooseFromContactsEmail.text = scope.getFieldValue(scope._emailChooseBtn, "text");
        scope.view.btnContactTypeContinue.text = scope.getFieldValue(scope._contactTypeBtn, "text");
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setContactTypeWidgetProps method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component onContactTypeContinueClick
     * Navigate to next screen.
     */
    onContactTypeContinueClick: function() {
      try {
        var scope = this;
        var phoneNumber = scope.view.lblMobileNumber.text;
        var placeholder = scope.getFieldValue(scope._txtInputMobileNumber, "placeHolder");
        if(phoneNumber !== placeholder) {
          var value = scope.view.lblContactCode.text + "-" +scope.view.lblMobileNumber.text;
          scope.updateContext("mobileNumber", value);
          scope.updateContext("toAvailableBalance", value);
        }
        if(!kony.sdk.isNullOrUndefined(scope.view.txtContactTypeEmail.text) && scope.view.txtContactTypeEmail.text !== "") {
          scope.updateContext("emailId", scope.view.txtContactTypeEmail.text);
          scope.updateContext("toAvailableBalance", scope.view.txtContactTypeEmail.text);
        } 
        var transferType = scope.getFieldValue(scope._flowType);
        if(transferType[scope.selectedFlowType] === "EDIT") {
          scope.setVerifyDetails();
          scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
        } else {
          if(scope.transferTypeContext == scope.getFieldValue(scope._transferTypes,"T4")) {
            scope.setTransferAmount();
            scope.navigateTo("flxAmount","flxAmountTop",scope.getFieldValue(scope._transferAmountHeader));
          } 
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onContactTypeContinueClick method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component onFlagandCodeFlexClick
     * Responsible to set Country code field properties.
     * Navigate to Country code screen.
     */
    onFlagandCodeFlexClick: function() {
      try {
        var scope = this;
        scope.setCountryCode();
        scope.getCountryCode();
        scope.navigateTo("flxCountryCode", "flxCountryCodeTop", scope.getFieldValue(scope._countryCodeTitle));
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onFlagandCodeFlexClick method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component getCountryCode
     * Invoke the country service to fetch response.
     */
    getCountryCode: function() {
      try {
        var scope = this;
        var objSvcName = scope.getFieldValue(scope._countryObjectServiceName);
        var objName = scope.getFieldValue(scope._countryObjectName);
        var operationName = scope.getFieldValue(scope._countryOperationName);
        var criteria = scope.getCriteria(scope._countryCriteria);
        var identifier = scope.getFieldValue(scope._countryIdentifier);
        scope.onRequestStart();
        scope.UnifiedTransferDAO.fetchCountriesList(objSvcName,objName,operationName,criteria,scope.onSuccessFetchCountriesList,identifier,scope.failureValidation);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in getCountryCode method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component onSuccessFetchCountriesList
     * Setting the country name and country code to segment..
     */
    onSuccessFetchCountriesList: function(response, unicode) {
      try{
        var scope = this;
        var countryList = [];
        if(!scope.isEmptyNullUndefined(scope._countryServiceIdentifier)) {
        response = response[scope.getFieldValue(scope._countryServiceIdentifier)];
        }
        for (var each in response) {
          var segmentData = {
            "imgCountryCodeFlag" : scope.getFieldValue(scope._countryFlagVisibility) ? {"src":"french.png","isVisible": true} : {"isVisible":false},
            "lblCountryName" : response[each].Name,
            "lblCountryCode" : response[each].phoneCountryCode,
            "imgRightArrow" : scope.getFieldValue(scope._iconRightArrow)
          }
          countryList.push(segmentData);
        }
        scope.view.segCountryCode.setData(countryList);
        scope.countryDetails = scope.view.segCountryCode.data;
        scope.onRequestEnd();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onSuccessFetchCountriesList method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      } 
    },

    /**
     * Component setCountryCode
     * Reponsible to set field properties of Countrycode.
     */
    setCountryCode: function() {
      try {
        var scope = this;
        scope.view.flxCountryCodeHeader.skin = scope.getFieldValue(scope._sknHeaderBg);
        scope.view.imgCountryCodeBack.src = scope.getFieldValue(scope._iconBack);
        scope.view.lblCountryCodeHeader.skin = scope.getFieldValue(scope._sknHeaderLbl);
        scope.view.imgCountryCodeSearch.src = scope.getFieldValue(scope._iconSearch);
        scope.view.lblCountryCodeHeader.text = scope.getFieldValue(scope._countryCodeTitle);
        scope.view.tbxCountryCodeSearch.placeholder = scope.getFieldValue(scope._countrySearchProperty, "placeHolder");
        scope.view.tbxCountryCodeSearch.skin = scope.getFieldValue(scope._sknSearchBox);
        scope.view.imgCountryCodeCloseIcon.skin = scope.getFieldValue(scope._iconSearchClose);
        scope.view.lblCountryCodeNoResults.text = scope.getFieldValue(scope._lblEmptyRecord);
        scope.view.imgCountryCodeCloseIcon.setVisibility(false);
        scope.view.tbxCountryCodeSearch.text = "";
        scope.view.flxCountryCodeBack.onTouchStart = scope.goBack;
        scope.view.segCountryCode.onRowClick = scope.onSegCountryCodeClick;
        scope.view.tbxCountryCodeSearch.onTextChange = scope.onCountryCodeSearch;
        scope.view.tbxCountryCodeSearch.onDone = scope.countrySearchFilter;
        scope.view.tbxCountryCodeSearch.onCancel = scope.countrySearchFilter;
        scope.view.imgCountryCodeSearch.onTouchStart = scope.countrySearchFilter;
        scope.view.imgCountryCodeCloseIcon.onTouchStart = scope.onCountrySearchClear;
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setCountryCode method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component onCountrySearchClear
     * Clearing the search and setting old response to segment.
     */
    onCountrySearchClear: function() {
      try {
        var scope = this;
        scope.view.imgCountryCodeCloseIcon.setVisibility(false);
        scope.view.tbxCountryCodeSearch.text = "";
        scope.countrySearchFilter();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onCountrySearchClear method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component onCountryCodeSearch
     * Invoking the search functionality.
     */
    onCountryCodeSearch: function() {
      try {
        var scope = this;
        scope.view.imgCountryCodeCloseIcon.setVisibility(true);
        scope.countrySearchFilter();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onCountryCodeSearch method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component countrySearchFilter
     * Setting the search response to segment.
     */
    countrySearchFilter: function() {
      try {
        var scope = this;
        var result = [];
        if(!scope.isEmptyNullUndefined(scope.view.tbxCountryCodeSearch.text)) {  
          result = scope.getSearchResult(scope.view.segCountryCode.data, scope.view.tbxCountryCodeSearch.text);      
        } else {
          result = scope.countryDetails;
        }
        if(result.length > 0) {
          scope.view.segCountryCode.setVisibility(true);
          scope.view.flxCountryCodeNoResults.setVisibility(false);
          scope.view.segCountryCode.setData(result);
        } else {
          scope.view.segCountryCode.setVisibility(false);
          scope.view.flxCountryCodeNoResults.setVisibility(true);
        }
        scope.view.forceLayout();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in countrySearchFilter method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component onSegCountryCodeClick
     * Getting selected row item values.
     */
    onSegCountryCodeClick: function() {
      try {
        var scope = this;
        var selectedRowItem = scope.view.segCountryCode.selectedRowItems[0];
        if(scope.getFieldValue(scope._countryFlagVisibility)) { 
          scope.view.imgContactTypeFlag.src = selectedRowItem.imgCountryCodeFlag.src;
        }
        scope.view.lblContactCode.text = selectedRowItem.lblCountryCode;
        scope.goBack();  
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onSegCountryCodeClick method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
   ** Component getSearchResult
   *  Filter by Countryname and CountryCode.
   *  @param {string} segData ,searchValue.
   *  return searchData, Search results.
   */
    getSearchResult: function(segData, searchValue) {
      try {
        var scope = this;  
        var searchData = [];
        for (var i = 0; i < segData.length; i++) {
          if (segData[i] !== null || segData[i] !== undefined) {
            var searchText = "",searchCode = "";
            if(!(scope.isEmptyNullUndefined(segData[i].lblCountryName) && scope.isEmptyNullUndefined(segData[i].lblCountryCode))) {
              searchText = segData[i].lblCountryName;
              searchCode = segData[i].lblCountryCode;
            }
            var pattern = searchValue;
            if ((searchText.search(pattern.trim()) !== -1) ||(searchCode.search(pattern.trim()) !== -1)) {
              searchData.push(segData[i]);
            }
          }
        }
        return searchData; 
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in getSearchResult method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    onVerifyDetailsBack: function() {
      try {
        var scope = this;
        var stackLength = scope.stack.length;
        for (var i = stackLength-1; i >= 0; i--){
         if((scope.stack[i] === "flxVerifyDetails" && scope.stack[i-1] === "flxAmount") || (scope.stack[i] === "flxVerifyDetails" && scope.stack[i-1] === "flxOtherAmount")) {
             scope.goBack();
            break;
          } else {
            scope.stack.pop();
          }
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in getSearchResult method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

     /**     
	 * Component setVerifyDetails
     * To bind the events and field properties for verify Details.
     */
    setVerifyDetails: function() {
      try {
        var scope = this,flag = 0;
        scope.selectedFlowType = "FT1";
        scope.onRequestStart();
        scope.disableButton("btnTransfer");
        scope.setInitialDetailsToVerify();
        scope.setFormattedValues();
        scope.view.lblVerifyName.text = scope.getFieldValue(scope._verifySectionTitle);
        scope.view.imgVerifyBack.src = scope.getFieldValue(scope._iconBack);
        scope.view.imgVerifyBack.onTouchStart = scope.onVerifyDetailsBack;
        if(scope.isEmptyNullUndefined(scope._cancelButton))
          {
            scope.view.btnVerifyCancel.setVisibility(false);
          }
        else
          {
            scope.view.btnVerifyCancel.setVisibility(true);
        scope.view.btnVerifyCancel.onClick = scope.onBackButtonClick;
        scope.view.btnVerifyCancel.text = scope.getFieldValue(scope._cancelButton);
        scope.view.btnVerifyCancel.skin = scope.getFieldValue(scope._sknCancelBtn);    
          }
       if(scope.isEmptyNullUndefined(scope._verifyTransferBtn) || scope.isEmptyNullUndefined(scope.getFieldValue(scope._verifyTransferBtn,"text")))
          {
            scope.view.btnTransfer.setVisibility(false);
          }
        else
          {
            scope.view.btnTransfer.setVisibility(true);
            scope.view.btnTransfer.text = scope.getFieldValue(scope._verifyTransferBtn,"text");
            scope.view.btnTransfer.onClick = function(){
              scope.updateContext("notes", scope.view.txtDescription.text);
              if(scope.payeeFlow === "New")
              {
                scope.createOTTransaction();
              }
              else
              {
                if(scope.isDataInContext("accountType") && scope.context["accountType"] === "CreditCard")
                {
                  scope.createCreditCardTransaction();
                }
                else
                {
                  scope.createTransaction();
                }
              }
            };    
          }
        for(var j=1;j<9;j++)
        {
          var readOnlyFieldLabel = scope.getFieldValue(eval("scope._lblReadOnlyField"+j+"Label"));
          var readOnlyFieldValue = scope.getFieldValue(eval("scope._lblReadOnlyField"+j+"Value"));
          scope.view["flxReadOnlyField"+j].setVisibility(false);
        }
        var fromAccLabel = kony.i18n.getLocalizedString(scope._fieldFromLbl);
        var fromAccValue = scope.getFieldValue(scope._fieldFromValue,"text");
        var fromAccBalLbl = kony.i18n.getLocalizedString(scope._fieldFromBalanceLbl);
        var fromAccBalVal = scope.getFieldValue(scope._fieldFromBalanceValue,"text");
        if(!(scope.isEmptyNullUndefined(fromAccLabel) || scope.isEmptyNullUndefined(fromAccValue)))
        {
          scope.view.lblFrom.text = fromAccLabel;
          scope.view.lblFrom.skin = scope._sknVerifyFieldLabel;
          scope.view.flxAccType.text = fromAccValue;
          scope.view.flxAccType.skin = scope._sknVerifyFieldValue;
          if(!(scope.isEmptyNullUndefined(fromAccBalLbl) || scope.isEmptyNullUndefined(fromAccBalVal)))
          {
            scope.view.lblBalanceLabel.text = fromAccBalVal;
            scope.view.lblBalanceLabel.skin = "sknLbla0a0a0SSP26px";
            scope.view.lblBalanceValue.text = fromAccBalLbl;
            scope.view.lblBalanceValue.skin = "sknLbla0a0a0SSP26px";
          }
          scope.view.flxToAcc.onClick = function(){
            scope.selectedFlowType = "FT2";
            this.fromAccountEdit="true";
            scope.setFromAccountsData(scope.backUpFromAccountList,scope.fromUnicode);
            scope.navigateTo("flxFromAccount","flxFromTop");
          };
        }
        var toAccLabel = kony.i18n.getLocalizedString(scope._fieldToLabel);
        var toAccValue = scope.getFieldValue(scope._fieldToValue,"text");
        var toAccBalLbl = scope.getFieldValue(scope._fieldToBalanceLbl);
        var toAccBalVal = scope.getFieldValue(scope._fieldToBalanceValue,"text");
        if(!(scope.isEmptyNullUndefined(fromAccLabel) || scope.isEmptyNullUndefined(fromAccValue)))
        {
          scope.view.lblTo.text = toAccLabel;
          scope.view.lblTo.skin = scope._sknVerifyFieldLabel;
          scope.view.lblToAccType.text = toAccValue;
          scope.view.lblToAccType.skin = scope._sknVerifyFieldValue;
          if(!scope.isEmptyNullUndefined(toAccBalLbl) || !scope.isEmptyNullUndefined(toAccBalVal))
          {
            scope.view.lblAvailableBalanceToLabel.text = toAccBalLbl;
            scope.view.lblAvailableBalanceToLabel.skin = "sknLbla0a0a0SSP26px";
            scope.view.lblAvailableBalanceToValue.text = toAccBalVal;
            scope.view.lblAvailableBalanceToValue.skin = "sknLbla0a0a0SSP26px";
          }
          scope.view.flxTo.onClick = function(){
            scope.selectedFlowType = "FT2";
            scope.isToAccountEdit="true";
            scope.setToAccounts(scope.toAccounts,scope.toAccountsUnicode);
            scope.navigateTo("flxToAccount","flxToTop",scope.getFieldValue(scope._toAccountsTitle));
          };
        }
        for(var i=1;i<18;i++)
        {
          scope.view["flxField"+i].setVisibility(false);
          var fieldLabel = kony.i18n.getLocalizedString(eval("scope._verifyField"+i+"Label"));
          var fieldi18nLabel = eval("scope._verifyField"+i+"Label");
          var fieldValue = scope.getFieldValue(eval("scope._verifyField"+i+"Value"),"text");
          var fieldOptional = scope.getFieldValue(eval("scope._verifyField"+i+"Value"),"optional");
          if((!(scope.isEmptyNullUndefined(fieldLabel) || scope.isEmptyNullUndefined(fieldValue))) || fieldOptional)
          {
            if(flag === 0 && fieldi18nLabel !== "kony.i18n.verifyDetails.removeRepeatingTransfer")
            {
              scope.view["lblField"+i+"Label"].text = fieldLabel;
              scope.view["lblField"+i+"Label"].skin = scope._sknVerifyFieldLabel;
              scope.view["lblField"+i+"Value"].text = fieldValue;
              scope.view["lblField"+i+"Value"].skin = scope._sknVerifyFieldValue;
              scope.view["imgArrow"+i].src = "chevron.png";
              scope.view["flxField"+i].setVisibility(true);
            }
            if(flag === 1 && fieldi18nLabel === "kony.i18n.verifyDetails.removeRepeatingTransfer")
            {
              scope.view["lblField"+i+"Label"].text = "";
              scope.view["lblField"+i+"Value"].text = fieldValue;
              scope.view["lblField"+i+"Value"].skin = scope._sknVerifyFieldValue;
              scope.view["imgArrow"+i].src = "";
              scope.view["lblField"+i+"Value"].right = "20dp";
              scope.view["flxField"+i].setVisibility(true);
              flag = 0;
            }
            switch(fieldi18nLabel) 
            {
              case "kony.i18n.verifyDetails.amount" :
                scope.view["flxField"+i].onClick = function(){
                  scope.selectedFlowType = "FT2";
                  if(!(scope.isDataInContext("accountType") && (scope.context["accountType"] === "CreditCard" || scope.context["accountType"] === "Loan")))
                  {
                    scope.setTransferAmount();
                    scope.navigateTo("flxAmount","flxAmountTop",scope.getFieldValue(scope._transferAmountHeader));
                  }
                  else
                  {
                    scope.setTransferOtherAmount();
                    scope.navigateTo("flxOtherAmount","flxOtherAmountTop",scope.getFieldValue(scope._transferAmountHeader));
                    }
                }
                break;
              case "kony.i18n.verifyDetails.transferCurrency" :
                scope.view["flxField"+i].onClick = function(){
                  scope.selectedFlowType = "FT2";
                  scope.setCurrency();
				   if(scope.currencyFlowCheck==false)
                    {
                  scope.navigateTo("flxCurrencySelection","flxCurrencyTop",scope.getFieldValue(scope._currencyPageTitle));
                    }
                }
                break;
              case "kony.i18n.verifyDetails.phoneNumber" :
                scope.view["flxField"+i].onClick = function(){
                  scope.selectedFlowType = "FT2";
                  scope.setContactType();
                  scope.navigateTo("flxContactType", "flxContactTypeTop", scope.getFieldValue(scope._contactTypeTitle));
                }
                break;
              case "kony.i18n.verifyDetails.emailAddress" :
                scope.view["flxField"+i].onClick = function(){
                  scope.selectedFlowType = "FT2";
                  scope.setContactType();
                  scope.navigateTo("flxContactType", "flxContactTypeTop", scope.getFieldValue(scope._contactTypeTitle));
                }
                break;
              case "kony.i18n.verifyDetails.sendOn" :
                scope.view["flxField"+i].onClick = function(){
                  scope.selectedFlowType = "FT2";
                  scope.view.customCalendar.selectedDate = scope.context["sendOn"];
                  scope.setDate("flxSendOn");
                  scope.navigateTo("flxDate", "flxSendOnTop", scope.getFieldValue(scope._sendOnDateLabel));
                }
                break;
              case "kony.i18n.verifyDetails.currency" :
                scope.view["flxField"+i].onClick = function(){
                  scope.selectedFlowType = "FT2";
                  scope.setCurrency();
                 scope.navigateTo("flxCurrencySelection","flxCurrencyTop",scope.getFieldValue(scope._currencyPageTitle));
                }
                break;
              case "kony.i18n.verifyDetails.feesPaidBy" :
                scope.view["flxField"+i].onClick = function(){
                  scope.selectedFlowType = "FT2";
                  scope.setFeesPaidBy();
                  scope.navigateTo("flxFeesPaidBy","flxFeesPaidByTop",scope.getFieldValue(scope._feesPaidTitle));
               
                }
                break;
              case "kony.i18n.verifyDetails.paymentMethod" :
                scope.view["flxField"+i].onClick = function(){
                  scope.selectedFlowType = "FT2";
                  scope.setPaymentMethod();
                  scope.navigateTo("flxPaymentMethod","flxPaymentMethodTop",scope.getFieldValue(scope._paymentMethodTitle));
                }
                break;
              case "kony.i18n.verifyDetails.startDate" :
                scope.view["flxField"+i].onClick = function(){
                  scope.selectedFlowType = "FT2";
                  scope.view.customCalendar.selectedDate = scope.startDate;
                  scope.setDate("flxStartDate");
                  scope.navigateTo("flxDate", "flxSendOnTop", scope.getFieldValue(scope._startDateLabel));
                }
                break;
              case "kony.i18n.verifyDetails.endDate" :
                flag = 1;
                scope.view["flxField"+i].onClick = function(){
                  scope.selectedFlowType = "FT2";
                  scope.view.customCalendar.selectedDate = scope.endDate;
                  scope.setDate("flxEndDate");
                  scope.navigateTo("flxDate", "flxSendOnTop", scope.getFieldValue(scope._endDateLabel));
                }
                break;
              case "kony.i18n.verifyDetails.removeRepeatingTransfer" :
                scope.view["flxField"+i].onClick = function(){
                  scope.context["frequency"] = "Once";
                  scope.context["startDate"] = "";
                  scope.context["endDate"] = "";
                  scope.context["sendOn"] = "";
                  scope.context["ISOStartDate"] = "";
                  scope.context["ISOEndDate"] = "";
                  scope.context["startDateUI"] = "";
                  scope.context["endDateUI"] = "";
                  scope.setVerifyDetails();
                }
                break;
              case "kony.i18n.verifyDetails.frequency" :
                if(!(scope.isDataInContext("accountType") && (scope.context["accountType"] === "CreditCard" || scope.context["accountType"] === "Loan")))
                {
                  scope.view["flxField"+i].onClick = function(){
                    scope.selectedFlowType = "FT2";
                    scope.setFrequency();
                    scope.navigateTo("flxFrequencySelection","flxFrequencyTop",scope.getFieldValue(scope._frequencyPageTitle));
                  }
                }
                else
                {
                  scope.view["flxField"+i].isVisible = false;
                }
                break;
              case "kony.i18n.verifyDetails.bicSwift" :
                if(scope.payeeFlow === "New"){
                  scope.view["flxField"+i].onClick = function(){
                    scope.selectedFlowType = "FT2";
                    scope.setRequiredCode();
                    scope.navigateTo("flxRequiredCode","flxRequiredCodeTop",scope.getFieldValue(scope._titleRequiredCode));
                  }
                  scope.view["imgArrow"+i].setVisibility(true);
                  scope.view["lblField"+i+"Value"].right = "50dp";
                  scope.view["lblField"+i+"Value"].skin = scope._sknVerifyFieldValue;
                } else {
                  scope.view["flxField"+i].onClick = function() {
                  }
                  scope.view["imgArrow"+i].setVisibility(false);
                  scope.view["lblField"+i+"Value"].right = "20dp";
                  scope.view["lblField"+i+"Value"].skin = scope._sknVerifyChargesValue;
                } 
                break;
              case "kony.i18n.verifyDetails.intermediatoryBIC" :
                scope.view["flxField"+i].onClick = function(){
                  scope.selectedFlowType = "FT2";
                  scope.setIntermediaryBIC();
                  scope.navigateTo("flxIntermediaryBIC","flxIntermediaryTop",scope.getFieldValue(scope._titleIntermediaryBIC));
                }
                break;
              case "kony.i18n.verifyDetails.e2eReference" :
                scope.view["flxField"+i].onClick = function(){
                  scope.selectedFlowType = "FT2";
                  scope.setE2EReference();
                  scope.navigateTo("flxE2E", "flxE2ETop", scope.getFieldValue(scope._titleE2ERef));
                }
                break;
              case "kony.i18n.verifyDetails.clearingCode1" :
                scope.view["flxField"+i].onClick = function(){
                  scope.selectedFlowType = "FT2";
                  scope.setRequiredCode();
                  scope.navigateTo("flxRequiredCode","flxRequiredCodeTop",scope.getFieldValue(scope._titleRequiredCode));
                }
                break;
              case "kony.i18n.verifyDetails.clearingCode2" :
                scope.view["flxField"+i].onClick = function(){
                  scope.selectedFlowType = "FT2";
                  scope.setRequiredCode();
                  scope.navigateTo("flxRequiredCode","flxRequiredCodeTop",scope.getFieldValue(scope._titleRequiredCode));
                }
                break;
              case "kony.i18n.verifyDetails.accountNumber" :
                if(scope.payeeFlow === "New"){
                  scope.view["flxField"+i].onClick = function(){
                    scope.selectedFlowType = "FT2";
                    scope.setKeypadCharAccountNumber();
                    scope.setPayeeAccountNumber();
                    scope.navigateTo("flxAccountNumber", "flxAccountNumberTop", scope.getFieldValue(scope._titleAccountNumber));
                  }
                  scope.view["imgArrow"+i].setVisibility(true);
                  scope.view["lblField"+i+"Value"].right = "50dp";
                  scope.view["lblField"+i+"Value"].skin = scope._sknVerifyFieldValue;
                } else {
                  scope.view["flxField"+i].onClick = function(){
                  }
                  scope.view["imgArrow"+i].setVisibility(false);
                  scope.view["lblField"+i+"Value"].right = "20dp";
                  scope.view["lblField"+i+"Value"].skin = scope._sknVerifyChargesValue;
                } 
                break;
            }
          }
        }
        var notesLabel = kony.i18n.getLocalizedString(scope._verifyNotesLabel);
        scope.view.txtDescription.text = "";
        var notesPlaceholder = scope.getFieldValue(scope._verifyNotesValue,"placeHolder");
        var notesMax = scope.getFieldValue(scope._verifyNotesValue,"max");
        scope.view.lblDescription.text = notesLabel;
        scope.view.lblDescription.skin = scope._sknVerifyFieldLabel;
        scope.view.txtDescription.placeholder = notesPlaceholder;
        scope.view.txtDescription.maxTextLength = notesMax;
        scope.view.flxAddress.setVisibility(false);
        scope.view.flxAddressSeparator.setVisibility(false);
       if(scope.context["beneType"] !== "internal")
        {
          scope.view.flxAddress.setVisibility(true);
          scope.view.flxAddressSeparator.setVisibility(true);
          var beneAddressLabel = kony.i18n.getLocalizedString(scope._verifyBeneAddLbl);
          scope.view.flxAddress.onClick = function(){
            scope.selectedFlowType = "FT2";
            scope.setBeneficiaryAddress();
            scope.navigateTo("flxAddAddress", "flxAddAddressHeaderTop", scope.getFieldValue(scope._titleAddAddress));
          }
        }
        var beneAddressLine1 = scope.getFieldValue(scope._verifyBeneAddLine1);
        var beneAddressLine2 = scope.getFieldValue(scope._verifyBeneAddLine2);
        var beneCity = scope.getFieldValue(scope._ver);
        var beneCountry = scope.getFieldValue(scope._verifyBeneCountry);
        var beneMobile = scope.getFieldValue(scope._verifyBeneMobile);
        var beneEmail = scope.getFieldValue(scope._verifyBeneEmail);
        var beneZipcode = scope.getFieldValue(scope._verifyBeneZipcode);
        var beneState = scope.getFieldValue(scope._verifyBeneState);

        scope.view.lblAddressLabel.text = beneAddressLabel;
        scope.view.lblAddressLabel.skin = scope._sknVerifyFieldLabel;
        scope.view.lblAddress1.setVisibility(false);
        if(!scope.isEmptyNullUndefined(beneAddressLine1))
        {
          scope.view.lblAddress1.setVisibility(true);
          scope.view.lblAddress1.text = beneAddressLine1;
          scope.view.lblAddress1.skin = scope._sknVerifyFieldValue;
        }
        scope.view.lblAddress2.setVisibility(false);
        if(!scope.isEmptyNullUndefined(beneAddressLine2))
        {
          scope.view.lblAddress2.setVisibility(true);
          scope.view.lblAddress2.text = beneAddressLine2;
          scope.view.lblAddress2.skin = scope._sknVerifyFieldValue;
        }
        scope.view.flxMobile.setVisibility(false);
        if(!scope.isEmptyNullUndefined(beneMobile))
        {
          scope.view.flxMobile.setVisibility(true);
          scope.view.lblMobileValue.text = beneMobile;
          scope.view.lblMobileValue.skin = scope._sknVerifyFieldValue;
        }
        scope.view.flxEmail.setVisibility(false);
        if(!scope.isEmptyNullUndefined(beneEmail))
        {
          scope.view.flxEmail.setVisibility(true);
          scope.view.lblEmailValue.text = beneEmail;
          scope.view.lblEmailValue.skin = scope._sknVerifyFieldValue;
        }
        scope.view.flxCity.setVisibility(false);
        if(!scope.isEmptyNullUndefined(beneCity))
        {
          scope.view.flxCity.setVisibility(true);
          scope.view.lblCityValue.text = beneCity;
          scope.view.lblCityValue.skin = scope._sknVerifyFieldValue;
        }
        scope.view.flxState.setVisibility(false);
        if(!scope.isEmptyNullUndefined(beneState))
        {
          scope.view.flxState.setVisibility(true);
          scope.view.lblStateValue.text = beneState;
          scope.view.lblStateValue.skin = scope._sknVerifyFieldValue;
        }
        scope.view.flxCountry.setVisibility(false);
        if(!scope.isEmptyNullUndefined(beneCountry))
        {
          scope.view.flxCountry.setVisibility(true);
          scope.view.lblCountryValue.text = beneCountry;
          scope.view.lblCountryValue.skin = scope._sknVerifyFieldValue;
        }
        scope.view.flxPostalCode.setVisibility(false);
        if(!scope.isEmptyNullUndefined(beneZipcode))
        {
          scope.view.flxPostalCode.setVisibility(true);
          scope.view.lblPostalCodeValue.text = beneZipcode;
          scope.view.lblPostalCodeValue.skin = scope._sknVerifyFieldValue;
        }
        scope.setSupportingDocuments();
        scope.view.forceLayout();
         if(scope.payeeFlow === "New")
          {
            scope.ValidateOTTDetails();
          }
        else
        {
          if(scope.isDataInContext("accountType") && scope.context["accountType"] === "CreditCard")
          {
            scope.validateCreditCardTransaction();
          }
          else
          {
            scope.ValidateDetails();
          }
          }
        scope.view.forceLayout();
      }catch(err) {
        scope.onRequestEnd();
        var errObj = {
          "errorInfo" : "Error in VerifyDetails method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**     
	 * Component setSupportingDocuments
     * To bind the events and field properties for supporting documents.
     */
    setSupportingDocuments: function() {
      try {
        var scope = this;
        var deviceName= kony.os.deviceInfo()["name"];
        scope.setSelectOptions();
        scope.view.imgAddIcon.onTouchStart = scope.showFileSelectionOption;
        scope.view.flxSelectOptionsCancel.onTouchStart = scope.hideFileSelectionOption;
        if(deviceName === "iPhone" || deviceName === "android" || deviceName === "Android") 
        {scope.view.camTakePhoto.onCapture = scope.openCamera;}
        scope.view.lblPhotoLibrary.onTouchStart = scope.fileSelectionFromGallery;
        scope.view.lblDrive.onTouchStart = scope.selectDocuments;
        scope.view.btnSupportingCancel.onClick = scope.onSizePopupClick;
        scope.view.flxVerifyDetailMainContainer.setEnabled(true);
        scope.view.flxSupportingDocRemove.setVisibility(false);
        scope.view.flxSupportingDocSizePopup.setVisibility(false);
        scope.view.flxSupportingDocSelectOptions.setVisibility(false);
        if(scope.fileNames.length > 0) {
          scope.view.flxSupportDocumentExpand.setVisibility(true);
        } else {
          scope.view.flxSupportDocumentExpand.setVisibility(false);
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setSupportingDocuments method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component setSelectOptions
     * To set the properties of select options.
     */
    setSelectOptions: function() {
      try {
        var scope = this;
        var deviceName= kony.os.deviceInfo()["name"];
        scope.view.lblDocumentTitle.text = scope.getFieldValue(scope._lblSupportingDocuments);
        scope.view.imgAddIcon.src = scope.getFieldValue(scope._iconAdd);
        var visible1 = scope.getFieldValue(scope._selectOption1, "visible");
        if(deviceName === "iPhone" || deviceName === "android" || deviceName === "Android") 
       {scope.view.camTakePhoto.setVisibility(visible1);
       scope.view.camTakePhoto.text = scope.getFieldValue(scope._selectOption1, "text");
       scope.view.camTakePhoto.skin = scope._sknCameraWidget;}
        var visible2 = scope.getFieldValue(scope._selectOption2, "visible");
        scope.view.lblPhotoLibrary.setVisibility(visible2);
        scope.view.lblPhotoLibrary.text = scope.getFieldValue(scope._selectOption2, "text");
        var visible3 = scope.getFieldValue(scope._selectOption3, "visible");
        scope.view.lblDrive.setVisibility(visible3);
        scope.view.lblDrive.text = scope.getFieldValue(scope._selectOption3, "text");
        var visible4 = scope.getFieldValue(scope._selectOption4, "visible");
        scope.view.lblDropbox.setVisibility(visible4);
        scope.view.lblDropbox.text = scope.getFieldValue(scope._selectOption4, "text");
        scope.view.lblSeperatorDocsCancel.text = scope.getFieldValue(scope._cancelOption, "text");
        scope.view.lblRemoveConfirmTitle.text = scope.getFieldValue(scope._removeDocsTitle);
        scope.view.btnRemoveYes.text = scope.getFieldValue(scope._popupActionbtns, "yesButton");
        scope.view.btnRemoveNo.text = scope.getFieldValue(scope._popupActionbtns, "noButton");
        scope.view.lblSupportingTitle.text = scope.getFieldValue(scope._sizepopupTitle);
        scope.view.btnSupportingCancel.text = scope.getFieldValue(scope._popupActionbtns, "closeButton");
        // Widgets skins
        scope.view.lblDocumentTitle.skin = scope._sknVerifyFieldLabel; 
        scope.view.lblPhotoLibrary.skin = scope._sknSelectOption;
        scope.view.lblDrive.skin = scope._sknSelectOption;
        scope.view.lblDropbox.skin = scope._sknSelectOption;
        scope.view.lblSeperatorDocsCancel.skin = scope._sknPopupCancelButton;
        scope.view.lblRemoveConfirmTitle.skin = scope._sknRemoveSupportingDocsTitle;
        scope.view.btnRemoveYes.skin = scope._sknSupportingActionBtns;
        scope.view.btnRemoveNo.skin = scope._sknSupportingActionBtns;
        scope.view.lblSupportingTitle.skin = scope._sknSupportingTextHeader;
        scope.view.btnSupportingCancel.skin = scope._sknPopupCloseButton;
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setSelectOptions method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component onSizePopupClick
     * To set the visibility of size error popup.
     */
    onSizePopupClick: function () {
      try {
        var scope = this;
        scope.view.flxSupportingDocSizePopup.setVisibility(false);
        scope.view.flxVerifyDetailMainContainer.setEnabled(true);
        scope.view.forceLayout();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onSizePopupClick method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component showFileSelectionOption
     * To set the visibility of selectoptions.
     */
    showFileSelectionOption: function () {
      try {
        var scope = this;
        scope.view.flxSupportingDocSelectOptions.setVisibility(true);
        scope.view.flxVerifyDetailMainContainer.setEnabled(false);
        scope.view.forceLayout();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in showFileSelectionOption method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component hideFileSelectionOption
     * To set the visibility of selectoptions.
     */
    hideFileSelectionOption: function () {
      try {
        var scope = this;
        scope.view.flxSupportingDocSelectOptions.setVisibility(false);
        scope.view.flxVerifyDetailMainContainer.setEnabled(true);
        scope.view.forceLayout();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in hideFileSelectionOption method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component selectDocuments
     * To open media gallery.
     */
    selectDocuments: function() {
      var scope = this;
      if (kony.os.deviceInfo().name === "iPhone") {
         scope.uploadIphoneDocument();
      } else{
        var queryContext = {
          mimetype: "application/*"
        };
        try {
          var scope = this;
          kony.phone.openMediaGallery(this.fileSelectionCallback.bind(this), queryContext);
        } catch(err) {
          this.handleUploadDocError(err);
        }
      }
    }, 
    
    handleUploadDocError: function(err) {
    kony.print(err);
    },
    
     /**     
	 * Component uploadIphoneDocument
     * To open file explorer in iphone.
     */
    uploadIphoneDocument: function() {
      try {
        var scope = this;
        kony.runOnMainThread(mainthread, []);
        function mainthread () {
          if(scope.importNativeClasses === null){
            scope.importNativeClasses = scope.initializeNativeImport();
          }
          scope.importNativeClasses.UIApplicationTransfer.sharedApplication().keyWindow.rootViewController.presentViewControllerAnimatedCompletion(scope.importNativeClasses.pvTransfer, true, {});
        } 
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in uploadIphoneDocument method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component initializeNativeImport
     * To initialize and import native packages.
     * @return {Object} - returns the imported native classes.
     */
    initializeNativeImport: function() {
      try {
        var scope = this;
        var nativeClasses = {};
        var extension = scope.getFieldValue(scope._iphoneFileExtension);
        var mimeType = extension.split(",");
        nativeClasses.UIDocumentPickerViewControllerTransfer = objc.import("UIDocumentPickerViewController");
        nativeClasses.UIViewControllerTransfer = objc.import("UIViewController");
        nativeClasses.UIApplicationTransfer = objc.import("UIApplication");
        nativeClasses.NSDataTransfer  = objc.import("NSData"); 
        nativeClasses.ViewControllerTransfer = objc.newClass('ViewController'+Math.random(), 'UIViewController', ['UIDocumentPickerDelegate'], {
          documentPickerDidPickDocumentsAtURLs: function(controller, urls) {
            kony.print("Callback called");
            if (urls.length > 0) {
              var nsurl = urls[0];
              var fileName = nsurl.lastPathComponent;
              var fileType = nsurl.pathExtension;
              var fileData = nativeClasses.NSDataTransfer.dataWithContentsOfURL(nsurl);
              var base64 = fileData.base64Encoding();
              var fileObject = {};
              fileObject.content = base64;
              fileObject.fileName = fileName;
              fileObject.type = fileType;
              fileObject.size = (base64.length * 0.75) / 1024;
              scope.uploadNativeFile(fileObject);
            }
          },
        });
        if(this.vctrl === null){
          this.vctrl = nativeClasses.ViewControllerTransfer.alloc().jsinit();
        }
        nativeClasses.pvTransfer = nativeClasses.UIDocumentPickerViewControllerTransfer.alloc().initWithDocumentTypesInMode(mimeType, UIDocumentPickerModeImport);
        nativeClasses.pvTransfer.delegate = this.vctrl;
        kony.print("end");
        return nativeClasses;
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in initializeNativeImport method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

     /**     
	 * Component uploadNativeFile
     * @param {Object} documentObject - Object which contains detail about selected document.
     */
    uploadNativeFile: function (documentObject) { 
      var scope = this;
      this.hideFileSelectionOption();
      var fileMimeType = documentObject.type;
      var fileName = documentObject.fileName;
      var fileSize = documentObject.size;
      var maxFileSize = scope.getFieldValue(scope._fileSize, "maxSize"); 
      try {
        var typeError = scope.getFieldValue(scope._fileTypeError);
        var sizeError = scope.getFieldValue(scope._fileSizeError);
        var format = scope.getFieldValue(scope._supportedFileFormat);
        if (scope.isEmptyNullUndefined(format[fileMimeType])) {
          scope.view.lblSupportingErrorMessage.text = typeError;
          scope.view.flxSupportingDocSizePopup.setVisibility(true);
          scope.view.flxVerifyDetailMainContainer.setEnabled(false);
        }
        else {
          if (documentObject.content !== null) {
            scope.onRequestStart();
            var base64 = documentObject.content;
            if (base64 !== null && base64 !== undefined && base64 !== "") {
              if (fileSize > maxFileSize * 1000) {
                scope.view.lblSupportingErrorMessage.text = sizeError;
                scope.view.flxSupportingDocSizePopup.setVisibility(true);
                scope.view.flxVerifyDetailMainContainer.setEnabled(false);
                scope.onRequestEnd();
              } else {
                this.fileNames.push(fileName);
                this.fileTypes.push(fileMimeType);
                this.setAttachmentsDataToSegment();
              }
            }
          }
          scope.onRequestEnd();
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in uploadNativeFile method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

     /**     
	 * Component fileSelectionCallback
     * @param {string} rawbytes - rawbytes of image,permissionStatus - permission to access file, mimeType - file extension. 
     */
    fileSelectionCallback: function (rawBytes, permissionStatus, mimeType) {
     try {
        var scope = this;
        scope.hideFileSelectionOption();
        if (kony.os.deviceInfo().name === "iPhone") {
          mimeType = "image/jpeg";
        }
        var fileMimeType = mimeType.substring(mimeType.lastIndexOf("/") + 1);
        var fileName = scope.fileNamePrefix+(scope.fileNames.length+1) +"."+ fileMimeType;
        var maxFileSize = scope.getFieldValue(scope._fileSize, "maxSize"); 
        var typeError = scope.getFieldValue(scope._fileTypeError);
        var sizeError = scope.getFieldValue(scope._fileSizeError);
        var format = scope.getFieldValue(scope._supportedFileFormat);
        format = !scope.isEmptyNullUndefined(format[fileMimeType]) ? format[fileMimeType].type : "";
        if(mimeType !== format)
        {
          scope.view.lblSupportingErrorMessage.text = typeError;
          scope.view.flxSupportingDocSizePopup.setVisibility(true);
          scope.view.flxVerifyDetailMainContainer.setEnabled(false);
        } else {
          if (rawBytes !== null) {
            scope.onRequestStart();
            var base64 = kony.convertToBase64(rawBytes);
            if ( base64 !== null && base64 !== undefined && base64 !== "") {
              var fileSize = ((base64.length*0.75 )/1024);
              if(fileSize > (parseInt(maxFileSize)*1000)) {
                scope.view.lblSupportingErrorMessage.text = sizeError;
                scope.view.flxSupportingDocSizePopup.setVisibility(true);
                scope.view.flxVerifyDetailMainContainer.setEnabled(false);
                scope.onRequestEnd();
              } else {
                scope.fileNames.push(fileName);
                scope.fileContents.push(base64);
                scope.fileTypes.push(fileMimeType);
                scope.setAttachmentsDataToSegment();
              }
            } 
          }
          scope.onRequestEnd();
        } 
      } catch(err) {
        this.handleUploadDocError(err);
      }
    },

    /**     
	 * Component setAttachmentsDataToSegment
     * Adding documents to segment. 
     */
    setAttachmentsDataToSegment: function() {
      try {
        var scope = this;
        scope.view.flxSupportDocumentExpand.setVisibility(true);
        var maxAttachmentsAllowed = scope.getFieldValue(scope._fileSize, "maxFiles");;
        var attachmentsData = [], filedoc = {};
        scope.docs = "";
        for (var i = 0; i < scope.fileNames.length; i++) {
          attachmentsData[i] = {};
          attachmentsData[i].filename = scope.fileNames[i];
          if(scope.existingAttachments[i] && scope.existingAttachments[i].fileID && (scope.existingAttachments[i].fileName == scope.fileNames[i]))
          {
            attachmentsData[i].fileID = scope.existingAttachments[i].fileID;
          }
          var format = scope.getFieldValue(scope._supportedFileFormat);
          format = format[scope.fileTypes[i]].imgSrc;
          attachmentsData[i]["imgAttachment"] = {
            "src": format
          };
          attachmentsData[i]["imgRemoveAttachment"] = {
            "src": scope.getFieldValue(scope._iconClear)
          };
        }
        scope.view.segAttachmentList.widgetDataMap = {
          "lblAttachment": "filename",
          "imgAttachment": "imgAttachment",
          "imgRemove" : "imgRemoveAttachment"
        };
        scope.view.segAttachmentList.setData(attachmentsData);
        for (var i = 0; i < scope.fileNames.length; i++) {
          if(i > 0) {
            scope.docs = scope.docs + ",";
          }
          var fileFormat = scope.getFieldValue(scope._supportedFileFormat);
          scope.docs = scope.docs + scope.fileNames[i] + "-" +fileFormat[scope.fileTypes[i]].imgSrc + "-" +scope.fileContents[i];
          filedoc[scope.fileNames[i]] = {
            "name" : scope.fileNames[i],
            "filetype" : fileFormat[scope.fileTypes[i]].imgSrc,
            "content" : scope.fileContents[i]
          };
        }
        scope.updateContext("supportingDocuments", scope.docs);
        scope.updateContext("originalDocuments", filedoc);
        if (scope.fileNames.length >= maxAttachmentsAllowed) {
          scope.view.imgAddIcon.setVisibility(false);
        } else {
          scope.view.imgAddIcon.setVisibility(true);
        }
        scope.hideFileSelectionOption();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setAttachmentsDataToSegment method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     ** Component removeConfirmationPopup
     ** Removing the confirmation popup.
     */
    removeConfirmationPopup: function() {
      try {
        var scope = this;
        scope.view.flxSupportingDocRemove.setVisibility(false);
        scope.view.flxVerifyDetailMainContainer.setEnabled(true);
        scope.view.forceLayout();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in removeConfirmationPopup method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     ** Component showRemoveAttachment
     ** Added logic for both actions.
     */
    showRemoveAttachment:function(rowIndex) {
      try {
        var scope = this;
        scope.view.flxSupportingDocRemove.setVisibility(true);
        scope.view.flxVerifyDetailMainContainer.setEnabled(false);
        scope.view.btnRemoveYes.onClick = function() {
          scope.removeConfirmationPopup(); 
          scope.deleteAttachment(rowIndex);
        }
        scope.view.btnRemoveNo.onClick = function() {
          scope.removeConfirmationPopup();
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in showRemoveAttachment method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }  
    },

    /**
     ** Component deleteAttachment
     ** Logic to delete the attachment from array.
     */
    deleteAttachment: function(rowIndex) {
      try {
        var scope = this;  
        var sectionIndex = rowIndex.section;
        var rowIndex = rowIndex.row;
        var deletedAttachment = scope.view.segAttachmentList.data[rowIndex];
        scope.view.segAttachmentList.removeAt(rowIndex, sectionIndex);
        scope.removeAttachments(deletedAttachment);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in deleteAttachment method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     ** Component removeAttachments
     ** Logic to remove attachments from segment.
     */
    removeAttachments: function(file){ 
      try {
        var scope = this;
        for (var i = 0; i < scope.fileNames.length; i++) {
          if (scope.fileNames[i] === file.filename) {
            scope.fileNames.splice(i, 1);
            if(file.fileID){
              scope.existingAttachments.splice(i, 1);
              scope.deletedDocuments.push(file.fileID);
            }
            else{
              scope.fileContents.splice(i, 1);
              scope.fileTypes.splice(i, 1);
            }
            break;
          } 
        }
        
        scope.setAttachmentsDataToSegment();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in removeAttachments method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     ** Component fileSelectionFromGallery
     ** Select
     */
    fileSelectionFromGallery: function () {
      var queryContext = {
        mimetype:"image/*"
      };
      try {
        var scope = this;
        kony.phone.openMediaGallery(this.fileSelectionCallback.bind(this),queryContext);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in fileSelectionFromGallery method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     ** Component openCamera
     ** Capture the picture and adding the image into segment.
     */
    openCamera: function () {
      try {
        var scope = this;
        scope.onRequestStart();
        scope.hideFileSelectionOption();
        var rawBytes = scope.view.camTakePhoto.rawBytes;
        var maxFileSize = scope.getFieldValue(scope._fileSize, "maxSize");
        var fileType = "jpeg";
        if (rawBytes) {
          var imgObject=kony.image.createImage(rawBytes);
          var base64 = "";
          var fileName = scope.fileNamePrefix+(scope.fileNames.length+1)+".jpeg";
          var fileSize = "";
          base64 = kony.convertToBase64(rawBytes);
          fileSize=((base64.length*0.75 )/1024);
          if(fileSize > maxFileSize*1000){
            var scaleLabel= (maxFileSize*1000)/(fileSize+1);
            imgObject.scale(scaleLabel);
            var tempRawBytes= imgObject.getImageAsRawBytes();
            base64 = kony.convertToBase64(tempRawBytes);
          }
          scope.fileContents.push(base64);
          scope.fileNames.push(fileName);
          scope.fileTypes.push(fileType);
          scope.setAttachmentsDataToSegment();
        }
        scope.onRequestEnd();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in openCamera method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
   ** Component navigateTo
   * Using navigateTo we navigate one form to another form in that we store formName in a stack
   * @param {string} flxName , navigates to that form.
   * @param {string} flxHeaderName , Custom Header name.
   * @param {string} headerTitle , Header title.
   */
    navigateTo: function(flxName, flxHeaderName, headerTitle) {
      try {
        var scope = this;
        if(flxName) {
          scope.stack.push(flxName);
          var stackLength = scope.stack.length;
          var nextScreen = scope.stack[stackLength - 1];
          var currentScreen = scope.stack[stackLength - 2];
          if(!scope.isEmptyNullUndefined(flxHeaderName)) {
            scope.setHeaderProperties(flxHeaderName);
          }
          scope.view[currentScreen].setVisibility(false);
          scope.view[nextScreen].setVisibility(true);
          if(kony.os.deviceInfo().name === "iPhone" && !scope.isEmptyNullUndefined(headerTitle)) {
            scope.headerTitleStack.push(headerTitle);
            var properties ={
              "stack" : scope.stack,
              "headerTitle": headerTitle,
              "cancelText" : !scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)) ? scope.getFieldValue(scope._cancelButton) : "",
              "backButtonImage" : scope.getFieldValue(scope._iconBack)
            }
            scope.iPhoneHeaderProps(properties);
          }
          scope.view.forceLayout();
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in navigateTo method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
   * Using goBack we navigates to previous form from the current form
   * @param {string} navDetails , which contains all the details about current form
   */
    goBack: function() {
      try{
        var scope = this;
        var stackLength = scope.stack.length;
        var currentScreen = scope.stack[stackLength - 1];
        var previousScreen = scope.stack[stackLength - 2];
        scope.view[previousScreen].setVisibility(true);
        scope.view[currentScreen].setVisibility(false);
        scope.stack.pop();
        if(kony.os.deviceInfo().name === "iPhone") {
          scope.headerTitleStack.pop();
          var nativeTitle = scope.headerTitleStack[scope.headerTitleStack.length - 1];
          var properties ={
              "stack" : scope.stack,
              "headerTitle": nativeTitle,
               "cancelText" : !scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)) ? scope.getFieldValue(scope._cancelButton) : "",
              "backButtonImage" : scope.getFieldValue(scope._iconBack)
            }
            scope.iPhoneHeaderProps(properties);
        }
        scope.view.forceLayout();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in goBack method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setContactNumberKeyboardChar.
     * To append keypad string to the label.
     */
    setContactNumberKeyboardChar: function(char) {
      try {
        var scope = this;
        scope.ContactNumberkeypadString = scope.ContactNumberkeypadString + char;
        scope.view.lblMobileNumber.text = scope.ContactNumberkeypadString;
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setContactNumberKeyboardChar method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component onContactNumberKeyboardDone.
     * To set the visbility of Number keypad.
     */
    onContactNumberKeyboardDone: function() {
      try {
       var scope = this;
        var length = scope.getFieldValue(scope.txtInputMobileNumber, "length");
        var minlength = length["min"], maxlength = length["max"];
        var phoneNumber = scope.view.lblMobileNumber.text;
        var placeholder = scope.getFieldValue(scope._txtInputMobileNumber, "placeHolder");
        var email = scope.view.txtContactTypeEmail.text;
        scope.view.flxContactTypeNumberKeypad.setVisibility(false);
        scope.view.flxMobileNumber.skin = scope.getFieldValue(scope._sknFlexNormal);
        if(scope.view.lblMobileNumber.text.length > minlength && scope.view.lblMobileNumber.text.length < maxlength && phoneNumber !== placeholder) {
          scope.enableButton("btnContactTypeContinue");
          scope.view.txtContactTypeEmail.setEnabled(false);
        } else {
          if(scope.view.lblMobileNumber.text.length === 0) {
            scope.view.lblMobileNumber.text = placeholder;
            scope.view.txtContactTypeEmail.setEnabled(true);
            scope.disableButton("btnContactTypeContinue");
          } else {
            scope.view.txtContactTypeEmail.setEnabled(false);
          }
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onContactNumberKeyboardDone method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component clearContactNumberKeypadChar.
     * To Clear last character of entered digits.
     */
    clearContactNumberKeypadChar: function() {
      try {
       var scope = this;
        if(scope.ContactNumberkeypadString.length >= 1)
        {
          scope.ContactNumberkeypadString = scope.ContactNumberkeypadString.substr(0, scope.ContactNumberkeypadString.length - 1);
        }
        scope.view.lblMobileNumber.text = scope.ContactNumberkeypadString;
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in clearContactNumberKeypadChar method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component onContactNumberTouch.
     * set the visibility of contact number keypad.
     */
    onContactNumberTouch: function(){
      try {
        var scope = this;
        scope.view.flxContactTypeNumberKeypad.setVisibility(true);
        scope.view.flxMobileNumber.skin = scope.getFieldValue(scope._sknHighlightedFlex);
        scope.view.flxContactType.forceLayout();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onContactNumberTouch method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component onContactEmailTextChange.
     * Email Vaidation.
     */
    onContactEmailTextChange: function() {
      try{
        var scope = this;
        scope.view.lblEmailErrorMsg.setVisibility(false);
        scope.view.txtContactTypeEmail.skin = scope.getFieldValue(scope._sknInputBoxBorder); 
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onContactEmailTextChange method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component onContactTypeEmailDone.
     * Email Vaidation.
     */
    onContactTypeEmailDone: function() {
      try {
        var scope = this;
        var email = scope.view.txtContactTypeEmail.text;
        var phoneNumber = scope.view.lblMobileNumber.text;
        var placeholder = scope.getFieldValue(scope._txtInputMobileNumber, "placeHolder");
        if(!scope.isEmptyNullUndefined(email)) {
          if(scope.validationUtilManager.isValidEmail(email)) {
            scope.view.txtContactTypeEmail.skin = scope.getFieldValue(scope._textBoxNormalSkin);
            scope.enableButton("btnContactTypeContinue");
          } else {
            scope.view.lblEmailErrorMsg.setVisibility(true);
            scope.view.txtContactTypeEmail.skin = scope.getFieldValue(scope._textBoxErrorSkin);
            scope.disableButton("btnContactTypeContinue");
          }
          scope.view.flxMobileNumber.setEnabled(false);
          scope.view.flxFlagAndCodeContainer.setEnabled(false);
        } 
        else {
          scope.view.flxMobileNumber.setEnabled(true);
          scope.view.flxFlagAndCodeContainer.setEnabled(true);
          scope.enableButton("btnContactTypeContinue");
        }
      }  catch(err) {
        var errObj = {
          "errorInfo" : "Error in onContactTypeEmailDone method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component selectToAccount
     * To generate the JSONpath for service response
     * backendResponse{JSONObject} - response received from the backend
     * unicode{string}             - unique code to identify the service response in case of multiple service calls.
     */
 selectToAccount:function(){
   var scope=this;
   var selectedData = this.view.segToAccounts.selectedRowItems[0];
   var transferType = scope.getFieldValue(scope._flowType);
   if(transferType[scope.selectedFlowType] !== "EDIT" && this.isToAccountEdit!=="true"){
   scope.context = {};
   scope.fileNames = [];
   scope.fileContents = [];
   scope.fileTypes= [];
   scope.context = JSON.parse(JSON.stringify(scope.fromAccountBackupContext));
    }
   scope.updateContext(Object.assign(scope.context,selectedData));
   scope.updateContext("toAccountName",!this.isEmptyNullUndefined(selectedData.toAccountName)? selectedData.toAccountName:"");
   scope.updateContext("toTransactionCurrency",!this.isEmptyNullUndefined(selectedData.transactionCurrency)? selectedData.transactionCurrency:"");
   scope.updateContext("swiftCode",!this.isEmptyNullUndefined(selectedData.swiftCode)? selectedData.swiftCode:"");
     if(scope.isDataInContext("IBAN"))
       {
         scope.updateContext("toAccountNumber",selectedData.IBAN);
       }
      if(this.transferTypeContext == "Within Same Bank") {
        if(selectedData.beneType === "external"){
          scope.updateContext("toAccountNumber",!this.isEmptyNullUndefined(selectedData.accountNumber)? selectedData.accountNumber:"");
		  scope.updateContext("toAvailableBalance",!this.isEmptyNullUndefined(selectedData.beneficiaryName)? selectedData.beneficiaryName:"");
//           if(transferType[scope.selectedFlowType] === "EDIT" && this.isToAccountEdit=="true") {
//             scope.setVerifyDetails();
//             scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
//           }else{
//             scope.navigateTo("flxAmount","flxAmountTop",scope.getFieldValue(scope._transferAmountHeader));
//             scope.setTransferAmount();
//           }
        scope.getCurrencyForThirdPartyToAccount();
        }
        if(selectedData.beneType === "internal"){
          scope.updateContext("toAccountNumber",!this.isEmptyNullUndefined(selectedData.accountID)? selectedData.accountID:"");
          scope.updateContext("toAvailableBalance",!this.isEmptyNullUndefined(selectedData.toAvailableBalance)? selectedData.toAvailableBalance:"");
          scope.updateContext("toAccountType",!this.isEmptyNullUndefined(selectedData.accountType)? selectedData.accountType:"");
		  if(!this.isEmptyNullUndefined(selectedData.accountType)){
          if(selectedData.accountType.toLowerCase().indexOf("creditcard") != -1 || selectedData.accountType.toLowerCase().indexOf("loan") != -1){
            scope.updateContext("toBalanceLabel",(selectedData.accountType.toLowerCase().indexOf("creditcard") != -1)? "Current Balance":"Outstanding Balance");
             scope.updateContext("outstandingBalance",!this.isEmptyNullUndefined(selectedData.outstandingBalance)? selectedData.outstandingBalance:"");
             scope.updateContext("paymentDue",!this.isEmptyNullUndefined(selectedData.paymentDue)? selectedData.paymentDue:"");
            scope.updateContext("currentAmountDue",!this.isEmptyNullUndefined(selectedData.currentAmountDue)? selectedData.currentAmountDue:"");
            
            if(!(scope.isDataInContext("accountType") &&  scope.context["accountType"] === "Loan"))
            {
              scope.navigateTo("flxOtherAmount","flxOtherAmountTop",this.getFieldValue(this._otherAmtHeader));
              scope.setTransferOtherAmount();
              
            }
            else
              {
                this.getLoanAccountDetails();
              }
          }else{
            scope.updateContext("toBalanceLabel", "Available Balance");
            if(transferType[scope.selectedFlowType] === "EDIT" && this.isToAccountEdit=="true") {
            scope.setVerifyDetails();
            scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
          } else{
            scope.navigateTo("flxAmount","flxAmountTop",scope.getFieldValue(scope._transferAmountHeader));
            scope.setTransferAmount();
          }
          }
          }
        }
      }
      if(this.transferTypeContext == "Domestic Transfer" || this.transferTypeContext === "International Transfer"){
		scope.payeeFlow = "Existing";
        scope.updateContext("payeeAccountNumberOrIBAN",!this.isEmptyNullUndefined(selectedData.accountNumber)? selectedData.accountNumber:"");
        scope.updateContext("toAccountNumber",!this.isEmptyNullUndefined(selectedData.accountNumber)? selectedData.accountNumber:"");
        scope.updateContext("toAvailableBalance",!this.isEmptyNullUndefined(selectedData.bankName)? selectedData.bankName:"");
        scope.updateContext("toBalanceLabel", "");
		scope.invokeValidateIBANService();
      }
      if(this.transferTypeContext === "Pay a Person"){
        if(!this.isEmptyNullUndefined(selectedData.phone)) {
          scope.updateContext("toAvailableBalance", selectedData.phone);
        } else if(!this.isEmptyNullUndefined(selectedData.email)) {
          scope.updateContext("toAvailableBalance", selectedData.email);
        } else {
          scope.updateContext("toAvailableBalance", "");
        }
        scope.updateContext("toAccountNumber",!this.isEmptyNullUndefined(selectedData.PayPersonId)? selectedData.PayPersonId:"");
        if(transferType[scope.selectedFlowType] === "EDIT" && this.isToAccountEdit=="true") {
            scope.setVerifyDetails();
            scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
          }else{
            scope.navigateTo("flxAmount","flxAmountTop",scope.getFieldValue(scope._transferAmountHeader));
            scope.setTransferAmount();
          }
      }
   
        if(!scope.isEmptyNullUndefined(scope.context["dueDate"]))
        {
          scope.updateContext("dueDate", this.FormatUtils.getFormatedDateString(new Date(scope.context["dueDate"]),scope._selectedDateFormat));
          scope.view.lblDueDate.text = "(Due Date: "+scope.context["dueDate"]+")";
          scope.view.lblDueDate.setVisibility(true);
        }
        else
        {
          scope.view.lblDueDate.setVisibility(false);
        }
		scope.payeeFlow = "Existing";
    },

    getCurrencyForThirdPartyToAccount: function(){
      var scope = this;
      scope.setCriteria(scope._getBeneficiaryCriteria)
      var objSvcName = scope.getFieldValue(scope._getBeneficiaryService);
      var objName = scope.getFieldValue(scope._getBeneficiaryObject);
      var operationName = scope.getFieldValue(scope._getBeneficiaryOperation);
      var criteria = scope.getCriteria();
      scope.UnifiedTransferDAO.getBeneficiaryName
      (objSvcName,objName,operationName,criteria,scope.onBeneficiaryDetailsSuccess,scope.failureValidation);
    },
    
    onBeneficiaryDetailsSuccess: function(response){
      var scope = this;
      kony.application.dismissLoadingScreen();
      if(response.currency){
        scope.updateContext("toTransactionCurrency", response.currency);
      }
      var transferType = scope.getFieldValue(scope._flowType);
      if(transferType[scope.selectedFlowType] === "EDIT" && this.isToAccountEdit=="true") {
        scope.setVerifyDetails();
        scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
      }else{
        scope.navigateTo("flxAmount","flxAmountTop",scope.getFieldValue(scope._transferAmountHeader));
        scope.setTransferAmount();
      }
    },

    /**
     * Component getProcessedText
     * Pass the text to format util to obtained the processed value.
     * text {string} - value to be processed
     * @return : {string} - processed value
     */
    getProcessedText: function (text) {
      return this.parserUtilsManager.getParsedValue(text);
    },

    /**
     * Component isEmptyNullUndefined
     * Verifies if the value is empty, null or undefined
     * data {string} - value to be verified
     * @return : {boolean} - validity of the value passed
     */
    isEmptyNullUndefined: function (data) {
      if (data === null || data === undefined || data === "") 
        return true;

      return false;
    },

    /**
     * Component setCriteria
     * Update the criteria based on accountType ans filter
     * criteria {string} - value collected from exposed contract
     */
    setCriteria:function(criteria){
      var self = this;
      try
      {
        var criteriaObject = JSON.parse(criteria);
        for(var key in  criteriaObject){
          criteriaObject[key] = this.getFieldValue(criteriaObject[key]);
        }
        var criteriaJSON = criteria;
        if(typeof(criteria) == "string"){
          criteriaJSON = JSON.parse(criteria);
        }
        for(var key in  criteriaJSON){
          criteriaObject[key] = this.getFieldValue(criteriaJSON[key]);
        }
        this.criteriaObjectValue = criteriaObject;
      }
      catch(err)
      {
        var errorObj = {
          "errorInfo" : "Error in setting the criteria",
          "errorLevel" : "Configuration",
          "error": err
        };
        self.onError(errorObj);
      }
    },

    /**
     * Component getCriteria
     * Parse the criteria from configuration
     * @return : {JSONObject} - jsonvalue for criteria
     */
    getCriteria:function(){
      var self = this;
      try{
        return this.criteriaObjectValue;
      }
      catch(err)
      {
        var errorObj = {
          "errorInfo" : "Error in returning criteria",
          "errorLevel" : "Configuration",
          "error": err
        };
        self.onError(errorObj);
      }
      return "";
    },

    onError: function (response) {
      alert(JSON.stringify(response));
    },

    bindStaticData: function() {
      var scopeObj = this;
      if(this.view.flxCurrencySelection.isVisible) {
        this.view.lblCurrencyHeader.text = this.getFieldValue(this._currencyPageTitle);
      }
      if(this.view.flxFrequencySelection.isVisible) {
        this.view.lblFrequencyHeader.text = this.getFieldValue(this._frequencyPageTitle);
      }
      //Contract data for Transfer Amount page
      this.view.flxAmountFromAccount.lblFromAccount.text = this.getFieldValue(this._fieldFromLblAmtScrn);
      this.view.flxAmountToAccount.lblToAccount.text = this.getFieldValue(this._fieldToLabelAmtScrn);
      this.view.flxSelectCurrency.lblCurrencyTitle.text = this.getFieldValue(this._lblTransferCurrency);
      this.view.flxMainAmount.lblAmountTitle.text= this.getFieldValue(this._lblTransferAmount);
      this.view.flxAmount.btnContinue.text = this.getFieldValue(this._amountBtn, "text");
      //Contract data for FX rate reference
      this.view.flxFXMainContainer.lblFxRateReference.text = this.getFieldValue(this._lblfxRateReference);
      this.view.flxFxRateWrapper.txtFXRateReference.placeholder = this.getFieldValue(this._txtInputfxRateReference, "placeHolder");
      this.view.flxFXRateReference.btnFxRateContinue.text = this.getFieldValue(this._referenceBtn, "text");
      //E2E Reference
      this.view.flxE2EMainContainer.lblE2E.text = this.getFieldValue(this._lblE2ERef);
      this.view.flxE2EWrapper.txtE2E.placeholder = this.getFieldValue(this._txtInputE2ERef, "placeHolder");
      this.view.flxE2EMainContainer.btnE2EContinue.text = this.getFieldValue(this._E2EBtn, "text");
      //Fees paid by
      this.view.flxFeesPaidByDescription.lblFeesPaidByDescription.text = this.getFieldValue(this._lblFeesPaidBy);
      this.view.flxFeesPaidByOption1.lblFeesPaidByOption1Header.text = this.getFieldValue(this._feesPaidOption1,"optionValue");
      this.view.flxFeesPaidByOption1.lblFeesPaidByOption1Description.text = this.getFieldValue(this._feesPaidOption1,"description");
      this.view.flxFeesPaidByOption2.lblFeesPaidByOption2Header.text = this.getFieldValue(this._feesPaidOption2,"optionValue");
      this.view.flxFeesPaidByOption2.lblFeesPaidByOption2Description.text = this.getFieldValue(this._feesPaidOption2,"description");
      this.view.flxFeesPaidByOption3.lblFeesPaidByOption3Header.text = this.getFieldValue(this._feesPaidOption3,"optionValue");
      this.view.flxFeesPaidByOption3.lblFeesPaidByOption3Description.text = this.getFieldValue(this._feesPaidOption3,"description");
      //Payment method 
      this.view.flxPaymentMethodDescription.lblPaymentMethodDescription.text = this.getFieldValue(this._paymentMethodOption1);
      this.view.flxPaymentMethodOption1.lblPaymentMethodOption1Header.text = this.getFieldValue(this._paymentMethodOption1, "optionValue");
      this.view.flxPaymentMethodOption1.lblPaymentMethodOption1Description.text = this.getFieldValue(this._paymentMethodOption1, "description");
      this.view.flxPaymentMethodOption2.lblPaymentMethodOption2Header.text = this.getFieldValue(this._paymentMethodOption2, "optionValue");
      this.view.flxPaymentMethodOption2.lblPaymentMethodOption2Description.text = this.getFieldValue(this._paymentMethodOption2, "description");
      this.view.flxPaymentMethodOption3.lblPaymentMethodOption3Header.text = this.getFieldValue(this._paymentMethodOption3, "optionValue");
      this.view.flxPaymentMethodOption3.lblPaymentMethodOption3Description.text = this.getFieldValue(this._paymentMethodOption3, "description");
      this.view.flxPaymentMethodOption4.lblPaymentMethodOption4Header.text = this.getFieldValue(this._paymentMethodOption4, "optionValue");
      this.view.flxPaymentMethodOption4.lblPaymentMethodOption4Description.text = this.getFieldValue(this._paymentMethodOption4, "description");
      //Add address fields
      this.view.flxAddAddressDescription.lblAddAddressDescription.text = this.getFieldValue(this._lblAddAddress);
      this.view.flxAddAddressHeader.lblAddAddressHeader.text = this.getFieldValue(this._titleAddAddress);

      this.view.flxResidentialAddressWrapper.lblAddressField1.text = this.getFieldValue(this._lblAddAdddressField1Label);
      this.view.flxAddressFieldValue1.txtAddressFieldValue1.placeholder =  this.getFieldValue(this._lblAddAddressField1Value, "placeHolder");
      this.view.flxAddressFieldValue1.txtAddressFieldValue1.maxTextLengt = this.getFieldValue(this.getFieldValue(this._lblAddAddressField1Value, "length"),"max");
      this.view.flxResidentialAddressWrapper.lblAddressField2.text = this.getFieldValue(this._lblAddAdddressField2Label);
      this.view.flxAddressFieldValue2.txtAddressFieldValue2.placeholder =  this.getFieldValue(this._lblAddAddressField2Value, "placeHolder");
      this.view.flxAddressFieldValue2.txtAddressFieldValue2.maxTextLengt = this.getFieldValue(this.getFieldValue(this._lblAddAddressField2Value, "length"),"max");

      this.view.flxResidentialAddressWrapper.lblAddressField3.text = this.getFieldValue(this._lblAddAdddressField3Label);
      this.view.flxAddressFieldValue3.txtAddressFieldValue3.placeholder =  this.getFieldValue(this._lblAddAddressField3Value, "placeHolder");
      this.view.flxAddressFieldValue3.txtAddressFieldValue3.maxTextLengt = this.getFieldValue(this.getFieldValue(this._lblAddAddressField3Value, "length"),"max");

      this.view.flxResidentialAddressWrapper.lblAddressField4.text = this.getFieldValue(this._lblAddAdddressField4Label);
      this.view.flxAddressFieldValue4.txtAddressFieldValue4.placeholder =  this.getFieldValue(this._lblAddAddressField4Value, "placeHolder");
      this.view.flxAddressFieldValue4.txtAddressFieldValue4.maxTextLengt = this.getFieldValue(this.getFieldValue(this._lblAddAddressField4Value, "length"),"max");

      this.view.flxResidentialAddressWrapper.lblAddressField5.text = this.getFieldValue(this._lblAddAdddressField5Label);

      this.view.flxAddressFieldValue5.txtAddressFieldValue5.placeholder =  this.getFieldValue(this._lblAddAddressField5Value, "placeHolder");
      this.view.flxAddressFieldValue5.txtAddressFieldValue5.maxTextLengt = this.getFieldValue(this.getFieldValue(this._lblAddAddressField5Value, "length"),"max");

      this.view.flxResidentialAddressWrapper.lblAddressField6.text = this.getFieldValue(this._lblAddAdddressField6Label);
      this.view.flxAddressFieldValue6.txtAddressFieldValue6.placeholder =  this.getFieldValue(this._lblAddAddressField6Value, "placeHolder");
      this.view.flxAddressFieldValue6.txtAddressFieldValue6.maxTextLengt = this.getFieldValue(this.getFieldValue(this._lblAddAddressField6Value, "length"),"max");

      this.view.flxResidentialAddressWrapper.lblAddressField7.text = this.getFieldValue(this._lblAddAdddressField7Label);
      this.view.flxAddressFieldValue7.txtAddressFieldValue7.placeholder =  this.getFieldValue(this._lblAddAddressField7Value, "placeHolder");
      this.view.flxAddressFieldValue7.txtAddressFieldValue7.maxTextLengt = this.getFieldValue(this.getFieldValue(this._lblAddAddressField7Value, "length"),"max");

      this.view.flxResidentialAddressWrapper.lblAddressField8.text = this.getFieldValue(this._lblAddAdddressField8Label);
      this.view.flxAddressFieldValue8.txtAddressFieldValue8.placeholder =  this.getFieldValue(this._lblAddAddressField8Value, "placeHolder");
      this.view.flxAddressFieldValue8.txtAddressFieldValue8.maxTextLengt = this.getFieldValue(this.getFieldValue(this._lblAddAddressField8Value, "length"),"max");
      this.view.flxAddAddress.flxBtnSave.btnSave.text = this.getFieldValue(this._addAddressBtn, "text");
      //Intermediary BIC
      this.view.flxIntermediaryHeader.lblIntermediaryBICHeader.text = this.getFieldValue(this._titleIntermediaryBIC);
      this.view.flxIntermediaryBICMainContainer.lblIntermediaryBIC.text = this.getFieldValue(this._lblIntermediaryBIC);
      this.view.flxIntermediaryBICWrapper.txtIntermediaryBIC.placeholder = this.getFieldValue(this._txtInputIntermediaryBIC, "placeHolder");
      this.view.flxIntermediaryBICMainContainer.btnIntermediaryBICContinue.text = this.getFieldValue(this._IntermediaryBtn, "text");
    },

    /**
     * Component updateDateBullets
     * Responsible to update the selected date value
     */
    updateDateBullets: function(selectedDate) {
      var scope = this;
      try{
      if(!scope.isEmptyNullUndefined(selectedDate))
        this.highlightedDate = this.FormatUtils.getFormatedDateString(selectedDate, "m/d/Y");
      kony.print("inside update bullets function");
      var dateLabels = scope.view.flxDateValue.widgets();
      var dummy = '';
      var skin = '';
      var locale = kony.i18n.getCurrentLocale();
      locale = locale.toLowerCase();
      locale = locale.replace("_", "-");
      //var locale = "sv"
      if (scope.isEmptyNullUndefined(selectedDate)) {
        scope.disableButton("btnDateContinue");
		//         dummy = 'MM/DD/YYYY';
        if (locale == "en-us" || locale == "en") {
          dummy = 'DD/MM/YYYY';
        } else if (locale == "en-gb" || locale === "fr-fr" || locale == "es-es") {
          dummy = 'DD/MM/YYYY';
        } else if (locale == "de-de") {
          dummy = 'DD.MM.YYYY';
        } else if (locale == "sv-se") {
          dummy = 'YYYY-DD-MM';
        }

        skin = 'ICSknLbl42424218PX';
      } else {
        //sknBtn0095e4RoundedffffffSSP26px
        scope.enableButton("btnDateContinue");
        skin = 'ICSknLbl42424218PX';
        var options = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        };
        dummy = selectedDate.toLocaleDateString("nl", options);
        dummy = dummy.replace(/-/g, '/');
        //         dummy = this.getSelectedDate();
        kony.print("In update bullets getselectedDate mein ka dummy" + dummy)
      }
      for (var i = 0; i < dateLabels.length; i++) {
        dateLabels[i].text = dummy[i];
        dateLabels[i].skin = skin;
      }
      scope.view.forceLayout();
      kony.print("update bullets function ended");
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in update date bullets method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component dateBackNavigation
     * Responsible to navigate to back scnearios from date screens
     * flxname - which is used to display sendon,startdate,enddate
     */
    dateBackNavigation : function()
    {
      var scope = this;
      if(this.flxname === "flxSendOn")
      {
        scope.goBack();
      }
      else if(this.flxname === "flxStartDate")
      {
        scope.goBack();
      }
      else if(this.flxname === "flxEndDate")
      {
        if(this.stack[this.stack.length-2] === "flxVerifyDetails")
        {
          scope.goBack();
        }
        else
        {
          scope.stack.pop();
          scope.stack.pop();
          scope.setDate("flxStartDate");
          scope.navigateTo("flxDate", "flxSendOnTop", scope.getFieldValue(scope._startDateLabel));    
        }
      }
    },
    /**
     * Component getTomorrowsDate
     * Responsible to view the date screens
     * flxname - which is used to display sendon,startdate,enddate
     */
    setDate : function(flxname)
    {
      var scope = this,todaysDate=this.currentBankDate;
      this.flxname = flxname;
      scope.view.flxDateHeader.skin = scope._sknHeaderBg;
      this.view.imgSendOnBack.src = scope.getFieldValue(scope._iconBack);
      this.view.imgSendOnBack.onTouchStart = this.dateBackNavigation;
      scope.view.customCalendar.currentDate = todaysDate;
      if(this.dateFlag === 0)
      {
        scope.view.customCalendar.preShow();
      }
      this.dateFlag++;
      try{
        if(!scope.isEmptyNullUndefined(scope._daysToRestrict))
        {
          var date = new Date(this.currentBankDate);
          date = new Date(date.setDate(date.getDate() + parseInt(scope._daysToRestrict)));
          date = this.FormatUtils.getFormatedDateString(date, "m/d/Y");
          scope.view.customCalendar.setLastEnabledDate(date);
        }
        else
        {
          var date = new Date(this.currentBankDate);
          date = new Date(date.setDate(date.getDate() + 1095));
          date = this.FormatUtils.getFormatedDateString(date, "m/d/Y");
          scope.view.customCalendar.setLastEnabledDate(date);
        }
        if(flxname === "flxSendOn")
        {
          scope.view.lblSendOnHeader.text = scope.getFieldValue(scope._sendOnDateLabel);
          scope.sendOnDate = (scope.isEmptyNullUndefined(scope.context["sendOn"])) ? todaysDate : scope.context["sendOn"];
          scope.view.customCalendar.setFirstEnabledDate(todaysDate);
          scope.view.customCalendar.setSelectedDate(scope.context["sendOn"]);
        }
        else if(flxname === "flxStartDate")
        {
          scope.view.lblSendOnHeader.text = scope.getFieldValue(scope._startDateLabel);
          scope.startDate = (scope.isEmptyNullUndefined(scope.context["startDate"])) ? scope.context["sendOn"] : scope.context["startDate"];
          scope.view.customCalendar.setFirstEnabledDate(todaysDate);
          scope.view.customCalendar.setSelectedDate(scope.startDate);
        }
        else if(flxname === "flxEndDate")
        {
          scope.view.lblSendOnHeader.text = scope.getFieldValue(scope._endDateLabel);
          scope.endDate = (scope.isEmptyNullUndefined(scope.context["endDate"])) ? scope.getTomorrowsDate(scope.context["startDate"]) : scope.context["endDate"];
          scope.view.customCalendar.setFirstEnabledDate(scope.getTomorrowsDate(scope.context["startDate"]));
          scope.view.customCalendar.setSelectedDate(scope.endDate)
        }
        if(scope.isEmptyNullUndefined(scope._dateContinue) || scope.isEmptyNullUndefined(scope.getFieldValue(scope._dateContinue,"text")))
          {
            scope.view.btnDateContinue.setVisibility(false);
          }
        else
        {
          scope.view.btnDateContinue.setVisibility(true);
          scope.view.btnDateContinue.text = scope.getFieldValue(scope._dateContinue,"text");
        scope.view.btnDateContinue.onClick = scope.setDateToContext.bind(this, flxname);
        }
        scope.view.forceLayout();
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setDate method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component setDateToContext
     * {param} : flxname - used to identify the date screen
     */
    setDateToContext : function(flxname)
    {
      var scope = this,date = scope.highlightedDate;
      if(flxname === "flxSendOn")
      {       
         if(this.updateFrequency === "Once" || scope.context["frequency"] === "Once")      
        {
          scope.context["sendOn"] = date;
          scope.updateContext("frequency",this.updateFrequency);
        }
        scope.sendOnDate = date;
        scope.setVerifyDetails();
        scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
      }
      else if(flxname === "flxStartDate")
      {
        scope.context["startDate"] = date;
        scope.startDate = date;
        scope.setDate("flxEndDate");
        scope.navigateTo("flxDate", "flxSendOnTop", scope.getFieldValue(scope._endDateLabel));
      }
      else if(flxname === "flxEndDate")
      {
        scope.context["endDate"] = date;
        scope.updateContext("frequency",this.updateFrequency);      
        scope.endDate = date;
        scope.setVerifyDetails();
        scope.navigateTo("flxVerifyDetails", "flxVerifyHeaderTop", scope.getFieldValue(scope._verifySectionTitle));
      }
    },
    /**
     * Component getTomorrowsDate
     * {param} : seheduledDate -  date in as "mm/dd/yyyy"
     * @return : {date} - tomorrow's date
     */
    getTomorrowsDate: function(scheduledDate) {
      try{
      var dateObject = new Date(scheduledDate);
      dateObject.setDate(dateObject.getDate() + 1);
      var month = dateObject.getMonth() + 1;
      var date = dateObject.getDate();
      if (month < 10) {
        month = "0" + month;
      }
      if (date < 10) {
        date = "0" + date;
      }
      return month + "/" + date + "/" + dateObject.getFullYear();
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in getTomorrowsdate method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    
    /**
     * Component createTransaction
     * Responsible to make the transaction
     */
    createTransaction : function()
    {
      var scope = this;
      try{
        scope.onRequestStart();
        var operationName = scope._transOperationName;
        if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T1")) 
        {
          var operationName = JSON.parse(scope._transOperationName);
          if(!scope.isEmptyNullUndefined(scope.context["beneficiaryName"]))
          {
            operationName = operationName["withinBank"];
            scope.updateContext("transactionType", "ExternalTransfer");
            scope.updateContext("externalAccountNumber", scope.context["toAccountNumber"]);
          }
          else
          {
            operationName = operationName["withinAccounts"];
            scope.updateContext("transactionType", "InternalTransfer");
            scope.updateContext("externalAccountNumber", "");
          }
        }
        scope.setCriteria(this._transCriteria);
        scope.UnifiedTransferDAO.makeTransaction(scope._transObjectServiceName, scope._transObjectName, operationName, scope.getCriteria(), scope._transServiceResponseIdentifier, scope.successfulTransaction, scope.failureTransaction);   
      }catch(err) {
        scope.onRequestEnd();
        var errObj = {
          "errorInfo" : "Error in createtransaction method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component createTransaction
     * Responsible to make the transaction
     */
    createOTTransaction : function()
    {
      var scope = this;
      try{
        scope.onRequestStart();
        scope.setCriteria(this._OTTcriteria);
        scope.UnifiedTransferDAO.makeTransaction(scope._OTTobjectServiceName, scope._OTTobjectName, scope._OTToperationName, scope.getCriteria(), scope._transServiceResponseIdentifier, scope.successfulTransaction, scope.failureTransaction);   
      }catch(err) {
        scope.onRequestEnd();
        var errObj = {
          "errorInfo" : "Error in createtransaction method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    
    /**
     * Component createCreditCardTransaction
     * Responsible to make the transaction
     */
    createCreditCardTransaction : function()
    {
      var scope = this;
      try{
        scope.onRequestStart();
        scope.setCriteria(this._CCcriteria);
        scope.UnifiedTransferDAO.makeTransaction(scope._CCObjectServiceName, scope._CCObjectname, scope._CCoperationname, scope.getCriteria(), scope._transServiceResponseIdentifier, scope.successfulTransaction, scope.failureTransaction);   
      }catch(err) {
        scope.onRequestEnd();
        var errObj = {
          "errorInfo" : "Error in createCreditCardTransaction method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    
    setInitialDetailsToVerify : function()
    {
      var scope = this;
      var defaultPaymentContract = JSON.parse(scope._serviceDefaultPaymentMethod);
      var paymentUI = "";
      var paymentService = "";
      if(!scope.isEmptyNullUndefined(defaultPaymentContract[scope.context["transactionCurrency"]]))
        {
          paymentUI = defaultPaymentContract[scope.context["transactionCurrency"]].name;
          paymentService = defaultPaymentContract[scope.context["transactionCurrency"]].value;
        }
      else
        {
           paymentUI = defaultPaymentContract["other"]["name"];
          paymentService = defaultPaymentContract["other"]["value"];
        }
      scope.context["selectedServiceFeesPaidBy"] = (scope.isEmptyNullUndefined(scope.context["selectedServiceFeesPaidBy"])) ? "SHA" : scope.context["selectedServiceFeesPaidBy"];
      scope.context["selectedFeesPaidBy"] = (scope.isEmptyNullUndefined(scope.context["selectedFeesPaidBy"])) ? "Both (Shared)" : scope.context["selectedFeesPaidBy"];
      scope.context["selectedServicePayment"]  = (!scope.isDataInContext("selectedServicePayment")) ? paymentService : scope.context["selectedServicePayment"] ;
      scope.context["selectedPaymentMethod"]  = (!scope.isDataInContext("selectedPaymentMethod")) ? paymentUI : scope.context["selectedPaymentMethod"] ;
	  scope.context["frequency"] = (scope.isEmptyNullUndefined(scope.context["frequency"])) ? "Once" : scope.context["frequency"];
      scope.context["sendOn"] = (scope.isEmptyNullUndefined(scope.context["sendOn"])) ? scope.currentBankDate : scope.context["sendOn"];
      scope.context["ISOStartDate"] = (scope.isEmptyNullUndefined(scope.context["startDate"])) ? new Date(scope.context["sendOn"]).toISOString() : new Date(scope.context["startDate"]).toISOString();
      scope.context["ISOSendOn"] = new Date(scope.context["sendOn"]).toISOString();
      scope.context["ISOEndDate"] = (scope.isEmptyNullUndefined(scope.context["endDate"])) ? "" : new Date(scope.context["endDate"]).toISOString();
	  
	},
	
    /**
     * Component ValidateDetails
     * Responsible to validate the details before making service call
     */
    ValidateDetails : function()
    {
      var scope = this;
      try{
        var operationName = scope._ValOperationName;
        if(scope.transferTypeContext === scope.getFieldValue(scope._transferTypes,"T1"))
        {
          var operationName = JSON.parse(scope._ValOperationName);
          if(!scope.isEmptyNullUndefined(scope.context["beneficiaryName"]))
          {
            operationName = operationName["withinBank"];
            scope.updateContext("transactionType", "ExternalTransfer");
            scope.updateContext("externalAccountNumber", scope.context["toAccountNumber"]);
          }
          else
          {
            operationName = operationName["withinAccounts"];
            scope.updateContext("transactionType", "InternalTransfer");
            scope.updateContext("externalAccountNumber", "");
          }
        }
		scope.mfaOperationName = operationName;									   
        scope.setCriteria(scope._ValCriteria);
        scope.UnifiedTransferDAO.validateUserDetails(scope._ValObjectServiceName, scope._ValObjName, operationName, scope.getCriteria(), scope._ValServiceResponseIdentifier, scope.successfulValidation, scope.failureValidation);

      }catch(err) {
        scope.onRequestEnd();
        var errObj = {
          "errorInfo" : "Error in validateDetails method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component ValidateOTTDetails
     * Responsible to validate the details before making service call
     */
    ValidateOTTDetails : function()
    {
      var scope = this;
      try{
        scope.setCriteria(scope._valOTTcriteria);
        scope.UnifiedTransferDAO.validateUserDetails(scope._valOTTobjectServiceName, scope._valOTTobjectName, scope._valOTToperationName, scope.getCriteria(), scope._ValServiceResponseIdentifier, scope.successfulValidation, scope.failureValidation);
      }catch(err) {
        scope.onRequestEnd();
        var errObj = {
          "errorInfo" : "Error in ValidateOTTDetails method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component ValidateOTTDetails
     * Responsible to validate the details before making service call
     */
    ValidateOTTDetails : function()
    {
      var scope = this;
      try{
        scope.setCriteria(scope._valOTTcriteria);
        scope.UnifiedTransferDAO.validateUserDetails(scope._valOTTobjectServiceName, scope._valOTTobjectName, scope._valOTToperationName, scope.getCriteria(), scope._ValServiceResponseIdentifier, scope.successfulValidation, scope.failureValidation);
      }catch(err) {
        scope.onRequestEnd();
        var errObj = {
          "errorInfo" : "Error in ValidateOTTDetails method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component validateCreditCardTransaction
     * Responsible to validate the details before making service call
     */
    validateCreditCardTransaction : function()
    {
      var scope = this;
      try{
        scope.setCriteria(scope._CCcriteria);
        var criteria =Object.assign(scope.getCriteria(),{"validate":true});
        scope.UnifiedTransferDAO.validateUserDetails(scope._CCObjectServiceName, scope._CCObjectname, scope._CCoperationname, criteria, scope._ValServiceResponseIdentifier, scope.successfulValidation, scope.failureValidation);
      }catch(err) {
        scope.onRequestEnd();
        var errObj = {
          "errorInfo" : "Error in validateCreditCardTransaction method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component successfulValidation
     * Responsible to process the successfulValidation
     */
    successfulValidation : function(response)
    {
      var scope = this;
      try{
        response = Object.assign(scope.context,response);
        scope.onRequestEnd();
        if(scope.isEmptyNullUndefined(response["referenceId"]))
        {
          if(!scope.isEmptyNullUndefined(response["dbpErrMsg"]))
            {
              this.dataProcessorUtility.showToastMessageError(scope, response["dbpErrMsg"]);
            }
          else if(!scope.isEmptyNullUndefined(response["errMsg"]))
            {
              this.dataProcessorUtility.showToastMessageError(scope, response["errMsg"]);
            }
          else
            {
              this.dataProcessorUtility.showToastMessageError(scope, kony.i18n.getLocalizedString("kony.error.StandardErrorMessage"));
            }
        }
        else
        {
          scope.updateContext("exchangeRate", response["exchangeRate"]);
          scope.updateContext("totalAmount", !this.isEmptyNullUndefined(response.totalAmount)? scope.FormatUtils.appendCurrencySymbol(response["totalAmount"],this.context["fromAccountCurrency"]): "");
          scope.updateContext("payeeFlow", scope.payeeFlow);  
          scope.updateContext("transferTypeContext", scope.transferTypeContext);
          scope.updateContext("serviceName", scope._transObjectServiceName);
          scope.updateContext("operationName", scope.mfaOperationName); 																						   
          scope.updateContext("action", scope.mfaOperationName);  
          scope.updateContext("dataModel",scope._transObjectName);          
          scope.updateContext("flowType", response["serviceName"]);
          if((this.context.fromAccountNumber && scope.context.fromAccountName)&& this.context.fromAccountNumber.length >=4 ){
            var formattedValue = scope.context.fromAccountName+"...."+this.context.fromAccountNumber.slice(this.context.fromAccountNumber.length - 4);
            scope.updateContext("formattedAccountName", formattedValue);
          }
          if(!scope.isEmptyNullUndefined(response["charges"]))
          {
            var charges = JSON.parse(response["charges"]);
            for(var i in charges)
            {
             scope.updateContext("TXNFEE", scope.FormatUtils.appendCurrencySymbol(charges[i].chargeAmount,charges[i].chargeCurrency));
            }
          }
          scope.setReadOnlyTransferCharges();
          scope.enableButton("btnTransfer");
        }
        scope.resetParams();
      }
      catch(err) {
        scope.onRequestEnd();
        var errObj = {
          "errorInfo" : "Error in successfulValidation method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    
    /**
     * Component failureValidation
     * Responsible to process the failureValidation
     */
    failureValidation : function()
    {
      var scope = this;
      try{
        scope.onRequestEnd();
        this.dataProcessorUtility.showToastMessageError(scope, kony.i18n.getLocalizedString("kony.error.StandardErrorMessage"));
        scope.resetParams();
      }
      catch(err) {
        scope.onRequestEnd();
        var errObj = {
          "errorInfo" : "Error in failureValidation method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component getBankDate
     * Responsible to get the bank date
     */
    getBankDate : function()
    {
      var scope = this;
      try{
        scope.setCriteria(scope._DateCriteria);
        scope.UnifiedTransferDAO.getBankDate(scope._DateObjectServiceName, scope._DateObjectName, scope._DateOperationName, scope.getCriteria(), scope._DateServiceResponseIdentifier, scope.successDate, scope.failureDate);
      }catch(err) {
        var errObj = {
          "errorInfo" : "Error in getBankDate method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    
    /**
     * Component successDate
     * Responsible to process the successDate
     */
    successDate : function(response)
    {
      var scope = this;
      try{
        var currentServiceBankDate = scope.getFieldValue(scope._currentServiceBankDate);
        var bankDate = response.date[0][currentServiceBankDate];
        if(!scope.isEmptyNullUndefined(bankDate))
        {
          bankDate = this.FormatUtils.getFormatedDateString(new Date(bankDate), "m/d/Y");
          scope.currentBankDate = bankDate;
        }
        else
        {
          bankDate = this.FormatUtils.getFormatedDateString(new Date(), "m/d/Y");
          scope.currentBankDate = bankDate;
        }
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in successDate method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    
    /**
     * Component failureDate
     * Responsible to process the failureDate
     */
    failureDate : function(response)
    {
      var scope = this;
      try{
       var bankDate = this.FormatUtils.getFormatedDateString(new Date(), "m/d/Y");
        scope.currentBankDate = bankDate;
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in failureDate method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    
    /**
     * Component successfulTransaction
     * Responsible to process the successs transaction
     */
    successfulTransaction : function(response,unicode)
    {
      var scope = this;
      try{
        response.totalAmount = !this.isEmptyNullUndefined(scope.context.totalAmount) ? scope.context.totalAmount: "";
        response = Object.assign(scope.context,response);
        scope.createTransSuccessCallback(response);
        scope.onRequestEnd();
        //scope.resetParams();
      }
      catch(err) {
        scope.onRequestEnd();
        var errObj = {
          "errorInfo" : "Error in successfulTransaction method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    
    /**
     * Component failureTransaction
     * Responsible to process the failure transaction
     */
    failureTransaction : function(response)
    {
      var scope = this;
      try{
        scope.createTransSuccessCallback(response);
        scope.onRequestEnd();
        //scope.resetParams();
      }
      catch(err) {
        scope.onRequestEnd();
        var errObj = {
          "errorInfo" : "Error in failureTransaction method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    setFormattedValues : function()
    {
      var scope = this;
      scope.updateContext("sendOnUI", this.FormatUtils.getFormatedDateString(new Date(scope.context["ISOSendOn"]),scope._selectedDateFormat));
      scope.updateContext("startDateUI", this.FormatUtils.getFormatedDateString(new Date(scope.context["ISOStartDate"]),scope._selectedDateFormat));
      scope.updateContext("endDateUI", this.FormatUtils.getFormatedDateString(new Date(scope.context["ISOEndDate"]),scope._selectedDateFormat));
      if((scope.isDataInContext("accountType") && (scope.context["accountType"] === "CreditCard" || scope.context["accountType"] === "Loan")) || scope.context["frequency"] === "Once")
        {
      scope.updateContext("startDateUI", "");
      scope.updateContext("endDateUI", "");
        }
      if(scope.context["frequency"]!=="Once")
        {
          scope.context["sendOn"] = "";
          scope.context["sendOnUI"] = "";
          //scope.context["ISOSendOn"] = "";
        }
      if(scope.context["frequency"]==="Once")
        {
//           scope.context["ISOStartDate"] = "";
          scope.context["ISOEndDate"] = "";
          scope.context["startDate"] = "";
          scope.context["startDateUI"] = "";
          scope.context["endDateUI"] = "";
          scope.context["endDate"] = "";
        }
    },
    setReadOnlyTransferCharges : function()
    {
      var scope = this;
      for(var j=1;j<9;j++)
      {
        var readOnlyFieldLabel = scope.getFieldValue(eval("scope._lblReadOnlyField"+j+"Label"),"text");
        var readOnlyFieldValue = scope.getFieldValue(eval("scope._lblReadOnlyField"+j+"Value"),"text");
        scope.view["flxReadOnlyField"+j].setVisibility(false);
        if(!(scope.isEmptyNullUndefined(readOnlyFieldLabel) || scope.isEmptyNullUndefined(readOnlyFieldValue)))
        {
          scope.view["flxReadOnlyField"+j].setVisibility(true);
          scope.view["lblReadOnlyField"+j+"Label"].text = readOnlyFieldLabel;
          scope.view["lblReadOnlyField"+j+"Label"].skin = scope._sknVerifyFieldLabel;
          scope.view["lblReadOnlyField"+j+"Value"].text = readOnlyFieldValue;
          scope.view["lblReadOnlyField"+j+"Value"].skin = scope._sknVerifyChargesValue;
        }
      }
      scope.view.forceLayout();
    },
    resetParams : function()
    {
      var scope = this;
      scope.updateContext("dbpErrCode", "");
      scope.updateContext("dbpErrMsg", "");
      scope.updateContext("message", "");
      scope.updateContext("referenceId", "");
      scope.updateContext("status", "");
      scope.view.forceLayout();
    }
  };
});