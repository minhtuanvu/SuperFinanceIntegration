define({ 
  month_Names : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  //Type your controller code here 
  preshowGoal : function(){
    var nd = new Date();
    var cDate = nd.getDate();
    var cMon = this.month_Names[nd.getMonth()];
    var cYear = nd.getFullYear();
    cDate = cDate - 5;
    var cDate1 = cDate - 7;
    if(cDate < 1){
      cMon = this.month_Names[(nd.getMonth()-1)];
      cDate = 26;
    }
    if(cDate1 < 1){
      cMon = this.month_Names[(nd.getMonth()-1)];
      cDate = 24;
    }
    var tasksCompleted = [{"imgTickSF":"tick_fusion.png","lblTaskTitleSF":"Complete Summer Project","lblTaskDate":cMon+" "+cDate+", "+cYear},
                          {"imgTickSF":"tick_fusion.png","lblTaskTitleSF":"Complete Summer Project","lblTaskDate":cMon+" "+cDate1+", "+cYear}];
    this.view.segTasksSF.setData(tasksCompleted);
    this.view.flxGoalSF1.isVisible = true;
    this.view.flxGoalSF2.isVisible = false;
    this.view.flxGoalSF3.isVisible = false;
  },
  enableGoal2 : function(){
    this.view.flxGoalSF1.isVisible = false;
    this.view.flxGoalSF2.isVisible = true;
    this.view.txtBoxAmtSF.text = "";
  },
  enableGoal3 : function(){
    this.view.flxGoalSF2.isVisible = false;
    this.view.flxGoalSF3.isVisible = true;
  }

});