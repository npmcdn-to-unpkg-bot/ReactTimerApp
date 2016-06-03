var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exists', () => {
    expect(Countdown).toExist();
  });

  describe('handleonSetCountdown', () => {
    it('should set state to started countdown', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleonSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownSatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it('should never set count less than 0', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleonSetCountdown(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });
  });

});
