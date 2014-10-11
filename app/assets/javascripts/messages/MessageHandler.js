Dropify.MessageHandler = function(map) {
  this.map = map;

  this.getMessages()
}

Dropify.MessageHandler.prototype = {
  Message: function(args) {
    this.content = args.content;
    this.latitude = args.latitude;
    this.longitude = args.longitude;
  },

  messages: [],

  createMessages: function(arrayOfMessages) {
    for (var i = 0; i < arrayOfMessages.length; i++) {
      MessageHandler.messages.push(new MessageHandler.Message(arrayOfMessages[i]));
    }
  },

  getMessages: function() {
    $.ajax({
      url: '/messages',
      type: 'GET',
      context: this
    }).done(function(jsonOfMessages) {
      this.map.renderMessages(jsonOfMessages)
    })
  }
}


