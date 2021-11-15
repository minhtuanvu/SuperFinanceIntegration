define({

  insightStepsArr:[],

  setApproachesType : function(){
    this.view.segApproaches.removeAll();
    var data = [{
      "lblPercentage1SF" : "85%",
      "lblPercentage2SF" : "5%",
      "lblPercentage3SF" : "10%",
      "lblEquitiesSF" : "Equities",
      "lblFX" : "FX",
      "lblSecuritiesSF" : "Securities",
      "lblYellowSF" : {"height":"85%"},
      "lblBlueSF" : {"height":"5%"},
      "lblOrangeSF" : {"height":"10%"},
      "imgCircleSF" : {"src" : "radiobuttoninactive.png"},
      "lblApproachesType" : "Aggressive approach - Current"
    },{
      "lblPercentage1SF" : "50%",
      "lblPercentage2SF" : "10%",
      "lblPercentage3SF" : "40%",
      "lblEquitiesSF" : "Equities",
      "lblFX" : "FX",
      "lblSecuritiesSF" : "Securities",
      "lblYellowSF" : {"height":"50%"},
      "lblBlueSF" : {"height":"10%"},
      "lblOrangeSF" : {"height":"40%"},
      "imgCircleSF" : {"src" : "radiobuttoninactive.png"},
      "lblApproachesType" : "Balanced approach"
    },{
      "lblPercentage1SF" : "35%",
      "lblPercentage2SF" : "10%",
      "lblPercentage3SF" : "55%",
      "lblEquitiesSF" : "Equities",
      "lblFX" : "FX",
      "lblSecuritiesSF" : "Securities",
      "lblYellowSF" : {"height":"35%"},
      "lblBlueSF" : {"height":"10%"},
      "lblOrangeSF" : {"height":"55%"},
      "imgCircleSF" : {"src" : "radiobuttoninactive.png"},
      "lblApproachesType" : "Conservative approach"
    }];

    this.view.segApproaches.setData(data);
  },
  //speechTxtArr : [""],
  preshowInsights:function(){
    this.view.btnNextSF.text = "Next";
    //step 1
    this.view.flxSteps1SF.isVisible = true;
    this.view.flxStep1aSF.isVisible = true;
    this.view.flxStep1bSF.isVisible = false;
    this.view.btnNextSF.isVisible = false;
    this.view.flxTammyLogoSF.isVisible = true;
    this.view.flxTammyLogoSF.onClick = this.showStep1B;
    //step2
    this.view.flxSteps2SF.isVisible = false;
    //step3
    this.view.flxSteps3SF.isVisible = false;
  },
  postShowInsights : function(){
    kony.print("@@@@@ postShowInsights ::::: ");
    var insightStepsLen = this.insightStepsArr.length;
    kony.print("@@@@@ insightStepsLen is ::::: "+insightStepsLen);
    if(insightStepsLen==0) {
      this.insightStepsArr.push("step1");
      this.view.flxChangeProgressSF.width = "33.3%";
      this.view.lblInsightsStepSF.text = "Step: 1/3";
    }

    //alert("postshow");
    this.view.texttospeech.speakOut("Hello");
    kony.timer.schedule("insights1a1",function(){
      this.view.texttospeech.speakOut("With the current market conditions, your equities are overweight while your FX and securities are underweight. It is time to rebalance although this will have tax implications.");
      kony.timer.cancel("insights1a1");
    }.bind(this),1,false);
    kony.timer.schedule("insights1a2", function(){
      this.view.texttospeech.speakOut("John has few recommendations for you. Would you like to see them?");
      kony.timer.cancel("insights1a2");
    }.bind(this), 13, false);
  },
  showStep1B : function(){
    this.view.texttospeech.speakOut("There are 3 approaches based on predictive performance as per current market conditions. Let me know which one would like to select. Based on which I shall set up an advisory session with your RM John.");
    this.view.flxStep1aSF.isVisible = false;
    this.view.flxStep1bSF.isVisible = true;
    this.view.flxStep1L5SF.isVisible = true;
    this.view.flxStep1L7SF.isVisible = true;
    //for aggresive
    this.view.StepsApproach1.lblUnSelectedSF.isVisible = true;
    this.view.StepsApproach1.lblSelectedSF.isVisible = false;
    //for balance
    this.view.StepsApproach2.lblUnSelectedSF.isVisible = true;
    this.view.StepsApproach2.lblSelectedSF.isVisible = false;
    //for conservative
    this.view.StepsApproach3.lblUnSelectedSF.isVisible = true;
    this.view.StepsApproach3.lblSelectedSF.isVisible = false;
    this.view.flxStep1L8SF.isVisible = false; 
    this.view.flxTammyLogoSF.onClick = null;
    this.view.flxStep1L6SF.onClick = this.selectBalancedApproach;
  },
  selectBalancedApproach : function(){
    this.view.texttospeech.speakOut("This is noted Mike, I have forwaded this request to John.");
    this.view.flxStep1L5SF.isVisible = false;
    this.view.flxStep1L7SF.isVisible = false;
    this.view.flxTammyLogoSF.isVisible = false;
    this.view.btnNextSF.isVisible = true;
    this.view.flxStep1L8SF.isVisible = true;
    this.view.StepsApproach2.lblUnSelectedSF.isVisible = false;
    this.view.StepsApproach2.lblSelectedSF.isVisible = true;
    this.view.btnNextSF.onClick = this.bindEventsShow;
  },
  showStep3 : function(){
    kony.print("@@@@@ showStep3 ::::: ");
    var insightStepsLen = this.insightStepsArr.length;
    kony.print("@@@@@ insightStepsLen is ::::: "+insightStepsLen);
    if(insightStepsLen==2) {
      this.insightStepsArr.push("step3");
      this.view.flxChangeProgressSF.width = "100%";
      this.view.lblInsightsStepSF.text = "Step: 3/3";
    }  
    this.view.btnNextSF.onClick = null;
    this.view.flxSteps3SF.isVisible = true;
    this.view.flxSteps2SF.isVisible = false;
    this.view.flxStep3L3SF.isVisible = false;
    this.view.flxStep3R1SF.isVisible = false;
    this.view.flxTammyLogoSF.isVisible = true;
    this.view.btnNextSF.isVisible = false;
    this.view.flxExpenseSF.skin = "sknFlxPersonalSF";
    this.view.lblPersonalSF.text = "PERSONAL";
    this.view.flxTammyLogoSF.onClick = this.onClickTammyOnStep3;
    var monNames = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
    var nd = new Date();
    var cDate = nd.getDate();
    var cMon = monNames[nd.getMonth()];
    var cYear = nd.getFullYear();
    cDate = kony.os.toNumber(cDate) + 5;
    if(cDate > 30){
      cMon = monNames[(kony.os.toNumber(nd.getMonth())+1)];
      cDate = 3;
    }
    kony.print("event date "+cDate+" "+cMon);
    var superTxt = "";
    cDate = kony.os.toNumber(cDate);
    if (cDate > 3 && cDate < 21){
      superTxt = "th"; 
    }
    switch (cDate % 10) {
      case 1:  
        superTxt = "st";
        break;
      case 2:  
        superTxt = "nd";
        break;
      case 3:  
        superTxt = "rd";
        break;
      default: 
        superTxt = "th";
    }
    kony.print("superscript"+superTxt);
    this.view.lblTmeandDteSF.text = "At 7PM "+cDate+superTxt+" "+cMon+", "+cYear;
    this.view.texttospeech.speakOut("you have transaction on this "+cDate+superTxt+" of "+cMon+" amounting 1.099 Euros marked as Personal. Would you like to tag this under business expense?");
  },
  onClickTammyOnStep3 : function(){
    this.insightStepsArr = [];
    kony.print("@@@@@ onClickTammyOnStep3 setting Arr empty ::::: ");

    this.view.flxStep3R1SF.isVisible = true;
    this.view.btnNextSF.onClick = this.disableInsights;
    kony.timer.schedule("step3", function(){
      this.view.texttospeech.speakOut("The transaction of 1.099 Euros has been tagged under business expenses.");
      kony.timer.cancel("step3");
      this.view.flxStep3L3SF.isVisible =true;
      this.view.flxTammyLogoSF.onClick = null;
      this.view.btnNextSF.text = "Done";
      this.view.btnNextSF.isVisible = true;
      this.view.flxTammyLogoSF.isVisible = false;
      this.view.flxExpenseSF.skin = "sknFlxBusinessSF";
      this.view.lblPersonalSF.text = "BUSINESS";
    }.bind(this), 1, false);
  },
  disableInsights : function(){
    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    accountMod.presentationController.showDashboard();
  },
  bindEventsShow:function(){
    kony.print("@@@@@ bindEventsShow ::::: ");
    var insightStepsLen = this.insightStepsArr.length;
    kony.print("@@@@@ insightStepsLen is ::::: "+insightStepsLen);
    if(insightStepsLen==1) {
      this.insightStepsArr.push("step2");
      this.view.flxChangeProgressSF.width = "66.6%";
      this.view.lblInsightsStepSF.text = "Step: 2/3";
    }
    //by vineela
    this.view.flxSteps1SF.isVisible = false;
    this.view.flxSteps2SF.isVisible = true;
    this.onLoadShow();
    //this.view.segScheme.onRowClick = this.segValuesFunction;
    this.view.flxTimer1.onClick = this.timerSelection.bind(this,"timer1");
    this.view.flxTimer2.onClick = this.timerSelection.bind(this,"timer2");
    this.view.flxTimer3.onClick = this.timerSelection.bind(this,"timer3");
    this.view.flxTimer4.onClick = this.timerSelection.bind(this,"timer4");
    //this.view.flxTammyLogoSF.isVisible = true;
    this.view.btnNextSF.isVisible = false;
    this.view.flxScheduleCallWp.isVisible = false;
    this.view.flxTimer1.skin="sknBorderunSelect";
    this.view.flxTimer2.skin="sknBorderunSelect";
    this.view.flxTimer3.skin="sknBorderunSelect";
    this.view.flxTimer4.skin="sknBorderunSelect";
    this.view.flxStepsOptionWp.isVisible = false;
    this.view.texttospeech.speakOut("A new re-finance scheme for your mortgage has come up!, Below are the available re-finance scheme.Please choose one");
    kony.timer.schedule("insights2",function(){
      this.view.flxStepsOptionWp.isVisible = true;
      this.view.btnNextSF.onClick = null;
      //this.view.flxTammyLogoSF.onClick = null;
    }.bind(this),1,false);
  },
  tempSegDta : [],
  onLoadShow:function(){
    // this.bindEventsShow(); //by vineela
    var masterdata = [{flxMainScheme:{skin:"sknFlxUnSelectedSF"},lblSchemeName:"Fusion Bank",lblSchemePercent:"2.45% Interest",flxCircles:{"isVisible":false},flxLneSF:{isVisible:true}},
                      {flxMainScheme:{skin:"sknFlxUnSelectedSF"},lblSchemeName:"Vontobel",lblSchemePercent:"2.75% Interest",flxCircles:{"isVisible":false},flxLneSF:{isVisible:true}},
                      {flxMainScheme:{skin:"sknFlxUnSelectedSF"},lblSchemeName:"Lombard Odier",lblSchemePercent:"2.12% Interest",flxCircles:{"isVisible":false},flxLneSF:{isVisible:true}},
                      {flxMainScheme:{skin:"sknFlxUnSelectedSF"},lblSchemeName:"Bank of Atlantis",lblSchemePercent:"2.00% Interest",flxCircles:{"isVisible":true},flxLneSF:{isVisible:false}}];
    this.tempSegDta = masterdata;
    this.view.segScheme.setData(masterdata);
  },

  segValuesFunction:function(rowIndex){
    //     var segrowvalues = this.view.segScheme.selectedRowItems[0];
    //     var segrowvalues2 = this.view.segScheme.data;
    //     for(var i=0;i<segrowvalues2.length;i++){
    //       segrowvalues2[i].flxGroups ={
    //         "skin": "skninActive"
    //       };
    //       this.view.segScheme.setDataAt(segrowvalues2[i], i);
    //     }
    //     var rowIndex = this.view.segScheme.selectedRowIndex[1];
    //     segrowvalues.flxGroups = {
    //       "skin": "sknOnActive"
    //     };
    //     this.view.segScheme.setDataAt(segrowvalues, rowIndex);
    this.view.segScheme.removeAll();
    //var rowIndex = this.view.segScheme.selectedRowIndex[0];
    kony.print("selected row"+rowIndex);
    for(var i=0;i<this.tempSegDta.length;i++){
      if(rowIndex == i){
        this.tempSegDta[i].flxMainScheme.skin = "sknFlxSelectedSF";
        this.view.lblScheduleText.text ="Scheduling call with "+this.tempSegDta[i].lblSchemeName;
        this.view.texttospeech.speakOut("Scheduling call with "+this.tempSegDta[i].lblSchemeName);
      }
      else{
        this.tempSegDta[i].flxMainScheme.skin = "sknFlxUnSelectedSF"; 
      }
    }
    kony.print("seg dta"+JSON.stringify(this.tempSegDta));
    this.view.segScheme.setData(this.tempSegDta);
    this.view.flxScheduleCallWp.isVisible=true;
    //this.view.flxNextWrapper.isVisible=false;
  },

  timerSelection :function(timer){
    this.view.flxTimer1.skin="sknBorderunSelect";
    this.view.flxTimer2.skin="sknBorderunSelect";
    this.view.flxTimer3.skin="sknBorderunSelect";
    this.view.flxTimer4.skin="sknBorderunSelect";
    if(timer === "timer1" ){
      this.view.flxTimer1.skin="sknBorderSelect";
      this.view.texttospeech.speakOut("9am Friday");
    }else if(timer === "timer2"){
      this.view.flxTimer2.skin="sknBorderSelect";
      this.view.texttospeech.speakOut("4pm Friday");
    }
    else if(timer === "timer3"){
      this.view.flxTimer3.skin="sknBorderSelect";
      this.view.texttospeech.speakOut("10am Saturday");
    }
    else if(timer === "timer4"){
      this.view.flxTimer4.skin="sknBorderSelect";
    }
    this.view.btnNextSF.isVisible = true;
    this.view.btnNextSF.onClick = this.showStep3;
    //this.view.flxNextWrapper.isVisible=true; //by vineela
  }






});