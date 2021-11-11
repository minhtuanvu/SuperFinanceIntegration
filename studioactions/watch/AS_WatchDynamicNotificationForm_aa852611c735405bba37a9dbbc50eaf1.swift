@objc class func AS_WatchDynamicNotificationForm_aa852611c735405bba37a9dbbc50eaf1(_ form: frmBalanceNotificationController, _ dict: [NSObject: AnyObject], _ completionHandler: ((WKUserNotificationInterfaceType) -> Void)) {
print("This is remote notification");
           var remoteNotification = dict as? [NSString: AnyObject];
           if(remoteNotification != nil){
               var aps1 = remoteNotification!["aps"] as? [String: AnyObject];
               var aps = aps1!["alert"] as? [String: AnyObject];
               if(aps != nil){
                   form.notificationTitle.setText(aps!["title"] as? String);
                   form.notificationMessage.setText(aps!["body"] as? String);
               }
           }
		   WKInterfaceDevice.current().play(.notification)
           completionHandler(.custom);

}