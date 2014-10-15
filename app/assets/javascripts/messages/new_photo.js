$(document).ready(function() {
  var bindCreateNewPhoto = function() {
    $('body').on('click touchstart', '#new_picture_div', function() {
      $('#picture_field').trigger('click')
    })

    $('body').on('click touchstart', '#new_picture_cancel', function() {
      $('#photo_preview_div').slideUp()
      $('#new_pic_buttons').slideUp()
      $.ajax({
        url: '/pictures/clear_all',
        method: 'GET'
      })
    })

    $('body').on('click touchstart', '#new_picture_submit', function() {
      $('#create_picture_submit').trigger('click')
    })

    $('body').on('click touchstart', '#new_picture_send', function() {
      $('#photo_preview_div').slideUp()
      $('#new_pic_buttons').slideUp()
    })

    $('#new_picture').on('change', function(){
      $('#new_picture_submit').trigger('click')
    })
  }

  bindCreateNewPhoto()
})