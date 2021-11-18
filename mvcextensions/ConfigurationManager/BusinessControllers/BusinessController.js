/**
 *@module ConfigurationManager
 */
define(['CommonUtilities'], function(CommonUtilities) {
  /**
   * ConfigurationManager is a class which handles all functions related to storing data into devices.
   *@alias module:ConfigurationManager
   *@class
   */
  function ConfigurationManager() {
    scope_configManager=this;
    scope_configManager.loggedInUserPermissionsData = {
      'userDetails': {},
      'companyList': [],
      'accountLevelPermissions': [],
      'globalLevelPermissions': [],
      'transactionLimits': []
    };
    //BB Configuration value (need to be changed while pushing to OLB)
    this.customerTypeId = "";
    this.isSMEUser = "false";
    this.isMBBUser = "false";
    this.isRBUser = "false";
    this.isCombinedUser = "false";
    this.combinedDashboardView = -1;
    this.GoogleservicesSupported=true;
    this.pinChangeLength = 4;
    this.transactionsPendingForMyApprovalCount = "";
    this.achTransactionsPendingForMyApprovalCount = "";
    this.achFilesPendingForMyApprovalCount = "";

    this.AwaitingCount = "";
    this.RejectedCount = "";
    this.ApprovedCount = "";
    this.isInternalFundTransfersCreateTransactionEnabled = "true";
    this.isTransferBetweenCustomersAccountsCreateTransactionEnabled = "true";
    this.isInterbankAccountToAccountFundTransferCreateTransactionEnabled = "true";
    this.isInternationAccountToAccountFundTransferCreateTransactionEnabled = "true";
    this.isDomesticWireTransfersCreateTransactionEnabled = "true";
    this.isInternationalWireTransfersCreateTransactionEnabled = "true";
    this.isBillPaymentCreateTransactionEnabled = "true";
    this.isP2PCreateTransactionEnabled = "true";
    this.isprofileImageAvailable = 'false';
    this.isACHPaymentCreateTransactionEnabled = "true";
    this.isACHCollectionCreateTransactionEnabled = "true";
    this.isInternalFundTransfersViewTransactionsEnabled = "true";
    this.isInternalFundTransfersApproveTransactionsEnabled = "true";
    this.isInternalFundTransfersSelfApprovalEnabled = "true";
    this.isInternalFundTransfersManagePayeesEnabled = "true";
    this.isIntraBankFundTransferViewTransactionsEnabled = "true";
    this.isTransferBetweenCustomersAccountsViewTransactionsEnabled = "true";
    this.isTransferBetweenCustomersAccountsApproveTransactionsEnabled = "true";
    this.isTransferBetweenCustomersAccountsSelfApprovalEnabled = "true";
    this.isTransferBetweenCustomersAccountsManagePayeesEnabled = "true";
    this.isInterbankAccountToAccountFundTransferViewTransactionsEnabled = "true";
    this.isInterbankAccountToAccountFundTransferApproveTransactionsEnabled = "true";
    this.isInterbankAccountToAccountFundTransferSelfApprovalEnabled = "true";
    this.isInterbankAccountToAccountFundTransferManagePayeesEnabled = "true";
    this.isInternationAccountToAccountFundTransferViewTransactionsEnabled = "true";
    this.isInternationAccountToAccountFundTransferApproveTransactionsEnabled = "true";
    this.isInternationAccountToAccountFundTransferSelfApprovalEnabled = "true";
    this.isInternationAccountToAccountFundTransferManagePayeesEnabled = "true";
    this.isDomesticWireTransfersViewTransactionsEnabled = "true";
    this.isDomesticWireTransfersApproveTransactionsEnabled = "true";
    this.isDomesticWireTransfersSelfApprovalEnabled = "true";
    this.isDomesticWireTransfersManagePayeesEnabled = "true";
    this.isInternationalWireTransfersViewTransactionsEnabled = "true";
    this.isInternationalWireTransfersApproveTransactionsEnabled = "true";
    this.isInternationalWireTransfersSelfApprovalEnabled = "true";
    this.isInternationalWireTransfersManagePayeesEnabled = "true";
    this.isBillPaymentViewTransactionsEnabled = "true";
    this.isBillPaymentApproveTransactionsEnabled = "true";
    this.isBillPaymentSelfApprovalEnabled = "true";
    this.isBillPaymentManagePayeesEnabled = "true";
    this.isP2PViewTransactionsEnabled = "true";
    this.isP2PApproveTransactionsEnabled = "true";
    this.isP2PSelfApprovalEnabled = "true";
    this.isP2PManagePayeesEnabled = "true";
    this.isACHPaymentViewTransactionsEnabled = "true";
    this.isACHPaymentApproveTransactionsEnabled = "true";
    this.isACHPaymentSelfApprovalEnabled = "true";
    this.isACHPaymentManagePayeesEnabled = "true";
    this.isACHCollectionViewTransactionsEnabled = "true";
    this.isACHCollectionApproveTransactionsEnabled = "true";
    this.isACHCollectionSelfApprovalEnabled = "true";
    this.isACHCollectionManagePayeesEnabled = "true";
    this.isUserManagementEnabled = "true";
    this.isCardManagementEnabled = "true";
    this.isCheckManagementEnabled = "true";
    this.isDisputeTransactionsEnabled = "true";
    this.isAccountSettingsEnabled = "true";
    this.isManageEstatementsEnabled = "true";
    this.isAlertManagementEnabled = "true";

    //Min Limits

    this.minInternalFundTransfersCreateTransactionLimit = "1";
    this.minTransferBetweenCustomersAccountsCreateTransactionLimit = "1";
    this.minInterbankAccountToAccountFundTransferCreateTransactionLimit = "1";
    this.minInternationAccountToAccountFundTransferCreateTransactionLimit = "1";
    this.minDomesticWireTransfersCreateTransactionLimit = "1";
    this.minInternationalWireTransfersCreateTransactionLimit = "1";
    this.minBillPaymentCreateTransactionLimit = "1";
    this.minP2PCreateTransactionLimit = "1";
    this.minACHPaymentCreateTransactionLimit = "1";
    this.minACHCollectionCreateTransactionLimit = "1";
    this.minInternalFundTransfersViewTransactionsLimit = "1";
    this.minInternalFundTransfersApproveTransactionsLimit = "1";
    this.minInternalFundTransfersSelfApprovalLimit = "1";
    this.minInternalFundTransfersManagePayeesLimit = "1";
    this.minIntraBankFundTransferViewTransactionsLimit = "1";
    this.minIntraBankFundTransferApproveTransactionsLimit = "1";
    this.minTransferBetweenCustomersAccountsViewTransactionsLimit = "1";
    this.minTransferBetweenCustomersAccountsApproveTransactionsLimit = "1";
    this.minTransferBetweenCustomersAccountsSelfApprovalLimit = "1";
    this.minTransferBetweenCustomersAccountsManagePayeesLimit = "1";
    this.minInterbankAccountToAccountFundTransferViewTransactionsLimit = "1";
    this.minInterbankAccountToAccountFundTransferApproveTransactionsLimit = "1";
    this.minInterbankAccountToAccountFundTransferSelfApprovalLimit = "1";
    this.minInterbankAccountToAccountFundTransferManagePayeesLimit = "1";
    this.minInternationAccountToAccountFundTransferViewTransactionsLimit = "1";
    this.minInternationAccountToAccountFundTransferApproveTransactionsLimit = "1";
    this.minInternationAccountToAccountFundTransferSelfApprovalLimit = "1";
    this.minInternationAccountToAccountFundTransferManagePayeesLimit = "1";
    this.minDomesticWireTransfersViewTransactionsLimit = "1";
    this.minDomesticWireTransfersApproveTransactionsLimit = "1";
    this.minDomesticWireTransfersSelfApprovalLimit = "1";
    this.minDomesticWireTransfersManagePayeesLimit = "1";
    this.minInternationalWireTransfersViewTransactionsLimit = "1";
    this.minInternationalWireTransfersApproveTransactionsLimit = "1";
    this.minInternationalWireTransfersSelfApprovalLimit = "1";
    this.minInternationalWireTransfersManagePayeesLimit = "1";
    this.minBillPaymentViewTransactionsLimit = "1";
    this.minBillPaymentApproveTransactionsLimit = "1";
    this.minBillPaymentSelfApprovalLimit = "1";
    this.minBillPaymentManagePayeesLimit = "1";
    this.minP2PViewTransactionsLimit = "1";
    this.minP2PApproveTransactionsLimit = "1";
    this.minP2PSelfApprovalLimit = "1";
    this.minP2PManagePayeesLimit = "1";
    this.minACHPaymentViewTransactionsLimit = "1";
    this.minACHPaymentApproveTransactionsLimit = "1";
    this.minACHPaymentSelfApprovalLimit = "1";
    this.minACHPaymentManagePayeesLimit = "1";
    this.minACHCollectionViewTransactionsLimit = "1";
    this.minACHCollectionApproveTransactionsLimit = "1";
    this.minACHCollectionSelfApprovalLimit = "1";
    this.minACHCollectionManagePayeesLimit = "1";
    this.minUserManagementLimit = "1";
    this.minCardManagementLimit = "1";
    this.minCheckManagementLimit = "1";
    this.minDisputeTransactionsLimit = "1";
    this.minAccountSettingsLimit = "1";
    this.minManageEstatementsLimit = "1";
    this.minAlertManagementLimit = "1";


    //Max Limits

    this.maxInternalFundTransfersCreateTransactionLimit = "100000";
    this.maxTransferBetweenCustomersAccountsCreateTransactionLimit = "100000";
    this.maxInterbankAccountToAccountFundTransferCreateTransactionLimit = "100000";
    this.maxInternationAccountToAccountFundTransferCreateTransactionLimit = "100000";
    this.maxDomesticWireTransfersCreateTransactionLimit = "100000";
    this.maxInternationalWireTransfersCreateTransactionLimit = "100000";
    this.maxBillPaymentCreateTransactionLimit = "100000";
    this.maxP2PCreateTransactionLimit = "100000";
    this.maxACHPaymentCreateTransactionLimit = "100000";
    this.maxACHCollectionCreateTransactionLimit = "100000";
    this.maxInternalFundTransfersViewTransactionsLimit = "100000";
    this.maxInternalFundTransfersApproveTransactionsLimit = "100000";
    this.maxInternalFundTransfersSelfApprovalLimit = "100000";
    this.maxInternalFundTransfersManagePayeesLimit = "100000";
    this.maxIntraBankFundTransferViewTransactionsLimit = "100000";
    this.maxIntraBankFundTransferApproveTransactionsLimit = "100000";
    this.maxTransferBetweenCustomersAccountsViewTransactionsLimit = "100000";
    this.maxTransferBetweenCustomersAccountsApproveTransactionsLimit = "100000";
    this.maxTransferBetweenCustomersAccountsSelfApprovalLimit = "100000";
    this.maxTransferBetweenCustomersAccountsManagePayeesLimit = "100000";
    this.maxInterbankAccountToAccountFundTransferViewTransactionsLimit = "100000";
    this.maxInterbankAccountToAccountFundTransferApproveTransactionsLimit = "100000";
    this.maxInterbankAccountToAccountFundTransferSelfApprovalLimit = "100000";
    this.maxInterbankAccountToAccountFundTransferManagePayeesLimit = "100000";
    this.maxInternationAccountToAccountFundTransferViewTransactionsLimit = "100000";
    this.maxInternationAccountToAccountFundTransferApproveTransactionsLimit = "100000";
    this.maxInternationAccountToAccountFundTransferSelfApprovalLimit = "100000";
    this.maxInternationAccountToAccountFundTransferManagePayeesLimit = "100000";
    this.maxDomesticWireTransfersViewTransactionsLimit = "100000";
    this.maxDomesticWireTransfersApproveTransactionsLimit = "100000";
    this.maxDomesticWireTransfersSelfApprovalLimit = "100000";
    this.maxDomesticWireTransfersManagePayeesLimit = "100000";
    this.maxInternationalWireTransfersViewTransactionsLimit = "100000";
    this.maxInternationalWireTransfersApproveTransactionsLimit = "100000";
    this.maxInternationalWireTransfersSelfApprovalLimit = "100000";
    this.maxInternationalWireTransfersManagePayeesLimit = "100000";
    this.maxBillPaymentViewTransactionsLimit = "100000";
    this.maxBillPaymentApproveTransactionsLimit = "100000";
    this.maxBillPaymentSelfApprovalLimit = "100000";
    this.maxBillPaymentManagePayeesLimit = "100000";
    this.maxP2PViewTransactionsLimit = "100000";
    this.maxP2PApproveTransactionsLimit = "100000";
    this.maxP2PSelfApprovalLimit = "100000";
    this.maxP2PManagePayeesLimit = "100000";
    this.maxACHPaymentViewTransactionsLimit = "100000";
    this.maxACHPaymentApproveTransactionsLimit = "100000";
    this.maxACHPaymentSelfApprovalLimit = "100000";
    this.maxACHPaymentManagePayeesLimit = "100000";
    this.maxACHCollectionViewTransactionsLimit = "100000";
    this.maxACHCollectionApproveTransactionsLimit = "100000";
    this.maxACHCollectionSelfApprovalLimit = "100000";
    this.maxACHCollectionManagePayeesLimit = "100000";
    this.maxUserManagementLimit = "100000";
    this.maxCardManagementLimit = "100000";
    this.maxCheckManagementLimit = "100000";
    this.maxDisputeTransactionsLimit = "100000";
    this.maxAccountSettingsLimit = "100000";
    this.maxManageEstatementsLimit = "100000";
    this.maxAlertManagementLimit = "100000";
    this.maxAttachmentsAllowed = "5";
    this.maxFileSizeAllowed = "2";

    this.serverTimeZone = 'UTC';
    this.timeZoneOffset =  "UTC+05:30" ;
    //START OLB Configurations
    this.isFastTransferEnabled = 'true';
    this.isAlertAccountIDLevel = 'true';
    this.isAppRefreshed = 'false';
    this.appLaunchedMode = '';
    this.billPayOneTimePayment = 'true';
    this.canViewPastEBills = 'true';
    this.addExternalAccount = 'true';
    this.verifyByCredentials = 'true';
    this.fundTransferHistory = 'true';
    this.enrolSecurityQuestionsAvailable = 'true';
    this.editUsername = 'true';
    this.editPassword = 'true';
    this.idleTimeOut = '5';
    this.loanPaymentEnabled = 'true';
    this.showLoanUpdateDisclaimer = 'true';
    this.loanPaymentAfterDueDateEnabled = 'true';
    this.modifyLoanPaymentAmount = 'true';
    this.editNickNameAccountSettings = 'true';
    this.limitLoanTransfersEnabled = 'true';
    this.payOffLoanPaymentEnabled = 'true';
    this.billPaySearch = 'true';
    this.canSearchTransfers = 'true';
    this.isInteractiveNotificationEnabled = 'true';
    this.editDisputeATransaction = 'true';
    this.printingTransactionDetails = 'true';
    this.enableDefaultAccounts = 'true';
    this.reOrderAccountPreferences = 'true';
    this.enableProfileSettings = 'true';
    this.enablePhoneSettings = 'true';
    this.enableEmailSettings = 'true';
    this.enableAddressSettings = 'true';
    this.enableUsernameAndPasswordSettings = 'true';
    this.enableSecurityQuestionsSettings = 'true';
    this.enableSecureAccessCodeSettings = 'true';
    this.enableAccountPreferences = 'true';
    this.enableAlertSettings = 'true';
    this.enableAlertsIcon = 'true';
    this.serviceFeeFlag = 'false';
    this.p2pServiceFee = '0.1';
    this.canSearchP2PPersons = 'true';
    this.payApersonOneTimePayment = 'true';
    this.backendDateFormat = 'yyyy-mm-dd';
    this.additionalAddressAllowed = 'true';
    this.additionalPhoneAllowed = 'true';
    this.getDashboardMessageCount = '3';
    this.isPFMWidgetEnabled = 'true';
    this.enableEstatements = 'true';
    this.eStatementsFormat = 'pdf,csv';
    this.pfmMaxYears = '5';
    this.wireTranferFees = '0';
    this.enableStopPayments = 'true';
    this.enalbeStopPaymentServiceFeesAndValidity = 'true';
    this.checkServiceFee = '30';
    this.checkServiceVality = '6';
    this.isAggregatedAccountsEnabled = 'true';
    this.isMFAEnabledForP2P = 'false';
    this.minimumAmountForMFAP2P = '100';
    this.isMFAEnabledForWireTransfer = 'false';
    this.minimumAmountForMFAWireTransfer = '100';
    this.isMFAEnabledForBillPay = 'false';
    this.minimumAmountForMFABillPay = '50';
    this.numberOfLocations = 5;
    this.onBoardingAppName = 'InfinityOnboarding';
    this.onBoardingAppDirectionURL = '';
    this.fastTransfersFlowEnabled = "true";
    this.isFeedbackEnabled = "true";
    this.showFeedBackPostLogout="true";
    this.majorVersions = ["4.2", "4.3", "4.4"];
    this.mapKey = '';
    this.EngageEnabled = 'false';
    this.bulkWireFileTransactionsLimit = '0';
    this.isPostLoginAdsEnabled = 'false';
    this.isAccountDetailsServiceConfigured = "true";
    this.userAccounts = null;
    //END OLB Configurations
    //OLB START Entitlements
    this.isWatchlistEnabled = 'false';
    this.isBillPayEnabled = 'false';
    this.minBillPayLimit = '1';
    this.maxBillPayLimit = '100000';
    this.isPayAPersonEnabled = 'false';
    this.minP2PLimit = '1';
    this.maxP2PLimit = '100000';
    this.isRDCEnabled = 'false';
    this.minRDCLimit = '1';
    this.maxRDCLimit = '100000';
    this.isTransfersEnabled = 'false';
    this.minTransferLimit = '1';
    this.maxTransferLimit = '100000';
    this.isInternationalWireTransferEnabled = 'false';
    this.isDomesticWireTransferEnabled = 'false';
    this.minInternationalWireTransferLimit = '1';
    this.maxInternationalWireTransferLimit = '100000';
    this.minDomesticWireTransferLimit = '1';
    this.maxDomesticWireTransferLimit = '100000';
    this.isKonyBankAccountsTransfer = 'true';
    this.minKonyBankAccountsTransferLimit = '1';
    this.maxKonyBankAccountsTransferLimit = '100000';
    this.isOtherKonyAccountsTransfer = 'false';
    this.minOtherKonyAccountsTransferLimit = '1';
    this.maxOtherKonyAccountsTransferLimit = '100000';
    this.isOtherBankAccountsTransfer = 'true';
    this.minOtherBankAccountsTransferLimit = '1';
    this.maxOtherBankAccountsTransferLimit = '100000';
    this.isInternationalAccountsTransfer = 'true';
    this.minInternationalAccountsTransferLimit = '1';
    this.maxInternationalAccountsTransferLimit = '100000';
    this.isSecurityQuestionConfigured = 'false';
    this.payeeBillsLimit = '12';
    this.isBusinessOwner = 'false';
    this.defaultCountryISDCode = "+1";
    this.cardStatementYears= 1;
    this.KonyBankAccountsAutoDeniedTransferLimit = '100000';
    this.OtherKonyAccountsAutoDeniedTransferLimit = '100000';
    this.OtherBankAccountsAutoDeniedTransferLimit = '100000';
    this.InternationalAccountsAutoDeniedTransferLimit = '100000';
    this.P2PAutoDeniedTransferLimit = '100000';
    this.numberOfYearsToViewStatements=2;
    this.accountTypes = {
      SAVINGS: 'Savings',
      CHECKING: 'Checking',
      CREDITCARD: 'CreditCard',
      LOAN: 'Loan',
      MORTGAGE: 'Mortgage',
      DEPOSIT: 'Deposit',
      OTHER: 'Other',
      EXTERNAL: 'External',
      CURRENT: 'CURRENT',
      LINE_OF_CREDIT: 'Line of Credit',
    };
    this.transactionTypes = {
      INTERNAL : 'InternalTransfer',
      BILLPAY : 'BillPay',
      EXTERNAL : 'ExternalTransfer',
      DEPOSIT : 'Deposit',
      P2P : 'P2P',
      CARDLESS : 'Cardless',
      CHECKWITHDRAWAL : 'CheckWithdrawal',
      WITHDRAWAL : 'Withdrawal',
      INTEREST : 'Interest',
      REQUEST : 'Request',
      LOAN : 'Loan',
      RECEIVEDP2P : 'ReceivedP2P',
      RECEIVEDREQUEST : 'ReceivedRequest',
      FEES : 'Fees',
      INTERESTCREDIT : 'InterestCredit',
      INTERESTDEBIT : 'InterestDebit',
      WIRE : 'Wire',
      STOPCHECKPAYEMENTREQUEST : 'StopCheckPaymentRequest',
      INTERNETBANKING : 'InternetTransaction'
    };
    this.pfmTypes = {
      Home : "Home",
      Utilities : "Utilities",
      Financial : "Financial",
      Education : "Education",
      Transportation : "Transportation",
      Health : "Health",
      Travel : "Travel",
      Food : "Food",
      Uncategorised : "Uncategorised",
      Other : "Other",
    };
    //International Transfer
    this.internationalTransactionFee = '10';
    this.internationalTransactionFeeEnabled = 'true';
    this.BANNER_IMAGE = "";
    this.DESKTOP_BANNER_IMAGE = "";
    this.MOBILE_BANNER_IMAGE = "";
    this.LINK_TO_DBX = "";
    //END OLB Configurations
    this.androidPhoneNativeAppLink =
      'https://play.google.com/store/apps/details?id=com.kony.RetailBanking';
    this.iphoneNativeAppLink =
      'https://itunes.apple.com/us/app/kony-retail-banking/id1172171955?mt=8';
    this.androidTabletNativeAppLink =
      'https://play.google.com/store/apps/details?id=com.kony.RetailBanking';
    this.ipadNativeAppLink =
      'https://itunes.apple.com/us/app/kony-retail-banking/id1172171955?mt=8';
    this.servicesListForUser = [];
    /**@member {boolean} AggregatedExternalAccountEnabled used for tracking the Aggregated External Account Enabled status*/
    this.AggregatedExternalAccountEnabled = false;
    /**@member {string} isStartupCompleted used for tracking the Startup status*/
    this.isStartupCompleted = '';
    this.DebugMode = false; // This parameter is for enabling Logging in release mode.
    var HashTable = require('HashTable');
    /**@member {object} configurations contains instance of HashTable*/
    this.configurations = new HashTable();
    /**@member {OBJECT}  contains all currency codes*/
    this.currencyCode = {
      USD: '$', // US Dollar
      EUR: '€', // Euro
      CRC: '₡', // Costa Rican Colón
      GBP: '£', // British Pound Sterling
      ILS: '₪', // Israeli New Sheqel
      INR: '₹', // Indian Rupee
      JPY: '¥', // Japanese Yen
      KRW: '₩', // South Korean Won
      NGN: '₦', // Nigerian Naira
      PHP: '₱', // Philippine Peso
      PLN: 'zł', // Polish Zloty
      PYG: '₲', // Paraguayan Guarani
      THB: '฿', // Thai Baht
      UAH: '₴', // Ukrainian Hryvnia
      VND: '₫', // Vietnamese Dong
      AUD: '$', // Australian Dollar
      CAD: '$', // Canadian Dollar
      CHF: 'Fr.', //Swiss Franc
      AED: 'د.إ', //UAE
      RUB: '₽', //Russian
      HKD: 'HK$', //Hongkong Dollar
    };
    this.wireTransferCurrency = {
      '$' : 'USD', // US Dollar
      '€' : 'EUR', // Euro
      '£' : 'GBP', // British Pound Sterling
      '₹' : 'INR' 
    };
    this.locale = {
      'US-English': 'en_US',
      'UK-English': 'en_GB',
      Spanish: 'es_ES',
      German: 'de_DE',
      French: 'fr_FR',
    };
    this.frontendDateFormat = {
      en_US: 'm/d/Y',
      en_GB: 'd/m/Y',
      es_ES: 'd/m/Y',
      de_DE: 'd.m.Y',
      fr_FR: 'd/m/Y',
      sv_SE: 'Y-m-d',
    };
    this.termsAndConditions = {
      "Login" : 'Login_TnC',
      "Enroll" : 'Enroll_TnC',
      "EStatements":"Estatements_TnC",
      "Hamburger" : "Common_TnC",
      "Footer" : "Common_TnC",
      "BillPayment" : "BillPay_TnC",
      "NAO" : "Origination_TnC",
      "CardLock" : "LockCard_TnC",
      "CardCancel" : "CancelCard_TnC",
      "SEPA_TnC":"SEPA_TnC",
      "OnlineBankingAccess" : "OnlineBanking_Access_TnC",
      "AccountAggregation" : "AccountAggregation_TnC",
      "OpenNewAccount":"Origination_TnC",
      "de_DE":"de-DE",
      "en_GB":"en-GB",
      "en_US":"en-US",
      "es_ES":"es-ES",
      "fr_FR":"fr-FR",
      "it_IT":"it-IT",
      "sv_SE":"sv-SE"
    };
    this.accountsTypeMetaData = [
      {
        applicationValue: this.accountTypes.CHECKING,
        backendValue: kony.i18n.getLocalizedString(
          'kony.mb.Accounts.backend.Checking'
        ),
        displayValue: kony.i18n.getLocalizedString(
          'kony.mb.Accounts.display.Checking'
        ),
      },
      {
        applicationValue: this.accountTypes.SAVINGS,
        backendValue: kony.i18n.getLocalizedString(
          'kony.mb.Accounts.backend.Savings'
        ),
        displayValue: kony.i18n.getLocalizedString(
          'kony.mb.Accounts.display.Savings'
        ),
      },
      {
        applicationValue: this.accountTypes.CREDITCARD,
        backendValue: kony.i18n.getLocalizedString(
          'kony.mb.Accounts.backend.CreditCard'
        ),
        displayValue: kony.i18n.getLocalizedString(
          'kony.mb.Accounts.display.CreditCard'
        ),
      },
      {
        applicationValue: this.accountTypes.DEPOSIT,
        backendValue: kony.i18n.getLocalizedString(
          'kony.mb.Accounts.backend.Deposit'
        ),
        displayValue: kony.i18n.getLocalizedString(
          'kony.mb.Accounts.display.Deposit'
        ),
      },
      {
        applicationValue: this.accountTypes.MORTGAGE,
        backendValue: kony.i18n.getLocalizedString(
          'kony.mb.Accounts.backend.Mortgage'
        ),
        displayValue: kony.i18n.getLocalizedString(
          'kony.mb.Accounts.display.Mortgage'
        ),
      },
      {
        applicationValue: this.accountTypes.LOAN,
        backendValue: kony.i18n.getLocalizedString(
          'kony.mb.Accounts.backend.Loan'
        ),
        displayValue: kony.i18n.getLocalizedString(
          'kony.mb.Accounts.display.Loan'
        ),
      },
      {
        applicationValue: this.accountTypes.CURRENT,
        backendValue: kony.i18n.getLocalizedString(
          'kony.mb.Accounts.backend.Current'
        ),
        displayValue: kony.i18n.getLocalizedString(
          'kony.mb.Accounts.display.Current'
        ),
      },
      {
        applicationValue: this.accountTypes.LINE_OF_CREDIT,
        backendValue: kony.i18n.getLocalizedString(
          'kony.mb.Accounts.backend.LineOfCredit'
        ),
        displayValue: kony.i18n.getLocalizedString(
          'kony.mb.Accounts.display.LineOfCredit'
        ),
      },
      {
        applicationValue: this.accountTypes.EXTERNAL,
        backendValue: kony.i18n.getLocalizedString(
          'kony.mb.Accounts.backend.External'
        ),
        displayValue: kony.i18n.getLocalizedString(
          'kony.mb.Accounts.display.External'
        ),
      },
    ];
    /**@member {OBJECT}  Contains all constants*/
    this.constants = {
      MENUCHEQUEMANAGEMENT:kony.i18n.getLocalizedString('kony.mb.CM.chequeManagement'),
      IDLE_TIMEOUT: 5,
      TRAVELPLANS_DESTINATION_LIMIT: 5,
      IDENTITYSERVICENAME: 'DbxUserLogin',
      WEEKLY: 'Weekly',
      DAILY: 'Daily',
      MONTHLY: 'Monthly',
      BIWEEKLY: 'Biweekely',
      SERVICE_NAME: 'RBSERVICES',
      LOADING_SCREEN_MESSAGE: 'Loading ...',
      CHECKING: 'Checking',
      SAVINGS: 'Savings',
      CREDITCARD: 'CreditCard',
      DEPOSIT: 'Deposit',
      MORTGAGE: 'Mortgage',
      LOAN: 'Loan',
      EXTERNAL_BANK_ACCOUNT: 'ExternalBankAccount',
      HEADERFAQ: kony.i18n.getLocalizedString('kony.mb.Support.HeaderFAQ'),
      HEADERPRIVACYPOLICY: kony.i18n.getLocalizedString(
        'kony.mb.Support.HeaderPrivacyPolicy'
      ),
      HEADERABOUTUS: kony.i18n.getLocalizedString(
        'kony.mb.Support.HeaderAbout'
      ),
      HEADERTERMSANDCONDITIONS: kony.i18n.getLocalizedString(
        'kony.mb.Support.HeaderTC'
      ),
      FAQ: kony.i18n.getLocalizedString('kony.mb.Support.FAQ'),
      PRIVACY: kony.i18n.getLocalizedString('kony.mb.Support.Privacy'),
      TERMS: kony.i18n.getLocalizedString('kony.mb.Support.Terms'),
      ABOUT: kony.i18n.getLocalizedString('kony.mb.Support.Aboutus'),
      Last7days: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.Last7days'
      ),
      Last14days: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.last14days'
      ),
      Last1Month: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.last1month'
      ),
      Last2Months: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.last2months'
      ),
      Last3Months: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.last3months'
      ),
      Last6Months: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.last6months'
      ),
      Last12Months: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.last12months'
      ),
      Last30days: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.Last30days'
      ),
      Last60days: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.Last60days'
      ),
      CustomRange: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.CustomRange'
      ),
      Withdrawals: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.Withdrawals'
      ),
      Deposits: kony.i18n.getLocalizedString('kony.mb.AdvanceSearch.Deposits'),
      P2PDebits: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.P2PDebits'
      ),
      BillPay: kony.i18n.getLocalizedString('kony.mb.AdvanceSearch.BillPay'),
      Transfers: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.Transfers'
      ),
      Checks: kony.i18n.getLocalizedString('kony.mb.AdvanceSearch.Checks'),
      P2PCredits: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.P2PCredits'
      ),
      Issued: kony.i18n.getLocalizedString('kony.mb.chequemgmt.issued'),
      Cleared: kony.i18n.getLocalizedString(
        'kony.mb.chequemgmt.cleared'
      ),
      Returned: kony.i18n.getLocalizedString('kony.mb.chequemgmt.returned'),
      Stopped: kony.i18n.getLocalizedString(
        'kony.mb.chequemgmt.stopped'
      ),
      ChequeStolen: kony.i18n.getLocalizedString('kony.mb.CM.chequeStolen'),
      FundsNotAvailable: kony.i18n.getLocalizedString(
        'kony.mb.CM.fundsNotAvailable'
      ),
      ChequeLost: kony.i18n.getLocalizedString('kony.mb.CM.chequeLost'),
      ChequeDestroyed: kony.i18n.getLocalizedString(
        'kony.mb.CM.chequeDestroyed'
      ),
      MENUACCOUNTS: kony.i18n.getLocalizedString('kony.mb.Hamburger.Accounts'),
      MENUTRANSFERS: kony.i18n.getLocalizedString(
        'kony.mb.Hamburger.Transfers'
      ),
      MENUUNIFIEDTRANSFERSFLOW: kony.i18n.getLocalizedString(
        'kony.mb.Hamburger.unifiedTransfersFlow'
      ),
      MENUMONEYMOVEMENTTRANSFERS: kony.i18n.getLocalizedString(
        'kony.mb.Hamburger.MoneyMovementTransfers'
      ),
      MENUTRANSFERSACTIVITY: kony.i18n.getLocalizedString(
        'kony.mb.transfers.ManageTransactions'
      ),
      MENUMANAGERECIPIENTS: kony.i18n.getLocalizedString(
        'kony.mb.TransfersEurope.ManageBeneficiaries'
      ),
      MENUDISPUTE: kony.i18n.getLocalizedString(
        'kony.mb.disputedTransactions.DisputedTransactions'
      ),
      MENUOPENACOUNT: kony.i18n.getLocalizedString(
        'kony.mb.Hamburger.OpenAccount'
      ),
      MENUACCOUNTSTATEMENTS:kony.i18n.getLocalizedString('kony.mb.Hamburger.AccountStatements'),
      MENUENGAGE: kony.i18n.getLocalizedString('kony.mb.Hamburger.Engage'),
      MENUMESSAGES: kony.i18n.getLocalizedString('kony.mb.Hamburger.Messages'),
      MENUNOTIFICATIONS: kony.i18n.getLocalizedString('kony.mb.Hamburger.Notifications'),
      MENUSETTINGS: kony.i18n.getLocalizedString('kony.mb.Hamburger.Settings'),
      MENUCHATBOT: kony.i18n.getLocalizedString('kony.mb.Hamburger.chatbot'),
      MENULOCATE: kony.i18n.getLocalizedString('kony.mb.Hamburger.Locateus'),
      MENUWEALTHDASHBOARD: 'Wealth',
      MENUWEALTHWATCHLIST: 'Watchlist',
      MENUCONTACT: kony.i18n.getLocalizedString('kony.mb.Hamburger.Contactus'),
      MENUMYWALLET: kony.i18n.getLocalizedString('kony.mb.Hamburger.Mywallet'),
      MENUBILLPAY: kony.i18n.getLocalizedString('kony.mb.Hamburger.BillPay'),
      MENUFEEDBACK: kony.i18n.getLocalizedString('kony.mb.Hamburger.FeedBack'),
      MENUCHECKDEPOSIT: kony.i18n.getLocalizedString(
        'kony.mb.Hamburger.CheckDeposit'
      ),
      MENUCARDLESS: kony.i18n.getLocalizedString(
        'kony.mb.Hamburger.CardLessCash'
      ),
      MENUCARDMANAGEMENT: kony.i18n.getLocalizedString(
        'kony.mb.Hamburger.CardManagement'
      ),
      MENUMANAGEOTHERBANKACCOUNTS: kony.i18n.getLocalizedString(
        'kony.mb.ExternalAccounts.ManageOtherBankAccounts'
      ),
      MENUPFMMYMONEY: kony.i18n.getLocalizedString('kony.mb.PFMMyMoney'),
      MENUSENDMONEY: kony.i18n.getLocalizedString('kony.mb.Transfer.SendMoney'),
      MENUACH: kony.i18n.getLocalizedString('kony.mb.Hamburger.ACH'),
      MENUAPPROVALREQUEST: kony.i18n.getLocalizedString(
        'kony.mb.Hamburger.ApprovalRequest'
      ),
      MENUUSERMANAGEMENT: kony.i18n.getLocalizedString(
        'kony.mb.Hamburger.UserManagement'
      ),
      MENUFOREIGNEXCHANGE: kony.i18n.getLocalizedString(
        'kony.mb.Hamburger.exchangeRates'
      )
    };
    this.reloadConstants();
    /**@member {Array} quickActionItems holds the list of action items required for transaction*/
    if (this.isFastTransfersFlowEnabled()){
      this.quickActionItems = [
        {
          id: 'ATM finder',
          title: 'Find an ATM',
          subtitle: '',
          icon: kony.forcetouch.QUICK_ACTION_ICON_TYPE_LOCATION,
          info: null,
        },
        {
          id: 'Pay a Bill',
          title: 'Pay a Bill',
          subtitle: '',
          icon: kony.forcetouch.QUICK_ACTION_ICON_TYPE_DATE,
          info: null,
        },
        {
          id: 'Money Movement',
          title: 'Transfer Money',
          subtitle: '',
          icon: kony.forcetouch.QUICK_ACTION_ICON_TYPE_SHUFFLE,
          info: null,
        },
        {
          id: 'New Check Deposit',
          title: 'Deposit Check',
          subtitle: '',
          icon: kony.forcetouch.QUICK_ACTION_ICON_TYPE_CAPTUREPHOTO,
          info: null,
        },
      ];
    }
    else {
      this.quickActionItems = [
        {
          id: 'ATM finder',
          title: 'Find an ATM',
          subtitle: '',
          icon: kony.forcetouch.QUICK_ACTION_ICON_TYPE_LOCATION,
          info: null,
        },
        {
          id: 'Pay a Bill',
          title: 'Pay a Bill',
          subtitle: '',
          icon: kony.forcetouch.QUICK_ACTION_ICON_TYPE_DATE,
          info: null,
        },
        {
          id: 'Transfer Money',
          title: 'Transfer Money',
          subtitle: '',
          icon: kony.forcetouch.QUICK_ACTION_ICON_TYPE_SHUFFLE,
          info: null,
        },
        {
          id: 'New Check Deposit',
          title: 'Deposit Check',
          subtitle: '',
          icon: kony.forcetouch.QUICK_ACTION_ICON_TYPE_CAPTUREPHOTO,
          info: null,
        },
      ];
    }
    /**@member {Array} accountTypesMetaData holds the list of different account types*/
    this.accountTypesMetaData = [
      {
        applicationValue: this.constants.CHECKING,
        backendValue: kony.i18n.getLocalizedString('i18n.Accounts.backendChecking'),
        displayValue: kony.i18n.getLocalizedString('i18n.Accounts.displayChecking'),
      },
      {
        applicationValue: this.constants.SAVINGS,
        backendValue: kony.i18n.getLocalizedString('i18n.Accounts.backendSavings'),
        displayValue: kony.i18n.getLocalizedString('i18n.Accounts.displaySavings'),
      },
      {
        applicationValue: this.constants.CREDITCARD,
        backendValue: kony.i18n.getLocalizedString('i18n.Accounts.backendCreditCard'),
        displayValue: kony.i18n.getLocalizedString('i18n.Accounts.displayCreditCard'),
      },
      {
        applicationValue: this.constants.DEPOSIT,
        backendValue: kony.i18n.getLocalizedString('i18n.Accounts.backendDeposit'),
        displayValue: kony.i18n.getLocalizedString('i18n.Accounts.displayDeposit'),
      },
      {
        applicationValue: this.constants.MORTGAGE,
        backendValue: kony.i18n.getLocalizedString('i18n.Accounts.backendMortgage'),
        displayValue: kony.i18n.getLocalizedString('i18n.Accounts.displayMortgage'),
      },
      {
        applicationValue: this.constants.LOAN,
        backendValue: kony.i18n.getLocalizedString('i18n.Accounts.backendLoan'),
        displayValue: kony.i18n.getLocalizedString('i18n.Accounts.displayLoan'),
      },
    ];
    /**@member {Array} unreadMessageCount holds the count of unread message count */
    this.unreadMessageCount = 0;
    /**@member {Array} maritalStatus holds the list of different marital status*/
    this.maritalStatus = [
      ['Single', 'Single'],
      ['Married', 'Married'],
      ['Widowed', 'Widowed'],
      ['Divorced', 'Divorced'],
    ];
    /**@member {Array} numberOfDependents holds the list of different dependent numbers*/
    this.numberOfDependents = [
      ['0', '00'],
      ['1', '01'],
      ['2', '02'],
      ['3', '03'],
      ['4', '04'],
      ['5', '05'],
      ['6', '06'],
      ['7', '07'],
      ['8', '08'],
    ];
    /**@member {Array} gender holds the list of different genders*/
    this.gender = [['Male', 'Male'], ['Female', 'Female']];
    /**@member {Array} employmentInfoYears holds the list of different employement information years*/
    this.employmentInfoYears = [
      ['0 year', '1 year', '0'],
      ['1 year', '2 years', '1'],
      ['2 years', '3 years', '2'],
      ['3 years', '4 years', '3'],
      ['4 years', '5 years', '4'],
      ['5 years', '6 years', '5'],
      ['6 years', '7 years', '6'],
      ['7 years', '8 years', '7'],
      ['8 years', '9 years', '8'],
      ['9 years', '10 years', '9'],
      ['10 years', '11 years', '10'],
    ];
    /**@member {Array} annualIncome holds the list of different annual Incomes*/
    this.annualIncome = [
      ['0', '25000', '0'],
      ['25001', '50000', '1'],
      ['50001', '100000', '2'],
      ['100001', '200000', '3'],
      ['200001', '300000', '4'],
      ['300001', '500000', '5'],
      ['500001', '1200000', '6'],
      ['1200001', '9999999', '7'],
    ];
    /**@member {Array} assets holds the list of different assets*/
    this.assets = [
      ['0', '25000', '0'],
      ['25001', '50000', '1'],
      ['50001', '100000', '2'],
      ['100001', '200000', '3'],
      ['200001', '300000', '4'],
      ['300001', '500000', '5'],
      ['500001', '1200000', '6'],
      ['1200001', '9999999', '7'],
    ];
    /**@member {Array} monthlyExpenditure holds the list of different monthly expenditures*/
    this.monthlyExpenditure = [
      ['0', '25000', '0'],
      ['25001', '50000', '1'],
      ['50001', '100000', '2'],
      ['100001', '200000', '3'],
      ['200001', '300000', '4'],
      ['300001', '500000', '5'],
      ['500001', '1200000', '6'],
      ['1200001', '9999999', '7'],
    ];
    /**@member {Array} employmentTypeValues holds the list of different employment type values*/
    this.employmentTypeValues = [
      'Employed',
      'Unemployed',
      'Retired',
      'Student',
    ];
    this.DisputeReason = [
      applicationManager.getPresentationUtility().getStringFromi18n("i18n.StopPayments.disputeTransaction.dontRecognise"),
      applicationManager.getPresentationUtility().getStringFromi18n("i18n.StopPayments.disputeTransaction.GoodsAndService"),
      applicationManager.getPresentationUtility().getStringFromi18n("i18n.StopCheckPayments.BillingError"),
      applicationManager.getPresentationUtility().getStringFromi18n("i18n.StopPayments.disputeTransaction.duplicate"),
      applicationManager.getPresentationUtility().getStringFromi18n("i18n.StopPayments.disputeTransaction.recurringTransaction")
    ];
    /**@member {Array} hamburgerMenuItems holds the list of HamburgerMenu Items*/
    if(!this.isFastTransfersFlowEnabled()){
      this.hamburgerMenuItems = [
        {
          img: 'accounts.png',
          text: this.constants.MENUACCOUNTS,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHWATCHLIST,
          info: null,
        },
        {
          img: 'transfer.png',
          text: this.constants.MENUTRANSFERS,
          info: null,
        },
        {
          img: 'transfer.png',
          text: this.constants.MENUUNIFIEDTRANSFERSFLOW,
          info: null,
        },
        {
          img: 'chequemgmt.png',
          text: this.constants.MENUCHEQUEMANAGEMENT,
          info: null,
        },
        {
          img: 'billpay.png',
          text: this.constants.MENUBILLPAY,
          info: null,
        },
        {
          img: 'checkdepositimg.png',
          text: this.constants.MENUCHECKDEPOSIT,
          info: null,
        },
        {
          img: 'cardlesscash.png',
          text: this.constants.MENUCARDLESS,
          info: null,
        },
        {
          img: 'cardmange.png',
          text: this.constants.MENUCARDMANAGEMENT,
          info: null,
        },{
          img: 'disputetransaction.png',
          text: this.constants.MENUDISPUTE,
          info: null,
        },
        {
          img: 'mangeothrbank.png',
          text: this.constants.MENUMANAGEOTHERBANKACCOUNTS,
          info: null,
        },
        {
          img: 'opennew.png',
          text: this.constants.MENUOPENACOUNT,
          info: null,
        },
        {
          img: 'mymoney.png',
          text: this.constants.MENUPFMMYMONEY,
          info: null,
        },
        {
          img: 'engagemenu.png',
          text: this.constants.MENUENGAGE,
          info: null,
        },
        {
          img: 'menuaccounts.png',
          text: this.constants.MENUACCOUNTSTATEMENTS,
          info: null,
        },
        {
          img: 'message.png',
          text: this.constants.MENUMESSAGES,
          info: null,
        },
        {
          img: 'notification.png',
          text: this.constants.MENUNOTIFICATIONS,
          info: null,
        },
        {
          img: 'settings.png',
          text: this.constants.MENUSETTINGS,
          info: null,
        },
        {
          img: 'locateus.png',
          text: this.constants.MENULOCATE,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHDASHBOARD,
          info: null,
        }, 
        {
          img: 'feedbackmenu.png',
          text: this.constants.MENUFEEDBACK,
          info: null,
        },
        {
          img: 'contactus.png',
          text: this.constants.MENUCONTACT,
          info: null,
        },
      ];
      if (this.getDeploymentGeography() === "EUROPE") {
        var itemsToInsert = [
          {
            img: 'payapersonsmall.png',
            text: this.constants.MENUSENDMONEY,
            info: null
          }, 
          {
            img: 'transferactivities.png',
            text: this.constants.MENUTRANSFERSACTIVITY,
            info: null,
          },
          {
            img: 'managetransferrecipients.png',
            text: this.constants.MENUMANAGERECIPIENTS,
            info: null,
          }
        ];
        this.hamburgerMenuItems.splice.apply(this.hamburgerMenuItems, [2,0].concat(itemsToInsert));
      }
    }
    else{
      this.hamburgerMenuItems = [
        {
          img: 'accounts.png',
          text: this.constants.MENUACCOUNTS,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHWATCHLIST,
          info: null,
        },
        {
          img: 'transfer.png',
          text: this.constants.MENUMONEYMOVEMENTTRANSFERS,
          info: null,
        },
        {
          img: 'chequemgmt.png',
          text: this.constants.MENUCHEQUEMANAGEMENT,
          info: null,
        },
        {
          img: 'transferactivities.png',
          text: this.constants.MENUTRANSFERSACTIVITY,
          info: null,
        },

        {
          img: 'transfer.png',
          text: this.constants.MENUUNIFIEDTRANSFERSFLOW,
          info: null,
        },
        {
          img: 'managetransferrecipients.png',
          text: this.constants.MENUMANAGERECIPIENTS,
          info: null,
        },
        {
          img: 'billpay.png',
          text: this.constants.MENUBILLPAY,
          info: null,
        },
        {
          img: 'checkdepositimg.png',
          text: this.constants.MENUCHECKDEPOSIT,
          info: null,
        },
        {
          img: 'cardlesscash.png',
          text: this.constants.MENUCARDLESS,
          info: null,
        },
        {
          img: 'cardmange.png',
          text: this.constants.MENUCARDMANAGEMENT,
          info: null,
        },{
          img: 'disputetransaction.png',
          text: this.constants.MENUDISPUTE,
          info: null,
        },
        {
          img: 'mangeothrbank.png',
          text: this.constants.MENUMANAGEOTHERBANKACCOUNTS,
          info: null,
        },
        {
          img: 'opennew.png',
          text: this.constants.MENUOPENACOUNT,
          info: null,
        },
        {
          img: 'mymoney.png',
          text: this.constants.MENUPFMMYMONEY,
          info: null,
        },
        {
          img: 'engagemenu.png',
          text: this.constants.MENUENGAGE,
          info: null,
        },
        {
          img: 'menuaccounts.png',
          text: this.constants.MENUACCOUNTSTATEMENTS,
          info: null,
        },
        {
          img: 'message.png',
          text: this.constants.MENUMESSAGES,
          info: null,
        },
        {
          img: 'notification.png',
          text: this.constants.MENUNOTIFICATIONS,
          info: null,
        },
        {
          img: 'settings.png',
          text: this.constants.MENUSETTINGS,
          info: null,
        },
        {
          img: 'locateus.png',
          text: this.constants.MENULOCATE,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHDASHBOARD,
          info: null,
        }, 
        {
          img: 'feedbackmenu.png',
          text: this.constants.MENUFEEDBACK,
          info: null,
        },
        {
          img: 'contactus.png',
          text: this.constants.MENUCONTACT,
          info: null,
        },
      ];
    }
    this.masterHamburgerData = this.hamburgerMenuItems;
    /**@member {Array} moreMenuItems holds the list of more MenuItems*/
    if(this.isFastTransfersFlowEnabled()){
      this.moreMenuItems = [
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHWATCHLIST,
          info: null,
        },
        {
          img: 'checkdepositimg.png',
          text: this.constants.MENUCHECKDEPOSIT,
          info: null,
        },
        {
          img: 'transferactivities.png',
          text: this.constants.MENUTRANSFERSACTIVITY,
          info: null,
        },
        {
          img: 'transfer.png',
          text: this.constants.MENUUNIFIEDTRANSFERSFLOW,
          info: null,
        },
        {
          img: 'chequemgmt.png',
          text: this.constants.MENUCHEQUEMANAGEMENT,
          info: null,
        },
        {
          img: 'managetransferrecipients.png',
          text: this.constants.MENUMANAGERECIPIENTS,
          info: null,
        },
        {
          img: 'cardlesscash.png',
          text: this.constants.MENUCARDLESS,
          info: null,
        },
        {
          img: 'cardmange.png',
          text: this.constants.MENUCARDMANAGEMENT,
          info: null,
        },{
          img: 'disputetransaction.png',
          text: this.constants.MENUDISPUTE,
          info: null,
        },
        {
          img: 'mangeothrbank.png',
          text: this.constants.MENUMANAGEOTHERBANKACCOUNTS,
          info: null,
        },
        {
          img: 'opennew.png',
          text: this.constants.MENUOPENACOUNT,
          info: null,
        },
        {
          img: 'mymoney.png',
          text: this.constants.MENUPFMMYMONEY,
          info: null,
        },
        {
          img: 'engagemenu.png',
          text: this.constants.MENUENGAGE,
          info: null,
        },
        {
          img: 'menuaccounts.png',
          text: this.constants.MENUACCOUNTSTATEMENTS,
          info: null,
        },
        {
          img: 'message.png',
          text: this.constants.MENUMESSAGES,
          info: null,
        },
        {
          img: 'notification.png',
          text: this.constants.MENUNOTIFICATIONS,
          info: null,
        },
        {
          img: 'settings.png',
          text: this.constants.MENUSETTINGS,
          info: null,
        },
        {
          img: 'locateus.png',
          text: this.constants.MENULOCATE,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHDASHBOARD,
          info: null,
        }, 
        {
          img: 'feedbackmenu.png',
          text: this.constants.MENUFEEDBACK,
          info: null,
        },
        {
          img: 'contactus.png',
          text: this.constants.MENUCONTACT,
          info: null,
        },
      ];
    }
    else{
      this.moreMenuItems = [
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHWATCHLIST,
          info: null,
        },
        {
          img: 'checkdepositimg.png',
          text: this.constants.MENUCHECKDEPOSIT,
          info: null,
        },
        {
          img: 'chequemgmt.png',
          text: this.constants.MENUCHEQUEMANAGEMENT,
          info: null,
        },
        {
          img: 'cardlesscash.png',
          text: this.constants.MENUCARDLESS,
          info: null,
        },
        {
          img: 'cardmange.png',
          text: this.constants.MENUCARDMANAGEMENT,
          info: null,
        },{
          img: 'disputetransaction.png',
          text: this.constants.MENUDISPUTE,
          info: null,
        },
        {
          img: 'mangeothrbank.png',
          text: this.constants.MENUMANAGEOTHERBANKACCOUNTS,
          info: null,
        },
        {
          img: 'opennew.png',
          text: this.constants.MENUOPENACOUNT,
          info: null,
        },
        {
          img: 'mymoney.png',
          text: this.constants.MENUPFMMYMONEY,
          info: null,
        },
        {
          img: 'engagemenu.png',
          text: this.constants.MENUENGAGE,
          info: null,
        },
        {
          img: 'menuaccounts.png',
          text: this.constants.MENUACCOUNTSTATEMENTS,
          info: null,
        },
        {
          img: 'message.png',
          text: this.constants.MENUMESSAGES,
          info: null,
        },
        {
          img: 'notification.png',
          text: this.constants.MENUNOTIFICATIONS,
          info: null,
        },
        {
          img: 'settings.png',
          text: this.constants.MENUSETTINGS,
          info: null,
        },
        {
          img: 'locateus.png',
          text: this.constants.MENULOCATE,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHDASHBOARD,
          info: null,
        }, 
        {
          img: 'feedbackmenu.png',
          text: this.constants.MENUFEEDBACK,
          info: null,
        },
        {
          img: 'contactus.png',
          text: this.constants.MENUCONTACT,
          info: null,
        },
      ];
      if (this.getDeploymentGeography() === "EUROPE") {
        var itemsToInsert = [
          {
            img: 'payapersonsmall.png',
            text: this.constants.MENUSENDMONEY,
            info: null
          }, 
          {
            img: 'transferactivities.png',
            text: this.constants.MENUTRANSFERSACTIVITY,
            info: null,
          },
          {
            img: 'managetransferrecipients.png',
            text: this.constants.MENUMANAGERECIPIENTS,
            info: null,
          }
        ];
        this.moreMenuItems.splice.apply(this.moreMenuItems, [2, 0].concat(itemsToInsert));
      }
    }
    this.mastermoreMenuItems = this.moreMenuItems;
    /**@member {Array} iPhoneMenuItems holds the list of iPhone MenuItems*/
    if(!this.isFastTransfersFlowEnabled()){
      this.iPhoneMenuItems = [
        {
          img: 'accounts.png',
          text: this.constants.MENUACCOUNTS,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHWATCHLIST,
          info: null,
        },
        {
          img: 'transfer.png',
          text: this.constants.MENUTRANSFERS,
          info: null,
        },
      ];
    }
    else{
      this.iPhoneMenuItems = [
        {
          img: 'accounts.png',
          text: this.constants.MENUACCOUNTS,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHWATCHLIST,
          info: null,
        },
        {
          img: 'transfer.png',
          text: this.constants.MENUMONEYMOVEMENTTRANSFERS,
          info: null,
        },
      ];
    }
    /**@member {Array} moreMenuItemsIpad holds the list of more MenuItems for Ipad*/
    this.moreMenuItemsIpad = [
      {
        img: 'billpay.png',
        text: this.constants.MENUBILLPAY,
        info: null,
      },
      {
        img: 'cardlesscash.png',
        text: this.constants.MENUCARDLESS,
        info: null,
      },
      {
        img: 'cardmange.png',
        text: this.constants.MENUCARDMANAGEMENT,
        info: null,
      },
      //     {
      //        "img": "mangeothrbank.png",
      //        "text": this.constants.MENUMANAGEOTHERBANKACCOUNTS,
      //        "info": null
      //     },
      //     {
      //       "img": "opennew.png",
      //       "text": this.constants.MENUOPENACOUNT,
      //       "info":null
      //     },
      //       {
      //    "img": "billpay.png",
      //        "text": this.constants.MENUPFMMYMONEY,
      //        "info":null
      //      },
      {
        img: 'settings.png',
        text: this.constants.MENUSETTINGS,
        info: null,
      },
      {
        img: 'locateus.png',
        text: this.constants.MENULOCATE,
        info: null,
      },
      {
        img: 'accounts.png',
        text: this.constants.MENUWEALTHDASHBOARD,
        info: null,
      }, 
      {
        img: 'feedbackmenu.png',
        text: this.constants.MENUFEEDBACK,
        info: null,
      },
      {
        img: 'contactus.png',
        text: this.constants.MENUCONTACT,
        info: null,
      },
    ];
    this.mastermoreMenuItemsIpad = JSON.parse(
      JSON.stringify(this.moreMenuItemsIpad)
    );
    /**@member {Array} iPhoneMenuItems holds the list of iPhone MenuItems*/
    if(!this.isFastTransfersFlowEnabled()){
      this.iPhoneMenuItems = [
        {
          img: 'accounts.png',
          text: this.constants.MENUACCOUNTS,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHWATCHLIST,
          info: null,
        },
        {
          img: 'transfer.png',
          text: this.constants.MENUTRANSFERS,
          info: null,
        },
        {
          img: 'billpay.png',
          text: this.constants.MENUBILLPAY,
          info: null,
        },
      ];
    }
    else{
      this.iPhoneMenuItems = [
        {
          img: 'accounts.png',
          text: this.constants.MENUACCOUNTS,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHWATCHLIST,
          info: null,
        },
        {
          img: 'transfer.png',
          text: this.constants.MENUMONEYMOVEMENTTRANSFERS,
          info: null,
        },
        {
          img: 'billpay.png',
          text: this.constants.MENUBILLPAY,
          info: null,
        },
      ];
    }
    /**@member {Array} iPadMenuItems holds the list of iPad MenuItems*/
    this.iPadMenuItems = [
      {
        img: 'accounts.png',
        text: this.constants.MENUACCOUNTS,
        info: null,
      },
      {
        img: 'accounts.png',
        text: this.constants.MENUWEALTHWATCHLIST,
        info: null,
      },
      {
        img: 'maketransfer.png',
        text: this.constants.MENUTRANSFERS,
        info: null,
      },
      {
        img: 'transfer.png',
        text: this.constants.MENUUNIFIEDTRANSFERSFLOW,
        info: null,
      },
      {
        img: 'billpay.png',
        text: this.constants.MENUBILLPAY,
        info: null,
      },
      {
        img: 'checkdepositimg.png',
        text: this.constants.Deposits,
        info: null,
      },
      {
        img: 'message.png',
        text: this.constants.MENUMESSAGES,
        info: null,
      },
    ];
    /**@member {Array} denominationAmountValues holds the list of different denomination amount values*/
    this.denominationAmountValues = ['50', '100', '150', '300', '500', '1000'];
    /**@member {Boolean} value used in custom metrics*/
    this.CustomMetricsEnabled = true;
    /**@member {object} value Olb specific constants*/
    this.OLBConstants = {
      DEFAULT_OFFSET: 0,
      DEFAULT_T24_OFFSET: 1,
      PAGING_ROWS_LIMIT: 10,
      ACCOUNT_LIST_NAME_MAX_LENGTH: 32,
      WIRE_ACTIVITY_LIMIT: 12,
      ASCENDING_KEY: 'asc',
      DESCENDING_KEY: 'desc',
      NOTES_LENGTH: 50,
      CALENDAR_ALLOWED_FUTURE_YEARS: 3,
      ALL: 'All',
      PENDING: 'pending',
      SUCCESSFUL: 'successful',
      BOTH: 'Both',
      CURRENCY_NAME: 'Dollar',
      ANY_DATE: 'ANY_DATE',
      CHOOSE_TIME_RANGE: 'CHOOSE_TIME_RANGE',
      CUSTOM_DATE_RANGE: 'CUSTOM_DATE_RANGE',
      IBAN_MINIMUM_LENGTH: 22,
      IBAN_MAXIMUM_LENGTH: 34,
      CHECK_SERIES_SEPARATOR: '-',
      CHECK_REQUEST_TYPES: {
        SINGLE: 'Single',
        SERIES: 'Series',
      },
      DISPUTED_CHECKS: 'DisputesChecks',
      MY_CHEQUES:"MyCheques",  
      DISPUTED_TRANSACTIONS: 'DisputedTransactions',
      NOTES_MAX_LENGTH: 120,
      NOTES_MAXIMUM_LENGTH: 35,	   
      Channel: 'Online',
      MAX_CHECKS_COUNT: 50,
      OTPLength: 6,
      ACCOUNT_TYPE: {
        SAVING: 'Savings',
        CHECKING: 'Checking',
        CREDITCARD: 'CreditCard',
        LOAN: 'Loan',
        MORTGAGE: 'Mortgage',
        DEPOSIT: 'Deposit',
        OTHER: 'Other',
        EXTERNAL: 'External',
        CURRENT: 'Current',
        LINE_OF_CREDIT: 'Line of Credit',
      },
      TRANSACTION_TYPE: {
        CHECKS: 'Checks',
        DEPOSITS: 'Deposits',
        TRANSFERS: 'Transfers',
        WITHDRAWLS: 'Withdrawals',
        PAYMENTS: 'Payments',
        PURCHASES: 'Purchases',
        INTEREST: 'Interest',
        EXTERNALTRANSFER: 'ExternalTransfer',
        INTERNALTRANSFER: 'InternalTransfer',
        BILLPAY: 'BillPay',
        P2P: 'P2P',
        FEES: 'Fees',
        INTERESTDEBIT: 'InterestDebit',
        INTERESTCREDIT: 'InterestCredit',
        LOAN: 'Loan',
        STOPCHECKPAYMENTREQUEST: 'StopCheckPaymentRequest',
        DISPUTEDTRANSACTIONSREQUEST: 'DisputedTransactionRequest',
        WIRE: 'Wire',
        DEPOSIT: 'Deposit',
        CARDLESS: 'Cardless',
        CHECKWITHDRAWAL: 'CheckWithdrawal',
        WITHDRAWL: 'Withdrawal',
        RECEIVEDP2P: 'ReceivedP2P',
        RECEIVEDREQUEST: 'ReceivedRequest',
      },
      TRANSACTION_STATUS: {
        INPROGRESS: 'In-Progress',
        SUCCESSFUL: 'Successful',
        CLEARED: 'Cleared',
        REQUESTEXPIRED: 'Request Expired',
        FAILED: 'Failed',
        PENDING: 'Pending',
        STOPPED: 'Stopped',
      },
      TRANSACTION_RECURRENCE: {
        ONCE: 'Once',
        DAILY: 'Daily',
        WEEKLY: 'Weekly',
        BIWEEKLY: 'BiWeekly',
        MONTHLY: 'Monthly',
        YEARLY: 'Yearly',
        HALFYEARLY: 'Half Yearly',
        QUARTERLY: 'Quarterly',
        EVERYTWOWEEKS: 'Every Two Weeks',
      },
      ACTION: {
        SAVINGS_POT: 'Savings Pot',  
        ACCOUNT_ALERTS:'Account Alerts',
        REFRESH_ACCOUNT:'Refresh Account',
        DELETE_ACCOUNT:'Delete Account',
        ACCOUNT_PREFERENCES: 'Account Preferences',
        EDIT_ACCOUNT: 'Edit Account',
        TRANSFER_MONEY: 'Transfer Money',
        PAY_MONEY: 'Pay Money',
        VIEW_STATEMENTS: 'View Statements',
        UPDATE_ACCOUNT_SETTINGS: 'Update Account Settings',
        ORDER_CHECKS: 'Order Checks',
        REQUEST_OR_REPLACE_CARD: 'Request Card/Replace Card',
        GET_ASSISTANCE: 'Get Assistance',
        ECHECK_OR_ROUTING_DETAILS: 'eCheck/Routing Details',
        REWARDS_POINTS: 'Reward Points',
        PAY_A_PERSON_OR_SEND_MONEY: 'Send Money',
        PAY_DUE_AMOUNT: 'Pay Due Amount',
        PAY_A_BILL: 'Pay a Bill',
        MANAGE_CARD_OR_CARD_CONTROLS: 'Manage Card/Card Controls',
        REPORT_LOST_OR_STOLEN: 'Report Lost/Stolen',
        SETUP_NEW_PIN: 'Set up New PIN',
        LOCK_OR_DECACTICATE_CARD: 'Lock Card/Deactivate Card (Temporary)',
        TRAVEL_NOTIFICATION: 'Travel Notification',
        REMOVE_ACCOUNT: 'Remove Account',
        DOWNLOAD_STATEMENTS: 'Download Statements',
        ACCOUNT_SETTINGS: 'Account Settings',
        ACCOUNT_SERVICES: 'Account Services',
        PAYOFF_LOAN: 'Payoff Loan',
        EDIT_ACCOUNTS: 'Edit Accounts',
        SCHEDULED_TRANSACTIONS: 'Scheduled Transactions',
        MAKE_A_TRANSFER: 'Make A Transfer',
        MANAGE_CARDS : 'Manage Cards',
        VIEW_BILL: 'View Bill',
        SHOW_DISPUTE_TRANSACTION_FORM: 'ShowDisputeTransactionForm',
        SHOW_STOPCHECKS_FORM: 'ShowStopChecksForm',
        STOPCHECKS_PAYMENT: 'Stop Cheque Payment',
        SET_AS_FAVOURITE: 'Set as Favourite', 
        REMOVE_AS_FAVOURITE: 'Remove as Favourite',
        REQUEST_CHEQUE_BOOK: 'Request Cheque Book',
        REQUEST_CHEQUE_BOOK_FORM: 'showRequestChequeBookForm',
        VIEW_MYCHEQUES: 'My Cheques',
        VIEW_MYCHEQUES_FORM: 'showMyChequesForm',
        SHOW_DISPUTE_LIST: 'Disputed Transactions'
      },
      SAVINGS_POT_PERMISSIONS:{
        BUDGET_POT_VIEW : 'BUDGET_POT_VIEW',
        BUDGET_POT_EDIT: 'BUDGET_POT_EDIT',
        BUDGET_POT_CLOSE: 'BUDGET_POT_CLOSE',
        BUDGET_POT_ADHOC_FUND: 'BUDGET_POT_ADHOC_FUND',
        BUDGET_POT_CREATE: 'BUDGET_POT_CREATE',
        BUDGET_POT_WITHDRAW_FUND: 'BUDGET_POT_WITHDRAW_FUND',
        GOAL_POT_VIEW: 'GOAL_POT_VIEW',
        GOAL_POT_EDIT: 'GOAL_POT_EDIT',
        GOAL_POT_ADHOC_FUND: 'GOAL_POT_ADHOC_FUND',
        GOAL_POT_CREATE: 'GOAL_POT_CREATE',
        GOAL_POT_CLOSE: 'GOAL_POT_CLOSE',
        GOAL_POT_WITHDRAW_FUND: 'GOAL_POT_WITHDRAW_FUND'
      },
      TRANSFER_TYPES: {
        OWN_INTERNAL_ACCOUNTS: 'OWN_INTERNAL_ACCOUNTS',
        OTHER_INTERNAL_MEMBER: 'OTHER_INTERNAL_MEMBER',
        OTHER_EXTERNAL_ACCOUNT: 'OTHER_EXTERNAL_ACCOUNT',
        INTERNATIONAL_ACCOUNT: 'INTERNATIONAL_ACCOUNT',
        WIRE_TRANSFER: 'WIRE_TRANSFER',
      },
      MONTHS_FULL: {
        January: 'January',
        February: 'February',
        March: 'March',
        April: 'April',
        May: 'May',
        June: 'June',
        July: 'July',
        August: 'August',
        September: 'September',
        October: 'October',
        November: 'November',
        December: 'December',
      },
      CONFIG: {
        ACCOUNTS_QUICK_ACTIONS: {
          Savings: ['Transfer Money', 'Pay Money', 'Request Cheque Book', 'Stop Cheque Payment', 'My Cheques', 'Manage Cards', 'View Statements','Account Alerts','Refresh Account','Remove Account'],
          Checking: [
            'Transfer Money',
            'Pay Money',
            'Send Money',
            'Pay a Bill',
            'Request Cheque Book', 
            'Stop Cheque Payment', 
            'My Cheques',
            'Manage Cards',
            'View Statements',
            'Account Alerts',
            'Refresh Account',
            'Remove Account'
          ],
          CreditCard: [
            'Pay a Bill',
            'View Statements',
            'Account Alerts'
            //"Pay Due Amount" Not in scope
          ],
          Loan: [
            'Pay Due Amount',
            'View Statements',
            'Update Account Settings',
            'Account Alerts',
            'Payoff Loan'
          ],
          'Line of Credit': [
            //"Pay Due Amount",
            'View Statements',
            'Update Account Settings',
            'Account Alerts'
          ],
          Mortgage: [
            //"Pay Due Amount",
            'View Statements',
            'Update Account Settings',
            'Account Alerts'
          ],
          Deposit: ['View Statements', 'Update Account Settings', 'Account Alerts'],
        },
        EXTERNAL_ACCOUNT_QUICK_ACTIONS: [
          'Remove Account',
          //'Account Preferences',
          'Edit Account',
          'Refresh Account',
          'Delete Account'
        ],
        ACCOUNTS_RIGHTSIDE_ACTIONS: {
          Savings: ['Savings Pot', 'Make A Transfer', 'Request Cheque Book'],
          Checking: ['Savings Pot','Make A Transfer', 'Pay a Bill'],
          CreditCard: [
            'Scheduled Transactions',
            'View Statements',
            //"Pay Due Amount" Not in scope
          ],
          Loan: [
            'Pay Due Amount',
            'View Statements',
            'Update Account Settings',
          ],
          'Line of Credit': [
            //"Pay Due Amount", Not in scope
            'View Statements',
            'Update Account Settings',
          ],
          Mortgage: [
            //"Pay Due Amount", Not in scope
            'View Statements',
            'Update Account Settings',
          ],
          Deposit: ['View Statements', 'Update Account Settings'],
        },
        ACCOUNTS_SECONDARY_ACTIONS: {
          Savings: [
            'View Statements',
            'Request Cheque Book',
            'Stop Cheque Payment',
            'My Cheques',
            'Update Account Settings',
            'Scheduled Transactions',
            'Disputed Transactions'
            //"Order Checks", //Post R4
            //"Manage Card" //Post R4
          ],
          Checking: [
            'Send Money',
            'View Statements',
            'Request Cheque Book',
            'Stop Cheque Payment',
            'My Cheques',
            'Update Account Settings',
            'Scheduled Transactions',
            'Disputed Transactions'
            //"Order Checks", //Post R4
            //"Manage Card" //Post R4
          ],
          CreditCard: [
            'Pay a Bill',
            'Update Account Settings',
            'Disputed Transactions'
            //"Manage Card", //Post R4
            //"Report Lost/Stolen", //Post R4
            //"Lock Card/Deactivate Card", //Post R4
          ],
          Loan: ['Payoff Loan', 'Update Account Settings'],
          'Line of Credit': [
            //"Payoff Loan", Not in Scope
            'Update Account Settings',
          ],
          Mortgage: ['Update Account Settings'],
          Deposit: ['Update Account Settings'],
        },
      },
      CARD_TYPE: {
        Debit: 'Debit',
        Credit: 'Credit',
      },
      CARD_ACTION: {
        Lock: 'Lock Card',
        Unlock: 'Unlock Card',
        Replace: 'Replace Card',
        Report_Lost: 'Report Lost',
        Cancel: 'Cancel Card',
        Change_Pin: 'Change Pin',
        Set_Limits: 'Set Limits'
      },
      CARD_STATUS: {
        Active: 'Active',
        Locked: 'Locked',
        ReportedLost: 'Reported Lost',
        ReplaceRequestSent: 'Replace Request Sent',
        CancelRequestSent: 'Cancel Request Sent',
        Cancelled: 'Cancelled',
      },
      CARD_PRODUCT: {
        PlatinumCredit: 'My Platinum Credit Card',
        GoldDebit: 'Gold Debit Card',
        PremiumCredit: 'Premium Club Credit Card',
        ShoppingCard: 'Shopping Card',
        PetroCard: 'Petro Card',
        FoodCard: 'Eazee Food Card',
      },
      MFA_OPTIONS: {
        SECURE_ACCESS_CODE: 'Secure Access Code',
        SECURITY_QUESTIONS: 'Security Questions',
      },
      CHANGE_PIN_OFFLINE_OPTION: {
        EMAIL: 'E-mail ID',
        PHONE: 'Phone No',
        POSTAL_ADDRESS: 'Postal Address',
      },
      CARD_CHANGE_PIN_REASON: {
        PIN_COMPROMISED: 'PIN Compromised',
        FORGOT_PIN: 'Lost PIN',
      },
      CARD_REPORTLOST_REASON: {
        LOST: 'Lost',
        STOLEN: 'Stolen',
      },
      WireTransferConstants: {
        RECIPIENT_INDIVIDUAL: 'Individual',
        RECIPIENT_BUSINESS: 'Business',
        ACCOUNT_DOMESTIC: 'Domestic',
        ACCOUNT_INTERNATIONAL: 'International',
        DOMESTIC_COUNTRY: 'USA',
        DOMESTIC_COUNTRY_NAME: 'United States of America',
        DOMESTIC_DEFAULT_COUNTRY: 'United States',
        CURRENCIES: [
          {
            symbol: '£',
            name: 'Pound',
          },
          {
            symbol: '€',
            name: 'Euro',
          },
          {
            symbol: '₹',
            name: 'Rupee',
          },
          {
            symbol: '$',
            name: 'Dollar',
          },
        ],
      },

      BULKWIRETRANSFERCONSTANT : {
        CURRENCIES: [
          {
            name: '£',
            symbol: '£',
          },
          {
            name: '€',
            symbol: '€',
          },
          {
            name: '₹',
            symbol: '₹',
          },
          {
            name: '$',
            symbol: '$',
          },
        ],
      },

    };
    this.PFM_CATEGORIES_COLORS = {
      Home: '#FEDB64',
      Transport: '#3645A7',
      'Financial ': '#6753EC',
      Food: '#D6B9EA',
      Utilities: '#E87C5E',
      Health: '#04B6DF',
      Education: '#E8A75E',
      Other: '#B160DC',
      Travel: '#8ED174',
    };

    this.userPermissions = [];
    this.accountPermissions = {};
    this.userRole = null;
    this.features = [];
    this.europeConfiguration = {
      isPaymentMediumAvailable : true,
      isInternationalTransactionFeeEnabled : true
    };
    this.isDisputeConfigurationAdded = false;
    this.disputeDuration = null;

    this.disputeReasons = [];
    this.disputeConfigMap = {};
    this.disputeCDConfigMap = {};
    this.cutOffTimeBreachedOverride = false;
    this.cutOffProductOverride = false;
    this.awaitingFundsOverride = false;

    this.maxGoalAmount = 12000000;
    this.maxMonthlydebitAmount = 100000;
    this.maxMonths = 120;
    this.minBudgetAmount = 1;
    this.minGoalAmount = 1;
    this.minMonthlydebitAmount = 1;
    this.minMonths = 1;
    this.combinedStatementsAllowedPeriod = 6;
    this.dualBalanceConfig = '{"isAvailableBalanceToBeDisplayed":true}';
  }
  inheritsFrom(ConfigurationManager, kony.mvc.Business.Delegator);
  ConfigurationManager.prototype.initializeBusinessController = function() {};
  ConfigurationManager.prototype.resetConfigurationObject = function() {
    this.hamburgerMenuItems = JSON.parse(
      JSON.stringify(this.masterHamburgerData));
    this.moreMenuItems = JSON.parse(
      JSON.stringify(this.mastermoreMenuItems));
    this.moreMenuItemsIpad = this.mastermoreMenuItemsIpad;
    this.isKonyBankAccountsTransfer = 'false';
    this.isOtherKonyAccountsTransfer = 'false';
    this.isOtherBankAccountsTransfer = 'false';
    this.isInternationalAccountsTransfer = 'false';
    this.isDomesticWireTransferEnabled = 'false';
    this.isInternationalWireTransferEnabled = 'false';
    this.isBillPayEnabled = 'false';
    this.ispayAPersonEnabled = 'false';
    this.isRDCEnabled = 'false';
    this.isBusinessOwner = 'false';
    this.isDisputeConfigurationAdded = false;
    this.isWatchlistEnabled = 'false';
  };
  /**
   * Get Application properties form the device
   * @param {Function} - presentationSuccess will be called when call is successfull
   * @param {Function} - presentationError will be called when call is not successfull
   */
  ConfigurationManager.prototype.fetchApplicationProperties = function(
  presentationSuccess,
   presentationError
  ) {
    checkAppinit = false;
    var self = this;
    var applicationRepo = kony.mvc.MDAApplication.getSharedInstance()
    .getRepoManager()
    .getRepository('Application');
    var deviceInfo = applicationManager.getDeviceUtilManager().getDeviceInfo();
    var options = {
      OSType: deviceInfo.name,
      OSversion: deviceInfo.version,
      AppVersion: appConfig.appVersion,
    };
    applicationRepo.save(options, applicationRepoCompletionCallBack);
    function applicationRepoCompletionCallBack(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var res = srh.manageResponse(status, data, error);
      if (res['status']) {
        var config = applicationManager.getConfigurationManager();
        self.setConfigurationValue(
          'androidPhoneNativeAppLink',
          res['data'].playStoreLink
        );
        self.setConfigurationValue(
          'iphoneNativeAppLink',
          res['data'].appStoreLink
        );
        self.setConfigurationValue('BANNER_IMAGE', res['data'].bannerImageURL);
        self.setConfigurationValue('DESKTOP_BANNER_IMAGE', res['data'].desktopBannerImageURL);
        self.setConfigurationValue('MOBILE_BANNER_IMAGE', res['data'].mobileBannerImageURL);
        self.setConfigurationValue("LINK_TO_DBX",res['data'].viewMoreDBXLink);
        config.configurations.setItem('SecondTimeRating',res['data'].noOfDaysForAnotherAttemptForRating);
        config.configurations.setItem('FirstTransactionRating',res['data'].noOfDaysForRatingFromTransactions);
        config.configurations.setItem('FirstProfileRating',res['data'].noOfDaysForRatingFromProfile);
        config.configurations.setItem('NumberoftimesforRating',res['data'].maxtimesFeedbackperversion);
        config.configurations.setItem('MajorVersionforRating',res['data'].majorVersionsForFeedback);
        config.configurations.setItem('isPostLoginAdsEnabled',res['data'].showAdsPostLogin);
        config.configurations.setItem('BANNER_URL', res['data'].bannerURL);
        config.configurations.setItem('BANKNAME', res['data'].bankName);
        config.configurations.setItem('BUSINESSDAYS', res['data'].businessDays);
        config.configurations.setItem('OCRAPIKEY', res['data'].ocrApiKey);
        config.configurations.setItem('OCRSECRETKEY', res['data'].ocrSecretKey);
        config.configurations.setItem('isAccountCentricCore', res['data'].isAccountCentricCore);
        config.configurations.setItem('cardStatementYears', res['data'].cardStatementYears?res['data'].cardStatementYears:1);
        config.configurations.setItem(
          'FACIALLICENSESTRING',
          res['data'].facialLicenseString
        );
        config.configurations.setItem(
          'FACIALLICENSESERVERURL',
          res['data'].facialLicenseServerUrl
        );
        config.configurations.setItem(
          'ISUPDATEMANDATORY',
          res['data'].isUpdateMandatory
        );
        config.configurations.setItem('ISUPDATE', res['data'].isUpdate);
        config.configurations.setItem(
          'ISLANGUAGESELECTION',
          res['data'].isLanguageSelectionEnabled
        );
        config.configurations.setItem(
          'ISBACKENDCURRENCYSYMBOLENABLED',
          res['data'].isBackEndCurencySymbolEnabled
        );
        config.configurations.setItem(
          'ISCOUNTRYCODEENABLED',
          res['data'].isCountryCodeEnabled
        );
        config.configurations.setItem(
          'ISSORTCODEVISIBLE',
          res['data'].isSortCodeVisible
        );
        config.configurations.setItem(
          'ISUTCDATEFORMATTINGENABLED',
          res['data'].isUTCDateFormattingEnabled
        );
        config.configurations.setItem(
          'isAlertAccountIDLevel',
          res['data'].isAlertAccountIDLevel
        );
        config.configurations.setItem(
          'DEPLOYMENTGEOGRAPHY',
          res['data'].deploymentGeography
        );
        if (res['data'].isprofileImageAvailable !== undefined) {
          config.configurations.setItem(
            'isprofileImageAvailable',
            res['data'].isprofileImageAvailable
          );
        }
        config.configurations.setItem('BASECURRENCY', res['data'].currencyCode);
        config.configurations.setItem(
          'ISBUSINESSBANKINGENABLED',
          res['data'].isBusinessBankingEnabled
        );
        config.configurations.setItem("timeZoneOffset",res['data'].timeZoneOffset);
        if (res['data'].isFeedbackEnabled !== undefined) {
          config.configurations.setItem(
            'isFeedbackEnabled',
            res['data'].isFeedbackEnabled
          );
          config.configurations.setItem(
            'showFeedBackPostLogout',
            res['data'].isFeedbackEnabled
          );
        }
        if (res['data'].isAccountAggregationEnabled !== undefined) {
          self.isAggregatedAccountsEnabled =
            res['data'].isAccountAggregationEnabled;
          self.AggregatedExternalAccountEnabled =
            res['data'].isAccountAggregationEnabled === 'true' ? true : false;
        }
        if (res['data'].stopReasons !== undefined) {
          config.configurations.setItem(
            'stopReasons',
            config.getStopReasonsList(
              JSON.parse(res['data'].stopReasons)
            )
          );
        }
        if (res['data'].currenciesSupported !== undefined) {
          config.configurations.setItem(
            'currenciesSupported',
            config.getCurrenciesList(
              JSON.parse(res['data'].currenciesSupported)
            )
          );
        }
        if (res['data'].currencyCode !== undefined) {
          if (config.currencyCode[res['data'].currencyCode]) {
            config.configurations.setItem(
              'CURRENCYCODE',
              config.currencyCode[res['data'].currencyCode]
            );
          } else {
            config.configurations.setItem(
              'CURRENCYCODE',
              res['data'].currencyCode
            );
          }
        } else {
          config.configurations.setItem('CURRENCYCODE', 'USD');
        }
        if (res['data'].bwFileTransactionsLimit !== undefined) {
          self.bulkWireFileTransactionsLimit = res['data'].bwFileTransactionsLimit;
        }
        // TODO: Review/check once Engage Customer 360 config flag is ready.
        if (res['data'].isEngageEnabled !== undefined) {
          self.EngageEnabled = res['data'].isEngageEnabled;
        }
        config.setLocaleAndDateFormat(res);
        if (res['data'].deploymentGeography == "EUROPE" && !(scope_configManager.isCombinedUser==="true")) {
          scope_configManager.isFastTransferEnabled= "false";
          scope_configManager.fastTransfersFlowEnabled = "false";
        }
        //applicationManager.getPresentationUtility().dismissLoadingScreen();
        presentationSuccess(res['data']);
      } else {
        // alert("An error occured in fetch application properties" + res["errmsg"]);
        presentationError(res['errmsg']);
      }
    }
  };

  ConfigurationManager.prototype.getOffset = function() { 
    var timeZoneOffset =  this.configurations.getItem('timeZoneOffset'); //UTC+05:30 or UTC-11:00      
    if(timeZoneOffset!==undefined){
      var time = [];          
      var timeSplit;
      var pos;
      if(timeZoneOffset.indexOf("-")>=0){
        timeSplit =  timeZoneOffset.split("-");
        pos = "-";
      }          
      if(timeZoneOffset.indexOf("+")>=0){
        timeSplit =  timeZoneOffset.split("+");
        pos = "+";
      }          
      var hourMinute = timeSplit[1];             
      hourMinute = hourMinute.split(":");          
      var hour = Number(pos + hourMinute[0]);          
      var minute = Number(pos + hourMinute[1]);          
      time.push(hour);          
      time.push(minute);          
      return time;       
    }  
  }; 


  ConfigurationManager.prototype.fetchLimitsForAnAction = function(action, presentationSuccess, presentationError) {
    function completionCallback (status, data, error)  {
      var srh = applicationManager.getServiceResponseHandler();
      var res = srh.manageResponse(status, data, error);
      if (res["status"] === true) {
        presentationSuccess(res["data"]);
      } else {
        presentationError(res["errmsg"]);
      }
    }

    var CustomerLimitsRepo = kony.mvc.MDAApplication.getSharedInstance()
    .getRepoManager()
    .getRepository('CustomerLimits');
    CustomerLimitsRepo.customVerb("getCustomerActionLimits", {action: action},  completionCallback)
  }

  /**
   * Set user level permissions in an array
   * @param {array} permissions permissions array from identity
   */

  ConfigurationManager.prototype.setUserPermissions = function (permissions) {
    this.userPermissions = permissions;
  }

  /**
   * Sets the account level permissions in a map 
   * @param {object} accountPermissions Account permission array from identity
   */
  ConfigurationManager.prototype.setAccountPermissions = function (accountPermissions) {
    this.accountPermissions = accountPermissions;
  }

  /**
   * Check if user can perform a specific permission
   * @param {string} permission  Permission to check for
   */
  ConfigurationManager.prototype.checkUserPermission = function (permission) {
    return this.userPermissions.indexOf(permission) > -1;
  }

  /**
  * Delegates check user permission
  * @param {string} permission  Permission to check for
  */
  ConfigurationManager.prototype.delegateCheckUserPermission = function(permission) {
    return applicationManager.getConfigurationManager().checkUserPermission(permission);
  }

  /**
  * Check if user contains atleast one permission
  * @param {string} permission  Permission to check for
  */
  ConfigurationManager.prototype.checkAtLeastOnePermission = function(permissions) {
    return permissions.some(this.delegateCheckUserPermission);
  }

  /**
   * Check if an account can be used for a specific action
   * @param {string} accountId Account id for which action needs to checked
   * @param {string} action Action to check for
   */
  ConfigurationManager.prototype.checkAccountAction = function (accountId, action) {
    if(!kony.sdk.isNullOrUndefined(this.accountPermissions[accountId]))
      return this.accountPermissions[accountId].actions.indexOf(action) > -1;
    else
      return false;
  }


  /**
   * Set User Role from identity
   * @param {string} role  Role of the user
   */
  ConfigurationManager.prototype.setUserRole = function (role) {
    return this.userRole = role;
  }

  /**
   * Get User Role 
   */
  ConfigurationManager.prototype.getUserRole = function () {
    return this.userRole
  }

  /**
   * Set User Features 
   * @param {string[]} features  Features Available to user
   */
  ConfigurationManager.prototype.setFeatures = function (features) {
    return this.features = features;
  }

  /**
   * Set User Role from identity
   */
  ConfigurationManager.prototype.getUserFeatures = function () {
    return this.features;
  }

  ConfigurationManager.prototype.getUserPermissions = function () {
    return  this.userPermissions;
  }

  /**
   * Check Retail User
   */
  ConfigurationManager.prototype.isRetailUser = function () {
    return (this.userRole == 'TYPE_ID_RETAIL') ? true : false;
  }

  /**
   * Check Availibility of User Feature
   */
  ConfigurationManager.prototype.checkUserFeature = function (feature) {
    return this.features.indexOf(feature) > -1;
  }
  /**
   * Get stopReasons from configurations
   * @returns {String} -  stop reasons list
   */
  ConfigurationManager.prototype.getStopReasons = function() {
    return this.configurations.getItem('stopReasons');
  };

  /**
   * Get banner URL from configurations
   * @returns {String} -  Banner URL
   */
  ConfigurationManager.prototype.getSupportedCurrencies = function() {
    return this.configurations.getItem('currenciesSupported');
  };
  /**
   * Get banner URL from configurations
   * @param {obejct} currencies currency
   * @returns {object}  currency list
   */
  ConfigurationManager.prototype.getCurrenciesList = function(currencies) {
    var currencyArr = [];
    for (var cur in currencies) {
      var currency = [];
      var symbol = applicationManager
      .getConfigurationManager()
      .getCurrency(currencies[cur]);
      currency.push(currencies[cur], currencies[cur] + ' ' + symbol);
      currencyArr.push(currency);
    }
    return currencyArr;
  };
  /**
   * Get currency method.
   *@returns {String} - returns the currency.
   */
  ConfigurationManager.prototype.getCurrency = function(currency) {
    return this.currencyCode[currency];
  };
  ConfigurationManager.prototype.getWireTransferCurrency = function(currency) {
    return this.wireTransferCurrency[currency];
  };
  /**
   * Get stop reason from configurations
   * @param {obejct} stopReason
   * @returns {object}  stopreasons list
   */
  ConfigurationManager.prototype.getStopReasonsList = function(stopReasons) {
    var reasonsArr = [];
    for (var arr in stopReasons) {
      var reasons = [];
      reasons.push(arr, stopReasons[arr]);
      reasonsArr.push(reasons);
    }
    return reasonsArr;
  };
  /**
   * Get banner URL from configurations
   * @returns {String} -  Banner URL
   */
  ConfigurationManager.prototype.getBannerURL = function() {
    return this.configurations.getItem('BANNER_URL');
  };
  /**
   * Get No of days required for Rating through Profile or Logout from configurations
   * @returns {String} -  Banner URL
   */
  ConfigurationManager.prototype.getRatingFromProfile = function() {
    return this.configurations.getItem('FirstProfileRating');
  };
  /**
   * Get No of days required for Rating through Transactions from configurations
   * @returns {String} -  Banner URL
   */
  ConfigurationManager.prototype.getRatingFromTransactions = function() {
    return this.configurations.getItem('FirstTransactionRating');
  };
  /**
   * Get No of days required for Rating Second time from configurations
   * @returns {String} -  Banner URL
   */
  ConfigurationManager.prototype.getRatingForSecondtime = function() {
    return this.configurations.getItem('SecondTimeRating');
  };
  /**
   * Get max no of times to submit rating from configurations
   * @returns {String} -  Banner URL
   */
  ConfigurationManager.prototype.getMaxtimeRating = function() {
    return this.configurations.getItem('NumberoftimesforRating');
  };
  /**
   * Get majjor version to submit rating from configurations
   * @returns {String} -  Banner URL
   */
  ConfigurationManager.prototype.getMajorVersionforRating = function() {
    return this.configurations.getItem('MajorVersionforRating');
  };
  /**
   * Get isPostLoginAdsEnabled value
   * @returns {String} - true or false
   */
  ConfigurationManager.prototype.getIsPostLoginAdsEnabled = function() {
    return this.configurations.getItem('isPostLoginAdsEnabled');
  };
  /**
   * Get Deployment Geography.
   * @returns {String} - deployment geography.
   */
  ConfigurationManager.prototype.getDeploymentGeography = function() {
    return this.configurations.getItem('DEPLOYMENTGEOGRAPHY');
  };
  /**
   * Get the Base Currency
   * @returns {String} - base currency
   */
  ConfigurationManager.prototype.getBaseCurrency = function() {
    return this.configurations.getItem('BASECURRENCY');
  };
  /**
   * Get the is Feedback Vlaue
   * @returns {String} - Feedback
   */
  ConfigurationManager.prototype.getisFeedbackEnabled = function() {
    return this.configurations.getItem('isFeedbackEnabled');
  };
  /**
   * Get the is Feedback Vlaue
   * @returns {String} - Feedback
   */
  ConfigurationManager.prototype.getshowFeedBackPostLogout = function() {
    return this.configurations.getItem('showFeedBackPostLogout');
  };
  ConfigurationManager.prototype.setshowFeedBackPostLogout = function(value) {
    this.configurations.setItem('showFeedBackPostLogout',value);
  };
  /**
   * Get constants of terma and conditions
   * @returns {Json} - Terms and conditions.
   */
  ConfigurationManager.prototype.getTermsAndConditions = function()
  {
    return this.termsAndConditions;
  };
  /**
   * Get bank name from configurations
   * @returns {String} - bank Name
   */
  ConfigurationManager.prototype.getBankName = function() {
    return this.configurations.getItem('BANKNAME');
  };
  /**
   * Get business days from configurations
   * @returns {String} - value associated with given key
   */
  ConfigurationManager.prototype.getBusinessDays = function() {
    return this.configurations.getItem('BUSINESSDAYS');
  };
  /**
   * Get ocr api key from configurations
   * @returns {String} - value associated with given key
   */
  ConfigurationManager.prototype.getOcrApiKey = function() {
    return this.configurations.getItem('OCRAPIKEY');
  };
  /**
   * Get ocr secret key from configurations
   * @returns {String} - value associated with given key
   */
  ConfigurationManager.prototype.getOcrSecretKey = function() {
    return this.configurations.getItem('OCRSECRETKEY');
  };
  /**
   * Get facial license string from configurations
   * @returns {String} - value associated with given key
   */
  ConfigurationManager.prototype.getFacialLicenseString = function() {
    return this.configurations.getItem('FACIALLICENSESTRING');
  };
  /**
   * Get facial license server url from configurations
   * @returns {String} - value associated with given key
   */
  ConfigurationManager.prototype.getFacialLicenseServerUrl = function() {
    return this.configurations.getItem('FACIALLICENSESERVERURL');
  };
  /**
   * Get is update mandatory from configurations
   * @returns {boolean} - value associated with given key
   */
  ConfigurationManager.prototype.isAppUpdateMandatory = function() {
    return this.configurations.getItem('ISUPDATEMANDATORY') == 'true'
      ? true
    : false;
  };
  /**
   * Get is update from configurations
   * @returns {boolean} - value associated with given key
   */
  ConfigurationManager.prototype.isAppUpdate = function() {
    return this.configurations.getItem('ISUPDATE') == 'true' ? true : false;
  };
  /**
   * Set locale and date format at app launch
   * @returns
   */
  ConfigurationManager.prototype.setStartupLocaleAndDateFormat = function(res) {
    var config = applicationManager.getConfigurationManager();
    var sm = applicationManager.getStorageManager();
    var langObjFromStorage = sm.getStoredItem('langObj');
    if (!kony.sdk.isNullOrUndefined(langObjFromStorage)) {
      config.configurations.setItem(
        'LOCALE',
        config.locale[langObjFromStorage.language]
      );
    } else {
      config.configurations.setItem('LOCALE', 'en');
    }
    if (config.getLocale() !== null) {
      config.configurations.setItem(
        'DATEFORMAT',
        config.frontendDateFormat[config.getLocale()]
      );
    } else {
      config.configurations.setItem('DATEFORMAT', null);
    }
  };
  /**
   * Set locale and date format
   * @returns
   */
  ConfigurationManager.prototype.setLocaleAndDateFormat = function(res) {
    var config = applicationManager.getConfigurationManager();
    if (!config.getLanguageSelectionFlag()) {
      config.configurations.setItem('LOCALE', 'en_US');
    } else {
      var sm = applicationManager.getStorageManager();
      var langObjFromStorage = sm.getStoredItem('langObj');
      if (!kony.sdk.isNullOrUndefined(langObjFromStorage)) {
        config.configurations.setItem(
          'LOCALE',
          config.locale[langObjFromStorage.language]
        );
      } else if (
        !kony.sdk.isNullOrUndefined(res) &&
        res['data'].language !== undefined
      ) {
        config.configurations.setItem(
          'LOCALE',
          config.locale[res['data'].language]
        );
      } else {
        config.configurations.setItem('LOCALE', 'en_US');
      }
    }
    if (config.getLocale() !== null) {
      config.configurations.setItem(
        'DATEFORMAT',
        config.frontendDateFormat[config.getLocale()]
      );
    } else {
      config.configurations.setItem('DATEFORMAT', null);
    }
  };
  /**
   * Get is update from configurations
   * @returns {boolean} - value associated with given key
   */
  ConfigurationManager.prototype.getLanguageSelectionFlag = function() {
    return this.configurations.getItem('ISLANGUAGESELECTION') !== null &&
      this.configurations.getItem('ISLANGUAGESELECTION') == 'true'
      ? true
    : false;
  };
  /**
   * Get availability of profile image enabled from configurations
   * @returns {boolean} - value associated with given key
   */
  ConfigurationManager.prototype.getProfileImageAvailabilityFlag = function() {
    return this.configurations.getItem('isprofileImageAvailable') == 'true'
      ? true
    : false;
  };
  /**
   * Get is backend currency symbol flag enabled in configurations
   * @returns {boolean} - value associated with given key
   */
  ConfigurationManager.prototype.getBackEndCurencySymbolFlag = function() {
    return this.configurations.getItem('ISBACKENDCURRENCYSYMBOLENABLED') ==
      'true'
      ? true
    : false;
  };
  /**
   * Get is country flag enabled from configurations
   * @returns {boolean} - value associated with given key
   */
  ConfigurationManager.prototype.getCountryCodeFlag = function() {
    return this.configurations.getItem('ISCOUNTRYCODEENABLED') == 'true'
      ? true
    : false;
  };
  /**
   * Get is sort code visibility enabled from configurations
   * @returns {boolean} - value associated with given key
   */
  ConfigurationManager.prototype.getSortCodeVisibilityFlag = function() {
    return this.configurations.getItem('ISSORTCODEVISIBLE') == 'true'
      ? true
    : false;
  };
  /**
   * Get is sort code visibility enabled from configurations
   * @returns {boolean} - value associated with given key
   */
  ConfigurationManager.prototype.getAccountIDLevelAlertsFlag = function() {
    return this.configurations.getItem('isAlertAccountIDLevel') == 'true'
      ? true
    : false;
  };
  /**
   * Get is sort code visibility enabled from configurations
   * @returns {boolean} - value associated with given key
   */
  ConfigurationManager.prototype.getUTCDateFormattingFlag = function() {
    return this.configurations.getItem('ISUTCDATEFORMATTINGENABLED') == 'true'
      ? true
    : false;
  };
  /**
   * Get currency code from configurations
   * @returns {String} - value associated with given key
   */
  ConfigurationManager.prototype.getCurrencyCode = function() {
    //added Default to handle undefined in few cases as per ARB-17123
    return (this.configurations.getItem('CURRENCYCODE')!==undefined && this.configurations.getItem('CURRENCYCODE'))
      ? this.configurations.getItem('CURRENCYCODE')
    : '$';
  };
  /**
   * Get currency method.
   *@returns {String} - returns the currency.
   */
  ConfigurationManager.prototype.getCurrency = function(currency) {
    return this.currencyCode[currency];
  };
  /**
   * Get locale from configurations
   * @returns {String} - value associated with given key
   */
  ConfigurationManager.prototype.getLocale = function() {
    return this.configurations.getItem('LOCALE');
  };
  /**
   * Get Date format from configurations
   * @returns {String} - value associated with given key
   */
  ConfigurationManager.prototype.getDateFormat = function() {
    return this.configurations.getItem('DATEFORMAT');
  };
  /**
   * Get force Touch Items form configurations
   * @returns {List} - List of force touch items
   */
  ConfigurationManager.prototype.getForceTouchItems = function() {
    // needs implimentation
    return;
  };
  /**
   * Get frequencyTypes(constants) form configurations
   * @returns {Array} - List of constant
   */
  ConfigurationManager.prototype.getFrequencyTypes = function() {
    var typesList = [];
    typesList.push('WEEKLY', 'DAILY', 'MONTHLY', 'BIWEEKLY');
    return typesList;
  };
  /**
   * Get days display names for Id(constants) form configurations
   * @returns {JSONObj} - List of constant
   */
  ConfigurationManager.prototype.getDaysDisplayNames = function() {
    var daysList = {};
    daysList = {"SUNDAY":"Sunday",
                "MONDAY":"Monday",
                "TUESDAY":"Tuesday",
                "WEDNESDAY":"Wednesday",
                "THURSDAY":"Thursday",
                "FRIDAY":"Friday",
                "SATURDAY":"Saturday"};
    return daysList;
  };
  /**
   * Get value of given constant form configurations
   * @param {String} cosntant - name of constant
   * @returns {String} - value associated with given key
   */
  ConfigurationManager.prototype.getConstantValue = function(constant) {
    return this.constants[constant];
  };
  /**
   * Get value of marital status from configurations
   * @returns {Array}
   */
  ConfigurationManager.prototype.getMaritalStatus = function() {
    return this.maritalStatus;
  };
  /**
   * Get value of number of dependents from configurations
   * @returns {Array}
   */
  ConfigurationManager.prototype.getNumberOfDependents = function() {
    return this.numberOfDependents;
  };
  /**
   * Get value of employment type from configurations
   * @returns {Array}
   */
  ConfigurationManager.prototype.getEmployementType = function() {
    return this.employmentTypeValues;
  };
  ConfigurationManager.prototype.getDisputeReason = function() {
    return this.DisputeReason;
  };

  /**
   * Get value of gender from configurations
   * @returns {Array}
   */
  ConfigurationManager.prototype.getGender = function() {
    return this.gender;
  };
  /**
   * Get value of employment experience from configurations
   * @returns {Array}
   */
  ConfigurationManager.prototype.getEmploymentExperience = function() {
    return this.employmentInfoYears;
  };
  /**
   * Get value of annual income from configurations
   * @returns {Array}
   */
  ConfigurationManager.prototype.getAnnualIncome = function() {
    return this.annualIncome;
  };
  /**
   * Get value of monthly income from configurations
   * @returns {Array}
   */
  ConfigurationManager.prototype.getMonthlyIncome = function() {
    return this.monthlyExpenditure;
  };
  /**
   * Get value of financial assets from configurations
   * @returns {Array}
   */
  ConfigurationManager.prototype.getFinancialAssets = function() {
    return this.assets;
  };
  /**
   * Get Menu Items for Hamburger Menu configurations
   * @returns {Array}
   */
  ConfigurationManager.prototype.getHamburgerMenuItems = function() {
    if(this.features.indexOf("MANAGE_ACCOUNT_STATEMENTS")<0 ){
      for(i=0;i<this.hamburgerMenuItems.length;i++){
        if ( this.hamburgerMenuItems[i].text === this.constants.MENUACCOUNTSTATEMENTS)          
          break;              
      }
      this.hamburgerMenuItems.splice(i,1);
    }
    if(this.AggregatedExternalAccountEnabled)
      return this.hamburgerMenuItems;
    else
    {
      for(i=0;i<this.hamburgerMenuItems.length;i++)
        if(this.hamburgerMenuItems[i].text==this.constants.MENUMANAGEOTHERBANKACCOUNTS)
          break;
      this.hamburgerMenuItems.splice(i,1);
      return this.hamburgerMenuItems;
    }
  };
  /**
   * Get Menu Items for Hamburger Menu configurations
   * @returns {Array}
   */
  ConfigurationManager.prototype.modifyHamburgerMenuItems = function() {
    this.hamburgerMenuItems.splice(6, 3);
  };
  /**
   * Get value IsAggregatedExternalAccountEnabled, customer level configurable
   * @returns true/false
   */
  ConfigurationManager.prototype.isAggregatedExternalAccountEnabled = function() {
    return this.AggregatedExternalAccountEnabled;
  };
  /**
   * Get value DebugMode, customer level configurable
   * @member of ConfigurationManager
   * @returns true/false
   */
  ConfigurationManager.prototype.isDebugMode = function() {
    return this.DebugMode;
  };
  /**
   * Get value EngageEnabled, customer level configurable
   * @returns true/false
   */
  ConfigurationManager.prototype.isEngageEnabled = function() {
    return this.EngageEnabled == 'true' ? true : false;
  };
  /* Get Menu Items for More Menu from configurations
   * @returns {Array}
   */
  ConfigurationManager.prototype.getMoreMenuItems = function() {
    //by vineela
    if(this.features.indexOf("MANAGE_ACCOUNT_STATEMENTS")<0 ){
      for(i=0;i<this.hamburgerMenuItems.length;i++){
        if ( this.hamburgerMenuItems[i].text === this.constants.MENUACCOUNTSTATEMENTS)          
          break;              
      }
      this.hamburgerMenuItems.splice(i,1);
    }
    if(this.AggregatedExternalAccountEnabled){
      kony.print("hamburgermenu aggregated enabled--->"+JSON.stringify(this.hamburgerMenuItems));
      return this.hamburgerMenuItems;}
    else
    {
      for(i=0;i<this.hamburgerMenuItems.length;i++)
        if(this.hamburgerMenuItems[i].text==this.constants.MENUMANAGEOTHERBANKACCOUNTS)
          break;
      this.hamburgerMenuItems.splice(i,1);
      kony.print("hamburgermenu else--->"+JSON.stringify(this.hamburgerMenuItems));
      return this.hamburgerMenuItems;
    }
    //return this.moreMenuItems;
  };
  /* Get Menu Items for More Menu from configurations for Ipad
   * @returns {Array}
   */
  ConfigurationManager.prototype.getMoreMenuItemsIpad = function() {
    return this.moreMenuItemsIpad;
  };
  /**
   * Get Menu Items for IOS app menu from configurations
   * @returns {Array}
   */
  ConfigurationManager.prototype.getIOSAppMenuItems = function() {
    return this.iPhoneMenuItems;
  };
  /**
   * Get Menu Items for IPad app menu from configurations
   * @returns {Array}
   */
  ConfigurationManager.prototype.getIPadAppMenuItems = function() {
    return this.iPadMenuItems;
  };
  /**
   * Get Menu Items for IOS app more Menu configurations
   * @returns {Array}
   */
  ConfigurationManager.prototype.getIOSAppMoreMenuItems = function() {
    //by vineela
    if(this.features.indexOf("MANAGE_ACCOUNT_STATEMENTS")<0 ){
      for(i=0;i<this.hamburgerMenuItems.length;i++){
        if ( this.hamburgerMenuItems[i].text === this.constants.MENUACCOUNTSTATEMENTS)          
          break;              
      }
      this.hamburgerMenuItems.splice(i,1);
    }
    if(this.AggregatedExternalAccountEnabled){
      kony.print("hamburgermenu aggregated enabled--->"+JSON.stringify(this.hamburgerMenuItems));
      return this.hamburgerMenuItems;}
    else
    {
      for(i=0;i<this.hamburgerMenuItems.length;i++)
        if(this.hamburgerMenuItems[i].text==this.constants.MENUMANAGEOTHERBANKACCOUNTS)
          break;
      this.hamburgerMenuItems.splice(i,1);
      kony.print("hamburgermenu else--->"+JSON.stringify(this.hamburgerMenuItems));
      return this.hamburgerMenuItems;
    }
    //     if(this.AggregatedExternalAccountEnabled)
    //       return this.moreMenuItems;
    //     else
    //     {
    //       for(i=0;i<this.moreMenuItems.length;i++)
    //         if(this.moreMenuItems[i].text==this.constants.MENUMANAGEOTHERBANKACCOUNTS)
    //           break;
    //       this.moreMenuItems.splice(i,1);
    //       return this.moreMenuItems;
    //     }
  };
  /**
   * Getter for Denomination amount values from configurations
   * @returns {Array}
   */
  ConfigurationManager.prototype.getDenominationAmountValues = function() {
    return this.denominationAmountValues;
  };
  /**
   * Get value isCustomMetricsEnabled, customer level configurable
   * @returns {Boolean} true/false
   */
  ConfigurationManager.prototype.isCustomMetricsEnabled = function() {
    return this.CustomMetricsEnabled;
  };
  /**
   * Getter for server time zone from configurations
   * @member of ConfigurationManager
   * @returns {String}
   */
  ConfigurationManager.prototype.getServerTimeZone = function() {
    return this.serverTimeZone;
  };
  /**
   * Get Message unread count
   * @returns {number} number of unread messages
   */
  ConfigurationManager.prototype.getUnreadMessageCount = function() {
    return this.unreadMessageCount;
  };
  /**
   * Set Message unread count
   * @returns {number} number of unread messages
   */
  ConfigurationManager.prototype.setUnreadMessageCount = function(
  unreadMessageCount
  ) {
    this.unreadMessageCount = unreadMessageCount;
  };
  /**
   * Method to set Configutation value
   * @param {string} key - configuration key
   * @param {*} value - configuration value
   */
  ConfigurationManager.prototype.setConfigurationValue = function(key, value) {
    var scopeObj = this;
    if (value !== undefined && value !== null) {
      scopeObj[key] = value;
    }
  };
  /**
   * Method to get Configutation value
   * @param {string} key - configuration key
   * @returns {*} value - configuration value
   */
  ConfigurationManager.prototype.getConfigurationValue = function(key) {
    var scopeObj = this;
    return scopeObj[key];
  };
  /**
   * Method update entitlement values
   * @param {object}  entitlements  - entilements data response object
   */
  ConfigurationManager.prototype.setEntitlements = function(entitlements) {
    var servicesListForUser = entitlements;
    this.servicesListForUser = servicesListForUser;
    for (var i = 0; i < servicesListForUser.length; i++) {
      switch (servicesListForUser[i]) {
        case 'TRANSFER_BETWEEN_OWN_ACCOUNT':
          this.setConfigurationValue('isKonyBankAccountsTransfer', 'true');

          break;
        case 'INTRA_BANK_FUND_TRANSFER':
          this.setConfigurationValue('isOtherKonyAccountsTransfer', 'true');
          break;
        case 'INTER_BANK_ACCOUNT_FUND_TRANSFER':
          this.setConfigurationValue('isOtherBankAccountsTransfer', 'true');

          break;
        case 'INTERNATIONAL_ACCOUNT_FUND_TRANSFER':
          this.setConfigurationValue('isInternationalAccountsTransfer', 'true');

          break;
        case 'DOMESTIC_WIRE_TRANSFER':
          this.setConfigurationValue('isDomesticWireTransferEnabled', 'true');

          break;
        case 'INTERNATIONAL_WIRE_TRANSFER':
          this.setConfigurationValue(
            'isInternationalWireTransferEnabled',
            'true'
          );

          break;
        case 'BILL_PAY':
          this.setConfigurationValue('isBillPayEnabled', 'true');

          break;
        case 'WEALTH_WATCHLIST_INSTRUMENT_VIEW':
          this.setConfigurationValue('isWatchlistEnabled', 'true');

          break;
        case 'P2P':
          this.setConfigurationValue('ispayAPersonEnabled', 'true');

          break;
        case 'RDC':
          this.setConfigurationValue('isRDCEnabled', 'true');

          break;
        case 'USER_MANAGEMENT':
          this.setConfigurationValue('isBusinessOwner', 'true');
          break;

        default:
          break;
      }
    }
    if (
      entitlements.isSecurityQuestionConfigured !== undefined &&
      entitlements.isSecurityQuestionConfigured !== null
    ) {
      this.setConfigurationValue(
        'isSecurityQuestionConfigured',
        entitlements.isSecurityQuestionConfigured
      );
    }
  };
  /**
   * Method to set Data in Menu Based on Entitlement
   */
  ConfigurationManager.prototype.rearrangeHamburgerAccordingToEntitements = function() {
    var self = this;
    if(self.GoogleservicesSupported===false)
    {
      var menuitems=self.moreMenuItems;
      var index = menuitems.findIndex(function(menuItem) {
        return menuItem.text === kony.i18n.getLocalizedString('kony.mb.Hamburger.Locateus');

      });
      if(index!=-1)
      {
        self.moreMenuItems.splice(index,1);
      }
      var hamburgeritems=self.hamburgerMenuItems;
      var index1 = hamburgeritems.findIndex(function(menuItem) {
        return menuItem.text === kony.i18n.getLocalizedString('kony.mb.Hamburger.Locateus');

      });
      if(index1!=-1)
      {
        self.hamburgerMenuItems.splice(index1,1);
      }
    }
    self.hamburgerMenuItems = self.hamburgerMenuItems.filter(
      function(data) {
        if((self.isBillPayEnabled === 'false' && data.text === self.constants.MENUBILLPAY) || (self.isRDCEnabled === 'false' && data.text === self.constants.MENUCHECKDEPOSIT) ||  (self.EngageEnabled === 'false' && data.text === self.constants.MENUENGAGE))
        {
          return false;
        }
        switch(data.text){
          case self.constants.MENUACH:
            return (self.checkUserFeature("ACH_COLLECTION") || self.checkUserFeature("ACH_PAYMENT") || self.checkUserFeature("ACH_FILES"));

          case self.constants.MENUAPPROVALREQUEST:
            var permissions = self.getApprovalsAndRequestsFeaturePermissionsList();
            return permissions.some(self.checkUserPermission.bind(self));
          case self.constants.MENUUSERMANAGEMENT:
            return self.checkUserFeature("USER_MANAGEMENT");

          case self.constants.MENUCARDMANAGEMENT:
            return self.checkUserFeature("CARD_MANAGEMENT");

            //             case this.constants.MENUBILLPAY:
            //               return this.checkUserFeature("BILL_PAY");
          case self.constants.MENUDISPUTE:
            return self.checkUserFeature("DISPUTE_TRANSACTIONS")
            case self.constants.MENUMESSAGES:
            return self.checkUserFeature("MESSAGES");

          case self.constants.MENUFEEDBACK:
            return self.checkUserFeature("FEEDBACK");      

          case self.constants.MENUOPENACOUNT:
            return (self.isSMEUser !== "true");

          case self.constants.MENUMANAGERECIPIENTS:
            return ["INTER_BANK_ACCOUNT_FUND_TRANSFER_VIEW_RECEPIENT",
                    "INTRA_BANK_FUND_TRANSFER_VIEW_RECEPIENT",
                    "INTERNATIONAL_ACCOUNT_FUND_TRANSFER_VIEW_RECEPIENT",
                    "P2P_VIEW_RECEPIENT"].some(self.checkUserPermission.bind(self));

          case self.constants.MENUCHEQUEMANAGEMENT:
            var chequeFeatures = ["CHEQUE_BOOK_REQUEST", "VIEW_CHEQUES", "STOP_PAYMENT_REQUEST"];
            return chequeFeatures.some(self.checkUserFeature.bind(self));

          case self.constants.MENUCARDLESS:
            return self.checkUserFeature("WITHDRAW_CASH"); 
          case self.constants.MENUPFMMYMONEY:
            return  self.checkUserFeature("PERSONAL_FINANCE_MANAGEMENT");
          case self.constants.MENUTRANSFERS:
            if (self.getDeploymentGeography() === "EUROPE") {
              return self.checkUserPermission("TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE");
            }   
          case self.constants.MENUFOREIGNEXCHANGE:
            return self.checkUserFeature("FX_RATES");
          case self.constants.MENUWEALTHWATCHLIST:
            return self.checkUserPermission("WEALTH_WATCHLIST_INSTRUMENT_VIEW");
        } 

        return true;
      }
    );
    self.moreMenuItems = self.moreMenuItems.filter(
      function(data) {
        if((self.isBillPayEnabled === 'false' && data.text === self.constants.MENUSETTINGS) || (self.isRDCEnabled === 'false' && data.text === self.constants.MENUCHECKDEPOSIT))
          return false;
        switch(data.text){
          case self.constants.MENUACH:
            return (self.checkUserFeature("ACH_COLLECTION") || self.checkUserFeature("ACH_PAYMENT") || self.checkUserFeature("ACH_FILES"));

          case self.constants.MENUAPPROVALREQUEST:
            var permissions = self.getApprovalsAndRequestsFeaturePermissionsList();
            return permissions.some(self.checkUserPermission.bind(self));

          case self.constants.MENUUSERMANAGEMENT:
            return self.checkUserFeature("USER_MANAGEMENT");

          case self.constants.MENUOPENACOUNT:
            return (self.isSMEUser !== "true");

          case self.constants.MENUCARDMANAGEMENT:
            return self.checkUserFeature("CARD_MANAGEMENT");

            //             case this.constants.MENUBILLPAY:
            //               return this.checkUserFeature("BILL_PAY");
          case self.constants.MENUDISPUTE:
            return self.checkUserFeature("DISPUTE_TRANSACTIONS")    
            case self.constants.MENUMESSAGES:
            return self.checkUserFeature("MESSAGES");

          case self.constants.MENUFEEDBACK:
            return self.checkUserFeature("FEEDBACK");      

          case self.constants.MENUMANAGERECIPIENTS:
            return ["INTER_BANK_ACCOUNT_FUND_TRANSFER_VIEW_RECEPIENT",
                    "INTRA_BANK_FUND_TRANSFER_VIEW_RECEPIENT",
                    "INTERNATIONAL_ACCOUNT_FUND_TRANSFER_VIEW_RECEPIENT",
                    "P2P_VIEW_RECEPIENT"].some(self.checkUserPermission.bind(self));

          case self.constants.MENUCHEQUEMANAGEMENT:
            var chequeFeatures = ["CHEQUE_BOOK_REQUEST", "VIEW_CHEQUES", "STOP_PAYMENT_REQUEST"];
            return chequeFeatures.some(self.checkUserFeature.bind(self));

          case self.constants.MENUCARDLESS:
            return self.checkUserFeature("WITHDRAW_CASH");
          case self.constants.MENUPFMMYMONEY:
            return self.checkUserFeature("PERSONAL_FINANCE_MANAGEMENT");

          case self.constants.MENUFOREIGNEXCHANGE:
            return self.checkUserFeature("FX_RATES");

          case self.constants.MENUWEALTHWATCHLIST:
            return self.checkUserPermission("WEALTH_WATCHLIST_INSTRUMENT_VIEW");
        }

        return true;
      }
    );
    if (self.getDeploymentGeography() === "EUROPE") {
      if (!self.checkUserPermission("TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE")) {
        this.iPhoneMenuItems.splice(1, 1, self.moreMenuItems.shift());
      }
    }
    else {
      var transferFeatures = [
        "INTER_BANK_ACCOUNT_FUND_TRANSFER",
        "INTRA_BANK_FUND_TRANSFER",
        "INTERNATIONAL_ACCOUNT_FUND_TRANSFER",
        "P2P",
        "TRANSFER_BETWEEN_OWN_ACCOUNT"
      ];
      if (!transferFeatures.some(this.checkUserFeature.bind(this))) {
        this.iPhoneMenuItems.splice(1, 1,
                                    self.moreMenuItems.shift()
                                   );
      }
    }
    this.isWatchlistEnabled = self.checkUserPermission("WEALTH_WATCHLIST_INSTRUMENT_VIEW");
    if (this.isWatchlistEnabled !== true) {
      this.iPhoneMenuItems.splice(1, 1);
    } else if (this.isWatchlistEnabled === true) {
      this.iPhoneMenuItems.splice(3, 1);
    }
    if (this.isWatchlistEnabled !== true && this.isBillPayEnabled !== 'true') {
      this.iPhoneMenuItems.splice(2, 1, {
        img: 'settings.png',
        text: this.constants.MENUSETTINGS,
        info: null,
      });
    }
    if (this.EngageEnabled != 'true') {
      for (var i2 = 0; i2 < this.moreMenuItems.length; i2++) {
        if (this.moreMenuItems[i2].text === this.constants.MENUENGAGE) {
          this.moreMenuItems.splice(i2, 1);
          break;
        }
      }
    }

  };
  /**
   * Method to get user services list.
   * @returns {Array} servicesListForUser - Users services list
   */
  ConfigurationManager.prototype.getServicesListForUser = function() {
    return this.servicesListForUser;
  };
  /**
   * Method to get transaction types
   * @returns {Array} response - transaction types
   */
  ConfigurationManager.prototype.getTransactionTypesMetaData = function() {
    /**@member {Array} gender holds the list of different transaction types*/
    var transactionTypesMetaData = [
      {
        applicationValue: this.transactionTypes.INTERNAL,
        backendValue: kony.i18n.getLocalizedString('i18n.Transactions.backendInternalTransfer'),
        displayValue: kony.i18n.getLocalizedString('i18n.Transactions.displayInternalTransfer'),
      },
      {
        applicationValue: this.transactionTypes.BILLPAY,
        backendValue: kony.i18n.getLocalizedString('i18n.Transactions.backendBillPay'),
        displayValue: kony.i18n.getLocalizedString('i18n.Transactions.displayBillPay'),
      },
      {
        applicationValue: this.transactionTypes.EXTERNAL,
        backendValue: kony.i18n.getLocalizedString('i18n.Transactions.backendExternalTransfer'),
        displayValue: kony.i18n.getLocalizedString('i18n.Transactions.displayExternalTransfer'),
      },
      {
        applicationValue: this.transactionTypes.DEPOSIT,
        backendValue: kony.i18n.getLocalizedString('i18n.Transactions.backendDeposit'),
        displayValue: kony.i18n.getLocalizedString('i18n.Transactions.displayDeposit'),
      },
      {
        applicationValue: this.transactionTypes.P2P,
        backendValue: kony.i18n.getLocalizedString('i18n.Transactions.backendP2P'),
        displayValue: kony.i18n.getLocalizedString('i18n.Transactions.displayP2P'),
      },
      {
        applicationValue: this.transactionTypes.CARDLESS,
        backendValue: kony.i18n.getLocalizedString('i18n.Transactions.backendCardless'),
        displayValue: kony.i18n.getLocalizedString('i18n.Transactions.displayCardless'),
      },
      {
        applicationValue: this.transactionTypes.CHECKWITHDRAWAL,
        backendValue: kony.i18n.getLocalizedString('i18n.Transactions.backendCheckWithdrawal'),
        displayValue: kony.i18n.getLocalizedString('i18n.Transactions.displayCheckWithdrawal'),
      },
      {
        applicationValue: this.transactionTypes.WITHDRAWAL,
        backendValue: kony.i18n.getLocalizedString('i18n.Transactions.backendWithdrawal'),
        displayValue: kony.i18n.getLocalizedString('i18n.Transactions.displayWithdrawal'),
      },
      {
        applicationValue: this.transactionTypes.INTEREST,
        backendValue: kony.i18n.getLocalizedString('i18n.Transactions.backendInterest'),
        displayValue: kony.i18n.getLocalizedString('i18n.Transactions.displayInterest'),
      },
      {
        applicationValue: this.transactionTypes.REQUEST,
        backendValue: kony.i18n.getLocalizedString('i18n.Transactions.backendRequest'),
        displayValue: kony.i18n.getLocalizedString('i18n.Transactions.displayRequest'),
      },
      {
        applicationValue: this.transactionTypes.LOAN,
        backendValue: kony.i18n.getLocalizedString('i18n.Transactions.backendLoan'),
        displayValue: kony.i18n.getLocalizedString('i18n.Transactions.displayLoan'),
      },
      {
        applicationValue: this.transactionTypes.RECEIVEDP2P,
        backendValue: kony.i18n.getLocalizedString('i18n.Transactions.backendReceivedP2P'),
        displayValue: kony.i18n.getLocalizedString('i18n.Transactions.displayReceivedP2P'),
      },
      {
        applicationValue: this.transactionTypes.RECEIVEDREQUEST,
        backendValue: kony.i18n.getLocalizedString('i18n.Transactions.backendReceivedRequest'),
        displayValue: kony.i18n.getLocalizedString('i18n.Transactions.displayReceivedRequest'),
      },
      {
        applicationValue: this.transactionTypes.FEES,
        backendValue: kony.i18n.getLocalizedString('i18n.Transactions.backendFees'),
        displayValue: kony.i18n.getLocalizedString('i18n.Transactions.displayFees'),
      },
      {
        applicationValue: this.transactionTypes.INTERESTCREDIT,
        backendValue: kony.i18n.getLocalizedString('i18n.Transactions.backendInterestCredit'),
        displayValue: kony.i18n.getLocalizedString('i18n.Transactions.displayInterestCredit'),
      },
      {
        applicationValue: this.transactionTypes.INTERESTDEBIT,
        backendValue: kony.i18n.getLocalizedString('i18n.Transactions.backendInterestDebit'),
        displayValue: kony.i18n.getLocalizedString('i18n.Transactions.displayInterestDebit'),
      },
      {
        applicationValue: this.transactionTypes.WIRE,
        backendValue: kony.i18n.getLocalizedString('i18n.Transactions.backendWire'),
        displayValue: kony.i18n.getLocalizedString('i18n.Transactions.displayWire'),
      },
      {
        applicationValue: this.transactionTypes.STOPCHECKPAYEMENTREQUEST,
        backendValue: kony.i18n.getLocalizedString('i18n.Transactions.backendStopCheckPaymentRequest'),
        displayValue: kony.i18n.getLocalizedString('i18n.Transactions.displayStopCheckPaymentRequest'),
      },
      {
        applicationValue: this.transactionTypes.INTERNETBANKING,
        backendValue: kony.i18n.getLocalizedString('i18n.Transactions.backendInternetTransaction'),
        displayValue: kony.i18n.getLocalizedString('i18n.Transactions.displayInternetTransaction'),
      }
    ];
    return transactionTypesMetaData;
  };
  ConfigurationManager.prototype.getPfmTypesMetaData = function() {
    // var pfmTypesMetaData = [
    //   {
    //     applicationValue: this.pfmTypes.Home,
    //     backendValue: "Home",
    //     displayValue: "Home",
    //   },
    //   {
    //     applicationValue: this.pfmTypes.Utilities,
    //     backendValue: "Utilities",
    //     displayValue: "Utilities",
    //   },
    //   {
    //     applicationValue: this.pfmTypes.Financial,
    //     backendValue: "Financial",
    //     displayValue: "Financial",
    //   },
    //   {
    //     applicationValue: this.pfmTypes.Education,
    //     backendValue: "Education",
    //     displayValue: "Education",
    //   },
    //   {
    //     applicationValue: this.pfmTypes.Transportation,
    //     backendValue: "Transportation",
    //     displayValue: "Transportation",
    //   },
    //   {
    //     applicationValue: this.pfmTypes.Health,
    //     backendValue: "Health",
    //     displayValue: "Health",
    //   },
    //   {
    //     applicationValue: this.pfmTypes.Travel,
    //     backendValue: "Travel",
    //     displayValue: "Travel",
    //   },
    //   {
    //     applicationValue: this.pfmTypes.Food,
    //     backendValue: "Food",
    //     displayValue: "Food",
    //   },
    //   {
    //     applicationValue: this.pfmTypes.Uncategorised,
    //     backendValue: "Uncategorised",
    //     displayValue: "Uncategorized",
    //   },
    //   {
    //     applicationValue: this.pfmTypes.Other,
    //     backendValue: "Other",
    //     displayValue: "Other",
    //   }
    // ];
    var pfmTypesMetaData = [];
    return pfmTypesMetaData;
  };
  /**
   * Method to get account types
   * @returns {Array} response - account types
   */
  ConfigurationManager.prototype.getAccountTypesMetaData = function() {
    /**@member {Array} gender holds the list of different account types*/
    var accountTypesMetaData = [
      {
        applicationValue: this.constants.CHECKING,
        backendValue: this.constants.CHECKING,
        displayValue: 'i18n.Accounts.displayChecking',
      },
      {
        applicationValue: this.constants.SAVINGS,
        backendValue: this.constants.SAVINGS,
        displayValue: 'i18n.Accounts.displaySavings',
      },
      {
        applicationValue: this.constants.CREDITCARD,
        backendValue: this.constants.CREDITCARD,
        displayValue: 'i18n.Accounts.displayCreditCard',
      },
      {
        applicationValue: this.constants.DEPOSIT,
        backendValue: this.constants.DEPOSIT,
        displayValue: 'i18n.Accounts.displayDeposit',
      },
      {
        applicationValue: this.constants.MORTGAGE,
        backendValue: this.constants.MORTGAGE,
        displayValue: 'i18n.Accounts.displayMortgage',
      },
      {
        applicationValue: this.constants.LOAN,
        backendValue: this.constants.LOAN,
        displayValue: 'i18n.Accounts.displayLoan',
      },
      {
        applicationValue: this.accountTypes.CURRENT,
        backendValue: this.accountTypes.CURRENT,
        displayValue: 'i18n.Accounts.displayCurrent',
      },
      {
        applicationValue: this.accountTypes.LINE_OF_CREDIT,
        backendValue: this.accountTypes.LINE_OF_CREDIT,
        displayValue: 'i18n.Accounts.displayLineOfCredit',
      },
      {
        applicationValue: this.accountTypes.EXTERNAL,
        backendValue: this.accountTypes.EXTERNAL,
        displayValue: 'i18n.Accounts.displayExternal',
      },
      {
        applicationValue: this.accountTypes.OTHER,
        backendValue: this.accountTypes.OTHER,
        displayValue: 'i18n.cardsManagement.others',
      },
    ];
    return accountTypesMetaData;
  };
  ConfigurationManager.prototype.reloadConstants = function() {
    var constants = {
      IDLE_TIMEOUT: 5,
      TRAVELPLANS_DESTINATION_LIMIT: 5,
      IDENTITYSERVICENAME: 'DbxUserLogin',
      WEEKLY: 'Weekly',
      DAILY: 'Daily',
      MONTHLY: 'Monthly',
      BIWEEKLY: 'Biweekely',
      SERVICE_NAME: 'RBSERVICES',
      LOADING_SCREEN_MESSAGE: 'Loading ...',
      CHECKING: 'Checking',
      SAVINGS: 'Savings',
      CREDITCARD: 'CreditCard',
      DEPOSIT: 'Deposit',
      MORTGAGE: 'Mortgage',
      LOAN: 'Loan',
      EXTERNAL_BANK_ACCOUNT: 'ExternalBankAccount',
      LANG_CHANGE_FROM_LOGIN: 'login',
      LANG_CHANGE_FROM_SETTINGS: 'settings',
      HEADERFAQ: kony.i18n.getLocalizedString('kony.mb.Support.HeaderFAQ'),
      HEADERPRIVACYPOLICY: kony.i18n.getLocalizedString(
        'kony.mb.Support.HeaderPrivacyPolicy'
      ),
      HEADERABOUTUS: kony.i18n.getLocalizedString(
        'kony.mb.Support.HeaderAbout'
      ),
      HEADERTERMSANDCONDITIONS: kony.i18n.getLocalizedString(
        'kony.mb.Support.HeaderTC'
      ),
      FAQ: kony.i18n.getLocalizedString('kony.mb.Support.FAQ'),
      PRIVACY: kony.i18n.getLocalizedString('kony.mb.Support.Privacy'),
      TERMS: kony.i18n.getLocalizedString('kony.mb.Support.Terms'),
      ABOUT: kony.i18n.getLocalizedString('kony.mb.Support.Aboutus'),
      Last7days: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.Last7days'
      ),
      Last14days: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.last14days'
      ),
      Last1Month: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.last1month'
      ),
      Last2Months: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.last2months'
      ),
      Last3Months: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.last3months'
      ),
      Last6Months: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.last6months'
      ),
      Last12Months: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.last12months'
      ),
      Last30days: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.Last30days'
      ),
      Last60days: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.Last60days'
      ),
      CustomRange: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.CustomRange'
      ),
      Withdrawals: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.Withdrawals'
      ),
      Deposits: kony.i18n.getLocalizedString('kony.mb.AdvanceSearch.Deposits'),
      P2PDebits: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.P2PDebits'
      ),
      BillPay: kony.i18n.getLocalizedString('kony.mb.AdvanceSearch.BillPay'),
      Transfers: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.Transfers'
      ),
      Checks: kony.i18n.getLocalizedString('kony.mb.AdvanceSearch.Checks'),
      P2PCredits: kony.i18n.getLocalizedString(
        'kony.mb.AdvanceSearch.P2PCredits'
      ),
      Issued: kony.i18n.getLocalizedString('kony.mb.chequemgmt.issued'),
      Cleared: kony.i18n.getLocalizedString(
        'kony.mb.chequemgmt.cleared'
      ),
      Returned: kony.i18n.getLocalizedString('kony.mb.chequemgmt.returned'),
      Stopped: kony.i18n.getLocalizedString(
        'kony.mb.chequemgmt.stopped'
      ),
      ChequeStolen: kony.i18n.getLocalizedString('kony.mb.CM.chequeStolen'),
      FundsNotAvailable: kony.i18n.getLocalizedString(
        'kony.mb.CM.fundsNotAvailable'
      ),
      ChequeLost: kony.i18n.getLocalizedString('kony.mb.CM.chequeLost'),
      ChequeDestroyed: kony.i18n.getLocalizedString(
        'kony.mb.CM.chequeDestroyed'
      ),
      MENUACCOUNTS: kony.i18n.getLocalizedString('kony.mb.Hamburger.Accounts'),
      MENUTRANSFERS: kony.i18n.getLocalizedString(
        'kony.mb.Hamburger.Transfers'
      ),
      MENUUNIFIEDTRANSFERSFLOW: kony.i18n.getLocalizedString(
        'kony.mb.Hamburger.unifiedTransfersFlow'
      ),
      MENUCHEQUEMANAGEMENT:kony.i18n.getLocalizedString('kony.mb.CM.chequeManagement'),
      MENUMONEYMOVEMENTTRANSFERS: kony.i18n.getLocalizedString(
        'kony.mb.Hamburger.MoneyMovementTransfers'
      ),
      MENUTRANSFERSACTIVITY: kony.i18n.getLocalizedString(
        'kony.mb.transfers.ManageTransactions'
      ),
      MENUMANAGERECIPIENTS: kony.i18n.getLocalizedString(
        'kony.mb.TransfersEurope.ManageBeneficiaries'
      ),
      MENUDISPUTE: kony.i18n.getLocalizedString(
        'kony.mb.disputedTransactions.DisputedTransactions'
      ),
      MENUOPENACOUNT: kony.i18n.getLocalizedString(
        'kony.mb.Hamburger.OpenAccount'
      ),
      MENUACCOUNTSTATEMENTS:kony.i18n.getLocalizedString('kony.mb.Hamburger.AccountStatements'),
      MENUENGAGE: kony.i18n.getLocalizedString('kony.mb.Hamburger.Engage'),
      MENUMESSAGES: kony.i18n.getLocalizedString('kony.mb.Hamburger.Messages'),
      MENUNOTIFICATIONS: kony.i18n.getLocalizedString('kony.mb.Hamburger.Notifications'),
      MENUSETTINGS: kony.i18n.getLocalizedString('kony.mb.Hamburger.Settings'),
      MENUCHATBOT: kony.i18n.getLocalizedString('kony.mb.Hamburger.chatbot'),
      MENULOCATE: kony.i18n.getLocalizedString('kony.mb.Hamburger.Locateus'),
      MENUWEALTHDASHBOARD: 'Wealth',
      MENUWEALTHWATCHLIST: 'Watchlist',
      MENUCONTACT: kony.i18n.getLocalizedString('kony.mb.Hamburger.Contactus'),
      MENUMYWALLET: kony.i18n.getLocalizedString('kony.mb.Hamburger.Mywallet'),
      MENUBILLPAY: kony.i18n.getLocalizedString('kony.mb.Hamburger.BillPay'),
      MENUFEEDBACK: kony.i18n.getLocalizedString('kony.mb.Hamburger.FeedBack'),
      MENUCHECKDEPOSIT: kony.i18n.getLocalizedString(
        'kony.mb.Hamburger.CheckDeposit'
      ),
      MENUCARDLESS: kony.i18n.getLocalizedString(
        'kony.mb.Hamburger.CardLessCash'
      ),
      MENUCARDMANAGEMENT: kony.i18n.getLocalizedString(
        'kony.mb.Hamburger.CardManagement'
      ),
      MENUMANAGEOTHERBANKACCOUNTS: kony.i18n.getLocalizedString(
        'kony.mb.ExternalAccounts.ManageOtherBankAccounts'
      ),
      MENUPFMMYMONEY: kony.i18n.getLocalizedString('kony.mb.PFMMyMoney'),
      MENUSENDMONEY: kony.i18n.getLocalizedString('kony.mb.Transfer.SendMoney'),
      MENUACH: kony.i18n.getLocalizedString('kony.mb.Hamburger.ACH'),
      MENUAPPROVALREQUEST: kony.i18n.getLocalizedString(
        'kony.mb.Hamburger.ApprovalRequest'
      ),
      MENUUSERMANAGEMENT: kony.i18n.getLocalizedString(
        'kony.mb.Hamburger.UserManagement'
      ),
      MENUFOREIGNEXCHANGE: kony.i18n.getLocalizedString(
        'kony.mb.Hamburger.exchangeRates'
      )
    };
    this.constants = constants;
    if(!this.isFastTransfersFlowEnabled()){
      var hamburgerMenuItems = [
        {
          img: 'accounts.png',
          text: this.constants.MENUACCOUNTS,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHWATCHLIST,
          info: null,
        },
        {
          img: 'transfer.png',
          text: this.constants.MENUTRANSFERS,
          info: null,
        },
        {
          img: 'transfer.png',
          text: this.constants.MENUUNIFIEDTRANSFERSFLOW,
          info: null,
        },
        {
          img: 'chequemgmt.png',
          text: this.constants.MENUCHEQUEMANAGEMENT,
          info: null,
        },
        {
          img: 'billpay.png',
          text: this.constants.MENUBILLPAY,
          info: null,
        },
        {
          img: 'checkdepositimg.png',
          text: this.constants.MENUCHECKDEPOSIT,
          info: null,
        },
        {
          img: 'cardlesscash.png',
          text: this.constants.MENUCARDLESS,
          info: null,
        },
        {
          img: 'cardmange.png',
          text: this.constants.MENUCARDMANAGEMENT,
          info: null,
        },
        {
          img: 'disputetransaction.png',
          text: this.constants.MENUDISPUTE,
          info: null,
        },
        //@TODO add constants and assets
        {
          img: 'accounts.png',
          text: this.constants.MENUACH,
          info: null,
        },
        {
          img: 'approvalrequesticon.png',
          text: this.constants.MENUAPPROVALREQUEST,
          info: null,
        },
        {
          img: 'exchangerate.png',
          text: this.constants.MENUFOREIGNEXCHANGE,
          info: null,
        },
        {
          img: 'manage_user.png',
          text: this.constants.MENUUSERMANAGEMENT,
          info: null,
        },
        {
          img: 'mangeothrbank.png',
          text: this.constants.MENUMANAGEOTHERBANKACCOUNTS,
          info: null,
        },
        {
          img: 'opennew.png',
          text: this.constants.MENUOPENACOUNT,
          info: null,
        },
        {
          img: 'mymoney.png',
          text: this.constants.MENUPFMMYMONEY,
          info: null,
        },
        {
          img: 'engagemenu.png',
          text: this.constants.MENUENGAGE,
          info: null,
        },
        {
          img: 'menuaccounts.png',
          text: this.constants.MENUACCOUNTSTATEMENTS,
          info: null,
        },
        {
          img: 'message.png',
          text: this.constants.MENUMESSAGES,
          info: null,
        },
        {
          img: 'notification.png',
          text: this.constants.MENUNOTIFICATIONS,
          info: null,
        },
        {
          img: 'settings.png',
          text: this.constants.MENUSETTINGS,
          info: null,
        },
        {
          img: 'locateus.png',
          text: this.constants.MENULOCATE,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHDASHBOARD,
          info: null,
        }, 
        {
          img: 'feedbackmenu.png',
          text: this.constants.MENUFEEDBACK,
          info: null,
        },
        {
          img: 'contactus.png',
          text: this.constants.MENUCONTACT,
          info: null,
        },
      ];
      if (this.getDeploymentGeography() === "EUROPE") {
        var itemsToInsert = [
          {
            img: 'payapersonsmall.png',
            text: this.constants.MENUSENDMONEY,
            info: null
          }, 
          {
            img: 'transferactivities.png',
            text: this.constants.MENUTRANSFERSACTIVITY,
            info: null,
          },
          {
            img: 'managetransferrecipients.png',
            text: this.constants.MENUMANAGERECIPIENTS,
            info: null,
          }
        ];
        hamburgerMenuItems.splice.apply(hamburgerMenuItems, [2,0].concat(itemsToInsert));
      }
    }
    else{
      var hamburgerMenuItems = [
        {
          img: 'accounts.png',
          text: this.constants.MENUACCOUNTS,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHWATCHLIST,
          info: null,
        },
        {
          img: 'transfer.png',
          text: this.constants.MENUMONEYMOVEMENTTRANSFERS,
          info: null,
        },
        {
          img: 'chequemgmt.png',
          text: this.constants.MENUCHEQUEMANAGEMENT,
          info: null,
        },
        {
          img: 'transferactivities.png',
          text: this.constants.MENUTRANSFERSACTIVITY,
          info: null,
        },
        {
          img: 'transfer.png',
          text: this.constants.MENUUNIFIEDTRANSFERSFLOW,
          info: null,
        },
        {
          img: 'managetransferrecipients.png',
          text: this.constants.MENUMANAGERECIPIENTS,
          info: null,
        },
        {
          img: 'billpay.png',
          text: this.constants.MENUBILLPAY,
          info: null,
        },
        {
          img: 'checkdepositimg.png',
          text: this.constants.MENUCHECKDEPOSIT,
          info: null,
        },
        {
          img: 'cardlesscash.png',
          text: this.constants.MENUCARDLESS,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUACH,
          info: null,
        },
        {
          img: 'approvalrequesticon.png',
          text: this.constants.MENUAPPROVALREQUEST,
          info: null,
        },
        {
          img: 'exchangerate.png',
          text: this.constants.MENUFOREIGNEXCHANGE,
          info: null,
        },
        {
          img: 'manage_user.png',
          text: this.constants.MENUUSERMANAGEMENT,
          info: null,
        },
        {
          img: 'cardmange.png',
          text: this.constants.MENUCARDMANAGEMENT,
          info: null,
        },{
          img: 'disputetransaction.png',
          text: this.constants.MENUDISPUTE,
          info: null,
        },
        {
          img: 'mangeothrbank.png',
          text: this.constants.MENUMANAGEOTHERBANKACCOUNTS,
          info: null,
        },
        {
          img: 'opennew.png',
          text: this.constants.MENUOPENACOUNT,
          info: null,
        },
        {
          img: 'mymoney.png',
          text: this.constants.MENUPFMMYMONEY,
          info: null,
        },
        {
          img: 'engagemenu.png',
          text: this.constants.MENUENGAGE,
          info: null,
        },
        {
          img: 'menuaccounts.png',
          text: this.constants.MENUACCOUNTSTATEMENTS,
          info: null,
        },
        {
          img: 'message.png',
          text: this.constants.MENUMESSAGES,
          info: null,
        },
        {
          img: 'notification.png',
          text: this.constants.MENUNOTIFICATIONS,
          info: null,
        },
        {
          img: 'settings.png',
          text: this.constants.MENUSETTINGS,
          info: null,
        },
        {
          img: 'locateus.png',
          text: this.constants.MENULOCATE,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHDASHBOARD,
          info: null,
        }, 
        {
          img: 'feedbackmenu.png',
          text: this.constants.MENUFEEDBACK,
          info: null,
        },
        {
          img: 'contactus.png',
          text: this.constants.MENUCONTACT,
          info: null,
        },
      ];
    }
    this.hamburgerMenuItems = hamburgerMenuItems;
    /**@member {Array} hamburgerMenuItems holds the list of HamburgerMenu Items*/
    this.masterHamburgerData = JSON.parse(
      JSON.stringify(this.hamburgerMenuItems)
    );
    if(!this.isFastTransfersFlowEnabled()){
      var moreMenuItems = [
        {
          img: 'checkdepositimg.png',
          text: this.constants.MENUCHECKDEPOSIT,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHWATCHLIST,
          info: null,
        },
        {
          img: 'cardlesscash.png',
          text: this.constants.MENUCARDLESS,
          info: null,
        },
        {
          img: 'chequemgmt.png',
          text: this.constants.MENUCHEQUEMANAGEMENT,
          info: null,
        },
        {
          img: 'transfer.png',
          text: this.constants.MENUUNIFIEDTRANSFERSFLOW,
          info: null,
        },
        {
          img: 'cardmange.png',
          text: this.constants.MENUCARDMANAGEMENT,
          info: null,
        },{
          img: 'disputetransaction.png',
          text: this.constants.MENUDISPUTE,
          info: null,
        },
        {
          img: 'mangeothrbank.png',
          text: this.constants.MENUMANAGEOTHERBANKACCOUNTS,
          info: null,
        },
        //@TODO add constants and assets
        {
          img: 'accounts.png',
          text: this.constants.MENUACH,
          info: null,
        },
        {
          img: 'approvalrequesticon.png',
          text: this.constants.MENUAPPROVALREQUEST,
          info: null,
        },
        {
          img: 'exchangerate.png',
          text: this.constants.MENUFOREIGNEXCHANGE,
          info: null,
        },
        {
          img: 'manage_user.png',
          text: this.constants.MENUUSERMANAGEMENT,
          info: null,
        },
        {
          img: 'opennew.png',
          text: this.constants.MENUOPENACOUNT,
          info: null,
        },
        {
          img: 'mymoney.png',
          text: this.constants.MENUPFMMYMONEY,
          info: null,
        },
        {
          img: 'engagemenu.png',
          text: this.constants.MENUENGAGE,
          info: null,
        },
        {
          img: 'menuaccounts.png',
          text: this.constants.MENUACCOUNTSTATEMENTS,
          info: null,
        },
        {
          img: 'message.png',
          text: this.constants.MENUMESSAGES,
          info: null,
        },
        {
          img: 'notification.png',
          text: this.constants.MENUNOTIFICATIONS,
          info: null,
        },
        {
          img: 'settings.png',
          text: this.constants.MENUSETTINGS,
          info: null,
        },
        {
          img: 'locateus.png',
          text: this.constants.MENULOCATE,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHDASHBOARD,
          info: null,
        }, 
        {
          img: 'feedbackmenu.png',
          text: this.constants.MENUFEEDBACK,
          info: null,
        },
        {
          img: 'contactus.png',
          text: this.constants.MENUCONTACT,
          info: null,
        },
      ];
      if (this.getDeploymentGeography() === "EUROPE") {
        var itemsToInsert = [
          {
            img: 'payapersonsmall.png',
            text: this.constants.MENUSENDMONEY,
            info: null
          }, 
          {
            img: 'transferactivities.png',
            text: this.constants.MENUTRANSFERSACTIVITY,
            info: null,
          },
          {
            img: 'managetransferrecipients.png',
            text: this.constants.MENUMANAGERECIPIENTS,
            info: null,
          }
        ];
        moreMenuItems.splice.apply(moreMenuItems, [2, 0].concat(itemsToInsert));
      }
    }
    else{
      var moreMenuItems = [
        {
          img: 'checkdepositimg.png',
          text: this.constants.MENUCHECKDEPOSIT,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHWATCHLIST,
          info: null,
        },
        {
          img: 'transferactivities.png',
          text: this.constants.MENUTRANSFERSACTIVITY,
          info: null,
        },
        {
          img: 'chequemgmt.png',
          text: this.constants.MENUCHEQUEMANAGEMENT,
          info: null,
        },
        {
          img: 'transfer.png',
          text: this.constants.MENUUNIFIEDTRANSFERSFLOW,
          info: null,
        },
        {
          img: 'managetransferrecipients.png',
          text: this.constants.MENUMANAGERECIPIENTS,
          info: null,
        },
        {
          img: 'cardlesscash.png',
          text: this.constants.MENUCARDLESS,
          info: null,
        },
        {
          img: 'cardmange.png',
          text: this.constants.MENUCARDMANAGEMENT,
          info: null,
        },{
          img: 'disputetransaction.png',
          text: this.constants.MENUDISPUTE,
          info: null,
        },
        {
          img: 'mangeothrbank.png',
          text: this.constants.MENUMANAGEOTHERBANKACCOUNTS,
          info: null,
        },
        //@TODO add constants and assets
        {
          img: 'accounts.png',
          text: this.constants.MENUACH,
          info: null,
        },
        {
          img: 'approvalrequesticon.png',
          text: this.constants.MENUAPPROVALREQUEST,
          info: null,
        },
        {
          img: 'exchangerate.png',
          text: this.constants.MENUFOREIGNEXCHANGE,
          info: null,
        },
        {
          img: 'manage_user.png',
          text: this.constants.MENUUSERMANAGEMENT,
          info: null,
        },
        {
          img: 'opennew.png',
          text: this.constants.MENUOPENACOUNT,
          info: null,
        },
        {
          img: 'mymoney.png',
          text: this.constants.MENUPFMMYMONEY,
          info: null,
        },
        {
          img: 'engagemenu.png',
          text: this.constants.MENUENGAGE,
          info: null,
        },
        {
          img: 'menuaccounts.png',
          text: this.constants.MENUACCOUNTSTATEMENTS,
          info: null,
        },
        {
          img: 'message.png',
          text: this.constants.MENUMESSAGES,
          info: null,
        },
        {
          img: 'notification.png',
          text: this.constants.MENUNOTIFICATIONS,
          info: null,
        },
        {
          img: 'settings.png',
          text: this.constants.MENUSETTINGS,
          info: null,
        },
        {
          img: 'locateus.png',
          text: this.constants.MENULOCATE,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHDASHBOARD,
          info: null,
        }, 
        {
          img: 'feedbackmenu.png',
          text: this.constants.MENUFEEDBACK,
          info: null,
        },
        {
          img: 'contactus.png',
          text: this.constants.MENUCONTACT,
          info: null,
        },
      ];
    }
    this.moreMenuItems = moreMenuItems;
    /**@member {Array} moreMenuItems holds the list of more MenuItems*/
    this.mastermoreMenuItems = JSON.parse(JSON.stringify(this.moreMenuItems));
    /**@member {Array} iPhoneMenuItems holds the list of iPhone MenuItems*/
    if(!this.isFastTransfersFlowEnabled()){
      var iPhoneMenuItems = [
        {
          img: 'accounts.png',
          text: this.constants.MENUACCOUNTS,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHWATCHLIST,
          info: null,
        },
        {
          img: 'transfer.png',
          text: this.constants.MENUTRANSFERS,
          info: null,
        },
        {
          img: 'billpay.png',
          text: this.constants.MENUBILLPAY,
          info: null,
        },
      ];
    }
    else{
      var iPhoneMenuItems = [
        {
          img: 'accounts.png',
          text: this.constants.MENUACCOUNTS,
          info: null,
        },
        {
          img: 'accounts.png',
          text: this.constants.MENUWEALTHWATCHLIST,
          info: null,
        },
        {
          img: 'transfer.png',
          text: this.constants.MENUMONEYMOVEMENTTRANSFERS,
          info: null,
        },
        {
          img: 'billpay.png',
          text: this.constants.MENUBILLPAY,
          info: null,
        },
      ];
    }
    this.iPhoneMenuItems = iPhoneMenuItems;
  };
  /**
   * Method to check if business banking is enabled.
   * @returns {boolean} true/false
   */
  ConfigurationManager.prototype.isBusinessBankingEnabled = function() {
    return true;
    //TODO AOLB-611
    //return this.configurations.getItem("ISBUSINESSBANKINGENABLED") === "true";
  };
  /**
   * Method to set application property.
   */
  ConfigurationManager.prototype.setAppProperties = function(value) {
    this.isAppPropertiesLoaded = value;
  };
  // Date format
  ConfigurationManager.prototype.getCalendarDateFormat = function() {
    var dummy;
    var locale = this.getLocale();
    locale = locale.toLowerCase();
    locale = locale.replace('_', '-');
    if (locale == 'en-us' || locale == 'en') {
      dummy = 'MM/DD/YYYY';
    } else if (locale == 'en-gb' || locale == 'fr-fr' || locale == 'es-es') {
      dummy = 'DD/MM/YYYY';
    } else if (locale == 'de-de') {
      dummy = 'DD.MM.YYYY';
    } else if (locale == 'sv-se') {
      dummy = 'YYYY-DD-MM';
    }
    return dummy;
  };
  ConfigurationManager.prototype.setBrowserRefreshProperty = function(value) {
    this.isAppRefreshed = value;
  };
  /**
   * Method to get Onboarding Applicaiton ID.
   */
  ConfigurationManager.prototype.getOnboardingAppID = function(value) {
    return this.onBoardingAppName;
  };
  /**
   * Method to set isAppRefreshed flag to true if app is refreshed.
   */
  ConfigurationManager.prototype.setBrowserRefreshProperty = function(value) {
    this.isAppRefreshed = value;
  };
  ConfigurationManager.prototype.isFastTransfersFlowEnabled = function () {
    var scope = this;
    if(scope.getDeploymentGeography() && scope.getDeploymentGeography()=="EUROPE")
      return false;
    return this.fastTransfersFlowEnabled === "true";
  };

  ConfigurationManager.prototype.isEuroFlow = function () {
    var scope = this;
    if(scope.getDeploymentGeography() && scope.getDeploymentGeography()=="EUROPE")
      return true;
    return false;
  };

  ConfigurationManager.prototype.isFastTransfersFlowPresent = function () {
    var scope = this;
    return this.fastTransfersFlowEnabled === "true";
  };

  //Business banking config
  ConfigurationManager.prototype.isApproveTransactionEnabled = function() {
    return true;//(this.isSMEUser === "true" || this.isCombinedUser === "true" );
    /*(this.isInternalFundTransfersApproveTransactionsEnabled === "true" ||
              this.isFundsTransferApproveTransactionsEnabled() ||
              this.isDomesticWireTransfersApproveTransactionsEnabled === "true" ||
              this.isInternationalWireTransfersApproveTransactionsEnabled === "true" ||
              this.isBillPaymentApproveTransactionsEnabled === "true" ||
              this.isP2PApproveTransactionsEnabled === "true" );*/
  };

  ConfigurationManager.prototype.isApproveACHEnabled = function() {
    return true; //(this.isSMEUser === "true" || this.isCombinedUser === "true");//(this.isACHPaymentApproveTransactionsEnabled === "true" || this.isACHCollectionApproveTransactionsEnabled === "true" );
  };

  ConfigurationManager.prototype.isViewACHEnabled = function() {
    return true; //(this.isSMEUser === "true" || this.isCombinedUser === "true");//(this.isViewACHPaymentsEnabled() || this.isViewACHCollectionEnabled() );
  };

  ConfigurationManager.prototype.isACHEnabled = function() {
    return true; //(this.isSMEUser === "true" || this.isCombinedUser === "true");//(this.isViewACHEnabled() || this.isApproveACHEnabled() );
  };

  ConfigurationManager.prototype.isViewACHPaymentsEnabled = function() {
    return true; //(this.isSMEUser === "true" || this.isCombinedUser === "true");//(this.isACHPaymentViewTransactionsEnabled === "true");
  };

  ConfigurationManager.prototype.isViewACHCollectionEnabled = function() {
    return true; //(this.isSMEUser === "true" || this.isCombinedUser === "true");//(this.isACHCollectionViewTransactionsEnabled === "true");
  };

  ConfigurationManager.prototype.isRequestTransactionEnabled = function() {
    return true;//(this.isSMEUser === "true" || this.isCombinedUser === "true");
    /*(this.isInternalFundTransfersCreateTransactionEnabled === "true" ||
              this.isFundsTransferCreateTransactionEnabled() ||
              this.isDomesticWireTransfersCreateTransactionEnabled === "true" ||
              this.isInternationalWireTransfersCreateTransactionEnabled === "true" ||
              this.isBillPaymentCreateTransactionEnabled === "true" ||
              this.isP2PCreateTransactionEnabled === "true" );*/
  };

  ConfigurationManager.prototype.isRequestACHEnabled = function() {
    return true;//(this.isSMEUser === "true" || this.isCombinedUser === "true");
    /*(this.isACHPaymentCreateTransactionEnabled === "true" ||
              this.isACHCollectionCreateTransactionEnabled === "true" );*/
  };

  ConfigurationManager.prototype.isFundsTransferCreateTransactionEnabled = function() {
    return true;//(this.isSMEUser === "true" || this.isCombinedUser === "true");
    /*(this.isInternalFundTransfersCreateTransactionEnabled === "true" ||
            this.isTransferBetweenCustomersAccountsCreateTransactionEnabled === "true" ||
            this.isInterbankAccountToAccountFundTransferCreateTransactionEnabled === "true" ||
            this.isInternationAccountToAccountFundTransferCreateTransactionEnabled === "true" ||
            this.isWireTransfersCreateTransactionEnabled());*/
  };

  ConfigurationManager.prototype.isFundsTransferApproveTransactionsEnabled = function() {
    return true;//(this.isSMEUser === "true" || this.isCombinedUser === "true");
    /*(this.isInternalFundTransfersApproveTransactionsEnabled === "true" ||
            this.isTransferBetweenCustomersAccountsApproveTransactionsEnabled === "true" ||
            this.isInterbankAccountToAccountFundTransferApproveTransactionsEnabled === "true" ||
            this.isInternationAccountToAccountFundTransferApproveTransactionsEnabled === "true" ||
            this.isWireTransfersApproveTransactionsEnabled());*/
  };

  ConfigurationManager.prototype.isFundsTransferViewTransactionsEnabled = function() {
    return true;//(this.isSMEUser === "true" || this.isCombinedUser === "true");
    /*(this.isIntraBankFundTransferViewTransactionsEnabled === "true" ||
            this.isTransferBetweenCustomersAccountsViewTransactionsEnabled === "true" ||
            this.isInterbankAccountToAccountFundTransferViewTransactionsEnabled === "true" ||
            this.isInternationAccountToAccountFundTransferViewTransactionsEnabled === "true" ||
            this.isWireTransfersViewTransactionsEnabled());*/
  };

  ConfigurationManager.prototype.isFundsTransferManagePayeesEnabled = function() {
    return true;//(this.isSMEUser === "true" || this.isCombinedUser === "true");
    /*(this.isInternalFundTransfersManagePayeesEnabled === "true" ||
            this.isTransferBetweenCustomersAccountsManagePayeesEnabled === "true" ||
            this.isInterbankAccountToAccountFundTransferManagePayeesEnabled === "true" ||
            this.isInternationAccountToAccountFundTransferManagePayeesEnabled === "true" ||
            this.isWireTransfersManagePayeesEnabled());*/
  };

  ConfigurationManager.prototype.isFundsTransferSelfApprovalEnabled = function() {
    return true;//(this.isSMEUser === "true" || this.isCombinedUser === "true");
    /*(this.isInternalFundTransfersSelfApprovalEnabled === "true" ||
            this.isTransferBetweenCustomersAccountsSelfApprovalEnabled === "true" ||
            this.isInterbankAccountToAccountFundTransferSelfApprovalEnabled === "true" ||
            this.isInternationAccountToAccountFundTransferSelfApprovalEnabled === "true" ||
            this.isWireTransfersSelfApprovals());*/
  };

  ConfigurationManager.prototype.isWireTransfersCreateTransactionEnabled = function() {
    return true;//(this.isSMEUser === "true" || this.isCombinedUser === "true");//(this.isDomesticWireTransfersCreateTransactionEnabled === "true" ||
    //this.isInternationalWireTransfersCreateTransactionEnabled === "true");
  };

  ConfigurationManager.prototype.isWireTransfersApproveTransactionsEnabled = function() {
    return true;//(this.isSMEUser === "true" || this.isCombinedUser === "true");\n//(this.isDomesticWireTransfersApproveTransactionsEnabled === "true" ||
    //this.isInternationalWireTransfersApproveTransactionsEnabled === "true");
  };

  ConfigurationManager.prototype.isWireTransfersViewTransactionsEnabled = function() {
    return true;//(this.isSMEUser === "true" || this.isCombinedUser === "true");\n//(this.isDomesticWireTransfersViewTransactionsEnabled === "true" ||
    //this.isInternationalWireTransfersViewTransactionsEnabled === "true");
  };

  ConfigurationManager.prototype.isWireTransfersManagePayeesEnabled = function() {
    return true;//(this.isSMEUser === "true" || this.isCombinedUser === "true");\n//(this.isDomesticWireTransfersManagePayeesEnabled === "true" ||
    //this.isInternationalWireTransfersManagePayeesEnabled === "true");
  };

  ConfigurationManager.prototype.isWireTransfersSelfApprovals = function() {
    return true;//(this.isSMEUser === "true" || this.isCombinedUser === "true");\n//(this.isDomesticWireTransfersSelfApprovalEnabled === "true" ||
    //this.isInternationalWireTransfersSelfApprovalEnabled === "true");
  };

  /**
        This method retunrs the list of permissions required for ApprovalReq module
    **/
  ConfigurationManager.prototype.getApprovalReqModulePermissionsList = function(){
    var features = this.getApprovalsFeaturePermissionsList();
    return features.concat(this.getRequestsFeaturePermissionsList());
  };

  /**
        This method returns the list of permissions required for Approvals module
    **/
  ConfigurationManager.prototype.getApprovalsFeaturePermissionsList = function(){
    var features = this.getACHTransactionApprovalsFeaturePermissionsList();
    features = features.concat(this.getACHFileApprovalsFeaturePermissionsList());
    features = features.concat(this.getGeneralTransactionApprovalFeaturePermissionsList());
    return features.concat(this.getBulkPaymentsApprovalsFeaturePermissionsList());
  };

  /**
        This method returns the list of permissions required for Approvals  for ach transactions
    **/
  ConfigurationManager.prototype.getACHTransactionApprovalsFeaturePermissionsList = function(){
    return [
      'ACH_COLLECTION_APPROVE', 'ACH_COLLECTION_SELF_APPROVAL', 'ACH_PAYMENT_APPROVE','ACH_PAYMENT_SELF_APPROVAL'
    ];
  };

  /**
        This method returns the list of permissions required for Approvals  for ach files
    **/
  ConfigurationManager.prototype.getACHFileApprovalsFeaturePermissionsList = function(){
    return [
      'ACH_FILE_APPROVE', 'ACH_FILE_SELF_APPROVAL'
    ];
  };

  /**
        This method returns the list of permissions required for Approvals module for general transactions
    **/
  ConfigurationManager.prototype.getGeneralTransactionApprovalFeaturePermissionsList = function(){
    return [
      'BILL_PAY_APPROVE', 'BILL_PAY_SELF_APPROVAL',
      'DOMESTIC_WIRE_TRANSFER_APPROVE', 'DOMESTIC_WIRE_TRANSFER_SELF_APPROVAL',
      'INTER_BANK_ACCOUNT_FUND_TRANSFER_APPROVE', 'INTER_BANK_ACCOUNT_FUND_TRANSFER_SELF_APPROVAL',
      'INTERNATIONAL_ACCOUNT_FUND_TRANSFER_APPROVE','INTERNATIONAL_ACCOUNT_FUND_TRANSFER_SELF_APPROVAL',
      'INTERNATIONAL_WIRE_TRANSFER_APPROVE', 'INTERNATIONAL_WIRE_TRANSFER_SELF_APPROVAL',
      'INTRA_BANK_FUND_TRANSFER_APPROVE', 'INTRA_BANK_FUND_TRANSFER_SELF_APPROVAL',
      'P2P_APPROVE', 'P2P_SELF_APPROVAL',
      'TRANSFER_BETWEEN_OWN_ACCOUNT_APPROVE', 'TRANSFER_BETWEEN_OWN_ACCOUNT_SELF_APPROVAL'
    ];
  };

  /**
        This method returns the list of permissions required for Approvals  for Bulk Payments
    **/
  ConfigurationManager.prototype.getBulkPaymentsApprovalsFeaturePermissionsList = function(){
    return [
      'BULK_PAYMENT_REQUEST_APPROVE'
    ];
  };

  ConfigurationManager.prototype.getBulkPaymentRequestPaymentOrderAddPermissionList = function(){
    return [
      'BULK_PAYMENT_REQUEST_ADD_PO'
    ];
  };

  ConfigurationManager.prototype.getBulkPaymentRequestPaymentOrderEditPermissionList = function(){
    return [
      'BULK_PAYMENT_REQUEST_EDIT_PO'
    ];
  };

  ConfigurationManager.prototype.getBulkPaymentRequestPaymentOrderRemovePermissionList = function(){
    return [
      'BULK_PAYMENT_REQUEST_REMOVE_PO'
    ];
  };

  /**
        This method returns the list of permissions required for Requests module
    **/
  ConfigurationManager.prototype.getRequestsFeaturePermissionsList = function(){
    var reqFeatures = this.getCreateACHTransactionPermissionsList();
    reqFeatures = reqFeatures.concat(this.getUploadACHFilePermissionsList());
    reqFeatures = reqFeatures.concat(this.getCreateGeneralTransactionPermissionsList());
    return reqFeatures.concat(this.getBulkPaymentRequestPermissionsList());
  }

  /**
        This method returns the list of permissions required for approval and Requests module mobile
    **/
  ConfigurationManager.prototype.getApprovalsAndRequestsFeaturePermissionsList = function(){
    var approvalFeatureList = this.getApprovalsFeaturePermissionsList();
    var requestFeatureList = this.getRequestsFeaturePermissionsList();
    return approvalFeatureList.concat(requestFeatureList);
  }

  /**
        This method returns the list of permissions required to create ach transaction
    **/
  ConfigurationManager.prototype.getCreateACHTransactionPermissionsList = function(){
    return [
      'ACH_COLLECTION_CREATE',
      'ACH_PAYMENT_CREATE'
    ];
  };

  ConfigurationManager.prototype.getEditACHTemplatePermissionsList = function(){
    return [
      'ACH_COLLECTION_EDIT_TEMPLATE',
      'ACH_PAYMENT_EDIT_TEMPLATE'
    ];
  };

  ConfigurationManager.prototype.getDeleteACHTemplatePermissionsList = function(){
    return [
      'ACH_COLLECTION_DELETE_TEMPLATE',
      'ACH_PAYMENT_DELETE_TEMPLATE'
    ];
  };

  /**
        This method returns the list of permissions required to upload ach file
    **/
  ConfigurationManager.prototype.getUploadACHFilePermissionsList = function(){
    return [
      'ACH_FILE_UPLOAD'
    ];
  };

  /**
        This method returns the list of permissions required to create ach template
    **/
  ConfigurationManager.prototype.getCreateACHTemplatePermissionsList = function(){
    return [
      'ACH_COLLECTION_CREATE_TEMPLATE',
      'ACH_PAYMENT_CREATE_TEMPLATE'
    ];
  };

  /**
        This method returns the list of permissions required to create general transactions
    **/
  ConfigurationManager.prototype.getCreateGeneralTransactionPermissionsList = function(){
    return [
      'BILL_PAY_CREATE',
      'DOMESTIC_WIRE_TRANSFER_CREATE',
      'INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE',
      'INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE',
      'INTERNATIONAL_WIRE_TRANSFER_CREATE',
      'INTRA_BANK_FUND_TRANSFER_CREATE',
      'P2P_CREATE',
      'TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE'
    ];
  };

  /**
        This method returns the list of permissions required to create Bulk payment request
    **/
  ConfigurationManager.prototype.getBulkPaymentRequestPermissionsList = function(){
    return [
      'BULK_PAYMENT_REQUEST_SUBMIT'
    ];
  };

  /**
        This method returns the list of permissions required to view ACH Transactions
    **/
  ConfigurationManager.prototype.getViewACHTransactionPermissionsList = function(){
    return [
      'ACH_COLLECTION_VIEW', 
      'ACH_PAYMENT_VIEW'
    ];
  };

  /**
        This method returns the list of permissions required to view ACH Files
    **/
  ConfigurationManager.prototype.getViewACHFilePermissionsList = function(){
    return [
      'ACH_FILE_VIEW'
    ];
  };

  /**
        This method returns the list of permissions required to view ACH Templates
    **/
  ConfigurationManager.prototype.getViewACHTemplatePermissionsList = function(){
    return [
      'ACH_COLLECTION_VIEW_TEMPLATE', 
      'ACH_PAYMENT_VIEW_TEMPLATE'
    ];
  };

  /**
        This method returns the list of permissions required to show ACH Templates Tab
    **/
  ConfigurationManager.prototype.getACHTemplateTabPermissionsList = function(){
    var features = this.getViewACHTemplatePermissionsList();
    return features.concat(this.getCreateACHTemplatePermissionsList());
  };

  /**
        This method returns the list of permissions required to view ACH Transactions Tab
    **/
  ConfigurationManager.prototype.getACHTransactionsTabPermissionsList = function(){
    var features = this.getViewACHTransactionPermissionsList();
    return features.concat(this.getCreateACHTransactionPermissionsList());
  };

  /**
        This method returns the list of permissions required to view ACH Files Tab
    **/
  ConfigurationManager.prototype.getACHFilesTabPermissionsList = function(){
    var features = this.getViewACHFilePermissionsList();
    return features.concat(this.getUploadACHFilePermissionsList());
  };

  /**
        This method returns the list of permissions required to view ACH Approvals Tab
    **/
  ConfigurationManager.prototype.getACHApprovalsTabPermissionsList = function(){
    var features = this.getACHTransactionApprovalsFeaturePermissionsList();
    return features.concat(this.getACHFileApprovalsFeaturePermissionsList());
  };

  /**
        This method returns the list of permissions required to view General Transactions
    **/
  ConfigurationManager.prototype.getViewGeneralTransactionPermissionsList = function(){
    return [
      'BILL_PAY_VIEW', 'BILL_PAY_VIEW_PAYMENTS',
      'DOMESTIC_WIRE_TRANSFER_VIEW',
      'INTERNATIONAL_ACCOUNT_FUND_TRANSFER_VIEW',
      'INTERNATIONAL_WIRE_TRANSFER_VIEW',
      'INTER_BANK_ACCOUNT_FUND_TRANSFER_VIEW',
      'INTRA_BANK_FUND_TRANSFER_VIEW',
      'P2P_VIEW',
      'TRANSFER_BETWEEN_OWN_ACCOUNT_VIEW'
    ];
  };

  /**
        This method returns the list of permissions required to view Portfolio List 
    **/
  ConfigurationManager.prototype.getPortfolioPermissionsList = function(){
    return [
      'WEALTH_PORTFOLIO_DETAILS_SUMMARY_VIEW', 'WEALTH_PORTFOLIO_DETAILS_ASSET_ALLOCATION_VIEW',
      'WEALTH_PORTFOLIO_DETAILS_CASH_BALANCE_VIEW',
      'WEALTH_PRODUCT_DETAILS_INSTRUMENT_VIEW',
      'WEALTH_PORTFOLIO_DETAILS_ACCOUNT_INFO_VIEW'
    ];
  };

  /**
  This method returns the list of permissions required to transfer cash 
  **/
  ConfigurationManager.prototype.getTransferCashPermission = function(){
    return [
      'WEALTH_CASH_MGMT_TRANSFER_CASH_CREATE'
    ];
  };

  /**
  This method returns the list of permissions required to convert currency 
  **/
  ConfigurationManager.prototype.getConvertCurrencyPermission = function(){
    return [
      'WEALTH_CASH_MGMT_CURRENCY_COVERSION_CREATE'
    ];
  };

  /**
  This method returns the list of permissions required to cash balance view 
  **/
  ConfigurationManager.prototype.getCashBalanceViewPermission = function(){
    return [
      'WEALTH_CASH_MGMT_CARD_BALANCE_VIEW'
    ];
  };

  /**
  This method returns the list of permissions required to holdings detail view 
  **/
  ConfigurationManager.prototype.getHoldingsdetailsPermissions= function(){
    return [
      'WEALTH_PORTFOLIO_DETAILS_HOLDINGS_VIEW'
    ];
  };

  /**
  This method returns the list of permissions required to open order view
  **/
  ConfigurationManager.prototype.getOpenOrderViewPermissions= function(){
    return [
      'WEALTH_ORDER_MGMT_OPEN_ORDER_VIEW'
    ];
  };

  /**
  This method returns the list of permissions required to history order view
  **/
  ConfigurationManager.prototype.getHistoryOrderViewPermissions= function(){
    return [
      'WEALTH_ORDER_MGMT_ORDER_HISTORY_VIEW'
    ];
  };

  /**
  This method returns the list of permissions required to transaction detail view
  **/
  ConfigurationManager.prototype.getTransactionDetailViewPermissions= function(){
    return [
      'WEALTH_PORTFOLIO_DETAILS_TRANSACTIONS_VIEW'
    ];
  };

  /**
  This method returns the list of permissions required to portfolio detail view
  **/
  ConfigurationManager.prototype.getPortfolioDetailViewPermissions= function(){
    return [
      'WEALTH_PORTFOLIO_DETAILS_SUMMARY_VIEW'
    ];
  };

  /**
  This method returns the list of permissions required to portfolio asset allocation view
  **/
  ConfigurationManager.prototype.getPortfolioAssetAllocationViewPermissions= function(){
    return [
      'WEALTH_PORTFOLIO_DETAILS_ASSET_ALLOCATION_VIEW'
    ];
  };

  /**
  This method returns the list of permissions required to portfolio cash balance view
  **/
  ConfigurationManager.prototype.getPortfolioCashBalanceViewPermissions= function(){
    return [
      'WEALTH_PORTFOLIO_DETAILS_CASH_BALANCE_VIEW'
    ];
  };

  /**
  This method returns the list of permissions required to portfolio product search view
  **/
  ConfigurationManager.prototype.getPortfolioProductSearchViewPermissions= function(){
    return [
      'WEALTH_PRODUCT_DETAILS_INSTRUMENT_VIEW'
    ];
  };

  /**
  This method returns the list of permissions required to portfolio account info view
  **/
  ConfigurationManager.prototype.getPortfolioAccountInfoViewPermissions= function(){
    return [
      'WEALTH_PORTFOLIO_DETAILS_ACCOUNT_INFO_VIEW'
    ];
  };

  /**
  This method returns the list of permissions required to account activitysummary view
  **/
  ConfigurationManager.prototype.getAccountSummaryViewPermissions= function(){
    return [
      'WEALTH_PORTFOLIO_DETAILS_ACCOUNT_SUMMARY_VIEW'
    ];
  };

  /**
  This method returns the list of permissions required to report permissions
  **/
  ConfigurationManager.prototype.getWealthReportPermissions= function(){
    return [
      'WEALTH_REPORT_MANAGEMENT_REPORT_CREATE',
      'WEALTH_REPORT_MANAGEMENT_REPORT_DOWNLOAD'
    ];
  };

  /**
        This method returns the list of permissions required to view recent activity
    **/
  ConfigurationManager.prototype.getRecentActivityPermissionsList = function(){
    return [
      'WEALTH_INVESTMENT_DETAILS_RECENT_ACTIVITY_VIEW'
    ];
  }; 
  /**
        This method returns the list of permissions required to view market index
    **/
  ConfigurationManager.prototype.getMarketIndexPermissionsList = function(){
    return [
      'WEALTH_MARKET_AND_NEWS_MARKET_VIEW'
    ];
  }; 
  /**
        This method returns the list of permissions required to view top news
    **/
  ConfigurationManager.prototype.getTopNewsPermissionsList = function(){
    return [
      'WEALTH_MARKET_AND_NEWS_TOP_NEWS_VIEW'
    ];
  };
  /**
        This method returns the list of permissions required to view detailed news
    **/
  ConfigurationManager.prototype.getNewsDetailsPermissionsList = function(){
    return [
      'WEALTH_MARKET_AND_NEWS_TOP_NEWS_DETAILS_VIEW'
    ];
  }; 
  /**
        This method returns the list of permissions required to view total assets
    **/
  ConfigurationManager.prototype.getTotalAssetsPermissionsList = function(){
    return [
      'WEALTH_INVESTMENT_DETAILS_TOTAL_ASSETS_VIEW'
    ];
  };  
  /**
        This method returns the list of permissions required to view investment summary
    **/
  ConfigurationManager.prototype.getInvestmentSummaryPermissionsList = function(){
    return [
      'WEALTH_INVESTMENT_DETAILS_INVESTMENT_SUMMARY_VIEW'
    ];
  };   

  /**
  This method returns the list of features required to order blotter
  **/
  ConfigurationManager.prototype.getOrderBlotterFeature= function(){
    return [
      'WEALTH_ORDER_MANAGEMENT'
    ];
  };


  /**
  This method returns the list of features required to transactions
  **/
  ConfigurationManager.prototype.getWealthPortfolioFeature= function(){
    return [
      'WEALTH_PORTFOLIO_DETAILS'
    ];
  };

  /**
  This method returns the list of features required to report management
  **/
  ConfigurationManager.prototype.getWealthReportFeature= function(){
    return [
      'WEALTH_REPORT_MANAGEMENT'
    ];
  };
  /**
           This method returns the list of permissions required to access Sell Order from Watchlist Instruments 
       **/
  ConfigurationManager.prototype.sellOrderPermissions = function() {
    return ['WEALTH_ORDER_MGMT_SELL_ORDER_CREATE'];
  };
  /**
           This method returns the list of permissions required to access Buy Order from Watchlist Instruments 
       **/
  ConfigurationManager.prototype.buyOrderPermissions = function() {
    return ['WEALTH_ORDER_MGMT_BUY_ORDER_CREATE'];
  };
  /**
           This method returns the list of permissions required to view Watchlist Instruments 
       **/
  ConfigurationManager.prototype.watchlistViewInstrumentPermissions = function() {
    return ['WEALTH_WATCHLIST_INSTRUMENT_VIEW'];
  };
  /**
           This method returns the list of permissions required to add to Watchlist an Instrument
       **/
  ConfigurationManager.prototype.addToWatchlistPermissions = function() {
    return ['WEALTH_WATCHLIST_INSTRUMENT_CREATE'];
  };
  /**
           This method returns the list of permissions required to edit an order
       **/
  ConfigurationManager.prototype.mgmtOrderEditPermissions = function() {
    return ['WEALTH_ORDER_MGMT_ORDER_EDIT'];
  };
  /**
           This method returns the list of permissions required to cancel an order
       **/
  ConfigurationManager.prototype.mgmtOrderCancelPermissions = function() {
    return ['WEALTH_ORDER_MGMT_ORDER_CANCEL'];
  };
  /**
           This method returns the list of permissions required to verify an order
       **/
  ConfigurationManager.prototype.mgmtOrderVerifyPermissions = function() {
    return ['WEALTH_ORDER_MGMT_ORDER_VERIFICATION_VIEW'];
  };
  /**
           This method returns the list of permissions required to view acknowledgement
       **/
  ConfigurationManager.prototype.mgmtOrderViewAckPermissions = function() {
    return ['WEALTH_ORDER_MGMT_ORDER_ACKNOWLEDGEMENT_VIEW'];
  };
  /**
           This method returns the list of permissions required to view order link
       **/
  ConfigurationManager.prototype.mgmtOrderViewOrderLinkPermissions = function() {
    return ['WEALTH_ORDER_MGMT_ORDER_LINK_VIEW'];
  }; 
  /**
  This method returns the list of permissions required to performance
  **/
  ConfigurationManager.prototype.getPortfolioPerformancePermissions= function(){
    return [
      'WEALTH_PORTFOLIO_DETAILS_PERFORMANCE_VIEW'
    ];
  };

  /**
  This method returns the list of permissions required to instrument details
  **/
  ConfigurationManager.prototype.getInstrumentDetailsPermissions= function(){
    return [
      'WEALTH_PRODUCT_DETAILS_INSTRUMENT_VIEW'
    ];
  };

  /**
  This method returns the list of permissions required to instrument current possition
  **/
  ConfigurationManager.prototype.getInstrumentCurrentPositionPermissions= function(){
    return [
      'WEALTH_PRODUCT_DETAILS_CURRENT_POSITION_VIEW'
    ];
  };

  /**
  This method returns the list of permissions required to instrument pricing data
  **/
  ConfigurationManager.prototype.getInstrumentPricingDataPermissions= function(){
    return [
      'WEALTH_PRODUCT_DETAILS_PRICING_DATA_VIEW'
    ];
  };

  /**
  This method returns the list of permissions required to instrument news
  **/
  ConfigurationManager.prototype.getInstrumentNewsPermissions= function(){
    return [
      'WEALTH_NEWS_AND_DOCUMENTS_STOCK_NEWS_VIEW'
    ];
  };

  /**
  This method returns the list of permissions required to instrument documents
  **/
  ConfigurationManager.prototype.getInstrumentDocumentsPermissions= function(){
    return [
      'WEALTH_NEWS_AND_DOCUMENTS_DOCUMENTS_VIEW'
    ];
  };

  /**
        This method returns the list of permissions required to view General Transactions
    **/
  ConfigurationManager.prototype.getViewTransactionPermissionsList = function(){
    var features = this.getViewGeneralTransactionPermissionsList();
    features = features.concat(this.getViewACHFilePermissionsList());
    return features.concat(this.getViewACHTransactionPermissionsList());
  };
  ConfigurationManager.prototype.setMapKey = function(key){
    if(!kony.sdk.isNullOrUndefined(key)){
      this.mapKey = key;
    }
  };
  ConfigurationManager.prototype.setOnBoardingAppDirectionURL = function(redirectionURL){
    this.onBoardingAppDirectionURL = redirectionURL;
  };
  ConfigurationManager.prototype.getOnBoardingAppDirectionURL = function(redirectionURL){
    return this.onBoardingAppDirectionURL;
  };
  ConfigurationManager.prototype.fetchClientSideConfigurations = function(){
    var scope = this;
    var KNYMobileFabric = kony.sdk.getCurrentInstance();
    var config = KNYMobileFabric.getConfigurationService();
    config.getAllClientAppProperties(function(res) {
      kony.print("client key value pairs retrieved : " + JSON.stringify(res));
      // extract a key from client key value pairs
      if(res && res["DBP_ONBOARDING_URL"]){
        scope_configManager.setOnBoardingAppDirectionURL(res["DBP_ONBOARDING_URL"]);
      }
      if (res && res["CLIENT_MAP_KEY"]) {
        scope_configManager.mapKey=res["CLIENT_MAP_KEY"];
      }
    },function(err) {
      kony.print(" Failed to retrieve client key value pairs : " + JSON.stringify(err));
    }
                                    )
  };

  /**
        This method returns the list of permissions required to upload Bulk payment file
    **/
  ConfigurationManager.prototype.getBulkPaymentFileUploadPermissionsList = function(){
    return [
      'BULK_PAYMENT_FILES_MULTI_UPLOAD_CSV',
      'BULK_PAYMENT_FILES_MULTI_UPLOAD_XML',
      'BULK_PAYMENT_FILES_SINGLE_UPLOAD_CSV',
      'BULK_PAYMENT_FILES_SINGLE_UPLOAD_XML'
    ];
  };

  /**
      This method returns the list of permissions required to view Bulk payment request
  **/
  ConfigurationManager.prototype.getBulkPaymentRequestViewPermissionsList = function(){
    return [
      'BULK_PAYMENT_REQUEST_VIEW'
    ];
  };

  /**
      This method returns the list of permissions required to view Bulk payment files
  **/
  ConfigurationManager.prototype.getBulkPaymentFilesViewPermissionsList = function(){
    return [
      'BULK_PAYMENT_FILES_VIEW'
    ];
  };

  /**
        This method returns the list of permissions required to view Bulk payment templates
    **/
  ConfigurationManager.prototype.getBulkPaymentTemplateViewPermissionsList = function(){
    return [
      'BULK_PAYMENT_TEMPLATE_VIEW'
    ];
  };

  /**
        This method returns the list of permissions required to create Bulk payment templates
    **/
  ConfigurationManager.prototype.getBulkPaymentTemplateCreatePermissionsList = function(){
    return [
      'BULK_PAYMENT_TEMPLATE_SINGLE_CREATE',
      'BULK_PAYMENT_TEMPLATE_MULTIPLE_CREATE'
    ];
  };

  /**
      This method returns the list of permissions required for Bulk Payments module
  **/
  ConfigurationManager.prototype.getBulkPaymentFeaturePermissionsList = function(){
    var features = this.getBulkPaymentFileUploadPermissionsList();
    features = features.concat(this.getBulkPaymentRequestViewPermissionsList());
    features = features.concat(this.getBulkPaymentFilesViewPermissionsList());
    features = features.concat(this.getBulkPaymentTemplateViewPermissionsList());
    return features.concat(this.getBulkPaymentTemplateCreatePermissionsList());
  }


  /**
   * Set dispute reasons in an array
   * @param {array} reasons dispute reasons array from identity
   */
  ConfigurationManager.prototype.setDisputeReasons = function(reasons) {
    scope_configManager.disputeReasons = [];
    reasons.forEach(function(reason) {
      scope_configManager.disputeReasons.push(reason["value"]);
    })
  };

  /**
   * Get dispute reasons
   */
  ConfigurationManager.prototype.getDisputeReasons = function(){
    return scope_configManager.disputeReasons;
  };

  /**
   * Set dispute configuration
   * @param {array} disputeConfig dispute config array from identity
   */
  ConfigurationManager.prototype.setDisputeConfigMap = function(disputeConfig){
    disputeConfig.forEach(function(item){
      scope_configManager.disputeConfigMap[item["description"]] = item["isDisputeAllowed"];
    }); 
  };
  /**
   * Get dispute configuration for a transactionType
   * @param {array} transactionType type of transaction
   * returns a true or false string based on the type of transaction
   */
  ConfigurationManager.prototype.getDisputeConfig = function(transactionType){
    return scope_configManager.disputeConfigMap[transactionType];
  };

  /**
   * Set dispute duration
   * @param {integer} duration dispute duration from identity
   */
  ConfigurationManager.prototype.setDisputeDuration = function(duration) {
    scope_configManager.disputeDuration = duration;
  };
  /**
   * Returns dispute duration
   */
  ConfigurationManager.prototype.getDisputeDuration = function() {
    return scope_configManager.disputeDuration;
  };

  ConfigurationManager.prototype.setDisputeCDConfigMap = function(disputeCDConfig){
    disputeCDConfig.forEach(function(item){
      scope_configManager.disputeCDConfigMap[item["description"]] =item["isDisputeAllowed"];
    }); 
  };

  /**
   * Get dispute CD configuration for a credit/debit transaction
   * @param{array}transactionType type of transaction (Credit or Debit)
   * returns a true or false string based on the type of transaction (Credit or Debit)
   */
  ConfigurationManager.prototype.getDisputeCDConfig = function(transactionType){
    return scope_configManager.disputeCDConfigMap[transactionType];
  };

  ConfigurationManager.prototype.getDisputeConfigurations = function () {
    if (scope_configManager.isDisputeConfigurationAdded === false) {
      var param = {
        "bundle_name": "DBP"
      };
      scope_configManager.fetchDisputeConfigurations(param, scope_configManager.fetchDisputeConfigurationSuccessCallback.bind(this), scope_configManager.logOut.bind(this));
    }
  };

  ConfigurationManager.prototype.logOut = function () {
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    var context = {
      action: "Logout"
    };
    authModule.presentationController.doLogout(context);
  };

  ConfigurationManager.prototype.fetchDisputeConfigurationSuccessCallback = function(res) {
    var configurationArray = res;
    configurationArray.forEach(function(arrayItem) {
      if (arrayItem["key"] && arrayItem["key"] === "DISPUTE_DURATION") {
        scope_configManager.setDisputeDuration(Number(arrayItem["value"]));
      }
      if (arrayItem["key"] && arrayItem["key"] === "DISPUTE_ERROR_SCENARIOS") {
        var disputeReasonsObject = JSON.parse(arrayItem["value"]);
        scope_configManager.setDisputeReasons(disputeReasonsObject.disputeTransactionErrors);
      }
      if (arrayItem["key"] && arrayItem["key"] === "DISPUTE_TRANSACTION_TYPE_CONFIG") {
        var disputeScenariosObject = JSON.parse(arrayItem["value"]);
        scope_configManager.setDisputeConfigMap(disputeScenariosObject.disputeScenariosConfig);
      }
      if (arrayItem["key"] && arrayItem["key"] === "DISPUTE_TRANSACTION_CONFIG") {
        var disputeScenariosObjectCD = JSON.parse(arrayItem["value"]);
        scope_configManager.setDisputeCDConfigMap(disputeScenariosObjectCD.disputeTransferConfig);
      }
      if (arrayItem["key"] && arrayItem["key"] ===  "MAX_GOAL_AMOUNT") {
        scope_configManager.setMaxGoalAmount(Number(arrayItem["value"]));
      }
      if (arrayItem["key"] && arrayItem["key"] ===  "MAX_MONTHLYDEBIT_AMOUNT") {
        scope_configManager.setMaxMonthlyDebitAmount(Number(arrayItem["value"]));
      }
      if (arrayItem["key"] && arrayItem["key"] ===  "MAX_MONTHS_ForGOAL") {
        scope_configManager.setMaxMonths(Number(arrayItem["value"]));
      }
      if (arrayItem["key"] && arrayItem["key"] ===  "MIN_BUDGET_AMOUNT") {
        scope_configManager.setMinBudgetAmount(Number(arrayItem["value"]));
      }
      if (arrayItem["key"] && arrayItem["key"] ===  "MIN_GOAL_AMOUNT") {
        scope_configManager.setMinGoalAmount(Number(arrayItem["value"]));
      }
      if (arrayItem["key"] && arrayItem["key"] ===  "MIN_MONTHLYDEBIT_AMOUNT") {
        scope_configManager.setMinMonthlyDebitAmount(Number(arrayItem["value"]));
      }
      if (arrayItem["key"] && arrayItem["key"] ===  "MIN_MONTHS_ForGOAL") {
        scope_configManager.setMinMonths(Number(arrayItem["value"]));
      }
      if (arrayItem["key"] && arrayItem["key"] ===  "DUAL_BALANCE") {
        scope_configManager.setDualBalanceConfig(arrayItem["value"]);
      }
      if (arrayItem["key"] && arrayItem["key"] ===  "COMBINED_STATEMENT_PERIOD_ALLOWED_MONTHS") {
        scope_configManager.setCombinedStatementsAllowedPeriod(arrayItem["value"]);
      }
    });
    scope_configManager.isDisputeConfigurationAdded = true;
  };


  ConfigurationManager.prototype.fetchDisputeConfigurations = function(params, presentationSuccess, presentationError) {
    function completionCallback (status, data, error)  {
      var srh = applicationManager.getServiceResponseHandler();
      var res = srh.manageResponse(status, data, error);
      if (res["status"] === true) {
        presentationSuccess(res["data"]);
      } else {
        presentationError(res["errmsg"]);
      }
    }

    var ConfigurationsRepo = kony.mvc.MDAApplication.getSharedInstance()
    .getRepoManager()
    .getRepository('Configurations');
    ConfigurationsRepo.customVerb("getSystemConfigurations", params, completionCallback)
  };

  /**
   * Set max goal amount
   * @param {integer} amount amount
   */
  ConfigurationManager.prototype.setMaxGoalAmount = function(amount) {
    scope_configManager.maxGoalAmount = amount;
  };
  /**
   * Returns max goal amount
   */
  ConfigurationManager.prototype.getMaxGoalAmount = function() {
    return scope_configManager.maxGoalAmount;
  };

  /**
   * Set max monthly debit amount
   * @param {integer} amount amount
   */
  ConfigurationManager.prototype.setMaxMonthlyDebitAmount = function(amount) {
    scope_configManager.maxMonthlydebitAmount = amount;
  };

  /**
   * get max monthly debit amount
   */
  ConfigurationManager.prototype.getMaxMonthlyDebitAmount = function() {
    return scope_configManager.maxMonthlydebitAmount;
  };

  /**
   * Set max months amount
   * @param {integer} amount amount
   */
  ConfigurationManager.prototype.setMaxMonths = function(amount) {
    scope_configManager.maxMonths = amount;
  };

  /**
   * get max monthly amount
   */
  ConfigurationManager.prototype.getMaxMonths = function() {
    return scope_configManager.maxMonths;
  };

  /**
   * Set min budget amount
   * @param {integer} amount amount
   */
  ConfigurationManager.prototype.setMinBudgetAmount = function(amount) {
    scope_configManager.minBudgetAmount = amount;
  };

  /**
   * get min budget amount
   */
  ConfigurationManager.prototype.getMinBudgetAmount = function() {
    return scope_configManager.minBudgetAmount;
  };

  /**
   * Set min goal amount
   * @param {integer} amount amount
   */
  ConfigurationManager.prototype.setMinGoalAmount = function(amount) {
    scope_configManager.minGoalAmount = amount;
  };

  /**
   * get min goal amount
   */
  ConfigurationManager.prototype.getMinGoalAmount = function() {
    return scope_configManager.minGoalAmount;
  };


  /**
   * Set min monthly debit amount
   * @param {integer} amount amount
   */
  ConfigurationManager.prototype.setMinMonthlyDebitAmount = function(amount) {
    scope_configManager.minMonthlydebitAmount = amount;
  };

  /**
   * get min monthly debit amount
   */
  ConfigurationManager.prototype.getMinMonthlyDebitAmount = function() {
    return scope_configManager.minMonthlydebitAmount;
  };

  /**
   * Set min months amount
   * @param {integer} amount amount
   */
  ConfigurationManager.prototype.setMinMonths = function(amount) {
    scope_configManager.minMonths = amount;
  };

  /**
   * get min months amount
   */
  ConfigurationManager.prototype.getMinMonths = function() {
    return scope_configManager.minMonths;
  };

  /**
  *  setDual Balance Configuration from getSystemConfiguration Service
  *
  */
  ConfigurationManager.prototype.setDualBalanceConfig = function(data) {
    scope_configManager.dualBalanceConfig = data;
  };
  /**
   * get dual balance Configuration
   */
  ConfigurationManager.prototype.getDualBalanceConfig = function() {
    var config = scope_configManager.dualBalanceConfig;
    config = JSON.parse(config);
    return config;
  };

  /**
  *  set CombinedS tatements allowed period Configuration from getSystemConfiguration Service
  *
  */
  ConfigurationManager.prototype.setCombinedStatementsAllowedPeriod = function(data) {
    scope_configManager.combinedStatementsAllowedPeriod = data;
  };

  /**
   * get CombinedS tatements allowed period Configuration
   */

  ConfigurationManager.prototype.getCombinedStatementsAllowedPeriod = function() {
    var config = scope_configManager.combinedStatementsAllowedPeriod;
    config = JSON.parse(config);
    return config;
  };
  ConfigurationManager.prototype.setLoggedInUserPermissionsData = function(loggedInUserPermissionsData) {
    scope_configManager.loggedInUserPermissionsData = loggedInUserPermissionsData;
  };
  ConfigurationManager.prototype.getLoggedInUserPermissionsData = function() {
    return scope_configManager.loggedInUserPermissionsData;
  };
  ConfigurationManager.prototype.checkCompanyLevelPermission = function(cif, feature, permission) {
    let jpath = "globalLevelPermissions,cif=" + cif + ",features,featureId=" + feature+",permissions,actionId="+permission;
    let data = JSON.parse(JSON.stringify(CommonUtilities.getObjectFromPath(this.loggedInUserPermissionsData, jpath)));
    if(data === -1){
      return false;
    }
    else if(data.hasOwnProperty("isEnabled")){
      return data.isEnabled.toString() === 'true';
    }
    else return true;
  };
  return ConfigurationManager;
});
