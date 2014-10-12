$(document).ready(function() {
  var bindCreateNewPhoto = function() {
    $('body').on('click', '#footer_photo', function(e){
      e.preventDefault()
      console.log("sup")
      $('#new_picture').slideDown("slow")
    })

    $('body').on('click', '#create_picture_cancel', function(e){
      e.preventDefault()
      $('#new_picture').slideUp()
      // $('#drop_message_button').slideDown()
    })
  }

  bindCreateNewPhoto()
})