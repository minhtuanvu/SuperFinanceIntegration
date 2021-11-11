define("flxApproachListSF", function() {
    return function(controller) {
        var flxApproachListSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "220dp",
            "id": "flxApproachListSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxApproachListSF.setDefaultUnit(kony.flex.DP);
        var flxMainView = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxMainView",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "5.00%",
            "isModalContainer": false,
            "skin": "sknFlxBlackIndicatorSF",
            "top": "5.01%",
            "width": "90%"
        }, {}, {});
        flxMainView.setDefaultUnit(kony.flex.DP);
        var flxPercentageSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "flxPercentageSF",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5%",
            "width": "90%"
        }, {}, {});
        flxPercentageSF.setDefaultUnit(kony.flex.DP);
        var lblPercentage1SF = new kony.ui.Label({
            "id": "lblPercentage1SF",
            "isVisible": true,
            "left": "0",
            "skin": "sknlblPercentageSF",
            "text": "85%",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "33.33%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblPercentage2SF = new kony.ui.Label({
            "id": "lblPercentage2SF",
            "isVisible": true,
            "left": "0",
            "skin": "sknlblPercentageSF",
            "text": "5%",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "33.33%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblPercentage3SF = new kony.ui.Label({
            "id": "lblPercentage3SF",
            "isVisible": true,
            "left": "0",
            "skin": "sknlblPercentageSF",
            "text": "10%",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "33.33%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxPercentageSF.add(lblPercentage1SF, lblPercentage2SF, lblPercentage3SF);
        var flxFundsNameSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "flxFundsNameSF",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "2%",
            "width": "90%"
        }, {}, {});
        flxFundsNameSF.setDefaultUnit(kony.flex.DP);
        var lblEquitiesSF = new kony.ui.Label({
            "id": "lblEquitiesSF",
            "isVisible": true,
            "left": "0",
            "skin": "sknLblNormalHeaderSF",
            "text": "Equities",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "33.33%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblFX = new kony.ui.Label({
            "id": "lblFX",
            "isVisible": true,
            "left": "0",
            "skin": "sknLblNormalHeaderSF",
            "text": "FX",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "33.33%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblSecuritiesSF = new kony.ui.Label({
            "id": "lblSecuritiesSF",
            "isVisible": true,
            "left": "0",
            "skin": "sknLblNormalHeaderSF",
            "text": "Securities",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "33.33%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxFundsNameSF.add(lblEquitiesSF, lblFX, lblSecuritiesSF);
        var flxFundsIndicatorSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5%",
            "id": "flxFundsIndicatorSF",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "isModalContainer": false,
            "skin": "sknFlxFundsIndicatorSF",
            "top": "7%",
            "width": "90%"
        }, {}, {});
        flxFundsIndicatorSF.setDefaultUnit(kony.flex.DP);
        var lblYellowSF = new kony.ui.Label({
            "height": "100%",
            "id": "lblYellowSF",
            "isVisible": true,
            "left": "0",
            "skin": "sknlblYellowIndicatorSF",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "50%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblBlueSF = new kony.ui.Label({
            "height": "100%",
            "id": "lblBlueSF",
            "isVisible": true,
            "left": "0",
            "skin": "sknlblBlueIndicatorSF",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "25%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblOrangeSF = new kony.ui.Label({
            "height": "100%",
            "id": "lblOrangeSF",
            "isVisible": true,
            "left": "0",
            "skin": "sknlblOrangeIndicatorSF",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "25%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxFundsIndicatorSF.add(lblYellowSF, lblBlueSF, lblOrangeSF);
        var flxRadioOptionSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20%",
            "id": "flxRadioOptionSF",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "8%",
            "width": "90%"
        }, {}, {});
        flxRadioOptionSF.setDefaultUnit(kony.flex.DP);
        var imgCircleSF = new kony.ui.Image2({
            "centerY": "50%",
            "height": "80%",
            "id": "imgCircleSF",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "radiobuttoninactive.png",
            "top": "10%",
            "width": "10%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblApproachesType = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblApproachesType",
            "isVisible": true,
            "left": "2%",
            "skin": "sknlblPercentageSF",
            "text": "Aggressive Approach - Current",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxRadioOptionSF.add(imgCircleSF, lblApproachesType);
        flxMainView.add(flxPercentageSF, flxFundsNameSF, flxFundsIndicatorSF, flxRadioOptionSF);
        flxApproachListSF.add(flxMainView);
        return flxApproachListSF;
    }
})