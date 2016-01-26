var React = require('react');
var scrollState = require('./state.js');

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
    }

});
