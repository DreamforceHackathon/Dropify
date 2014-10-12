Dropify.Toolbar = function(toolbarSelector, map) {
  this.$toolbar = $(toolbarSelector);
  this.bindEventListeners();
  this.map = map;
  this.setActiveButton("#map_button");
}

Dropify.Toolbar.prototype = {
  bindEventListeners: function() {
    this.$toolbar.on('click', '#map_button', this.handleMapButtonClick.bind(this));
    this.$toolbar.on('click', '#drop_message_button', this.handleDropMessageClick.bind(this));
    this.$toolbar.on('click', '#user_profile_button', this.handleProfileClick.bind(this))
    this.$toolbar.on('click', '#drop_advert_button', this.handleAdvertClick.bind(this));
  },
  handleProfileClick: function(evt){
    this.setActiveButton("#user_profile_button")
    document.body.addEventListener("touchmove", this.blockTouchMove, false);
    document.location.href='/user' 
  },
  handleMapButtonClick: function(evt) {
    evt.preventDefault();
    this.map.setExploreMode();
    this.setActiveButton("#map_button");
  },

  handleDropMessageClick: function(evt) {
    evt.preventDefault();
    $('#new_message').slideDown("slow");
    $('#new_advert').slideUp();
    this.setActiveButton("#drop_message_button");
  },

  handleAdvertClick: function(evt) {
    evt.preventDefault();
    this.map.setAdvertMode();
    $('#new_message').slideUp();
    this.setActiveButton("#drop_advert_button");
  },
  setActiveButton: function(buttonSelector) {
    $("footer span").removeClass("active");
    $(buttonSelector).addClass("active");
  }
};
