$(function() {

    var date;

    $("#query").click(function() {
        $("input:checkbox:checked").each(   
          function() {
            var layer = addLayer($(this).val(), date);
            layer.addTo(earth);
    }
);
    });

    $("#datepicker").datepicker({
        dateFormat: "yy-mm-dd",
        onSelect: function(dateText) {
            date = dateText;
            //console.log(dateText);
        }
    });

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



    /*var options = {color: '#ff0', opacity: 1, fillColor: '#f00', fillOpacity: 0.1, weight: 2};
    var polygonB = WE.polygon([[50, 3], [51, 2.5], [50.5, 4.5]], options).addTo(earth);
    

    var showInfo = function(e) {
   alert(e.latitude + ', ' + e.longitude);
   alert('at ' + e.screenX + ', ' + e.screenY);
 }
 earth.on('click', showInfo);*/


    

});