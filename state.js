var scrollToElement = require('scroll-to-element');
var EventEmitter = require('events');
var util = require('util');

util.inherits(ScrollState, EventEmitter);

var DURATION = 500;

function ScrollState() {
    if (!(this instanceof ScrollState)) return new ScrollState();
    EventEmitter.call(this);
    this.section = null;
    this._processing = false;
    this._processingTimeoutId = null;
    this.setMaxListeners(20);
}

ScrollState.prototype.detectSection = function(section) {
    if (!this._processing) {
        this.section = section;
        this.emit('section', section);
    }
};

ScrollState.prototype.setSection = function(section) {
        var self = this;
        this.section = section;
        this.emit('section', section);
        scrollToElement('#'+section, {
            offset: 0,
            ease: 'inOutCirc',
            duration: DURATION
        });
        this._processing = true;
        clearTimeout(this._processingTimeoutId);
        this._processingTimeoutId = setTimeout(function() {
            self._processing = false;
            this._processingTimeoutId = null;
        }, DURATION+100);

};

module.exports = new ScrollState();
