var React = require("react");
var Router = require("react-router");
var RouteHandler = Router.RouteHandler;
var SearchBar = require("./SearchBar/SearchBar");
var TableContainer = require("./Table/TableContainer");

var Main = React.createClass({

    render: function(){
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2 search-bar-padding">
                        <SearchBar />
                    </div>
                </nav>
                <div className="container">
                    <div className="intro-title">Can't find a video to watch?
                        <span className="main-title">
                            &nbsp;Sort through your favorites below!
                        </span>
                    </div>
                    <RouteHandler/>
                </div>
                <span className="invisible-text">&copy; Alex Hawkins &mdash; 2015</span>
            </div>
        );
    }
});

module.exports = Main;
