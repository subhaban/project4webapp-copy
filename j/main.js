
    /*===================================================
                      OSM  LAYER               
===================================================*/

var map = L.map('map').setView([40.91, -96.63], 4);
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);

/*===================================================
                      MARKER               
===================================================*/

// var singleMarker = L.marker([28.25255,83.97669]);
// singleMarker.addTo(map);
// var popup = singleMarker.bindPopup('This is a popup')
// popup.addTo(map);

/*===================================================
                     TILE LAYER               
===================================================*/

var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
subdomains: 'abcd',
	maxZoom: 19
});
CartoDB_DarkMatter.addTo(map);

// Google Map Layer

googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
 });
 googleStreets.addTo(map);

 // Satelite Layer
googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
   maxZoom: 20,
   subdomains:['mt0','mt1','mt2','mt3']
 });
googleSat.addTo(map);

var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
 attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
subdomains: 'abcd',
minZoom: 1,
maxZoom: 16,
ext: 'jpg'
});
Stamen_Watercolor.addTo(map);


/*===================================================
                      GEOJSON               
===================================================*/

var linedata = L.geoJSON(lineJSON).addTo(map);
var pointdata = L.geoJSON(pointJSON).addTo(map);
var nepalData = L.geoJSON(nepaldataa).addTo(map);
var polygondata = L.geoJSON(polygonJSON,{
    onEachFeature: function(feature,layer){
        layer.bindPopup('<b>This is a </b>' + feature.properties.name)
    },
    style:{
        fillColor: 'red',
        fillOpacity:1,
        color: 'green'
    }
}).addTo(map);

/*===================================================
                      LAYER CONTROL               
===================================================*/

var baseLayers = {
    "Satellite":googleSat,
    "Google Map":googleStreets,
    "Water Color":Stamen_Watercolor,
    "OpenStreetMap": osm,
};

// var overlays = {
//     "Marker": singleMarker,
//     "PointData":pointdata,
//     "LineData":linedata,
//     "PolygonData":polygondata
// };

var fl1 = new FlagIcon({
  iconUrl: 'i/flags/alabama-flag-icon-64.png'
}),
fl2 = new FlagIcon({
  iconUrl: 'i/flags/alaska-flag-icon-64.png'
}),
fl3 = new FlagIcon({
  iconUrl: 'i/flags/arizona-flag-icon-64.png'
}),
fl4 = new FlagIcon({
  iconUrl: 'i/flags/arkansas-flag-icon-64.png'
}),
fl5 = new FlagIcon({
  iconUrl: 'i/flags/california-flag-icon-64.png'
}),
fl6 = new FlagIcon({
  iconUrl: 'i/flags/colorado-flag-icon-64.png'
}),
fl7 = new FlagIcon({
  iconUrl: 'i/flags/connecticut-flag-icon-64.png'
});
fl8 = new FlagIcon({
iconUrl: 'i/flags/delaware-flag-icon-64.png'
});
fl9 = new FlagIcon({
iconUrl: 'i/flags/florida-flag-icon-64.png'
});
fl10 = new FlagIcon({
iconUrl: 'i/flags/georgia-flag-icon-64.png'
});
fl11 = new FlagIcon({
iconUrl: 'i/flags/hawaii-flag-icon-64.png'
});
fl12 = new FlagIcon({
iconUrl: 'i/flags/idaho-flag-icon-64.png'
});
fl13 = new FlagIcon({
iconUrl: 'i/flags/illinois-flag-icon-64.png'
});
fl14 = new FlagIcon({
iconUrl: 'i/flags/iowa-flag-icon-64.png'
});
fl15 = new FlagIcon({
iconUrl: 'i/flags/kansas-flag-icon-64.png'
});
fl16 = new FlagIcon({
iconUrl: 'i/flags/kentucky-flag-icon-64.png'
});
fl17 = new FlagIcon({
iconUrl: 'i/flags/louisiana-flag-icon-64.png'
});
fl18 = new FlagIcon({
iconUrl: 'i/flags/maine-flag-icon-64.png'
});
fl19 = new FlagIcon({
iconUrl: 'i/flags/maryland-flag-icon-64.png'
});
fl20 = new FlagIcon({
iconUrl: 'i/flags/i/flags/massachusetts-flag-icon-64.png'
});
fl21 = new FlagIcon({
iconUrl: 'i/flags/michigan-flag-icon-64.png'
});
fl22 = new FlagIcon({
iconUrl: 'i/flags/minnesota-flag-icon-64.png'
});

