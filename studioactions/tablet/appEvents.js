define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_AppEvents_fd00ba20ac924e67aa64179ac0f38893: function AS_AppEvents_fd00ba20ac924e67aa64179ac0f38893(eventobject) {
        var self = this;
        var MenuHandler = applicationManager.getMenuHandler();
        return MenuHandler.appForceTouchCallBack(eventobject);
    },
    AS_AppEvents_b112f248770949a6aa74e61193c13c1f: function AS_AppEvents_b112f248770949a6aa74e61193c13c1f(eventobject) {
        var self = this;
        applicationManager.postAppInitiate();
        applicationManager.applicationMode = "Tablet";
        kony.application.setApplicationProperties({
            "statusBarForegroundColor": "000000"
        });
    },
    AS_AppEvents_d36494ba138548328413faac452abee7: function AS_AppEvents_d36494ba138548328413faac452abee7(eventobject) {
        var self = this;
        var ApplicationManager = require('ApplicationManager');
        applicationManager = ApplicationManager.getApplicationManager();
        applicationManager.preappInitCalls();
    }
});