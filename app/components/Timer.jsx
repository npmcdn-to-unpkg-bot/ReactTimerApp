var React = require('react');
var Clock = require('Clock');
var FormTimer = require('FormTimer');

var Timer = React.createClass({
  handleGetTime: function(time) {
    this.setState({
      myTime: Number(time)
    })
  },
  getInitialState: function() {
    return {
      myTime: 360
    }
  },
  render: function() {
    return (
      <div className="text-center">
        <Clock totalSeconds={this.state.myTime} />
        <FormTimer getTime={this.handleGetTime} />
      </div>
    )
  }
});

module.exports = Timer;
