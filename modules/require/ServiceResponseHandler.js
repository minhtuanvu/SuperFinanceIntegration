/**
*@module ServiceResponseHandler
 */
define([], function() {
  var serverDate = null;
  /**
   * ServiceResponseHandler used to get a proper Success or Error backend response
   *@alias module:ServiceResponseHandler
   *@class
   */
  ServiceResponseHandler = function(){
    /**@member {object} serviceResponseHandler Contains backend response*/
    this.serviceResponseHandler = null;
  };
  ServiceResponseHandler.prototype.validatingResponse = function(response){
      var errcode,resError,res,errMsg;
    var errorMapping = {
      "10000":kony.i18n.getLocalizedString("kony.mb.10000"),
      "10001":kony.i18n.getLocalizedString("kony.mb.10001"),
      "10003":kony.i18n.getLocalizedString("kony.mb.10003"),
      "10008":kony.i18n.getLocalizedString("kony.mb.10008"),
      "10009":kony.i18n.getLocalizedString("kony.mb.10009"),
      "10010":kony.i18n.getLocalizedString("kony.mb.10010"),
      "10011":kony.i18n.getLocalizedString("kony.mb.10011"),
      "10012":kony.i18n.getLocalizedString("kony.mb.10012"),
      "10013":kony.i18n.getLocalizedString("kony.mb.10013"),
      "10014":kony.i18n.getLocalizedString("kony.mb.10014"),
      "10015":kony.i18n.getLocalizedString("kony.mb.10015"),
      "10016":kony.i18n.getLocalizedString("kony.mb.10016"),
      "10017":kony.i18n.getLocalizedString("kony.mb.10017"),
      "10018":kony.i18n.getLocalizedString("kony.mb.10018"),
      "10019":kony.i18n.getLocalizedString("kony.mb.10019"),
      "10022":kony.i18n.getLocalizedString("kony.mb.10022"),
      "10023":kony.i18n.getLocalizedString("kony.mb.10023"),
      "10024":kony.i18n.getLocalizedString("kony.mb.10024"),
      "10026":kony.i18n.getLocalizedString("kony.mb.10026"),
      "10027":kony.i18n.getLocalizedString("kony.mb.10027"),
      "10046":kony.i18n.getLocalizedString("kony.mb.10046"),
      "10047":kony.i18n.getLocalizedString("kony.mb.10047"),
      "10048":kony.i18n.getLocalizedString("kony.mb.10048"),
      "10049":kony.i18n.getLocalizedString("kony.mb.10049"),
      "10050":kony.i18n.getLocalizedString("kony.mb.10050"),
      "10051":kony.i18n.getLocalizedString("kony.mb.10051"),
      "10052":kony.i18n.getLocalizedString("kony.mb.10052"),
      "10053":kony.i18n.getLocalizedString("kony.mb.10053"),
      "10054":kony.i18n.getLocalizedString("kony.mb.10054"),
      "10055":kony.i18n.getLocalizedString("kony.mb.10055"),
      "10057":kony.i18n.getLocalizedString("kony.mb.10057"),
      "10058":kony.i18n.getLocalizedString("kony.mb.10058"),
      "10059":kony.i18n.getLocalizedString("kony.mb.10059"),
      "10060":kony.i18n.getLocalizedString("kony.mb.10060"),
      "10063":kony.i18n.getLocalizedString("kony.mb.10063"),
      "10072":kony.i18n.getLocalizedString("kony.mb.10072"),
      "10073":kony.i18n.getLocalizedString("kony.mb.10073"),
      "10074":kony.i18n.getLocalizedString("kony.mb.10074"),
      "10075":kony.i18n.getLocalizedString("kony.mb.10075"),
      "10083":kony.i18n.getLocalizedString("kony.mb.10083"),
      "10084":kony.i18n.getLocalizedString("kony.mb.10084"),
      "10086":kony.i18n.getLocalizedString("kony.mb.10086"),
      "10087":kony.i18n.getLocalizedString("kony.mb.10087"),
      "10088":kony.i18n.getLocalizedString("kony.mb.10088"),
      "10089":kony.i18n.getLocalizedString("kony.mb.10089"),
      "10090":kony.i18n.getLocalizedString("kony.mb.10090"),
      "10091":kony.i18n.getLocalizedString("kony.mb.10091"),
      "10092":kony.i18n.getLocalizedString("kony.mb.10092"),
      "10093":kony.i18n.getLocalizedString("kony.mb.10093"),
      "10094":kony.i18n.getLocalizedString("kony.mb.10094"),
      "10095":kony.i18n.getLocalizedString("kony.mb.10095"),
      "10096":kony.i18n.getLocalizedString("kony.mb.10096"),
      "10097":kony.i18n.getLocalizedString("kony.mb.10097"),
      "10098":kony.i18n.getLocalizedString("kony.mb.10098"),
      "10117":kony.i18n.getLocalizedString("kony.mb.10117"),
      "10118":kony.i18n.getLocalizedString("kony.mb.10118"),
      "10119":kony.i18n.getLocalizedString("kony.mb.10119"),
      "10135":kony.i18n.getLocalizedString("kony.mb.10135"),
      "10143":kony.i18n.getLocalizedString("kony.mb.10143"),
      "11017":kony.i18n.getLocalizedString("kony.mb.11017"),
      "11018":kony.i18n.getLocalizedString("kony.mb.11018"),
      "11019":kony.i18n.getLocalizedString("kony.mb.11019"),
      "11020":kony.i18n.getLocalizedString("kony.mb.11020"),
      "11021":kony.i18n.getLocalizedString("kony.mb.11021"),
      "11022":kony.i18n.getLocalizedString("kony.mb.11022"),
      "11024":kony.i18n.getLocalizedString("kony.mb.11024"),
      "11025":kony.i18n.getLocalizedString("kony.mb.11025"),
      "11027":kony.i18n.getLocalizedString("kony.mb.11027"),
      "10500":kony.i18n.getLocalizedString("kony.mb.10500"),
      "10501":kony.i18n.getLocalizedString("kony.mb.10501"),
      "10502":kony.i18n.getLocalizedString("kony.mb.10502"),
      "10503":kony.i18n.getLocalizedString("kony.mb.10503"),
      "10504":kony.i18n.getLocalizedString("kony.mb.10504"),
      "10505":kony.i18n.getLocalizedString("kony.mb.10505"),
      "10506":kony.i18n.getLocalizedString("kony.mb.10506"),
      "10507":kony.i18n.getLocalizedString("kony.mb.10507"),
      "10508":kony.i18n.getLocalizedString("kony.mb.10508"),
      "10509":kony.i18n.getLocalizedString("kony.mb.10509"),
      "10510":kony.i18n.getLocalizedString("kony.mb.10510"),
      "10511":kony.i18n.getLocalizedString("kony.mb.10511"),
      "10512":kony.i18n.getLocalizedString("kony.mb.10512"),
      "10513":kony.i18n.getLocalizedString("kony.mb.10513"),
      "10514":kony.i18n.getLocalizedString("kony.mb.10514"),
      "10515":kony.i18n.getLocalizedString("kony.mb.10515"),
      "10516":kony.i18n.getLocalizedString("kony.mb.10516"),
      "10517":kony.i18n.getLocalizedString("kony.mb.10517"),
      "10518":kony.i18n.getLocalizedString("kony.mb.10518"),
      "10519":kony.i18n.getLocalizedString("kony.mb.10519"),
      "10520":kony.i18n.getLocalizedString("kony.mb.10520"),
      "10521":kony.i18n.getLocalizedString("kony.mb.10521"),
      "10522":kony.i18n.getLocalizedString("kony.mb.10522"),
      "10523":kony.i18n.getLocalizedString("kony.mb.10523"),
      "10524":kony.i18n.getLocalizedString("kony.mb.10524"),
      "10525":kony.i18n.getLocalizedString("kony.mb.10525"),
      "10526":kony.i18n.getLocalizedString("kony.mb.10526"),
      "10527":kony.i18n.getLocalizedString("kony.mb.10527"),
      "10528":kony.i18n.getLocalizedString("kony.mb.10528"),
      "10529":kony.i18n.getLocalizedString("kony.mb.10529"),
      "10530":kony.i18n.getLocalizedString("kony.mb.10530"),
      "10531":kony.i18n.getLocalizedString("kony.mb.10531"),
      "10532":kony.i18n.getLocalizedString("kony.mb.10532"),
      "10533":kony.i18n.getLocalizedString("kony.mb.10533"),
      "10534":kony.i18n.getLocalizedString("kony.mb.10534"),
      "10535":kony.i18n.getLocalizedString("kony.mb.10535"),
      "10536":kony.i18n.getLocalizedString("kony.mb.10536"),
      "10537":kony.i18n.getLocalizedString("kony.mb.10537"),
      "10538":kony.i18n.getLocalizedString("kony.mb.10538"),
      "10539":kony.i18n.getLocalizedString("kony.mb.10539"),
      "10540":kony.i18n.getLocalizedString("kony.mb.10540"),
      "10541":kony.i18n.getLocalizedString("kony.mb.10541"),
      "10542":kony.i18n.getLocalizedString("kony.mb.10542"),
      "10543":kony.i18n.getLocalizedString("kony.mb.10543"),
      "10544":kony.i18n.getLocalizedString("kony.mb.10544"),
      "10545":kony.i18n.getLocalizedString("kony.mb.10545"),
      "10546":kony.i18n.getLocalizedString("kony.mb.10546"),
      "10547":kony.i18n.getLocalizedString("kony.mb.10547"),
      "10548":kony.i18n.getLocalizedString("kony.mb.10548"),
      "10549":kony.i18n.getLocalizedString("kony.mb.10549"),
      "10550":kony.i18n.getLocalizedString("kony.mb.10550"),
      "10551":kony.i18n.getLocalizedString("kony.mb.10551"),
      "10552":kony.i18n.getLocalizedString("kony.mb.10552"),
      "10553":kony.i18n.getLocalizedString("kony.mb.10553"),
      "10554":kony.i18n.getLocalizedString("kony.mb.10554"),
      "10610":kony.i18n.getLocalizedString("kony.mb.10610"),
      "10611":kony.i18n.getLocalizedString("kony.mb.10611"),
      "10612":kony.i18n.getLocalizedString("kony.mb.10612"),
      "10613":kony.i18n.getLocalizedString("kony.mb.10613"),
      "10614":kony.i18n.getLocalizedString("kony.mb.10614"),
      "10615":kony.i18n.getLocalizedString("kony.mb.10615"),
      "10616":kony.i18n.getLocalizedString("kony.mb.10616"),
      "10617":kony.i18n.getLocalizedString("kony.mb.10617"),
      "10618":kony.i18n.getLocalizedString("kony.mb.10618"),
      "10619":kony.i18n.getLocalizedString("kony.mb.10619"),
      "10620":kony.i18n.getLocalizedString("kony.mb.10620"),
      "10621":kony.i18n.getLocalizedString("kony.mb.10621"),
      "10622":kony.i18n.getLocalizedString("kony.mb.10622"),
      "10623":kony.i18n.getLocalizedString("kony.mb.10623"),
      "10624":kony.i18n.getLocalizedString("kony.mb.10624"),
      "10625":kony.i18n.getLocalizedString("kony.mb.10625"),
      "10626":kony.i18n.getLocalizedString("kony.mb.10626"),
      "10701":kony.i18n.getLocalizedString("kony.mb.10701"),
      "20049":kony.i18n.getLocalizedString("i18n.common.errorCodes.20049"),
    };
        if(response.hasOwnProperty("errcode") || response.hasOwnProperty("dbpErrCode")){
         errcode = response.errcode?response.errcode:response.dbpErrCode;
         if(errorMapping[errcode] !== undefined)
        	 resError = {"errorMessage":errorMapping[errcode],"isServerUnreachable":false,"serverErrorRes":response};
         else{
           if(response.errmsg){
            errMsg = response.errmsg;
          }
          else if(response.dbpErrMsg)
          	errMsg = response.dbpErrMsg;
		  else{
            errMsg = kony.i18n.getLocalizedString("kony.mb.An.error.occurred.while.making.the.request.");
          }
             resError = {"errorMessage":errMsg,"isServerUnreachable":false,"serverErrorRes":response};
         }
         res = {"status":false,"errmsg":resError};
        }
       else
         res = {"status":true,"data":response};
      return res;
  };
   ServiceResponseHandler.prototype.manageLoginResponse = function(response){
    var resError,res;
     //opstatus 1023 is introduced because of connection timeout during network call
    if (response.opstatus == 1011 || response.opstatus == 1023)
    {
        if(kony.os.deviceInfo().name === "thinclient" && kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)===false)
          location.reload(); //todo later so that it can be in sync with RB
        else{
          isServiceFailure = true;
          if(response.errmsg){
            errMsg = response.errmsg;
          }
          else if(response.dbpErrMsg)
          	errMsg = response.dbpErrMsg;
          else{
            errMsg = kony.i18n.getLocalizedString("kony.mb.An.error.occurred.while.making.the.request.");
          }
        }
       resError={"errorMessage":errMsg,"isServerUnreachable":isServiceFailure,"serverErrorRes":response};
       res={"status":false,"errmsg":resError};
    }
    else
    {
	    if(response && response.details && response.details.errcode == 0){
            errMsg = kony.i18n.getLocalizedString("i18n.common.OoopsServerError");
            resError={"errorMessage":errMsg,"isServerUnreachable":false,"serverErrorRes":response};
            res={"status":false,"errmsg":resError};
        }
        else{
            res = this.validatingResponse(response.details);
        }
    }
    return res;
   };
  /**
   * ManageResponse method is used to format the backend reponse based on the success and error
   * @param {string} status , which contains kony.mvc.constants of success or error
   * @param {object} response , if status is success the response consists of success response of that service call
   * @param {object} error , if status is error the error consists of error response of that service call
   * @return {object} res, returns entire reponse of manageResponse based on the success or error
   */
  ServiceResponseHandler.prototype.manageResponse = function(status,  response,  error){
    /**@member {object} res Contains formatted backend response*/
    var res;
    if(status == kony.mvc.constants.STATUS_SUCCESS){
      kony.print("response:"+JSON.stringify(response));
      try {
        serverDate = kony.sdk.isNullOrUndefined(response.httpresponse.headers.date) ? serverDate : response.httpresponse.headers.date ;
      }
      catch (err2) { }
      res = this.validatingResponse(response);
    }
    else{
      //opstatus 1023 is introduced because of connection timeout during network call
      if (error.opstatus == 1011 || error.errcode == 1011 || error.opstatus == 1023 || error.errcode == 1023)
      {
        if(kony.os.deviceInfo().name === "thinclient" && kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)===false){
          location.reload(); //todo later so that it can be in sync with RB
        }
        else{
          isServiceFailure = true;
          if(error.errmsg){
            errMsg = error.errmsg;
          }
          else if(error.dbpErrMsg)
          	errMsg = error.dbpErrMsg;
          else{
            errMsg = kony.i18n.getLocalizedString("kony.mb.An.error.occurred.while.making.the.request.");
          }
        }
      }
      else
      {
        isServiceFailure = false;
        if(error.errmsg)
          errMsg = error.errmsg;
        else if(error.dbpErrMsg)
          errMsg = error.dbpErrMsg;
        else
          errMsg = kony.i18n.getLocalizedString("kony.mb.An.Internal.Error.occured.Please.try.after.sometime.");
      }
      resError={"errorMessage":errMsg,"isServerUnreachable":isServiceFailure,"serverErrorRes":error};
      res={"status":false,"errmsg":resError};
    }
    return res;
  };

  ServiceResponseHandler.prototype.getServerDate = function() {
    return serverDate;
  };
  
  return ServiceResponseHandler;
});
