define("ManageCardsModule/userfrmCardStatementsController", {
    date: null,
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    Preshow: function() {
        // this.view.flxFooter.isVisible = false;
        this.view.flxHamburger.setVisibility(false);
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
            this.view.flxFooter.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        var scope = this;
        this.date = new Date();
        this.view.flxSegStatements.isVisible = true;
        this.view.flxNoStatements.isVisible = false;
        this.fillYearSegment();
        this.setSegStatementsData();
        this.animateFlxSelectYearBack();
        this.view.flxSelectYear.setVisibility(false);
        this.view.customFooter.lblAccounts.skin = "sknLbl424242SSP20px";
        this.view.customFooter.flxAccSelect.setVisibility(true);
        this.view.customFooter.lblTransfer.skin = "sknLblA0A0A0SSP20px";
        this.view.customFooter.flxTransferSel.setVisibility(false);
        this.view.customFooter.lblBillPay.skin = "sknLblA0A0A0SSP20px";
        this.view.customFooter.flxBillSelected.setVisibility(false);
        this.view.customFooter.lblMore.skin = "sknLblA0A0A0SSP20px";
        this.view.customFooter.flxMoreSelect.setVisibility(false);
        this.view.lblYear1.skin = "sknLbl0095e422px";
        this.view.lblYear2.skin = "sknLbla0a0a022px";
        this.view.lblYear1.text = this.date.getFullYear() + " " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.statements");
        this.view.lblYear2.text = this.date.getFullYear() - 1 + " " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.statements");
        this.view.segStatements.onRowClick = this.onClicksegStatements;
        this.view.flxStatementYr1.onClick = this.flxStatementYr1OnClick;
        this.view.flxStatementYr2.onClick = this.flxStatementYr2OnClick;
        this.view.forceLayout();
        var configManager = applicationManager.getConfigurationManager();
        var MenuHandler = applicationManager.getMenuHandler();
        MenuHandler.setUpHamburgerForForm(scope, configManager.constants.MENUACCOUNTS);
        this.view.customHeader.flxBack.imgBack.src = "backbutton.png";
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.segYear.onRowClick = this.yearOnClick;
    },
    setSegStatementsData: function() {
        var navMan = applicationManager.getNavigationManager();
        var statements = navMan.getCustomInfo("frmCardStatements");
        var formatUtil = applicationManager.getFormatUtilManager();
        this.view.lblAccValue.text = formatUtil.formatCardNumber(statements.maskedCardNumber);
        this.view.lblShowValue.text = this.date.getFullYear() + " " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.statements");
        var statementdata = [];
        var months = formatUtil.getYearAppendedPreviousMonths(this.date.getFullYear());
        if (months.length > 0) {
            this.view.flxSegStatements.isVisible = true;
            this.view.flxNoStatements.isVisible = false;
            for (var i = months.length - 1; i >= 0; i--) {
                var statedata = {
                    "lblStatementMonth": months[i]
                };
                statementdata.push(statedata);
            }
            this.view.segStatements.setData(statementdata);
        } else {
            this.view.flxSegStatements.isVisible = false;
            this.view.flxNoStatements.isVisible = true;
        }
    },
    flxStatementYr1OnClick: function() {
        this.flxArrowOnclick();
        this.view.lblYear1.skin = "sknLbl0095e422px";
        this.view.lblYear2.skin = "sknLbla0a0a022px";
        this.setSegStatementsData();
    },
    flxStatementYr2OnClick: function() {
        this.flxArrowOnclick();
        this.view.flxSegStatements.isVisible = true;
        this.view.flxNoStatements.isVisible = false;
        this.view.lblShowValue.text = this.date.getFullYear() - 1 + "  " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.statements");
        this.view.lblYear1.skin = "sknLbla0a0a022px";
        this.view.lblYear2.skin = "sknLbl0095e422px";
        var statementdata = [];
        var formatUtil = applicationManager.getFormatUtilManager();
        var months = formatUtil.getYearAppendedPreviousMonths(this.date.getFullYear() - 1);
        for (var i = months.length - 1; i >= 0; i--) {
            var statedata = {
                "lblStatementMonth": months[i]
            };
            statementdata.push(statedata);
        }
        this.view.segStatements.setData(statementdata);
    },
    flxArrowOnclick: function() {
        if (this.view.imgArrow.src === "arrowdown.png") {
            this.view.flxSelectYear.setVisibility(true);
            this.animateFlxSelectYear();
        } else {
            this.view.imgArrow.src = "arrowdown.png";
            this.animateFlxSelectYearBack();
        }
    },
    animateFlxSelectYear: function() {
        // this.view.segStatements.setVisibility(false);
        var flxheight, segHeight;
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            flxheight = "115dp";
            segHeight = "200dp";
        } else {
            flxheight = "65dp";
            segHeight = "150dp";
        }
        var scopeObj = this;
        this.view.flxSelectYear.animate(kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true,
                "top": flxheight,
                "opacity": 1
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.35
        }, {
            "animationEnd": function() {
                scopeObj.view.flxSelectYear.setVisibility(true);
                scopeObj.view.imgArrow.src = "arrowup.png";
                scopeObj.view.flxArrow.forceLayout();
            }
        });
    },
    animateFlxSelectYearBack: function() {
        this.view.segStatements.setVisibility(true);
        var flxheight, segHeight;
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            flxheight = "55dp";
            segHeight = "120dp";
        } else {
            flxheight = "16dp";
            segHeight = "70dp";
        }
        var scopeObj = this;
        this.view.flxSelectYear.animate(kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true,
                "top": flxheight,
                "opacity": 0
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.35
        }, {
            "animationEnd": function() {
                scopeObj.view.flxSelectYear.setVisibility(false);
                scopeObj.view.imgArrow.src = "arrowdown.png";
                scopeObj.view.flxArrow.forceLayout();
            }
        });
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    onClicksegStatements: function() {
        var scopeObj = this;
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navMan = applicationManager.getNavigationManager();
        var statements = navMan.getCustomInfo("frmCardStatements");
        var cardID = statements.card_id;
        var index = scopeObj.view.segStatements.selectedRowIndex[1];
        var year = scopeObj.view.segStatements.data[index]["lblStatementMonth"].split(' ')[1];
        var monthid = scopeObj.view.segStatements.data.length - index;
        if (monthid < 10) monthid = "0" + monthid;
        var params = {
            "Card_id": cardID,
            "format": "",
            "month": year + "-" + monthid
        };
        var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
        manageCardsModule.presentationController.fetchCardStatements(params);
    },
    fillYearSegment: function() {
        var year = applicationManager.getConfigurationManager().configurations.getItem("cardStatementYears");
        var statementdata = [];
        var curryear = new Date().getFullYear();
        //  var curryear= this.date.getFullYear();
        for (var i = curryear; i >= curryear - year; i--) {
            var statedata = {
                "lblReason": i + " " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.statements")
            };
            statementdata.push(statedata);
        }
        this.view.segYear.setData(statementdata);
    },
    yearOnClick: function() {
        var index = this.view.segYear.selectedRowIndex[1];
        var year = this.view.segYear.data[index]["lblReason"].split(' ')[0];
        this.date.setFullYear(year);
        this.view.lblShowValue.text = this.date.getFullYear() + "  " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.statements");
        this.setSegStatementsData();
        this.flxArrowOnclick();
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("ManageCardsModule/frmCardStatementsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_d5e9c2a7ec6c4df6a6b2fcbdd49d249d: function AS_Button_d5e9c2a7ec6c4df6a6b2fcbdd49d249d(eventobject) {
        var self = this;
        var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountModule.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_FlexContainer_f90bd079c9404b90bcd1eac0daf9e8ad: function AS_FlexContainer_f90bd079c9404b90bcd1eac0daf9e8ad(eventobject) {
        var self = this;
        return self.flxArrowOnclick.call(this);
    },
    AS_FlexContainer_ca2d4feadd934b428ce8bb2aeabbddb5: function AS_FlexContainer_ca2d4feadd934b428ce8bb2aeabbddb5(eventobject, x, y) {
        var self = this;
        return self.flxArrowOnclick.call(this);
    },
    AS_FlexScrollContainer_a1f17e219b8e42f2b39be7959665e088: function AS_FlexScrollContainer_a1f17e219b8e42f2b39be7959665e088(eventobject, x, y) {
        var self = this;
        return self.animateFlxSelectYearBack.call(this);
    },
    AS_Form_b796e785ce1a47b7b3713642025a999c: function AS_Form_b796e785ce1a47b7b3713642025a999c(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c5c292c7cc5844c3a7edc4a25cf65578: function AS_Form_c5c292c7cc5844c3a7edc4a25cf65578(eventobject) {
        var self = this;
        this.view.imgArrow.src = "arrowdown.png";
        this.animateFlxSelectYearBack();
    },
    AS_Form_acec5fdd8d724def9c540dc628023329: function AS_Form_acec5fdd8d724def9c540dc628023329(eventobject) {
        var self = this;
        this.Preshow();
    }
});
define("ManageCardsModule/frmCardStatementsController", ["ManageCardsModule/userfrmCardStatementsController", "ManageCardsModule/frmCardStatementsControllerActions"], function() {
    var controller = require("ManageCardsModule/userfrmCardStatementsController");
    var controllerActions = ["ManageCardsModule/frmCardStatementsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
