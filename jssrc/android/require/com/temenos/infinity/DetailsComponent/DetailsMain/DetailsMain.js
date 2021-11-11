define(function() {
    return function(controller) {
        var DetailsMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "DetailsMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_f7d2c52f7464415ebf791802aa554fae(eventobject);
            },
            "skin": "ICSknFlxBox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "DetailsMain"), extendConfig({}, controller.args[1], "DetailsMain"), extendConfig({}, controller.args[2], "DetailsMain"));
        DetailsMain.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "100%",
            "horizontalScrollIndicator": true,
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "reverseLayoutDirection": false,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMain"), extendConfig({}, controller.args[1], "flxMain"), extendConfig({}, controller.args[2], "flxMain"));
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDetails"), extendConfig({}, controller.args[1], "flxDetails"), extendConfig({}, controller.args[2], "flxDetails"));
        flxDetails.setDefaultUnit(kony.flex.DP);
        var flx1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flx1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flx1"), extendConfig({}, controller.args[1], "flx1"), extendConfig({}, controller.args[2], "flx1"));
        flx1.setDefaultUnit(kony.flex.DP);
        var lblText1 = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblText1",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknlblSSP72727215px",
            "text": "Transfer:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "12dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblText1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblText1"));
        var flxS = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "15dp",
            "clipBounds": true,
            "height": "19dp",
            "id": "flxS",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "33dp",
            "width": "120dp",
            "zIndex": 1
        }, controller.args[0], "flxS"), extendConfig({}, controller.args[1], "flxS"), extendConfig({}, controller.args[2], "flxS"));
        flxS.setDefaultUnit(kony.flex.DP);
        var statusLabel = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "statusLabel",
            "isVisible": true,
            "right": "0dp",
            "skin": "ICSknlblSSP42424215px",
            "text": "Completed",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "statusLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "statusLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "statusLabel"));
        var flxStatus = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "12dp",
            "id": "flxStatus",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "10dp",
            "skin": "slFbox",
            "width": "12dp",
            "zIndex": 1
        }, controller.args[0], "flxStatus"), extendConfig({}, controller.args[1], "flxStatus"), extendConfig({}, controller.args[2], "flxStatus"));
        flxStatus.setDefaultUnit(kony.flex.DP);
        var statusImage = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "statusImage",
            "isVisible": true,
            "left": "0dp",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "statusImage"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "statusImage"), extendConfig({}, controller.args[2], "statusImage"));
        flxStatus.add(statusImage);
        flxS.add(statusLabel, flxStatus);
        var flxIconText1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "15dp",
            "clipBounds": true,
            "id": "flxIconText1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "33dp",
            "width": "75%",
            "zIndex": 1
        }, controller.args[0], "flxIconText1"), extendConfig({}, controller.args[1], "flxIconText1"), extendConfig({}, controller.args[2], "flxIconText1"));
        flxIconText1.setDefaultUnit(kony.flex.DP);
        var flxIcon1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxIcon1",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "28dp",
            "zIndex": 1
        }, controller.args[0], "flxIcon1"), extendConfig({}, controller.args[1], "flxIcon1"), extendConfig({}, controller.args[2], "flxIcon1"));
        flxIcon1.setDefaultUnit(kony.flex.DP);
        var icon1 = new kony.ui.Image2(extendConfig({
            "height": "18dp",
            "id": "icon1",
            "isVisible": true,
            "left": "0dp",
            "src": "combinedusericon.png",
            "top": "0dp",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "icon1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "icon1"), extendConfig({}, controller.args[2], "icon1"));
        flxIcon1.add(icon1);
        var lblValue1 = new kony.ui.Label(extendConfig({
            "id": "lblValue1",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknlblSSP4176A418px",
            "text": "$400.00",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblValue1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblValue1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblValue1"));
        flxIconText1.add(flxIcon1, lblValue1);
        var flxSeparator1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknflxE3E3E3",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator1"), extendConfig({}, controller.args[1], "flxSeparator1"), extendConfig({}, controller.args[2], "flxSeparator1"));
        flxSeparator1.setDefaultUnit(kony.flex.DP);
        flxSeparator1.add();
        flx1.add(lblText1, flxS, flxIconText1, flxSeparator1);
        var flx2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flx2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flx2"), extendConfig({}, controller.args[1], "flx2"), extendConfig({}, controller.args[2], "flx2"));
        flx2.setDefaultUnit(kony.flex.DP);
        var lblText2 = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblText2",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknlblSSP72727215px",
            "text": "Recipient:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "12dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblText2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblText2"));
        var flxIconText2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "15dp",
            "clipBounds": true,
            "id": "flxIconText2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "33dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxIconText2"), extendConfig({}, controller.args[1], "flxIconText2"), extendConfig({}, controller.args[2], "flxIconText2"));
        flxIconText2.setDefaultUnit(kony.flex.DP);
        var flxIcon2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxIcon2",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "28dp",
            "zIndex": 1
        }, controller.args[0], "flxIcon2"), extendConfig({}, controller.args[1], "flxIcon2"), extendConfig({}, controller.args[2], "flxIcon2"));
        flxIcon2.setDefaultUnit(kony.flex.DP);
        var icon2 = new kony.ui.Image2(extendConfig({
            "height": "18dp",
            "id": "icon2",
            "isVisible": true,
            "left": "0dp",
            "src": "combinedusericon.png",
            "top": "0dp",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "icon2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "icon2"), extendConfig({}, controller.args[2], "icon2"));
        flxIcon2.add(icon2);
        var lblValue2 = new kony.ui.Label(extendConfig({
            "id": "lblValue2",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknlblSSP42424215px",
            "text": "Elena Smith...6975",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblValue2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblValue2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblValue2"));
        flxIconText2.add(flxIcon2, lblValue2);
        var flxSeparator2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknflxE3E3E3",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator2"), extendConfig({}, controller.args[1], "flxSeparator2"), extendConfig({}, controller.args[2], "flxSeparator2"));
        flxSeparator2.setDefaultUnit(kony.flex.DP);
        flxSeparator2.add();
        flx2.add(lblText2, flxIconText2, flxSeparator2);
        var flx3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flx3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flx3"), extendConfig({}, controller.args[1], "flx3"), extendConfig({}, controller.args[2], "flx3"));
        flx3.setDefaultUnit(kony.flex.DP);
        var lblText3 = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblText3",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknlblSSP72727215px",
            "text": "From Account:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "12dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblText3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText3"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblText3"));
        var flxIconText3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "15dp",
            "clipBounds": true,
            "id": "flxIconText3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "33dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxIconText3"), extendConfig({}, controller.args[1], "flxIconText3"), extendConfig({}, controller.args[2], "flxIconText3"));
        flxIconText3.setDefaultUnit(kony.flex.DP);
        var flxIcon3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxIcon3",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "28dp",
            "zIndex": 1
        }, controller.args[0], "flxIcon3"), extendConfig({}, controller.args[1], "flxIcon3"), extendConfig({}, controller.args[2], "flxIcon3"));
        flxIcon3.setDefaultUnit(kony.flex.DP);
        var icon3 = new kony.ui.Image2(extendConfig({
            "height": "18dp",
            "id": "icon3",
            "isVisible": true,
            "left": "0dp",
            "src": "combinedusericon.png",
            "top": "0dp",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "icon3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "icon3"), extendConfig({}, controller.args[2], "icon3"));
        flxIcon3.add(icon3);
        var lblValue3 = new kony.ui.Label(extendConfig({
            "id": "lblValue3",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknlblSSP42424215px",
            "text": "Elena Smith...6975",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblValue3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblValue3"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblValue3"));
        flxIconText3.add(flxIcon3, lblValue3);
        var flxSeparator3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknflxE3E3E3",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator3"), extendConfig({}, controller.args[1], "flxSeparator3"), extendConfig({}, controller.args[2], "flxSeparator3"));
        flxSeparator3.setDefaultUnit(kony.flex.DP);
        flxSeparator3.add();
        flx3.add(lblText3, flxIconText3, flxSeparator3);
        var flx4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flx4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flx4"), extendConfig({}, controller.args[1], "flx4"), extendConfig({}, controller.args[2], "flx4"));
        flx4.setDefaultUnit(kony.flex.DP);
        var lblText4 = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblText4",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknlblSSP72727215px",
            "text": "Transaction Date:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "12dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblText4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText4"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblText4"));
        var flxIconText4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "15dp",
            "clipBounds": true,
            "id": "flxIconText4",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "33dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxIconText4"), extendConfig({}, controller.args[1], "flxIconText4"), extendConfig({}, controller.args[2], "flxIconText4"));
        flxIconText4.setDefaultUnit(kony.flex.DP);
        var flxIcon4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxIcon4",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "28dp",
            "zIndex": 1
        }, controller.args[0], "flxIcon4"), extendConfig({}, controller.args[1], "flxIcon4"), extendConfig({}, controller.args[2], "flxIcon4"));
        flxIcon4.setDefaultUnit(kony.flex.DP);
        var icon4 = new kony.ui.Image2(extendConfig({
            "height": "18dp",
            "id": "icon4",
            "isVisible": true,
            "left": "0dp",
            "src": "combinedusericon.png",
            "top": "0dp",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "icon4"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "icon4"), extendConfig({}, controller.args[2], "icon4"));
        flxIcon4.add(icon4);
        var lblValue4 = new kony.ui.Label(extendConfig({
            "id": "lblValue4",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknlblSSP42424215px",
            "text": "11/12/2020",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblValue4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblValue4"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblValue4"));
        flxIconText4.add(flxIcon4, lblValue4);
        var flxSeparator4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknflxE3E3E3",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator4"), extendConfig({}, controller.args[1], "flxSeparator4"), extendConfig({}, controller.args[2], "flxSeparator4"));
        flxSeparator4.setDefaultUnit(kony.flex.DP);
        flxSeparator4.add();
        flx4.add(lblText4, flxIconText4, flxSeparator4);
        var flx5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flx5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flx5"), extendConfig({}, controller.args[1], "flx5"), extendConfig({}, controller.args[2], "flx5"));
        flx5.setDefaultUnit(kony.flex.DP);
        var lblText5 = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblText5",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknlblSSP72727215px",
            "text": "Frequency:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "12dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblText5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText5"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblText5"));
        var flxIconText5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "15dp",
            "clipBounds": true,
            "id": "flxIconText5",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "33dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxIconText5"), extendConfig({}, controller.args[1], "flxIconText5"), extendConfig({}, controller.args[2], "flxIconText5"));
        flxIconText5.setDefaultUnit(kony.flex.DP);
        var flxIcon5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxIcon5",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "28dp",
            "zIndex": 1
        }, controller.args[0], "flxIcon5"), extendConfig({}, controller.args[1], "flxIcon5"), extendConfig({}, controller.args[2], "flxIcon5"));
        flxIcon5.setDefaultUnit(kony.flex.DP);
        var icon5 = new kony.ui.Image2(extendConfig({
            "height": "18dp",
            "id": "icon5",
            "isVisible": true,
            "left": "0dp",
            "src": "combinedusericon.png",
            "top": "0dp",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "icon5"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "icon5"), extendConfig({}, controller.args[2], "icon5"));
        flxIcon5.add(icon5);
        var lblValue5 = new kony.ui.Label(extendConfig({
            "id": "lblValue5",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknlblSSP42424215px",
            "text": "once",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblValue5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblValue5"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblValue5"));
        flxIconText5.add(flxIcon5, lblValue5);
        var flxSeparator5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknflxE3E3E3",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator5"), extendConfig({}, controller.args[1], "flxSeparator5"), extendConfig({}, controller.args[2], "flxSeparator5"));
        flxSeparator5.setDefaultUnit(kony.flex.DP);
        flxSeparator5.add();
        flx5.add(lblText5, flxIconText5, flxSeparator5);
        var flx6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flx6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flx6"), extendConfig({}, controller.args[1], "flx6"), extendConfig({}, controller.args[2], "flx6"));
        flx6.setDefaultUnit(kony.flex.DP);
        var lblText6 = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblText6",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknlblSSP72727215px",
            "text": "Reference Number:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "12dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblText6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText6"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblText6"));
        var flxIconText6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "15dp",
            "clipBounds": true,
            "id": "flxIconText6",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "33dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxIconText6"), extendConfig({}, controller.args[1], "flxIconText6"), extendConfig({}, controller.args[2], "flxIconText6"));
        flxIconText6.setDefaultUnit(kony.flex.DP);
        var flxIcon6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxIcon6",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "28dp",
            "zIndex": 1
        }, controller.args[0], "flxIcon6"), extendConfig({}, controller.args[1], "flxIcon6"), extendConfig({}, controller.args[2], "flxIcon6"));
        flxIcon6.setDefaultUnit(kony.flex.DP);
        var icon6 = new kony.ui.Image2(extendConfig({
            "height": "18dp",
            "id": "icon6",
            "isVisible": true,
            "left": "0dp",
            "src": "combinedusericon.png",
            "top": "0dp",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "icon6"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "icon6"), extendConfig({}, controller.args[2], "icon6"));
        flxIcon6.add(icon6);
        var lblValue6 = new kony.ui.Label(extendConfig({
            "id": "lblValue6",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknlblSSP42424215px",
            "text": "98778989889",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblValue6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblValue6"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblValue6"));
        flxIconText6.add(flxIcon6, lblValue6);
        var flxSeparator6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknflxE3E3E3",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator6"), extendConfig({}, controller.args[1], "flxSeparator6"), extendConfig({}, controller.args[2], "flxSeparator6"));
        flxSeparator6.setDefaultUnit(kony.flex.DP);
        flxSeparator6.add();
        flx6.add(lblText6, flxIconText6, flxSeparator6);
        var flx7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flx7",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flx7"), extendConfig({}, controller.args[1], "flx7"), extendConfig({}, controller.args[2], "flx7"));
        flx7.setDefaultUnit(kony.flex.DP);
        var lblText7 = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblText7",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknlblSSP72727215px",
            "text": "Note:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "12dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblText7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText7"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblText7"));
        var flxIconText7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "15dp",
            "clipBounds": true,
            "id": "flxIconText7",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "33dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxIconText7"), extendConfig({}, controller.args[1], "flxIconText7"), extendConfig({}, controller.args[2], "flxIconText7"));
        flxIconText7.setDefaultUnit(kony.flex.DP);
        var flxIcon7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxIcon7",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "28dp",
            "zIndex": 1
        }, controller.args[0], "flxIcon7"), extendConfig({}, controller.args[1], "flxIcon7"), extendConfig({}, controller.args[2], "flxIcon7"));
        flxIcon7.setDefaultUnit(kony.flex.DP);
        var icon7 = new kony.ui.Image2(extendConfig({
            "height": "18dp",
            "id": "icon7",
            "isVisible": true,
            "left": "0dp",
            "src": "combinedusericon.png",
            "top": "0dp",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "icon7"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "icon7"), extendConfig({}, controller.args[2], "icon7"));
        flxIcon7.add(icon7);
        var lblValue7 = new kony.ui.Label(extendConfig({
            "id": "lblValue7",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknlblSSP42424215px",
            "text": "Rainy Day fundsfor the family and friends. Personal Accounts",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblValue7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblValue7"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblValue7"));
        flxIconText7.add(flxIcon7, lblValue7);
        var flxSeparator7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator7",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknflxE3E3E3",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator7"), extendConfig({}, controller.args[1], "flxSeparator7"), extendConfig({}, controller.args[2], "flxSeparator7"));
        flxSeparator7.setDefaultUnit(kony.flex.DP);
        flxSeparator7.add();
        flx7.add(lblText7, flxIconText7, flxSeparator7);
        var flx8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flx8",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flx8"), extendConfig({}, controller.args[1], "flx8"), extendConfig({}, controller.args[2], "flx8"));
        flx8.setDefaultUnit(kony.flex.DP);
        var lblText8 = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblText8",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknlblSSP72727215px",
            "text": "Label:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "12dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblText8"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText8"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblText8"));
        var flxIconText8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "15dp",
            "clipBounds": true,
            "id": "flxIconText8",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "33dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxIconText8"), extendConfig({}, controller.args[1], "flxIconText8"), extendConfig({}, controller.args[2], "flxIconText8"));
        flxIconText8.setDefaultUnit(kony.flex.DP);
        var flxIcon8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxIcon8",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "28dp",
            "zIndex": 1
        }, controller.args[0], "flxIcon8"), extendConfig({}, controller.args[1], "flxIcon8"), extendConfig({}, controller.args[2], "flxIcon8"));
        flxIcon8.setDefaultUnit(kony.flex.DP);
        var icon8 = new kony.ui.Image2(extendConfig({
            "height": "18dp",
            "id": "icon8",
            "isVisible": true,
            "left": "0dp",
            "src": "combinedusericon.png",
            "top": "0dp",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "icon8"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "icon8"), extendConfig({}, controller.args[2], "icon8"));
        flxIcon8.add(icon8);
        var lblValue8 = new kony.ui.Label(extendConfig({
            "id": "lblValue8",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknlblSSP42424215px",
            "text": "Elena Smith...6975",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblValue8"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblValue8"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblValue8"));
        flxIconText8.add(flxIcon8, lblValue8);
        var flxSeparator8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator8",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknflxE3E3E3",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator8"), extendConfig({}, controller.args[1], "flxSeparator8"), extendConfig({}, controller.args[2], "flxSeparator8"));
        flxSeparator8.setDefaultUnit(kony.flex.DP);
        flxSeparator8.add();
        flx8.add(lblText8, flxIconText8, flxSeparator8);
        var flx9 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flx9",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flx9"), extendConfig({}, controller.args[1], "flx9"), extendConfig({}, controller.args[2], "flx9"));
        flx9.setDefaultUnit(kony.flex.DP);
        var lblText9 = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblText9",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknlblSSP72727215px",
            "text": "Label:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "12dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblText9"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText9"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblText9"));
        var flxIconText9 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "15dp",
            "clipBounds": true,
            "id": "flxIconText9",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "33dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxIconText9"), extendConfig({}, controller.args[1], "flxIconText9"), extendConfig({}, controller.args[2], "flxIconText9"));
        flxIconText9.setDefaultUnit(kony.flex.DP);
        var flxIcon9 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxIcon9",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "28dp",
            "zIndex": 1
        }, controller.args[0], "flxIcon9"), extendConfig({}, controller.args[1], "flxIcon9"), extendConfig({}, controller.args[2], "flxIcon9"));
        flxIcon9.setDefaultUnit(kony.flex.DP);
        var icon9 = new kony.ui.Image2(extendConfig({
            "height": "18dp",
            "id": "icon9",
            "isVisible": true,
            "left": "0dp",
            "src": "combinedusericon.png",
            "top": "0dp",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "icon9"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "icon9"), extendConfig({}, controller.args[2], "icon9"));
        flxIcon9.add(icon9);
        var lblValue9 = new kony.ui.Label(extendConfig({
            "id": "lblValue9",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknlblSSP42424215px",
            "text": "Elena Smith...6975",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblValue9"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblValue9"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblValue9"));
        flxIconText9.add(flxIcon9, lblValue9);
        var flxSeparator9 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator9",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknflxE3E3E3",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator9"), extendConfig({}, controller.args[1], "flxSeparator9"), extendConfig({}, controller.args[2], "flxSeparator9"));
        flxSeparator9.setDefaultUnit(kony.flex.DP);
        flxSeparator9.add();
        flx9.add(lblText9, flxIconText9, flxSeparator9);
        var flx10 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flx10",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flx10"), extendConfig({}, controller.args[1], "flx10"), extendConfig({}, controller.args[2], "flx10"));
        flx10.setDefaultUnit(kony.flex.DP);
        var lblText10 = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblText10",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknlblSSP72727215px",
            "text": "Label:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "12dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblText10"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText10"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblText10"));
        var flxIconText10 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "15dp",
            "clipBounds": true,
            "id": "flxIconText10",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "33dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxIconText10"), extendConfig({}, controller.args[1], "flxIconText10"), extendConfig({}, controller.args[2], "flxIconText10"));
        flxIconText10.setDefaultUnit(kony.flex.DP);
        var flxIcon10 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxIcon10",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "28dp",
            "zIndex": 1
        }, controller.args[0], "flxIcon10"), extendConfig({}, controller.args[1], "flxIcon10"), extendConfig({}, controller.args[2], "flxIcon10"));
        flxIcon10.setDefaultUnit(kony.flex.DP);
        var icon10 = new kony.ui.Image2(extendConfig({
            "height": "18dp",
            "id": "icon10",
            "isVisible": true,
            "left": "0dp",
            "src": "combinedusericon.png",
            "top": "0dp",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "icon10"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "icon10"), extendConfig({}, controller.args[2], "icon10"));
        flxIcon10.add(icon10);
        var lblValue10 = new kony.ui.Label(extendConfig({
            "id": "lblValue10",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknlblSSP42424215px",
            "text": "Elena Smith...6975",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblValue10"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblValue10"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblValue10"));
        flxIconText10.add(flxIcon10, lblValue10);
        var flxSeparator10 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator10",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknflxE3E3E3",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator10"), extendConfig({}, controller.args[1], "flxSeparator10"), extendConfig({}, controller.args[2], "flxSeparator10"));
        flxSeparator10.setDefaultUnit(kony.flex.DP);
        flxSeparator10.add();
        flx10.add(lblText10, flxIconText10, flxSeparator10);
        var flx11 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flx11",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flx11"), extendConfig({}, controller.args[1], "flx11"), extendConfig({}, controller.args[2], "flx11"));
        flx11.setDefaultUnit(kony.flex.DP);
        var lblText11 = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblText11",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknlblSSP72727215px",
            "text": "Label:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "12dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblText11"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText11"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblText11"));
        var flxIconText11 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "15dp",
            "clipBounds": true,
            "id": "flxIconText11",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "33dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxIconText11"), extendConfig({}, controller.args[1], "flxIconText11"), extendConfig({}, controller.args[2], "flxIconText11"));
        flxIconText11.setDefaultUnit(kony.flex.DP);
        var flxIcon11 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxIcon11",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "28dp",
            "zIndex": 1
        }, controller.args[0], "flxIcon11"), extendConfig({}, controller.args[1], "flxIcon11"), extendConfig({}, controller.args[2], "flxIcon11"));
        flxIcon11.setDefaultUnit(kony.flex.DP);
        var icon11 = new kony.ui.Image2(extendConfig({
            "height": "18dp",
            "id": "icon11",
            "isVisible": true,
            "left": "0dp",
            "src": "combinedusericon.png",
            "top": "0dp",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "icon11"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "icon11"), extendConfig({}, controller.args[2], "icon11"));
        flxIcon11.add(icon11);
        var lblValue11 = new kony.ui.Label(extendConfig({
            "id": "lblValue11",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknlblSSP42424215px",
            "text": "Elena Smith...6975",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblValue11"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblValue11"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblValue11"));
        flxIconText11.add(flxIcon11, lblValue11);
        var flxSeparator11 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator11",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknflxE3E3E3",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator11"), extendConfig({}, controller.args[1], "flxSeparator11"), extendConfig({}, controller.args[2], "flxSeparator11"));
        flxSeparator11.setDefaultUnit(kony.flex.DP);
        flxSeparator11.add();
        flx11.add(lblText11, flxIconText11, flxSeparator11);
        var flx12 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flx12",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flx12"), extendConfig({}, controller.args[1], "flx12"), extendConfig({}, controller.args[2], "flx12"));
        flx12.setDefaultUnit(kony.flex.DP);
        var lblText12 = new kony.ui.Label(extendConfig({
            "height": "19dp",
            "id": "lblText12",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknlblSSP72727215px",
            "text": "Label:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "12dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblText12"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText12"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblText12"));
        var flxIconText12 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "15dp",
            "clipBounds": true,
            "id": "flxIconText12",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "33dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxIconText12"), extendConfig({}, controller.args[1], "flxIconText12"), extendConfig({}, controller.args[2], "flxIconText12"));
        flxIconText12.setDefaultUnit(kony.flex.DP);
        var flxIcon12 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxIcon12",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "28dp",
            "zIndex": 1
        }, controller.args[0], "flxIcon12"), extendConfig({}, controller.args[1], "flxIcon12"), extendConfig({}, controller.args[2], "flxIcon12"));
        flxIcon12.setDefaultUnit(kony.flex.DP);
        var icon12 = new kony.ui.Image2(extendConfig({
            "height": "18dp",
            "id": "icon12",
            "isVisible": true,
            "left": "0dp",
            "src": "combinedusericon.png",
            "top": "0dp",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "icon12"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "icon12"), extendConfig({}, controller.args[2], "icon12"));
        flxIcon12.add(icon12);
        var lblValue12 = new kony.ui.Label(extendConfig({
            "id": "lblValue12",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknlblSSP42424215px",
            "text": "Elena Smith...6975",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblValue12"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblValue12"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblValue12"));
        flxIconText12.add(flxIcon12, lblValue12);
        var flxSeparator12 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator12",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknflxE3E3E3",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator12"), extendConfig({}, controller.args[1], "flxSeparator12"), extendConfig({}, controller.args[2], "flxSeparator12"));
        flxSeparator12.setDefaultUnit(kony.flex.DP);
        flxSeparator12.add();
        flx12.add(lblText12, flxIconText12, flxSeparator12);
        flxDetails.add(flx1, flx2, flx3, flx4, flx5, flx6, flx7, flx8, flx9, flx10, flx11, flx12);
        var flxButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "20dp",
            "clipBounds": true,
            "id": "flxButtons",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "reverseLayoutDirection": false,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxButtons"), extendConfig({}, controller.args[1], "flxButtons"), extendConfig({}, controller.args[2], "flxButtons"));
        flxButtons.setDefaultUnit(kony.flex.DP);
        var button1 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "50dp",
            "id": "button1",
            "isVisible": true,
            "skin": "ICSknBtn003E75FFFFFF15px",
            "text": "Edit",
            "top": "20dp",
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "button1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "button1"), extendConfig({}, controller.args[2], "button1"));
        var button2 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "50dp",
            "id": "button2",
            "isVisible": true,
            "skin": "ICSknBtnFFFFFF003E7515px",
            "text": "Button",
            "top": "20dp",
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "button2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "button2"), extendConfig({}, controller.args[2], "button2"));
        var button3 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "50dp",
            "id": "button3",
            "isVisible": false,
            "text": "Button",
            "top": "20dp",
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "button3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "button3"), extendConfig({}, controller.args[2], "button3"));
        var button4 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "50dp",
            "id": "button4",
            "isVisible": false,
            "text": "Button",
            "top": "20dp",
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "button4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "button4"), extendConfig({}, controller.args[2], "button4"));
        var button5 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "50dp",
            "id": "button5",
            "isVisible": false,
            "text": "Button",
            "top": "20dp",
            "width": "88%",
            "zIndex": 1
        }, controller.args[0], "button5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "button5"), extendConfig({}, controller.args[2], "button5"));
        flxButtons.add(button1, button2, button3, button4, button5);
        flxMain.add(flxDetails, flxButtons);
        var flxPopupMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPopupMain",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx00000050Op",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPopupMain"), extendConfig({}, controller.args[1], "flxPopupMain"), extendConfig({}, controller.args[2], "flxPopupMain"));
        flxPopupMain.setDefaultUnit(kony.flex.DP);
        var flxPopUpSuccess = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "270dp",
            "id": "flxPopUpSuccess",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "ICSknFlxFFFFFFRoundCorner",
            "width": "288dp",
            "zIndex": 2
        }, controller.args[0], "flxPopUpSuccess"), extendConfig({}, controller.args[1], "flxPopUpSuccess"), extendConfig({}, controller.args[2], "flxPopUpSuccess"));
        flxPopUpSuccess.setDefaultUnit(kony.flex.DP);
        var imgSuccess = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "70dp",
            "id": "imgSuccess",
            "isVisible": true,
            "src": "correct.png",
            "top": "30dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "imgSuccess"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSuccess"), extendConfig({}, controller.args[2], "imgSuccess"));
        var btnDone = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "height": "50dp",
            "id": "btnDone",
            "isVisible": true,
            "skin": "ICSknBtn003E75FFFFFF15px",
            "text": "Done",
            "width": "248dp",
            "zIndex": 1
        }, controller.args[0], "btnDone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDone"), extendConfig({}, controller.args[2], "btnDone"));
        var lblSuccessText = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblSuccessText",
            "isVisible": true,
            "skin": "ICSknlblSSPB00000024px",
            "text": "Successfully cancelled direct debit",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "110dp",
            "width": "235dp",
            "zIndex": 1
        }, controller.args[0], "lblSuccessText"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSuccessText"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSuccessText"));
        flxPopUpSuccess.add(imgSuccess, btnDone, lblSuccessText);
        flxPopupMain.add(flxPopUpSuccess);
        DetailsMain.add(flxMain, flxPopupMain);
        return DetailsMain;
    }
})