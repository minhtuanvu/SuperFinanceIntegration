define({
  base64: null,
  fileNames: [],
	  fileIds:[],
  fileContents: [],
  requestPayload: {},
  fileTypes: [],
  fileNamePrefix:'Attachment',
  importNativeClasses: null,
  vctrl:null,
  init : function(){
    var FormValidator = require("FormValidatorManager")
	this.fv = new FormValidator(2);
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    var MessageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    MessageModule.presentationController.clearMessageAndRequestId();
  },
  frmNewMessagePreShow : function(){
    var FormValidator = require("FormValidatorManager")
	this.fv = new FormValidator(2);
    this.setPreShowData();
    this.setFlowActions();
    this.clearFieldsInForm();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  enableContinueButton:function(){
    this.view.btnSend.setEnabled(true);
    this.view.btnSend.skin = "sknBtn0095e426pxEnabled";
  },
  disableContinueButton: function() {
    this.view.btnSend.setEnabled(false);
    this.view.btnSend.skin = "sknBtnOnBoardingInactive";
  },
  
  setPreShowData : function(){
    this.base64=null;
    this.fileNames=[];
 		   this.fileIds=[];
    this.fileContents= [];
    this.requestPayload= {};
    this.fileTypes=[];
    var navManager = applicationManager.getNavigationManager();
    this.fv.submissionView(this.view.btnSend);
    this.view.customHeader.flxSearch.isVisible = false;
    this.view.customHeader.btnRight.text = kony.i18n.getLocalizedString("kony.mb.common.Cancel");
    this.view.customHeader.btnRight.isVisible = true;
    this.view.flxPopupAttachment.setVisibility(false);
    var data=navManager.getCustomInfo("frmNewMessage1");
    this.view.lblCategoryVal.text=data;
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
      this.view.flxNewMessageMain.top = "60dp";
    }
    else{
      this.view.flxHeader.isVisible = false;
      this.view.flxNewMessageMain.top = "0dp";
    }
    this.view.flxAttachFile.setVisibility(true);
    this.view.segAttachments.setVisibility(false);
  },
 
   postShow: function(){
						    var MessageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    MessageModule.presentationController.clearMessageAndRequestId();
    this.view.flxAttachFile.onClick = this.showFileSelectionOption ;
	    this.hideFileSelectionOption();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
     
    this.view.lblCategoryVal.onTouchEnd = this.onCategoryClick;
    this.view.btnPhoto.onClick = this.fileSelectionFromGallery;
    this.view.btnDocument.onClick = this.selectDocuments;
    this.view.btnClose.onClick = this.hideFileSelectionOption;
    this.view.Camera.onCapture = this.openCamera;
    this.view.lblAttachmentError.text = "";
    this.view.lblTitle.text = "";

    this.view.flxAttachFile.setVisibility(true);
    var optional = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Europe.AttachmentsOptional");
    this.view.flxTitleWrapper.isVisible = false;
    this.view.lblTitle.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Europe.Attachments")+" ("+optional+")";
       this.view.segAttachments.setData([]);
       this.fileNames=[];
       this.fileIds=[];
//     this.view.btnSend.onClick = this.sendfunctionname;
  },
  onCategoryClick : function(){
      var navManager = applicationManager.getNavigationManager();
      navManager.navigateTo("frmNewMessageCategory");
//       var messagesMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
//       messagesMod.presentationController.commonFunctionForNavigation("frmNewMessageCategory");
  },
  openCamera: function () {
    var scopeObj=this;
    applicationManager.getPresentationUtility().showLoadingScreen();
    this.hideFileSelectionOption();
    var rawBytes = this.view.Camera.rawBytes;
    var configManager = applicationManager.getConfigurationManager();
    var maxFileSize =  configManager.maxFileSizeAllowed;
    var fileType = "jpeg";
    if (rawBytes) {
      var imgObject = kony.image.createImage(rawBytes);
      var base64 = "";
      var fileName = this.fileNamePrefix+(this.fileNames.length+1)+".jpeg";
      var fileSize = "";
      base64 = kony.convertToBase64(rawBytes);
      fileSize=((base64.length*0.75 )/1024);
      var file={};
      var fileContent={};
      // for(var scaleLabel=1;scaleLabel>0;){
      //   var rawBytesTemp = rawBytes;
      //   imgObject=kony.image.createImage(rawBytesTemp);
      //   imgObject.scale(scaleLabel);
      //   var tempRawBytes= imgObject.getImageAsRawBytes();
      //   base64 = kony.convertToBase64(tempRawBytes);
      //   fileSize=((base64.length*0.75 )/1024);
      //   if(fileSize<=maxFileSize*1000){
      //     break;
      //   }
      //  scaleLabel= scaleLabel-0.25;
      // }
      if(fileSize > maxFileSize*1000){
        var scaleLabel= (maxFileSize*1000)/(fileSize+1);
        imgObject.scale(scaleLabel);
        var tempRawBytes= imgObject.getImageAsRawBytes();
        base64 = kony.convertToBase64(tempRawBytes);
      }
        //this.fileContents.push(base64);
        this.fileNames.push(fileName);
        this.fileTypes.push(fileType);
        // this.setAttachmentsDataToSegment();
        fileContent["base64"] = base64;
        file["size"] = fileSize;
        file["name"] = fileName;
        fileContent["file"]=file;
        this.fileContents.push(fileContent);
      	this.disableContinueButton();
        var MessageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
        MessageModule.presentationController.uploadMedia(fileContent,requestId,scopeObj.setAttachmentsDataToSegment.bind(scopeObj),scopeObj.uploadMediaFailureCallback.bind(scopeObj),this.fileContents.length-1);

        // var selectedFile = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Europe.AttachmentTypeErrorMsg1");
        // var sizeError = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Europe.AttachmentSizeErrorMsg")+maxFileSize+"mb.";
        // this.view.lblAttachmentError.text = selectedFile+" "+fileName+" "+sizeError;
        // this.view.flxAttachmentsError.setVisibility(true);
//          applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
  },
  fileSelectionFromGallery: function () {
    var queryContext = {
      mimetype:"image/*"
    };
    try {
      kony.phone.openMediaGallery(this.fileSelectionCallback.bind(this),queryContext);
    } catch (error) {
      this.handleError(error);
    }
  },
  
  selectDocuments: function () {
    var scope=this;
    if (kony.os.deviceInfo().name === "iPhone") {
      scope.uploadIphoneDocument();
    } else {
      var queryContext = {
        mimetype: "application/*",
      };
      try {
        kony.phone.openMediaGallery(this.fileSelectionCallback.bind(this), queryContext);
      } catch (error) {
        this.handleError(error);
      }
    }
  },

  uploadIphoneDocument: function() {
    var scope=this;
    kony.runOnMainThread(mainthread, []);
    function mainthread () {
      if(scope.importNativeClasses===null){
        scope.importNativeClasses=scope.initializeNativeImport();
      }
      scope.importNativeClasses.UIApplication.sharedApplication().keyWindow.rootViewController.presentViewControllerAnimatedCompletion(scope.importNativeClasses.pv, true, {});
    }
  },

  initializeNativeImport: function(){
    var scope=this;
    var nativeClasses={};
    nativeClasses.UIDocumentPickerViewController = objc.import("UIDocumentPickerViewController");
    nativeClasses.UIViewController = objc.import("UIViewController");
    nativeClasses.UIApplication = objc.import("UIApplication");
    nativeClasses.NSData  = objc.import("NSData"); 
    nativeClasses.ViewController = objc.newClass('ViewController'+Math.random(), 'UIViewController', ['UIDocumentPickerDelegate'], {
      documentPickerDidPickDocumentsAtURLs: function(controller, urls) {
        kony.print("Callback called");
        if (urls.length > 0) {
          var nsurl = urls[0];
          var fileName = nsurl.lastPathComponent;
          var fileType = nsurl.pathExtension;
          var fileData = nativeClasses.NSData.dataWithContentsOfURL(nsurl);
          var base64 = fileData.base64Encoding();
          var fileObject = {};
          fileObject.base64 = base64;
          fileObject.fileName = fileName;
          fileObject.fileType = fileType;
          fileObject.fileSize = (base64.length * 0.75) / 1024;
          scope.uploadNativeFile(fileObject);
        }
      },
    });
    if(this.vctrl === null){
      this.vctrl = nativeClasses.ViewController.alloc().jsinit();
    }
    nativeClasses.pv = nativeClasses.UIDocumentPickerViewController.alloc().initWithDocumentTypesInMode(["com.adobe.pdf","com.microsoft.word.doc"], UIDocumentPickerModeImport);
    nativeClasses.pv.delegate = this.vctrl;
    kony.print("end");
    return nativeClasses;
  },

  uploadNativeFile: function (documentObject) {
    var scopeObj = this;
    scopeObj.hideFileSelectionOption();
    var file = {};
    var fileContent = {};
    var base64 = documentObject.base64;
    var fileSize = documentObject.fileSize;
    var fileName = documentObject.fileName;
    var fileType = documentObject.fileType;
    var configManager = applicationManager.getConfigurationManager();
    var maxFileSize = configManager.maxFileSizeAllowed;
    if (base64 !== null && base64 !== undefined && base64 !== "") {
      //alert("Base 64 is not empty");
      if (fileSize > maxFileSize * 1000) {
        scopeObj.view.lblAttachmentError.text = "error";
        scopeObj.view.flxAttachmentsError.setVisibility(true);
        scopeObj.view.lblAttachmentError.setVisibility(true);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
      } else {
        scopeObj.fileNames.push(fileName);
        scopeObj.fileTypes.push(fileType);
        fileContent["base64"] = base64;
        file["size"] = fileSize;
        file["name"] = fileName;
        fileContent["file"] = file;
        scopeObj.fileContents.push(fileContent);
        // alert(fileContent);
        //alert("uploadMedia Triggered");
        var requestid="";
        var MessageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
        MessageModule.presentationController.uploadMedia(
          fileContent,
          requestid,
          scopeObj.setAttachmentsDataToSegment.bind(scopeObj),
          scopeObj.uploadMediaFailureCallback.bind(scopeObj),
          scopeObj.fileContents.length - 1
        );
      }
    }
  },

  
  fileSelectionCallback: function (rawBytes, permissionStatus, mimeType) {
    var scopeObj=this
    this.hideFileSelectionOption();
    var fileMimeType;
    if(kony.os.deviceInfo().name === "iPhone"){
      mimeType="image/jpeg";
    }
    if(mimeType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
      fileMimeType="docx";
    }else if(mimeType === "application/msword"){
      fileMimeType="doc";
    }else{
      fileMimeType = mimeType.substring(mimeType.lastIndexOf("/")+1);
    }
    
    var fileName = this.fileNamePrefix+(this.fileNames.length+1)+"."+fileMimeType;
    var configManager = applicationManager.getConfigurationManager();
    var maxFileSize =  configManager.maxFileSizeAllowed;
    
    var selectedFile = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Europe.AttachmentTypeErrorMsg1");
    var typeError = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Attachment.Error");
    var sizeError = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Europe.AttachmentSizeErrorMsg")+maxFileSize+"mb.";    
    var validFilesTypesToUpload=["application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","image/png","image/jpeg","application/pdf"]
    var isThisMimeTypeAllowed=validFilesTypesToUpload.includes(mimeType)
    if(!isThisMimeTypeAllowed)
    {
      this.view.lblAttachmentError.text = selectedFile+" "+fileName+" "+typeError;
      this.view.flxAttachmentsError.setVisibility(true);
      this.view.lblAttachmentError.setVisibility(true);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }else{
      if (rawBytes !== null) {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var base64 = kony.convertToBase64(rawBytes);
        var file={};
        var fileContent={};
        if ( base64 !== null && base64 !== undefined && base64 !== "") {
          var fileSize = ((base64.length*0.75 )/1024);
          if(fileSize > (maxFileSize*1000)){
            this.view.lblAttachmentError.text = selectedFile+" "+fileName+" "+sizeError;
            this.view.flxAttachmentsError.setVisibility(true);
            this.view.lblAttachmentError.setVisibility(true);
            applicationManager.getPresentationUtility().dismissLoadingScreen();
          }else {
            this.fileNames.push(fileName);
            //var navMan = applicationManager.getNavigationManager();
            //navMan.setCustomInfo("frmNewMessage", this.fileNames);
            //this.fileContents.push(base64);
            this.fileTypes.push(fileMimeType);
            //this.setAttachmentsDataToSegment();
            fileContent["base64"] = base64;
            file["size"] = fileSize;
            file["name"] = fileName;
            fileContent["file"]=file;
            this.fileContents.push(fileContent);
			this.disableContinueButton();
            var MessageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
            MessageModule.presentationController.uploadMedia(fileContent,requestId,scopeObj.setAttachmentsDataToSegment.bind(scopeObj),scopeObj.uploadMediaFailureCallback.bind(scopeObj),this.fileContents.length-1);
          }
        } 
      }
      applicationManager.getPresentationUtility().dismissLoadingScreen();
   }
  },
  
  uploadMediaFailureCallback:function(index){
    this.checkMessageSubject();
    this.checkMessageDescription();
    this.fileNames.splice(index, 1);
    this.fileIds.splice(index,1);
    this.fileContents.splice(index, 1);
    this.fileTypes.splice(index, 1);
  },
  
  setAttachmentsDataToSegment: function(id){
    this.checkMessageSubject();
    this.checkMessageDescription();
    this.view.segAttachments.setVisibility(true);
    var configManager = applicationManager.getConfigurationManager();
    var maxAttachmentsAllowed =  configManager.maxAttachmentsAllowed;
    var attachmentsData = [];
    for (var i = 0; i < this.fileNames.length; i++) {
      attachmentsData[i] = {};
      attachmentsData[i].filename = this.fileNames[i];
		      if((i==this.fileNames.length-1) && (id != undefined)){
          this.fileIds[i]=id;
          attachmentsData[i].lblAttachmentId=id;
      }else{
          attachmentsData[i].lblAttachmentId= this.fileIds[i];
      }
      attachmentsData[i]["imgRemoveAttachment"] = {
        "src": "closecircle.png",
        "height":"15dp",
        "width":"15dp"
      };
       if(this.fileTypes[i] === "doc"){
          attachmentsData[i]["imgAttachment"] = {
        	"src": "doc_image.png"
     	 }
        } else if(this.fileTypes[i] === "pdf"){
          attachmentsData[i]["imgAttachment"] = {
        	"src": "pdf_image.png"
     	 }
        }else if(this.fileTypes[i] === "docx"){
          attachmentsData[i]["imgAttachment"] = {
        	"src": "docx_image.png"
     	 }
        }else if(this.fileTypes[i] === "jpeg"){
          attachmentsData[i]["imgAttachment"] = {
        	"src": "jpeg_image.png"
     	 }
        }else if(this.fileTypes[i] === "png"){
          attachmentsData[i]["imgAttachment"] = {
        	"src": "png_image.png"
     	 }
        }
    }
    this.view.segAttachments.widgetDataMap = {
      "lblAttachment": "filename",
      "imgRemoveAttachment": "imgRemoveAttachment",
      "imgAttachment":"imgAttachment",
      "lblAttachmentId":"lblAttachmentId"
    };
    this.view.segAttachments.setData(attachmentsData);
    var configManager = applicationManager.getConfigurationManager();
    var maxAttachmentsAllowed =  configManager.maxAttachmentsAllowed;
    
     
    if (this.fileNames.length === 0){
      this.view.flxTitleWrapper.isVisible = false;
      this.view.lblTitle.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Europe.Attachments")+" ("+applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Europe.AttachmentsOptional")+")";
    }
   if (this.fileNames.length >= maxAttachmentsAllowed) {
     this.view.flxTitleWrapper.isVisible = true;
      this.view.flxAttachFile.setVisibility(false);
     this.view.lblTitle.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Europe.Attachments")+" ("+this.fileNames.length+"/"+maxAttachmentsAllowed+")";
     applicationManager.getPresentationUtility().dismissLoadingScreen();
    } else{
      this.view.flxAttachFile.setVisibility(true);
       if (this.fileNames.length === 0){
         this.view.flxTitleWrapper.isVisible = false;
       }
      else{
        this.view.flxTitleWrapper.isVisible = true;
        this.view.lblTitle.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Europe.Attachments")+" ("+this.fileNames.length+"/"+maxAttachmentsAllowed+")";
      }
    }
    this.hideFileSelectionOption();
   	//this.constructFileInput();
    this.view.lblAttachmentError.text = "";
    this.view.lblAttachmentError.setVisibility(false);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
    showFileSelectionOption: function () {
    this.view.flxActions.setVisibility(true);
  },

  hideFileSelectionOption: function () {
    this.view.flxActions.setVisibility(false);
  },
  
  
  removeAttachments: function(file){
    var scope=this;
    for (var i = 0; i < this.fileNames.length; i++) {
      if (this.fileNames[i] === file.filename) {
        this.fileNames.splice(i, 1);
        this.fileContents.splice(i, 1);
        this.fileTypes.splice(i, 1);
 	       this.fileIds.splice(i, 1);
        break;
      }
    }
    this.disableContinueButton();
    var MessageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    MessageModule.presentationController.discardMessageAttachment(file.lblAttachmentId,scope.enableContinueButton.bind(scope));
    this.constructFileInput();
    this.setAttachmentsDataToSegment();
  },
  
  constructFileInput: function(){
    var uploadattachments = [];
    for(var i=0;i< this.fileNames.length; i++){
      var fileInputs = "";
      fileInputs = this.fileNames[i]+'-'+this.fileTypes[i]+'-'+this.fileContents[i];
      uploadattachments.push(fileInputs);
    }
    this.requestPayload = uploadattachments.toString();
  },
  
  handleError: function(error){
    this.view.lblAttachmentError.text = error;
    this.view.flxAttachmentsError.setVisibility(true);
    this.view.lblAttachmentError.setVisibility(true);
  },
  
  clearFieldsInForm : function(){
    this.view.tbxSubject.text = "";
    this.view.txtareaDescription.text = "";
  },
  setFlowActions : function(){
    this.view.customHeader.flxBack.onClick = this.goBack;
    this.view.customHeader.btnRight.onClick = this.onCancel;
    this.view.btnSend.onClick = this.onSend;
    this.view.tbxSubject.onTextChange = this.checkMessageSubject;
    //this.view.segAttachments.onRowClick=this.attachPDF;
    this.view.txtareaDescription.onTextChange = this.checkMessageDescription;
    //     this.view.flxAttachFile.onClick = function(){
    //       scopeObj.showattachmentpopup();
    //     };
    //     this.view.btnTakeAPicture.onClick = function(){
    //       scopeObj.openCamera();
    //     };
    //     this.view.btnChooseFromDevice.onClick = function(){
    //       scopeObj.openDocs();
    //     };
  },
  checkMessageSubject : function(){
    var text = this.view.tbxSubject.text;
    this.fv.checkAndUpdateStatusForNull(0, text.trim());
  },
  checkMessageDescription : function(){
    var text = this.view.txtareaDescription.text;
    this.fv.checkAndUpdateStatusForNull(1, text.trim());
  },
  goBack : function(){
		    var MessageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    MessageModule.presentationController.clearMessageAndRequestId();
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },
  navToMessages : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var MessageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    if(MessageModule.presentationController.messageTabSelected === "INBOX")
    {
      MessageModule.presentationController.getInboxRequests();
    }
    else if(MessageModule.presentationController.messageTabSelected === "DELETED")
    {
      MessageModule.presentationController.getDeleteRequests();
    }
    else if (MessageModule.presentationController.messageTabSelected !== "INBOX" && MessageModule.presentationController.messageTabSelected !== "DELETED"){
      var navManager = applicationManager.getNavigationManager();
      var isBusinessUserFlow = navManager.getCustomInfo("isBusinessUserFlow");
      if(isBusinessUserFlow){
        navManager.navigateTo("frmAccountInfoNew");
      }
      else{
        var entryPoint =  navManager.getEntryPoint("messageCategory");
        navManager.navigateTo(entryPoint);
      }
    }
  },
  onCancel : function(){
    var msgText = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Messages.CancelNewMessageAlert");
    var basicConfig = {message: msgText,alertIcon:null,alertType: constants.ALERT_TYPE_CONFIRMATION,yesLabel:applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
                       noLabel: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"), alertHandler: this.onConfirmCancel
                      };
    var pspConfig = {};
    applicationManager.getPresentationUtility().showAlertMessage(basicConfig, pspConfig);
  },
  onConfirmCancel : function(response){
    if(response === true)
    {
		      var MessageModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
      MessageModule.presentationController.clearMessageAndRequestId();
      this.navToMessages();
    }
  },
  onSend : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var selectedCategoryId = navManager.getCustomInfo("frmNewMessage");
    var description = this.view.txtareaDescription.text.replace(/\</g,"&lt;").replace(/\>/g,"&gt;");
    var data = {
      "files": this.fileContents,
      "requestsubject" :this.view.tbxSubject.text,
      "messagedescription" : Base64.encode(encodeURI(description)),
      "requestcategory_id" : selectedCategoryId,
      "isNativeApplication":true
    };
    var messagesMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("MessagesModule");
    messagesMod.presentationController.createNewMessage(data);
  },
   bindGenericError: function (errorMsg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var scopeObj = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  },
 
  //   showattachmentpopup : function(){
  //     this.view.flxPopupAttachment.setVisibility(true);
  //   },
  //   openCamera : function(){
  //     this.view.flxPopupAttachment.setVisibility(false);
  //     var rawBytes = this.view.camera.rawBytes;
  //     var imageObject=kony.image.createImage(rawBytes);
  //     imageObject.scale(0.5);
  //     imageObject.compress(0.5);
  //     var rawBytesAfterCompression=imageObject.getImageAsRawBytes();
  //     base64Image=kony.convertToBase64(rawBytesAfterCompression);
  //     this.setCameraThumbNailImage();
  //     // Release image from memory
  //     base64Image=null;
  //     this.view.camera.releaseRawBytes();
  //   },
  //   openDocs : function(){
  //     this.view.flxPopupAttachment.setVisibility(false);
  //   },
});