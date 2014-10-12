$(document).ready(function() {
  var bindCreateNewMessage = function() {
    $('body').on('click', '#drop_message_button', function(e){
      e.preventDefault()
      $('#new_message').slideDown("slow")
    })

    $('body').on('click', '#create_message_cancel', function(e){
      e.preventDefault()
      $('#new_message').slideUp()
      $('#drop_message_button').slideDown()
    })
  }

  bindCreateNewMessage()
})