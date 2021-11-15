define({ 

 //Type your controller code here 
  postshowSample : function(){
    this.view.flxSample.onTouchStart = this.startSpeechSample;
    this.view.flxSample.onTouchEnd = this.stopSpeechSample;
  },
  startSpeechSample: function(){
    alert("on touch start");
    this.view.speechtotext.onSpeechClick();
  },
  stopSpeechSample:function(){
    alert("on touch end");
    this.view.speechtotext.onSpeechCancel();
  },
  speechSuccessSample : function(speechTxt){
    alert("speech to text success---> "+speechTxt);
  },
  

 });