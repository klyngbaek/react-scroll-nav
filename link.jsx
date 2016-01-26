var React = require('react');
var scrollState = require('./state.js');
var scrollToElement = require('scroll-to-element');

module.exports = React.createClass({

    propTypes: {
        name: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            <div>
                <a onClick={this.handleClick} href={'#'+this.props.name}>
                    {this.props.children}
                </a>
            </div>
        );
    },

    handleClick: function(event) {
        event.preventDefault();
        // with options
        scrollToElement('#'+this.props.name, {
            offset: 0,
            ease: 'inOutCirc',
            duration: 500
        });
        scrollState.setSection(this.props.name);
        scrollState.pause();
        setTimeout(function() {
            scrollState.continue();
        }, 1500);
    }

});
