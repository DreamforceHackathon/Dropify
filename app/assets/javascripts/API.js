$(document).ready(function() {
  Dropify.API = {
    getMessages: function() {
      return new Promise(function(success, error) {
        $.ajax({
          url: '/messages',
          type: 'GET',
          context: this
        }).done(function(jsonOfMessages) {
          success(jsonOfMessages)
        })
      })
    },

    createMessage: function(message) {
      return new Promise(function(success, error) {
        $.ajax({
          url: '/messages',
          type: 'POST',
          data: message
        }).done(function(jsonMessage) {
          success(jsonMessage)
        })
      })
    }
  }


// Dropify.API.getMessages().then(function(serverData) { console.log(serverData); })
// message = {content: "Message Test: Creation", latitude: 37, longitude: 122}
// Dropify.API.createMessage(message).then(function(serverData) { console.log(serverData); })

});
