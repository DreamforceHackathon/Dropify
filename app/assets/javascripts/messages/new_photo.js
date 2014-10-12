$(document).ready(function() {
  var bindCreateNewPhoto = function() {
    $('body').on('click', '#create_picture_cancel', function(e){
      e.preventDefault()
      $('#new_picture').slideUp()
      // $('#drop_message_button').slideDown()
    })
  }

  bindCreateNewPhoto()
})