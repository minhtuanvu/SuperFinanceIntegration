define(function() {
    return function(controller) {
        var StepsApproach = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "StepsApproach",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "StepsApproach"), extendConfig({}, controller.args[1], "StepsApproach"), extendConfig({}, controller.args[2], "StepsApproach"));
        StepsApproach.setDefaultUnit(kony.flex.DP);
        var flxMainSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainSF",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxStepsBGSF",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainSF"), extendConfig({}, controller.args[1], "flxMainSF"), extendConfig({}, controller.args[2], "flxMainSF"));
        flxMainSF.setDefaultUnit(kony.flex.DP);
        var flxPerValueSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "45%",
            "id": "flxPerValueSF",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPerValueSF"), extendConfig({}, controller.args[1], "flxPerValueSF"), extendConfig({}, controller.args[2], "flxPerValueSF"));
        flxPerValueSF.setDefaultUnit(kony.flex.DP);
        var flxPer1SF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxPer1SF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2%",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "30%",
            "zIndex": 1
        }, controller.args[0], "flxPer1SF"), extendConfig({}, controller.args[1], "flxPer1SF"), extendConfig({}, controller.args[2], "flxPer1SF"));
        flxPer1SF.setDefaultUnit(kony.flex.DP);
        var lblPerVal1SF = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblPerVal1SF",
            "isVisible": true,
            "skin": "sknlblPercentageSF",
            "text": "85%",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPerVal1SF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPerVal1SF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPerVal1SF"));
        var lblPerName1SF = new kony.ui.Label(extendConfig({
            "bottom": "10%",
            "centerX": "50%",
            "id": "lblPerName1SF",
            "isVisible": true,
            "skin": "sknlblPercentageSF",
            "text": "Equities",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPerName1SF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPerName1SF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPerName1SF"));
        flxPer1SF.add(lblPerVal1SF, lblPerName1SF);
        var flxPer2SF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxPer2SF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "3%",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "30%",
            "zIndex": 1
        }, controller.args[0], "flxPer2SF"), extendConfig({}, controller.args[1], "flxPer2SF"), extendConfig({}, controller.args[2], "flxPer2SF"));
        flxPer2SF.setDefaultUnit(kony.flex.DP);
        var lblPer2SF = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblPer2SF",
            "isVisible": true,
            "skin": "sknlblPercentageSF",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPer2SF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPer2SF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPer2SF"));
        var lblPerName2SF = new kony.ui.Label(extendConfig({
            "bottom": "10%",
            "centerX": "50%",
            "id": "lblPerName2SF",
            "isVisible": true,
            "skin": "sknlblPercentageSF",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPerName2SF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPerName2SF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPerName2SF"));
        flxPer2SF.add(lblPer2SF, lblPerName2SF);
        var flxper3SF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxper3SF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2%",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "30%",
            "zIndex": 1
        }, controller.args[0], "flxper3SF"), extendConfig({}, controller.args[1], "flxper3SF"), extendConfig({}, controller.args[2], "flxper3SF"));
        flxper3SF.setDefaultUnit(kony.flex.DP);
        var lblPer3SF = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblPer3SF",
            "isVisible": true,
            "skin": "sknlblPercentageSF",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPer3SF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPer3SF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPer3SF"));
        var lblPerName3SF = new kony.ui.Label(extendConfig({
            "bottom": "10%",
            "centerX": "50%",
            "id": "lblPerName3SF",
            "isVisible": true,
            "skin": "sknlblPercentageSF",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPerName3SF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPerName3SF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPerName3SF"));
        flxper3SF.add(lblPer3SF, lblPerName3SF);
        flxPerValueSF.add(flxPer1SF, flxPer2SF, flxper3SF);
        var flxCompPerSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "20%",
            "id": "flxCompPerSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCompPerSF"), extendConfig({}, controller.args[1], "flxCompPerSF"), extendConfig({}, controller.args[2], "flxCompPerSF"));
        flxCompPerSF.setDefaultUnit(kony.flex.DP);
        var flxProgressBgSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "40%",
            "id": "flxProgressBgSF",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "sknFlxApproachCompBGSF",
            "width": "84%",
            "zIndex": 1
        }, controller.args[0], "flxProgressBgSF"), extendConfig({}, controller.args[1], "flxProgressBgSF"), extendConfig({}, controller.args[2], "flxProgressBgSF"));
        flxProgressBgSF.setDefaultUnit(kony.flex.DP);
        var flxComp1SF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxComp1SF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxProgressComp1SF",
            "width": "30%",
            "zIndex": 1
        }, controller.args[0], "flxComp1SF"), extendConfig({}, controller.args[1], "flxComp1SF"), extendConfig({}, controller.args[2], "flxComp1SF"));
        flxComp1SF.setDefaultUnit(kony.flex.DP);
        flxComp1SF.add();
        var flxComp2SF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxComp2SF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxProgressComp2SF",
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxComp2SF"), extendConfig({}, controller.args[1], "flxComp2SF"), extendConfig({}, controller.args[2], "flxComp2SF"));
        flxComp2SF.setDefaultUnit(kony.flex.DP);
        flxComp2SF.add();
        var flxComp3SF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxComp3SF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxProgressComp3SF",
            "width": "30%",
            "zIndex": 1
        }, controller.args[0], "flxComp3SF"), extendConfig({}, controller.args[1], "flxComp3SF"), extendConfig({}, controller.args[2], "flxComp3SF"));
        flxComp3SF.setDefaultUnit(kony.flex.DP);
        flxComp3SF.add();
        flxProgressBgSF.add(flxComp1SF, flxComp2SF, flxComp3SF);
        flxCompPerSF.add(flxProgressBgSF);
        var flxSelectApproachSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "25%",
            "id": "flxSelectApproachSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSelectApproachSF"), extendConfig({}, controller.args[1], "flxSelectApproachSF"), extendConfig({}, controller.args[2], "flxSelectApproachSF"));
        flxSelectApproachSF.setDefaultUnit(kony.flex.DP);
        var flxSelectOptionSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxSelectOptionSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "15%",
            "zIndex": 1
        }, controller.args[0], "flxSelectOptionSF"), extendConfig({}, controller.args[1], "flxSelectOptionSF"), extendConfig({}, controller.args[2], "flxSelectOptionSF"));
        flxSelectOptionSF.setDefaultUnit(kony.flex.DP);
        var lblUnSelectedSF = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblUnSelectedSF",
            "isVisible": true,
            "skin": "sknlblUnselectedOptionSF",
            "text": "",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblUnSelectedSF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUnSelectedSF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblUnSelectedSF"));
        var lblSelectedSF = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblSelectedSF",
            "isVisible": false,
            "skin": "sknLblSelectedOptionSF",
            "text": "",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSelectedSF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSelectedSF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSelectedSF"));
        flxSelectOptionSF.add(lblUnSelectedSF, lblSelectedSF);
        var lblApproachOptionSF = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lblApproachOptionSF",
            "isVisible": true,
            "left": "20%",
            "skin": "sknlblPercentageSF",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblApproachOptionSF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblApproachOptionSF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblApproachOptionSF"));
        flxSelectApproachSF.add(flxSelectOptionSF, lblApproachOptionSF);
        flxMainSF.add(flxPerValueSF, flxCompPerSF, flxSelectApproachSF);
        StepsApproach.add(flxMainSF);
        return StepsApproach;
    }
})