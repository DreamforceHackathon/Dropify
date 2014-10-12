$(document).ready(function() {
  var bindCreateNewPhoto = function() {
    $('body').on('click', '#create_picture_cancel', function(e){
      e.preventDefault()
      $('#new_pic_buttons').slideUp()
      // $('#drop_message_button').slideDown()
    })

    $('body').on('click', '#new_picture_div', function() {
      console.log("clicked")
      $('#picture_field').trigger('click')
    })

    $('body').on('click', '#new_picture_cancel', function() {
      $('#create_picture_cancel').trigger('click')
    })
  }

  bindCreateNewPhoto()
})