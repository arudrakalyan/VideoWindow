// @flow

import React, { Component } from 'react';

export default class Sidebar extends Component {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */

    handleClick = () =>{
        this.props.onTouchEnd()
    }

    render() {
        return (
          <React.Fragment>
            <div className='sidebar-container'>
            {this.props.open ? <div className='close-drawer' onClick={this.props.close} /> : ''}
              <div className='privacy'>
                <h4>Privacy (Minutes)</h4>
                <input type='text' placeholder='Not available in Beta' />
                <button className="plus"/>
                 <button className="minus"/>
                <p>Put the video window into sleep mode for a set duration and don't worry you can always wake it again at any time with a simple tap</p>
              </div>

              <div className="sip-address">
                <h4>Enter SIP Address</h4>
                <input type='text' placeholder='Not available in Beta' />
                <button className="phone"/>
                <p>Leave the always-on mode and make video call to any external SIP video address or bridge</p>
               </div>

            </div>
            <section className='cta-section'>
                <div className='actions'>
                    <button className='button-blue'>Reconnect</button>
                    <button className='button-blue'>CLOSE</button>
                </div>
                <div className='brand-area'>
                    <h2>Video Window</h2>
                    <h6>Find out more at <a href="#"  target='_blank'> videowindow.com </a> </h6>
                </div>
            </section>
        </React.Fragment>

    );
    }

}

