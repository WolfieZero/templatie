// @codekit-prepend 'leaflet.js';

function Map(elementID, dLat, dLng) {

	this._map				= new L.Map(elementID);
	this._defaultLocation	= new L.LatLng(dLat, dLng);
	this._osm				= new L.TileLayer(
			'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
			{
				attribution:	'Data, imagery and map information provided by <a href="http://open.mapquest.co.uk" target="_blank">MapQuest</a>, <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>',
				maxZoom:		18,
				subdomains:		['otile1','otile2','otile3','otile4']
			}
		);

	this.init();

}


/*****************************************************************************/


Map.prototype.init = function() {

	// add the CloudMade layer to the map set the view to a given center and zoom
	if (this.findUser()) {
//		defaultLocation = new L.LatLng(window.userLat, window.userLng);
	}

	this._map.addLayer(this._osm).setView(this._defaultLocation, 10);

	// create a marker in the given location and add it to the map
	var marker = new L.Marker(new L.LatLng(51.5, -0.09));
	this._map.addLayer(marker);


};


/*****************************************************************************/


Map.prototype.findUser = function() {

	if (navigator.geolocation) {

		navigator.geolocation.getCurrentPosition(
			function(position) {

				updateUserLocation(position);

			}
		);

		updateUserLocation = function(position) {
			window.userLat = position.coords.latitude;
			window.userLng = position.coords.longitude;
		};

		return true;

	} else {
		dialogAlert({
			message: 'Your browser either doesn\'t support geo location or it\'s been blocked'
		});

		return false;
	}

};


/*****************************************************************************/


