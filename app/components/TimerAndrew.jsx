var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var TimerAndrew = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      timerStatus: 'stopped'
    }
  },
  handleStatusChange: function(newStatus) {
    this.setState({ timerStatus: newStatus});
  },
  handleStart: function() {
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000)
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.handleStart();
          break;
        case 'stopped':
          this.setState({count: 0 });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  render: function() {
    var {count, timerStatus} = this.state;
    return (
      <div>
        <h1 className="page-title">TimerAndrew App</h1>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
});

module.exports = TimerAndrew;
