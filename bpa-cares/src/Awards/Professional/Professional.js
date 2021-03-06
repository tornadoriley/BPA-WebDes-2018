import React, { Component } from 'react';
import { NonDiscrimination} from '../../PageComponents/GeneralComponents/Non-Discrimination.js';
import { SplashPage } from '../../PageComponents/SplashPage.js';import '../../animation.css';

export class Professional extends Component {
    render() {
        return (
            <div className="Wrapper">
                <SplashPage />
                <h1>Professional Awards Program Overview</h1>
                <div className="awardWrapper slideUp">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Awards</h2>
                            <ol>
                                <li>Advisor of the Year Award</li>
                                <li>Emerging Advisor of the Year Award</li>
                                <li>Emerging Professional of the Year Award</li>
                                <li>Hall of Fame Award</li>
                                <li>Outstanding Service Award</li>
                                <li>Student of the Year</li>
                            </ol>
                            <h2>Purpose</h2>
                            <p>The purpose of the Professional Awards Program is to acknowledge the dedication and service of our supporters.</p>
                            <h2>General Guidelines</h2>
                            <ul>
                                <li>NO E-MAIL OR MAIL APPLICATONS WILL BE ACCEPTED</li>
                                <li>All materials submitted become the property of Business Professionals of America and may be used as the National Center deems appropriate.</li>
                                <li>It is not necessary for a chapter or individual to attend the National Leadership Conference to participate in the program and receive the award, except Merit Scholar.</li>
                                <li>DO NOT SEND ANY AWARD APPLICATION(S) AS PART OF ANOTHER APPLICATION. AWARDS MAY NOT BE SUBMITTED WITH TECHNICAL PROJECTS FOR COMPETITIVE EVENTS. EACH AWARD MUST BE SUBMITTED SEPARATELY.</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h2>Submission</h2>
                            <p>Professional Award applications must be submitted using <a target="_blank" rel="noopener noreferrer" href ="http://www.bpa.org/submit." >Submit link</a></p>
                            <p>Applications due March 1.</p>
                            <h2>Recognition</h2>
                            <p>Advisor of the Year, Emerging Advisor of the Year, Emerging Professional of the Year: A maximum of one (1) individual will be recognized with a plaque on stage at the National Leadership Conference.</p>
                            <p>Hall of Fame: A maximum of two (2) individuals will be recognized with lifetime memberships and individual plaques on stage at the National Leadership Conference. The names of those recognized will be added to the Hall of Fame plaque displayed at the National Center.</p>
                            <p>Outstanding Service Award: A maximum of five (5) individuals will be recognized with a plaque on stage at the National Leadership Conference.</p>
                            <p>Student of the Year: A maximum of one (1) individual from the Secondary and one (1) individual from the Post-Secondary Division will be recognized with a plaque on stage at the National Leadership Conference.</p>
                        </div>
                    </div>
                    <NonDiscrimination/>
                </div>
            </div>
        );
    }
}
