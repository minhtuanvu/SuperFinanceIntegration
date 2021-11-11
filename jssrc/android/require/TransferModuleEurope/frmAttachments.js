define("TransferModuleEurope/frmAttachments", function() {
    return function(controller) {
        function addWidgetsfrmAttachments() {
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
                "skin": "sknFlx1a98ff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "top": "0dp",
                "width": "10%",
                "zIndex": 1
            }, {}, {});
            flxBack.setDefaultUnit(kony.flex.DP);
            var imgBack = new kony.ui.Image2({
                "centerX": "51%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgBack",
                "isVisible": true,
                "left": 0,
                "src": "backbutton.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBack.add(imgBack);
            var lblHeading = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblHeading",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLblffffffSSP30px",
                "text": "Attachments",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "65%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHeader.add(flxBack, lblHeading);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxDownloadAttachments = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDownloadAttachments",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxDownloadAttachments.setDefaultUnit(kony.flex.DP);
            var segDownloadAttachments = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgDownloadAttachment": "download.png",
                    "lblAttachment": "Label"
                }, {
                    "imgDownloadAttachment": "download.png",
                    "lblAttachment": "Label"
                }, {
                    "imgDownloadAttachment": "download.png",
                    "lblAttachment": "Label"
                }],
                "groupCells": false,
                "id": "segDownloadAttachments",
                "isVisible": true,
                "left": "20dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0b3e8f577bfb040",
                "rowTemplate": "flxDownloadAttachmentsList",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "19dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxDownloadAttachment": "flxDownloadAttachment",
                    "flxDownloadAttachments": "flxDownloadAttachments",
                    "flxDownloadAttachmentsList": "flxDownloadAttachmentsList",
                    "imgDownloadAttachment": "imgDownloadAttachment",
                    "lblAttachment": "lblAttachment"
                },
                "width": "90%",
                "zIndex": 1000
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDownloadAttachments.add(segDownloadAttachments);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1000
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            var btnDownload = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknbtnBf003E75Border1pxFontFFFFFF",
                "height": "48dp",
                "id": "btnDownload",
                "isVisible": true,
                "left": "43dp",
                "skin": "sknbtnBf003E75Border1pxFontFFFFFF",
                "text": "Download",
                "width": "330dp",
                "zIndex": 1000
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMain.add(flxDownloadAttachments, flxSeperator, btnDownload);
            this.add(flxHeader, flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmAttachments,
            "enabledForIdleTimeout": true,
            "id": "frmAttachments",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false
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
            "titleBar": true,
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});