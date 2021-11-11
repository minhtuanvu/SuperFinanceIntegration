import Foundation

class MessageQueueItem : NSObject {
  var message:[String : Any]
  var replyHandler: (([String : Any]) -> Void)?
  var form: WKInterfaceController?
  var errorHandler: ((Error) -> Void)?
  init(message_: [String : Any], replyHandler_: (([String : Any]) -> Void)?, errorHandler_:((Error) -> Void)?, form_: WKInterfaceController?) {
    self.message = message_;
    self.replyHandler = replyHandler_;
    self.errorHandler = errorHandler_;
    self.form = form_;
    super.init();
  }
}
