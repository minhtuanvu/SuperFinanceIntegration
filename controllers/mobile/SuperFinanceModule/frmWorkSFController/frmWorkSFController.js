define({ 
  month_Names : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  //Type your controller code here 
  preshowWork : function(){
    this.view.HeaderSF.lblWorkSF.skin = "sknLblLifestyleHeaderSF";
    this.view.HeaderSF.lblLifestyleSF.skin = "sknLblNormalHeaderSF";
    this.view.HeaderSF.lblWealthSF.skin  = "sknLblNormalHeaderSF";
    this.setTransDta();
  },
  navigateToWealth : function(){
    var nWe = new kony.mvc.Navigation("SuperFinanceModule/frmWealthSF");
    nWe.navigate();
  },

  setTransDta : function(){
    var transDta = [];
    var reportDate = "";
    var d =  new Date();
    var crntDate = d.getDate();
    var crntMonth = this.month_Names[(d.getMonth())];
    var crntYear =  d.getFullYear();
    if(crntMonth === "Dec"){
      reportDate = crntMonth+" "+crntYear+" - "+this.month_Names[0]+" "+(d.getFullYear()+1);
    }
    else{
      reportDate = crntMonth+" "+crntYear+" - "+this.month_Names[(d.getMonth()+1)]+" "+crntYear;
    }
    this.view.lblR2SF.text = reportDate;
    this.view.lblMonNameSF.text = crntMonth+" "+crntYear;
    this.view.lblTripDateSF.text = crntMonth+" "+(d.getDate()+2)+" "+crntYear;
    if(crntDate <= 2){
      transDta = [{"imgTransSF": "vehicle_fusion.png","lblTransAmtSF": "-€ 34.50","lblTransDescSF": this.month_Names[d.getMonth()-1]+" 28, "+crntYear,"lblTransTitleSF": "Taxi"},
        {"imgTransSF": "food_work.png","lblTransAmtSF": "-€ 12.00","lblTransDescSF": crntMonth+" 1, "+crntYear,"lblTransTitleSF": "Food"},
        {"imgTransSF": "internet_fusion.png","lblTransAmtSF": "-€ 80.00","lblTransDescSF": crntMonth+" 2, "+crntYear,"lblTransTitleSF": "Roaming Recharge"}];
    }
    else{
      transDta = [{"imgTransSF": "vehicle_fusion.png","lblTransAmtSF": "-€ 34.50","lblTransDescSF": crntMonth+" 2, "+crntYear,"lblTransTitleSF": "Taxi"},
        {"imgTransSF": "food_work.png","lblTransAmtSF": "-€ 12.00","lblTransDescSF": crntMonth+" 4, "+crntYear,"lblTransTitleSF": "Food"},
        {"imgTransSF": "internet_fusion.png","lblTransAmtSF": "-€ 80.00","lblTransDescSF": crntMonth+" 6, "+crntYear,"lblTransTitleSF": "Roaming Recharge"}]; 
    }
    this.view.segTransSF.setData(transDta);
  }

});