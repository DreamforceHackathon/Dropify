$(document).ready(function() {
  var bindCreateNewMessage = function(button, event) {
    $(button).on(event, function(e){
      e.preventDefault()
      $.ajax({
        url: '/messages/new',
        method: 'get'
      })
      .done( function(data) {
        $('body').prepend(data)
        console.log("success")
      })
      .fail(function(){
        console.log("fail")
      })
    })
  }

  bindCreateNewMessage('#drop_message_button', 'click')
})