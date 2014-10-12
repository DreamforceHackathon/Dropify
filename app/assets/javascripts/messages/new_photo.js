$(document).ready(function() {
  var bindCreateNewPhoto = function() {
    $('body').on('click', '#footer_photo', function(e){
      e.preventDefault()
      $('#new_photo').slideDown("slow")
    })

    $('body').on('click', '#create_photo_cancel', function(e){
      e.preventDefault()
      $('#new_photo').slideUp()
      $('#drop_message_button').slideDown()
    })
  }

  bindCreateNewPhoto()
})