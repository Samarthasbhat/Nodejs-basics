var events = require('events');
var eventEmitter = new events.EventEmitter();

//create an event handler:
var myEventHandler = function() {
    console.log("I Hear a Scream!");
}

//Assign the event handler to an event 
eventEmitter.on('scream',myEventHandler);

//Fire the 'scream' event
eventEmitter.emit('scream');