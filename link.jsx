var React = require('react');
var scrollState = require('./state.js');

module.exports = React.createClass({

    propTypes: {
        name: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            <a id={this.props.id} onClick={this.handleClick} href={'#'+this.props.name}>
                {this.props.children}
            </a>
        );
    },

    handleClick: function(event) {
        event.preventDefault();
        scrollState.setSection(this.props.name);
    }

});
