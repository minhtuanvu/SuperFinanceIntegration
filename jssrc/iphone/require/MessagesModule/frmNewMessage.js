define("MessagesModule/frmNewMessage", function() {
    return function(controller) {
        function addWidgetsfrmNewMessage() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "60dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9Shadow",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
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
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "centerX": "50%",
                        "height": kony.flex.USE_PREFFERED_SIZE,
                        "text": kony.i18n.getLocalizedString("kony.mb.NewMessage.Title"),
                        "left": "viz.val_cleared",
                        "width": "32.41%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxNewMessageMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxNewMessageMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxNewMessageMain.setDefaultUnit(kony.flex.DP);
            var flxNewMessage = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": 110,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxNewMessage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNewMessage.setDefaultUnit(kony.flex.DP);
            var lblCategory = new kony.ui.Label({
                "id": "lblCategory",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.message.category"),
                "textStyle": {},
                "top": "15dp",
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
            var lblCategoryVal = new kony.ui.Label({
                "id": "lblCategoryVal",
                "isVisible": true,
                "right": "57dp",
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": "Change Primary Owner",
                "textStyle": {},
                "top": "14dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSubject = new kony.ui.Label({
                "id": "lblSubject",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.NewMessage.SubjectHeading"),
                "textStyle": {},
                "top": "68dp",
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
            var tbxSubject = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxBlueFocus",
                "height": "40dp",
                "id": "tbxSubject",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "maxTextLength": 120,
                "placeholder": kony.i18n.getLocalizedString("kony.mb.NewMessage.SubjectHeadingPlaceHolder"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbxBordere3e3e3Radius4px",
                "text": kony.i18n.getLocalizedString("kony.mb.NewMessage.SubjectHeadingPlaceHolder"),
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "91dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [10, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": true,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknTbxPlaceholdera0a0a0",
                "showClearButton": true,
                "showCloseButton": false,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var lblDescription = new kony.ui.Label({
                "id": "lblDescription",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.NewMessage.BodyHeading"),
                "textStyle": {},
                "top": "154dp",
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
            var txtareaDescription = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "focusSkin": "txtAreaBlueFocus",
                "height": "180dp",
                "id": "txtareaDescription",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "numberOfVisibleLines": 3,
                "placeholder": "Enter your description here",
                "right": "20dp",
                "skin": "sknTxtAreaSSPREg42424228pxRadius10",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "177dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "autoCorrect": true,
                "closeButtonText": "Done",
                "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_NEXT,
                "showCloseButton": true,
                "showProgressIndicator": false,
                "placeholderSkin": "sknTxtboxPlaceHolderSSPLight114px"
            });
            var flxTitleWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "flxTitleWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "377dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxTitleWrapper.setDefaultUnit(kony.flex.DP);
            var lblTitle = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("kony.mb.Europe.Attachments"),
                "textStyle": {},
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
            flxTitleWrapper.add(lblTitle);
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "48dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var flxRightArrow = new kony.ui.Image2({
                "height": "23dp",
                "id": "flxRightArrow",
                "isVisible": true,
                "right": "30dp",
                "skin": "slImage",
                "src": "chevron_1.png",
                "top": "14dp",
                "width": "16dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxGroupSegment = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxGroupSegment",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "400dp",
                "width": "100%"
            }, {}, {});
            flxGroupSegment.setDefaultUnit(kony.flex.DP);
            var segAttachments = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgAttachment": "attachment.png",
                    "imgRemoveAttachment": "closecircle.png",
                    "lblAttachment": "Statement Dec.pdf",
                    "lblAttachmentId": ""
                }, {
                    "imgAttachment": "attachment.png",
                    "imgRemoveAttachment": "closecircle.png",
                    "lblAttachment": "Statement Dec.pdf",
                    "lblAttachmentId": ""
                }, {
                    "imgAttachment": "attachment.png",
                    "imgRemoveAttachment": "closecircle.png",
                    "lblAttachment": "Statement Dec.pdf",
                    "lblAttachmentId": ""
                }],
                "groupCells": false,
                "id": "segAttachments",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "right": "0dp",
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "segAttachmentMain1",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAttachment": "flxAttachment",
                    "flxRemoveAttachment": "flxRemoveAttachment",
                    "imgAttachment": "imgAttachment",
                    "imgRemoveAttachment": "imgRemoveAttachment",
                    "lblAttachment": "lblAttachment",
                    "segAttachmentMain1": "segAttachmentMain1"
                },
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var flxAttachmentsError = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAttachmentsError",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxAttachmentsError.setDefaultUnit(kony.flex.DP);
            var lblAttachmentError = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAttachmentError",
                "isVisible": true,
                "skin": "sknlblee0005SSPReg15px",
                "text": kony.i18n.getLocalizedString("kony.mb.Europe.AttachmentTypeErrorMsg1"),
                "textStyle": {},
                "top": "0dp",
                "width": "98%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAttachmentsError.add(lblAttachmentError);
            flxGroupSegment.add(segAttachments, flxAttachmentsError);
            flxNewMessage.add(lblCategory, lblCategoryVal, lblSubject, tbxSubject, lblDescription, txtareaDescription, flxTitleWrapper, flxSeparator, flxRightArrow, flxGroupSegment);
            var flxAttachFile = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 65,
                "centerX": "50%",
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "40dp",
                "id": "flxAttachFile",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "zIndex": 1
            }, {}, {});
            flxAttachFile.setDefaultUnit(kony.flex.DP);
            var imgAttachment = new kony.ui.Image2({
                "centerX": "37.91%",
                "centerY": "50.00%",
                "height": "20dp",
                "id": "imgAttachment",
                "isVisible": true,
                "skin": "slImage",
                "src": "attachment.png",
                "width": "16dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAttachment = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblAttachment",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular86px",
                "text": kony.i18n.getLocalizedString("kony.mb.MessagesDetails.AttachFile"),
                "textStyle": {},
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
            flxAttachFile.add(imgAttachment, lblAttachment);
            var btnSend = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnSend",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4Op1000095e4B4Radiusffffff26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Messages.send"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxNewMessageMain.add(flxNewMessage, flxAttachFile, btnSend);
            var flxPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "15%",
                "id": "flxPopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf54b5e",
                "top": "0dp",
                "width": "100%",
                "zIndex": 201
            }, {}, {});
            flxPopup.setDefaultUnit(kony.flex.DP);
            var customPopup = new com.kmb.common.customPopup({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "customPopup",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "imgPopup": {
                        "src": "imagedrag.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            var flxPopupAttachment = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPopupAttachment",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0f2a5b0bfd49a49",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxPopupAttachment.setDefaultUnit(kony.flex.DP);
            var flxPopupActions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "7%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "100dp",
                "id": "flxPopupActions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxPopupDocuments",
                "width": "88%",
                "zIndex": 1
            }, {}, {});
            flxPopupActions.setDefaultUnit(kony.flex.DP);
            var btnTakeAPicture = new kony.ui.Button({
                "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius4px",
                "height": "50%",
                "id": "btnTakeAPicture",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.Messages.TakeAPicture"),
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var lblSeparatorPopupDocuments = new kony.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "lblSeparatorPopupDocuments",
                "isVisible": true,
                "left": "-2%",
                "skin": "sknLbl0095e4SSPRegular26px",
                "textStyle": {},
                "top": "-1dp",
                "width": "105%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnChooseFromDevice = new kony.ui.Button({
                "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius4px",
                "height": "50%",
                "id": "btnChooseFromDevice",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.Messages.ChooseFromDevice"),
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxPopupActions.add(btnTakeAPicture, lblSeparatorPopupDocuments, btnChooseFromDevice);
            flxPopupAttachment.add(flxPopupActions);
            var flxConfirmationPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxConfirmationPopUp",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxConfirmationPopUp.setDefaultUnit(kony.flex.DP);
            var flxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "centerY": "50.00%",
                "clipBounds": true,
                "height": "147dp",
                "id": "flxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxffffffB",
                "width": "76.80%",
                "zIndex": 200
            }, {}, {});
            flxContainer.setDefaultUnit(kony.flex.DP);
            var lblMsg = new kony.ui.Label({
                "bottom": "23dp",
                "centerX": "50.00%",
                "centerY": 50,
                "id": "lblMsg",
                "isVisible": true,
                "skin": "sknlbl424242SSPR15dp",
                "text": "Are you sure, do you want to remove this attachment?",
                "textStyle": {},
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxBtns = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "52dp",
                "id": "flxBtns",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "CopyslFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBtns.setDefaultUnit(kony.flex.DP);
            var flxSep1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep1.setDefaultUnit(kony.flex.DP);
            flxSep1.add();
            var flxBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBottom",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%"
            }, {}, {});
            flxBottom.setDefaultUnit(kony.flex.DP);
            var flxYes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxYes",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "49%",
                "zIndex": 1
            }, {}, {});
            flxYes.setDefaultUnit(kony.flex.DP);
            var lblYes = new kony.ui.Label({
                "centerX": "50.00%",
                "centerY": "50.00%",
                "id": "lblYes",
                "isVisible": true,
                "skin": "sknlbl004B95SSPR15dp",
                "text": kony.i18n.getLocalizedString("kony.mb.common.AlertYes"),
                "textStyle": {},
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxYes.add(lblYes);
            var flxSep2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSep2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3op50",
                "top": "0",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxSep2.setDefaultUnit(kony.flex.DP);
            flxSep2.add();
            var flxNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxNo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "49%",
                "zIndex": 1
            }, {}, {});
            flxNo.setDefaultUnit(kony.flex.DP);
            var lblNo = new kony.ui.Label({
                "centerX": "50.00%",
                "centerY": "50.00%",
                "id": "lblNo",
                "isVisible": true,
                "skin": "sknlbl004B95SSPR15dp",
                "text": kony.i18n.getLocalizedString("kony.mb.common.AlertNo"),
                "textStyle": {},
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNo.add(lblNo);
            flxBottom.add(flxYes, flxSep2, flxNo);
            flxBtns.add(flxSep1, flxBottom);
            flxContainer.add(lblMsg, flxBtns);
            flxConfirmationPopUp.add(flxContainer);
            var flxActions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxActions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxActions.setDefaultUnit(kony.flex.DP);
            var flxActionSheetContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "30dp",
                "clipBounds": true,
                "id": "flxActionSheetContent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "5%",
                "maxHeight": "100%",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxActionSheetContent.setDefaultUnit(kony.flex.DP);
            var flxActionSheetOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxActionSheetOptions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFboxf9f9f9",
                "top": "-3dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxActionSheetOptions.setDefaultUnit(kony.flex.DP);
            var flxCamera = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "57dp",
                "id": "flxCamera",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxCamera.setDefaultUnit(kony.flex.DP);
            var Camera = new kony.ui.Camera({
                "height": "57dp",
                "id": "Camera",
                "isVisible": true,
                "left": "0",
                "skin": "sknBtn007affSSPSemiBold",
                "text": "Camera",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
                "enableOverlay": false,
                "nativeUserInterface": true
            });
            flxCamera.add(Camera);
            var flxPhoto = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "57dp",
                "id": "flxPhoto",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPhoto.setDefaultUnit(kony.flex.DP);
            var flxSeperator01 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator01",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlx7e7e7e",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperator01.setDefaultUnit(kony.flex.DP);
            flxSeperator01.add();
            var btnPhoto = new kony.ui.Button({
                "height": "57dp",
                "id": "btnPhoto",
                "isVisible": true,
                "left": "0.00%",
                "skin": "sknBtn007affSSPSemiBold",
                "text": "Photo & Video Library",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxPhoto.add(flxSeperator01, btnPhoto);
            var flxDocument = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "57dp",
                "id": "flxDocument",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDocument.setDefaultUnit(kony.flex.DP);
            var btnDocument = new kony.ui.Button({
                "height": "57dp",
                "id": "btnDocument",
                "isVisible": true,
                "left": "0.00%",
                "skin": "sknBtn007affSSPSemiBold",
                "text": "Document",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var flxSeperator02 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator02",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlx7e7e7e",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperator02.setDefaultUnit(kony.flex.DP);
            flxSeperator02.add();
            flxDocument.add(btnDocument, flxSeperator02);
            flxActionSheetOptions.add(flxCamera, flxPhoto, flxDocument);
            var flxCancel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCancel",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "konympassknFlxFFFFFFBGRounded10",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCancel.setDefaultUnit(kony.flex.DP);
            var btnClose = new kony.ui.Button({
                "height": "57dp",
                "id": "btnClose",
                "isVisible": true,
                "left": "0.00%",
                "skin": "sknBtn007affSSPSemiBold",
                "text": "Cancel",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxCancel.add(btnClose);
            flxActionSheetContent.add(flxActionSheetOptions, flxCancel);
            flxActions.add(flxActionSheetContent);
            this.add(flxHeader, flxNewMessageMain, flxPopup, flxPopupAttachment, flxConfirmationPopUp, flxActions);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_eeae2f3cd8924558aa3627d0d9e266fe,
            "metaData": {
                "title": "Cancel"
            },
            "id": "RBarBtnItem0"
        });
        var BBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "title": ""
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmNewMessage,
            "enabledForIdleTimeout": true,
            "id": "frmNewMessage",
            "init": controller.AS_Form_b45d7f106de74b7e80c30082529e67e1,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_i73553a97a204d8981f0484da2644a23,
            "preShow": function(eventobject) {
                controller.AS_Form_d1469c4871bb41639233f484cfb36f50(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.NewMessage.Title")
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarAttributes": {
                "barStyle": constants.BAR_STYLE_DEAFULT,
                "navigationBarHidden": false,
                "translucent": false,
                "tintColor": "ffffff00",
                "hidesBackButton": false,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [],
                "rightBarButtonItems": [RBarBtnItem0],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});