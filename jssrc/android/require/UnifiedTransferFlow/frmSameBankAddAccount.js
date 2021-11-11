define("UnifiedTransferFlow/frmSameBankAddAccount", function() {
    return function(controller) {
        function addWidgetsfrmSameBankAddAccount() {
            this.setDefaultUnit(kony.flex.DP);
            var flxSameBankMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxSameBankMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSameBankMain.setDefaultUnit(kony.flex.DP);
            var flxContents = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxContents",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "ICSknBGFFFFFFNoBorder",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxContents.setDefaultUnit(kony.flex.DP);
            var AddNewAccount = new com.temenos.infinityComponent.AddNewAccount({
                "height": "100%",
                "id": "AddNewAccount",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "AddNewAccount": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            AddNewAccount.gsknHeaderLbl = "ICSknLblfffffSSPSemiBold76px";
            AddNewAccount.adsSectionHeader = "{i.kony.address.AddAddress}";
            AddNewAccount.ctsSectionHeader = "{i.i18n.unified.contactType}";
            AddNewAccount.accValidationService = "RBObjects";
            AddNewAccount.sbssSwiftLookupService = "RBObjects";
            AddNewAccount.sbssResultItemFlexSkin = "ICSknFlxE3E3E3Bdr8Px";
            AddNewAccount.rcsVisibility = true;
            AddNewAccount.rcsSwiftLookupBtnSkn = "ICSknBtn4176A434px";
            AddNewAccount.linkPayeeSectionTitle = "{i.i18n.unifiedBeneficiary.LinkPayee}";
            AddNewAccount.vfsObject = "Recipients";
            AddNewAccount.vfssLabelSkin = "sknMMLeftLabels";
            AddNewAccount.easSectionHeader = "{i.kony.i18n.verifyDetails.emailAddress}";
            AddNewAccount.ccsCountryListService = "RBObjects";
            AddNewAccount.ccssSearchboxFlx = "ICSknLblfffffSSPSemiBold76px";
            AddNewAccount.phnoSectionHeader = "{i.Kony.mb.userdetail.PhoneNumber}";
            AddNewAccount.pynsSectionHeader = "{i.i18n.unifiedBeneficiary.payeesName}";
            AddNewAccount.phnoLookupSkin = "ICSknBtn4176A434px";
            AddNewAccount.accNumericInputBottomSkin = "ICSknFlxE3E3E3Border";
            AddNewAccount.iconBack = "backbutton.png";
            AddNewAccount.dvfConfig = {
                "Recipients": {
                    "txtBoxPayeeName": "NAME",
                    "txtBoxNewAccountNumber": "ACCOUNT_NUMBER",
                    "txtBoxReenterAccountNumber": "ACCOUNT_NUMBER",
                    "txtRequiredBICSwift": "ID_ALPHANUMERIC",
                    "txtRequiredClearingCode1": "ID_ALPHANUMERIC",
                    "txtRequiredClearingCode2": "ID_ALPHANUMERIC",
                    "txtSwiftBICSearchValue1": "NAME",
                    "txtSwiftBICSearchValue2": "NAME",
                    "txtSwiftBICSearchValue3": "NAME",
                    "txtSwiftBICSearchValue4": "NAME",
                    "txtEmailAddress": "EMAIL",
                    "txtBoxNationalID": "NUMBER",
                    "tbxContactCode": "NAME",
                    "txtNickName": "ID_ALPHANUMERIC",
                    "txtBoxAddressLine01": "ID_ALPHANUMERIC",
                    "txtBoxAddressLine02": "ID_ALPHANUMERIC",
                    "txtBoxCountry": "NAME",
                    "txtBoxState": "NAME",
                    "txtBoxCity": "NAME",
                    "txtBoxPostalCode": "ZIPCODE"
                }
            };
            AddNewAccount.nisSectionHeader = "{i.i18n.unifiedBeneficiary.nationalID}";
            AddNewAccount.eassOROptionFlexSkin = "ICSknFFFFFFBrE3E3E3Round";
            AddNewAccount.cfcSectionHeader = "{i.kony.mb.p2p.pickFromContacts}";
            AddNewAccount.cfcssSearchboxFlx = "ICSknLblfffffSSPSemiBold76px";
            AddNewAccount.ctsContactTypeSkn = "sknLbl424242SSP26px";
            AddNewAccount.annSectionHeader = "{i.Kony.mb.EBill.PayeeNickName}";
            AddNewAccount.ctsContactSelectionSkn = "ICSknFlxF6F6F6Radius26px";
            AddNewAccount.sbssResultItemFlexSelectSkin = "ICSknFlx04A615Selected";
            AddNewAccount.ccssSearchBoxSkin = "ICSknTbxSSPR42424215px";
            AddNewAccount.adsSubHeader = "{i.kony.unifiedBeneficiary.AddressText}";
            AddNewAccount.gsknHeaderFlex = "ICSknFlxBg003e7515px";
            AddNewAccount.ctsValues = {
                "optionValues": "Phone Number,Email Address,National ID",
                "inputPoolKey": "contactType",
                "selectedValue": "$.inputPool.contactType"
            };
            AddNewAccount.accValidationObject = "ExternalAccounts";
            AddNewAccount.sbssSwiftLookupObject = "SwiftCode";
            AddNewAccount.rcsGetSwiftService = "RBObjects";
            AddNewAccount.vfssValueEditableSkin = "sknMMBlueLabel";
            AddNewAccount.pynsSubHeader = "{i.i18n.unifiedBeneficiary.enterPayeeName}";
            AddNewAccount.easSubHeader = "{i.i18n.unifiedBeneficiary.payeeEmailAddressSubHeader}";
            AddNewAccount.ccsCountryListOperation = "Country";
            AddNewAccount.phnosFieldValue = "ICSknLbl42424234px";
            AddNewAccount.phnoSubheader = "{i.i18n.unifiedBeneficiary.phoneNumberDescription}";
            AddNewAccount.accInputFieldMaskedSkin = "ICSknLbl94949487px";
            AddNewAccount.minFillMapping = {
                "Recipients": {
                    "txtBoxPayeeName": "1",
                    "txtBoxNewAccountNumber": "3",
                    "txtBoxReenterAccountNumber": "3",
                    "txtSwiftBICSearchValue1": "0",
                    "txtSwiftBICSearchValue2": "0",
                    "txtSwiftBICSearchValue3": "0",
                    "txtSwiftBICSearchValue4": "0",
                    "txtEmailAddress": "6",
                    "lblMobileNumber": "10",
                    "txtBoxNationalID": "12",
                    "tbxContactCode": "3",
                    "txtNickName": "3",
                    "txtBoxAddressLine01": "5",
                    "txtBoxAddressLine02": "5",
                    "txtBoxCountry": "5",
                    "txtBoxState": "5",
                    "txtBoxCity": "5",
                    "txtBoxPostalCode": "6"
                }
            };
            AddNewAccount.nisSubHeader = "{i.i18n.unifiedBeneficiary.nationalIDSubHeader}";
            AddNewAccount.eassOROptionLabelSkin = "ICSknLbl72727234px";
            AddNewAccount.cfcSearchbox = {
                "searchicon": "search.png",
                "clearSearchicon": "closecircle.png",
                "placeHolder": "{i.i18n.unifiedBeneficiary.searchByKeywords}"
            };
            AddNewAccount.cfcssSearchBoxSkin = "ICSknTbxSSPR42424215px";
            AddNewAccount.rcsOROptionFlexSkin = "ICSknFFFFFFBrE3E3E3Round";
            AddNewAccount.annSubHeader = "{i.i18n.unifiedBeneficiary.payeeNickname}";
            AddNewAccount.cfcEmailContactsData = {
                "inputPoolKey": "emailContacts",
                "value": "{$.inputPool.emailContacts}"
            };
            AddNewAccount.pynsVisibility = true;
            AddNewAccount.sbssResultItemLabel1Skin = "ICSknLbl72727234px";
            AddNewAccount.ccssResultItemFlex = "f9f9";
            AddNewAccount.gsknCancelBtn = "ICSKnBtnffffff15px";
            AddNewAccount.accValidationOperation = "getBeneficiaryName";
            AddNewAccount.sbssSwiftLookupOperation = "getBICFromBankDetails";
            AddNewAccount.rcsSwiftObject = "SwiftCode";
            AddNewAccount.vfssValueReadonlySkin = "ICSknLbl42424234px";
            AddNewAccount.easTextBoxInput = {
                "inputPoolKey": "emailAddress",
                "value": "{$.inputPool.emailAddress}",
                "placeHolder": "{i.kony.address.EnterEmailAddress}"
            };
            AddNewAccount.ccsCountryListObject = "getAllCountries";
            AddNewAccount.phnoKeypadClearIcon = "transparentbox.png";
            AddNewAccount.accInputFieldUnmaskedSkin = "ICSknLbl42424255px";
            AddNewAccount.adsTextBox1Label = "{i.i18n.TransfersEur.AddressLine01}:";
            AddNewAccount.maxFillMapping = {
                "Recipients": {
                    "txtBoxPayeeName": "20",
                    "txtBoxNewAccountNumber": "10",
                    "txtBoxReenterAccountNumber": "10",
                    "txtRequiredBICSwift": "40",
                    "txtRequiredClearingCode1": "40",
                    "txtRequiredClearingCode2": "40",
                    "txtSwiftBICSearchValue1": "30",
                    "txtSwiftBICSearchValue2": "30",
                    "txtSwiftBICSearchValue3": "30",
                    "txtSwiftBICSearchValue4": "30",
                    "txtEmailAddress": "64",
                    "lblMobileNumber": "10",
                    "txtBoxAddressLine01": "30",
                    "txtBoxAddressLine02": "30",
                    "txtBoxCountry": "30",
                    "txtBoxState": "30",
                    "txtBoxCity": "30",
                    "txtBoxPostalCode": "30",
                    "txtNickName": "35"
                }
            };
            AddNewAccount.nisTextBoxInput = {
                "inputPoolKey": "nationalID",
                "value": "{$.inputPool.nationalID}",
                "placeHolder": "{i.i18n.unifiedBeneficiary.EnterNationalID}",
                "inputMode": "NUMERIC"
            };
            AddNewAccount.phnosOROptionFlexSkin = "ICSknFFFFFFBrE3E3E3Round";
            AddNewAccount.eassPickEmailSkin = "ICSknBtn4176A434px";
            AddNewAccount.cfcssResultItemFlex = "f9f9";
            AddNewAccount.rcsOROptionLabelSkin = "ICSknLbl72727234px";
            AddNewAccount.annTextbox = {
                "inputPoolKey": "payeeNickname",
                "value": "{$.inputPool.payeeNickname}",
                "placeHolder": "Enter Payee Nickname",
                "restrictChar": "!@#&*_'-.,"
            };
            AddNewAccount.cfcPhoneNoContactsData = {
                "inputPoolKey": "phoneContacts",
                "value": "{$.inputPool.phoneContacts}"
            };
            AddNewAccount.pynsTextbox = {
                "inputPoolKey": "payeeName",
                "value": "{$.inputPool.payeeName}",
                "placeHolder": "{i.i18n.unifiedBeneficiary.payeePlaceholder}",
                "restrictChar": "!@#&*_"
            };
            AddNewAccount.sbssResultItemLabel2Skin = "ICSknLbl424242B41px";
            AddNewAccount.ccssResultItemFlexSelected = "ICSknFlxF6F6F6Radius26px";
            AddNewAccount.accValidationCriteria = {
                "accountNumber": "{$.inputPool.accountNumber}"
            };
            AddNewAccount.sbssSearchResultsIdentifier = "SLArray";
            AddNewAccount.rcsSwiftOperation = "getSwiftCode";
            AddNewAccount.vfssRowSkin = "sknFlxBgFFFFFF";
            AddNewAccount.easErrorMessage = "{i.kony.mb.OnBoarding.InvalidEmail}";
            AddNewAccount.ccsCountryListCriteria = "{}";
            AddNewAccount.phnoCCVisibility = true;
            AddNewAccount.adsTextBox1Value = {
                "inputPoolKey": "addressLine1",
                "value": "{$.inputPool.addressLine1}",
                "placeHolder": "{i.kony.address.AddressLine01}"
            };
            AddNewAccount.jsonObjName = "Recipients";
            AddNewAccount.nisErrorMessage = "{i.i18n.unifiedBeneficiary.validNationalId}";
            AddNewAccount.phnosOROptionLabelSkin = "ICSknLbl72727234px";
            AddNewAccount.cfcssResultItemFlexSelected = "ICSknFlxF6F6F6Radius26px";
            AddNewAccount.annCTAButton = {
                "id": "payeeNicknameBtn",
                "text": "{i.kony.mb.common.continue}"
            };
            AddNewAccount.accNumericInputBottomErrorSkin = "ICSknFlxF54B5E1px";
            AddNewAccount.pynsErrorMessage = "{i.i18n.unifiedBeneficiary.payeeNameErrorMsg}";
            AddNewAccount.phnoTxtbox1Label = "Code:";
            AddNewAccount.sbssResultItemLabel3Skin = "ICSknLbl42424234px";
            AddNewAccount.ccssSegSortAlphabetSkin = "ICSknLbl424242SSP26px";
            AddNewAccount.beneficiaryTypes = "SameBank";
            AddNewAccount.accSectionHeader = "{i.kony.mb.enroll.accountNumber}";
            AddNewAccount.inputValuesPool = "inputPool";
            AddNewAccount.rcsSwiftCriteria = {
                "iban": "{$.inputPool.accountNumber}",
                "countryCode": "{$.inputPool.IBANCountryCode}"
            };
            AddNewAccount.vfssRowSeparator = "sknFlxe3e3e3";
            AddNewAccount.ccsCListReponseIdentifier = "countriesListResponse";
            AddNewAccount.adsTextBox2Label = "{i.i18n.TransfersEur.AddressLine02}:";
            AddNewAccount.nisCTAButton = {
                "id": "nationalIDBtn",
                "actionType": "primary",
                "text": "{i.kony.mb.common.continue}"
            };
            AddNewAccount.phnosPickPhoneNoSkin = "ICSknBtn4176A434px";
            AddNewAccount.easOROption = "{i.kony.mb.Forgot.Or}";
            AddNewAccount.cfcssSegLabelSkin = "ICSknLbl424242SSP26px";
            AddNewAccount.cfcsNoRecords = "No Records Available";
            AddNewAccount.pynsCTAButton = {
                "id": "payeeNameBtn",
                "actionType": "primary",
                "text": "{i.kony.mb.common.continue}"
            };
            AddNewAccount.phnoTxtbox1 = {
                "inputPoolKey": "countryCode",
                "value": "{$.inputPool.countryCode}"
            };
            AddNewAccount.sbssEnableCache = true;
            AddNewAccount.ccssSegAlphabetBG = "ICSknFlxF6F6F6Radius26px";
            AddNewAccount.gsknSubHeaderFlex = "sknFlxffffff";
            AddNewAccount.accScreen1SubHeader = "{i.kony.reqCode.EnterAccountNumber}";
            AddNewAccount.cancelButton = "{i.kony.mb.common.Cancel}";
            AddNewAccount.rcsSwiftResponseIdentifier = "bicResponse";
            AddNewAccount.ccsCountryListMasterData = {
                "countries": [{
                    "code": "+7 840",
                    "name": "Abkhazia"
                }, {
                    "code": "+93",
                    "name": "Afghanistan"
                }, {
                    "code": "+355",
                    "name": "Albania"
                }, {
                    "code": "+213",
                    "name": "Algeria"
                }, {
                    "code": "+1 684",
                    "name": "American Samoa"
                }, {
                    "code": "+376",
                    "name": "Andorra"
                }, {
                    "code": "+244",
                    "name": "Angola"
                }, {
                    "code": "+1 264",
                    "name": "Anguilla"
                }, {
                    "code": "+1 268",
                    "name": "Antigua and Barbuda"
                }, {
                    "code": "+54",
                    "name": "Argentina"
                }, {
                    "code": "+374",
                    "name": "Armenia"
                }, {
                    "code": "+297",
                    "name": "Aruba"
                }, {
                    "code": "+247",
                    "name": "Ascension"
                }, {
                    "code": "+61",
                    "name": "Australia"
                }, {
                    "code": "+672",
                    "name": "Australian External Territories"
                }, {
                    "code": "+43",
                    "name": "Austria"
                }, {
                    "code": "+994",
                    "name": "Azerbaijan"
                }, {
                    "code": "+1 242",
                    "name": "Bahamas"
                }, {
                    "code": "+973",
                    "name": "Bahrain"
                }, {
                    "code": "+880",
                    "name": "Bangladesh"
                }, {
                    "code": "+1 246",
                    "name": "Barbados"
                }, {
                    "code": "+1 268",
                    "name": "Barbuda"
                }, {
                    "code": "+375",
                    "name": "Belarus"
                }, {
                    "code": "+32",
                    "name": "Belgium"
                }, {
                    "code": "+501",
                    "name": "Belize"
                }, {
                    "code": "+229",
                    "name": "Benin"
                }, {
                    "code": "+1 441",
                    "name": "Bermuda"
                }, {
                    "code": "+975",
                    "name": "Bhutan"
                }, {
                    "code": "+591",
                    "name": "Bolivia"
                }, {
                    "code": "+387",
                    "name": "Bosnia and Herzegovina"
                }, {
                    "code": "+267",
                    "name": "Botswana"
                }, {
                    "code": "+55",
                    "name": "Brazil"
                }, {
                    "code": "+246",
                    "name": "British Indian Ocean Territory"
                }, {
                    "code": "+1 284",
                    "name": "British Virgin Islands"
                }, {
                    "code": "+673",
                    "name": "Brunei"
                }, {
                    "code": "+359",
                    "name": "Bulgaria"
                }, {
                    "code": "+226",
                    "name": "Burkina Faso"
                }, {
                    "code": "+257",
                    "name": "Burundi"
                }, {
                    "code": "+855",
                    "name": "Cambodia"
                }, {
                    "code": "+237",
                    "name": "Cameroon"
                }, {
                    "code": "+1",
                    "name": "Canada"
                }, {
                    "code": "+238",
                    "name": "Cape Verde"
                }, {
                    "code": "+ 345",
                    "name": "Cayman Islands"
                }, {
                    "code": "+236",
                    "name": "Central African Republic"
                }, {
                    "code": "+235",
                    "name": "Chad"
                }, {
                    "code": "+56",
                    "name": "Chile"
                }, {
                    "code": "+86",
                    "name": "China"
                }, {
                    "code": "+61",
                    "name": "Christmas Island"
                }, {
                    "code": "+61",
                    "name": "Cocos-Keeling Islands"
                }, {
                    "code": "+57",
                    "name": "Colombia"
                }, {
                    "code": "+269",
                    "name": "Comoros"
                }, {
                    "code": "+242",
                    "name": "Congo"
                }, {
                    "code": "+243",
                    "name": "Congo, Dem. Rep. of (Zaire)"
                }, {
                    "code": "+682",
                    "name": "Cook Islands"
                }, {
                    "code": "+506",
                    "name": "Costa Rica"
                }, {
                    "code": "+385",
                    "name": "Croatia"
                }, {
                    "code": "+53",
                    "name": "Cuba"
                }, {
                    "code": "+599",
                    "name": "Curacao"
                }, {
                    "code": "+537",
                    "name": "Cyprus"
                }, {
                    "code": "+420",
                    "name": "Czech Republic"
                }, {
                    "code": "+45",
                    "name": "Denmark"
                }, {
                    "code": "+246",
                    "name": "Diego Garcia"
                }, {
                    "code": "+253",
                    "name": "Djibouti"
                }, {
                    "code": "+1 767",
                    "name": "Dominica"
                }, {
                    "code": "+1 809",
                    "name": "Dominican Republic"
                }, {
                    "code": "+670",
                    "name": "East Timor"
                }, {
                    "code": "+56",
                    "name": "Easter Island"
                }, {
                    "code": "+593",
                    "name": "Ecuador"
                }, {
                    "code": "+20",
                    "name": "Egypt"
                }, {
                    "code": "+503",
                    "name": "El Salvador"
                }, {
                    "code": "+240",
                    "name": "Equatorial Guinea"
                }, {
                    "code": "+291",
                    "name": "Eritrea"
                }, {
                    "code": "+372",
                    "name": "Estonia"
                }, {
                    "code": "+251",
                    "name": "Ethiopia"
                }, {
                    "code": "+500",
                    "name": "Falkland Islands"
                }, {
                    "code": "+298",
                    "name": "Faroe Islands"
                }, {
                    "code": "+679",
                    "name": "Fiji"
                }, {
                    "code": "+358",
                    "name": "Finland"
                }, {
                    "code": "+33",
                    "name": "France"
                }, {
                    "code": "+596",
                    "name": "French Antilles"
                }, {
                    "code": "+594",
                    "name": "French Guiana"
                }, {
                    "code": "+689",
                    "name": "French Polynesia"
                }, {
                    "code": "+241",
                    "name": "Gabon"
                }, {
                    "code": "+220",
                    "name": "Gambia"
                }, {
                    "code": "+995",
                    "name": "Georgia"
                }, {
                    "code": "+49",
                    "name": "Germany"
                }, {
                    "code": "+233",
                    "name": "Ghana"
                }, {
                    "code": "+350",
                    "name": "Gibraltar"
                }, {
                    "code": "+30",
                    "name": "Greece"
                }, {
                    "code": "+299",
                    "name": "Greenland"
                }, {
                    "code": "+1 473",
                    "name": "Grenada"
                }, {
                    "code": "+590",
                    "name": "Guadeloupe"
                }, {
                    "code": "+1 671",
                    "name": "Guam"
                }, {
                    "code": "+502",
                    "name": "Guatemala"
                }, {
                    "code": "+224",
                    "name": "Guinea"
                }, {
                    "code": "+245",
                    "name": "Guinea-Bissau"
                }, {
                    "code": "+595",
                    "name": "Guyana"
                }, {
                    "code": "+509",
                    "name": "Haiti"
                }, {
                    "code": "+504",
                    "name": "Honduras"
                }, {
                    "code": "+852",
                    "name": "Hong Kong SAR China"
                }, {
                    "code": "+36",
                    "name": "Hungary"
                }, {
                    "code": "+354",
                    "name": "Iceland"
                }, {
                    "code": "+91",
                    "name": "India"
                }, {
                    "code": "+62",
                    "name": "Indonesia"
                }, {
                    "code": "+98",
                    "name": "Iran"
                }, {
                    "code": "+964",
                    "name": "Iraq"
                }, {
                    "code": "+353",
                    "name": "Ireland"
                }, {
                    "code": "+972",
                    "name": "Israel"
                }, {
                    "code": "+39",
                    "name": "Italy"
                }, {
                    "code": "+225",
                    "name": "Ivory Coast"
                }, {
                    "code": "+1 876",
                    "name": "Jamaica"
                }, {
                    "code": "+81",
                    "name": "Japan"
                }, {
                    "code": "+962",
                    "name": "Jordan"
                }, {
                    "code": "+7 7",
                    "name": "Kazakhstan"
                }, {
                    "code": "+254",
                    "name": "Kenya"
                }, {
                    "code": "+686",
                    "name": "Kiribati"
                }, {
                    "code": "+965",
                    "name": "Kuwait"
                }, {
                    "code": "+996",
                    "name": "Kyrgyzstan"
                }, {
                    "code": "+856",
                    "name": "Laos"
                }, {
                    "code": "+371",
                    "name": "Latvia"
                }, {
                    "code": "+961",
                    "name": "Lebanon"
                }, {
                    "code": "+266",
                    "name": "Lesotho"
                }, {
                    "code": "+231",
                    "name": "Liberia"
                }, {
                    "code": "+218",
                    "name": "Libya"
                }, {
                    "code": "+423",
                    "name": "Liechtenstein"
                }, {
                    "code": "+370",
                    "name": "Lithuania"
                }, {
                    "code": "+352",
                    "name": "Luxembourg"
                }, {
                    "code": "+853",
                    "name": "Macau SAR China"
                }, {
                    "code": "+389",
                    "name": "Macedonia"
                }, {
                    "code": "+261",
                    "name": "Madagascar"
                }, {
                    "code": "+265",
                    "name": "Malawi"
                }, {
                    "code": "+60",
                    "name": "Malaysia"
                }, {
                    "code": "+960",
                    "name": "Maldives"
                }, {
                    "code": "+223",
                    "name": "Mali"
                }, {
                    "code": "+356",
                    "name": "Malta"
                }, {
                    "code": "+692",
                    "name": "Marshall Islands"
                }, {
                    "code": "+596",
                    "name": "Martinique"
                }, {
                    "code": "+222",
                    "name": "Mauritania"
                }, {
                    "code": "+230",
                    "name": "Mauritius"
                }, {
                    "code": "+262",
                    "name": "Mayotte"
                }, {
                    "code": "+52",
                    "name": "Mexico"
                }, {
                    "code": "+691",
                    "name": "Micronesia"
                }, {
                    "code": "+1 808",
                    "name": "Midway Island"
                }, {
                    "code": "+373",
                    "name": "Moldova"
                }, {
                    "code": "+377",
                    "name": "Monaco"
                }, {
                    "code": "+976",
                    "name": "Mongolia"
                }, {
                    "code": "+382",
                    "name": "Montenegro"
                }, {
                    "code": "+1664",
                    "name": "Montserrat"
                }, {
                    "code": "+212",
                    "name": "Morocco"
                }, {
                    "code": "+95",
                    "name": "Myanmar"
                }, {
                    "code": "+264",
                    "name": "Namibia"
                }, {
                    "code": "+674",
                    "name": "Nauru"
                }, {
                    "code": "+977",
                    "name": "Nepal"
                }, {
                    "code": "+31",
                    "name": "Netherlands"
                }, {
                    "code": "+599",
                    "name": "Netherlands Antilles"
                }, {
                    "code": "+1 869",
                    "name": "Nevis"
                }, {
                    "code": "+687",
                    "name": "New Caledonia"
                }, {
                    "code": "+64",
                    "name": "New Zealand"
                }, {
                    "code": "+505",
                    "name": "Nicaragua"
                }, {
                    "code": "+227",
                    "name": "Niger"
                }, {
                    "code": "+234",
                    "name": "Nigeria"
                }, {
                    "code": "+683",
                    "name": "Niue"
                }, {
                    "code": "+672",
                    "name": "Norfolk Island"
                }, {
                    "code": "+850",
                    "name": "North Korea"
                }, {
                    "code": "+1 670",
                    "name": "Northern Mariana Islands"
                }, {
                    "code": "+47",
                    "name": "Norway"
                }, {
                    "code": "+968",
                    "name": "Oman"
                }, {
                    "code": "+92",
                    "name": "Pakistan"
                }, {
                    "code": "+680",
                    "name": "Palau"
                }, {
                    "code": "+970",
                    "name": "Palestinian Territory"
                }, {
                    "code": "+507",
                    "name": "Panama"
                }, {
                    "code": "+675",
                    "name": "Papua New Guinea"
                }, {
                    "code": "+595",
                    "name": "Paraguay"
                }, {
                    "code": "+51",
                    "name": "Peru"
                }, {
                    "code": "+63",
                    "name": "Philippines"
                }, {
                    "code": "+48",
                    "name": "Poland"
                }, {
                    "code": "+351",
                    "name": "Portugal"
                }, {
                    "code": "+1 787",
                    "name": "Puerto Rico"
                }, {
                    "code": "+974",
                    "name": "Qatar"
                }, {
                    "code": "+262",
                    "name": "Reunion"
                }, {
                    "code": "+40",
                    "name": "Romania"
                }, {
                    "code": "+7",
                    "name": "Russia"
                }, {
                    "code": "+250",
                    "name": "Rwanda"
                }, {
                    "code": "+685",
                    "name": "Samoa"
                }, {
                    "code": "+378",
                    "name": "San Marino"
                }, {
                    "code": "+966",
                    "name": "Saudi Arabia"
                }, {
                    "code": "+221",
                    "name": "Senegal"
                }, {
                    "code": "+381",
                    "name": "Serbia"
                }, {
                    "code": "+248",
                    "name": "Seychelles"
                }, {
                    "code": "+232",
                    "name": "Sierra Leone"
                }, {
                    "code": "+65",
                    "name": "Singapore"
                }, {
                    "code": "+421",
                    "name": "Slovakia"
                }, {
                    "code": "+386",
                    "name": "Slovenia"
                }, {
                    "code": "+677",
                    "name": "Solomon Islands"
                }, {
                    "code": "+27",
                    "name": "South Africa"
                }, {
                    "code": "+500",
                    "name": "South Georgia and the South Sandwich Islands"
                }, {
                    "code": "+82",
                    "name": "South Korea"
                }, {
                    "code": "+34",
                    "name": "Spain"
                }, {
                    "code": "+94",
                    "name": "Sri Lanka"
                }, {
                    "code": "+249",
                    "name": "Sudan"
                }, {
                    "code": "+597",
                    "name": "Suriname"
                }, {
                    "code": "+268",
                    "name": "Swaziland"
                }, {
                    "code": "+46",
                    "name": "Sweden"
                }, {
                    "code": "+41",
                    "name": "Switzerland"
                }, {
                    "code": "+963",
                    "name": "Syria"
                }, {
                    "code": "+886",
                    "name": "Taiwan"
                }, {
                    "code": "+992",
                    "name": "Tajikistan"
                }, {
                    "code": "+255",
                    "name": "Tanzania"
                }, {
                    "code": "+66",
                    "name": "Thailand"
                }, {
                    "code": "+670",
                    "name": "Timor Leste"
                }, {
                    "code": "+228",
                    "name": "Togo"
                }, {
                    "code": "+690",
                    "name": "Tokelau"
                }, {
                    "code": "+676",
                    "name": "Tonga"
                }, {
                    "code": "+1 868",
                    "name": "Trinidad and Tobago"
                }, {
                    "code": "+216",
                    "name": "Tunisia"
                }, {
                    "code": "+90",
                    "name": "Turkey"
                }, {
                    "code": "+993",
                    "name": "Turkmenistan"
                }, {
                    "code": "+1 649",
                    "name": "Turks and Caicos Islands"
                }, {
                    "code": "+688",
                    "name": "Tuvalu"
                }, {
                    "code": "+1 340",
                    "name": "U.S. Virgin Islands"
                }, {
                    "code": "+256",
                    "name": "Uganda"
                }, {
                    "code": "+380",
                    "name": "Ukraine"
                }, {
                    "code": "+971",
                    "name": "United Arab Emirates"
                }, {
                    "code": "+44",
                    "name": "United Kingdom"
                }, {
                    "code": "+1",
                    "name": "United States"
                }, {
                    "code": "+598",
                    "name": "Uruguay"
                }, {
                    "code": "+998",
                    "name": "Uzbekistan"
                }, {
                    "code": "+678",
                    "name": "Vanuatu"
                }, {
                    "code": "+58",
                    "name": "Venezuela"
                }, {
                    "code": "+84",
                    "name": "Vietnam"
                }, {
                    "code": "+1 808",
                    "name": "Wake Island"
                }, {
                    "code": "+681",
                    "name": "Wallis and Futuna"
                }, {
                    "code": "+967",
                    "name": "Yemen"
                }, {
                    "code": "+260",
                    "name": "Zambia"
                }, {
                    "code": "+255",
                    "name": "Zanzibar"
                }, {
                    "code": "+263",
                    "name": "Zimbabwe"
                }]
            };
            AddNewAccount.adsTextBox2Value = {
                "inputPoolKey": "addressLine2",
                "value": "{$.inputPool.addressLine2}",
                "placeHolder": "{i.kony.address.AddressLine02}"
            };
            AddNewAccount.easCTAButton1 = {
                "id": "emailChooseBtn",
                "text": "{i.kony.mb.p2p.pickFromContacts}"
            };
            AddNewAccount.cfcssSegAlphabetBG = "ICSknFlxF6F6F6Radius26px";
            AddNewAccount.phnosTbxValueSkn = "ICSknTbx424242SSP24px";
            AddNewAccount.easCTAButton2 = {
                "id": "emailAddressBtn",
                "text": "{i.kony.mb.common.continue}"
            };
            AddNewAccount.phnoTxtbox2Label = "{i.i18n.ProfileManagement.PhoneNumber}";
            AddNewAccount.sbssSectionHeader = "{i.i18n.unifiedBeneficiary.swiftBicSearch}";
            AddNewAccount.ccssSegLabelSkin = "ICSknLbl424242SSP26px";
            AddNewAccount.rcsAcceptBICSwift = true;
            AddNewAccount.gsknSubHeaderLabel = "ICSknLbl42424234px";
            AddNewAccount.accScreen2SubHeader = "{i.kony.reqCode.reEnterAccountNumber}";
            AddNewAccount.ccsCountryListSource = "MasterData";
            AddNewAccount.adsTextBox3Label = "{i.i18n.ProfileManagement.country}:";
            AddNewAccount.cfcssSegSortAlphabetSkin = "ICSknLbl424242SSP26px";
            AddNewAccount.phnosLabelValueSkn = "ICSknLbl424242SSP24px";
            AddNewAccount.phnoTxtbox2 = {
                "inputPoolKey": "phoneNumber",
                "mapping": "{$.inputPool.phoneNumber}",
                "placeHolder": "{i.i18n.unified.enterNumber}"
            };
            AddNewAccount.sbssSubHeaderTitle1 = "{i.i18n.unifiedBeneficiary.swiftBicSearchSubHeader}";
            AddNewAccount.rcsAcceptClearcode = true;
            AddNewAccount.gsknSubHeaderseparator = "ICSknFlxA6A6A6Gradient";
            AddNewAccount.accTxtInput = {
                "inputPoolKey": "accountNumber",
                "value": "{$.inputPool.accountNumber}",
                "placeHolder": "{i.kony.mb.addBen.enterBenAccNumorIBAN}",
                "inputMode": "ANY",
                "mask": true
            };
            AddNewAccount.ccsSectionHeader = "{i.i18n.unifiedBeneficiary.selectCountryCode}";
            AddNewAccount.adsTextBox3Value = {
                "inputPoolKey": "country",
                "value": "{$.inputPool.country}",
                "placeHolder": "{i.kony.address.EnterCountryName}"
            };
            AddNewAccount.cccsNoRecordsSkin = "ICSknBtn4176A434px";
            AddNewAccount.cfcssNoRecordsSkin = "ICSknBtn4176A434px";
            AddNewAccount.rcsHdr = "{i.i18n.unified.requiredCode}";
            AddNewAccount.accReTxtInput = {
                "value": "{$.inputPool.accountNumber}",
                "placeHolder": "{i.kony.mb.addBen.ReenterBenAccNumorIBAN}",
                "inputMode": "ANY",
                "mask": false
            };
            AddNewAccount.ccsSearchbox = {
                "searchicon": "search.png",
                "clearSearchicon": "closecircle.png",
                "placeHolder": "{i.i18n.unifiedBeneficiary.searchByKeywords}"
            };
            AddNewAccount.adsTextBox4Label = "{i.i18n.common.state}:";
            AddNewAccount.phnoOROption = "{i.kony.mb.Forgot.Or}";
            AddNewAccount.phnoCTABtn1 = {
                "id": "lookUpBtn",
                "text": "{i.i18n.unifiedBeneficiary.Lookup}"
            };
            AddNewAccount.adsTextBox4Value = {
                "inputPoolKey": "state",
                "value": "{$.inputPool.state}",
                "placeHolder": "{i.kony.address.EnterStateName}"
            };
            AddNewAccount.rcsSubhdr = "{i.i18n.unified.requiredCodeSubHeaderText}";
            AddNewAccount.accCTAButton1 = {
                "id": "accNumBtn",
                "actionType": "primary",
                "text": "{i.i18n.common.proceed}"
            };
            AddNewAccount.vfsObjectService = "PayeeObjects";
            AddNewAccount.cccsNoRecords = "No Records Available";
            AddNewAccount.sbssTextbox1Label = "{i.i18n.verifyDetails.bankName}:";
            AddNewAccount.rcsTextbox1Label = "{i.kony.i18n.verifyDetails.bicSwift}";
            AddNewAccount.accCTAButton2 = {
                "id": "reEnterAccNumBtn",
                "actionType": "primary",
                "text": "{i.i18n.common.proceed}"
            };
            AddNewAccount.vfsOperation = "createExternalPayee";
            AddNewAccount.adsTextBox5Label = "{i.i18n.TransfersEur.City}:";
            AddNewAccount.phnoCTABtn2 = {
                "id": "phoneNumberChooseBtn",
                "text": "{i.i18n.unified.pickFromContactList}"
            };
            AddNewAccount.phnoCTABtn3 = {
                "id": "phoneNoBtn",
                "actionType": "primary",
                "text": "{i.kony.mb.common.continue}"
            };
            AddNewAccount.adsTextBox5Value = {
                "inputPoolKey": "city",
                "value": "{$.inputPoolKey.city}",
                "placeHolder": "{i.kony.address.EnterCity}"
            };
            AddNewAccount.sbssTextbox1 = {
                "inputPoolKey": "bankName",
                "value": "{$.inputPool.bankName}",
                "placeHolder": "{i.i18n.unifiedBeneficiary.enterBankName}",
                "restrict": "!@#&*_'-.,"
            };
            AddNewAccount.rcsTextbox1 = {
                "inputPoolKey": "bic",
                "value": "{$.inputPool.bic}",
                "placeHolder": "{i.i18n.unified.intermediaryBIC}",
                "inputMode": "ANY",
                "defaultBankName": "Temenos"
            };
            AddNewAccount.accErrorMessage = {
                "invalidAccNumber": "{i.kony.reqCode.invalidAccNumber}",
                "invalidAccNumberOrIBAN": "{i.i18n.TransfersEur.InvalidIBANMessage}"
            };
            AddNewAccount.vfsCriteria = {
                "accountNumber": "{$.inputPool.accountNumber}",
                "IBAN": "{$.inputPool.accountNumber}",
                "beneficiaryName": "{$.inputPool.payeeName}",
                "bankName": "{$.inputPool.bankName}",
                "nickName": "{$.inputPool.payeeNickname}",
                "addressLine1": "{$.inputPool.addressLine1}",
                "addressLine2": "{$.inputPool.addressLine2}",
                "city": "{$.inputPool.city}",
                "zipcode": "{$.inputPool.zipCode}",
                "email": "{$.inputPool.emailAddress}",
                "state": "{$.inputPool.state}",
                "country": "{$.inputPool.country}",
                "phone": "{$.inputPool.phoneNumber}",
                "swiftCode": "{$.inputPool.bic}",
                "sameBank": "",
                "otherBank": "",
                "isVerified": true,
                "isSameBankAccount": true,
                "isInternationalAccount": false,
                "feature": "INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE_RECEPIENT",
                "singleCustomer": "{$.inputPool.singleCustomer}",
                "cif": "{$.inputPool.cifId}"
            };
            AddNewAccount.sbssTextbox2Label = "{i.i18n.unified.branchName}";
            AddNewAccount.vfsSectionTitle = "{i.kony.mb.BenVerifyDetails.Title}";
            AddNewAccount.rcsTextbox2Label = "{i.kony.i18n.verifyDetails.clearingCode1}";
            AddNewAccount.accReEnterErrorMessage = {
                "accountNumber": "{i.i18n.unifiedBeneficiary.mismatchAccountNumber}",
                "IBANNumber": "{i.i18n.unified.missmatchIBAN}"
            };
            AddNewAccount.adsTextBox6Label = "{i.kony.mb.common.postalCode}:";
            AddNewAccount.adsTextBox6Value = {
                "inputPoolKey": "zipCode",
                "value": "{$.inputPool.zipCode}",
                "placeHolder": "{i.kony.address.EnterPostalCode}"
            };
            AddNewAccount.sbssTextbox2 = {
                "inputPoolKey": "branch",
                "value": "{$.inputPool.branch}",
                "placeHolder": "{i.i18n.unifiedBeneficiary.enterBranchName}",
                "restrict": "!@#&*_'-.,"
            };
            AddNewAccount.rcsTextbox2 = {
                "inputPoolKey": "clearingCode1",
                "value": "{$.inputPool.clearingCode1}",
                "placeHolder": "{i.i18n.unified.clearingCode1}",
                "inputMode": "ANY"
            };
            AddNewAccount.accExistMsg = "{i.i18n.unified.accountNumberRecordsMisMatch}";
            AddNewAccount.vfsIconEdit = "chevron.png";
            AddNewAccount.sbssTextbox3Label = "{i.i18n.unified.city}";
            AddNewAccount.vfsField1Lbl = "{i.i18n.verifyDetails.payeeName}:";
            AddNewAccount.rcsTextbox3Label = "{i.kony.i18n.verifyDetails.clearingCode2}";
            AddNewAccount.accInvalidMsg = "{i.i18n.TransfersEur.InvalidAccountNumberMessage}";
            AddNewAccount.adsErrorMessage = "{i.kony.address.addressErrorMsg}";
            AddNewAccount.adsCTAButton = {
                "id": "addAddressBtn",
                "text": "{i.i18n.ProfileManagement.Save}",
                "actionType": "primary"
            };
            AddNewAccount.sbssTextbox3 = {
                "inputPoolKey": "city",
                "value": "{$.inputPool.city}",
                "placeHolder": "{i.kony.address.EnterCity}",
                "restrict": "!@#&*_'-.,"
            };
            AddNewAccount.vfsField1Value = {
                "inputPoolKey": "payeeName",
                "value": "{$.inputPool.payeeName}",
                "fieldType": "Label",
                "optional": false,
                "readOnly": {
                    "AddPayeeFlow": false,
                    "SavePayeeFlow": true
                }
            };
            AddNewAccount.rcsTextbox3 = {
                "inputPoolKey": "clearingCode2",
                "value": "{$.inputPool.clearingCode2}",
                "placeHolder": "{i.i18n.unified.clearingCode2}",
                "inputMode": "ANY"
            };
            AddNewAccount.accKeypadClearIcon = "cancelkeypad.png";
            AddNewAccount.sbssTextbox4Label = "{i.i18n.ProfileManagement.country}";
            AddNewAccount.vfsField2Lbl = "{i.kony.i18n.verifyDetails.accountNumber}";
            AddNewAccount.gsknPrimaryContexualBtn = "ICSknBtn003E7535PX";
            AddNewAccount.textBox1Visibility = true;
            AddNewAccount.sbssTextbox4 = {
                "inputPoolKey": "country",
                "value": "{$.inputPool.country}",
                "placeHolder": "{i.i18n.unifiedBeneficiary.enterCountry}"
            };
            AddNewAccount.vfsField2Value = {
                "inputPoolKey": "accountNumber",
                "value": "{$.inputPool.accountNumber}",
                "fieldType": "Label",
                "optional": false,
                "readOnly": {
                    "AddPayeeFlow": false,
                    "SavePayeeFlow": true
                }
            };
            AddNewAccount.textBox2Visibility = true;
            AddNewAccount.sbssCTA1 = {
                "id": "getDetailsBtn",
                "text": "{i.i18n.unifiedBeneficiary.getDetails}",
                "actionType": "primary"
            };
            AddNewAccount.rcsCTAButton1 = {
                "id": "swiftBICBtn",
                "text": "{i.i18n.unified.lookUp}"
            };
            AddNewAccount.vfsField3Lbl = "";
            AddNewAccount.gsknDisabledContexualBtn = "ICSknBtnE2E9F0t42424234px";
            AddNewAccount.textBox3Visibility = true;
            AddNewAccount.resultScreenSubHeader = "{i.i18n.unifiedBeneficiary.swiftSearchResultsSubHeader}";
            AddNewAccount.rcsCTAButton2 = {
                "id": "requiredCodeBtn",
                "text": "{i.kony.mb.common.continue}",
                "actionType": "primary"
            };
            AddNewAccount.vfsField3Value = {
                "inputPoolKey": "bic",
                "value": "{$.inputPool.bic}",
                "fieldType": "Label",
                "optional": false,
                "readOnly": {
                    "AddPayeeFlow": false,
                    "SavePayeeFlow": true
                }
            };
            AddNewAccount.textBox4Visibility = true;
            AddNewAccount.resultItemLabel1 = "{i.kony.i18n.verifyDetails.bicSwift}";
            AddNewAccount.vfsField4Lbl = "";
            AddNewAccount.rcsOROption = "{i.kony.mb.Forgot.Or}";
            AddNewAccount.textBox5Visibility = true;
            AddNewAccount.resultItemLabel2 = "{$.SLArray.bic}";
            AddNewAccount.vfsField4Value = {
                "inputPoolKey": "clearingCode1",
                "value": "{$.inputPool.clearingCode1}",
                "fieldType": "Label",
                "optional": true,
                "readOnly": {
                    "AddPayeeFlow": false,
                    "SavePayeeFlow": true
                }
            };
            AddNewAccount.textBox6Visibility = true;
            AddNewAccount.resultItemLabel3 = "{$.SLArray.bankName}+,+{$.SLArray.country}+,+{$.SLArray.city}";
            AddNewAccount.vfsField5Lbl = "";
            AddNewAccount.sbssSelectedTickImg = "selectedtick.png";
            AddNewAccount.vfsField5Value = {
                "inputPoolKey": "clearingCode2",
                "value": "{$.inputPool.clearingCode2}",
                "fieldType": "Label",
                "optional": true,
                "readOnly": {
                    "AddPayeeFlow": false,
                    "SavePayeeFlow": true
                }
            };
            AddNewAccount.gsknTextBoxNormal = "ICSknTbxSSPR42424215px";
            AddNewAccount.sbssCTA2 = {
                "id": "useSwift",
                "text": "{i.i18n.unifiedBeneficiary.useSwift}",
                "actionType": "primary"
            };
            AddNewAccount.vfsField6Lbl = "";
            AddNewAccount.sbssCTA3 = {
                "id": "swiftSearchAgain",
                "text": "{i.i18n.unifiedBeneficiary.searchAgain}",
                "actionType": "secondary"
            };
            AddNewAccount.vfsField6Value = {
                "inputPoolKey": "bankName",
                "value": "{$.inputPool.bankName}",
                "fieldType": "Label",
                "optional": false,
                "readOnly": {
                    "AddPayeeFlow": true,
                    "SavePayeeFlow": true
                }
            };
            AddNewAccount.gsknTextBoxFocus = "ICSknTxb003E75Rds3PXFnt424242";
            AddNewAccount.vfsField7Lbl = "{i.i18n.verifyDetails.accountNicknameOptional}";
            AddNewAccount.gsknTextBoxError = "ICSknTxtF54B5EBorder";
            AddNewAccount.sbssCriteria = "{   \"bankName\":\"{$.inputPool.bankName}\",   \"branch\":\"{$.inputPool.branch}\",   \"city\":\"{$.inputPool.city}\",   \"country\":\"{$.inputPool.country}\" }";
            AddNewAccount.vfsField7Value = {
                "inputPoolKey": "payeeNickname",
                "value": "{$.inputPool.payeeNickname}",
                "fieldType": "Label",
                "optional": true,
                "readOnly": {
                    "AddPayeeFlow": false,
                    "SavePayeeFlow": false
                }
            };
            AddNewAccount.sbssResponseObj = "swiftCodes";
            AddNewAccount.vfsField8Lbl = "{i.i18n.verifyDetails.phoneNumberOptional}";
            AddNewAccount.gsknErrorTextMessage = "ICSknLblEE000534px";
            AddNewAccount.vfsField8Value = {
                "inputPoolKey": "phoneNumber",
                "value": "{$.inputPool.formattedPhoneNumber}",
                "fieldType": "Label",
                "optional": true,
                "readOnly": {
                    "AddPayeeFlow": false,
                    "SavePayeeFlow": true
                }
            };
            AddNewAccount.vfsField9Lbl = "{i.i18n.verifyDetails.emailAddressOptional}";
            AddNewAccount.vfsField9Value = {
                "inputPoolKey": "emailAddress",
                "value": "{$.inputPool.emailAddress}",
                "fieldType": "Label",
                "optional": true,
                "readOnly": {
                    "AddPayeeFlow": false,
                    "SavePayeeFlow": true
                }
            };
            AddNewAccount.vfsField10Lbl = "{i.i18n.verifyDetails.linkedWith}:";
            AddNewAccount.vfsField10Value = {
                "inputPoolKey": "linkedWith",
                "value": "{$.inputPool.linkedWith}",
                "fieldType": "Label",
                "optional": true,
                "readOnly": {
                    "AddPayeeFlow": false,
                    "SavePayeeFlow": true
                }
            };
            AddNewAccount.vfsField11Lbl = "";
            AddNewAccount.gsknInputFieldLabel = "ICSknLbl72727234px";
            AddNewAccount.vfsField11Value = {};
            AddNewAccount.vfsField12Lbl = "";
            AddNewAccount.vfsField12Value = {};
            AddNewAccount.vfsField13Lbl = "";
            AddNewAccount.gsknContentFlex = "f9f9";
            AddNewAccount.gsknSecondaryContexualBtn = "ICSknBtn003E75Bffffff34px";
            AddNewAccount.vfsField13Value = {};
            AddNewAccount.vfsField14Lbl = "";
            AddNewAccount.vfsField14Value = {};
            AddNewAccount.vfsField15Lbl = "";
            AddNewAccount.vfsField15Value = {};
            AddNewAccount.vfsPayeeAddLbl = {
                "text": "{i.kony.tab.BillPay.PayeeAddress}: ",
                "fieldType": "Label",
                "optional": true,
                "readOnly": {
                    "AddPayeeFlow": false,
                    "SavePayeeFlow": true
                }
            };
            AddNewAccount.vfsField1Address = "{$.inputPool.addressLine1}";
            AddNewAccount.vfsField2Address = "{$.inputPool.addressLine2}";
            AddNewAccount.vfsField3Address = "{$.inputPool.city}";
            AddNewAccount.vfsField4Address = "{$.inputPool.state}";
            AddNewAccount.vfsField5Address = "{$.inputPool.country}";
            AddNewAccount.vfsField6Address = "{$.inputPool.zipCode}";
            AddNewAccount.vfsCTAButton1 = {
                "id": "AddAccount",
                "text": "{i.kony.mb.checkDeposit.addAccount}",
                "actionType": "primary"
            };
            AddNewAccount.vfsCTAButton2 = {};
            flxContents.add(AddNewAccount);
            flxSameBankMain.add(flxContents);
            var flxBlue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70%",
                "id": "flxBlue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "ICSknFlxBg003e7515px",
                "top": "-20%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBlue.setDefaultUnit(kony.flex.DP);
            flxBlue.add();
            this.add(flxSameBankMain, flxBlue);
        };
        return [{
            "addWidgets": addWidgetsfrmSameBankAddAccount,
            "enabledForIdleTimeout": false,
            "id": "frmSameBankAddAccount",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "onDeviceBack": controller.AS_Form_d5302725511b4e569541ebc3061a69e8,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "ICSknTitleBar003e75Bg",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});