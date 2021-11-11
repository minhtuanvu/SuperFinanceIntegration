define("SettingsModule/frmProfilePersonalDetails", function() {
    return function(controller) {
        function addWidgetsfrmProfilePersonalDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
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
                    "btnRight": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.editNickName"),
                        "isVisible": true
                    },
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
                        "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.Title")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxChangePassword = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "110dp",
                "id": "flxChangePassword",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxChangePassword.setDefaultUnit(kony.flex.DP);
            var lblUSer = new kony.ui.Label({
                "bottom": "12dp",
                "centerX": "50%",
                "id": "lblUSer",
                "isVisible": true,
                "skin": "sknLblffffffSSPReg26px",
                "text": "Mr. John Doe",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxuserImg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxuserImg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "CopyslFboxprofilePic",
                "top": "20dp",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxuserImg.setDefaultUnit(kony.flex.DP);
            var imgUser = new kony.ui.Image2({
                "centerX": "50%",
                "height": "90%",
                "id": "imgUser",
                "isVisible": true,
                "left": "1dp",
                "skin": "slImage",
                "src": "profileicon.png",
                "top": "1dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxuserImg.add(imgUser);
            flxChangePassword.add(lblUSer, flxuserImg);
            var flxDetails = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxDetails",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "166dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var flxDOB = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "66dp",
                "id": "flxDOB",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDOB.setDefaultUnit(kony.flex.DP);
            var lblDOB = new kony.ui.Label({
                "id": "lblDOB",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.EnterDOBTitle"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "25dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDOBValue = new kony.ui.Label({
                "bottom": "9dp",
                "id": "lblDOBValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "12/13/1945",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDOB.add(lblDOB, lblDOBValue);
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var flxSSN = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxSSN",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSSN.setDefaultUnit(kony.flex.DP);
            var lblSSN = new kony.ui.Label({
                "id": "lblSSN",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.EnterSSNTitle"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblSSNValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "***-**-0116",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxHeaderShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-10dp",
                "clipBounds": true,
                "height": "10dp",
                "id": "flxHeaderShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxHeaderShadow.setDefaultUnit(kony.flex.DP);
            flxHeaderShadow.add();
            flxSSN.add(lblSSN, lblSSNValue, flxHeaderShadow);
            var flxRegisteredPhoneNumbers = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxRegisteredPhoneNumbers",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRegisteredPhoneNumbers.setDefaultUnit(kony.flex.DP);
            var lblRegisteredPhoneNumbers = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRegisteredPhoneNumbers",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.RegisteredPhoneNumbers"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRegisteredPhoneNumbers.add(lblRegisteredPhoneNumbers);
            var flxHomeNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxHomeNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHomeNumber.setDefaultUnit(kony.flex.DP);
            var lblHomeNumber = new kony.ui.Label({
                "id": "lblHomeNumber",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.HomeNumber"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblHomeNumberValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblHomeNumberValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "(358) 673-0116",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHomeNumber.add(lblHomeNumber, lblHomeNumberValue);
            var flxSeparator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator2.setDefaultUnit(kony.flex.DP);
            flxSeparator2.add();
            var flxMobile = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxMobile",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMobile.setDefaultUnit(kony.flex.DP);
            var lblMobile = new kony.ui.Label({
                "id": "lblMobile",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.Mobile"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblMobileValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblMobileValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "+91-358-673-0116",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxMobile.add(lblMobile, lblMobileValue);
            var flxSeparator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator3.setDefaultUnit(kony.flex.DP);
            flxSeparator3.add();
            var flxWork = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxWork",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxWork.setDefaultUnit(kony.flex.DP);
            var lblWork = new kony.ui.Label({
                "id": "lblWork",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.Profile.WorkInternational"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblWorkValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblWorkValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "(358) 673-0117",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxWork.add(lblWork, lblWorkValue);
            var flxRegisteredEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxRegisteredEmail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRegisteredEmail.setDefaultUnit(kony.flex.DP);
            var lblRegisteredEmail = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRegisteredEmail",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.RegisteredEmail"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRegisteredEmail.add(lblRegisteredEmail);
            var flxPrimaryEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxPrimaryEmail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPrimaryEmail.setDefaultUnit(kony.flex.DP);
            var lblPrimaryEmailID = new kony.ui.Label({
                "id": "lblPrimaryEmailID",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.PrimaryEmailID"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPrimaryEmailIDValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblPrimaryEmailIDValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "alec.torp@yahoo.com",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "350dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxPrimaryEmail.add(lblPrimaryEmailID, lblPrimaryEmailIDValue);
            var flxSeparator4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator4.setDefaultUnit(kony.flex.DP);
            flxSeparator4.add();
            var flxOptionalEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxOptionalEmail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOptionalEmail.setDefaultUnit(kony.flex.DP);
            var lblOptionalEmail = new kony.ui.Label({
                "id": "lblOptionalEmail",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.OptionalEmail"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblOptionalValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblOptionalValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "isaac_huel@kub.org",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "350dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxOptionalEmail.add(lblOptionalEmail, lblOptionalValue);
            var flxRegisteredAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxRegisteredAddress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRegisteredAddress.setDefaultUnit(kony.flex.DP);
            var lblRegisteredAddress = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRegisteredAddress",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.RegisteredAddress"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRegisteredAddress.add(lblRegisteredAddress);
            var flxHomeAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "66dp",
                "id": "flxHomeAddress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHomeAddress.setDefaultUnit(kony.flex.DP);
            var lblHomeAddress = new kony.ui.Label({
                "id": "lblHomeAddress",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.HomeAddress"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblHomeAddressValue = new kony.ui.Label({
                "bottom": "9dp",
                "height": "40dp",
                "id": "lblHomeAddressValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "2211 North Orange Blossom Trail, Orlando, FL, United States",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHomeAddress.add(lblHomeAddress, lblHomeAddressValue);
            var flxSeparator5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator5.setDefaultUnit(kony.flex.DP);
            flxSeparator5.add();
            var flxOfficeAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "66dp",
                "id": "flxOfficeAddress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOfficeAddress.setDefaultUnit(kony.flex.DP);
            var lblOfficeAddress = new kony.ui.Label({
                "id": "lblOfficeAddress",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.OfficeAddress"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblOfficeAddressValue = new kony.ui.Label({
                "height": "40dp",
                "id": "lblOfficeAddressValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg26px",
                "text": "2211 North Orange Blossom Trail, Orlando, FL, United States",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxOfficeAddress.add(lblOfficeAddress, lblOfficeAddressValue);
            var flxSeparator6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator6.setDefaultUnit(kony.flex.DP);
            flxSeparator6.add();
            var flxGap = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxGap",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGap.setDefaultUnit(kony.flex.DP);
            flxGap.add();
            flxDetails.add(flxDOB, flxSeparator, flxSSN, flxRegisteredPhoneNumbers, flxHomeNumber, flxSeparator2, flxMobile, flxSeparator3, flxWork, flxRegisteredEmail, flxPrimaryEmail, flxSeparator4, flxOptionalEmail, flxRegisteredAddress, flxHomeAddress, flxSeparator5, flxOfficeAddress, flxSeparator6, flxGap);
            var flxDetailsMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxDetailsMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "110dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDetailsMain.setDefaultUnit(kony.flex.DP);
            var segDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "lblHeader": "Registered Phone Numbers"
                        },
                        [{
                            "lblDetail": "Date of Birth (DOB)",
                            "lblDetailValue": "12/13/1945"
                        }, {
                            "lblDetail": "Date of Birth (DOB)",
                            "lblDetailValue": "12/13/1945"
                        }, {
                            "lblDetail": "Date of Birth (DOB)",
                            "lblDetailValue": "12/13/1945"
                        }]
                    ],
                    [{
                            "lblHeader": "Registered Phone Numbers"
                        },
                        [{
                            "lblDetail": "Date of Birth (DOB)",
                            "lblDetailValue": "12/13/1945"
                        }, {
                            "lblDetail": "Date of Birth (DOB)",
                            "lblDetailValue": "12/13/1945"
                        }, {
                            "lblDetail": "Date of Birth (DOB)",
                            "lblDetailValue": "12/13/194512/13/194512/13/194512/13/194512/13/194512/13/194512/13/194512/13/194512/13/194512/13/194512/13/1945"
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segDetails",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "segTransparant",
                "rowSkin": "segTransparant",
                "rowTemplate": "flxDetails",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxDetailsHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxDetails": "flxDetails",
                    "flxDetailsHeader": "flxDetailsHeader",
                    "flxHeader": "flxHeader",
                    "flxHeaderShadow": "flxHeaderShadow",
                    "flxMain": "flxMain",
                    "flxSeparator": "flxSeparator",
                    "lblDetail": "lblDetail",
                    "lblDetailValue": "lblDetailValue",
                    "lblHeader": "lblHeader"
                },
                "widgetSkin": "segTransparant",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyflxDetailsMain0e8eb796111bb40 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "20dp",
                "id": "CopyflxDetailsMain0e8eb796111bb40",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxDetailsMain0e8eb796111bb40.setDefaultUnit(kony.flex.DP);
            CopyflxDetailsMain0e8eb796111bb40.add();
            flxDetailsMain.add(segDetails, CopyflxDetailsMain0e8eb796111bb40);
            flxMainContainer.add(flxChangePassword, flxDetails, flxDetailsMain);
            var flxEditOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxEditOptions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxEditOptions.setDefaultUnit(kony.flex.DP);
            var flxOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "clipBounds": true,
                "height": "250dp",
                "id": "flxOptions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffRadiusffffff10px",
                "zIndex": 2
            }, {}, {});
            flxOptions.setDefaultUnit(kony.flex.DP);
            var flxUploadProfilePicture = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxUploadProfilePicture",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUploadProfilePicture.setDefaultUnit(kony.flex.DP);
            var lbluploadProfilePicture = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lbluploadProfilePicture",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.UploadProfilePicture"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var Copyflxs0i8fb78088bf442 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "Copyflxs0i8fb78088bf442",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            Copyflxs0i8fb78088bf442.setDefaultUnit(kony.flex.DP);
            Copyflxs0i8fb78088bf442.add();
            flxUploadProfilePicture.add(lbluploadProfilePicture, Copyflxs0i8fb78088bf442);
            var flxChangeProfilePicture = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxChangeProfilePicture",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChangeProfilePicture.setDefaultUnit(kony.flex.DP);
            var lblChangeProfilePicture = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblChangeProfilePicture",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.ChangeProfilePicture"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var Copyflxs0edc8877e250947 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "Copyflxs0edc8877e250947",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            Copyflxs0edc8877e250947.setDefaultUnit(kony.flex.DP);
            Copyflxs0edc8877e250947.add();
            flxChangeProfilePicture.add(lblChangeProfilePicture, Copyflxs0edc8877e250947);
            var flxRemoveProfilePicture = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxRemoveProfilePicture",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRemoveProfilePicture.setDefaultUnit(kony.flex.DP);
            var lblRemoveProfilePicture = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblRemoveProfilePicture",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.profilePersonalDetails.RemoveProfilePicture"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var Copyflxs0a346519724b140 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "Copyflxs0a346519724b140",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            Copyflxs0a346519724b140.setDefaultUnit(kony.flex.DP);
            Copyflxs0a346519724b140.add();
            flxRemoveProfilePicture.add(lblRemoveProfilePicture, Copyflxs0a346519724b140);
            var flxEditPhoneNumbers = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxEditPhoneNumbers",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEditPhoneNumbers.setDefaultUnit(kony.flex.DP);
            var lblEditPhoneNumbers = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblEditPhoneNumbers",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.EditPhoneNumbers"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxse = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxse",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxse.setDefaultUnit(kony.flex.DP);
            flxse.add();
            flxEditPhoneNumbers.add(lblEditPhoneNumbers, flxse);
            var flxEditEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxEditEmail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEditEmail.setDefaultUnit(kony.flex.DP);
            var lblEditEmail = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblEditEmail",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.EditEmail"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var FLXSEP = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "FLXSEP",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FLXSEP.setDefaultUnit(kony.flex.DP);
            FLXSEP.add();
            flxEditEmail.add(lblEditEmail, FLXSEP);
            var flxEditAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxEditAddress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEditAddress.setDefaultUnit(kony.flex.DP);
            var lblEditAdress = new kony.ui.Label({
                "centerX": "50.04%",
                "centerY": "50.00%",
                "id": "lblEditAdress",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.EditAdress"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEditAddress.add(lblEditAdress);
            flxOptions.add(flxUploadProfilePicture, flxChangeProfilePicture, flxRemoveProfilePicture, flxEditPhoneNumbers, flxEditEmail, flxEditAddress);
            var flxTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "230dp",
                "clipBounds": true,
                "id": "flxTop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTop.setDefaultUnit(kony.flex.DP);
            flxTop.add();
            flxEditOptions.add(flxOptions, flxTop);
            var flxEditProfilePicture = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxEditProfilePicture",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxEditProfilePicture.setDefaultUnit(kony.flex.DP);
            var flxOptions2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "clipBounds": true,
                "height": "100dp",
                "id": "flxOptions2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffRadiusffffff10px",
                "zIndex": 1
            }, {}, {});
            flxOptions2.setDefaultUnit(kony.flex.DP);
            var flxTakePicture = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxTakePicture",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTakePicture.setDefaultUnit(kony.flex.DP);
            var lblTakePicture = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblTakePicture",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Messages.TakeAPicture"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeparator9 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator9",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator9.setDefaultUnit(kony.flex.DP);
            flxSeparator9.add();
            var cameraWidget = new kony.ui.Camera({
                "cameraSource": constants.CAMERA_SOURCE_FRONT,
                "compressionLevel": 20,
                "height": "100%",
                "id": "cameraWidget",
                "isVisible": true,
                "left": "0dp",
                "skin": "slCamera",
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
                "enablePhotoCropFeature": false,
                "overlayConfig": {
                    "captureButtonText": "",
                    "startVideoButtonText": "",
                    "stopVideoButtonText": "",
                    "overlayForm": "frmCamAndroidUtility",
                    "tapAnywhere": true
                }
            });
            flxTakePicture.add(lblTakePicture, flxSeparator9, cameraWidget);
            var flxChoose = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxChoose",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChoose.setDefaultUnit(kony.flex.DP);
            var lblChooseFromGallery = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblChooseFromGallery",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.OnBoarding.ChooseFromGallery"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxChoose.add(lblChooseFromGallery);
            flxOptions2.add(flxTakePicture, flxChoose);
            var flxTopProfile = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "130dp",
                "clipBounds": true,
                "id": "flxTopProfile",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTopProfile.setDefaultUnit(kony.flex.DP);
            flxTopProfile.add();
            flxEditProfilePicture.add(flxOptions2, flxTopProfile);
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
                "zIndex": 200
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
            this.add(flxHeader, flxMainContainer, flxEditOptions, flxEditProfilePicture, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmProfilePersonalDetails,
            "enabledForIdleTimeout": true,
            "id": "frmProfilePersonalDetails",
            "init": controller.AS_Form_ad8224be31974614893122a874e089a7,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "onHide": controller.AS_Form_h5155b60de664b048a781f0587937c4e,
            "preShow": function(eventobject) {
                controller.AS_Form_d0c72185658c40c5971c493e150ca7a1(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.Title")
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