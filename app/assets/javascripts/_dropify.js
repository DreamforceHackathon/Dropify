var Dropify = {};

Dropify.App = function() {
  var map = new Dropify.Map("#map-canvas");
  var messageHandler = new Dropify.MessageHandler(map);
  var messageForm = new Dropify.MessageForm("#create_message_input", "#create_message_submit", "#create_message_cancel", messageHandler)
  var adForm = new Dropify.AdForm("#create_advert_title", "#create_advert_url", "#create_advert_content", "#create_advert_submit", "#create_advert_cancel", messageHandler, map)
  map.adForm = adForm;
  new Dropify.Toolbar("#toolbar", map);
}