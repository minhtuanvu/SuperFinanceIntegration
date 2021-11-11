define({
   preShow:function(){
     if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      		this.view.flxHeader.isVisible = true;
    	}
    	else{
      		this.view.flxHeader.isVisible = false;
   		 }
     this.view.tbxUsername.text=""
     this.view.tbxUsername.setFocus = true;
     this.view.tbxUsername.onTextChange=this.setButton;
   },
  setButton:function(){
    if(this.view.tbxUsername.text===""){
      this.view.btnContinue.setEnabled(false);
      this.view.btnContinue.skin="sknBtna0a0a0SSPReg26px";
    }
    else{
       this.view.btnContinue.setEnabled(true);
      this.view.btnContinue.skin="sknBtn0095e426pxEnabled";
    }
  }
});