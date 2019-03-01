// @flow

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Drawer from 'rc-drawer';
import Sidebar from '../../sidebar';
import { Captions } from '../../subtitles/';

declare var interfaceConfig: Object;

/**
 * Implements a React {@link Component} which represents the large video (a.k.a.
 * the conference participant who is on the local stage) on Web/React.
 *
 * @extends Component
 */
export default class LargeVideo extends Component<{}> {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {React$Element}
     */
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen() {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    }

    onTouchEnd = () => {
        this.setState({
            sidebarOpen: false
        });
    }

    render() {
        return (
            <div
                className = 'videocontainer'
                id = 'largeVideoContainer'>
                    <div className="burger-menu" onClick={this.onSetSidebarOpen}/>
                        <Drawer
                             open={this.state.sidebarOpen}
                             onMaskClick={this.onTouchEnd}
                             handler={false}
                             level={null}
                             width="450px" >
                                <Sidebar />
                         </Drawer>
                <div className='logo-element' />
                <div id = 'sharedVideo'>
                    <div id = 'sharedVideoIFrame' />
                </div>
                <div id = 'etherpad' />



                <div id = 'dominantSpeaker'>
                    <div className = 'dynamic-shadow' />
                    <div id = 'dominantSpeakerAvatarContainer' />
                </div>
                <div id = 'remotePresenceMessage' />
                <span id = 'remoteConnectionMessage' />
                <div id = 'largeVideoElementsContainer'>
                    <div id = 'largeVideoBackgroundContainer' />

                    {/*
                      * FIXME: the architecture of elements related to the large
                      * video and the naming. The background is not part of
                      * largeVideoWrapper because we are controlling the size of
                      * the video through largeVideoWrapper. That's why we need
                      * another container for the background and the
                      * largeVideoWrapper in order to hide/show them.
                      */}
                    <div id = 'largeVideoWrapper'>
                        <video
                            autoPlay = { true }
                            id = 'largeVideo'
                            muted = { true } />
                    </div>
                </div>
                { interfaceConfig.DISABLE_TRANSCRIPTION_SUBTITLES
                    || <Captions /> }
                <span id = 'localConnectionMessage' />
            </div>
        );
    }
}
