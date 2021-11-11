define({

    //get the swipe row details

    onViewCreated: function(eObj) {
        try {
            this.view.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
                fingers: 1
            }, this.swipeGestureHandler);
        } catch (exc) {
            alert("exception in template!!!" + JSON.stringify(exc));
        }
    },
    swipeGestureHandler: function(widgetInfo, gestureInfo, context) {
        var mswipeDirection = gestureInfo.swipeDirection;

        var secIndex = context["sectionIndex"];
        var rowIndex = context["rowIndex"];

        var myInfo = {
            section: secIndex,
            row: rowIndex,
            swipeDirection: mswipeDirection
        };
        this.executeOnParent("swipeRowOption", myInfo);
    }


});