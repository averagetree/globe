import { initialize_deck_map } from './deck_map.js';
// import { request_airport_data } from './deck_map.js';
import { update_flight_map } from './deck_map.js';
import { add_sp_layer } from './deck_map.js';
import { reset_layers } from './deck_map.js';

import { socket } from './socket.js';
import { requestDataFromBackend } from './socket.js';
import { startServerStatusing } from './socket.js';
import { startStreaming } from './socket.js';
import { stopStreaming } from './socket.js';
import { requestLayer } from './socket.js';

import { onDataReceived } from './socket.js';
import { onStatusReceived } from './socket.js';
import { onLayerReceived } from './socket.js';

// Use the socket for other operations

// Call the function when the page loads
window.onload = () => {
    initialize_deck_map();
    start_server_statusing();
};

// Use the socket for other operations
// socket.emit('custom_event', { message: 'Hello from the frontend!' });

function temp(key, lat, long, rad){
    request_airport_data(key, lat, long, rad)
}

function add_new_stream(){
    const accordion_table = document.getElementById('stream_table');
    const accordion = document.createElement('div');

    accordion.style.marginBottom = '10px';
    accordion.innerHTML = `
        <rux-accordion-item>
            <div slot="label">New Stream</div>
            <p>Content 1</p>
        </rux-accordion-item>    
    `;

    accordion_table.appendChild(accordion);

}

function start_server_statusing() {
    startServerStatusing()
}

function start_flight_data_stream() {
    const streamId = 'mock-flights';  // You can dynamically generate this ID
    startStreaming(streamId);
    const statusIcon = document.getElementById('mock-flights-row-status');
    // const statusIconLabel = document.getElementById('stream_status_label');

    statusIcon.status = 'normal'
    // statusIconLabel.textContent = 'Normal'
}

function stop_flight_data_stream() {
    const streamId = 'mock-flights';  // You can dynamically generate this ID
    stopStreaming(streamId);
    const statusIcon = document.getElementById('mock-flights-row-status');
    // const statusIconLabel = document.getElementById('stream_status_label');

    statusIcon.status = 'standby'
    // statusIconLabel.textContent = 'Standby'

}

function request_airport_data() {
    const layerId = 'airport-data';
    const airport_request_latitude_input = document.getElementById('airport_request_latitude_input');
    const airport_request_longitude_input = document.getElementById('airport_request_longitude_input');
    const airport_request_radius_input = document.getElementById('airport_request_radius_input');

    const request_data = {
        id: layerId,
        type: 'airports',
        coordinates: {
            latitude: airport_request_latitude_input.value,
            longitude: airport_request_longitude_input.value
        },
        radius: airport_request_radius_input.value
    }

    requestLayer(request_data);

}

onDataReceived((data) => {
    // console.log('Data received in app.js:', data);
    update_flight_map(data)
    // Use the data to update your UI or map here
});

onStatusReceived((data) => {
    // console.log('Server status received:', data);
    
    data.forEach(row => {
        // console.log(row.stream_id)
        const status_id = row.stream_id + "-row-status"
        const serverIcon = document.getElementById(status_id);
        if (row.running == true) {
            serverIcon.status = 'normal'
        } else {
            serverIcon.status = 'standby'
        }

    });

});

onLayerReceived((data) => {
    console.log('Layer data received:', data);

    // if (data.type == "airports"){
        const settings = {
            color: [200, 0, 80, 180],
            pickable: true,
            opacity: 0.8,
            radiusScale: 5,
            radiusMin: 5,
            radiusMax: 15

        }

        add_sp_layer(data, settings)
        console.log('Layer added');

    // }

});

function get_db_data() {
    const url = '/data/airports'

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
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
            console.log(row.name)

        });
        update_deck_map(data)

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function test_backend() {
    // socket.emit('custom_event', { message: 'Hello from the frontend!' });
    requestDataFromBackend(1234567);

}

function reset_map_layers() {
    // socket.emit('custom_event', { message: 'Hello from the frontend!' });
    reset_layers();
}

// function initialize_deck_map(){
//       // source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
//     const COUNTRIES =
//     'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson'; //eslint-disable-line
//     const AIR_PORTS =
//     'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';

