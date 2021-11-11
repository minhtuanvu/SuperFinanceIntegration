define("CampaignManagement/frmLoading", function() {
    return function(controller) {
        function addWidgetsfrmLoading() {
            this.setDefaultUnit(kony.flex.DP);
            var flxLoading = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxLoading",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLoading.setDefaultUnit(kony.flex.DP);
            var imgLoadingIndicator = new kony.ui.Image2({
                "height": "100%",
                "id": "imgLoadingIndicator",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "loaderfullscreen.gif",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLoading.add(imgLoadingIndicator);
            this.add(flxLoading);
        };
        return [{
            "addWidgets": addWidgetsfrmLoading,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmLoading",
            "init": controller.AS_Form_b91ff9cbc8e14faf84262de27178e54d,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_dff55bc8afdd48308a1c05a68d702c26(eventobject);
            },
            "skin": "sknFrmf9f9f9"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});