fl23 = new FlagIcon({
iconUrl: 'i/flags/missouri-flag-icon-64.png'
});
fl24 = new FlagIcon({
iconUrl: 'i/flags/montana-flag-icon-64.png'
});
fl25 = new FlagIcon({
iconUrl: 'i/flags/nebraska-flag-icon-64.png'
});
fl26 = new FlagIcon({
iconUrl: 'i/flags/nevada-flag-icon-64.png'
});
fl27 = new FlagIcon({
iconUrl: 'i/flags/new-hampshire-flag-icon-64.png'
});
fl28 = new FlagIcon({
iconUrl: 'i/flags/new-jersey-flag-icon-64.png'
});
fl29 = new FlagIcon({
iconUrl: 'i/flags/new-mexico-flag-icon-64.png'
});
fl30 = new FlagIcon({
iconUrl: 'i/flags/new-york-flag-icon-64.png'
});
fl31 = new FlagIcon({
iconUrl: 'i/flags/north-carolina-flag-icon-64.png'
});
fl32 = new FlagIcon({
iconUrl: 'i/flags/north-dakota-flag-icon-64.png'
});
fl33 = new FlagIcon({
iconUrl: 'i/flags/oklahoma-flag-icon-64.png'
});
fl34 = new FlagIcon({
iconUrl: 'i/flags/oregon-flag-icon-64.png'
});
fl35 = new FlagIcon({
iconUrl: 'i/flags/pennsylvania-flag-icon-64.png'
});



var fl1marker = L.marker([32.7504, -86.7503], {
icon: fl1
}).bindPopup('<h5>Alabama</h5>')
var fl2marker = L.marker([64.2008, -149.4937], {
icon: fl2
}).bindPopup('<h5>Alaska</h5>')
var fl3marker = L.marker([34.5003, -111.501], {
icon: fl3
}).bindPopup('<h5>Arizona</h5>');
var fl4marker = L.marker([42.0003, -93.5005], {
icon: fl4
}).bindPopup('<h5>Arkansas</h5>')
var fl5marker = L.marker([36.7783, -119.4179], {
icon: fl5
}).bindPopup('<h5>California</h5>')
var fl6marker = L.marker([39.7391667, -104.984167], {
icon: fl6
}).bindPopup('<h5>California</h5>');
var fl7marker = L.marker([41.767, -72.677], {
icon: fl7
}).bindPopup('<h5>California</h5>');;;
var fl8marker = L.marker([39.161921, -75.526755], {
icon: fl8
}).bindPopup('<h5>California</h5>')
var fl9marker = L.marker([28.7508, -82.5001], {
icon: fl9
}).bindPopup('<h5>California</h5>')
var fl10marker = L.marker([33.76, -84.39], {
icon: fl10
}).bindPopup('<h5>California</h5>')

