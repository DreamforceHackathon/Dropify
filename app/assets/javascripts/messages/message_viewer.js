Dropify.MessageViewer = function(message){
  this.message = message
  };

Dropify.MessageViewer.prototype = {
  showMessage: function() {
    var template = $('#messageTpl').html();
    var myShit = Mustache.to_html(template, this.message);
    $('#messageArea').html(myShit)
    $("#messageArea").slideDown();
    $("#message-close").on("click", function(e){
      e.preventDefault();
      $("#messageArea").slideUp();
      })
    }    
  }