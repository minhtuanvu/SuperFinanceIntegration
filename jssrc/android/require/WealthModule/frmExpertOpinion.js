define("WealthModule/frmExpertOpinion", function() {
    return function(controller) {
        function addWidgetsfrmExpertOpinion() {
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
                "zIndex": 8
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
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                        "isVisible": true
                    },
                    "flxHeader": {
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "centerX": "viz.val_cleared",
                        "left": "15%",
                        "text": "Expert Opinion",
                        "width": "50%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "90%",
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxBanner = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "165dp",
                "id": "flxBanner",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxBanner.setDefaultUnit(kony.flex.DP);
            var lblOverlay = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblOverlay",
                "isVisible": true,
                "left": "10%",
                "skin": "sknLblffffffSSPBold33px",
                "text": "Get an  expert opinion in just a few steps",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "60%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgBanner = new kony.ui.Image2({
                "height": "165dp",
                "id": "imgBanner",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "banner_two.jpg",
                "top": "0dp",
                "width": "100.00%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBanner.add(lblOverlay, imgBanner);
            var lblHeading = new kony.ui.Label({
                "id": "lblHeading",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPSemiBold42px",
                "text": "Get the most from your investment with our advisory solutions",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxNote = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxNote",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxNote.setDefaultUnit(kony.flex.DP);
            var segExpertBenefits = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgStatus": "approval.png",
                    "lblNote": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblNote": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblNote": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblNote": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblNote": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblNote": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblNote": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblNote": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblNote": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblNote": "Label"
                }],
                "groupCells": false,
                "id": "segExpertBenefits",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxExpertOpinions",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxExpertOpinions": "flxExpertOpinions",
                    "flxImagestatus": "flxImagestatus",
                    "imgStatus": "imgStatus",
                    "lblNote": "lblNote"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNote.add(segExpertBenefits);
            var lblDetails = new kony.ui.Label({
                "id": "lblDetails",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242regular15px",
                "text": "Our Investment Advisory solution gives you access to our team of professional investment advisors to get expert opinion and support your investment decisions. Receive regular investment recommendations that are tailored for you, your situation, and your financial goals. Stay in touch through our digital apps.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": "Learn More",
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxShadowBox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11px",
                "id": "flxShadowBox",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowBox.setDefaultUnit(kony.flex.DP);
            var flxRectangle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRectangle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242grad",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRectangle.setDefaultUnit(kony.flex.DP);
            flxRectangle.add();
            flxShadowBox.add(flxRectangle);
            var flxOurProducts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxOurProducts",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOurProducts.setDefaultUnit(kony.flex.DP);
            var lblOtherProdHeadingOne = new kony.ui.Label({
                "id": "lblOtherProdHeadingOne",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPR15px",
                "text": "Our Other Products",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblOtherProdHeadingTwo = new kony.ui.Label({
                "id": "lblOtherProdHeadingTwo",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPSemiBold42px",
                "text": "Investing products that may interest you",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "72.63%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxHorScrProductDetails = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": true,
                "allowVerticalBounce": false,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "365dp",
                "horizontalScrollIndicator": true,
                "id": "flxHorScrProductDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
                "skin": "sknTransparentBs",
                "top": "20dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHorScrProductDetails.setDefaultUnit(kony.flex.DP);
            var flxProd = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "350dp",
                "id": "flxProd",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFBorderE9E9E9Radius4px",
                "top": "0dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxProd.setDefaultUnit(kony.flex.DP);
            var imgProduct = new kony.ui.Image2({
                "height": "55dp",
                "id": "imgProduct",
                "isVisible": true,
                "left": "5%",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "20dp",
                "width": "55dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDetOne = new kony.ui.Label({
                "id": "lblDetOne",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLbl727272SSPR15px",
                "text": "Our Other Products",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDetTwo = new kony.ui.Label({
                "id": "lblDetTwo",
                "isVisible": true,
                "left": "5%",
                "skin": "sknlbl424242ssp30pxbold",
                "text": "Robo Advisor",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "35%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDetThree = new kony.ui.Label({
                "id": "lblDetThree",
                "isVisible": true,
                "left": "5%",
                "skin": "sknlbl424242regular15px",
                "text": "Get started in investing. We take care of the hard work with fully diversified portfolios. Managed investing from 0.25%",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnLearnMore = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnLearnMore",
                "isVisible": true,
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": "Learn More",
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxProd.add(imgProduct, lblDetOne, lblDetTwo, lblDetThree, btnLearnMore);
            flxHorScrProductDetails.add(flxProd);
            flxOurProducts.add(lblOtherProdHeadingOne, lblOtherProdHeadingTwo, flxHorScrProductDetails);
            flxMainContainer.add(flxBanner, lblHeading, flxNote, lblDetails, btnContinue, flxShadowBox, flxOurProducts);
            this.add(flxHeader, flxMainContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmExpertOpinion,
            "enabledForIdleTimeout": true,
            "id": "frmExpertOpinion",
            "init": controller.AS_Form_ce5d8c63222c4c94a95e06a561dce928,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmf9f9f9",
            "title": "Expert Opinion"
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