var fl11marker = L.marker([20.7503, -156.5003], {
icon: fl11
}).bindPopup('<h5>California</h5>')
var fl12marker = L.marker([43.613739, -116.237651], {
icon: fl12
}).bindPopup('<h5>California</h5>')
var fl13marker = L.marker([40.6331, -89.3935], {
icon: fl13
})
var fl14marker = L.marker([41.590939, -93.620866], {
icon: fl14
})
var fl15marker = L.marker([39.0119, -98.4842], {
icon: fl15
})
var fl16marker = L.marker([38.197274,-84.86311], {
icon: fl16
})
var fl17marker = L.marker([31.0005, -92.004], {
icon: fl17
});
var fl18marker = L.marker([44.323535, -69.765261], {
icon: fl18
});
var fl19marker = L.marker([39.0004, -76.7501], {
icon: fl19
});
var fl20marker = L.marker([42.2352, -84.5467], {
icon: fl20
});
var fl21marker = L.marker([44.2503,-85.5003], {
icon: fl21
});
var fl22marker = L.marker([46.2502,-94.25003], {
icon: fl22
});
var fl23marker = L.marker([46.2502,-94.25003], {
icon: fl23
});
var fl24marker = L.marker([46.2502,-94.25003], {
icon: fl24
});
var fl25marker = L.marker([41.5003,-99.7507], {
icon: fl25
});
var fl26marker = L.marker([39.2502,-116.7512], {
icon: fl26
});
var fl27marker = L.marker([43.667,-71.4998], {
icon: fl27
});
var fl28marker = L.marker([40.1671,-74.49999], {
icon: fl28
});
var fl29marker = L.marker([34.5002,-106.0003], {
icon: fl29
});
var fl30marker = L.marker([40.7143,-74.0003], {
icon: fl30
});
var fl31marker = L.marker([35.5002,-80.003], {
icon: fl31
});
var fl32marker = L.marker([47.5003,-100.007], {
icon: fl32
});
var fl33marker = L.marker([40.2503,-83.002], {
icon: fl33
});
var fl34marker = L.marker([35.5502,-97.4003], {
icon: fl34
});
var fl35marker = L.marker([44.0001,-120.5014], {
icon: fl35
});




///----Point of Interest--////

var LeafletIcon = L.Icon.extend({
options: {
  iconSize: [30, 30],
  iconAnchor: [0, 0],
}
})

var poi1Icon = new LeafletIcon({
  iconUrl: 'i/poi/statue_of_Liberty.png'
}),
poi2Icon = new LeafletIcon({
  iconUrl: 'i/poi/mtrushmore.png'
}),
poi3Icon = new LeafletIcon({
  iconUrl: 'i/poi/grandcanyon.png'
}),
poi4Icon = new LeafletIcon({
  iconUrl: 'i/poi/niagra_2.png'
}),
poi5Icon = new LeafletIcon({
  iconUrl: 'i/poi/yellowstone.png'
}),
poi6Icon = new LeafletIcon({
  iconUrl: 'i/poi/hawaii.png'
}),
poi7Icon = new LeafletIcon({
  iconUrl: 'i/poi/utah.png'
}),
poi8Icon = new LeafletIcon({
  iconUrl: 'i/poi/goldengate.png'
})
poi9Icon = new LeafletIcon({     
  iconUrl: 'i/poi/disneyworld.png'
})
poi10Icon = new LeafletIcon({
  iconUrl: 'i/poi/alaska.png'
})
// '<a href="Web Page Adress Here"><h1> Test Title </h1></a><img src="Link to Image" width=100 height=100 />'

