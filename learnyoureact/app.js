var React = require('react');
var ReactDOM = require('react-dom');
var TodoBox = require('./views/prop-state.jsx');

var data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));

ReactDOM.render(<TodoBox data={data} />, document.getElementById("app"));
