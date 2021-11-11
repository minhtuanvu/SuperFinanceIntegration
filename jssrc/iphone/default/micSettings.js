function setupMic(startCallbacks) {
    setupMicIOS(startCallbacks);
}

function setupMicIOS(startCallbacks) {
    var SFSpeechRecognizer = objc.import("SFSpeechRecognizer");
    SFSpeechRecognizer.requestAuthorization(requestAuthResult);

    function requestAuthResult(status) {
        var NSError = objc.import("NSError");
        var NSLocale = objc.import("NSLocale");
        var NSString = objc.import("NSString");
        var AVAudioEngine = objc.import("AVAudioEngine");
        var AVAudioSession = objc.import("AVAudioSession");
        var AVAudioSessionCategory = objc.import("AVAudioSessionCategory");
        var SFSpeechAudioBufferRecognitionRequest = objc.import("SFSpeechAudioBufferRecognitionRequest");
        var audioEngine;
        var recognitionRequest;
        var inputNode;
        var recognitionTask = null;
        switch (status) {
            case 3:
                {
                    var err = null;
                    var nslocale = NSLocale.alloc().initWithLocaleIdentifier("en_US");
                    var speechRecognizer = SFSpeechRecognizer.alloc().initWithLocale(nslocale);
                    audioEngine = AVAudioEngine.alloc().jsinit();
                    recognitionRequest = SFSpeechAudioBufferRecognitionRequest.alloc().jsinit();
                    recognitionRequest.shouldReportPartialResults = false;
                    recognitionRequest.detectMultipleUtterances = false;
                    var audioSession = AVAudioSession.sharedInstance();
                    try {
                        audioSession.setCategoryModeOptionsError("AVAudioSessionCategoryRecord", "AVAudioSessionModeMeasurement", 0x8 /*AVAudioSessioCategoryOptionsDefaultToSpeaker*/ , null);
                        audioSession.setActiveWithOptionsError(true, 1, null);
                    } catch (e) {
                        kony.print("Error getting audioSession3" + e);
                    }
                    if (recognitionTask) {
                        recognitionTask.cancel();
                        recognitionTask = null;
                    }
                    recognitionTask = speechRecognizer.recognitionTaskWithRequestResultHandler(recognitionRequest, recognitionResultHandler);
                    inputNode = audioEngine.inputNode;
                    var recordingFormat = inputNode.outputFormatForBus(0);
                    inputNode.installTapOnBusBufferSizeFormatBlock(0, 1024, recordingFormat, blockDetails);
                    audioEngine.prepare();
                    try {
                        audioEngine.startAndReturnError(err);
                    } catch (e) {
                        kony.print("failed to start audioEngine" + e);
                    }
                }
                break;
            default:
                break;
        }

        function recognitionResultHandler(result, error) {
            if (result) {
                var bestRsp = result.bestTranscription.formattedString.toString();
                startCallbacks.onSuccess(bestRsp);
                audioEngine.stop();
                inputNode.removeTapOnBus(0);
                recognitionTask = null;
                recognitionRequest = null;
            }
            if (error) {
                audioEngine.stop();
                inputNode.removeTapOnBus(0);
                recognitionTask = null;
                recognitionRequest = null;
            }
        }

        function blockDetails(buffer, when) {
            if (buffer !== null && when !== null) {
                recognitionRequest.appendAudioPCMBuffer(buffer);
            }
        }

        function permissionCallback(permissionStatus) {
            if (permissionStatus.status == kony.application.PERMISSION_GRANTED) {
                this.promptSpeechInput(startCallbacks);
            } else {
                kony.ui.Alert("calling permission not granted");
            }
        }
    }
}