var latlng = new L.LatLng(32.5977, -85.4808);
		var map = L.map('map').setView(latlng, 6);
			
		L.tileLayer('http://{s}.tile.cloudmade.com/42d89a292e284a7eb4f4e3beed8d1b25/997/256/{z}/{x}/{y}.png', {
		    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
		    maxZoom: 18
		}).addTo(map);
		// rjs points
		// cities moved from
    var Mobile = L.marker([30.7, -88]).addTo(map);
    var Orlando = L.marker([28.4, -81.3]).addTo(map);
    var Miami = L.marker([25.8, -80.2]).addTo(map);
    var Tampa = L.marker([27.9, -82.5]).addTo(map);
    var KeyWest = L.marker([24.5, -81.8]).addTo(map);
    var Biloxi = L.marker([30.4, -88.9]).addTo(map);
    var Savannah = L.marker([32, -81]).addTo(map);
    var Charleston = L.marker([32.8, -79.9]).addTo(map);
    var MyrtleBeach = L.marker([33.7, -78.9]).addTo(map);
    var PanamaCityBeach = L.marker([30.2, -85.8]).addTo(map);
    var Jacksonville = L.marker([30.3, -81.7]).addTo(map);
    var BatonRouge = L.marker([30.5, -91.1]).addTo(map);
    var CorpusChristi = L.marker([27.7, -97.4]).addTo(map);
    var Lafayette = L.marker([30.2, -92]).addTo(map);
    var Pensacola = L.marker([30.4, -87.2]).addTo(map);
    var Tallahassee = L.marker([30.5, -84.3]).addTo(map);
    var NewOrleans = L.marker([30, -90]).addTo(map);
    var Houston = L.marker([29.8, -95.4]).addTo(map);



    // cities moved to
    var Auburn = L.circle([32.6, -85.5], 15000, {
    	color: 'orange',
    	fillColor: 'blue',
    	fillOpacity: 0.5
    }).addTo(map);
    Auburn.bindPopup("Auburn Population<br>2000: 46,245 <br> 2012: 56,908");

    var Birmingham = L.circle([33.5, -86.8], 15000, {
    	color: 'green',
    	fillColor: 'gold',
    	fillOpacity: 0.5
    }).addTo(map);

    var Atlanta = L.circle([33.8, -84.4], 15000, {
    	color: 'red',
    	fillColor: 'black',
    	fillOpacity: 0.5
    }).addTo(map);

    var Dallas = L.circle([32.8, -96.8], 15000, {
    	color: 'white',
    	fillColor: 'blue',
    	fillOpacity: 0.5
    }).addTo(map);

    var SanAntonio = L.circle([29.4, -98.5], 15000, {
    	color: 'black',
    	fillColor: 'white',
    	fillOpacity: 0.5
    }).addTo(map);

    var Montgomery = L.circle([32.4, -86.3], 15000, {
    	color: 'red',
    	fillColor: '#f03',
    	fillOpacity: 0.5
    }).addTo(map);

    var LittleRock = L.circle([34.7, -92.3], 15000, {
    	color: 'red',
    	fillColor: 'white',
    	fillOpacity: 0.5
    }).addTo(map);

    var Nashville = L.circle([36.2, -86.8], 15000, {
    	color: 'black',
    	fillColor: 'gold',
    	fillOpacity: 0.5
    }).addTo(map);

    var Chattanooga = L.circle([35, -85.3], 15000, {
    	color: 'gold',
    	fillColor: 'navy',
    	fillOpacity: 0.5
    }).addTo(map);

    var Hunstville = L.circle([34.7, -86.6], 15000, {
    	color: 'red',
    	fillColor: 'blue',
    	fillOpacity: 0.5
    }).addTo(map);



















		L.control.mousePosition().addTo(map);

		// Initialize the FeatureGroup to store editable layers
		var drawnItems = new L.FeatureGroup();
		map.addLayer(drawnItems);

		// Initialize the draw control and pass it the FeatureGroup of editable layers
		var drawControl = new L.Control.Draw({
		    edit: {
		        featureGroup: drawnItems
		    },
		    draw: {
		    	polygon: false,
		    	rectangle: false,
		    	circle: false,
		    	marker: false
		    }
		});
		map.addControl(drawControl);

		map.on('draw:created', function (e) {
                        var type = e.layerType,
                                layer = e.layer;

                        if (type === 'polyline') {
                                alert(layer.getLatLngs());
                        }

                        drawnItems.addLayer(layer);
                });