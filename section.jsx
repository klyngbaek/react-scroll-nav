var React = require('react');
var scrollMonitor = require("scrollmonitor");
var scrollState = require('./state.js');

module.exports = React.createClass({

    propTypes: {
        name: React.PropTypes.string.isRequired,
        onSelect: React.PropTypes.func,
        onUnselect: React.PropTypes.func
    },

    render: function() {
        return (
            <div>
                <a ref="section" id={this.props.name} name={this.props.name}></a>
                {this.props.children}
            </div>
        );
    },

    componentDidMount: function() {
        var section = this.refs.section;
        this.elementWatcher = scrollMonitor.create(section);
        this.elementWatcher.enterViewport(function() {
            scrollState.setSection(section.id);
        });
        this.elementWatcher.exitViewport(function() {
        });
    },

    componentWillUnmount: function() {
        this.elementWatcher.destroy();
    }

});
