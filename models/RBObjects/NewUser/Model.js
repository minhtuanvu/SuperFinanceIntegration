/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "NewUser", "objectService" : "RBObjects"};

    var setterFunctions = {
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
        annualIncome: function(val, state) {
            context["field"] = "annualIncome";
            context["metadata"] = (objectMetadata ? objectMetadata["annualIncome"] : null);
            state['annualIncome'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        assets: function(val, state) {
            context["field"] = "assets";
            context["metadata"] = (objectMetadata ? objectMetadata["assets"] : null);
            state['assets'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        city: function(val, state) {
            context["field"] = "city";
            context["metadata"] = (objectMetadata ? objectMetadata["city"] : null);
            state['city'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        company: function(val, state) {
            context["field"] = "company";
            context["metadata"] = (objectMetadata ? objectMetadata["company"] : null);
            state['company'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        country: function(val, state) {
            context["field"] = "country";
            context["metadata"] = (objectMetadata ? objectMetadata["country"] : null);
            state['country'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        countryCode: function(val, state) {
            context["field"] = "countryCode";
            context["metadata"] = (objectMetadata ? objectMetadata["countryCode"] : null);
            state['countryCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditCheck: function(val, state) {
            context["field"] = "creditCheck";
            context["metadata"] = (objectMetadata ? objectMetadata["creditCheck"] : null);
            state['creditCheck'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        dateOfBirth: function(val, state) {
            context["field"] = "dateOfBirth";
            context["metadata"] = (objectMetadata ? objectMetadata["dateOfBirth"] : null);
            state['dateOfBirth'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        email: function(val, state) {
            context["field"] = "email";
            context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
            state['email'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        employmentInfo: function(val, state) {
            context["field"] = "employmentInfo";
            context["metadata"] = (objectMetadata ? objectMetadata["employmentInfo"] : null);
            state['employmentInfo'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errmsg: function(val, state) {
            context["field"] = "errmsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
            state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        experience: function(val, state) {
            context["field"] = "experience";
            context["metadata"] = (objectMetadata ? objectMetadata["experience"] : null);
            state['experience'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        gender: function(val, state) {
            context["field"] = "gender";
            context["metadata"] = (objectMetadata ? objectMetadata["gender"] : null);
            state['gender'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        informationType: function(val, state) {
            context["field"] = "informationType";
            context["metadata"] = (objectMetadata ? objectMetadata["informationType"] : null);
            state['informationType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        jobProfile: function(val, state) {
            context["field"] = "jobProfile";
            context["metadata"] = (objectMetadata ? objectMetadata["jobProfile"] : null);
            state['jobProfile'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        maritalStatus: function(val, state) {
            context["field"] = "maritalStatus";
            context["metadata"] = (objectMetadata ? objectMetadata["maritalStatus"] : null);
            state['maritalStatus'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        montlyExpenditure: function(val, state) {
            context["field"] = "montlyExpenditure";
            context["metadata"] = (objectMetadata ? objectMetadata["montlyExpenditure"] : null);
            state['montlyExpenditure'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        noOfDependents: function(val, state) {
            context["field"] = "noOfDependents";
            context["metadata"] = (objectMetadata ? objectMetadata["noOfDependents"] : null);
            state['noOfDependents'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        password: function(val, state) {
            context["field"] = "password";
            context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
            state['password'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        phone: function(val, state) {
            context["field"] = "phone";
            context["metadata"] = (objectMetadata ? objectMetadata["phone"] : null);
            state['phone'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        signatureImage: function(val, state) {
            context["field"] = "signatureImage";
            context["metadata"] = (objectMetadata ? objectMetadata["signatureImage"] : null);
            state['signatureImage'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        spouseFirstName: function(val, state) {
            context["field"] = "spouseFirstName";
            context["metadata"] = (objectMetadata ? objectMetadata["spouseFirstName"] : null);
            state['spouseFirstName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        spouseLastName: function(val, state) {
            context["field"] = "spouseLastName";
            context["metadata"] = (objectMetadata ? objectMetadata["spouseLastName"] : null);
            state['spouseLastName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ssn: function(val, state) {
            context["field"] = "ssn";
            context["metadata"] = (objectMetadata ? objectMetadata["ssn"] : null);
            state['ssn'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        state: function(val, state) {
            context["field"] = "state";
            context["metadata"] = (objectMetadata ? objectMetadata["state"] : null);
            state['state'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        success: function(val, state) {
            context["field"] = "success";
            context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
            state['success'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userEmploymentInfo: function(val, state) {
            context["field"] = "userEmploymentInfo";
            context["metadata"] = (objectMetadata ? objectMetadata["userEmploymentInfo"] : null);
            state['userEmploymentInfo'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userFinancialInfo: function(val, state) {
            context["field"] = "userFinancialInfo";
            context["metadata"] = (objectMetadata ? objectMetadata["userFinancialInfo"] : null);
            state['userFinancialInfo'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userfirstname: function(val, state) {
            context["field"] = "userfirstname";
            context["metadata"] = (objectMetadata ? objectMetadata["userfirstname"] : null);
            state['userfirstname'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userId: function(val, state) {
            context["field"] = "userId";
            context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
            state['userId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userlastname: function(val, state) {
            context["field"] = "userlastname";
            context["metadata"] = (objectMetadata ? objectMetadata["userlastname"] : null);
            state['userlastname'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userName: function(val, state) {
            context["field"] = "userName";
            context["metadata"] = (objectMetadata ? objectMetadata["userName"] : null);
            state['userName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userPersonalInfo: function(val, state) {
            context["field"] = "userPersonalInfo";
            context["metadata"] = (objectMetadata ? objectMetadata["userPersonalInfo"] : null);
            state['userPersonalInfo'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userProducts: function(val, state) {
            context["field"] = "userProducts";
            context["metadata"] = (objectMetadata ? objectMetadata["userProducts"] : null);
            state['userProducts'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userSecurityQuestions: function(val, state) {
            context["field"] = "userSecurityQuestions";
            context["metadata"] = (objectMetadata ? objectMetadata["userSecurityQuestions"] : null);
            state['userSecurityQuestions'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        zipcode: function(val, state) {
            context["field"] = "zipcode";
            context["metadata"] = (objectMetadata ? objectMetadata["zipcode"] : null);
            state['zipcode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function NewUser(defaultValues) {
        var privateState = {};
        context["field"] = "addressLine1";
        context["metadata"] = (objectMetadata ? objectMetadata["addressLine1"] : null);
        privateState.addressLine1 = defaultValues ?
            (defaultValues["addressLine1"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["addressLine1"], context) :
                null) :
            null;

        context["field"] = "addressLine2";
        context["metadata"] = (objectMetadata ? objectMetadata["addressLine2"] : null);
        privateState.addressLine2 = defaultValues ?
            (defaultValues["addressLine2"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["addressLine2"], context) :
                null) :
            null;

        context["field"] = "annualIncome";
        context["metadata"] = (objectMetadata ? objectMetadata["annualIncome"] : null);
        privateState.annualIncome = defaultValues ?
            (defaultValues["annualIncome"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["annualIncome"], context) :
                null) :
            null;

        context["field"] = "assets";
        context["metadata"] = (objectMetadata ? objectMetadata["assets"] : null);
        privateState.assets = defaultValues ?
            (defaultValues["assets"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["assets"], context) :
                null) :
            null;

        context["field"] = "city";
        context["metadata"] = (objectMetadata ? objectMetadata["city"] : null);
        privateState.city = defaultValues ?
            (defaultValues["city"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["city"], context) :
                null) :
            null;

        context["field"] = "company";
        context["metadata"] = (objectMetadata ? objectMetadata["company"] : null);
        privateState.company = defaultValues ?
            (defaultValues["company"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["company"], context) :
                null) :
            null;

        context["field"] = "country";
        context["metadata"] = (objectMetadata ? objectMetadata["country"] : null);
        privateState.country = defaultValues ?
            (defaultValues["country"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["country"], context) :
                null) :
            null;

        context["field"] = "countryCode";
        context["metadata"] = (objectMetadata ? objectMetadata["countryCode"] : null);
        privateState.countryCode = defaultValues ?
            (defaultValues["countryCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["countryCode"], context) :
                null) :
            null;

        context["field"] = "creditCheck";
        context["metadata"] = (objectMetadata ? objectMetadata["creditCheck"] : null);
        privateState.creditCheck = defaultValues ?
            (defaultValues["creditCheck"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditCheck"], context) :
                null) :
            null;

        context["field"] = "dateOfBirth";
        context["metadata"] = (objectMetadata ? objectMetadata["dateOfBirth"] : null);
        privateState.dateOfBirth = defaultValues ?
            (defaultValues["dateOfBirth"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["dateOfBirth"], context) :
                null) :
            null;

        context["field"] = "email";
        context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
        privateState.email = defaultValues ?
            (defaultValues["email"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["email"], context) :
                null) :
            null;

        context["field"] = "employmentInfo";
        context["metadata"] = (objectMetadata ? objectMetadata["employmentInfo"] : null);
        privateState.employmentInfo = defaultValues ?
            (defaultValues["employmentInfo"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["employmentInfo"], context) :
                null) :
            null;

        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ?
            (defaultValues["errmsg"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) :
                null) :
            null;

        context["field"] = "experience";
        context["metadata"] = (objectMetadata ? objectMetadata["experience"] : null);
        privateState.experience = defaultValues ?
            (defaultValues["experience"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["experience"], context) :
                null) :
            null;

        context["field"] = "gender";
        context["metadata"] = (objectMetadata ? objectMetadata["gender"] : null);
        privateState.gender = defaultValues ?
            (defaultValues["gender"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["gender"], context) :
                null) :
            null;

        context["field"] = "informationType";
        context["metadata"] = (objectMetadata ? objectMetadata["informationType"] : null);
        privateState.informationType = defaultValues ?
            (defaultValues["informationType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["informationType"], context) :
                null) :
            null;

        context["field"] = "jobProfile";
        context["metadata"] = (objectMetadata ? objectMetadata["jobProfile"] : null);
        privateState.jobProfile = defaultValues ?
            (defaultValues["jobProfile"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["jobProfile"], context) :
                null) :
            null;

        context["field"] = "maritalStatus";
        context["metadata"] = (objectMetadata ? objectMetadata["maritalStatus"] : null);
        privateState.maritalStatus = defaultValues ?
            (defaultValues["maritalStatus"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["maritalStatus"], context) :
                null) :
            null;

        context["field"] = "montlyExpenditure";
        context["metadata"] = (objectMetadata ? objectMetadata["montlyExpenditure"] : null);
        privateState.montlyExpenditure = defaultValues ?
            (defaultValues["montlyExpenditure"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["montlyExpenditure"], context) :
                null) :
            null;

        context["field"] = "noOfDependents";
        context["metadata"] = (objectMetadata ? objectMetadata["noOfDependents"] : null);
        privateState.noOfDependents = defaultValues ?
            (defaultValues["noOfDependents"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["noOfDependents"], context) :
                null) :
            null;

        context["field"] = "password";
        context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
        privateState.password = defaultValues ?
            (defaultValues["password"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["password"], context) :
                null) :
            null;

        context["field"] = "phone";
        context["metadata"] = (objectMetadata ? objectMetadata["phone"] : null);
        privateState.phone = defaultValues ?
            (defaultValues["phone"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["phone"], context) :
                null) :
            null;

        context["field"] = "signatureImage";
        context["metadata"] = (objectMetadata ? objectMetadata["signatureImage"] : null);
        privateState.signatureImage = defaultValues ?
            (defaultValues["signatureImage"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["signatureImage"], context) :
                null) :
            null;

        context["field"] = "spouseFirstName";
        context["metadata"] = (objectMetadata ? objectMetadata["spouseFirstName"] : null);
        privateState.spouseFirstName = defaultValues ?
            (defaultValues["spouseFirstName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["spouseFirstName"], context) :
                null) :
            null;

        context["field"] = "spouseLastName";
        context["metadata"] = (objectMetadata ? objectMetadata["spouseLastName"] : null);
        privateState.spouseLastName = defaultValues ?
            (defaultValues["spouseLastName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["spouseLastName"], context) :
                null) :
            null;

        context["field"] = "ssn";
        context["metadata"] = (objectMetadata ? objectMetadata["ssn"] : null);
        privateState.ssn = defaultValues ?
            (defaultValues["ssn"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ssn"], context) :
                null) :
            null;

        context["field"] = "state";
        context["metadata"] = (objectMetadata ? objectMetadata["state"] : null);
        privateState.state = defaultValues ?
            (defaultValues["state"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["state"], context) :
                null) :
            null;

        context["field"] = "success";
        context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
        privateState.success = defaultValues ?
            (defaultValues["success"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["success"], context) :
                null) :
            null;

        context["field"] = "userEmploymentInfo";
        context["metadata"] = (objectMetadata ? objectMetadata["userEmploymentInfo"] : null);
        privateState.userEmploymentInfo = defaultValues ?
            (defaultValues["userEmploymentInfo"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userEmploymentInfo"], context) :
                null) :
            null;

        context["field"] = "userFinancialInfo";
        context["metadata"] = (objectMetadata ? objectMetadata["userFinancialInfo"] : null);
        privateState.userFinancialInfo = defaultValues ?
            (defaultValues["userFinancialInfo"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userFinancialInfo"], context) :
                null) :
            null;

        context["field"] = "userfirstname";
        context["metadata"] = (objectMetadata ? objectMetadata["userfirstname"] : null);
        privateState.userfirstname = defaultValues ?
            (defaultValues["userfirstname"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userfirstname"], context) :
                null) :
            null;

        context["field"] = "userId";
        context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
        privateState.userId = defaultValues ?
            (defaultValues["userId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userId"], context) :
                null) :
            null;

        context["field"] = "userlastname";
        context["metadata"] = (objectMetadata ? objectMetadata["userlastname"] : null);
        privateState.userlastname = defaultValues ?
            (defaultValues["userlastname"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userlastname"], context) :
                null) :
            null;

        context["field"] = "userName";
        context["metadata"] = (objectMetadata ? objectMetadata["userName"] : null);
        privateState.userName = defaultValues ?
            (defaultValues["userName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userName"], context) :
                null) :
            null;

        context["field"] = "userPersonalInfo";
        context["metadata"] = (objectMetadata ? objectMetadata["userPersonalInfo"] : null);
        privateState.userPersonalInfo = defaultValues ?
            (defaultValues["userPersonalInfo"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userPersonalInfo"], context) :
                null) :
            null;

        context["field"] = "userProducts";
        context["metadata"] = (objectMetadata ? objectMetadata["userProducts"] : null);
        privateState.userProducts = defaultValues ?
            (defaultValues["userProducts"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userProducts"], context) :
                null) :
            null;

        context["field"] = "userSecurityQuestions";
        context["metadata"] = (objectMetadata ? objectMetadata["userSecurityQuestions"] : null);
        privateState.userSecurityQuestions = defaultValues ?
            (defaultValues["userSecurityQuestions"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userSecurityQuestions"], context) :
                null) :
            null;

        context["field"] = "zipcode";
        context["metadata"] = (objectMetadata ? objectMetadata["zipcode"] : null);
        privateState.zipcode = defaultValues ?
            (defaultValues["zipcode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["zipcode"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
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
            "annualIncome": {
                get: function() {
                    context["field"] = "annualIncome";
                    context["metadata"] = (objectMetadata ? objectMetadata["annualIncome"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.annualIncome, context);
                },
                set: function(val) {
                    setterFunctions['annualIncome'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "assets": {
                get: function() {
                    context["field"] = "assets";
                    context["metadata"] = (objectMetadata ? objectMetadata["assets"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.assets, context);
                },
                set: function(val) {
                    setterFunctions['assets'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "city": {
                get: function() {
                    context["field"] = "city";
                    context["metadata"] = (objectMetadata ? objectMetadata["city"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.city, context);
                },
                set: function(val) {
                    setterFunctions['city'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "company": {
                get: function() {
                    context["field"] = "company";
                    context["metadata"] = (objectMetadata ? objectMetadata["company"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.company, context);
                },
                set: function(val) {
                    setterFunctions['company'].call(this, val, privateState);
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
            "countryCode": {
                get: function() {
                    context["field"] = "countryCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["countryCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.countryCode, context);
                },
                set: function(val) {
                    setterFunctions['countryCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditCheck": {
                get: function() {
                    context["field"] = "creditCheck";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditCheck"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditCheck, context);
                },
                set: function(val) {
                    setterFunctions['creditCheck'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "dateOfBirth": {
                get: function() {
                    context["field"] = "dateOfBirth";
                    context["metadata"] = (objectMetadata ? objectMetadata["dateOfBirth"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.dateOfBirth, context);
                },
                set: function(val) {
                    setterFunctions['dateOfBirth'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "email": {
                get: function() {
                    context["field"] = "email";
                    context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.email, context);
                },
                set: function(val) {
                    setterFunctions['email'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "employmentInfo": {
                get: function() {
                    context["field"] = "employmentInfo";
                    context["metadata"] = (objectMetadata ? objectMetadata["employmentInfo"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.employmentInfo, context);
                },
                set: function(val) {
                    setterFunctions['employmentInfo'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "errmsg": {
                get: function() {
                    context["field"] = "errmsg";
                    context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errmsg, context);
                },
                set: function(val) {
                    setterFunctions['errmsg'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "experience": {
                get: function() {
                    context["field"] = "experience";
                    context["metadata"] = (objectMetadata ? objectMetadata["experience"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.experience, context);
                },
                set: function(val) {
                    setterFunctions['experience'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "gender": {
                get: function() {
                    context["field"] = "gender";
                    context["metadata"] = (objectMetadata ? objectMetadata["gender"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.gender, context);
                },
                set: function(val) {
                    setterFunctions['gender'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "informationType": {
                get: function() {
                    context["field"] = "informationType";
                    context["metadata"] = (objectMetadata ? objectMetadata["informationType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.informationType, context);
                },
                set: function(val) {
                    setterFunctions['informationType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "jobProfile": {
                get: function() {
                    context["field"] = "jobProfile";
                    context["metadata"] = (objectMetadata ? objectMetadata["jobProfile"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.jobProfile, context);
                },
                set: function(val) {
                    setterFunctions['jobProfile'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "maritalStatus": {
                get: function() {
                    context["field"] = "maritalStatus";
                    context["metadata"] = (objectMetadata ? objectMetadata["maritalStatus"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.maritalStatus, context);
                },
                set: function(val) {
                    setterFunctions['maritalStatus'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "montlyExpenditure": {
                get: function() {
                    context["field"] = "montlyExpenditure";
                    context["metadata"] = (objectMetadata ? objectMetadata["montlyExpenditure"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.montlyExpenditure, context);
                },
                set: function(val) {
                    setterFunctions['montlyExpenditure'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "noOfDependents": {
                get: function() {
                    context["field"] = "noOfDependents";
                    context["metadata"] = (objectMetadata ? objectMetadata["noOfDependents"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.noOfDependents, context);
                },
                set: function(val) {
                    setterFunctions['noOfDependents'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "password": {
                get: function() {
                    context["field"] = "password";
                    context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.password, context);
                },
                set: function(val) {
                    setterFunctions['password'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "phone": {
                get: function() {
                    context["field"] = "phone";
                    context["metadata"] = (objectMetadata ? objectMetadata["phone"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.phone, context);
                },
                set: function(val) {
                    setterFunctions['phone'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "signatureImage": {
                get: function() {
                    context["field"] = "signatureImage";
                    context["metadata"] = (objectMetadata ? objectMetadata["signatureImage"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.signatureImage, context);
                },
                set: function(val) {
                    setterFunctions['signatureImage'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "spouseFirstName": {
                get: function() {
                    context["field"] = "spouseFirstName";
                    context["metadata"] = (objectMetadata ? objectMetadata["spouseFirstName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.spouseFirstName, context);
                },
                set: function(val) {
                    setterFunctions['spouseFirstName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "spouseLastName": {
                get: function() {
                    context["field"] = "spouseLastName";
                    context["metadata"] = (objectMetadata ? objectMetadata["spouseLastName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.spouseLastName, context);
                },
                set: function(val) {
                    setterFunctions['spouseLastName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ssn": {
                get: function() {
                    context["field"] = "ssn";
                    context["metadata"] = (objectMetadata ? objectMetadata["ssn"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ssn, context);
                },
                set: function(val) {
                    setterFunctions['ssn'].call(this, val, privateState);
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
            "userEmploymentInfo": {
                get: function() {
                    context["field"] = "userEmploymentInfo";
                    context["metadata"] = (objectMetadata ? objectMetadata["userEmploymentInfo"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userEmploymentInfo, context);
                },
                set: function(val) {
                    setterFunctions['userEmploymentInfo'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userFinancialInfo": {
                get: function() {
                    context["field"] = "userFinancialInfo";
                    context["metadata"] = (objectMetadata ? objectMetadata["userFinancialInfo"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userFinancialInfo, context);
                },
                set: function(val) {
                    setterFunctions['userFinancialInfo'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userfirstname": {
                get: function() {
                    context["field"] = "userfirstname";
                    context["metadata"] = (objectMetadata ? objectMetadata["userfirstname"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userfirstname, context);
                },
                set: function(val) {
                    setterFunctions['userfirstname'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userId": {
                get: function() {
                    context["field"] = "userId";
                    context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userId, context);
                },
                set: function(val) {
                    setterFunctions['userId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userlastname": {
                get: function() {
                    context["field"] = "userlastname";
                    context["metadata"] = (objectMetadata ? objectMetadata["userlastname"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userlastname, context);
                },
                set: function(val) {
                    setterFunctions['userlastname'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userName": {
                get: function() {
                    context["field"] = "userName";
                    context["metadata"] = (objectMetadata ? objectMetadata["userName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userName, context);
                },
                set: function(val) {
                    setterFunctions['userName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userPersonalInfo": {
                get: function() {
                    context["field"] = "userPersonalInfo";
                    context["metadata"] = (objectMetadata ? objectMetadata["userPersonalInfo"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userPersonalInfo, context);
                },
                set: function(val) {
                    setterFunctions['userPersonalInfo'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userProducts": {
                get: function() {
                    context["field"] = "userProducts";
                    context["metadata"] = (objectMetadata ? objectMetadata["userProducts"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userProducts, context);
                },
                set: function(val) {
                    setterFunctions['userProducts'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userSecurityQuestions": {
                get: function() {
                    context["field"] = "userSecurityQuestions";
                    context["metadata"] = (objectMetadata ? objectMetadata["userSecurityQuestions"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userSecurityQuestions, context);
                },
                set: function(val) {
                    setterFunctions['userSecurityQuestions'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "zipcode": {
                get: function() {
                    context["field"] = "zipcode";
                    context["metadata"] = (objectMetadata ? objectMetadata["zipcode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.zipcode, context);
                },
                set: function(val) {
                    setterFunctions['zipcode'].call(this, val, privateState);
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
            privateState.addressLine1 = value ? (value["addressLine1"] ? value["addressLine1"] : null) : null;
            privateState.addressLine2 = value ? (value["addressLine2"] ? value["addressLine2"] : null) : null;
            privateState.annualIncome = value ? (value["annualIncome"] ? value["annualIncome"] : null) : null;
            privateState.assets = value ? (value["assets"] ? value["assets"] : null) : null;
            privateState.city = value ? (value["city"] ? value["city"] : null) : null;
            privateState.company = value ? (value["company"] ? value["company"] : null) : null;
            privateState.country = value ? (value["country"] ? value["country"] : null) : null;
            privateState.countryCode = value ? (value["countryCode"] ? value["countryCode"] : null) : null;
            privateState.creditCheck = value ? (value["creditCheck"] ? value["creditCheck"] : null) : null;
            privateState.dateOfBirth = value ? (value["dateOfBirth"] ? value["dateOfBirth"] : null) : null;
            privateState.email = value ? (value["email"] ? value["email"] : null) : null;
            privateState.employmentInfo = value ? (value["employmentInfo"] ? value["employmentInfo"] : null) : null;
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
            privateState.experience = value ? (value["experience"] ? value["experience"] : null) : null;
            privateState.gender = value ? (value["gender"] ? value["gender"] : null) : null;
            privateState.informationType = value ? (value["informationType"] ? value["informationType"] : null) : null;
            privateState.jobProfile = value ? (value["jobProfile"] ? value["jobProfile"] : null) : null;
            privateState.maritalStatus = value ? (value["maritalStatus"] ? value["maritalStatus"] : null) : null;
            privateState.montlyExpenditure = value ? (value["montlyExpenditure"] ? value["montlyExpenditure"] : null) : null;
            privateState.noOfDependents = value ? (value["noOfDependents"] ? value["noOfDependents"] : null) : null;
            privateState.password = value ? (value["password"] ? value["password"] : null) : null;
            privateState.phone = value ? (value["phone"] ? value["phone"] : null) : null;
            privateState.signatureImage = value ? (value["signatureImage"] ? value["signatureImage"] : null) : null;
            privateState.spouseFirstName = value ? (value["spouseFirstName"] ? value["spouseFirstName"] : null) : null;
            privateState.spouseLastName = value ? (value["spouseLastName"] ? value["spouseLastName"] : null) : null;
            privateState.ssn = value ? (value["ssn"] ? value["ssn"] : null) : null;
            privateState.state = value ? (value["state"] ? value["state"] : null) : null;
            privateState.success = value ? (value["success"] ? value["success"] : null) : null;
            privateState.userEmploymentInfo = value ? (value["userEmploymentInfo"] ? value["userEmploymentInfo"] : null) : null;
            privateState.userFinancialInfo = value ? (value["userFinancialInfo"] ? value["userFinancialInfo"] : null) : null;
            privateState.userfirstname = value ? (value["userfirstname"] ? value["userfirstname"] : null) : null;
            privateState.userId = value ? (value["userId"] ? value["userId"] : null) : null;
            privateState.userlastname = value ? (value["userlastname"] ? value["userlastname"] : null) : null;
            privateState.userName = value ? (value["userName"] ? value["userName"] : null) : null;
            privateState.userPersonalInfo = value ? (value["userPersonalInfo"] ? value["userPersonalInfo"] : null) : null;
            privateState.userProducts = value ? (value["userProducts"] ? value["userProducts"] : null) : null;
            privateState.userSecurityQuestions = value ? (value["userSecurityQuestions"] ? value["userSecurityQuestions"] : null) : null;
            privateState.zipcode = value ? (value["zipcode"] ? value["zipcode"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(NewUser);

    //Create new class level validator object
    BaseModel.Validator.call(NewUser);

    var registerValidatorBackup = NewUser.registerValidator;

    NewUser.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(NewUser.isValid(this, propName, val)) {
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
    //For Operation 'getUserState' with service id 'getUserState5852'
     NewUser.getUserState = function(params, onCompletion){
        return NewUser.customVerb('getUserState', params, onCompletion);
     };

    //For Operation 'createPersonalInfo' with service id 'createUserPersonalInfo5087'
     NewUser.createPersonalInfo = function(params, onCompletion){
        return NewUser.customVerb('createPersonalInfo', params, onCompletion);
     };

    //For Operation 'uploadDocuments' with service id 'uploadDocuments7315'
     NewUser.uploadDocuments = function(params, onCompletion){
        return NewUser.customVerb('uploadDocuments', params, onCompletion);
     };

    //For Operation 'verifyExistingUserByPhone' with service id 'verifyExistingUserByPhone4515'
     NewUser.verifyExistingUserByPhone = function(params, onCompletion){
        return NewUser.customVerb('verifyExistingUserByPhone', params, onCompletion);
     };

    //For Operation 'verifyExistingUserByEmail' with service id 'verifyExistingUserByEmail3522'
     NewUser.verifyExistingUserByEmail = function(params, onCompletion){
        return NewUser.customVerb('verifyExistingUserByEmail', params, onCompletion);
     };

    //For Operation 'resetNewUserData' with service id 'deleteNewUserPerosnalInfo3542'
     NewUser.resetNewUserData = function(params, onCompletion){
        return NewUser.customVerb('resetNewUserData', params, onCompletion);
     };

    //For Operation 'signatureUpload' with service id 'userSignatureUpload9795'
     NewUser.signatureUpload = function(params, onCompletion){
        return NewUser.customVerb('signatureUpload', params, onCompletion);
     };

    //For Operation 'getUserPersonalInfo' with service id 'getUserPersonalInfo8753'
     NewUser.getUserPersonalInfo = function(params, onCompletion){
        return NewUser.customVerb('getUserPersonalInfo', params, onCompletion);
     };

    //For Operation 'userCreditCheck' with service id 'userCreditCheck2828'
     NewUser.userCreditCheck = function(params, onCompletion){
        return NewUser.customVerb('userCreditCheck', params, onCompletion);
     };

    //For Operation 'verifyExistingUserName' with service id 'verifyExistingUserName7692'
     NewUser.verifyExistingUserName = function(params, onCompletion){
        return NewUser.customVerb('verifyExistingUserName', params, onCompletion);
     };

    var relations = [];

    NewUser.relations = relations;

    NewUser.prototype.isValid = function() {
        return NewUser.isValid(this);
    };

    NewUser.prototype.objModelName = "NewUser";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    NewUser.registerProcessors = function(options, successCallback, failureCallback) {

        if(!options) {
            options = {};
        }

        if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
            preProcessorCallback = options["preProcessor"];
        }

        if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])) {
            postProcessorCallback = options["postProcessor"];
        }

        function metaDataSuccess(res) {
            objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
            successCallback();
        }

        function metaDataFailure(err) {
            failureCallback(err);
        }

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "NewUser", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    NewUser.clone = function(objectToClone) {
        var clonedObj = new NewUser();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return NewUser;
});