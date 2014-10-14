$(document).ready(function() {
  var bindCreateNewPhoto = function() {
    $('body').on('click', '#create_picture_cancel', function(e){
      e.preventDefault()
      $('#new_pic_buttons').slideUp()
      $.ajax({
        url: '/pictures/clear_all',
        method: 'GET'
      })
    })

    $('body').on('click', '#new_picture_div', function() {
      $('#picture_field').trigger('click')
    })

    $('body').on('click', '#new_picture_cancel', function() {
      $('#create_picture_cancel').trigger('click')
    })

    $('body').on('click', '#new_picture_submit', function() {
      $('#create_picture_submit').trigger('click')
    })

    $('#new_picture').on('change', function(){
      $('#new_picture_div h3').html('Photo: ' + $('#picture_field').val())
      $('#new_picture_submit').trigger('click')
    })
  }

  bindCreateNewPhoto()
})