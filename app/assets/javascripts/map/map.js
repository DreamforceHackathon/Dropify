Dropify.Map = function(mapSelector) {
	var mapOptions = {
		center: { lat: 37, lng: -122},
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
		this.setupGeolocation(5000);
		this.blockTouchEvents();
	},
	blockTouchEvents: function() {
		document.body.addEventListener("touchmove", this.blockTouchMove, true);
		document.ontouchmove = function(e){ 
    	e.preventDefault(); 
		}	
	},
	blockTouchMove: function(evt) {
		if (evt.touches.length > 1) {
			evt.preventDefault()
		}

		return false;
	},
	setupGeolocation: function(interval) {
		this.centerOnLocation();
		setInterval(this.centerOnLocation.bind(this), interval);
	},
	centerOnLocation: function() {
		this.getLocation().then(function(pos) { this.map.setCenter(pos); }.bind(this));
	},
	handleNoGeolocation: function(errorFlag) {
		if (errorFlag) {
			alert('Error: The Geolocation service failed.');
		} else {
			alert('Error: Your browser doesn\'t support geolocation.');
		}
	},
	renderMarkers: function(markers) {
		for(var i = 0; i < markers.length; i++) {
			this.renderMarker(markers[i]);
		}
	},
	renderMarker: function(marker) {
		new google.maps.Marker({
			position: new google.maps.LatLng(marker.latitude, marker.longitude),
			map: this.map
		});
	},
	getLocation: function() {
		return new Promise(function(success, error) {
			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
					var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
					success(pos);
				}, function() {
					error(true);
				});
			}
			else {
	      // Browser doesn't support Geolocation
	      error(false);
	    }
	  });
	}
};