//     const ambientLight = new deck.AmbientLight({
//         color: [255, 255, 255],
//         intensity: 0.5
//       });
//     const sunLight = new deck._SunLight({
//         color: [255, 255, 255],
//         intensity: 2.0,
//         timestamp: lastTimestamp
//     });

//     const lightingEffect = new deck.LightingEffect({ambientLight, sunLight});

//     backgroundLayers = [
//         new deck.SimpleMeshLayer({
//             id: 'earth-sphere',
//             data: [0],
//             mesh: new luma.SphereGeometry({radius: EARTH_RADIUS_METERS, nlat: 18, nlong: 36}),
//             coordinateSystem: deck.COORDINATE_SYSTEM.CARTESIAN,
//             getPosition: [0, 0, 0],
//             getColor: [30, 80, 180]
//           }),
//           new deck.GeoJsonLayer({
//             id: 'earth-land',
//             data: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_land.geojson',
//             // Styles
//             stroked: false,
//             filled: true,
//             opacity: 0.1,
//             getFillColor:[255, 255, 255]
//           })
//     ]

//     backgroundLayers2 = [ 
//         new deck.SolidPolygonLayer({
//         id: 'background',
//         data: [
//           // prettier-ignore
//           [[-180, 90], [0, 90], [180, 90], [180, -90], [0, -90], [-180, -90]]
//         ],
//         opacity: 1,
//         getPolygon: d => d,
//         stroked: false,
//         filled: true,
//         getFillColor: [5, 10, 40]
//       }),
//       new deck.GeoJsonLayer({
//         id: 'base-map',
//         data: COUNTRIES,
//         // Styles
//         stroked: true,
//         filled: true,
//         lineWidthMinPixels: 2,
//         getLineColor: [5, 10, 40],
//         getFillColor: [100, 100, 100]
//       }) //,
//     //   new deck.GeoJsonLayer({
//     //     id: 'airports',
//     //     data: AIR_PORTS,
//     //     // Styles
//     //     filled: true,
//     //     pointRadiusMinPixels: 2,
//     //     pointRadiusScale: 2000,
//     //     getPointRadius: f => 11 - f.properties.scalerank,
//     //     getFillColor: [200, 0, 80, 180],
//     //     // Interactive props
//     //     pickable: true,
//     //     autoHighlight: true,
//     //     onClick: info =>
//     //       // eslint-disable-next-line
//     //       info.object && alert(`${info.object.properties.name} (${info.object.properties.abbrev})`)
//     //   }),
//     //   new deck.ArcLayer({
//     //     id: 'arcs',
//     //     data: AIR_PORTS,
//     //     dataTransform: d => d.features.filter(f => f.properties.scalerank < 4),
//     //     // Styles
//     //     getSourcePosition: f => [-0.4531566, 51.4709959], // London
//     //     getTargetPosition: f => f.geometry.coordinates,
//     //     getSourceColor: [0, 128, 200],
//     //     getTargetColor: [200, 0, 80],
//     //     getWidth: 1
//     //   })
//     ]


//     deckGL = new deck.DeckGL({
//         container: 'deck-container',
//         views: [new deck._GlobeView()],
//         effects: [lightingEffect],
//         layers: [backgroundLayers2],
//         initialViewState: {
//             latitude: 39,
//             longitude: -104,
//             zoom: 1,
//             bearing: 0,
//             pitch: 30,
//         },
//         controller: true,

//     // layers: [
//         // new deck.GeoJsonLayer({
//         //     id: 'base-map',
//         //     data: COUNTRIES,
//         //     // Styles
//         //     stroked: true,
//         //     filled: true,
//         //     lineWidthMinPixels: 2,
//         //     opacity: 0.4,
//         //     getLineColor: [60, 60, 60],
//         //     getFillColor: [200, 200, 200]
//         // }),
   
