Dropify.Map = function(mapSelector) {
	var mapOptions = {
		center: { lat: 37.7833, lng: -122.4167},
		zoom: 18,
		disableDefaultUI: true,
		panControl: false,
		zoomControl: false,
		scaleControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		mapTypeControl: false,
		draggable:false
	};

	this.init(mapSelector, mapOptions);
}

Dropify.Map.prototype = {
	init: function(mapSelector, mapOptions) {
		this.map = new google.maps.Map($(mapSelector)[0],mapOptions);
		this.setupGeolocation(30000);
		this.blockTouchEvents();
	},
	blockTouchEvents: function() {
		document.body.addEventListener("touchmove", this.blockTouchMove, true);
	},
	blockTouchMove: function(evt) {
    if (evt.touches.length > 1) {
      evt.preventDefault()
    }

		return false;
	},
	setupGeolocation: function(interval) {
		this.findGeolocation();
		setInterval(this.findGeoLocation, interval);
	},
	findGeolocation: function() {
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var pos = new google.maps.LatLng(position.coords.latitude,
					position.coords.longitude);

				var infowindow = new google.maps.InfoWindow({
					map: this.map,
					position: pos,
					content: 'Cool! I found you.'
				});

				this.map.setCenter(pos);
			}.bind(this), function() {
				this.handleNoGeolocation(true);
			}.bind(this));
		}
		else {
      // Browser doesn't support Geolocation
      handleNoGeolocation(false);
    }
  },
  handleNoGeolocation: function(errorFlag) {
    if (errorFlag) {
      var content = 'Error: The Geolocation service failed.';
    } else {
      var content = 'Error: Your browser doesn\'t support geolocation.';
    }
  }
};