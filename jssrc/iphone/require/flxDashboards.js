define("flxDashboards", function() {
    return function(controller) {
        var flxDashboards = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "flxDashboards",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxDashboards.setDefaultUnit(kony.flex.DP);
        var imgCombinedDashboardIcon = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgCombinedDashboardIcon",
            "isVisible": true,
            "left": "19dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "22dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDashboardName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblDashboardName",
            "isVisible": true,
            "left": "58dp",
            "skin": "sknlbl004B95SSPR15dp",
            "text": "Combined Dashboard",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var imgSelectedIcon = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgSelectedIcon",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "48dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDashboards.add(imgCombinedDashboardIcon, lblDashboardName, imgSelectedIcon);
        return flxDashboards;
    }
})