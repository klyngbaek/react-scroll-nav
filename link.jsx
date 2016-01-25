var React = require('react');

module.exports = React.createClass({

    propTypes: {
        name: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            <div>
                <a href={'#'+this.props.name}>
                    {this.props.children}
                </a>
            </div>
        );
    }

});