var p1Marker = L.marker([40.7128, -74.0060], {
icon: poi1Icon
}).bindPopup('<a href= https://www.nps.gov/stli/index.htm ><h4>Statue of Liberty,New York </h4></a><img src = i/poi/statue_of_Liberty.png width= 30>')
p2Marker = L.marker([43.8791, -103.4591], {
icon: poi2Icon
}).bindPopup(' <a href= https://www.nps.gov/moru/index.htm ><h4>Mt.Rushmore,South Dakota</h4></a> <img src = i/poi/mtrushmore.png width= 30> ')
p3Marker = L.marker([36.0544, -112.1401], {
icon: poi3Icon
}).bindPopup('<a href= https://www.nps.gov/grca/index.htm ><h4>Grand Canyon,Arizona</h4></a> <img src = i/poi/grandcanyon.png width= 30>')
p4Marker = L.marker([43.0962, -79.0377], {
icon: poi4Icon   
}).bindPopup('<a href= https://www.niagarafallsstatepark.com ><h3>Naigra Falls,NewYork</h3></a> <img src = i/poi/niagra_2.png width= 30>')
p5Marker = L.marker([44.4280, -110.5885], {
icon: poi5Icon
}).bindPopup('<a href= https://www.nps.gov/yell/index.htm ><h4>Yellowstone,Wyoming,Montana,Idaho</h4></a> <img src = i/poi/yellowstone.png width= 30>')
p6Marker = L.marker([20.798363, -156.331924], {
icon: poi6Icon
}).bindPopup('<a href= https://www.gohawaii.com ><h4>Maui,Hawaii</h4></a> <img src = i/poi/hawaii.png width= 30>')
p7Marker = L.marker([39.3210, -111.0937], {
icon: poi7Icon
}).bindPopup('<a href= https://www.nps.gov/arch/index.htm><h4>Arches National Park,Utah</h4></a> <img src = i/poi/utah.png width= 30>')
p8Marker = L.marker([37.7749,-122.4194], {
icon: poi8Icon
}).bindPopup('<a href= https://www.nps.gov/goga/index.htm ><h4>Golden Gate,San Fransisco</h4></a> <img src = i/poi/disneyworld.png width= 30>')
p9Marker = L.marker([28.3772, -81.5707], {
icon: poi9Icon
}).bindPopup('<a href= https://www.niagarafallsstatepark.com/><h4>Disney World,Florida</h4></a> <img src = i/poi/disneyworld.png width= 30 style:border:3px>')
p10Marker = L.marker([64.2008, -149.4937], {
icon: poi10Icon
}).bindPopup('<a href= https://www.alaska.org/advice/glaciers-in-alaska ><h4>Mendenhall Glacier,Alaska</h4></a> <img src = i/poi/alaska.png width= 30 >')


var ptMarker = L.layerGroup([p1Marker, p2Marker, p3Marker, p4Marker, p5Marker, p6Marker, p7Marker,p8Marker,p9Marker,p10Marker])

var stateFlags = L.layerGroup([fl1marker, fl2marker, fl3marker, fl4marker, fl5marker, fl6marker, fl7marker, fl8marker, fl9marker,fl11marker,fl12marker,fl13marker,fl14marker,fl15marker,fl16marker,fl17marker,fl18marker,fl19marker,fl20marker,
fl21marker,fl22marker,fl23marker,fl24marker,fl25marker,fl26marker,fl27marker,fl28marker,fl29marker,fl30marker,fl31marker,fl32marker,fl33marker,fl34marker,fl35marker,])
//fl36marker,fl37marker,fl38marker,fl39marker,fl40marker,fl41marker,fl42marker,fl43marker,fl44marker,fl45marker,fl46marker,fl47marker,fl48marker,fl49marker,fl50marker,]);


// L.control.layers(baseLayers, overlays).addTo(map);
var overlayMaps = {
"Point of Interest": ptMarker,
"State Flags": stateFlags,
};

//L.control.layers(baseMaps, overlayMaps).addTo(map);*/

L.control.layers(baseLayers, overlayMaps).addTo(map);



// L.control.layers(baseLayers, overlays).addTo(map);



/*===================================================
                      SEARCH BUTTON               
===================================================*/

L.Control.geocoder().addTo(map);


/*===================================================
                      Choropleth Map               
===================================================*/

L.geoJSON(statesData).addTo(map);


function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

L.geoJson(statesData, {style: style}).addTo(map);

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

var geojson;
// ... our listeners
geojson = L.geoJson(statesData);

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>US Population Density</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
        : 'Hover over a state');
};

info.addTo(map);

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 20, 50, 100, 200, 500, 1000],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);


///////////////////////////////////////////////////////////////////////////////////////////////////////
const apiKey = 'eb380ce293c80acb396c9d71258f3d32';

