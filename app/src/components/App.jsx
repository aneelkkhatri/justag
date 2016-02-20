var React = require('react');
var LeftSideBar = require('./LeftSideBar');
var ContentDiv = require('./ContentDiv');

var App = React.createClass({
    render: function () {
        return <div className="app">
            <header />
            <div className="main-container">
            	<LeftSideBar />
            	<ContentDiv />
            </div>
            <footer />
        </div>;
    }
});

module.exports = App;
