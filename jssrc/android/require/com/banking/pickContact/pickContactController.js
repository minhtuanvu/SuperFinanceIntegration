define("com/banking/pickContact/userpickContactController", function() {
    var selectedItem = null;
    var toggleRadioButton = function(index, rowInfo) {
        var segment = this.view.segContacts;
        var checkedRadio = {
            lblContactData: rowInfo.lblContactData,
            ImgRadio: "radiobtn.png"
        };
        segment.setDataAt(checkedRadio, index);
        segment.data.forEach(function(element, pos) {
            if (pos !== index && element.ImgRadio === "radiobtn.png") {
                var uncheckedRadio = {
                    lblContactData: element.lblContactData,
                    ImgRadio: "radiobuttoninactive.png"
                };
                segment.setDataAt(uncheckedRadio, pos);
            }
        });
    };
    var handleRowClick = function() {
        var segment = this.view.segContacts;
        var index = segment.selectedIndex[1];
        var rowInfo = segment.data[index];
        selectedItem = segment.data[index].lblContactData;
        if (rowInfo.ImgRadio === "radiobuttoninactive.png") {
            toggleRadioButton.call(this, index, rowInfo);
        }
    };
    var isAPIAvailable = function(API) {
        return API && (typeof API === "function");
    };
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.componentProperties = {
                mainFlxSkin: "",
                firstRowSkin: "",
                secondRowSkin: "",
                buttonCancelSkin: "",
                buttonContinueSkin: ""
            };
        },
        initGettersSetters: function() {
            defineSetter(this, "mainFlx", function(value) {
                this.componentProperties.mainFlxSkin = value;
            });
            defineSetter(this, "firstRowSkin", function(value) {
                this.componentProperties.firstRowSkin = value;
            });
            defineSetter(this, "secondRowSkin", function(value) {
                this.componentProperties.secondRowSkin = value;
            });
            defineSetter(this, "buttonContinue", function(value) {
                this.componentProperties.buttonContinueSkin = value;
            });
            defineSetter(this, "buttonCancel", function(value) {
                this.componentProperties.buttonCancelSkin = value;
            });
        },
        preShow: function() {
            var self = this;
            this.view.flxMain.skin = this.componentProperties.mainFlxSkin;
            this.view.lblPickContact.skin = this.componentProperties.firstRowSkin;
            this.view.lblSelectId.skin = this.componentProperties.secondRowSkin;
            this.view.btnCancel.skin = this.componentProperties.buttonCancelSkin;
            this.view.btnContinue.skin = this.componentProperties.buttonContinueSkin;
            this.view.btnContinue.onClick = function() {
                if (isAPIAvailable(self.onClickContinue)) {
                    self.onClickContinue(selectedItem);
                }
            };
            this.view.btnCancel.onClick = function() {
                if (isAPIAvailable(self.onClickCancel)) {
                    self.onClickCancel();
                }
            };
            this.view.segContacts.onRowClick = handleRowClick.bind(this);
        },
        setData: function(data) {
            selectedItem = data[0];
            var segmentData = data.map(function(item, index) {
                return {
                    lblContactData: item,
                    ImgRadio: index === 0 ? "radiobtn.png" : "radiobuttoninactive.png"
                };
            });
            var segment = this.view.segContacts;
            segment.setData(segmentData);
        },
        getSelectedItem: function() {
            return selectedItem;
        }
    };
});
define("com/banking/pickContact/pickContactControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_ib7edce864d949cd8b9d717a6a04590b: function AS_FlexContainer_ib7edce864d949cd8b9d717a6a04590b(eventobject) {
        var self = this;
        return self.preShow.call(this);
    }
});
define("com/banking/pickContact/pickContactController", ["com/banking/pickContact/userpickContactController", "com/banking/pickContact/pickContactControllerActions"], function() {
    var controller = require("com/banking/pickContact/userpickContactController");
    var actions = require("com/banking/pickContact/pickContactControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "headerText", function(val) {
            this.view.lblSelectId.text = val;
        });
        defineGetter(this, "headerText", function() {
            return this.view.lblSelectId.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
