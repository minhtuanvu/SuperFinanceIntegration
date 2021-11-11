function segregateFeatureData(data) {
	var MONETARY = [];
	var NON_MONETARY = [];
  	var IsAccountLevel =[];
  	var IsNotAccountLevel =[];

	data.forEach(function(element) {
		var featureData = {
			"featureName": element.featureName,
			"featureID": element.featureId,
			"featureDescription": element.featureDescription,
			"isSelected": true,
			"Actions": []
		};
		var clonedFeatureData = cloneJSON(featureData);
        var accountLevelFeatureData = cloneJSON(featureData);
        var notAccountLevelFeatureData = cloneJSON(featureData);

		element["Actions"].forEach(function(elementx) {
			var actionData = {
				"actionType": elementx.actionType,
				"actionId": elementx.actionId,
				"actionDescription": elementx.actionDescription,
				"actionName": elementx.actionName,
               "isAccountLevel" :elementx.isAccountLevel,
				"isSelected": true
			};

			if (elementx["actionType"] === "NON_MONETARY") {
				var i = findinJSON(NON_MONETARY, featureData.featureID, "featureID");
				if (i === -1) {
					NON_MONETARY.push(featureData);
					i = NON_MONETARY.length - 1;
				}
				if (NON_MONETARY[i]["Actions"].length === 0) {
					NON_MONETARY[i]["Actions"].push(actionData);
				} else {
					var clonedActionData_NON_MONETARY = cloneJSON(NON_MONETARY[i]["Actions"]);
					clonedActionData_NON_MONETARY.push(cloneJSON(actionData));
					NON_MONETARY[i]["Actions"] = clonedActionData_NON_MONETARY;
				}
            } 
          
           if(JSON.parse(elementx["isAccountLevel"]) === false){
				var i = findinJSON(IsNotAccountLevel, notAccountLevelFeatureData.featureID, "featureID");
				if (i === -1) {
					IsNotAccountLevel.push(notAccountLevelFeatureData);
					i = IsNotAccountLevel.length - 1;
				}
				if (IsNotAccountLevel[i]["Actions"].length === 0) {
					IsNotAccountLevel[i]["Actions"].push(actionData);
				} else {
					var clonedActionData_IsNotAccountLevel = cloneJSON(IsNotAccountLevel[i]["Actions"]);
					clonedActionData_IsNotAccountLevel.push(cloneJSON(actionData));
					IsNotAccountLevel[i]["Actions"] = clonedActionData_IsNotAccountLevel;
				}
			}
			
			if(JSON.parse(elementx["isAccountLevel"]) === true){
				if(!kony.sdk.isNullOrUndefined(elementx["Limits"])) {
                elementx["Limits"].forEach(function(elementxx){
                  actionData[elementxx["id"]] = kony.sdk.isNullOrUndefined(elementxx["value"])?0 : JSON.parse(elementxx["value"]);
                });
                if(!(kony.sdk.isNullOrUndefined(actionData["MAX_TRANSACTION_LIMIT"])) && !(kony.sdk.isNullOrUndefined(actionData["DAILY_LIMIT"])) && !(kony.sdk.isNullOrUndefined(actionData["WEEKLY_LIMIT"]))){
                  if(kony.sdk.isNullOrUndefined(actionData["PER_TRANSACTION_APPROVE_LIMIT"])){
                    actionData["PER_TRANSACTION_APPROVE_LIMIT"] = 0;
                  }
                  if(kony.sdk.isNullOrUndefined(actionData["DAILY_APPROVE_LIMIT"])){
                    actionData["DAILY_APPROVE_LIMIT"] = 0;
                  }
                  if(kony.sdk.isNullOrUndefined(actionData["WEEKLY_APPROVE_LIMIT"])){
                    actionData["WEEKLY_APPROVE_LIMIT"] = 0;
                  }
                  if(kony.sdk.isNullOrUndefined(actionData["PER_TRANSACTION_DENIAL_LIMIT"])){
                    actionData["PER_TRANSACTION_DENIAL_LIMIT"] = cloneJSON(actionData["MAX_TRANSACTION_LIMIT"]);
                  }
                  if(kony.sdk.isNullOrUndefined(actionData["DAILY_DENIAL_LIMIT"])){
                    actionData["DAILY_DENIAL_LIMIT"] = cloneJSON(actionData["DAILY_LIMIT"]);
                  }
                  if(kony.sdk.isNullOrUndefined(actionData["WEEKLY_DENIAL_LIMIT"])){
                    actionData["WEEKLY_DENIAL_LIMIT"] = cloneJSON(actionData["WEEKLY_LIMIT"]);
                  }

 

                  var j = findinJSON(IsAccountLevel, accountLevelFeatureData.featureID, "featureID");
                  if (j === -1) {
                    IsAccountLevel.push(accountLevelFeatureData);
                    j = IsAccountLevel.length - 1;
                  }
                  if (IsAccountLevel[j]["Actions"].length == 0) {
                    IsAccountLevel[j]["Actions"].push(actionData);
                  } else {
                    var clonedActionData_IsAccountLevel = cloneJSON(IsAccountLevel[j]["Actions"]);
                    clonedActionData_IsAccountLevel.push(cloneJSON(actionData));
                    IsAccountLevel[j]["Actions"] = clonedActionData_IsAccountLevel;
                  }
                }
              }
              else{
              var i = findinJSON(IsAccountLevel, accountLevelFeatureData.featureID, "featureID");
                if (i === -1) {
                    IsAccountLevel.push(accountLevelFeatureData);
                    i = IsAccountLevel.length - 1;
                }
                if (IsAccountLevel[i]["Actions"].length === 0) {
                    IsAccountLevel[i]["Actions"].push(actionData);
                } else {
                    var clonedActionData_IsAccountLevel = cloneJSON(IsAccountLevel[i]["Actions"]);
                    clonedActionData_IsAccountLevel.push(cloneJSON(actionData));
                    IsAccountLevel[i]["Actions"] = clonedActionData_IsAccountLevel;
                }
              }
			}
          
           if (elementx["actionType"] === "MONETARY") {
              if(!kony.sdk.isNullOrUndefined(elementx["Limits"])) {
                elementx["Limits"].forEach(function(elementxx){
                  actionData[elementxx["id"]] = kony.sdk.isNullOrUndefined(elementxx["value"])?0 : JSON.parse(elementxx["value"]);
                });
                if(!(kony.sdk.isNullOrUndefined(actionData["MAX_TRANSACTION_LIMIT"])) && !(kony.sdk.isNullOrUndefined(actionData["DAILY_LIMIT"])) && !(kony.sdk.isNullOrUndefined(actionData["WEEKLY_LIMIT"]))){
                  if(kony.sdk.isNullOrUndefined(actionData["PER_TRANSACTION_APPROVE_LIMIT"])){
                    actionData["PER_TRANSACTION_APPROVE_LIMIT"] = 0;
                  }
                  if(kony.sdk.isNullOrUndefined(actionData["DAILY_APPROVE_LIMIT"])){
                    actionData["DAILY_APPROVE_LIMIT"] = 0;
                  }
                  if(kony.sdk.isNullOrUndefined(actionData["WEEKLY_APPROVE_LIMIT"])){
                    actionData["WEEKLY_APPROVE_LIMIT"] = 0;
                  }
                  if(kony.sdk.isNullOrUndefined(actionData["PER_TRANSACTION_DENIAL_LIMIT"])){
                    actionData["PER_TRANSACTION_DENIAL_LIMIT"] = cloneJSON(actionData["MAX_TRANSACTION_LIMIT"]);
                  }
                  if(kony.sdk.isNullOrUndefined(actionData["DAILY_DENIAL_LIMIT"])){
                    actionData["DAILY_DENIAL_LIMIT"] = cloneJSON(actionData["DAILY_LIMIT"]);
                  }
                  if(kony.sdk.isNullOrUndefined(actionData["WEEKLY_DENIAL_LIMIT"])){
                    actionData["WEEKLY_DENIAL_LIMIT"] = cloneJSON(actionData["WEEKLY_LIMIT"]);
                  }

                  var j = findinJSON(MONETARY, clonedFeatureData.featureID, "featureID");
                  if (j === -1) {
                    MONETARY.push(clonedFeatureData);
                    j = MONETARY.length - 1;
                  }
                  if (MONETARY[j]["Actions"].length == 0) {
                    MONETARY[j]["Actions"].push(actionData);
                  } else {
                    var clonedActionData_MONETARY = cloneJSON(MONETARY[j]["Actions"]);
                    clonedActionData_MONETARY.push(cloneJSON(actionData));
                    MONETARY[j]["Actions"] = clonedActionData_MONETARY;
                  }
                }
              }
            }
        });
    });
	var res = {
		"MONETARY": MONETARY,
		"NON_MONETARY": NON_MONETARY,
        "IsNotAccountLevel": IsNotAccountLevel,
		"IsAccountLevel" :IsAccountLevel
	};
	return res;
}

