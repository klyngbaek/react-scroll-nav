# react-scroll-nav
Simple React components to create a single page web app with scroll based navigation

#Example

```javascript
var React = require('react');
var Section = require('react-scroll-nav').Section
var Link = require('react-scroll-nav').Link

var Page = React.createClass({

    render: function() {
        return(
            <div>
                <div style={{position:"fixed", top:"0px", right:"200px", bottom:"0px", left:"0px"}}>
                    <Link name="chapter1">
                        This will scroll to the chapter1 section
                    </Link>

                    <Link name="chapter2">
                        This will scroll to the chapter2 section
                    </Link>

                    <Link name="chapter3">
                        This will scroll to the chapter2 section
                    </Link>
                <div>


                <div style={{position:"absolute", left:"200px", right:"0px"}}>
                    <Section name="chapter1">
                        <div style={{height:"500px"}}>
                            This has some info.
                        <div>
                    </Section>

                    <Section name="chapter2">
                        <div style={{height:"500px"}}>
                            This has some more info.
                        </div>
                    </Section>

                    <Section name="chapter3">
                        <div style={{height:"500px"}}>
                            This has evenm more info.
                        </div>
                    </Section>
                </div>
            </div>
        );
    }

});

React.render(
    <Page />,
    document.getElementById('example')
);

```
