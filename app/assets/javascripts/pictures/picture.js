$(document).ready(function() {
  var bindPictureSaveEvent = function() {

    $('body').on("ajax:success", "#new_picture", function(e, data){
      // $('.photo_option').slideUp()
      $('#photo_preview_div img').slideDown()
    })
  }
  bindPictureSaveEvent()
})