let deckGL; // Declare a global variable for the Deck.gl instance

let lastTimestamp = 1600465000;
let existingData = []; // Store existing data
const EARTH_RADIUS_METERS = 6.3e6;

const COUNTRIES =
'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson'; //eslint-disable-line
const AIR_PORTS =
'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';

const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';

const backgroundLayers = [
    new deck.SimpleMeshLayer({
        id: 'earth-sphere',
        data: [0],
        mesh: new luma.SphereGeometry({radius: EARTH_RADIUS_METERS, nlat: 18, nlong: 36}),
        coordinateSystem: deck.COORDINATE_SYSTEM.CARTESIAN,
        getPosition: [0, 0, 0],
        getColor: [30, 80, 180]
      }),
      new deck.GeoJsonLayer({
        id: 'earth-land',
        data: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_land.geojson',
        // Styles
        stroked: false,
        filled: true,
        opacity: 0.1,
        getFillColor:[255, 255, 255]
      })
]

const backgroundLayers2 = [ 
    new deck.SolidPolygonLayer({
    id: 'background',
    data: [
      // prettier-ignore
      [[-180, 90], [0, 90], [180, 90], [180, -90], [0, -90], [-180, -90]]
    ],
    opacity: 1,
    getPolygon: d => d,
    stroked: true,
    filled: true,
    getFillColor: [5, 10, 40]
  }),
  new deck.GeoJsonLayer({
    id: 'base-map',
    data: COUNTRIES,
    // Styles
    stroked: true,
    filled: true,
    lineWidthMinPixels: 2,
    getLineColor: [5, 10, 40],
    getFillColor: [100, 100, 100]
  })
]

function initialize_deck_map(){
    // source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz

    const ambientLight = new deck.AmbientLight({
        color: [255, 255, 255],
        intensity: 0.5
    });
    const sunLight = new deck._SunLight({
        color: [255, 255, 255],
        intensity: 2.0,
        timestamp: lastTimestamp
    });

    const lightingEffect = new deck.LightingEffect({ambientLight, sunLight});

    deckGL = new deck.DeckGL({
      container: 'deck-container',
    //   views: [new deck._GlobeView()],
      effects: [lightingEffect],
    //   layers: [backgroundLayers],
      initialViewState: {
          latitude: 39,
          longitude: -104,
          zoom: 3,
          bearing: 0,
          pitch: 30,
      },
      controller: true,
      mapStyle: MAP_STYLE,
  });
}

function reset_layers() {
    existingData = [];
    deckGL.setProps({ layers: [] });

}

function update_flight_map(data) { 
    // console.log(data)
    const updatedData = mergeData(data);

    const flightlayer = new deck.ScatterplotLayer({
        id: 'flight-layer',
        data: updatedData,
        getPosition: d => [d.coordinates.longitude, d.coordinates.latitude],
        getRadius: 5,
        // getRadius: d => d.distance * 1000, // Adjust radius based on distance
        getFillColor: d => getColorBasedOnAltitude(d.altitude), // Blue color with transparency
        pickable: true,
        opacity: 0.8,
        radiusScale: 5,  // make the dots visible or darker background
        radiusMinPixels: 5, // make the dots visible or darker background
        radiusMaxPixels: 15,

        onClick: ({ object }) => {
            if (object) {
                alert(`You clicked on ${object.object_id}`);
            }
        }
    });

    // Get the current layers
    const currentLayers = deckGL.props.layers || [];

    // Filter out the layer to be replaced
    const updatedLayers = currentLayers.filter(layer => layer.id !== 'flight-layer');

    // Add the new layer
    updatedLayers.push(flightlayer);

    // Update the Deck.gl layers
    deckGL.setProps({ layers: updatedLayers });

}

