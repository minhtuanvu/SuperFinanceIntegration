define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    
    preShowChangePassword: function(){
      this.setTextAndSkinFromProperties();
      this.resetUI();
      this.setFlowActions();     
    },

    setFlowActions: function(){
      this.view.flxBack.onClick = function(){
        const ntf = new kony.mvc.Navigation(kony.application.getPreviousForm().id);
        ntf.navigate();
      };
      this.view.btnCancel.onClick = function(){
        const ntf = new kony.mvc.Navigation(kony.application.getPreviousForm().id);
        ntf.navigate();
      };
    },

    resetUI: function(){
      this.view.flxMainContainer.setVisibility(true);
      this.view.flxSuccessContainer.setVisibility(false);
    },

    getStringFromi18n: function(stringValue){
      return  kony.i18n.getLocalizedString(stringValue) ? kony.i18n.getLocalizedString(stringValue) : stringValue;
    },

    setTextAndSkinFromProperties: function(){  
    },
  };
});