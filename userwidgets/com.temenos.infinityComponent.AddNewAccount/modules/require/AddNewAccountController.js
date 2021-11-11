define([ './ParserUtilsManager','./UnifiedTransferDAO','./ValidationUtilManager','FormatUtil','./DataProcessorUtility','JSONValidator','InfinityComponents/DataValidationFramework/DataValidationHandler'], function (ParserUtilsManager, UnifiedTransferDAO, ValidationUtilManager,FormatUtil,DataProcessorUtility,JSONValidator,DataValidationHandler)  {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      // Field Properties.
      this._gsknHeaderLbl="";
      this._adsSectionHeader="";
      this._ctsSectionHeader="";
      this._ctsContactSelectionSkn="";
      this._ctsContactTypeSkn="";
      this._accValidationService="";
      this._sbssSwiftLookupService="";
      this._sbssResultItemFlexSkin="";
      this._annSectionHeader="";
      this._annSubHeader="";
      this._annTextbox="";
      this._annCTAButton="";
      this._rcsVisibility="";
      this._cfcsNoRecords="";
      this._cccsNoRecordsSkin="";
      this._cfcssNoRecordsSkin="";
      this._cccsNoRecords="";
      this._phnosTbxValueSkn="";
      this._phnosLabelValueSkn="";
      this._rcsSwiftLookupBtnSkn="";
      this._linkPayeeSectionTitle="";
      this._vfsObject="";
      this._vfssLabelSkin="";
      this._easSectionHeader="";
      this._cfcSectionHeader="";
      this._cfcssSearchboxFlx="";
      this._cfcSearchbox="";
      this._cfcssSearchBoxSkin="";
      this._cfcEmailContactsData="";
      this._cfcssResultItemFlex="";
      this._cfcPhoneNoContactsData="";
      this._cfcssResultItemFlexSelected="";
      this._cfcssSegLabelSkin="";
      this._cfcssSegAlphabetBG="";
      this._cfcssSegSortAlphabetSkin="";
      this._ccsCountryListService="";
      this._ccssSearchboxFlx="";
      this._phnoSectionHeader="";
      this._pynsSectionHeader="";
      this._phnoLookupSkin="";
      this._accNumericInputBottomSkin="";
      this._iconBack="";
      this._dvfConfig="";
      this._nisSectionHeader="";
      this._eassOROptionFlexSkin="";
      this._sbssResultItemFlexSelectSkin="";
      this._ccssSearchBoxSkin="";
      this._adsSubHeader="";
      this._gsknHeaderFlex="";
      this._ctsValues="";
      this._accValidationObject="";
      this._accNumericInputBottomErrorSkin="";
      this._sbssSwiftLookupObject="";
      this._sbssCriteria = "";
      this._rcsGetSwiftService="";
      this._vfssValueEditableSkin="";
      this._pynsSubHeader="";
      this._easSubHeader="";
      this._ccsCountryListOperation="";
      this._phnosFieldValue="";
      this._phnoSubheader="";
      this._accInputFieldMaskedSkin="";
      this._minFillMapping="";
      this._nisSubHeader="";
      this._eassOROptionLabelSkin="";
      this._pynsVisibility="";
      this._sbssResultItemLabel1Skin="";
      this._ccssResultItemFlex="";
      this._gsknCancelBtn="";
      this._accValidationOperation="";
      this._sbssSwiftLookupOperation="";
      this._rcsSwiftObject="";
      this._vfssValueReadonlySkin="";
      this._easTextBoxInput="";
      this._ccsCountryListObject="";
      this._phnoKeypadClearIcon="";
      this._accInputFieldUnmaskedSkin="";
      this._adsTextBox1Label="";
      this._maxFillMapping="";
      this._nisTextBoxInput="";
      this._phnosOROptionFlexSkin="";
      this._eassPickEmailSkin="";
      this._pynsTextbox="";
      this._sbssResultItemLabel2Skin="";
      this._ccssResultItemFlexSelected="";
      this._accValidationCriteria="";
      this._sbssSearchResultsIdentifier="";
      this._rcsSwiftOperation="";
      this._vfssRowSkin="";
      this._easErrorMessage="";
      this._ccsCountryListCriteria="";
      this._phnoCCVisibility="";
      this._adsTextBox1Value="";
      this._jsonObjName="";
      this._nisErrorMessage="";
      this._phnosOROptionLabelSkin="";
      this._pynsErrorMessage="";
      this._phnoTxtbox1Label="";
      this._sbssResultItemLabel3Skin="";
      this._ccssSegSortAlphabetSkin="";
      this._beneficiaryTypes="";
      this._accSectionHeader="";
      this._inputValuesPool="";
      this._rcsSwiftCriteria="";
      this._rcsOROption="";
      this._rcsOROptionLabelSkin="";
      this._rcsOROptionFlexSkin="";
      this._vfssRowSeparator="";
      this._easCTAButton2="";
      this._ccsCListReponseIdentifier="";
      this._adsTextBox2Label="";
      this._nisCTAButton="";
      this._phnosPickPhoneNoSkin="";
      this._pynsCTAButton="";
      this._phnoTxtbox1="";
      this._sbssEnableCache="";
      this._ccssSegAlphabetBG="";
      this._gsknSubHeaderFlex="";
      this._accScreen1SubHeader="";
      this._cancelButton="";
      this._rcsSwiftResponseIdentifier="";
      this._ccsCountryListMasterData="";
      this._adsTextBox2Value="";
      this._easCTAButton1="";
      this._phnoTxtbox2Label="";
      this._sbssSectionHeader="";
      this._ccssSegLabelSkin="";
      this._rcsAcceptBICSwift="";
      this._gsknSubHeaderLabel="";
      this._accScreen2SubHeader="";
      this._ccsCountryListSource="";
      this._adsTextBox3Label="";
      this._easOROption="";
      this._phnoTxtbox2="";
      this._sbssSubHeaderTitle1="";
      this._rcsAcceptClearcode="";
      this._gsknSubHeaderseparator="";
      this._accTxtInput="";
      this._ccsSectionHeader="";
      this._adsTextBox3Value="";
      this._rcsHdr="";
      this._accReTxtInput="";
      this._ccsSearchbox="";
      this._adsTextBox4Label="";
      this._phnoOROption="";
      this._phnoCTABtn1="";
      this._adsTextBox4Value="";
      this._rcsSubhdr="";
      this._accCTAButton1="";
      this._vfsObjectService="";
      this._sbssTextbox1Label="";
      this._rcsTextbox1Label="";
      this._accCTAButton2="";
      this._vfsOperation="";
      this._adsTextBox5Label="";
      this._phnoCTABtn2="";
      this._phnoCTABtn3="";
      this._adsTextBox5Value="";
      this._sbssTextbox1="";
      this._rcsTextbox1="";
      this._accErrorMessage="";
      this._vfsCriteria="";
      this._sbssTextbox2Label="";
      this._vfsSectionTitle="";
      this._rcsTextbox2Label="";
      this._accReEnterErrorMessage="";
      this._adsTextBox6Label="";
      this._adsTextBox6Value="";
      this._sbssTextbox2="";
      this._rcsTextbox2="";
      this._accExistMsg="";
      this._vfsIconEdit="";
      this._sbssTextbox3Label="";
      this._vfsField1Lbl="";
      this._rcsTextbox3Label="";
      this._accInvalidMsg="";
      this._adsErrorMessage="";
      this._adsCTAButton="";
      this._sbssTextbox3="";
      this._vfsField1Value="";
      this._rcsTextbox3="";
      this._accKeypadClearIcon="";
      this._sbssTextbox4Label="";
      this._vfsField2Lbl="";
      this._gsknPrimaryContexualBtn="";
      this._sbssTextbox4="";
      this._vfsField2Value="";
      this._sbssCTA1="";
      this._rcsCTAButton1="";
      this._vfsField3Lbl="";
      this._gsknDisabledContexualBtn="";
      this._resultScreenSubHeader="";
      this._rcsCTAButton2="";
      this._vfsField3Value="";
      this._resultItemLabel1="";
      this._vfsField4Lbl="";
      this._resultItemLabel2="";
      this._vfsField4Value="";
      this._resultItemLabel3="";
      this._vfsField5Lbl="";
      this._vfsField5Value="";
      this._sbssSelectedTickImg="";
      this._verifyField5Value="";
      this._gsknTextBoxNormal="";
      this._sbssCTA2="";
      this._vfsField6Lbl="";
      this._sbssCTA3="";
      this._vfsField6Value="";
      this._gsknTextBoxFocus="";
      this._vfsField7Lbl="";
      this._gsknTextBoxError="";
      this._vfsField7Value="";
      this._vfsField8Lbl="";
      this._gsknErrorTextMessage="";
      this._vfsField8Value="";
      this._vfsField9Lbl="";
      this._vfsField9Value="";
      this._vfsField10Lbl="";
      this._vfsField10Value="";
      this._vfsField11Lbl="";
      this._gsknInputFieldLabel="";
      this._vfsField11Value="";
      this._vfsField12Lbl="";
      this._vfsField12Value="";
      this._vfsField13Lbl="";
      this._gsknContentFlex="";
      this._vfsField13Value="";
      this._vfsField14Lbl="";
      this._vfsField14Value="";
      this._vfsField15Lbl="";
      this._vfsField15Value="";
      this._vfsPayeeAddLbl="";
      this._vfsField1Address="";
      this._vfsField2Address="";
      this._vfsField3Address="";
      this._vfsField4Address="";
      this._vfsField5Address="";
      this._vfsField6Address="";
      this._vfsCTAButton1="";
      this._vfsCTAButton2="";
      this._textBox1Visibility="";
      this._textBox2Visibility="";
      this._textBox3Visibility="";   
      this._textBox4Visibility="";
      this._textBox5Visibility="";
      this._textBox6Visibility="";
      this._gsknSecondaryContexualBtn="";
      this._sbssResponseObj="";

      // Object.
      this.UnifiedTransferDAO = new UnifiedTransferDAO();
      this.dataValidationHandler = new DataValidationHandler();
      this.validationUtilManager = new ValidationUtilManager();
      this.dataProcessorUtility = new DataProcessorUtility();
      this.parserUtilsManager = new ParserUtilsManager();
      this.FormatUtils = new FormatUtil();
      this.jsonValidator = new JSONValidator();
      // Global Variables.
      this.context = {};
      this.payeeFlow = "";
      this.transferTypeContext = "";
      this.stack = [];
      this.headerTitleStack = [];
      this.ContactNumberkeypadString = "";
      this.countryDetails = []; 
      this._countryFlagVisibility = "";
      this.keypadString = "",
        this.isPeriodUsed = false;
      this.newPayee = "";
      this.processFlowType = "";
      this.selectedFlowType = "";
      this.disableOptions = "";
      this.serviceCounter = 0;
      this.countriesMasterData = [];
      this.statesMasterData = [];
      this.selectedCountry = "";
      this.selectedState = "";
      this.addressPhoneNumber = "";
      this.invalidJSONLoggerArray = [];
      this.jsonError = "";
      this.isIBANValid = "";
      this.validAddress = "";
      this.inputPool = {};
      this.mandatoryInputs = 0;
      this.mandatoryInputsValue = 0;
      this.payeeNameTextChange=false;
      this.selectedFlow="ADD";
      this.getswift = "";
      this.swiftCodeData = "";
      parent_scope = this;
      parent_scope.contactTypeForContacts = "";
      parent_scope.contactPickerObject = null;
    },

    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this,  'annSectionHeader', () => {
        return this._annSectionHeader;
      });
      defineSetter(this,  'annSectionHeader', value => {
        this._annSectionHeader = value;
      });
      defineGetter(this,  'annSubHeader', () => {
        return this._annSubHeader;
      });
      defineSetter(this,  'annSubHeader', value => {
        this._annSubHeader = value;
      });
      defineGetter(this,  'annTextbox', () => {
        return this._annTextbox;
      });
      defineSetter(this,  'annTextbox', value => {
        this._annTextbox = value;
      });
      defineGetter(this,  'annCTAButton', () => {
        return this._annCTAButton;
      });
      defineSetter(this,  'annCTAButton', value => {
        this._annCTAButton = value;
      });
      defineGetter(this,  'cfcsNoRecords', () => {
        return this._cfcsNoRecords;
      });
      defineSetter(this,  'cfcsNoRecords', value => {
        this._cfcsNoRecords = value;
      });
      defineGetter(this,  'cccsNoRecordsSkin', () => {
        return this._cccsNoRecordsSkin;
      });
      defineSetter(this,  'cccsNoRecordsSkin', value => {
        this._cccsNoRecordsSkin = value;
      });

      defineGetter(this,  'cfcssNoRecordsSkin', () => {
        return this._cfcssNoRecordsSkin;
      });
      defineSetter(this,  'cfcssNoRecordsSkin', value => {
        this._cfcssNoRecordsSkin = value;
      });
      defineGetter(this,  'cccsNoRecords', () => {
        return this._cccsNoRecords;
      });
      defineSetter(this,  'cccsNoRecords', value => {
        this._cccsNoRecords = value;
      });
      defineGetter(this,  'vfsField5Value', () => {
        return this._vfsField5Value;
      });
      defineSetter(this,  'vfsField5Value', value => {
        this._vfsField5Value = value;
      });

      defineGetter(this,  'gsknHeaderLbl', () => {
        return this._gsknHeaderLbl;
      });
      defineSetter(this,  'gsknHeaderLbl', value => {
        this._gsknHeaderLbl = value;
      });
      defineGetter(this,  'cfcSectionHeader', () => {
        return this._cfcSectionHeader;
      });
      defineSetter(this,  'cfcSectionHeader', value => {
        this._cfcSectionHeader = value;
      });

      defineGetter(this,  'cfcssSearchboxFlx', () => {
        return this._cfcssSearchboxFlx;
      });
      defineSetter(this,  'cfcssSearchboxFlx', value => {
        this._cfcssSearchboxFlx = value;
      });
      defineGetter(this,  'cfcSearchbox', () => {
        return this._cfcSearchbox;
      });
      defineSetter(this,  'cfcSearchbox', value => {
        this._cfcSearchbox = value;
      });

      defineGetter(this,  'cfcssSearchBoxSkin', () => {
        return this._cfcssSearchBoxSkin;
      });
      defineSetter(this,  'cfcssSearchBoxSkin', value => {
        this._cfcssSearchBoxSkin = value;
      });

      defineGetter(this,  'cfcEmailContactsData', () => {
        return this._cfcEmailContactsData;
      });
      defineSetter(this,  'cfcEmailContactsData', value => {
        this._cfcEmailContactsData = value;
      });
      defineGetter(this,  'cfcssResultItemFlex', () => {
        return this._cfcssResultItemFlex;
      });
      defineSetter(this,  'cfcssResultItemFlex', value => {
        this._cfcssResultItemFlex = value;
      });

      defineGetter(this,  'cfcPhoneNoContactsData', () => {
        return this._cfcPhoneNoContactsData;
      });
      defineSetter(this,  'cfcPhoneNoContactsData', value => {
        this._cfcPhoneNoContactsData = value;
      });
      defineGetter(this,  'cfcssResultItemFlexSelected', () => {
        return this._cfcssResultItemFlexSelected;
      });
      defineSetter(this,  'cfcssResultItemFlexSelected', value => {
        this._cfcssResultItemFlexSelected = value;
      });
      defineGetter(this,  'cfcssSegLabelSkin', () => {
        return this._cfcssSegLabelSkin;
      });
      defineSetter(this,  'cfcssSegLabelSkin', value => {
        this._cfcssSegLabelSkin = value;
      });
      defineGetter(this,  'cfcssSegAlphabetBG', () => {
        return this._cfcssSegAlphabetBG;
      });
      defineSetter(this,  'cfcssSegAlphabetBG', value => {
        this._cfcssSegAlphabetBG = value;
      });
      defineGetter(this,  'cfcssSegSortAlphabetSkin', () => {
        return this._cfcssSegSortAlphabetSkin;
      });
      defineSetter(this,  'cfcssSegSortAlphabetSkin', value => {
        this._cfcssSegSortAlphabetSkin = value;
      });
      defineGetter(this,  'phnosTbxValueSkn', () => {
        return this._phnosTbxValueSkn;
      });
      defineSetter(this,  'phnosTbxValueSkn', value => {
        this._phnosTbxValueSkn = value;
      });
      defineGetter(this,  'phnosLabelValueSkn', () => {
        return this._phnosLabelValueSkn;
      });
      defineSetter(this,  'phnosLabelValueSkn', value => {
        this._phnosLabelValueSkn = value;
      });
      defineGetter(this,  'adsSectionHeader', () => {
        return this._adsSectionHeader;
      });
      defineSetter(this,  'adsSectionHeader', value => {
        this._adsSectionHeader = value;
      });

      defineGetter(this,  'ctsSectionHeader', () => {
        return this._ctsSectionHeader;
      });
      defineSetter(this,  'ctsSectionHeader', value => {
        this._ctsSectionHeader = value;
      });

      defineGetter(this,  'accValidationService', () => {
        return this._accValidationService;
      });
      defineSetter(this,  'accValidationService', value => {
        this._accValidationService = value;
      });

      defineGetter(this,  'sbssSwiftLookupService', () => {
        return this._sbssSwiftLookupService;
      });
      defineSetter(this,  'sbssSwiftLookupService', value => {
        this._sbssSwiftLookupService = value;
      });

      defineGetter(this,  'sbssResultItemFlexSkin', () => {
        return this._sbssResultItemFlexSkin;
      });
      defineSetter(this,  'sbssResultItemFlexSkin', value => {
        this._sbssResultItemFlexSkin = value;
      });
      defineGetter(this,  'rcsOROptionFlexSkin', () => {
        return this._rcsOROptionFlexSkin;
      });
      defineSetter(this,  'rcsOROptionFlexSkin', value => {
        this._rcsOROptionFlexSkin = value;
      });
      defineGetter(this,  'rcsOROptionLabelSkin', () => {
        return this._rcsOROptionLabelSkin;
      });
      defineSetter(this,  'rcsOROptionLabelSkin', value => {
        this._rcsOROptionLabelSkin = value;
      });

      defineGetter(this,  'rcsVisibility', () => {
        return this._rcsVisibility;
      });
      defineSetter(this,  'rcsVisibility', value => {
        this._rcsVisibility = value;
      });

      defineGetter(this,  'rcsSwiftLookupBtnSkn', () => {
        return this._rcsSwiftLookupBtnSkn;
      });
      defineSetter(this,  'rcsSwiftLookupBtnSkn', value => {
        this._rcsSwiftLookupBtnSkn = value;
      });

      defineGetter(this,  'linkPayeeSectionTitle', () => {
        return this._linkPayeeSectionTitle;
      });
      defineSetter(this,  'linkPayeeSectionTitle', value => {
        this._linkPayeeSectionTitle = value;
      });

      defineGetter(this,  'vfsObject', () => {
        return this._vfsObject;
      });
      defineSetter(this,  'vfsObject', value => {
        this._vfsObject = value;
      });

      defineGetter(this,  'vfssLabelSkin', () => {
        return this._vfssLabelSkin;
      });
      defineSetter(this,  'vfssLabelSkin', value => {
        this._vfssLabelSkin = value;
      });

      defineGetter(this,  'easSectionHeader', () => {
        return this._easSectionHeader;
      });
      defineSetter(this,  'easSectionHeader', value => {
        this._easSectionHeader = value;
      });

      defineGetter(this,  'ccsCountryListService', () => {
        return this._ccsCountryListService;
      });
      defineSetter(this,  'ccsCountryListService', value => {
        this._ccsCountryListService = value;
      });

      defineGetter(this,  'ccssSearchboxFlx', () => {
        return this._ccssSearchboxFlx;
      });
      defineSetter(this,  'ccssSearchboxFlx', value => {
        this._ccssSearchboxFlx = value;
      });

      defineGetter(this,  'phnoSectionHeader', () => {
        return this._phnoSectionHeader;
      });
      defineSetter(this,  'phnoSectionHeader', value => {
        this._phnoSectionHeader = value;
      });

      defineGetter(this,  'pynsSectionHeader', () => {
        return this._pynsSectionHeader;
      });
      defineSetter(this,  'pynsSectionHeader', value => {
        this._pynsSectionHeader = value;
      });

      defineGetter(this,  'phnoLookupSkin', () => {
        return this._phnoLookupSkin;
      });
      defineSetter(this,  'phnoLookupSkin', value => {
        this._phnoLookupSkin = value;
      });

      defineGetter(this,  'accNumericInputBottomSkin', () => {
        return this._accNumericInputBottomSkin;
      });
      defineSetter(this,  'accNumericInputBottomSkin', value => {
        this._accNumericInputBottomSkin = value;
      });

      defineGetter(this,  'iconBack', () => {
        return this._iconBack;
      });
      defineSetter(this,  'iconBack', value => {
        this._iconBack = value;
      });

      defineGetter(this,  'dvfConfig', () => {
        return this._dvfConfig;
      });
      defineSetter(this,  'dvfConfig', value => {
        this._dvfConfig = value;
      });

      defineGetter(this,  'nisSectionHeader', () => {
        return this._nisSectionHeader;
      });
      defineSetter(this,  'nisSectionHeader', value => {
        this._nisSectionHeader = value;
      });

      defineGetter(this,  'eassOROptionFlexSkin', () => {
        return this._eassOROptionFlexSkin;
      });
      defineSetter(this,  'eassOROptionFlexSkin', value => {
        this._eassOROptionFlexSkin = value;
      });

      defineGetter(this,  'sbssResultItemFlexSelectSkin', () => {
        return this._sbssResultItemFlexSelectSkin;
      });
      defineSetter(this,  'sbssResultItemFlexSelectSkin', value => {
        this._sbssResultItemFlexSelectSkin = value;
      });

      defineGetter(this,  'ccssSearchBoxSkin', () => {
        return this._ccssSearchBoxSkin;
      });
      defineSetter(this,  'ccssSearchBoxSkin', value => {
        this._ccssSearchBoxSkin = value;
      });

      defineGetter(this,  'adsSubHeader', () => {
        return this._adsSubHeader;
      });
      defineSetter(this,  'adsSubHeader', value => {
        this._adsSubHeader = value;
      });

      defineGetter(this,  'gsknHeaderFlex', () => {
        return this._gsknHeaderFlex;
      });
      defineSetter(this,  'gsknHeaderFlex', value => {
        this._gsknHeaderFlex = value;
      });

      defineGetter(this,  'ctsValues', () => {
        return this._ctsValues;
      });
      defineSetter(this,  'ctsValues', value => {
        this._ctsValues = value;
      });

      defineGetter(this,  'ctsContactSelectionSkn', () => {
        return this._ctsContactSelectionSkn;
      });
      defineSetter(this,  'ctsContactSelectionSkn', value => {
        this._ctsContactSelectionSkn = value;
      });

      defineGetter(this,  'ctsContactTypeSkn', () => {
        return this._ctsContactTypeSkn;
      });
      defineSetter(this,  'ctsContactTypeSkn', value => {
        this._ctsContactTypeSkn = value;
      });

      defineGetter(this,  'accValidationObject', () => {
        return this._accValidationObject;
      });
      defineSetter(this,  'accValidationObject', value => {
        this._accValidationObject = value;
      });

      defineGetter(this,  'sbssSwiftLookupObject', () => {
        return this._sbssSwiftLookupObject;
      });
      defineSetter(this,  'sbssSwiftLookupObject', value => {
        this._sbssSwiftLookupObject = value;
      });

      defineGetter(this,  'sbssCriteria', () => {
        return this._sbssCriteria;
      });
      defineSetter(this,  'sbssCriteria', value => {
        this._sbssCriteria = value;
      });

      defineGetter(this,  'rcsGetSwiftService', () => {
        return this._rcsGetSwiftService;
      });
      defineSetter(this,  'rcsGetSwiftService', value => {
        this._rcsGetSwiftService = value;
      });

      defineGetter(this,  'vfssValueEditableSkin', () => {
        return this._vfssValueEditableSkin;
      });
      defineSetter(this,  'vfssValueEditableSkin', value => {
        this._vfssValueEditableSkin = value;
      });

      defineGetter(this,  'pynsSubHeader', () => {
        return this._pynsSubHeader;
      });
      defineSetter(this,  'pynsSubHeader', value => {
        this._pynsSubHeader = value;
      });

      defineGetter(this,  'easSubHeader', () => {
        return this._easSubHeader;
      });
      defineSetter(this,  'easSubHeader', value => {
        this._easSubHeader = value;
      });

      defineGetter(this,  'ccsCountryListOperation', () => {
        return this._ccsCountryListOperation;
      });
      defineSetter(this,  'ccsCountryListOperation', value => {
        this._ccsCountryListOperation = value;
      });

      defineGetter(this,  'phnosFieldValue', () => {
        return this._phnosFieldValue;
      });
      defineSetter(this,  'phnosFieldValue', value => {
        this._phnosFieldValue = value;
      });

      defineGetter(this,  'phnoSubheader', () => {
        return this._phnoSubheader;
      });
      defineSetter(this,  'phnoSubheader', value => {
        this._phnoSubheader = value;
      });

      defineGetter(this,  'accInputFieldMaskedSkin', () => {
        return this._accInputFieldMaskedSkin;
      });
      defineSetter(this,  'accInputFieldMaskedSkin', value => {
        this._accInputFieldMaskedSkin = value;
      });

      defineGetter(this,  'minFillMapping', () => {
        return this._minFillMapping;
      });
      defineSetter(this,  'minFillMapping', value => {
        this._minFillMapping = value;
      });

      defineGetter(this,  'nisSubHeader', () => {
        return this._nisSubHeader;
      });
      defineSetter(this,  'nisSubHeader', value => {
        this._nisSubHeader = value;
      });

      defineGetter(this,  'eassOROptionLabelSkin', () => {
        return this._eassOROptionLabelSkin;
      });
      defineSetter(this,  'eassOROptionLabelSkin', value => {
        this._eassOROptionLabelSkin = value;
      });

      defineGetter(this,  'pynsVisibility', () => {
        return this._pynsVisibility;
      });
      defineSetter(this,  'pynsVisibility', value => {
        this._pynsVisibility = value;
      });

      defineGetter(this,  'sbssResultItemLabel1Skin', () => {
        return this._sbssResultItemLabel1Skin;
      });
      defineSetter(this,  'sbssResultItemLabel1Skin', value => {
        this._sbssResultItemLabel1Skin = value;
      });

      defineGetter(this,  'ccssResultItemFlex', () => {
        return this._ccssResultItemFlex;
      });
      defineSetter(this,  'ccssResultItemFlex', value => {
        this._ccssResultItemFlex = value;
      });

      defineGetter(this,  'gsknCancelBtn', () => {
        return this._gsknCancelBtn;
      });
      defineSetter(this,  'gsknCancelBtn', value => {
        this._gsknCancelBtn = value;
      });

      defineGetter(this,  'accValidationOperation', () => {
        return this._accValidationOperation;
      });
      defineSetter(this,  'accValidationOperation', value => {
        this._accValidationOperation = value;
      });

      defineGetter(this,  'sbssSwiftLookupOperation', () => {
        return this._sbssSwiftLookupOperation;
      });
      defineSetter(this,  'sbssSwiftLookupOperation', value => {
        this._sbssSwiftLookupOperation = value;
      });

      defineGetter(this,  'rcsSwiftObject', () => {
        return this._rcsSwiftObject;
      });
      defineSetter(this,  'rcsSwiftObject', value => {
        this._rcsSwiftObject = value;
      });

      defineGetter(this,  'vfssValueReadonlySkin', () => {
        return this._vfssValueReadonlySkin;
      });
      defineSetter(this,  'vfssValueReadonlySkin', value => {
        this._vfssValueReadonlySkin = value;
      });

      defineGetter(this,  'easTextBoxInput', () => {
        return this._easTextBoxInput;
      });
      defineSetter(this,  'easTextBoxInput', value => {
        this._easTextBoxInput = value;
      });

      defineGetter(this,  'ccsCountryListObject', () => {
        return this._ccsCountryListObject;
      });
      defineSetter(this,  'ccsCountryListObject', value => {
        this._ccsCountryListObject = value;
      });

      defineGetter(this,  'phnoKeypadClearIcon', () => {
        return this._phnoKeypadClearIcon;
      });
      defineSetter(this,  'phnoKeypadClearIcon', value => {
        this._phnoKeypadClearIcon = value;
      });

      defineGetter(this,  'accInputFieldUnmaskedSkin', () => {
        return this._accInputFieldUnmaskedSkin;
      });
      defineSetter(this,  'accInputFieldUnmaskedSkin', value => {
        this._accInputFieldUnmaskedSkin = value;
      });

      defineGetter(this,  'adsTextBox1Label', () => {
        return this._adsTextBox1Label;
      });
      defineSetter(this,  'adsTextBox1Label', value => {
        this._adsTextBox1Label = value;
      });

      defineGetter(this,  'maxFillMapping', () => {
        return this._maxFillMapping;
      });
      defineSetter(this,  'maxFillMapping', value => {
        this._maxFillMapping = value;
      });

      defineGetter(this,  'nisTextBoxInput', () => {
        return this._nisTextBoxInput;
      });
      defineSetter(this,  'nisTextBoxInput', value => {
        this._nisTextBoxInput = value;
      });

      defineGetter(this,  'phnosOROptionFlexSkin', () => {
        return this._phnosOROptionFlexSkin;
      });
      defineSetter(this,  'phnosOROptionFlexSkin', value => {
        this._phnosOROptionFlexSkin = value;
      });

      defineGetter(this,  'eassPickEmailSkin', () => {
        return this._eassPickEmailSkin;
      });
      defineSetter(this,  'eassPickEmailSkin', value => {
        this._eassPickEmailSkin = value;
      });

      defineGetter(this,  'pynsTextbox', () => {
        return this._pynsTextbox;
      });
      defineSetter(this,  'pynsTextbox', value => {
        this._pynsTextbox = value;
      });

      defineGetter(this,  'sbssResultItemLabel2Skin', () => {
        return this._sbssResultItemLabel2Skin;
      });
      defineSetter(this,  'sbssResultItemLabel2Skin', value => {
        this._sbssResultItemLabel2Skin = value;
      });

      defineGetter(this,  'ccssResultItemFlexSelected', () => {
        return this._ccssResultItemFlexSelected;
      });
      defineSetter(this,  'ccssResultItemFlexSelected', value => {
        this._ccssResultItemFlexSelected = value;
      });

      defineGetter(this,  'accValidationCriteria', () => {
        return this._accValidationCriteria;
      });
      defineSetter(this,  'accValidationCriteria', value => {
        this._accValidationCriteria = value;
      });

      defineGetter(this,  'sbssSearchResultsIdentifier', () => {
        return this._sbssSearchResultsIdentifier;
      });
      defineSetter(this,  'sbssSearchResultsIdentifier', value => {
        this._sbssSearchResultsIdentifier = value;
      });

      defineGetter(this,  'rcsSwiftOperation', () => {
        return this._rcsSwiftOperation;
      });
      defineSetter(this,  'rcsSwiftOperation', value => {
        this._rcsSwiftOperation = value;
      });

      defineGetter(this,  'vfssRowSkin', () => {
        return this._vfssRowSkin;
      });
      defineSetter(this,  'vfssRowSkin', value => {
        this._vfssRowSkin = value;
      });

      defineGetter(this,  'easErrorMessage', () => {
        return this._easErrorMessage;
      });
      defineSetter(this,  'easErrorMessage', value => {
        this._easErrorMessage = value;
      });

      defineGetter(this,  'ccsCountryListCriteria', () => {
        return this._ccsCountryListCriteria;
      });
      defineSetter(this,  'ccsCountryListCriteria', value => {
        this._ccsCountryListCriteria = value;
      });

      defineGetter(this,  'phnoCCVisibility', () => {
        return this._phnoCCVisibility;
      });
      defineSetter(this,  'phnoCCVisibility', value => {
        this._phnoCCVisibility = value;
      });

      defineGetter(this,  'accNumericInputBottomErrorSkin', () => {
        return this._accNumericInputBottomErrorSkin;
      });
      defineSetter(this,  'accNumericInputBottomErrorSkin', value => {
        this._accNumericInputBottomErrorSkin = value;
      });

      defineGetter(this,  'jsonObjName', () => {
        return this._jsonObjName;
      });
      defineSetter(this,  'jsonObjName', value => {
        this._jsonObjName = value;
      });

      defineGetter(this,  'nisErrorMessage', () => {
        return this._nisErrorMessage;
      });
      defineSetter(this,  'nisErrorMessage', value => {
        this._nisErrorMessage = value;
      });

      defineGetter(this,  'phnosOROptionLabelSkin', () => {
        return this._phnosOROptionLabelSkin;
      });
      defineSetter(this,  'phnosOROptionLabelSkin', value => {
        this._phnosOROptionLabelSkin = value;
      });

      defineGetter(this,  'pynsErrorMessage', () => {
        return this._pynsErrorMessage;
      });
      defineSetter(this,  'pynsErrorMessage', value => {
        this._pynsErrorMessage = value;
      });

      defineGetter(this,  'phnoTxtbox1Label', () => {
        return this._phnoTxtbox1Label;
      });
      defineSetter(this,  'phnoTxtbox1Label', value => {
        this._phnoTxtbox1Label = value;
      });

      defineGetter(this,  'sbssResultItemLabel3Skin', () => {
        return this._sbssResultItemLabel3Skin;
      });
      defineSetter(this,  'sbssResultItemLabel3Skin', value => {
        this._sbssResultItemLabel3Skin = value;
      });

      defineGetter(this,  'ccssSegSortAlphabetSkin', () => {
        return this._ccssSegSortAlphabetSkin;
      });
      defineSetter(this,  'ccssSegSortAlphabetSkin', value => {
        this._ccssSegSortAlphabetSkin = value;
      });

      defineGetter(this,  'beneficiaryTypes', () => {
        return this._beneficiaryTypes;
      });
      defineSetter(this,  'beneficiaryTypes', value => {
        this._beneficiaryTypes = value;
      });

      defineGetter(this,  'accSectionHeader', () => {
        return this._accSectionHeader;
      });
      defineSetter(this,  'accSectionHeader', value => {
        this._accSectionHeader = value;
      });

      defineGetter(this,  'inputValuesPool', () => {
        return this._inputValuesPool;
      });
      defineSetter(this,  'inputValuesPool', value => {
        this._inputValuesPool = value;
      });

      defineGetter(this,  'rcsSwiftCriteria', () => {
        return this._rcsSwiftCriteria;
      });
      defineSetter(this,  'rcsSwiftCriteria', value => {
        this._rcsSwiftCriteria = value;
      });

      defineGetter(this,  'vfssRowSeparator', () => {
        return this._vfssRowSeparator;
      });
      defineSetter(this,  'vfssRowSeparator', value => {
        this._vfssRowSeparator = value;
      });

      defineGetter(this,  'easCTAButton2', () => {
        return this._easCTAButton2;
      });
      defineSetter(this,  'easCTAButton2', value => {
        this._easCTAButton2 = value;
      });

      defineGetter(this,  'ccsCListReponseIdentifier', () => {
        return this._ccsCListReponseIdentifier;
      });
      defineSetter(this,  'ccsCListReponseIdentifier', value => {
        this._ccsCListReponseIdentifier = value;
      });

      defineGetter(this,  'adsTextBox2Label', () => {
        return this._adsTextBox2Label;
      });
      defineSetter(this,  'adsTextBox2Label', value => {
        this._adsTextBox2Label = value;
      });

      defineGetter(this,  'nisCTAButton', () => {
        return this._nisCTAButton;
      });
      defineSetter(this,  'nisCTAButton', value => {
        this._nisCTAButton = value;
      });

      defineGetter(this,  'phnosPickPhoneNoSkin', () => {
        return this._phnosPickPhoneNoSkin;
      });
      defineSetter(this,  'phnosPickPhoneNoSkin', value => {
        this._phnosPickPhoneNoSkin = value;
      });

      defineGetter(this,  'pynsCTAButton', () => {
        return this._pynsCTAButton;
      });
      defineSetter(this,  'pynsCTAButton', value => {
        this._pynsCTAButton = value;
      });

      defineGetter(this,  'phnoTxtbox1', () => {
        return this._phnoTxtbox1;
      });
      defineSetter(this,  'phnoTxtbox1', value => {
        this._phnoTxtbox1 = value;
      });

      defineGetter(this,  'sbssEnableCache', () => {
        return this._sbssEnableCache;
      });
      defineSetter(this,  'sbssEnableCache', value => {
        this._sbssEnableCache = value;
      });

      defineGetter(this,  'ccssSegAlphabetBG', () => {
        return this._ccssSegAlphabetBG;
      });
      defineSetter(this,  'ccssSegAlphabetBG', value => {
        this._ccssSegAlphabetBG = value;
      });

      defineGetter(this,  'gsknSubHeaderFlex', () => {
        return this._gsknSubHeaderFlex;
      });
      defineSetter(this,  'gsknSubHeaderFlex', value => {
        this._gsknSubHeaderFlex = value;
      });

      defineGetter(this,  'accScreen1SubHeader', () => {
        return this._accScreen1SubHeader;
      });
      defineSetter(this,  'accScreen1SubHeader', value => {
        this._accScreen1SubHeader = value;
      });

      defineGetter(this,  'cancelButton', () => {
        return this._cancelButton;
      });
      defineSetter(this,  'cancelButton', value => {
        this._cancelButton = value;
      });

      defineGetter(this,  'rcsSwiftResponseIdentifier', () => {
        return this._rcsSwiftResponseIdentifier;
      });
      defineSetter(this,  'rcsSwiftResponseIdentifier', value => {
        this._rcsSwiftResponseIdentifier = value;
      });

      defineGetter(this,  'ccsCountryListMasterData', () => {
        return this._ccsCountryListMasterData;
      });
      defineSetter(this,  'ccsCountryListMasterData', value => {
        this._ccsCountryListMasterData = value;
      });

      defineGetter(this,  'adsTextBox2Value', () => {
        return this._adsTextBox2Value;
      });
      defineSetter(this,  'adsTextBox2Value', value => {
        this._adsTextBox2Value = value;
      });

      defineGetter(this,  'easCTAButton1', () => {
        return this._easCTAButton1;
      });
      defineSetter(this,  'easCTAButton1', value => {
        this._easCTAButton1 = value;
      });

      defineGetter(this,  'phnoTxtbox2Label', () => {
        return this._phnoTxtbox2Label;
      });
      defineSetter(this,  'phnoTxtbox2Label', value => {
        this._phnoTxtbox2Label = value;
      });

      defineGetter(this,  'sbssSectionHeader', () => {
        return this._sbssSectionHeader;
      });
      defineSetter(this,  'sbssSectionHeader', value => {
        this._sbssSectionHeader = value;
      });

      defineGetter(this,  'ccssSegLabelSkin', () => {
        return this._ccssSegLabelSkin;
      });
      defineSetter(this,  'ccssSegLabelSkin', value => {
        this._ccssSegLabelSkin = value;
      });

      defineGetter(this,  'rcsAcceptBICSwift', () => {
        return this._rcsAcceptBICSwift;
      });
      defineSetter(this,  'rcsAcceptBICSwift', value => {
        this._rcsAcceptBICSwift = value;
      });

      defineGetter(this,  'gsknSubHeaderLabel', () => {
        return this._gsknSubHeaderLabel;
      });
      defineSetter(this,  'gsknSubHeaderLabel', value => {
        this._gsknSubHeaderLabel = value;
      });

      defineGetter(this,  'accScreen2SubHeader', () => {
        return this._accScreen2SubHeader;
      });
      defineSetter(this,  'accScreen2SubHeader', value => {
        this._accScreen2SubHeader = value;
      });

      defineGetter(this,  'ccsCountryListSource', () => {
        return this._ccsCountryListSource;
      });
      defineSetter(this,  'ccsCountryListSource', value => {
        this._ccsCountryListSource = value;
      });

      defineGetter(this,  'adsTextBox3Label', () => {
        return this._adsTextBox3Label;
      });
      defineSetter(this,  'adsTextBox3Label', value => {
        this._adsTextBox3Label = value;
      });

      defineGetter(this,  'easOROption', () => {
        return this._easOROption;
      });
      defineSetter(this,  'easOROption', value => {
        this._easOROption = value;
      });

      defineGetter(this,  'phnoTxtbox2', () => {
        return this._phnoTxtbox2;
      });
      defineSetter(this,  'phnoTxtbox2', value => {
        this._phnoTxtbox2 = value;
      });

      defineGetter(this,  'sbssSubHeaderTitle1', () => {
        return this._sbssSubHeaderTitle1;
      });
      defineSetter(this,  'sbssSubHeaderTitle1', value => {
        this._sbssSubHeaderTitle1 = value;
      });

      defineGetter(this,  'rcsAcceptClearcode', () => {
        return this._rcsAcceptClearcode;
      });
      defineSetter(this,  'rcsAcceptClearcode', value => {
        this._rcsAcceptClearcode = value;
      });

      defineGetter(this,  'gsknSubHeaderseparator', () => {
        return this._gsknSubHeaderseparator;
      });
      defineSetter(this,  'gsknSubHeaderseparator', value => {
        this._gsknSubHeaderseparator = value;
      });

      defineGetter(this,  'accTxtInput', () => {
        return this._accTxtInput;
      });
      defineSetter(this,  'accTxtInput', value => {
        this._accTxtInput = value;
      });

      defineGetter(this,  'ccsSectionHeader', () => {
        return this._ccsSectionHeader;
      });
      defineSetter(this,  'ccsSectionHeader', value => {
        this._ccsSectionHeader = value;
      });

      defineGetter(this,  'adsTextBox3Value', () => {
        return this._adsTextBox3Value;
      });
      defineSetter(this,  'adsTextBox3Value', value => {
        this._adsTextBox3Value = value;
      });

      defineGetter(this,  'rcsHdr', () => {
        return this._rcsHdr;
      });
      defineSetter(this,  'rcsHdr', value => {
        this._rcsHdr = value;
      });

      defineGetter(this,  'accReTxtInput', () => {
        return this._accReTxtInput;
      });
      defineSetter(this,  'accReTxtInput', value => {
        this._accReTxtInput = value;
      });

      defineGetter(this,  'ccsSearchbox', () => {
        return this._ccsSearchbox;
      });
      defineSetter(this,  'ccsSearchbox', value => {
        this._ccsSearchbox = value;
      });

      defineGetter(this,  'adsTextBox4Label', () => {
        return this._adsTextBox4Label;
      });
      defineSetter(this,  'adsTextBox4Label', value => {
        this._adsTextBox4Label = value;
      });

      defineGetter(this,  'phnoOROption', () => {
        return this._phnoOROption;
      });
      defineSetter(this,  'phnoOROption', value => {
        this._phnoOROption = value;
      });

      defineGetter(this,  'phnoCTABtn1', () => {
        return this._phnoCTABtn1;
      });
      defineSetter(this,  'phnoCTABtn1', value => {
        this._phnoCTABtn1 = value;
      });

      defineGetter(this,  'adsTextBox4Value', () => {
        return this._adsTextBox4Value;
      });
      defineSetter(this,  'adsTextBox4Value', value => {
        this._adsTextBox4Value = value;
      });

      defineGetter(this,  'rcsSubhdr', () => {
        return this._rcsSubhdr;
      });
      defineSetter(this,  'rcsSubhdr', value => {
        this._rcsSubhdr = value;
      });

      defineGetter(this,  'accCTAButton1', () => {
        return this._accCTAButton1;
      });
      defineSetter(this,  'accCTAButton1', value => {
        this._accCTAButton1 = value;
      });

      defineGetter(this,  'vfsObjectService', () => {
        return this._vfsObjectService;
      });
      defineSetter(this,  'vfsObjectService', value => {
        this._vfsObjectService = value;
      });

      defineGetter(this,  'sbssTextbox1Label', () => {
        return this._sbssTextbox1Label;
      });
      defineSetter(this,  'sbssTextbox1Label', value => {
        this._sbssTextbox1Label = value;
      });

      defineGetter(this,  'rcsTextbox1Label', () => {
        return this._rcsTextbox1Label;
      });
      defineSetter(this,  'rcsTextbox1Label', value => {
        this._rcsTextbox1Label = value;
      });

      defineGetter(this,  'accCTAButton2', () => {
        return this._accCTAButton2;
      });
      defineSetter(this,  'accCTAButton2', value => {
        this._accCTAButton2 = value;
      });

      defineGetter(this,  'vfsOperation', () => {
        return this._vfsOperation;
      });
      defineSetter(this,  'vfsOperation', value => {
        this._vfsOperation = value;
      });

      defineGetter(this,  'adsTextBox5Label', () => {
        return this._adsTextBox5Label;
      });
      defineSetter(this,  'adsTextBox5Label', value => {
        this._adsTextBox5Label = value;
      });

      defineGetter(this,  'phnoCTABtn2', () => {
        return this._phnoCTABtn2;
      });
      defineSetter(this,  'phnoCTABtn2', value => {
        this._phnoCTABtn2 = value;
      });

      defineGetter(this,  'phnoCTABtn3', () => {
        return this._phnoCTABtn3;
      });
      defineSetter(this,  'phnoCTABtn3', value => {
        this._phnoCTABtn3 = value;
      });

      defineGetter(this,  'adsTextBox5Value', () => {
        return this._adsTextBox5Value;
      });
      defineSetter(this,  'adsTextBox5Value', value => {
        this._adsTextBox5Value = value;
      });

      defineGetter(this,  'sbssTextbox1', () => {
        return this._sbssTextbox1;
      });
      defineSetter(this,  'sbssTextbox1', value => {
        this._sbssTextbox1 = value;
      });

      defineGetter(this,  'rcsTextbox1', () => {
        return this._rcsTextbox1;
      });
      defineSetter(this,  'rcsTextbox1', value => {
        this._rcsTextbox1 = value;
      });

      defineGetter(this,  'accErrorMessage', () => {
        return this._accErrorMessage;
      });
      defineSetter(this,  'accErrorMessage', value => {
        this._accErrorMessage = value;
      });

      defineGetter(this,  'vfsCriteria', () => {
        return this._vfsCriteria;
      });
      defineSetter(this,  'vfsCriteria', value => {
        this._vfsCriteria = value;
      });

      defineGetter(this,  'sbssTextbox2Label', () => {
        return this._sbssTextbox2Label;
      });
      defineSetter(this,  'sbssTextbox2Label', value => {
        this._sbssTextbox2Label = value;
      });

      defineGetter(this,  'vfsSectionTitle', () => {
        return this._vfsSectionTitle;
      });
      defineSetter(this,  'vfsSectionTitle', value => {
        this._vfsSectionTitle = value;
      });

      defineGetter(this,  'rcsTextbox2Label', () => {
        return this._rcsTextbox2Label;
      });
      defineSetter(this,  'rcsTextbox2Label', value => {
        this._rcsTextbox2Label = value;
      });
      defineGetter(this,  'rcsOROption', () => {
        return this._rcsOROption;
      });
      defineSetter(this,  'rcsOROption', value => {
        this._rcsOROption = value;
      });

      defineGetter(this,  'accReEnterErrorMessage', () => {
        return this._accReEnterErrorMessage;
      });
      defineSetter(this,  'accReEnterErrorMessage', value => {
        this._accReEnterErrorMessage = value;
      });

      defineGetter(this,  'adsTextBox6Label', () => {
        return this._adsTextBox6Label;
      });
      defineSetter(this,  'adsTextBox6Label', value => {
        this._adsTextBox6Label = value;
      });

      defineGetter(this,  'adsTextBox6Value', () => {
        return this._adsTextBox6Value;
      });
      defineSetter(this,  'adsTextBox6Value', value => {
        this._adsTextBox6Value = value;
      });

      defineGetter(this,  'sbssTextbox2', () => {
        return this._sbssTextbox2;
      });
      defineSetter(this,  'sbssTextbox2', value => {
        this._sbssTextbox2 = value;
      });

      defineGetter(this,  'rcsTextbox2', () => {
        return this._rcsTextbox2;
      });
      defineSetter(this,  'rcsTextbox2', value => {
        this._rcsTextbox2 = value;
      });

      defineGetter(this,  'accExistMsg', () => {
        return this._accExistMsg;
      });
      defineSetter(this,  'accExistMsg', value => {
        this._accExistMsg = value;
      });

      defineGetter(this,  'vfsIconEdit', () => {
        return this._vfsIconEdit;
      });
      defineSetter(this,  'vfsIconEdit', value => {
        this._vfsIconEdit = value;
      });

      defineGetter(this,  'sbssTextbox3Label', () => {
        return this._sbssTextbox3Label;
      });
      defineSetter(this,  'sbssTextbox3Label', value => {
        this._sbssTextbox3Label = value;
      });

      defineGetter(this,  'vfsField1Lbl', () => {
        return this._vfsField1Lbl;
      });
      defineSetter(this,  'vfsField1Lbl', value => {
        this._vfsField1Lbl = value;
      });

      defineGetter(this,  'rcsTextbox3Label', () => {
        return this._rcsTextbox3Label;
      });
      defineSetter(this,  'rcsTextbox3Label', value => {
        this._rcsTextbox3Label = value;
      });

      defineGetter(this,  'accInvalidMsg', () => {
        return this._accInvalidMsg;
      });
      defineSetter(this,  'accInvalidMsg', value => {
        this._accInvalidMsg = value;
      });

      defineGetter(this,  'adsErrorMessage', () => {
        return this._adsErrorMessage;
      });
      defineSetter(this,  'adsErrorMessage', value => {
        this._adsErrorMessage = value;
      });

      defineGetter(this,  'adsCTAButton', () => {
        return this._adsCTAButton;
      });
      defineSetter(this,  'adsCTAButton', value => {
        this._adsCTAButton = value;
      });

      defineGetter(this,  'sbssTextbox3', () => {
        return this._sbssTextbox3;
      });
      defineSetter(this,  'sbssTextbox3', value => {
        this._sbssTextbox3 = value;
      });

      defineGetter(this,  'vfsField1Value', () => {
        return this._vfsField1Value;
      });
      defineSetter(this,  'vfsField1Value', value => {
        this._vfsField1Value = value;
      });

      defineGetter(this,  'rcsTextbox3', () => {
        return this._rcsTextbox3;
      });
      defineSetter(this,  'rcsTextbox3', value => {
        this._rcsTextbox3 = value;
      });

      defineGetter(this,  'accKeypadClearIcon', () => {
        return this._accKeypadClearIcon;
      });
      defineSetter(this,  'accKeypadClearIcon', value => {
        this._accKeypadClearIcon = value;
      });

      defineGetter(this,  'sbssTextbox4Label', () => {
        return this._sbssTextbox4Label;
      });
      defineSetter(this,  'sbssTextbox4Label', value => {
        this._sbssTextbox4Label = value;
      });

      defineGetter(this,  'vfsField2Lbl', () => {
        return this._vfsField2Lbl;
      });
      defineSetter(this,  'vfsField2Lbl', value => {
        this._vfsField2Lbl = value;
      });

      defineGetter(this,  'gsknPrimaryContexualBtn', () => {
        return this._gsknPrimaryContexualBtn;
      });
      defineSetter(this,  'gsknPrimaryContexualBtn', value => {
        this._gsknPrimaryContexualBtn = value;
      });

      defineGetter(this,  'gsknSecondaryContexualBtn', () => {
        return this._gsknSecondaryContexualBtn;
      });
      defineSetter(this,  'gsknSecondaryContexualBtn', value => {
        this._gsknSecondaryContexualBtn = value;
      });


      defineGetter(this,  'sbssTextbox4', () => {
        return this._sbssTextbox4;
      });
      defineSetter(this,  'sbssTextbox4', value => {
        this._sbssTextbox4 = value;
      });

      defineGetter(this,  'vfsField2Value', () => {
        return this._vfsField2Value;
      });
      defineSetter(this,  'vfsField2Value', value => {
        this._vfsField2Value = value;
      });

      defineGetter(this,  'sbssCTA1', () => {
        return this._sbssCTA1;
      });
      defineSetter(this,  'sbssCTA1', value => {
        this._sbssCTA1 = value;
      });

      defineGetter(this,  'rcsCTAButton1', () => {
        return this._rcsCTAButton1;
      });
      defineSetter(this,  'rcsCTAButton1', value => {
        this._rcsCTAButton1 = value;
      });

      defineGetter(this,  'vfsField3Lbl', () => {
        return this._vfsField3Lbl;
      });
      defineSetter(this,  'vfsField3Lbl', value => {
        this._vfsField3Lbl = value;
      });

      defineGetter(this,  'gsknDisabledContexualBtn', () => {
        return this._gsknDisabledContexualBtn;
      });
      defineSetter(this,  'gsknDisabledContexualBtn', value => {
        this._gsknDisabledContexualBtn = value;
      });

      defineGetter(this,  'resultScreenSubHeader', () => {
        return this._resultScreenSubHeader;
      });
      defineSetter(this,  'resultScreenSubHeader', value => {
        this._resultScreenSubHeader = value;
      });

      defineGetter(this,  'rcsCTAButton2', () => {
        return this._rcsCTAButton2;
      });
      defineSetter(this,  'rcsCTAButton2', value => {
        this._rcsCTAButton2 = value;
      });

      defineGetter(this,  'sbssResponseObj', () => {
        return this._sbssResponseObj;
      });
      defineSetter(this,  'sbssResponseObj', value => {
        this._sbssResponseObj = value;
      });

      defineGetter(this,  'vfsField3Value', () => {
        return this._vfsField3Value;
      });
      defineSetter(this,  'vfsField3Value', value => {
        this._vfsField3Value = value;
      });

      defineGetter(this,  'resultItemLabel1', () => {
        return this._resultItemLabel1;
      });
      defineSetter(this,  'resultItemLabel1', value => {
        this._resultItemLabel1 = value;
      });

      defineGetter(this,  'vfsField4Lbl', () => {
        return this._vfsField4Lbl;
      });
      defineSetter(this,  'vfsField4Lbl', value => {
        this._vfsField4Lbl = value;
      });

      defineGetter(this,  'resultItemLabel2', () => {
        return this._resultItemLabel2;
      });
      defineSetter(this,  'resultItemLabel2', value => {
        this._resultItemLabel2 = value;
      });

      defineGetter(this,  'vfsField4Value', () => {
        return this._vfsField4Value;
      });
      defineSetter(this,  'vfsField4Value', value => {
        this._vfsField4Value = value;
      });

      defineGetter(this,  'resultItemLabel3', () => {
        return this._resultItemLabel3;
      });
      defineSetter(this,  'resultItemLabel3', value => {
        this._resultItemLabel3 = value;
      });

      defineGetter(this,  'vfsField5Lbl', () => {
        return this._vfsField5Lbl;
      });
      defineSetter(this,  'vfsField5Lbl', value => {
        this._vfsField5Lbl = value;
      });

      defineGetter(this,  'sbssSelectedTickImg', () => {
        return this._sbssSelectedTickImg;
      });
      defineSetter(this,  'sbssSelectedTickImg', value => {
        this._sbssSelectedTickImg = value;
      });

      defineGetter(this,  'verifyField5Value', () => {
        return this._verifyField5Value;
      });
      defineSetter(this,  'verifyField5Value', value => {
        this._verifyField5Value = value;
      });

      defineGetter(this,  'gsknTextBoxNormal', () => {
        return this._gsknTextBoxNormal;
      });
      defineSetter(this,  'gsknTextBoxNormal', value => {
        this._gsknTextBoxNormal = value;
      });

      defineGetter(this,  'sbssCTA2', () => {
        return this._sbssCTA2;
      });
      defineSetter(this,  'sbssCTA2', value => {
        this._sbssCTA2 = value;
      });

      defineGetter(this,  'vfsField6Lbl', () => {
        return this._vfsField6Lbl;
      });
      defineSetter(this,  'vfsField6Lbl', value => {
        this._vfsField6Lbl = value;
      });

      defineGetter(this,  'sbssCTA3', () => {
        return this._sbssCTA3;
      });
      defineSetter(this,  'sbssCTA3', value => {
        this._sbssCTA3 = value;
      });

      defineGetter(this,  'vfsField6Value', () => {
        return this._vfsField6Value;
      });
      defineSetter(this,  'vfsField6Value', value => {
        this._vfsField6Value = value;
      });

      defineGetter(this,  'gsknTextBoxFocus', () => {
        return this._gsknTextBoxFocus;
      });
      defineSetter(this,  'gsknTextBoxFocus', value => {
        this._gsknTextBoxFocus = value;
      });

      defineGetter(this,  'vfsField7Lbl', () => {
        return this._vfsField7Lbl;
      });
      defineSetter(this,  'vfsField7Lbl', value => {
        this._vfsField7Lbl = value;
      });

      defineGetter(this,  'gsknTextBoxError', () => {
        return this._gsknTextBoxError;
      });
      defineSetter(this,  'gsknTextBoxError', value => {
        this._gsknTextBoxError = value;
      });

      defineGetter(this,  'vfsField7Value', () => {
        return this._vfsField7Value;
      });
      defineSetter(this,  'vfsField7Value', value => {
        this._vfsField7Value = value;
      });

      defineGetter(this,  'vfsField8Lbl', () => {
        return this._vfsField8Lbl;
      });
      defineSetter(this,  'vfsField8Lbl', value => {
        this._vfsField8Lbl = value;
      });

      defineGetter(this,  'gsknErrorTextMessage', () => {
        return this._gsknErrorTextMessage;
      });
      defineSetter(this,  'gsknErrorTextMessage', value => {
        this._gsknErrorTextMessage = value;
      });

      defineGetter(this,  'vfsField8Value', () => {
        return this._vfsField8Value;
      });
      defineSetter(this,  'vfsField8Value', value => {
        this._vfsField8Value = value;
      });

      defineGetter(this,  'vfsField9Lbl', () => {
        return this._vfsField9Lbl;
      });
      defineSetter(this,  'vfsField9Lbl', value => {
        this._vfsField9Lbl = value;
      });

      defineGetter(this,  'vfsField9Value', () => {
        return this._vfsField9Value;
      });
      defineSetter(this,  'vfsField9Value', value => {
        this._vfsField9Value = value;
      });

      defineGetter(this,  'vfsField10Lbl', () => {
        return this._vfsField10Lbl;
      });
      defineSetter(this,  'vfsField10Lbl', value => {
        this._vfsField10Lbl = value;
      });

      defineGetter(this,  'vfsField10Value', () => {
        return this._vfsField10Value;
      });
      defineSetter(this,  'vfsField10Value', value => {
        this._vfsField10Value = value;
      });

      defineGetter(this,  'vfsField11Lbl', () => {
        return this._vfsField11Lbl;
      });
      defineSetter(this,  'vfsField11Lbl', value => {
        this._vfsField11Lbl = value;
      });

      defineGetter(this,  'gsknInputFieldLabel', () => {
        return this._gsknInputFieldLabel;
      });
      defineSetter(this,  'gsknInputFieldLabel', value => {
        this._gsknInputFieldLabel = value;
      });

      defineGetter(this,  'vfsField11Value', () => {
        return this._vfsField11Value;
      });
      defineSetter(this,  'vfsField11Value', value => {
        this._vfsField11Value = value;
      });

      defineGetter(this,  'vfsField12Lbl', () => {
        return this._vfsField12Lbl;
      });
      defineSetter(this,  'vfsField12Lbl', value => {
        this._vfsField12Lbl = value;
      });

      defineGetter(this,  'vfsField12Value', () => {
        return this._vfsField12Value;
      });
      defineSetter(this,  'vfsField12Value', value => {
        this._vfsField12Value = value;
      });

      defineGetter(this,  'vfsField13Lbl', () => {
        return this._vfsField13Lbl;
      });
      defineSetter(this,  'vfsField13Lbl', value => {
        this._vfsField13Lbl = value;
      });

      defineGetter(this,  'gsknContentFlex', () => {
        return this._gsknContentFlex;
      });
      defineSetter(this,  'gsknContentFlex', value => {
        this._gsknContentFlex = value;
      });

      defineGetter(this,  'vfsField13Value', () => {
        return this._vfsField13Value;
      });
      defineSetter(this,  'vfsField13Value', value => {
        this._vfsField13Value = value;
      });

      defineGetter(this,  'vfsField14Lbl', () => {
        return this._vfsField14Lbl;
      });
      defineSetter(this,  'vfsField14Lbl', value => {
        this._vfsField14Lbl = value;
      });

      defineGetter(this,  'vfsField14Value', () => {
        return this._vfsField14Value;
      });
      defineSetter(this,  'vfsField14Value', value => {
        this._vfsField14Value = value;
      });

      defineGetter(this,  'vfsField15Lbl', () => {
        return this._vfsField15Lbl;
      });
      defineSetter(this,  'vfsField15Lbl', value => {
        this._vfsField15Lbl = value;
      });

      defineGetter(this,  'vfsField15Value', () => {
        return this._vfsField15Value;
      });
      defineSetter(this,  'vfsField15Value', value => {
        this._vfsField15Value = value;
      });

      defineGetter(this,  'vfsPayeeAddLbl', () => {
        return this._vfsPayeeAddLbl;
      });
      defineSetter(this,  'vfsPayeeAddLbl', value => {
        this._vfsPayeeAddLbl = value;
      });

      defineGetter(this,  'vfsField1Address', () => {
        return this._vfsField1Address;
      });
      defineSetter(this,  'vfsField1Address', value => {
        this._vfsField1Address = value;
      });

      defineGetter(this,  'vfsField2Address', () => {
        return this._vfsField2Address;
      });
      defineSetter(this,  'vfsField2Address', value => {
        this._vfsField2Address = value;
      });

      defineGetter(this,  'vfsField3Address', () => {
        return this._vfsField3Address;
      });
      defineSetter(this,  'vfsField3Address', value => {
        this._vfsField3Address = value;
      });

      defineGetter(this,  'vfsField4Address', () => {
        return this._vfsField4Address;
      });
      defineSetter(this,  'vfsField4Address', value => {
        this._vfsField4Address = value;
      });

      defineGetter(this,  'vfsField5Address', () => {
        return this._vfsField5Address;
      });
      defineSetter(this,  'vfsField5Address', value => {
        this._vfsField5Address = value;
      });

      defineGetter(this,  'vfsField6Address', () => {
        return this._vfsField6Address;
      });
      defineSetter(this,  'vfsField6Address', value => {
        this._vfsField6Address = value;
      });

      defineGetter(this,  'vfsCTAButton1', () => {
        return this._vfsCTAButton1;
      });
      defineSetter(this,  'vfsCTAButton1', value => {
        this._vfsCTAButton1 = value;
      });

      defineGetter(this,  'vfsCTAButton2', () => {
        return this._vfsCTAButton2;
      });
      defineSetter(this,  'vfsCTAButton2', value => {
        this._vfsCTAButton2 = value;
      });
      defineGetter(this,  'textBox1Visibility', () => {
        return this._textBox1Visibility;
      });
      defineSetter(this,  'textBox1Visibility', value => {
        this._textBox1Visibility = value;
      });

      defineGetter(this,  'textBox2Visibility', () => {
        return this._textBox2Visibility;
      });
      defineSetter(this,  'textBox2Visibility', value => {
        this._textBox2Visibility = value;
      });

      defineGetter(this,  'textBox3Visibility', () => {
        return this._textBox3Visibility;
      });
      defineSetter(this,  'textBox3Visibility', value => {
        this._textBox3Visibility = value;
      });

      defineGetter(this,  'textBox4Visibility', () => {
        return this._textBox4Visibility;
      });
      defineSetter(this,  'textBox4Visibility', value => {
        this._textBox4Visibility = value;
      });

      defineGetter(this,  'textBox5Visibility', () => {
        return this._textBox5Visibility;
      });
      defineSetter(this,  'textBox5Visibility', value => {
        this._textBox5Visibility = value;
      });

      defineGetter(this,  'textBox6Visibility', () => {
        return this._textBox6Visibility;
      });
      defineSetter(this,  'textBox6Visibility', value => {
        this._textBox6Visibility = value;
      });

      defineGetter(this,  'adsTextBox1Value', () => {
        return this._adsTextBox1Value;
      });
      defineSetter(this,  'adsTextBox1Value', value => {
        this._adsTextBox1Value = value;
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
        scope.inputPool = {}; 
        scope.mandatoryInputs = 0;
        scope.mandatoryInputsValue = 0;
        scope.payeeNameTextChange=false;
        scope.setFlexVisibilty();
        scope.newPayee = false;
        scope.payeeFlow = ""; 
        scope.inputPool["flowType"] = "AddPayeeFlow";
        if(Object.keys(scope.context).length === 0)
        {
          scope.setPayeeName("ADD");    
          scope.view.LinkPayeeCustomer.onLinkPayeeContinue=scope.onLinkPayeeContinue;
          if(scope._beneficiaryTypes==="SameBank" && scope._pynsVisibility===false)
          {
            scope.setAccountNumber("ADD");
            scope.navigateTo("flxAccountNumber", "flxAccountNumberTop", scope.getFieldValue(scope._accSectionHeader));          
          }
          else{       
            scope.setPayeeName("ADD");
            scope.navigateTo("flxPayeeName", "flxPayeeNameTop", scope.getFieldValue(scope._pynsSectionHeader));                      
          }     
        }
        else
        {
          
          scope.inputPool = Object.assign(scope.inputPool,scope.context);
          scope.inputPool["flowType"] = "SavePayeeFlow";
          scope.setVerifyDetails();
          scope.navigateTo("flxVerifyDetails", "flxVfsHeaderTop", scope.getFieldValue(scope._vfsSectionTitle));
        }

      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in preshow method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        this.onError(errObj);
      }
    },    
    /**
     * Component Temp method
     * To set navigation for all the UI screens without functionality
     **/
    tempScrnNavigation: function(){
      var scope = this;
      scope.view.imgPayeesNameBack.onTouchEnd = scope.goBack;
      scope.view.btnPayeeNameCancel.onClick = scope.navigateTo.bind(this,"flxAccountNumber");
      scope.view.imgAccountNumberBack.onTouchEnd = scope.goBack;
      scope.view.btnAccountNumberCancel.onClick = scope.navigateTo.bind(this,"flxReEnterAccountNumber");
      scope.view.imgReEnterAccountNumberBack.onTouchEnd = scope.goBack;
      scope.view.btnReEnterAccountNumberCancel.onClick = scope.navigateTo.bind(this,"flxRequiredCode");
      scope.view.imgRequireCodeBack.onTouchEnd = scope.goBack;
      scope.view.btnRequireCodeCancel.onClick = scope.navigateTo.bind(this,"flxSwiftBICSearch");
      scope.view.imgSwiftBICSearchBack.onTouchEnd = scope.goBack;
      scope.view.btnGetDetails.onClick = scope.navigateTo.bind(this,"flxSwiftBICSearchList");
      scope.view.imgSwiftBICSearchListBack.onTouchEnd = scope.goBack;
      scope.view.btnUseSwift.onClick = scope.navigateTo.bind(this,"flxVerifyDetails");
      scope.view.imgVfsBack.onTouchEnd = scope.goBack;
      scope.view.btnVfsCancel.onClick = scope.navigateTo.bind(this,"flxPayeeNickname");
      scope.view.imgNicknameBack.onTouchEnd = scope.goBack;
      scope.view.btnNicknameContinue.onClick = scope.navigateTo.bind(this,"flxEmailAddress");
      scope.view.imgEmailAddressBack.onTouchEnd = scope.goBack;
      scope.view.btnEmailAddressContinue.onClick = scope.navigateTo.bind(this,"flxPhoneNumber");
      scope.view.flxPhoneNumberBack.onTouchEnd = scope.goBack;
      scope.view.btnPhonerNumberContinue.onClick = scope.navigateTo.bind(this,"flxCountryCode");
      scope.view.imgCountryCodeBack.onTouchEnd = scope.goBack;
      scope.view.btnCountryCodeCancel.onClick = scope.navigateTo.bind(this,"flxAddAddress");
      scope.view.imgAddAddressBack.onTouchEnd = scope.goBack;
      scope.view.btnSave.onClick = scope.navigateTo.bind(this,"flxLinkPayee");
      scope.view.imgLinkPayeeBack.onTouchEnd = scope.goBack;
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
     * @Component : enableButton
     * To set skin and enable specific button.
     * @return : NA
     */
    enableButton: function(btnName) {
      try {
        var scope = this;
        scope.view[btnName].setEnabled(true);
        scope.view[btnName].skin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
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
        scope.view[btnName].skin = scope.getFieldValue(scope._gsknDisabledContexualBtn);
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
        if (value["default"]) {
          value = value["default"];
        }  
        if (!this.isEmptyNullUndefined(value) && !this.isEmptyNullUndefined(key)) {
          value = value[key];
        }
        if (value.includes("inputPool")){
          value = value.split(".")[2];
          value=value.slice(0,-1);
          if(!this.isEmptyNullUndefined(this.inputPool[value]))
          {
            return this.inputPool[value];
          }
          else
          {
            return "";
          }
        }
        if (value !== null && value !== "" && value !== undefined) {
          return this.getProcessedText(value);
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
    /*
    * component setAddAddress
    * Contains the default function of Add Address Screen
    */
    setAddAddress(){
      var scope = this;
      scope.setAddAddressDefaultText();
      scope.setAddAddressSkins();
      scope.setAddAddressActions();
      scope.setAddAddressData();
    },
    /*
    * component setAddAddressDefaultText
    * Setting default text for Add Address Screen
    */
    setAddAddressDefaultText: function(){
      var scope = this;
      scope.view.imgAddAddressBack.src = scope.getFieldValue(scope._iconBack);
      scope.view.btnAddAddressCancel.text = scope.getFieldValue(scope._cancelButton);
      scope.view.lblAddAddressHeader.text = scope.getFieldValue(scope._adsSectionHeader);
      scope.view.lblAddAddressSubHeader.text = scope.getFieldValue(scope._adsSubHeader);
      for(var i=1;i<=6;i++){
        scope.view["lblAddressField"+i].text = scope.getFieldValue(eval("scope._adsTextBox"+i+"Label"));
        scope.view["txtAddressFieldValue"+i].placeHolder = scope.getFieldValue(eval("scope._adsTextBox"+i+"Value"), "placeHolder");
      }
      scope.view.txtAddressFieldValue1.maxTextLength = parseInt(scope.getFieldValue(scope._maxFillMapping)[scope._jsonObjName]["txtBoxAddressLine01"]);
      scope.view.txtAddressFieldValue2.maxTextLength = parseInt(scope.getFieldValue(scope._maxFillMapping)[scope._jsonObjName]["txtBoxAddressLine02"]);
      scope.view.txtAddressFieldValue3.maxTextLength = parseInt(scope.getFieldValue(scope._maxFillMapping)[scope._jsonObjName]["txtBoxCountry"]);
      scope.view.txtAddressFieldValue4.maxTextLength = parseInt(scope.getFieldValue(scope._maxFillMapping)[scope._jsonObjName]["txtBoxState"]);
      scope.view.txtAddressFieldValue5.maxTextLength = parseInt(scope.getFieldValue(scope._maxFillMapping)[scope._jsonObjName]["txtBoxCity"]);
      scope.view.txtAddressFieldValue6.maxTextLength = parseInt(scope.getFieldValue(scope._maxFillMapping)[scope._jsonObjName]["txtBoxPostalCode"]);
      scope.view.lblAddAddressErrorMsg.text = scope.getFieldValue(scope._adsErrorMessage);
      scope.view.btnSave.text= scope.getFieldValue(scope._adsCTAButton, "text");
    },
    /*
    * component setAddAddressSkins
    * Setting default skins for Add Address Screen
    */
    setAddAddressSkins: function(){
      var scope = this;
      scope.view.flxAddAddressHeader.skin = scope.getFieldValue(scope._gsknHeaderFlex);
      scope.view.btnAddAddressCancel.skin = scope.getFieldValue(scope._gsknCancelBtn);
      scope.view.lblAddAddressHeader.skin = scope.getFieldValue(scope._gsknHeaderLbl);
      scope.view.lblAddAddressSubHeader.skin = scope.getFieldValue(scope._gsknSubHeaderTitle);
      scope.view.flxAddAddressSeparator.skin = scope.getFieldValue(scope._gsknSubHeaderseparator);
      scope.view.lblAddAddressErrorMsg.skin = scope.getFieldValue(scope._gsknErrorTextMessage);
      for(var i=1;i<=6;i++){																											
        scope.view["txtAddressFieldValue"+i].skin = scope.getFieldValue(scope._gsknTextBoxNormal);
        scope.view["txtAddressFieldValue"+i].focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus);
      }
      scope.view.btnSave.skin = scope.getFieldValue(scope._gsknDisabledContexualBtn);
    },
    /*
    * component setAddAddressActions
    * Setting default actions for Add Address Screen
    */
    setAddAddressActions: function(){
      var scope = this;
      scope.view.btnSave.onClick = scope.addAddressInputValidation;
      scope.view.flxAddAddressBack.onTouchEnd = scope.goBack;
      scope.view.btnAddAddressCancel.onClick = scope.onBackButtonClick;
      scope.view.txtAddressFieldValue1.onTextChange = scope.onAddAddressTextChange;
      scope.view.txtAddressFieldValue2.onTextChange = scope.onAddAddressTextChange;
      scope.view.txtAddressFieldValue3.onTextChange = scope.onAddAddressTextChange;
      scope.view.txtAddressFieldValue4.onTextChange = scope.onAddAddressTextChange;
      scope.view.txtAddressFieldValue5.onTextChange = scope.onAddAddressTextChange;
      scope.view.txtAddressFieldValue6.onTextChange = scope.onAddAddressTextChange;

      scope.view.txtAddressFieldValue1.onEndEditing = scope.onAddAddressEndEditing.bind(this, "txtBoxAddressLine01");
      scope.view.txtAddressFieldValue2.onEndEditing = scope.onAddAddressEndEditing.bind(this, "txtBoxAddressLine02");
      scope.view.txtAddressFieldValue3.onEndEditing = scope.onAddAddressEndEditing.bind(this, "txtBoxCountry");
      scope.view.txtAddressFieldValue4.onEndEditing = scope.onAddAddressEndEditing.bind(this, "txtBoxState");
      scope.view.txtAddressFieldValue5.onEndEditing = scope.onAddAddressEndEditing.bind(this, "txtBoxCity");
      scope.view.txtAddressFieldValue6.onEndEditing = scope.onAddAddressEndEditing.bind(this, "txtBoxPostalCode");
    },   
    /*
    * onAddAddressTextChange
    * sets onTextChange actions
    */
    onAddAddressTextChange: function(){
      try{
        var scope = this;			   											 											 
        for(var i=1;i<=6;i++){        
          scope.view["txtAddressFieldValue"+i].skin = scope.getFieldValue(scope._gsknTextBoxNormal);
          scope.view["txtAddressFieldValue"+i].focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus);
        }
        scope.view.lblAddAddressErrorMsg.setVisibility(false);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onAddAddressTextChange method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /*
    * onAddAddressEndEditing
    * logic for onEndEditing in address screen
    */
    onAddAddressEndEditing: function(textBoxName){
      try{
        var scope = this;
        var errorText = "";
        var addAddress={
          "txtBoxAddressLine01":  scope.view.txtAddressFieldValue1.text,
          "txtBoxAddressLine02":  scope.view.txtAddressFieldValue2.text,
          "txtBoxCountry":  scope.view.txtAddressFieldValue3.text,
          "txtBoxState":  scope.view.txtAddressFieldValue4.text,
          "txtBoxCity":  scope.view.txtAddressFieldValue5.text,
          "txtBoxPostalCode":  scope.view.txtAddressFieldValue6.text
        };       
        var minlength = scope.minFillValidate(addAddress);
        var maxlength = scope.maxFillValidate(addAddress);
        if(Object.keys(minlength).length === 0 && minlength.constructor === Object && Object.keys(maxlength).length === 0 && maxlength.constructor === Object){
          scope.enableButton("btnSave");           
        } else{
          scope.disableButton("btnSave");
          var fieldText = addAddress[textBoxName];
          var minimumLength = minlength[textBoxName];
          if(!scope.isEmptyNullUndefined(minimumLength)) {
            minimumLength = minimumLength.slice(minimumLength.lastIndexOf(' '));
          }
          var maximumLength = maxlength[textBoxName];
          if(!scope.isEmptyNullUndefined(maximumLength)) {
            maximumLength = maximumLength.slice(maximumLength.lastIndexOf(' '));
          }
          if((scope.isEmptyNullUndefined(maximumLength)) && (!scope.isEmptyNullUndefined(minimumLength)) && (!scope.isEmptyNullUndefined(fieldText))) {
            errorText = "minimum "+minimumLength;
          }
          else if((scope.isEmptyNullUndefined(minimumLength)) && (!scope.isEmptyNullUndefined(maximumLength))&& (!scope.isEmptyNullUndefined(fieldText))) {
            errorText = "maximum "+maximumLength;
          }
          else{
            errorText = "";
          }
          if(!scope.isEmptyNullUndefined(errorText)){
            if(!scope.isEmptyNullUndefined(textBoxName)){
              switch(textBoxName){
                case "txtBoxAddressLine01":
                  scope.view.lblAddAddressErrorMsg.setVisibility(true);
                  scope.view.txtAddressFieldValue1.skin = scope._gsknTextBoxError;
                  scope.view.txtAddressFieldValue1.focusSkin = scope._gsknTextBoxError;
                  scope.view.lblAddAddressErrorMsg.text = "Length of AddressLine1 should be "+errorText;
                  break;
                case "txtBoxAddressLine02":
                  scope.view.lblAddAddressErrorMsg.setVisibility(true);
                  scope.view.txtAddressFieldValue2.skin = scope._gsknTextBoxError;
                  scope.view.txtAddressFieldValue2.focusSkin = scope._gsknTextBoxError;
                  scope.view.lblAddAddressErrorMsg.text = "Length of AddressLine2 should be "+errorText;
                  break;
                case "txtBoxCountry":
                  scope.view.lblAddAddressErrorMsg.setVisibility(true);
                  scope.view.txtAddressFieldValue3.skin = scope._gsknTextBoxError;
                  scope.view.txtAddressFieldValue3.focusSkin = scope._gsknTextBoxError;
                  scope.view.lblAddAddressErrorMsg.text = "Length of Country should be "+errorText;
                  break;
                case "txtBoxState":
                  scope.view.lblAddAddressErrorMsg.setVisibility(true);
                  scope.view.txtAddressFieldValue4.skin = scope._gsknTextBoxError;
                  scope.view.txtAddressFieldValue4.focusSkin = scope._gsknTextBoxError;
                  scope.view.lblAddAddressErrorMsg.text = "Length of State should be "+errorText;
                  break;
                case "txtBoxCity":
                  scope.view.lblAddAddressErrorMsg.setVisibility(true);
                  scope.view.txtAddressFieldValue5.skin = scope._gsknTextBoxError;
                  scope.view.txtAddressFieldValue5.focusSkin = scope._gsknTextBoxError;
                  scope.view.lblAddAddressErrorMsg.text = "Length of City should be "+errorText;
                  break;
                case "txtBoxPostalCode":
                  scope.view.lblAddAddressErrorMsg.setVisibility(true);
                  scope.view.txtAddressFieldValue6.skin = scope._gsknTextBoxError;
                  scope.view.txtAddressFieldValue6.focusSkin = scope._gsknTextBoxError;
                  scope.view.lblAddAddressErrorMsg.text = "Length of PostalCode should be "+errorText;
                  break;
              }
            }
          }
        }
        for(var i=1; i<=6; i++){
          var isTextBoxEmpty = scope.view["txtAddressFieldValue"+i].text;
          if((scope.isEmptyNullUndefined(isTextBoxEmpty)) && (scope.isEmptyNullUndefined(errorText))){
            scope.view["txtAddressFieldValue"+i].skin = scope.getFieldValue(scope._gsknTextBoxNormal);
            scope.view["txtAddressFieldValue"+i].focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus);
            scope.view.lblAddAddressErrorMsg.setVisibility(false);						   						   
          }else{
            scope.view.lblAddAddressErrorMsg.setVisibility(true);
            break;
          }
        }
        if(scope.isEmptyNullUndefined(errorText)){
          scope.view.lblAddAddressErrorMsg.setVisibility(false); 
        }
        scope.view.flxAddfAddress.forceLayout();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onAddAddressTextChange method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**
     * Component setAddAddressData
     * To set data for textboxes
     */
    setAddAddressData: function(){
      var scope = this;
      for(var i=1; i<=6; i++){
        var texboxVisibility = eval("scope._textBox"+i+"Visibility");
        if(texboxVisibility === false){
          eval("scope.view.lblAddressField"+i).setVisibility(false);
          eval("scope.view.flxAddressFieldValue"+i).setVisibility(false);
        }
      }
      for(var i=1;i<=6;i++){
        scope.view["txtAddressFieldValue"+i].text = scope.getFieldValue(eval("scope._adsTextBox"+i+"Value"), "value");
      }
      var addAddress={
        "txtBoxAddressLine01":  scope.view.txtAddressFieldValue1.text,
        "txtBoxAddressLine02":  scope.view.txtAddressFieldValue2.text,
        "txtBoxCountry":  scope.view.txtAddressFieldValue3.text,
        "txtBoxState":  scope.view.txtAddressFieldValue4.text,
        "txtBoxCity":  scope.view.txtAddressFieldValue5.text,
        "txtBoxPostalCode":  scope.view.txtAddressFieldValue6.text
      };         
      /*for(var i=1;i<=6;i++){
          scope.view["txtAddressFieldValue"+i].text = scope.getFieldValue(eval("scope._adsTextBox"+i+"Value"), "value");
        }*/ 
      var minlength = scope.minFillValidate(addAddress);
      var maxlength = scope.maxFillValidate(addAddress); 
      if(Object.keys(minlength).length === 0 && minlength.constructor === Object && Object.keys(maxlength).length === 0 && maxlength.constructor === Object){
        scope.enableButton("btnSave");            
      } else{
        scope.disableButton("btnSave");
      }
      scope.view.flxAddAddressWrapper.forceLayout();
    },
    /**
     * Component addAddressInputValidation
     * To validate the inputs and show error then continue to next screen if all the inputs are valid
     */
    addAddressInputValidation: function(){
      var scope = this;
      var dataJSON = {
        "txtBoxAddressLine01":  scope.view.txtAddressFieldValue1.text,
        "txtBoxAddressLine02":  scope.view.txtAddressFieldValue2.text,
        "txtBoxCountry":  scope.view.txtAddressFieldValue3.text,
        "txtBoxState":  scope.view.txtAddressFieldValue4.text,
        "txtBoxCity":  scope.view.txtAddressFieldValue5.text,
        "txtBoxPostalCode":  scope.view.txtAddressFieldValue6.text
      }; 
      var dataValidator = scope.performDataValidation(dataJSON);
      if(Object.keys(dataValidator).length === 0 && dataValidator.constructor === Object){
        scope.resetAddAddressErrors();    
        scope.onAddAddressContinue();
      }
      else{
        scope.setAddAddressErrors(dataValidator);  
      }
    },
    /**
     * Component resetAddAddressErrors
     * Reponsible to reset textbox skin
     */
    resetAddAddressErrors: function(){
      try{
        var scope = this;
        for(var i=1;i<=6;i++){        
          scope.view["txtAddressFieldValue"+i].skin = scope.getFieldValue(scope._gsknTextBoxNormal);
          scope.view["txtAddressFieldValue"+i].focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus);
        }
        scope.view.lblAddAddressErrorMsg.setVisibility(false);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in resetAddAddressErrors method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * @api : setAddAddressErrors
     * displays errors on validation of the fields in add address screen.
     * @return : NA
     */
    setAddAddressErrors: function(dvfError) {
      this.resetAddAddressErrors();
      for(var iterator in dvfError){
        if("txtBoxAddressLine01" === iterator){
          this.view.txtAddressFieldValue1.skin = this._gsknTextBoxError;
          this.view.txtAddressFieldValue1.focusSkin = this._gsknTextBoxError;
          this.view.lblAddAddressErrorMsg.text = this.getFieldValue(this._adsErrorMessage);
        }
        if("txtBoxAddressLine02" === iterator){
          this.view.txtAddressFieldValue2.skin = this._gsknTextBoxError;
          this.view.txtAddressFieldValue2.focusSkin = this._gsknTextBoxError;
          this.view.lblAddAddressErrorMsg.text = this.getFieldValue(this._adsErrorMessage);
        }
        if("txtBoxCountry" === iterator){
          this.view.txtAddressFieldValue3.skin = this._gsknTextBoxError;
          this.view.txtAddressFieldValue3.focusSkin = this._gsknTextBoxError;
          this.view.lblAddAddressErrorMsg.text = this.getFieldValue(this._adsErrorMessage);
        }                
        if("txtBoxState" === iterator){
          this.view.txtAddressFieldValue4.skin = this._gsknTextBoxError;
          this.view.txtAddressFieldValue4.focusSkin = this._gsknTextBoxError;
          this.view.lblAddAddressErrorMsg.text = this.getFieldValue(this._adsErrorMessage);
        }
        if("txtBoxCity" === iterator){
          this.view.txtAddressFieldValue5.skin = this._gsknTextBoxError;
          this.view.txtAddressFieldValue5.focusSkin = this._gsknTextBoxError;
          this.view.lblAddAddressErrorMsg.text = this.getFieldValue(this._adsErrorMessage);
        }
        if("txtBoxPostalCode" === iterator){
          this.view.txtAddressFieldValue6.skin = this._gsknTextBoxError;
          this.view.txtAddressFieldValue6.focusSkin = this._gsknTextBoxError;
          this.view.lblAddAddressErrorMsg.text = this.getFieldValue(this._adsErrorMessage);
        }
      }         
      this.view.lblAddAddressErrorMsg.setVisibility(true);
    },
    /**
     * Component onAddAddressContinue
     * Navigate to next form based on flow type.
     */
    onAddAddressContinue: function(){
      try {
        var scope = this;    
        for(var i=1; i<=6; i++)
          if(!kony.sdk.isNullOrUndefined((eval("scope.view.txtAddressFieldValue"+i).text)) && eval("scope.view.txtAddressFieldValue"+i).text !== "") {
            scope.inputPool[scope.getFieldValue(eval("scope._adsTextBox"+i+"Value"),"inputPoolKey")] = eval("scope.view.txtAddressFieldValue"+i).text;
          }
        scope.setVerifyDetails();
        scope.navigateTo("flxVerifyDetails", "flxVfsHeaderTop", scope.getFieldValue(scope._vfsSectionTitle));
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onNationalIDContinue method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /*
    * Component Account Number
    * Functions for Account Number
    */
    setAccountNumber: function(flow){
      var scope = this;
      if(flow === "ADD"){
        scope.setAccountNumberDefaultText();
        scope.setAccountNumberSkins();
        scope.setAccountNumberActions();
        scope.setAccountNumberData(flow);
      }else{
        scope.setAccountNumberData(flow); 
      }
    },
    /*
    * component setAccountNumberDefaultText
    * Setting default text for Account Number Screen
    */
    setAccountNumberDefaultText: function(){
      var scope = this;
      scope.view.imgAccountNumberBack.src = scope.getFieldValue(scope._iconBack);
      scope.view.btnAccountNumberCancel.text = scope.getFieldValue(scope._cancelButton);
      scope.view.lblAccountNumberHeader.text = scope.getFieldValue(scope._accSectionHeader);	
      scope.view.lblAccountNumberSubHeader.text = scope.getFieldValue(scope._accScreen1SubHeader);
      scope.view.btnAccountNumberContinue.text = scope.getFieldValue(scope._accCTAButton1, "text");
      scope.view.txtAccountNumberorIBAN.placeholder = scope.getFieldValue(scope._accTxtInput, "placeHolder"); 
      scope.view.txtAccountNumberorIBAN.secureTextEntry = scope.getFieldValue(scope._accTxtInput, "mask");
      scope.view.txtAccountNumberorIBAN.maxTextLength = parseInt(scope.getFieldValue(scope._maxFillMapping)[scope._jsonObjName]["txtBoxNewAccountNumber"]);
      scope.view.imgClearOption.src = scope.getFieldValue(scope._accKeypadClearIcon);
    },
    /*
    * component setAccountNumberSkins
    * Setting default skins for Account Number Screen
    */
    setAccountNumberSkins: function(){
      var scope = this;
      scope.view.flxAccountNumberHeader.skin = scope.getFieldValue(scope._gsknHeaderFlex);
      scope.view.btnAccountNumberCancel.skin = scope.getFieldValue(scope._gsknCancelBtn);
      scope.view.lblAccountNumberHeader.skin = scope.getFieldValue(scope._gsknHeaderLbl);
      scope.view.lblAccountNumberSubHeader.skin = scope.getFieldValue(scope._gsknSubHeaderTitle);
      scope.view.flxAccountNumberSeparator.skin = scope.getFieldValue(scope._gsknSubHeaderseparator);
      scope.view.lblAccountNumberErrorMsg.skin = scope.getFieldValue(scope._gsknErrorTextMessage);
      for(var i=1; i<=12; i++){
        eval("scope.view.lblDigit"+i).skin = scope.getFieldValue(scope._accInputFieldMaskedSkin);
      }
      scope.view.flxAccountNumberInputLine.skin = scope.getFieldValue(scope._accNumericInputBottomSkin);
      scope.view.txtAccountNumberorIBAN.skin = scope.getFieldValue(scope._gsknTextBoxNormal);
      scope.view.txtAccountNumberorIBAN.focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus);            
      scope.view.btnAccountNumberContinue.skin = scope.getFieldValue(scope._gsknDisabledContexualBtn);
    },
    /*
    * component setAccountNumberActions
    * Setting default actions for Account Number Screen
    */
    setAccountNumberActions: function(){
      var scope = this;
      scope.accountNumberKeyboardDataSetting();
      scope.view.btnAccountNumberCancel.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)) ? true : false;  
      scope.view.btnAccountNumberContinue.onClick = scope.accountNumberInputValidation;
      scope.view.flxAccountNumberBack.onTouchEnd = scope.btnAccountNumberBackOnClick;
      scope.view.txtAccountNumberorIBAN.onTextChange = scope.accountNumberorReEnterAccountNumberTextChange;
      scope.view.btnAccountNumberCancel.onClick = scope.onBackButtonClick;     
    },
    /*
    * component setAccountNumberData
    * Data actions for Account Number Screen
    */
    setAccountNumberData: function(flow){
      try{
        var scope = this;
        scope.isAccountNumberEmptyorNot = scope.getFieldValue(scope._accTxtInput, "value"); 
		if(!scope.isEmptyNullUndefined(scope.isAccountNumberEmptyorNot)){
          scope.payeeFlow = "EDIT";
        }else{
          scope.payeeFlow = "ADD";
        }																 	 
        scope.keypadStringAccountNumber = '';
        scope.initialAccountNumber = '';
        scope.flxNameAccountNumberScreen = "flxAccountNumberInput";         
        scope.incompleteCodeView();
        if(scope._beneficiaryTypes === "DomesticBank" || scope._beneficiaryTypes === "InternationalBank") {
          scope.view.flxAccountNumberWrapper.setVisibility(false);
          scope.view.flxAccountNumberInputLine.setVisibility(false);
          scope.view.flxAccountNumberKeyboard.setVisibility(false);
          scope.view.flxAccountNumberorIBANWrapper.setVisibility(true);
          scope.view.txtAccountNumberorIBAN.setFocus(true);
          if(flow === "EDIT") {
            scope.view.txtAccountNumberorIBAN.text = scope.getFieldValue(scope._accTxtInput, "value");
            scope.accountNumberorReEnterAccountNumberTextChange();
          } else {
            scope.view.txtAccountNumberorIBAN.text = "";
          }
        }      
        else if(scope._beneficiaryTypes === "SameBank") {
          if(flow === "EDIT") {          
            var accountNumberEdit = scope.getFieldValue(scope._accTxtInput, "value");
            for(var i=1; i<= 12; i++){
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
            scope.updateInputBulletsAccountNumber(scope.flxNameAccountNumberScreen);
          }else{
            for(var i=1; i<=12;i++){
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
          "errorInfo" : "Error in setAccountNumberData method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**     
	 * Component accountNumberTextChange
     * Enabling continue button based on characters.
    **/
    accountNumberorReEnterAccountNumberTextChange: function() {
      try {
        var scope = this;
        if(scope.flxNameAccountNumberScreen === "flxAccountNumberInput") {
          scope.view.txtAccountNumberorIBAN.skin = scope._gsknTextBoxNormal;
          scope.view.txtAccountNumberorIBAN.focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus); 
          var title = scope.view.txtAccountNumberorIBAN.text;
          var accountNumberEntered={
            "txtBoxNewAccountNumber":scope.view.txtAccountNumberorIBAN.text
          }; 
          var minlength = scope.minFillValidate(accountNumberEntered);
          var maxlength = scope.maxFillValidate(accountNumberEntered); 
          if(Object.keys(minlength).length === 0 && minlength.constructor === Object && Object.keys(maxlength).length === 0 && maxlength.constructor === Object){
            scope.enableButton("btnAccountNumberContinue");            
          } else{
            scope.disableButton("btnAccountNumberContinue");
          } 
          scope.view.lblAccountNumberErrorMsg.setVisibility(false);          
        }
        if(scope.flxNameAccountNumberScreen === "flxReEnterAccountNumberInput") {
          scope.view.txtReEnterAccountNumberorIBAN.skin = scope.getFieldValue(scope._gsknTextBoxNormal);
          scope.view.txtReEnterAccountNumberorIBAN.focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus);
          var title = scope.view.txtReEnterAccountNumberorIBAN.text;
          var accountNumberEntered={
            "txtBoxReenterAccountNumber":scope.view.txtReEnterAccountNumberorIBAN.text
          };           
          var minlength = scope.minFillValidate(accountNumberEntered);
          var maxlength = scope.maxFillValidate(accountNumberEntered); 
          if(Object.keys(minlength).length === 0 && minlength.constructor === Object && Object.keys(maxlength).length === 0 && maxlength.constructor === Object){
            scope.enableButton("btnReEnterAccountNumberContinue");            
          } else{
            scope.disableButton("btnReEnterAccountNumberContinue");
          } 
          scope.view.lblReEnterAccountNumberErrorMsg.setVisibility(false);        
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in accountNumberTextChange method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**   
	* Component accountNumberInputValidation
     * To validate the inputs and show error then continue to next screen if all the inputs are valid
     */
    accountNumberInputValidation:function(){
      var scope = this;
      if(scope._beneficiaryTypes === "DomesticBank" || scope._beneficiaryTypes === "InternationalBank"){
        var dataJSON = {
          "txtBoxNewAccountNumber": scope.view.txtAccountNumberorIBAN.text
        }; 
        var dataValidator = scope.performDataValidation(dataJSON);
        if(Object.keys(dataValidator).length === 0 && dataValidator.constructor === Object){
          scope.resetAccountNumberErrors();    
          scope.onAccountNumberContinue();
        }
        else{
          scope.setAccountNumberErrors(dataValidator);  
        }
      }else{
        scope.onAccountNumberContinue();
      }
    },
    /**
     * Component resetAccountNumberErrors
     * Reponsible to reset textbox skin
     */
    resetAccountNumberErrors: function(){
      try{
        //this.view.txtAccountNumberorIBAN.skin = this._gsknTextBoxNormal;
        //this.view.txtAccountNumberorIBAN.focusSkin = this.getFieldValue(this._gsknTextBoxFocus); 
        this.view.lblAccountNumberErrorMsg.setVisibility(false);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in resetAccountNumberErrors method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * @api : setAccountNumberErrors
     * displays errors on validation of the fields in account number screen.
     * @return : NA
     */
    setAccountNumberErrors: function(dvfError) {
      this.resetAccountNumberErrors();
      for(var iterator in dvfError){
        if("txtBoxNewAccountNumber" == iterator){
          this.view.txtAccountNumberorIBAN.skin = this._gsknTextBoxError;
          this.view.txtAccountNumberorIBAN.focusSkin = this._gsknTextBoxError;
          this.view.lblAccountNumberErrorMsg.text = this.getFieldValue(this._accInvalidMsg);
        }
      }         
      this.view.lblAccountNumberErrorMsg.setVisibility(true);
    },
    /**   
	 * Component onAccountNumberContinue
     * To navigate next page 
     * Validation for input account number
    **/
    onAccountNumberContinue: function() {
      var scope = this;
      try{ 
        scope.view.lblAccountNumberErrorMsg.setVisibility(false);
        if(scope._beneficiaryTypes === "DomesticBank" || scope._beneficiaryTypes === "InternationalBank") {             
          //scope.view.txtAccountNumberorIBAN.skin = scope.getFieldValue(scope._gsknTextBoxNormal);
          //scope.view.txtAccountNumberorIBAN.focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus);
          scope.view.lblAccountNumberErrorMsg.setVisibility(false);
		  scope.setReEnterAccountNumber(scope.payeeFlow);
          scope.navigateTo("flxReEnterAccountNumber", "flxReEnterAccountNumberTop", scope.getFieldValue(scope._accSectionHeader));														   																           											   
        } else {           																											
          if(!kony.sdk.isNullOrUndefined(scope.keypadStringAccountNumber) && scope.keypadStringAccountNumber !== "") {
            scope.inputPool[scope.getFieldValue(scope._accTxtInput,"inputPoolKey")] = scope.keypadStringAccountNumber;																	
          }            																								
          scope.initialAccountNumber = scope.keypadStringAccountNumber;
          scope.view.lblAccountNumberErrorMsg.setVisibility(false);
          scope.setReEnterAccountNumber(scope.payeeFlow);	
          scope.navigateTo("flxReEnterAccountNumber", "flxReEnterAccountNumberTop", scope.getFieldValue(scope._titleAccountNumber));															 																             																												
        }		 
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onAccountNumberContinue method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**  
	 * Component accountNumberKeyboardDataSetting
     * To bind the functions for each keybroad butttons
     */
    accountNumberKeyboardDataSetting:function(){
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
          "errorInfo" : "Error in accountNumberKeyboardDataSetting method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /*
    * Component ReEnter Account Number
    * Functions for ReEnter Account Number
    */
    setReEnterAccountNumber(flow){
      var scope = this;
      if(flow=="ADD"){
        scope.setReEnterAccountNumberDefaultText();
        scope.setReEnterAccountNumberSkins();
        scope.setReEnterAccountNumberActions();
        scope.setReEnterAccountNumberData(flow);
      }else{
        scope.setReEnterAccountNumberData(flow); 
      }
    },
    /*
    * component setReEnterAccountNumberDefaultText
    * Setting default text for ReEnter Account Number Screen
    */
    setReEnterAccountNumberDefaultText: function(){
      var scope = this;
      scope.view.imgReEnterAccountNumberBack.src = scope.getFieldValue(scope._iconBack);
      scope.view.btnReEnterAccountNumberCancel.text = scope.getFieldValue(scope._cancelButton);
      scope.view.lblReEnterAccountNumberHeader.text = scope.getFieldValue(scope._accSectionHeader);	
      scope.view.lblReEnterAccountNumberSubHeader.text = scope.getFieldValue(scope._accScreen2SubHeader);
      scope.view.btnReEnterAccountNumberContinue.text = scope.getFieldValue(scope._accCTAButton2, "text");
      scope.view.txtReEnterAccountNumberorIBAN.placeholder = scope.getFieldValue(scope._accReTxtInput, "placeHolder"); 
      scope.view.txtReEnterAccountNumberorIBAN.secureTextEntry = scope.getFieldValue(scope._accReTxtInput, "mask");
      scope.view.txtReEnterAccountNumberorIBAN.maxTextLength = parseInt(scope.getFieldValue(scope._maxFillMapping)[scope._jsonObjName]["txtBoxReenterAccountNumber"]);
      scope.view.imgClearButton.src = scope.getFieldValue(scope._accKeypadClearIcon);
    },
    /*
    * component setReEnterAccountNumberSkins
    * Setting default skins for ReEnter Account Number Screen
    */
    setReEnterAccountNumberSkins: function(){
      var scope = this;
      scope.view.flxReEnterAccountNumberHeader.skin = scope.getFieldValue(scope._gsknHeaderFlex);
      scope.view.btnReEnterAccountNumberCancel.skin = scope.getFieldValue(scope._gsknCancelBtn);
      scope.view.lblReEnterAccountNumberHeader.skin = scope.getFieldValue(scope._gsknHeaderLbl);
      scope.view.lblReEnterAccountNumberSubHeader.skin = scope.getFieldValue(scope._gsknSubHeaderTitle);
      scope.view.flxReEnterAccountNumberSeparator.skin = scope.getFieldValue(scope._gsknSubHeaderseparator);
      scope.view.lblReEnterAccountNumberErrorMsg.skin = scope.getFieldValue(scope._gsknErrorTextMessage);
      for(var i=1; i<=12; i++){
        eval("scope.view.lblDigit0"+i).skin = scope.getFieldValue(scope._accInputFieldMaskedSkin);
      }
      scope.view.flxReEnterAccountNumberInputLine.skin = scope.getFieldValue(scope._accNumericInputBottomSkin);
      scope.view.txtReEnterAccountNumberorIBAN.skin = scope.getFieldValue(scope._gsknTextBoxNormal);
      scope.view.txtReEnterAccountNumberorIBAN.focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus);            
      scope.view.btnReEnterAccountNumberContinue.skin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
    },
    /*
    * component setAccountNumberActions
    * Setting default actions for Account Number Screen
    */
    setReEnterAccountNumberActions: function(){
      var scope = this;
      scope.reEnterAccountNumberKeyboardDataSetting();
      scope.view.btnReEnterAccountNumberCancel.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)) ? true : false;  
      scope.view.btnReEnterAccountNumberContinue.onClick = scope.reEnterAccountNumberInputValidation;
      scope.view.flxReEnterAccountNumberBack.onTouchEnd = scope.btnReEnterAccountNumberBackOnClick;
      scope.view.txtReEnterAccountNumberorIBAN.onTextChange = scope.accountNumberorReEnterAccountNumberTextChange;
      scope.view.btnReEnterAccountNumberCancel.onClick = scope.onBackButtonClick;																						   
    },
    /**     
	 * Component reEnterAccountNumberKeyboardDataSetting
     * To bind the functions for each keybroad butttons
     */
    reEnterAccountNumberKeyboardDataSetting:function(){
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
          "errorInfo" : "Error in reEnterAccountNumberKeyboardDataSetting method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },   
    /**     
	 * Component setReEnterAccountNumberData
     * Re-entering account number for verification
     * Enabling default parameters
    **/
    setReEnterAccountNumberData: function(flow){
      try {
        var scope = this;        
        scope.keypadStringAccountNumber = '';
        scope.flxNameAccountNumberScreen = "flxReEnterAccountNumberInput";  
        scope.isAccountNumberMasked = scope.getFieldValue(scope._accReTxtInput, "mask");
        scope.incompleteCodeView();
        scope.view.lblReEnterAccountNumberErrorMsg.setVisibility(false);
        if(scope._beneficiaryTypes === "DomesticBank" || scope._beneficiaryTypes === "InternationalBank") {
          scope.view.flxReEnterAccountNumberWrapper.setVisibility(false);
          scope.view.flxReEnterAccountNumberInputLine.setVisibility(false);
          scope.view.flxReEnterAccountNumberKeypad.setVisibility(false);
          scope.view.flxReAccountNumberorIBANWrapper.setVisibility(true);
          scope.view.txtReEnterAccountNumberorIBAN.setFocus(true);
          if(flow === "EDIT") {
            scope.view.txtReEnterAccountNumberorIBAN.text = scope.getFieldValue(scope._accReTxtInput, "value");
            scope.accountNumberorReEnterAccountNumberTextChange();
          } else {
            scope.view.txtReEnterAccountNumberorIBAN.text = "";
          }
        } else if(scope._beneficiaryTypes === "SameBank") {
          if(flow === "EDIT") {   
            var accountNumberEdit = scope.getFieldValue(scope._accReTxtInput, "value");
            for(var i=1; i<=12;i++){
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
            for(var i=1; i<=12;i++){
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
          "errorInfo" : "Error in setReEnterAccountNumberData method of the component.",
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
        if (this.keypadStringAccountNumber.length > 0 && this.keypadStringAccountNumber.length < 13) {         
        } else if (this.keypadStringAccountNumber.length < 1) {
          this.incompleteCodeView();
        } else if (this.keypadStringAccountNumber.length > 12) {
          this.keypadStringAccountNumber = this.keypadStringAccountNumber.slice(0, 12);
          return;
        }
        this.updateInputBulletsAccountNumber(this.flxNameAccountNumberScreen);
        this.enterCodePostAction();
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
          this.updateInputBulletsAccountNumber(this.flxNameAccountNumberScreen);
        }
        if (this.keypadStringAccountNumber.length !== 0) {
          this.keypadStringAccountNumber = this.keypadStringAccountNumber.substr(0, this.keypadStringAccountNumber.length - 1);
          if (this.keypadStringAccountNumber.length < 1) {
            this.incompleteCodeView();
          }
          this.updateInputBulletsAccountNumber(this.flxNameAccountNumberScreen);
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
    updateInputBulletsAccountNumber: function(inputFlx) {
      try{
        var widgets = this.view[inputFlx].widgets();
        if(inputFlx === "flxAccountNumberInput"){
          var isAccountNumberMasked = this.getFieldValue(this._accTxtInput, "mask");
          for (var i = 0; i < this.keypadStringAccountNumber.length; i++) {
            if(isAccountNumberMasked === true){
              this.view.flxAccountNumberInputLine.skin = this.getFieldValue(this._accNumericInputBottomSkin);
              this.view.lblAccountNumberErrorMsg.setVisibility(false);
              widgets[i].text = ".";
              widgets[i].skin = this.getFieldValue(this._accInputFieldMaskedSkin)
            }else{
              this.view.flxAccountNumberInputLine.skin = this.getFieldValue(this._accNumericInputBottomSkin);
              this.view.lblAccountNumberErrorMsg.setVisibility(false);
              widgets[i].skin =  this.getFieldValue(this._accInputFieldUnmaskedSkin);
              widgets[i].text = this.keypadStringAccountNumber[i];
            }
          }
        }
        if(inputFlx === "flxReEnterAccountNumberInput"){
          var isReEnterAccountNumberMasked = this.getFieldValue(this._accReTxtInput, "mask");
          for (var i = 0; i < this.keypadStringAccountNumber.length; i++) {
            if(isReEnterAccountNumberMasked === true){
              this.view.flxReEnterAccountNumberInputLine.skin = this.getFieldValue(this._accNumericInputBottomSkin);
              this.view.lblReEnterAccountNumberErrorMsg.setVisibility(false);
              widgets[i].text = ".";
              widgets[i].skin = this.getFieldValue(this._accInputFieldMaskedSkin)
            }else{
              this.view.flxReEnterAccountNumberInputLine.skin = this.getFieldValue(this._accNumericInputBottomSkin);
              this.view.lblReEnterAccountNumberErrorMsg.setVisibility(false);
              widgets[i].skin =  this.getFieldValue(this._accInputFieldUnmaskedSkin);
              widgets[i].text = this.keypadStringAccountNumber[i];
            }
          }
        }
        for (var i = this.keypadStringAccountNumber.length; i < widgets.length; i++) {
          widgets[i].text = '';
        }
        this.enterCodePostAction();
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
        if(this.flxNameAccountNumberScreen === "flxAccountNumberInput"){                   
          var title = this.keypadStringAccountNumber;
          var accountNumberEnteredSameBank={
            "txtBoxNewAccountNumber": this.keypadStringAccountNumber
          };																			           
          var minlength = this.minFillValidate(accountNumberEnteredSameBank);
          var maxlength = this.maxFillValidate(accountNumberEnteredSameBank); 
          if(Object.keys(minlength).length === 0 && minlength.constructor === Object && Object.keys(maxlength).length === 0 && maxlength.constructor === Object){
            this.enableButton("btnAccountNumberContinue");            
          } else{
            this.disableButton("btnAccountNumberContinue");
          } 
        }
        if(this.flxNameAccountNumberScreen === "flxReEnterAccountNumberInput"){
          var title = this.keypadStringAccountNumber;
          var reEnterAccountNumberEnteredSameBank={
            "txtBoxReenterAccountNumber": this.keypadStringAccountNumber
          };        
          var minlength = this.minFillValidate(reEnterAccountNumberEnteredSameBank);
          var maxlength = this.maxFillValidate(reEnterAccountNumberEnteredSameBank); 
          if(Object.keys(minlength).length === 0 && minlength.constructor === Object && Object.keys(maxlength).length === 0 && maxlength.constructor === Object){
            this.enableButton("btnReEnterAccountNumberContinue");            
          } else{
            this.disableButton("btnReEnterAccountNumberContinue");
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
        if(this.flxNameAccountNumberScreen === "flxAccountNumberInput"){
          this.disableButton("btnAccountNumberContinue");														 
        }
        if(this.flxNameAccountNumberScreen === "flxReEnterAccountNumberInput"){
          this.disableButton("btnReEnterAccountNumberContinue");																
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
     * Component requiredCodeInputValidation
     * To validate the inputs and show error then continue to next screen if all the inputs are valid
     */
    reEnterAccountNumberInputValidation:function(){
      var scope = this;
      if(scope._beneficiaryTypes === "DomesticBank" || scope._beneficiaryTypes === "InternationalBank"){
        var dataJSON = {
          "txtBoxReenterAccountNumber": scope.view.txtReEnterAccountNumberorIBAN.text
        }; 
        var dataValidator = scope.performDataValidation(dataJSON);
        if(Object.keys(dataValidator).length === 0 && dataValidator.constructor === Object){
          scope.resetReEnterAccountNumberErrors();    
          scope.onReEnterAccountNumberContinue();
        }
        else{
          scope.setReEnterAccountNumberErrors(dataValidator);  
        }
      }else{
        scope.onReEnterAccountNumberContinue();
      }
    },
    /**
     * Component resetReEnterAccountNumberErrors
     * Reponsible to reset textbox skin
     */
    resetReEnterAccountNumberErrors: function(){
      try{
        //this.view.txtReEnterAccountNumberorIBAN.skin = this._gsknTextBoxNormal;
        //this.view.txtReEnterAccountNumberorIBAN.focusSkin = this.getFieldValue(this._gsknTextBoxFocus);       
        this.view.lblReEnterAccountNumberErrorMsg.setVisibility(false);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in resetReEnterAccountNumberErrors method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * @api : showRequiredCodeValidationErrors
     * displays errors on validation of the fields in add beneficiary screen.
     * @return : NA
     */
    setReEnterAccountNumberErrors: function(dvfError) {
      this.resetReEnterAccountNumberErrors();
      for(var iterator in dvfError){
        if("txtBoxReenterAccountNumber" == iterator){
          this.view.txtReEnterAccountNumberorIBAN.skin = this._gsknTextBoxError;
          this.view.txtReEnterAccountNumberorIBAN.focusSkin = this._gsknTextBoxError;
          this.view.lblReEnterAccountNumberErrorMsg.text =this.getFieldValue(this._accInvalidMsg);
        }
      }         
      this.view.lblReEnterAccountNumberErrorMsg.setVisibility(true);
    },
    /**   
	 * Component onReEnterAccountNumberContinue
     * To navigate to next page 
     * Validation for input account number
     * Verifying both inputs are same
    **/
    onReEnterAccountNumberContinue: function() {
      var scope = this;
      try {
        scope.view.lblReEnterAccountNumberErrorMsg.setVisibility(false);
        var isValidAccNo = scope.isValidAccountNumberOrNot();
        if(isValidAccNo) {
          if(scope._beneficiaryTypes === "DomesticBank" || scope._beneficiaryTypes === "InternationalBank"){  
            if(!kony.sdk.isNullOrUndefined(scope.view.txtAccountNumberorIBAN.text) && scope.view.txtAccountNumberorIBAN.text !== "") {																						 
              scope.inputPool[scope.getFieldValue(scope._accTxtInput,"inputPoolKey")] = scope.view.txtAccountNumberorIBAN.text;
            }
            var existingToAccounts = scope.isExistingAccount(scope.view.txtAccountNumberorIBAN.text);
            if(existingToAccounts.length === 0) {
              scope.invokeValidateIBANService();          
            } else {
              scope.view.lblReEnterAccountNumberErrorMsg.text =scope.getFieldValue(scope._accExistMsg); 
              scope.view.lblReEnterAccountNumberErrorMsg.setVisibility(true);
              scope.view.txtReEnterAccountNumberorIBAN.skin = scope.getFieldValue(scope._gsknTextBoxError);
              scope.view.txtReEnterAccountNumberorIBAN.focusSkin = scope.getFieldValue(scope._gsknTextBoxError);
              scope.incompleteCodeView();
            }																						   
          } else {
            if(!kony.sdk.isNullOrUndefined(scope.keypadStringAccountNumber) && scope.view.txtAccountNumberorIBAN.text !== "") {																						 
              scope.inputPool[scope.getFieldValue(scope._accTxtInput,"inputPoolKey")] = scope.keypadStringAccountNumber;																										   																			 
            }
            var results = scope.isExistingAccount(scope.initialAccountNumber);
            if(results.length === 0) {            
              scope.onRequestStart();
              scope.setCriteria(scope._accValidationCriteria)
              var objSvcName = scope.getFieldValue(scope._accValidationService);
              var objName = scope.getFieldValue(scope._accValidationObject);
              var operationName = scope.getFieldValue(scope._accValidationOperation);
              var criteria = scope.getCriteria();
              var unicode = "";
              scope.UnifiedTransferDAO.invokeService
              (objSvcName,objName,operationName,criteria,unicode,scope.onAccountNumberSuccess,scope.failureValidation);
            } else {
              scope.view.lblReEnterAccountNumberErrorMsg.text =scope.getFieldValue(scope._accExistMsg);               
              scope.view.lblReEnterAccountNumberErrorMsg.setVisibility(true);
              scope.incompleteCodeView();
            }
          }
        }
        else {
          if(scope._beneficiaryTypes === "DomesticBank" || scope._beneficiaryTypes === "InternationalBank"){ 
            scope.incompleteCodeView();																	 
            scope.view.lblReEnterAccountNumberErrorMsg.text = scope.getFieldValue(scope._accReEnterErrorMessage, "IBANNumber");
            scope.view.txtReEnterAccountNumberorIBAN.skin = scope.getFieldValue(scope._gsknTextBoxError);
            scope.view.txtReEnterAccountNumberorIBAN.focusSkin = scope.getFieldValue(scope._gsknTextBoxError);
            scope.view.lblReEnterAccountNumberErrorMsg.setVisibility(true);
          }else{
            scope.updateInputBulletsAccountNumber(this.flxNameAccountNumberScreen);
            scope.incompleteCodeView();
            scope.view.lblReEnterAccountNumberErrorMsg.skin = scope._gsknErrorTextMessage;
            scope.view.flxReEnterAccountNumberInputLine.skin = scope._accNumericInputBottomErrorSkin;
            scope.view.lblReEnterAccountNumberErrorMsg.text = scope.getFieldValue(scope._accReEnterErrorMessage, "accountNumber");
            scope.view.lblReEnterAccountNumberErrorMsg.setVisibility(true);
          }
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onReEnterAccountNumberContinue method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**     
	 * Component isValidAccountNumberOrNot
     * Verifying both inputs are same
    **/
    isValidAccountNumberOrNot: function() {
      try {
        var scope = this;
        if(scope._beneficiaryTypes === "DomesticBank" || scope._beneficiaryTypes === "InternationalBank") {
          if(scope.view.txtAccountNumberorIBAN.text === scope.view.txtReEnterAccountNumberorIBAN.text) {
            //scope.view.txtReEnterAccountNumberorIBAN.skin = scope.getFieldValue(scope._textBoxNormalSkin);																				  
            //scope.view.txtReEnterAccountNumberorIBAN.focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus);    
            var accountName = scope.getFieldValue(scope._pynsTextbox, "value") +"...."+ scope.getLastNDigits(scope.view.txtAccountNumberorIBAN.text, 4);
            scope.inputPool["toAccountName"] = accountName;
            scope.inputPool["IBAN"] =  scope.view.txtReEnterAccountNumberorIBAN.text;
            scope.inputPool["toAccountNumber"] =  scope.view.txtReEnterAccountNumberorIBAN.text;
            scope.inputPool["payeeAccountNumberOrIBAN"] =  scope.view.txtReEnterAccountNumberorIBAN.text;
            scope.inputPool["accountNumber"] =  scope.view.txtReEnterAccountNumberorIBAN.text;
            if(!kony.sdk.isNullOrUndefined(scope.view.txtAccountNumberorIBAN.text) && scope.view.txtAccountNumberorIBAN.text !== "") {
              scope.inputPool[scope.getFieldValue(scope._accTxtInput,"inputPoolKey")] = scope.view.txtAccountNumberorIBAN.text;
            }
            return true; 
          } else {
            return false;
          }															 
        } else {
          if(scope.initialAccountNumber === scope.keypadStringAccountNumber) {
            var accountName = scope.getFieldValue(scope.__pynsTextbox, "text") +"...."+ scope.getLastNDigits(scope.initialAccountNumber, 4);
            scope.inputPool["toAccountName"] = accountName;
            scope.inputPool["toAccountNumber"] = scope.initialAccountNumber;
            scope.inputPool["accountNumber"] = scope.initialAccountNumber;
            if(!kony.sdk.isNullOrUndefined(scope.initialAccountNumber) && scope.initialAccountNumber !== "") {
              scope.inputPool[scope.getFieldValue(scope._accTxtInput,"inputPoolKey")] = scope.initialAccountNumber;
            }
            return true;
          } else {
            scope.updateInputBulletsAccountNumber("flxReEnterAccountNumberInput");
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
	 * Component getLastNDigits
     * To get last n number of digits
    **/
    getLastNDigits: function(string, n){
      return string.substring(string.length - n)
    },
    /**     
	 * Component onReEnterAccountNumberContinueNavigation
     * Navigate to next screen based on flow type.
    **/
    onReEnterAccountNumberContinueNavigation: function() {
      try {
        var scope = this;
        if(scope.payeeFlow === "EDIT") {            							 
          scope.setVerifyDetails();
          scope.navigateTo("flxVerifyDetails", "flxVfsHeaderTop", scope.getFieldValue(scope._vfsSectionTitle));
        }
        else if(scope._beneficiaryTypes === "DomesticBank" || scope._beneficiaryTypes === "InternationalBank") {
          if(scope._rcsVisibility === true){
            scope.setRequiredCode();
            scope.navigateTo("flxRequiredCode","flxRequiredCodeTop",scope.getFieldValue(scope._rcsHdr));
          }else{
            scope.setLinkPayee("ADD");
            scope.navigateTo("flxLinkPayee", "flxLinkPayeeTop", scope.getFieldValue(scope._linkPayeeSectionTitle));
          }        
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onReEnterAccountNumberContinueNavigation method of the component.",
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
        scope.onRequestEnd();
        scope.isIBANValid = response.isIBANValid;
        if(scope.payeeFlow === "EDIT") {															   
          scope.setVerifyDetails();
          scope.navigateTo("flxVerifyDetails", "flxVfsHeaderTop", scope.getFieldValue(scope._vfsSectionTitle));         
        } else {				
          if(scope.isIBANValid === "YES") {
            scope.inputPool["accountNumber"] = response.IBAN;
            scope.inputPool["IBANCountryCode"] = response.IBAN.slice(0,2);
            scope.invokeSwiftServiceFromIBAN();
          }
          else {
            scope.onReEnterAccountNumberContinueNavigation();
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
        scope.setCriteria(scope._rcsSwiftCriteria);
        var objSvcName = scope.getFieldValue(scope._rcsGetSwiftService);
        var objName = scope.getFieldValue(scope._rcsSwiftObject);
        var operationName = scope.getFieldValue(scope._rcsSwiftOperation);
        var criteria = scope.getCriteria();
        scope.UnifiedTransferDAO.invokeService
        (objSvcName,objName,operationName,criteria,"",scope.setSwiftCodeForNewPayee,scope.onSwiftServiceFailure);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in invokeSwiftServiceFromIBAN method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }																							 
    },
    /**     
	 * Component onSwiftServiceFailure
    **/
    onSwiftServiceFailure: function() {
      try {
        var scope = this;
        scope.failureValidation();
        scope.onReEnterAccountNumberContinueNavigation();    
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
        var bic = response[scope.getFieldValue("bic")];
        var bankName = response[scope.getFieldValue("bankName")];
        if(!scope.isEmptyNullUndefined(bic))  {       
           scope.inputPool[scope.getFieldValue(scope._rcsTextbox1, "inputPoolKey")] = bic;
        } 
        if(!scope.isEmptyNullUndefined(bankName)) {       
         scope.inputPool["bankName"] = bankName;
        }
        scope.onRequestEnd();
        scope.onReEnterAccountNumberContinueNavigation();  
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
        if(response.beneficiaryName == "") {                    
          scope.view.lblReEnterAccountNumberErrorMsg.text = scope.getFieldValue(scope._accExistMsg);																											   
          scope.view.lblReEnterAccountNumberErrorMsg.setVisibility(true);
          scope.keypadStringAccountNumber = '';
          scope.updateInputBulletsAccountNumber("flxReEnterAccountNumberInput");
          scope.incompleteCodeView();
        } else {																			   
          scope.inputPool["toAvailableBalance"] =response.beneficiaryName;
          scope.inputPool["beneficiaryName"] =response.beneficiaryName;
          if(scope.payeeFlow === "EDIT") {
            scope.setVerifyDetails();
            scope.navigateTo("flxVerifyDetails", "flxVfsHeaderTop", scope.getFieldValue(scope._vfsSectionTitle));
          }
          else{
            if(scope._beneficiaryTypes === "SameBank"){
              scope.setLinkPayee("ADD");
              scope.navigateTo("flxLinkPayee", "flxLinkPayeeTop", scope.getFieldValue(scope._linkPayeeSectionTitle));													 
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
        scope.setCriteria(scope._accValidationCriteria);
        var objSvcName = scope.getFieldValue(scope._accValidationService);
        var objName = scope.getFieldValue(scope._accValidationObject);
        var operationName = scope.getFieldValue(scope._accValidationOperation);
        var criteria = scope.getCriteria();
        scope.UnifiedTransferDAO.invokeService
        (objSvcName,objName,operationName,criteria,"",scope.onIBANSuccess,scope.failureValidation); 
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
	 * Component btnAccountNumberBackOnClick
     * Function for back navigation - Account Number 
    **/
    btnAccountNumberBackOnClick: function(){
      try {
        var scope = this;   
        if(scope.stack.length>1)
        {
          scope.goBack();	
        }
        else
        {
          scope.onBackButtonClick();
        }

      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in btnAccountNumberBackOnClick method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**     
	 * Component btnReEnterAccountNumberBackOnClick
     * Function for back navigation - Re-enter Account Number
    **/
    btnReEnterAccountNumberBackOnClick: function(){
      try{
        var scope = this; 
        scope.flxNameAccountNumberScreen = "flxAccountNumberInput";
        scope.keypadStringAccountNumber = scope.initialAccountNumber;
        scope.goBack();														
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in btnReEnterAccountNumberBackOnClick method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
      }
    },
    /**     
	 * Component setRequiredCode
     * To call default text, skins and actions methods for required code screen
     */  
    setRequiredCode:function(){
      this.setRequiredCodeDefaultText();
      this.setRequiredCodeSkins();
      this.setRequiredCodeData();
      this.setRequiredCodeActions();
    },

    /**     
	 * Component setRequiredCodeData
     * To set values for required code fields
     */  
    setRequiredCodeData:function(){
      var scope= this;
	  scope.view.lblErrorMsgRequirecode.setVisibility(false);													 
      if(!this.isEmptyNullUndefined(this.inputPool[scope.getFieldValue(scope._rcsTextbox1,"inputPoolKey")])){
        scope.view.txtRequiredBICSwift.text = scope.getFieldValue(scope._rcsTextbox1,"value");
      }else{
        scope.view.txtRequiredBICSwift.text = "";
      }
      if(!this.isEmptyNullUndefined(this.inputPool[scope.getFieldValue(scope._rcsTextbox2,"inputPoolKey")])){
        scope.view.txtRequiredClearingCode1.text = scope.getFieldValue(scope._rcsTextbox2,"value");  
      }else{
        scope.view.txtRequiredClearingCode1.text = "";
      }
      if(!this.isEmptyNullUndefined(this.inputPool[scope.getFieldValue(scope._rcsTextbox3,"inputPoolKey")])){
        scope.view.txtRequiredClearingCode2.text = scope.getFieldValue(scope._rcsTextbox3,"value");  
      }else{
        scope.view.txtRequiredClearingCode2.text = "";
      }
      
    },

    /**     
	 * Component setRequiredCodeDefaultText
     * To set default text for required code screen
     */  
    setRequiredCodeDefaultText:function(){
      var scope = this;
      if(!scope.isEmptyNullUndefined(scope.getFieldValue(this._rcsHdr))){
        scope.view.lblRequiredCodeHeader.text = scope.getFieldValue(scope._rcsHdr);
        scope.view.lblRequiredCodeHeader.setVisibility(true);
      }else{
        scope.view.lblRequiredCodeHeader.setVisibility(false);
      }
      if(!scope.isEmptyNullUndefined(scope.getFieldValue(this._rcsSubhdr))){
        scope.view.lblRequiredCodeDescription.text = scope.getFieldValue(scope._rcsSubhdr);
        scope.view.flxRequiredCodeDescription.setVisibility(true);
      }else{
        scope.view.flxRequiredCodeDescription.setVisibility(false);
      }

      if(!scope.isEmptyNullUndefined(scope.getFieldValue(scope._rcsTextbox1Label))){
        scope.view.lblRequiredBICSwift.text = scope.getFieldValue(scope._rcsTextbox1Label);
        scope.view.lblRequiredBICSwift.setVisibility(true);
      }else{
        scope.view.lblRequiredBICSwift.setVisibility(false);
      }

      if(!scope.isEmptyNullUndefined(scope._rcsTextbox1)){
        scope.view.txtRequiredBICSwift.placeholder = scope.getFieldValue(scope._rcsTextbox1,"placeHolder");
        scope.view.flxRequiredBICwrapper.setVisibility(true);
      }else{
        scope.view.flxRequiredBICwrapper.setVisibility(false);
      }

      if(!scope.isEmptyNullUndefined(scope.getFieldValue(scope._rcsTextbox2Label))){
        scope.view.lblRequiredClearingCode1.text = scope.getFieldValue(scope._rcsTextbox2Label);
        scope.view.flxHeading1.setVisibility(true);
      }else{
        scope.view.flxHeading1.setVisibility(false);
      }

      if(!scope.isEmptyNullUndefined(scope._rcsTextbox2)){
        scope.view.txtRequiredClearingCode1.placeholder = scope.getFieldValue(scope._rcsTextbox2,"placeHolder");
        scope.view.flxClearingCode1.setVisibility(true);
      }else{
        scope.view.flxClearingCode1.setVisibility(false);
      }

      if(!scope.isEmptyNullUndefined(scope.getFieldValue(scope._rcsTextbox3Label))){
        scope.view.lblRequiredClearingCode2.text = scope.getFieldValue(scope._rcsTextbox3Label);
        scope.view.flxHeading2.setVisibility(true);
      }else{
        scope.view.flxHeading2.setVisibility(false);
      }

      if(!scope.isEmptyNullUndefined(scope._rcsTextbox3)){
        scope.view.txtRequiredClearingCode2.placeholder = scope.getFieldValue(scope._rcsTextbox3,"placeHolder");
        scope.view.flxClearingCode2.setVisibility(true);
      }else{
        scope.view.flxClearingCode2.setVisibility(false);
      }

      if(!scope.isEmptyNullUndefined(scope.getFieldValue(scope._rcsCTAButton1))){
        scope.view.btnRequiredBICSwiftCodeLookUp.text = scope.getFieldValue(scope._rcsCTAButton1,"text");
        scope.view.btnRequiredBICSwiftCodeLookUp.setVisibility(true);
      }else{
        scope.view.btnRequiredBICSwiftCodeLookUp.setVisibility(false);
      }

      if(!scope.isEmptyNullUndefined(scope.getFieldValue(scope._rcsCTAButton2))){
        scope.view.btnRequiredCodeContinue.text = scope.getFieldValue(scope._rcsCTAButton2,"text");
        scope.view.flxRequiredCodeBtncontinue.setVisibility(true);
      }else{
        scope.view.flxRequiredCodeBtncontinue.setVisibility(false);
      }

      if(!scope.isEmptyNullUndefined(scope.getFieldValue(scope._rcsOROption))){
        scope.view.lblRequiredOr.text = scope.getFieldValue(scope._rcsOROption);
        scope.view.flxRequiredBICor.setVisibility(true);
      }else{
        scope.view.flxRequiredBICor.setVisibility(false);
      }

      if(scope.getFieldValue(scope._rcsAcceptBICSwift)){
        scope.view.flcRequiredBicSwift.setVisibility(true);
      }else{
        scope.view.flcRequiredBicSwift.setVisibility(false);
      }
      if(scope.getFieldValue(scope._rcsAcceptClearcode)){
        scope.view.flxClearingCode1.setVisibility(true);
        scope.view.flxClearingCode2.setVisibility(true);
      }else{
        scope.view.flxClearingCode1.setVisibility(false);
        scope.view.flxClearingCode2.setVisibility(false);
      }  
    },

    /**     
	 * Component setRequiredCodeSkins
     * To set skins for required code screen
     */
    setRequiredCodeSkins:function(){
      var scope = this;
      scope.view.flxRequiredCodeHeader.skin = scope.getFieldValue(scope._gsknHeaderFlex);
      scope.view.btnRequireCodeCancel.skin = scope.getFieldValue(scope._gsknCancelBtn);
      scope.view.lblRequiredCodeHeader.skin = scope.getFieldValue(scope._gsknHeaderLbl);
      scope.view.flxRequiredCodeDescription.skin = scope.getFieldValue(scope._gsknSubHeaderFlex);
      scope.view.lblRequiredCodeDescription.skin = scope.getFieldValue(scope._gsknSubHeaderLabel);
      scope.view.flxRequireCodeBtnSeparator.skin = scope.getFieldValue(scope._gsknSubHeaderseparator);
      scope.view.lblRequiredBICSwift.skin = scope.getFieldValue(scope._gsknInputFieldLabel);
      scope.view.txtRequiredBICSwift.skin = scope.getFieldValue(scope._gsknTextBoxNormal);
      scope.view.txtRequiredBICSwift.focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus);
      scope.view.btnRequiredBICSwiftCodeLookUp.skin = scope.getFieldValue(scope._rcsSwiftLookupBtnSkn);
      scope.view.flxRequiredBICSeparator.skin = scope.getFieldValue(scope._gsknSubHeaderseparator);
      scope.view.lblRequiredClearingCode1.skin = scope.getFieldValue(scope._gsknInputFieldLabel);
      scope.view.txtRequiredClearingCode1.skin = scope.getFieldValue(scope._gsknTextBoxNormal);
      scope.view.txtRequiredClearingCode1.focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus);
      scope.view.flxRequiredClearingCode1Separator.skin = scope.getFieldValue(scope._gsknSubHeaderseparator);
      scope.view.lblRequiredClearingCode2.skin = scope.getFieldValue(scope._gsknInputFieldLabel);
      scope.view.txtRequiredClearingCode2.skin = scope.getFieldValue(scope._gsknTextBoxNormal);
      scope.view.txtRequiredClearingCode2.focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus);
      scope.view.flxRequiredClearingCode2Separator.skin = scope.getFieldValue(scope._gsknSubHeaderseparator); 
      scope.view.flxRequireCodeBtnSeparator.skin = scope.getFieldValue(scope._gsknSubHeaderseparator);
      scope.view.btnRequiredCodeContinue.focusSkin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
      scope.view.flxRequiredBICor.skin = scope.getFieldValue(scope._rcsOROptionFlexSkin);
      scope.view.lblRequiredOr.skin = scope.getFieldValue(scope._rcsOROptionLabelSkin);
      scope.disableButton("btnRequiredCodeContinue");
    },

    /**     
	 * Component setRequiredCodeSkins
     * To declare the actions for required code screen buttons
     */
    setRequiredCodeActions:function(){
      var scope = this;
      scope.view.btnRequiredCodeContinue.onClick = scope.requiredCodeInputValidation;
      scope.view.btnRequiredBICSwiftCodeLookUp.onClick= scope.setSwiftSearchInput;
      scope.view.imgRequireCodeBack.onTouchEnd= scope.goBack;
      scope.view.btnRequireCodeCancel.onClick = scope.onBackButtonClick;

      if(!scope.isEmptyNullUndefined(scope.view.txtRequiredBICSwift.text)||!scope.isEmptyNullUndefined(scope.view.txtRequiredClearingCode1.text)||!scope.isEmptyNullUndefined(scope.view.txtRequiredClearingCode2.text)){
        scope.enableButton("btnRequiredCodeContinue");
      }else{
        scope.disableButton("btnRequiredCodeContinue");
      }

      scope.view.txtRequiredBICSwift.onTextChange = function(){
        scope.view.txtRequiredBICSwift.skin = scope.getFieldValue(scope._gsknTextBoxNormal);
        scope.view.txtRequiredBICSwift.focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus);
        scope.view.lblErrorMsgRequirecode.setVisibility(false);
        var dataJSON = {
          "txtRequiredBICSwift": scope.view.txtRequiredBICSwift.text,
          "txtRequiredClearingCode1": scope.view.txtRequiredClearingCode1.text,
          "txtRequiredClearingCode2": scope.view.txtRequiredClearingCode2.text
        }; 
        var dataValidator = scope.maxFillValidate(dataJSON);
        if(!scope.isEmptyNullUndefined(scope.view.txtRequiredBICSwift.text)||!scope.isEmptyNullUndefined(scope.view.txtRequiredClearingCode1.text)||!scope.isEmptyNullUndefined(scope.view.txtRequiredClearingCode2.text)){
          scope.enableButton("btnRequiredCodeContinue");
        }else{
          scope.disableButton("btnRequiredCodeContinue");
        }
        if(Object.keys(dataValidator).length === 0 && dataValidator.constructor === Object){
          scope.enableButton("btnRequiredCodeContinue");
        }
        else{
          scope.disableButton("btnRequiredCodeContinue");
        }
      };

      scope.view.txtRequiredClearingCode1.onTextChange = function(){
        scope.view.lblErrorMsgRequirecode.setVisibility(false);
        scope.view.txtRequiredClearingCode1.skin = scope.getFieldValue(scope._gsknTextBoxNormal);
        scope.view.txtRequiredClearingCode1.focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus);
        var dataJSON = {
          "txtRequiredBICSwift": scope.view.txtRequiredBICSwift.text,
          "txtRequiredClearingCode1": scope.view.txtRequiredClearingCode1.text,
          "txtRequiredClearingCode2": scope.view.txtRequiredClearingCode2.text
        }; 
        var dataValidator = scope.maxFillValidate(dataJSON);
        if(!scope.isEmptyNullUndefined(scope.view.txtRequiredBICSwift.text)||!scope.isEmptyNullUndefined(scope.view.txtRequiredClearingCode1.text)||!scope.isEmptyNullUndefined(scope.view.txtRequiredClearingCode2.text)){
          scope.enableButton("btnRequiredCodeContinue");
        }else{
          scope.disableButton("btnRequiredCodeContinue");
        }
        if(Object.keys(dataValidator).length === 0 && dataValidator.constructor === Object){
          scope.enableButton("btnRequiredCodeContinue");
        }
        else{
          scope.disableButton("btnRequiredCodeContinue");
        }

      };

      scope.view.txtRequiredClearingCode2.onTextChange = function(){
        scope.view.lblErrorMsgRequirecode.setVisibility(false);
        scope.view.txtRequiredClearingCode2.skin = scope.getFieldValue(scope._gsknTextBoxNormal);
        scope.view.txtRequiredClearingCode2.focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus);
        var dataJSON = {
          "txtRequiredBICSwift": scope.view.txtRequiredBICSwift.text,
          "txtRequiredClearingCode1": scope.view.txtRequiredClearingCode1.text,
          "txtRequiredClearingCode2": scope.view.txtRequiredClearingCode2.text
        }; 
        var dataValidator = scope.maxFillValidate(dataJSON);
        if(!scope.isEmptyNullUndefined(scope.view.txtRequiredBICSwift.text)||!scope.isEmptyNullUndefined(scope.view.txtRequiredClearingCode1.text)||!scope.isEmptyNullUndefined(scope.view.txtRequiredClearingCode2.text)){
          scope.enableButton("btnRequiredCodeContinue");
        }else{
          scope.disableButton("btnRequiredCodeContinue");
        }
        if(Object.keys(dataValidator).length === 0 && dataValidator.constructor === Object){
          scope.enableButton("btnRequiredCodeContinue");
        }
        else{
          scope.disableButton("btnRequiredCodeContinue");
        }

      };
    },


    /**
     * Component requiredCodeInputValidation
     * To validate the inputs and show error then continue to next screen if all the inputs are valide
     */
    requiredCodeInputValidation:function(){
      var scope = this;
      var dataJSON = {
        "txtRequiredBICSwift": scope.view.txtRequiredBICSwift.text,
        "txtRequiredClearingCode1": scope.view.txtRequiredClearingCode1.text,
        "txtRequiredClearingCode2": scope.view.txtRequiredClearingCode2.text
      }; 
      var dataValidator = scope.performDataValidation(dataJSON);
      if(Object.keys(dataValidator).length === 0 && dataValidator.constructor === Object){
        scope.resetRequiredCodeErrors();    
        scope.onRequireCodeContinue();
      }
      else{
        scope.setRequiredCodeErrors(dataValidator);
        
      }

    },

    /**
     * Component resetRequiredCodeErrors
     * Reponsible to reset skin fot textbox
     */
    resetRequiredCodeErrors: function(){
      try{
        this.view.txtRequiredBICSwift.skin = this._gsknTextBoxNormal;
        this.view.txtRequiredClearingCode1.skin = this._gsknTextBoxNormal;
        this.view.txtRequiredClearingCode2.skin = this._gsknTextBoxNormal;
        this.view.lblErrorMsgRequirecode.setVisibility(false);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in resetTextBoxesSkins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        this.onError(errObj);
      }
    },

    /**
     * Component: setRequiredCodeErrors
     * Set error message for required code field
     * @return : NA
     */
    setRequiredCodeErrors: function(dvfError) {
      this.resetRequiredCodeErrors();
      for(var iterator in dvfError){
        if("txtRequiredBICSwift" == iterator){
          this.view.txtRequiredBICSwift.skin = this._gsknTextBoxError;
          this.view.txtRequiredBICSwift.focusSkin = this._gsknTextBoxError;
          this.view.lblErrorMsgRequirecode.text = "Please enter a valid Bic/Swift code";
        }
        if("txtRequiredClearingCode1" == iterator){
          this.view.txtRequiredClearingCode1.skin = this._gsknTextBoxError;
           this.view.txtRequiredClearingCode1.focusSkin = this._gsknTextBoxError;
          this.view.lblErrorMsgRequirecode.text = "Please enter a valid Clearing Code1";
        }
        if("txtRequiredClearingCode2" == iterator){
          this.view.txtRequiredClearingCode2.skin = this._gsknTextBoxError;
           this.view.txtRequiredClearingCode1.focusSkin = this._gsknTextBoxError;
          this.view.lblErrorMsgRequirecode.text = "Please enter a valid Clearing Code2";
        }
      }      
      this.view.lblErrorMsgRequirecode.setVisibility(true);														  
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
     * To call default text, skins and actions methods for swift input screen
     */
    setSwiftSearchInput:function(){
      this.navigateTo("flxSwiftBICSearch","flxSwiftBICSearchHeaderTop",this.getFieldValue(this._sbssSectionHeader));
      this.setSwiftSearchInputDefaultText();
      this.setSwiftSearchInputSkins();
      this.setSwiftSearchInputActions();
      if(this._sbssEnableCache && this.getswift == "") {
        this.getswift = "Yes"; 
        this.getSwiftResult();
      }
    },

    /**     
	 * Component setSwiftSearchInputDefault
     * To set default text for search input screen
     */
    setSwiftSearchInputDefaultText:function(){

      if(!this.isEmptyNullUndefined(this.getFieldValue(this._sbssSectionHeader))){
        this.view.lblSwiftBICSearchHeader.text = this.getFieldValue(this._sbssSectionHeader);
        this.view.lblSwiftBICSearchHeader.setVisibility(true);
      }else{
        this.view.lblSwiftBICSearchHeader.setVisibility(false);
      }

      if(!this.isEmptyNullUndefined(this.getFieldValue(this._sbssSubHeaderTitle1))){
        this.view.lblSwiftBICSearchSubHeading.text =this.getFieldValue(this._sbssSubHeaderTitle1);
        this.view.flxSwiftBICSearchSubHearding.setVisibility(true);
      }else{
        this.view.flxSwiftBICSearchSubHearding.setVisibility(false);
      }

      for(var i=1 ; i<=4 ;i++){
        if(!this.isEmptyNullUndefined(this.getFieldValue(eval("this._sbssTextbox"+i+"Label")))){
          this.view["lblSwiftBICSearchField"+i].text = this.getFieldValue(eval("this._sbssTextbox"+i+"Label"));
          this.view["lblSwiftBICSearchField"+i].setVisibility(true);
        }else{
          this.view["lblSwiftBICSearchField"+i].setVisibility(false);
        }

        if(!this.isEmptyNullUndefined(this.getFieldValue(eval("this._sbssTextbox"+i)))){
          this.view["txtSwiftBICSearchValue"+i].placeholder = this.getFieldValue(eval("this._sbssTextbox"+i),"placeHolder");
          this.view["lblSwiftBICSearchField"+i].setVisibility(true);
          this.view["txtSwiftBICSearchValue"+i].setVisibility(true);
        }else{
          this.view["lblSwiftBICSearchField"+i].setVisibility(false);
          this.view["txtSwiftBICSearchValue"+i].setVisibility(false);
        }
      }

      if(!this.isEmptyNullUndefined(this.getFieldValue(this._sbssCTA1))){
        this.view.btnGetDetails.text = this.getFieldValue(this._sbssCTA1,"text");
        this.view.flxBtnGetDetails.setVisibility(true);
      }else{
        this.view.flxBtnGetDetails.setVisibility(false);
      }
    },

    /**     
	 * Component setSwiftSearchInputSkins
     * To set skins for search input screen
     */
    setSwiftSearchInputSkins:function(){
      var scope = this;
      scope.view.imgSwiftBICSearchBack.src = scope.getFieldValue(scope._iconBack);
      scope.view.flxSwiftBICSearchHeader.skin = scope.getFieldValue(scope._gsknHeaderFlex);
      scope.view.btnSwiftBICSearchCancel.skin = scope.getFieldValue(scope._gsknCancelBtn);
      scope.view.lblSwiftBICSearchHeader.skin = scope.getFieldValue(scope._gsknHeaderLbl);
      scope.view.flxSwiftBICSearchSubHearding.skin = scope.getFieldValue(scope._gsknSubHeaderFlex);
      scope.view.lblSwiftBICSearchSubHeading.skin = scope.getFieldValue(scope._gsknSubHeaderLabel);
      scope.view.flxSwiftBICSearchSeparator.skin = scope.getFieldValue(scope._gsknSubHeaderseparator);
      for(var i=1 ; i<=4 ;i++){
        scope.view["lblSwiftBICSearchField"+i].skin = scope.getFieldValue(scope._gsknInputFieldLabel);
        scope.view["txtSwiftBICSearchValue"+i].skin = scope.getFieldValue(scope._gsknTextBoxNormal);
        scope.view["txtSwiftBICSearchValue"+i].focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus);
      }
      scope.view.flxGetDetailsSeparator.skin = scope.getFieldValue(scope._gsknSubHeaderseparator);

      if(scope.getFieldValue(scope._sbssCTA1,"actionType") === "primary"){
        scope.view.btnGetDetails.skin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
        scope.view.btnGetDetails.focusSkin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
      }else{
        scope.view.btnGetDetails.skin = scope.getFieldValue(scope._gsknSecondaryContexualBtn);
        scope.view.btnGetDetails.focusSkin = scope.getFieldValue(scope._gsknSecondaryContexualBtn);
      }
    },

    /**     
	 * Component setSwiftSearchInputActions
     * To declare the actions for search input screen buttons
     */
    setSwiftSearchInputActions:function(){
      var scope = this;
      scope.view.btnGetDetails.onClick = scope.swiftSearchInputValidation;
      scope.view.imgSwiftBICSearchBack.onTouchEnd= scope.goBack;
      scope.view.txtSwiftBICSearchValue1.onTextChange = function(){
        var dataJSON = {
          "txtSwiftBICSearchValue1": scope.view.txtSwiftBICSearchValue1.text
        }; 
        var maxLength = scope.maxFillValidate(dataJSON);
        var minLength = scope.maxFillValidate(dataJSON);
        if(Object.keys(maxLength).length === 0 && maxLength.constructor === Object){
          scope.enableButton("btnGetDetails");
        }
        else{
          scope.disableButton("btnGetDetails");
        }
        if(Object.keys(minLength).length === 0 && minLength.constructor === Object){
          scope.enableButton("btnGetDetails");
        }
        else{
          scope.disableButton("btnGetDetails");
        }
      };
      scope.view.txtSwiftBICSearchValue2.onTextChange = function(){
        var dataJSON = {
          "txtSwiftBICSearchValue2": scope.view.txtSwiftBICSearchValue2.text
        }; 
        var maxLength = scope.maxFillValidate(dataJSON);
        var minLength = scope.maxFillValidate(dataJSON);
        if(Object.keys(maxLength).length === 0 && maxLength.constructor === Object){
          scope.enableButton("btnGetDetails");
        }
        else{
          scope.disableButton("btnGetDetails");
        }
        if(Object.keys(minLength).length === 0 && minLength.constructor === Object){
          scope.enableButton("btnGetDetails");
        }
        else{
          scope.disableButton("btnGetDetails");
        }
      };
      scope.view.txtSwiftBICSearchValue3.onTextChange = function(){
        var dataJSON = {
          "txtSwiftBICSearchValue3": scope.view.txtSwiftBICSearchValue3.text
        }; 
        var maxLength = scope.maxFillValidate(dataJSON);
        var minLength = scope.maxFillValidate(dataJSON);
        if(Object.keys(maxLength).length === 0 && maxLength.constructor === Object){
          scope.enableButton("btnGetDetails");
        }
        else{
          scope.disableButton("btnGetDetails");
        }
        if(Object.keys(minLength).length === 0 && minLength.constructor === Object){
          scope.enableButton("btnGetDetails");
        }
        else{
          scope.disableButton("btnGetDetails");
        }
      };
      scope.view.txtSwiftBICSearchValue4.onTextChange = function(){
        var dataJSON = {
          "txtSwiftBICSearchValue4": scope.view.txtSwiftBICSearchValue4.text
        }; 
        var maxLength = scope.maxFillValidate(dataJSON);
        var minLength = scope.maxFillValidate(dataJSON);
        if(Object.keys(maxLength).length === 0 && maxLength.constructor === Object){
          scope.enableButton("btnGetDetails");
        }
        else{
          scope.disableButton("btnGetDetails");
        }
        if(Object.keys(minLength).length === 0 && minLength.constructor === Object){
          scope.enableButton("btnGetDetails");
        }
        else{
          scope.disableButton("btnGetDetails");
        }
      };
    },

    /**
     * Component resetRequiredCodeErrors
     * Reponsible to reset skin fot textbox
     */
    resetSwiftInputCodeErrors:function(){
      try{
        this.view.txtSwiftBICSearchValue1.skin = this._gsknTextBoxNormal;
        this.view.txtSwiftBICSearchValue2.skin = this._gsknTextBoxNormal;
        this.view.txtSwiftBICSearchValue3.skin = this._gsknTextBoxNormal;
        this.view.txtSwiftBICSearchValue4.skin = this._gsknTextBoxNormal;
        this.view.lblSwiftBICInputError.setVisibility(false);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in resetTextBoxesSkins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        this.onError(errObj);
      }
    },
    /**
     * Component onSwiftGetDetails
     * To set the values to inputpool on click of get details
     */
    onSwiftGetDetails:function(){
      try {
        var scope = this;
        if(!kony.sdk.isNullOrUndefined(scope.view.txtSwiftBICSearchValue1.text)) {
          this.inputPool[this.getFieldValue(this._sbssTextbox1,"inputPoolKey")]=scope.view.txtSwiftBICSearchValue1.text;
        }else{
          this.inputPool[this.getFieldValue(this._sbssTextbox1,"inputPoolKey")]="";
        }
        if(!kony.sdk.isNullOrUndefined(scope.view.txtSwiftBICSearchValue2.text)) {
          this.inputPool[this.getFieldValue(this._sbssTextbox2,"inputPoolKey")]=scope.view.txtSwiftBICSearchValue2.text;
        }else{
          this.inputPool[this.getFieldValue(this._sbssTextbox2,"inputPoolKey")]="";
        }
        if(!kony.sdk.isNullOrUndefined(scope.view.txtSwiftBICSearchValue3.text)) {
          this.inputPool[this.getFieldValue(this._sbssTextbox3,"inputPoolKey")]=scope.view.txtSwiftBICSearchValue3.text;
        }else{
          this.inputPool[this.getFieldValue(this._sbssTextbox3,"inputPoolKey")]="";
        }
        if(!kony.sdk.isNullOrUndefined(scope.view.txtSwiftBICSearchValue4.text)) {
          this.inputPool[this.getFieldValue(this._sbssTextbox4,"inputPoolKey")]=scope.view.txtSwiftBICSearchValue4.text;
        }else{
          this.inputPool[this.getFieldValue(this._sbssTextbox4,"inputPoolKey")]="";
        }
        scope.navigateTo("flxSwiftBICSearchList","flxSwiftBICSearchTop",this.getFieldValue(this._sbssSectionHeader));
        scope.setSwiftBICSearchResult();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onSwiftGetDetails method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }      

    },

    /**     
	 * Component swiftSearchInputValidation
     * To show the error messages for swift input fields
     */
    swiftSearchInputValidation:function(){
      var scope = this;
      var dataJSON = {
        "txtSwiftBICSearchValue1": scope.view.txtSwiftBICSearchValue1.text,
        "txtSwiftBICSearchValue2": scope.view.txtSwiftBICSearchValue2.text,
        "txtSwiftBICSearchValue3": scope.view.txtSwiftBICSearchValue3.text,
        "txtSwiftBICSearchValue4": scope.view.txtSwiftBICSearchValue4.text
      }; 
      var dataValidator = scope.performDataValidation(dataJSON);
      if(Object.keys(dataValidator).length === 0 && dataValidator.constructor === Object){
        scope.resetSwiftInputCodeErrors();    
        scope.onSwiftGetDetails();
      }
      else{
        scope.setSwiftInputErrors(dataValidator);  
      }
    },

    /**
     * @api : setSwiftInputErrors
     * To show the error input field in swift screen
     * @return : NA
     */
    setSwiftInputErrors: function(dvfError) {
      this.resetSwiftInputCodeErrors();
      for(var iterator in dvfError){
        if("txtSwiftBICSearchValue1" == iterator){
          this.view.txtSwiftBICSearchValue1.skin = this._gsknTextBoxError;
          this.view.txtSwiftBICSearchValue1.focusSkin = this._gsknTextBoxError;
          this.view.lblSwiftBICInputError.text = "Please enter a valid bank name";
        }
        if("txtSwiftBICSearchValue2" == iterator){
          this.view.txtSwiftBICSearchValue2.skin = this._gsknTextBoxError;
          this.view.txtSwiftBICSearchValue2.focusSkin = this._gsknTextBoxError;
          this.view.lblSwiftBICInputError.text = "Please enter a valid branch name";
        }
        if("txtSwiftBICSearchValue3" == iterator){
          this.view.txtSwiftBICSearchValue3.skin = this._gsknTextBoxError;
          this.view.txtSwiftBICSearchValue3.focusSkin = this._gsknTextBoxError;
          this.view.lblSwiftBICInputError.text = "Please enter a valid city";
        }
        if("txtSwiftBICSearchValue4" == iterator){
          this.view.txtSwiftBICSearchValue4.skin = this._gsknTextBoxError;
          this.view.txtSwiftBICSearchValue4.focusSkin = this._gsknTextBoxError;
          this.view.lblSwiftBICInputError.text = "Please enter a valid country";
        }
      }      																   
      this.view.lblSwiftBICInputError.setVisibility(true);	
      this.disableButton("btnGetDetails");
    },

    /**
     * Component setSwiftBICSearchResult
     * To call funtions of set default text, skin and actions of swift search result screen
     */
    setSwiftBICSearchResult:function(){
      this.setSwiftBICSearchResultDefaultText();
      this.setSwiftBICSearchResultSkins();
      this.setSwiftSearchResultAction();
      this.getSwiftResult();
    },

    /**
     * Component setSwiftBICSearchResultDefaultText
     * To set default text of swift search result screen
     */
    setSwiftBICSearchResultDefaultText:function(){
      if(!this.isEmptyNullUndefined(this.getFieldValue(this._sbssSectionHeader))){
        this.view.lblSwiftBICSearchListHeader.text = this.getFieldValue(this._sbssSectionHeader);
        this.view.lblSwiftBICSearchListHeader.setVisibility(true);
      }else{
        this.view.lblSwiftBICSearchListHeader.setVisibility(false);
      }

      if(!this.isEmptyNullUndefined(this.getFieldValue(this._resultScreenSubHeader))){
        this.view.lblSwiftBICSearchListDescription.text = this.getFieldValue(this._resultScreenSubHeader);
        this.view.flxSwiftBICSearchListDescription.setVisibility(true);
      }else{
        this.view.flxSwiftBICSearchListDescription.setVisibility(false);
      }

      if(!this.isEmptyNullUndefined(this.getFieldValue(this._sbssCTA2))){
        this.view.btnUseSwift.text = this.getFieldValue(this._sbssCTA2,"text");
        this.view.btnUseSwift.setVisibility(true);
      }else{
        this.view.btnUseSwift.setVisibility(false);
      }

      if(!this.isEmptyNullUndefined(this.getFieldValue(this._sbssCTA3))){
        this.view.btnSearchAgain.text = this.getFieldValue(this._sbssCTA3,"text");
        this.view.btnSearchAgain.setVisibility(true);
      }else{
        this.view.btnSearchAgain.setVisibility(false);
      }

    },

    /**
     * Component setSwiftBICSearchResultSkins
     * To set skins of swift search result screen
     */
    setSwiftBICSearchResultSkins:function(){
      var scope  =  this;
      scope.view.flxSwiftBICSearchListHeader.skin = scope.getFieldValue(scope._gsknHeaderFlex);
      scope.view.btnSwiftBICSearchListCancel.skin = scope.getFieldValue(scope._gsknCancelBtn);
      scope.view.lblSwiftBICSearchListHeader.skin = scope.getFieldValue(scope._gsknHeaderLbl);
      scope.view.flxSwiftBICSearchListDescription.skin = scope.getFieldValue(scope._gsknSubHeaderFlex);
      scope.view.lblSwiftBICSearchListDescription.skin = scope.getFieldValue(scope._gsknSubHeaderLabel);
      scope.view.flxSwiftBICSearchListSeparator.skin = scope.getFieldValue(scope._gsknSubHeaderseparator);
      scope.disableButton("btnUseSwift");
      if(scope.getFieldValue(scope._sbssCTA3,"actionType") === "primary"){
        scope.view.btnSearchAgain.skin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
        scope.view.btnSearchAgain.focusSkin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
      }else{
        scope.view.btnSearchAgain.skin = scope.getFieldValue(scope._gsknSecondaryContexualBtn);
        scope.view.btnSearchAgain.focusSkin = scope.getFieldValue(scope._gsknSecondaryContexualBtn);

      }
    },
    /**
     * Component setSwiftSearchResultAction
     * To set actions of swift search result screen
     */
    setSwiftSearchResultAction:function(){
      this.view.btnSearchAgain.onClick = this.researchSwiftCode;
      this.view.imgSwiftBICSearchListBack.onTouchEnd = this.goBack;
    },

    /**
     * Component getSwiftResult
     * Reponsible to call the DAO method for invoking service api.
     */
    getSwiftResult:function(){
      var dataJson="";
      if(typeof(this._sbssCriteria) ==="string"){
        dataJson =JSON.parse(this._sbssCriteria);
      }else{
        dataJson = this._sbssCriteria;
      }
      if(!this._sbssEnableCache){
        for(var key in dataJson){
          if(dataJson[key]){
            dataJson[key] = this.getFieldValue(dataJson[key]);
          }
          else{
            dataJson[key] = "";
          }
        }
        this.UnifiedTransferDAO.invokeService(this._sbssSwiftLookupService, this._sbssSwiftLookupObject, this._sbssSwiftLookupOperation, dataJson, this._sbssSearchResultsIdentifier, this.setSwiftSearchResultData, this.failureValidation);
      }
      if(this._sbssEnableCache){
        if(this.getswift === "Yes"){
          for(var key in dataJson){
            dataJson[key] = "";
          }
          this.UnifiedTransferDAO.invokeService(this._sbssSwiftLookupService, this._sbssSwiftLookupObject, this._sbssSwiftLookupOperation, dataJson, this._sbssSearchResultsIdentifier, this.setSwiftCacheData, this.failureValidation);
        }else if(this.getswift === "No"){
          var searchResult=[];
          for(var key in dataJson){
            if(dataJson[key]){
              dataJson[key] = this.getFieldValue(dataJson[key]);
            }
            else{
              dataJson[key] = "";
            }
          }
          searchResult[this._sbssResponseObj] =  this.getSearchData(this.swiftCodeData[this._sbssResponseObj],dataJson,this.getFieldValue(this._resultItemLabel2));
          this.setSwiftSearchResultData(searchResult);
        }
      }
    },

    /**
     * Component setSwiftCacheData
     * To store the cache data for reuse.
     */
    setSwiftCacheData:function(swiftResponse){
      this.swiftCodeData = swiftResponse;
      this.getswift= "No";
    },

    /**     
	 * Component setSwiftSearchResultData
     * To generate the JSONpath for service response
     * backendResponse{JSONObject} - response received from the backend
     * unicode{string}             - unique code to identify the service response in case of multiple service calls.
     */

    setSwiftSearchResultData:function(swiftResponse){
      this.lastSelectedRow = "";
      this.disableButton("btnUseSwift");
      if(!this.isEmptyNullUndefined(swiftResponse[this._sbssResponseObj]) && swiftResponse[this._sbssResponseObj].length != 0){
        this.view.flxSwiftBICSearchListScroll.setVisibility(true);
        var swiftCodes = swiftResponse[this._sbssResponseObj];
        var swiftCodeSeg= [];
        for(var i = 0; i < swiftCodes.length;i++){
          if(!this.isEmptyNullUndefined(swiftCodes[i][this.getFieldValue(this._resultItemLabel2)])){
            if(!this.isEmptyNullUndefined(this.getFieldValue(this._resultItemLabel1))){
              swiftCodes[i]["lblSwiftBICSearchListName"]={
                "text":this.getFieldValue(this._resultItemLabel1),
                "skin":this.getFieldValue(this._sbssResultItemLabel1Skin),
                "isVisible":true
              };
            }else{
              swiftCodes[i]["lblSwiftBICSearchListName"]={
                "isVisible":false
              };
            }

            if(!this.isEmptyNullUndefined(this.getFieldValue(this._resultItemLabel2))){
              swiftCodes[i]["lblSwiftBICSearchListHeader"]={
                "text":swiftCodes[i][this.getFieldValue(this._resultItemLabel2)],
                "skin":this.getFieldValue(this._sbssResultItemLabel2Skin),
                "isVisible":true
              };
            }else{
              swiftCodes[i]["lblSwiftBICSearchListHeader"]={
                "isVisible":false
              };
            }
            if(!this.isEmptyNullUndefined(this.getFieldValue(this._resultItemLabel3))){
              var swiftDescDetails = "";
              var descContract = this.getFieldValue(this._resultItemLabel3).split("+");
              for(var j=0;j<descContract.length;j++){
                if(!this.isEmptyNullUndefined(swiftCodes[i][descContract[j]])){
                  swiftDescDetails = swiftDescDetails+swiftCodes[i][descContract[j]]; 
                }else{
                  swiftDescDetails = swiftDescDetails+descContract[j];
                }
              }
              swiftCodes[i]["lblBICSwiftBICSearchListDescription"]={
                "text":swiftDescDetails,
                "skin":this.getFieldValue(this._sbssResultItemLabel3Skin),
                "isVisible":true
              };
            }else{
              swiftCodes[i]["lblBICSwiftBICSearchListDescription"]={
                "isVisible":false
              };
            }
            swiftCodes[i]["flxSwiftBICSearchOptions"]={
              "skin":this.getFieldValue(this._sbssResultItemFlexSkin)
            };

            swiftCodes[i]["imgSwiftBICSearchListTick"]={
              "src":this.getFieldValue(this._sbssSelectedTickImg),
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
    },

    /**     
	 * Component confirmSwiftCode
     * To set the swift/bic code to the text box
     */
    confirmSwiftCode:function(selectedSwift){
      var scope =this;
      if(scope.getFieldValue(scope._beneficiaryTypes) === "DomesticBank"){
        this.inputPool[scope.getFieldValue(scope._resultItemLabel2)]=selectedSwift[scope.getFieldValue(scope._resultItemLabel2)];
        var descContract = this.getFieldValue(this._resultItemLabel3).split("+");
        for(var j=0;j<descContract.length;j++){
          if(!this.isEmptyNullUndefined(selectedSwift[descContract[j]])){
            this.inputPool[descContract[j]]=selectedSwift[descContract[j]]; 
          }
        }
        this.setRequiredCodeData();
        this.enableButton("btnRequiredCodeContinue");
        this.navigateTo("flxRequiredCode","flxRequiredCodeTop",scope.getFieldValue(scope._rcsHdr));
      }
      if(scope.getFieldValue(scope._beneficiaryTypes) === "InternationalBank"){
        this.inputPool[scope.getFieldValue(scope._resultItemLabel2)]=selectedSwift[scope.getFieldValue(scope._resultItemLabel2)];
        var descContract = this.getFieldValue(this._resultItemLabel3).split("+");
        for(var j=0;j<descContract.length;j++){
          if(!this.isEmptyNullUndefined(selectedSwift[descContract[j]])){
            this.inputPool[descContract[j]]=selectedSwift[descContract[j]]; 
          }
        }
        this.setRequiredCodeData();
        this.enableButton("btnRequiredCodeContinue");
        scope.navigateTo("flxRequiredCode","flxRequiredCodeTop",scope.getFieldValue(scope._rcsHdr));
      }
    },

    /**     
	 * Component researchSwiftCode
     * To go back to search input page
     */
    researchSwiftCode:function(){
      this.navigateTo("flxSwiftBICSearch","flxSwiftBICSearchHeaderTop",this.getFieldValue(this._sbssSectionHeader));
    },

    /**     
	 * Component selectSwiftCode
     * To select the swift/bic code highlight and use the swift/bic code
     */
    selectSwiftCode:function(swiftCodes){
      var rowIndex = this.view.segSwiftBICSearchList.selectedRowIndex[1];
      if(rowIndex !== this.lastSelectedRow){
        swiftCodes[rowIndex].flxSwiftBICSearchOptions.skin = this.getFieldValue(this._sbssResultItemFlexSelectSkin);
        swiftCodes[rowIndex].imgSwiftBICSearchListTick.isVisible = true;
        this.view.segSwiftBICSearchList.setDataAt(swiftCodes[rowIndex], rowIndex);
        this.view.flxSwiftBICSearchList.forceLayout();
        if(this.lastSelectedRow === "" || this.lastSelectedRow === null || this.lastSelectedRow.length === 0){
          this.lastSelectedRow =rowIndex;
        }else{
          var lastSwift = this.lastSelectedRow;
          swiftCodes[lastSwift].flxSwiftBICSearchOptions.skin = this.getFieldValue(this._sbssResultItemFlexSkin);
          swiftCodes[lastSwift].imgSwiftBICSearchListTick.isVisible = false;
          this.view.segSwiftBICSearchList.setDataAt(swiftCodes[lastSwift], lastSwift);
          this.lastSelectedRow =rowIndex;
        }
        //this.view.btnUseSwift.skin = this.getFieldValue(this._sknEnableContexualBtn);
        //this.view.btnUseSwift.setEnabled(true);
        this.enableButton("btnUseSwift");
        this.view.flxSwiftBICSearchButtons.forceLayout();
        this.view.btnUseSwift.onClick = this.confirmSwiftCode.bind(this,swiftCodes[rowIndex]);
      }
    },

    /**     
	 * Component onRequireCodeContinue
     * To set swift/bic and go to next page
     */
    onRequireCodeContinue:function(){
      var scope = this;
      if(!kony.sdk.isNullOrUndefined(this.view.txtRequiredBICSwift.text)) {
        this.inputPool[this.getFieldValue(this._rcsTextbox1,"inputPoolKey")]=this.view.txtRequiredBICSwift.text;
      }
      if(!kony.sdk.isNullOrUndefined(this.view.txtRequiredClearingCode1.text)) {
        this.inputPool[this.getFieldValue(this._rcsTextbox2,"inputPoolKey")]=this.view.txtRequiredClearingCode1.text;
      }
      if(!kony.sdk.isNullOrUndefined(this.view.txtRequiredClearingCode2.text)) {
        this.inputPool[this.getFieldValue(this._rcsTextbox3,"inputPoolKey")]=this.view.txtRequiredClearingCode2.text;
      }
      if(scope.isEmptyNullUndefined(scope.inputPool["bankName"])) { 
        scope.inputPool["bankName"] =  scope.getFieldValue(scope._rcsTextbox1,"defaultBankName");
      }
      scope.setLinkPayee("ADD");
      scope.navigateTo("flxLinkPayee", "flxLinkPayeeTop", scope.getFieldValue(scope._linkPayeeSectionTitle));
    },

    /**
   ** Component getSearchData
   *  Filter by json search value.
   *  @param {json} serviceData ,searchValue.
   *  return searchData, Search results.
   */
    getSearchData: function(serviceData, searchValue,uniParam) {
      try {
        var scope = this;  
        var emptyCount = 0;
        var searchData = [];
        for(var key in searchValue){
          searchValue[key] = searchValue[key].toLocaleLowerCase();
          if(!scope.isEmptyNullUndefined(serviceData) && !scope.isEmptyNullUndefined(searchValue[key]))
          {
            for (var i = 0; i < serviceData.length; i++) 
            {
              if(serviceData[i][key] !== undefined){
                if(serviceData[i][key].toString().toLocaleLowerCase().includes(searchValue[key]))
                {
                  var existingCount = 0;
                  for(var j=0;j<searchData.length;j++){
                    if(serviceData[i][uniParam] === searchData[j][uniParam]){
                      existingCount++;
                    }
                  }
                  if(!existingCount > 0){
                    searchData.push(serviceData[i]);
                  }
                }
              }else{
                delete searchValue[key];
              }
            }
          }
          if(searchValue[key] === ""){
            emptyCount++;
          }
        }
        if(Object.keys(searchValue).length === emptyCount){
          searchData = serviceData;
        }
        return searchData; 
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in getSearchData method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },


    /**
     * Component setPayeeName
     * Declaration of all for set Payee name
     */
    setPayeeName: function(selectedFlow){
      try {
        var scope = this;

        if(scope._beneficiaryTypes=="DomesticBank"|| scope._beneficiaryTypes=="InternationalBank" ||scope._beneficiaryTypes=="PayAPerson")
        {
          if(selectedFlow!="EDIT")
          {
            scope.setPayeeNameDefaultText();
            scope.setPayeeNameSkins();
            scope.setPayeeNameActions(selectedFlow);
          }
          if(scope.payeeNameTextChange==true)
          {
             scope.setPayeeNameActions(selectedFlow);
             scope.view.txtPayeeName.text = scope.getFieldValue(scope.pynsTextbox, "value");            
            scope.setPayeeNameDataTextChange();
          }
        }
        else if(scope._beneficiaryTypes=="SameBank" && scope._pynsVisibility==true)
        {
          if(selectedFlow!="EDIT")
          {
          scope.setPayeeNameDefaultText();
          scope.setPayeeNameSkins();
          scope.setPayeeNameActions(selectedFlow);
          }
          if(scope.payeeNameTextChange==true)
          {
             scope.setPayeeNameActions(selectedFlow);
             scope.view.txtPayeeName.text = scope.getFieldValue(scope.pynsTextbox, "value");                    
            scope.setPayeeNameDataTextChange();
          }
        }
        else if(scope._beneficiaryTypes=="SameBank" && scope._pynsVisibility==false)
        {          
          scope.navigateTo("flxAccountNumber");
          scope.setAccountNumber("ADD");
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPayeeName method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setPayeeNameDefaultText
     * set default text for set Payee name
     */
    setPayeeNameDefaultText: function(){
      try {
        var scope = this;
        scope.view.btnPayeeNameCancel.text = scope.getFieldValue(scope._cancelButton);
        scope.view.btnPayeeNameCancel.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)) ? true : false;
        scope.view.lblPynsSectionHeader.text = scope.getFieldValue(scope._pynsSectionHeader);
        scope.view.lblPynsSubHeader.text = scope.getFieldValue(scope._pynsSubHeader);       
        scope.view.txtPayeeName.restrictCharactersSet = scope.getFieldValue(scope._pynsTextbox,"restrictChar");
        scope.view.txtPayeeName.placeholder = scope.getFieldValue(scope._pynsTextbox, "placeHolder");
        scope.view.txtPayeeName.maxTextLength = parseInt(scope.getFieldValue(scope._maxFillMapping)[scope._jsonObjName]["txtBoxPayeeName"]);
        scope.view.btnPayeeNameContinue.text = scope.getFieldValue(scope._pynsCTAButton, "text");
        scope.view.lblPayeeNameErrMsg.setVisibility(false);
        scope.view.txtPayeeName.text = "";
        scope.disableButton("btnPayeeNameContinue");
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
     * Component setPayeeNameSkins
     * set skins for set Payee name
     */
    setPayeeNameSkins: function()
    {
      try {
        var scope = this;        
        scope.view.flxPayeeName.skin = scope.getFieldValue(scope._gsknContentFlex);
        scope.view.flxPayeeNameMain.skin = scope.getFieldValue(scope._gsknContentFlex);
        scope.view.flxPayeeNameHeader.skin = scope.getFieldValue(scope._gsknHeaderFlex);		
        scope.view.flxPayeeNameTop.skin = scope.getFieldValue(scope._gsknHeaderFlex);		
        scope.view.imgPayeesNameBack.src = scope.getFieldValue(scope._iconBack);		
        scope.view.btnPayeeNameCancel.skin = scope.getFieldValue(scope._gsknCancelBtn);		
        scope.view.lblPynsSectionHeader.skin = scope.getFieldValue(scope._gsknHeaderLbl);		 
        scope.view.flxPayeeNameSubHeader.skin = scope.getFieldValue(scope._gsknSubHeaderFlex);		
        scope.view.lblPynsSubHeader.skin = scope.getFieldValue(scope._gsknSubHeaderLabel);		
        scope.view.flxPayeenameSeparator.skin = scope.getFieldValue(scope._gsknSubHeaderseparator);		 
        scope.view.flxPayeeNameMainContainer.skin = scope.getFieldValue(scope._gsknContentFlex);		 
        scope.view.txtPayeeName.skin = scope.getFieldValue(scope._gsknTextBoxNormal);
        scope.view.txtPayeeName.focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus);       
        scope.view.btnPayeeNameContinue.skin = scope.getFieldValue(scope._gsknDisabledContexualBtn);
        scope.disableButton("btnPayeeNameContinue");
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPayeeNameSkins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setPayeeNameActions
     * set actions for set Payee name
     */
    setPayeeNameActions: function(flow)
    {
      try {
        var scope = this;
        scope.view.btnPayeeNameContinue.onClick = scope.onPayeeNameContinue.bind(this,flow);
        scope.view.txtPayeeName.onTextChange = function(){
          scope.payeeNameTextChange=true;
          scope.setPayeeNameDataTextChange();
        };
        scope.view.flxPayeeNameBack.onTouchStart = scope.onBackButtonClick;
        scope.view.btnPayeeNameCancel.onClick = scope.onBackButtonClick;       
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPayeeNameActions method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setPayeeNameDataTextChange
     * Continue button Validation based on payee name limit.
     */
    setPayeeNameDataTextChange: function() {
      try {
        var scope = this;
        if( scope.payeeNameTextChange==true){
          scope.view.txtPayeeName.setFocus(true);
          var payeeNameEntered={
            "txtBoxPayeeName":scope.view.txtPayeeName.text
          };
          var minlength = scope.minFillValidate(payeeNameEntered);
          var maxlength = scope.maxFillValidate(payeeNameEntered);
          if(Object.keys(minlength).length === 0 && minlength.constructor === Object && Object.keys(maxlength).length === 0 && maxlength.constructor === Object){
            this.setPayeeNameResetTextBoxesSkins();
            this.view.lblPayeeNameErrMsg.setVisibility(false);
          }
          else{
            this.setPayeeNameValidationErrors(minlength);
          } 
          var payeeTextInput=scope.performDataValidation(payeeNameEntered);
          if(Object.keys(payeeTextInput).length === 0 && payeeTextInput.constructor === Object){
            this.setPayeeNameResetTextBoxesSkins(); 
            scope.enableButton("btnPayeeNameContinue");
          }
          else{
            scope.disableButton("btnPayeeNameContinue");
            this.view.txtPayeeName.skin = this._gsknTextBoxError;
            this.setPayeeNameValidationErrors(payeeTextInput);
          }    
          var  title = scope.view.txtPayeeName.text;
          if(Object.keys(minlength).length === 0 && minlength.constructor === Object &&
             Object.keys(maxlength).length === 0 && maxlength.constructor === Object &&
             Object.keys(payeeTextInput).length === 0 && payeeTextInput.constructor === Object){
            scope.enableButton("btnPayeeNameContinue");
          } else {
            scope.disableButton("btnPayeeNameContinue");
          }
        }
        scope.view.forceLayout();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPayeeNameDataTextChange method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component onPayeeNameContinue
     * Navigate to next form based on transferType.
     */
    onPayeeNameContinue: function(flow) {
      try {
        var scope = this;
        scope.view.txtPayeeName.skin = scope.getFieldValue(scope._gsknTextBoxNormal);
        if(!kony.sdk.isNullOrUndefined(scope.view.txtPayeeName.text) && scope.view.txtPayeeName.text !== "") {
          this.inputPool[scope.getFieldValue(scope._pynsTextbox,"inputPoolKey")]=scope.view.txtPayeeName.text;
        }
        if(flow==="ADD"){
          if(!(scope._beneficiaryTypes === "PayAPerson")){
            scope.navigateTo("flxAccountNumber", "flxAccountNumberTop", scope.getFieldValue(scope._accSectionHeader));
            scope.setAccountNumber("ADD");
          }else{
            scope.setContactType("ADD");
            scope.navigateTo("flxContactType", "flxContactTypeTop", scope.getFieldValue(scope._ctsSectionHeader));         
          }
       }
        else
        {
          scope.setVerifyDetails();
          scope.navigateTo("flxVerifyDetails", "flxVfsHeaderTop", scope.getFieldValue(scope._vfsSectionTitle));
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onPayeeNameContinue method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component minFillValidate
     * Validation for minimum length
     */
    minFillValidate: function(dataJson) {
      try{
        var scope=this;
        var object = scope.getFieldValue(scope._jsonObjName);
        var minFillconfig = scope.getFieldValue(scope._minFillMapping);      
        var tempJson = {};
        for(var key in dataJson){
          if(dataJson[key]){
            tempJson[key] = dataJson[key];
          }
          else{
            tempJson[key] = "";
          }
        }
        var dataValidator = scope.dataValidationHandler.validateMinFill
        (tempJson,object,minFillconfig);        
        return dataValidator;      
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in minFillValidate method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component maxFillValidate
     * Validation for minimum length
     */
    maxFillValidate: function(dataJson) {
      try{
        var scope=this;
        var object = scope.getFieldValue(scope._jsonObjName);
        var maxFillconfig = scope.getFieldValue(scope._maxFillMapping);      
        var tempJson = {};
        for(var key in dataJson){
          if(dataJson[key]){
            tempJson[key] = dataJson[key];
          }
          else{
            tempJson[key] = "";
          }
        }
        var dataValidator = scope.dataValidationHandler.validateMaxFill
        (tempJson,object,maxFillconfig);  
        return dataValidator;      
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in maxFillValidate method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component performDataValidation
     * Validation forinput mode
     */
    performDataValidation: function(dataJSON) {
      try{
        var scope=this;
        var object = scope.getFieldValue(scope._jsonObjName);
        var fieldMapper = scope.getFieldValue(scope._dvfConfig);     
        var dataValidator = this.dataValidationHandler.validateData(dataJSON, object, fieldMapper);     
        return dataValidator;
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in performDataValidation method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setPayeeNameResetTextBoxesSkins
     * Reponsible to reset skin fot textbox
     */
    setPayeeNameResetTextBoxesSkins: function(){
      try{
        var scope=this;
        scope.view.txtPayeeName.focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus); 
        this.view.txtPayeeName.skin = this._gsknTextBoxNormal;
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPayeeNameResetTextBoxesSkins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * @api : setPayeeNameValidationErrors
     * displays errors on validation of the fields in add beneficiary screen.
     * @return : NA
     */
    setPayeeNameValidationErrors: function(response) {
      try{
        var scope=this;       
        if( scope.payeeNameTextChange==true)
        {
          this.setPayeeNameInvokedvfFieldErrorParser(response);    
        }     
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPayeeNameValidationErrors method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setPayeeNameInvokedvfFieldErrorParser
     * Reponsible to set error message for payee name
     */
    setPayeeNameInvokedvfFieldErrorParser : function(dvfError){
      try {
        var scope = this;       
        for(var iterator in dvfError){
          if("txtBoxPayeeName" == iterator){
            errorMsg=dvfError[iterator];             
            scope.view.txtPayeeName.focusSkin = scope._gsknTextBoxError; 
            this.view.txtPayeeName.skin = scope._gsknTextBoxError;
          }           
        }         
        scope.view.lblPayeeNameErrMsg.text = scope.getFieldValue(scope._pynsErrorMessage);
        scope.view.lblPayeeNameErrMsg.setVisibility(true);       
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPayeeNameInvokedvfFieldErrorParser method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setLinkPayee
     * Declaration of all for set Payee name
     */
    setLinkPayee: function(flow){
      try {
        var scope = this;      

        scope.setLinkPayeeDefaultText(flow);
        scope.setLinkPayeeSkins();
        scope.setLinkPayeeActions();    

      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setLinkPayee method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setPayeeNameDefaultText
     * set default text for set Payee name
     */
    setLinkPayeeDefaultText: function(flow){
      try {
        var scope = this;   
        scope.view.btnLinkPayeeCancel.text = scope.getFieldValue(scope._cancelButton);		
        scope.view.lblLinkPayeeHeader.text = scope.getFieldValue(scope._linkPayeeSectionTitle);
        if(flow=="EDIT")
        {
          scope.view.LinkPayeeCustomer.setContext(this.inputPool["cifId"]);

        }
        else
        {
          scope.view.LinkPayeeCustomer.setContext();
        }

        scope.view.forceLayout();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setLinkPayeeDefaultText method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setLinkPayeeSkins
     * set default skins for Link payee 
     */
    setLinkPayeeSkins: function(){
      try {
        var scope = this;   
        scope.view.flxLinkPayeeMain.skin = scope.getFieldValue(scope._gsknContentFlex);
        scope.view.flxLinkPayeeHeader.skin = scope.getFieldValue(scope._gsknHeaderFlex);		
        scope.view.flxLinkPayeeTop.skin = scope.getFieldValue(scope._gsknHeaderFlex);		
        scope.view.imgLinkPayeeBack.src = scope.getFieldValue(scope._iconBack);		
        scope.view.btnLinkPayeeCancel.skin = scope.getFieldValue(scope._gsknCancelBtn);
        scope.view.lblLinkPayeeHeader.skin = scope.getFieldValue(scope._gsknHeaderLbl);

      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setLinkPayeeSkins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setLinkPayeeSkins
     * set default skins for Link payee 
     */
    setLinkPayeeActions: function(){
      try {
        var scope = this;   
        scope.view.btnLinkPayeeCancel.onClick = scope.onBackButtonClick;  
        scope.view.flxLinkPayeeBack.onClick = scope.goBack;
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setLinkPayeeSkins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
         * Component setLinkPayeeSkins
         * on continue click of Link payee 
         */
    onLinkPayeeContinue: function(selectedData,totalCustomers) {
      var scope = this,contractId,customerValue ,totalCustomerSelectedCount = 0,dataLength = "",cif = [];
      try {
        if(this.isEmptyNullUndefined(totalCustomers))
        {  contractId = Object.keys(selectedData);  
         customerValue = selectedData[contractId];
         cif.push({
           "contractId": contractId[0],
           "coreCustomerId": customerValue
         });
         scope.inputPool["cifId"] = JSON.stringify(cif);
         // totalCustomerSelectedCount=totalCustomerSelectedCount+dataLength;
         //  scope.stack.pop();
         scope.setVerifyDetails();
         scope.navigateTo("flxVerifyDetails", "flxVfsHeaderTop", scope.getFieldValue(scope._vfsSectionTitle));
         scope.stack.splice(scope.stack.length - 2, 1);
         return;
        }
        else if(!this.isEmptyNullUndefined(totalCustomers) && !this.isEmptyNullUndefined(selectedData))
        {
          this.createLinkPayeeCIFData(selectedData,totalCustomers);
          scope.setVerifyDetails();
          scope.navigateTo("flxVerifyDetails", "flxVfsHeaderTop", scope.getFieldValue(scope._vfsSectionTitle));
        }
      } catch (err) {
        var errObj = {
          "errorInfo": "Error in onLinkPayeeContinue method of the component.",
          "errorLevel": "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
         * Component createLinkPayeeCIFData
         * set cif data for Link payee 
         */
    createLinkPayeeCIFData: function(selectedData,totalCustomers) {
      var scope = this;
      try {
        var cif = [];
        var  data, coreCustomerId = "";
        var totalCustomerSelectedCount=0;
        var contractIds = Object.keys(selectedData);
        for (var i = 0; i < contractIds.length; i++) {
          if (!this.isEmptyNullUndefined(selectedData[contractIds[i]])) {
            if (selectedData[contractIds[i]].includes("&&")) {
              data = selectedData[contractIds[i]].split('&&');
            }
            var dataLength = (data.length) - 1;
            var dataLastValue = (data.length) - 2;
            for (var j = 0; j < dataLength; j++) {
              coreCustomerId = coreCustomerId + data[j] + ",";
              if (j == dataLastValue) {
                coreCustomerId = coreCustomerId.slice(0, -1);
              }
            }
            cif.push({
              "contractId": contractIds[i],
              "coreCustomerId": coreCustomerId
            });
          }
          totalCustomerSelectedCount=totalCustomerSelectedCount+dataLength;
        }

        this.inputPool["cifId"] = JSON.stringify(cif);
        this.inputPool["linkedWith"]=totalCustomerSelectedCount+ " of " + totalCustomers +" Customers ID"
      } catch (err) {
        var errObj = {
          "errorInfo": "Error in onLinkPayeeContinue method of the component.",
          "errorLevel": "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setContactType
     * Reponsible to set field properties of ContactType.
     */
    setContactTypeTmp: function() {
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
   ** Component getSearchResult
   *  Filter by search value.
   *  @param {string} segData ,searchValue.
   *  return searchData, Search results.
   */
    getSearchResults: function(segData, searchValue) {
      try {
        var scope = this;  
        var searchData = [];
        searchValue = searchValue.toLocaleLowerCase();
        if(!scope.isEmptyNullUndefined(segData) && !scope.isEmptyNullUndefined(searchValue))
        {
          for (var i = 0; i < segData.length; i++) 
          {
            if(Object.values(segData[i]).toString().toLocaleLowerCase().includes(searchValue))
            {
              searchData.push(segData[i]);
            }
          }
        }
        else
        {
          return ""; 
        }
        return searchData; 
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in getSearchResults method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component setVerifyDetails
     * To bind the events,default field properties for verify Details.
     * flow denotes the edit flow or add flow
     */
    setVerifyDetails: function() {
      try {
        var scope = this;
        scope.setVerifyDetailsDefaultText();
        scope.setVerifyDetailsSkins();
        scope.setVerifyDetailsActions();
        scope.setVerifyDetailsData();
        scope.view.forceLayout();
      }catch(err) {
        var errObj = {
          "errorInfo" : "Error in VerifyDetails method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component setVerifyDetails
     * To bind the default text for verify Details.
     */
    setVerifyDetailsDefaultText : function()
    {
      try{
        var scope = this;
        if(scope._beneficiaryTypes=="SameBank"){scope.inputPool["accountType"] = "Same Bank Account"}
        if(scope._beneficiaryTypes=="DomesticBank"){scope.inputPool["accountType"] = "Domestic Account"}
        if(scope._beneficiaryTypes=="InternationalBank"){scope.inputPool["accountType"] = "International Account"}
        if(scope._beneficiaryTypes=="PayAPerson"){scope.inputPool["accountType"] = "Pay a Person"}
        if(scope.isEmptyNullUndefined(scope._cancelButton))
        {
          scope.view.btnVfsCancel.setVisibility(false);
        }
        if(scope.isEmptyNullUndefined(scope._vfsSectionTitle))
        {
          scope.view.lblVfsHeader.setVisibility(false);
        }
        scope.view.btnVfsCancel.text = scope.getFieldValue(scope._cancelButton);
        scope.view.lblVfsHeader.text = scope.getFieldValue(scope._vfsSectionTitle);
        scope.view.imgVfsBack.src = scope._iconBack;
        scope.view.forceLayout();
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setVerifyDetailsDefaultText method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component setVerifyDetails
     * To bind the default skins for verify Details.
     */
    setVerifyDetailsSkins : function()
    {
      try{
        var scope = this;
        scope.view.flxVfsHeader.skin = scope._gsknHeaderFlex;
        scope.view.btnVfsCancel.skin = scope._gsknCancelBtn;
        scope.view.lblVfsHeader.skin = scope._gsknHeaderLbl;
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setVerifyDetailsSkins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component setVerifyDetails
     * To bind the default Actions for verify Details.
     */
    setVerifyDetailsActions : function()
    {
      try{
        var scope = this;
        if(Object.keys(scope.context).length === 0){
          scope.view.imgVfsBack.onTouchStart = scope.goBack;
        }
        else
        {
          scope.view.imgVfsBack.onTouchStart = scope.onBackButtonClick;
        }
        scope.view.btnVfsCancel.onClick = scope.onBackButtonClick;
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setVerifyDetailsActions method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      } 
    },

    /**     
	 * Component setVerifyDetails
     * To bind the data for verify Details.
     */
    setVerifyDetailsData : function()
    {
      try{
        var scope = this;
        scope.mandatoryInputs = 0;
        scope.mandatoryInputsValue = 0;
        scope.inputPool["swiftCode"] = scope.inputPool["bic"];
        for(var i=1;i<16;i++)
        {
          scope.view["flxField"+i].setVisibility(false);
          var editIcon = scope._vfsIconEdit;
          var fieldi18nLabel = (eval("scope._vfsField"+i+"Lbl"));
          var fieldLabel = scope.getFieldValue(eval("scope._vfsField"+i+"Lbl"));
          var fieldLabelSkin = scope._vfssLabelSkin;
          var fieldValue = scope.getFieldValue(eval("scope._vfsField"+i+"Value"),"value");
          var optionalField = scope.getFieldValue(eval("scope._vfsField"+i+"Value"),"optional");
          if(!scope.isEmptyNullUndefined(fieldLabel))
          {
            scope.view["flxField"+i].setVisibility(true);
            var readOnlyField = scope.getFieldValue(eval("scope._vfsField"+i+"Value"),"readOnly")[scope.inputPool["flowType"]];
            var fieldValueSkin = (readOnlyField === true) ? scope._vfssValueReadonlySkin : scope._vfssValueEditableSkin;
            scope.view["lblField"+i+"Label"].text = fieldLabel;
            scope.view["lblField"+i+"Label"].skin = fieldLabelSkin;
            scope.view["lblField"+i+"Value"].text = fieldValue;
            scope.view["lblField"+i+"Value"].skin = fieldValueSkin;
            scope.view["imgArrow"+i].src = editIcon;
            if(readOnlyField)
            {
              scope.view["imgArrow"+i].setVisibility(false);
              scope.view["lblField"+i+"Value"].right = "20dp";
              if(!scope.isEmptyNullUndefined(fieldValue))
              {
                scope.view["flxField"+i].setVisibility(true);
              }
              else{
               scope.view["flxField"+i].setVisibility(true);
                scope.view["lblField"+i+"Value"].text = "None";
              }
            }
            if(!optionalField && !readOnlyField && !scope.isEmptyNullUndefined(readOnlyField) && !scope.isEmptyNullUndefined(optionalField))
            {
              scope.mandatoryInputs++;
              if(!scope.isEmptyNullUndefined(fieldValue))
              {
                scope.mandatoryInputsValue++;
              }
            }
			scope.view["lblField"+i+"Optional"].setVisibility(false);
            if(optionalField)
            {
              scope.view["lblField"+i+"Optional"].text = scope.getFieldValue("{i.kony.i18n.verifyDetails.optional}");
              scope.view["lblField"+i+"Optional"].skin = fieldLabelSkin;
              scope.view["lblField"+i+"Optional"].setVisibility(true);
              scope.view["flxField"+i].height = "65dp";
              scope.view["lblField"+i+"Optional"].centerY = "60%";
              scope.view["lblField"+i+"Label"].centerY = "35%";
            }

          }
          switch(fieldi18nLabel) 
          {
            case "{i.i18n.verifyDetails.payeeName}:" :
              if(!readOnlyField)
              {
                scope.view["flxField"+i].onClick = function(){
                  scope.setPayeeName("EDIT");
                  scope.navigateTo("flxPayeeName", "flxPayeeNameTop", scope.getFieldValue(scope._pynsSectionHeader));                      
                }
              }
              else
                scope.view["flxField"+i].onClick = function(){}
                break;
            case "{i.kony.i18n.verifyDetails.accountNumber}" :
              if(!readOnlyField)
              {
                scope.view["flxField"+i].onClick = function(){
                  scope.setAccountNumber("EDIT");
                  scope.navigateTo("flxAccountNumber", "flxAccountNumberTop", scope.getFieldValue(scope._accSectionHeader));                         
                }
              }
              else
                scope.view["flxField"+i].onClick = function(){}
                break;
            case "{i.kony.i18n.verifyDetails.bicSwift}" :
              if(!readOnlyField)
              {
                scope.view["flxField"+i].onClick = function(){
                  scope.setRequiredCode();
                  scope.navigateTo("flxRequiredCode","flxRequiredCodeTop",scope.getFieldValue(scope._rcsHdr));
                }
              }
              else
                scope.view["flxField"+i].onClick = function(){}
                break;
            case "{i.kony.i18n.verifyDetails.clearingCode1}" :
              if(!readOnlyField)
              {
                scope.view["flxField"+i].onClick = function(){
                  scope.setRequiredCode();
                  scope.navigateTo("flxRequiredCode","flxRequiredCodeTop",scope.getFieldValue(scope._rcsHdr));
                }
              }
              else
                scope.view["flxField"+i].onClick = function(){}
                break;
            case "{i.kony.i18n.verifyDetails.clearingCode2}" :
              scope.view["flxField"+i].onClick = function(){
                scope.setRequiredCode();
                scope.navigateTo("flxRequiredCode","flxRequiredCodeTop",scope.getFieldValue(scope._rcsHdr));
              }
              break;
            case "{i.i18n.verifyDetails.accountNicknameOptional}" :
              if(!readOnlyField)
              {
                scope.view["flxField"+i].onClick = function(){
                  scope.setPayeeNickname();
                  scope.navigateTo("flxPayeeNickname", "flxNicknameTopContainer", scope.getFieldValue(scope._annSectionHeader));
                }
              }
              else
                scope.view["flxField"+i].onClick = function(){}
                break;
            case "{i.i18n.verifyDetails.phoneNumberOptional}" :
              if(!readOnlyField)
              {
                if(scope._beneficiaryTypes === "PayAPerson"){
                  if(scope.inputPool["contactType"] !== "Phone Number")
                  {
                    scope.view["flxField"+i].setVisibility(false);
                    scope.mandatoryInputs--;
                    scope.view["flxField"+i].onClick = function(){};
                  }
                  else
                  {
                    scope.inputPool["primaryContact"] =  scope.inputPool["phoneNumber"];
                    scope.inputPool["primaryValue"] =  scope.inputPool["phoneNumber"];
                    scope.view["flxField"+i].onClick = function(){
                      scope.setPhoneNumber("EDIT");
                      scope.navigateTo("flxPhoneNumber", "flxPhoneNumberTop", scope.getFieldValue(scope._phnoSectionHeader));
                    }
                  }
                }
                else{
                  scope.view["flxField"+i].onClick = function(){
                    scope.setPhoneNumber();
                    scope.navigateTo("flxPhoneNumber", "flxPhoneNumberTop", scope.getFieldValue(scope._phnoSectionHeader));
                  }
                }
              }
              else
                scope.view["flxField"+i].onClick = function(){}
                break;
            case "{i.i18n.verifyDetails.emailAddressOptional}" :
              if(!readOnlyField)
              {
                if(scope._beneficiaryTypes === "PayAPerson"){
                  if(scope.inputPool["contactType"] !== "Email Address")
                  {
                    scope.view["flxField"+i].setVisibility(false);
                    scope.mandatoryInputs--;
                    scope.view["flxField"+i].onClick = function(){};
                  }
                  else
                  {
                    scope.inputPool["primaryContact"] =  scope.inputPool["emailAddress"];
                    scope.view["flxField"+i].onClick = function(){
                      scope.setEmailAddress("EDIT"); 
                      scope.navigateTo("flxEmailAddress", "flxEmailAddressTop", scope.getFieldValue(scope._easSectionHeader));
                    }
                  }
                }
                else
                {
                  scope.view["flxField"+i].onClick = function(){
                    scope.setEmailAddress(); 
                    scope.navigateTo("flxEmailAddress", "flxEmailAddressTop", scope.getFieldValue(scope._easSectionHeader));
                  }
                }
              }
              else
                scope.view["flxField"+i].onClick = function(){}
                break;
            case "{i.i18n.verifyDetails.linkedWith}:" :
              if(!readOnlyField)
              {
                if(!scope.isEmptyNullUndefined(fieldValue))
                {
                  scope.view["lblField"+i+"Optional"].setVisibility(false);
                  scope.view["lblField"+i+"Label"].centerY = "50%";
                  scope.view["flxField"+i].onClick = function(){
                    scope.setLinkPayee("EDIT");
                    scope.navigateTo("flxLinkPayee", "flxLinkPayeeTop", scope.getFieldValue(scope._linkPayeeSectionTitle));
                  }
                }
                else
                {
                  scope.view["flxField"+i].setVisibility(false);
                }
              }
              else
                scope.view["flxField"+i].onClick = function(){}
                break;
            case "{i.i18n.unifiedBeneficiary.nationalID}:" :
              if(!readOnlyField)
              {
                if(scope._beneficiaryTypes === "PayAPerson"){
                  if(scope.inputPool["contactType"] !== "National ID")
                  {
                    scope.view["flxField"+i].setVisibility(false);
                    scope.mandatoryInputs--;
                    scope.view["flxField"+i].onClick = function(){};
                  }
                  else
                  {
                    scope.inputPool["primaryContact"] =  scope.inputPool["nationalID"];
                    scope.inputPool["primaryValue"] =  scope.inputPool["nationalID"];
                    scope.view["flxField"+i].onClick = function(){
                      scope.setNationalID("EDIT");
                      scope.navigateTo("flxNationalID", "flxNationalIDTop", scope.getFieldValue(scope._nisSectionHeader));
                    } 
                  }
                }
                else
                {
                  scope.view["flxField"+i].onClick = function(){
                    scope.setNationalID("EDIT");
                    scope.navigateTo("flxNationalID", "flxNationalIDTop", scope.getFieldValue(scope._nisSectionHeader));
                  }
                }
              }
              else
                scope.view["flxField"+i].onClick = function(){}
                break;
          }
        }
        var addressDetails = "";
        scope.view.flxAddress.setVisibility(false);
        if(!scope.isEmptyNullUndefined(scope._vfsPayeeAddLbl) && Object.keys(scope._vfsPayeeAddLbl).length>0)
        {
          scope.view.flxAddress.setVisibility(true);
          
          var optionalAddress = scope.getFieldValue(scope._vfsPayeeAddLbl , "optional");
          var addressLabel = scope.getFieldValue(scope._vfsPayeeAddLbl , "text");
          scope.view.lblAddressDetails.setVisibility(false);
          for(var j=1;j<7;j++)
          {
            var fieldAddress = scope.getFieldValue(eval("scope._vfsField"+j+"Address"));
            if(!scope.isEmptyNullUndefined(fieldAddress)){
              addressDetails = addressDetails + fieldAddress + ', ';
            }
          }
          scope.view.flxAddress.onClick = function(){
            scope.setAddAddress();
            scope.navigateTo("flxAddAddress", "flxAddAddressHeaderTop", scope.getFieldValue(scope._adsSectionHeader));
          }
          if(!scope.isEmptyNullUndefined(addressDetails))
          {
            
            var readOnlyAddress = scope.getFieldValue(scope._vfsPayeeAddLbl , "readOnly")[scope.inputPool["flowType"]];
            var fieldValueSkin = (readOnlyAddress === true) ? scope._vfssValueReadonlySkin : scope._vfssValueEditableSkin;
            scope.view.lblAddressDetails.text = addressDetails.slice(0,-1);
            scope.view.lblAddressDetails.skin = fieldValueSkin;
            scope.view.lblAddressDetails.setVisibility(true);
          }
            if(readOnlyAddress)
            {
              scope.view.flxRight.setVisibility(false);
              scope.view.flxAddress.onClick = function(){
              }
            }
            if(optionalAddress)
            {
              scope.view.flxRight.setVisibility(true);
              var editIcon = scope._vfsIconEdit;
			  scope.view.imgBeneArrow.src = editIcon;
              var optional = scope.getFieldValue("{i.kony.i18n.verifyDetails.optional}");
              addressLabel = addressLabel + " " + optional;
              scope.view.lblAddressLabel.text = addressLabel;
              scope.view.lblAddressLabel.skin = scope._vfssLabelSkin;
              scope.inputPool["payeeAddressLabel"] = addressLabel;
            }
          else
          {
            scope.mandatoryInputs++;
            if(!scope.isEmptyNullUndefined(addressDetails))
            {
              scope.mandatoryInputsValue++;
            }
            scope.view.lblAddressLabel.text = addressLabel;
            scope.view.lblAddressLabel.skin = scope._vfssLabelSkin;
            scope.inputPool["payeeAddressLabel"] = addressLabel;
          }

        }
        for(var i=1;i<3;i++)
        {
          scope.view["btnCTAButton"+i].setVisibility(false);
          var buttonLabel = scope.getFieldValue(eval("scope._vfsCTAButton"+i),"text");
          if(!scope.isEmptyNullUndefined(buttonLabel))
          {
            var buttonId = scope.getFieldValue(eval("scope._vfsCTAButton"+i),"id");
            var buttonAction = scope.getFieldValue(eval("scope._vfsCTAButton"+i),"actionType");
            scope.view["btnCTAButton"+i].setVisibility(true);
            scope.view["btnCTAButton"+i].text = buttonLabel;
            if(buttonAction === "primary" && buttonId === "AddAccount")
            {
              scope.view["btnCTAButton"+i].skin = scope._gsknPrimaryContexualBtn;
              scope.view["btnCTAButton"+i].onClick = function(){
                scope.createAccount();
              };
            }
            else
            {
              scope.view["btnCTAButton"+i].skin = scope._gsknPrimaryContexualBtn;
            }
          }
        }
        if(scope.mandatoryInputsValue !== scope.mandatoryInputs)
        {
          for(var i=1;i<3;i++)
          {
            scope.disableButton("btnCTAButton"+i);
          }
        }
        else
        {
          for(var i=1;i<3;i++)
          {
            scope.enableButton("btnCTAButton"+i);
          } 
        }
        scope.view.forceLayout();
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setVerifyDetailsData method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component createAccount
     * Responsible to create the Account
     */
    createAccount : function()
    {
      var scope = this;
      try{
        scope.onRequestStart();
        scope.setCriteria(scope._vfsCriteria);
        scope.UnifiedTransferDAO.invokeService(scope._vfsObjectService, scope._vfsObject, scope._vfsOperation, scope.getCriteria(), "", scope.successfulAccountCreation, scope.failureAccountCreation);   
      }catch(err) {
        scope.onRequestEnd();
        var errObj = {
          "errorInfo" : "Error in createAccount method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },


    /**
     * Component successfulAccountCreation
     * Responsible to navigate to successful acknowledgment
     */
    successfulAccountCreation : function(response)
    {
      var scope = this;
      response = Object.assign(scope.inputPool, response);
      scope.createAccountCallback(response);
      scope.onRequestEnd();
    },

    /**
     * Component failureAccountCreation
     * Responsible to navigate to failure acknowledgment
     */
    failureAccountCreation : function(response)
    {
      var scope = this;
      scope.createAccountCallback(response);
      scope.onRequestEnd();
    },

    /**     
	 * Component PhoneNumKeyboardDataSetting
     * To bind the functions for each keybroad butttons
     */
    PhoneNumKeyboardDataSetting:function(){
      try
      {
        var scope = this;
        this.view.btnContactType1.onClick = this.setPhoneNumKeypadChar.bind(this, 1);
        this.view.btnContactType2.onClick = this.setPhoneNumKeypadChar.bind(this, 2);
        this.view.btnContactType3.onClick = this.setPhoneNumKeypadChar.bind(this, 3);
        this.view.btnContactType4.onClick = this.setPhoneNumKeypadChar.bind(this, 4);
        this.view.btnContactType5.onClick = this.setPhoneNumKeypadChar.bind(this, 5);
        this.view.btnContactType6.onClick = this.setPhoneNumKeypadChar.bind(this, 6);
        this.view.btnContactType7.onClick = this.setPhoneNumKeypadChar.bind(this, 7);
        this.view.btnContactType8.onClick = this.setPhoneNumKeypadChar.bind(this, 8);
        this.view.btnContactType9.onClick = this.setPhoneNumKeypadChar.bind(this, 9);
        this.view.btnContactType0.onClick = this.setPhoneNumKeypadChar.bind(this, 0);
        this.view.imgContactTypeKeypadClear.onTouchEnd = this.clearPhoneNumKeypadChar;
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in PhoneNumKeyboardDataSetting method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
   * Component setPhoneNumKeypadChar
     * To set the key and update the value based on clicked button in keyboard
     * char - parameter contain the clicked keyboard button value
     */
    setPhoneNumKeypadChar: function (char) {
      try
      {
        var scope = this;
        if(this.keypadString.length < parseInt(scope.getFieldValue(scope._maxFillMapping)[scope._jsonObjName]["lblMobileNumber"]))
        {
          this.keypadString = this.keypadString + char;
          this.updatePhoneNumValue();
          scope.setPhoneNumberData();
        }
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPhoneNumKeypadChar method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
   * Component clearPhoneNumKeypadChar
     * To clear the data one by one while clicking on clear button from keyboard
     */  
    clearPhoneNumKeypadChar: function () {
      try
      {
        var scope = this;
        if (this.keypadString === '') return;
        this.keypadString = this.keypadString.slice(0, -1);
        this.updatePhoneNumValue();
        scope.setPhoneNumberData();
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in clearPhoneNumKeypadChar method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
   * Component clearPhoneNumKeypad
     * To clear all the data while clicking on clear image
     */ 
    clearPhoneNumKeypad: function(){
      try
      {
        var scope = this;
        this.keypadString ='';
        this.updatePhoneNumValue();
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in clearPhoneNumKeypad method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
   * Component updatePhoneNumValue
     * To updating values by clicking the value from keyborad 
     */  
    updatePhoneNumValue: function () {
      try
      {
        var scope = this;
        if(!scope.isEmptyNullUndefined(this.keypadString))
        {
          this.view.lblMobileNumber.text = this.keypadString;
          scope.view.lblMobileNumber.skin = scope._phnosLabelValueSkn;
          scope.enableButton("btnPhonerNumberContinue");
        }
        else
        {
          scope.view.lblMobileNumber.text = scope.getFieldValue(scope._phnoTxtbox2,"placeHolder");
          scope.view.lblMobileNumber.skin = scope._gsknSubHeaderLabel;
          scope.disableButton("btnPhonerNumberContinue");
        }
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in updatePhoneNumValue method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component setPhoneNumber
     * To bind the events,default field properties for Phone Number.
     * * @param {string} flow denotes the edit flow or add flow
     */
    setPhoneNumber: function(flow) {
      try {
        var scope = this;
        scope.PhoneNumKeyboardDataSetting();
        scope.setPhoneNumberDefaultText();
        scope.setPhoneNumberSkins();
        scope.setPhoneNumberActions(flow);
        scope.view.forceLayout();
      }catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPhoneNumber method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component setPhoneNumberDefaultText
     * To bind the default text for Phone number.
     */
    setPhoneNumberDefaultText : function()
    {
      try{
        var scope = this;
        if(scope._beneficiaryTypes === "PayAPerson")
        {
          scope.view.flxContactsLookup.setVisibility(true);
        }
        else
          scope.view.flxContactsLookup.setVisibility(false);
        scope.disableButton("btnPhonerNumberContinue");
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)))
        {
          scope.view.btnPhoneNumberCancel.setVisibility(false);
        }
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._phnoSectionHeader)))
        {
          scope.view.lblPhoneNumberHeader.setVisibility(false);
        }
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._phnoSubheader)))
        {
          scope.view.lblPhnoSubHeader.setVisibility(false);
        }
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._phnoCTABtn1)))
        {
          scope.view.flxPhoneNumberLookup.setVisibility(false);
        }
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._phnoOROption)))
        {
          scope.view.lblPhoneNumberOrLabel.setVisibility(false);
          scope.view.flxPhoneNumberOrLabel.setVisibility(false);
        }
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._phnoCTABtn2)))
        {
          scope.view.btnPhoneNumberlookupContacts.setVisibility(false);
        }
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._phnoCTABtn3)))
        {
          scope.view.btnPhonerNumberContinue.setVisibility(false);
        }
        scope.view.btnPhoneNumberCancel.text = scope.getFieldValue(scope._cancelButton);
        scope.view.lblPhoneNumberHeader.text = scope.getFieldValue(scope._phnoSectionHeader);
        scope.view.imgPhoneNumberBack.src = scope._iconBack;
        scope.view.lblField2.text = scope.getFieldValue(scope._phnoTxtbox1Label);
        scope.view.lblField1.text = scope.getFieldValue(scope._phnoTxtbox2Label);
        scope.view.lblPhnoSubHeader.text = scope.getFieldValue(scope._phnoSubheader);
        scope.view.flxPhoneNumberLookup.text = scope.getFieldValue(scope._phnoCTABtn1,"text");
        scope.view.lblPhoneNumberOrLabel.text = scope.getFieldValue(scope._phnoOROption).toLocaleLowerCase();
        scope.view.btnPhoneNumberlookupContacts.text = scope.getFieldValue(scope._phnoCTABtn2,"text");
        scope.view.btnPhonerNumberContinue.text = scope.getFieldValue(scope._phnoCTABtn3,"text");
        scope.view.imgContactTypeKeypadClear.src = scope.getFieldValue(scope._phnoKeypadClearIcon);
        if(!scope.isEmptyNullUndefined(scope[scope._inputValuesPool][scope.getFieldValue(scope._phnoTxtbox2, "inputPoolKey")]))
        {
          scope.view.lblMobileNumber.text = scope[scope._inputValuesPool][scope.getFieldValue(scope._phnoTxtbox2, "inputPoolKey")];
          scope.view.lblMobileNumber.skin = scope._phnosLabelValueSkn;
          scope.enableButton("btnPhonerNumberContinue");
        }
        else
        {
          scope.view.lblMobileNumber.text = scope.getFieldValue(scope._phnoTxtbox2,"placeHolder");
          scope.view.lblMobileNumber.skin = scope._gsknSubHeaderLabel;

        }
        if(!scope.isEmptyNullUndefined(scope[scope._inputValuesPool][scope.getFieldValue(scope._phnoTxtbox1, "inputPoolKey")]))
        {
          scope.view.tbxContactCode.text = scope[scope._inputValuesPool][scope.getFieldValue(scope._phnoTxtbox1, "inputPoolKey")];
          //scope.enableButton("btnPhonerNumberContinue");
        }
        else
        {
          scope.view.tbxContactCode.text = "";
          //scope.disableButton("btnPhonerNumberContinue");
        }
        if(!scope.getFieldValue(scope._phnoCCVisibility))
        {
          scope.view.flxCountryCodeContainer.setVisibility(false);
          scope.view.lblField2.setVisibility(false);
          scope.view.flxPhoneNumberLookup.setVisibility(false);
          scope.view.flxTypePhoneNumber.left = "15%";
        }
        if(!scope.isEmptyNullUndefined(scope.keypadString))
        {
          scope.view.lblMobileNumber.text = scope.keypadString;
          scope.view.lblMobileNumber.skin = scope._phnosLabelValueSkn;
          scope.enableButton("btnPhonerNumberContinue");
        }
        // scope.view.tbxContactCode.maxTextLength = parseInt(scope.getFieldValue(scope._maxFillMapping)[scope._jsonObjName]["tbxContactCode"]);
        scope.view.forceLayout();
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPhoneNumberDefaultText method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component setPhoneNumberSkins
     * To bind the default skins for Phone number.
     */
    setPhoneNumberSkins : function()
    {
      try{
        var scope = this;
        scope.view.flxPhoneNumberHeader.skin = scope._gsknHeaderFlex;
        scope.view.btnPhoneNumberCancel.skin = scope._gsknCancelBtn;
        scope.view.lblPhoneNumberHeader.skin = scope._gsknHeaderLbl;
        scope.view.tbxContactCode.skin = scope._phnosTbxValueSkn;
        scope.view.tbxContactCode.focusSkin = scope._phnosTbxValueSkn;
        //scope.view.lblMobileNumber.skin = scope._gsknSubHeaderLabel;
        scope.view.flxPhoneNumberSubHeader.skin = scope._gsknSubHeaderFlex;
        scope.view.flxPhoneNumberSeparator.skin = scope._gsknSubHeaderseparator;
        scope.view.lblPhnoSubHeader.skin = scope._gsknSubHeaderLabel;
        scope.view.btnPhoneNumberlookupContacts.skin = scope._phnosPickPhoneNoSkin;
        scope.view.flxPhoneNumberLookup.skin = scope._phnosPickPhoneNoSkin;
        scope.view.flxPhoneNumberOrLabel.skin = scope._phnosOROptionFlexSkin;
        scope.view.lblPhoneNumberOrLabel.skin = scope._phnosOROptionLabelSkin;
        //scope.view.btnPhonerNumberContinue.skin = scope._gsknPrimaryContexualBtn;
        scope.view.lblFieldErrorMsg.skin = scope._gsknErrorTextMessage;
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPhoneNumberSkins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component setPhoneNumberActions
     * To bind the default Actions for Phone number
     */
    setPhoneNumberActions : function(flow)
    {
      try{
        var scope = this;
        scope.view.imgPhoneNumberBack.onTouchStart = scope.goBack;
        scope.view.btnPhoneNumberCancel.onClick = scope.onBackButtonClick;
        scope.view.flxPhoneNumberLookup.onClick = function()
        {
          scope.setCountryCode();
          scope.navigateTo("flxCountryCode", "flxCountryCodeTop", scope.getFieldValue(scope._ccsSectionHeader));
        }
        scope.view.btnPhoneNumberlookupContacts.onClick = function()
        {
          scope.setChooseFromContacts("phone");
          scope.navigateTo("flxChooseFromContacts", "flxCfcTop", scope.getFieldValue(scope._cfcSectionHeader));
        }
        scope.view.btnPhonerNumberContinue.onClick = scope.onPhoneNumberContinue.bind(this,flow);
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPhoneNumberActions method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      } 
    },

    /**     
	 * Component setPhoneNumberData
     * To bind the default Actions for Phone number
     */
    setPhoneNumberData : function()
    {
      try{
        var scope = this;
        var phone = scope.view.lblMobileNumber.text;
        var phoneJSON = {
          "lblMobileNumber" : phone
        };
        var maxlength = this.maxFillValidate(phoneJSON); 
        if(Object.keys(maxlength).length === 0 && maxlength.constructor === Object){
          this.enableButton("btnPhonerNumberContinue");            
        } else{
          this.disableButton("btnPhonerNumberContinue");
        } 
        var minlength = this.minFillValidate(phoneJSON);
        if(Object.keys(minlength).length === 0 && minlength.constructor === Object){            
          this.enableButton("btnPhonerNumberContinue");            
        } else{
          this.disableButton("btnPhonerNumberContinue");
        }
        scope.view.forceLayout(); 
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPhoneNumberData method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      } 
    },

    /**     
	 * Component onPhoneNumberContinue
     * To bind the default Actions for Phone number
     */
    onPhoneNumberContinue : function(flow)
    {
      try{
        var scope = this;
        var phone = scope.view.lblMobileNumber.text;
        var code = scope.view.tbxContactCode.text;
        scope[scope._inputValuesPool][scope.getFieldValue(scope._phnoTxtbox2, "inputPoolKey")] = phone;
        scope.inputPool["formattedPhoneNumber"] = code+phone;
        scope[scope._inputValuesPool][scope.getFieldValue(scope._phnoTxtbox1, "inputPoolKey")] = code;
        if(scope._beneficiaryTypes === "PayAPerson" && flow !== "EDIT")
        {
          scope.setLinkPayee("ADD");
          scope.navigateTo("flxLinkPayee", "flxLinkPayeeTop", scope.getFieldValue(scope._linkPayeeSectionTitle));
        }
        else
        {
          scope.setVerifyDetails();
          scope.navigateTo("flxVerifyDetails", "flxVfsHeaderTop", scope.getFieldValue(scope._vfsSectionTitle));
        }

      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in onPhoneNumberContinue method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      } 
    },

    /**     
	 * Component setCountryCode
     * To bind the events,default field properties for Country Code
     * * @param {string} flow denotes the edit flow or add flow
     */
    setCountryCode : function() {
      try {
        var scope = this;
        scope.setCountryCodeDefaultText();
        scope.setCountryCodeSkins();
        scope.setCountryCodeActions();
        scope.setCountryCodeData();
        scope.view.forceLayout();
      }catch(err) {
        var errObj = {
          "errorInfo" : "Error in setCountryCode method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component setCountryCodeDefaultText
     * To bind the default text for Email Address
     */
    setCountryCodeDefaultText : function()
    {
      try{
        var scope = this;

        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)))
        {
          scope.view.btnCountryCodeCancel.setVisibility(false);
        }
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._ccsSectionHeader)))
        {
          scope.view.lblCountryCodeHeader.setVisibility(false);
        }
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._ccsSearchbox)))
        {
          scope.view.tbxCountrySearch.setVisibility(false);
        }
        scope.view.btnCountryCodeCancel.text = scope.getFieldValue(scope._cancelButton);
        scope.view.lblCountryCodeHeader.text = scope.getFieldValue(scope._ccsSectionHeader);
        scope.view.imgCountryCodeBack.src = scope._iconBack;
        scope.view.lblCountryCodeNoResults.text = scope.getFieldValue(scope._cccsNoRecords);
        scope.view.tbxCountrySearch.placeholder = scope.getFieldValue(scope._ccsSearchbox,"placeHolder");
        scope.view.imgCountryCodeSearch.src = scope.getFieldValue(scope._ccsSearchbox,"searchicon");
        scope.view.imgCountryCodeCloseIcon.src = scope.getFieldValue(scope._ccsSearchbox,"clearSearchicon");

      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setCountryCodeDefaultText method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component setCountryCodeSkins
     * To bind the default skins for Email Address.
     */
    setCountryCodeSkins : function()
    {
      try{
        var scope = this;
        scope.view.flxCountryCodeHeader.skin = scope._gsknHeaderFlex;
        scope.view.btnCountryCodeCancel.skin = scope._gsknCancelBtn;
        scope.view.lblCountryCodeHeader.skin = scope._gsknHeaderLbl;
        scope.view.lblCountryCodeNoResults.skin = scope._cccsNoRecordsSkin;
        scope.view.tbxCountrySearch.skin = scope._ccssSearchBoxSkin;
        scope.view.segCountryList.rowFocusSkin = scope._ccssResultItemFlexSelected;
        scope.view.segCountryList.rowSkin = scope._ccssResultItemFlex;
        scope.view.flxAlphabetsList.skin = scope._ccssSegAlphabetBG;
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setCountryCodeSkins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
	 * Component setCountryCodeActions
     * To bind the default Actions for Email Address
     */
    setCountryCodeActions : function()
    {
      try{
        var scope = this;
        scope.view.imgCountryCodeBack.onTouchStart = scope.goBack;
        scope.view.btnCountryCodeCancel.onClick = scope.onBackButtonClick;
        scope.view.tbxCountrySearch.onTextChange = function(){
          var searchedKey = scope.view.flxCountryCodeHeader.flxCountryCodeSearch.flxCountryCodeContents.tbxCountrySearch.text;
          if(searchedKey.length >0)
          {
            scope.setCountryCodeSegmentData(scope.getSearchResults(scope.countriesList, searchedKey));
          }
          else
          {
            scope.setCountryCodeSegmentData(scope.countriesList);
          }
        };
        scope.view.imgCountryCodeCloseIcon.onTouchStart = function(){
          scope.view.tbxCountrySearch.text = "";
          scope.view.imgCountryCodeCloseIcon.setVisibility(false);
          scope.setCountryCodeData();
        };
        scope.view.segCountryList.onRowClick = function(){
          var selectedCountryCode = scope.view.segCountryList.selectedRowItems;
          scope[scope._inputValuesPool][scope.getFieldValue(scope._phnoTxtbox1, "inputPoolKey")] = selectedCountryCode[0].code.replace(/\s/g, "");

          scope.setPhoneNumber();
          scope.goBack();
        };
        scope.view.segCountryAlphabet.onRowClick = function()
        {
          var selectedCodeNo = scope.view.segCountryAlphabet.selectedRowItems;
          if(selectedCodeNo !== null){
            var contentOffsetY=0;
            for(var i=0;scope.countriesList[i].name[0]!==selectedCodeNo[0].alphabet;i++){
              contentOffsetY=contentOffsetY+52;
            }
            scope.view.flxCountryList.setContentOffset({x:0,y:contentOffsetY});
          }
        }
        scope.view.forceLayout();
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setCountryCodeActions method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      } 
    },

    /**     
	 * Component setCountryCodeData
     * To bind the default Actions for Country code
     */
    setCountryCodeData : function()
    {
      var scope = this;
      var data = scope._ccsCountryListMasterData["countries"];
      scope.view.imgCountryCodeCloseIcon.setVisibility(false);
      scope.countriesList = data;
      scope.setCountryCodeSegmentData(data);
      scope.view.forceLayout();
    },

    /**     
	 * Component setCountryCodeSegmentData
     * set the data for Country code
     */
    setCountryCodeSegmentData : function(data)
    {
      try{
        var scope = this , alphabetsArray = [];
        if(!scope.isEmptyNullUndefined(data) && data.length>0)
        {
          for(var i=0;i<data.length;i++)
          {
            data[i].countryname = data[i].name + "  ( " + data[i].code + " )";
            if(!JSON.stringify(alphabetsArray).includes(data[i].name[0]))
            {
              alphabetsArray.push({"alphabet" : data[i].name[0]});
            }
          }
          var countryCodeMapping = {
            "countryCode" : "code",
            "lblCountryCode" : "countryname"
          };
          var alphabetsMapping = {
            "lblCountryCodeNo" : "alphabet"
          };
          scope.view.segCountryList.widgetDataMap = countryCodeMapping;
          scope.view.segCountryList.setData(data);
          scope.view.segCountryAlphabet.widgetDataMap = alphabetsMapping;
          scope.view.segCountryAlphabet.setData(alphabetsArray);
          scope.view.flxCountryListContainer.setVisibility(true);
        }
        else
        {
          scope.view.flxCountryListContainer.setVisibility(false);
          scope.view.flxCountryCodeNoResults.setVisibility(true);
        }
        scope.view.forceLayout(); 
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setCountryCodeSegmentData method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      } 
    },

    /**     
   * Component setEmailAddress
     * To bind the events,default field properties for Email Address.
     */
    setEmailAddress : function(flow) {
      try {
        var scope = this;
        scope.setEmailAddressDefaultText();
        scope.setEmailAddressSkins();
        scope.setEmailAddressActions(flow);
        scope.setEmailAddressData();
        scope.view.forceLayout();
      }catch(err) {
        var errObj = {
          "errorInfo" : "Error in setEmailAddress method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
   * Component setEmailAddressDefaultText
     * To bind the default text for Email Address
     */
    setEmailAddressDefaultText : function()
    {
      try{
        var scope = this;
        if(scope._beneficiaryTypes === "PayAPerson")
        {
          scope.view.flxEmailLookup.setVisibility(true);
        }
        else
          scope.view.flxEmailLookup.setVisibility(false);
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)))
        {
          scope.view.btnEmailAddressCancel.setVisibility(false);
        }
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._easSectionHeader)))
        {
          scope.view.lblEmailAddressHeader.setVisibility(false);
        }
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._easSubHeader)))
        {
          scope.view.lblEmailAddressDescription.setVisibility(false);
        }
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._easCTAButton1)))
        {
          scope.view.btnEmailLookup.setVisibility(false);
          scope.view.flxEmailLookup.setVisibility(false);
        }
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._easOROption)))
        {
          scope.view.lblEmailAddressLookup.setVisibility(false);
          scope.view.flxEmailLookup.setVisibility(false);
        }
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._easCTAButton2)))
        {
          scope.view.btnEmailAddressContinue.setVisibility(false);
        }
        scope.view.btnEmailAddressCancel.text = scope.getFieldValue(scope._cancelButton);
        scope.view.lblEmailAddressHeader.text = scope.getFieldValue(scope._easSectionHeader);
        scope.view.imgEmailAddressBack.src = scope._iconBack;
        scope.view.lblEmailAddressDescription.text = scope.getFieldValue(scope._easSubHeader);
        scope.view.btnEmailLookup.text = scope.getFieldValue(scope._easCTAButton1,"text");
        scope.view.lblEmailAddressLookup.text = scope.getFieldValue(scope._easOROption);
        scope.view.btnEmailAddressContinue.text = scope.getFieldValue(scope._easCTAButton2,"text");
        scope.view.lblEmailAddressErrorMsg.text = scope.getFieldValue(scope._easErrorMessage);
        scope.view.txtEmailAddress.maxTextLength = parseInt(scope.getFieldValue(scope._maxFillMapping)[scope._jsonObjName]["txtEmailAddress"]);
        if(!scope.isEmptyNullUndefined(scope[scope._inputValuesPool][scope.getFieldValue(scope._easTextBoxInput, "inputPoolKey")]))
        {
          scope.view.txtEmailAddress.text = scope[scope._inputValuesPool][scope.getFieldValue(scope._easTextBoxInput, "inputPoolKey")];
        }
        else
        {
          scope.view.txtEmailAddress.text = "";
        }
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setEmailAddressDefaultText method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
   * Component setEmailAddressSkins
     * To bind the default skins for Email Address.
     */
    setEmailAddressSkins : function()
    {
      try{
        var scope = this;
        scope.view.flxEmailAddressHeaderContainer.skin = scope._gsknHeaderFlex;
        scope.view.btnEmailAddressCancel.skin = scope._gsknCancelBtn;
        scope.view.lblEmailAddressHeader.skin = scope._gsknHeaderLbl;
        scope.view.flxEmailAddressSubheader.skin = scope._gsknSubHeaderFlex;
        scope.view.flxEmailAddressSeperator.skin = scope._gsknSubHeaderseparator;
        scope.view.lblEmailAddressDescription.skin = scope._gsknSubHeaderLabel;
        scope.view.btnEmailLookup.skin = scope._eassPickEmailSkin;
        scope.view.flxEmailAddressLookup.skin = scope._eassOROptionFlexSkin;
        scope.view.lblEmailAddressLookup.skin = scope._eassOROptionLabelSkin;
        scope.view.btnEmailAddressContinue.skin = scope._gsknPrimaryContexualBtn;
        scope.view.lblEmailAddressErrorMsg.skin = scope._gsknErrorTextMessage;
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setEmailAddressSkins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
   * Component setEmailAddressActions
     * To bind the default Actions for Email Address
     */
    setEmailAddressActions : function(flow)
    {
      try{
        var scope = this;
        scope.view.imgEmailAddressBack.onTouchStart = scope.goBack;
        scope.view.btnEmailAddressCancel.onClick = scope.onBackButtonClick;
        scope.view.btnEmailAddressContinue.onClick = scope.onEmailAddressContinue.bind(this,flow);
        scope.view.txtEmailAddress.onTextChange = scope.setEmailAddressData;
        scope.view.btnEmailLookup.onClick = function(){
          scope.setChooseFromContacts("email"); //email
          scope.navigateTo("flxChooseFromContacts", "flxCfcTop", scope.getFieldValue(scope._cfcSectionHeader));
        };
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setEmailAddressActions method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      } 
    },

    /**     
   * Component setEmailAddressData
     * To bind the default Actions for Email Address
     */
    setEmailAddressData : function()
    {
      try{
        var scope = this;
        scope.view.lblEmailAddressErrorMsg.setVisibility(false);
        scope.view.txtEmailAddress.skin.skin = scope._gsknTextBoxNormal;
        scope.view.txtEmailAddress.focusSkin = scope._gsknTextBoxFocus;
        var email = scope.view.txtEmailAddress.text;
        var emailJSON = {
          "txtEmailAddress" : email
        };
        var maxlength = this.maxFillValidate(emailJSON); 
        if(Object.keys(maxlength).length === 0 && maxlength.constructor === Object){
          this.enableButton("btnEmailAddressContinue");            
        } else{
          this.disableButton("btnEmailAddressContinue");
        } 
        var minlength = this.minFillValidate(emailJSON);
        if(Object.keys(minlength).length === 0 && minlength.constructor === Object){            
          this.enableButton("btnEmailAddressContinue");            
        } else{
          this.disableButton("btnEmailAddressContinue");
        }
        scope.view.forceLayout();
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setEmailAddressData method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      } 
    },

    /**     
   * Component onEmailAddressContinue
     * To validate and process to next screen
     */
    onEmailAddressContinue : function(flow)
    {
      try{
        var scope = this;
        scope.view.lblEmailAddressErrorMsg.setVisibility(false);
        var email = scope.view.txtEmailAddress.text;
        var emailJSON = {
          "txtEmailAddress" : email
        };
        var dataValidator = scope.performDataValidation(emailJSON);
        if(Object.keys(dataValidator).length === 0 && dataValidator.constructor === Object)
        {
          scope[scope._inputValuesPool][scope.getFieldValue(scope._easTextBoxInput, "inputPoolKey")] = email;
          if(scope._beneficiaryTypes === "PayAPerson" && flow !== "EDIT")
          {
            scope.setLinkPayee("ADD");
            scope.navigateTo("flxLinkPayee", "flxLinkPayeeTop", scope.getFieldValue(scope._linkPayeeSectionTitle));
          }
          else
          {
            scope.setVerifyDetails();
            scope.navigateTo("flxVerifyDetails", "flxVfsHeaderTop", scope.getFieldValue(scope._vfsSectionTitle));
          }

        }
        else
        {
          scope.view.lblEmailAddressErrorMsg.setVisibility(true);
          scope.view.txtEmailAddress.skin = scope._gsknTextBoxError;
          scope.view.txtEmailAddress.focusSkin = scope._gsknTextBoxError;
          scope.disableButton("btnEmailAddressContinue");
        }
        scope.view.forceLayout();
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in onEmailAddressContinue method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      } 
    },

    /**     
   * Component setPayeeNickname
     * To bind the events,default field properties for Nickname
     */
    setPayeeNickname : function() {
      try {
        var scope = this;
        scope.setPayeeNicknameDefaultText();
        scope.setPayeeNicknameSkins();
        scope.setPayeeNicknameActions();
        scope.setPayeeNicknameData();
        scope.view.forceLayout();
      }catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPayeeNickname method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
   * Component setPayeeNicknameDefaultText
     * To bind the default text for Nickanme
     */
    setPayeeNicknameDefaultText : function()
    {
      try{
        var scope = this;
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)))
        {
          scope.view.btnNicknameCancel.setVisibility(false);
        }
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._annSectionHeader)))
        {
          scope.view.lblPnsSectionHeader.setVisibility(false);
        }
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._annSubHeader)))
        {
          scope.view.lblPnsSubHeader.setVisibility(false);
        }
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._annCTAButton)))
        {
          scope.view.btnNicknameContinue.setVisibility(false);
        }
        scope.view.btnNicknameCancel.text = scope.getFieldValue(scope._cancelButton);
        scope.view.lblPnsSectionHeader.text = scope.getFieldValue(scope._annSectionHeader);
        scope.view.imgNicknameBack.src = scope._iconBack;
        scope.view.lblPnsSubHeader.text = scope.getFieldValue(scope._annSubHeader);
        scope.view.btnNicknameContinue.text = scope.getFieldValue(scope._annCTAButton,"text");
        scope.view.txtNickName.maxTextLength = parseInt(scope.getFieldValue(scope._maxFillMapping)[scope._jsonObjName]["txtNickName"]);
        if(!scope.isEmptyNullUndefined(scope[scope._inputValuesPool][scope.getFieldValue(scope._annTextbox, "inputPoolKey")]))
        {
          scope.view.txtNickName.text = scope[scope._inputValuesPool][scope.getFieldValue(scope._annTextbox, "inputPoolKey")];
        }
        else
        {
          scope.view.txtNickName.text = "";
        }
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPayeeNicknameDefaultText method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
   * Component setPayeeNicknameSkins
     * To bind the default skins for payee Nickaname
     */
    setPayeeNicknameSkins : function()
    {
      try{
        var scope = this;
        scope.view.flxNicknameSectionHeader.skin = scope._gsknHeaderFlex;
        scope.view.btnNicknameCancel.skin = scope._gsknCancelBtn;
        scope.view.lblPnsSectionHeader.skin = scope._gsknHeaderLbl;
        scope.view.flxNicknameSubheader.skin = scope._gsknSubHeaderFlex;
        scope.view.flxSubHeaderSeperator.skin = scope._gsknSubHeaderseparator;
        scope.view.lblPnsSubHeader.skin =scope._gsknSubHeaderLabel;
        scope.view.btnNicknameContinue.skin = scope._gsknPrimaryContexualBtn;
        scope.view.txtNickName.skin = scope._gsknTextBoxNormal;
        scope.view.txtNickName.focusSkin = scope._gsknTextBoxFocus;
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPayeeNicknameSkins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
   * Component setPayeeNicknameActions
     * To bind the default Actions for Nickname
     */
    setPayeeNicknameActions : function()
    {
      try{
        var scope = this;
        scope.view.imgNicknameBack.onTouchStart = scope.goBack;
        scope.view.btnNicknameCancel.onClick = scope.onBackButtonClick;
        scope.view.btnNicknameContinue.onClick = scope.onPayeeNicknameContinue;
        scope.view.txtNickName.onTextChange = scope.setPayeeNicknameData;
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPayeeNicknameActions method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      } 
    },

    /**     
   * Component setPayeeNicknameData
     * To bind the default Actions for Nickname
     */
    setPayeeNicknameData : function()
    {
      try{
        var scope = this;
        scope.view.txtNickName.skin = scope._gsknTextBoxNormal;
        scope.view.txtNickName.focusSkin = scope._gsknTextBoxFocus;
        scope.view.lblPayeeNicknameError.setVisibility(false);
        var nick = scope.view.txtNickName.text;
        var nickJSON = {
          "txtNickName" : nick
        };
        var minlength = this.minFillValidate(nickJSON);
        var maxlength = this.maxFillValidate(nickJSON); 
        if(Object.keys(minlength).length === 0 && minlength.constructor === Object && Object.keys(maxlength).length === 0 && maxlength.constructor === Object){  
          scope.enableButton("btnNicknameContinue");            
        } else{
          scope.disableButton("btnNicknameContinue");
        }
        scope.view.forceLayout();
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPayeeNicknameData method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      } 
    },

    /**     
   * Component onPayeeNicknameContinue
     * To validate and process to next screen
     */
    onPayeeNicknameContinue : function()
    {
      try{
        var scope = this;
        var payeeNickName = {
          "txtNickName":scope.view.txtNickName.text
        };
        var payeeNickNameInput=scope.performDataValidation(payeeNickName);
        if(Object.keys(payeeNickNameInput).length === 0 && payeeNickNameInput.constructor === Object){
          scope.view.txtNickName.skin = scope._gsknTextBoxNormal;
          scope.view.txtNickName.focusSkin = scope._gsknTextBoxFocus;
          scope.view.lblPayeeNicknameError.setVisibility(false);
          scope[scope._inputValuesPool][scope.getFieldValue(scope._annTextbox, "inputPoolKey")] = scope.view.txtNickName.text;
          scope.setVerifyDetails();
          scope.navigateTo("flxVerifyDetails", "flxVfsHeaderTop", scope.getFieldValue(scope._vfsSectionTitle));             
        }
        else{
          scope.view.lblPayeeNicknameError.text = "Please enter a valid Nickname";
          scope.view.txtNickName.skin = scope._gsknTextBoxError;
          scope.view.txtNickName.focusSkin = scope._gsknTextBoxError;
          scope.view.lblPayeeNicknameError.setVisibility(true);	
          scope.disableButton("btnNicknameContinue");
        }
       scope.view.forceLayout(); 
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in onPayeeNicknameContinue method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      } 
    },

    /**     
   * Component setChooseFromContacts
     * To bind the events,default field properties for Country Code
     * * @param {string} flow denotes the edit flow or add flow
     */
    setChooseFromContacts : function(flow) {
      try {
        var scope = this;
        scope.setChooseFromContactsDefaultText();
        scope.setChooseFromContactsSkins();
        scope.setChooseFromContactsActions(flow);
        scope.setChooseFromContactsData(flow);
        scope.view.forceLayout();
      }catch(err) {
        var errObj = {
          "errorInfo" : "Error in setChooseFromContacts method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
   * Component setChooseFromContactsDefaultText
     * To bind the default text for Email Address
     */
    setChooseFromContactsDefaultText : function()
    {
      try{
        var scope = this;
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)))
        {
          scope.view.btnCfcCancel.setVisibility(false);
        }
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._cfcSectionHeader)))
        {
          scope.view.lblCfcHeaderLabel.setVisibility(false);
        }
        if(scope.isEmptyNullUndefined(scope.getFieldValue(scope._cfcSearchbox)))
        {
          scope.view.tbxPickContactsSearch.setVisibility(false);
        }
        scope.view.btnCfcCancel.text = scope.getFieldValue(scope._cancelButton);
        scope.view.lblCfcHeaderLabel.text = scope.getFieldValue(scope._cfcSectionHeader);
        scope.view.imgCfcBack.src = scope._iconBack;
        scope.view.lblCfcNoResults.text = scope._cfcsNoRecords;
        scope.view.tbxPickContactsSearch.placeholder = scope.getFieldValue(scope._cfcSearchbox,"placeHolder");
        scope.view.imgCfcSearch.src = scope.getFieldValue(scope._cfcSearchbox,"searchicon");
        scope.view.imgCfcSearchBoxClose.src = scope.getFieldValue(scope._cfcSearchbox,"clearSearchicon");

      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setChooseFromContactsDefaultText method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
   * Component setChooseFromContactsSkins
     * To bind the default skins for Email Address.
     */
    setChooseFromContactsSkins : function()
    {
      try{
        var scope = this;
        scope.view.flxcfcHeader.skin = scope._gsknHeaderFlex;
        scope.view.btnCfcCancel.skin = scope._gsknCancelBtn;
        scope.view.lblCfcHeaderLabel.skin = scope._gsknHeaderLbl;
        scope.view.lblCfcNoResults.skin = scope._cfcssNoRecordsSkin;
        scope.view.tbxPickContactsSearch.skin = scope._cfcssSearchBoxSkin;
        scope.view.segCfcContactsList.rowFocusSkin = scope._cfcssResultItemFlexSelected;
        scope.view.segCfcAlphabetsList.rowSkin = scope._cfcssResultItemFlex;
        scope.view.flxCfcAlphbetsList.skin = scope._cfcssSegAlphabetBG;
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setChooseFromContactsSkins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**     
   * Component setChooseFromContactsActions
     * To bind the default Actions for Email Address
     */
    setChooseFromContactsActions : function(flow)
    {
      try{
        var scope = this;
        scope.view.imgCfcBack.onTouchStart = scope.goBack;
        scope.view.btnCfcCancel.onClick = scope.onBackButtonClick;
        scope.view.tbxPickContactsSearch.onTextChange = function(){
          var searchedKey = scope.view.flxcfcHeader.flxCfcSearch.flxCfcSearchContents.tbxPickContactsSearch.text;
          if(searchedKey.length > 0)
          {
            scope.setChooseFromContactsSegmentData(scope.getSearchResults(scope.contactsListBackup, searchedKey),flow);
          }
          else
          {
            scope.setChooseFromContactsSegmentData(scope.contactsListBackup,flow);
          }
        };
        scope.view.imgCfcSearchBoxClose.onTouchStart = function(){
          scope.view.tbxPickContactsSearch.text = "";
          scope.view.imgCfcSearchBoxClose.setVisibility(false);
          scope.setChooseFromContactsSegmentData(scope.contactsListBackup,flow);
        };
        scope.view.segCfcContactsList.onRowClick = function(){
          var selectedContact = scope.view.segCfcContactsList.selectedRowItems;
          if(flow === "phone")
          {
            scope[scope._inputValuesPool][scope.getFieldValue(scope._phnoTxtbox2, "inputPoolKey")] = selectedContact[0].id.replace(/\s/g, "");
            scope.keypadString = selectedContact[0].id.replace(/\s/g, "");
            scope.setPhoneNumber();
            scope.goBack();
          }
          else
          {
            scope[scope._inputValuesPool][scope.getFieldValue(scope._easTextBoxInput, "inputPoolKey")] = selectedContact[0].id.replace(/\s/g, "");
            scope.setEmailAddress(); 
            scope.goBack();	
          }
        };
        scope.view.segCfcAlphabetsList.onRowClick = function()
        {
          var selectedCodeNo = scope.view.segCfcAlphabetsList.selectedRowItems;
          if(selectedCodeNo !== null){
            var contentOffsetY=0;
            for(var i=0;scope.contactsList[i].contactName[0]!==selectedCodeNo[0].alphabet;i++){
              contentOffsetY=contentOffsetY+52;
            }
            scope.view.flxCfcContactsList.setContentOffset({x:0,y:contentOffsetY});
          }
        }
        scope.view.forceLayout();
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setChooseFromContactsActions method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      } 
    },

    /**     
   * Component setChooseFromContactsData
     * To bind the default Actions for Country code
     */
    setChooseFromContactsData : function(flow)
    {
      var scope = this;
      var data = kony.contact.find("*", true);
      scope.view.imgCountryCodeCloseIcon.setVisibility(false);
      scope.contactsList = data;scope.contactsListBackup = data;
      scope.setChooseFromContactsSegmentData(data,flow);
      scope.view.forceLayout();
    },

    /**     
   * Component setChooseFromContactsSegmentData
     * set the data for Country code
     */
    setChooseFromContactsSegmentData : function(data,flow)
    {
      try{
        var scope = this , alphabetsArray = [] , contactsArray = [];
        var id = (flow === "phone") ? "number" : "id";
        if(!scope.isEmptyNullUndefined(data) && data.length>0)
        {
          for(var i=0;i<data.length;i++)
          {
            if(!scope.isEmptyNullUndefined(data[i][[flow]]) && data[i][[flow]].length>0)
            {
              data[i].contactName = data[i].displayname[0].toUpperCase()+data[i].displayname.slice(1).toLowerCase() + "  ( " + data[i][[flow]][0][[id]] + " )";
              data[i].id = data[i][[flow]][0][[id]];
              if(!JSON.stringify(alphabetsArray).includes(data[i].contactName[0]))
              {
                alphabetsArray.push({"alphabet" : data[i].contactName[0]});
              }
              contactsArray.push(data[i]);
            }
          }
          var contactsMapping = {
            "contact" : "id",
            "lblCountryCode" : "contactName"
          };
          var alphabetsMapping = {
            "lblCountryCodeNo" : "alphabet"
          };
          scope.view.segCfcContactsList.widgetDataMap = contactsMapping;
          scope.view.segCfcContactsList.setData(contactsArray);
          scope.view.segCfcAlphabetsList.widgetDataMap = alphabetsMapping;
          scope.view.segCfcAlphabetsList.setData(alphabetsArray);
          scope.contactsList = contactsArray;
          scope.view.flxCfcContactsSegList.setVisibility(true);
        }
        else
        {
          scope.view.flxCfcContactsSegList.setVisibility(false);
          scope.view.flxCfcNoResults.setVisibility(true);
        }
        scope.view.forceLayout(); 
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in setChooseFromContactsSegmentData method of the component.",
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
          if(currentScreen!=null && currentScreen!=undefined){
            scope.view[currentScreen].setVisibility(false);
          }          
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
    * component contactType
    **/
    setContactType: function(flow){
      var scope = this;
      scope.setContactTypeDefaultText();
      scope.setContactTypeSkins();
      scope.setContactTypeActions();
      scope.setContactTypeData(flow);
    },
    /*
    * component setContactTypeDefaultText
    * Setting default text for Contact Type Screen
    */
    setContactTypeDefaultText: function(){
      var scope = this;
      scope.view.imgContactTypeBack.src = scope.getFieldValue(scope._iconBack);
      scope.view.btnContactTypeCancel.text = scope.getFieldValue(scope._cancelButton);
      scope.view.lblContactTypeSectionHeader.text = scope.getFieldValue(scope._ctsSectionHeader);

    },
    /*
    * component setContactTypeSkins
    * Setting default skins for Contact Type Screen
    */
    setContactTypeSkins: function(){
      var scope = this;
      scope.view.flxContactTypeHeader.skin = scope.getFieldValue(scope._gsknHeaderFlex);
      scope.view.btnContactTypeCancel.skin = scope.getFieldValue(scope._gsknCancelBtn);
      scope.view.lblContactTypeSectionHeader.skin = scope.getFieldValue(scope._gsknHeaderLbl);
    },
    /*
    * component setContactTypeActions
    * Setting default actions for Contact Type Screen
    */
    setContactTypeActions: function(){
      var scope = this;
      scope.view.btnContactTypeCancel.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)) ? true : false;  
      scope.view.flxContactTypeBack.onTouchEnd = scope.goBack;
      scope.view.btnContactTypeCancel.onClick = scope.onBackButtonClick;
    },
    /*
    * component setContactTypeData
    * Data actions for Contact Type Screen
    */
    setContactTypeData: function(flow){
      var scope = this;
      var contactTypeOptions = scope.getFieldValue(scope._ctsValues);   
      var contactTypeOptionsArray = (contactTypeOptions.optionValues).split(',');
      scope.contactFlowType = flow;
      for(var i = 0; i < contactTypeOptionsArray.length; i++) {
        contactTypeOptionsArray[i] = contactTypeOptionsArray[i].replace(/^\s*/, "").replace(/\s*$/, "");
      }
      var contactTypeList=[];
      for(var i = 0; i < contactTypeOptionsArray.length;i++){
        var contactTypeArray={};
        contactTypeArray["lblContactType"] = {
          "skin" : scope._ctsContactTypeSkn,
          "text": contactTypeOptionsArray[i]
        }
        if(scope.inputPool[scope.getFieldValue(scope._ctsValues,"inputPoolKey")] !=null && scope.inputPool[scope.getFieldValue(scope._ctsValues,"inputPoolKey")]  != undefined && scope.inputPool[scope.getFieldValue(scope._ctsValues,"inputPoolKey")]  == contactTypeOptionsArray[i])
        {
          contactTypeArray["flxContactTypeMain"] = {
            "skin" : scope._ctsContactSelectionSkn      
          }
        }else{
          contactTypeArray["flxContactTypeMain"] = {
            "skin" : ""
          }
        }
        contactTypeList.push(contactTypeArray);          
      };  
      var widgetMap = {
        "flxContactTypeMain":"flxContactTypeMain",
        "lblContactType":"lblContactType"
      };
      scope.view.segContactType.widgetDataMap = widgetMap;
      scope.view.segContactType.setData(contactTypeList);
      var selectedContactType = scope.view.segContactType.onRowClick = scope.onContactTypeSelection;
      scope.view.flxContactTypeMainContainer.forceLayout();
      if(selectedContactType != "")
      {
        return selectedContactType;
      }        
    },
    /**
     * Component onContactTypeSelection
     * function to invoke on contact type row selection
     */
    onContactTypeSelection: function(){
      var scope = this; 
      var segmentData = JSON.parse(JSON.stringify(scope.view.segContactType.data));
      var selectedData = scope.view.segContactType.selectedRowItems;   
      var selectedRow = scope.view.segContactType.selectedRowIndex[1];            
      for(var i=0; i<segmentData.length; i++){         
        segmentData[i]["flxContactTypeMain"] = {
          "skin" :""            
        };                    
      }
      selectedData[0]["flxContactTypeMain"] = {
        "skin" :  scope._ctsContactSelectionSkn              
      };
      scope.view.segContactType.setData(segmentData);       
      scope.view.segContactType.setDataAt(selectedData[0], selectedRow);   
      scope.contactType = selectedData[0].lblContactType.text;
      if(!kony.sdk.isNullOrUndefined(scope.contactType) && scope.contactType !== "") {
        scope.inputPool[scope.getFieldValue(scope._ctsValues,"inputPoolKey")] = scope.contactType;
      }
      if(scope.contactFlowType === "ADD"){
        if(scope.contactType === "Phone Number"){
          scope.setPhoneNumber();
          scope.navigateTo("flxPhoneNumber", "flxPhoneNumberTop", scope.getFieldValue(scope._phnoSectionHeader));
        }
        if(scope.contactType === "Email Address"){
          scope.setEmailAddress();
          scope.navigateTo("flxEmailAddress", "flxEmailAddressTop", scope.getFieldValue(scope._easSectionHeader));
        }
        if(scope.contactType == "National ID"){
          scope.setNationalID("ADD");
          scope.navigateTo("flxNationalID", "flxNationalIDTop", scope.getFieldValue(scope._nisSectionHeader));
        }
      }else{
        scope.setVerifyDetails();
        scope.navigateTo("flxVerifyDetails", "flxVfsHeaderTop", scope.getFieldValue(scope._vfsSectionTitle));
      }
    },
    /**
     * Component setNationalID
     */
    setNationalID: function(flow){
      var scope = this;
      if(flow === "ADD")
      {
        scope.setNationalIDDefaultText();
        scope.setNationalIDSkins();
        scope.setNationalIDActions();
        scope.setNationalIDData(flow)
      }
      else
      {
        scope.setNationalIDData(flow); 
      }
    },
    /*
    * component setNationalIDDefaultText
    * Setting default text for National ID Screen
    */
    setNationalIDDefaultText: function(){
      var scope = this;
      scope.view.imgNationalIDBack.src = scope.getFieldValue(scope._iconBack);
      scope.view.btnNationalIDCancel.text = scope.getFieldValue(scope._cancelButton);
      scope.view.lblNationalIDSectionHeader.text = scope.getFieldValue(scope._nisSectionHeader);	
      scope.view.lblNationalIDSubHeader.text = scope.getFieldValue(scope._nisSubHeader);
      scope.view.btnNationalIDContinue.text = scope.getFieldValue(scope._nisCTAButton, "text");
      scope.view.txtNationalID.placeHolder = scope.getFieldValue(scope._nisTextBoxInput, "placeHolder"); 
      scope.view.txtNationalID.textInputMode = scope.getFieldValue(scope._nisTextBoxInput, "inputMode"); 
      scope.view.txtNationalID.maxTextLength = parseInt(scope.getFieldValue(scope._maxFillMapping)[scope._jsonObjName]["txtBoxNationalID"]); 
    },
    /*
    * component setNationalIDSkins
    * Setting default skins for NationalID Screen
    */
    setNationalIDSkins: function(){
      var scope = this;
      scope.view.flxNationalIDHeader.skin = scope.getFieldValue(scope._gsknHeaderFlex);
      scope.view.btnNationalIDCancel.skin = scope.getFieldValue(scope._gsknCancelBtn);
      scope.view.lblNationalIDSectionHeader.skin = scope.getFieldValue(scope._gsknHeaderLbl);
      scope.view.lblNationalIDSubHeader.skin = scope.getFieldValue(scope._gsknSubHeaderTitle);
      scope.view.flxNationalIDSeparator.skin = scope.getFieldValue(scope._gsknSubHeaderseparator);
      scope.view.lblNationalIDErrorMsg.skin = scope.getFieldValue(scope._gsknErrorTextMessage);
      scope.view.txtNationalID.skin = scope.getFieldValue(scope._gsknTextBoxNormal);
      scope.view.txtNationalID.focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus);            
      scope.view.btnNationalIDContinue.skin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
    },
    /*
    * component setNationalIDActions
    * Setting default actions for NationalID Screen
    */
    setNationalIDActions: function(){
      var scope = this;
      scope.view.btnNationalIDCancel.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._cancelButton)) ? true : false;  
      scope.view.btnNationalIDContinue.onClick = scope.nationalIDInputValidation;
      scope.view.flxNationalIDBack.onTouchEnd = scope.goBack;
      scope.view.txtNationalID.onTextChange = scope.onNationalIDTextChange;
      scope.view.btnNationalIDCancel.onClick = scope.onBackButtonClick;
    },
    /* component setNationalIDData
    * Data actions for NationalID Screen
    */
    setNationalIDData: function(flow){
      var scope = this;
      if(flow === "EDIT"){
        scope.view.txtNationalID.text = scope.getFieldValue(scope._nisTextBoxInput, "value");
        var nationalIDEntered={
          "txtBoxNationalID":  scope.getFieldValue(scope._nisTextBoxInput, "value")
        }; 
        var minlength = scope.minFillValidate(nationalIDEntered);
        var maxlength = scope.maxFillValidate(nationalIDEntered); 
        if(Object.keys(minlength).length === 0 && minlength.constructor === Object && Object.keys(maxlength).length === 0 && maxlength.constructor === Object){
          scope.enableButton("btnNationalIDContinue");            
        } else{
          scope.disableButton("btnNationalIDContinue");
        }        
      }else{
        scope.view.txtNationalID.text = '';
        scope.disableButton("btnNationalIDContinue");
      }
    },
    /*
    * component onNationalIDTextChange
    * onTextChange actions
    */
    onNationalIDTextChange: function(){
      try{
        var scope = this;
        scope.view.txtNationalID.skin = scope._gsknTextBoxNormal;
        scope.view.txtNationalID.focusSkin = scope._gsknTextBoxFocus;
        scope.nationalIDText = scope.view.txtNationalID.text;
        scope.nationalIDText = scope.nationalIDText.replace(/ /g,'');
        var nationalIDEntered={
          "txtBoxNationalID":  scope.nationalIDText
        }; 
        var minlength = scope.minFillValidate(nationalIDEntered);
        var maxlength = scope.maxFillValidate(nationalIDEntered); 
        if(Object.keys(minlength).length === 0 && minlength.constructor === Object && Object.keys(maxlength).length === 0 && maxlength.constructor === Object){
          scope.enableButton("btnNationalIDContinue");            
        } else{
          scope.disableButton("btnNationalIDContinue");
        }        
        var formattedResult = '';
        var valueEntered = scope.view.txtNationalID.text;
        valueEntered  = valueEntered .toUpperCase();
        valueEntered  = valueEntered .replace(/\s/g, '');
        for(var i = 0; i < valueEntered .length; i++) {
          if(i%4 == 0 && i > 0) formattedResult = formattedResult.concat(' ');
          formattedResult = formattedResult.concat(valueEntered [i]);
        }
        scope.view.txtNationalID.text = formattedResult;                
        scope.view.lblNationalIDErrorMsg.setVisibility(false)
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onNationalIDTextChange method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component nationalIDInputValidation
     * To validate the inputs and show error then continue to next screen if all the inputs are valid
     */
    nationalIDInputValidation: function(){
      var scope = this;
      var dataJSON = {
        "txtBoxNationalID": scope.nationalIDText
      }; 
      var dataValidator = scope.performDataValidation(dataJSON);
      if(Object.keys(dataValidator).length === 0 && dataValidator.constructor === Object){
        scope.resetNationalIDErrors();    
        scope.onNationalIDContinue();
      }
      else{
        scope.setNationalIDErrors(dataValidator);  
      }
    },
    /**
     * Component resetNationalIDErrors
     * Reponsible to reset textbox skin
     */
    resetNationalIDErrors: function(){
      try{
        this.view.txtNationalID.skin = this._gsknTextBoxNormal;
        this.view.txtNationalID.focusSkin = this._gsknTextBoxFocus;
        this.view.lblNationalIDErrorMsg.setVisibility(false);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in resetNationalIDErrors method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * @api : setNationalIDErrors
     * displays errors on validation of the fields in national ID screen.
     * @return : NA
     */
    setNationalIDErrors: function(dvfError) {
      this.resetNationalIDErrors();
      for(var iterator in dvfError){
        if("txtBoxNationalID" == iterator){
          this.view.txtNationalID.skin = this._gsknTextBoxError;
          this.view.txtNationalID.focusSkin = this._gsknTextBoxError;
          this.view.lblNationalIDErrorMsg.text = this.getFieldValue(this._nisErrorMessage);
        }
      }         
      this.view.lblNationalIDErrorMsg.setVisibility(true);
    },
    /**
     * Component onNationalIDContinue
     * Navigate to next form based on flow type.
     */
    onNationalIDContinue: function() {
      try {
        var scope = this;    
        if(!kony.sdk.isNullOrUndefined(scope.view.txtNationalID.text) && scope.view.txtNationalID.text !== "") {
          scope.inputPool[scope.getFieldValue(scope._nisTextBoxInput,"inputPoolKey")] = scope.view.txtNationalID.text;
        }
        scope.setVerifyDetails();
        scope.navigateTo("flxVerifyDetails", "flxVfsHeaderTop", scope.getFieldValue(scope._vfsSectionTitle));
        scope.setLinkPayee("ADD");
        scope.navigateTo("flxLinkPayee", "flxLinkPayeeTop", scope.getFieldValue(scope._linkPayeeSectionTitle));

      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onNationalIDContinue method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
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
        //var criteriaObject = JSON.parse(criteria);
        var criteriaObject = criteria;
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
    /**  
     * Component failureValidation
     * Responsible to process the failureValidation
     */
    failureValidation : function()
    {
      var scope = this;
      try{
        scope.onRequestEnd();
        scope.dataProcessorUtility.showToastMessageError(scope, kony.i18n.getLocalizedString("kony.error.StandardErrorMessage"));
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
     * Component resetParams
     * Responsible to reset the params
     */
    resetParams : function()
    {
      var scope = this;
      scope.inputPool["dbpErrCode", ""];
      scope.inputPool["dbpErrMsg", ""];
      scope.inputPool["message", ""];
      scope.inputPool["referenceId", ""];
      scope.inputPool["status", ""];
      scope.view.forceLayout();
    }
  };
});