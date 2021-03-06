import React, { Component } from 'react';

class Popup extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup() {//this just inverts the state
    this.setState({showPopup: !this.state.showPopup});
  }

  render() {
    return (
      <div className='app'>

        <div id='questions' onClick={this.togglePopup.bind(this)}>
          <div>
            {this.state.showPopup ? 'X' : '?'}
          </div>
        </div>

        {this.state.showPopup ? 
          <div>
            <div className='popup' onClick={this.togglePopup.bind(this)}>
            </div>
            <div className='popup_inner'>
              <ul>
                <li>
                  <label>Who made this, and why?</label>
                  <p>I'm <a href="http://barronwebster.com" target="blank">Barron</a>. I made this to help anyone find an internship that they can afford to take in NYC. Internships are arguably the best way to get a foot in the door in the creative industry, but living in the Big Apple ain't cheap.</p>
                </li>
                <li>
                  <label>How was this data gathered?</label>
                  <p>All the places are on this list were submitted by people who claim to work there or have worked there. It's not scientific or perfect, but it's worked so far. If any of the places are listed incorrectly, contact me!</p>
                </li>
                <li>
                  <label>Why $13.65?</label>
                  <p>$13.65 is the current living wage for NYC, according to <a href="https://www1.nyc.gov/site/dca/about/living-wage-law.page">NYC Consumer Affairs. This number is ajdusted yearly — it went from $13.40 to $13.65 recently.</a></p>
                </li>
                <li>
                  <label>I know/am an employer who fits this description. <br/>Can you include them/me?</label>
                  <p>Yes! Use <a href="https://goo.gl/forms/lsFeerKQxjRvwQMt1">this form</a> to submit.</p>
                </li>
              </ul>
            </div>
          </div>
          : null
        }
      </div>
    );
  }
};

export default Popup;