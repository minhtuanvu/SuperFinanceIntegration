define("MessagesModule/frmMessagesDetails", function() {
    return function(controller) {
        function addWidgetsfrmMessagesDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9Shadow",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
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
                        "centerY": "50%",
                        "height": "40dp",
                        "isVisible": false,
                        "right": "15dp",
                        "zIndex": 10
                    },
                    "imgSearch": {
                        "height": "15dp",
                        "right": "5dp",
                        "src": "addiconnoborder.png",
                        "width": "15dp",
                        "zIndex": 10
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.Hamburger.Messages"),
                        "left": "39.75%",
                        "width": "26.67%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMessageDetailsMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMessageDetailsMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "56dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxMessageDetailsMain.setDefaultUnit(kony.flex.DP);
            var flxSubject = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxSubject",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSubject.setDefaultUnit(kony.flex.DP);
            var lblSubject = new kony.ui.Label({
                "id": "lblSubject",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.MessagesDetails.Subject"),
                "textStyle": {},
                "top": "5dp",
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
            var lblSubjectDescription = new kony.ui.Label({
                "bottom": "5dp",
                "id": "lblSubjectDescription",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl4a4a4a100pr",
                "text": "Statement for month of December 2017",
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
            var flxDelete = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxDelete",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxDelete.setDefaultUnit(kony.flex.DP);
            var imgDelete = new kony.ui.Image2({
                "height": "100%",
                "id": "imgDelete",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "deleteicon2.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDelete.add(imgDelete);
            flxSubject.add(lblSubject, lblSubjectDescription, flxDelete);
            var flxSegMessages = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "93dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxSegMessages",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlf9f9f9",
                "top": "90dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSegMessages.setDefaultUnit(kony.flex.DP);
            var segMessageDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgAttachment": "attachment.png",
                    "imgAttachment2": "attachment.png",
                    "imgAttachment3": "attachment.png",
                    "imgAttachment4": "attachment.png",
                    "imgAttachment5": "attachment.png",
                    "imgDownload": "download.png",
                    "imgDownload2": "download.png",
                    "imgDownload3": "download.png",
                    "imgDownload4": "download.png",
                    "imgDownload5": "download.png",
                    "lblAttachment": "Statement Dec.pdf",
                    "lblAttachment2": "Statement Dec.pdf",
                    "lblAttachment3": "Statement Dec.pdf",
                    "lblAttachment4": "Statement Dec.pdf",
                    "lblAttachment5": "Statement Dec.pdf",
                    "lblCategoryId": "",
                    "lblCategoryVal": "",
                    "lblDate": "21 dec ‘17, 02:21 PM",
                    "lblFrom": "From:",
                    "lblFromValue": "Kony Bank",
                    "lblMessage": "Message:",
                    "lblMessageDescription": "Hi John, we have attached statement for the month of december 2017, If you need any help please revert us with your qurries",
                    "lblReqId": "",
                    "lblReqVal": ""
                }, {
                    "imgAttachment": "attachment.png",
                    "imgAttachment2": "attachment.png",
                    "imgAttachment3": "attachment.png",
                    "imgAttachment4": "attachment.png",
                    "imgAttachment5": "attachment.png",
                    "imgDownload": "download.png",
                    "imgDownload2": "download.png",
                    "imgDownload3": "download.png",
                    "imgDownload4": "download.png",
                    "imgDownload5": "download.png",
                    "lblAttachment": "Statement Dec.pdf",
                    "lblAttachment2": "Statement Dec.pdf",
                    "lblAttachment3": "Statement Dec.pdf",
                    "lblAttachment4": "Statement Dec.pdf",
                    "lblAttachment5": "Statement Dec.pdf",
                    "lblCategoryId": "",
                    "lblCategoryVal": "",
                    "lblDate": "21 dec ‘17, 02:21 PM",
                    "lblFrom": "From:",
                    "lblFromValue": "Kony Bank",
                    "lblMessage": "Message:",
                    "lblMessageDescription": "Hi John, we have attached statement for the month of december 2017, If you need any help please revert us with your qurriesHi John, we have attached statement for the month of december 2017, If you need any help please revert us with your qurriesHi John, we have attached statement for the month of december 2017, If you need any help please revert us with your qurries",
                    "lblReqId": "",
                    "lblReqVal": ""
                }, {
                    "imgAttachment": "attachment.png",
                    "imgAttachment2": "attachment.png",
                    "imgAttachment3": "attachment.png",
                    "imgAttachment4": "attachment.png",
                    "imgAttachment5": "attachment.png",
                    "imgDownload": "download.png",
                    "imgDownload2": "download.png",
                    "imgDownload3": "download.png",
                    "imgDownload4": "download.png",
                    "imgDownload5": "download.png",
                    "lblAttachment": "Statement Dec.pdf",
                    "lblAttachment2": "Statement Dec.pdf",
                    "lblAttachment3": "Statement Dec.pdf",
                    "lblAttachment4": "Statement Dec.pdf",
                    "lblAttachment5": "Statement Dec.pdf",
                    "lblCategoryId": "",
                    "lblCategoryVal": "",
                    "lblDate": "21 dec ‘17, 02:21 PM",
                    "lblFrom": "From:",
                    "lblFromValue": "Kony Bank",
                    "lblMessage": "Message:",
                    "lblMessageDescription": "Hi John, we have ",
                    "lblReqId": "",
                    "lblReqVal": ""
                }],
                "groupCells": false,
                "id": "segMessageDetails",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "sknSegffffff",
                "rowTemplate": "flxMessagesRight",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAttachment": "flxAttachment",
                    "flxAttachment2": "flxAttachment2",
                    "flxAttachment3": "flxAttachment3",
                    "flxAttachment4": "flxAttachment4",
                    "flxAttachment5": "flxAttachment5",
                    "flxAttachmentMain": "flxAttachmentMain",
                    "flxAttachmentMain2": "flxAttachmentMain2",
                    "flxAttachmentMain3": "flxAttachmentMain3",
                    "flxAttachmentMain4": "flxAttachmentMain4",
                    "flxAttachmentMain5": "flxAttachmentMain5",
                    "flxCategory": "flxCategory",
                    "flxDownload": "flxDownload",
                    "flxDownload2": "flxDownload2",
                    "flxDownload3": "flxDownload3",
                    "flxDownload4": "flxDownload4",
                    "flxDownload5": "flxDownload5",
                    "flxFrom": "flxFrom",
                    "flxFromContainer": "flxFromContainer",
                    "flxMain": "flxMain",
                    "flxMessage": "flxMessage",
                    "flxMessagesMain": "flxMessagesMain",
                    "flxMessagesRight": "flxMessagesRight",
                    "flxReqId": "flxReqId",
                    "flxReqIdCategory": "flxReqIdCategory",
                    "flxRight": "flxRight",
                    "flxShadow": "flxShadow",
                    "imgAttachment": "imgAttachment",
                    "imgAttachment2": "imgAttachment2",
                    "imgAttachment3": "imgAttachment3",
                    "imgAttachment4": "imgAttachment4",
                    "imgAttachment5": "imgAttachment5",
                    "imgDownload": "imgDownload",
                    "imgDownload2": "imgDownload2",
                    "imgDownload3": "imgDownload3",
                    "imgDownload4": "imgDownload4",
                    "imgDownload5": "imgDownload5",
                    "lblAttachment": "lblAttachment",
                    "lblAttachment2": "lblAttachment2",
                    "lblAttachment3": "lblAttachment3",
                    "lblAttachment4": "lblAttachment4",
                    "lblAttachment5": "lblAttachment5",
                    "lblCategoryId": "lblCategoryId",
                    "lblCategoryVal": "lblCategoryVal",
                    "lblDate": "lblDate",
                    "lblFrom": "lblFrom",
                    "lblFromValue": "lblFromValue",
                    "lblMessage": "lblMessage",
                    "lblMessageDescription": "lblMessageDescription",
                    "lblReqId": "lblReqId",
                    "lblReqVal": "lblReqVal"
                },
                "widgetSkin": "sknSegf9f9f9",
                "width": "100%",
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
            var txtAreaReply = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "txtAreaBlueFocus",
                "height": "90dp",
                "id": "txtAreaReply",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "numberOfVisibleLines": 3,
                "onDone": controller.AS_TextArea_f46f54d200254863a89d1683d947698e,
                "placeholder": "Reply",
                "skin": "sknTxtAreaSSPREg42424228pxRadius10",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "20dp",
                "width": "95%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [10, 5, 0, 5],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_NEXT,
                "showCloseButton": true,
                "showProgressIndicator": false,
                "inputAccessoryViewType": constants.TEXTAREA_INPUTACCESSORYVIEW_NEXTPREV,
                "placeholderSkin": "sknTxtboxPlaceHolderSSPLight114px"
            });
            var flxTitleWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "18dp",
                "id": "flxTitleWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": 10,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxTitleWrapper.setDefaultUnit(kony.flex.DP);
            var lblTitle1 = new kony.ui.Label({
                "centerY": "50.00%",
                "id": "lblTitle1",
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
            flxTitleWrapper.add(lblTitle1);
            var flxAttachments = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "focusSkin": "sknFlxf9f9f9",
                "id": "flxAttachments",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxAttachments.setDefaultUnit(kony.flex.DP);
            var segAttachments = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgAttachment": "pdf_image.png",
                    "imgRemoveAttachment": "download.png",
                    "lblAttachment": "Statement Dec.pdf",
                    "lblAttachmentId": ""
                }, {
                    "imgAttachment": "pdf_image.png",
                    "imgRemoveAttachment": "download.png",
                    "lblAttachment": "Statement Dec.pdf",
                    "lblAttachmentId": ""
                }, {
                    "imgAttachment": "pdf_image.png",
                    "imgRemoveAttachment": "download.png",
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
                "rowSkin": "sknSegf9f9f9",
                "rowTemplate": "segAttachmentMain1",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "10dp",
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
            flxAttachments.add(segAttachments);
            var flxAttachmentsError = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxAttachmentsError",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "98%",
                "zIndex": 200
            }, {}, {});
            flxAttachmentsError.setDefaultUnit(kony.flex.DP);
            var lblAttachmentError = new kony.ui.Label({
                "bottom": "50dp",
                "id": "lblAttachmentError",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlblee0005SSPReg15px",
                "text": kony.i18n.getLocalizedString("kony.mb.Europe.AttachmentTypeErrorMsg1"),
                "textStyle": {},
                "top": "0dp",
                "width": "100%",
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
            flxSegMessages.add(segMessageDetails, txtAreaReply, flxTitleWrapper, flxAttachments, flxAttachmentsError);
            var flxReplyandSend = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 10,
                "clipBounds": true,
                "id": "flxReplyandSend",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReplyandSend.setDefaultUnit(kony.flex.DP);
            var flxAttachAndSend = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAttachAndSend",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAttachAndSend.setDefaultUnit(kony.flex.DP);
            var flxAttachFile = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "20dp",
                "id": "flxAttachFile",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            flxAttachFile.setDefaultUnit(kony.flex.DP);
            var imgAttachment = new kony.ui.Image2({
                "centerY": "50%",
                "height": "12dp",
                "id": "imgAttachment",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "paperclip.png",
                "width": "11dp",
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
                "focusSkin": "sknBtn0095e4Op1000095e4B4Radiusffffff26px",
                "height": "40dp",
                "id": "btnSend",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4Op1000095e4B4Radiusffffff26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Messages.send"),
                "top": "25dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxAttachAndSend.add(flxAttachFile, btnSend);
            flxReplyandSend.add(flxAttachAndSend);
            var flxReply = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxReply",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "right": "10dp",
                "skin": "sknFlxf9f9f9Bordere3e3e3R4px",
                "zIndex": 1
            }, {}, {});
            flxReply.setDefaultUnit(kony.flex.DP);
            var lblReply = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblReply",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.MessagesDetails.Reply"),
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
            flxReply.add(lblReply);
            var btnRestore = new kony.ui.Button({
                "bottom": "10dp",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnRestore",
                "isVisible": true,
                "left": "10dp",
                "right": "10dp",
                "skin": "sknBtn0095e4Op1000095e4B4Radiusffffff26pxSSP",
                "text": "Restore",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var flxAttachFiles = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 53,
                "centerX": "50.00%",
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "40dp",
                "id": "flxAttachFiles",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "zIndex": 1
            }, {}, {});
            flxAttachFiles.setDefaultUnit(kony.flex.DP);
            var imgFileAttachment = new kony.ui.Image2({
                "centerX": "37.52%",
                "centerY": "51.67%",
                "height": "14dp",
                "id": "imgFileAttachment",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "attachment.png",
                "width": "19dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblFileAttachment = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblFileAttachment",
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
            flxAttachFiles.add(imgFileAttachment, lblFileAttachment);
            flxMessageDetailsMain.add(flxSubject, flxSegMessages, flxReplyandSend, flxReply, btnRestore, flxAttachFiles);
            var flxPopupDocuments = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPopupDocuments",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0f2a5b0bfd49a49",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxPopupDocuments.setDefaultUnit(kony.flex.DP);
            var flxPopupDocumentsActions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "7%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "100dp",
                "id": "flxPopupDocumentsActions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxPopupDocuments",
                "width": "88%",
                "zIndex": 1
            }, {}, {});
            flxPopupDocumentsActions.setDefaultUnit(kony.flex.DP);
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
            flxPopupDocumentsActions.add(btnTakeAPicture, lblSeparatorPopupDocuments, btnChooseFromDevice);
            flxPopupDocuments.add(flxPopupDocumentsActions);
            var flxPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10.50%",
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
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
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
            this.add(flxHeader, flxMessageDetailsMain, flxPopupDocuments, flxPopup, flxConfirmationPopUp, flxActions);
        };
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
            "addWidgets": addWidgetsfrmMessagesDetails,
            "enabledForIdleTimeout": true,
            "id": "frmMessagesDetails",
            "init": controller.AS_Form_h1a356b7bfe6472bb278ba6d80bb6597,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_f543b1684e5d430fbee513e54acf894c(eventobject);
            },
            "skin": "sknFrmf8f7f8",
            "title": kony.i18n.getLocalizedString("kony.mb.Hamburger.Messages")
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
                "rightBarButtonItems": [],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});