define("NewUserModule/frmOBSecurityQuestionsNew", function() {
    return function(controller) {
        function addWidgetsfrmOBSecurityQuestionsNew() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeaderPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeaderPersonalInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxHeaderPersonalInfo.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
                "height": "100%",
                "id": "customHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "btnRight": {
                        "isVisible": true,
                        "text": kony.i18n.getLocalizedString("kony.mb.common.close")
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.OBSecurityQuestionsNew.Title")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeaderPersonalInfo.add(customHeader);
            var flxProgress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "4dp",
                "id": "flxProgress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "54dp",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxProgress.setDefaultUnit(kony.flex.DP);
            var flxProgressHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgressHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "12%",
                "skin": "sknFlxda8b08",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxProgressHeader.setDefaultUnit(kony.flex.DP);
            flxProgressHeader.add();
            var flxProgressBackgroundHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgressBackgroundHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxda8b08Op20",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxProgressBackgroundHeader.setDefaultUnit(kony.flex.DP);
            flxProgressBackgroundHeader.add();
            flxProgress.add(flxProgressHeader, flxProgressBackgroundHeader);
            var flxPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPersonalInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPersonalInfo.setDefaultUnit(kony.flex.DP);
            var flxEnterPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "id": "flxEnterPersonalInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnterPersonalInfo.setDefaultUnit(kony.flex.DP);
            var flxEnterPersonalInfoHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxEnterPersonalInfoHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnterPersonalInfoHeader.setDefaultUnit(kony.flex.DP);
            var lblEnterPersonalInfoHeader = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblEnterPersonalInfoHeader",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": "Please answer the security questions to verify your Identity.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEnterPersonalInfoHeader.add(lblEnterPersonalInfoHeader);
            var flxDependents = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxDependents",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlf9f9f9",
                "top": "55dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxDependents.setDefaultUnit(kony.flex.DP);
            var segDependents = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgCheckbox": "radiobuttoninactive.png",
                    "imgCheckbox2": "radiobuttoninactive.png",
                    "imgCheckbox3": "radiobuttoninactive.png",
                    "lblOption1": "Cadillac Sedan",
                    "lblOption2": "Buick ",
                    "lblOption3": "Ford Explorer SUV",
                    "lblQuestion": "Which of these cars have you owned in the past?"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "imgCheckbox2": "radiobuttoninactive.png",
                    "imgCheckbox3": "radiobuttoninactive.png",
                    "lblOption1": "Cadillac Sedan",
                    "lblOption2": "Buick ",
                    "lblOption3": "Ford Explorer SUV",
                    "lblQuestion": "Which of these cars have you owned in the past?"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "imgCheckbox2": "radiobuttoninactive.png",
                    "imgCheckbox3": "radiobuttoninactive.png",
                    "lblOption1": "Cadillac Sedan",
                    "lblOption2": "Buick ",
                    "lblOption3": "Ford Explorer SUV",
                    "lblQuestion": "Which of these cars have you owned in the past?"
                }],
                "groupCells": false,
                "id": "segDependents",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSecurityQuestion",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCheckbox": "flxCheckbox",
                    "flxCheckbox2": "flxCheckbox2",
                    "flxCheckbox3": "flxCheckbox3",
                    "flxGap": "flxGap",
                    "flxMain": "flxMain",
                    "flxOption1": "flxOption1",
                    "flxOption2": "flxOption2",
                    "flxOption3": "flxOption3",
                    "flxSecurityQuestion": "flxSecurityQuestion",
                    "flxSeparator1": "flxSeparator1",
                    "flxSeparator2": "flxSeparator2",
                    "imgCheckbox": "imgCheckbox",
                    "imgCheckbox2": "imgCheckbox2",
                    "imgCheckbox3": "imgCheckbox3",
                    "lblOption1": "lblOption1",
                    "lblOption2": "lblOption2",
                    "lblOption3": "lblOption3",
                    "lblQuestion": "lblQuestion"
                },
                "width": "100%",
                "zIndex": 3
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxQuestions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxQuestions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxQuestions.setDefaultUnit(kony.flex.DP);
            var flxQuestion1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxQuestion1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 30
            }, {}, {});
            flxQuestion1.setDefaultUnit(kony.flex.DP);
            var lblQuestion1 = new kony.ui.Label({
                "bottom": "6dp",
                "id": "lblQuestion1",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknLbl3e4f56SSPBold26px",
                "text": "When did you open your Loan Account?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxQuestion1.add(lblQuestion1);
            var segQuestion1 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblOption": "January 2016"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblOption": "March 2013"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblOption": "December 2015"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblOption": "None of the Above"
                }],
                "groupCells": false,
                "id": "segQuestion1",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSecurityQuestionOptions",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgCheckbox",
                    "selectedStateImage": "radiobtn.png",
                    "unselectedStateImage": "radiobuttoninactive.png"
                },
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "-1dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCheckbox": "flxCheckbox",
                    "flxOption": "flxOption",
                    "flxSecurityQuestionOptions": "flxSecurityQuestionOptions",
                    "flxSeparator": "flxSeparator",
                    "imgCheckbox": "imgCheckbox",
                    "lblOption": "lblOption"
                },
                "width": "100%",
                "zIndex": 29
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxQuestion2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxQuestion2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "10dp",
                "width": "100%",
                "zIndex": 30
            }, {}, {});
            flxQuestion2.setDefaultUnit(kony.flex.DP);
            var lblQuestion2 = new kony.ui.Label({
                "bottom": "6dp",
                "id": "lblQuestion2",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknLbl3e4f56SSPBold26px",
                "text": "In 2014, your Car Loan was approved by which Bank?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxQuestion2.add(lblQuestion2);
            var segQuestion2 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblOption": "Bank of America"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblOption": "Wells Fargo"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblOption": "Chase"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblOption": "None of the Above"
                }],
                "groupCells": false,
                "id": "segQuestion2",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSecurityQuestionOptions",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgCheckbox",
                    "selectedStateImage": "radiobtn.png",
                    "unselectedStateImage": "radiobuttoninactive.png"
                },
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "-1dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCheckbox": "flxCheckbox",
                    "flxOption": "flxOption",
                    "flxSecurityQuestionOptions": "flxSecurityQuestionOptions",
                    "flxSeparator": "flxSeparator",
                    "imgCheckbox": "imgCheckbox",
                    "lblOption": "lblOption"
                },
                "width": "100%",
                "zIndex": 29
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxQuestion3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxQuestion3",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "10dp",
                "width": "100%",
                "zIndex": 30
            }, {}, {});
            flxQuestion3.setDefaultUnit(kony.flex.DP);
            var lblQuestion3 = new kony.ui.Label({
                "bottom": "6dp",
                "id": "lblQuestion3",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknLbl3e4f56SSPBold26px",
                "text": "Which of these cars have you owned in the past?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxQuestion3.add(lblQuestion3);
            var segQuestion3 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblOption": "Cadillac Sedan"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblOption": "Cadillac Sedan"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblOption": "Cadillac Sedan"
                }],
                "groupCells": false,
                "id": "segQuestion3",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSecurityQuestionOptions",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgCheckbox",
                    "selectedStateImage": "radiobtn.png",
                    "unselectedStateImage": "radiobuttoninactive.png"
                },
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "-1dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCheckbox": "flxCheckbox",
                    "flxOption": "flxOption",
                    "flxSecurityQuestionOptions": "flxSecurityQuestionOptions",
                    "flxSeparator": "flxSeparator",
                    "imgCheckbox": "imgCheckbox",
                    "lblOption": "lblOption"
                },
                "width": "100%",
                "zIndex": 29
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxQuestion4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxQuestion4",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "10dp",
                "width": "100%",
                "zIndex": 30
            }, {}, {});
            flxQuestion4.setDefaultUnit(kony.flex.DP);
            var lblQuestion4 = new kony.ui.Label({
                "bottom": "6dp",
                "id": "lblQuestion4",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknLbl3e4f56SSPBold26px",
                "text": "Which of these cars have you owned in the past?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxQuestion4.add(lblQuestion4);
            var segQuestion4 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblOption": "Cadillac Sedan"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblOption": "Cadillac Sedan"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblOption": "Cadillac Sedan"
                }],
                "groupCells": false,
                "id": "segQuestion4",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSecurityQuestionOptions",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgCheckbox",
                    "selectedStateImage": "radiobtn.png",
                    "unselectedStateImage": "radiobuttoninactive.png"
                },
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "-1dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCheckbox": "flxCheckbox",
                    "flxOption": "flxOption",
                    "flxSecurityQuestionOptions": "flxSecurityQuestionOptions",
                    "flxSeparator": "flxSeparator",
                    "imgCheckbox": "imgCheckbox",
                    "lblOption": "lblOption"
                },
                "width": "100%",
                "zIndex": 29
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxQuestion5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxQuestion5",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "10dp",
                "width": "100%",
                "zIndex": 30
            }, {}, {});
            flxQuestion5.setDefaultUnit(kony.flex.DP);
            var lblQuestion5 = new kony.ui.Label({
                "bottom": "6dp",
                "id": "lblQuestion5",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknLbl3e4f56SSPBold26px",
                "text": "Which of these cars have you owned in the past?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxQuestion5.add(lblQuestion5);
            var segQuestion5 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblOption": "Cadillac Sedan"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblOption": "Cadillac Sedan"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblOption": "Cadillac Sedan"
                }],
                "groupCells": false,
                "id": "segQuestion5",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSecurityQuestionOptions",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgCheckbox",
                    "selectedStateImage": "radiobtn.png",
                    "unselectedStateImage": "radiobuttoninactive.png"
                },
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "-1dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCheckbox": "flxCheckbox",
                    "flxOption": "flxOption",
                    "flxSecurityQuestionOptions": "flxSecurityQuestionOptions",
                    "flxSeparator": "flxSeparator",
                    "imgCheckbox": "imgCheckbox",
                    "lblOption": "lblOption"
                },
                "width": "100%",
                "zIndex": 29
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxQuestions.add(flxQuestion1, segQuestion1, flxQuestion2, segQuestion2, flxQuestion3, segQuestion3, flxQuestion4, segQuestion4, flxQuestion5, segQuestion5);
            var flxDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "235dp",
                "id": "flxDescription",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxDescription.setDefaultUnit(kony.flex.DP);
            var imgInfo = new kony.ui.Image2({
                "centerX": "50%",
                "height": "30dp",
                "id": "imgInfo",
                "isVisible": true,
                "skin": "slImage",
                "src": "infofull.png",
                "top": "22dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var rtxDescription = new kony.ui.RichText({
                "centerX": "50%",
                "id": "rtxDescription",
                "isVisible": true,
                "left": "111dp",
                "linkSkin": "defRichTextLink",
                "skin": "sknRtx424242SSP22px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAO.Description"),
                "top": "65dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnContinuePersonalInfo = new kony.ui.Button({
                "bottom": "10%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnContinuePersonalInfo",
                "isVisible": true,
                "right": "6.25%",
                "skin": "sknBtnOnBoardingInactive",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDescription.add(imgInfo, rtxDescription, btnContinuePersonalInfo);
            flxDependents.add(segDependents, flxQuestions, flxDescription);
            flxEnterPersonalInfo.add(flxEnterPersonalInfoHeader, flxDependents);
            flxPersonalInfo.add(flxEnterPersonalInfo);
            this.add(flxHeaderPersonalInfo, flxProgress, flxPersonalInfo);
        };
        return [{
            "addWidgets": addWidgetsfrmOBSecurityQuestionsNew,
            "enabledForIdleTimeout": true,
            "id": "frmOBSecurityQuestionsNew",
            "init": controller.AS_Form_fee19c4d40df451aa992ab1cdf3306cb,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_f9d7e9a1aec94bb4a448719bca2c47b7(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.OBSecurityQuestionsNew.Title")
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
            "titleBar": false,
            "titleBarSkin": "sknTitle1a98ffffffff30px",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});