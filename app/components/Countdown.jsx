var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function() {
    return { count: 0 }
  },
  handleonSetCountdown: function(seconds) {
    this.setState({
      count: seconds
    })
  },
  render: function() {
    var {count} = this.state;
    return (
      <div className="text-center">
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleonSetCountdown} />
      </div>
    )
  }
});

module.exports = Countdown;
