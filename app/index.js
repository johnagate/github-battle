var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div> Hello {this.props.name}! </div>
    )
  }
})

var HelloWorld = function (props) {
  return (
    <div>Hello {props.name}!</div>
  )
}

ReactDOM.render(
  <HelloWorld name="John Agate"/>,
  document.getElementById('app')
);
