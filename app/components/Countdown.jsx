var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
  render: function() {
    return (
      <div className="text-center">
        <Clock totalSeconds={129} />
      </div>
    )
  }
});

module.exports = Countdown;
