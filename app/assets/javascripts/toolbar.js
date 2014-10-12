Dropify.Toolbar = function(toolbarSelector) {
  this.$toolbar = $(toolbarSelector);
  this.bindEventListeners();
}

Dropify.Toolbar.prototype = {
  bindEventListeners: function() {
    this.$toolbar.on('click', '#drop_message_button', this.handleDropMessageClick);
    this.$toolbar.on('click', '#drop_advert_button', this.handleAdvertClick);
  },

  handleDropMessageClick: function(evt) {
    evt.preventDefault();
    $('#new_message').slideDown("slow");
  },

  handleAdvertClick: function(evt) {
    evt.preventDefault();
  }
};
