define("AlertsModule/frmAlertsDetails", function() {
    return function(controller) {
        function addWidgetsfrmAlertsDetails() {
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
                        "text": "Notifications"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxNotificationsDetailsMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxNotificationsDetailsMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "56dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxNotificationsDetailsMain.setDefaultUnit(kony.flex.DP);
            var flxContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "85%",
                "id": "flxContent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxContent.setDefaultUnit(kony.flex.DP);
            var flxSubject = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSubject",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSubject.setDefaultUnit(kony.flex.DP);
            var flxNotificationImg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxNotificationImg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "15%",
                "zIndex": 1
            }, {}, {});
            flxNotificationImg.setDefaultUnit(kony.flex.DP);
            var imgNotificationCategory = new kony.ui.Image2({
                "centerX": "50%",
                "height": "100%",
                "id": "imgNotificationCategory",
                "isVisible": true,
                "skin": "slImage",
                "src": "security.png",
                "top": "0dp",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNotificationImg.add(imgNotificationCategory);
            var flxSubjectDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSubjectDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "70%"
            }, {}, {});
            flxSubjectDetails.setDefaultUnit(kony.flex.DP);
            var lblSubject = new kony.ui.Label({
                "id": "lblSubject",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl4a4a4aSSPSemiBold100pr",
                "text": kony.i18n.getLocalizedString("kony.mb.MessagesDetails.Subject"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSubjectDescription = new kony.ui.Label({
                "bottom": "5dp",
                "id": "lblSubjectDescription",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl727272SSPLight22px",
                "text": "Statement for month of December 2017",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSubjectDetails.add(lblSubject, lblSubjectDescription);
            var flxDelete = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxDelete",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "15%",
                "zIndex": 1
            }, {}, {});
            flxDelete.setDefaultUnit(kony.flex.DP);
            var imgDelete = new kony.ui.Image2({
                "centerX": "50%",
                "height": "100%",
                "id": "imgDelete",
                "isVisible": true,
                "skin": "slImage",
                "src": "deleteicon2.png",
                "top": "0dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDelete.add(imgDelete);
            flxSubject.add(flxNotificationImg, flxSubjectDetails, flxDelete);
            var flxNotificationMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxNotificationMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFBorderE9E9E9shadow",
                "top": "10dp",
                "width": "95%",
                "zIndex": 10
            }, {}, {});
            flxNotificationMain.setDefaultUnit(kony.flex.DP);
            var flxNotificationDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "20dp",
                "clipBounds": true,
                "id": "flxNotificationDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxNotificationDetails.setDefaultUnit(kony.flex.DP);
            var lblDisplayName = new kony.ui.Label({
                "bottom": 0,
                "id": "lblDisplayName",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Hi John,",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "12dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxNotification = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "5dp",
                "clipBounds": true,
                "id": "flxNotification",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNotification.setDefaultUnit(kony.flex.DP);
            var lblNotificationDescription = new kony.ui.RichText({
                "bottom": "2dp",
                "id": "lblNotificationDescription",
                "isVisible": true,
                "left": "20dp",
                "linkSkin": "defRichTextLink",
                "skin": "sknRtx727272SSP22px",
                "text": "Hi John, we have attached statement for the month of december 2017, If you need any help please revert us with your qurries",
                "top": "15dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNotification.add(lblNotificationDescription);
            var flxAmountAndDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAmountAndDate",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAmountAndDate.setDefaultUnit(kony.flex.DP);
            var lblBillAmount = new kony.ui.Label({
                "bottom": 0,
                "id": "lblBillAmount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Hi John,",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDueDate = new kony.ui.Label({
                "bottom": 0,
                "id": "lblDueDate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Hi John,",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAmountAndDate.add(lblBillAmount, lblDueDate);
            var flxRegads = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxRegads",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRegads.setDefaultUnit(kony.flex.DP);
            var lblRegards = new kony.ui.Label({
                "bottom": 0,
                "id": "lblRegards",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Warm Regards,",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblName = new kony.ui.Label({
                "bottom": 0,
                "id": "lblName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Manager-Customer Services",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRegads.add(lblRegards, lblName);
            var btnActionLink = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnActionLink",
                "isVisible": true,
                "skin": "sknBtn055BAF26px",
                "text": "Pay Now",
                "top": "0",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgNotification = new kony.ui.Image2({
                "centerX": "50%",
                "height": "152dp",
                "id": "imgNotification",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "19dp",
                "width": "324dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNotificationDetails.add(lblDisplayName, flxNotification, flxAmountAndDate, flxRegads, btnActionLink, imgNotification);
            flxNotificationMain.add(flxNotificationDetails);
            flxContent.add(flxSubject, flxNotificationMain);
            var flxSeperatorDA = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "65dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorDA",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorDA.setDefaultUnit(kony.flex.DP);
            flxSeperatorDA.add();
            var btnPayNow = new kony.ui.Button({
                "bottom": "10dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnPayNow",
                "isVisible": false,
                "skin": "sknBtn0095e4Op1000095e4B4Radiusffffff26pxSSP",
                "text": "Pay Now",
                "width": "330dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNotificationsDetailsMain.add(flxContent, flxSeperatorDA, btnPayNow);
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
            var flxPopup1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPopup1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 201
            }, {}, {});
            flxPopup1.setDefaultUnit(kony.flex.DP);
            var flx = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "150dp",
                "id": "flx",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffffop100BRadius10px",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flx.setDefaultUnit(kony.flex.DP);
            var lblText = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblText",
                "isVisible": true,
                "skin": "sknlabel424242Regular42px",
                "text": "Are you sure you want to remove this alert.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "39dp",
                "width": "75%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "50dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            var flxButtons = new kony.ui.FlexContainer({
                "bottom": "1dp",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var btnCancel = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtnSSPR4176A415px",
                "height": "40dp",
                "id": "btnCancel",
                "isVisible": true,
                "left": "6dp",
                "skin": "sknBtnSSPR4176A415px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                "top": "0dp",
                "width": "45%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSeperator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "7dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "1dp",
                "zIndex": 110
            }, {}, {});
            flxSeperator1.setDefaultUnit(kony.flex.DP);
            flxSeperator1.add();
            var btnRemove = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtnSSPR4176A415px",
                "height": "40dp",
                "id": "btnRemove",
                "isVisible": true,
                "left": "8dp",
                "skin": "sknBtnSSPR4176A415px",
                "text": "Remove",
                "top": "0dp",
                "width": "45%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButtons.add(btnCancel, flxSeperator1, btnRemove);
            flx.add(lblText, flxSeperator, flxButtons);
            flxPopup1.add(flx);
            this.add(flxHeader, flxNotificationsDetailsMain, flxPopup, flxPopup1);
        };
        return [{
            "addWidgets": addWidgetsfrmAlertsDetails,
            "enabledForIdleTimeout": true,
            "id": "frmAlertsDetails",
            "init": controller.AS_Form_f31b12c56ea74901a2cd82728425c44c,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_df24d37a970c4e77b1498b3da45d5691(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Notifications"
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