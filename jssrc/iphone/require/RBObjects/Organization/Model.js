/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "Organization",
        "objectService": "RBObjects"
    };
    var setterFunctions = {
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Name: function(val, state) {
            context["field"] = "Name";
            context["metadata"] = (objectMetadata ? objectMetadata["Name"] : null);
            state['Name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Description: function(val, state) {
            context["field"] = "Description";
            context["metadata"] = (objectMetadata ? objectMetadata["Description"] : null);
            state['Description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Type_Id: function(val, state) {
            context["field"] = "Type_Id";
            context["metadata"] = (objectMetadata ? objectMetadata["Type_Id"] : null);
            state['Type_Id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Organization_id: function(val, state) {
            context["field"] = "Organization_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Organization_id"] : null);
            state['Organization_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Taxid: function(val, state) {
            context["field"] = "Taxid";
            context["metadata"] = (objectMetadata ? objectMetadata["Taxid"] : null);
            state['Taxid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Membership_id: function(val, state) {
            context["field"] = "Membership_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Membership_id"] : null);
            state['Membership_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Sequence: function(val, state) {
            context["field"] = "Sequence";
            context["metadata"] = (objectMetadata ? objectMetadata["Sequence"] : null);
            state['Sequence'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Value: function(val, state) {
            context["field"] = "Value";
            context["metadata"] = (objectMetadata ? objectMetadata["Value"] : null);
            state['Value'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Extension: function(val, state) {
            context["field"] = "Extension";
            context["metadata"] = (objectMetadata ? objectMetadata["Extension"] : null);
            state['Extension'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        IsPreferredContactMethod: function(val, state) {
            context["field"] = "IsPreferredContactMethod";
            context["metadata"] = (objectMetadata ? objectMetadata["IsPreferredContactMethod"] : null);
            state['IsPreferredContactMethod'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PreferredContactTime: function(val, state) {
            context["field"] = "PreferredContactTime";
            context["metadata"] = (objectMetadata ? objectMetadata["PreferredContactTime"] : null);
            state['PreferredContactTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        createdby: function(val, state) {
            context["field"] = "createdby";
            context["metadata"] = (objectMetadata ? objectMetadata["createdby"] : null);
            state['createdby'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        modifiedby: function(val, state) {
            context["field"] = "modifiedby";
            context["metadata"] = (objectMetadata ? objectMetadata["modifiedby"] : null);
            state['modifiedby'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        createdts: function(val, state) {
            context["field"] = "createdts";
            context["metadata"] = (objectMetadata ? objectMetadata["createdts"] : null);
            state['createdts'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lastmodifiedts: function(val, state) {
            context["field"] = "lastmodifiedts";
            context["metadata"] = (objectMetadata ? objectMetadata["lastmodifiedts"] : null);
            state['lastmodifiedts'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        synctimestamp: function(val, state) {
            context["field"] = "synctimestamp";
            context["metadata"] = (objectMetadata ? objectMetadata["synctimestamp"] : null);
            state['synctimestamp'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        softdeleteflag: function(val, state) {
            context["field"] = "softdeleteflag";
            context["metadata"] = (objectMetadata ? objectMetadata["softdeleteflag"] : null);
            state['softdeleteflag'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DurationOfStay: function(val, state) {
            context["field"] = "DurationOfStay";
            context["metadata"] = (objectMetadata ? objectMetadata["DurationOfStay"] : null);
            state['DurationOfStay'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        IsPrimary: function(val, state) {
            context["field"] = "IsPrimary";
            context["metadata"] = (objectMetadata ? objectMetadata["IsPrimary"] : null);
            state['IsPrimary'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        contactnumber: function(val, state) {
            context["field"] = "contactnumber";
            context["metadata"] = (objectMetadata ? objectMetadata["contactnumber"] : null);
            state['contactnumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        emailid: function(val, state) {
            context["field"] = "emailid";
            context["metadata"] = (objectMetadata ? objectMetadata["emailid"] : null);
            state['emailid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        addressLine1: function(val, state) {
            context["field"] = "addressLine1";
            context["metadata"] = (objectMetadata ? objectMetadata["addressLine1"] : null);
            state['addressLine1'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        addressLine2: function(val, state) {
            context["field"] = "addressLine2";
            context["metadata"] = (objectMetadata ? objectMetadata["addressLine2"] : null);
            state['addressLine2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        zipCode: function(val, state) {
            context["field"] = "zipCode";
            context["metadata"] = (objectMetadata ? objectMetadata["zipCode"] : null);
            state['zipCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cityName: function(val, state) {
            context["field"] = "cityName";
            context["metadata"] = (objectMetadata ? objectMetadata["cityName"] : null);
            state['cityName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        country: function(val, state) {
            context["field"] = "country";
            context["metadata"] = (objectMetadata ? objectMetadata["country"] : null);
            state['country'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        state: function(val, state) {
            context["field"] = "state";
            context["metadata"] = (objectMetadata ? objectMetadata["state"] : null);
            state['state'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Email: function(val, state) {
            context["field"] = "Email";
            context["metadata"] = (objectMetadata ? objectMetadata["Email"] : null);
            state['Email'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Tin: function(val, state) {
            context["field"] = "Tin";
            context["metadata"] = (objectMetadata ? objectMetadata["Tin"] : null);
            state['Tin'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        searchType: function(val, state) {
            context["field"] = "searchType";
            context["metadata"] = (objectMetadata ? objectMetadata["searchType"] : null);
            state['searchType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errorCode: function(val, state) {
            context["field"] = "errorCode";
            context["metadata"] = (objectMetadata ? objectMetadata["errorCode"] : null);
            state['errorCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errorMessage: function(val, state) {
            context["field"] = "errorMessage";
            context["metadata"] = (objectMetadata ? objectMetadata["errorMessage"] : null);
            state['errorMessage'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        success: function(val, state) {
            context["field"] = "success";
            context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
            state['success'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Phone: function(val, state) {
            context["field"] = "Phone";
            context["metadata"] = (objectMetadata ? objectMetadata["Phone"] : null);
            state['Phone'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        searchString: function(val, state) {
            context["field"] = "searchString";
            context["metadata"] = (objectMetadata ? objectMetadata["searchString"] : null);
            state['searchString'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        order: function(val, state) {
            context["field"] = "order";
            context["metadata"] = (objectMetadata ? objectMetadata["order"] : null);
            state['order'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        sortBy: function(val, state) {
            context["field"] = "sortBy";
            context["metadata"] = (objectMetadata ? objectMetadata["sortBy"] : null);
            state['sortBy'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        offset: function(val, state) {
            context["field"] = "offset";
            context["metadata"] = (objectMetadata ? objectMetadata["offset"] : null);
            state['offset'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        limit: function(val, state) {
            context["field"] = "limit";
            context["metadata"] = (objectMetadata ? objectMetadata["limit"] : null);
            state['limit'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Type: function(val, state) {
            context["field"] = "Type";
            context["metadata"] = (objectMetadata ? objectMetadata["Type"] : null);
            state['Type'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Communication: function(val, state) {
            context["field"] = "Communication";
            context["metadata"] = (objectMetadata ? objectMetadata["Communication"] : null);
            state['Communication'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Address: function(val, state) {
            context["field"] = "Address";
            context["metadata"] = (objectMetadata ? objectMetadata["Address"] : null);
            state['Address'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Owner: function(val, state) {
            context["field"] = "Owner";
            context["metadata"] = (objectMetadata ? objectMetadata["Owner"] : null);
            state['Owner'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Membership: function(val, state) {
            context["field"] = "Membership";
            context["metadata"] = (objectMetadata ? objectMetadata["Membership"] : null);
            state['Membership'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AccountsList: function(val, state) {
            context["field"] = "AccountsList";
            context["metadata"] = (objectMetadata ? objectMetadata["AccountsList"] : null);
            state['AccountsList'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        EAgreementRequired: function(val, state) {
            context["field"] = "EAgreementRequired";
            context["metadata"] = (objectMetadata ? objectMetadata["EAgreementRequired"] : null);
            state['EAgreementRequired'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        LastName: function(val, state) {
            context["field"] = "LastName";
            context["metadata"] = (objectMetadata ? objectMetadata["LastName"] : null);
            state['LastName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MiddleName: function(val, state) {
            context["field"] = "MiddleName";
            context["metadata"] = (objectMetadata ? objectMetadata["MiddleName"] : null);
            state['MiddleName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        FirstName: function(val, state) {
            context["field"] = "FirstName";
            context["metadata"] = (objectMetadata ? objectMetadata["FirstName"] : null);
            state['FirstName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        status: function(val, state) {
            context["field"] = "status";
            context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
            state['status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Lastlogintime: function(val, state) {
            context["field"] = "Lastlogintime";
            context["metadata"] = (objectMetadata ? objectMetadata["Lastlogintime"] : null);
            state['Lastlogintime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        role_id: function(val, state) {
            context["field"] = "role_id";
            context["metadata"] = (objectMetadata ? objectMetadata["role_id"] : null);
            state['role_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DOB: function(val, state) {
            context["field"] = "DOB";
            context["metadata"] = (objectMetadata ? objectMetadata["DOB"] : null);
            state['DOB'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Ssn: function(val, state) {
            context["field"] = "Ssn";
            context["metadata"] = (objectMetadata ? objectMetadata["Ssn"] : null);
            state['Ssn'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TypeName: function(val, state) {
            context["field"] = "TypeName";
            context["metadata"] = (objectMetadata ? objectMetadata["TypeName"] : null);
            state['TypeName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DrivingLicenseNumber: function(val, state) {
            context["field"] = "DrivingLicenseNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["DrivingLicenseNumber"] : null);
            state['DrivingLicenseNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DateOfBirth: function(val, state) {
            context["field"] = "DateOfBirth";
            context["metadata"] = (objectMetadata ? objectMetadata["DateOfBirth"] : null);
            state['DateOfBirth'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isExists: function(val, state) {
            context["field"] = "isExists";
            context["metadata"] = (objectMetadata ? objectMetadata["isExists"] : null);
            state['isExists'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Account_id: function(val, state) {
            context["field"] = "Account_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Account_id"] : null);
            state['Account_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountID: function(val, state) {
            context["field"] = "accountID";
            context["metadata"] = (objectMetadata ? objectMetadata["accountID"] : null);
            state['accountID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        addressId: function(val, state) {
            context["field"] = "addressId";
            context["metadata"] = (objectMetadata ? objectMetadata["addressId"] : null);
            state['addressId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        RiskStatus: function(val, state) {
            context["field"] = "RiskStatus";
            context["metadata"] = (objectMetadata ? objectMetadata["RiskStatus"] : null);
            state['RiskStatus'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isEagreementSigned: function(val, state) {
            context["field"] = "isEagreementSigned";
            context["metadata"] = (objectMetadata ? objectMetadata["isEagreementSigned"] : null);
            state['isEagreementSigned'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        groupId: function(val, state) {
            context["field"] = "groupId";
            context["metadata"] = (objectMetadata ? objectMetadata["groupId"] : null);
            state['groupId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        organizationId: function(val, state) {
            context["field"] = "organizationId";
            context["metadata"] = (objectMetadata ? objectMetadata["organizationId"] : null);
            state['organizationId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        actionId: function(val, state) {
            context["field"] = "actionId";
            context["metadata"] = (objectMetadata ? objectMetadata["actionId"] : null);
            state['actionId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AuthorizedSignatory: function(val, state) {
            context["field"] = "AuthorizedSignatory";
            context["metadata"] = (objectMetadata ? objectMetadata["AuthorizedSignatory"] : null);
            state['AuthorizedSignatory'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        features: function(val, state) {
            context["field"] = "features";
            context["metadata"] = (objectMetadata ? objectMetadata["features"] : null);
            state['features'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        serviceKey: function(val, state) {
            context["field"] = "serviceKey";
            context["metadata"] = (objectMetadata ? objectMetadata["serviceKey"] : null);
            state['serviceKey'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AuthorizedSignatoryGroupId: function(val, state) {
            context["field"] = "AuthorizedSignatoryGroupId";
            context["metadata"] = (objectMetadata ? objectMetadata["AuthorizedSignatoryGroupId"] : null);
            state['AuthorizedSignatoryGroupId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        statusId: function(val, state) {
            context["field"] = "statusId";
            context["metadata"] = (objectMetadata ? objectMetadata["statusId"] : null);
            state['statusId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function Organization(defaultValues) {
        var privateState = {};
        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ? (defaultValues["id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) : null) : null;
        context["field"] = "Name";
        context["metadata"] = (objectMetadata ? objectMetadata["Name"] : null);
        privateState.Name = defaultValues ? (defaultValues["Name"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Name"], context) : null) : null;
        context["field"] = "Description";
        context["metadata"] = (objectMetadata ? objectMetadata["Description"] : null);
        privateState.Description = defaultValues ? (defaultValues["Description"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Description"], context) : null) : null;
        context["field"] = "Type_Id";
        context["metadata"] = (objectMetadata ? objectMetadata["Type_Id"] : null);
        privateState.Type_Id = defaultValues ? (defaultValues["Type_Id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Type_Id"], context) : null) : null;
        context["field"] = "Organization_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Organization_id"] : null);
        privateState.Organization_id = defaultValues ? (defaultValues["Organization_id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Organization_id"], context) : null) : null;
        context["field"] = "Taxid";
        context["metadata"] = (objectMetadata ? objectMetadata["Taxid"] : null);
        privateState.Taxid = defaultValues ? (defaultValues["Taxid"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Taxid"], context) : null) : null;
        context["field"] = "Membership_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Membership_id"] : null);
        privateState.Membership_id = defaultValues ? (defaultValues["Membership_id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Membership_id"], context) : null) : null;
        context["field"] = "Sequence";
        context["metadata"] = (objectMetadata ? objectMetadata["Sequence"] : null);
        privateState.Sequence = defaultValues ? (defaultValues["Sequence"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Sequence"], context) : null) : null;
        context["field"] = "Value";
        context["metadata"] = (objectMetadata ? objectMetadata["Value"] : null);
        privateState.Value = defaultValues ? (defaultValues["Value"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Value"], context) : null) : null;
        context["field"] = "Extension";
        context["metadata"] = (objectMetadata ? objectMetadata["Extension"] : null);
        privateState.Extension = defaultValues ? (defaultValues["Extension"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Extension"], context) : null) : null;
        context["field"] = "IsPreferredContactMethod";
        context["metadata"] = (objectMetadata ? objectMetadata["IsPreferredContactMethod"] : null);
        privateState.IsPreferredContactMethod = defaultValues ? (defaultValues["IsPreferredContactMethod"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IsPreferredContactMethod"], context) : null) : null;
        context["field"] = "PreferredContactTime";
        context["metadata"] = (objectMetadata ? objectMetadata["PreferredContactTime"] : null);
        privateState.PreferredContactTime = defaultValues ? (defaultValues["PreferredContactTime"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PreferredContactTime"], context) : null) : null;
        context["field"] = "createdby";
        context["metadata"] = (objectMetadata ? objectMetadata["createdby"] : null);
        privateState.createdby = defaultValues ? (defaultValues["createdby"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["createdby"], context) : null) : null;
        context["field"] = "modifiedby";
        context["metadata"] = (objectMetadata ? objectMetadata["modifiedby"] : null);
        privateState.modifiedby = defaultValues ? (defaultValues["modifiedby"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["modifiedby"], context) : null) : null;
        context["field"] = "createdts";
        context["metadata"] = (objectMetadata ? objectMetadata["createdts"] : null);
        privateState.createdts = defaultValues ? (defaultValues["createdts"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["createdts"], context) : null) : null;
        context["field"] = "lastmodifiedts";
        context["metadata"] = (objectMetadata ? objectMetadata["lastmodifiedts"] : null);
        privateState.lastmodifiedts = defaultValues ? (defaultValues["lastmodifiedts"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lastmodifiedts"], context) : null) : null;
        context["field"] = "synctimestamp";
        context["metadata"] = (objectMetadata ? objectMetadata["synctimestamp"] : null);
        privateState.synctimestamp = defaultValues ? (defaultValues["synctimestamp"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["synctimestamp"], context) : null) : null;
        context["field"] = "softdeleteflag";
        context["metadata"] = (objectMetadata ? objectMetadata["softdeleteflag"] : null);
        privateState.softdeleteflag = defaultValues ? (defaultValues["softdeleteflag"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["softdeleteflag"], context) : null) : null;
        context["field"] = "DurationOfStay";
        context["metadata"] = (objectMetadata ? objectMetadata["DurationOfStay"] : null);
        privateState.DurationOfStay = defaultValues ? (defaultValues["DurationOfStay"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DurationOfStay"], context) : null) : null;
        context["field"] = "IsPrimary";
        context["metadata"] = (objectMetadata ? objectMetadata["IsPrimary"] : null);
        privateState.IsPrimary = defaultValues ? (defaultValues["IsPrimary"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IsPrimary"], context) : null) : null;
        context["field"] = "contactnumber";
        context["metadata"] = (objectMetadata ? objectMetadata["contactnumber"] : null);
        privateState.contactnumber = defaultValues ? (defaultValues["contactnumber"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["contactnumber"], context) : null) : null;
        context["field"] = "emailid";
        context["metadata"] = (objectMetadata ? objectMetadata["emailid"] : null);
        privateState.emailid = defaultValues ? (defaultValues["emailid"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["emailid"], context) : null) : null;
        context["field"] = "addressLine1";
        context["metadata"] = (objectMetadata ? objectMetadata["addressLine1"] : null);
        privateState.addressLine1 = defaultValues ? (defaultValues["addressLine1"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["addressLine1"], context) : null) : null;
        context["field"] = "addressLine2";
        context["metadata"] = (objectMetadata ? objectMetadata["addressLine2"] : null);
        privateState.addressLine2 = defaultValues ? (defaultValues["addressLine2"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["addressLine2"], context) : null) : null;
        context["field"] = "zipCode";
        context["metadata"] = (objectMetadata ? objectMetadata["zipCode"] : null);
        privateState.zipCode = defaultValues ? (defaultValues["zipCode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["zipCode"], context) : null) : null;
        context["field"] = "cityName";
        context["metadata"] = (objectMetadata ? objectMetadata["cityName"] : null);
        privateState.cityName = defaultValues ? (defaultValues["cityName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cityName"], context) : null) : null;
        context["field"] = "country";
        context["metadata"] = (objectMetadata ? objectMetadata["country"] : null);
        privateState.country = defaultValues ? (defaultValues["country"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["country"], context) : null) : null;
        context["field"] = "state";
        context["metadata"] = (objectMetadata ? objectMetadata["state"] : null);
        privateState.state = defaultValues ? (defaultValues["state"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["state"], context) : null) : null;
        context["field"] = "Email";
        context["metadata"] = (objectMetadata ? objectMetadata["Email"] : null);
        privateState.Email = defaultValues ? (defaultValues["Email"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Email"], context) : null) : null;
        context["field"] = "Tin";
        context["metadata"] = (objectMetadata ? objectMetadata["Tin"] : null);
        privateState.Tin = defaultValues ? (defaultValues["Tin"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Tin"], context) : null) : null;
        context["field"] = "searchType";
        context["metadata"] = (objectMetadata ? objectMetadata["searchType"] : null);
        privateState.searchType = defaultValues ? (defaultValues["searchType"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["searchType"], context) : null) : null;
        context["field"] = "errorCode";
        context["metadata"] = (objectMetadata ? objectMetadata["errorCode"] : null);
        privateState.errorCode = defaultValues ? (defaultValues["errorCode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errorCode"], context) : null) : null;
        context["field"] = "errorMessage";
        context["metadata"] = (objectMetadata ? objectMetadata["errorMessage"] : null);
        privateState.errorMessage = defaultValues ? (defaultValues["errorMessage"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errorMessage"], context) : null) : null;
        context["field"] = "success";
        context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
        privateState.success = defaultValues ? (defaultValues["success"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["success"], context) : null) : null;
        context["field"] = "Phone";
        context["metadata"] = (objectMetadata ? objectMetadata["Phone"] : null);
        privateState.Phone = defaultValues ? (defaultValues["Phone"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Phone"], context) : null) : null;
        context["field"] = "searchString";
        context["metadata"] = (objectMetadata ? objectMetadata["searchString"] : null);
        privateState.searchString = defaultValues ? (defaultValues["searchString"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["searchString"], context) : null) : null;
        context["field"] = "order";
        context["metadata"] = (objectMetadata ? objectMetadata["order"] : null);
        privateState.order = defaultValues ? (defaultValues["order"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["order"], context) : null) : null;
        context["field"] = "sortBy";
        context["metadata"] = (objectMetadata ? objectMetadata["sortBy"] : null);
        privateState.sortBy = defaultValues ? (defaultValues["sortBy"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sortBy"], context) : null) : null;
        context["field"] = "offset";
        context["metadata"] = (objectMetadata ? objectMetadata["offset"] : null);
        privateState.offset = defaultValues ? (defaultValues["offset"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["offset"], context) : null) : null;
        context["field"] = "limit";
        context["metadata"] = (objectMetadata ? objectMetadata["limit"] : null);
        privateState.limit = defaultValues ? (defaultValues["limit"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["limit"], context) : null) : null;
        context["field"] = "Type";
        context["metadata"] = (objectMetadata ? objectMetadata["Type"] : null);
        privateState.Type = defaultValues ? (defaultValues["Type"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Type"], context) : null) : null;
        context["field"] = "Communication";
        context["metadata"] = (objectMetadata ? objectMetadata["Communication"] : null);
        privateState.Communication = defaultValues ? (defaultValues["Communication"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Communication"], context) : null) : null;
        context["field"] = "Address";
        context["metadata"] = (objectMetadata ? objectMetadata["Address"] : null);
        privateState.Address = defaultValues ? (defaultValues["Address"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Address"], context) : null) : null;
        context["field"] = "Owner";
        context["metadata"] = (objectMetadata ? objectMetadata["Owner"] : null);
        privateState.Owner = defaultValues ? (defaultValues["Owner"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Owner"], context) : null) : null;
        context["field"] = "Membership";
        context["metadata"] = (objectMetadata ? objectMetadata["Membership"] : null);
        privateState.Membership = defaultValues ? (defaultValues["Membership"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Membership"], context) : null) : null;
        context["field"] = "AccountsList";
        context["metadata"] = (objectMetadata ? objectMetadata["AccountsList"] : null);
        privateState.AccountsList = defaultValues ? (defaultValues["AccountsList"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AccountsList"], context) : null) : null;
        context["field"] = "EAgreementRequired";
        context["metadata"] = (objectMetadata ? objectMetadata["EAgreementRequired"] : null);
        privateState.EAgreementRequired = defaultValues ? (defaultValues["EAgreementRequired"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["EAgreementRequired"], context) : null) : null;
        context["field"] = "LastName";
        context["metadata"] = (objectMetadata ? objectMetadata["LastName"] : null);
        privateState.LastName = defaultValues ? (defaultValues["LastName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["LastName"], context) : null) : null;
        context["field"] = "MiddleName";
        context["metadata"] = (objectMetadata ? objectMetadata["MiddleName"] : null);
        privateState.MiddleName = defaultValues ? (defaultValues["MiddleName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MiddleName"], context) : null) : null;
        context["field"] = "FirstName";
        context["metadata"] = (objectMetadata ? objectMetadata["FirstName"] : null);
        privateState.FirstName = defaultValues ? (defaultValues["FirstName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["FirstName"], context) : null) : null;
        context["field"] = "status";
        context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
        privateState.status = defaultValues ? (defaultValues["status"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["status"], context) : null) : null;
        context["field"] = "Lastlogintime";
        context["metadata"] = (objectMetadata ? objectMetadata["Lastlogintime"] : null);
        privateState.Lastlogintime = defaultValues ? (defaultValues["Lastlogintime"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Lastlogintime"], context) : null) : null;
        context["field"] = "role_id";
        context["metadata"] = (objectMetadata ? objectMetadata["role_id"] : null);
        privateState.role_id = defaultValues ? (defaultValues["role_id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["role_id"], context) : null) : null;
        context["field"] = "DOB";
        context["metadata"] = (objectMetadata ? objectMetadata["DOB"] : null);
        privateState.DOB = defaultValues ? (defaultValues["DOB"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DOB"], context) : null) : null;
        context["field"] = "Ssn";
        context["metadata"] = (objectMetadata ? objectMetadata["Ssn"] : null);
        privateState.Ssn = defaultValues ? (defaultValues["Ssn"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Ssn"], context) : null) : null;
        context["field"] = "TypeName";
        context["metadata"] = (objectMetadata ? objectMetadata["TypeName"] : null);
        privateState.TypeName = defaultValues ? (defaultValues["TypeName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TypeName"], context) : null) : null;
        context["field"] = "DrivingLicenseNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["DrivingLicenseNumber"] : null);
        privateState.DrivingLicenseNumber = defaultValues ? (defaultValues["DrivingLicenseNumber"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DrivingLicenseNumber"], context) : null) : null;
        context["field"] = "DateOfBirth";
        context["metadata"] = (objectMetadata ? objectMetadata["DateOfBirth"] : null);
        privateState.DateOfBirth = defaultValues ? (defaultValues["DateOfBirth"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DateOfBirth"], context) : null) : null;
        context["field"] = "isExists";
        context["metadata"] = (objectMetadata ? objectMetadata["isExists"] : null);
        privateState.isExists = defaultValues ? (defaultValues["isExists"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isExists"], context) : null) : null;
        context["field"] = "Account_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Account_id"] : null);
        privateState.Account_id = defaultValues ? (defaultValues["Account_id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Account_id"], context) : null) : null;
        context["field"] = "accountID";
        context["metadata"] = (objectMetadata ? objectMetadata["accountID"] : null);
        privateState.accountID = defaultValues ? (defaultValues["accountID"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountID"], context) : null) : null;
        context["field"] = "addressId";
        context["metadata"] = (objectMetadata ? objectMetadata["addressId"] : null);
        privateState.addressId = defaultValues ? (defaultValues["addressId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["addressId"], context) : null) : null;
        context["field"] = "RiskStatus";
        context["metadata"] = (objectMetadata ? objectMetadata["RiskStatus"] : null);
        privateState.RiskStatus = defaultValues ? (defaultValues["RiskStatus"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["RiskStatus"], context) : null) : null;
        context["field"] = "isEagreementSigned";
        context["metadata"] = (objectMetadata ? objectMetadata["isEagreementSigned"] : null);
        privateState.isEagreementSigned = defaultValues ? (defaultValues["isEagreementSigned"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isEagreementSigned"], context) : null) : null;
        context["field"] = "groupId";
        context["metadata"] = (objectMetadata ? objectMetadata["groupId"] : null);
        privateState.groupId = defaultValues ? (defaultValues["groupId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["groupId"], context) : null) : null;
        context["field"] = "organizationId";
        context["metadata"] = (objectMetadata ? objectMetadata["organizationId"] : null);
        privateState.organizationId = defaultValues ? (defaultValues["organizationId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["organizationId"], context) : null) : null;
        context["field"] = "actionId";
        context["metadata"] = (objectMetadata ? objectMetadata["actionId"] : null);
        privateState.actionId = defaultValues ? (defaultValues["actionId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["actionId"], context) : null) : null;
        context["field"] = "AuthorizedSignatory";
        context["metadata"] = (objectMetadata ? objectMetadata["AuthorizedSignatory"] : null);
        privateState.AuthorizedSignatory = defaultValues ? (defaultValues["AuthorizedSignatory"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AuthorizedSignatory"], context) : null) : null;
        context["field"] = "features";
        context["metadata"] = (objectMetadata ? objectMetadata["features"] : null);
        privateState.features = defaultValues ? (defaultValues["features"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["features"], context) : null) : null;
        context["field"] = "serviceKey";
        context["metadata"] = (objectMetadata ? objectMetadata["serviceKey"] : null);
        privateState.serviceKey = defaultValues ? (defaultValues["serviceKey"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["serviceKey"], context) : null) : null;
        context["field"] = "AuthorizedSignatoryGroupId";
        context["metadata"] = (objectMetadata ? objectMetadata["AuthorizedSignatoryGroupId"] : null);
        privateState.AuthorizedSignatoryGroupId = defaultValues ? (defaultValues["AuthorizedSignatoryGroupId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AuthorizedSignatoryGroupId"], context) : null) : null;
        context["field"] = "statusId";
        context["metadata"] = (objectMetadata ? objectMetadata["statusId"] : null);
        privateState.statusId = defaultValues ? (defaultValues["statusId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["statusId"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "id": {
                get: function() {
                    context["field"] = "id";
                    context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.id, context);
                },
                set: function(val) {
                    setterFunctions['id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Name": {
                get: function() {
                    context["field"] = "Name";
                    context["metadata"] = (objectMetadata ? objectMetadata["Name"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Name, context);
                },
                set: function(val) {
                    setterFunctions['Name'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Description": {
                get: function() {
                    context["field"] = "Description";
                    context["metadata"] = (objectMetadata ? objectMetadata["Description"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Description, context);
                },
                set: function(val) {
                    setterFunctions['Description'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Type_Id": {
                get: function() {
                    context["field"] = "Type_Id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Type_Id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Type_Id, context);
                },
                set: function(val) {
                    setterFunctions['Type_Id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Organization_id": {
                get: function() {
                    context["field"] = "Organization_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Organization_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Organization_id, context);
                },
                set: function(val) {
                    setterFunctions['Organization_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Taxid": {
                get: function() {
                    context["field"] = "Taxid";
                    context["metadata"] = (objectMetadata ? objectMetadata["Taxid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Taxid, context);
                },
                set: function(val) {
                    setterFunctions['Taxid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Membership_id": {
                get: function() {
                    context["field"] = "Membership_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Membership_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Membership_id, context);
                },
                set: function(val) {
                    setterFunctions['Membership_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Sequence": {
                get: function() {
                    context["field"] = "Sequence";
                    context["metadata"] = (objectMetadata ? objectMetadata["Sequence"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Sequence, context);
                },
                set: function(val) {
                    setterFunctions['Sequence'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Value": {
                get: function() {
                    context["field"] = "Value";
                    context["metadata"] = (objectMetadata ? objectMetadata["Value"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Value, context);
                },
                set: function(val) {
                    setterFunctions['Value'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Extension": {
                get: function() {
                    context["field"] = "Extension";
                    context["metadata"] = (objectMetadata ? objectMetadata["Extension"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Extension, context);
                },
                set: function(val) {
                    setterFunctions['Extension'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "IsPreferredContactMethod": {
                get: function() {
                    context["field"] = "IsPreferredContactMethod";
                    context["metadata"] = (objectMetadata ? objectMetadata["IsPreferredContactMethod"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IsPreferredContactMethod, context);
                },
                set: function(val) {
                    setterFunctions['IsPreferredContactMethod'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PreferredContactTime": {
                get: function() {
                    context["field"] = "PreferredContactTime";
                    context["metadata"] = (objectMetadata ? objectMetadata["PreferredContactTime"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PreferredContactTime, context);
                },
                set: function(val) {
                    setterFunctions['PreferredContactTime'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "createdby": {
                get: function() {
                    context["field"] = "createdby";
                    context["metadata"] = (objectMetadata ? objectMetadata["createdby"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.createdby, context);
                },
                set: function(val) {
                    setterFunctions['createdby'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "modifiedby": {
                get: function() {
                    context["field"] = "modifiedby";
                    context["metadata"] = (objectMetadata ? objectMetadata["modifiedby"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.modifiedby, context);
                },
                set: function(val) {
                    setterFunctions['modifiedby'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "createdts": {
                get: function() {
                    context["field"] = "createdts";
                    context["metadata"] = (objectMetadata ? objectMetadata["createdts"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.createdts, context);
                },
                set: function(val) {
                    setterFunctions['createdts'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "lastmodifiedts": {
                get: function() {
                    context["field"] = "lastmodifiedts";
                    context["metadata"] = (objectMetadata ? objectMetadata["lastmodifiedts"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lastmodifiedts, context);
                },
                set: function(val) {
                    setterFunctions['lastmodifiedts'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "synctimestamp": {
                get: function() {
                    context["field"] = "synctimestamp";
                    context["metadata"] = (objectMetadata ? objectMetadata["synctimestamp"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.synctimestamp, context);
                },
                set: function(val) {
                    setterFunctions['synctimestamp'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "softdeleteflag": {
                get: function() {
                    context["field"] = "softdeleteflag";
                    context["metadata"] = (objectMetadata ? objectMetadata["softdeleteflag"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.softdeleteflag, context);
                },
                set: function(val) {
                    setterFunctions['softdeleteflag'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "DurationOfStay": {
                get: function() {
                    context["field"] = "DurationOfStay";
                    context["metadata"] = (objectMetadata ? objectMetadata["DurationOfStay"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DurationOfStay, context);
                },
                set: function(val) {
                    setterFunctions['DurationOfStay'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "IsPrimary": {
                get: function() {
                    context["field"] = "IsPrimary";
                    context["metadata"] = (objectMetadata ? objectMetadata["IsPrimary"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IsPrimary, context);
                },
                set: function(val) {
                    setterFunctions['IsPrimary'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "contactnumber": {
                get: function() {
                    context["field"] = "contactnumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["contactnumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.contactnumber, context);
                },
                set: function(val) {
                    setterFunctions['contactnumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "emailid": {
                get: function() {
                    context["field"] = "emailid";
                    context["metadata"] = (objectMetadata ? objectMetadata["emailid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.emailid, context);
                },
                set: function(val) {
                    setterFunctions['emailid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "addressLine1": {
                get: function() {
                    context["field"] = "addressLine1";
                    context["metadata"] = (objectMetadata ? objectMetadata["addressLine1"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.addressLine1, context);
                },
                set: function(val) {
                    setterFunctions['addressLine1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "addressLine2": {
                get: function() {
                    context["field"] = "addressLine2";
                    context["metadata"] = (objectMetadata ? objectMetadata["addressLine2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.addressLine2, context);
                },
                set: function(val) {
                    setterFunctions['addressLine2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "zipCode": {
                get: function() {
                    context["field"] = "zipCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["zipCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.zipCode, context);
                },
                set: function(val) {
                    setterFunctions['zipCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cityName": {
                get: function() {
                    context["field"] = "cityName";
                    context["metadata"] = (objectMetadata ? objectMetadata["cityName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.cityName, context);
                },
                set: function(val) {
                    setterFunctions['cityName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "country": {
                get: function() {
                    context["field"] = "country";
                    context["metadata"] = (objectMetadata ? objectMetadata["country"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.country, context);
                },
                set: function(val) {
                    setterFunctions['country'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "state": {
                get: function() {
                    context["field"] = "state";
                    context["metadata"] = (objectMetadata ? objectMetadata["state"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.state, context);
                },
                set: function(val) {
                    setterFunctions['state'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Email": {
                get: function() {
                    context["field"] = "Email";
                    context["metadata"] = (objectMetadata ? objectMetadata["Email"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Email, context);
                },
                set: function(val) {
                    setterFunctions['Email'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Tin": {
                get: function() {
                    context["field"] = "Tin";
                    context["metadata"] = (objectMetadata ? objectMetadata["Tin"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Tin, context);
                },
                set: function(val) {
                    setterFunctions['Tin'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "searchType": {
                get: function() {
                    context["field"] = "searchType";
                    context["metadata"] = (objectMetadata ? objectMetadata["searchType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.searchType, context);
                },
                set: function(val) {
                    setterFunctions['searchType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "errorCode": {
                get: function() {
                    context["field"] = "errorCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["errorCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errorCode, context);
                },
                set: function(val) {
                    setterFunctions['errorCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "errorMessage": {
                get: function() {
                    context["field"] = "errorMessage";
                    context["metadata"] = (objectMetadata ? objectMetadata["errorMessage"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errorMessage, context);
                },
                set: function(val) {
                    setterFunctions['errorMessage'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "success": {
                get: function() {
                    context["field"] = "success";
                    context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.success, context);
                },
                set: function(val) {
                    setterFunctions['success'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Phone": {
                get: function() {
                    context["field"] = "Phone";
                    context["metadata"] = (objectMetadata ? objectMetadata["Phone"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Phone, context);
                },
                set: function(val) {
                    setterFunctions['Phone'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "searchString": {
                get: function() {
                    context["field"] = "searchString";
                    context["metadata"] = (objectMetadata ? objectMetadata["searchString"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.searchString, context);
                },
                set: function(val) {
                    setterFunctions['searchString'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "order": {
                get: function() {
                    context["field"] = "order";
                    context["metadata"] = (objectMetadata ? objectMetadata["order"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.order, context);
                },
                set: function(val) {
                    setterFunctions['order'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "sortBy": {
                get: function() {
                    context["field"] = "sortBy";
                    context["metadata"] = (objectMetadata ? objectMetadata["sortBy"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.sortBy, context);
                },
                set: function(val) {
                    setterFunctions['sortBy'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "offset": {
                get: function() {
                    context["field"] = "offset";
                    context["metadata"] = (objectMetadata ? objectMetadata["offset"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.offset, context);
                },
                set: function(val) {
                    setterFunctions['offset'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "limit": {
                get: function() {
                    context["field"] = "limit";
                    context["metadata"] = (objectMetadata ? objectMetadata["limit"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.limit, context);
                },
                set: function(val) {
                    setterFunctions['limit'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Type": {
                get: function() {
                    context["field"] = "Type";
                    context["metadata"] = (objectMetadata ? objectMetadata["Type"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Type, context);
                },
                set: function(val) {
                    setterFunctions['Type'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Communication": {
                get: function() {
                    context["field"] = "Communication";
                    context["metadata"] = (objectMetadata ? objectMetadata["Communication"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Communication, context);
                },
                set: function(val) {
                    setterFunctions['Communication'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Address": {
                get: function() {
                    context["field"] = "Address";
                    context["metadata"] = (objectMetadata ? objectMetadata["Address"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Address, context);
                },
                set: function(val) {
                    setterFunctions['Address'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Owner": {
                get: function() {
                    context["field"] = "Owner";
                    context["metadata"] = (objectMetadata ? objectMetadata["Owner"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Owner, context);
                },
                set: function(val) {
                    setterFunctions['Owner'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Membership": {
                get: function() {
                    context["field"] = "Membership";
                    context["metadata"] = (objectMetadata ? objectMetadata["Membership"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Membership, context);
                },
                set: function(val) {
                    setterFunctions['Membership'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "AccountsList": {
                get: function() {
                    context["field"] = "AccountsList";
                    context["metadata"] = (objectMetadata ? objectMetadata["AccountsList"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AccountsList, context);
                },
                set: function(val) {
                    setterFunctions['AccountsList'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "EAgreementRequired": {
                get: function() {
                    context["field"] = "EAgreementRequired";
                    context["metadata"] = (objectMetadata ? objectMetadata["EAgreementRequired"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.EAgreementRequired, context);
                },
                set: function(val) {
                    setterFunctions['EAgreementRequired'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "LastName": {
                get: function() {
                    context["field"] = "LastName";
                    context["metadata"] = (objectMetadata ? objectMetadata["LastName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.LastName, context);
                },
                set: function(val) {
                    setterFunctions['LastName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MiddleName": {
                get: function() {
                    context["field"] = "MiddleName";
                    context["metadata"] = (objectMetadata ? objectMetadata["MiddleName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MiddleName, context);
                },
                set: function(val) {
                    setterFunctions['MiddleName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "FirstName": {
                get: function() {
                    context["field"] = "FirstName";
                    context["metadata"] = (objectMetadata ? objectMetadata["FirstName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.FirstName, context);
                },
                set: function(val) {
                    setterFunctions['FirstName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "status": {
                get: function() {
                    context["field"] = "status";
                    context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.status, context);
                },
                set: function(val) {
                    setterFunctions['status'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Lastlogintime": {
                get: function() {
                    context["field"] = "Lastlogintime";
                    context["metadata"] = (objectMetadata ? objectMetadata["Lastlogintime"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Lastlogintime, context);
                },
                set: function(val) {
                    setterFunctions['Lastlogintime'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "role_id": {
                get: function() {
                    context["field"] = "role_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["role_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.role_id, context);
                },
                set: function(val) {
                    setterFunctions['role_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "DOB": {
                get: function() {
                    context["field"] = "DOB";
                    context["metadata"] = (objectMetadata ? objectMetadata["DOB"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DOB, context);
                },
                set: function(val) {
                    setterFunctions['DOB'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Ssn": {
                get: function() {
                    context["field"] = "Ssn";
                    context["metadata"] = (objectMetadata ? objectMetadata["Ssn"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Ssn, context);
                },
                set: function(val) {
                    setterFunctions['Ssn'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "TypeName": {
                get: function() {
                    context["field"] = "TypeName";
                    context["metadata"] = (objectMetadata ? objectMetadata["TypeName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.TypeName, context);
                },
                set: function(val) {
                    setterFunctions['TypeName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "DrivingLicenseNumber": {
                get: function() {
                    context["field"] = "DrivingLicenseNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["DrivingLicenseNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DrivingLicenseNumber, context);
                },
                set: function(val) {
                    setterFunctions['DrivingLicenseNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "DateOfBirth": {
                get: function() {
                    context["field"] = "DateOfBirth";
                    context["metadata"] = (objectMetadata ? objectMetadata["DateOfBirth"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DateOfBirth, context);
                },
                set: function(val) {
                    setterFunctions['DateOfBirth'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isExists": {
                get: function() {
                    context["field"] = "isExists";
                    context["metadata"] = (objectMetadata ? objectMetadata["isExists"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isExists, context);
                },
                set: function(val) {
                    setterFunctions['isExists'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Account_id": {
                get: function() {
                    context["field"] = "Account_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Account_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Account_id, context);
                },
                set: function(val) {
                    setterFunctions['Account_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "accountID": {
                get: function() {
                    context["field"] = "accountID";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountID"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountID, context);
                },
                set: function(val) {
                    setterFunctions['accountID'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "addressId": {
                get: function() {
                    context["field"] = "addressId";
                    context["metadata"] = (objectMetadata ? objectMetadata["addressId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.addressId, context);
                },
                set: function(val) {
                    setterFunctions['addressId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "RiskStatus": {
                get: function() {
                    context["field"] = "RiskStatus";
                    context["metadata"] = (objectMetadata ? objectMetadata["RiskStatus"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.RiskStatus, context);
                },
                set: function(val) {
                    setterFunctions['RiskStatus'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isEagreementSigned": {
                get: function() {
                    context["field"] = "isEagreementSigned";
                    context["metadata"] = (objectMetadata ? objectMetadata["isEagreementSigned"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isEagreementSigned, context);
                },
                set: function(val) {
                    setterFunctions['isEagreementSigned'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "groupId": {
                get: function() {
                    context["field"] = "groupId";
                    context["metadata"] = (objectMetadata ? objectMetadata["groupId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.groupId, context);
                },
                set: function(val) {
                    setterFunctions['groupId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "organizationId": {
                get: function() {
                    context["field"] = "organizationId";
                    context["metadata"] = (objectMetadata ? objectMetadata["organizationId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.organizationId, context);
                },
                set: function(val) {
                    setterFunctions['organizationId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "actionId": {
                get: function() {
                    context["field"] = "actionId";
                    context["metadata"] = (objectMetadata ? objectMetadata["actionId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.actionId, context);
                },
                set: function(val) {
                    setterFunctions['actionId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "AuthorizedSignatory": {
                get: function() {
                    context["field"] = "AuthorizedSignatory";
                    context["metadata"] = (objectMetadata ? objectMetadata["AuthorizedSignatory"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AuthorizedSignatory, context);
                },
                set: function(val) {
                    setterFunctions['AuthorizedSignatory'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "features": {
                get: function() {
                    context["field"] = "features";
                    context["metadata"] = (objectMetadata ? objectMetadata["features"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.features, context);
                },
                set: function(val) {
                    setterFunctions['features'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "serviceKey": {
                get: function() {
                    context["field"] = "serviceKey";
                    context["metadata"] = (objectMetadata ? objectMetadata["serviceKey"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.serviceKey, context);
                },
                set: function(val) {
                    setterFunctions['serviceKey'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "AuthorizedSignatoryGroupId": {
                get: function() {
                    context["field"] = "AuthorizedSignatoryGroupId";
                    context["metadata"] = (objectMetadata ? objectMetadata["AuthorizedSignatoryGroupId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AuthorizedSignatoryGroupId, context);
                },
                set: function(val) {
                    setterFunctions['AuthorizedSignatoryGroupId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "statusId": {
                get: function() {
                    context["field"] = "statusId";
                    context["metadata"] = (objectMetadata ? objectMetadata["statusId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.statusId, context);
                },
                set: function(val) {
                    setterFunctions['statusId'].call(this, val, privateState);
                },
                enumerable: true,
            },
        });
        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };
        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.Name = value ? (value["Name"] ? value["Name"] : null) : null;
            privateState.Description = value ? (value["Description"] ? value["Description"] : null) : null;
            privateState.Type_Id = value ? (value["Type_Id"] ? value["Type_Id"] : null) : null;
            privateState.Organization_id = value ? (value["Organization_id"] ? value["Organization_id"] : null) : null;
            privateState.Taxid = value ? (value["Taxid"] ? value["Taxid"] : null) : null;
            privateState.Membership_id = value ? (value["Membership_id"] ? value["Membership_id"] : null) : null;
            privateState.Sequence = value ? (value["Sequence"] ? value["Sequence"] : null) : null;
            privateState.Value = value ? (value["Value"] ? value["Value"] : null) : null;
            privateState.Extension = value ? (value["Extension"] ? value["Extension"] : null) : null;
            privateState.IsPreferredContactMethod = value ? (value["IsPreferredContactMethod"] ? value["IsPreferredContactMethod"] : null) : null;
            privateState.PreferredContactTime = value ? (value["PreferredContactTime"] ? value["PreferredContactTime"] : null) : null;
            privateState.createdby = value ? (value["createdby"] ? value["createdby"] : null) : null;
            privateState.modifiedby = value ? (value["modifiedby"] ? value["modifiedby"] : null) : null;
            privateState.createdts = value ? (value["createdts"] ? value["createdts"] : null) : null;
            privateState.lastmodifiedts = value ? (value["lastmodifiedts"] ? value["lastmodifiedts"] : null) : null;
            privateState.synctimestamp = value ? (value["synctimestamp"] ? value["synctimestamp"] : null) : null;
            privateState.softdeleteflag = value ? (value["softdeleteflag"] ? value["softdeleteflag"] : null) : null;
            privateState.DurationOfStay = value ? (value["DurationOfStay"] ? value["DurationOfStay"] : null) : null;
            privateState.IsPrimary = value ? (value["IsPrimary"] ? value["IsPrimary"] : null) : null;
            privateState.contactnumber = value ? (value["contactnumber"] ? value["contactnumber"] : null) : null;
            privateState.emailid = value ? (value["emailid"] ? value["emailid"] : null) : null;
            privateState.addressLine1 = value ? (value["addressLine1"] ? value["addressLine1"] : null) : null;
            privateState.addressLine2 = value ? (value["addressLine2"] ? value["addressLine2"] : null) : null;
            privateState.zipCode = value ? (value["zipCode"] ? value["zipCode"] : null) : null;
            privateState.cityName = value ? (value["cityName"] ? value["cityName"] : null) : null;
            privateState.country = value ? (value["country"] ? value["country"] : null) : null;
            privateState.state = value ? (value["state"] ? value["state"] : null) : null;
            privateState.Email = value ? (value["Email"] ? value["Email"] : null) : null;
            privateState.Tin = value ? (value["Tin"] ? value["Tin"] : null) : null;
            privateState.searchType = value ? (value["searchType"] ? value["searchType"] : null) : null;
            privateState.errorCode = value ? (value["errorCode"] ? value["errorCode"] : null) : null;
            privateState.errorMessage = value ? (value["errorMessage"] ? value["errorMessage"] : null) : null;
            privateState.success = value ? (value["success"] ? value["success"] : null) : null;
            privateState.Phone = value ? (value["Phone"] ? value["Phone"] : null) : null;
            privateState.searchString = value ? (value["searchString"] ? value["searchString"] : null) : null;
            privateState.order = value ? (value["order"] ? value["order"] : null) : null;
            privateState.sortBy = value ? (value["sortBy"] ? value["sortBy"] : null) : null;
            privateState.offset = value ? (value["offset"] ? value["offset"] : null) : null;
            privateState.limit = value ? (value["limit"] ? value["limit"] : null) : null;
            privateState.Type = value ? (value["Type"] ? value["Type"] : null) : null;
            privateState.Communication = value ? (value["Communication"] ? value["Communication"] : null) : null;
            privateState.Address = value ? (value["Address"] ? value["Address"] : null) : null;
            privateState.Owner = value ? (value["Owner"] ? value["Owner"] : null) : null;
            privateState.Membership = value ? (value["Membership"] ? value["Membership"] : null) : null;
            privateState.AccountsList = value ? (value["AccountsList"] ? value["AccountsList"] : null) : null;
            privateState.EAgreementRequired = value ? (value["EAgreementRequired"] ? value["EAgreementRequired"] : null) : null;
            privateState.LastName = value ? (value["LastName"] ? value["LastName"] : null) : null;
            privateState.MiddleName = value ? (value["MiddleName"] ? value["MiddleName"] : null) : null;
            privateState.FirstName = value ? (value["FirstName"] ? value["FirstName"] : null) : null;
            privateState.status = value ? (value["status"] ? value["status"] : null) : null;
            privateState.Lastlogintime = value ? (value["Lastlogintime"] ? value["Lastlogintime"] : null) : null;
            privateState.role_id = value ? (value["role_id"] ? value["role_id"] : null) : null;
            privateState.DOB = value ? (value["DOB"] ? value["DOB"] : null) : null;
            privateState.Ssn = value ? (value["Ssn"] ? value["Ssn"] : null) : null;
            privateState.TypeName = value ? (value["TypeName"] ? value["TypeName"] : null) : null;
            privateState.DrivingLicenseNumber = value ? (value["DrivingLicenseNumber"] ? value["DrivingLicenseNumber"] : null) : null;
            privateState.DateOfBirth = value ? (value["DateOfBirth"] ? value["DateOfBirth"] : null) : null;
            privateState.isExists = value ? (value["isExists"] ? value["isExists"] : null) : null;
            privateState.Account_id = value ? (value["Account_id"] ? value["Account_id"] : null) : null;
            privateState.accountID = value ? (value["accountID"] ? value["accountID"] : null) : null;
            privateState.addressId = value ? (value["addressId"] ? value["addressId"] : null) : null;
            privateState.RiskStatus = value ? (value["RiskStatus"] ? value["RiskStatus"] : null) : null;
            privateState.isEagreementSigned = value ? (value["isEagreementSigned"] ? value["isEagreementSigned"] : null) : null;
            privateState.groupId = value ? (value["groupId"] ? value["groupId"] : null) : null;
            privateState.organizationId = value ? (value["organizationId"] ? value["organizationId"] : null) : null;
            privateState.actionId = value ? (value["actionId"] ? value["actionId"] : null) : null;
            privateState.AuthorizedSignatory = value ? (value["AuthorizedSignatory"] ? value["AuthorizedSignatory"] : null) : null;
            privateState.features = value ? (value["features"] ? value["features"] : null) : null;
            privateState.serviceKey = value ? (value["serviceKey"] ? value["serviceKey"] : null) : null;
            privateState.AuthorizedSignatoryGroupId = value ? (value["AuthorizedSignatoryGroupId"] ? value["AuthorizedSignatoryGroupId"] : null) : null;
            privateState.statusId = value ? (value["statusId"] ? value["statusId"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Organization);
    //Create new class level validator object
    BaseModel.Validator.call(Organization);
    var registerValidatorBackup = Organization.registerValidator;
    Organization.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (Organization.isValid(this, propName, val)) {
                        return setterBackup.apply(null, arguments);
                    } else {
                        throw Error("Validation failed for " + propName + " : " + val);
                    }
                }
                setterFunctions[arguments[0]].changed = true;
            }
            return registerValidatorBackup.apply(null, arguments);
        }
        //Extending Model for custom operations
        //For Operation 'updateOrganization' with service id 'UpdateOrganisation5850'
    Organization.updateOrganization = function(params, onCompletion) {
        return Organization.customVerb('updateOrganization', params, onCompletion);
    };
    //For Operation 'verifyDbxOrganizationUser' with service id 'verifyOraganisationUser3522'
    Organization.verifyDbxOrganizationUser = function(params, onCompletion) {
        return Organization.customVerb('verifyDbxOrganizationUser', params, onCompletion);
    };
    //For Operation 'getDbxOrganizationUsers' with service id 'GetOrganisationEmployes9984'
    Organization.getDbxOrganizationUsers = function(params, onCompletion) {
        return Organization.customVerb('getDbxOrganizationUsers', params, onCompletion);
    };
    //For Operation 'getOrganizationName' with service id 'getOrganizationName9845'
    Organization.getOrganizationName = function(params, onCompletion) {
        return Organization.customVerb('getOrganizationName', params, onCompletion);
    };
    //For Operation 'editDbxOrganization' with service id 'UpdateOrganisation7224'
    Organization.editDbxOrganization = function(params, onCompletion) {
        return Organization.customVerb('editDbxOrganization', params, onCompletion);
    };
    //For Operation 'CreateMicroOrganizationEmployeeForAdmin' with service id 'CreateMicroOrganizationEmployee1691'
    Organization.CreateMicroOrganizationEmployeeForAdmin = function(params, onCompletion) {
        return Organization.customVerb('CreateMicroOrganizationEmployeeForAdmin', params, onCompletion);
    };
    //For Operation 'getOrganizationGroupActionLimits' with service id 'getOrganizationGroupActionLimits5285'
    Organization.getOrganizationGroupActionLimits = function(params, onCompletion) {
        return Organization.customVerb('getOrganizationGroupActionLimits', params, onCompletion);
    };
    //For Operation 'createOrganization' with service id 'CreateOrganisation1230'
    Organization.createOrganization = function(params, onCompletion) {
        return Organization.customVerb('createOrganization', params, onCompletion);
    };
    //For Operation 'enrollOrganization' with service id 'EnrollOrganization1178'
    Organization.enrollOrganization = function(params, onCompletion) {
        return Organization.customVerb('enrollOrganization', params, onCompletion);
    };
    //For Operation 'createDbxOrganization' with service id 'CreateOrganisation3104'
    Organization.createDbxOrganization = function(params, onCompletion) {
        return Organization.customVerb('createDbxOrganization', params, onCompletion);
    };
    //For Operation 'getDbxOrganizationDetails' with service id 'GetOrganisationDetails4108'
    Organization.getDbxOrganizationDetails = function(params, onCompletion) {
        return Organization.customVerb('getDbxOrganizationDetails', params, onCompletion);
    };
    //For Operation 'CreateSmallOrganizationEmployeeForAdmin' with service id 'CreateSmallOrganizationEmployee3745'
    Organization.CreateSmallOrganizationEmployeeForAdmin = function(params, onCompletion) {
        return Organization.customVerb('CreateSmallOrganizationEmployeeForAdmin', params, onCompletion);
    };
    //For Operation 'validateTin' with service id 'ValidateTin7223'
    Organization.validateTin = function(params, onCompletion) {
        return Organization.customVerb('validateTin', params, onCompletion);
    };
    var relations = [];
    Organization.relations = relations;
    Organization.prototype.isValid = function() {
        return Organization.isValid(this);
    };
    Organization.prototype.objModelName = "Organization";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Organization.registerProcessors = function(options, successCallback, failureCallback) {
        if (!options) {
            options = {};
        }
        if (options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
            preProcessorCallback = options["preProcessor"];
        }
        if (options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])) {
            postProcessorCallback = options["postProcessor"];
        }

        function metaDataSuccess(res) {
            objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
            successCallback();
        }

        function metaDataFailure(err) {
            failureCallback(err);
        }
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "Organization", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    Organization.clone = function(objectToClone) {
        var clonedObj = new Organization();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return Organization;
});