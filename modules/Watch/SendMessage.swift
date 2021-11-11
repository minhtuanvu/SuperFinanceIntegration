import Foundation
import WatchConnectivity


class SendMessage : NSObject,WCSessionDelegate{
  var messageQueue:Array<MessageQueueItem>;
  static var sharedInstance:SendMessage? = nil;
  private var session:WCSession!;
  private var sessionReachable = false
  private var currentFormController:WKInterfaceController? = nil
  @available(watchOS 2.2, *)
  internal func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?){

    if(activationState == .activated){
      if(messageQueue.count > 0){
        let messageQueueItem = messageQueue[0];
        if(session.isReachable){
          print("session reachable on phone");
          self.requestData(messageQueueItem.message, replyHandler: messageQueueItem.replyHandler, errorHandler: messageQueueItem.errorHandler ,messageQueueItem.form);
        }
      }
    }
    else if(activationState == .notActivated){
      // TODO: if session activation fails
      print("session not active")
    }
  }

  override init() {
    self.messageQueue = []
    super.init();
    // Session objects are always available on Apple Watch, no need to check isSupported on session
    session = WCSession.default;
    if((session) != nil){
      if(session.delegate == nil){
        session.delegate = self;
        session.activate()
      }
    }
  }

  class func getSharedInstance() -> (SendMessage) {
    if(sharedInstance == nil){
      sharedInstance =  SendMessage();
    }
    return sharedInstance!;
  }

  func requestData(_ message: [String : Any], replyHandler: (([String : Any]) -> Void)?,errorHandler: ((Error) -> Void)? ,_ form: WKInterfaceController?) {
    currentFormController = form
    if(session != nil) {
        if #available(watchOSApplicationExtension 2.2, *) {
            if(session.activationState == .activated) {
                if(session!.isReachable) {
                    session!.sendMessage(message, replyHandler: replyHandler,errorHandler: errorHandler);
                }
                else {
                    let error = NSError(domain: WCErrorDomain, code: 7005, userInfo: nil)
                    errorHandler!(error)
                }
                self.messageQueue.remove(at: 0)
            }
            else{
                // TODO: if session is not activated or activation fails
                session.activate();
            }
        } else {
            // Fallback on earlier versions
        }
    }
  }

  /* This is a delegate method on WCSession and it gets invoked when session reachability
  changes */
  //  func sessionReachabilityDidChange(_ session: WCSession) {
  //    if(sessionReachable == session.isReachable){
  //      return;
  //    }
  //    sessionReachable = session.isReachable;
  //    if(!session.isReachable) {
  //        var dict = [String:AnyObject]()
  //        dict["error"] = "kony.appleWatch.reachabilityFailure".localized() as AnyObject
  //        if session.iOSDeviceNeedsUnlockAfterRebootForReachability {
  //            dict["error"] = "kony.appleWatch.rebootError".localized() as AnyObject
  //        }
  //        if #available(watchOSApplicationExtension 4.0, *) {
  //          if((WKExtension.shared().visibleInterfaceController?.isKind(of: frmSplashScreenController.self))!){
  //            stopLoading( WKExtension.shared().visibleInterfaceController as! frmSplashScreenController)
  //          }
  //          else
  //          if((WKExtension.shared().visibleInterfaceController?.isKind(of: frmDashboardController.self))!)
  //          {
  //            stopLoading( WKExtension.shared().visibleInterfaceController as! frmDashboardController)
  //          }
  //
  //          if((WKExtension.shared().visibleInterfaceController) != nil){
  //            WatchUtils.navigateToForm(WKExtension.shared().visibleInterfaceController!,Constants.ERROR_FORM,dict)
  //          }
  //        }
  //    }
  //  }
}

