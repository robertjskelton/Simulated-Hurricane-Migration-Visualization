var cane_layer = null;

var hurricane_icon = L.icon({
    iconUrl: 'favicon.png',
    iconSize: [50, 50]
});

function setupMap() { 
    var latlng = new L.LatLng(31.4, -88.7);
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



    map.on('click', function(e) {

        //alert(e.latlng.lat);
        if (cane_layer != null) {
            map.removeLayer(cane_layer);
        }
        
        cane_layer = L.marker(e.latlng, {icon: hurricane_icon}).addTo(map);
        addHurricaneCats(e.latlng);

    });



    // cities moved to
    var Auburn = L.circle([32.6, -85.5], 28000, {
        color: 'orange',
        fillColor: 'blue',
        fillOpacity: 0.5
    }).addTo(map);
    Auburn.bindPopup("Auburn Population<br>2000: 46,245 <br> 2012: 56,908");

    var Birmingham = L.circle([33.5, -86.8], 20000, {
        color: 'green',
        fillColor: 'gold',
        fillOpacity: 0.5
    }).addTo(map);

    var Atlanta = L.circle([33.8, -84.4], 25000, {
        color: 'red',
        fillColor: 'black',
        fillOpacity: 0.5
    }).addTo(map);

    var Dallas = L.circle([32.8, -96.8], 90000, {
        color: 'white',
        fillColor: 'blue',
        fillOpacity: 0.5
    }).addTo(map);

    var SanAntonio = L.circle([29.4, -98.5], 25000, {
        color: 'black',
        fillColor: 'white',
        fillOpacity: 0.5
    }).addTo(map);

    var Montgomery = L.circle([32.4, -86.3], 19000, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
    }).addTo(map);

    var LittleRock = L.circle([34.7, -92.3], 22000, {
        color: 'red',
        fillColor: 'white',
        fillOpacity: 0.5
    }).addTo(map);

    var Nashville = L.circle([36.2, -86.8], 35000, {
        color: 'black',
        fillColor: 'gold',
        fillOpacity: 0.5
    }).addTo(map);

    var Chattanooga = L.circle([35, -85.3], 29000, {
        color: 'gold',
        fillColor: 'navy',
        fillOpacity: 0.5
    }).addTo(map);

    var Hunstville = L.circle([34.7, -86.6], 22000, {
        color: 'red',
        fillColor: 'blue',
        fillOpacity: 0.5
    }).addTo(map);

    var Hunstville = L.circle([35.2, -80.8], 41000, {
        color: 'blue',
        fillColor: 'black',
        fillOpacity: 0.5
    }).addTo(map);

// overwrite all previous cities with new city sizes
function addHuntsville(sizeIn) {
    var Hunstville = L.circle([34.7, -86.6], sizeIn, {
        color: 'red',
        fillColor: 'blue',
        fillOpacity: 0.5
    }).addTo(map);
}

function addChattanooga(sizeIn) {
  var Chattanooga = L.circle([35, -85.3], sizeIn, {
    color: 'gold',
    fillColor: 'navy',
    fillOpacity: 0.5
}).addTo(map);  
}

function addNashville(sizeIn) {
   var Nashville = L.circle([36.2, -86.8], sizeIn, {
    color: 'black',
    fillColor: 'gold',
    fillOpacity: 0.5
}).addTo(map);
}

function addLittleRock(sizeIn) {
    var LittleRock = L.circle([34.7, -92.3], sizeIn, {
        color: 'red',
        fillColor: 'white',
        fillOpacity: 0.5
    }).addTo(map);
}

function addMontgomery(sizeIn) {
    var Montgomery = L.circle([32.4, -86.3], sizeIn, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
    }).addTo(map);
}

function addSanAntonio(sizeIn) {
   var SanAntonio = L.circle([29.4, -98.5], sizeIn, {
    color: 'black',
    fillColor: 'white',
    fillOpacity: 0.5
}).addTo(map);
}

