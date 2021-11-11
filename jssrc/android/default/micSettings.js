function setupMic(startCallbacks) {
    setupMicAndroid(startCallbacks);
}

function setupMicAndroid(startCallbacks) {
    var micPermission = kony.application.checkPermission(kony.os.RESOURCE_RECORD_AUDIO);
    if (micPermission.status == kony.application.PERMISSION_DENIED) {
        kony.application.requestPermission(kony.os.RESOURCE_RECORD_AUDIO, permissionCallback);
    } else {
        promptSpeechInput(startCallbacks);
    }
}

function promptSpeechInput(startCallbacks) {
    var ActivityResultListener = java.newClass("ActivityResultListener", "java.lang.Object", ["com.konylabs.ffi.ActivityResultListener"], {
        onActivityResult: function(requestCode, resultCode, data) {
            this.onActivityResultCallback(requestCode, resultCode, data);
        },
        onActivityResultCallback: null
    });
    var activityResultListener = new ActivityResultListener();
    activityResultListener.onActivityResultCallback = onActivityResult;
    var RecognizerIntent = java.import("android.speech.RecognizerIntent");
    var Intent = java.import("android.content.Intent");
    var intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
    intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_PREFERENCE, "en");
    intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
    intent.putExtra(RecognizerIntent.EXTRA_MAX_RESULTS, 1);
    try {
        var KonyMain = java.import("com.konylabs.android.KonyMain");
        var contextObject = KonyMain.getActContext();
        contextObject.registerActivityResultListener(100, activityResultListener);
        contextObject.startActivityForResult(intent, 100);
    } catch (e) {
        kony.print("error " + JSON.stringify(e));
        startCallbacks.onError(e.message);
    }

    function onActivityResult(requestCode, resultCode, data) {
        if (requestCode == 100) {
            if (resultCode == KonyMain.RESULT_OK) {
                var ArrayList = java.import('java.util.ArrayList');
                var list = new ArrayList();
                list = data.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS);
                var result = list.get(0).toString();
                startCallbacks.onSuccess(result);
            } else if (resultCode == KonyMain.RESULT_CANCELED) {
                var compiledError = "Error Code";
                startCallbacks.onError(compiledError);
            }
        }
    }
}