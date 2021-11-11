define("BusinessBanking/userfrmAccountPermissionsController", {
    init: function() {
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
            this.view.preShow = this.preShowFunction;
        } catch (er) {
            kony.print("catch error--->" + er);
        }
    },
    onNavigate: function() {
        try {} catch (e) {
            kony.print("Exception in onNavigate" + e);
        }
    },
    preShowFunction: function() {
        try {
            this.bindevents();
            this.fetchAccountList();
        } catch (e) {
            kony.print("preShowFunction in onNavigate" + e);
        }
    },
    bindevents: function() {
        try {
            var navManager = applicationManager.getNavigationManager();
            var title = navManager.getCustomInfo("usermgmtAccountName");
            this.view.customHeader.flxBack.onClick = this.navigateBack;
            this.view.onDeviceBack = this.navigateBack;
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.title = title;
                this.view.flxHeader.isVisible = false;
            } else {
                this.view.customHeader.lblLocateUs.text = title;
                this.view.flxHeader.isVisible = true;
            }
        } catch (e) {
            kony.print("Exception in initActions" + e);
        }
    },
    /*
     *navigateBack - This function is using currentform from previous
     */
    navigateBack: function() {
        try {
            var navMan = applicationManager.getNavigationManager();
            navMan.navigateTo("UserPermissions");
        } catch (er) {
            kony.print("back catch" + er);
        }
    },
    /*
     *getDataAccountList - This function is to form an array for all the seg to set the data inside segment component
     */
    fetchAccountList: function() {
        try {
            var setAccountListArray = [];
            var combinedHeadRowArr = [];
            var navManager = applicationManager.getNavigationManager();
            var selectedRowdata = navManager.getCustomInfo("usermgmtAccountlevelpermission");
            if (!kony.sdk.isNullOrUndefined(selectedRowdata)) {
                if (selectedRowdata.featureData.length > 0) {
                    for (var j = 0; j < selectedRowdata.featureData.length; j++) {
                        combinedHeadRowArr = [];
                        combinedHeadRowArr.push({
                            "template": "flxApprovalReqExpColHeader",
                            "lblHeader": {
                                "text": selectedRowdata.featureData[j].featureName
                            },
                            "imgUpArrow": {
                                "src": "arrowupblue.png"
                            },
                        });
                        var rowArray = [];
                        for (var z = 0; z < selectedRowdata.featureData[j].Actions.length; z++) {
                            rowArray.push({
                                "template": "flxUserAccountNames",
                                "data": selectedRowdata.featureData[j].Actions[z],
                                "lblNameVal": {
                                    "text": "" + selectedRowdata.featureData[j].Actions[z].actionDescription
                                },
                                "imgDotIcon": {
                                    src: selectedRowdata.featureData[j].Actions[z].isSelected ? "activegreendot.png" : "disable.png"
                                },
                                "flxSeparate": {
                                    skin: "sknFlxe3e3e3",
                                    isVisible: true
                                }
                            });
                        }
                        rowArray[rowArray.length - 1].flxSeparate.isVisible = false;
                        combinedHeadRowArr.push(rowArray);
                        setAccountListArray.push(combinedHeadRowArr);
                    }
                    var accountPermissionsWidgetDataMapping = {
                        "lblHeader": "lblHeader",
                        "flxImgUp": "flxImgUp",
                        "imgUpArrow": "imgUpArrow",
                        "lblNameVal": "lblNameVal",
                        "flxSeparate": "flxSeparate",
                        "imgDotIcon": "imgDotIcon",
                    };
                    this.view.expandCollapseView.setDataInList(accountPermissionsWidgetDataMapping, setAccountListArray);
                }
            }
        } catch (e) {
            kony.print("exception getDataAccountList" + e);
        }
    },
});
define("BusinessBanking/frmAccountPermissionsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_bbb6e1223f8547b78c3609f41bb9e311: function AS_Form_bbb6e1223f8547b78c3609f41bb9e311(eventobject) {
        var self = this;
        this.init();
    },
    AS_BarButtonItem_a85e506cd4994699b14306b0adb319e1: function AS_BarButtonItem_a85e506cd4994699b14306b0adb319e1(eventobject) {
        var self = this;
        this.navigateBack();
    }
});
define("BusinessBanking/frmAccountPermissionsController", ["BusinessBanking/userfrmAccountPermissionsController", "BusinessBanking/frmAccountPermissionsControllerActions"], function() {
    var controller = require("BusinessBanking/userfrmAccountPermissionsController");
    var controllerActions = ["BusinessBanking/frmAccountPermissionsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
