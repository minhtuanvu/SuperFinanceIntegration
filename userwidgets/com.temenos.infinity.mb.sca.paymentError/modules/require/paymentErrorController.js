define(function() {
  return {

    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._lblErrorTitleText = "";
      this._lblErrorDescriptionText = "";
      this._btnTryAgainText = "";
      this._btnNewTransferText = "";
      this._lblAcknowledgementText = "";
    },

    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'lblErrorTitleText', () => {
        return this._lblErrorTitleText;
      });
      defineSetter(this, 'lblErrorTitleText', value => {
        this._lblErrorTitleText = value;
      });
      defineGetter(this, 'lblErrorDescriptionText', () => {
        return this._lblErrorDescriptionText;
      });
      defineSetter(this, 'lblErrorDescriptionText', value => {
        this._lblErrorDescriptionText = value;
      });
      defineGetter(this, 'btnTryAgainText', () => {
        return this._btnTryAgainText;
      });
      defineSetter(this, 'btnTryAgainText', value => {
        this._btnTryAgainText = value;
      });
      defineGetter(this, 'btnNewTransferText', () => {
        return this._btnNewTransferText;
      });
      defineSetter(this, 'btnNewTransferText', value => {
        this._btnNewTransferText = value;
      });
      defineGetter(this, 'lblAcknowledgementText', () => {
        return this._lblAcknowledgementText;
      });
      defineSetter(this, 'lblAcknowledgementText', value => {
        this._lblAcknowledgementText = value;
      });
    },

    preShow: function(){
      this.setTextFromi18n();
      this.resetUI();
      this.setFlowActions();
    },

    resetUI: function(){
      this.assignDefaultText();
    },

    assignDefaultText: function(){
      this.view.lblErrorTitle.text = this._lblErrorTitleText;
      this.view.lblErrorDescription.text = this._lblErrorDescriptionText;
      this.view.btnTryAgain.text = this._btnTryAgainText;
      this.view.btnNewPayment.text = this._btnNewTransferText;
      this.view.lblAcknowledgement.text = this._lblAcknowledgementText;
    },

    setTextFromi18n: function(){
      this._lblErrorTitleText = this.getStringFromi18n(this._lblErrorTitleText);
      this._lblErrorDescriptionText = this.getStringFromi18n(this._lblErrorDescriptionText);
      this._btnTryAgainText = this.getStringFromi18n(this._btnTryAgainText);
      this._btnNewTransferText = this.getStringFromi18n(this._btnNewTransferText);
      this._lblAcknowledgementText = this.getStringFromi18n(this._lblAcknowledgementText);
    },

    getStringFromi18n: function(stringValue){
      return  kony.i18n.getLocalizedString(stringValue) ? kony.i18n.getLocalizedString(stringValue) : stringValue;
    },

    setFlowActions: function(){
      const scopeObj = this;      
      this.view.btnTryAgain.onClick = function(){
        // Raise relevant event onClick
        if(scopeObj.onClickTryAgain) scopeObj.onClickTryAgain();
      };
      this.view.btnNewPayment.onClick = function(){
        // Raise relevant event onClick
        if(scopeObj.onClickNewTransfer) scopeObj.onClickNewTransfer();
      };
    },

  };
});