define("MoneyMovementModule/frmMMTransactionDetails", function() {
    return function(controller) {
        function addWidgetsfrmMMTransactionDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var flxContainer = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxContainer.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "7%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
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
                        "isVisible": false,
                        "text": "EDIT",
                        "top": "viz.val_cleared"
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
                        "text": kony.i18n.getLocalizedString("kony.mb.PFMTransactionDetails.Title"),
                        "left": "15%",
                        "width": "65%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxTransfers = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxTransfers",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 400
            }, {}, {});
            flxTransfers.setDefaultUnit(kony.flex.DP);
            var flxMainTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxMainTrans",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainTrans.setDefaultUnit(kony.flex.DP);
            var lblTransfer = new kony.ui.Label({
                "id": "lblTransfer",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.transfer"),
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
            var lblTransferValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblTransferValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl0a78d1SSP30px",
                "text": "$000.00",
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
            var lblSuccess = new kony.ui.Label({
                "bottom": "17dp",
                "id": "lblSuccess",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl43CE6E26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.successful"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxMainTrans.add(lblTransfer, lblTransferValue, lblSuccess);
            var flxTransferredToTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxTransferredToTrans",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransferredToTrans.setDefaultUnit(kony.flex.DP);
            var flxSeperatorTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans.add();
            var lblTransferredToTrans = new kony.ui.Label({
                "id": "lblTransferredToTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Recipient"),
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
            var flxToValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxToValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%"
            }, {}, {});
            flxToValue.setDefaultUnit(kony.flex.DP);
            var lblTransferredToValueTrans = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblTransferredToValueTrans",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Little John...1234",
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
            var lblAccTypeTrans = new kony.ui.Label({
                "bottom": "9dp",
                "id": "lblAccTypeTrans",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.checkingAccount"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxToValue.add(lblTransferredToValueTrans, lblAccTypeTrans);
            var flxAccountType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "70%",
                "clipBounds": false,
                "height": "17dp",
                "id": "flxAccountType",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "5%",
                "isModalContainer": false,
                "right": "3dp",
                "skin": "sknflxe3e3e3border",
                "width": "17dp",
                "zIndex": 10
            }, {}, {});
            flxAccountType.setDefaultUnit(kony.flex.DP);
            var imgAccountType = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "45%",
                "height": "11dp",
                "id": "imgAccountType",
                "isVisible": true,
                "skin": "slImage",
                "src": "personalaccount.png",
                "width": "11dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccountType.add(imgAccountType);
            flxTransferredToTrans.add(flxSeperatorTrans, lblTransferredToTrans, flxToValue, flxAccountType);
            var flxTransferredToP2P = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "85dp",
                "id": "flxTransferredToP2P",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransferredToP2P.setDefaultUnit(kony.flex.DP);
            var flxSeperatorP2P = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorP2P",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorP2P.setDefaultUnit(kony.flex.DP);
            flxSeperatorP2P.add();
            var lblTransferredToP2P = new kony.ui.Label({
                "id": "lblTransferredToP2P",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Recipient"),
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
            var flxP2PValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxP2PValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%"
            }, {}, {});
            flxP2PValue.setDefaultUnit(kony.flex.DP);
            var lblPhoneNo = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblPhoneNo",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLbl424242SSP26px",
                "text": "628-190-1123",
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
            var lblAccTypeP2P = new kony.ui.Label({
                "bottom": "9dp",
                "id": "lblAccTypeP2P",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.checkingAccount"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTransferredToValueP2P = new kony.ui.Label({
                "id": "lblTransferredToValueP2P",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Little John...1234",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "30dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxP2PValue.add(lblPhoneNo, lblAccTypeP2P, lblTransferredToValueP2P);
            var flxAccountType1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "47%",
                "clipBounds": false,
                "height": "17dp",
                "id": "flxAccountType1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "5%",
                "isModalContainer": false,
                "right": "3dp",
                "skin": "sknflxe3e3e3border",
                "width": "17dp",
                "zIndex": 10
            }, {}, {});
            flxAccountType1.setDefaultUnit(kony.flex.DP);
            var imgAccountType1 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "45%",
                "height": "11dp",
                "id": "imgAccountType1",
                "isVisible": true,
                "skin": "slImage",
                "src": "personalaccount.png",
                "width": "11dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccountType1.add(imgAccountType1);
            flxTransferredToP2P.add(flxSeperatorP2P, lblTransferredToP2P, flxP2PValue, flxAccountType1);
            var flxTransferredFromTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxTransferredFromTrans",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransferredFromTrans.setDefaultUnit(kony.flex.DP);
            var flxSeperatorTrans1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans1.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans1.add();
            var lblTransferredFromTrans = new kony.ui.Label({
                "id": "lblTransferredFromTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.transferredFrom"),
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
            var flxFromValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFromValue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%"
            }, {}, {});
            flxFromValue.setDefaultUnit(kony.flex.DP);
            var lblTransferredFromValueTrans = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblTransferredFromValueTrans",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLbl424242SSP26px",
                "text": "JohnChecking...1234",
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
            var lblAccTypeFromTrans = new kony.ui.Label({
                "bottom": "9dp",
                "id": "lblAccTypeFromTrans",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.checkingAccount"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxFromValue.add(lblTransferredFromValueTrans, lblAccTypeFromTrans);
            var flxAccountType2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "70%",
                "clipBounds": false,
                "height": "17dp",
                "id": "flxAccountType2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "5%",
                "isModalContainer": false,
                "right": "3dp",
                "skin": "sknflxe3e3e3border",
                "width": "17dp",
                "zIndex": 10
            }, {}, {});
            flxAccountType2.setDefaultUnit(kony.flex.DP);
            var imgAccountType2 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "45%",
                "height": "11dp",
                "id": "imgAccountType2",
                "isVisible": true,
                "skin": "slImage",
                "src": "personalaccount.png",
                "width": "11dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccountType2.add(imgAccountType2);
            flxTransferredFromTrans.add(flxSeperatorTrans1, lblTransferredFromTrans, flxFromValue, flxAccountType2);
            var flxDescTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDescTrans",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDescTrans.setDefaultUnit(kony.flex.DP);
            var flxSeperatorTrans3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans3.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans3.add();
            var lblDescTrans = new kony.ui.Label({
                "id": "lblDescTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.description"),
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
            var lblDescValueTrans = new kony.ui.Label({
                "id": "lblDescValueTrans",
                "isVisible": true,
                "left": "20dp",
                "maxNumberOfLines": 3,
                "skin": "sknLbl424242SSP26px",
                "text": "Wire transfer to ABC DEF GHI JKL MNO PQR STU VWXYZ sdfghjkl",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "8dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var FlexContainer0c4807086df9243 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8dp",
                "id": "FlexContainer0c4807086df9243",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            FlexContainer0c4807086df9243.setDefaultUnit(kony.flex.DP);
            FlexContainer0c4807086df9243.add();
            flxDescTrans.add(flxSeperatorTrans3, lblDescTrans, lblDescValueTrans, FlexContainer0c4807086df9243);
            var flxTransactionDateTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxTransactionDateTrans",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionDateTrans.setDefaultUnit(kony.flex.DP);
            var flxSeperatorTrans4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans4.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans4.add();
            var lblTransactionDateTrans = new kony.ui.Label({
                "id": "lblTransactionDateTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.transactionDate"),
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
            var lblTransDateValueTrans = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblTransDateValueTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "04/17/2018",
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
            flxTransactionDateTrans.add(flxSeperatorTrans4, lblTransactionDateTrans, lblTransDateValueTrans);
            var flxFrequencyTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxFrequencyTrans",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFrequencyTrans.setDefaultUnit(kony.flex.DP);
            var flxSeperatorTrans5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans5.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans5.add();
            var lblFrequencyTrans = new kony.ui.Label({
                "id": "lblFrequencyTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.frequency"),
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
            var lblFreqTransValue = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblFreqTransValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Monthly Once",
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
            flxFrequencyTrans.add(flxSeperatorTrans5, lblFrequencyTrans, lblFreqTransValue);
            var flxRecurrenceTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxRecurrenceTrans",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRecurrenceTrans.setDefaultUnit(kony.flex.DP);
            var lblRecurrenceTrans = new kony.ui.Label({
                "id": "lblRecurrenceTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.recurrence"),
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
            var lblRecurrenceValueTrans = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblRecurrenceValueTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "2nd (out of total 10)",
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
            var flxSeperatorTrans7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans7",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans7.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans7.add();
            flxRecurrenceTrans.add(lblRecurrenceTrans, lblRecurrenceValueTrans, flxSeperatorTrans7);
            var flxReferenceNoTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxReferenceNoTrans",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReferenceNoTrans.setDefaultUnit(kony.flex.DP);
            var flxSeperatorTrans6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans6.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans6.add();
            var lblReferenceNoTrans = new kony.ui.Label({
                "id": "lblReferenceNoTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.referenceNo"),
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
            var lblReferenceNoValueTrans = new kony.ui.Label({
                "bottom": "8dp",
                "id": "lblReferenceNoValueTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "00000000000000",
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
            flxReferenceNoTrans.add(flxSeperatorTrans6, lblReferenceNoTrans, lblReferenceNoValueTrans);
            var flxIBAN = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxIBAN",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxIBAN.setDefaultUnit(kony.flex.DP);
            var flxSeperatorTrans8 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans8",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans8.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans8.add();
            var lblIBAN = new kony.ui.Label({
                "id": "lblIBAN",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.IBAN"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblIBANValue = new kony.ui.Label({
                "bottom": "5dp",
                "id": "lblIBANValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "00000000000000000000",
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
            flxIBAN.add(flxSeperatorTrans8, lblIBAN, lblIBANValue);
            var flxCurrencyTransfer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrencyTransfer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCurrencyTransfer.setDefaultUnit(kony.flex.DP);
            var flxSeperator11 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator11",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator11.setDefaultUnit(kony.flex.DP);
            flxSeperator11.add();
            var lblCurrencyTransfer = new kony.ui.Label({
                "id": "lblCurrencyTransfer",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.Currency"),
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
            var lblCurrencyValueTransfer = new kony.ui.Label({
                "bottom": "12dp",
                "id": "lblCurrencyValueTransfer",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Dollar ($)",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 5,
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCurrencyTransfer.add(flxSeperator11, lblCurrencyTransfer, lblCurrencyValueTransfer);
            var flxConvertedAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxConvertedAmount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxConvertedAmount.setDefaultUnit(kony.flex.DP);
            var flxSeperator12 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator12",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator12.setDefaultUnit(kony.flex.DP);
            flxSeperator12.add();
            var lblConvertedAmount = new kony.ui.Label({
                "id": "lblConvertedAmount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.ConvertedValue"),
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
            var lblConvertedValue = new kony.ui.Label({
                "bottom": "12dp",
                "id": "lblConvertedValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Dollar ($)",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 5,
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxConvertedAmount.add(flxSeperator12, lblConvertedAmount, lblConvertedValue);
            var flxTransactionFeeTransfer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTransactionFeeTransfer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionFeeTransfer.setDefaultUnit(kony.flex.DP);
            var flxSeperatorConvertedAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorConvertedAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorConvertedAmount.setDefaultUnit(kony.flex.DP);
            flxSeperatorConvertedAmount.add();
            var lblTransactionFeeTransfer = new kony.ui.Label({
                "id": "lblTransactionFeeTransfer",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.TransfersEurope.TransactionFees"),
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
            var lblTransactionFeeValueTransfer = new kony.ui.Label({
                "bottom": "12dp",
                "id": "lblTransactionFeeValueTransfer",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "$5",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 5,
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTransactionFeeTransfer.add(flxSeperatorConvertedAmount, lblTransactionFeeTransfer, lblTransactionFeeValueTransfer);
            var flxNotesTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxNotesTrans",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNotesTrans.setDefaultUnit(kony.flex.DP);
            var flxSeperator13 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator13",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator13.setDefaultUnit(kony.flex.DP);
            flxSeperator13.add();
            var lblNotesTrans = new kony.ui.Label({
                "id": "lblNotesTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.notes"),
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
            var lblNotesValueTrans = new kony.ui.Label({
                "id": "lblNotesValueTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Party with friends.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 30,
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxNotesTrans.add(flxSeperator13, lblNotesTrans, lblNotesValueTrans);
            var flxSeperatorTrans9 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans9",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "10dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans9.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans9.add();
            var flxButtonsTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxButtonsTrans",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxButtonsTrans.setDefaultUnit(kony.flex.DP);
            var btnRepeatTransactionTrans = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnRepeatTransactionTrans",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.repeatTransaction"),
                "top": "0dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnDisputetTransactionTrans = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnDisputetTransactionTrans",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.disputeTransaction"),
                "top": "0dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnDownloadTransactionTrans = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnDownloadTransactionTrans",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": "Download Transaction",
                "top": "0dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnViewRequest = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnViewRequest",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.disputedTransactions.ViewRequests"),
                "top": "0dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCancelTransactionTrans = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnCancelTransactionTrans",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.cancelTransaction"),
                "top": "0dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCancelThisOccurenceTrans = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnCancelThisOccurenceTrans",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.recurrence.CancelThisOccurence"),
                "top": "0dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCancelSeriesTrans = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnCancelSeriesTrans",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.recurrence.CancelSeries"),
                "top": "0dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButtonsTrans.add(btnRepeatTransactionTrans, btnDisputetTransactionTrans, btnDownloadTransactionTrans, btnViewRequest, btnCancelTransactionTrans, btnCancelThisOccurenceTrans, btnCancelSeriesTrans);
            flxTransfers.add(flxMainTrans, flxTransferredToTrans, flxTransferredToP2P, flxTransferredFromTrans, flxDescTrans, flxTransactionDateTrans, flxFrequencyTrans, flxRecurrenceTrans, flxReferenceNoTrans, flxIBAN, flxCurrencyTransfer, flxConvertedAmount, flxTransactionFeeTransfer, flxNotesTrans, flxSeperatorTrans9, flxButtonsTrans);
            var flxTransactionDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "93%",
                "id": "flxTransactionDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxTransactionDetails.setDefaultUnit(kony.flex.DP);
            var accountsTransactionDetailsNative = new com.temenos.infinityComponents.accountsTransactionDetailsNative({
                "height": "100%",
                "id": "accountsTransactionDetailsNative",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "accountsTransactionDetailsNative": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            accountsTransactionDetailsNative.amountFormat = "{\"locale\":\"\", \"positiveFormat\" : \"{CS}{D}\", \"negativeFormat\" : \"-{CS}{D}\", \"fractionDigits\":\"2\"}";
            accountsTransactionDetailsNative.sknTransDetails = "ICSknFlxFFFFFF";
            accountsTransactionDetailsNative.checkNumberLabel = "{i.kony.mb.chequemgmt.chequeNumber)";
            accountsTransactionDetailsNative.objectServiceName = "TransactionAdvice";
            accountsTransactionDetailsNative.statusFieldVisibility = true;
            accountsTransactionDetailsNative.transactionTypeIdentifier = "{\"default\":\"transactionType\",\"loanSchedule\":\"installmentType\"}";
            accountsTransactionDetailsNative.objectServiceNameAttachments = "RBObjects";
            accountsTransactionDetailsNative.transactionType = "{$.c.transactionType}";
            accountsTransactionDetailsNative.dateFormat = "m/d/Y";
            accountsTransactionDetailsNative.sknTransDetailsLabel = "ICSknLbl727272SSPReg22px";
            accountsTransactionDetailsNative.checkNumberValue = "{$.c.checkNumber}";
            accountsTransactionDetailsNative.objectName = "TransactionAdviceObject";
            accountsTransactionDetailsNative.objectNameAttachments = "DownloadAttachments";
            accountsTransactionDetailsNative.transactionTypes = "{\"TT1\":\"BillPay\",\"TT2\":\"InternalTransfer\",\"TT3\":\"ExternalTransfer\",\"TT4\":\"InternetTransaction\",\"TT5\":\"POS\",\"TT6\":\"Credit\",\"TT7\":\"Deposit\",\"TT8\":\"Interest\",\"TT9\":\"Loan\",\"TT10\":\"Wire\",\"TT11\":\"Fee\",\"TT12\":\"Cardless\",\"TT13\":\"P2P\",\"TT14\":\"SwiftPayment\",\"TT15\":\"Tax\",\"TT16\":\"CardPayment\",\"TT17\":\"Cheque\",\"TT18\":\"Draft\",\"TT19\":\"CheckWithdrawal\",\"TT20\":\"CheckDeposit\",\"TT21\":\"Others\",\"TT22\":\"BlockedFund\",\"TT23\":\"DUE\",\"TT24\":\"PAID\"}";
            accountsTransactionDetailsNative.backendDateFormat = "Y-m-d";
            accountsTransactionDetailsNative.sknTransDetailsValue = "ICSknLblSSP42424213px";
            accountsTransactionDetailsNative.swiftTransaction = "Field 4";
            accountsTransactionDetailsNative.operationName = "getBase64";
            accountsTransactionDetailsNative.statusIndicatorVisibility = "{\"default\":true,\"loanSchedule\":false}";
            accountsTransactionDetailsNative.operationNameAttachments = "retrieveAttachments";
            accountsTransactionDetailsNative.currencyCode = "{$.c.transactionCurrency}";
            accountsTransactionDetailsNative.criteria = "{\"customerId\":\"{$.c.customerId}\",\"accountId\":\"{$.c.accountId}\",\"transactionRef\":\"{$.c.transactionId}\",\"mediaType\":\"png\",\"transactionType\":\"{$.c.transactionType}\",\"page\":\"0\"}";
            accountsTransactionDetailsNative.swiftTransactionSkin = "ICSknSSP4176a442424213Px";
            accountsTransactionDetailsNative.criteriaAttachments = "{\"customerId\":\"{$.c.customerId}\",\"transactionId\":\"{$.c.transactionId}\"}";
            accountsTransactionDetailsNative.sknTransDetailsAmount = "{\"default\":\"ICSknLblSSP42424213px\",\"Field 1\":\"ICSknLbl4176a4Reg35px\"}";
            accountsTransactionDetailsNative.enableAttachments = true;
            accountsTransactionDetailsNative.sknTransDetailsSeparator = "ICSknflxE3E3E3";
            accountsTransactionDetailsNative.sknTransStatusPending = "ICSknFlxFFB000";
            accountsTransactionDetailsNative.sknTransStatusSuccess = "ICSknFlx2a9e05";
            accountsTransactionDetailsNative.sknTransDetailsStatus = "ICSknLbl42424215px";
            accountsTransactionDetailsNative.fieldStatus = "{\"default\":{\"text\":\"{$.c.statusDescription}\",\"skin\":\"ICSknLblSSP42424215px\"},\"$.TRANSTYPE.TT23\":{\"text\":\"Overdue\",\"displayText\":\"Overdue\",\"skin\":\"ICSknLbl727272SSPReg22px\"},\"$.TRANSTYPE.TT24\":{\"text\":\"Paid\",\"displayText\":\"Paid\",\"skin\":\"ICSknLbl727272SSPReg22px\"}}";
            accountsTransactionDetailsNative.field1Label = "{\"default\":{\"text\":\"{$.c.transactionType}\"},\"$.TRANSTYPE.TT1\":{\"text\":\"{i.kony.mb.BillPay.BillPay}\"},\"$.TRANSTYPE.TT2\":{\"text\":\"{i.kony.mb.Hamburger.MoneyMovementTransfers}\"},\"$.TRANSTYPE.TT3\":{\"text\":\"{i.kony.mb.Hamburger.MoneyMovementTransfers}\"},\"$.TRANSTYPE.TT9\":{\"text\":\"{i.kony.mb.Manage.Loan}\"},\"$.TRANSTYPE.TT10\":{\"text\":\"{i.kony.mb.transfer.WireTransfer}\"},\"$.TRANSTYPE.TT12\":{\"text\":\"{i.kony.mb.transaction.cashWithdrawal}\"},\"$.TRANSTYPE.TT14\":{\"text\":\"{i.i18n.Transactions.backendExternalTransfer}\"},\"$.TRANSTYPE.TT17\":{\"text\":\"{i.kony.mb.ChequeDeposit}\"},\"$.TRANSTYPE.TT20\":{\"text\":\"{i.kony.mb.ChequeDeposit}\"},\"$.TRANSTYPE.TT23\":{\"text\":\"{i.kony.mb.common.Amount}\"},\"$.TRANSTYPE.TT24\":{\"text\":\"{i.kony.mb.common.Amount}\"}}";
            accountsTransactionDetailsNative.field1Value = "{\"default\":{\"text\":\"{$.c.amount}\"},\"$.TRANSTYPE.TT22\":{\"text\":\"{$.c.lockedAmount}\"},\"$.TRANSTYPE.TT23\":{\"text\":\"{$.c.installmentAmount}\"},\"$.TRANSTYPE.TT24\":{\"text\":\"{$.c.installmentAmount}\"}}";
            accountsTransactionDetailsNative.field1Type = "{\"default\":\"amount\"}";
            accountsTransactionDetailsNative.field2Label = "{\"default\":{\"text\":\"{i.kony.mb.Accounts.Description}:\"},\"$.TRANSTYPE.TT2\":{\"text\":\"{i.kony.mb.Accounts.Description}:\"},\"$.TRANSTYPE.TT3\":{\"text\":\"{i.kony.mb.Accounts.Description}:\"},\"$.TRANSTYPE.TT22\":{\"text\":\"{i.kony.mb.transaction.referenceNo}:\"},\"$.TRANSTYPE.TT23\":{\"text\":\"{i.kony.mb.transfers.Date}:\"},\"$.TRANSTYPE.TT24\":{\"text\":\"{i.kony.mb.transfers.Date}:\"}}";
            accountsTransactionDetailsNative.field2Value = "{\"default\":{\"text\":\"{$.c.description}\"},\"$.TRANSTYPE.TT22\":{\"text\":\"{$.c.transactionReference}\"},\"$.TRANSTYPE.TT23\":{\"text\":\"{$.c.paymentDate}\"},\"$.TRANSTYPE.TT24\":{\"text\":\"{$.c.paymentDate}\"}}";
            accountsTransactionDetailsNative.field2Type = "{\"default\":\"text\",\"$.TRANSTYPE.TT23\":\"date\",\"$.TRANSTYPE.TT24\":\"date\"}";
            accountsTransactionDetailsNative.field3Label = "{\"default\":{\"text\":\"{i.kony.mb.transaction.transactionDate}:\"},\"$.TRANSTYPE.TT7\":{\"text\":\"{i.kony.mb.accounts.postedDate}:\"},\"$.TRANSTYPE.TT17\":{\"text\":\"{i.kony.mb.accounts.postedDate}:\"},\"$.TRANSTYPE.TT20\":{\"text\":\"{i.kony.mb.accounts.postedDate}:\"},\"$.TRANSTYPE.TT22\":{\"text\":\"{i.kony.mb.transaction.transactionDate}:\"}}";
            accountsTransactionDetailsNative.field3Value = "{\"default\":{\"text\":\"{$.c.transactionDate}\"},\"$.TRANSTYPE.TT7\":{\"text\":\"{$.c.showDate}\"},\"$.TRANSTYPE.TT20\":{\"text\":\"{$.c.postedDate}\"},\"$.TRANSTYPE.TT22\":{\"text\":\"{$.c.transactionDate}\"}}";
            accountsTransactionDetailsNative.field3Type = "{\"default\":\"date\",\"$.TRANSTYPE.TT1\":\"date\",\"$.TRANSTYPE.TT7\":\"date\",\"$.TRANSTYPE.TT20\":\"date\",\"$.TRANSTYPE.TT22\":\"date\"}";
            accountsTransactionDetailsNative.field4Label = "{\"default\":{\"text\":\"{i.kony.mb.transaction.referenceNo}:\"},\"$.TRANSTYPE.TT1\":{\"text\":\"{i.kony.mb.accounts.postedDate}:\"},\"$.TRANSTYPE.TT2\":{\"text\":\"{i.kony.mb.transaction.frequency}:\"},\"$.TRANSTYPE.TT3\":{\"text\":\"{i.kony.mb.transaction.frequency}:\"},\"$.TRANSTYPE.TT19\":{\"text\":\"{i.kony.mb.accounts.postedDate}:\"},\"$.TRANSTYPE.TT22\":{\"text\":\"{i.kony.mb.Accounts.Description}:\"}}";
            accountsTransactionDetailsNative.field4Value = "{\"default\":{\"text\":\"{$.c.transactionId}\"},\"$.TRANSTYPE.TT1\":{\"text\":\"{$.c.scheduledDate}\"},\"$.TRANSTYPE.TT2\":{\"text\":\"{$.c.frequencyType}\"},\"$.TRANSTYPE.TT\":{\"text\":\"{$.c.frequencyType}\"},\"$.TRANSTYPE.TT19\":{\"text\":\"{$.c.scheduledDate}\"},\"$.TRANSTYPE.TT22\":{\"text\":\"{$.c.description}\"}}";
            accountsTransactionDetailsNative.field4Type = "{\"default\":\"text\",\"$.TRANSTYPE.TT1\":\"date\",\"$.TRANSTYPE.TT2\":\"text\",\"$.TRANSTYPE.TT3\":\"text\",\"$.TRANSTYPE.TT19\":\"date\",\"$.TRANSTYPE.TT22\":\"text\"}";
            accountsTransactionDetailsNative.field5Label = "{\"default\":{\"text\":\"\"},\"$.TRANSTYPE.TT1\":{\"text\":\"{i.kony.mb.transaction.referenceNo}:\"},\"$.TRANSTYPE.TT2\":{\"text\":\"{i.kony.mb.transaction.referenceNo}:\"},\"$.TRANSTYPE.TT3\":{\"text\":\"{i.kony.mb.transaction.referenceNo}:\"},\"$.TRANSTYPE.TT19\":{\"text\":\"{i.kony.mb.transaction.referenceNo}:\"},\"$.TRANSTYPE.TT22\":{\"text\":\"{i.kony.mb.transaction.fromDate}:\"}}";
            accountsTransactionDetailsNative.field5Value = "{\"default\":{\"text\":\"\"},\"$.TRANSTYPE.TT1\":{\"text\":\"{$.c.transactionId}\"},\"$.TRANSTYPE.TT2\":{\"text\":\"{$.c.transactionId}\"},\"$.TRANSTYPE.TT3\":{\"text\":\"{$.c.transactionId}\"},\"$.TRANSTYPE.TT19\":{\"text\":\"{$.c.transactionId}\"},\"$.TRANSTYPE.TT22\":{\"text\":\"{$.c.fromDate}\"}}";
            accountsTransactionDetailsNative.field5Type = "{\"default\":\"text\",\"$.TRANSTYPE.TT1\":\"date\",\"$.TRANSTYPE.TT2\":\"text\",\"$.TRANSTYPE.TT3\":\"text\",\"$.TRANSTYPE.TT19\":\"text\",\"$.TRANSTYPE.TT22\":\"date\"}";
            accountsTransactionDetailsNative.field6Label = "{\"default\":{\"text\":\"\"},\"$.TRANSTYPE.TT2\":{\"text\":\"{i.kony.mb.TransfersEurope.Currency}:\"},\"$.TRANSTYPE.TT3\":{\"text\":\"{i.kony.mb.TransfersEurope.Currency}:\"},\"$.TRANSTYPE.TT22\":{\"text\":\"{i.kony.mb.transaction.todate}:\"}}";
            accountsTransactionDetailsNative.field6Value = "{\"default\":{\"text\":\"\"},\"$.TRANSTYPE.TT2\":{\"text\":\"{$.c.transactionCurrency}\"},\"$.TRANSTYPE.TT3\":{\"text\":\"{$.c.transactionCurrency}\"},\"$.TRANSTYPE.TT22\":{\"text\":\"{$.c.toDate}\"}}";
            accountsTransactionDetailsNative.field6Type = "{\"default\":\"text\",\"$.TRANSTYPE.TT2\":\"text\",\"$.TRANSTYPE.TT3\":\"text\",\"$.TRANSTYPE.TT22\":\"Date\"}";
            accountsTransactionDetailsNative.field7Label = "{\"default\":{\"text\":\"\"},\"$.TRANSTYPE.TT2\":{\"text\":\"{i.kony.mb.transaction.notes}:\"},\"$.TRANSTYPE.TT3\":{\"text\":\"{i.kony.mb.transaction.notes}:\"},\"$.TRANSTYPE.TT22\":{\"text\":\"{i.kony.mb.transaction.notes}:\"},\"$.TRANSTYPE.TT23\":{\"text\":\"{i.kony.mb.Europe.Tax}:\"},\"$.TRANSTYPE.TT24\":{\"text\":\"{i.kony.mb.Europe.Tax}:\"}}";
            accountsTransactionDetailsNative.field7Value = "{\"default\":{\"text\":\"\"},\"$.TRANSTYPE.TT2\":{\"text\":\"{$.c.transactionsNotes}\"},\"$.TRANSTYPE.TT3\":{\"text\":\"{$.c.transactionsNotes}\"},\"$.TRANSTYPE.TT22\":{\"text\":\"{$.c.transactionsNotes}\"}}";
            accountsTransactionDetailsNative.field7Type = "{\"default\":\"text\",\"$.TRANSTYPE.TT2\":\"text\",\"$.TRANSTYPE.TT3\":\"text\",\"$.TRANSTYPE.TT22\":\"text\"}";
            accountsTransactionDetailsNative.field8Label = "{\"default\":{\"text\":\"\"},\"$.TRANSTYPE.TT23\":{\"text\":\"{i.kony.mb.transfers.Insurance}:\"},\"$.TRANSTYPE.TT24\":{\"text\":\"{i.kony.mb.transfers.Insurance}:\"}}";
            accountsTransactionDetailsNative.field8Value = "{\"default\":{\"text\":\"\",\"skin\":\"\"},\"$.TRANSTYPE.TT23\":{\"text\":\"{$.c.insurance}\"},\"$.TRANSTYPE.TT24\":{\"text\":\"{$.c.insurance}\"}}";
            accountsTransactionDetailsNative.field8Type = "{\"default\":\"text\",\"$.TRANSTYPE.TT23\":\"amount\",\"$.TRANSTYPE.TT24\":\"amount\"}";
            accountsTransactionDetailsNative.field9Label = "{\"default\":{\"text\":\"{i.kony.mb.Europe.Attachments}:\"}}";
            accountsTransactionDetailsNative.field9Value = "{\"default\":{\"text\":\"{$.c.fileNames}\"}}";
            accountsTransactionDetailsNative.field9Type = "{\"default\":\"text\"}";
            accountsTransactionDetailsNative.field10Label = "";
            accountsTransactionDetailsNative.field10Value = "";
            accountsTransactionDetailsNative.field10Type = "";
            accountsTransactionDetailsNative.field11Label = "";
            accountsTransactionDetailsNative.field11Value = "";
            accountsTransactionDetailsNative.field11Type = "";
            accountsTransactionDetailsNative.field12Label = "";
            accountsTransactionDetailsNative.filed12Value = "";
            accountsTransactionDetailsNative.field12Type = "";
            accountsTransactionDetailsNative.btnContextualAction1 = "{\"default\":{\"id\":\"DownloadTransaction\",\"text\":\"{i.kony.mb.DownloadTransaction}\",\"skin\":\"ICSknBtn003E75RoundedffffffSSP26px\",\"entitlement_keys\":[],\"entitlement_action\":false},\"$.TRANSTYPE.TT22\":{\"id\":\"\",\"text\":\"\",\"skin\":\"\",\"entitlement_keys\":[],\"entitlement_action\":true}}";
            accountsTransactionDetailsNative.btnContextualAction2 = "{\"default\":{\"id\":\"RepeatTransaction\",\"text\":\"{i.i18n.accounts.repeatTransaction}\",\"skin\":\"ICSknBtnffffffRounded003e75SSP26px\",\"entitlement_keys\":[\"INTERNATIONAL_WIRE_TRANSFER_CREATE\"],\"entitlement_action\":true},\"$.TRANSTYPE.TT22\":{\"id\":\"\",\"text\":\"\",\"skin\":\"\",\"entitlement_keys\":[],\"entitlement_action\":false},\"$.TRANSTYPE.TT23\":{\"id\":\"PayOverdue\",\"text\":\"{i.kony.mb.loans.PayOverdue}\",\"skin\":\"ICSknBtnffffffRounded003e75SSP26px\",\"entitlement_keys\":[],\"entitlement_action\":false}}";
            accountsTransactionDetailsNative.btnContextualAction3 = "{\"default\":{\"id\":\"DisputeTransaction\",\"text\":\"{i.kony.mb.transaction.disputeTransaction}\",\"skin\":\"ICSknBtnffffffRounded003e75SSP26px\",\"entitlement_keys\":[\"DISPUTE_TRANSACTIONS\"],\"entitlement_action\":true},\"$.TRANSTYPE.TT14\":{\"id\":\"RepeatTransaction\",\"text\":\"{i.i18n.accounts.repeatTransaction}\",\"skin\":\"ICSknBtn003E75RoundedffffffSSP26px\",\"entitlement_keys\":[\"INTERNATIONAL_WIRE_TRANSFER_CREATE\"],\"entitlement_action\":false},\"$.TRANSTYPE.TT22\":{\"id\":\"\",\"text\":\"\",\"skin\":\"\",\"entitlement_keys\":[],\"entitlement_action\":false},\"$.TRANSTYPE.TT23\":{\"id\":\"\",\"text\":\"\",\"skin\":\"\",\"entitlement_keys\":[],\"entitlement_action\":false},\"$.TRANSTYPE.TT24\":{\"id\":\"\",\"text\":\"\",\"skin\":\"\",\"entitlement_keys\":[],\"entitlement_action\":false}}";
            accountsTransactionDetailsNative.btnContextualAction4 = "{\"default\":{\"id\":\"ViewRequest\",\"text\":\"{i.kony.mb.ViewRequest}\",\"skin\":\"ICSknBtnffffffRounded003e75SSP26px\",\"entitlement_keys\":[\"CHECK_MANAGEMENT_VIEW_DISPUTED_CHECKS\"],\"entitlement_action\":true},\"$.TRANSTYPE.TT22\":{\"id\":\"\",\"text\":\"\",\"skin\":\"\",\"entitlement_keys\":[],\"entitlement_action\":false},\"$.TRANSTYPE.TT23\":{\"id\":\"\",\"text\":\"\",\"skin\":\"\",\"entitlement_keys\":[],\"entitlement_action\":false},\"$.TRANSTYPE.TT24\":{\"id\":\"\",\"text\":\"\",\"skin\":\"\",\"entitlement_keys\":[],\"entitlement_action\":false}}";
            accountsTransactionDetailsNative.btnContextualAction5 = "{\"default\":{\"id\":\"CancelPayment\",\"text\":\"{i.kony.i18n.common.cancelPayment}\",\"skin\":\"ICSknBtnffffffRounded003e75SSP26px\",\"entitlement_keys\":[],\"entitlement_action\":true},\"$.TRANSTYPE.TT22\":{\"id\":\"\",\"text\":\"\",\"skin\":\"\",\"entitlement_keys\":[],\"entitlement_action\":false},\"$.TRANSTYPE.TT23\":{\"id\":\"\",\"text\":\"\",\"skin\":\"\",\"entitlement_keys\":[],\"entitlement_action\":false},\"$.TRANSTYPE.TT24\":{\"id\":\"\",\"text\":\"\",\"skin\":\"\",\"entitlement_keys\":[],\"entitlement_action\":false}}";
            flxTransactionDetails.add(accountsTransactionDetailsNative);
            flxContainer.add(flxHeader, flxTransfers, flxTransactionDetails);
            var flxHamburger = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxHamburger",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxHamburger.setDefaultUnit(kony.flex.DP);
            var flxHamburgerWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHamburgerWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-100%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHamburgerWrapper.setDefaultUnit(kony.flex.DP);
            var flxHamburgerContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHamburgerContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": "50dp",
                "skin": "slFbox",
                "top": "0dp",
                "zIndex": 10
            }, {}, {});
            flxHamburgerContainer.setDefaultUnit(kony.flex.DP);
            var Hamburger = new com.kmb.common.Hamburger({
                "height": "100%",
                "id": "Hamburger",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "imgLogout": {
                        "src": "logout.png"
                    },
                    "imgUser": {
                        "src": "userimg.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHamburgerContainer.add(Hamburger);
            var flxHamburgerDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxHamburgerDummy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50dp",
                "zIndex": 3
            }, {}, {});
            flxHamburgerDummy.setDefaultUnit(kony.flex.DP);
            flxHamburgerDummy.add();
            flxHamburgerWrapper.add(flxHamburgerContainer, flxHamburgerDummy);
            flxHamburger.add(flxHamburgerWrapper);
            this.add(flxContainer, flxHamburger);
        };
        return [{
            "addWidgets": addWidgetsfrmMMTransactionDetails,
            "enabledForIdleTimeout": true,
            "id": "frmMMTransactionDetails",
            "init": controller.AS_Form_aeb8e1fcc80a4a10819aa48398a97ae8,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.PFMTransactionDetails.Title")
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