function addDallas(sizeIn) {
    var Dallas = L.circle([32.8, -96.8], sizeIn, {
        color: 'white',
        fillColor: 'blue',
        fillOpacity: 0.5
    }).addTo(map);
}

function addAtlanta(sizeIn) {
  var Atlanta = L.circle([33.8, -84.4], sizeIn, {
    color: 'red',
    fillColor: 'black',
    fillOpacity: 0.5
}).addTo(map);
}

function addBirmingham(sizeIn) {
    var Birmingham = L.circle([33.5, -86.8], sizeIn, {
        color: 'green',
        fillColor: 'gold',
        fillOpacity: 0.5
    }).addTo(map);
}
function addAuburn(sizeIn) {
  var Auburn = L.circle([32.6, -85.5], sizeIn, {
    color: 'orange',
    fillColor: 'blue',
    fillOpacity: 0.5
}).addTo(map);
}

function addCharlotte(sizeIn) {
   var Nashville = L.circle([35.2, -80.8], sizeIn, {
    color: 'blue',
    fillColor: 'black',
    fillOpacity: 0.5
}).addTo(map);
}

    Houston.on('click', function(e) {
       //get rid of old map
       map.remove();
       //$('#map').html('');

        // add the same map, new
        var latlng = new L.LatLng(31.4, -88.7);
        var map2 = L.map('map2').setView(latlng, 6);

        L.tileLayer('http://{s}.tile.cloudmade.com/42d89a292e284a7eb4f4e3beed8d1b25/997/256/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
            maxZoom: 18
        }).addTo(map2);

        addHuntsville(10000);
        addChattanooga(10000);
        addNashville(12000);
        addLittleRock(40000);
        addMontgomery(18000);
        addSanAntonio(28000);
        addDallas(6000);
        addAtlanta(10000);
        addBirmingham(12000);
        addAuburn(12000);
        addCharlotte(25000);

        // add old cities
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
    });

L.control.mousePosition().addTo(map);

/*
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
                        //alert(layer.getLatLngs());

                        //alert(layer.getLatLngs().length);
                        addHurricaneCats(layer.getLatLngs().length);
                    }
                    drawnItems.addLayer(layer);
                });*/
}

/*function addHurricaneCats(latlng_in) {
    var newHtml = '';
    newHtml += '<p>Now choose what Category hurricane to simulate, and enter in a radius of the hurricane in km, then click submit.'
    + '<br><br>Or click refresh to reset the map.<br><br></p>';
    newHtml += "<p>Latitude: " + latlng_in.lat + "<br />Longitude: " + latlng_in.lng + '</p>';
    newHtml += '<p><br>Hurricane Category:'
    + '<form>'
    + '<input type="radio" name="options" id="option" checked="" value="1"> 1&nbsp;'
    + '<input type="radio" name="options" id="option" value="2"> 2&nbsp;'
    + '<input type="radio" name="options" id="option" value="3"> 3&nbsp;'
    + '<input type="radio" name="options" id="option" value="4"> 4&nbsp;'
    + '<input type="radio" name="options" id="option" value="5"> 5&nbsp;'
    + '</form>'
    + '</p>';
    newHtml += '<p><br>Radius of Hurricane in km:<div>'
    + '<input type="text" id="rad">'
    + '</div>'
    + '</p>'
    + '<button type="submit" class="btn btn-primary" onClick="doWork()">Submit</button> '  // submit button
    + '<button TYPE="button" class="btn btn-primary" onClick="window.location.reload()">Reset</button>'; // refresh button
    $('#hurricane-categories').empty().html(newHtml);
    


}

function doWork() {
    // do initial checks
    //alert($('input:radio[name=options]:checked').val());
    
    if (isNaN($('#rad').val()) || $('#rad').val() == '') {
        alert("Please enter an integer value for radius.");
        return -1;
    }
}
*/
