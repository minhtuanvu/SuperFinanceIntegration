define({
	preShow: function () {
		if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
			this.view.flxHeader.setVisibility(false);
		}
		this.initActions();
		this.view.btnSave.onClick = this.continueOnClick;
		this.view.customHeader.flxBack.onTouchEnd = this.onBack;
		this.view.flxDayOrder.onClick = this.onClickDayOrder;
		this.view.flxGoodTill.onClick = this.onClickGoodTill;
	},
	init: function () {
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm, scope.navigateCustomBack);
	},
	postShow: function () {
		var navMan = applicationManager.getNavigationManager();
		var previousForm = navMan.getCustomInfo("frmInstrumentOrder");
		if (previousForm.validity === "GTC" || previousForm.validity === "Good Till Canceled" ) {
			this.onClickGoodTill();
		} else {
			this.onClickDayOrder();
		}
	},
	onBack: function () {
		var navigationMan = applicationManager.getNavigationManager();
		navigationMan.goBack();
	},
	initActions: function () {
		//To be added
	},
	onClickDayOrder: function () {
		this.view.flxDayOrder.skin = "sknflxGreen0ba407a4468e045";
		this.view.imgSelectDayOrder.setVisibility(true);
		this.view.flxGoodTill.skin = "sknflxBlueE0de121f9cae5843";
		this.view.imgSelectGoodTill.setVisibility(false);
	},
	onClickGoodTill: function () {
		this.view.flxDayOrder.skin = "sknflxBlueE0de121f9cae5843";
		this.view.imgSelectDayOrder.setVisibility(false);
		this.view.flxGoodTill.skin = "sknflxGreen0ba407a4468e045";
		this.view.imgSelectGoodTill.setVisibility(true);
	},
	continueOnClick: function () {
		var validity;
		var navManager = applicationManager.getNavigationManager();
		var WealthMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("WealthModule");
		if (this.view.imgSelectDayOrder.isVisible == true) {
			validity = this.view.lblDayOrder.text;
		} else {
			validity = this.view.lblGoodTill.text;
		}
		var validityDetails = navManager.getCustomInfo("frmInstrumentOrder");
		validityDetails.validity = validity;
		navManager.setCustomInfo("frmInstrumentOrder", validityDetails);
		navManager.navigateTo('frmInstrumentOrder');
	}
});
