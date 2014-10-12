Dropify.MessageForm = function(contentFieldSelector, submitSelector, cancelSelector, messageHandler) {
  this.$contentField = $(contentFieldSelector);
  this.messageHandler = messageHandler;
  this.bindEventListeners(submitSelector, cancelSelector);
};

Dropify.MessageForm.prototype = {
  bindEventListeners: function(submitSelector, cancelSelector) {
    $('body').on("click", submitSelector, this.handleSubmitClick.bind(this));
    $('body').on("click", cancelSelector, this.handleCancelClick.bind(this));
  },
  handleSubmitClick: function(evt) {
    evt.preventDefault();
    $('#new_message').slideUp();
    $('#drop_message_button').slideDown();

    this.messageHandler.createMessage(this.getContentText());
    this.$contentField.val("")
    $('#new_picture').slideDown("slow")
  },
  handleCancelClick: function(evt) {
    evt.preventDefault();
    $('#new_message').slideUp();
    $('#drop_message_button').slideDown();
  },
  getContentText: function() {
    return this.$contentField.val();
  }
};