//Segregates the data from getOrgEmployeedetails service call.
function segregateFeatureDataForManageUser(data) {
	var accountData = cloneJSON(data["accounts"]);
	var actionlimits = cloneJSON(data["customerActionLimits"]);
	var userDataStore= cloneJSON(data["defaultLimitsForSelectedRole"]);

	if(!(kony.sdk.isNullOrUndefined(userDataStore["IsAccountLevel"])) && !(kony.sdk.isNullOrUndefined(actionlimits))){
		//adding the defaults limits if they are not coming from backend in getOrgEmployeedetails service call for manage user flow
		for(var i=0;i<actionlimits.length;i++){
			if(!(kony.sdk.isNullOrUndefined(actionlimits[i]["actions"]))){
				for(var j=0;j<actionlimits[i]["actions"].length;j++){
					if(actionlimits[i]["actions"][j]["actionType"]==="MONETARY"){
						for(var k=0;k<actionlimits[i]["actions"][j]["accounts"].length;k++){
							var featureIdDefault=findFeatureAndActionId(userDataStore["IsAccountLevel"],actionlimits[i]["featureName"],actionlimits[i]["actions"][j]["actionId"]);
							var featureIdDef1=featureIdDefault["featureIdDefault"];
							var actionIdDef1=featureIdDefault["actionIdDefault"];
							if(actionlimits[i]["actions"][j]["accounts"][k]["isEnabled"]==="false"){								
								if(featureIdDef1 !==-1 && actionIdDef1 !=-1){
									var limittemp=[];
									for(var l=0;l<6;l++){
									  limittemp[l]={};
									}
									limittemp[0]["id"]="PRE_APPROVED_DAILY_LIMIT";
									limittemp[1]["id"]="AUTO_DENIED_DAILY_LIMIT";
									limittemp[2]["id"]="PRE_APPROVED_WEEKLY_LIMIT";
									limittemp[3]["id"]="AUTO_DENIED_WEEKLY_LIMIT";
									limittemp[4]["id"]="PRE_APPROVED_TRANSACTION_LIMIT";
									limittemp[5]["id"]="AUTO_DENIED_TRANSACTION_LIMIT";
									limittemp[0]["value"]=userDataStore["IsAccountLevel"][featureIdDef1]["Actions"][actionIdDef1]["DAILY_APPROVE_LIMIT"];
									limittemp[1]["value"]=userDataStore["IsAccountLevel"][featureIdDef1]["Actions"][actionIdDef1]["DAILY_DENIAL_LIMIT"];
									limittemp[2]["value"]=userDataStore["IsAccountLevel"][featureIdDef1]["Actions"][actionIdDef1]["WEEKLY_APPROVE_LIMIT"];
									limittemp[3]["value"]=userDataStore["IsAccountLevel"][featureIdDef1]["Actions"][actionIdDef1]["WEEKLY_DENIAL_LIMIT"];
									limittemp[4]["value"]=userDataStore["IsAccountLevel"][featureIdDef1]["Actions"][actionIdDef1]["PER_TRANSACTION_APPROVE_LIMIT"];
									limittemp[5]["value"]=userDataStore["IsAccountLevel"][featureIdDef1]["Actions"][actionIdDef1]["PER_TRANSACTION_DENIAL_LIMIT"];
									//Adding the Limits
									actionlimits[i]["actions"][j]["accounts"][k]["limits"]=limittemp;
								}		
							}
							//adding the default max per transaction,daily,weekly limits from groupActionLimits service for features that are getting limits from getEmp serice.
							if(actionlimits[i]["actions"][j]["accounts"][k]["isEnabled"]==="true"){
								var actionlimitstemp=actionlimits[i]["actions"][j]["accounts"][k]["limits"];
								if(featureIdDef1 !==-1 && actionIdDef1 !=-1 && actionlimitstemp.length===6){									
									var maxPerTransactionLimit=userDataStore["IsAccountLevel"][featureIdDef1]["Actions"][actionIdDef1]["MAX_TRANSACTION_LIMIT"];
									var maxDailyLimit=userDataStore["IsAccountLevel"][featureIdDef1]["Actions"][actionIdDef1]["DAILY_LIMIT"];
									var maxWeeklyLimit=userDataStore["IsAccountLevel"][featureIdDef1]["Actions"][actionIdDef1]["WEEKLY_LIMIT"];									
									var maxLimits=[];
									for(var l=0;l<3;l++){
									  maxLimits[l]={};
									}
									maxLimits[0]["id"]="MAX_TRANSACTION_LIMIT";	
									maxLimits[0]["value"]=maxPerTransactionLimit.toString();
									maxLimits[1]["id"]="DAILY_LIMIT";
									maxLimits[1]["value"]=maxDailyLimit.toString();
									maxLimits[2]["id"]="WEEKLY_LIMIT";
									maxLimits[2]["value"]=maxWeeklyLimit.toString();
									for(var l=0;l<3;l++){
									  actionlimitstemp.push(maxLimits[l]);
									}									
								}
							}
						}
					}
				}
			} 
		}
	
		//adding all other default actions which are not present in getOrgEmployeedetails service call for manage user flow.
		//For Account Level Features
		for(var i=0;i<userDataStore["IsAccountLevel"].length;i++){
			if(!(kony.sdk.isNullOrUndefined(userDataStore["IsAccountLevel"][i]["Actions"]))){
				for(var j=0;j<userDataStore["IsAccountLevel"][i]["Actions"].length;j++){
					//Checking for a paticular feature in getOrgEmployeedetails
					var featureid= checkFeatureGetOrgEmpDetails(actionlimits,userDataStore["IsAccountLevel"][i]["featureID"]);
					if(featureid === -1){
					  var featuredata={
					    featureName:userDataStore["IsAccountLevel"][i]["featureName"],
					    featureDescription:userDataStore["IsAccountLevel"][i]["featureDescription"],
					    featureId:userDataStore["IsAccountLevel"][i]["featureID"],
					    actions:[],
					  };
					  actionlimits.push(featuredata);                
					}

					var featureid2= checkFeatureGetOrgEmpDetails(actionlimits,userDataStore["IsAccountLevel"][i]["featureID"]);                        
					//Checking for a paticular action in getOrgEmployeedetails
					var actionno=checkActionGetOrgEmpDetails(actionlimits[featureid2],userDataStore["IsAccountLevel"][i]["Actions"][j]["actionId"]);                        
					if(actionno===-1){
						//if action is not there inserting it
						var tempaction=cloneJSON(actionlimits[featureid2]["actions"]);
						if(userDataStore["IsAccountLevel"][i]["Actions"][j]["isAccountLevel"]==="false"){             
							var action ={
							  actionDescription :userDataStore["IsAccountLevel"][i]["Actions"][j]["actionDescription"],
							  actionId          :userDataStore["IsAccountLevel"][i]["Actions"][j]["actionId"],
							  actionName        :userDataStore["IsAccountLevel"][i]["Actions"][j]["actionName"],
							  actionType        :userDataStore["IsAccountLevel"][i]["Actions"][j]["actionType"],
							  isAccountLevel    :userDataStore["IsAccountLevel"][i]["Actions"][j]["isAccountLevel"],
							  isEnabled         :"false",  
							  accounts          :[]
							}; 
							tempaction.push(action);                            
							actionlimits[featureid2]["actions"]=cloneJSON(tempaction);  
						}
						if(userDataStore["IsAccountLevel"][i]["Actions"][j]["isAccountLevel"]==="true"){
							//Monetary
							if(userDataStore["IsAccountLevel"][i]["Actions"][j]["actionType"]==="MONETARY"){          
								var limittemp=[];
								for(var l=0;l<6;l++){
									limittemp[l]={};
								}
								limittemp[0]["id"]="PRE_APPROVED_DAILY_LIMIT";
								limittemp[1]["id"]="AUTO_DENIED_DAILY_LIMIT";
								limittemp[2]["id"]="PRE_APPROVED_WEEKLY_LIMIT";
								limittemp[3]["id"]="AUTO_DENIED_WEEKLY_LIMIT";
								limittemp[4]["id"]="PRE_APPROVED_TRANSACTION_LIMIT";
								limittemp[5]["id"]="AUTO_DENIED_TRANSACTION_LIMIT";
								limittemp[0]["value"]=userDataStore["IsAccountLevel"][i]["Actions"][j]["DAILY_APPROVE_LIMIT"];
								limittemp[1]["value"]=userDataStore["IsAccountLevel"][i]["Actions"][j]["DAILY_DENIAL_LIMIT"];
								limittemp[2]["value"]=userDataStore["IsAccountLevel"][i]["Actions"][j]["WEEKLY_APPROVE_LIMIT"];
								limittemp[3]["value"]=userDataStore["IsAccountLevel"][i]["Actions"][j]["WEEKLY_DENIAL_LIMIT"];
								limittemp[4]["value"]=userDataStore["IsAccountLevel"][i]["Actions"][j]["PER_TRANSACTION_APPROVE_LIMIT"];
								limittemp[5]["value"]=userDataStore["IsAccountLevel"][i]["Actions"][j]["PER_TRANSACTION_DENIAL_LIMIT"];

								var acc = cloneJSON(accountData);
								var account=[];
								acc.forEach(function(element){
									account.push({
										accountId:element["Account_id"],
										isEnabled:"false",
										limits:cloneJSON(limittemp) 
									});
								});    
								var action ={
									actionDescription :userDataStore["IsAccountLevel"][i]["Actions"][j]["actionDescription"],
									actionId          :userDataStore["IsAccountLevel"][i]["Actions"][j]["actionId"],
									actionName        :userDataStore["IsAccountLevel"][i]["Actions"][j]["actionName"],
									actionType        :userDataStore["IsAccountLevel"][i]["Actions"][j]["actionType"],
									isAccountLevel    :userDataStore["IsAccountLevel"][i]["Actions"][j]["isAccountLevel"],
									isEnabled         :"false",  
									accounts          :cloneJSON(account)
								}; 
								tempaction.push(action);                            
								actionlimits[featureid2]["actions"]=cloneJSON(tempaction);
							}
							//Non Monetary
							else{
								var acc = cloneJSON(accountData);
								var account=[];
								acc.forEach(function(element){
									account.push({
										accountId:element["Account_id"],
										isEnabled:"false" 
									})
								});  
								var action ={
									actionDescription :userDataStore["IsAccountLevel"][i]["Actions"][j]["actionDescription"],
									actionId          :userDataStore["IsAccountLevel"][i]["Actions"][j]["actionId"],
									actionName        :userDataStore["IsAccountLevel"][i]["Actions"][j]["actionName"],
									actionType        :userDataStore["IsAccountLevel"][i]["Actions"][j]["actionType"],
									isAccountLevel    :userDataStore["IsAccountLevel"][i]["Actions"][j]["isAccountLevel"],
									isEnabled         :"false",  
									accounts          :cloneJSON(account)
								}; 
								tempaction.push(action);                            
								actionlimits[featureid2]["actions"]=cloneJSON(tempaction);
							}
						}//accountlevel true ends
					}
				}
			}//Inner check statement	
		}

		//For Notaccount level (Other) features 
		if(!(kony.sdk.isNullOrUndefined(userDataStore["IsNotAccountLevel"]))){
			for(var i=0;i<userDataStore["IsNotAccountLevel"].length;i++){
				if(!(kony.sdk.isNullOrUndefined(userDataStore["IsNotAccountLevel"][i]["Actions"]))){
					for(var j=0;j<userDataStore["IsNotAccountLevel"][i]["Actions"].length;j++){
						var featureid= checkFeatureGetOrgEmpDetails(actionlimits,userDataStore["IsNotAccountLevel"][i]["featureID"]);
						if(featureid === -1){
						  var featuredata={
						    featureName:userDataStore["IsNotAccountLevel"][i]["featureName"],
						    featureDescription:userDataStore["IsNotAccountLevel"][i]["featureDescription"],
						    featureId:userDataStore["IsNotAccountLevel"][i]["featureID"],
						    actions:[],
						  };
						  actionlimits.push(featuredata);                
						}
						var featureid2= checkFeatureGetOrgEmpDetails(actionlimits,userDataStore["IsNotAccountLevel"][i]["featureID"]);                        
						var actionno=checkActionGetOrgEmpDetails(actionlimits[featureid2],userDataStore["IsNotAccountLevel"][i]["Actions"][j]["actionId"]);                        
						if(actionno===-1){
							var tempaction=cloneJSON(actionlimits[featureid2]["actions"]);
							if(userDataStore["IsNotAccountLevel"][i]["Actions"][j]["isAccountLevel"]==="false"){             
								var action ={
								  actionDescription :userDataStore["IsNotAccountLevel"][i]["Actions"][j]["actionDescription"],
								  actionId          :userDataStore["IsNotAccountLevel"][i]["Actions"][j]["actionId"],
								  actionName        :userDataStore["IsNotAccountLevel"][i]["Actions"][j]["actionName"],
								  actionType        :userDataStore["IsNotAccountLevel"][i]["Actions"][j]["actionType"],
								  isAccountLevel    :userDataStore["IsNotAccountLevel"][i]["Actions"][j]["isAccountLevel"],
								  isEnabled         :"false",  
								  accounts          :[]
								}; 
								tempaction.push(action);                            
								actionlimits[featureid2]["actions"]=cloneJSON(tempaction);  
							}						
						}
					}
				}//Inner check statement		
			}
		}	

	}//Main Check

	var accountlevelActions=[];
	var notAccountLevel=[];
  
	  //Making different Account Objects
	  accountData.forEach(function(element){
	  accountlevelActions.push(
	  {
		account_id : element["Account_id"],
		accountName: element["AccountName"],
		isMonetarySelected:true,
		featureData:[]
	  });
	  });
	  
	if(!(kony.sdk.isNullOrUndefined(actionlimits))){
	  for(var i=0;i<actionlimits.length;i++){
		var flagaccountlevel=0;
		var flagNotAccountlevel=0;
		for(var j=0;j<actionlimits[i]["actions"].length;j++){
		  if(JSON.parse(actionlimits[i]["actions"][j]["isAccountLevel"])){
			flagaccountlevel=1;
		  }
		  else{
			flagNotAccountlevel=1;
		  }
		}
		
		if(flagaccountlevel===1){
		  var featuredata={
			featureName:actionlimits[i]["featureName"],
			featureDescription:actionlimits[i]["featureDescription"],
			isSelected:true,
			Actions:[]
		  };
			accountlevelActions.forEach(function(accountElement) {
			var tempfd =cloneJSON(accountElement["featureData"]);
			tempfd.push(featuredata);
			accountElement["featureData"]=cloneJSON(tempfd);             
		  });
		}
		if(flagNotAccountlevel===1)
		{
		  var featuredata={
			  featureName:actionlimits[i]["featureName"],
			  featureDescription:actionlimits[i]["featureDescription"],
			  isSelected:true,
				Actions:[]
			};
			notAccountLevel.push(featuredata);    
		}               
	  }
  	}
  	//Now iterating through actions and pushing them.
    if(!(kony.sdk.isNullOrUndefined(actionlimits))){  
	for(var i=0;i<actionlimits.length;i++){ //foreach feature
		if(!(kony.sdk.isNullOrUndefined(actionlimits[i]["actions"]))){
			for(var j=0;j<actionlimits[i]["actions"].length;j++) {//foreach action
		      if(JSON.parse(actionlimits[i]["actions"][j]["isAccountLevel"])){         
		            if(actionlimits[i]["actions"][j]["actionType"]==="MONETARY"){          
		              //loop through accountlevelActions and insert into every account even if there is no limit            
		              for(var k=0;k<accountlevelActions.length;k++){
		                  //find the account index in raw data for pushing right data into accountlevelActions
		                  var findaccountid=accountlevelActions[k]["account_id"];                    
		                    var index=findindexrawdata(actionlimits[i]["actions"][j]["accounts"],findaccountid);//rawdata                    
		                    var featureindex=findfeatureindex(accountlevelActions[k],actionlimits[i]["featureName"]);//accoutlevel
		                    
		                    if(index !== -1){//Account is present in rawdata (servicecall output)                                                                                         
		                      if(featureindex !== -1){                        
		                        var tempaction=cloneJSON(accountlevelActions[k]["featureData"][featureindex]["Actions"]);
		                          var action ={
		                            actionDescription:actionlimits[i]["actions"][j]["actionDescription"],
		                            actionId    :actionlimits[i]["actions"][j]["actionId"],
		                            actionName    :actionlimits[i]["actions"][j]["actionName"],
		                            actionType    :actionlimits[i]["actions"][j]["actionType"],
		                            isAccountLevel  :actionlimits[i]["actions"][j]["isAccountLevel"],
		                            isSelected    :JSON.parse(actionlimits[i]["actions"][j]["accounts"][index]["isEnabled"]),                                
		                          };     
		                         //adding limits
		                          var limits=actionlimits[i]["actions"][j]["accounts"][index]["limits"]
								  if(limits !== undefined){
									  for(var r=0;r<limits.length;r++){                                                             
										var oid= limits[r]["id"]; 
										if (!isNaN(parseFloat(limits[r]["value"]))) {
											switch(oid){                                
											case "PRE_APPROVED_DAILY_LIMIT" : action["DAILY_APPROVE_LIMIT"] = parseFloat(limits[r]["value"]);
												break;
											case "AUTO_DENIED_DAILY_LIMIT"  : action["DAILY_DENIAL_LIMIT"] = parseFloat(limits[r]["value"]);
											  break;
											case "PRE_APPROVED_WEEKLY_LIMIT": action["WEEKLY_APPROVE_LIMIT"] = parseFloat(limits[r]["value"]);
											  break;
											case "AUTO_DENIED_WEEKLY_LIMIT" : action["WEEKLY_DENIAL_LIMIT"] =parseFloat(limits[r]["value"]);
											  break;
											case "PRE_APPROVED_TRANSACTION_LIMIT": action["PER_TRANSACTION_APPROVE_LIMIT"] = parseFloat(limits[r]["value"]);
											  break;
											case "AUTO_DENIED_TRANSACTION_LIMIT": action["PER_TRANSACTION_DENIAL_LIMIT"] =parseFloat(limits[r]["value"]);
											  break; 
											case "MAX_TRANSACTION_LIMIT":  action["MAX_TRANSACTION_LIMIT"]=parseFloat(limits[r]["value"]);
												break; 
											case "DAILY_LIMIT":  action["DAILY_LIMIT"] =parseFloat(limits[r]["value"]);
												break; 
											case "WEEKLY_LIMIT":  action["WEEKLY_LIMIT"]  =parseFloat(limits[r]["value"]);
												break;                                
										  }
										}//limits end																				
									  }
										if(kony.sdk.isNullOrUndefined(action["MAX_TRANSACTION_LIMIT"]))
											action["MAX_TRANSACTION_LIMIT"]=action["PER_TRANSACTION_DENIAL_LIMIT"];

										if(kony.sdk.isNullOrUndefined(action["DAILY_LIMIT"]))
											action["DAILY_LIMIT"] =action["DAILY_DENIAL_LIMIT"] ;

										if(kony.sdk.isNullOrUndefined(action["WEEKLY_LIMIT"]))
											action["WEEKLY_LIMIT"]  =action["WEEKLY_DENIAL_LIMIT"];
									  tempaction.push(action);                            
									  accountlevelActions[k]["featureData"][featureindex]["Actions"]=cloneJSON(tempaction);
								  }								  
		                      }
		                    }
		               	}
		            }//Monetary Ends
		            else { //Account level NON Monetary Start
		                for(var k=0;k<accountlevelActions.length;k++){                  
							var findaccountid=accountlevelActions[k]["account_id"];                    
							var index=findindexrawdata(actionlimits[i]["actions"][j]["accounts"],findaccountid);
							var featureindex=findfeatureindex(accountlevelActions[k],actionlimits[i]["featureName"]); 
								if(index !== -1 && featureindex !== -1 && !(kony.sdk.isNullOrUndefined(accountlevelActions[k]["featureData"][featureindex]["Actions"]))){
									var tempaction=cloneJSON(accountlevelActions[k]["featureData"][featureindex]["Actions"]);
									var action ={
										actionDescription :actionlimits[i]["actions"][j]["actionDescription"],
										actionId          :actionlimits[i]["actions"][j]["actionId"],
										actionName        :actionlimits[i]["actions"][j]["actionName"],
										actionType        :actionlimits[i]["actions"][j]["actionType"],
										isAccountLevel    :actionlimits[i]["actions"][j]["isAccountLevel"],
										isSelected        :JSON.parse(actionlimits[i]["actions"][j]["accounts"][index]["isEnabled"]),                                
									};                                   
									tempaction.push(action);                            
									accountlevelActions[k]["featureData"][featureindex]["Actions"]=cloneJSON(tempaction);                            
								}		                  	                  
		                }
		            }//Account level NON Monetary Ends                        
		        }//Accountlevel actions if ends
		        else{
					var featureindex=findfeatureindexnotaccountlevel(notAccountLevel,actionlimits[i]["featureName"]);
					if(!(kony.sdk.isNullOrUndefined(notAccountLevel[featureindex]["Actions"]))){
						var tempaction=cloneJSON(notAccountLevel[featureindex]["Actions"]);				
						var action ={
							actionDescription	:actionlimits[i]["actions"][j]["actionDescription"],
							actionId    		:actionlimits[i]["actions"][j]["actionId"],
							actionName    		:actionlimits[i]["actions"][j]["actionName"],
							actionType    		:actionlimits[i]["actions"][j]["actionType"],
							isAccountLevel  	:actionlimits[i]["actions"][j]["isAccountLevel"],
							isSelected    		:JSON.parse(actionlimits[i]["actions"][j]["isEnabled"]),                                
						}; 
						tempaction.push(action);                            
						notAccountLevel[featureindex]["Actions"]=cloneJSON(tempaction);
					}
		        }      
			} //foreach action ends
		}//Check Ends
	}//foreach feature  ends 
	}//Check ends for action limits
	var res = {
		"Accounts": accountData,
		"accountlevelActions":accountlevelActions,
		"notAccountLevel":notAccountLevel,
		"userDataStore":userDataStore
	};
	return res;
}