// add marker with popup
async function addMarkers() {
    removeMarkers();
  
    var states = await fetchStates();
  
    for (var i = 0; i < states.length; i++) {
  
      var weatherResult = await fetchWeather(apiKey, states[i].state_name);
  
      var Icon = L.Icon.extend({
        options: {
          shadowUrl: "http://leafletjs.com/examples/custom-icons/leaf-shadow.png",
          iconSize: [30, 85],
          shadowSize: [50, 64],
          iconAnchor: [22, 94],
          shadowAnchor: [4, 62],
          popupAnchor: [-3, -76]
        }
      }),
        loc = [weatherResult.coord.lat, weatherResult.coord.lon],
        html = "<b>usr " + i + "</b><br/>tweet " + i,
        marker = L.marker(loc, {
          icon: new Icon({
            iconUrl:
              "http://leafletjs.com/examples/custom-icons/" +
                getRandomItemFromArray()
          }),
          // title: "tweet " + i,
          // title: states[i].state_name,
          // title: "Temp: " + weatherResult.main.temp + "°C",
          title: states[i].state_name + "/" + "Temp: " + weatherResult.main.temp + "°C",
          alt: "usr " + i,
          riseOnHover: true
        }).bindPopup(html /* ,{autoClose:false} */);
      marker.isRandom = true; // just to differenciate from any other markers available in the map
      // add just marker/ marker with popup/ just popup
      marker.addTo(map); // map.addLayer(marker); .openPopup();
    }
  }
  function removeMarkers() {
    map.eachLayer(function(layer) {
      if (
        layer instanceof L.Marker &&
        layer.isRandom /* ensure that we are not removing any other markers available in the map, see how the marker is added to the map */
      ) {
        layer.remove(); // layer.removeFrom(map); map.removeLayer(layer);
      }
    });
  }
  
  function getRandomIntBetween(max, min = 1) {
    // Math.random() returns 0<=random number<1
    // Math.floor() returns a int downward to its nearest int
    // 1 to max
    // Math.floor(Math.random() * max + 1);
    // min to max
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function getRandomItemFromArray(
    ar = ["leaf-green.png", "leaf-red.png", "leaf-orange.png"]
  ) {
    return ar[getRandomIntBetween(ar.length - 1, 0)];
  }
  
  async function fetchStates(){
    let headers = new Headers();
  
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('api-token','D5ZOKr2VHZcCJfb4_tCeHI5VTXpoP-fvoTLyIy8hGIrVqsgFZThkIO9x-dEnt2wvOIg');
    headers.append('user-email','arannya.karak@gmail.com');
        try {
            let response1 = await fetch(`https://www.universal-tutorial.com/api/getaccesstoken`, {
                // mode: 'no-cors',
                // credentials: 'include',
                method: 'GET',
                headers: headers
            });
            // let response = await fetch(`https://api.waqi.info/feed/${city}/?token=c3d00f04680ed6402e8567a9314b1df8073cae74`);
            let data1 = await response1.json();
            console.log("START");
            console.log(data1.auth_token);
            console.log("END");
        // } catch (err1) {
        //     //this only runs if an error occurs in above process
        //     console.log('Oops!', err1);
        // }
  
      ////////
  
      let tkn = "Bearer " + data1.auth_token;
      
      
     let headers2 = new Headers();
  
     headers2.append('Content-Type', 'application/json');
     headers2.append('Accept', 'application/json');
     headers2.append('Authorization', tkn);
        //   try {
              let response2 = await fetch(`https://www.universal-tutorial.com/api/states/United%20States`, {
                  method: 'GET',
                  headers: headers2
              });
              let data2 = await response2.json();
            //   console.log("START");
            //   console.log(data2);
            // for(let i = 0; i < data2.length; i++){
            //     console.log(data2[i].state_name);
            // }
            //   console.log("END");
              return data2;
          } catch (err1) {
              //this only runs if an error occurs in above process
              console.log('Oops!', err1);
          }
  
      /////
  }
  
  async function fetchWeather(key,city){
    
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
    let data = response.json();
    return data;
  }
  
