define("AccountModule/frmAccountsTransactionDetails", function() {
    return function(controller) {
        function addWidgetsfrmAccountsTransactionDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var flxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "top": "0",
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
                        "src": "backbutton_1.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.PFMTransactionDetails.Title")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxCheckZoomView = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxCheckZoomView",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 130
            }, {}, {});
            flxCheckZoomView.setDefaultUnit(kony.flex.DP);
            var imgCheckZoom = new kony.ui.Image2({
                "bottom": "60dp",
                "id": "imgCheckZoom",
                "imageWhileDownloading": "loaderfullscreen.gif",
                "isVisible": true,
                "left": "40dp",
                "right": "40dp",
                "skin": "slImage",
                "src": "checkbig.png",
                "top": "60dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCross = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "45dp",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxCross",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "50dp",
                "skin": "slFbox",
                "width": "40dp",
                "zIndex": 1
            }, {}, {});
            flxCross.setDefaultUnit(kony.flex.DP);
            var imgCross = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "30dp",
                "id": "imgCross",
                "isVisible": true,
                "skin": "slImage",
                "src": "closeimg.png",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCross.add(imgCross);
            flxCheckZoomView.add(imgCheckZoom, flxCross);
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
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxTransfers.setDefaultUnit(kony.flex.DP);
            var flxMainTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
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
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.transfer"),
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
                "bottom": "25dp",
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
                "skin": "sknFlxe3e3e3",
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
                "text": kony.i18n.getLocalizedString("kony.mb.Accounts.Description"),
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
            var lblDescValueTrans = new kony.ui.Label({
                "bottom": "15dp",
                "id": "lblDescValueTrans",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Wire transfer to ABC bkdvjkwvkkvkbvkrbkrbbrrbbbbbbbbbbbbbbbrrrrrrrrrrrrrrrrrrrrrrrjfnfnfnnfn nrfnfnfn",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDescTrans.add(flxSeperatorTrans3, lblDescTrans, lblDescValueTrans);
            var flxTransactionDateTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
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
                "skin": "sknFlxe3e3e3",
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
            var lblTransDateValueTrans = new kony.ui.Label({
                "bottom": "15dp",
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
            var flxPostedDateTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxPostedDateTrans",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPostedDateTrans.setDefaultUnit(kony.flex.DP);
            var CopyflxSeperatorTrans0hb942ae605aa49 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeperatorTrans0hb942ae605aa49",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            CopyflxSeperatorTrans0hb942ae605aa49.setDefaultUnit(kony.flex.DP);
            CopyflxSeperatorTrans0hb942ae605aa49.add();
            var lblPostedDateTrans = new kony.ui.Label({
                "id": "lblPostedDateTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accounts.postedDate"),
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
            var lblPostedDateValueTrans = new kony.ui.Label({
                "bottom": "15dp",
                "id": "lblPostedDateValueTrans",
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
            flxPostedDateTrans.add(CopyflxSeperatorTrans0hb942ae605aa49, lblPostedDateTrans, lblPostedDateValueTrans);
            var flxReferenceNoTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
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
                "skin": "sknFlxe3e3e3",
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
            var lblReferenceNoValueTrans = new kony.ui.Label({
                "bottom": "15dp",
                "id": "lblReferenceNoValueTrans",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
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
            var btnReferenceValue = new kony.ui.Button({
                "bottom": "13dp",
                "id": "btnReferenceValue",
                "isVisible": false,
                "left": "20dp",
                "skin": "sknBtn0a20d098612754f",
                "top": "34dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxReferenceNoTrans.add(flxSeperatorTrans6, lblReferenceNoTrans, lblReferenceNoValueTrans, btnReferenceValue);
            var flxSeperatorTrans9 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTrans9",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "10dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorTrans9.setDefaultUnit(kony.flex.DP);
            flxSeperatorTrans9.add();
            var flxCheckNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxCheckNumber",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxCheckNumber.setDefaultUnit(kony.flex.DP);
            var lblCheckNumberOf = new kony.ui.Label({
                "bottom": "17dp",
                "centerX": "40%",
                "centerY": "57%",
                "id": "lblCheckNumberOf",
                "isVisible": true,
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardLess.checkNumber"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "17dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCheckNumberValue = new kony.ui.Label({
                "bottom": "17dp",
                "centerY": "57%",
                "id": "lblCheckNumberValue",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLbl424242SSP22px",
                "text": "N.A",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "17dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCheckNumber.add(lblCheckNumberOf, lblCheckNumberValue);
            var segCheckImages = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "imgBack": "checksmall.png",
                    "imgBackDownload": "download.png",
                    "imgFront": "checksmall.png",
                    "imgFrontDownload": "download.png",
                    "lblBack": "Back Image",
                    "lblBackCheckNotAvailable": "Check Image not available",
                    "lblFront": "Front Image",
                    "lblFrontCheckNotAvailable": "Front Image"
                }, {
                    "imgBack": "checksmall.png",
                    "imgBackDownload": "download.png",
                    "imgFront": "checksmall.png",
                    "imgFrontDownload": "download.png",
                    "lblBack": "Back Image",
                    "lblBackCheckNotAvailable": "Check Image not available",
                    "lblFront": "Front Image",
                    "lblFrontCheckNotAvailable": "Front Image"
                }, {
                    "imgBack": "checksmall.png",
                    "imgBackDownload": "download.png",
                    "imgFront": "checksmall.png",
                    "imgFrontDownload": "download.png",
                    "lblBack": "Back Image",
                    "lblBackCheckNotAvailable": "Check Image not available",
                    "lblFront": "Front Image",
                    "lblFrontCheckNotAvailable": "Front Image"
                }, {
                    "imgBack": "checksmall.png",
                    "imgBackDownload": "download.png",
                    "imgFront": "checksmall.png",
                    "imgFrontDownload": "download.png",
                    "lblBack": "Back Image",
                    "lblBackCheckNotAvailable": "Check Image not available",
                    "lblFront": "Front Image",
                    "lblFrontCheckNotAvailable": "Front Image"
                }],
                "groupCells": false,
                "height": "370dp",
                "id": "segCheckImages",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": false,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "sknSegffffff",
                "rowTemplate": "flxCheckImages",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
                "widgetDataMap": {
                    "flxBackDownload": "flxBackDownload",
                    "flxBackHeading": "flxBackHeading",
                    "flxBackImg": "flxBackImg",
                    "flxCheckImages": "flxCheckImages",
                    "flxFrontDownload": "flxFrontDownload",
                    "flxFrontHeading": "flxFrontHeading",
                    "flxFrontImg": "flxFrontImg",
                    "flxSeperatoBack": "flxSeperatoBack",
                    "flxSeperatorFront": "flxSeperatorFront",
                    "imgBack": "imgBack",
                    "imgBackDownload": "imgBackDownload",
                    "imgFront": "imgFront",
                    "imgFrontDownload": "imgFrontDownload",
                    "lblBack": "lblBack",
                    "lblBackCheckNotAvailable": "lblBackCheckNotAvailable",
                    "lblFront": "lblFront",
                    "lblFrontCheckNotAvailable": "lblFrontCheckNotAvailable"
                },
                "width": "100%",
                "zIndex": 110
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxAttachments = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAttachments",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAttachments.setDefaultUnit(kony.flex.DP);
            var flxAttachmentsSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxAttachmentsSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxAttachmentsSeparator.setDefaultUnit(kony.flex.DP);
            flxAttachmentsSeparator.add();
            var lblAttachmentsKey = new kony.ui.Label({
                "id": "lblAttachmentsKey",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.Europe.Attachments"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "9dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var lblAttachmentsValue = new kony.ui.Label({
                "bottom": "12dp",
                "id": "lblAttachmentsValue",
                "isVisible": true,
                "left": "20dp",
                "maxNumberOfLines": 1,
                "skin": "sknLbl424242SSP26px",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "26dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxViewAttachments = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "22dp",
                "id": "flxViewAttachments",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "25%",
                "zIndex": 110
            }, {}, {});
            flxViewAttachments.setDefaultUnit(kony.flex.DP);
            var btnViewAttachments = new kony.ui.Button({
                "centerY": "50%",
                "id": "btnViewAttachments",
                "isVisible": true,
                "left": "25dp",
                "skin": "sknBtnSSPR4176A415px",
                "text": "View",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 110
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgView = new kony.ui.Image2({
                "height": "18dp",
                "id": "imgView",
                "isVisible": true,
                "left": "65dp",
                "right": 20,
                "skin": "slImage",
                "src": "segmentarrow.png",
                "top": 3,
                "width": "18dp",
                "zIndex": 110
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxViewAttachments.add(btnViewAttachments, imgView);
            flxMain.add(lblAttachmentsValue, flxViewAttachments);
            flxAttachments.add(flxAttachmentsSeparator, lblAttachmentsKey, flxMain);
            var flxButtonsTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxButtonsTrans",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxButtonsTrans.setDefaultUnit(kony.flex.DP);
            var btnRepeatTransactionTrans = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnRepeatTransactionTrans",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnDarkTheme",
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
            var btnDownloadTransactionTrans = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnDownloadTransactionTrans",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnDarkTheme",
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
            var btnViewRequest = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnViewRequest",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnDarkTheme",
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
            flxButtonsTrans.add(btnRepeatTransactionTrans, btnDownloadTransactionTrans, btnDisputetTransactionTrans, btnViewRequest, btnCancelTransactionTrans, btnCancelThisOccurenceTrans, btnCancelSeriesTrans);
            flxTransfers.add(flxMainTrans, flxDescTrans, flxTransactionDateTrans, flxPostedDateTrans, flxReferenceNoTrans, flxSeperatorTrans9, flxCheckNumber, segCheckImages, flxAttachments, flxButtonsTrans);
            var flxTransactionDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "93%",
                "id": "flxTransactionDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "0",
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
            var flxBlockedFundsDetails = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": 0,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxBlockedFundsDetails",
                "isVisible": false,
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
            flxBlockedFundsDetails.setDefaultUnit(kony.flex.DP);
            var flxBlockedAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "74dp",
                "id": "flxBlockedAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBlockedAmount.setDefaultUnit(kony.flex.DP);
            var lblBlockedAmountTitle = new kony.ui.Label({
                "id": "lblBlockedAmountTitle",
                "isVisible": true,
                "left": "22dp",
                "skin": "sknLbl424242SSPLight13px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.blockedAmount"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "17dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblBlockedAmountValue = new kony.ui.Label({
                "id": "lblBlockedAmountValue",
                "isVisible": true,
                "left": "22dp",
                "skin": "sknlbl424242SSPR18px",
                "text": "$000.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "34dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "73dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            flxBlockedAmount.add(lblBlockedAmountTitle, lblBlockedAmountValue, flxSeperator);
            var flxReferenceNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxReferenceNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReferenceNumber.setDefaultUnit(kony.flex.DP);
            var lblReferenceNumberTitle = new kony.ui.Label({
                "id": "lblReferenceNumberTitle",
                "isVisible": true,
                "left": "22dp",
                "skin": "sknlbl949494SSPR13px",
                "text": "Reference Number",
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
            var lblReferenceNumberValue = new kony.ui.Label({
                "id": "lblReferenceNumberValue",
                "isVisible": true,
                "left": "22dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "$000.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "28dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAccountType = new kony.ui.Label({
                "id": "lblAccountType",
                "isVisible": true,
                "right": "19dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.successful"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "30dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperatorRef = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorRef",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "59dp",
                "width": "90.13%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorRef.setDefaultUnit(kony.flex.DP);
            flxSeperatorRef.add();
            flxReferenceNumber.add(lblReferenceNumberTitle, lblReferenceNumberValue, lblAccountType, flxSeperatorRef);
            var flxDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDescription",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDescription.setDefaultUnit(kony.flex.DP);
            var lblDescriptionTitle = new kony.ui.Label({
                "id": "lblDescriptionTitle",
                "isVisible": true,
                "left": "22dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.BlockedfundDescription"),
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
            var lblDescriptionValue = new kony.ui.Label({
                "bottom": "12dp",
                "id": "lblDescriptionValue",
                "isVisible": true,
                "left": "22dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "Wire transfer to ABC bkdvjkwvkkvkbvkrbkrbbrrbbbbbbbbbbbbbbbrrrrrrrrrrrrrrrrrrrrrrrjfnfnfnnfn nrfnfnfn",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperatorDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorDescription",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "90.13%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorDescription.setDefaultUnit(kony.flex.DP);
            flxSeperatorDescription.add();
            flxDescription.add(lblDescriptionTitle, lblDescriptionValue, flxSeperatorDescription);
            var flxFromDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxFromDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFromDate.setDefaultUnit(kony.flex.DP);
            var lblFromDateTitle = new kony.ui.Label({
                "id": "lblFromDateTitle",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.fromDate"),
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
            var lblFromDateValue = new kony.ui.Label({
                "id": "lblFromDateValue",
                "isVisible": true,
                "left": "22dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "04/17/2018",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "28dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperatorFromDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorFromDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "59dp",
                "width": "90.13%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorFromDate.setDefaultUnit(kony.flex.DP);
            flxSeperatorFromDate.add();
            flxFromDate.add(lblFromDateTitle, lblFromDateValue, flxSeperatorFromDate);
            var flxToDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxToDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxToDate.setDefaultUnit(kony.flex.DP);
            var lblToDateTitle = new kony.ui.Label({
                "id": "lblToDateTitle",
                "isVisible": true,
                "left": "22dp",
                "skin": "sknlbl949494SSPR13px",
                "text": kony.i18n.getLocalizedString("kony.mb.transaction.todate"),
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
            var lblToDateValue = new kony.ui.Label({
                "id": "lblToDateValue",
                "isVisible": true,
                "left": "22dp",
                "skin": "sknlbl424242SSPR15px",
                "text": "04/17/2018",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "28dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperatorToDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorToDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "59dp",
                "width": "90.13%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorToDate.setDefaultUnit(kony.flex.DP);
            flxSeperatorToDate.add();
            flxToDate.add(lblToDateTitle, lblToDateValue, flxSeperatorToDate);
            flxBlockedFundsDetails.add(flxBlockedAmount, flxReferenceNumber, flxDescription, flxFromDate, flxToDate);
            flxContainer.add(flxHeader, flxCheckZoomView, flxTransfers, flxTransactionDetails, flxBlockedFundsDetails);
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
            this.add(flxContainer, flxFooter, flxHamburger);
        };
        return [{
            "addWidgets": addWidgetsfrmAccountsTransactionDetails,
            "enabledForIdleTimeout": true,
            "id": "frmAccountsTransactionDetails",
            "init": controller.AS_Form_g952f3a171db431bb76a892178198f5e,
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