function findindexrawdata(accounts,findaccountid){
    var flag=-1;
    for(var i=0;i<accounts.length;i++){
      if(accounts[i]["accountId"]===findaccountid){
          flag=i;
          break;
        }
    }   
    return flag;
}

function findfeatureindex(accountlevelActions,featurename){
    var flag=-1;
    for(var i=0;i<accountlevelActions["featureData"].length;i++){
      if(accountlevelActions["featureData"][i]["featureName"]===featurename){
          flag=i;
          break;
        }
    }  
    //if(i>=accountlevelActions["featureData"].length)
    return flag;
}

function findfeatureindexnotaccountlevel(notAccountLevel,featurename){
    var flag=-1;
  for(var i=0;i<notAccountLevel.length;i++){
      if(notAccountLevel[i]["featureName"]===featurename){
          flag=i;
          break;
        }
    }  
    return flag;
}     

//Finding both actionId and FeatureId in defaultLimits array which is fetched from service "getOrgGroupActionLimits" along with get "getOrgEmployeedetails" for manage user flow.
function findFeatureAndActionId(isAccountLevel,featureName,actionId){
	var data={
		featureIdDefault:-1,
		actionIdDefault:-1 
	}
	var flag=-1;
	for(var i=0;i<isAccountLevel.length;i++){  
		if(isAccountLevel[i]["featureName"]===featureName){
			for(var j=0;j<isAccountLevel[i]["Actions"].length;j++){
				if(isAccountLevel[i]["Actions"][j]["actionId"]===actionId){
					flag=1;
					break;
				}
			}
		}
		if(flag===1){
			data["featureIdDefault"]=i;
			data["actionIdDefault"]=j;		
			break;
		}
	}    
	return data;
}

