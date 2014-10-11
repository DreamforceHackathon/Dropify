MessageFactory = (function() {
  return {
    createMessages: function(arrayOfMessages) {
      for (var i = 0; i < arrayOfMessages.length; i++) {
        console.log("sup Alisa")
        MessageStore.messages.push(new Message(arrayOfMessages[i]));
      }
    }
  }
})()