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
    if (!this._paused) {
        this.section = section;
        this.emit('section', section);
    }
};

ScrollState.prototype.pause = function() {
    this._paused = true;
};

ScrollState.prototype.continue = function() {
    this._paused = false;
};

module.exports = new ScrollState();
