if (annyang) {

  var commands = {
    'humedad': function() {
      console.log('humedad');
      var layer = addLayer('MODIS_Terra_NDVI_8Day', '2018-10-10');
      layer.addTo(earth);
    }
  }

  // Add our commands to annyang
  annyang.setLanguage('es-ES');
  annyang.addCommands(commands);
  //annyang.debug();

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}