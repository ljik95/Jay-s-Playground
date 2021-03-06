import React, { Component } from 'react';
import store from '../store';
import { Link } from 'react-router-dom';

class Stats extends Component {
  constructor () {
    super();
    this.state = store.getState();
  }

  render () {
    return (
      <div>
        <div id="players">
          <div id="playerRed">
            Player Red has won <br />
            <div className="winCount">
              {this.state.redWinCount} <br />
            </div>
            times.
          </div>
          <div id="playerYellow">
            Player Yellow has won <br />
            <div className="winCount">
              {this.state.yellowWinCount} <br />
            </div>
            times.
          </div>
        </div>
        <div id="backToGame">
          <Link to="/connectFour">Back To Game</Link>
        </div>
      </div>
    )
  }
}

export default Stats;
