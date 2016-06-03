var React = require('react');

var FormTimer = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var time = this.refs.time.value;

    this.props.getTime(time);
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" placeholder="Timer in seconds" ref="time"></input>
        <button>Start</button>
      </form>
    )
  }
});

module.exports = FormTimer;