//Checking weather a feature is present or not in getOrgEmployee details service call which is made when manage user is clicked
function checkFeatureGetOrgEmpDetails(actionLimits,featureId){
	var featureIdNo=-1;
	for(var i=0;i<actionLimits.length;i++){      
		if(actionLimits[i]["featureId"]===featureId){
			featureIdNo=i;
			break;
		}
	}  
	return featureIdNo;
}

//Checking weather a action is present in particular feature or not in getOrgEmployee details service call which is made when manage user is clicked
function checkActionGetOrgEmpDetails(actionLimitsFeatureLevel,actionId){
	var actionIdNo=-1;
	for(var i=0;i<actionLimitsFeatureLevel["actions"].length;i++){
		if(actionLimitsFeatureLevel["actions"][i]["actionId"]===actionId){
			actionIdNo=i;
			break;
		}
	}
	return actionIdNo;
}

function cloneJSON(obj) {
	if ((obj === null || obj === undefined ) && (typeof obj !== 'object' && typeof obj !== 'string' && typeof obj !== 'number')) {
		return obj;
	} else if (typeof obj === 'number') {
        var string_number = (' ' + obj).slice(1);
        var number;
      	if( ! isNaN(parseFloat(string_number))){
            number = parseFloat(string_number);
           }
        return number;
	} else if (typeof obj === 'string') {
		var string_copy = (' ' + obj).slice(1);
        return string_copy;
	} else if (obj instanceof Array) {
		var cloneA = [];
		for (var i = 0; i < obj.length; ++i) {
			cloneA[i] = cloneJSON(obj[i]);
		}
		return cloneA;
  }
    else if (typeof obj === 'boolean') {
    var boolean_value = obj;
    return boolean_value;
  } 
  else {
		var cloneO = {};
		for (var x in obj) {
			cloneO[x] = cloneJSON(obj[x]);
		}
		return cloneO;
	}
} 

