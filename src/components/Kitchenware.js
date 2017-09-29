import React, { Component } from 'react';
import BottomNav from './BottomNav';
import Header from './Header';
import { Link } from 'react-router-dom';

export default class MainBody extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }





  render() {
  return (
    <div>
      <div className="sectionBox">
        <div className="leftbox">
          <div className="leftmiddleBox">YOUR   <span>DREAM</span> <br/> KITCHEN</div>
        </div>
        <div className="rightbox">
          <img src='https://i.imgur.com/qjPOruG.jpg' />
        </div>

      </div>

      <div className="sectionBox">
      <div className="rightbox">
        <img src='https://i.imgur.com/CzHdUxQ.jpg' />
      </div>

      <div className="leftbox">
        <div className="insertLine"></div>
        <div className="textBox">
          <div className="textTitle">Essentials</div>
          <div className="textBody">Our essential collection emphasize convinience, fun and innovative craftsmanship for your dream kitchen.</div>
          <div className="viewall">VIEW ALL</div>
        </div>
      </div>
      </div>

        <div className="sectionBox">
          <div className="leftbox leftAltBox">
            <div className="textBox tbAltBox">
              <div className="textTitle">Rugs</div>
              <div className="textBody">From kitchen rugs to oven gloves, Foodies Goodies committed to bring you the best experience.</div>
              <div className="viewall">VIEW ALL</div>
            </div>

            <div className="insertLine altLine"></div>
          </div>

          <div className="rightbox">
            <img src='https://i.imgur.com/f9QEyLC.jpg' />
          </div>
      </div>


    </div>
    )
  }
}
