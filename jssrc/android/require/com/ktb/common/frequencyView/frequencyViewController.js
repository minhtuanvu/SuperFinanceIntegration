define("com/ktb/common/frequencyView/userfrequencyViewController", function() {
    function getI18n(key) {
        return kony.i18n.getLocalizedString(key);
    }
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.componentSkins = {
                labelNameSkin: "",
                labelValueSkin: "",
                activeTabSkin: "",
                frequencyView: "",
            };
        },
        initGettersSetters: function() {
            defineSetter(this, "labelNameSkin", function(val) {
                this.componentSkins.labelNameSkin = val;
            });
            defineSetter(this, "labelValueSkin", function(val) {
                this.componentSkins.labelValueSkin = val;
            });
            defineSetter(this, "activeTabSkin", function(val) {
                this.componentSkins.activeTabSkin = val;
            });
            defineSetter(this, "frequencyView", function(val) {
                this.componentSkins.frequencyView = val;
            });
        },
        preShow: function() {
            this.view.lblTransferFrequency.skin = this.componentSkins.labelNameSkin;
            this.view.lblDaily.skin = this.componentSkins.labelValueSkin;
            this.view.lblDateStart.skin = this.componentSkins.labelNameSkin;
            this.view.lblDateStartValue.skin = this.componentSkins.labelValueSkin;
            this.view.lblFrequency.skin = this.componentSkins.labelNameSkin;
            this.view.lblFrequencyRange.skin = this.componentSkins.labelValueSkin;
            this.view.skin = this.componentSkins.frequencyView;
            this.view.lblSetFrequency.skin = this.componentSkins.activeTabSkin;
        },
        setFirstRowName: function(name) {
            this.view.lblTransferFrequency.text = name;
        },
        setFirstRowNamei18: function(key) {
            this.setFirstRowName(getI18n(key));
        },
        setFirstRowValue: function(value) {
            this.view.lblDaily.text = value;
        },
        setSecondRowName: function(name) {
            this.view.lblDateStart.text = name;
        },
        setSecondRowNamei18: function(key) {
            this.setSecondRowName(getI18n(key));
        },
        setSecondRowValue: function(value) {
            this.view.flxDate.lblDateStartValue.text = value;
        },
        setThirdRowName: function(name) {
            this.view.flxRange.lblFrequency.text = name;
        },
        setThirdRowNamei18: function(key) {
            this.setThirdRowName(getI18n(key));
        },
        setThirdRowValue: function(value) {
            this.view.flxRange.lblFrequencyRange.text = value;
        },
        setActiveTabValue: function(name) {
            this.view.flxSetFrequency.lblSetFrequency.text = name;
        },
    };
});
define("com/ktb/common/frequencyView/frequencyViewControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_d0e9bf1a18af496bbe4ee48c0096667d: function AS_FlexContainer_d0e9bf1a18af496bbe4ee48c0096667d(eventobject) {
        var self = this;
        return self.preShow.call(this);
    }
});
define("com/ktb/common/frequencyView/frequencyViewController", ["com/ktb/common/frequencyView/userfrequencyViewController", "com/ktb/common/frequencyView/frequencyViewControllerActions"], function() {
    var controller = require("com/ktb/common/frequencyView/userfrequencyViewController");
    var actions = require("com/ktb/common/frequencyView/frequencyViewControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "startDate", function(val) {
            this.view.lblDateStart.text = val;
        });
        defineGetter(this, "startDate", function() {
            return this.view.lblDateStart.text;
        });
        defineSetter(this, "thirdRowName", function(val) {
            this.view.lblFrequency.text = val;
        });
        defineGetter(this, "thirdRowName", function() {
            return this.view.lblFrequency.text;
        });
        defineSetter(this, "activeTabVisibility", function(val) {
            this.view.flxSetFrequency.isVisible = val;
        });
        defineGetter(this, "activeTabVisibility", function() {
            return this.view.flxSetFrequency.isVisible;
        });
        defineSetter(this, "firstRowName", function(val) {
            this.view.lblTransferFrequency.text = val;
        });
        defineGetter(this, "firstRowName", function() {
            return this.view.lblTransferFrequency.text;
        });
        defineSetter(this, "startDateValue", function(val) {
            this.view.lblDateStartValue.text = val;
        });
        defineGetter(this, "startDateValue", function() {
            return this.view.lblDateStartValue.text;
        });
        defineSetter(this, "activeTabName", function(val) {
            this.view.lblSetFrequency.text = val;
        });
        defineGetter(this, "activeTabName", function() {
            return this.view.lblSetFrequency.text;
        });
        defineSetter(this, "firstRowVisibility", function(val) {
            this.view.flxFrequency.isVisible = val;
        });
        defineGetter(this, "firstRowVisibility", function() {
            return this.view.flxFrequency.isVisible;
        });
        defineSetter(this, "thirdRowValue", function(val) {
            this.view.lblFrequencyRange.text = val;
        });
        defineGetter(this, "thirdRowValue", function() {
            return this.view.lblFrequencyRange.text;
        });
        defineSetter(this, "secondRowVisibility", function(val) {
            this.view.flxFrequencyDate.isVisible = val;
        });
        defineGetter(this, "secondRowVisibility", function() {
            return this.view.flxFrequencyDate.isVisible;
        });
        defineSetter(this, "firstRowValue", function(val) {
            this.view.lblDaily.text = val;
        });
        defineGetter(this, "firstRowValue", function() {
            return this.view.lblDaily.text;
        });
        defineSetter(this, "thirdRowVisibility", function(val) {
            this.view.flxFrequencyRange.isVisible = val;
        });
        defineGetter(this, "thirdRowVisibility", function() {
            return this.view.flxFrequencyRange.isVisible;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onHandleAction_ad06b5674c104ceaa3a1cb5461fc4d72 = function() {
        if (this.onHandleAction) {
            this.onHandleAction.apply(this, arguments);
        }
    }
    return controller;
});