function findinJSON(JSONarray, featureKey, findWhat) {
	for (var y = 0; y < JSONarray.length; y++) {
		if (JSONarray[y][findWhat] == featureKey) {
			return y;
		}
	}
	return -1;
}

function truncateFeatureName(text, n, useWordBoundary) {
	if (kony.sdk.isNullOrUndefined(text)) {
		return "";
	}
	text = text.trim();
	if (text.length <= n) {
		return text;
	}
	var subString = text.substr(0, n - 1);
	return ((useWordBoundary) ? subString.substr(0, subString.lastIndexOf(' ')) : subString) + "...";
}

function deepCompareJSONObjects(a, b, f) {
  if(kony.sdk.isNotNullOrUndefined(f)) { 
    if(f) {
      return(JSON.stringify(a) === JSON.stringify(b));
    }
  }
  for (var c in a) {
    if (a.hasOwnProperty(c) !== b.hasOwnProperty(c)) return false;
    switch (typeof a[c]) {
      case "object":
        if (!compareJSONObjects(a[c], b[c])) return false;
        break;

      case "function":
        if ("undefined" == typeof b[c] || "compare" != c && a[c].toString() != b[c].toString()) return false;
        break;

      default:
        if (a[c] != b[c]) return false;
    }
  }
  for (var d in b) if ("undefined" == typeof a[d]) return false;
  return true;
}

