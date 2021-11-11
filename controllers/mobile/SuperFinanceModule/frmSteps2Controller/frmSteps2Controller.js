define({ 

  onNavigate : function(navObj){
    this.bindEventsShow();

  },
  bindEventsShow:function(){
    
    this.view.segScheme.onRowClick = this.segValuesFunction;
    this.view.flxTimer1.onClick = this.timerSelection.bind(this,"timer1");
    this.view.flxTimer2.onClick = this.timerSelection.bind(this,"timer2");
    this.view.flxTimer3.onClick = this.timerSelection.bind(this,"timer3");
    this.view.flxTimer4.onClick = this.timerSelection.bind(this,"timer4");
  },
  onLoadShow:function(){
    this.bindEventsShow();
    var masterdata = [{flxGroups:{skin:"skninActive"},lblSchemeName:"Fusion Bank",lblSchemePercent:"2.45% Interest",flxCircles:{"isVisible":false}},
                      {flxGroups:{skin:"skninActive"},lblSchemeName:"Vontobel",lblSchemePercent:"2.75% Interest",flxCircles:{"isVisible":false}},
                      {flxGroups:{skin:"skninActive"},lblSchemeName:"Lombard Odier",lblSchemePercent:"2.12% Interest",flxCircles:{"isVisible":false}},
                      {flxGroups:{skin:"skninActive"},lblSchemeName:"Bank of Atlantis",lblSchemePercent:"2.00% Interest",flxCircles:{"isVisible":true}}];
    this.view.segScheme.setData(masterdata);
    this.view.flxScheduleCallWp.isVisible=false;
  },

  segValuesFunction:function(){

    var segrowvalues = this.view.segScheme.selectedRowItems[0];

    this.view.lblScheduleText.text ="Scheduling call with "+segrowvalues.lblSchemeName;
    var segrowvalues2 = this.view.segScheme.data;
    for(var i=0;i<segrowvalues2.length;i++){
      segrowvalues2[i].flxGroups ={
        "skin": "skninActive"
      };
      this.view.segScheme.setDataAt( segrowvalues2[i], i);
    }
    var rowIndex = this.view.segScheme.selectedRowIndex[1];

    segrowvalues.flxGroups = {
      "skin": "sknOnActive"
    };
    this.view.segScheme.setDataAt(segrowvalues, rowIndex);

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
    }else if(timer === "timer2"){
      this.view.flxTimer2.skin="sknBorderSelect";
    }
    else if(timer === "timer3"){
      this.view.flxTimer3.skin="sknBorderSelect";
    }
    else if(timer === "timer4"){
      this.view.flxTimer4.skin="sknBorderSelect";
    }
    this.view.flxNextWrapper.isVisible=true;
  },



});