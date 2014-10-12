$(document).ready(function() {
  var bindCreateNewComment = function() {
    $('body').on('click', '#comment_submit', function(e){
      e.preventDefault()
      $('#comment_input').slideDown()
      $('#comment_cancel').slideDown()
      $(this).addClass("active_comment_button")
    })

    $('body').on('click', '#comment_cancel', function(e){
      e.preventDefault()
      $('#comment_input').slideUp()
      $('#comment_cancel').slideUp()
      $('.active_comment_button').removeClass('active_comment_button')
      $('#drop_comment_button').slideDown()
    })

    $('body').on('click', ".active_comment_button", function(e) {
      e.preventDefault()
      commentContent = $('#comment_input').val()
      messageId = $('#message_id').text()
      if (commentContent != "") {
        $.ajax({
          url: '/comments',
          method: 'POST',
          data: {content: commentContent, message_id: messageId}
        })
        .done(function(data){
          $('#comment_input').slideUp()
          $('#comment_cancel').slideUp()
          $('.active_comment_button').removeClass('active_comment_button')
          $('.message_comments').append(data)
          var map = new Dropify.Map("#map-canvas")
          messageHandler = new Dropify.MessageHandler(map)
          messageHandler.getMessages()
        })
        .fail(function(){
          console.log("fail")
        })
      }
    })
  }

  bindCreateNewComment()
})