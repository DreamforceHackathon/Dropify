$(document).ready(function() {
  Dropify.API = {
    getMessages: function() {
      return new Promise(function(success, error) {
        $.ajax({
          url: '/messages',
          type: 'GET',
          context: this
        }).done(function(jsonOfMessages) {
          success(jsonOfMessages);
        })
      })
    },

    createMessage: function(message) {
      return new Promise(function(success, error) {
        $.ajax({
          url: '/messages',
          type: 'POST',
          data: {message: message}
        }).done(function(jsonMessage) {
          success(jsonMessage);
        })
      })
    }
  }
});
