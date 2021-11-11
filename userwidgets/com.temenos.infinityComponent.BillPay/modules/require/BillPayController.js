define([ './ParserUtilsManager','InfinityComponents/DataValidationFramework/DataValidationHandler','./BillPaymentsDAO','./FormatUtils'],function(ParserUtilsManager,DataValidationHandler,BillPaymentsDAO,FormatUtils) {

  return {
    constructor: function() {
      // Field Properties.
      this._gsknbillpayHeaderFlex = "";
      this._fasObject = "";
      this._fassSearchBox = "";
      this._fasSearchBoxVisible="";
      this._ptssknSubHeader = "";
      this._acnSectionTitle = "";
      this._acnsSubHeader = "";
      this._amntSectionTitle = "";
      this._amntsFlexRowBG = "";
      this._lnSectionTitle = "";
      this._lnsFlexRowBG = "";
      this._vfsSectionTitle = "";
      this._vfssRowBG = "";
      this._bpdSectionTitle = "";
      this._bpdsSubHeader = "";
      this._brSectionTitle = "";
      this._brSknSubHeader = "";
      this._billpayimgBack = "";
      this._fasObjService = "";
      this._fassSubheader = "";
      this._ptssknTxtbxLabel = "";
      this._acnSubHeader = "";
      this._paymentType ="";
      this._acnsTxtbx = "";
      this._amntField1Lbl = "";
      this._amntsLableSkin = "";
      this._lntField1Val = "";
      this._lnsFiled1skin = "";
      this._bpdObjName = "";
      this._vfssLabelSkin = "";
      this._bpdsLabel = "";
      this._brSubHeaderTitle = "";
      this._brSknSubHeaderSeparator = "";
      this._ptSectionTitle = "";
      this._gskBillpaynHeaderLbl = "";
      this._ptSubHeader = "";
      this._billpaybtnCancel = "";
      this._fasObjOperation = "";
      this._fassSegmentHeader = "";
      this._ptssknTxtbx = "";
      this._acnTextbox = "";
      this._amntField1Value = "";
      this._amntsSubValue1 = "";
      this._lnCTA1 = "";
      this._bpdObjService = "";
      this._vfssValueEditableSkin = "";
      this._bpdsValue = "";
      this._brSknSelectedCTA = "";
      this._gsknBillpayCancelBtn = "";
      this._gsknbillpayContentFlex = "";
      this._ptShowFromAccount = "";
      this._billpayFormOrder3 = "";
      this._fasObjOperationCreteria = "";
      this._fassSegHeaderBG = "";
      this._acnCTA1 = "";
      this._amntField1SubLabel = "";
      this._amntsSubValue2 = "";
      this._bpdObjOperation = "";
      this._vfssValueReadonlySkin = "";
      this._bpdsLabelEdit = "";
      this._brSknUnselectedCTA = "";
      this._ptErrTxtbx = "";
      this._gsknTxtboxErr = "";
      this._amntsTxtboxSkin = "";
      this._billpayFormOrder4 = "";
      this._fasGetFromAccountResponse = "";
      this._fassField1 = "";
      this._amntField1SubValue = "";
      this._amntsTxtbxLabel = "";
      this._bpdObjOperationCriteria = "";
      this._vfssSubLabelSkin = "";
      this._bpdGetBillPayeeDetails = "";
      this._bpdsValueEdittbx = "";
      this._gsknbillpaySubhdrFlex = "";
      this._ptTextbox = "";
      this._billpayFormOrder5 = "";
      this._fasSectionTitle = "";
      this._fassField2 = "";
      this._amntTxtbxLabel = "";
      this._amntsInput = "";
      this._vfsField1Label = "";
      this._vfssSubValue = "";
      this._bpdSubHeader = "";
      this._bpdsSeparator = "";
      this._gsknSubhdrSeparator = "";
      this._gsknbillpayErrorTextMsg = "";
      this._ptCTA1 = "";
      this._billpayFormOrder6 = "";
      this._fasSearchBox = "";
      this._fassField3 = "";
      this._amntTxtbx = "";
      this._amntDollarLabel = "";
      this._vfsField1Value = "";
      this._vfssRowSeparator = "";
      this._bpdSubHeaderEdit = "";
      this._gsknPrimaryContexualBtn = "";
      this._billpayLoadingIndicator = "";
      this._fasSubHeader = "";
      this._fassField4 = "";
      this._amntCTA1 = "";
      this._amntAmountLabel = "";
      this._vfsField1SubLabel = "";
      this._vfssNotesRealAll = "";
      this._bpdShowFromAccount = "";
      this._gsknSecondaryContexualBtn = "";
      this._BillpayInterstialScreenText = "";
      this._fasAccSegregationType = "";
      this._fassRowSeparator = "";
      this._vfsField1SubValue = "";
      this._vfssNotes = "";
      this._bpdLabel1 = "";
      this._gsknDisabledContexualBtn = "";
      this._BillpayErrorReporting = "";
      this._fasSegmentTemplate = "";
      this._vfsField2Label = "";
      this._bpdValue1 = "";
      this._gsknBillpayNumericKeypad = "";
      this._gsknBillpayNumericKeypadBorder = "";
      this._gsknBillPayKeypadGrey = "";
      this._gsknErrorScreenTitle = "";
      this._gsknErrorScreenDescription = "";
      this._fasAccListArray = "";
      this._verifyField2Value = "";
      this._bpdLabel1Edit = "";
      this._inputValuesPool = "";
      this._fasAccListIdentifier = "";
      this._vfsField3Label = "";
      this._bpdValue1Edit = "";
      this._gsknTextBoxFocus = "";
      this._fasField1 = "";
      this._verifyField3Value = "";
      this._bpdLabel2 = "";
      this._fasField2 = "";
      this._vfsField4Label = "";
      this._bpdValue2 = "";
      this._fasField3 = "";
      this._verifyField4Value = "";
      this._bpdLabel2Edit = "";
      this._fasField4 = "";
      this._vfsField5Label = "";
      this._bpdValue2Edit = "";
      this._fasBizIconCondition = "";
      this._vfsField6Label = "";
      this._bpdLabel3 = "";
      this._fasBizIcon = "";
      this._verifyField6Value = "";
      this._bpdValue3 = "";
      this._fasRtIcon = "";
      this._vfsField7Label = "";
      this._bpdLabel3Edit = "";
      this._fasSegCollapseIcon = "";
      this._verifyField7Value = "";
      this._bpdValue3Edit = "";
      this._fasSegExpandIcon = "";
      this._vfsField8Label = "";
      this._bpdLabel4 = "";
      this._verifyField8Value = "";
      this._bpdValue4 = "";
      this._vfsField9Label = "";
      this._bpdLabel4Edit = "";
      this._verifyField5Value = "";
      this._bpdValue4Edit = "";
      this._verifyField9Value = "";
      this._bpdLabel5 = "";
      this._vfsImgEdit = "";
      this._bpdValue5 = "";
      this._vfsFieldNotes = "";
      this._bpdLabel5Edit = "";
      this._vfsFieldNotesMoreLink = "";
      this._bpdCTA1 = "";
      this._vfsCTA2 = "";
      this._bpdCTA2 = "";
      this._vfsCTA1 = "";
      this._bpdCTA3 = "";
      this._bpdCTAEditAddress = "";
      this._bpdObjService1 = "";
      this._dvfConfig = "";
      this._minFillMapping = "";
      this._maxFillMapping = "";
      this._jsonObjName = "";
      this._rfpSectionTitle = "";
      this._rfpTxbxLabel = "";
      this._rfpCTA1 = "";
      this._rfpTxtbx = "";
      this._rfpsTxtbx = "";
      this._rfpsSubHeader = "";
      this._rfpsTxtbxLabel = "";
      this._brdropdownOptions = "";
      this._brSknOptionSelection = "";
      this._bpdValue5Edit = "";
      this._bpdObjName1 = "";
      this._bpdObjOperation1 = "";
      this._bpdObjOperation1Criteria = "";
      this.accountNumberkeypadString = "";
      this.amountkeypadString = "";
      this._AccTypedataPermsn = "";
      this._errsTitleMessage = "";
      this._errsSubTitile = "";
      this._errsFailIcon = "";
      this._errsCTA1 = "";
      this._errsCTA2 = "";
      this._vfsLegalNotes = "";
      this._vfsLegalNotesDesc = "";
      this._errsCTA3 = "";
      this._errscreenCTA3="";
      this._errsErrorHeader = "";
      this._rfpTextboxType = "";
      this._ptTbxHeader = "";
      this._acnTbxHeader = "";
      this._rfpTbxHeader = "";
      this._fadFromLabel = "";
      this._fadAccountName = "";
      this._fadBalanceLable = "";
      this._fadBalanceValue = "";
      this._brShowFromAccount = "";
      this._bpdShowFromAccount = "";
      this._rfpShowFromAccount = "";
      this._acnShowFromAccount = "";
      this._fadsFlexBg = "";
      this._fadsFromLabel = "";
      this._fadsAccountName = "";
      this._fadsBalanceLabel = "";
      this._fadsBalanceValue = "";
      this._vfsLegalNotesType = "";
      this._filterTypeList ="";
      this._vfsfesibilityFailMsg = "";
      this._vfsAmoutValidationErrMsg = "";
      this._vfsImgWarn = "";
      this._amntZeroBalWarnMsg = "";
      this._amntinsufficientMsg = "";
      this._vfsField10Label = "";
      this._verifyField10Value="";
      this._vfserrortype="";
      this._billpayEdit="";
      this._vfsShowLessLink = "";
      this._amntFormatAmount = "";
      this._searchicon = "";
      this._acnsTbxHeaderLabel = "";
      this.clearSearchApplied=false;
       this._imgFromChevron = "";
      //Object.
      this.parserUtilsManager = new ParserUtilsManager();
      this.dataValidationHandler = new DataValidationHandler();
      this.BillPaymentsDAO = new BillPaymentsDAO();
      this.FormatUtils = new FormatUtils();
      // Global Variables.
      this.stack = [];
      this.headerTitleStack = [];
      this.inputPool = {};
      this.userFlowType = "";
      this.userEditPayeeDetails = "";
      this.mfaOperationName = "";
      this.segmentData = "";
      this.amountkeypadString = "0.00";
      this.amountSelectedFlowType="";
      this.isPeriodUsed =  false;
      this.AccountType_DataPermission = "";
      this.isBusinessAccountListValue = "";
      this.searchApplied = false;
      this.backUpFromAccountList = "";
      this.backUpFromAccountMapping = "";
      this.clearSearchApplied = false;
      this.response = "";
      this.errorSectionTitle = "";
      this.responseLength = "";
    },

    //Logic for getters/setters of custom properties.
    initGettersSetters: function() {
      defineGetter(this,  'gsknbillpayHeaderFlex', () => {
        return this._gsknbillpayHeaderFlex;
      });
      defineSetter(this,  'gsknbillpayHeaderFlex', value => {
        this._gsknbillpayHeaderFlex = value;
      });
      
       defineGetter(this,  'billpayEdit', () => {
        return this._billpayEdit;
      });
      defineSetter(this,  'billpayEdit', value => {
        this._billpayEdit = value;
      });

      defineGetter(this,  'fasObject', () => {
        return this._fasObject;
      });
      defineSetter(this,  'fasObject', value => {
        this._fasObject = value;
      });

      defineGetter(this,  'fassSearchBox', () => {
        return this._fassSearchBox;
      });
      defineSetter(this,  'fassSearchBox', value => {
        this._fassSearchBox = value;
      });
      defineGetter(this,  'fasSearchBoxVisible', () => {
        return this._fasSearchBoxVisible;
      });
      defineSetter(this,  'fasSearchBoxVisible', value => {
        this._fasSearchBoxVisible = value;
      });

      defineGetter(this,  'ptssknSubHeader', () => {
        return this._ptssknSubHeader;
      });
      defineSetter(this,  'ptssknSubHeader', value => {
        this._ptssknSubHeader = value;
      });

      defineGetter(this,  'acnSectionTitle', () => {
        return this._acnSectionTitle;
      });
      defineSetter(this,  'acnSectionTitle', value => {
        this._acnSectionTitle = value;
      });

      defineGetter(this,  'acnsSubHeader', () => {
        return this._acnsSubHeader;
      });
      defineSetter(this,  'acnsSubHeader', value => {
        this._acnsSubHeader = value;
      });

      defineGetter(this,  'amntSectionTitle', () => {
        return this._amntSectionTitle;
      });
      defineSetter(this,  'amntSectionTitle', value => {
        this._amntSectionTitle = value;
      });

      defineGetter(this,  'amntsFlexRowBG', () => {
        return this._amntsFlexRowBG;
      });
      defineSetter(this,  'amntsFlexRowBG', value => {
        this._amntsFlexRowBG = value;
      });
      
      defineGetter(this,  'filterTypeList', () => {
        return this._filterTypeList;
      });
      defineSetter(this,  'filterTypeList', value => {
        this._filterTypeList = value;
      });

      defineGetter(this,  'lnSectionTitle', () => {
        return this._lnSectionTitle;
      });
      defineSetter(this,  'lnSectionTitle', value => {
        this._lnSectionTitle = value;
      });

      defineGetter(this,  'lnsFlexRowBG', () => {
        return this._lnsFlexRowBG;
      });
      defineSetter(this,  'lnsFlexRowBG', value => {
        this._lnsFlexRowBG = value;
      });

      defineGetter(this,  'vfsSectionTitle', () => {
        return this._vfsSectionTitle;
      });
      defineSetter(this,  'vfsSectionTitle', value => {
        this._vfsSectionTitle = value;
      });

      defineGetter(this,  'vfssRowBG', () => {
        return this._vfssRowBG;
      });
      defineSetter(this,  'vfssRowBG', value => {
        this._vfssRowBG = value;
      });

      defineGetter(this,  'bpdSectionTitle', () => {
        return this._bpdSectionTitle;
      });
      defineSetter(this,  'bpdSectionTitle', value => {
        this._bpdSectionTitle = value;
      });

      defineGetter(this,  'bpdsSubHeader', () => {
        return this._bpdsSubHeader;
      });
      defineSetter(this,  'bpdsSubHeader', value => {
        this._bpdsSubHeader = value;
      });

      defineGetter(this,  'brSectionTitle', () => {
        return this._brSectionTitle;
      });
      defineSetter(this,  'brSectionTitle', value => {
        this._brSectionTitle = value;
      });

      defineGetter(this,  'brSknSubHeader', () => {
        return this._brSknSubHeader;
      });
      defineSetter(this,  'brSknSubHeader', value => {
        this._brSknSubHeader = value;
      });

      defineGetter(this,  'billpayimgBack', () => {
        return this._billpayimgBack;
      });
      defineSetter(this,  'billpayimgBack', value => {
        this._billpayimgBack = value;
      });

      defineGetter(this,  'fasObjService', () => {
        return this._fasObjService;
      });
      defineSetter(this,  'fasObjService', value => {
        this._fasObjService = value;
      });

      defineGetter(this,  'fassSubheader', () => {
        return this._fassSubheader;
      });
      defineSetter(this,  'fassSubheader', value => {
        this._fassSubheader = value;
      });

      defineGetter(this,  'ptssknTxtbxLabel', () => {
        return this._ptssknTxtbxLabel;
      });
      defineSetter(this,  'ptssknTxtbxLabel', value => {
        this._ptssknTxtbxLabel = value;
      });

      defineGetter(this,  'acnSubHeader', () => {
        return this._acnSubHeader;
      });
      defineSetter(this,  'acnSubHeader', value => {
        this._acnSubHeader = value;
      });

      defineGetter(this,  'acnsTxtbx', () => {
        return this._acnsTxtbx;
      });
      defineSetter(this,  'acnsTxtbx', value => {
        this._acnsTxtbx = value;
      });

      defineGetter(this,  'amntField1Lbl', () => {
        return this._amntField1Lbl;
      });
      defineSetter(this,  'amntField1Lbl', value => {
        this._amntField1Lbl = value;
      });

      defineGetter(this,  'amntsLableSkin', () => {
        return this._amntsLableSkin;
      });
      defineSetter(this,  'amntsLableSkin', value => {
        this._amntsLableSkin = value;
      });

      defineGetter(this,  'lntField1Val', () => {
        return this._lntField1Val;
      });
      defineSetter(this,  'lntField1Val', value => {
        this._lntField1Val = value;
      });

      defineGetter(this,  'lnsFiled1skin', () => {
        return this._lnsFiled1skin;
      });
      defineSetter(this,  'lnsFiled1skin', value => {
        this._lnsFiled1skin = value;
      });

      defineGetter(this,  'bpdObjName', () => {
        return this._bpdObjName;
      });
      defineSetter(this,  'bpdObjName', value => {
        this._bpdObjName = value;
      });

      defineGetter(this,  'vfssLabelSkin', () => {
        return this._vfssLabelSkin;
      });
      defineSetter(this,  'vfssLabelSkin', value => {
        this._vfssLabelSkin = value;
      });

      defineGetter(this,  'bpdsLabel', () => {
        return this._bpdsLabel;
      });
      defineSetter(this,  'bpdsLabel', value => {
        this._bpdsLabel = value;
      });

      defineGetter(this,  'brSubHeaderTitle', () => {
        return this._brSubHeaderTitle;
      });
      defineSetter(this,  'brSubHeaderTitle', value => {
        this._brSubHeaderTitle = value;
      });

      defineGetter(this,  'brSknSubHeaderSeparator', () => {
        return this._brSknSubHeaderSeparator;
      });
      defineSetter(this,  'brSknSubHeaderSeparator', value => {
        this._brSknSubHeaderSeparator = value;
      });

      defineGetter(this,  'ptSectionTitle', () => {
        return this._ptSectionTitle;
      });
      defineSetter(this,  'ptSectionTitle', value => {
        this._ptSectionTitle = value;
      });

      defineGetter(this,  'gskBillpaynHeaderLbl', () => {
        return this._gskBillpaynHeaderLbl;
      });
      defineSetter(this,  'gskBillpaynHeaderLbl', value => {
        this._gskBillpaynHeaderLbl = value;
      });

      defineGetter(this,  'ptSubHeader', () => {
        return this._ptSubHeader;
      });
      defineSetter(this,  'ptSubHeader', value => {
        this._ptSubHeader = value;
      });

      defineGetter(this,  'billpaybtnCancel', () => {
        return this._billpaybtnCancel;
      });
      defineSetter(this,  'billpaybtnCancel', value => {
        this._billpaybtnCancel = value;
      });

      defineGetter(this,  'fasObjOperation', () => {
        return this._fasObjOperation;
      });
      defineSetter(this,  'fasObjOperation', value => {
        this._fasObjOperation = value;
      });

      defineGetter(this,  'fassSegmentHeader', () => {
        return this._fassSegmentHeader;
      });
      defineSetter(this,  'fassSegmentHeader', value => {
        this._fassSegmentHeader = value;
      });

      defineGetter(this,  'ptssknTxtbx', () => {
        return this._ptssknTxtbx;
      });
      defineSetter(this,  'ptssknTxtbx', value => {
        this._ptssknTxtbx = value;
      });

      defineGetter(this,  'acnTextbox', () => {
        return this._acnTextbox;
      });
      defineSetter(this,  'acnTextbox', value => {
        this._acnTextbox = value;
      });

      defineGetter(this,  'amntField1Value', () => {
        return this._amntField1Value;
      });
      defineSetter(this,  'amntField1Value', value => {
        this._amntField1Value = value;
      });

      defineGetter(this,  'amntsSubValue1', () => {
        return this._amntsSubValue1;
      });
      defineSetter(this,  'amntsSubValue1', value => {
        this._amntsSubValue1 = value;
      });

      defineGetter(this,  'lnCTA1', () => {
        return this._lnCTA1;
      });
      defineSetter(this,  'lnCTA1', value => {
        this._lnCTA1 = value;
      });

      defineGetter(this,  'bpdObjService', () => {
        return this._bpdObjService;
      });
      defineSetter(this,  'bpdObjService', value => {
        this._bpdObjService = value;
      });

      defineGetter(this,  'vfssValueEditableSkin', () => {
        return this._vfssValueEditableSkin;
      });
      defineSetter(this,  'vfssValueEditableSkin', value => {
        this._vfssValueEditableSkin = value;
      });

      defineGetter(this,  'bpdsValue', () => {
        return this._bpdsValue;
      });
      defineSetter(this,  'bpdsValue', value => {
        this._bpdsValue = value;
      });

      defineGetter(this,  'brSknSelectedCTA', () => {
        return this._brSknSelectedCTA;
      });
      defineSetter(this,  'brSknSelectedCTA', value => {
        this._brSknSelectedCTA = value;
      });

      defineGetter(this,  'gsknBillpayCancelBtn', () => {
        return this._gsknBillpayCancelBtn;
      });
      defineSetter(this,  'gsknBillpayCancelBtn', value => {
        this._gsknBillpayCancelBtn = value;
      });

      defineGetter(this,  'gsknErrorScreenTitle', () => {
        return this._gsknErrorScreenTitle;
      });
      defineSetter(this,  'gsknErrorScreenTitle', value => {
        this._gsknErrorScreenTitle = value;
      });

      defineGetter(this,  'gsknErrorScreenDescription', () => {
        return this._gsknErrorScreenDescription;
      });
      defineSetter(this,  'gsknErrorScreenDescription', value => {
        this._gsknErrorScreenDescription = value;
      });

      defineGetter(this,  'gsknbillpayContentFlex', () => {
        return this._gsknbillpayContentFlex;
      });
      defineSetter(this,  'gsknbillpayContentFlex', value => {
        this._gsknbillpayContentFlex = value;
      });

      defineGetter(this,  'ptShowFromAccount', () => {
        return this._ptShowFromAccount;
      });
      defineSetter(this,  'ptShowFromAccount', value => {
        this._ptShowFromAccount = value;
      });

      defineGetter(this,  'billpayFormOrder3', () => {
        return this._billpayFormOrder3;
      });
      defineSetter(this,  'billpayFormOrder3', value => {
        this._billpayFormOrder3 = value;
      });

      defineGetter(this,  'fasObjOperationCreteria', () => {
        return this._fasObjOperationCreteria;
      });
      defineSetter(this,  'fasObjOperationCreteria', value => {
        this._fasObjOperationCreteria = value;
      });

      defineGetter(this,  'fassSegHeaderBG', () => {
        return this._fassSegHeaderBG;
      });
      defineSetter(this,  'fassSegHeaderBG', value => {
        this._fassSegHeaderBG = value;
      });

      defineGetter(this,  'acnCTA1', () => {
        return this._acnCTA1;
      });
      defineSetter(this,  'acnCTA1', value => {
        this._acnCTA1 = value;
      });

      defineGetter(this,  'amntField1SubLabel', () => {
        return this._amntField1SubLabel;
      });
      defineSetter(this,  'amntField1SubLabel', value => {
        this._amntField1SubLabel = value;
      });

      defineGetter(this,  'amntsSubValue2', () => {
        return this._amntsSubValue2;
      });
      defineSetter(this,  'amntsSubValue2', value => {
        this._amntsSubValue2 = value;
      });

      defineGetter(this,  'bpdObjOperation', () => {
        return this._bpdObjOperation;
      });
      defineSetter(this,  'bpdObjOperation', value => {
        this._bpdObjOperation = value;
      });

      defineGetter(this,  'vfssValueReadonlySkin', () => {
        return this._vfssValueReadonlySkin;
      });
      defineSetter(this,  'vfssValueReadonlySkin', value => {
        this._vfssValueReadonlySkin = value;
      });

      defineGetter(this,  'bpdsLabelEdit', () => {
        return this._bpdsLabelEdit;
      });
      defineSetter(this,  'bpdsLabelEdit', value => {
        this._bpdsLabelEdit = value;
      });

      defineGetter(this,  'brSknUnselectedCTA', () => {
        return this._brSknUnselectedCTA;
      });
      defineSetter(this,  'brSknUnselectedCTA', value => {
        this._brSknUnselectedCTA = value;
      });

      defineGetter(this,  'ptErrTxtbx', () => {
        return this._ptErrTxtbx;
      });
      defineSetter(this,  'ptErrTxtbx', value => {
        this._ptErrTxtbx = value;
      });

      defineGetter(this,  'gsknTxtboxErr', () => {
        return this._gsknTxtboxErr;
      });
      defineSetter(this,  'gsknTxtboxErr', value => {
        this._gsknTxtboxErr = value;
      });

      defineGetter(this,  'amntsTxtboxSkin', () => {
        return this._amntsTxtboxSkin;
      });
      defineSetter(this,  'amntsTxtboxSkin', value => {
        this._amntsTxtboxSkin = value;
      });

      defineGetter(this,  'billpayFormOrder4', () => {
        return this._billpayFormOrder4;
      });
      defineSetter(this,  'billpayFormOrder4', value => {
        this._billpayFormOrder4 = value;
      });

      defineGetter(this,  'fasGetFromAccountResponse', () => {
        return this._fasGetFromAccountResponse;
      });
      defineSetter(this,  'fasGetFromAccountResponse', value => {
        this._fasGetFromAccountResponse = value;
      });

      defineGetter(this,  'fassField1', () => {
        return this._fassField1;
      });
      defineSetter(this,  'fassField1', value => {
        this._fassField1 = value;
      });

      defineGetter(this,  'amntField1SubValue', () => {
        return this._amntField1SubValue;
      });
      defineSetter(this,  'amntField1SubValue', value => {
        this._amntField1SubValue = value;
      });

      defineGetter(this,  'amntsTxtbxLabel', () => {
        return this._amntsTxtbxLabel;
      });
      defineSetter(this,  'amntsTxtbxLabel', value => {
        this._amntsTxtbxLabel = value;
      });

      defineGetter(this,  'bpdObjOperationCriteria', () => {
        return this._bpdObjOperationCriteria;
      });
      defineSetter(this,  'bpdObjOperationCriteria', value => {
        this._bpdObjOperationCriteria = value;
      });

      defineGetter(this,  'vfssSubLabelSkin', () => {
        return this._vfssSubLabelSkin;
      });
      defineSetter(this,  'vfssSubLabelSkin', value => {
        this._vfssSubLabelSkin = value;
      });

      defineGetter(this,  'bpdGetBillPayeeDetails', () => {
        return this._bpdGetBillPayeeDetails;
      });
      defineSetter(this,  'bpdGetBillPayeeDetails', value => {
        this._bpdGetBillPayeeDetails = value;
      });

      defineGetter(this,  'bpdsValueEdittbx', () => {
        return this._bpdsValueEdittbx;
      });
      defineSetter(this,  'bpdsValueEdittbx', value => {
        this._bpdsValueEdittbx = value;
      });

      defineGetter(this,  'gsknbillpaySubhdrFlex', () => {
        return this._gsknbillpaySubhdrFlex;
      });
      defineSetter(this,  'gsknbillpaySubhdrFlex', value => {
        this._gsknbillpaySubhdrFlex = value;
      });

      defineGetter(this,  'ptTextbox', () => {
        return this._ptTextbox;
      });
      defineSetter(this,  'ptTextbox', value => {
        this._ptTextbox = value;
      });

      defineGetter(this,  'billpayFormOrder5', () => {
        return this._billpayFormOrder5;
      });
      defineSetter(this,  'billpayFormOrder5', value => {
        this._billpayFormOrder5 = value;
      });

      defineGetter(this,  'fasSectionTitle', () => {
        return this._fasSectionTitle;
      });
      defineSetter(this,  'fasSectionTitle', value => {
        this._fasSectionTitle = value;
      });

      defineGetter(this,  'fassField2', () => {
        return this._fassField2;
      });
      defineSetter(this,  'fassField2', value => {
        this._fassField2 = value;
      });

      defineGetter(this,  'amntTxtbxLabel', () => {
        return this._amntTxtbxLabel;
      });
      defineSetter(this,  'amntTxtbxLabel', value => {
        this._amntTxtbxLabel = value;
      });

      defineGetter(this,  'amntsInput', () => {
        return this._amntsInput;
      });
      defineSetter(this,  'amntsInput', value => {
        this._amntsInput = value;
      });

      defineGetter(this,  'vfsField1Label', () => {
        return this._vfsField1Label;
      });
      defineSetter(this,  'vfsField1Label', value => {
        this._vfsField1Label = value;
      });

      defineGetter(this,  'vfssSubValue', () => {
        return this._vfssSubValue;
      });
      defineSetter(this,  'vfssSubValue', value => {
        this._vfssSubValue = value;
      });

      defineGetter(this,  'bpdSubHeader', () => {
        return this._bpdSubHeader;
      });
      defineSetter(this,  'bpdSubHeader', value => {
        this._bpdSubHeader = value;
      });

      defineGetter(this,  'bpdsSeparator', () => {
        return this._bpdsSeparator;
      });
      defineSetter(this,  'bpdsSeparator', value => {
        this._bpdsSeparator = value;
      });

      defineGetter(this,  'gsknSubhdrSeparator', () => {
        return this._gsknSubhdrSeparator;
      });
      defineSetter(this,  'gsknSubhdrSeparator', value => {
        this._gsknSubhdrSeparator = value;
      });

      defineGetter(this,  'gsknbillpayErrorTextMsg', () => {
        return this._gsknbillpayErrorTextMsg;
      });
      defineSetter(this,  'gsknbillpayErrorTextMsg', value => {
        this._gsknbillpayErrorTextMsg = value;
      });

      defineGetter(this,  'ptCTA1', () => {
        return this._ptCTA1;
      });
      defineSetter(this,  'ptCTA1', value => {
        this._ptCTA1 = value;
      });

      defineGetter(this,  'billpayFormOrder6', () => {
        return this._billpayFormOrder6;
      });
      defineSetter(this,  'billpayFormOrder6', value => {
        this._billpayFormOrder6 = value;
      });

      defineGetter(this,  'fasSearchBox', () => {
        return this._fasSearchBox;
      });
      defineSetter(this,  'fasSearchBox', value => {
        this._fasSearchBox = value;
      });

      defineGetter(this,  'fassField3', () => {
        return this._fassField3;
      });
      defineSetter(this,  'fassField3', value => {
        this._fassField3 = value;
      });

      defineGetter(this,  'rfpTxtbx', () => {
        return this._rfpTxtbx;
      });
      defineSetter(this,  'rfpTxtbx', value => {
        this._rfpTxtbx = value;
      });

      defineGetter(this,  'amntDollarLabel', () => {
        return this._amntDollarLabel;
      });
      defineSetter(this,  'amntDollarLabel', value => {
        this._amntDollarLabel = value;
      });

      defineGetter(this,  'vfsField1Value', () => {
        return this._vfsField1Value;
      });
      defineSetter(this,  'vfsField1Value', value => {
        this._vfsField1Value = value;
      });

      defineGetter(this,  'vfssRowSeparator', () => {
        return this._vfssRowSeparator;
      });
      defineSetter(this,  'vfssRowSeparator', value => {
        this._vfssRowSeparator = value;
      });

      defineGetter(this,  'bpdSubHeaderEdit', () => {
        return this._bpdSubHeaderEdit;
      });
      defineSetter(this,  'bpdSubHeaderEdit', value => {
        this._bpdSubHeaderEdit = value;
      });

      defineGetter(this,  'gsknPrimaryContexualBtn', () => {
        return this._gsknPrimaryContexualBtn;
      });
      defineSetter(this,  'gsknPrimaryContexualBtn', value => {
        this._gsknPrimaryContexualBtn = value;
      });

      defineGetter(this,  'billpayLoadingIndicator', () => {
        return this._billpayLoadingIndicator;
      });
      defineSetter(this,  'billpayLoadingIndicator', value => {
        this._billpayLoadingIndicator = value;
      });

      defineGetter(this,  'fasSubHeader', () => {
        return this._fasSubHeader;
      });
      defineSetter(this,  'fasSubHeader', value => {
        this._fasSubHeader = value;
      });

      defineGetter(this,  'fassField4', () => {
        return this._fassField4;
      });
      defineSetter(this,  'fassField4', value => {
        this._fassField4 = value;
      });

      defineGetter(this,  'amntCTA1', () => {
        return this._amntCTA1;
      });
      defineSetter(this,  'amntCTA1', value => {
        this._amntCTA1 = value;
      });

      defineGetter(this,  'amntAmountLabel', () => {
        return this._amntAmountLabel;
      });
      defineSetter(this,  'amntAmountLabel', value => {
        this._amntAmountLabel = value;
      });

      defineGetter(this,  'vfsField1SubLabel', () => {
        return this._vfsField1SubLabel;
      });
      defineSetter(this,  'vfsField1SubLabel', value => {
        this._vfsField1SubLabel = value;
      });

      defineGetter(this,  'vfssNotesRealAll', () => {
        return this._vfssNotesRealAll;
      });
      defineSetter(this,  'vfssNotesRealAll', value => {
        this._vfssNotesRealAll = value;
      });

      defineGetter(this,  'bpdShowFromAccount', () => {
        return this._bpdShowFromAccount;
      });
      defineSetter(this,  'bpdShowFromAccount', value => {
        this._bpdShowFromAccount = value;
      });

      defineGetter(this,  'gsknSecondaryContexualBtn', () => {
        return this._gsknSecondaryContexualBtn;
      });
      defineSetter(this,  'gsknSecondaryContexualBtn', value => {
        this._gsknSecondaryContexualBtn = value;
      });

      defineGetter(this,  'BillpayInterstialScreenText', () => {
        return this._BillpayInterstialScreenText;
      });
      defineSetter(this,  'BillpayInterstialScreenText', value => {
        this._BillpayInterstialScreenText = value;
      });

      defineGetter(this,  'fasAccSegregationType', () => {
        return this._fasAccSegregationType;
      });
      defineSetter(this,  'fasAccSegregationType', value => {
        this._fasAccSegregationType = value;
      });

      defineGetter(this,  'fassRowSeparator', () => {
        return this._fassRowSeparator;
      });
      defineSetter(this,  'fassRowSeparator', value => {
        this._fassRowSeparator = value;
      });

      defineGetter(this,  'vfsField1SubValue', () => {
        return this._vfsField1SubValue;
      });
      defineSetter(this,  'vfsField1SubValue', value => {
        this._vfsField1SubValue = value;
      });

      defineGetter(this,  'vfssNotes', () => {
        return this._vfssNotes;
      });
      defineSetter(this,  'vfssNotes', value => {
        this._vfssNotes = value;
      });

      defineGetter(this,  'bpdLabel1', () => {
        return this._bpdLabel1;
      });
      defineSetter(this,  'bpdLabel1', value => {
        this._bpdLabel1 = value;
      });

      defineGetter(this,  'gsknDisabledContexualBtn', () => {
        return this._gsknDisabledContexualBtn;
      });
      defineSetter(this,  'gsknDisabledContexualBtn', value => {
        this._gsknDisabledContexualBtn = value;
      });

      defineGetter(this,  'BillpayErrorReporting', () => {
        return this._BillpayErrorReporting;
      });
      defineSetter(this,  'BillpayErrorReporting', value => {
        this._BillpayErrorReporting = value;
      });

      defineGetter(this,  'fasSegmentTemplate', () => {
        return this._fasSegmentTemplate;
      });
      defineSetter(this,  'fasSegmentTemplate', value => {
        this._fasSegmentTemplate = value;
      });

      defineGetter(this,  'vfsField2Label', () => {
        return this._vfsField2Label;
      });
      defineSetter(this,  'vfsField2Label', value => {
        this._vfsField2Label = value;
      });

      defineGetter(this,  'bpdValue1', () => {
        return this._bpdValue1;
      });
      defineSetter(this,  'bpdValue1', value => {
        this._bpdValue1 = value;
      });

      defineGetter(this,  'gsknBillpayNumericKeypad', () => {
        return this._gsknBillpayNumericKeypad;
      });
      defineSetter(this,  'gsknBillpayNumericKeypad', value => {
        this._gsknBillpayNumericKeypad = value;
      });
      defineGetter(this,  'gsknBillpayNumericKeypadBorder', () => {
        return this._gsknBillpayNumericKeypadBorder;
      });
      defineSetter(this,  'gsknBillpayNumericKeypadBorder', value => {
        this._gsknBillpayNumericKeypadBorder = value;
      });
      defineGetter(this,  'gsknBillPayKeypadGrey', () => {
        return this._gsknBillPayKeypadGrey;
      });
      defineSetter(this,  'gsknBillPayKeypadGrey', value => {
        this._gsknBillPayKeypadGrey = value;
      });

      defineGetter(this,  'fasAccListArray', () => {
        return this._fasAccListArray;
      });
      defineSetter(this,  'fasAccListArray', value => {
        this._fasAccListArray = value;
      });

      defineGetter(this,  'verifyField2Value', () => {
        return this._verifyField2Value;
      });
      defineSetter(this,  'verifyField2Value', value => {
        this._verifyField2Value = value;
      });

      defineGetter(this,  'bpdLabel1Edit', () => {
        return this._bpdLabel1Edit;
      });
      defineSetter(this,  'bpdLabel1Edit', value => {
        this._bpdLabel1Edit = value;
      });

      defineGetter(this,  'inputValuesPool', () => {
        return this._inputValuesPool;
      });
      defineSetter(this,  'inputValuesPool', value => {
        this._inputValuesPool = value;
      });

      defineGetter(this,  'fasAccListIdentifier', () => {
        return this._fasAccListIdentifier;
      });
      defineSetter(this,  'fasAccListIdentifier', value => {
        this._fasAccListIdentifier = value;
      });

      defineGetter(this,  'vfsField3Label', () => {
        return this._vfsField3Label;
      });
      defineSetter(this,  'vfsField3Label', value => {
        this._vfsField3Label = value;
      });

      defineGetter(this,  'bpdValue1Edit', () => {
        return this._bpdValue1Edit;
      });
      defineSetter(this,  'bpdValue1Edit', value => {
        this._bpdValue1Edit = value;
      });

      defineGetter(this,  'gsknTextBoxFocus', () => {
        return this._gsknTextBoxFocus;
      });
      defineSetter(this,  'gsknTextBoxFocus', value => {
        this._gsknTextBoxFocus = value;
      });

      defineGetter(this,  'fasField1', () => {
        return this._fasField1;
      });
      defineSetter(this,  'fasField1', value => {
        this._fasField1 = value;
      });

      defineGetter(this,  'verifyField3Value', () => {
        return this._verifyField3Value;
      });
      defineSetter(this,  'verifyField3Value', value => {
        this._verifyField3Value = value;
      });

      defineGetter(this,  'bpdLabel2', () => {
        return this._bpdLabel2;
      });
      defineSetter(this,  'bpdLabel2', value => {
        this._bpdLabel2 = value;
      });

      defineGetter(this,  'fasField2', () => {
        return this._fasField2;
      });
      defineSetter(this,  'fasField2', value => {
        this._fasField2 = value;
      });

      defineGetter(this,  'vfsField4Label', () => {
        return this._vfsField4Label;
      });
      defineSetter(this,  'vfsField4Label', value => {
        this._vfsField4Label = value;
      });

      defineGetter(this,  'bpdValue2', () => {
        return this._bpdValue2;
      });
      defineSetter(this,  'bpdValue2', value => {
        this._bpdValue2 = value;
      });

      defineGetter(this,  'fasField3', () => {
        return this._fasField3;
      });
      defineSetter(this,  'fasField3', value => {
        this._fasField3 = value;
      });

      defineGetter(this,  'verifyField4Value', () => {
        return this._verifyField4Value;
      });
      defineSetter(this,  'verifyField4Value', value => {
        this._verifyField4Value = value;
      });

      defineGetter(this,  'bpdLabel2Edit', () => {
        return this._bpdLabel2Edit;
      });
      defineSetter(this,  'bpdLabel2Edit', value => {
        this._bpdLabel2Edit = value;
      });

      defineGetter(this,  'fasField4', () => {
        return this._fasField4;
      });
      defineSetter(this,  'fasField4', value => {
        this._fasField4 = value;
      });

      defineGetter(this,  'vfsField5Label', () => {
        return this._vfsField5Label;
      });
      defineSetter(this,  'vfsField5Label', value => {
        this._vfsField5Label = value;
      });

      defineGetter(this,  'bpdValue2Edit', () => {
        return this._bpdValue2Edit;
      });
      defineSetter(this,  'bpdValue2Edit', value => {
        this._bpdValue2Edit = value;
      });

      defineGetter(this,  'fasBizIconCondition', () => {
        return this._fasBizIconCondition;
      });
      defineSetter(this,  'fasBizIconCondition', value => {
        this._fasBizIconCondition = value;
      });

      defineGetter(this,  'vfsField6Label', () => {
        return this._vfsField6Label;
      });
      defineSetter(this,  'vfsField6Label', value => {
        this._vfsField6Label = value;
      });

      defineGetter(this,  'bpdLabel3', () => {
        return this._bpdLabel3;
      });
      defineSetter(this,  'bpdLabel3', value => {
        this._bpdLabel3 = value;
      });

      defineGetter(this,  'fasBizIcon', () => {
        return this._fasBizIcon;
      });
      defineSetter(this,  'fasBizIcon', value => {
        this._fasBizIcon = value;
      });

      defineGetter(this,  'verifyField6Value', () => {
        return this._verifyField6Value;
      });
      defineSetter(this,  'verifyField6Value', value => {
        this._verifyField6Value = value;
      });

      defineGetter(this,  'bpdValue3', () => {
        return this._bpdValue3;
      });
      defineSetter(this,  'bpdValue3', value => {
        this._bpdValue3 = value;
      });

      defineGetter(this,  'fasRtIcon', () => {
        return this._fasRtIcon;
      });
      defineSetter(this,  'fasRtIcon', value => {
        this._fasRtIcon = value;
      });

      defineGetter(this,  'vfsField7Label', () => {
        return this._vfsField7Label;
      });
      defineSetter(this,  'vfsField7Label', value => {
        this._vfsField7Label = value;
      });

      defineGetter(this,  'bpdLabel3Edit', () => {
        return this._bpdLabel3Edit;
      });
      defineSetter(this,  'bpdLabel3Edit', value => {
        this._bpdLabel3Edit = value;
      });

      defineGetter(this,  'fasSegCollapseIcon', () => {
        return this._fasSegCollapseIcon;
      });
      defineSetter(this,  'fasSegCollapseIcon', value => {
        this._fasSegCollapseIcon = value;
      });

      defineGetter(this,  'verifyField7Value', () => {
        return this._verifyField7Value;
      });
      defineSetter(this,  'verifyField7Value', value => {
        this._verifyField7Value = value;
      });

      defineGetter(this,  'bpdValue3Edit', () => {
        return this._bpdValue3Edit;
      });
      defineSetter(this,  'bpdValue3Edit', value => {
        this._bpdValue3Edit = value;
      });

      defineGetter(this,  'fasSegExpandIcon', () => {
        return this._fasSegExpandIcon;
      });
      defineSetter(this,  'fasSegExpandIcon', value => {
        this._fasSegExpandIcon = value;
      });

      defineGetter(this,  'vfsField8Label', () => {
        return this._vfsField8Label;
      });
      defineSetter(this,  'vfsField8Label', value => {
        this._vfsField8Label = value;
      });

      defineGetter(this,  'bpdLabel4', () => {
        return this._bpdLabel4;
      });
      defineSetter(this,  'bpdLabel4', value => {
        this._bpdLabel4 = value;
      });

      defineGetter(this,  'verifyField8Value', () => {
        return this._verifyField8Value;
      });
      defineSetter(this,  'verifyField8Value', value => {
        this._verifyField8Value = value;
      });

      defineGetter(this,  'bpdValue4', () => {
        return this._bpdValue4;
      });
      defineSetter(this,  'bpdValue4', value => {
        this._bpdValue4 = value;
      });

      defineGetter(this,  'vfsField9Label', () => {
        return this._vfsField9Label;
      });
      defineSetter(this,  'vfsField9Label', value => {
        this._vfsField9Label = value;
      });

      defineGetter(this,  'bpdLabel4Edit', () => {
        return this._bpdLabel4Edit;
      });
      defineSetter(this,  'bpdLabel4Edit', value => {
        this._bpdLabel4Edit = value;
      });

      defineGetter(this,  'verifyField5Value', () => {
        return this._verifyField5Value;
      });
      defineSetter(this,  'verifyField5Value', value => {
        this._verifyField5Value = value;
      });

      defineGetter(this,  'bpdValue4Edit', () => {
        return this._bpdValue4Edit;
      });
      defineSetter(this,  'bpdValue4Edit', value => {
        this._bpdValue4Edit = value;
      });

      defineGetter(this,  'verifyField9Value', () => {
        return this._verifyField9Value;
      });
      defineSetter(this,  'verifyField9Value', value => {
        this._verifyField9Value = value;
      });

      defineGetter(this,  'bpdLabel5', () => {
        return this._bpdLabel5;
      });
      defineSetter(this,  'bpdLabel5', value => {
        this._bpdLabel5 = value;
      });

      defineGetter(this,  'vfsImgEdit', () => {
        return this._vfsImgEdit;
      });
      defineSetter(this,  'vfsImgEdit', value => {
        this._vfsImgEdit = value;
      });

      defineGetter(this,  'bpdValue5', () => {
        return this._bpdValue5;
      });
      defineSetter(this,  'bpdValue5', value => {
        this._bpdValue5 = value;
      });

      defineGetter(this,  'vfsFieldNotes', () => {
        return this._vfsFieldNotes;
      });
      defineSetter(this,  'vfsFieldNotes', value => {
        this._vfsFieldNotes = value;
      });

      defineGetter(this,  'bpdLabel5Edit', () => {
        return this._bpdLabel5Edit;
      });
      defineSetter(this,  'bpdLabel5Edit', value => {
        this._bpdLabel5Edit = value;
      });

      defineGetter(this,  'vfsFieldNotesMoreLink', () => {
        return this._vfsFieldNotesMoreLink;
      });
      defineSetter(this,  'vfsFieldNotesMoreLink', value => {
        this._vfsFieldNotesMoreLink = value;
      });

      defineGetter(this,  'bpdCTA1', () => {
        return this._bpdCTA1;
      });
      defineSetter(this,  'bpdCTA1', value => {
        this._bpdCTA1 = value;
      });

      defineGetter(this,  'vfsCTA2', () => {
        return this._vfsCTA2;
      });
      defineSetter(this,  'vfsCTA2', value => {
        this._vfsCTA2 = value;
      });

      defineGetter(this,  'bpdCTA2', () => {
        return this._bpdCTA2;
      });
      defineSetter(this,  'bpdCTA2', value => {
        this._bpdCTA2 = value;
      });

      defineGetter(this,  'vfsCTA1', () => {
        return this._vfsCTA1;
      });
      defineSetter(this,  'vfsCTA1', value => {
        this._vfsCTA1 = value;
      });

      defineGetter(this,  'bpdCTA3', () => {
        return this._bpdCTA3;
      });
      defineSetter(this,  'bpdCTA3', value => {
        this._bpdCTA3 = value;
      });

      defineGetter(this,  'bpdCTAEditAddress', () => {
        return this._bpdCTAEditAddress;
      });
      defineSetter(this,  'bpdCTAEditAddress', value => {
        this._bpdCTAEditAddress = value;
      });

      defineGetter(this,  'bpdObjService1', () => {
        return this._bpdObjService1;
      });
      defineSetter(this,  'bpdObjService1', value => {
        this._bpdObjService1 = value;
      });

      defineGetter(this,  'maxFillMapping', () => {
        return this._maxFillMapping;
      });
      defineSetter(this,  'maxFillMapping', value => {
        this._maxFillMapping = value;
      });

      defineGetter(this,  'minFillMapping', () => {
        return this._minFillMapping;
      });
      defineSetter(this,  'minFillMapping', value => {
        this._minFillMapping = value;
      });

      defineGetter(this,  'jsonObjName', () => {
        return this._jsonObjName;
      });
      defineSetter(this,  'jsonObjName', value => {
        this._jsonObjName = value;
      });

      defineGetter(this,  'dvfConfig', () => {
        return this._dvfConfig;
      });
      defineSetter(this,  'dvfConfig', value => {
        this._dvfConfig = value;
      });

      defineGetter(this,  'rfpSectionTitle', () => {
        return this._rfpSectionTitle;
      });
      defineSetter(this,  'rfpSectionTitle', value => {
        this._rfpSectionTitle = value;
      });

      defineGetter(this,  'rfpTxbxLabel', () => {
        return this._rfpTxbxLabel;
      });
      defineSetter(this,  'rfpTxbxLabel', value => {
        this._rfpTxbxLabel = value;
      });

      defineGetter(this,  'rfpCTA1', () => {
        return this._rfpCTA1;
      });
      defineSetter(this,  'rfpCTA1', value => {
        this._rfpCTA1 = value;
      });

      defineGetter(this,  'amntTxtbx', () => {
        return this._amntTxtbx;
      });
      defineSetter(this,  'amntTxtbx', value => {
        this._amntTxtbx = value;
      });

      defineGetter(this,  'rfpsTxtbx', () => {
        return this._rfpsTxtbx;
      });
      defineSetter(this,  'rfpsTxtbx', value => {
        this._rfpsTxtbx = value;
      });

      defineGetter(this,  'rfpsSubHeader', () => {
        return this._rfpsSubHeader;
      });
      defineSetter(this,  'rfpsSubHeader', value => {
        this._rfpsSubHeader = value;
      });

      defineGetter(this,  'rfpsTxtbxLabel', () => {
        return this._rfpsTxtbxLabel;
      });
      defineSetter(this,  'rfpsTxtbxLabel', value => {
        this._rfpsTxtbxLabel = value;
      });
      
      defineGetter(this,  'brdropdownOptions', () => {
        return this._brdropdownOptions;
      });
      defineSetter(this,  'brdropdownOptions', value => {
        this._brdropdownOptions = value;
      });   
      
      defineGetter(this,  'brSknOptionSelection', () => {
        return this._brSknOptionSelection;
      });
      defineSetter(this,  'brSknOptionSelection', value => {
        this._brSknOptionSelection = value;
      });   
      
      defineGetter(this,  'bpdValue5Edit', () => {
        return this._bpdValue5Edit;
      });
      defineSetter(this,  'bpdValue5Edit', value => {
        this._bpdValue5Edit = value;
      });
      defineGetter(this,  'AccTypedataPermsn', () => {
        return this._AccTypedataPermsn;
      });
      defineSetter(this,  'AccTypedataPermsn', value => {
        this._AccTypedataPermsn = value;
      }); 
        defineGetter(this,  'bpdObjName1', () => {
        return this._bpdObjName1;
      });
      defineSetter(this,  'bpdObjName1', value => {
        this._bpdObjName1 = value;
      });
       defineGetter(this,  'paymentType', () => {
        return this._paymentType;
      });
      defineSetter(this,  'paymentType', value => {
        this._paymentType = value;
      });
      
      defineGetter(this,  'bpdObjOperation1', () => {
        return this._bpdObjOperation1;
      });
      defineSetter(this,  'bpdObjOperation1', value => {
        this._bpdObjOperation1 = value;
      });
      
      defineGetter(this,  'bpdObjOperation1Criteria', () => {
        return this._bpdObjOperation1Criteria;
      });
      defineSetter(this,  'bpdObjOperation1Criteria', value => {
        this._bpdObjOperation1Criteria = value;
      });

      defineGetter(this,  'errsTitleMessage', () => {
        return this._errsTitleMessage;
      });
      defineSetter(this,  'errsTitleMessage', value => {
        this._errsTitleMessage = value;
      });

      defineGetter(this,  'errsSubTitile', () => {
        return this._errsSubTitile;
      });
      defineSetter(this,  'errsSubTitile', value => {
        this._errsSubTitile = value;
      });

      defineGetter(this,  'errsFailIcon', () => {
        return this._errsFailIcon;
      });
      defineSetter(this,  'errsFailIcon', value => {
        this._errsFailIcon = value;
      });

      defineGetter(this,  'errsCTA1', () => {
        return this._errsCTA1;
      });
      defineSetter(this,  'errsCTA1', value => {
        this._errsCTA1 = value;
      });

      defineGetter(this,  'errsCTA2', () => {
        return this._errsCTA2;
      });
      defineSetter(this,  'errsCTA2', value => {
        this._errsCTA2 = value;
      });
      
       defineGetter(this,  'vfsLegalNotes', () => {
        return this._vfsLegalNotes;
      });
      defineSetter(this,  'vfsLegalNotes', value => {
        this._vfsLegalNotes = value;
      });
      
       defineGetter(this,  'vfsLegalNotesDesc', () => {
        return this._vfsLegalNotesDesc;
      });
      defineSetter(this,  'vfsLegalNotesDesc', value => {
        this._vfsLegalNotesDesc = value;
      });
      
      defineGetter(this,  'errsCTA3', () => {
        return this._errsCTA3;
      });
      defineSetter(this,  'errsCTA3', value => {
        this._errsCTA3 = value;
      });
  defineGetter(this,  'errscreenCTA3', () => {
        return this._errscreenCTA3;
      });
      defineSetter(this,  'errscreenCTA3', value => {
        this._errscreenCTA3 = value;
      });

       defineGetter(this,  'errsErrorHeader', () => {
        return this._errsErrorHeader;
      });
      defineSetter(this,  'errsErrorHeader', value => {
        this._errsErrorHeader = value;
      });
      
      defineGetter(this,  'rfpTextboxType', () => {
        return this._rfpTextboxType;
      });
      defineSetter(this,  'rfpTextboxType', value => {
        this._rfpTextboxType = value;
      });
      
      defineGetter(this,  'ptTbxHeader', () => {
        return this._ptTbxHeader;
      });
      defineSetter(this,  'ptTbxHeader', value => {
        this._ptTbxHeader = value;
      });
      defineGetter(this,  'acnTbxHeader', () => {
        return this._acnTbxHeader;
      });
      defineSetter(this,  'acnTbxHeader', value => {
        this._acnTbxHeader = value;
      });
      defineGetter(this,  'rfpTbxHeader', () => {
        return this._rfpTbxHeader;
      });
      defineSetter(this,  'rfpTbxHeader', value => {
        this._rfpTbxHeader = value;
      });
      
      defineGetter(this,  'fadFromLabel', () => {
        return this._fadFromLabel;
      });
      defineSetter(this,  'fadFromLabel', value => {
        this._fadFromLabel = value;
      });
      defineGetter(this,  'fadAccountName', () => {
        return this._fadAccountName;
      });
      defineSetter(this,  'fadAccountName', value => {
        this._fadAccountName = value;
      });
      defineGetter(this,  'fadBalanceLable', () => {
        return this._fadBalanceLable;
      });
      defineSetter(this,  'fadBalanceLable', value => {
        this._fadBalanceLable = value;
      });
      defineGetter(this,  'fadBalanceValue', () => {
        return this._fadBalanceValue;
      });
      defineSetter(this,  'fadBalanceValue', value => {
        this._fadBalanceValue = value;
      });
      defineGetter(this,  'brShowFromAccount', () => {
        return this._brShowFromAccount;
      });
      defineSetter(this,  'brShowFromAccount', value => {
        this._brShowFromAccount = value;
      });
      defineGetter(this,  'bpdShowFromAccount', () => {
        return this._bpdShowFromAccount;
      });
      defineSetter(this,  'bpdShowFromAccount', value => {
        this._bpdShowFromAccount = value;
      });
      defineGetter(this,  'rfpShowFromAccount', () => {
        return this._rfpShowFromAccount;
      });
      defineSetter(this,  'rfpShowFromAccount', value => {
        this._rfpShowFromAccount = value;
      });
      defineGetter(this,  'acnShowFromAccount', () => {
        return this._acnShowFromAccount;
      });
      defineSetter(this,  'acnShowFromAccount', value => {
        this._acnShowFromAccount = value;
      });
      defineGetter(this,  'fadsFlexBg', () => {
        return this._fadsFlexBg;
      });
      defineSetter(this,  'fadsFlexBg', value => {
        this._fadsFlexBg = value;
      });
      defineGetter(this,  'fadsFromLabel', () => {
        return this._fadsFromLabel;
      });
      defineSetter(this,  'fadsFromLabel', value => {
        this._fadsFromLabel = value;
      });
      defineGetter(this,  'fadsAccountName', () => {
        return this._fadsAccountName;
      });
      defineSetter(this,  'fadsAccountName', value => {
        this._fadsAccountName = value;
      });
      defineGetter(this,  'fadsBalanceLabel', () => {
        return this._fadsBalanceLabel;
      });
      defineSetter(this,  'fadsBalanceLabel', value => {
        this._fadsBalanceLabel = value;
      });
      defineGetter(this,  'fadsBalanceValue', () => {
        return this._fadsBalanceValue;
      });
      defineSetter(this,  'fadsBalanceValue', value => {
        this._fadsBalanceValue = value;
      });
      
      defineGetter(this,  'vfsLegalNotesType', () => {
        return this._vfsLegalNotesType;
      });
      defineSetter(this,  'vfsLegalNotesType', value => {
        this._vfsLegalNotesType = value;
      });
      
      defineGetter(this,  'vfsfesibilityFailMsg', () => {
        return this._vfsfesibilityFailMsg;
      });
      defineSetter(this,  'vfsfesibilityFailMsg', value => {
        this._vfsfesibilityFailMsg = value;
      });
      
      defineGetter(this,  'vfsAmoutValidationErrMsg', () => {
        return this._vfsAmoutValidationErrMsg;
      });
      defineSetter(this,  'vfsAmoutValidationErrMsg', value => {
        this._vfsAmoutValidationErrMsg = value;
      });
      
      defineGetter(this,  'vfsImgWarn', () => {
        return this._vfsImgWarn;
      });
      defineSetter(this,  'vfsImgWarn', value => {
        this._vfsImgWarn = value;
      });
      
      defineGetter(this,  'amntZeroBalWarnMsg', () => {
        return this._amntZeroBalWarnMsg;
      });
      defineSetter(this,  'amntZeroBalWarnMsg', value => {
        this._amntZeroBalWarnMsg = value;
      });
      
      defineGetter(this,  'amntinsufficientMsg', () => {
        return this._amntinsufficientMsg;
      });
      defineSetter(this,  'amntinsufficientMsg', value => {
        this._amntinsufficientMsg = value;
      });
	  
	        defineGetter(this,  'vfsField10Label', () => {
        return this._vfsField10Label;
      });
      defineSetter(this,  'vfsField10Label', value => {
        this._vfsField10Label = value;
      });
       defineGetter(this,  'verifyField10Value', () => {
        return this._verifyField10Value;
      });
      defineSetter(this,  'verifyField10Value', value => {
        this._verifyField10Value = value;
      });
      
      defineGetter(this,  'vfserrortype', () => {
        return this._vfserrortype;
      });
      defineSetter(this,  'vfserrortype', value => {
        this._vfserrortype = value;
      });
      
      defineGetter(this,  'vfsShowLessLink', () => {
        return this._vfsShowLessLink;
      });
      defineSetter(this,  'vfsShowLessLink', value => {
        this._vfsShowLessLink = value;
      });
      
      defineGetter(this,  'amntFormatAmount', () => {
        return this._amntFormatAmount;
      });
      defineSetter(this,  'amntFormatAmount', value => {
        this._amntFormatAmount = value;
      });
      defineGetter(this,  'searchicon', () => {
        return this._searchicon;
      });
      defineSetter(this,  'searchicon', value => {
        this._searchicon = value;
      });
      
      defineGetter(this,  'acnsTbxHeaderLabel', () => {
        return this._acnsTbxHeaderLabel;
      });
      defineSetter(this,  'acnsTbxHeaderLabel', value => {
        this._acnsTbxHeaderLabel = value;
      });
      
      defineGetter(this,  'imgFromChevron', () => {
        return this._imgFromChevron;
      });
      defineSetter(this,  'imgFromChevron', value => {
        this._imgFromChevron = value;
      });
      

    },

    /**
     * Component preShow
     * Reponsible to retain the data for custom properties for multiple entries into the component
     * Invoke the DAO layer to collect information from the service
     */
    preShow: function () {
      var scope = this;
      try {
        scope.setFlexVisibilty();
        scope.setBillPayerUserCacheDetails();        
        // this.view.flxFromAccountMain.setVisibility(true);
        scope.setFromAccount();
        scope.navigateTo("flxFromAccountMain","flxFromHeaderTop",scope.getFieldValue(scope._fasSectionTitle));
        scope.bindCancelPopUpActions();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in preShow method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setHeaderProperties
     * To make custom header visibility based on platform.
     */
    setHeaderProperties: function(headerFlex) {
      var scope = this;
      try {
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
     * fetches the User Details to show it on Bill payer's screen.
     */
    setBillPayerUserCacheDetails: function() {
      var scope = this;
      try {
        scope.inputPool["payerName"] = !scope.isEmptyNullUndefined(scope.context["PayeeName"]) ? scope.context["PayeeName"]: "";
        scope.inputPool["address"] = !scope.isEmptyNullUndefined(scope.context["AddressLine1"]) ? scope.context["AddressLine1"]: "";
        scope.inputPool["postalCode"] = !scope.isEmptyNullUndefined(scope.context["ZipCode"]) ? scope.context["ZipCode"]: "";
        scope.inputPool["location"] = !scope.isEmptyNullUndefined(scope.context["CityName"]) ? scope.context["CityName"]: "";
        scope.inputPool["province"] = !scope.isEmptyNullUndefined(scope.context["RegionName"]) ? scope.context["RegionName"]: "";
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in getBillPayerUserCacheDetails method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
	
	
	/**
     * Component setContext.
     * To collect the context object required for the component. 
     * @param: context{JSONobject} - account object.
     */
    setContext: function(context) {
      var scope = this;
      try {
        scope.context = context;
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
     * @Component : updateInputPoolValue
     * updates context.
     * @return : NA
     */
    updateInputPoolValue: function(key, value) {
      var scope = this;
      try {
        if(!scope.isEmptyNullUndefined(scope.getFieldValue(key,"inputPoolKey")) && !kony.sdk.isNullOrUndefined(value))
        {
          scope.inputPool[scope.getFieldValue(key,"inputPoolKey")] = value;
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in updateInputPoolValue method of the component.",
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
      var scope = this;
      try {
        scope.view[btnName].setEnabled(true);
        scope.view[btnName].skin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
        scope.view[btnName].focusSkin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
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
      var scope = this;
      try {
        scope.view[btnName].setEnabled(false);
        scope.view[btnName].skin = scope.getFieldValue(scope._gsknDisabledContexualBtn);
        scope.view[btnName].focusSkin = scope.getFieldValue(scope._gsknDisabledContexualBtn);
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
      var value = Value;
      try {
        if (value["default"]) {
          value = value["default"];
        }  
        if (!this.isEmptyNullUndefined(value) && !this.isEmptyNullUndefined(key)) {
          value = value[key];
        }
        if (value.includes("inputPool") || value.includes("inputpool")){
          value = value.split(".")[2];
          value=value.slice(0,-1);
          return this.inputPool[value];
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
     * Component setPayableTo
     * Declaration of all for set Payee name
     */
    setPayableTo: function() {
      var scope = this;
      try {
        scope.setPaybaleToSkins();
        scope.setPayableToDefaultText();
        scope.setPayableToActions();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPayableTo method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component setAccountNumber
     * Declaration of all for set Account Number
     */
    setAccountNumber: function(){
      var scope = this;
      try {
        scope.setAccountNumberSkins();
        scope.setAccountNumberDefaultText();
        scope.setAccountNumberActions();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setAccountNumber method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component setAmount
     * Declaration of all for set Amount
     */
    setAmount: function() {
      var scope = this;
      try {
        scope.setAmountSkins();
        scope.setAmountDefaultText();
        scope.setAmountActions();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setAmount method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component setPaybaleToSkins
     * set skins for set Payee name
     */
    setPaybaleToSkins: function() {
      var scope = this;
      try {
        scope.view.flxMainBillerName.skin = scope.getFieldValue(scope._gsknbillpayContentFlex);
        scope.view.flxBillerNameHeader.skin = scope.getFieldValue(scope._gsknbillpayHeaderFlex);
        scope.view.imgBackBillerName.src = scope.getFieldValue(scope._billpayimgBack);
        scope.view.lblBillerNameSectionTitle.skin = scope.getFieldValue(scope._gskBillpaynHeaderLbl);
        scope.view.btnCancelBiller.skin = scope.getFieldValue(scope._gsknBillpayCancelBtn);
        scope.view.flxBillerName.skin = scope.getFieldValue(scope._gsknbillpaySubhdrFlex);
        scope.view.lblBillerName.skin = scope.getFieldValue(scope._ptssknSubHeader);
        scope.view.flxShadowBiller.skin = scope.getFieldValue(scope._gsknSubhdrSeparator);
        scope.view.tbxBillerName.skin = scope.getFieldValue(scope._ptssknTxtbx);
        scope.view.lblPayableToErrMsg.text = scope.getFieldValue(scope._gsknbillpayErrorTextMsg);
        // scope.view.tbxBillerName.focusSkin = scope.getFieldValue(scope._gsknTextBoxFocus);
        scope.view.btnContinueBiller.skin = scope.getFieldValue(scope._gsknDisabledContexualBtn);
        
        scope.view.flxPayableFromDetail.skin = scope.getFieldValue(scope._fadsFlexBg);
        scope.view.lblPtFrom.skin = scope.getFieldValue(scope._fadsFromLabel);
        scope.view.lblPtSubValue1.skin = scope.getFieldValue(scope._fadsAccountName);
        scope.view.lblPtSubValue2Value.skin = scope.getFieldValue(scope._fadsBalanceLabel);
        scope.view.lblPtSubValue2Label.skin = scope.getFieldValue(scope._fadsBalanceValue);
        scope.view.lblEnterBillerName.skin = scope.getFieldValue(scope._ptssknTxtbxLabel);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPaybaleToskins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
     /**
     * Component setAccountNumberSkins
     * set skins for set Account Number
     */
    setAccountNumberSkins: function() {
      var scope = this;
      try {
        scope.view.flxBillerAccountNumber.skin = scope.getFieldValue(scope._gsknbillpayContentFlex);
        scope.view.flxBillerAccountNumberHeader.skin = scope.getFieldValue(scope._gsknbillpayHeaderFlex);
        scope.view.imgAccountNumBack.src = scope.getFieldValue(scope._billpayimgBack);
        scope.view.lblAccountNumHeader.skin = scope.getFieldValue(scope._gskBillpaynHeaderLbl);
        scope.view.btnAccCancel.skin = scope.getFieldValue(scope._gsknBillpayCancelBtn);
        scope.view.flxAccNumSubHeaderMain.skin = scope.getFieldValue(scope._gsknbillpaySubhdrFlex);
        scope.view.lblAccNumSubHeader.skin = scope.getFieldValue(scope._ptssknSubHeader);
        scope.view.lblAccNo.skin = scope.getFieldValue(scope._acnsTxtbx);
        scope.view.flxAccNumSubHeaderSeperator.skin = scope.getFieldValue(scope._gsknSubhdrSeparator);
        scope.view.btnAccNumContinue.skin = scope.getFieldValue(scope._gsknDisabledContexualBtn);
        scope.view.lblEnterAccountNumber.skin = scope.getFieldValue(scope._acnsTbxHeaderLabel);
        scope.view.flxAccountNumberFromDetail.skin = scope.getFieldValue(scope._fadsFlexBg);
        scope.view.lblAcnFrom.skin = scope.getFieldValue(scope._fadsFromLabel);
        scope.view.lblAcnSubValue1.skin = scope.getFieldValue(scope._fadsAccountName);
        scope.view.lblAcnSubValue2.skin = scope.getFieldValue(scope._fadsBalanceLabel);
        scope.view.lblAcnSubValue2Label.skin = scope.getFieldValue(scope._fadsBalanceValue);
        for(var i=1;i<=10;i++){
          scope.view["btnAN"+i].skin = scope.getFieldValue(scope._gsknBillpayNumericKeypadBorder);
        }
        scope.view.btnAN0.skin = scope.getFieldValue(scope._gsknBillpayNumericKeypadBorder);
        scope.view.btnANDecimal.skin = scope.getFieldValue(scope._gsknBillPayKeypadGrey);
        
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setAccountNumberSkins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
     /**
     * Component setAmountSkins
     * set skins for setAmountSkins
     */
    setAmountSkins: function() {
      var scope = this;  
      try {
        scope.view.flxbillPaymentAmountDetails.skin = scope.getFieldValue(scope._gsknbillpayContentFlex);
        scope.view.flxAmountHeader.skin = scope.getFieldValue(scope._gsknbillpayHeaderFlex);
        scope.view.flxAmountWrapper.skin = "sknflxe3e3e3border";
        scope.view.imgAmountBack.src = scope.getFieldValue(scope._billpayimgBack);
        scope.view.btnAmountCancel.skin = scope.getFieldValue(scope._gsknBillpayCancelBtn);
        scope.view.lblAmountName.skin = scope.getFieldValue(scope._gskBillpaynHeaderLbl);
        scope.view.btnAmountContinue.skin = scope.getFieldValue(scope._gsknDisabledContexualBtn);
        for (var i = 1; i <= 9; i++) {
          scope.view["btn"+i].skin = scope.getFieldValue(scope._gsknBillpayNumericKeypadBorder);
        }
        scope.view.btn0.skin = scope.getFieldValue(scope._gsknBillpayNumericKeypadBorder);
        scope.view.btnDecimalSeperator.skin = scope.getFieldValue(scope._gsknBillPayKeypadGrey);
        scope.view.flxRow1.skin = scope.getFieldValue(scope._amntsFlexRowBG);
        scope.view.lblDollar.skin = scope.getFieldValue(scope._amntDollarLabel);
        scope.view.lblField1.skin = "ICSknLbl727272SSPReg34px";//amntsLableSkin
        scope.view.lblSubValue1.skin = scope.getFieldValue(scope._amntsSubValue1);
        scope.view.lblAmountAvailableBalance.skin = scope.getFieldValue(scope._amntsSubValue2);
        scope.view.lblAmountBalance.skin = scope.getFieldValue(scope._amntsSubValue2);
        scope.view.lblAmountLabel.skin = scope.getFieldValue(scope._amntsTxtbxLabel);
        //scope.view.lblAmountLabel.skin = scope.getFieldValue(scope._amntAmountLabel);
        //scope.view.flxAmountWrapper.skin = scope.getFieldValue(scope._amntsInput);
        scope.view.tbxAmount.skin = scope.getFieldValue(scope._amntsInput);
        } catch(err) {
        var errObj = {
          "errorInfo" : "Error in  setAmountSkins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component setPayableToDefaultText
     * set actions for set Payee name
     */
    setPayableToDefaultText: function() {
      var scope = this;
      try {
        scope.view.lblBillerNameSectionTitle.text = scope.getFieldValue(scope._ptSectionTitle);
        scope.view.btnCancelBiller.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._billpaybtnCancel)) ? true : false;
        scope.view.btnCancelBiller.text = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._billpaybtnCancel)) ? scope.getFieldValue(scope._billpaybtnCancel) : "";
        scope.view.flxPayableFromDetail.isVisible = scope.getFieldValue(scope._ptShowFromAccount);
        scope.view.flxBillerName.isVisible = scope.getFieldValue(scope._ptShowFromAccount) ? false : true;
        scope.view.lblBillerName.text = scope.getFieldValue(scope._ptSubHeader);
        scope.view.tbxBillerName.textInputMode = constants["TEXTBOX_INPUT_MODE_"+scope.getFieldValue(scope._ptTextbox, "inputMode")];
        scope.view.tbxBillerName.restrictCharactersSet = scope.getFieldValue(scope._ptTextbox, "restrictChar");
        scope.view.tbxBillerName.placeholder = scope.getFieldValue(scope._ptTextbox, "placeHolder");
        var object = scope.getFieldValue(scope._jsonObjName);
        var maxFillconfig = scope.getFieldValue(scope._maxFillMapping)[object];
        scope.view.tbxBillerName.maxTextLength = parseInt(scope.getFieldValue(maxFillconfig, "PayableTo"));
        scope.view.btnContinueBiller.text = scope.getFieldValue(scope._ptCTA1, "text");
        scope.view.flxPtErrorMessage.setVisibility(false);
        scope.view.lblEnterBillerName.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._ptTbxHeader)) ? true : false;
        scope.view.lblEnterBillerName.text = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._ptTbxHeader)) ? scope.getFieldValue(scope._ptTbxHeader) : "";
        scope.view.lblPtFrom.text = scope.getFieldValue(scope._fadFromLabel);
        scope.view.lblPtSubValue1.text = scope.getFieldValue(scope._fadAccountName, "value");
        scope.view.lblPtSubValue2Label.text = scope.getFieldValue(scope._fadBalanceValue, "text");
        scope.view.lblPtSubValue2Value.text = scope.getFieldValue(scope._fadBalanceLable); 
        if(scope.userFlowType === "EDIT") {
         scope.view.lblBillerNameSectionTitle.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._ptSectionTitle);
         scope.view.tbxBillerName.text = !scope.isEmptyNullUndefined(scope.inputPool[scope.getFieldValue(scope._ptTextbox,"inputPoolKey")]) ? scope.inputPool[scope.getFieldValue(scope._ptTextbox,"inputPoolKey")] : "",
         scope.enableButton("btnContinueBiller");
        } else {
          scope.view.tbxBillerName.text = "";
          scope.view.tbxBillerName.setFocus(true);
          scope.disableButton("btnContinueBiller");
        }
        // Predictive text.
        scope.view.tbxBillerName.autoSuggestions = true;
        if(scope._ptShowFromAccount === true){
          scope.view.flxPayableFromDetail.setVisibility(true);
          scope.view.flxBillerName.setVisibility(false);
        } else{
          scope.view.flxPayableFromDetail.setVisibility(false);
          scope.view.flxBillerName.setVisibility(true);
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPayableToDefaultText method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component setAccountNumberDefaultText
     * set actions for set Account Number
     */
    setAccountNumberDefaultText: function() {
      var scope = this;
      try {
        scope.view.lblAccountNumHeader.text = scope.getFieldValue(scope._acnSectionTitle);
        scope.view.btnAccCancel.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._billpaybtnCancel)) ? true : false;
        scope.view.btnAccCancel.text = scope.getFieldValue(scope._billpaybtnCancel);
        scope.view.lblAccNumSubHeader.text = scope.getFieldValue(scope._acnSubHeader);
        scope.view.btnAccNumContinue.text = scope.getFieldValue(scope._ptCTA1, "text");
        scope.view.lblEnterAccountNumber.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._acnTbxHeader)) ? true : false;
        scope.view.lblEnterAccountNumber.text = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._acnTbxHeader)) ? scope.getFieldValue(scope._acnTbxHeader) : "";
        if(scope.userFlowType === "EDIT") {
          scope.view.lblAccountNumHeader.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._acnSectionTitle);         
         scope.view.lblAccNo.text = !scope.isEmptyNullUndefined(scope.inputPool[scope.getFieldValue(scope._acnTextbox,"inputPoolKey")]) ? scope.inputPool[scope.getFieldValue(scope._acnTextbox,"inputPoolKey")] : "",
         scope.accountNumberkeypadString = scope.view.lblAccNo.text;
         scope.enableButton("btnAccNumContinue");
        } else {
        scope.view.lblAccNo.text = "";
        scope.accountNumberkeypadString = "";
        scope.disableButton("btnAccNumContinue");
        scope.view.flxAccNoErrorMessage.setVisibility(false);
        }
        if(scope._acnShowFromAccount === true){
          scope.view.flxAccountNumberFromDetail.setVisibility(true);
          scope.view.flxAccNumSubHeaderMain.setVisibility(false);
        } else{
          scope.view.flxAccountNumberFromDetail.setVisibility(false);
          scope.view.flxAccNumSubHeaderMain.setVisibility(true);
        }
        scope.view.lblAcnFrom.text = scope.getFieldValue(scope._fadFromLabel);
        scope.view.lblAcnSubValue1.text = scope.getFieldValue(scope._fadAccountName, "value");
        scope.view.lblAcnSubValue2.text = scope.getFieldValue(scope._fadBalanceValue, "text");
        scope.view.lblAcnSubValue2Label.text = scope.getFieldValue(scope._fadBalanceLable);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setAccountNumberDefaultText method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component setAmountDefaultText
     * set default text for Account Number
     */
    setAmountDefaultText: function() {
      var scope = this;
      try {
        scope.view.lblAmountName.text = scope.getFieldValue(scope._amntSectionTitle);
        scope.view.btnAmountCancel.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._billpaybtnCancel)) ? true : false;
        scope.view.btnAmountCancel.text = scope.getFieldValue(scope._billpaybtnCancel);
        scope.view.lblField1.text = scope.getFieldValue(scope._amntField1Lbl);
        scope.view.lblAmountLabel.text = scope.getFieldValue(scope._amntTxtbxLabel);
        
        scope.view.btnAmountContinue.text = scope.getFieldValue(scope._acnCTA1, "text");
        scope.view.flxErrorMessage.setVisibility(false);
        if(scope._amntFormatAmount === true){
          scope.view.lblDollar.right = "5%";
          scope.view.tbxAmount.contentAlignment = constants.CONTENT_ALIGN_MIDDLE_RIGHT;
          scope.view.ImageClear.right = "";
          scope.view.ImageClear.left = "4%";
        } else{
          scope.view.lblDollar.right = "92%";
          scope.view.tbxAmount.contentAlignment = constants.CONTENT_ALIGN_MIDDLE_LEFT;
          scope.view.ImageClear.right = "4%";
          scope.view.ImageClear.left = "";
        }
        scope.view.lblDollar.text = scope.FormatUtils.getCurrencySymbol(scope.inputPool["fromTransferCurrency"]);
        if(scope.userFlowType === "EDIT") {
           scope.view.lblAmountName.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._amntSectionTitle);
          scope.view.tbxAmount.text = !scope.isEmptyNullUndefined(scope.inputPool[scope.getFieldValue(scope._amntTxtbx,"inputPoolKey")]) ? (scope.inputPool[scope.getFieldValue(scope._amntTxtbx,"inputPoolKey")]).substring(1) : "",
            scope.view.ImageClear.setVisibility(true);
          scope.enableButton("btnAmountContinue");
        } else if(scope.userFlowType === "EDIT FROM ACCOUNT"){
          scope.view.tbxAmount.text = !scope.isEmptyNullUndefined(scope.inputPool[scope.getFieldValue(scope._amntTxtbx,"inputPoolKey")]) ? (scope.inputPool[scope.getFieldValue(scope._amntTxtbx,"inputPoolKey")]) : "0.00";
          if(!scope.isEmptyNullUndefined(scope.view.tbxAmount.text) && scope.view.tbxAmount.text !== "0.00" ){
            scope.enableButton("btnAmountContinue");
          } else {
            scope.disableButton("btnAmountContinue");
          }
        }
        else {
          scope.view.tbxAmount.text = "0.00";
          scope.view.ImageClear.setVisibility(false);
          scope.disableButton("btnAmountContinue");
        }
        var fromAccountVal = scope.getFieldValue(scope._amntField1Value, "value");
        scope.view.lblSubValue1.text = fromAccountVal;
        scope.view.lblAmountAvailableBalance.text = scope.getFieldValue(scope._amntField1SubLabel);
        scope.view.lblAmountBalance.text = scope.getFieldValue(scope._amntField1SubValue, "text");
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setAmountDefaultText method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component setAmountActions
     * set actions for Amount
     */
    setAmountActions: function() {  
      var scope = this;
      try {
        scope.view.flxAmountBack.onTouchStart = scope.goBack;
        scope.view.btnAmountCancel.onClick = scope.enableCancelPopup;
        scope.amountkeypadString = "0.00";
        scope.view.tbxAmount.setEnabled(false);
        for (var i = 0; i <= 9; i++) {
          scope.view["btn"+i].onClick = scope.setAmountKeyboardChar.bind(this, i);
        }
       // scope.view.btnDecimalSeperator.onClick = scope.setAmountKeyboardChar.bind(this,".");
        scope.view.imgClear.onTouchStart = scope.clearAmountKeypadChar;
        scope.view.btnAmountContinue.onClick = scope.onAmountContinue; 
        scope.view.ImageClear.onTouchEnd = function(){
          scope.view.tbxAmount.text = "0.00";
          scope.amountkeypadString = "0.00";
          scope.disableButton("btnAmountContinue");
          scope.view.ImageClear.setVisibility(false);
        };
        scope.view.flxCheveron.onTouchEnd = function(){
          scope.userFlowType = "EDIT FROM ACCOUNT";
          scope.amountSelectedFlowType = "From Account";
          var amount = scope.view.tbxAmount.text;
          scope.updateInputPoolValue(scope._amntTxtbx, amount);
          scope.setFromAccount();
          scope.navigateTo("flxFromAccountMain","flxFromHeaderTop",scope.getFieldValue(scope._fasSectionTitle));
        };
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setAmountActions method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component setPayableToActions
     * set actions for set Payee name
     */
    setPayableToActions: function() {  
      var scope = this;
      try {
        scope.view.flxBillerNameBack.onTouchStart = scope.goBack;
        scope.view.btnCancelBiller.onClick = scope.enableCancelPopup;
        scope.view.btnContinueBiller.onClick = scope.onPayableToContinue;
        scope.view.tbxBillerName.onTextChange = scope.onPayableToTextChange;  
        scope.view.flxPtChevron.onTouchEnd = function(){
          //scope.userFlowType = "EDIT";
          scope.amountSelectedFlowType = "PayableTo";
          scope.setFromAccount();
          scope.navigateTo("flxFromAccountMain","flxFromHeaderTop",scope.getFieldValue(scope._fasSectionTitle));
        };
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPayableToActions method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component setAccountNumberActions
     * set actions for set Account Number
     */
    setAccountNumberActions: function() {  
      var scope = this;
      try {
        scope.view.flxAccNumBack.onTouchStart = scope.goBack;
        scope.view.btnAccCancel.onClick = scope.enableCancelPopup;
        for (var i = 0; i <= 9; i++) {
          scope.view["btnAN"+i].onClick = scope.setAccountNumberKeyboardChar.bind(this, i);
        }
        scope.view.btnANDecimal.onClick = scope.setAccountNumberKeyboardChar.bind(this,",");
        scope.view.imgANClearImage.onTouchStart = scope.clearAccountNumberKeypadChar;
        scope.view.btnAccNumContinue.onClick = scope.onAccountNumContinue;  
        scope.view.flxAcnChevron.onTouchEnd = function(){
          //scope.userFlowType = "EDIT";
          scope.amountSelectedFlowType = "AccountNumber";
          scope.setFromAccount();
          scope.navigateTo("flxFromAccountMain","flxFromHeaderTop",scope.getFieldValue(scope._fasSectionTitle));
        };
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setAccountNumberActions method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
   /**
     * Component setAccountNumberKeyboardChar.
     * To append keypad string to the label.
     */
    setAccountNumberKeyboardChar: function(char) {
      var scope = this;
      try {
        if(scope.view.lblAccNo.text===""){
          scope.accountNumberkeypadString = "";
        }
        scope.accountNumberkeypadString = scope.accountNumberkeypadString + char;
        var maxFillconfig = scope.getFieldValue(scope._maxFillMapping).Payments["AccountNumber"];
        var accountNumberLen = scope.accountNumberkeypadString.length;
        if(accountNumberLen <= Number(maxFillconfig)){
          scope.view.lblAccNo.text = scope.accountNumberkeypadString;
          var accountNoEntered = {
            "AccountNumber": scope.view.lblAccNo.text
          };
          var minlength = scope.minFillValidate(accountNoEntered);
          var maxlength = scope.maxFillValidate(accountNoEntered);
          if((Object.keys(minlength).length === 0 && minlength.constructor === Object) && maxlength !== null && maxlength !== undefined && (Object.keys(maxlength).length === 0 && maxlength.constructor === Object)) {
            scope.enableButton("btnAccNumContinue");
          }
          else {
            scope.disableButton("btnAccNumContinue");
          }
        }
       
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setAccountNumberKeyboardChar method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
     /**
     * Component setAmountKeyboardChar.
     * To append keypad string to the label.
     */
    setAmountKeyboardChar: function(char) {
      var scope = this;
      try {
         if (char === '.') {
        if (this.isPeriodUsed === false) {
          this.isPeriodUsed = true;
        } else {
          return;
        }
      }
      this.amountkeypadString = this.amountkeypadString + char;
      var firstChar = this.amountkeypadString[0];
      this.amountkeypadString = this.amountkeypadString.split("");
      for (var i = 1; i < this.amountkeypadString.length; i++) {
        if (this.amountkeypadString[i] === '.') {
          this.amountkeypadString[i - 1] = this.amountkeypadString[i + 1];
          i++;
        } else {
          this.amountkeypadString[i - 1] = this.amountkeypadString[i];
        }
      }
      this.amountkeypadString = this.amountkeypadString.join("");
      this.amountkeypadString = this.amountkeypadString.substr(0, this.amountkeypadString.length - 1);
      if (firstChar !== '0') {
        this.amountkeypadString = firstChar + this.amountkeypadString;
      }
      this.updateAmountValue();
       scope.view.flxErrorMessage.setVisibility(false);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setAmountKeyboardChar method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**     
     * Component updateAmountValue
     * To updating values by clicking the value from keyborad 
     */  
    updateAmountValue: function () {
      var amount = this.view.tbxAmount.text;
      var removeComma = amount.replace(/,/g,"");
      if(removeComma.length<10){
      if (this.amountkeypadString === '0.00' || this.amountkeypadString === '0') {
        this.view.tbxAmount.text = this.FormatUtils.formatAmount(this.amountkeypadString,this.getFieldValue(this._amntTxtbx,"format"));
        this.disableButton("btnAmountContinue");
        this.view.ImageClear.setVisibility(false);
        this.view.btnAmountContinue.setEnabled(false);
        //this.view.flxClearAmount.setVisibility(false);
      } else {
        var keypadStringCommas = '';
        var beforeDecimal = this.amountkeypadString.split('.')[0];
        var afterDecimal = this.amountkeypadString.split('.')[1];
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
        var amountString = this.amountkeypadString;
        amountString = amountString.replace(/,/g,"");
        this.view.tbxAmount.text = this.FormatUtils.formatAmount(amountString,this.getFieldValue(this._amntTxtbx,"format"));
        //Checking with Available balance
        // this.view.flxMain.lblAmountErrorMsg.setVisibility(false);
        this.view.ImageClear.setVisibility(true);
        this.enableButton("btnAmountContinue");
        //this.view.flxClearAmount.setVisibility(true);
      }
      }
    },
    /**
     * Component clearAccountNumberKeypadChar.
     * To Clear last character of entered digits.
     */
    clearAccountNumberKeypadChar: function() {
      var scope = this;
      try {
        var accountNo = scope.view.lblAccNo.text;
        accountNo = accountNo.substr(0, accountNo.length - 1);
        scope.view.lblAccNo.text = accountNo;
        scope.accountNumberkeypadString = accountNo;
        var accountNoEntered = {
          "AccountNumber": scope.view.lblAccNo.text
        };
        var minlength = scope.minFillValidate(accountNoEntered);
        var maxlength = scope.maxFillValidate(accountNoEntered);
        if((Object.keys(minlength).length === 0 && minlength.constructor === Object) && maxlength !== null && maxlength !== undefined && (Object.keys(maxlength).length === 0 && maxlength.constructor === Object)) {
          scope.enableButton("btnAccNumContinue");
        } else {
          scope.disableButton("btnAccNumContinue");
        }
        scope.view.lblAccNo.skin = scope.getFieldValue(scope._acnsTxtbx);
        scope.view.flxAccNoErrorMessage.setVisibility(false);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in clearAccountNumberKeypadChar method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component clearAmountKeypadChar.
     * To Clear last character of entered digits.
     */
    clearAmountKeypadChar: function() {
      var scope = this;
      try {
        scope.view.flxErrorMessage.setVisibility(false);
        scope.view.flxAmountWrapper.skin = "sknflxe3e3e3border";
        var amount = scope.view.tbxAmount.text;
        /*if(amount.length >= 1)
        {
          amount = amount.substr(0, amount.length - 1);
          scope.view.tbxAmount.text = amount;
          scope.amountkeypadString = amount;
        }*/
        var res = amount.substr(1, amount.length-1);
        if(res.substr(0, 1) === ","){
          res = amount.substr(2, amount.length-1);
          scope.view.ImageClear.setVisibility(true);
          scope.enableButton("btnAmountContinue");
        } else if(res.substr(0, 1) === "."){
          res = "0." + amount.substr(2, amount.length-1);
          scope.view.ImageClear.setVisibility(true);
          scope.enableButton("btnAmountContinue");
        } 
        if(parseInt(amount) < 1 && parseInt(res) < 1){
          res = "0.0" + amount.substr(2, amount.length-3);
          scope.view.ImageClear.setVisibility(true);
          scope.enableButton("btnAmountContinue");
        } else if(parseInt(amount) < 1 && parseInt(res) < 0.1){
          res = "0.00";
          scope.view.ImageClear.setVisibility(false);
          scope.disableButton("btnAmountContinue");
        }
        scope.view.tbxAmount.text = res;
        scope.amountkeypadString = res;
        if(scope.amountkeypadString === 0 || scope.amountkeypadString === 0.00 || scope.amountkeypadString === "0.00"){
          scope.view.ImageClear.setVisibility(false);
          scope.disableButton("btnAmountContinue");
        } else{
          scope.view.ImageClear.setVisibility(true);
          scope.enableButton("btnAmountContinue");
        }
        //scope.view.tbxAmount.text = amount;
        /*if(amount.length !== 0 && !scope.isEmptyNullUndefined(amount)){
          scope.view.ImageClear.setVisibility(true);
          scope.enableButton("btnAmountContinue");
        }else{
          scope.view.ImageClear.setVisibility(false);
          scope.disableButton("btnAmountContinue");
        }*/
        if(amount.length === 0){
          scope.disableButton("btnAmountContinue");
          scope.view.tbxAmount.text = "";
          scope.amountkeypadString = "";
        }
        scope.view.flxErrorMessage.setVisibility(false);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in clearDigits method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component onPayableToTextChange
     * set actions for set Payee name
     */
    onPayableToTextChange: function() {
      var scope = this;
      try {
        var payableToEntered = {
          "PayableTo": scope.view.tbxBillerName.text
        };
        var minlength = scope.minFillValidate(payableToEntered);
        var maxlength = scope.maxFillValidate(payableToEntered);
        if((Object.keys(minlength).length === 0 && minlength.constructor === Object) && (Object.keys(maxlength).length === 0 && maxlength.constructor === Object)) {
          scope.enableButton("btnContinueBiller");
        } else {
          scope.disableButton("btnContinueBiller");
        }
        scope.view.tbxBillerName.skin = scope.getFieldValue(scope._ptssknTxtbx);
        scope.view.flxPtErrorMessage.setVisibility(false);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onPayableToTextChange method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component onPayableToContinue
     * set actions for set Payee name
     */
    onPayableToContinue: function() {
      var scope = this;
      try {
        var dataJSON= {
          "PayableTo" : scope.view.tbxBillerName.text
        };
        var dataValidator = scope.performDataValidation(dataJSON);
        if(Object.keys(dataValidator).length === 0 && dataValidator.constructor === Object)
        {
          scope.updateInputPoolValue(scope._ptTextbox, scope.view.tbxBillerName.text);
          // scope.onFormOrderNavigation();
          if(this._paymentType==="AdhocBillpayment") {
            if(scope.userFlowType === "EDIT") {
              scope.setVerifyDetails();
              //scope.navigateTo("flxVerifyDetails", "flxVerifyHeader",scope.getFieldValue(scope._vfsSectionTitle));
            } else {
              //scope.setAccountNumber();
             // scope.navigateTo("flxBillerAccountNumber", "flxBillerAccountNumberHeader", scope.getFieldValue(scope._acnSectionTitle));
              scope.onFormOrderNavigation();
            } 
          } else {
            scope.setVerifyDetails();
           // scope.navigateTo("flxVerifyDetails", "flxVerifyHeader",scope.getFieldValue(scope._vfsSectionTitle));
          }
        } else {
          scope.setPayableToError(dataValidator);
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onPayableToContinue method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setPayableToError
     * Reponsible to reset skin fot textbox
     */
    setPayableToError:function(dvfError) {
      var scope = this;
      try {
        if(scope._BillpayErrorReporting === "Inline") {
          for(var iterator in dvfError) {
            if("PayableTo" === iterator){
              scope.view.lblPayableToErrMsg.text = scope.getFieldValue(scope._ptErrTxtbx);
            }           
          }
         // scope.view.tbxBillerName.skin = "ICSknTxtF54B5EBorder";
          scope.view.tbxBillerName.skin = scope._gsknTxtboxErr;
          scope.view.flxPtErrorMessage.setVisibility(true);
        } else  {
          scope.errorSectionTitle = scope.getFieldValue(scope._ptSectionTitle);
          scope.setErrorScreenData();
          scope.navigateTo("flxError", "flxErrorHeaderMain", scope.errorSectionTitle);
        }
        scope.disableButton("btnContinueBiller");
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setPayableToError method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

     /**
     * Component setReasonForPayments
     * set actions for set Reason for payment.
     */
    setReasonForPayments: function() {
      var scope = this;
      try {
        scope.setReasonForPaymentSkins();
        scope.setReasonForPaymentsDefaultText();
        scope.setReasonForPaymentActions();
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setReasonForPayments method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      } 
    },

    /**
     * Component setReasonForPaymentSkins
     * set actions for set Payee name
     */
    setReasonForPaymentSkins: function() {
      var scope = this;
      try {
        scope.view.flxMainNotes.skin = scope.getFieldValue(scope._gsknbillpayContentFlex);
        scope.view.flxHeaderNotes.skin = scope.getFieldValue(scope._gsknbillpayHeaderFlex);
        scope.view.imgBackNotes.src = scope.getFieldValue(scope._billpayimgBack);
        scope.view.lblReasonForPayment.skin = scope.getFieldValue(scope._gskBillpaynHeaderLbl);
        scope.view.btnCancelNotes.skin = scope.getFieldValue(scope._gsknBillpayCancelBtn);
        scope.view.flxEnterANote.skin = scope.getFieldValue(scope._gsknbillpaySubhdrFlex);
        scope.view.lblEnterANote.skin = scope.getFieldValue(scope._rfpsSubHeader);
        scope.view.flxShadow.skin = scope.getFieldValue(scope._gsknSubhdrSeparator);
        scope.view.tbxNotes.skin = scope.getFieldValue(scope._rfpsTxtbx);
        scope.view.lblRfpErrorMessage.text = scope.getFieldValue(scope._gsknbillpayErrorTextMsg);
        scope.view.btnContinueNotes.skin = scope.getFieldValue(scope._gsknDisabledContexualBtn);
        // Textbox Layout.
        scope.view.tbxNotes.left = scope.getFieldValue(scope._rfpTxtbx, "left");
        scope.view.tbxNotes.right = scope.getFieldValue(scope._rfpTxtbx, "right");
        scope.view.tbxNotes.height = scope.getFieldValue(scope._rfpTxtbx, "height");
        scope.view.tbxNotes.width = scope.getFieldValue(scope._rfpTxtbx, "width");
        
        scope.view.txtAreaNotes.left = scope.getFieldValue(scope._rfpTxtbx, "left");
        scope.view.txtAreaNotes.right = scope.getFieldValue(scope._rfpTxtbx, "right");
        scope.view.txtAreaNotes.height = scope.getFieldValue(scope._rfpTxtbx, "height");
        scope.view.txtAreaNotes.width = scope.getFieldValue(scope._rfpTxtbx, "width");
        
        scope.view.flxReasonFromDetail.skin = scope.getFieldValue(scope._fadsFlexBg);
        scope.view.lblRfpFrom.skin = scope.getFieldValue(scope._fadsFromLabel);
        scope.view.lblRfpSubValue1.skin = scope.getFieldValue(scope._fadsAccountName);
        scope.view.lblRfpSubValue2.skin = scope.getFieldValue(scope._fadsBalanceLabel);
        scope.view.lblRfpSubValue2Label.skin = scope.getFieldValue(scope._fadsBalanceValue);
        scope.view.lblEnterReason.skin = scope.getFieldValue(scope._rfpsTxtbxLabel);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setReasonForPaymentSkins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      } 
    },

     /**
     * Component setReasonForPaymentsDefaultText
     * set default text for properties.
     */
    setReasonForPaymentsDefaultText: function() {
      var scope = this;
      try {
        scope.view.lblReasonForPayment.text = scope.getFieldValue(scope._rfpSectionTitle);
        scope.view.btnCancelNotes.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._billpaybtnCancel)) ? true : false;
        scope.view.btnCancelNotes.text = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._billpaybtnCancel)) ? scope.getFieldValue(scope._billpaybtnCancel) : "";
        scope.view.lblEnterANote.text = scope.getFieldValue(scope._rfpTxbxLabel);
        scope.view.lblEnterReason.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._rfpTbxHeader)) ? true : false;
        scope.view.lblEnterReason.text = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._rfpTbxHeader)) ? scope.getFieldValue(scope._rfpTbxHeader) : "";
        if(scope._rfpTextboxType === "Textbox") {
          scope.view.tbxNotes.isVisible = true;
          scope.view.txtAreaNotes.isVisible = false;
          scope.view.tbxNotes.setFocus(true);
          scope.view.tbxNotes.textInputMode = constants["TEXTBOX_INPUT_MODE_"+ scope.getFieldValue(scope._rfpTxtbx, "inputMode")];
          scope.view.tbxNotes.restrictCharactersSet = scope.getFieldValue(scope._rfpTxtbx, "restrictChar");
          var object = scope.getFieldValue(scope._jsonObjName);
          var maxFillconfig = scope.getFieldValue(scope._maxFillMapping)[object];
          scope.view.tbxNotes.maxTextLength = parseInt(scope.getFieldValue(maxFillconfig, "ReasonForPayment"));
          scope.view.tbxNotes.placeholder = scope.getFieldValue(scope._rfpTxtbx, "placeHolder");
        } else{
          scope.view.txtAreaNotes.isVisible = true;
          scope.view.tbxNotes.isVisible = false;
          scope.view.txtAreaNotes.setFocus(true);
          scope.view.txtAreaNotes.textInputMode = constants["TEXTBOX_INPUT_MODE_"+ scope.getFieldValue(scope._rfpTxtbx, "inputMode")];
          scope.view.txtAreaNotes.restrictCharactersSet = scope.getFieldValue(scope._rfpTxtbx, "restrictChar");
          var object = scope.getFieldValue(scope._jsonObjName);
          var maxFillconfig = scope.getFieldValue(scope._maxFillMapping)[object];
          scope.view.txtAreaNotes.maxTextLength = parseInt(scope.getFieldValue(maxFillconfig, "ReasonForPayment"));
          scope.view.txtAreaNotes.placeholder = scope.getFieldValue(scope._rfpTxtbx, "placeHolder");
        }
        scope.view.btnContinueNotes.text = scope.getFieldValue(scope._rfpCTA1, "text");
        scope.view.flxRfpErrorMessage.setVisibility(false);
        scope.view.btnClear.setVisibility(false);
        if(scope.userFlowType === "EDIT") {
           scope.view.lblReasonForPayment.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._rfpSectionTitle);
          scope.view.txtAreaNotes.text = !scope.isEmptyNullUndefined(scope.inputPool[scope.getFieldValue(scope._rfpTxtbx,"inputPoolKey")]) ? scope.inputPool[scope.getFieldValue(scope._rfpTxtbx,"inputPoolKey")] : "",
         scope.view.tbxNotes.text = !scope.isEmptyNullUndefined(scope.inputPool[scope.getFieldValue(scope._rfpTxtbx,"inputPoolKey")]) ? scope.inputPool[scope.getFieldValue(scope._rfpTxtbx,"inputPoolKey")] : "",
         scope.enableButton("btnContinueNotes");
        } else {
          scope.view.tbxNotes.text = "";
          //scope.view.tbxNotes.setFocus(true);
          scope.view.txtAreaNotes.text = "";
          //scope.view.txtAreaNotes.setFocus(true);
          scope.disableButton("btnContinueNotes");
        }
        if(scope._rfpShowFromAccount === true){
          scope.view.flxReasonFromDetail.setVisibility(true);
          scope.view.flxEnterANote.setVisibility(false);
        } else{
          scope.view.flxReasonFromDetail.setVisibility(false);
          scope.view.flxEnterANote.setVisibility(true);
        }
        scope.view.lblRfpFrom.text = scope.getFieldValue(scope._fadFromLabel);
        scope.view.lblRfpSubValue1.text = scope.getFieldValue(scope._fadAccountName, "value");
        scope.view.lblRfpSubValue2.text = scope.getFieldValue(scope._fadBalanceValue, "text");
        scope.view.lblRfpSubValue2Label.text = scope.getFieldValue(scope._fadBalanceLable);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setReasonForPaymentsDefaultText method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      } 
    },

    /**
     * Component setReasonForPaymentActions
     * set action for Reason for Payments.
     */
    setReasonForPaymentActions: function() {
      var scope = this;
      try {
        scope.view.flxNotesBack.onTouchStart = scope.goBack;
        scope.view.btnCancelNotes.onClick = scope.enableCancelPopup;
        scope.view.btnContinueNotes.onClick = scope.onReasonForPaymentContinue;
        scope.view.tbxNotes.onTextChange = scope.onReasonForPaymentTextChange; 
        scope.view.btnClear.onTouchEnd = function(){
          scope.view.tbxNotes.text = "";
          scope.view.txtAreaNotes.text = "";
          scope.disableButton("btnContinueNotes");
          scope.view.btnClear.setVisibility(false);
        };
        scope.view.txtAreaNotes.onTextChange = scope.onReasonForPaymentTextChange;
        scope.view.flxRfpChevron.onTouchEnd = function(){
          scope.amountSelectedFlowType = "ReasonForPayment";
          scope.setFromAccount();
          scope.navigateTo("flxFromAccountMain","flxFromHeaderTop",scope.getFieldValue(scope._fasSectionTitle));
        };
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setReasonForPaymentActions method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }     
    },

    /**
     * Component onReasonForPaymentTextChange
     * set actions for set Notes.
     */
    onReasonForPaymentTextChange: function() {
      var scope = this;
      try {
        if(scope._rfpTextboxType === "Textbox") {
          var reasonPaymentEntered = {
            "ReasonForPayment": this.view.tbxNotes.text
          };
        } else{
          var reasonPaymentEntered = {
            "ReasonForPayment": this.view.txtAreaNotes.text
          };
        }
        scope.view.btnClear.isVisible = scope.view.tbxNotes.text.length > 0 ? true : false;
        var minlength = scope.minFillValidate(reasonPaymentEntered);
        var maxlength = scope.maxFillValidate(reasonPaymentEntered);
        if((Object.keys(minlength).length === 0 && minlength.constructor === Object) && (Object.keys(maxlength).length === 0 && maxlength.constructor === Object)) {
          scope.view.btnClear.setVisibility(true);
          scope.enableButton("btnContinueNotes");
        } else {
          scope.view.btnClear.setVisibility(false);
          scope.disableButton("btnContinueNotes");
        }
        scope.view.tbxNotes.skin = scope.getFieldValue(scope._rfpsTxtbx);
        scope.view.txtAreaNotes.skin = "ICSknTxtAreaE3E3E31px34px";
        scope.view.flxRfpErrorMessage.setVisibility(false);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onReasonForPaymentTextChange method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }  
    },

    /**
     * Component onReasonForPaymentContinue
     * Navigate to next form based on order.
     */
    onReasonForPaymentContinue: function() {
      var scope = this;
      try {
        if(scope._rfpTextboxType === "Textbox") {
          var dataJSON= {
            "ReasonForPayment" : scope.view.tbxNotes.text
          };
        } else{
          var dataJSON= {
            "ReasonForPayment" : scope.view.txtAreaNotes.text
          };
        }
          var dataValidator = scope.performDataValidation(dataJSON);
          if(Object.keys(dataValidator).length === 0 && dataValidator.constructor === Object)
          {
            if(scope._rfpTextboxType === "Textbox") {
              scope.updateInputPoolValue(scope._rfpTxtbx, scope.view.tbxNotes.text);
            } else{
              scope.updateInputPoolValue(scope._rfpTxtbx, scope.view.txtAreaNotes.text);
            }
            // scope.onFormOrderNavigation();
            if(scope.userFlowType === "EDIT") {
            scope.setVerifyDetails();
          //  scope.navigateTo("flxVerifyDetails", "flxVerifyHeader",scope.getFieldValue(scope._vfsSectionTitle));
          } else {
            //scope.setAmount();
            //scope.navigateTo("flxbillPaymentAmountDetails", "flxAmountHeader", scope.getFieldValue(scope._amntSectionTitle));
            scope.onFormOrderNavigation();
          } } else {
            scope.setReasonForPaymentErrors(dataValidator);
          }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onReasonForPaymentContinue method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setReasonForPaymentErrors
     * Reponsible to reset skin fot textbox
     */
    setReasonForPaymentErrors:function(dvfError) {
      var scope = this;
      try {
        if(scope._BillpayErrorReporting === "Inline") {
          for(var iterator in dvfError) {
            if("ReasonForPayment" === iterator){
              scope.view.lblRfpErrorMessage.text = dvfError[iterator];
            }           
          }
          scope.view.tbxNotes.skin =scope._gsknTxtboxErr;
          //scope.view.txtAreaNotes.skin = "ICSknTxtF54B5EBorder";
          scope.view.flxRfpErrorMessage.setVisibility(true);
        } else  {
          scope.errorSectionTitle = scope.getFieldValue(scope._rfpSectionTitle);
          scope.setErrorScreenData();
          scope.navigateTo("flxError", "flxErrorHeaderMain", scope.errorSectionTitle);
        }
         scope.disableButton("btnContinueNotes");
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setReasonForPaymentErrors method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    setErrorScreenSkins: function() {
      var scope = this;
      try {
      scope.view.flxErrorHeaderMain.skin = scope.getFieldValue(scope._gsknbillpayHeaderFlex);
      scope.view.flxError.skin = scope.getFieldValue(scope._gsknbillpayContentFlex);
      scope.view.lblFailTitle.skin = scope.getFieldValue(scope._gsknErrorScreenTitle);
      scope.view.lblFailDescription.skin  = scope.getFieldValue(scope._gsknErrorScreenDescription);
      if(!scope.isEmptyNullUndefined(scope.getFieldValue(scope._errsCTA1, "actionType")) && scope.getFieldValue(scope._errsCTA1, "actionType") === "primary") {
        scope.view.btnFailureAction1.skin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
        scope.view.btnFailureAction1.focusSkin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
      } else if(!scope.isEmptyNullUndefined(scope.getFieldValue(scope._errsCTA1, "actionType")) && scope.getFieldValue(scope._errsCTA1, "actionType") === "secondary"){
        scope.view.btnFailureAction1.skin = scope.getFieldValue(scope._gsknSecondaryContexualBtn); 
        scope.view.btnFailureAction1.focusSkin = scope.getFieldValue(scope._gsknSecondaryContexualBtn);
      }
      if(!scope.isEmptyNullUndefined(scope.getFieldValue(scope._errsCTA2, "actionType")) && scope.getFieldValue(scope._errsCTA2, "actionType") === "primary") {
        scope.view.btnFailureAction2.skin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
        scope.view.btnFailureAction2.focusSkin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
      } else if(!scope.isEmptyNullUndefined(scope.getFieldValue(scope._errsCTA2, "actionType")) && scope.getFieldValue(scope._errsCTA2, "actionType") === "secondary"){
        scope.view.btnFailureAction2.skin = scope.getFieldValue(scope._gsknSecondaryContexualBtn); 
        scope.view.btnFailureAction2.focusSkin = scope.getFieldValue(scope._gsknSecondaryContexualBtn);
      }
      if(!scope.isEmptyNullUndefined(scope.getFieldValue(scope._errsCTA3, "actionType")) && scope.getFieldValue(scope._errsCTA3, "actionType") === "primary") {
        scope.view.btnFailureAction3.skin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
        scope.view.btnFailureAction3.focusSkin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
      } else if(!scope.isEmptyNullUndefined(scope.getFieldValue(scope._errsCTA3, "actionType")) && scope.getFieldValue(scope._errsCTA3, "actionType") === "secondary"){
        scope.view.btnFailureAction3.skin = scope.getFieldValue(scope._gsknSecondaryContexualBtn); 
        scope.view.btnFailureAction3.focusSkin = scope.getFieldValue(scope._gsknSecondaryContexualBtn);
      }
      if(!scope.isEmptyNullUndefined(scope.getFieldValue(scope._errscreenCTA3, "actionType")) && scope.getFieldValue(scope._errscreenCTA3, "actionType") === "primary") {
        scope.view.btnError3.skin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
        scope.view.btnError3.focusSkin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
      } else if(!scope.isEmptyNullUndefined(scope.getFieldValue(scope._errscreenCTA3, "actionType")) && scope.getFieldValue(scope._errscreenCTA3, "actionType") === "secondary"){
        scope.view.btnError3.skin = scope.getFieldValue(scope._gsknSecondaryContexualBtn); 
        scope.view.btnError3.focusSkin = scope.getFieldValue(scope._gsknSecondaryContexualBtn);
      }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setErrorScreenSkins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    setErrorScreenData: function(errorMessage) {
      var scope = this;
      try {
        scope.setErrorScreenSkins();
        scope.view.flxErrorHeaderMain.setVisibility(true);
        scope.view.lblErrorHeaderName.text = scope.errorSectionTitle;
        scope.view.lblFailTitle.text  = !scope.isEmptyNullUndefined(errorMessage) ? errorMessage : scope._errsTitleMessage;
        scope.view.lblFailDescription.text = scope._errsSubTitile;
        scope.view.imgFail.src = scope._errsFailIcon;
        scope.view.imgFail.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._errsFailIcon)) ? true : false;
        scope.view.btnFailureAction1.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(this._errsCTA1, "text")) ? true : false;
        scope.view.btnFailureAction1.text = !scope.isEmptyNullUndefined(scope.getFieldValue(this._errsCTA1, "text")) ? scope.getFieldValue(this._errsCTA1, "text") : "";
        scope.view.btnFailureAction2.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(this._errsCTA2, "text")) ? true : false;
        scope.view.btnFailureAction2.text = !scope.isEmptyNullUndefined(scope.getFieldValue(this._errsCTA2, "text")) ? scope.getFieldValue(this._errsCTA2, "text") : "" ;
        scope.view.btnError3.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(this.errscreenCTA3, "text")) ? true : false;
        scope.view.btnError3.text = !scope.isEmptyNullUndefined(scope.getFieldValue(this.errscreenCTA3, "text")) ? scope.getFieldValue(this._errscreenCTA3, "text") : "" ;
        scope.view.btnFailureAction3.isVisible = false;
        scope.view.flxFailureButtons.isVisible = true;  
        scope.view.btnFailureAction1.onClick = scope.amountRetry;
        scope.view.btnFailureAction2.onClick = scope.backNav;
        scope.view.btnFailureAction3.onClick = function(){
          scope.retryHitCount = 0;
          scope.onAccountsDashBoardNav();
        };
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setErrorScreenData method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component amountRetry
     * Validation for amount retry
     */
    amountRetry:function(){
      var scope = this;
      scope.retryHitCount++;
      var contractCMaxHit=!scope.isEmptyNullUndefined(scope.getFieldValue(this._errsCTA1, "amountHitCount")) ? scope.getFieldValue(this._errsCTA1, "amountHitCount") : 4;
      var stackLength = scope.stack.length;
      var currentPage = scope.stack[stackLength - 2];
      if(currentPage === "flxbillPaymentAmountDetails"){
        if(scope.retryHitCount > contractCMaxHit){
          scope.view.flxFailureButtons.isVisible = false;
          scope.view.btnFailureAction3.isVisible = true;
          scope.view.lblFailTitle.text  = "Payment Failed";
          scope.view.lblFailDescription.text = "Payment failed.";
        }else{
          scope.goBack();
        }
      }else{
        scope.goBack();
      }
    },

    /**
     * Component minFillValidate
     * Validation for minimum length
     */
    minFillValidate: function(dataJson) {
      var scope = this;
      try {
        var object = scope.getFieldValue(scope._jsonObjName);
        var minFillconfig = scope.getFieldValue(scope._minFillMapping);      
        var tempJson = {};
        for(var key in dataJson) {
          if(dataJson[key]){
            tempJson[key] = dataJson[key];
          }
          else {
            tempJson[key] = "";
          }
        }
        var dataValidator = scope.dataValidationHandler.validateMinFill(tempJson,object,minFillconfig);       
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
     * Component minFillValidate
     * Validation for minimum length
     */
    maxFillValidate: function(dataJson) {
      var scope=this;
      try {
        var object = scope.getFieldValue(scope._jsonObjName);
        var maxFillconfig = scope.getFieldValue(scope._maxFillMapping);      
        var tempJson = {};
        for(var key in dataJson) {
          if(dataJson[key]){
            tempJson[key] = dataJson[key];
          }
          else{
            tempJson[key] = "";
          }
        }
        var dataValidator = scope.dataValidationHandler.validateMaxFill(tempJson,object,maxFillconfig);       
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
       var scope=this;
      try {
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
     * Component onFormOrderNavigation
     * set actions for set Payee name
     */
    onFormOrderNavigation: function() {
      var scope = this;
      try {
        if(!scope.isEmptyNullUndefined(scope.stack.length) && scope.stack.length === 7 && scope.userEditPayeeDetails === ""){
          scope.setVerifyDetails();
        }else if(!scope.isEmptyNullUndefined(scope.stack.length) && scope.stack.length > 7 && scope.userEditPayeeDetails === "EDIT"){
          scope.setVerifyDetails();
        }
        else{
          for(var i = 3; i<=6; i++) {
            if(scope.userEditPayeeDetails === "EDIT"){
              if(scope.stack.length === i+1) {
                if(scope.getFieldValue(scope["_billpayFormOrder"+i]) === "PayableTo") {
                  if(scope.userFlowType === "EDIT") {
                    scope.setVerifyDetails();
                    //  scope.navigateTo("flxVerifyDetails", "flxVerifyHeader",scope.getFieldValue(scope._vfsSectionTitle));
                  } else {
                    scope.setPayableTo();
                    scope.navigateTo("flxMainBillerName", "flxBillerNameHeader", scope.getFieldValue(scope._ptSectionTitle));
                  }
                  return;
                } else if(scope.getFieldValue(scope["_billpayFormOrder"+i]) === "AccountNumber") {
                  if(scope.userFlowType === "EDIT") {
                    scope.setVerifyDetails();
                    //   scope.navigateTo("flxVerifyDetails", "flxVerifyHeader", scope.getFieldValue(scope._vfsSectionTitle));
                  } else {
                    scope.setAccountNumber();
                    scope.navigateTo("flxBillerAccountNumber", "flxBillerAccountNumberHeader", scope.getFieldValue(scope._acnSectionTitle));
                  }
                  return;
                } else if(scope.getFieldValue(scope["_billpayFormOrder"+i]) === "Payment Notes") {
                  if(scope.userFlowType === "EDIT") {
                    scope.setVerifyDetails();
                    // scope.navigateTo("flxVerifyDetails", "flxVerifyHeader",scope.getFieldValue(scope._vfsSectionTitle));
                  } else {
                    scope.setReasonForPayments();
                    scope.navigateTo("flxMainNotes", "flxHeaderNotes", scope.getFieldValue(scope._rfpSectionTitle));
                  }
                  return;
                }else if(scope.getFieldValue(scope["_billpayFormOrder"+i]) === "Amount") {
                  if(scope.userFlowType === "EDIT") {
                    scope.setVerifyDetails();
                    // scope.navigateTo("flxVerifyDetails", "flxVerifyHeader",scope.getFieldValue(scope._vfsSectionTitle));
                  } else {
                    scope.setAmount();
                    scope.navigateTo("flxbillPaymentAmountDetails", "flxAmountHeader", scope.getFieldValue(scope._amntSectionTitle));
                  }
                  return;
                }
              }
            }else{
              if(scope.stack.length === i) {
                if(scope.getFieldValue(scope["_billpayFormOrder"+i]) === "PayableTo") {
                  if(scope.userFlowType === "EDIT") {
                    scope.setVerifyDetails();
                    //  scope.navigateTo("flxVerifyDetails", "flxVerifyHeader",scope.getFieldValue(scope._vfsSectionTitle));
                  } else {
                    scope.setPayableTo();
                    scope.navigateTo("flxMainBillerName", "flxBillerNameHeader", scope.getFieldValue(scope._ptSectionTitle));
                  }
                  return;
                } else if(scope.getFieldValue(scope["_billpayFormOrder"+i]) === "AccountNumber") {
                  if(scope.userFlowType === "EDIT") {
                    scope.setVerifyDetails();
                    //   scope.navigateTo("flxVerifyDetails", "flxVerifyHeader", scope.getFieldValue(scope._vfsSectionTitle));
                  } else {
                    scope.setAccountNumber();
                    scope.navigateTo("flxBillerAccountNumber", "flxBillerAccountNumberHeader", scope.getFieldValue(scope._acnSectionTitle));
                  }
                  return;
                } else if(scope.getFieldValue(scope["_billpayFormOrder"+i]) === "Payment Notes") {
                  if(scope.userFlowType === "EDIT") {
                    scope.setVerifyDetails();
                    // scope.navigateTo("flxVerifyDetails", "flxVerifyHeader",scope.getFieldValue(scope._vfsSectionTitle));
                  } else {
                    scope.setReasonForPayments();
                    scope.navigateTo("flxMainNotes", "flxHeaderNotes", scope.getFieldValue(scope._rfpSectionTitle));
                  }
                  return;
                }else if(scope.getFieldValue(scope["_billpayFormOrder"+i]) === "Amount") {
                  if(scope.userFlowType === "EDIT") {
                    scope.setVerifyDetails();
                    // scope.navigateTo("flxVerifyDetails", "flxVerifyHeader",scope.getFieldValue(scope._vfsSectionTitle));
                  } else {
                    scope.setAmount();
                    scope.navigateTo("flxbillPaymentAmountDetails", "flxAmountHeader", scope.getFieldValue(scope._amntSectionTitle));
                  }
                  return;
                }
              }
            }
          }
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onFormOrderNavigation method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component onAccountNumContinue
     * set actions for set Account number
     */
    onAccountNumContinue: function() {
      var scope = this;
      try {
        var dataJSON= {
          "AccountNumber" : scope.view.lblAccNo.text
        };
        var dataValidator = scope.performDataValidation(dataJSON);
        if(Object.keys(dataValidator).length === 0 && dataValidator.constructor === Object)
        {
          scope.updateInputPoolValue(scope._acnTextbox, scope.view.lblAccNo.text);
          if(scope.userFlowType === "EDIT") {
            scope.setVerifyDetails();
          //  scope.navigateTo("flxVerifyDetails", "flxVerifyHeader",scope.getFieldValue(scope._vfsSectionTitle));
          } else {
            //scope.setReasonForPayments();
            //scope.navigateTo("flxMainNotes", "flxHeaderNotes", scope.getFieldValue(scope._rfpSectionTitle));
            scope.onFormOrderNavigation();
          }
        } else {
          scope.setAccountNumberError(dataValidator);
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onAccountNumContinue method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
     /**
     * Component onAmountContinue
     * set actions for set Account number
     */
    onAmountContinue: function() {
      var scope = this;
      try {
        var enteredText = scope.view.tbxAmount.text;
        var availableBalance = scope.view.lblAmountBalance.text.substring(1);
        var number = enteredText.replace(/,/g, "");
        if(!scope.isEmptyNullUndefined(number)){
          if(parseInt(number)<=0) {
            if(scope._BillpayErrorReporting === "Inline") {
            scope.view.lblErrMsg.text = scope.getFieldValue(scope._amntZeroBalWarnMsg);
            scope.view.flxErrorMessage.setVisibility(true);
            } else {
              scope.errorSectionTitle = scope.getFieldValue(scope._amntSectionTitle);
              scope.setErrorScreenData(scope.getFieldValue(scope._amntZeroBalWarnMsg));
             scope.navigateTo("flxError", "flxErrorHeaderMain", scope.errorSectionTitle);
            }
            scope.view.flxAmountWrapper.skin = "ICSknFlxBorder";
            scope.disableButton("btnAmountContinue");
          } else if (parseInt(number) > parseInt(availableBalance)) {
            if(scope._BillpayErrorReporting === "Inline") {
            scope.view.lblErrMsg.text = scope.getFieldValue(scope._amntinsufficientMsg);
            scope.view.flxAmountWrapper.skin = "ICSknFlxBorder";
            scope.view.flxErrorMessage.setVisibility(true);
            } else {
              scope.errorSectionTitle = scope.getFieldValue(scope._amntSectionTitle);
              scope.setErrorScreenData(scope.getFieldValue(scope._amntinsufficientMsg));
              scope.view.flxAmountWrapper.skin = "ICSknFlxBorder";
             scope.navigateTo("flxError", "flxErrorHeaderMain", scope.errorSectionTitle);
            }
	        scope.view.flxAmountWrapper.skin = "ICSknFlxBorder";
            scope.disableButton("btnAmountContinue");
          } else {
            scope.view.flxAmountWrapper.skin = "sknflxe3e3e3border";
            var formattedAmount = scope.view.lblDollar.text +" "+ scope.view.tbxAmount.text;
            scope.updateInputPoolValue(scope._amntTxtbx, formattedAmount);
            //scope.setVerifyDetails();
            if(this._paymentType==="AdhocBillpayment") {
              if(scope.userFlowType === "EDIT") {
                scope.setVerifyDetails();
              } else {
                scope.onFormOrderNavigation();
              }
            }
          //  scope.navigateTo("flxVerifyDetails", "flxVerifyHeader",scope.getFieldValue(scope._vfsSectionTitle));  
          }
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onAmountContinue method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component setAccountNumberError
     * Reponsible to reset skin for label
     */
    setAccountNumberError:function(dvfError) {
      var scope = this;
      try {
        if(scope._BillpayErrorReporting === "Inline") {
          for(var iterator in dvfError) {
            if("AccountNumber" === iterator){
              scope.view.lblAccNoErrMsg.text = dvfError[iterator];
            }           
          }
          scope.view.lblAccNo.skin = "ICSknLblEE000534px";
          scope.view.flxAccNoErrorMessage.setVisibility(true);
        } else  {
          scope.errorSectionTitle = scope.getFieldValue(scope._acnSectionTitle);
          scope.setErrorScreenData();
          scope.navigateTo("flxError", "flxErrorHeaderMain", scope.errorSectionTitle);
        }
        scope.disableButton("btnAccNumContinue");
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setAccountNumberError method of the component.",
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
      var scope = this;
      try {
        var widgets = scope.view.widgets();
        for(var i=0; i<widgets.length; i++) {
          widgets[i].isVisible = false;
        }
        scope.stack = [];
        scope.headerTitleStack  = [];
        scope.inputPool={};
        scope.userFlowType = "";
        scope.userEditPayeeDetails = "";
        scope.amountSelectedFlowType = "";
         scope.retryHitCount=0;
        scope.view.forceLayout();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
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
     * Component setFromAccount
     * Declaration of all for set From Account
     */
    
    setFromAccount: function(){
       var scope = this;
      try {
        scope.setFromAccountDefaultText();
        scope.setFromAccountSkins();
        scope.setFromAccountActions();
        scope.getFromAccounts();
        } catch(err) {
        var errObj = {   
          "errorInfo" : "Error in setFromAccount method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
  /**
     * Component setFromAccountDefaultText
     * set default text for set FromAccount
     */
    setFromAccountDefaultText: function(){
       var scope = this;
      try {
        scope.view.btnFromCancel.text = scope.getFieldValue(scope._billpaybtnCancel);
        scope.view.btnFromCancel.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._billpaybtnCancel)) ? true : false;
        scope.view.lblFromAccName.text = scope.getFieldValue(scope._fasSectionTitle);
        scope.view.lblDesc.text = scope.getFieldValue(scope._fasSubHeader); 
        scope.view.tbxSearch.placeholder = scope.getFieldValue(scope._fasSearchBox, "Placeholder");
        scope.view.tbxSearch.text = ""; 
        scope.searchApplied = false; 
        scope.view.imgFromCloseIcon.setVisibility(false);
        scope.view.flxFromDesc.setVisibility(true);
       if(scope._fasSearchBoxVisible === true){
          scope.view.flxFromSearch.setVisibility(true);
          } else{
         scope.view.flxFromSearch.setVisibility(false);
          }
         scope.view.forceLayout();
         } catch(err) {
        var errObj = {
          "errorInfo" : "Error in  setFromAccountDefaultText method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    }, 
    
    
    /**
     * Component setFromAccountSkins
     * set skins for setFromAccountSkins
     */
    setFromAccountSkins: function()
    {
       var scope = this;  
      try {
        scope.view.flxFromAccountMain.skin = scope.getFieldValue(scope._gsknbillpayContentFlex);		 
        scope.view.flxHeader1.skin = scope.getFieldValue(scope._gsknbillpayHeaderFlex);		
        scope.view.imgFromBack.src = scope.getFieldValue(scope._billpayimgBack);	
        scope.view.imgFromSearch.src = scope.getFieldValue(scope._searchicon);
        scope.view.imgFromSearch.isVisible=!scope.isEmptyNullUndefined(scope.getFieldValue(scope._searchicon))?true:false;
        scope.view.lblFromAccName.skin = scope.getFieldValue(scope._gskBillpaynHeaderLbl);	
        scope.view.btnFromCancel.skin = scope.getFieldValue(scope._gsknBillpayCancelBtn);		
        scope.view.tbxSearch.skin = scope.getFieldValue(scope._fassSearchBox);		 
        scope.view.lblDesc.skin = scope.getFieldValue(scope._fassSubheader);		
       // scope.view.flxPayeenameSeparator.skin = scope.getFieldValue(scope._gsknSubHeaderseparator);		 
        } catch(err) {
        var errObj = {
          "errorInfo" : "Error in  setFromAccountSkins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component  setFromAccountActions
     * set actions for set FromAccount name
     */
    setFromAccountActions: function()
    {
       var scope = this;
      try {
      scope.view.flxFromBack.onTouchStart = scope.backNav;
      scope.view.btnFromCancel.onClick = scope.enableCancelPopup;
      this.view.tbxSearch.onTextChange = this.txtBoxOnKeyUp;
      this.view.imgFromCloseIcon.onTouchStart = this.clearTextBoxTexts;
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setFromAccountActions method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    
    /**
     * Component setBillRecipient
     * Declaration of all for set Bill Recipient
     */
    setBillRecipient: function(){
      try{
        var scope = this;
        scope.setBillRecipientDefaultText();
        scope.setBillRecipientSkins();
        scope.setBillRecipientActions();
      } catch(err){
        var errObj = {
          "errorInfo" : "Error in setBillRecipient method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        this.onError(errObj);
      }
    },

    /**
     * Component setBillRecipientDefaultText
     * set default text for set Bill Recipient
     */
    setBillRecipientDefaultText: function(){
      try{
        var scope = this;
        scope.view.lblBillRecipient.text = scope.getFieldValue(scope._brSectionTitle);
        if(scope.userFlowType === "EDIT") {
           scope.view.lblBillRecipient.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._brSectionTitle);
        }
        scope.view.btnCancelBillRecipient.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._billpaybtnCancel)) ? true : false;
        scope.view.lblSelectBillRecipient.text = scope.getFieldValue(scope._brSubHeaderTitle);
        if(scope._brShowFromAccount === true){
          scope.view.flxBillRecipientFromDetail.setVisibility(true);
          scope.view.flxSelectBillRecipient.setVisibility(false);
        } else{
          scope.view.flxBillRecipientFromDetail.setVisibility(false);
          scope.view.flxSelectBillRecipient.setVisibility(true);
        }
        scope.view.lblBrFrom.text = scope.getFieldValue(scope._fadFromLabel);
        scope.view.lblBrSubValue1.text = scope.getFieldValue(scope._fadAccountName, "value");
        scope.view.lblBrSubValue2Label.text = scope.getFieldValue(scope._fadBalanceLable);
        scope.view.lblBrSubValue2Value.text = scope.getFieldValue(scope._fadBalanceValue, "text");
        //scope.view.btnBillRecipient.text = scope.getFieldValue(scope._brCTA1, "text");
        //scope.view.btnSomeoneElseBill.text = scope.getFieldValue(scope._brCTA2, "text");
        var recipientOptions = scope.getFieldValue(scope._brdropdownOptions);     
        var recipientArray = (recipientOptions.optionValues).split(',');
        for(var i = 0; i < recipientArray.length; i++) {
          recipientArray[i] = recipientArray[i].replace(/^\s*/, "").replace(/\s*$/, "");
        }
        var recipientList=[];
        for(var j = 0; j < recipientArray.length; j++){
          var recipientArr={};
          recipientArr["lblFrequency"] = {
            "skin" : scope.getFieldValue(scope._brSknSubHeader),
            "text": recipientArray[j]
          };
            var defaultValue =scope.getFieldValue(this._brdropdownOptions,"defaultValue");      		
           var value =scope.inputPool[scope.getFieldValue(this._brdropdownOptions,"inputPoolKey")];
      
          if(!this.isEmptyNullUndefined(value)){
            if(value=== recipientArray[j]){
              recipientArr["flxMain"] = {
                "skin" :scope.getFieldValue(this._brSknOptionSelection)            
              };
            }
          }else{
            recipientArr["flxMain"] = {
              "skin" : ""
            };
            if(defaultValue===recipientArr["lblFrequency"].text  &&  scope.userFlowType!== "EDIT" )
              {                
                 recipientArr["flxMain"] = {
                "skin" :scope.getFieldValue(this._brSknOptionSelection)            
              };
              }
          }
          recipientList.push(recipientArr);          
        }  
        var widgetMap = {
          "flxMain":"flxMain",
          "lblFrequency":"lblFrequency"
        };
        scope.view.segSelectBillRecipient.widgetDataMap = widgetMap;
       // var selectedRecipient = scope.view.segSelectBillRecipient.onRowClick();
        scope.view.segSelectBillRecipient.setData(recipientList);
        if(selectedRecipient !== "")
        {
          return selectedRecipient;
        }
      } catch(err){
        var errObj = {
          "errorInfo" : "Error in setBillRecipientDefaultText method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        this.onError(errObj);
      }
    },
    
    /**     
     * Component selectRecipient
     * To pass the selected data to next screen.
     */
     selectRecipient:function()
    {
      try{
        var scope = this; 
        var segmentData = JSON.parse(JSON.stringify(this.view.segSelectBillRecipient.data));
        var selectedData = scope.view.segSelectBillRecipient.selectedRowItems;  
        var selectedRow = scope.view.segSelectBillRecipient.selectedRowIndex[1];            
        for(var i = 0; i < segmentData.length; i++){         
          segmentData[i]["flxMain"] = {
            "skin" :""            
          };                    
        }
        selectedData[0]["flxMain"] = {
          "skin" : scope.getFieldValue(scope._brSknOptionSelection)              
        };
        
        scope.view.segSelectBillRecipient.setData(segmentData);       
        scope.view.segSelectBillRecipient.setDataAt(selectedData[0], selectedRow);
        var updateOption = selectedData[0].lblFrequency["text"];
        scope.updateInputPoolValue(scope._brdropdownOptions, updateOption);
        if(scope._paymentType === "AdhocBillpayment")
        {
          if(updateOption === kony.i18n.getLocalizedString("i18n.BillPay.SelectRecipient.option1"))
          {
            scope.setBillPayerDetails();
            scope.navigateTo("flxMainPayeeDetails", "flxHeaderComp", scope.getFieldValue(scope._bpdSectionTitle));
          } 
          else 
          {
            scope.setEditBillPayerDetails();
            scope.navigateTo("flxMainEditPayeeDetails", "flxHeaderEditpayee", scope.getFieldValue(scope._bpdSectionTitle));
          }
        } else { 
          if(scope.userFlowType === "EDIT") {
            scope.setVerifyDetails();
           // scope.navigateTo("flxVerifyDetails", "flxVerifyHeader",scope.getFieldValue(scope._vfsSectionTitle));
          } else {
            scope.setPayableTo();
            scope.navigateTo("flxMainBillerName", "flxBillerNameHeader", scope.getFieldValue(scope._ptSectionTitle));
          } }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onClickRecipient method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        this.onError(errObj);
      }
    },

    /**
     * Component setBillRecipientSkins
     * set skins for set Bill Recipient
     */
    setBillRecipientSkins: function(){
      try {
        var scope = this;
        scope.view.flxBillRecipient.skin = scope.getFieldValue(scope._gsknbillpayContentFlex);
        scope.view.flxHeaderMainBillRecipient.skin = scope.getFieldValue(scope._gsknbillpayHeaderFlex);
        scope.view.lblBillRecipient.skin = scope.getFieldValue(scope._gskBillpaynHeaderLbl);
        scope.view.btnCancelBillRecipient.skin = scope.getFieldValue(scope._gsknBillpayCancelBtn);
        scope.view.lblSelectBillRecipient.skin = scope.getFieldValue(scope._brSknSubHeader);
        scope.view.flxShadowBillRecipient.skin = scope.getFieldValue(scope._brSknSubHeaderSeparator);
        scope.view.flxBillRecipientFromDetail.skin = scope.getFieldValue(scope._fadsFlexBg);
        scope.view.lblBrFrom.skin = scope.getFieldValue(scope._fadsFromLabel);
        scope.view.lblBrSubValue1.skin = scope.getFieldValue(scope._fadsAccountName);
        scope.view.lblBrSubValue2Value.skin = scope.getFieldValue(scope._fadsBalanceLabel);
        scope.view.lblBrSubValue2Label.skin = scope.getFieldValue(scope._fadsBalanceValue);
        //scope.view.btnBillRecipient.skin = scope.getFieldValue(scope._brSknSelectedCTA);
        //scope.view.btnSomeoneElseBill.skin = scope.getFieldValue(scope._brSknUnselectedCTA);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setBillRecipientSkins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        this.onError(errObj);
      }
    },

    /**
     * Component setBillRecipientActions
     * set actions for set Bill Recipient
     */
    setBillRecipientActions: function() {
      var scope = this;
      try {
        if(this.responseLength === "OneFromAccount")
        {
          scope.view.imgBackBillRecipient.onTouchEnd = scope.backNav;
        }
        else{
          scope.view.imgBackBillRecipient.onTouchEnd = scope.goBack;
        }
        scope.view.btnCancelBillRecipient.onClick = scope.enableCancelPopup;
        scope.view.segSelectBillRecipient.onRowClick = scope.selectRecipient;
        scope.view.flxBrChevron.onTouchEnd = function(){
          //scope.userFlowType = "EDIT";
          scope.amountSelectedFlowType = "BillRecipient";
          scope.setFromAccount();
          scope.navigateTo("flxFromAccountMain","flxFromHeaderTop",scope.getFieldValue(scope._fasSectionTitle));
        };
      } catch(err){
        var errObj = {
          "errorInfo" : "Error in setBillRecipientActions method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    /**
     * Component setBillPayerDetails
     * Declaration of all for set Bill Payer's Details
     */
    setBillPayerDetails: function(){
      try{
        var scope = this;
        scope.setBillPayerDetailsDefaultText();
        scope.setBillPayerDetailsSkins();
        scope.setBillPayerDetailsActions();
      } catch(err){
        var errObj = {
          "errorInfo" : "Error in setBillPayerDetails method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        this.onError(errObj);
      }
    },

    /**
     * Component setBillRecipientDefaultText
     * set default text for set Bill Payer's Details
     */
    setBillPayerDetailsDefaultText: function(){
      try{
        var scope = this;
        scope.view.lblVerifyNamePayeeDetails.text = scope.getFieldValue(scope._bpdSectionTitle);
         if(scope.userFlowType === "EDIT") {
         scope.view.lblVerifyNamePayeeDetails.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._bpdSectionTitle);
        }
        scope.view.btnVerifyCancelPayeeDetails.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._billpaybtnCancel)) ? true : false;
        scope.view.lblConfirmRecievedBill.text = scope.getFieldValue(scope._bpdSubHeader);
        scope.view.lblPayerNameKeypayeeDetails.text = scope.getFieldValue(scope._bpdLabel1);
        scope.view.lblPayerNameValue.text = scope.getFieldValue(scope._bpdValue1);
        scope.view.lblAddressKeypayeeDetails.text = scope.getFieldValue(scope._bpdLabel2);
        scope.view.lblAddressValue.text = scope.getFieldValue(scope._bpdValue2);
        scope.view.lblPostalCodeKeypayeeDetails.text = scope.getFieldValue(scope._bpdLabel3);
        scope.view.lblPostalCodeValuePayeeDetails.text = scope.getFieldValue(scope._bpdValue3);
        scope.view.lblLocationKeypayeeDetails.text = scope.getFieldValue(scope._bpdLabel4);
        scope.view.lblLocationValue.text = scope.getFieldValue(scope._bpdValue4);
        scope.view.lblProvincepayeeDetails.text = scope.getFieldValue(scope._bpdLabel5);
        scope.view.lblProvinceValue.text = scope.getFieldValue(scope._bpdValue5);
        scope.view.btnContinuepayeeDetails.text = scope.getFieldValue(scope._bpdCTA1, "text");
        scope.view.btnModifyDetails.text = scope.getFieldValue(scope._bpdCTA2, "text");
        if(scope._bpdShowFromAccount === true){
          scope.view.flxBillPayFromDetail.setVisibility(true);
          scope.view.FlxHeaderPayeeDetails.setVisibility(false);
        } else{
          scope.view.flxBillPayFromDetail.setVisibility(false);
          scope.view.FlxHeaderPayeeDetails.setVisibility(true);
        }
        scope.view.lblBpdFrom.text = scope.getFieldValue(scope._fadFromLabel);
        scope.view.lblBpdSubValue1.text = scope.getFieldValue(scope._fadAccountName, "value");
        scope.view.lblBpdSubValue2Label.text = scope.getFieldValue(scope._fadBalanceLable);
        scope.view.lblBpdSubValue2Value.text = scope.getFieldValue(scope._fadBalanceValue, "text");
      } catch(err){
        var errObj = {
          "errorInfo" : "Error in setBillPayerDetailsDefaultText method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        this.onError(errObj);
      }
    },

    /**
     * Component setBillPayerDetailsSkins
     * set skins for set Bill Payer Details
     */
    setBillPayerDetailsSkins: function(){
      try{
        var scope = this;
        scope.view.flxMainPayeeDetails.skin = scope.getFieldValue(scope._gsknbillpayContentFlex);
        scope.view.flxHeaderComp.skin = scope.getFieldValue(scope._gsknbillpayHeaderFlex);
        scope.view.lblVerifyNamePayeeDetails.skin = scope.getFieldValue(scope._gskBillpaynHeaderLbl);
        scope.view.btnVerifyCancelPayeeDetails.skin = scope.getFieldValue(scope._gsknBillpayCancelBtn);
        scope.view.lblConfirmRecievedBill.skin = scope.getFieldValue(scope._bpdsSubHeader);
        scope.view.lblPayerNameKeypayeeDetails.skin = scope.getFieldValue(scope._bpdsLabel);
        scope.view.lblPayerNameValue.skin = scope.getFieldValue(scope._bpdsValue);
        scope.view.lblAddressKeypayeeDetails.skin = scope.getFieldValue(scope._bpdsLabel);
        scope.view.lblAddressValue.skin = scope.getFieldValue(scope._bpdsValue);
        scope.view.lblPostalCodeKeypayeeDetails.skin = scope.getFieldValue(scope._bpdsLabel);
        scope.view.lblPostalCodeValuePayeeDetails.skin = scope.getFieldValue(scope._bpdsValue);
        scope.view.lblLocationKeypayeeDetails.skin = scope.getFieldValue(scope._bpdsLabel);
        scope.view.lblLocationValue.skin = scope.getFieldValue(scope._bpdsValue);
        scope.view.lblProvincepayeeDetails.skin = scope.getFieldValue(scope._bpdsLabel);
        scope.view.lblProvinceValue.skin = scope.getFieldValue(scope._bpdsValue);
        scope.view.btnContinuepayeeDetails.skin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
        scope.view.btnModifyDetails.skin = scope.getFieldValue(scope._gsknSecondaryContexualBtn);
        scope.view.btnContinuepayeeDetails.focusSkin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
        scope.view.btnModifyDetails.focusSkin = scope.getFieldValue(scope._gsknSecondaryContexualBtn);
        scope.view.lblSeparator1payeeDetails.skin = scope.getFieldValue(scope._bpdsSeparator);
        scope.view.lblSeparator2payeeDetails.skin = scope.getFieldValue(scope._bpdsSeparator);
        scope.view.lblSeparator3payeeDetails.skin = scope.getFieldValue(scope._bpdsSeparator);
        scope.view.lblSeparator4payeeDetails.skin = scope.getFieldValue(scope._bpdsSeparator);
        scope.view.lblSeparator5payeeDetails.skin = scope.getFieldValue(scope._bpdsSeparator);
        scope.view.flxBillPayFromDetail.skin = scope.getFieldValue(scope._fadsFlexBg);
        scope.view.lblBpdFrom.skin = scope.getFieldValue(scope._fadsFromLabel);
        scope.view.lblBpdSubValue1.skin = scope.getFieldValue(scope._fadsAccountName);
        scope.view.lblBpdSubValue2Value.skin = scope.getFieldValue(scope._fadsBalanceLabel);
        scope.view.lblBpdSubValue2Label.skin = scope.getFieldValue(scope._fadsBalanceValue);
      } catch(err){
        var errObj = {
          "errorInfo" : "Error in setBillPayerDetailsSkins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        this.onError(errObj);
      }
    },

    /**
     * Component setBillPayerDetailsActions
     * set actions for set Bill Payer's Details
     */
    setBillPayerDetailsActions: function(){
      try{
        var scope = this;
        scope.view.imgVerifyBackPayeeDetails.onTouchEnd = scope.goBack;
        scope.view.btnVerifyCancelPayeeDetails.onClick = scope.enableCancelPopup;
        scope.view.btnContinuepayeeDetails.onClick = function(){
          //scope.setPayableTo();
          //scope.navigateTo("flxMainBillerName", "flxBillerNameHeader", scope.getFieldValue(scope._ptSectionTitle));
          scope.onFormOrderNavigation();
        };
        scope.view.btnModifyDetails.onClick = scope.onModifyDetails;
        scope.view.flxBpdChevron.onTouchEnd = function(){
          //scope.userFlowType = "EDIT";
          scope.amountSelectedFlowType = "BillPayerDetails";
          scope.setFromAccount();
          scope.navigateTo("flxFromAccountMain","flxFromHeaderTop",scope.getFieldValue(scope._fasSectionTitle));
        };
      } catch(err){
        var errObj = {
          "errorInfo" : "Error in setBillPayerDetailsActions method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        this.onError(errObj);
      }
    },

    onModifyDetails: function(){
      try{
        var scope = this;
        scope.updateInputPoolValue(scope._bpdValue1Edit, this.view.lblPayerNameValue.text);
        scope.updateInputPoolValue(scope._bpdValue2Edit, this.view.lblAddressValue.text);
        scope.updateInputPoolValue(scope._bpdValue3Edit, this.view.lblPostalCodeValuePayeeDetails.text);
        scope.updateInputPoolValue(scope._bpdValue4Edit, this.view.lblLocationValue.text);
        scope.updateInputPoolValue(scope._bpdValue5Edit, this.view.lblProvinceValue.text);

        scope.setEditBillPayerDetails();
        scope.navigateTo("flxMainEditPayeeDetails", "flxHeaderEditpayee", scope.getFieldValue(scope._bpdSectionTitle));
      } catch(err){
        var errObj = {
          "errorInfo" : "Error in onModifyDetails method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        this.onError(errObj);
      }
    },

    /**
     * Component setEditBillPayerDetails
     * Declaration of all for set Edit Bill Payer's Details
     */
    setEditBillPayerDetails: function(){
      try{
        var scope = this;
        scope.setEditBillPayerDetailsDefaultText();
        scope.setEditBillPayerDetailsSkins();
        scope.setEditBillPayerDetailsActions();
      } catch(err){
        var errObj = {
          "errorInfo" : "Error in setEditBillPayerDetails method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        this.onError(errObj);
      }
    },

    /**
     * Component setEditBillPayerDetailsDefaultText
     * set default text for set Edit Bill Payer's Details
     */
    setEditBillPayerDetailsDefaultText: function(){
      try{
        var scope = this;
        var stackLen = scope.stack.length;
        var previousScreen = scope.stack[stackLen - 1];
        scope.retryHitCount = 0;
        if(previousScreen !== undefined && previousScreen !== null && previousScreen === "flxBillRecipient"){
          this.view.txtboxEnterPayerNameKeyValue.text = "";
          this.view.txtBoxEnterAddressKeyValue.text = "";
          this.view.txtBoxEnterPostalCodeValue.text = "";
          this.view.txtBoxEnterLocationValue.text = "";
          this.view.txtBoxEnterProvinceValue.text = "";
          scope.disableButton("btnContinueEditPayeeDetails");
        } else{
           if(scope.userFlowType === "EDIT") {
         scope.view.lblVerifyNamePayeeDetails.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._bpdSectionTitle);
        }
          this.view.txtboxEnterPayerNameKeyValue.text = scope.getFieldValue(scope._bpdValue1Edit, "value");
          this.view.txtBoxEnterAddressKeyValue.text = scope.getFieldValue(scope._bpdValue2Edit, "value");
          this.view.txtBoxEnterPostalCodeValue.text = scope.getFieldValue(scope._bpdValue3Edit, "value");
          this.view.txtBoxEnterLocationValue.text = scope.getFieldValue(scope._bpdValue4Edit, "value");
          this.view.txtBoxEnterProvinceValue.text = scope.getFieldValue(scope._bpdValue5Edit, "value");
          scope.enableButton("btnContinueEditPayeeDetails");
        }
         if(scope.userFlowType === "EDIT") {
         scope.view.lblVerifyNameEditpayee.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._bpdSectionTitle);
        }
        this.view.flxBpdErrorMessage.setVisibility(false);
        //this.view.lblVerifyNameEditpayee.text = scope.getFieldValue(scope._bpdSectionTitle);
        this.view.btnVerifyCancelEditpayee.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._billpaybtnCancel)) ? true : false;
        this.view.lblHeaderBillPayersDetails.text = scope.getFieldValue(scope._bpdSubHeaderEdit);
        var object = scope.getFieldValue(scope._jsonObjName);
        var maxFillconfig = scope.getFieldValue(scope._maxFillMapping)[object];
        this.view.lblPayerNameKey.text = scope.getFieldValue(scope._bpdLabel1Edit);
        
        this.view.txtboxEnterPayerNameKeyValue.maxTextLength = parseInt(scope.getFieldValue(maxFillconfig, "Payer Name"));
        this.view.txtboxEnterPayerNameKeyValue.placeholder = scope.getFieldValue(scope._bpdValue1Edit, "placeHolder");
        this.view.lblAddressKey.text = scope.getFieldValue(scope._bpdLabel2Edit);

        this.view.txtBoxEnterAddressKeyValue.maxTextLength = parseInt(scope.getFieldValue(maxFillconfig, "Payer Address"));        
        this.view.txtBoxEnterAddressKeyValue.placeholder = scope.getFieldValue(scope._bpdValue2Edit, "placeHolder");
        this.view.lblPostalCodeKey.text = scope.getFieldValue(scope._bpdLabel3Edit);

        this.view.txtBoxEnterPostalCodeValue.maxTextLength = parseInt(scope.getFieldValue(maxFillconfig, "Payer PostalCode"));
        this.view.txtBoxEnterPostalCodeValue.placeholder = scope.getFieldValue(scope._bpdValue3Edit, "placeHolder");
        this.view.lblLocationKey.text = scope.getFieldValue(scope._bpdLabel4Edit);

        this.view.txtBoxEnterLocationValue.maxTextLength = parseInt(scope.getFieldValue(maxFillconfig, "Payer Location"));
        this.view.txtBoxEnterLocationValue.placeholder = scope.getFieldValue(scope._bpdValue4Edit, "placeHolder");
        this.view.lblProvinceKey.text = scope.getFieldValue(scope._bpdLabel5Edit);

        this.view.txtBoxEnterProvinceValue.maxTextLength = parseInt(scope.getFieldValue(maxFillconfig, "Payer Province"));
        this.view.txtBoxEnterProvinceValue.placeholder = scope.getFieldValue(scope._bpdValue5Edit, "placeHolder");
        this.view.btnContinueEditPayeeDetails.text = scope.getFieldValue(scope._bpdCTAEditAddress, "text");
      } catch(err){
        var errObj = {
          "errorInfo" : "Error in setEditBillPayerDetailsDefaultText method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        this.onError(errObj);
      }
    },

    /**
     * Component setEditBillPayerDetailsSkins
     * set skins for set Edit Bill Payer's Details
     */
    setEditBillPayerDetailsSkins: function(){
      try{
        var scope = this;
        this.view.flxMainEditPayeeDetails.skin = scope.getFieldValue(scope._gsknbillpayContentFlex);
        this.view.flxHeaderEditpayee.skin = scope.getFieldValue(scope._gsknbillpayHeaderFlex);
        this.view.lblVerifyNameEditpayee.skin = scope.getFieldValue(scope._gskBillpaynHeaderLbl);
        this.view.btnVerifyCancelEditpayee.skin = scope.getFieldValue(scope._gsknBillpayCancelBtn);
        this.view.lblHeaderBillPayersDetails.skin = scope.getFieldValue(scope._bpdsSubHeader);
        this.view.lblPayerNameKey.skin = scope.getFieldValue(scope._bpdsLabelEdit);
        this.view.txtboxEnterPayerNameKeyValue.skin = scope.getFieldValue(scope._bpdsValueEdittbx);
        this.view.lblAddressKey.skin = scope.getFieldValue(scope._bpdsLabelEdit);
        this.view.txtBoxEnterAddressKeyValue.skin = scope.getFieldValue(scope._bpdsValueEdittbx);
        this.view.lblPostalCodeKey.skin = scope.getFieldValue(scope._bpdsLabelEdit);
        this.view.txtBoxEnterPostalCodeValue.skin = scope.getFieldValue(scope._bpdsValueEdittbx);
        this.view.lblLocationKey.skin = scope.getFieldValue(scope._bpdsLabelEdit);
        this.view.txtBoxEnterLocationValue.skin = scope.getFieldValue(scope._bpdsValueEdittbx);
        this.view.lblProvinceKey.skin = scope.getFieldValue(scope._bpdsLabelEdit);
        this.view.txtBoxEnterProvinceValue.skin = scope.getFieldValue(scope._bpdsValueEdittbx);
        //this.view.btnContinueEditPayeeDetails.skin = scope.getFieldValue(scope._gsknPrimaryContexualBtn);
      } catch(err){
        var errObj = {
          "errorInfo" : "Error in setEditBillPayerDetailsSkins method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        this.onError(errObj);
      }
    },

    /**
     * Component setEditBillPayerDetailsActions
     * set actions for set Edit Bill Payer's Details
     */
    setEditBillPayerDetailsActions: function() {
      try{
        var scope = this;
        scope.userEditPayeeDetails="";
        scope.view.imgVerifyBackEditpayee.onTouchEnd = scope.goBack;
        scope.view.btnContinueEditPayeeDetails.onClick = scope.onContinueEditPayerDetails;
        scope.view.btnVerifyCancelEditpayee.onClick = scope.enableCancelPopup;
        scope.view.txtboxEnterPayerNameKeyValue.onTextChange = scope.onEditBillPayerDetailsTextChange.bind(this,"Payer Name");
        scope.view.txtBoxEnterAddressKeyValue.onTextChange = scope.onEditBillPayerDetailsTextChange.bind(this,"Payer Address");
        scope.view.txtBoxEnterPostalCodeValue.onTextChange = scope.onEditBillPayerDetailsTextChange.bind(this,"Payer PostalCode");
        scope.view.txtBoxEnterLocationValue.onTextChange = scope.onEditBillPayerDetailsTextChange.bind(this,"Payer Location");
        scope.view.txtBoxEnterProvinceValue.onTextChange = scope.onEditBillPayerDetailsTextChange.bind(this,"Payer Province");
      } catch(err){
        var errObj = {
          "errorInfo" : "Error in setEditBillPayerDetailsActions method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        this.onError(errObj);
      }
    },
    
    /**
     * Component onEditBillPayerDetailsTextChange
     * set actions for set Notes.
     */
    onEditBillPayerDetailsTextChange: function(tbxkey){
      try{
        var scope = this;  
        var tbxValue = "";
        if(tbxkey === "Payer Name"){
          tbxValue = scope.view.txtboxEnterPayerNameKeyValue.text;
          var payerDetailsEntered = {
            "Payer Name": tbxValue
          };
        } else if(tbxkey === "Payer Address"){
          tbxValue = scope.view.txtBoxEnterAddressKeyValue.text;
          var payerDetailsEntered = {
            "Payer Address": tbxValue
          };
        } else if(tbxkey === "Payer PostalCode"){
          tbxValue = scope.view.txtBoxEnterPostalCodeValue.text;
          var payerDetailsEntered = {
            "Payer PostalCode": tbxValue
          };
        } else if(tbxkey === "Payer Location"){
          tbxValue = scope.view.txtBoxEnterLocationValue.text;
          var payerDetailsEntered = {
            "Payer Location": tbxValue
          };
        } else if(tbxkey === "Payer Province"){
          tbxValue = scope.view.txtBoxEnterProvinceValue.text;
          var payerDetailsEntered = {
            "Payer Province": tbxValue
          };
        }
        
        var minlength = scope.minFillValidate(payerDetailsEntered);
        var maxlength = scope.maxFillValidate(payerDetailsEntered);
        if((Object.keys(minlength).length === 0 && minlength.constructor === Object) && (Object.keys(maxlength).length === 0 && maxlength.constructor === Object)) {
          if((scope.view.txtboxEnterPayerNameKeyValue.text !== "") && (scope.view.txtBoxEnterAddressKeyValue.text !== "") &&
             (scope.view.txtBoxEnterPostalCodeValue.text !== "") && (scope.view.txtBoxEnterLocationValue.text !== "") &&
             (scope.view.txtBoxEnterProvinceValue.text !== "")){
            scope.enableButton("btnContinueEditPayeeDetails");
          } else {
            scope.disableButton("btnContinueEditPayeeDetails");
          }
        } else {
          scope.disableButton("btnContinueEditPayeeDetails");
        }
        scope.view.flxBpdErrorMessage.setVisibility(false);
        scope.view.txtboxEnterPayerNameKeyValue.skin = scope.getFieldValue(scope._bpdsValueEdittbx);
        scope.view.txtBoxEnterAddressKeyValue.skin = scope.getFieldValue(scope._bpdsValueEdittbx);
        scope.view.txtBoxEnterPostalCodeValue.skin = scope.getFieldValue(scope._bpdsValueEdittbx);
        scope.view.txtBoxEnterLocationValue.skin = scope.getFieldValue(scope._bpdsValueEdittbx);
        scope.view.txtBoxEnterProvinceValue.skin = scope.getFieldValue(scope._bpdsValueEdittbx);
        
      } catch(err){
        var errObj = {
          "errorInfo" : "Error in onEditBillPayerDetailsTextChange method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        this.onError(errObj);
      }
    },
    
    /**
     * Component onContinueEditPayerDetails
     * Navigate to next form based on order.
     */
    onContinueEditPayerDetails: function(){
      var scope = this;
      try {
        scope.retryHitCount = 0;
          var dataJSON= {
            "Payer Name" : scope.view.txtboxEnterPayerNameKeyValue.text,
            "Payer Address": scope.view.txtBoxEnterAddressKeyValue.text,
            "Payer PostalCode": scope.view.txtBoxEnterPostalCodeValue.text,
            "Payer Location": scope.view.txtBoxEnterLocationValue.text,
            "Payer Province": scope.view.txtBoxEnterProvinceValue.text
          };
          var dataValidator = scope.performDataValidation(dataJSON);
          if(Object.keys(dataValidator).length === 0 && dataValidator.constructor === Object)
          {
            scope.updateInputPoolValue(scope._bpdValue1Edit, scope.view.txtboxEnterPayerNameKeyValue.text);
            scope.updateInputPoolValue(scope._bpdValue2Edit, scope.view.txtBoxEnterAddressKeyValue.text);
            scope.updateInputPoolValue(scope._bpdValue3Edit, scope.view.txtBoxEnterPostalCodeValue.text);
            scope.updateInputPoolValue(scope._bpdValue4Edit, scope.view.txtBoxEnterLocationValue.text);
            scope.updateInputPoolValue(scope._bpdValue5Edit, scope.view.txtBoxEnterProvinceValue.text);
            if(scope.userFlowType === "EDIT") {
              scope.setVerifyDetails();
            //  scope.navigateTo("flxVerifyDetails", "flxVerifyHeader",scope.getFieldValue(scope._vfsSectionTitle));
            }else{
              //scope.setPayableTo();
              //scope.navigateTo("flxMainBillerName", "flxBillerNameHeader", scope.getFieldValue(scope._ptSectionTitle));
              if(!scope.isEmptyNullUndefined(scope.stack.length) && scope.stack.length > 3){
                scope.userEditPayeeDetails="EDIT";
              }else{
                scope.userEditPayeeDetails="";
              }
              scope.onFormOrderNavigation();
            }
            // scope.onFormOrderNavigation();
          } else {
            scope.setEditPayerDetailsErrors(dataValidator);
          }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onContinueEditPayerDetails method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    
    /**
     * Component setEditPayerDetailsErrors
     * Reponsible to reset skin fot textbox
     */
    setEditPayerDetailsErrors: function(dvfError) {
      var scope = this;
      try {
        if(scope._BillpayErrorReporting === "Inline") {
          for(var iterator in dvfError) {
            if("Payer Name" === iterator){
              scope.view.lblBpdErrorMessage.text = dvfError[iterator];
              scope.view.txtboxEnterPayerNameKeyValue.skin = "ICSknTxtF54B5EBorder";
            } 
            if("Payer Address" === iterator){
              scope.view.lblBpdErrorMessage.text = dvfError[iterator];
              scope.view.txtBoxEnterAddressKeyValue.skin = "ICSknTxtF54B5EBorder";
            }
            if("Payer PostalCode" === iterator){
              scope.view.lblBpdErrorMessage.text = dvfError[iterator];
              scope.view.txtBoxEnterPostalCodeValue.skin = "ICSknTxtF54B5EBorder";
            }
            if("Payer Location" === iterator){
              scope.view.lblBpdErrorMessage.text = dvfError[iterator];
              scope.view.txtBoxEnterLocationValue.skin = "ICSknTxtF54B5EBorder";
            }
            if("Payer Province" === iterator){
              scope.view.lblBpdErrorMessage.text = dvfError[iterator];
              scope.view.txtBoxEnterProvinceValue.skin = "ICSknTxtF54B5EBorder";
            }
          }
          scope.view.flxBpdErrorMessage.setVisibility(true);
        } else  {
          scope.errorSectionTitle = scope.getFieldValue(scope._bpdSectionTitle);
          scope.setErrorScreenData();
          scope.navigateTo("flxError", "flxErrorHeaderMain", scope.errorSectionTitle);
        }
         scope.disableButton("btnContinueEditPayeeDetails");
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setEditPayerDetailsErrors method of the component.",
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
      try {
        var scope = this;
        var stackLength = scope.stack.length;
        var currentScreen = scope.stack[stackLength - 1];
        var previousScreen = scope.stack[stackLength - 2];
        if(previousScreen ==="flxMainEditPayeeDetails"){
           scope.userEditPayeeDetails="";
        }
        if(stackLength > 2){
          if(currentScreen === "flxMainNotes"){
            scope.view.tbxNotes.setFocus(false);
          }
          if(previousScreen === "flxFromAccountMain"){
            scope.stack.pop();
            scope.stack.pop();
            stackLength = scope.stack.length;
            currentScreen = scope.stack[stackLength - 1];
            previousScreen = scope.stack[stackLength - 2];
          }
        }
        scope.view[previousScreen].setVisibility(true);
        scope.view[currentScreen].setVisibility(false);
        scope.stack.pop();
        if(kony.os.deviceInfo().name === "iPhone") {
          scope.headerTitleStack.pop();
          var nativeTitle = scope.headerTitleStack[scope.headerTitleStack.length - 1];
          var properties = {
            "stack" : scope.stack,
            "headerTitle": nativeTitle,
            "cancelText" : scope.getFieldValue(scope._billpaybtnCancel),
            "backImage" : scope.getFieldValue(scope._billpayimgBack)
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

      }
    },

    /**     
	 * Component enableCancelPopup
     * To set the visibility of Cancel Popup.
     */
    enableCancelPopup: function(){
      var scope = this;
      scope.view.flxCancelPopUp.setVisibility(true);
      var stackLength = this.stack.length;
      var currentScreen = this.stack[stackLength - 1];
      scope.view[currentScreen].setEnabled(false);
    },

    onError: function (response) {
      kony.print(JSON.stringify(response));
    },

    /**
   ** Component navigateTo
   * Using navigateTo we navigate one form to another form in that we store formName in a stack
   * @param {string} flxName , navigates to that form.
   * @param {string} flxHeaderName , Custom Header name.
   * @param {string} headerTitle , Header title.
   */
    navigateTo: function(flxName, flxHeaderName, headerTitle) {
      var scope = this;
      try {
        if(flxName) {
          this.stack.push(flxName);
          var stackLength = this.stack.length;
          var nextScreen = this.stack[stackLength - 1];
          var currentScreen = this.stack[stackLength - 2];
          if(currentScreen !== null && currentScreen !== undefined){
             scope.view[currentScreen].setVisibility(false);
          }
          this.view[nextScreen].setVisibility(true);
          if(!this.isEmptyNullUndefined(flxHeaderName)) {
            this.setHeaderProperties(flxHeaderName);
          }
          if(kony.os.deviceInfo().name === "iPhone" && !scope.isEmptyNullUndefined(headerTitle)) {
            scope.headerTitleStack.push(headerTitle);
            var properties = {
              "stack" : scope.stack,
              "headerTitle": headerTitle,
              "cancelText" : scope.getFieldValue(scope._billpaybtnCancel),
              "backImage" : scope.getFieldValue(scope._billpayimgBack)
            }
            scope.iPhoneHeaderProps(properties);
          }
          this.view.forceLayout();
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in navigateTo method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        this.onError(errObj);
      }
    },

    bindCancelPopUpActions: function(){
      var scope = this;
      scope.view.btnYes.onClick = function() { 
        var stackLength = scope.stack.length;
        var currentPage = scope.stack[stackLength - 1];
        scope.view[currentPage].setEnabled(true);
        scope.backNav();
      };
      scope.view.btnNo.onClick = function() { 
        var stackLength = scope.stack.length;
        var currentPage = scope.stack[stackLength - 1];
        scope.view.flxCancelPopUp.setVisibility(false);
        scope.view[currentPage].setEnabled(true);
      };
    },

    setLegalNote: function() {
      var scope = this;
      try {
        // Default Text.
        scope.view.lblLegalNoteHeader.text = scope.getFieldValue(scope._lnSectionTitle);
        scope.view.btnrightLegalNote.text = scope.getFieldValue(scope._lnCTA1, "text");
        scope.view.lblLeagalContent.text = scope.getFieldValue(scope._lntField1Val);
        // Skins.
        
        // Action.
        scope.view.btnrightLegalNote.onClick = scope.goBack;
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in navigateTo method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        this.onError(errObj);
      }
    },
    
    /**     
	 * Component onVerifyDetailsBack
     * To bind the events and field properties for verify Details.
     */
    onVerifyDetailsBack: function() {
      try {
        var scope = this;
        var priviousFlex ="";
         if(scope.getFieldValue(scope._billpayFormOrder6) === "PayableTo") {
           var priviousFlex ="flxMainBillerName";
           }else  if(scope.getFieldValue(scope._billpayFormOrder6) === "AccountNumber") {
          var priviousFlex ="flxBillerAccountNumber";
        }else  if(scope.getFieldValue(scope._billpayFormOrder6) === "Payment Notes") {
                  var priviousFlex ="flxMainNotes";
                  }else  if(scope.getFieldValue(scope._billpayFormOrder6) === "Amount") {
          var priviousFlex ="flxbillPaymentAmountDetails";
        }
           
        var stackLength = scope.stack.length;
        for (var i = stackLength-1; i >= 0; i--){
         if((scope._paymentType === "AdhocBillpayment" && scope.stack[i] === "flxVerifyDetails" && scope.stack[i-1] === priviousFlex) || (scope.stack[i] === "flxVerifyDetails" && scope.stack[i-1] === "flxMainBillerName" && scope._paymentType === "AutoTaxPayment")) {
             scope.goBack();
            break;
          } else {
            scope.stack.pop();
            scope.headerTitleStack.pop();
          }
        }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in onVerifyDetailsBack method of the component.",
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
      var scope = this;
      scope.disableButton("btnVerifyConfirm");
      scope.view.flxVerifyAccNumWarnMain.setVisibility(false);
      if(this._paymentType==="AdhocBillpayment") {
        scope.verifyAmountValidate();
      } else {

        scope.ValidateDetails();
      }
    },

    setVerifyDetailsUI : function(){
      var scope = this;
      try {
        if(scope._vfsLegalNotesType === "Inline"){
          scope.view.rtxtLegalNotes.text= scope.getShortDescription(scope.getFieldValue(scope._vfsLegalNotes));
          scope.view.rtxtLegalNotes.onClick = function(){
            var leagalNoteText =scope.view.rtxtLegalNotes.text;
            //if(leagalNoteText.includes("Read All")){
            if(leagalNoteText.includes(scope.getFieldValue(scope._vfsFieldNotesMoreLink, "text"))){ 
              //var showLessLink  = "<a href = "+"#>"+" Show less" + "</a>";
              var showLessLink  = "<a href = "+"#>"+scope.getFieldValue(scope._vfsShowLessLink) + "</a>";
              scope.view.rtxtLegalNotes.text=  scope.getFieldValue(scope._vfsLegalNotesDesc) + showLessLink;
            }else{
              scope.view.rtxtLegalNotes.text= scope.getShortDescription(scope.getFieldValue(scope._vfsLegalNotes));
            }
          };
        }else {
          scope.view.rtxtLegalNotes.text= scope.getShortDescription(scope.getFieldValue(scope._vfsLegalNotes));
          scope.view.rtxtLegalNotes.onClick = function() {
            scope.setLegalNote();
            scope.navigateTo("flxBillpayLeagalNote", "flxLegalNoteHeader", scope.getFieldValue(scope._lnSectionTitle));
          }
        }
        scope.view.flxVerifyHeader.skin=scope.getFieldValue(scope._gsknbillpayHeaderFlex);
        scope.view.imgFromArrow.src = scope.getFieldValue(scope._imgFromChevron);
        scope.view.lblVerifyName.text = scope.getFieldValue(scope._vfsSectionTitle);
        scope.view.flxVerifyBack.onTouchEnd = scope.onVerifyDetailsBack;
        //scope.view.flxVerifyBack.onTouchEnd = scope.goBack;
        scope.view.btnVerifyCancel.onClick = scope.enableCancelPopup;
        scope.view.btnVerifyCancel.text = scope.getFieldValue(scope._vfsCTA2, "text");
        scope.view.btnVerifyCancel.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(scope._billpaybtnCancel)) ? true : false;
        scope.view.btnVerifyCancel.text =scope.getFieldValue(scope._billpaybtnCancel);

        var fromAccLabel = scope.getFieldValue(scope._vfsField1Label);
        var fromAccValue = scope.getFieldValue(scope._vfsField1Value,"value");
        var fromAccBalLbl = scope.getFieldValue(scope._vfsField1SubLabel);
        var fromAccBalVal = scope.getFieldValue(scope._vfsField1SubValue,"value");

        scope.view.lblFrom.text = fromAccLabel;
        scope.view.lblFrom.skin = scope._vfssLabelSkin;
        scope.view.flxAccType.text = fromAccValue;
        scope.view.flxAccType.skin = scope._vfssValueEditableSkin; //scope._sknVerifyFieldValue;
        scope.view.lblBalanceLabel.text = fromAccBalLbl;
        scope.view.lblBalanceValue.text = fromAccBalVal;
        if(scope._paymentType === "AdhocBillpayment"){
          var enterdAmount =scope.inputPool["amount"].substring(1);
          var fromAvailableBal =scope.inputPool["fromAvailableBalance"].substring(1);
          scope.view.lblBalanceLabel.skin = (parseInt(enterdAmount)<=parseInt(fromAvailableBal))? "sknLbla0a0a0SSP26px": "ICsknLblFFA50030Px";
          scope.view.lblBalanceValue.skin = (parseInt(enterdAmount)<=parseInt(fromAvailableBal))? "sknLbla0a0a0SSP26px":"ICsknLblFFA50030Px";
        }
        scope.view.flxAccType.onTouchEnd =function(){
          scope.navToFromAccount();
        };
        scope.view.lblBalanceValue.onTouchEnd =function(){
          scope.navToFromAccount();
        };
        scope.view.lblBalanceLabel.onTouchEnd =function(){
          scope.navToFromAccount();
        };
        scope.view.imgFromArrow.onTouchEnd =function(){
          scope.navToFromAccount();
        };

        for(var i=1;i<10;i++) {
          scope.view["flxField"+i].setVisibility(false);
          var fieldLabel = scope.getFieldValue(eval("scope._vfsField"+(i+1)+"Label"));
          var fieldi18nLabel = eval("scope._vfsField"+(i+1)+"Label");
          var fieldValue = scope.getFieldValue(eval("scope._verifyField"+(i+1)+"Value"),"value");
          var isReadonly = scope.getFieldValue(eval("scope._verifyField"+(i+1)+"Value"),"readonly");
          if((!(scope.isEmptyNullUndefined(fieldLabel) || scope.isEmptyNullUndefined(fieldValue))))
          {
            fieldValue=fieldValue.length >=18 ?fieldValue.substring(0,18)+"...":fieldValue;
            scope.view["lblField"+i+"Label"].text = fieldLabel;
            scope.view["lblField"+i+"Label"].skin = scope._vfssLabelSkin;
            scope.view["lblField"+i+"Value"].text = fieldValue;
            scope.view["lblField"+i+"Value"].right = isReadonly ? "20dp" : "50dp",
            scope.view["lblField"+i+"Value"].skin = isReadonly ? scope._vfssValueReadonlySkin :scope._vfssValueEditableSkin;
            scope.view["imgArrow"+i].isVisible = isReadonly ? false: true;
            scope.view["imgArrow"+i].src = scope._vfsImgEdit;
            scope.view["flxField"+i].setVisibility(true);
          }
          switch(fieldi18nLabel) 
          {
            /*case "{i.i18n.billPayee.review.billPayer}" :
              scope.view["flxField"+i].onClick = function(){
                scope.userFlowType = "EDIT";
                scope.setEditBillPayerDetails();
		                scope.view.lblVerifyNamePayeeDetails.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._bpdSectionTitle);
    
					                
                scope.navigateTo("flxMainEditPayeeDetails", "flxHeaderEditpayee",  scope.view.lblVerifyNamePayeeDetails.text);
              }
              break;
            case "{i.i18n.billPayee.review.typeofVehicle}" :
              scope.view["flxField"+i].onClick = function(){
                scope.userFlowType = "EDIT";
                scope.setBillRecipient();
                scope.view.lblBillRecipient.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._brSectionTitle);
  
                scope.navigateTo("flxBillRecipient", "flxHeaderMainBillRecipient", scope.view.lblBillRecipient.text);
              }
              break;  
            case "{i.i18n.billPayee.review.payableTo}" :
              scope.view["flxField"+i].onClick = function(){
                scope.userFlowType = "EDIT";
                scope.setPayableTo();
                scope.view.lblBillerNameSectionTitle.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._ptSectionTitle);
     
                scope.navigateTo("flxMainBillerName", "flxBillerNameHeader", scope.view.lblBillerNameSectionTitle.text);
              }
              break;
           case "{i.i18n.billPayee.review.licencePlateNumber}" :
              scope.view["flxField"+i].onClick = function(){
                scope.userFlowType = "EDIT";
                scope.setPayableTo();
                scope.view.lblBillerNameSectionTitle.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._ptSectionTitle);

                scope.navigateTo("flxMainBillerName", "flxBillerNameHeader", scope.view.lblBillerNameSectionTitle.text);
              }
              break;
            case "{i.i18n.billPayee.review.accNo}" :
              scope.view["flxField"+i].onClick = function(){
                scope.userFlowType = "EDIT";
                scope.setAccountNumber();
               scope.view.lblAccountNumHeader.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._acnSectionTitle);         
    
                scope.navigateTo("flxBillerAccountNumber", "flxBillerAccountNumberHeader",   scope.view.lblAccountNumHeader.text);
              }
              break;
            case "{i.i18n.billPayee.review.reasonForPayment}" :
              scope.view["flxField"+i].onClick = function(){
                scope.userFlowType = "EDIT";
                scope.setReasonForPayments(); 
scope.view.lblReasonForPayment.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._rfpSectionTitle);
     
                scope.navigateTo("flxMainNotes", "flxHeaderNotes", scope.view.lblReasonForPayment.text);
              }
              break;
            case "{i.i18n.billPayee.review.amount}" :
              if(!isReadonly) {
              scope.view["flxField"+i].onClick = function(){
                scope.userFlowType = "EDIT";
                scope.setAmount();
 scope.view.lblAmountName.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._amntSectionTitle);
    
                scope.navigateTo("flxbillPaymentAmountDetails", "flxAmountHeader", scope.view.lblAmountName.text);
              }
             }
              break;*/
              case "{i.i18n.billPayee.review.billPayer}" :
              scope.view["lblField"+i+"Value"].onTouchEnd = function(){
                scope.userFlowType = "EDIT";
                scope.setEditBillPayerDetails();
                scope.view.lblVerifyNamePayeeDetails.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._bpdSectionTitle);
                scope.navigateTo("flxMainEditPayeeDetails", "flxHeaderEditpayee",  scope.view.lblVerifyNamePayeeDetails.text);
              }
              scope.view["imgArrow"+i].onTouchEnd = function(){
                scope.userFlowType = "EDIT";
                scope.setEditBillPayerDetails();
                scope.view.lblVerifyNamePayeeDetails.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._bpdSectionTitle);
                scope.navigateTo("flxMainEditPayeeDetails", "flxHeaderEditpayee",  scope.view.lblVerifyNamePayeeDetails.text);
              }
              break;
            case "{i.i18n.billPayee.review.typeofVehicle}" :
              scope.view["lblField"+i+"Value"].onTouchEnd = function(){
                scope.userFlowType = "EDIT";
                scope.setBillRecipient();
                scope.view.lblBillRecipient.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._brSectionTitle);
                scope.navigateTo("flxBillRecipient", "flxHeaderMainBillRecipient", scope.view.lblBillRecipient.text);
              }
              scope.view["imgArrow"+i].onTouchEnd = function(){
                scope.userFlowType = "EDIT";
                scope.setBillRecipient();
                scope.view.lblBillRecipient.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._brSectionTitle);
                scope.navigateTo("flxBillRecipient", "flxHeaderMainBillRecipient", scope.view.lblBillRecipient.text);
              }
              break;  
            case "{i.i18n.billPayee.review.payableTo}" :
              scope.view["lblField"+i+"Value"].onTouchEnd = function(){
                scope.userFlowType = "EDIT";
                scope.setPayableTo();
                scope.view.lblBillerNameSectionTitle.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._ptSectionTitle);
                scope.navigateTo("flxMainBillerName", "flxBillerNameHeader", scope.view.lblBillerNameSectionTitle.text);
              }
              scope.view["imgArrow"+i].onTouchEnd = function(){
                scope.userFlowType = "EDIT";
                scope.setPayableTo();
                scope.view.lblBillerNameSectionTitle.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._ptSectionTitle);
                scope.navigateTo("flxMainBillerName", "flxBillerNameHeader", scope.view.lblBillerNameSectionTitle.text);
              }
              break;
            case "{i.i18n.billPayee.review.licencePlateNumber}" :
              scope.view["lblField"+i+"Value"].onTouchEnd = function(){
                scope.userFlowType = "EDIT";
                scope.setPayableTo();
                scope.view.lblBillerNameSectionTitle.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._ptSectionTitle);
                scope.navigateTo("flxMainBillerName", "flxBillerNameHeader", scope.view.lblBillerNameSectionTitle.text);
              }
              scope.view["imgArrow"+i].onTouchEnd = function(){
                scope.userFlowType = "EDIT";
                scope.setPayableTo();
                scope.view.lblBillerNameSectionTitle.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._ptSectionTitle);
                scope.navigateTo("flxMainBillerName", "flxBillerNameHeader", scope.view.lblBillerNameSectionTitle.text);
              }
              break;
            case "{i.i18n.billPayee.review.accNo}" :
              scope.view["lblField"+i+"Value"].onTouchEnd = function(){
                scope.userFlowType = "EDIT";
                scope.setAccountNumber();
                scope.view.lblAccountNumHeader.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._acnSectionTitle);         
                scope.navigateTo("flxBillerAccountNumber", "flxBillerAccountNumberHeader",   scope.view.lblAccountNumHeader.text);
              }
              scope.view["imgArrow"+i].onTouchEnd = function(){
                scope.userFlowType = "EDIT";
                scope.setAccountNumber();
                scope.view.lblAccountNumHeader.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._acnSectionTitle);         
                scope.navigateTo("flxBillerAccountNumber", "flxBillerAccountNumberHeader",   scope.view.lblAccountNumHeader.text);
              }
              break;
            case "{i.i18n.billPayee.review.reasonForPayment}" :
              scope.view["lblField"+i+"Value"].onTouchEnd = function(){
                scope.userFlowType = "EDIT";
                scope.setReasonForPayments(); 
                scope.view.lblReasonForPayment.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._rfpSectionTitle);
                scope.navigateTo("flxMainNotes", "flxHeaderNotes", scope.view.lblReasonForPayment.text);
              }
              scope.view["imgArrow"+i].onTouchEnd = function(){
                scope.userFlowType = "EDIT";
                scope.setReasonForPayments(); 
                scope.view.lblReasonForPayment.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._rfpSectionTitle);
                scope.navigateTo("flxMainNotes", "flxHeaderNotes", scope.view.lblReasonForPayment.text);
              }
              break;
            case "{i.i18n.billPayee.review.amount}" :
              if(!isReadonly) {
                scope.view["lblField"+i+"Value"].onTouchEnd = function(){
                  scope.userFlowType = "EDIT";
                  scope.setAmount();
                  scope.view.lblAmountName.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._amntSectionTitle);
                  scope.navigateTo("flxbillPaymentAmountDetails", "flxAmountHeader", scope.view.lblAmountName.text);
                }
                scope.view["imgArrow"+i].onTouchEnd = function(){
                  scope.userFlowType = "EDIT";
                  scope.setAmount();
                  scope.view.lblAmountName.text = scope.getFieldValue(scope._billpayEdit)+ " "+scope.getFieldValue(scope._amntSectionTitle);
                  scope.navigateTo("flxbillPaymentAmountDetails", "flxAmountHeader", scope.view.lblAmountName.text);
                }
              }
              break;
          }
        }
        var legalNote =scope.getFieldValue(scope._vfsFieldNotes,"notesLable")
        var notesLabel =  scope.getFieldValue(scope._vfsFieldNotes,"noteText");
       // scope.navigateTo("flxVerifyDetails", "flxVerifyHeader",scope.getFieldValue(scope._vfsSectionTitle));
        scope.view.forceLayout();        
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in VerifyDetails method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
       // scope.onError(errObj);
      }
    },
    /**
     * Component navToFromAccount
     * Responsible to navigate to FromAccounts screen
     */
    navToFromAccount: function(){
      this.userFlowType = "EDIT";
      this.amountSelectedFlowType = "";
      this.setFromAccount();
      this.navigateTo("flxFromAccountMain", "flxFromHeaderTop", this.getFieldValue(this._fasSectionTitle));
    },
    /**
     * Component getShortDescription
     * Responsible to get the short description with href tag
     */
    getShortDescription(description){
      var scope = this;
      var descriptionRender = scope.getFieldValue(scope._vfsFieldNotes);      
      var moreLink  = "<a href = "+"#>"+scope.getFieldValue(scope._vfsFieldNotesMoreLink, "text")+"</a>";
      //Defining properties for a link widget.
      var descriptionText = scope.getFieldValue(description);
      var shortText = descriptionRender.noteText + descriptionRender.ellipsis + moreLink;      
      return shortText;
    },
    
    setInitialDetailsToVerify : function()
    {
     
      var scope = this;

      scope.inputpool["fromAccountName"] = (scope.isEmptyNullUndefined(scope.inputpool["fromAccountName"])) ? "SHA" : scope.inputpool["fromAccountName"];
      scope.inputpool["fromAvailableBalance"] = (scope.isEmptyNullUndefined(scope.inputpool["fromAvailableBalance"])) ? "Both (Shared)" : scope.inputpool["fromAvailableBalance"];
      scope.inputpool["payerName"] = (scope.isEmptyNullUndefined(scope.inputpool["payerName"])) ? "SHA" : scope.inputpool["payerName"];
      scope.inputpool["payeeName"] = (scope.isEmptyNullUndefined(scope.inputpool["payeeName"])) ? "SHA" : scope.inputpool["payeeName"];
      scope.inputpool["accountNumber"] = (scope.isEmptyNullUndefined(scope.inputpool["accountNumber"])) ? "SHA" : scope.inputpool["accountNumber"];
      scope.inputpool["reasonForPayment"] = (scope.isEmptyNullUndefined(scope.inputpool["reasonForPayment"])) ? "SHA" : scope.inputpool["reasonForPayment"];
      scope.inputpool["amount"] = (scope.isEmptyNullUndefined(scope.inputpool["amount"])) ? "SHA" : scope.inputpool["amount"];
      scope.inputpool["AccepttanceFee"] = (scope.isEmptyNullUndefined(scope.inputpool["AccepttanceFee"])) ? "SHA" : scope.inputpool["AccepttanceFee"];
      scope.inputpool["paymentFee"] = (scope.isEmptyNullUndefined(scope.inputpool["paymentFee"])) ? "SHA" : scope.inputpool["paymentFee"];
      scope.inputpool["TotalFee"] = (scope.isEmptyNullUndefined(scope.inputpool["TotalFee"])) ? "SHA" : scope.inputpool["TotalFee"];

    },
   /**
     * Component ValidateDetails
     * Responsible to validate the details before making service call
     */
    ValidateDetails : function()
    {
      var scope = this;
      try{
        var operationName = scope._bpdObjOperation;
        scope.mfaOperationName = operationName;									   
        scope.setCriteria(scope._bpdObjOperationCriteria);
        scope.BillPaymentsDAO.validateBillpayUserDetails(scope._bpdObjService , scope._bpdObjName, operationName, scope.getCriteria(), scope._ValServiceResponseIdentifier, scope.successfulValidation, scope.failureValidation);
    
      }catch(err) {
        var errObj = {
          "errorInfo" : "Error in validateDetails method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    /**
     * Component getFromAccounts
     * Reponsible to call the DAO method for invoking service api.
     */
    getFromAccounts: function () {
       try {
       this.setCriteria(this._fasObjOperationCreteria);
       this.BillPaymentsDAO.fetchAccounts(this._fasObjService, this._fasObjOperation, this._fasObject, this.getCriteria(), this._fasGetFromAccountResponse, this.setFromAccountsData, this.fromFailureValidation);

      } catch (err) {
        var errorObj = {
          "errorInfo": "Error in doing service call to fetch transactions",
          "errorLevel": "Business",
          "error": err
        };
        this.onError(errorObj);
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
        var responseObj=response[this._fasObject];
        this.responseLength = "";
        if(!this.isEmptyNullUndefined(responseObj))
        {
          if(responseObj.length==1)
          {
            this.response=response;
            var record={};
            var data = [];
            var accountName=scope.getFormattedData("AccountName",responseObj[0]);
            var amount=scope.getFormattedData("amount",responseObj[0]);
            record["formattedFromAccountName"] = accountName; 
            record["fromAvailableBalance"] = amount; 
            record["fromAccountNumber"] = responseObj[0]["accountID"];
            record["fromTransactionCurrency"] = responseObj[0]["currencyCode"];
            record["fromAccountName"] =  responseObj[0]["accountName"];
            record["fromAccountType"]=responseObj[0]["accountType"];
            record["fromIsBusinessAccount"]=responseObj[0]["isBusinessAccount"];
            record["fromMembershipName"]=responseObj[0]["MembershipName"];
            record["fromActions"]=responseObj[0]["actions"];
            data.push(record);           
            this.recordsArray=data;
            data = this.filterRecordsList();
            this.recordsArray=data;
            this.responseLength = "OneFromAccount";
            this.selectFromAccount();
            return;
          }
        }
       
        if(response!=null||response!=undefined){
          this.segmentData='';
          this.response=response;
          this.fromUnicode=unicode;         
          this.map = {};
          this.readObject(response);
          this.parserUtilsManager.setResponseData(unicode,this.map["Accounts"]);
          var record={};     
          var data = [];
	         // if(this.searchApplied==false || this.clearSearchApplied==true){
 		if(this.searchApplied==false){

          var responseObj=response[this._fasObject];
          var Valuekeys = Object.keys(responseObj).length;
          var fieldValue;
          var fromAccountsList= scope.groupResponseData(response[this._fasObject],"accountType");//
          var keys = Object.keys(fromAccountsList);
          if (keys.length !== 0) {
            if (Valuekeys !== 0) 
              var j=0;   
            for (j = 0; j < Valuekeys; j ++)
            {
              record={};         
              for (i = 0; i < 4; i ++)
              {
                var fieldValue = scope.getFieldValue(eval("this._fasField"+(i+1)),"value");
                var fieldType = scope.getFieldValue(eval("this._fasField"+(i+1)),"fieldType");
                if(fieldType=="AccountName")
                {
                  //var accountName=scope.getFormattedData(fieldValue,responseObj[j]);
                  var accountName=scope.getFormattedData(fieldType,responseObj[j]);
                  record["lblField"+(i+1)] = {
                    text:accountName,
                  };
                  record["formattedFromAccountName"] = accountName;                  
                }
                else
                  if(fieldType=="Amount")
                  {

                    fieldValue=scope.getFieldValue(eval("this._fasField"+(i+1)), "value");				

                    var amount=scope.getFormattedData(fieldValue,responseObj[j]);
                    record["fromAvailableBalance"] = amount; 
                    record["lblField"+(i+1)] = {
                      text:amount,
                    };
                    record["imgAccount"] = {
                      src : "personal.png",
                    };
                  } else if(fieldType === "accountType")
                  {
                    var accountType=scope.getFormattedData(fieldType,responseObj[j]);
                    record["lblField"+(i+1)] = {
                      text:accountType,
                    };
                    record["fromAccountType"] = accountType;                  
                  }
                else if(fieldType === "AvailableBalance")
                {
                  var textvalue=scope.getFieldValue(eval("this._fasField"+(i+1)), "text");				
                  record["lblField"+(i+1)] = {
                    text:textvalue,
                  };
                               
                }
                else{
                  record["lblField"+(i+1)] = {
                    text : responseObj[j][fieldValue.text],
                  };    
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
 		}
          else
          {
            data=response;
          }
          if(this.searchApplied==false){
            var sectionData = [];
            var fromAccountsData=[];
            if(data.length==undefined||data.length==null||data.length=="")
            {
              data=data[this._fasObject];
            }         
            //var fromData = {};
            sectionData=this.groupBusinessAndRetail(sectionData,data,response);		  
          }else{
            sectionData=response;
            data=response;
            var fromAccountsData=[];       
            sectionData=this.groupBusinessAndRetail(sectionData,data,response);
          }
         
          dataMapping = {
            "flxSelectAccounts":"flxSelectAccounts",
            "flxSeparator":"flxSeparator",
            "flxAccount":"flxAccount",
            "lblAccount":"lblAccount",
            "lblAmount":"lblAmount",
            "flxImage": "flxImage",
            "imgAccount":"imgAccount",
            "flxAccountType":"flxAccountType",
            "lblAccountType":"lblAccountType",
            "lblBal":"lblBal",
            "lblField1":"lblField1",
            "lblField2":"lblField2",
            "lblField3":"lblField3",
            "lblField4":"lblField4",
            "flxHeaderAccount":"flxHeaderAccount",
            "flxHeader": "flxHeader",
            "lblHeader":"lblHeader",
             "imgArrow":"imgArrow",
            "flxBottomShadow":"flxBottomShadow",
            "flxHeaderShadow":"flxHeaderShadow"
          };

          scope.view.segAccounts.setData(sectionData);
          scope.view.segAccounts.setVisibility(true);
          scope.view.segAccounts.widgetDataMap = dataMapping;
          scope.view.segAccounts.onRowClick = scope.selectFromAccount; 
          scope.view.flxFromAccountMain.forceLayout();
          return data;
        }
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      }
      catch (err) {
        var errorObj = {
          "errorInfo": "Error in SetFromAccounts",
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
          var filterListObject = (this._filterTypeList);
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
	 * Component rowExpandCollapse
     * To expand and collapse group
    **/ 
    rowExpandCollapse: function (context) {
      var self = this;
      try{
          var sectionIndex = context.section;
          if (this.segmentData === '') 
            this.segmentData = JSON.parse(JSON.stringify(this.view.segAccounts.data));
          var data = this.view.segAccounts.data;
          var selectedHeaderData = data[sectionIndex][0];
          if (!JSON.stringify(data).includes("flxNoRecords")) {
            if (selectedHeaderData["imgArrow"] === this._fasSegExpandIcon) {
              selectedHeaderData["imgArrow"] = this._fasSegCollapseIcon;
              data[sectionIndex][1] = [];
              this.view.segAccounts.setData(data);
            } else {
              selectedHeaderData["imgArrow"] = this._fasSegExpandIcon;
              data[sectionIndex][1] = this.segmentData[sectionIndex][1];
              this.view.segAccounts.setData(data);
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
    
	/*
     * Component txtBoxOnKeyUp
     * Responsible to perform search operation and update segment data 
     */
	 txtBoxOnKeyUp	:	function(){
      var self = this;
      try{
       this.view.imgFromCloseIcon.setVisibility(true);
        this.view.imgFromSearch.setVisibility(true);
        this.view.flxFromDesc.setVisibility(true);
        var searchTxt = this.view.tbxSearch.text.toLowerCase();
         var searchFrom = {
          "SearchFrom": this.view.tbxSearch.text.toLowerCase()
        };
         var object = this.getFieldValue(this._jsonObjName);
        var maxFillconfig = this.getFieldValue(this._maxFillMapping)[object];
        this.view.tbxSearch.maxTextLength = parseInt(this.getFieldValue(maxFillconfig, "SearchFrom"));
      
        var maxlength = this.maxFillValidate(searchFrom);
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
            this.view.segAccounts.setVisibility(false);
            this.view.flxFromDesc.setVisibility(false);
            this.view.flxNoRecords.setVisibility(true);
           // this.view.flxFromNoResults.setVisibility(true);
          }else{
            this.searchApplied = true;
            result = this.setFromAccountsData(result);
          }
        }
        else{
          this.clearTextBoxTexts();
          this.searchApplied = false;         
          this.view.segAccounts.removeAll();
          this.setFromAccountsData(this.recordsArray);
          this.view.segAccounts.setVisibility(true);
          this.view.flxFromDesc.setVisibility(true);
          this.view.flxNoRecords.setVisibility(false);
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
    clearTextBoxTexts: function(){
      var scope=this;
      this.clearSearchApplied=true;
      this.view.tbxSearch.text="";    
      this.view.imgFromCloseIcon.setVisibility(false);
      this.searchApplied = false;
      this.view.segAccounts.removeAll();
      scope.setFromAccount();
      this.setFromAccountsData(this.recordsArray);   
      this.view.segAccounts.setVisibility(true);
      this.view.flxFromDesc.setVisibility(true);
      this.view.flxNoRecords.setVisibility(false);
      //this.view.flxFromNoResults.setVisibility(false);
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
    /*
     * Component getFormattedData
     * Responsible to format data based on the format contract
     * return String 
     */
    getFormattedData : function(contractJSON,record){
      var self = this;
      try{
        if(!this.isEmptyNullUndefined(contractJSON)){
          if(typeof(contractJSON) !== "string"){
          var FieldMapping = JSON.parse(contractJSON);
          }else{
            var FieldMapping = contractJSON;
          }
         // if(FieldMapping.fieldType == "AccountName"){
            if(FieldMapping == "AccountName"){
              if(!this.isEmptyNullUndefined(record)){ 
               // var data = record.AccountName; 
                var accountid=record.accountID;
                
				var len = accountid.length;
				var res = accountid.substring(len-4, len);
                var data = record.AccountName+"..."+res; 
            /*var fields = FieldMapping.mapping;
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
                    data = data + fieldData.slice(fields[i].format.sliceLength);
                  }
                }else{
                  data = data + fieldData;
                }
              }*/
            }
            return data;
          }else if(FieldMapping == "amount"){
           
            var data = "";
            //if(!this.isEmptyNullUndefined(FieldMapping.mapping[0])){
            if(!this.isEmptyNullUndefined(FieldMapping)){
             // var fieldMapping =  this.getInternalExternalFieldValue(FieldMapping.mapping[0],record);
             // var fieldData = record[fieldMapping];
             // var currencyMapping =  this.getFieldValue(FieldMapping.currency);
              //var currencyCode = record[currencyMapping];
              var currencyCode = record.currencyCode;
              if(!this.isEmptyNullUndefined(record)){
                /*if(!this.isEmptyNullUndefined(FieldMapping.mapping[0].format)){
                 data = this.FormatUtils.formatAmountandAppendCurrencySymbol(fieldData,currencyCode,FieldMapping.mapping[0].format);
                  data = data.text;
                }
                else{
                  data = this.FormatUtils.getCurrencySymbol(currencyCode) + record.availableBalance;
                }*/
                data = this.FormatUtils.getCurrencySymbol(currencyCode) + record.availableBalance;
              }
              else{
                return data;
              }
           
           }
          } 
           else if(FieldMapping == "accountType"){
              if(!this.isEmptyNullUndefined(record)){ 
                var data = record.accountType;
                }
            return data;
          }
          else{
            //var data = "";
            var data = "Available Balance";
            /*if(!this.isEmptyNullUndefined(FieldMapping.mapping[0])){
              var fieldMapping =  this.getInternalExternalFieldValue(FieldMapping.mapping[0],record);
              data = record[fieldMapping];
            }*/
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
/**     
	 * Component groupBusinessAndRetail
     * To group business and retail accounts
     */
    groupBusinessAndRetail: function(sectionData,data,response)
    {
      var scope =this;
      try{
        var fromAccountsData=[];
       //var data=scope.filterDataBasedOnPermissions(data, scope.transferTypeContext);
         var data=scope.filterDataBasedOnPermissions(data);
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
            if(fromAccountsDataKeys[i]=="Savings" ||fromAccountsDataKeys[i]=="Checking"||fromAccountsDataKeys[i]=="Deposit"||fromAccountsDataKeys[i]=="Loan"||fromAccountsDataKeys[i]=="CreditCard")
            {
              fromData=[
                {"lblHeader":{
                  text :fromAccountsDataKeys[i]+" Accounts  ("+fromAccountsData[fromAccountsDataKeys[i]].length+")"}, 
                 "imgArrow": this._fasSegExpandIcon,
                },fromAccountsData[fromAccountsDataKeys[i]]
              ]
            }
          }
          else
          {
            fromData=[
              {"lblHeader":{
                text :fromAccountsDataKeys[i]+"  ("+fromAccountsData[fromAccountsDataKeys[i]].length+")"}, 
               "imgArrow": this._fasSegExpandIcon,
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
    /**     
	 * Component filterDataBasedOnPermissions
     * To filter Data Based On Permissions
     */
    filterDataBasedOnPermissions:function(data){
      var scope=this;
      try{
        var dataPermissions=[],j=0;
        for(var i=0;i<data.length;i++)
        {
           if(!scope.isEmptyNullUndefined(this._AccTypedataPermsn)){
            if(data[i]["fromActions"].includes(scope.getFieldValue(this._AccTypedataPermsn,"Datapermission")))
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
    
    
	
/**     
	 * Component selectFromAccount
     * To pass the selected data to next screen.
     */
    selectFromAccount:function() {
      var scope=this;
      try{
        if(this.searchApplied === false && this.response[this._fasObject]["length"]===1)
          {
            var selectedData = this.recordsArray;
			            this.stack=[];
          }
        else{
        var selectedData = this.view.segAccounts.selectedRowItems; 
        }
        var transferType = scope.getFieldValue(scope._flowType); 
        
        //if(scope.amountSelectedFlowType === "From"  && scope.userFlowType === "EDIT" ) 
        if(scope.amountSelectedFlowType === "From")
        {
          scope.updateInputPoolValue(scope._fasField1 , selectedData[0].formattedFromAccountName);
          scope.updateInputPoolValue(scope._fasField2 , selectedData[0].fromAvailableBalance);
          scope.updateInputPoolValue(scope._fasField3 , selectedData[0].fromAccountType);
          scope.inputPool["fromTransferCurrency"] = selectedData[0].fromTransactionCurrency;
          scope.inputPool["fromAccountNumber"] = selectedData[0].fromAccountNumber;
            //this.view.tbxFromSearch.text="";
//           this.view.imgFromCloseIcon.setVisibility(false);
//           this.view.segAccounts.widgetDataMap = scope.backUpFromAccountMapping;
//           this.view.segAccounts.setData(scope.backUpFromAccountList);
//           scope.searchApplied="false";
//           scope.clearSearchApplied="false";        
          scope.setAmount();
          scope.navigateTo("flxbillPaymentAmountDetails", "flxAmountHeader", scope.getFieldValue(scope._amntSectionTitle));
          } else if(scope.amountSelectedFlowType === "From Account"  && scope.userFlowType === "EDIT FROM ACCOUNT" ) 
        {
          scope.updateInputPoolValue(scope._fasField1 , selectedData[0].formattedFromAccountName);
          scope.updateInputPoolValue(scope._fasField2 , selectedData[0].fromAvailableBalance);
          scope.updateInputPoolValue(scope._fasField3 , selectedData[0].fromAccountType);
          scope.inputPool["fromTransferCurrency"] = selectedData[0].fromTransactionCurrency;
          scope.inputPool["fromAccountNumber"] = selectedData[0].fromAccountNumber;    
          scope.setAmount();
          scope.navigateTo("flxbillPaymentAmountDetails", "flxAmountHeader", scope.getFieldValue(scope._amntSectionTitle));
        } else if(scope.amountSelectedFlowType === "BillRecipient")
        //else if(scope.amountSelectedFlowType === "BillRecipient" && scope.userFlowType === "EDIT" ) 
        {
          scope.updateInputPoolValue(scope._fasField1 , selectedData[0].formattedFromAccountName);
          scope.updateInputPoolValue(scope._fasField2 , selectedData[0].fromAvailableBalance);
          scope.updateInputPoolValue(scope._fasField3 , selectedData[0].fromAccountType);
          scope.inputPool["fromTransferCurrency"] = selectedData[0].fromTransactionCurrency;
          scope.inputPool["fromAccountNumber"] = selectedData[0].fromAccountNumber;
          scope.userFlowType = "";
          scope.setBillRecipient();
          scope.navigateTo("flxBillRecipient", "flxHeaderMainBillRecipient", scope.getFieldValue(scope._brSectionTitle));
        } else if(scope.amountSelectedFlowType === "BillPayerDetails")
        //else if(scope.amountSelectedFlowType === "BillPayerDetails" && scope.userFlowType === "EDIT" ) 
        {
          scope.updateInputPoolValue(scope._fasField1 , selectedData[0].formattedFromAccountName);
          scope.updateInputPoolValue(scope._fasField2 , selectedData[0].fromAvailableBalance);
          scope.updateInputPoolValue(scope._fasField3 , selectedData[0].fromAccountType);
          scope.inputPool["fromTransferCurrency"] = selectedData[0].fromTransactionCurrency;
          scope.inputPool["fromAccountNumber"] = selectedData[0].fromAccountNumber;
          scope.userFlowType = "";
          scope.setBillPayerDetails();
          scope.navigateTo("flxMainPayeeDetails", "flxHeaderComp", scope.getFieldValue(scope._bpdSectionTitle));
        } else if(scope.amountSelectedFlowType === "PayableTo")
        //else if(scope.amountSelectedFlowType === "PayableTo" && scope.userFlowType === "EDIT" ) 
        {
          scope.updateInputPoolValue(scope._fasField1 , selectedData[0].formattedFromAccountName);
          scope.updateInputPoolValue(scope._fasField2 , selectedData[0].fromAvailableBalance);
          scope.updateInputPoolValue(scope._fasField3 , selectedData[0].fromAccountType);
          scope.inputPool["fromTransferCurrency"] = selectedData[0].fromTransactionCurrency;
          scope.inputPool["fromAccountNumber"] = selectedData[0].fromAccountNumber;
          scope.userFlowType = "";
          scope.setPayableTo();
          scope.navigateTo("flxMainBillerName", "flxBillerNameHeader", scope.getFieldValue(scope._ptSectionTitle));
        } else if(scope.amountSelectedFlowType === "AccountNumber")
        //else if(scope.amountSelectedFlowType === "AccountNumber"  && scope.userFlowType === "EDIT" ) 
        {
          scope.updateInputPoolValue(scope._fasField1 , selectedData[0].formattedFromAccountName);
          scope.updateInputPoolValue(scope._fasField2 , selectedData[0].fromAvailableBalance);
          scope.updateInputPoolValue(scope._fasField3 , selectedData[0].fromAccountType);
          scope.inputPool["fromTransferCurrency"] = selectedData[0].fromTransactionCurrency;
          scope.inputPool["fromAccountNumber"] = selectedData[0].fromAccountNumber;
          scope.userFlowType = "";
          scope.setAccountNumber();
          scope.navigateTo("flxBillerAccountNumber", "flxBillerAccountNumberHeader", scope.getFieldValue(scope._acnSectionTitle));
        } else if(scope.amountSelectedFlowType === "ReasonForPayment")
        //else if(scope.amountSelectedFlowType === "ReasonForPayment"  && scope.userFlowType === "EDIT" ) 
        {
          scope.updateInputPoolValue(scope._fasField1 , selectedData[0].formattedFromAccountName);
          scope.updateInputPoolValue(scope._fasField2 , selectedData[0].fromAvailableBalance);
          scope.updateInputPoolValue(scope._fasField3 , selectedData[0].fromAccountType);
          scope.inputPool["fromTransferCurrency"] = selectedData[0].fromTransactionCurrency;
          scope.inputPool["fromAccountNumber"] = selectedData[0].fromAccountNumber;
          scope.userFlowType = "";
          scope.setReasonForPayments();
          scope.navigateTo("flxMainNotes", "flxHeaderNotes", scope.getFieldValue(scope._rfpSectionTitle));
        }
        else if(scope.userFlowType=== "EDIT" ) 
        {
          scope.updateInputPoolValue(scope._fasField1 , selectedData[0].formattedFromAccountName);
          scope.updateInputPoolValue(scope._fasField2 , selectedData[0].fromAvailableBalance);
          scope.updateInputPoolValue(scope._fasField3 , selectedData[0].fromAccountType);
          scope.inputPool["fromTransferCurrency"] = selectedData[0].fromTransactionCurrency;
          scope.inputPool["fromAccountNumber"] = selectedData[0].fromAccountNumber;
          scope.setVerifyDetails();
         // scope.navigateTo("flxVerifyDetails", "flxVerifyHeader",scope.getFieldValue(scope._vfsSectionTitle));
        }
        else
        {
          scope.updateInputPoolValue(scope._fasField1 , selectedData[0].formattedFromAccountName);
          scope.updateInputPoolValue(scope._fasField2 , selectedData[0].fromAvailableBalance);
          scope.updateInputPoolValue(scope._fasField3 , selectedData[0].fromAccountType);
          scope.inputPool["fromTransferCurrency"] = selectedData[0].fromTransactionCurrency;
          scope.inputPool["fromAccountNumber"] = selectedData[0].fromAccountNumber;
          scope.setBillRecipient();
          scope.navigateTo("flxBillRecipient", "flxHeaderMainBillRecipient", scope.getFieldValue(scope._brSectionTitle));
        }
      }catch (err) {
        var errorObj = {
          "errorInfo": "Error in SelectFromAccounts",
          "errorLevel": "Configuration",
          "error": err
        };

      }
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
       // var criteriaObject = JSON.parse(criteria);
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
     * Component failureValidation
     * Responsible to process the failureValidation
     */
    fromFailureValidation : function(response)
    {
      var scope = this;
      try{
       applicationManager.getPresentationUtility().dismissLoadingScreen();
        scope.view.segFromAccounts.setVisibility(false);
        scope.view.flxFromNoResults.setVisibility(true);
        scope.navigateTo("flxFromAccountMain","flxFromHeaderTop",scope.getFieldValue(scope._fasSectionTitle));
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in failureValidation method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
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
      
     /**
     * Component successfulValidation
     * Responsible to process the successfulValidation
     */
    successfulValidation : function(response) {
      var scope = this;
      try {
        response = response[scope._bpdObjName][0];
        if(!scope.isEmptyNullUndefined(response["dbpErrMsg"])) {
          // this.dataProcessorUtility.showToastMessageError(scope, response["dbpErrMsg"]);
        } else if(!scope.isEmptyNullUndefined(response["errmsg"]))
        {
          // this.dataProcessorUtility.showToastMessageError(scope, response["errMsg"]);
          var errInfo = {
            "errCode"  :response.errcode,
            "errMsg"  :response.errmsg,
            "errDesc"  :response.errmsg,
            "errType" :response.errorType
          };
          scope.retryHitCount++;
          var contractCMaxHit=!scope.isEmptyNullUndefined(scope.getFieldValue(this._errsCTA1, "hitCount")) ? scope.getFieldValue(this._errsCTA1, "hitCount") : 3;
          var errorType=!scope.isEmptyNullUndefined(scope.getFieldValue(this._vfserrortype, "type2")) ? scope.getFieldValue(this._vfserrortype, "type2") : "";
          if(scope.retryHitCount > contractCMaxHit){
            errInfo.errType=errorType;
          }
          scope.view.flxVerifyBack.setVisibility(false);
          scope.setfesibilityErrorScreenData(errInfo);
          scope.errorSectionTitle = scope.getFieldValue(scope._vfsSectionTitle);
          scope.navigateTo("flxError", "flxErrorHeaderMain", scope.errorSectionTitle);
        } else {
          scope.view.flxVerifyBack.setVisibility(true);
          scope.inputPool["paymentType"] = scope._paymentType;
          var currencySymbol = scope.FormatUtils.getCurrencySymbolCode(scope.inputPool["fromTransferCurrency"]);
          var amountFormat = {
            "locale": "en-US", 
            "positiveFormat": "{CS}{D}",
            "negativeFormat": "-{CS}{D}", 
            "fractionDigits": "2"
          }
          var formattedPaymentFee = scope.FormatUtils.formatAmount(response.paymentFee, amountFormat);
          scope.inputPool["paymentFee"] = scope.FormatUtils.appendCurrencySymbol(formattedPaymentFee, scope.inputPool["fromTransferCurrency"]);
          var formattedTotalAmount = scope.FormatUtils.formatAmount(response.totalAmount, amountFormat);
          scope.inputPool["totalAmount"] = scope.FormatUtils.appendCurrencySymbol(formattedTotalAmount, scope.inputPool["fromTransferCurrency"]);
          if(scope._paymentType === "AdhocBillpayment") {
            var formattedAcceptanceFee = scope.FormatUtils.formatAmount(response.acceptanceFee, amountFormat);
            scope.inputPool["acceptanceFee"] = scope.FormatUtils.appendCurrencySymbol(formattedTotalAmount, scope.inputPool["fromTransferCurrency"]);
            scope.enableButton("btnVerifyConfirm");
          } else {
            scope.inputPool["amount"] = scope.FormatUtils.appendCurrencySymbol(response.amount, scope.inputPool["fromTransferCurrency"]);
            scope.verifyAmountValidate();
          }
          scope.setVerifyDetailsUI();
          scope.setverifyDetailsData();
          scope.view.btnVerifyConfirm.onClick = scope.verifyContinueOnCLick;
          scope.navigateTo("flxVerifyDetails", "flxVerifyHeader",scope.getFieldValue(scope._vfsSectionTitle));
        }
      }
      catch(err) {
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
    failureValidation : function(response)
    {
      var scope = this;
      try{
        response = response[scope._bpdObjName][0];
         var errInfo = {
            "errCode"  :response.errcode,
            "errMsg"  :response.errmsg,
            "errDesc"  :response.errDesc,
           "errType" :response.errorType
          };
        scope.retryHitCount++;
        var contractCMaxHit=!scope.isEmptyNullUndefined(scope.getFieldValue(this._errsCTA1, "hitCount")) ? scope.getFieldValue(this._errsCTA1, "hitCount") : 3;
        var errorType=!scope.isEmptyNullUndefined(scope.getFieldValue(this._vfserrortype, "type2")) ? scope.getFieldValue(this._vfserrortype, "type2") : "";
        if(scope.retryHitCount >= contractCMaxHit){
          errInfo.errType=errorType;
        }
        scope.view.flxVerifyBack.setVisibility(false);
        scope.errorSectionTitle = scope.getFieldValue(scope._vfsSectionTitle);
        scope.setfesibilityErrorScreenData(errInfo);
        scope.navigateTo("flxError", "flxErrorHeaderMain", scope.errorSectionTitle);
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in failureValidation method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
    
      /**
     * Component verifyContinueOnCLick
     * Responsible to call the details before making service call
     */
    verifyContinueOnCLick : function()
    {
      var scope = this;
      try{
        var operationName = scope._bpdObjOperation1;
        scope.mfaOperationName = operationName;									   
        scope.setCriteria(scope._bpdObjOperation1Criteria);
        scope.BillPaymentsDAO.postTransfer(scope._bpdObjService, scope. _bpdObjName1, operationName, scope.getCriteria(), scope._ValServiceResponseIdentifier, scope.successfulBilllpay, scope.failureBillpay);
      }catch(err) {
        var errObj = {
          "errorInfo" : "Error in verifyContinueOnCLick method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },
           /**
     * Component successfulBilllpay
     * Responsible to process the successfulBilllpay
     */
    successfulBilllpay : function(response) {
      var scope = this;
      try {
        if(!scope.isEmptyNullUndefined(response[scope._bpdObjName])) {
          response = response[scope._bpdObjName][0];
          response = Object.assign(scope.inputPool,response);
        } else {
          response = Object.assign(scope.inputPool,response);
          response["dataModel"] = scope._bpdObjName1;
          response["operationName"] = scope._bpdObjOperation1;
          response["action"] = scope._bpdObjOperation1;
          response["serviceName"] = scope._bpdObjService;
        }
        scope.onVerifySuccessCallBack(response);
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in successfulBilllpay method of the component.",
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
    failureBillpay : function(response)
    {
      var scope = this;
      try{
        scope.onVerifySuccessCallBack(response);
      }
      catch(err) {
        var errObj = {
          "errorInfo" : "Error in failureBillpay method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    setverifyDetailsData : function(){
      var scope = this;
      scope.view.flxVerifyAccNumWarnMain.setVisibility(false);
      for(var i=1;i<10;i++)
        {
          var fieldLabel = scope.getFieldValue(eval("scope._vfsField"+(i+1)+"Label"));
          var fieldValue = scope.getFieldValue(eval("scope._verifyField"+(i+1)+"Value"),"value");
          var isReadonly = scope.getFieldValue(eval("scope._verifyField"+(i+1)+"Value"),"readonly");
          if(!scope.isEmptyNullUndefined(fieldLabel) || !scope.isEmptyNullUndefined(fieldValue)){
            fieldValue=fieldValue.length >=18 ?fieldValue.substring(0,18)+"...":fieldValue;
            scope.view["lblField"+i+"Label"].text = fieldLabel;
            scope.view["lblField"+i+"Label"].skin = scope._vfssLabelSkin;
            scope.view["lblField"+i+"Value"].text = fieldValue;
            scope.view["lblField"+i+"Value"].right = isReadonly ? "20dp" : "50dp";
            scope.view["lblField"+i+"Value"].skin = isReadonly ? scope._vfssValueReadonlySkin :scope._vfssValueEditableSkin;
            scope.view["imgArrow"+i].isVisible = isReadonly ? false: true;
            scope.view["imgArrow"+i].src = scope._vfsImgEdit;
            scope.view["flxField"+i].setVisibility(true);
          }else{
            scope.view["flxField"+i].setVisibility(false);
          }
        }
      scope.view.flxbtnConfirm.setVisibility(true);
      scope.view.flxNotes.setVisibility(true);
    },

    verifyAmountValidate : function(){
      var scope= this;
      var enterdAmount = scope.inputPool["amount"];
      var fromAvailableBal = scope.inputPool["fromAvailableBalance"];
      enterdAmount=enterdAmount.substring(1);
	  enterdAmount=enterdAmount.replace(/,/g, "");
      fromAvailableBal=fromAvailableBal.substring(1);
      if(parseInt(enterdAmount) <= parseInt(fromAvailableBal)){
        scope.view.flxVerifyFromWanrn.setVisibility(false);
        scope.view.imgVerifyFromAmountWarn.setVisibility(false);
        if(scope._paymentType === "AdhocBillpayment"){
          scope.ValidateDetails();
        } else {
           scope.enableButton("btnVerifyConfirm");
        }
        scope.setVerifyDetailsUI();
      }else{
        scope.view.imgVerifyFromAmountWarn.src=scope.getFieldValue(scope._vfsImgWarn);
        scope.view.imgVerifyFromWanrnDesc.src=scope.getFieldValue(scope._vfsImgWarn);
        scope.view.lblVerifyFromWanrnDesc.text=scope.getFieldValue(scope._vfsAmoutValidationErrMsg);
        scope.view.flxVerifyFromWanrn.setVisibility(true);
        scope.view.imgVerifyFromAmountWarn.setVisibility(true);
        scope.disableButton("btnVerifyConfirm");
        scope.setVerifyDetailsUI();
        scope.navigateTo("flxVerifyDetails", "flxVerifyHeader", scope.getFieldValue(scope._vfsSectionTitle));
      }
    },

      setfesibilityErrorScreenData: function(errorMessage) {
      var scope = this;
      try {
        scope.setErrorScreenSkins();
        scope.view.flxErrorHeaderMain.setVisibility(true);
        scope.view.lblErrorHeaderName.text =scope.getFieldValue(scope._vfsSectionTitle);
        var errorType=!scope.isEmptyNullUndefined(scope.getFieldValue(this._vfserrortype, "type1")) ? scope.getFieldValue(this._vfserrortype, "type1") : "";
        if(errorMessage.errType===errorType){
        scope.view.lblFailTitle.text  = !scope.isEmptyNullUndefined(errorMessage.errMsg) ? errorMessage.errMsg : scope._errsTitleMessage;
        scope.view.lblFailDescription.text = !scope.isEmptyNullUndefined(errorMessage.errDesc) ? errorMessage.errDesc : scope._errsSubTitile;
        scope.view.imgFail.src = scope._errsFailIcon;
        scope.view.btnFailureAction1.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(this._errsCTA1, "text")) ? true : false;
        scope.view.btnFailureAction1.text = !scope.isEmptyNullUndefined(scope.getFieldValue(this._errsCTA1, "text")) ? scope.getFieldValue(this._errsCTA1, "text") : "";
        scope.view.btnFailureAction2.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(this._errsCTA2, "text")) ? true : false;
        scope.view.btnFailureAction2.text = !scope.isEmptyNullUndefined(scope.getFieldValue(this._errsCTA2, "text")) ? scope.getFieldValue(this._errsCTA2, "text") : "" ;
        scope.view.btnError3.isVisible = !scope.isEmptyNullUndefined(scope.getFieldValue(this.errscreenCTA3, "text")) ? true : false;
        scope.view.btnError3.text = !scope.isEmptyNullUndefined(scope.getFieldValue(this.errscreenCTA3, "text")) ? scope.getFieldValue(this._errscreenCTA3, "text") : "" ;
        scope.view.btnFailureAction1.onClick = scope.fesibilityRetry;
        scope.view.btnFailureAction2.onClick = scope.enableCancelPopup;
        scope.view.btnFailureAction2.setVisibility(true);
        scope.view.flxFailureButtons.setVisibility(true);
        scope.view.btnFailureAction3.setVisibility(false);
      } else{
        scope.view.lblFailTitle.text  = !scope.isEmptyNullUndefined(errorMessage.errMsg) ? errorMessage.errMsg : scope._errsTitleMessage;
        scope.view.lblFailDescription.text = !scope.isEmptyNullUndefined(errorMessage.errDesc) ? errorMessage.errDesc : scope._errsSubTitile;
        scope.view.imgFail.src = scope._errsFailIcon;
        scope.view.flxFailureButtons.setVisibility(false);
        scope.view.btnFailureAction3.setVisibility(true);
        scope.view.btnFailureAction3.onClick = scope.onAccountsDashBoardNav;
        scope.view.btnFailureAction3.text = !scope.isEmptyNullUndefined(scope.getFieldValue(this._errsCTA3, "text")) ? scope.getFieldValue(this._errsCTA3, "text") : "" ;
      }
      } catch(err) {
        var errObj = {
          "errorInfo" : "Error in setErrorScreenData method of the component.",
          "errorLevel" : "Configuration",
          "error": err
        };
        scope.onError(errObj);
      }
    },

    fesibilityRetry : function(){
      var scope = this;
     // scope.retryHitCount++;
      var contractCMaxHit=!scope.isEmptyNullUndefined(scope.getFieldValue(this._errsCTA1, "hitCount")) ? scope.getFieldValue(this._errsCTA1, "hitCount") : 3;
      if(scope.retryHitCount <= contractCMaxHit){
        scope.view.imgVerifyWarn.src=scope.getFieldValue(scope._vfsImgWarn);
        scope.view.lblVerifyAccNumWarnDesc.text=scope.getFieldValue(scope._vfsfesibilityFailMsg);;
        scope.view.flxVerifyAccNumWarnMain.setVisibility(true);
        scope.view.flxbtnConfirm.setVisibility(false);
        scope.view.flxNotes.setVisibility(false);
        if(scope._paymentType !== "AdhocBillpayment") {
          for(var i=1; i<10; i++) {
            var isReadonly = scope.getFieldValue(eval("scope._verifyField"+(i+1)+"Value"),"readonly");
            if(isReadonly || scope.isEmptyNullUndefined(isReadonly)) {
              scope.view["flxField"+i].setVisibility(false);
            } else{
              scope.view["flxField"+i].setVisibility(true);
            }
          }
        }
        scope.setVerifyDetailsUI();
        scope.navigateTo("flxVerifyDetails", "flxVerifyHeader",scope.getFieldValue(scope._vfsSectionTitle));
      } else {
        scope.view.lblFailTitle.text  = scope.getFieldValue(scope._errsErrorHeader);
        scope.view.btnFailureAction2.setVisibility(false);
        scope.view.btnFailureAction1.onClick = scope.onAccountsDashBoardNav;
        scope.view.btnFailureAction1.text = !scope.isEmptyNullUndefined(scope.getFieldValue(this._errsCTA3, "text")) ? scope.getFieldValue(this._errsCTA3, "text") : "" ;
      }
    }
  };
});