Dropify.Toolbar = function(toolbarSelector) {
  this.$toolbar = $(toolbarSelector);
  this.bindEventListeners();
}

Dropify.Toolbar.prototype = {
  bindEventListeners: function() {
    this.$toolbar.on('click', '#drop_message_button', this.handleDropMessageClick);
  },

  handleDropMessageClick: function(evt) {
    evt.preventDefault()
    $('#new_message').slideDown("slow")
  }
};
