//startup.js
var globalhttpheaders = {};
var appConfig = {
    appId: "KonyMobileBankin",
    appName: "Digital Banking",
    appVersion: "21.04.00",
    isturlbase: "https://infinitybsgpoc19.temenos.com:443/services",
    isDebug: false,
    isMFApp: true,
    appKey: "a8b14711497219862dd1e19c02a1d7bc",
    appSecret: "a581194cab3c52988afa233d0ca9c7cb",
    serviceUrl: "https://infinitybsgpoc19.temenos.com/authService/100000002/appconfig",
    svcDoc: {
        "identity_meta": {},
        "app_version": "1.0",
        "baseId": "89d1f41b-b0f2-4cd2-b9c4-2beb179e3dda",
        "app_default_version": "1.0",
        "login": [{
            "mandatory_fields": [],
            "provider_type": "custom",
            "alias": "DbxAPIIdentityService",
            "type": "basic",
            "prov": "DbxAPIIdentityService",
            "url": "https://infinitybsgpoc19.temenos.com/authService/100000002"
        }, {
            "mandatory_fields": [],
            "provider_type": "custom",
            "alias": "DbxUserLogin",
            "type": "basic",
            "prov": "DbxUserLogin",
            "url": "https://infinitybsgpoc19.temenos.com/authService/100000002"
        }],
        "services_meta": {
            "dbpProductServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpProductServices"
            },
            "TransactionAdviceJSONServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/TransactionAdviceJSONServices"
            },
            "DBPAPILogin": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/DBPAPILogin"
            },
            "getDisputedTransactionsOrch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/getDisputedTransactionsOrch"
            },
            "dbpRbLocalServicesdb": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpRbLocalServicesdb"
            },
            "InternationalPayeeLOB": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/InternationalPayeeLOB"
            },
            "CustomerEntilement": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/CustomerEntilement"
            },
            "IdologyIntServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/IdologyIntServices"
            },
            "pushCombinedStatementEvent": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/pushCombinedStatementEvent"
            },
            "ForexObjects": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/ForexObjects",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/ForexObjects"
            },
            "pushEventIdentityService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/pushEventIdentityService"
            },
            "SCAIntegrationService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/SCAIntegrationService"
            },
            "dbpAllLocations": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpAllLocations"
            },
            "ExternalAccounts": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/ExternalAccounts",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/ExternalAccounts"
            },
            "dbpPartyServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpPartyServices"
            },
            "DocumentStorageObjects": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/DocumentStorageObjects",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/DocumentStorageObjects"
            },
            "CustomerFeedback": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/CustomerFeedback",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/CustomerFeedback"
            },
            "TransactionAdvice": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/TransactionAdvice",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/TransactionAdvice"
            },
            "WealthT24ServicesOrchestration": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/WealthT24ServicesOrchestration"
            },
            "AccountAggregationJSON": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/AccountAggregationJSON"
            },
            "T24ISOnboardingUser": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/T24ISOnboardingUser"
            },
            "dbpAdminConsoleServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpAdminConsoleServices"
            },
            "dbpTransactionServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpTransactionServices"
            },
            "TransactionAdviceJava": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/TransactionAdviceJava"
            },
            "BackendPayeeServicesOrch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/BackendPayeeServicesOrch"
            },
            "OwnAccountTransferLOB": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/OwnAccountTransferLOB"
            },
            "ServiceRequest": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/ServiceRequest",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/ServiceRequest"
            },
            "KmsEmailOrch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/KmsEmailOrch"
            },
            "InternationalWireTransferLOB": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/InternationalWireTransferLOB"
            },
            "T24ISExtra": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/T24ISExtra"
            },
            "DbxCustomerLogin": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/DbxCustomerLogin"
            },
            "ServiceRequestJSON": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/ServiceRequestJSON"
            },
            "T24ISPaymentOrders": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/T24ISPaymentOrders"
            },
            "DocumentIntegrationServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/DocumentIntegrationServices"
            },
            "LoanPayoff": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/LoanPayoff",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/LoanPayoff"
            },
            "SignatoryObject": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/SignatoryObject",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/SignatoryObject"
            },
            "T24ISBeneficiaries": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/T24ISBeneficiaries"
            },
            "dbpUserAttributes": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpUserAttributes"
            },
            "CreateBulkWireTransferOrch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/CreateBulkWireTransferOrch"
            },
            "ArrangementsMicroServicesJava": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/ArrangementsMicroServicesJava"
            },
            "UserManagementSettings": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/UserManagementSettings"
            },
            "ArrangementMicroService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/ArrangementMicroService"
            },
            "dbpPayeeServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpPayeeServices"
            },
            "LoanServiceJSON": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/LoanServiceJSON"
            },
            "dbpDbxCustomerLogin": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpDbxCustomerLogin"
            },
            "dbpDbxExternalLogin": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpDbxExternalLogin"
            },
            "T24ISUser": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/T24ISUser"
            },
            "T24ISStandingOrders": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/T24ISStandingOrders"
            },
            "T24ISCards": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/T24ISCards"
            },
            "dbpForexOrch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpForexOrch"
            },
            "CampaignEngine": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/CampaignEngine",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/CampaignEngine"
            },
            "SavingsPotNonProductServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/SavingsPotNonProductServices"
            },
            "HoldingsMicroServicesJava": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/HoldingsMicroServicesJava"
            },
            "ApprovalRequestObjects": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/ApprovalRequestObjects",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/ApprovalRequestObjects"
            },
            "T24ISStopPayments": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/T24ISStopPayments"
            },
            "dbpLocalServiceLogin": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpLocalServiceLogin"
            },
            "CreateBulkTransferOrch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/CreateBulkTransferOrch"
            },
            "T24BulkPaymentAPIs": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/T24BulkPaymentAPIs"
            },
            "dbpDemoServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpDemoServices"
            },
            "T24BulkPaymentsOrch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/T24BulkPaymentsOrch"
            },
            "BackgroundVerification": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/BackgroundVerification",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/BackgroundVerification"
            },
            "SavingsPotServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/SavingsPotServices"
            },
            "DashBoard": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/DashBoard"
            },
            "ACHLineOfBusinessServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/ACHLineOfBusinessServices"
            },
            "SavingsPot": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/SavingsPot",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/SavingsPot"
            },
            "backgroundVerificationOrch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/backgroundVerificationOrch"
            },
            "dbpHolidayServcies": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpHolidayServcies"
            },
            "T24ISOnboardingAccounts": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/T24ISOnboardingAccounts"
            },
            "DbxKMSLogin": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/DbxKMSLogin"
            },
            "dbpApprovalRequestServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpApprovalRequestServices"
            },
            "dbpExternalPayeesOrch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpExternalPayeesOrch"
            },
            "T24BulkPaymentServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/T24BulkPaymentServices"
            },
            "T24ISTransactions": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/T24ISTransactions"
            },
            "BulkPaymentObjects": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/BulkPaymentObjects",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/BulkPaymentObjects"
            },
            "dbpNpForexServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpNpForexServices"
            },
            "ServiceRequestJavaService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/ServiceRequestJavaService"
            },
            "dbpLocalServiceslogin": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpLocalServiceslogin"
            },
            "RBObjects": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/RBObjects",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/RBObjects"
            },
            "CustomRoleOrch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/CustomRoleOrch"
            },
            "ATMLocator": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/ATMLocator"
            },
            "dbpMFAServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpMFAServices"
            },
            "CreateDisputeTransactionorch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/CreateDisputeTransactionorch"
            },
            "InternationalFundTransferLOB": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/InternationalFundTransferLOB"
            },
            "APIDBPIdentity": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/APIDBPIdentity"
            },
            "TransactionAdviceJSON": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/TransactionAdviceJSON"
            },
            "WealthObjects": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/WealthObjects",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/WealthObjects"
            },
            "IntrabankFundTransferLOB": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/IntrabankFundTransferLOB"
            },
            "BillpayLOB": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/BillpayLOB"
            },
            "LoanJavaService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/LoanJavaService"
            },
            "TransactionAdviceJavaServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/TransactionAdviceJavaServices"
            },
            "dbpDBX": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpDBX"
            },
            "ReutersServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/ReutersServices"
            },
            "CoreCustomerFeatureActions": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/CoreCustomerFeatureActions"
            },
            "OnboardingTransfer": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/OnboardingTransfer"
            },
            "Cards": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/Cards"
            },
            "P2PPayeeLOB": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/P2PPayeeLOB"
            },
            "ExternalPayeeLOB": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/ExternalPayeeLOB"
            },
            "CommonOrchestrationService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/CommonOrchestrationService"
            },
            "WealthMockServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/WealthMockServices"
            },
            "WealthTransactServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/WealthTransactServices"
            },
            "IntegrationRegulator": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/IntegrationRegulator"
            },
            "CustomerData": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/CustomerData"
            },
            "TransactionsOrchServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/TransactionsOrchServices"
            },
            "CreateBulkBillPayOrchestration": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/CreateBulkBillPayOrchestration"
            },
            "EngageService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/EngageService"
            },
            "dbpNPBulkPaymentsOrch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpNPBulkPaymentsOrch"
            },
            "HoldingsMicroServicesJSON": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/HoldingsMicroServicesJSON"
            },
            "TransactionUploadBinary": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/TransactionUploadBinary",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/TransactionUploadBinary"
            },
            "WealthServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/WealthServices"
            },
            "dbpCoreServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpCoreServices"
            },
            "WireTransfersPayeeLOB": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/WireTransfersPayeeLOB"
            },
            "C360IntegrationService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/C360IntegrationService"
            },
            "AccountAggregationJava": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/AccountAggregationJava"
            },
            "T24ISConsents": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/T24ISConsents"
            },
            "dbpBulkWireOrch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpBulkWireOrch"
            },
            "dbpApprovalMatrixServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpApprovalMatrixServices"
            },
            "LinkCardsJava": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/LinkCardsJava"
            },
            "FundsAuthorisationMSJava": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/FundsAuthorisationMSJava"
            },
            "dbpNonProductServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpNonProductServices"
            },
            "BillPayPayeeLOB": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/BillPayPayeeLOB"
            },
            "InterbankFundTransferLOB": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/InterbankFundTransferLOB"
            },
            "SavingsPotOrch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/SavingsPotOrch"
            },
            "SavingsPotMS": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/SavingsPotMS"
            },
            "T24ISForexService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/T24ISForexService"
            },
            "ApprovalMatrixObjects": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/ApprovalMatrixObjects",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/ApprovalMatrixObjects"
            },
            "PayeeObjects": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/PayeeObjects",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/PayeeObjects"
            },
            "dbpBBJavaServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpBBJavaServices"
            },
            "CancelDisputeTransactionOrch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/CancelDisputeTransactionOrch"
            },
            "customerfeedbacklocalservices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/customerfeedbacklocalservices"
            },
            "UserAttributes": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/UserAttributes"
            },
            "CustomerEntitlementsOrch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/CustomerEntitlementsOrch"
            },
            "SignatoryGroupServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/SignatoryGroupServices"
            },
            "BulkWireObjects": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/BulkWireObjects",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/BulkWireObjects"
            },
            "P2PLOB": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/P2PLOB"
            },
            "dbpBulkWireServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpBulkWireServices"
            },
            "GoogleAPIs": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/GoogleAPIs"
            },
            "dbpBulkPaymentServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpBulkPaymentServices"
            },
            "LimitsAndPermissions": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/LimitsAndPermissions"
            },
            "InterBankPayeeLOB": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/InterBankPayeeLOB"
            },
            "dbpRbFeedbackServicesJava": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpRbFeedbackServicesJava"
            },
            "ACHObjects": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/ACHObjects",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/ACHObjects"
            },
            "PartyExperienceAPI": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/PartyExperienceAPI",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/PartyExperienceAPI"
            },
            "RDCLOB": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/RDCLOB"
            },
            "CampaignProcessingService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/CampaignProcessingService"
            },
            "FundsAuthorisationMSJSON": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/FundsAuthorisationMSJSON"
            },
            "dbpChequeManagementServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpChequeManagementServices"
            },
            "C360APILogin": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/C360APILogin"
            },
            "dbpACHServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpACHServices"
            },
            "WealthRefinitivServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/WealthRefinitivServices"
            },
            "DBPCoreIntegrationServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/DBPCoreIntegrationServices"
            },
            "DomesticWireTransferLOB": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/DomesticWireTransferLOB"
            },
            "IntraBankPayeeLOB": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/IntraBankPayeeLOB"
            },
            "WealthServicesOrchestration": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/WealthServicesOrchestration"
            },
            "dbpCardServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpCardServices"
            },
            "CustomerData_Orch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/CustomerData_Orch"
            },
            "TransactionObjects": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/TransactionObjects",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/TransactionObjects"
            },
            "dbpNPBulkPaymentServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpNPBulkPaymentServices"
            },
            "T24ISAccounts": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/T24ISAccounts"
            },
            "dbpForexServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/dbpForexServices"
            },
            "MessageBinary": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/MessageBinary",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/MessageBinary"
            },
            "VerifyBackground": {
                "offline": false,
                "metadata_url": "https://infinitybsgpoc19.temenos.com:443/services/metadata/v1/VerifyBackground",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://infinitybsgpoc19.temenos.com:443/services/data/v1/VerifyBackground"
            }
        },
        "selflink": "https://infinitybsgpoc19.temenos.com/authService/100000002/appconfig",
        "integsvc": {
            "dbpProductServices": "https://infinitybsgpoc19.temenos.com:443/services/dbpProductServices",
            "TransactionAdviceJSONServices": "https://infinitybsgpoc19.temenos.com:443/services/TransactionAdviceJSONServices",
            "DBPAPILogin": "https://infinitybsgpoc19.temenos.com:443/services/DBPAPILogin",
            "getDisputedTransactionsOrch": "https://infinitybsgpoc19.temenos.com:443/services/getDisputedTransactionsOrch",
            "dbpRbLocalServicesdb": "https://infinitybsgpoc19.temenos.com:443/services/dbpRbLocalServicesdb",
            "InternationalPayeeLOB": "https://infinitybsgpoc19.temenos.com:443/services/InternationalPayeeLOB",
            "CustomerEntilement": "https://infinitybsgpoc19.temenos.com:443/services/CustomerEntilement",
            "IdologyIntServices": "https://infinitybsgpoc19.temenos.com:443/services/IdologyIntServices",
            "pushCombinedStatementEvent": "https://infinitybsgpoc19.temenos.com:443/services/pushCombinedStatementEvent",
            "pushEventIdentityService": "https://infinitybsgpoc19.temenos.com:443/services/pushEventIdentityService",
            "SCAIntegrationService": "https://infinitybsgpoc19.temenos.com:443/services/SCAIntegrationService",
            "dbpAllLocations": "https://infinitybsgpoc19.temenos.com:443/services/dbpAllLocations",
            "dbpPartyServices": "https://infinitybsgpoc19.temenos.com:443/services/dbpPartyServices",
            "WealthT24ServicesOrchestration": "https://infinitybsgpoc19.temenos.com:443/services/WealthT24ServicesOrchestration",
            "AccountAggregationJSON": "https://infinitybsgpoc19.temenos.com:443/services/AccountAggregationJSON",
            "T24ISOnboardingUser": "https://infinitybsgpoc19.temenos.com:443/services/T24ISOnboardingUser",
            "dbpAdminConsoleServices": "https://infinitybsgpoc19.temenos.com:443/services/dbpAdminConsoleServices",
            "dbpTransactionServices": "https://infinitybsgpoc19.temenos.com:443/services/dbpTransactionServices",
            "TransactionAdviceJava": "https://infinitybsgpoc19.temenos.com:443/services/TransactionAdviceJava",
            "BackendPayeeServicesOrch": "https://infinitybsgpoc19.temenos.com:443/services/BackendPayeeServicesOrch",
            "OwnAccountTransferLOB": "https://infinitybsgpoc19.temenos.com:443/services/OwnAccountTransferLOB",
            "KmsEmailOrch": "https://infinitybsgpoc19.temenos.com:443/services/KmsEmailOrch",
            "InternationalWireTransferLOB": "https://infinitybsgpoc19.temenos.com:443/services/InternationalWireTransferLOB",
            "_internal_logout": "https://infinitybsgpoc19.temenos.com:443/services/IST",
            "T24ISExtra": "https://infinitybsgpoc19.temenos.com:443/services/T24ISExtra",
            "DbxCustomerLogin": "https://infinitybsgpoc19.temenos.com:443/services/DbxCustomerLogin",
            "ServiceRequestJSON": "https://infinitybsgpoc19.temenos.com:443/services/ServiceRequestJSON",
            "T24ISPaymentOrders": "https://infinitybsgpoc19.temenos.com:443/services/T24ISPaymentOrders",
            "DocumentIntegrationServices": "https://infinitybsgpoc19.temenos.com:443/services/DocumentIntegrationServices",
            "T24ISBeneficiaries": "https://infinitybsgpoc19.temenos.com:443/services/T24ISBeneficiaries",
            "dbpUserAttributes": "https://infinitybsgpoc19.temenos.com:443/services/dbpUserAttributes",
            "CreateBulkWireTransferOrch": "https://infinitybsgpoc19.temenos.com:443/services/CreateBulkWireTransferOrch",
            "ArrangementsMicroServicesJava": "https://infinitybsgpoc19.temenos.com:443/services/ArrangementsMicroServicesJava",
            "UserManagementSettings": "https://infinitybsgpoc19.temenos.com:443/services/UserManagementSettings",
            "ArrangementMicroService": "https://infinitybsgpoc19.temenos.com:443/services/ArrangementMicroService",
            "dbpPayeeServices": "https://infinitybsgpoc19.temenos.com:443/services/dbpPayeeServices",
            "LoanServiceJSON": "https://infinitybsgpoc19.temenos.com:443/services/LoanServiceJSON",
            "dbpDbxCustomerLogin": "https://infinitybsgpoc19.temenos.com:443/services/dbpDbxCustomerLogin",
            "dbpDbxExternalLogin": "https://infinitybsgpoc19.temenos.com:443/services/dbpDbxExternalLogin",
            "T24ISUser": "https://infinitybsgpoc19.temenos.com:443/services/T24ISUser",
            "T24ISStandingOrders": "https://infinitybsgpoc19.temenos.com:443/services/T24ISStandingOrders",
            "T24ISCards": "https://infinitybsgpoc19.temenos.com:443/services/T24ISCards",
            "dbpForexOrch": "https://infinitybsgpoc19.temenos.com:443/services/dbpForexOrch",
            "SavingsPotNonProductServices": "https://infinitybsgpoc19.temenos.com:443/services/SavingsPotNonProductServices",
            "HoldingsMicroServicesJava": "https://infinitybsgpoc19.temenos.com:443/services/HoldingsMicroServicesJava",
            "T24ISStopPayments": "https://infinitybsgpoc19.temenos.com:443/services/T24ISStopPayments",
            "dbpLocalServiceLogin": "https://infinitybsgpoc19.temenos.com:443/services/dbpLocalServiceLogin",
            "CreateBulkTransferOrch": "https://infinitybsgpoc19.temenos.com:443/services/CreateBulkTransferOrch",
            "T24BulkPaymentAPIs": "https://infinitybsgpoc19.temenos.com:443/services/T24BulkPaymentAPIs",
            "dbpDemoServices": "https://infinitybsgpoc19.temenos.com:443/services/dbpDemoServices",
            "T24BulkPaymentsOrch": "https://infinitybsgpoc19.temenos.com:443/services/T24BulkPaymentsOrch",
            "SavingsPotServices": "https://infinitybsgpoc19.temenos.com:443/services/SavingsPotServices",
            "DashBoard": "https://infinitybsgpoc19.temenos.com:443/services/DashBoard",
            "ACHLineOfBusinessServices": "https://infinitybsgpoc19.temenos.com:443/services/ACHLineOfBusinessServices",
            "backgroundVerificationOrch": "https://infinitybsgpoc19.temenos.com:443/services/backgroundVerificationOrch",
            "dbpHolidayServcies": "https://infinitybsgpoc19.temenos.com:443/services/dbpHolidayServcies",
            "T24ISOnboardingAccounts": "https://infinitybsgpoc19.temenos.com:443/services/T24ISOnboardingAccounts",
            "DbxKMSLogin": "https://infinitybsgpoc19.temenos.com:443/services/DbxKMSLogin",
            "dbpApprovalRequestServices": "https://infinitybsgpoc19.temenos.com:443/services/dbpApprovalRequestServices",
            "dbpExternalPayeesOrch": "https://infinitybsgpoc19.temenos.com:443/services/dbpExternalPayeesOrch",
            "T24BulkPaymentServices": "https://infinitybsgpoc19.temenos.com:443/services/T24BulkPaymentServices",
            "T24ISTransactions": "https://infinitybsgpoc19.temenos.com:443/services/T24ISTransactions",
            "dbpNpForexServices": "https://infinitybsgpoc19.temenos.com:443/services/dbpNpForexServices",
            "ServiceRequestJavaService": "https://infinitybsgpoc19.temenos.com:443/services/ServiceRequestJavaService",
            "dbpLocalServiceslogin": "https://infinitybsgpoc19.temenos.com:443/services/dbpLocalServiceslogin",
            "CustomRoleOrch": "https://infinitybsgpoc19.temenos.com:443/services/CustomRoleOrch",
            "ATMLocator": "https://infinitybsgpoc19.temenos.com:443/services/ATMLocator",
            "dbpMFAServices": "https://infinitybsgpoc19.temenos.com:443/services/dbpMFAServices",
            "CreateDisputeTransactionorch": "https://infinitybsgpoc19.temenos.com:443/services/CreateDisputeTransactionorch",
            "InternationalFundTransferLOB": "https://infinitybsgpoc19.temenos.com:443/services/InternationalFundTransferLOB",
            "APIDBPIdentity": "https://infinitybsgpoc19.temenos.com:443/services/APIDBPIdentity",
            "TransactionAdviceJSON": "https://infinitybsgpoc19.temenos.com:443/services/TransactionAdviceJSON",
            "IntrabankFundTransferLOB": "https://infinitybsgpoc19.temenos.com:443/services/IntrabankFundTransferLOB",
            "BillpayLOB": "https://infinitybsgpoc19.temenos.com:443/services/BillpayLOB",
            "LoanJavaService": "https://infinitybsgpoc19.temenos.com:443/services/LoanJavaService",
            "TransactionAdviceJavaServices": "https://infinitybsgpoc19.temenos.com:443/services/TransactionAdviceJavaServices",
            "dbpDBX": "https://infinitybsgpoc19.temenos.com:443/services/dbpDBX",
            "ReutersServices": "https://infinitybsgpoc19.temenos.com:443/services/ReutersServices",
            "CoreCustomerFeatureActions": "https://infinitybsgpoc19.temenos.com:443/services/CoreCustomerFeatureActions",
            "OnboardingTransfer": "https://infinitybsgpoc19.temenos.com:443/services/OnboardingTransfer",
            "Cards": "https://infinitybsgpoc19.temenos.com:443/services/Cards",
            "P2PPayeeLOB": "https://infinitybsgpoc19.temenos.com:443/services/P2PPayeeLOB",
            "ExternalPayeeLOB": "https://infinitybsgpoc19.temenos.com:443/services/ExternalPayeeLOB",
            "CommonOrchestrationService": "https://infinitybsgpoc19.temenos.com:443/services/CommonOrchestrationService",
            "WealthMockServices": "https://infinitybsgpoc19.temenos.com:443/services/WealthMockServices",
            "WealthTransactServices": "https://infinitybsgpoc19.temenos.com:443/services/WealthTransactServices",
            "IntegrationRegulator": "https://infinitybsgpoc19.temenos.com:443/services/IntegrationRegulator",
            "CustomerData": "https://infinitybsgpoc19.temenos.com:443/services/CustomerData",
            "TransactionsOrchServices": "https://infinitybsgpoc19.temenos.com:443/services/TransactionsOrchServices",
            "CreateBulkBillPayOrchestration": "https://infinitybsgpoc19.temenos.com:443/services/CreateBulkBillPayOrchestration",
            "EngageService": "https://infinitybsgpoc19.temenos.com:443/services/EngageService",
            "dbpNPBulkPaymentsOrch": "https://infinitybsgpoc19.temenos.com:443/services/dbpNPBulkPaymentsOrch",
            "HoldingsMicroServicesJSON": "https://infinitybsgpoc19.temenos.com:443/services/HoldingsMicroServicesJSON",
            "WealthServices": "https://infinitybsgpoc19.temenos.com:443/services/WealthServices",
            "dbpCoreServices": "https://infinitybsgpoc19.temenos.com:443/services/dbpCoreServices",
            "WireTransfersPayeeLOB": "https://infinitybsgpoc19.temenos.com:443/services/WireTransfersPayeeLOB",
            "C360IntegrationService": "https://infinitybsgpoc19.temenos.com:443/services/C360IntegrationService",
            "AccountAggregationJava": "https://infinitybsgpoc19.temenos.com:443/services/AccountAggregationJava",
            "T24ISConsents": "https://infinitybsgpoc19.temenos.com:443/services/T24ISConsents",
            "dbpBulkWireOrch": "https://infinitybsgpoc19.temenos.com:443/services/dbpBulkWireOrch",
            "dbpApprovalMatrixServices": "https://infinitybsgpoc19.temenos.com:443/services/dbpApprovalMatrixServices",
            "LinkCardsJava": "https://infinitybsgpoc19.temenos.com:443/services/LinkCardsJava",
            "FundsAuthorisationMSJava": "https://infinitybsgpoc19.temenos.com:443/services/FundsAuthorisationMSJava",
            "dbpNonProductServices": "https://infinitybsgpoc19.temenos.com:443/services/dbpNonProductServices",
            "BillPayPayeeLOB": "https://infinitybsgpoc19.temenos.com:443/services/BillPayPayeeLOB",
            "InterbankFundTransferLOB": "https://infinitybsgpoc19.temenos.com:443/services/InterbankFundTransferLOB",
            "SavingsPotOrch": "https://infinitybsgpoc19.temenos.com:443/services/SavingsPotOrch",
            "SavingsPotMS": "https://infinitybsgpoc19.temenos.com:443/services/SavingsPotMS",
            "T24ISForexService": "https://infinitybsgpoc19.temenos.com:443/services/T24ISForexService",
            "dbpBBJavaServices": "https://infinitybsgpoc19.temenos.com:443/services/dbpBBJavaServices",
            "CancelDisputeTransactionOrch": "https://infinitybsgpoc19.temenos.com:443/services/CancelDisputeTransactionOrch",
            "customerfeedbacklocalservices": "https://infinitybsgpoc19.temenos.com:443/services/customerfeedbacklocalservices",
            "UserAttributes": "https://infinitybsgpoc19.temenos.com:443/services/UserAttributes",
            "CustomerEntitlementsOrch": "https://infinitybsgpoc19.temenos.com:443/services/CustomerEntitlementsOrch",
            "SignatoryGroupServices": "https://infinitybsgpoc19.temenos.com:443/services/SignatoryGroupServices",
            "P2PLOB": "https://infinitybsgpoc19.temenos.com:443/services/P2PLOB",
            "dbpBulkWireServices": "https://infinitybsgpoc19.temenos.com:443/services/dbpBulkWireServices",
            "GoogleAPIs": "https://infinitybsgpoc19.temenos.com:443/services/GoogleAPIs",
            "dbpBulkPaymentServices": "https://infinitybsgpoc19.temenos.com:443/services/dbpBulkPaymentServices",
            "LimitsAndPermissions": "https://infinitybsgpoc19.temenos.com:443/services/LimitsAndPermissions",
            "InterBankPayeeLOB": "https://infinitybsgpoc19.temenos.com:443/services/InterBankPayeeLOB",
            "dbpRbFeedbackServicesJava": "https://infinitybsgpoc19.temenos.com:443/services/dbpRbFeedbackServicesJava",
            "RDCLOB": "https://infinitybsgpoc19.temenos.com:443/services/RDCLOB",
            "CampaignProcessingService": "https://infinitybsgpoc19.temenos.com:443/services/CampaignProcessingService",
            "FundsAuthorisationMSJSON": "https://infinitybsgpoc19.temenos.com:443/services/FundsAuthorisationMSJSON",
            "dbpChequeManagementServices": "https://infinitybsgpoc19.temenos.com:443/services/dbpChequeManagementServices",
            "C360APILogin": "https://infinitybsgpoc19.temenos.com:443/services/C360APILogin",
            "dbpACHServices": "https://infinitybsgpoc19.temenos.com:443/services/dbpACHServices",
            "WealthRefinitivServices": "https://infinitybsgpoc19.temenos.com:443/services/WealthRefinitivServices",
            "DBPCoreIntegrationServices": "https://infinitybsgpoc19.temenos.com:443/services/DBPCoreIntegrationServices",
            "DomesticWireTransferLOB": "https://infinitybsgpoc19.temenos.com:443/services/DomesticWireTransferLOB",
            "IntraBankPayeeLOB": "https://infinitybsgpoc19.temenos.com:443/services/IntraBankPayeeLOB",
            "WealthServicesOrchestration": "https://infinitybsgpoc19.temenos.com:443/services/WealthServicesOrchestration",
            "dbpCardServices": "https://infinitybsgpoc19.temenos.com:443/services/dbpCardServices",
            "CustomerData_Orch": "https://infinitybsgpoc19.temenos.com:443/services/CustomerData_Orch",
            "dbpNPBulkPaymentServices": "https://infinitybsgpoc19.temenos.com:443/services/dbpNPBulkPaymentServices",
            "T24ISAccounts": "https://infinitybsgpoc19.temenos.com:443/services/T24ISAccounts",
            "dbpForexServices": "https://infinitybsgpoc19.temenos.com:443/services/dbpForexServices"
        },
        "service_doc_etag": "00000179D7460D78",
        "appId": "7627b968-cfcf-4d84-a03b-b659243c77b8",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "DbpLocalServicesBSG",
        "reportingsvc": {
            "session": "https://infinitybsgpoc19.temenos.com:443/services/IST",
            "custom": "https://infinitybsgpoc19.temenos.com:443/services/CMS"
        },
        "Webapp": {
            "url": "https://infinitybsgpoc19.temenos.com:443/apps/InfinityBanking"
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
};
sessionID = "";

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        isMVC: true,
        APILevel: 8000
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        preappinit: applicationController.AS_AppEvents_h4ded27d9dd845f885ad538266976f45,
        appservice: function(eventObject) {
            var value = applicationController.AS_AppEvents_hd4fc1bedd904d29862f6382068c9886(eventObject);
            return value;
        },
        postappinit: function(eventObj) {
            applicationController.postAppInitCallBack(eventObj);
        },
        showstartupform: function() {
            var startupModule = kony.mvc.MDAApplication.getSharedInstance().moduleManager.getModule("AuthModule");
            startupModule.presentationController.presentUserInterface("frmLogin");
        }
    });
};

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("BlueTheme", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
kony.print = function() {
    return;
};
//This is the entry point for the application.When Locale comes,Local API call will be the entry point.
kony.i18n.setDefaultLocaleAsync("en", onSuccess, onFailure, null);