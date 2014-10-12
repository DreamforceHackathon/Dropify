Dropify.MessageForm = function(contentFieldSelector, submitSelector, cancelSelector, messageHandler) {
  this.$contentField = $(contentFieldSelector);
  this.messageHandler = messageHandler;
  this.bindEventListeners(submitSelector, cancelSelector);
};

Dropify.MessageForm.prototype = {
  bindEventListeners: function(submitSelector, cancelSelector) {
    $(submitSelector).on("click", this.handleSubmitClick.bind(this));
    $(cancelSelector).on("click", this.handleCancelClick.bind(this));
  },
  handleSubmitClick: function(evt) {
    evt.preventDefault();
    $('#new_message').slideUp();
    $('#drop_message_button').slideDown();

    this.messageHandler.createMessage(this.getContentText());
    this.$contentField.val("")
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