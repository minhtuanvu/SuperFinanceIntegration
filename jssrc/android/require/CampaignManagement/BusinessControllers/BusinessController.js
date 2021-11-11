define([], function() {
    function CampaignManagement() {
        kony.mvc.Business.Controller.call(this);
    }
    inheritsFrom(CampaignManagement, kony.mvc.Business.Controller);
    CampaignManagement.prototype.initializeBusinessController = function() {};
    CampaignManagement.prototype.execute = function(command) {
        kony.mvc.Business.Controller.prototype.execute.call(this, command);
    };
    return CampaignManagement;
});