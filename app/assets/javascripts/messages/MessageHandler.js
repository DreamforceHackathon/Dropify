MessageHandler = {
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
      type: 'GET'
    }).done(function(jsonOfMessages) {
      console.log(jsonOfMessages)
    })
  }
}

jsonStubOfMessages = [{content: "Hello", latitude: 37, longitude: 122}, {content: "Yo", latitude: 40, longitude: 150}, {content: "Sup", latitude: 30, longitude: 120}]
MessageHandler.getMessages()
