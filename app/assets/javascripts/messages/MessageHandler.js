Dropify.MessageHandler = function(map) {
  this.map = map;
  this.messages = [];
  this.getMessages();
}

Dropify.MessageHandler.prototype = {
  createMessages: function(arrayOfMessages) {
    for (var i = 0; i < arrayOfMessages.length; i++) {
      this.messages.push(new Dropify.Message(arrayOfMessages[i]));
    }
  },

  getMessages: function() {
    Dropify.API.getMessages().then(function(serverData) {
      this.createMessages(serverData)
      this.map.renderMarkers(this.messages)
    }.bind(this));
  },

  createMessage: function(content) {
    this.map.getLocation().then(function(location) {
      var message = new Dropify.Message({content: content, latitude: location.k, longitude: location.B});
      Dropify.API.createMessage(message).then(this.handleCreateMessageResponse.bind(this));
    }.bind(this));
  },

  // createAdvert: function(title, url, content, latitude, longitude) {
  //   var message = new Dropify.Message({title: title, url: url, content: content, latitude: latitude, longitude: longitude});
  //   Dropify.API.createMessage(message).then(this.handleCreateMessageResponse.bind(this));
  // },

  handleCreateMessageResponse: function(serverData) {
    this.createMessages([serverData]);
    this.map.renderMarker(this.messages[this.messages.length - 1]);
  }
}


