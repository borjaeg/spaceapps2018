if (annyang) {

  var commands = {
    'hola': function() {
      console.log('hola');
    }
  }

  // Add our commands to annyang
  annyang.setLanguage('es-ES');
  annyang.addCommands(commands);
  annyang.debug();

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}