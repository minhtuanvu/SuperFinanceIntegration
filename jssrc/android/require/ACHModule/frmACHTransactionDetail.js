define("ACHModule/frmACHTransactionDetail", function() {
    return function(controller) {
        function addWidgetsfrmACHTransactionDetail() {
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
                    "btnLeft": {
                        "isVisible": false
                    },
                    "btnRight": {
                        "isVisible": false,
                        "text": "EDIT"
                    },
                    "flxHeader": {
                        "left": "0%",
                        "top": "0%"
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
                        "centerY": "49.66%",
                        "text": kony.i18n.getLocalizedString("kony.mb.PFMTransactionDetails.Title"),
                        "left": "15.00%"
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
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxTransfers.setDefaultUnit(kony.flex.DP);
            var flxTransfer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxTransfer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransfer.setDefaultUnit(kony.flex.DP);
            var flxtransferval = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "98%",
                "id": "flxtransferval",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxtransferval.setDefaultUnit(kony.flex.DP);
            var lblTransfer = new kony.ui.Label({
                "id": "lblTransfer",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242ssprolight13px",
                "text": "Total Amount",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
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
                "bottom": "15dp",
                "id": "lblTransferValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl4176A4spsemibold18px",
                "text": "$200.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxtransferval.add(lblTransfer, lblTransferValue);
            var flxlinetrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "2%",
                "id": "flxlinetrans",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "98%",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxlinetrans.setDefaultUnit(kony.flex.DP);
            flxlinetrans.add();
            flxTransfer.add(flxtransferval, flxlinetrans);
            var flxsegdetail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxsegdetail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxsegdetail.setDefaultUnit(kony.flex.DP);
            var segDatalist = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblColon": ":",
                    "lblKey": "Label",
                    "lblSubValue": "Label",
                    "lblValue": "label"
                }, {
                    "lblColon": ":",
                    "lblKey": "Label",
                    "lblSubValue": "Label",
                    "lblValue": "label"
                }, {
                    "lblColon": ":",
                    "lblKey": "Label",
                    "lblSubValue": "Label",
                    "lblValue": "label"
                }, {
                    "lblColon": ":",
                    "lblKey": "Label",
                    "lblSubValue": "Label",
                    "lblValue": "label"
                }, {
                    "lblColon": ":",
                    "lblKey": "Label",
                    "lblSubValue": "Label",
                    "lblValue": "label"
                }, {
                    "lblColon": ":",
                    "lblKey": "Label",
                    "lblSubValue": "Label",
                    "lblValue": "label"
                }, {
                    "lblColon": ":",
                    "lblKey": "Label",
                    "lblSubValue": "Label",
                    "lblValue": "label"
                }, {
                    "lblColon": ":",
                    "lblKey": "Label",
                    "lblSubValue": "Label",
                    "lblValue": "label"
                }, {
                    "lblColon": ":",
                    "lblKey": "Label",
                    "lblSubValue": "Label",
                    "lblValue": "label"
                }, {
                    "lblColon": ":",
                    "lblKey": "Label",
                    "lblSubValue": "Label",
                    "lblValue": "label"
                }],
                "groupCells": false,
                "id": "segDatalist",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAchtransationdetails",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAchtransationdetails": "flxAchtransationdetails",
                    "flxSeperatorTrans3": "flxSeperatorTrans3",
                    "flxValue": "flxValue",
                    "flxkeys": "flxkeys",
                    "flxtemplate": "flxtemplate",
                    "lblColon": "lblColon",
                    "lblKey": "lblKey",
                    "lblSubValue": "lblSubValue",
                    "lblValue": "lblValue"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxsegdetail.add(segDatalist);
            var flxdetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxdetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxdetails.setDefaultUnit(kony.flex.DP);
            var flxdesinationaccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxdesinationaccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxf6f6f6Bcg",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxdesinationaccount.setDefaultUnit(kony.flex.DP);
            var lblHeader = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblHeader",
                "isVisible": true,
                "left": "18dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.achtransationdetail.DestinatiosAccounts"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxTypeOneShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxTypeOneShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTypeOneShadow.setDefaultUnit(kony.flex.DP);
            flxTypeOneShadow.add();
            var flxShadowBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxShadowBottom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowBottom",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowBottom.setDefaultUnit(kony.flex.DP);
            flxShadowBottom.add();
            var flximgDesniationacccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flximgDesniationacccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "80%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "20%",
                "zIndex": 10
            }, {}, {});
            flximgDesniationacccount.setDefaultUnit(kony.flex.DP);
            var imgUpArrow = new kony.ui.Image2({
                "centerX": "60%",
                "centerY": "50%",
                "height": "30dp",
                "id": "imgUpArrow",
                "isVisible": true,
                "right": "18dp",
                "skin": "slImage",
                "src": "blue_uparrow.png",
                "width": "30dp",
                "zIndex": 6
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flximgDesniationacccount.add(imgUpArrow);
            flxdesinationaccount.add(lblHeader, flxTypeOneShadow, flxShadowBottom, flximgDesniationacccount);
            var segDestinationaccount = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblAccountnumber": "345679876234567",
                    "lblAmount": "$20,08.00",
                    "lblRecipientname": "Recipient Name"
                }, {
                    "lblAccountnumber": "345679876234567",
                    "lblAmount": "$20,08.00",
                    "lblRecipientname": "Recipient Name"
                }, {
                    "lblAccountnumber": "345679876234567",
                    "lblAmount": "$20,08.00",
                    "lblRecipientname": "Recipient Name"
                }, {
                    "lblAccountnumber": "345679876234567",
                    "lblAmount": "$20,08.00",
                    "lblRecipientname": "Recipient Name"
                }, {
                    "lblAccountnumber": "345679876234567",
                    "lblAmount": "$20,08.00",
                    "lblRecipientname": "Recipient Name"
                }, {
                    "lblAccountnumber": "345679876234567",
                    "lblAmount": "$20,08.00",
                    "lblRecipientname": "Recipient Name"
                }],
                "groupCells": false,
                "id": "segDestinationaccount",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxdesinationaccount",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSep": "flxSep",
                    "flxSeperatorTrans4": "flxSeperatorTrans4",
                    "flxamount": "flxamount",
                    "flxcontent": "flxcontent",
                    "flxdesinationaccount": "flxdesinationaccount",
                    "lblAccountnumber": "lblAccountnumber",
                    "lblAmount": "lblAmount",
                    "lblRecipientname": "lblRecipientname"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxWebApplitionTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "5dp",
                "clipBounds": true,
                "id": "flxWebApplitionTitle",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxWebApplitionTitle.setDefaultUnit(kony.flex.DP);
            var flxIcon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "5dp",
                "clipBounds": true,
                "id": "flxIcon",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "7dp",
                "width": "10%",
                "zIndex": 1
            }, {}, {});
            flxIcon.setDefaultUnit(kony.flex.DP);
            var imgIcon = new kony.ui.Image2({
                "height": "20dp",
                "id": "imgIcon",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "infogrey.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxIcon.add(imgIcon);
            var flxwebTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "5dp",
                "clipBounds": true,
                "id": "flxwebTitle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxwebTitle.setDefaultUnit(kony.flex.DP);
            var lblWebTitle = new kony.ui.Label({
                "id": "lblWebTitle",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl424242ssp40px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.webApplication"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxwebTitle.add(lblWebTitle);
            flxWebApplitionTitle.add(flxIcon, flxwebTitle);
            var flxapprovalhistory = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxapprovalhistory",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxf6f6f6Bcg",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxapprovalhistory.setDefaultUnit(kony.flex.DP);
            var lblheaderapproval = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblheaderapproval",
                "isVisible": true,
                "left": "18dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.achtransationdetail.requestedHistoryStatus"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxshadowapproval = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxshadowapproval",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxshadowapproval.setDefaultUnit(kony.flex.DP);
            flxshadowapproval.add();
            var flxshadowapprovalbtm = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxshadowapprovalbtm",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowBottom",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxshadowapprovalbtm.setDefaultUnit(kony.flex.DP);
            flxshadowapprovalbtm.add();
            var flximgApprovalhistory = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flximgApprovalhistory",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "80%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "20%",
                "zIndex": 10
            }, {}, {});
            flximgApprovalhistory.setDefaultUnit(kony.flex.DP);
            var imgapprovalhis = new kony.ui.Image2({
                "centerX": "60%",
                "centerY": "50%",
                "height": "30dp",
                "id": "imgapprovalhis",
                "isVisible": true,
                "right": "18dp",
                "skin": "slImage",
                "src": "blue_uparrow.png",
                "width": "30dp",
                "zIndex": 6
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flximgApprovalhistory.add(imgapprovalhis);
            flxapprovalhistory.add(lblheaderapproval, flxshadowapproval, flxshadowapprovalbtm, flximgApprovalhistory);
            var segApprovalHistory = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblAccountnumber": "345679876234567",
                    "lblAmount": "$20,08.00",
                    "lblRecipientname": "Recipient Name"
                }, {
                    "lblAccountnumber": "345679876234567",
                    "lblAmount": "$20,08.00",
                    "lblRecipientname": "Recipient Name"
                }, {
                    "lblAccountnumber": "345679876234567",
                    "lblAmount": "$20,08.00",
                    "lblRecipientname": "Recipient Name"
                }, {
                    "lblAccountnumber": "345679876234567",
                    "lblAmount": "$20,08.00",
                    "lblRecipientname": "Recipient Name"
                }, {
                    "lblAccountnumber": "345679876234567",
                    "lblAmount": "$20,08.00",
                    "lblRecipientname": "Recipient Name"
                }, {
                    "lblAccountnumber": "345679876234567",
                    "lblAmount": "$20,08.00",
                    "lblRecipientname": "Recipient Name"
                }],
                "groupCells": false,
                "id": "segApprovalHistory",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxdesinationaccount",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSep": "flxSep",
                    "flxSeperatorTrans4": "flxSeperatorTrans4",
                    "flxamount": "flxamount",
                    "flxcontent": "flxcontent",
                    "flxdesinationaccount": "flxdesinationaccount",
                    "lblAccountnumber": "lblAccountnumber",
                    "lblAmount": "lblAmount",
                    "lblRecipientname": "lblRecipientname"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxapprovalhistoryinfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxapprovalhistoryinfo",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxapprovalhistoryinfo.setDefaultUnit(kony.flex.DP);
            var flxcreatedrequest = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxcreatedrequest",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxcreatedrequest.setDefaultUnit(kony.flex.DP);
            var flxcreatereqcontent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxcreatereqcontent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "61%",
                "zIndex": 1
            }, {}, {});
            flxcreatereqcontent.setDefaultUnit(kony.flex.DP);
            var lblcreatedreq = new kony.ui.Label({
                "id": "lblcreatedreq",
                "isVisible": true,
                "left": "0%",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.achtransactions.CreatedRequest"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCreatedrequestValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblCreatedrequestValue",
                "isVisible": true,
                "left": "0%",
                "skin": "sknlbl727272SSP93pr",
                "text": "06/21/2020 21:35:22 (ET)",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "9dp",
                "width": "75%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxcreatereqcontent.add(lblcreatedreq, lblCreatedrequestValue);
            var flxcreatereqamount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxcreatereqamount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "65%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            flxcreatereqamount.setDefaultUnit(kony.flex.DP);
            var lblamount = new kony.ui.Label({
                "id": "lblamount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Admin",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxcreatereqamount.add(lblamount);
            flxcreatedrequest.add(flxcreatereqcontent, flxcreatereqamount);
            var flxapprovalrequest = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxapprovalrequest",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxapprovalrequest.setDefaultUnit(kony.flex.DP);
            var flxline1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxline1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            flxline1.setDefaultUnit(kony.flex.DP);
            flxline1.add();
            var flxadmin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxadmin",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "65%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            flxadmin.setDefaultUnit(kony.flex.DP);
            var lbladmin = new kony.ui.Label({
                "id": "lbladmin",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Admin",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxadmin.add(lbladmin);
            var flxapprovereq = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxapprovereq",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "61%",
                "zIndex": 1
            }, {}, {});
            flxapprovereq.setDefaultUnit(kony.flex.DP);
            var lblapprovereq = new kony.ui.Label({
                "id": "lblapprovereq",
                "isVisible": true,
                "left": "0%",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.achtransactions.ApprovedRequest"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblApprovrreqValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblApprovrreqValue",
                "isVisible": true,
                "left": "0%",
                "skin": "sknlbl727272SSP93pr",
                "text": "06/21/2020 21:35:22 (ET)",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "9dp",
                "width": "75%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxapprovereq.add(lblapprovereq, lblApprovrreqValue);
            flxapprovalrequest.add(flxline1, flxadmin, flxapprovereq);
            var flxapprovalstatus = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxapprovalstatus",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxapprovalstatus.setDefaultUnit(kony.flex.DP);
            var flxline2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxline2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            flxline2.setDefaultUnit(kony.flex.DP);
            flxline2.add();
            var flxcontent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxcontent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "95%",
                "zIndex": 1
            }, {}, {});
            flxcontent.setDefaultUnit(kony.flex.DP);
            var lblstatus = new kony.ui.Label({
                "id": "lblstatus",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.achtransactions.ApprovalStatus"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblApprovalstatusValue = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblApprovalstatusValue",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl727272SSP93pr",
                "text": "1 of 1 Recived",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "9dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxcontent.add(lblstatus, lblApprovalstatusValue);
            var linebottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "linebottom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "80dp",
                "width": "92%",
                "zIndex": 110
            }, {}, {});
            linebottom.setDefaultUnit(kony.flex.DP);
            linebottom.add();
            flxapprovalstatus.add(flxline2, flxcontent, linebottom);
            flxapprovalhistoryinfo.add(flxcreatedrequest, flxapprovalrequest, flxapprovalstatus);
            flxdetails.add(flxdesinationaccount, segDestinationaccount, flxWebApplitionTitle, flxapprovalhistory, segApprovalHistory, flxapprovalhistoryinfo);
            var flxButtonSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxButtonSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "-1dp",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxButtonSeparator.setDefaultUnit(kony.flex.DP);
            flxButtonSeparator.add();
            var flxbtnApproveReject = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "clipBounds": false,
                "height": "105dp",
                "id": "flxbtnApproveReject",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 300
            }, {}, {});
            flxbtnApproveReject.setDefaultUnit(kony.flex.DP);
            var btnApprove = new kony.ui.Button({
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnApprove",
                "isVisible": true,
                "left": "5%",
                "right": "0dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": "Approve",
                "top": "8dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnReject = new kony.ui.Button({
                "focusSkin": "sknBtnffffffBorder0095e40095e4SSP28px",
                "height": "40dp",
                "id": "btnReject",
                "isVisible": true,
                "left": "5%",
                "right": "0dp",
                "skin": "sknBtnffffffBorder0095e40095e4SSP28px",
                "text": kony.i18n.getLocalizedString("kony.mb.OnBoarding.Reject"),
                "top": "13dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxbtnApproveReject.add(btnApprove, btnReject);
            var flxbtnWithdraw = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "clipBounds": false,
                "height": "40dp",
                "id": "flxbtnWithdraw",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "4dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxbtnWithdraw.setDefaultUnit(kony.flex.DP);
            var btnWithdraw = new kony.ui.Button({
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnWithdraw",
                "isVisible": true,
                "left": "5%",
                "right": "0dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": "Withdraw",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxbtnWithdraw.add(btnWithdraw);
            var flxBottomSpacer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "15dp",
                "id": "flxBottomSpacer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxBottomSpacer.setDefaultUnit(kony.flex.DP);
            flxBottomSpacer.add();
            flxTransfers.add(flxTransfer, flxsegdetail, flxdetails, flxButtonSeparator, flxbtnApproveReject, flxbtnWithdraw, flxBottomSpacer);
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "60dp",
                "id": "flxFooter",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 106
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var customFooter = new com.kmb.common.customFooter({
                "height": "60dp",
                "id": "customFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 300,
                "overrides": {
                    "flxBillSelected": {
                        "isVisible": false
                    },
                    "flxMoreSelect": {
                        "isVisible": false
                    },
                    "flxTransferSel": {
                        "isVisible": false
                    },
                    "imgAccounts": {
                        "src": "accounts.png"
                    },
                    "imgBillPay": {
                        "src": "billpay.png"
                    },
                    "imgMore": {
                        "src": "more.png"
                    },
                    "imgTransfer": {
                        "src": "transfer.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxFooter.add(customFooter);
            var flxRejectpopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRejectpopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 106
            }, {}, {});
            flxRejectpopup.setDefaultUnit(kony.flex.DP);
            var rejectPopUp = new com.kmb.common.rejectPopUp({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "rejectPopUp",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "lblContent": {
                        "left": "7.50%",
                        "width": "85%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxRejectpopup.add(rejectPopUp);
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
            var confirmationAlertPopup = new com.kmb.common.confirmationAlertPopup({
                "height": "100%",
                "id": "confirmationAlertPopup",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "lblMsg": {
                        "text": "Are you sure you want to withdraw this transaction/file ?"
                    },
                    "confirmationAlertPopup": {
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
            flxConfirmationPopUp.add(confirmationAlertPopup);
            this.add(flxHeader, flxTransfers, flxFooter, flxRejectpopup, flxPopup, flxConfirmationPopUp);
        };
        return [{
            "addWidgets": addWidgetsfrmACHTransactionDetail,
            "enabledForIdleTimeout": true,
            "id": "frmACHTransactionDetail",
            "init": controller.AS_Form_b00bd82f82a748e38ef923e71f6fa5c4,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmffffff",
            "title": "Transaction Details"
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