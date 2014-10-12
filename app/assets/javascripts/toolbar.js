Dropify.Toolbar = function(toolbarSelector, map) {
  this.$toolbar = $(toolbarSelector);
  this.bindEventListeners();
  this.map = map;
}

Dropify.Toolbar.prototype = {
  bindEventListeners: function() {
    this.$toolbar.on('click', '#map_button', this.handleMapButtonClick.bind(this));
    this.$toolbar.on('click', '#drop_message_button', this.handleDropMessageClick);
    this.$toolbar.on('click', '#drop_advert_button', this.handleAdvertClick.bind(this));
  },

  handleMapButtonClick: function(evt) {
    evt.preventDefault();
    this.map.setExploreMode();
  },

  handleDropMessageClick: function(evt) {
    evt.preventDefault();
    $('#new_message').slideDown("slow");
  },

  handleAdvertClick: function(evt) {
    evt.preventDefault();
    this.map.setAdvertMode();
  }
};
