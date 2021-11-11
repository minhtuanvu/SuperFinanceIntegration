define("com/banking/FromAccount/userFromAccountController", function() {
    function getI18n(key) {
        return kony.i18n.getLocalizedString(key);
    }
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.componentSkins = {
                firstRow: "",
                secondRow: "",
                activeBtn: "",
                componentSkin: "",
                titleSkin: ""
            };
        },
        initGettersSetters: function() {
            defineSetter(this, "firstRowSkin", function(val) {
                this.componentSkins.firstRow = val;
            });
            defineSetter(this, "secondRowSkin", function(val) {
                this.componentSkins.secondRow = val;
            });
            defineSetter(this, "activeBtn", function(val) {
                this.componentSkins.activeBtn = val;
            });
            defineSetter(this, "componentSkin", function(val) {
                this.componentSkins.componentSkin = val;
            });
            defineSetter(this, "titleSkin", function(val) {
                this.componentSkins.titleSkin = val;
            });
        },
        setData: function(accountName, bankName, accountBalance, balanceStatus) {
            this.view.lblFromAccountValue.text = accountName;
            this.view.lblBank.text = bankName;
            this.view.lblBalanceValue.text = accountBalance;
            this.view.lblavailableBalance.text = balanceStatus;
        },
        initSkins: function() {
            this.view.lblFromAccountValue.skin = this.componentSkins.firstRow;
            this.view.lblBank.skin = this.componentSkins.secondRow;
            this.view.lblBalanceValue.skin = this.componentSkins.firstRow;
            this.view.lblavailableBalance.skin = this.componentSkins.secondRow;
            this.view.skin = this.componentSkins.componentSkin;
            this.view.btnChange.skin = this.componentSkins.activeBtn;
            this.view.lblFromAccount.skin = this.componentSkins.titleSkin;
        },
        setTitleName: function(name) {
            this.view.lblFromAccount.text = name;
        },
        setTitleI18Name: function(key) {
            this.setTitleName(getI18n(key));
        },
        setActionTitle: function(value) {
            this.view.btnChange.text = value;
        },
        setActionI18Title: function(key) {
            this.setActionTitle(getI18n(key));
        }
    };
});
define("com/banking/FromAccount/FromAccountControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_a4675c5a356f46aa98126d6885e08127: function AS_FlexContainer_a4675c5a356f46aa98126d6885e08127(eventobject) {
        var self = this;
        return self.initSkins.call(this);
    }
});
define("com/banking/FromAccount/FromAccountController", ["com/banking/FromAccount/userFromAccountController", "com/banking/FromAccount/FromAccountControllerActions"], function() {
    var controller = require("com/banking/FromAccount/userFromAccountController");
    var actions = require("com/banking/FromAccount/FromAccountControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "titleName", function(val) {
            this.view.lblFromAccount.text = val;
        });
        defineGetter(this, "titleName", function() {
            return this.view.lblFromAccount.text;
        });
        defineSetter(this, "btnTitle", function(val) {
            this.view.btnChange.text = val;
        });
        defineGetter(this, "btnTitle", function() {
            return this.view.btnChange.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onActionHandler_c365d8347ec740ecb7b2217f63b9cd54 = function() {
        if (this.onActionHandler) {
            this.onActionHandler.apply(this, arguments);
        }
    }
    return controller;
});
