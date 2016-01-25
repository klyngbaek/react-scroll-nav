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
    },

    componentDidLoad: function() {
        var anchorScroll = require("anchor-scroll");
        anchorScroll.init({
            updateUrl: true,
            offset: 0,
            ease: 'inOutCirc',
            duration: 500
            selector: "a[href*='#+"this.props.name"+']"
        });
    },

    componentWillUnload: function() {

    }

});
