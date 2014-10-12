Dropify.MessageHandler = function(map) {
  this.map = map;

  this.messages = []
  this.getMessages()
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
    }.bind(this))
  }
}


