import React, { Component } from 'react';
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import '../App.css';
import upIcon from '../pics/upIcon.png';
import downIcon from '../pics/downIcon.png';
import $ from 'jquery';
import { Navigation } from './NavBar/NavBar.js';

export class SplashPage extends Component {
    componentDidMount() {
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });
        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });
        scrollSpy.update();
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    scrollMore() {
        scroll.scrollMore(200);
    }
    handleSetActive(to) {
        console.log(to);
    }
    render() {
        var scrollPos = window.pageYOffset ;
        console.log("scroll:"+scrollPos);
        return (
            <div className="homeWrapper">
                <div className="cover">
                    <div className="circle fadeIn"></div>
                    <div className="circle_inner fadeIn"></div>
                    <div className="PageCont fadeIn">
                        <div className="body" id="home">
                            <h2>BPA CARES</h2>
                            <div className="torches">
                                <p>LEADERSHIP | SERVICE | COOPERATION | KNOWLEDGE</p>
                                <p>FRIENDSHIP | LOVE | HOPE | FAITH | PATRIOTISM</p>
                            </div>
                            <div id="nav">
                                <Navigation/>
                            </div>
                        </div>
                    </div>
                </div>
                <a id="scroller" className="scroller" onClick={this.scrollToTop}><img src={upIcon} height="75" width="75" alt=""/></a>
                <a id="scroll_more" className="scroller" onClick={this.scrollMore}><img src={downIcon} height="75" widht="75" alt=""/></a>
            </div>
        );
    }
}
