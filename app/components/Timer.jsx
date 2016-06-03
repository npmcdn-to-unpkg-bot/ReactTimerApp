var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
  render: function() {
    return (
      <div className="text-center">
        <Clock totalSeconds={300} />
      </div>
    )
  }
});

module.exports = Timer;
