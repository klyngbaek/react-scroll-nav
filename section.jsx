var React = require('react');
var scrollMonitor = require("scrollmonitor");
var scrollState = require('./state.js');

module.exports = React.createClass({

    propTypes: {
        name: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            <div id={this.props.id}>
                <a ref="section" id={this.props.name} name={this.props.name}></a>
                {this.props.children}
            </div>
        );
    },

    componentDidMount: function() {
        var section = this.refs.section;
        this.elementWatcher = scrollMonitor.create(section);
        this.elementWatcher.fullyEnterViewport(function() {
            scrollState.detectSection(section.id);
        });
    },

    componentWillUnmount: function() {
        this.elementWatcher.destroy();
    }

});
