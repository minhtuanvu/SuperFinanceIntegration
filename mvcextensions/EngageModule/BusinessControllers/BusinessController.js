define([], function () {
  function Engage_BusinessController() {
    kony.mvc.Business.Controller.call(this);
  }
  inheritsFrom(Engage_BusinessController, kony.mvc.Business.Controller);
  Engage_BusinessController.prototype.initializeBusinessController = function() { };
  Engage_BusinessController.prototype.execute = function(command) {
    kony.mvc.Business.Controller.prototype.execute.call(this, command);
  };
  return Engage_BusinessController;
});