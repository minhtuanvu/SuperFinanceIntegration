this.addEventListener("message", function (event) {
    kony.print('Worker Scope : onmessage : event.data : ' + event.data["message"]);
    detectDynamicInstrumentation();
});
function detectedCallbackFunction(){
    this.postMessage({'message':"Frida detected"});
}
var params = {
  detectedCallback: detectedCallbackFunction,
  undetectedCallback: function(){this.close()},
  "type": "fridadeepscan"
};
function detectDynamicInstrumentation(){
  kony.os.detectDynamicInstrumentation(params);
}