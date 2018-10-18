$(function() {

    var date = '2018-10-10';
    var enabledLayers = [];
    var enabledLayersNames = [];

    $("#datepicker").datepicker({
        dateFormat: "yy-mm-dd",
        onSelect: function(dateText) {
            var auxLayers = [];
           $.each(enabledLayers, function(index, layer){
                layer.removeFrom(earth);
                var new_layer = addLayer(enabledLayersNames[index], dateText);
                new_layer.addTo(earth);
                auxLayers.push(new_layer);
            });
           enabledLayers = auxLayers;
        }
    });

    $("#date_form").hide();

    var earth = new WE.map('earth_div');
    earth.setView([46.8011, 8.2266], 2);

    var toner = WE.tileLayer('http://tile.stamen.com/terrain/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.',
        opacity: 1.0
    });
    //toner.addTo(earth);

    var transport = WE.tileLayer('https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=ac727444022c46139db9de54fe80bee8', {
        opacity: 1.0
    });
    //transport.addTo(earth);

    var landscape = WE.tileLayer('https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=ac727444022c46139db9de54fe80bee8', {
        opacity: 1.0
    });
    //landscape.addTo(earth);

    var savement = WE.tileLayer('http://c.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        opacity: 1.0
    });
    savement.addTo(earth);



    $.getJSON("/fires", function(data) {
        var markers = [];
        var features = data.features;
        $.each(features, function(feature, val) {
            WE.marker([val.geometry.coordinates[1], val.geometry.coordinates[0]])
                .bindPopup('<p>' + val.properties.name + '</br>' + val.properties.value + '</p>', {
                    maxWidth: 120,
                    closeButton: true
                })
                .addTo(earth);
        });
    });

    if (annyang) {

        var commands = {
            '(muéstrame la) vegetacion': function() {
                var layer = addLayer('MODIS_Terra_NDVI_8Day', '2018-10-10');
                enabledLayers.push(layer);
                enabledLayersNames.push('MODIS_Terra_NDVI_8Day');
                layer.addTo(earth);
            },
            '(muéstrame la) temperatura': function() {
                var layer = addLayer('MODIS_Terra_Land_Surface_Temp_Day', '2018-10-10');
                enabledLayers.push(layer);
                enabledLayersNames.push('MODIS_Terra_Land_Surface_Temp_Day');
                layer.addTo(earth);
            },
            '(muéstrame la) temperatura oceánica': function() {
                var layer = addLayer('GHRSST_L4_MUR_Sea_Surface_Temperature', '2018-10-10');
                enabledLayers.push(layer);
                enabledLayersNames.push('GHRSST_L4_MUR_Sea_Surface_Temperature');
                layer.addTo(earth);
            },
            'cambiar fecha': function() {
                $("#date_form").show();
            }
        };

        // Add our commands to annyang
        annyang.setLanguage('es-ES');
        annyang.addCommands(commands);
        annyang.debug();

        annyang.addCallback('end', function() {
            console.log('There was an error!');
        });
        // Start listening. You can call this here, or attach this call to an event, button, etc.
        annyang.start({
            autoRestart: true,
            continuous: false
        });
    }
});



/*var options = {color: '#ff0', opacity: 1, fillColor: '#f00', fillOpacity: 0.1, weight: 2};
    var polygonB = WE.polygon([[50, 3], [51, 2.5], [50.5, 4.5]], options).addTo(earth);
    

    var showInfo = function(e) {
   alert(e.latitude + ', ' + e.longitude);
   alert('at ' + e.screenX + ', ' + e.screenY);
 }
 earth.on('click', showInfo);*/