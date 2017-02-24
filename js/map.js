function myMap() {
	var styleArray = [ 
		{
			featureType: 'all',
			stylers: [
				{ saturation: -80 }
			]
		},{
			featureType: 'road.arterial',
			elementType: 'geometry',
			stylers: [
				{ hue: '#00ffee' },
				{ saturation: 50 }
			]
		},
		{
			featureType: 'poi.business',
			elementType: 'labels',
			stylers: [
				{ visibility: 'off' }
			]
		}
	];

	var myCenter = new google.maps.LatLng(50.783444, 12.633888);
	var mapCanvas = document.getElementById("map");
	var mapOptions = {center: myCenter, zoom: 16, styles: styleArray};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({position:myCenter});
	marker.setMap(map);
}