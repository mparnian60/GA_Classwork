async function initMap() {
    console.log('Googlemap is ready to go');

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 1 //means show world
      });

      /*
      const marker = new google.maps.Marker({
        position: {lat: -37.808163434, lng: 144.957829502},
        map: map,
        title: 'Hello World!'
      });
      */

      const quakes = await getEarthQuakeData();
      drawQuakesToList(quakes);
      drawQuakesToMap(quakes, map);
      console.log(quakes);

}

function drawQuakesToMap(quakes, map) {

    let quakeCount = quakes.features.length;

    if( quakeCount >100){
        quakeCount = 100;
    }

    for( let i=0; i<quakeCount; i++){
        const quake = quakes.features[i];
        const gpsCoords = {
            lat: quake.geometry.coordinates[1],
            lng: quake.geometry.coordinates[0]
        // console.log(quake.properties.place);
        }

        const marker = new google.maps.Marker({
            position: {lat: gpsCoords.lat, lng: gpsCoords.lng},
            map: map,
            title: 'Hello World!',
            icon: {
                url: "./images/earthquake.png",
                scaledSize: new google.maps.Size(64,64)
            }
            
            
          });
    
    }
}

function drawQuakesToList(quakes) {

    let quakeCount = quakes.features.length;
        if( quakeCount >100){
            quakeCount = 100;
        }

        for( let i=0; i<quakeCount; i++){
            const quake = quakes.features[i];
            // console.log(quake.properties.place);

            const timeAgo = moment(quake.properties.time).fromNow();

            $("#quakeList").append(`<li class="list-group-item">M ${quake.properties.mag} - ${quake.properties.place} - ${timeAgo}</li>`);
        }

}

async function getEarthQuakeData() {
    
    const response = await $.ajax('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')
                                                                    .catch(e =>{ console.log(e)});

        return response;
        
        
        


}



// Jquery on ready, ok to use the DOM
$(()=>{

    // getEarthQuakeData();

    /*$.ajax('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')
        .then(response=>{
            // console.log(response);

            let quakeCount = response.features.length;
            if( quakeCount >100){
                quakeCount = 100;
            }

            for( let i=0; i<quakeCount; i++){
                const quake = response.features[i];
                // console.log(quake.properties.place);

                $("#quakeList").append(`<li class="list-group-item">M ${quake.properties.mag} - ${quake.properties.place}</li>`);
            }


        });*/

})