//         //,
//         // new deck.GeoJsonLayer({
//         //     id: 'airports',
//         //     data: AIR_PORTS,
//         //     // Styles
//         //     filled: true,
//         //     pointRadiusMinPixels: 2,
//         //     pointRadiusScale: 2000,
//         //     getPointRadius: f => (11 - f.properties.scalerank),
//         //     getFillColor: [200, 0, 80, 180],
//         //     // Interactive props
//         //     pickable: true,
//         //     autoHighlight: true,
//         //     onClick: info => info.object && alert(`${info.object.properties.name} (${info.object.properties.abbrev})`)
//         // }),
//         // new deck.ArcLayer({
//         //     id: 'arcs',
//         //     data: AIR_PORTS,
//         //     dataTransform: d => d.features.filter(f => f.properties.scalerank < 4),
//         //     // Styles
//         //     getSourcePosition: f => [-0.4531566,51.4709959], // London
//         //     getTargetPosition: f => f.geometry.coordinates,
//         //     getSourceColor: [0, 128, 200],
//         //     getTargetColor: [200, 0, 80],
//         //     getWidth: 1
//         // })
//     //]
//     });
// }

function update_deck_map(data) {
    const scatterplotLayer = new deck.ScatterplotLayer({
        id: 'scatterplot-layer',
        data: data,
        getPosition: d => [d.coordinates.longitude, d.coordinates.latitude],
        getRadius: 30,
        // getRadius: d => d.distance * 1000, // Adjust radius based on distance
        getFillColor: [0, 200, 200, 200], // Blue color with transparency
        pickable: true,
        opacity: 0.8,
        radiusScale: 5,  // make the dots visible or darker background
        radiusMinPixels: 5, // make the dots visible or darker background
        radiusMaxPixels: 15,
        // onHover: ({ object, x, y }) => {
        //     if (object) {
        //         const tooltip = document.getElementById('tooltip');
        //         tooltip.style.display = 'block';
        //         tooltip.style.left = `${x}px`;
        //         tooltip.style.top = `${y}px`;
        //         tooltip.innerHTML = `
        //             <strong>${object.name}</strong><br>
        //             Coordinates: (${object.latitude}, ${object.longitude})
        //         `;
        //     }
        // },
        onClick: ({ object }) => {
            if (object) {
                alert(`You clicked on ${object.name}`);
            }
        }
    });

    // Update the Deck.gl instance with the new layer
    // const currentLayers = deckGL.props.layers || [];
    // deckGL.setProps({ layers: [...currentLayers, scatterplotLayer] });

    // const updatedLayers = deckGL.props.layers.map(layer =>
    //     layer.id === 'scatterplot-layer' ? newUpdatedLayer : layer
    // );
    // deckGL.setProps({ layers: updatedLayers });

    // Get the current layers
    const currentLayers = deckGL.props.layers || [];

    // Filter out the layer to be replaced
    const updatedLayers = currentLayers.filter(layer => layer.id !== 'scatterplot-layer');

    // Add the new layer
    updatedLayers.push(scatterplotLayer);

    // Update the Deck.gl layers
    deckGL.setProps({ layers: updatedLayers });


    console.log('Updated layers:', deckGL.props.layers);
}

// function mergeData(newData) {
//     // Create a new array by merging new data into existing data
//     const updatedData = [...existingData]; // Copy existing data
//     // console.log(updatedData)
//     newData.forEach(newPoint => {
//         const uniqueId = `${newPoint.timestamp}-${newPoint.object_id}`;
//         const index = updatedData.findIndex(
//             existingPoint => `${existingPoint.timestamp}-${existingPoint.object_id}` === uniqueId
//         );
//         if (index > -1) {
//             updatedData[index] = { ...updatedData[index], ...newPoint }; // Update existing point
//         } else {
//             updatedData.push(newPoint); // Add new point
//         }
//     });
//     existingData = [...updatedData];
//     return updatedData; // Return the updated data array
// }

// function update_flight_map(data) { 
//     const updatedData = mergeData(data);

//     const flightlayer = new deck.ScatterplotLayer({
//         id: 'flight-layer',
//         data: updatedData,
//         getPosition: d => [d.coordinates.longitude, d.coordinates.latitude],
//         getRadius: 5,
//         // getRadius: d => d.distance * 1000, // Adjust radius based on distance
//         getFillColor: d => getColorBasedOnAltitude(d.altitude), // Blue color with transparency
//         pickable: true,
//         opacity: 0.8,
//         radiusScale: 5,  // make the dots visible or darker background
//         radiusMinPixels: 5, // make the dots visible or darker background
//         radiusMaxPixels: 15,

//         onClick: ({ object }) => {
//             if (object) {
//                 alert(`You clicked on ${object.object_id}`);
//             }
//         }
//     });

