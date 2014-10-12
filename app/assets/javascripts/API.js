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
  }
}


Dropify.API.getMessages().then(function(serverData) { console.log(serverData); })

});
