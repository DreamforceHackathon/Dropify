var Dropify = {};

Dropify.App = function() {
	var map = new Dropify.Map("#map-canvas");
  var messageHandler = new Dropify.MessageHandler(map);
  // new Dropify.SendButtonHandler("#sendButton", messageHandler);
}