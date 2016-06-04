var React = require('react');

var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  startTimer: function() {
    this.timer = setInterval(() => {
      //console.log(this.state.count);
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  },
  getInitialState: function() {
    return {
      count: 0,
      countdownSatus: 'stopped'
    }
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countdownSatus !== prevState.countdownSatus) {
      switch(this.state.countdownSatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          break;
      }
    }
  },
  handleonSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownSatus: 'started'
    })
  },
  render: function() {
    var {count} = this.state;
    return (
      <div className="text-center">
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleonSetCountdown} />
        <Controls countdownStatus="paused"/>
      </div>
    )
  }
});

module.exports = Countdown;
