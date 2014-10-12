$(document).ready(function() {
  var bindUserProfileButton = function(){
    $('#footer_user_profile i').click(renderProfile)
  }

  var renderProfile = function(){
    document.body.addEventListener("touchmove", this.blockTouchMove, false);
    document.location.href='/user'
  }

  bindUserProfileButton();

});