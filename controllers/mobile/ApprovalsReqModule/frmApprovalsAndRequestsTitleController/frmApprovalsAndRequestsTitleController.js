define({ 

  //init calls after init
  init : function(){
    try{
      kony.print("Entered init");
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
      this.view.preShow = this.preShowForm;
      this.view.postShow = this.postShowForm;
    }catch(e){
      kony.print("Exception in init::"+e);}
  },

  //onNavigate calls after init
  onNavigate : function(){
    try{

    }catch(e){
      kony.print("Exception in onNavigate"+e);
    }
  },

  //preShowForm is called when the form is pre loaded 
  preShowForm : function(){
    try{
      kony.print("Entered preShowForm");
      applicationManager.getPresentationUtility().showLoadingScreen();
      var navManager = applicationManager.getNavigationManager();
      var keyvalue="ApprovalAndRequest";
      navManager.setCustomInfo("backFormFlow",keyvalue);
      if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone"){
        this.view.flxHeader.isVisible = false;
        this.view.title = kony.i18n.getLocalizedString("kony.mb.approvalAndRequest");
      }else{
        this.view.flxHeader.isVisible = true;
        this.view.customHeader.lblLocateUs.text = "Approvals & Requests";
      }
      this.setupNavBarSkinForiPhone();
      this.initActions();
      //this.setDataInSegment();
            this.fetchCountRequest();
            this.fetchDataBasedOnPermissions();
            this.view.segApprovals.removeAll();
            this.setDataInSegmentHeading();
            //this.fetchCounts();

    }catch(e){
      kony.print("Exception in preShowForm::"+e);}
  },

  //postShowForm is called when the form is post loaded 
  postShowForm : function(){
    try{
      kony.print("Entered postShowForm");
      this.setupNavBarSkinForiPhone();
    }catch(e){
      kony.print("Exception in postShowForm::"+e);}
      try{
        kony.print("Entered postShowForm");
        this.setFilters("");
      }catch(e){
        kony.print("Exception in postShowForm::"+e);
      }
    },
    
    setFilters : function(data) {
      if(kony.sdk.isNullOrUndefined(data)) data = "";
      var presenter = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ACHModule');
      return presenter.presentationController.setFilters(data);
    },
    getFilters : function() {
      var presenter = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ACHModule');
      return presenter.presentationController.getFilters();
    },

  setupNavBarSkinForiPhone : function () {
      if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") return;
      try{
        this.view.flxBody.height = "100%";
        var titleBarAttributes = this.view.titleBarAttributes;
        titleBarAttributes["tintColor"] = "003e7500";
        titleBarAttributes["translucent"] = false;
        this.view.titleBarAttributes = titleBarAttributes;
      }
      catch(er){
      }
    },
  /*
    *initActions is to bind the actions form widgets
    *Author : Sibhi
    */
  initActions: function(){
    try{
      kony.print("Entered initActions");
      this.view.customHeader.flxBack.onClick = this.navToPrevForm;
      this.view.segApprovals.onRowClick = this.segOnRowClickAppOrReq;
      this.view.onDeviceBack=this.dummyFunction;
      var presenter = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ACHModule');       
      presenter.presentationController.setFiltersbyStatus("");
      presenter.presentationController.setFiltersbyDuration("");
      presenter.presentationController.setFiltersbySort("");
    }catch(e){kony.print("Exception in initActions"+e);}
  },
  
   /*
     *navToPrevForm - This function is to called to navigate back to prev form
     **
     */
  dummyFunction: function() {},
    navToPrevForm: function() {
      try {
        kony.print("entered navToPrevForm");
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.showDashboard();
      } catch (e) {
        kony.print("exception navToPrevForm" + e);
      }
    },


  setDataInSegment : function(){
    try{
      var configManager = applicationManager.getConfigurationManager();
      var dataArr = [];
      if(configManager.getApprovalsFeaturePermissionsList().some(configManager.checkUserPermission.bind(configManager))){
        dataArr.push({
          "lblHeader":{
            "text":"Approvals"
          },
          "imgArrow":{
            "src":"chevron.png"
          }
        });
      }
      if(configManager.getRequestsFeaturePermissionsList().some(configManager.checkUserPermission.bind(configManager))){
        dataArr.push({
          "lblHeader":{
            "text":"Requests"
          },
          "imgArrow":{
            "src":"chevron.png"
          }
        });
      }
      this.view.segApprovals.setData(dataArr);
    }catch(e){
      kony.print("Exception in setDataInSegment"+e);
    }
  },

  /*
    *segOnRowClickAppOrReq is called when we click on the segment
    *Author : Sibhi
    */
  segOnRowClickAppOrReq: function(){
    try{
      kony.print("Entered segOnRowClickAppOrReq");

      var selRowItems = this.view.segApprovals.selectedRowItems[0];
      var navManager = applicationManager.getNavigationManager();
      var selectRow=selRowItems.lblHeader.text;
      var formFlow;
       selectRow= selectRow.split(" ")[0];
      if(selRowItems.flow.text === "Approvals" && selectRow === "Pending"){
           navManager.navigateTo("ApprovalReqMain");
      }else if(selRowItems.flow.text === "Requests" && selectRow === "Pending"){
          navManager.navigateTo("RequestList"); 
      }else if(selRowItems.flow.text === "Approvals" && selectRow === "History"){        
        formFlow = "ApprovalHistory"                       
        navManager.setCustomInfo("ApprovalandRequestHistory",formFlow);
        navManager.navigateTo("frmApprovalHistory");
      }else if(selRowItems.flow.text === "Requests" && selectRow === "History"){
        formFlow = "RequestHistory"                       
        navManager.setCustomInfo("ApprovalandRequestHistory",formFlow);
        navManager.navigateTo("frmApprovalHistory");
      }
    }catch(e){
      kony.print("Exception in setDataInSegment"+e);
    }
  },
    getWidgetDataMap : function(){
    var dataMap = {
      "lblHeader" : "lblHeader",
      "flxTypeOneShadow" : "flxTypeOneShadow",
      "flximgUp" : "flximgUp",
      "imgUpArrow" : "imgUpArrow",
      "imgArrow":"imgArrow",
      "flxSeparator":"flxSeparator"
    };
    return dataMap;
  },
  setDataInSegmentHeading: function() {
        try {
          var checkUserPermission = function (permission) {
            return applicationManager.getConfigurationManager().checkUserPermission(permission);
          }
          var configManager = applicationManager.getConfigurationManager();
          var allApprovalPermission = configManager.getApprovalsFeaturePermissionsList();
          var isApprovalPermissionAccessible = allApprovalPermission.some(checkUserPermission);
          var allRequestPermissionAccessible = configManager.getRequestsFeaturePermissionsList();
          var isRequestPermissionAccessible = allRequestPermissionAccessible.some(checkUserPermission);
          if(isApprovalPermissionAccessible && isRequestPermissionAccessible){
            var dataArr = [
            [{"heading": "Approvals"},
             [{"name": "Pending","flow": "Approvals"},{"name": "History","flow": "Approvals","flxSeparator":"No"}]
            ],
            [{"heading": "Requests"},
             [{"name": "Pending","flow": "Requests"},{ "name": "History","flow": "Requests","flxSeparator":"Yes"}]
            ]
            ];
          }else if(isApprovalPermissionAccessible){
            var dataArr = [
            [{"heading": "Approvals"},
             [{"name": "Pending","flow": "Approvals"},{"name": "History","flow": "Approvals","flxSeparator":"No"}]
            ]
            ];
          }else if(isRequestPermissionAccessible){
            var dataArr = [
            [{"heading": "Requests"},
             [{"name": "Pending","flow": "Requests"},{ "name": "History","flow": "Requests","flxSeparator":"Yes"}]
            ]
            ];
          }else{
            
          }
            var rowArray = [];
            var setdataArr = [];
            var count;
            var presenter = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ACHModule');
            var navigationManager = applicationManager.getNavigationManager();
         	var approvalPendingCount = navigationManager.getCustomInfo("approvalPendingCount");
            var requestPendingCount = navigationManager.getCustomInfo("requestPendingCount");
              for (var key in dataArr) {
                var headerJson = {
                    "template": "flxTransHeader",
                    "lblHeader": dataArr[key][0].heading,
                    "imgUpArrow": {
                        "src": "arrowup.png"
                    },
                    "flximgUp": {
                        isVisible: false
                    }
                };
                rowArray = [];
                if(!kony.sdk.isNullOrUndefined(approvalPendingCount) && !kony.sdk.isNullOrUndefined(requestPendingCount)){
                    for (var i = 0; i < dataArr[key].length; i++) {
                      if (dataArr[key][1][i].name === "Pending" && dataArr[key][1][i].flow === "Approvals") {
                        count = "(" + approvalPendingCount.length + ")";//presenter.presentationController.allApprovalsPendingCount
                      } else if (dataArr[key][1][i].name === "Pending" && dataArr[key][1][i].flow === "Requests") {
                        count = "(" + requestPendingCount.length + ")";//presenter.presentationController.allRequestsPendingCount
                      } else {
                        count = ""
                      }
                      var isVisible;
                      if(dataArr[key][1][i].flxSeparator=="No"){
                        isVisible=false;
                      }else{
                        isVisible=true;
                      }
                      var rowJson = {
                        "template": "flxApprovalsAndReqHeader",
                        "lblHeader": {
                          "text": dataArr[key][1][i].name + " " + count
                        },
                        "imgArrow": {
                          "src": "chevron.png"
                        },
                        "flow": {
                          "text": dataArr[key][1][i].flow
                        },
                        "flxSeparator":{isVisible:isVisible}
                      };
                      rowArray.push(rowJson);
                    }
                     applicationManager.getPresentationUtility().dismissLoadingScreen();
                }
                else{
                  for (var i = 0; i < dataArr[key].length; i++) {
                    if (dataArr[key][1][i].name === "Pending" && dataArr[key][1][i].flow === "Approvals") {
                      count = "(" + "" + ")";//presenter.presentationController.allApprovalsPendingCount
                    } else if (dataArr[key][1][i].name === "Pending" && dataArr[key][1][i].flow === "Requests") {
                      count = "(" + "" + ")";//presenter.presentationController.allRequestsPendingCount
                    } else {
                      count = ""
                    }
                    var isVisible;
                    if(dataArr[key][1][i].flxSeparator=="No"){
                      isVisible=false;
                    }else{
                      isVisible=true;
                    }
                    var rowJson = {
                      "template": "flxApprovalsAndReqHeader",
                      "lblHeader": {
                        "text": dataArr[key][1][i].name + " " + "(0)"
                      },
                      "imgArrow": {
                        "src": "chevron.png"
                      },
                      "flow": {
                        "text": dataArr[key][1][i].flow
                      },
                      "flxSeparator":{isVisible:isVisible}
                    };

                    rowArray.push(rowJson);
                  }
                }
                
                if (rowArray.length !== 0) {
                    setdataArr.push([headerJson, rowArray]);
                    this.view.segApprovals.widgetDataMap = this.getWidgetDataMap();
                    this.view.segApprovals.setData(setdataArr);
                    this.view.segApprovals.isVisible = true;
                } else {
                    this.view.segApprovals.isVisible = false;
                }
            }
        } catch (er) {
            kony.print(er);
        }
    },
  fetchCounts : function() {
    var presenter = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ACHModule');
    presenter.presentationController.getAllCounts("");
  },
  fetchPendingRequests: function(requestData) {
    var scopeObj = this;
    var navObj = requestData;
    var navManager = applicationManager.getNavigationManager();
    navManager.setCustomInfo("formFlow", "frmApprovalsAndRequestsTitle");
    var approvalsReqModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ApprovalsReqModule");
    approvalsReqModule.presentationController.getPendingRequests(navObj);
  },
  fetchCountRequest: function() {
    try{
      var requestData = {
        "sortByParam": "",
        "sortOrder": "", //createdts
        "searchString": "",
        "pageSize": "",
        "pageOffset": "",
        "filterByParam": "",
        "filterByValue": "",
      };
      this.fetchPendingRequests(requestData);
    }catch(er){
      kony.print(er);
    }
  },
  fetchMyPendingRequestSuccessCallBack: function(response) {
    try {
      kony.print("Entered  view controller fetchMyPendingRequestSuccessCallBack" + JSON.stringify(response));
      this.setDataInSegmentHeading();
    } catch (error) {
      kony.print("Exception in  fetchMyPendingRequestSuccessCallBack-->" + error);
    }
  },
   fetchDataBasedOnPermissions: function() {
            var requestData = {
                "sortByParam": "",
                "sortOrder": "", //createdts
                "searchString": "",
                "pageSize": "",
                "pageOffset": "",
              "filterByParam": "",
              "filterByValue": "",
            };
            this.fetchPendingApprovals(requestData);
        },
  fetchPendingApprovals: function(requestData) {
    var scopeObj = this;
    var navObj = requestData;
    var navManager = applicationManager.getNavigationManager();
    navManager.setCustomInfo("formFlow", "frmApprovalsAndRequestsTitle");
    var approvalsReqModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ApprovalsReqModule");
    approvalsReqModule.presentationController.getPendingApprovals(navObj);
  },
  
  fetchMyPendingApprovalSuccessCallBack: function(response) {
    try {
      kony.print("Entered  view controller fetchMyPendingApprovalSuccessCallBack" + JSON.stringify(response));
      this.setDataInSegmentHeading();
    } catch (error) {
      kony.print("Exception in  fetchMyPendingApprovalSuccessCallBack-->" + error);
    }
  },
});