function createUserObjectForCreation(userAggregate, userObj, otherFeatures,AccountlevelJson) {
	var res = {};
	var selectedAccounts = userObj["SelectedAccounts"]; //add null check  "SelectedAccount" is alternative
	var accountres = [];
	var featuesDataStore = [];
	var IsNotAccountLevelJson= otherFeatures;
	res["FirstName"] = userObj["FirstName"];
	res["MiddleName"] = userObj["MiddleName"];
	res["LastName"] = userObj["LastName"];
	res["Email"] = userObj["Email"];
	res["DrivingLicenseNumber"] = userObj["DrivingLicenseNumber"];
	res["Phone"] = userObj["Phone"];
	res["UserName"] = userObj["UserName"];
	res["DateOfBirth"] = userObj["DateOfBirth"];
	res["Role_id"] = userObj["SelectedRoleId"];
	res["Ssn"] = userObj["Ssn"];
 

	selectedAccounts.forEach(function (element) {
		if (element["lblCheckAccount"]["text"]) {
			accountres.push({
				"accountId": element["Account_id"],
				"accountName": element["lblAccountName"]
			});
		}
	});

	IsNotAccountLevelJson.forEach(function (element) {
		var actions = element["Actions"];
		var actionsres = [];
		var flag = false;
		actions.forEach(function (elementx) {
			if (elementx["actionType"] === "NON_MONETARY") {
				actionsres.push({
					"actionType": elementx["actionType"],
					"isEnabled": (elementx["isSelected"]) ? "true" : "false",
					"actionId": elementx["actionId"],
					"actionDescription": elementx["actionDescription"],
					"actionName": elementx["actionName"],
					"isAccountLevel": elementx["isAccountLevel"]
				});
				flag = true;
			}
		});
		if (flag)
			featuesDataStore.push({
				"featureName": element["featureName"],
				"featureID": element["featureID"],
				"featureDescription": element["featureDescription"],
				"Actions": cloneJSON(actionsres)
			});
	});

	
	//Account Level Actions
	if(!(kony.sdk.isNullOrUndefined(AccountlevelJson))){
		AccountlevelJson[0]["featureData"].forEach(function (element,num) { 		
	        var actionsinFeature = element["Actions"];
			var accounts = [];        
			var flag = false;
			var action = [];
			var actionres = [];    
			if(!(kony.sdk.isNullOrUndefined(actionsinFeature)) && actionsinFeature.length>0){	  
				actionsinFeature.forEach(function (elementx,actionNo) {        
					var accounts =[];	
					//Monetary or Non Monetary
					var actionTypeReference = elementx["actionType"];
					for(var i=0;i<AccountlevelJson.length;i++){
						
						//Finding feature and actionid in every account
						var accountLevelFeatureIndex=findFeatureAndActionId(AccountlevelJson[i]["featureData"],element["featureName"],elementx["actionId"]);
						var featureNoAccountLevel=accountLevelFeatureIndex.featureIdDefault;
						var actionNoAccountLevel=accountLevelFeatureIndex.actionIdDefault;						
						if(featureNoAccountLevel !==-1 && actionNoAccountLevel !==-1){
							var actionDataAccountLevel=AccountlevelJson[i]["featureData"][featureNoAccountLevel].Actions[actionNoAccountLevel];
							//adding limits
							if(!(kony.sdk.isNullOrUndefined(actionDataAccountLevel)) && !(kony.sdk.isNullOrUndefined(actionDataAccountLevel["isSelected"]))){
							    if(actionTypeReference==="MONETARY" && actionDataAccountLevel["actionType"]==="MONETARY"){
								    var limits = {
								        "PRE_APPROVED_TRANSACTION_LIMIT":(kony.sdk.isNullOrUndefined(actionDataAccountLevel.PER_TRANSACTION_APPROVE_LIMIT))	?"0":actionDataAccountLevel.PER_TRANSACTION_APPROVE_LIMIT.toString(),
								        "AUTO_DENIED_TRANSACTION_LIMIT"	:(kony.sdk.isNullOrUndefined(actionDataAccountLevel.PER_TRANSACTION_DENIAL_LIMIT))	?"0":actionDataAccountLevel.PER_TRANSACTION_DENIAL_LIMIT.toString(),
								        "PRE_APPROVED_DAILY_LIMIT"		:(kony.sdk.isNullOrUndefined(actionDataAccountLevel.DAILY_APPROVE_LIMIT))			?"0":actionDataAccountLevel.DAILY_APPROVE_LIMIT.toString(),
								        "AUTO_DENIED_DAILY_LIMIT"		:(kony.sdk.isNullOrUndefined(actionDataAccountLevel.DAILY_DENIAL_LIMIT))			?"0":actionDataAccountLevel.DAILY_DENIAL_LIMIT.toString(),
								        "PRE_APPROVED_WEEKLY_LIMIT"		:(kony.sdk.isNullOrUndefined(actionDataAccountLevel.WEEKLY_APPROVE_LIMIT))			?"0":actionDataAccountLevel.WEEKLY_APPROVE_LIMIT.toString(),
								        "AUTO_DENIED_WEEKLY_LIMIT"		:(kony.sdk.isNullOrUndefined(actionDataAccountLevel.WEEKLY_DENIAL_LIMIT))			?"0":actionDataAccountLevel.WEEKLY_DENIAL_LIMIT.toString(),
								    }                 
								}																		                                            
							    if(actionTypeReference==="MONETARY" && actionDataAccountLevel["actionType"]==="MONETARY"){
									accounts.push({
										"id": AccountlevelJson[i]["account_id"],
										"isEnabled":actionDataAccountLevel["isSelected"].toString(),
										"limits": cloneJSON(limits)
									});
							    }
							    else{
									accounts.push({
										"id": AccountlevelJson[i]["account_id"],
										"isEnabled":actionDataAccountLevel["isSelected"].toString(),
									});
							    } 								
							}//check ends
					    }                                              
					}//for loop ends
					actionres.push({
						"actionType": elementx["actionType"],
						"isEnabled": (accounts.length>0) ? "true" : "false",
						"actionId": elementx["actionId"],
						"actionDescription": elementx["actionDescription"],
						"actionName": elementx["actionName"],
		                "isAccountLevel": elementx["isAccountLevel"],
						"Accounts": cloneJSON(accounts)
					});
					flag = true;
				}); 
			}      
			if (flag) {
				var flagholder = true;
				for (x in featuesDataStore) {
					if (featuesDataStore[x]["featureName"] == element["featureName"]) {
						var actionholder = cloneJSON(featuesDataStore[x]["Actions"]);
						actionres.forEach(function (elementz) {
							actionholder.push(elementz);
						});
						featuesDataStore[x]["Actions"] = cloneJSON(actionholder);
						flagholder = false;
					}
				}
				if (flagholder) {
					featuesDataStore.push({
						"featureName": element["featureName"],
						"featureID": element["featureID"],
						"featureDescription": element["featureDescription"],
						"Actions": cloneJSON(actionres)
					});
				}
			}
		});  
	}//Check ends
    res["accounts"] = JSON.stringify(accountres);
    res["features"] = JSON.stringify(featuesDataStore);  
	return res;
}

