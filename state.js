var EventEmitter = require('events');
var util = require('util');

util.inherits(ScrollState, EventEmitter);

function ScrollState() {
    if (!(this instanceof ScrollState)) return new ScrollState();
	EventEmitter.call(this);
	this.section = null;
	this.setMaxListeners(20);
}

ScrollState.prototype.setSection = function(section) {
	this.section = section;
	this.emit('section', section);
};

module.exports = new ScrollState();