function add_sp_layer(data, layer_settings) { 
    // const updatedData = mergeData(data);

    const sp_layer = new deck.ScatterplotLayer({
        id: data.id,
        data: data,
        getPosition: d => [d.coordinates.longitude, d.coordinates.latitude],
        getRadius: 5,
        // getRadius: d => d.distance * 1000, // Adjust radius based on distance
        getFillColor: d => layer_settings.color, // Blue color with transparency
        pickable: true,
        opacity: 0.8,
        radiusScale: 2,  // make the dots visible or darker background
        radiusMinPixels: 2, // make the dots visible or darker background
        radiusMaxPixels: 10,

        onClick: ({ object }) => {
            if (object) {
                alert(`You clicked on ${object.object_id}`);
            }
        }
    });

    // Get the current layers
    const currentLayers = deckGL.props.layers || [];

    // Filter out the layer to be replaced
    const updatedLayers = currentLayers.filter(layer => layer.id !== data.id);

    // Add the new layer
    updatedLayers.push(sp_layer);

    // Update the Deck.gl layers
    deckGL.setProps({ layers: updatedLayers });

}

function getColorBasedOnAltitude(altitude) {
    // Example: Map altitude to a gradient from blue (low) to red (high)
    const minAltitude = 0;
    const maxAltitude = 18000; // Adjust this based on your data range
    const normalized = Math.min(Math.max((altitude - minAltitude) / (maxAltitude - minAltitude), 0), 1);
    const red = Math.floor(normalized * 255);
    const blue = 255 - red;
    return [red, 0, blue];
}

function load_flight_data() {
    const url = '/data/flight_request'

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data)

        // data.forEach(obj => {
        //     console.log(`ID: ${obj.object_id}, Latitude: ${obj.coordinates.latitude}, Longitude: ${obj.coordinates.longitude}, Altitude: ${obj.altitude}`);
        // });

        update_flight_map(data)


    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function fetchUpdates() {
    lastTimestamp = lastTimestamp + 10
    fetch(`/data/get_flight_updates?last_timestamp=${lastTimestamp}`)
        .then(response => response.json())
        .then(data => {
            // data.forEach(obj => {
            //     console.log(`ID: ${obj.object_id}, Latitude: ${obj.coordinates.latitude}, Longitude: ${obj.coordinates.longitude}, Altitude: ${obj.altitude}`);
            // });
            
            update_flight_map(data)

        })
        .catch(error => console.error('Error fetching updates:', error));
}

function mergeData(newData) {
    // Create a new array by merging new data into existing data
    const updatedData = [...existingData]; // Copy existing data
    // console.log(updatedData)
    newData.forEach(newPoint => {
        const uniqueId = `${newPoint.timestamp}-${newPoint.object_id}`;
        const index = updatedData.findIndex(
            existingPoint => `${existingPoint.timestamp}-${existingPoint.object_id}` === uniqueId
        );
        if (index > -1) {
            updatedData[index] = { ...updatedData[index], ...newPoint }; // Update existing point
        } else {
            updatedData.push(newPoint); // Add new point
        }
    });
    existingData = [...updatedData];
    return updatedData; // Return the updated data array
}

function request_airport_data(key, latitude, longitude, radius){
    fetch('/data/airport_request', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            key: key,
            latitude: latitude,
            longitude: longitude,
            radius: radius
        }),
    })
    .then(response => response.json())
    .then(data => {
        // console.log('Fetched data:', data);
        // Update the map with the fetched data
        update_deck_map(data);

        const tableHeader = document.querySelector('#airport-table rux-table-header');
        tableHeader.innerHTML = '';
        const hr = document.createElement('rux-table-header-row');

        hr.innerHTML = `
            <rux-table-header-cell>Name</rux-table-header-cell>
            <rux-table-header-cell>Latitude</rux-table-header-cell>
            <rux-table-header-cell>Longitude</rux-table-header-cell>
        `;
        tableHeader.appendChild(hr);

        const tableBody = document.querySelector('#airport-table rux-table-body');
        tableBody.innerHTML = ''; // Clear any existing rows

        data.forEach(row => {
            const tr = document.createElement('rux-table-row');
            tr.innerHTML = `
                <rux-table-cell>${row.name}</rux-table-cell>
                <rux-table-cell>${row.coordinates.latitude}</rux-table-cell>
                <rux-table-cell>${row.coordinates.longitude}</rux-table-cell>
            `;
            tableBody.appendChild(tr);
            // console.log(row.name)

        });


    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

// setInterval(fetchUpdates, 1000);


export { initialize_deck_map };
export { update_flight_map };
export { request_airport_data };
export { add_sp_layer };
export { reset_layers };
