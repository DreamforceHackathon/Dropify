Dropify.AdForm = function(titleFieldSelector, urlFieldSelector, contentFieldSelector, submitSelector, cancelSelector, messageHandler, map) {
  this.map = map;
  this.$titleField = $(titleFieldSelector);
  this.$urlField = $(urlFieldSelector);
  this.$contentField = $(contentFieldSelector);
  this.messageHandler = messageHandler;
  this.bindEventListeners(submitSelector, cancelSelector);
};

Dropify.AdForm.prototype = {
  bindEventListeners: function(submitSelector, cancelSelector) {
    $(submitSelector).on("click", this.handleSubmitClick.bind(this));
    $(cancelSelector).on("click", this.handleCancelClick.bind(this));
  },
  handleSubmitClick: function(evt) {
    evt.preventDefault();
    $('#new_advert').slideUp();

    this.messageHandler.createAdvert(
      this.getTitleText(),
      this.getURLText(),
      this.getContentText(),
      this.getLatitudeText(),
      this.getLongitudeText()
    );
    this.$titleField.val("");
    this.$urlField.val("");
    this.$contentField.val("");

    this.map.setExploreMode();
  },
  handleCancelClick: function(evt) {
    evt.preventDefault();
    $('#new_advert').slideUp();
    this.map.setExploreMode();
  },
  getTitleText: function() {
    return this.$titleField.val();
  },
  getURLText: function() {
    return this.$urlField.val();
  },
  getContentText: function() {
    return this.$contentField.val();
  },
  getLatitudeText: function() {
    return $('#latitude').val();
  },
  getLongitudeText: function() {
    return $('#longitude').val();
  },
  show: function(latitude, longitude) {
    $('#new_advert').slideDown();
    $('#longitude').val(longitude);
    $('#latitude').val(latitude);
  }
};