//     // Get the current layers
//     const currentLayers = deckGL.props.layers || [];

//     // Filter out the layer to be replaced
//     const updatedLayers = currentLayers.filter(layer => layer.id !== 'flight-layer');

//     // Add the new layer
//     updatedLayers.push(flightlayer);

//     // Update the Deck.gl layers
//     deckGL.setProps({ layers: updatedLayers });

//     // // Update only the scatterplot layer in the layers array
//     // const layers = deckGL.props.layers.filter(layer => layer.id !== 'flight-layer');
//     // currentLayers.push(flightlayer);

//     // // Set updated layers to Deck.gl
//     // deckGL.setProps({ currentLayers });

//     // Filter out the old scatterplot layer and add the new one
//     // const layers = deckGL.props.layers.filter(layer => layer.id !== 'flight-layer');
//     // layers.updatedLayers(flightlayer);

//     // Update Deck.gl with the new layers
//     // deckGL.setProps({ layers });

//     // console.log('Updated layers:', deckGL.props.layers);
// }

// function getColorBasedOnAltitude(altitude) {
//     // Example: Map altitude to a gradient from blue (low) to red (high)
//     const minAltitude = 0;
//     const maxAltitude = 15000; // Adjust this based on your data range
//     const normalized = Math.min(Math.max((altitude - minAltitude) / (maxAltitude - minAltitude), 0), 1);
//     const red = Math.floor(normalized * 255);
//     const blue = 255 - red;
//     return [red, 0, blue];
// }

// function load_flight_data() {
//     const url = '/data/flight_request'

//     fetch(url)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data)

//         // data.forEach(obj => {
//         //     console.log(`ID: ${obj.object_id}, Latitude: ${obj.coordinates.latitude}, Longitude: ${obj.coordinates.longitude}, Altitude: ${obj.altitude}`);
//         // });

//         update_flight_map(data)


//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });
// }

// function fetchUpdates() {
//     lastTimestamp = lastTimestamp + 10
//     fetch(`/data/get_flight_updates?last_timestamp=${lastTimestamp}`)
//         .then(response => response.json())
//         .then(data => {
//             // data.forEach(obj => {
//             //     console.log(`ID: ${obj.object_id}, Latitude: ${obj.coordinates.latitude}, Longitude: ${obj.coordinates.longitude}, Altitude: ${obj.altitude}`);
//             // });
            
//             update_flight_map(data)

//         })
//         .catch(error => console.error('Error fetching updates:', error));
// }

// setInterval(fetchUpdates, 1000);

// function updateFlightLayer(newData) {
//     // Merge new data into the existing data
//     newData.forEach(newPoint => {
//         const index = existingData.findIndex(
//             existingPoint => existingPoint.id === newPoint.id
//         );
//         if (index > -1) {
//             // Update existing point
//             existingData[index] = newPoint;
//         } else {
//             // Add new point
//             existingData.push(newPoint);
//         }
//     });

//     // Create a new ScatterplotLayer with updated data
//     flightlayer = new deck.ScatterplotLayer({
//         id: 'flight-layer',
//         data: existingData,
//         getPosition: d => [d.coordinates.longitude, d.coordinates.latitude],
//         getRadius: d => 100, // Radius in meters
//         getFillColor: d => [255, 0, 0], // Color of the points
//         pickable: true
//     });

//     // // Update Deck.gl layers
//     // deckGL.setProps({
//     //     layers: [flightlayer]
//     // });

//     // Get the current layers
//     const currentLayers = deckGL.props.layers || [];

//     // Filter out the layer to be replaced
//     const updatedLayers = currentLayers.filter(layer => layer.id !== 'flight-layer');

//     // Add the new layer
//     updatedLayers.push(flightlayer);

//     // Update the Deck.gl layers
//     deckGL.setProps({ layers: updatedLayers });


//     console.log('Updated layers:', deckGL.props.layers);
// }


// export { temp };
// export { test_backend };
window.temp = temp;
window.test_backend = test_backend;
window.reset_map_layers = reset_map_layers;
window.add_new_stream = add_new_stream;
window.start_flight_data_stream = start_flight_data_stream;
window.stop_flight_data_stream = stop_flight_data_stream;
window.request_airport_data = request_airport_data;
