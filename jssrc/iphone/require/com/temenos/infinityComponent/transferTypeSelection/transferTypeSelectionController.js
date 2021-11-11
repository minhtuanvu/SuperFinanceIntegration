define("com/temenos/infinityComponent/transferTypeSelection/usertransferTypeSelectionController", ['./ParserUtilsManager', './EntitlementUtils'], function(ParserUtilsManager, EntitlementUtils) {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            //declaration for Icon Visibility in the group:General
            this._iconVisibility = "";
            //declaration for More Link in the group:Action Buttons
            this._moreLink = "";
            //declaration for Breakpoints in the group:Breakpoint
            this._BREAKPTS = "";
            //declaration for Box Skin in the group:Skins
            this._boxSkin = "";
            //declaration for Icon in the group:General
            this._icon = "";
            //declaration for More Link Action in the group:Action Buttons
            this._moreLinkAction = "";
            //declaration for Title Skin in the group:Skins
            this._titleSkin = "";
            //declaration for Title in the group:General
            this._title = "";
            //declaration for Action Button 1 in the group:Action Buttons
            this._actionButton1 = "";
            //declaration for Description Skin in the group:Skins
            this._descriptionSkin = "";
            //declaration for Description in the group:General
            this._description = "";
            //declaration for Action Button 2 in the group:Action Buttons
            this._actionButton2 = "";
            //declaration for More Link Skin in the group:Skins
            this._moreLinkSkin = "";
            //declaration for Description Rendering in the group:General
            this._descriptionRendering = "";
            //declaration for Details Action Button 1 in the group:Action Buttons
            this._detailsActionButton1 = "";
            //declaration for Action Button 1 in the group:Skins
            this._actionButton1Skin = "";
            //declaration for Terms & Conditions in the group:General
            this._teamsConditions = "";
            //declaration for Details Action Button 2 in the group:Action Buttons
            this._detailsActionButton2 = "";
            //declaration for Action Button 2 in the group:Skins
            this._actionButton2Skin = "";
            //declaration for Details Action Button 1 in the group:Skins
            this._detailsActionButton1Skin = "";
            //declaration for Details Action Button 2 in the group:Skins
            this._detailsActionButton2Skin = "";
            this._detailDescriptionSkn = "";
            this._detailDescHeadingSkn = "";
            this._popupTitleSkin = "";
            this._popupDescriptionSkn = "";
            this._termsConditionTitleSkn = "";
            this._termsConditionSkn = "";
            this._popupCloseBtnSkn = "";
            // Object for parserUtilsManager
            this.parserUtilsManager = new ParserUtilsManager();
            this.EntitlementUtils = new EntitlementUtils();
            this.popupObj = "";
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            //setter method for Icon Visibility in the group:General
            defineSetter(this, "iconVisibility", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._iconVisibility = val;
                }
            });
            //getter method for Icon Visibility in the group:General
            defineGetter(this, "iconVisibility", function() {
                return this._iconVisibility;
            });
            //setter method for More Link in the group:Action Buttons
            defineSetter(this, "moreLink", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._moreLink = val;
                }
            });
            //getter method for More Link in the group:Action Buttons
            defineGetter(this, "moreLink", function() {
                return this._moreLink;
            });
            //setter method for Breakpoints in the group:Breakpoint
            defineSetter(this, "BREAKPTS", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._BREAKPTS = val;
                }
            });
            //getter method for Breakpoints in the group:Breakpoint
            defineGetter(this, "BREAKPTS", function() {
                return this._BREAKPTS;
            });
            //setter method for Box Skin in the group:Skins
            defineSetter(this, "boxSkin", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._boxSkin = val;
                }
            });
            //getter method for Box Skin in the group:Skins
            defineGetter(this, "boxSkin", function() {
                return this._boxSkin;
            });
            //setter method for Icon in the group:General
            defineSetter(this, "icon", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._icon = val;
                }
            });
            //getter method for Icon in the group:General
            defineGetter(this, "icon", function() {
                return this._icon;
            });
            //setter method for More Link Action in the group:Action Buttons
            defineSetter(this, "moreLinkAction", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._moreLinkAction = val;
                }
            });
            //getter method for More Link Action in the group:Action Buttons
            defineGetter(this, "moreLinkAction", function() {
                return this._moreLinkAction;
            });
            //setter method for Title Skin in the group:Skins
            defineSetter(this, "titleSkin", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._titleSkin = val;
                }
            });
            //getter method for Title Skin in the group:Skins
            defineGetter(this, "titleSkin", function() {
                return this._titleSkin;
            });
            //setter method for Title in the group:General
            defineSetter(this, "title", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._title = val;
                }
            });
            //getter method for Title in the group:General
            defineGetter(this, "title", function() {
                return this._title;
            });
            //setter method for Action Button 1 in the group:Action Buttons
            defineSetter(this, "actionButton1", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._actionButton1 = val;
                }
            });
            //getter method for Action Button 1 in the group:Action Buttons
            defineGetter(this, "actionButton1", function() {
                return this._actionButton1;
            });
            //setter method for Description Skin in the group:Skins
            defineSetter(this, "descriptionSkin", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._descriptionSkin = val;
                }
            });
            //getter method for Description Skin in the group:Skins
            defineGetter(this, "descriptionSkin", function() {
                return this._descriptionSkin;
            });
            //setter method for Description in the group:General
            defineSetter(this, "description", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._description = val;
                }
            });
            //getter method for Description in the group:General
            defineGetter(this, "description", function() {
                return this._description;
            });
            //setter method for Action Button 2 in the group:Action Buttons
            defineSetter(this, "actionButton2", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._actionButton2 = val;
                }
            });
            //getter method for Action Button 2 in the group:Action Buttons
            defineGetter(this, "actionButton2", function() {
                return this._actionButton2;
            });
            //setter method for More Link Skin in the group:Skins
            defineSetter(this, "moreLinkSkin", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._moreLinkSkin = val;
                }
            });
            //getter method for More Link Skin in the group:Skins
            defineGetter(this, "moreLinkSkin", function() {
                return this._moreLinkSkin;
            });
            //setter method for Description Rendering in the group:General
            defineSetter(this, "descriptionRendering", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._descriptionRendering = val;
                }
            });
            //getter method for Description Rendering in the group:General
            defineGetter(this, "descriptionRendering", function() {
                return this._descriptionRendering;
            });
            //setter method for Details Action Button 1 in the group:Action Buttons
            defineSetter(this, "detailsActionButton1", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._detailsActionButton1 = val;
                }
            });
            //getter method for Details Action Button 1 in the group:Action Buttons
            defineGetter(this, "detailsActionButton1", function() {
                return this._detailsActionButton1;
            });
            //setter method for Action Button 1 in the group:Skins
            defineSetter(this, "actionButton1Skin", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._actionButton1Skin = val;
                }
            });
            //getter method for Action Button 1 in the group:Skins
            defineGetter(this, "actionButton1Skin", function() {
                return this._actionButton1Skin;
            });
            //setter method for Terms & Conditions in the group:General
            defineSetter(this, "teamsConditions", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._teamsConditions = val;
                }
            });
            //getter method for Terms & Conditions in the group:General
            defineGetter(this, "teamsConditions", function() {
                return this._teamsConditions;
            });
            //setter method for Details Action Button 2 in the group:Action Buttons
            defineSetter(this, "detailsActionButton2", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._detailsActionButton2 = val;
                }
            });
            //getter method for Details Action Button 2 in the group:Action Buttons
            defineGetter(this, "detailsActionButton2", function() {
                return this._detailsActionButton2;
            });
            //setter method for Action Button 2 in the group:Skins
            defineSetter(this, "actionButton2Skin", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._actionButton2Skin = val;
                }
            });
            //getter method for Action Button 2 in the group:Skins
            defineGetter(this, "actionButton2Skin", function() {
                return this._actionButton2Skin;
            });
            //setter method for Details Action Button 1 in the group:Skins
            defineSetter(this, "detailsActionButton1Skin", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._detailsActionButton1Skin = val;
                }
            });
            //getter method for Details Action Button 1 in the group:Skins
            defineGetter(this, "detailsActionButton1Skin", function() {
                return this._detailsActionButton1Skin;
            });
            //setter method for Details Action Button 2 in the group:Skins
            defineSetter(this, "detailsActionButton2Skin", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._detailsActionButton2Skin = val;
                }
            });
            //getter method for Details Action Button 2 in the group:Skins
            defineGetter(this, "detailsActionButton2Skin", function() {
                return this._detailsActionButton2Skin;
            });
            //setter method for Details Action Button 2 in the group:Skins
            defineSetter(this, "detailDescriptionSkn", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._detailDescriptionSkn = val;
                }
            });
            //getter method for Details Action Button 2 in the group:Skins
            defineGetter(this, "detailDescriptionSkn", function() {
                return this._detailDescriptionSkn;
            });
            //setter method for Details Action Button 2 in the group:Skins
            defineSetter(this, "detailDescHeadingSkn", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._detailDescHeadingSkn = val;
                }
            });
            //getter method for Details Action Button 2 in the group:Skins
            defineGetter(this, "detailDescHeadingSkn", function() {
                return this._detailDescHeadingSkn;
            });
            //setter method for Details Action Button 2 in the group:Skins
            defineSetter(this, "popupTitleSkin", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._popupTitleSkin = val;
                }
            });
            //getter method for Details Action Button 2 in the group:Skins
            defineGetter(this, "popupTitleSkin", function() {
                return this._popupTitleSkin;
            });
            //setter method for Details Action Button 2 in the group:Skins
            defineSetter(this, "popupDescriptionSkn", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._popupDescriptionSkn = val;
                }
            });
            //getter method for Details Action Button 2 in the group:Skins
            defineGetter(this, "popupDescriptionSkn", function() {
                return this._popupDescriptionSkn;
            });
            //setter method for Details Action Button 2 in the group:Skins
            defineSetter(this, "termsConditionTitleSkn", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._termsConditionTitleSkn = val;
                }
            });
            //getter method for Details Action Button 2 in the group:Skins
            defineGetter(this, "termsConditionTitleSkn", function() {
                return this._termsConditionTitleSkn;
            });
            //setter method for Details Action Button 2 in the group:Skins
            defineSetter(this, "termsConditionSkn", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._termsConditionSkn = val;
                }
            });
            //getter method for Details Action Button 2 in the group:Skins
            defineGetter(this, "termsConditionSkn", function() {
                return this._termsConditionSkn;
            });
            //setter method for Details Action Button 2 in the group:Skins
            defineSetter(this, "popupCloseBtnSkn", function(val) {
                if ((typeof val === 'string') && (val !== "")) {
                    this._popupCloseBtnSkn = val;
                }
            });
            //getter method for Details Action Button 2 in the group:Skins
            defineGetter(this, "popupCloseBtnSkn", function() {
                return this._popupCloseBtnSkn;
            });
        },
        preShow: function() {
            var scope = this;
            this.view.btnMoreLink.onClick = this.detailsLinkEnabling;
            this.view.imgBackBtn.onTouchEnd = this.closeDescription;
            if (kony.application.getCurrentBreakpoint === undefined) {
                this.bindFieldsData();
            }
            if (scope.view.description !== null && scope.view.description !== undefined) {
                scope.view.description.closePopup = function() {
                    var form = kony.application.getCurrentForm();
                    form.remove(popupObj);
                };
            }
        },
        /**
         * Component onBreakPointChange
         * Set UI based on breakpoint
         */
        onBreakPointChange: function() {
            //   var currentBreakPoint = kony.application.getCurrentBreakpoint();
            this.bindFieldsData();
        },
        /**
         * isNullOrUndefinedOrEmpty
         * @api : isNullOrUndefinedOrEmpty
         * checks whether the input is null or empty or undefined
         * @return : NA
         */
        isNullOrUndefinedOrEmpty: function(val) {
            if (val === null || val === undefined || val === "") {
                return true;
            } else {
                return false;
            }
        },
        //Selected Transfer Type
        selectedTransferType: function() {
            var transType = this.parseJsonAndGetValue(this._title);
            alert(transType);
        },
        bindFieldsData: function() {
            //Set transfer type icon
            var btn1Entitlement = "",
                btn2Entitlement = "",
                detailBtn1Entitlement = "",
                detailBtn2Entitlement = "";
            var iconImg = this.parseJsonAndGetValue(this._icon);
            this.view.imgTransactionIcon.src = iconImg;
            if (this.parseJsonAndGetValue(this._iconVisibility) === "On") {
                this.view.imgTransactionIcon.setVisibility(true);
            } else {
                this.view.imgTransactionIcon.setVisibility(false);
            }
            //Title properties
            var title = this.parseJsonAndGetValue(this._title);
            this.view.lblTransactionType.text = title;
            this.view.lblTransactionType.skin = this.parseJsonAndGetValue(this._titleSkin);
            //Short Description
            var descriptionText = this.parseJsonAndGetValue(this._description);
            var shortDescription = this.getShortDescription(descriptionText);
            this.view.rtLearnMore.text = shortDescription;
            this.view.rtLearnMore.linkSkin = this.parseJsonAndGetValue(this._moreLinkSkin).Active;
            this.view.rtLearnMore.linkFocusSkin = this.parseJsonAndGetValue(this._moreLinkSkin).Active;
            this.view.rtLearnMore.onClick = this.detailsLinkEnabling;
            var actionBtn1 = this.parseJsonAndGetValue(this._actionButton1);
            this.view.btnAction1.text = actionBtn1.text;
            this.view.btnAction1.skin = this.parseJsonAndGetValue(this._actionButton1Skin).Active;
            var type = {
                "id": actionBtn1.id,
                "transferType": this.parseJsonAndGetValue(this._title)
            };
            this.view.btnAction1.onClick = this.buttonActionHandling.bind(this, type);
            var actionBtn2 = this.parseJsonAndGetValue(this._actionButton2);
            this.view.btnAction2.text = actionBtn2.text;
            this.view.btnAction2.skin = this.parseJsonAndGetValue(this._actionButton2Skin).Active;
            var action2Type = {
                "id": actionBtn2.id,
                "transferType": this.parseJsonAndGetValue(this._title)
            };
            this.view.btnAction2.onClick = this.buttonActionHandling.bind(this, action2Type);
            if (!this.isNullOrUndefinedOrEmpty(this.parseJsonAndGetValue(this._actionButton1))) {
                btn1Entitlement = this.EntitlementUtils.isEntitled(this.parseJsonAndGetValue(this._actionButton1).entitlement_keys);
            }
            if (!this.isNullOrUndefinedOrEmpty(this.parseJsonAndGetValue(this._actionButton2))) {
                btn2Entitlement = this.EntitlementUtils.isEntitled(this.parseJsonAndGetValue(this._actionButton2).entitlement_keys);
            }
            if (!this.isNullOrUndefinedOrEmpty(this.parseJsonAndGetValue(this._detailsActionButton1))) {
                detailBtn1Entitlement = this.EntitlementUtils.isEntitled(this.parseJsonAndGetValue(this._detailsActionButton1).entitlement_keys);
            }
            if (!this.isNullOrUndefinedOrEmpty(this.parseJsonAndGetValue(this._detailsActionButton2))) {
                detailBtn2Entitlement = this.EntitlementUtils.isEntitled(this.parseJsonAndGetValue(this._detailsActionButton2).entitlement_keys);
            }
            var makeTrans = {};
            var addNewAccount = {};
            if (btn1Entitlement && btn2Entitlement) {
                makeTrans = {
                    "default": "1%",
                    "$.BREAKPTS.BP1": "36dp",
                    "$.BREAKPTS.BP2": "38dp",
                    "$.BREAKPTS.BP3": "95dp"
                };
                addNewAccount = {
                    "default": "3%",
                    "$.BREAKPTS.BP1": "19dp",
                    "$.BREAKPTS.BP2": "37dp",
                    "$.BREAKPTS.BP3": "83dp"
                };
                this.view.btnAction1.left = this.parseJsonAndGetValue(makeTrans);
                this.view.btnAction2.left = this.parseJsonAndGetValue(addNewAccount);
                this.view.btnAction1.setVisibility(true);
                this.view.btnAction2.setVisibility(true);
                this.view.flxSeperator2.setVisibility(true);
            } else if (btn1Entitlement) {
                makeTrans = {
                    "default": "25%",
                    "$.BREAKPTS.BP1": "106dp",
                    "$.BREAKPTS.BP2": "120dp",
                    "$.BREAKPTS.BP3": "220dp"
                };
                this.view.btnAction1.left = this.parseJsonAndGetValue(makeTrans);
                this.view.btnAction1.setVisibility(true);
                this.view.btnAction2.setVisibility(false);
                this.view.flxSeperator2.setVisibility(false);
            } else if (btn2Entitlement) {
                addNewAccount = {
                    "default": "25%",
                    "$.BREAKPTS.BP1": "96dp",
                    "$.BREAKPTS.BP2": "105dp",
                    "$.BREAKPTS.BP3": "220dp"
                };
                this.view.btnAction2.left = this.parseJsonAndGetValue(addNewAccount);
                this.view.btnAction1.setVisibility(false);
                this.view.btnAction2.setVisibility(true);
                this.view.flxSeperator2.setVisibility(false);
            } else {
                this.hideTile();
            }
            if (detailBtn1Entitlement && detailBtn2Entitlement) {
                this.view.btnDescriptionActionBtn1.setVisibility(true);
                this.view.btnDescriptionActionBtn2.setVisibility(true);
            } else if (detailBtn1Entitlement) {
                this.view.btnDescriptionActionBtn1.setVisibility(true);
                this.view.btnDescriptionActionBtn2.setVisibility(false);
            } else if (detailBtn2Entitlement) {
                this.view.btnDescriptionActionBtn1.setVisibility(false);
                this.view.btnDescriptionActionBtn2.setVisibility(true);
            } else {
                this.view.flxDescriptionActionBtn.setVisibility(false);
            }
            this.view.flxTransferTypes.forceLayout();
        },
        detailsLinkEnabling: function() {
            var type = {
                "transferType": this.parseJsonAndGetValue(this._title)
            };
            var form = kony.application.getCurrentForm();
            var visibleDesc = "true";
            if (this.parseJsonAndGetValue(this._moreLinkAction) === "New Form") {
                if (kony.os.deviceInfo().name === "iPhone") {
                    this.view.flxDescriptionTop.setVisibility(false);
                } else {
                    this.view.flxDescriptionTop.setVisibility(true);
                }
                this.view.imgTransDescriptionIcon.src = this.parseJsonAndGetValue(this._icon);
                //Details page properties
                this.view.lblDescriptionHeading.text = this.parseJsonAndGetValue(this._title);
                this.view.lblDescriptionHeading.skin = this.parseJsonAndGetValue(this._detailDescHeadingSkn);
                this.view.lblDescription.text = this.parseJsonAndGetValue(this._description);
                this.view.lblDescription.skin = this.parseJsonAndGetValue(this._detailDescriptionSkn);
                this.view.btnDescriptionActionBtn1.text = this.parseJsonAndGetValue(this._detailsActionButton1).text;
                this.view.btnDescriptionActionBtn1.skin = this.parseJsonAndGetValue(this._detailsActionButton1Skin).Active;
                this.view.btnDescriptionActionBtn1.onClick = this.buttonActionHandling.bind(this, type);
                this.view.btnDescriptionActionBtn2.text = this.parseJsonAndGetValue(this._detailsActionButton2).text;
                this.view.btnDescriptionActionBtn2.skin = this.parseJsonAndGetValue(this._detailsActionButton2Skin).Active;
                this.view.btnDescriptionActionBtn2.onClick = this.buttonActionHandling.bind(this, this.parseJsonAndGetValue(this._detailsActionButton2).id);
                popupObj = this.view.flxDescriptionPage.clone();
                form.add(popupObj);
                popupObj.isVisible = true;
                this.enableHideDescription(visibleDesc);
                this.view.flxTransferTypes.forceLayout();
            }
            if (this.parseJsonAndGetValue(this._moreLinkAction) === "Popup") {
                var popupDetails = {
                    "description": this.parseJsonAndGetValue(this._description),
                    "termsCondtion": this.parseJsonAndGetValue(this._teamsConditions),
                    "tranferType": this.parseJsonAndGetValue(this._title),
                    "popupTitleSkin": this.parseJsonAndGetValue(this._popupTitleSkin),
                    "popupDescriptionSkn": this.parseJsonAndGetValue(this._popupDescriptionSkn),
                    "termsConditionTitleSkn": this.parseJsonAndGetValue(this._termsConditionTitleSkn),
                    "termsConditionSkn": this.parseJsonAndGetValue(this._termsConditionSkn),
                    "popupCloseBtnSkn": this.parseJsonAndGetValue(this._popupCloseBtnSkn)
                };
                popupObj = this.view.description.setPopupDetails(popupDetails);
                form.add(popupObj);
                this.view.forceLayout();
            }
        },
        closeDescription: function() {
            var visibilityDesc = false;
            var currForm = kony.application.getCurrentForm();
            this.enableHideDescription(visibilityDesc);
            currForm.remove(popupObj);
            this.view.flxPopup.setVisibility(false);
        },
        buttonActionHandling: function(clickedButton) {
            var selectedTrasferType = {
                "transferType": this.parseJsonAndGetValue(this._title),
                "clickedButton": clickedButton.id
            };
            this.transferTypeDetails(selectedTrasferType);
        },
        /**
         * Component parseJsonAndGetValue
         * Parse the value and returns the processed value for given account type
         * @param: Value{String} - String taken from configuration
         * @return: {String} - Processed value
         */
        parseJsonAndGetValue: function(Value) {
            var valueJson = Value;
            try {
                if (typeof(Value) === "string") {
                    valueJson = JSON.parse(Value);
                }
                if (kony.application.getCurrentBreakpoint !== undefined) {
                    if (this.breakPointParser(valueJson, kony.application.getCurrentBreakpoint())) {
                        var text = this.breakPointParser(valueJson, kony.application.getCurrentBreakpoint());
                        return text;
                    }
                } else {
                    if (valueJson.default !== undefined) {
                        return valueJson.default;
                    } else {
                        return valueJson;
                    }
                }
            } catch (e) {
                kony.print(e);
            }
            return this.getProcessedText(valueJson);
        },
        /**
         * Component breakPointParser
         * Parse the value and returns the processed value for the breakpoint
         * @param: inputJSON{JSON} - Json with breakpoint values
         * @param: lookUpKey{String} - breakpoint value
         * @return: {String} - value for  the given breakpoint
         */
        breakPointParser: function(inputJSON, lookUpKey) {
            inputJSON = this.getBreakPointValue(inputJSON);
            if (inputJSON.hasOwnProperty(lookUpKey)) {
                return inputJSON[lookUpKey];
            } else if (inputJSON["default"]) {
                return inputJSON["default"];
            }
            return inputJSON;
        },
        /**
         * Component getBreakPointValue
         * Reponsible for parsing the value for breakpoints configured
         */
        getBreakPointValue: function(contractJSON) {
            try {
                if (typeof(this._BREAKPTS) === "string") this._BREAKPTS = JSON.parse(this._BREAKPTS);
                for (var key in contractJSON) {
                    if (key.includes("$.BREAKPTS.")) {
                        keyValue = key.split("$.BREAKPTS.");
                        var newKey = this._BREAKPTS[keyValue[1]];
                        var prevValue = contractJSON[key];
                        delete(contractJSON[key]);
                        contractJSON[newKey] = prevValue;
                    }
                }
                return contractJSON;
            } catch (err) {
                return contractJSON;
            }
        },
        /**
         * Component getProcessedText
         * Get the processed text from parser util
         * @param: text{String}/{Object} - text to be parsed
         * @return: {String}/{Object} - parsed text
         */
        getProcessedText: function(text) {
            return this.parserUtilsManager.getParsedValue(text);
        },
        getShortDescription(description) {
            var descriptionRender = this.parseJsonAndGetValue(this._descriptionRendering);
            var moreLink = "<a href = " + "#>" + this.parseJsonAndGetValue(this._moreLink) + "</a>";
            //Defining properties for a link widget.
            var descriptionText = this.parseJsonAndGetValue(description);
            var shortText = descriptionText.slice(0, descriptionRender.length) + descriptionRender.ellipsis + moreLink;
            return shortText;
        },
        /**
         * Component setContext
         * To set context values
         */
        setContext: function(context) {
            this.EntitlementUtils.setEntitlements(context);
        }
    };
});
define("com/temenos/infinityComponent/transferTypeSelection/transferTypeSelectionControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_bfba2b1ac6b34d0198bea13dc68a9933: function AS_FlexContainer_bfba2b1ac6b34d0198bea13dc68a9933(eventobject, breakpoint) {
        var self = this;
        return self.onBreakPointChange.call(this);
    },
    AS_FlexContainer_b5d61132d80242e0811a92557cd00595: function AS_FlexContainer_b5d61132d80242e0811a92557cd00595(eventobject) {
        var self = this;
        return self.preShow.call(this);
    }
});
define("com/temenos/infinityComponent/transferTypeSelection/transferTypeSelectionController", ["com/temenos/infinityComponent/transferTypeSelection/usertransferTypeSelectionController", "com/temenos/infinityComponent/transferTypeSelection/transferTypeSelectionControllerActions"], function() {
    var controller = require("com/temenos/infinityComponent/transferTypeSelection/usertransferTypeSelectionController");
    var actions = require("com/temenos/infinityComponent/transferTypeSelection/transferTypeSelectionControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