function createCustomRoleObjectForCreation(customRoleAggregate, customRoleObj, otherFeatures,AccountlevelJson) {
	var res = {};
	var selectedAccounts = customRoleObj["SelectedAccounts"]; //add null check  "SelectedAccount" is alternative
	var accountres = [];
	var featuesDataStore = [];
	var IsNotAccountLevelJson= otherFeatures;
	res["templateName"] = customRoleObj["templateName"];
 

	selectedAccounts.forEach(function (element) {
		if (element["lblCheckAccount"]["text"]) {
			accountres.push({
				"accountId": element["Account_id"],
				"accountName": element["lblAccountName"]
			});
		}
	});

	IsNotAccountLevelJson.forEach(function (element) {
		var actions = element["Actions"];
		var actionsres = [];
		var flag = false;
		actions.forEach(function (elementx) {
			if (elementx["actionType"] === "NON_MONETARY") {
				actionsres.push({
					"actionType": elementx["actionType"],
					"isEnabled": (elementx["isSelected"]) ? "true" : "false",
					"actionId": elementx["actionId"],
					"actionDescription": elementx["actionDescription"],
					"actionName": elementx["actionName"],
					"isAccountLevel": elementx["isAccountLevel"]
				});
				flag = true;
			}
		});
		if (flag)
			featuesDataStore.push({
				"featureName": element["featureName"],
				"featureID": element["featureID"],
				"featureDescription": element["featureDescription"],
				"Actions": cloneJSON(actionsres)
			});
	});

	
	//Account Level Actions
	if(!(kony.sdk.isNullOrUndefined(AccountlevelJson))){
		AccountlevelJson[0]["featureData"].forEach(function (element,num) { 		
	        var actionsinFeature = element["Actions"];
			var accounts = [];        
			var flag = false;
			var action = [];
			var actionres = [];    
			if(!(kony.sdk.isNullOrUndefined(actionsinFeature)) && actionsinFeature.length>0){	  
				actionsinFeature.forEach(function (elementx,actionNo) {        
					var accounts =[];	
					//Monetary or Non Monetary
					var actionTypeReference = elementx["actionType"];
					for(var i=0;i<AccountlevelJson.length;i++){
						
						//Finding feature and actionid in every account
						var accountLevelFeatureIndex=findFeatureAndActionId(AccountlevelJson[i]["featureData"],element["featureName"],elementx["actionId"]);
						var featureNoAccountLevel=accountLevelFeatureIndex.featureIdDefault;
						var actionNoAccountLevel=accountLevelFeatureIndex.actionIdDefault;						
						if(featureNoAccountLevel !==-1 && actionNoAccountLevel !==-1){
							var actionDataAccountLevel=AccountlevelJson[i]["featureData"][featureNoAccountLevel].Actions[actionNoAccountLevel];
							//adding limits
							if(!(kony.sdk.isNullOrUndefined(actionDataAccountLevel)) && !(kony.sdk.isNullOrUndefined(actionDataAccountLevel["isSelected"]))){
							    if(actionTypeReference==="MONETARY" && actionDataAccountLevel["actionType"]==="MONETARY"){
								    var limits = {
								        "PRE_APPROVED_TRANSACTION_LIMIT":(kony.sdk.isNullOrUndefined(actionDataAccountLevel.PER_TRANSACTION_APPROVE_LIMIT))	?"0":actionDataAccountLevel.PER_TRANSACTION_APPROVE_LIMIT.toString(),
								        "AUTO_DENIED_TRANSACTION_LIMIT"	:(kony.sdk.isNullOrUndefined(actionDataAccountLevel.PER_TRANSACTION_DENIAL_LIMIT))	?"0":actionDataAccountLevel.PER_TRANSACTION_DENIAL_LIMIT.toString(),
								        "PRE_APPROVED_DAILY_LIMIT"		:(kony.sdk.isNullOrUndefined(actionDataAccountLevel.DAILY_APPROVE_LIMIT))			?"0":actionDataAccountLevel.DAILY_APPROVE_LIMIT.toString(),
								        "AUTO_DENIED_DAILY_LIMIT"		:(kony.sdk.isNullOrUndefined(actionDataAccountLevel.DAILY_DENIAL_LIMIT))			?"0":actionDataAccountLevel.DAILY_DENIAL_LIMIT.toString(),
								        "PRE_APPROVED_WEEKLY_LIMIT"		:(kony.sdk.isNullOrUndefined(actionDataAccountLevel.WEEKLY_APPROVE_LIMIT))			?"0":actionDataAccountLevel.WEEKLY_APPROVE_LIMIT.toString(),
								        "AUTO_DENIED_WEEKLY_LIMIT"		:(kony.sdk.isNullOrUndefined(actionDataAccountLevel.WEEKLY_DENIAL_LIMIT))			?"0":actionDataAccountLevel.WEEKLY_DENIAL_LIMIT.toString(),
								    }                 
								}																		                                            
							    if(actionTypeReference==="MONETARY" && actionDataAccountLevel["actionType"]==="MONETARY"){
									accounts.push({
										"id": AccountlevelJson[i]["account_id"],
										"isEnabled":actionDataAccountLevel["isSelected"].toString(),
										"limits": cloneJSON(limits)
									});
							    }
							    else{
									accounts.push({
										"id": AccountlevelJson[i]["account_id"],
										"isEnabled":actionDataAccountLevel["isSelected"].toString(),
									});
							    } 								
							}//check ends
					    }                                              
					}//for loop ends
					actionres.push({
						"actionType": elementx["actionType"],
						"isEnabled": (accounts.length>0) ? "true" : "false",
						"actionId": elementx["actionId"],
						"actionDescription": elementx["actionDescription"],
						"actionName": elementx["actionName"],
		                "isAccountLevel": elementx["isAccountLevel"],
						"Accounts": cloneJSON(accounts)
					});
					flag = true;
				}); 
			}      
			if (flag) {
				var flagholder = true;
				for (x in featuesDataStore) {
					if (featuesDataStore[x]["featureName"] == element["featureName"]) {
						var actionholder = cloneJSON(featuesDataStore[x]["Actions"]);
						actionres.forEach(function (elementz) {
							actionholder.push(elementz);
						});
						featuesDataStore[x]["Actions"] = cloneJSON(actionholder);
						flagholder = false;
					}
				}
				if (flagholder) {
					featuesDataStore.push({
						"featureName": element["featureName"],
						"featureID": element["featureID"],
						"featureDescription": element["featureDescription"],
						"Actions": cloneJSON(actionres)
					});
				}
			}
		});  
	}//Check ends
    res["accounts"] = JSON.stringify(accountres);
    res["features"] = JSON.stringify(featuesDataStore);  
	return res;
}



