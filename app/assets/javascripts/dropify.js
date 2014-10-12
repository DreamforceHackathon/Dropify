var Dropify = {};

Dropify.App = function() {

  var map = new Dropify.Map("#map-canvas");
  var messageHandler = new Dropify.MessageHandler(map);
  var messageForm = new Dropify.MessageForm("#create_message_input", "#create_message_submit", "#create_message_cancel", messageHandler)
  new Dropify.Toolbar("#toolbar");
}