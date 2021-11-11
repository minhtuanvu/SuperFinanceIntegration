define(["CommonUtilities"], function(CommonUtilities) {
    return {
        /** 
         *	To show Campaign Popup call the method in the preshow of a Form Controller.
         */
        fetchPopupCampaigns: function(frmControllerSuccessCallback, frmControllerErrorCallback) {
            let scopeObj = this;
            if (CommonUtilities.CLIENT_PROPERTIES && CommonUtilities.CLIENT_PROPERTIES.MB_ENABLE_POPUP_CAMPAIGNS && CommonUtilities.CLIENT_PROPERTIES.MB_ENABLE_POPUP_CAMPAIGNS.toUpperCase() === "TRUE") {
                let directMktManager = applicationManager.getDirectMarketingManager();
                let formname = applicationManager.getNavigationManager().currentForm;
                let context = scopeObj.fetchContext(formname);
                let verbName = 'getCampaign';
                directMktManager.getPopupAds(context, verbName, campaignsSuccess, campaignsFailure);
            }
            let popupData = {};

            function campaignsSuccess(response) {
                response = response[0];
                if (response === undefined || response === null) {
                    popupData.campaign = undefined;
                    kony.print("error", response);
                    frmControllerErrorCallback(popupData);
                } else {
                    let campaignData = {
                        "campaignId": response.campaignId,
                        "showCloseIcon": response.showCloseIcon === "true" ? true : false,
                        "bannerTitle": response.bannerTitle ? response.bannerTitle : "Banner Title",
                        "bannerDescription": response.bannerDescription ? response.bannerDescription : "Banner Description",
                        "imageURL": response.imageURL ? response.imageURL : "",
                        "destinationURL": response.destinationURL ? response.destinationURL : "https://www.temenos.com",
                        "callToActionButtonLabel": response.callToActionButtonLabel ? response.callToActionButtonLabel : "Learn More",
                        "callToActionTargetURL": response.callToActionTargetURL ? response.callToActionTargetURL : "https://www.temenos.com",
                        "showReadLaterButton": response.showReadLaterButton === "true" ? true : false
                    };
                    popupData.campaign = campaignData;
                    frmControllerSuccessCallback(popupData);
                }
            }

            function campaignsFailure(response) {
                popupData.campaign = undefined;
                kony.print("error", response);
                frmControllerErrorCallback(popupData);
            }
        },
        fetchContext: function(formname) {
            let context = {};
            //context["scale"] = applicationManager.getDeviceUtilManager().getDeviceScale();
            context["scale"] = "3x";
            context["placeholderCode"] = "POPUP";
            context["eventCode"] = "MB_" + formname;
            return context;
        },
        removeExistingCampaignpopup: function(view) {
            if (view.campaignPopup) {
                view.remove(view.campaignPopup);
            }
        },
        showCampaign: function(data, view) {
            let scopeObj = this;
            this.removeExistingCampaignpopup(view);
            let hasCampaign = (data.campaign !== undefined) ? true : false;
            if (hasCampaign) {
                let campaignData = data.campaign;
                let currForm = kony.application.getCurrentForm();
                var campaignPopup = new com.kmb.common.campaignPopup({
                    "autogrowMode": kony.flex.AUTOGROW_NONE,
                    "clipBounds": true,
                    "height": "100%",
                    "id": "campaignPopup",
                    "isVisible": true,
                    "layoutType": kony.flex.FREE_FORM,
                    "left": "0dp",
                    "masterType": constants.MASTER_TYPE_DEFAULT,
                    "isModalContainer": false,
                    "skin": "sknFlx000000Op50",
                    "top": "0dp",
                    "width": "100%",
                    "zIndex": 2000,
                    "overrides": {
                        "campaignPopup": {
                            "isVisible": true,
                            "zIndex": 2000
                        },
                        "flxClose": {
                            "isVisible": campaignData.showCloseIcon,
                            "onClick": () => {
                                scopeObj.ignoreCamapign(campaignData.campaignId);
                                currForm.campaignPopup.closePopup();
                            }
                        },
                        "imgClose": {
                            "src": "closeicon.png"
                        },
                        "lblHeading": {
                            "text": campaignData.bannerTitle
                        },
                        "lblDescription": {
                            "text": campaignData.bannerDescription
                        },
                        "flxCampaignImage": {
                            "onClick": () => {
                                let destinationURL = campaignData.destinationURL.trim();
                                scopeObj.ignoreCamapign(campaignData.campaignId);
                                currForm.campaignPopup.onClickofCampaign(destinationURL);
                                currForm.campaignPopup.closePopup();
                            }
                        },
                        "imgPopup": {
                            "src": campaignData.imageURL
                        },
                        "btnNo": {
                            "text": "Read Later",
                            "isVisible": campaignData.showReadLaterButton,
                            "onClick": () => currForm.campaignPopup.closePopup()
                        },
                        "btnYes": {
                            "text": campaignData.callToActionButtonLabel,
                            "onClick": () => {
                                let actionURL = campaignData.callToActionTargetURL.trim();
                                scopeObj.ignoreCamapign(campaignData.campaignId);
                                currForm.campaignPopup.onClickofCampaign(actionURL);
                                currForm.campaignPopup.closePopup();
                            }
                        },
                    }
                }, {
                    "overrides": {}
                }, {
                    "overrides": {}
                });
                view.add(campaignPopup);
                view.forceLayout();
            }
        },
        ignoreCamapign: function(campaignId) {
            let directMktManager = applicationManager.getDirectMarketingManager();
            var loggerManager = applicationManager.getLoggerManager();

            function callback(res) {
                if (!res.isSuccess) loggerManager.log("#### Failed to Ignore Popup Campaign ####");
            }
            directMktManager.ignorePopupAds(campaignId, callback);
        },
        onClickofInAppCampaign: function(url) {
            // this is a common function to handle all IN-APP Ads
            var scopeObj = this;
            let actionType = scopeObj.getQueryString("actionType", url);
            let moduleName = scopeObj.getQueryString("moduleName", url);
            if (actionType === "internal" && moduleName) {
                applicationManager.getNavigationManager().navigateTo(moduleName);
            } else {
                kony.application.openURL(url);
            }
        },
        getQueryString: function(field, url) {
            var href = url;
            var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
            var string = reg.exec(href);
            return string ? string[1] : null;
        },
        onClickofInAppCampaign: function(url) {
            // this is a common function to handle all IN-APP Ads
            var scopeObj = this;
            let actionType = scopeObj.getQueryString("actionType", url);
            let moduleName = scopeObj.getQueryString("moduleName", url);
            if (actionType === "internal" && moduleName) {
                applicationManager.getNavigationManager().navigateTo(moduleName);
            } else {
                kony.application.openURL(url);
            }
        },
        getQueryString: function(field, url) {
            var href = url;
            var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
            var string = reg.exec(href);
            return string ? string[1] : null;
        },
    };
});