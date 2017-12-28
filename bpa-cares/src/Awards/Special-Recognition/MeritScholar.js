import React, { Component } from 'react';
import { ApplicationGuidelines } from '../../PageComponents/GeneralComponents/ApplicationGuidelines.js';
import{ Generalinfo } from '../../PageComponents/GeneralComponents/Generalinfo.js';
import { NonDiscrimination} from '../../PageComponents/GeneralComponents/Non-Discrimination.js';
import {Recognition} from '../../PageComponents/GeneralComponents/Recognition.js';
import { SplashPage } from '../../PageComponents/SplashPage.js';

export class MeritScholar extends Component {
    render() {
        return (
            <div className="Wrapper">
                <SplashPage/>
                <div className="awardWrapper">
                <h1> BPA Merit Scholar Award </h1>
                <h2> Purpose</h2>
                <p> To recognize individual members and advisors for their knowledge of Business Professionals of
                    America and to motivate all members and advisors to learn as much as possible about the history,
                    traditions, programs, and activities of the organization.</p>
                    <h2> Eligibility</h2>
                    <p> Any member in good standing with Business Professionals of America, including advisors,
                    attending the National Leadership Conference may earn the BPA Merit Scholar award by achieving
                    a minimum of 90% on an objective test (true/false and multiple choice questions). This general
                    contest is not part of the competitive events program; the BPA Merit Scholar award is part of the
                    BPA Cares program offered to members.</p>
                    <p> The test will be developed annually by the National Center. Resources used will be the BPA
                    Cares Handbook, the Torch Awards Handbook, and <a href="www.bpa.org">www.bpa.org.</a></p>
                    <h2> An application is not required for this award. The award is given by the National Center to
                    those individuals meeting the criteria</h2>
                    <h2> Recognition</h2>
                    <p> Those participants achieving 90% or more on the test will receive a BPA Merit Scholar pin during the Awards Session at the National Leadership Conference.</p>
                    <h2> Having trouble with the BPA Cares Awards? Visit out Frequently Asked Questions page.</h2>
                    <NonDiscrimination/>
                </div>
            </div>
        );
    }
}