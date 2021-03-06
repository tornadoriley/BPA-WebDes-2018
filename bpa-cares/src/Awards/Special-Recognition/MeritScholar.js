import React, { Component } from 'react';
import { NonDiscrimination} from '../../PageComponents/GeneralComponents/Non-Discrimination.js';
import { SplashPage } from '../../PageComponents/SplashPage.js';import '../../animation.css';

export class MeritScholar extends Component {
    render() {
        return (
            <div className="Wrapper">
                <SplashPage/>
                <h1>BPA Merit Scholar Award</h1>
                <div className="awardWrapper slideUp">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Purpose</h2>
                            <p> To recognize individual members and advisors for their knowledge of Business Professionals of America and to motivate all members and advisors to learn as much as possible about the history, traditions, programs, and activities of the organization.</p>
                            <h2> Recognition</h2>
                            <p> Those participants achieving 90% or more on the test will receive a BPA Merit Scholar pin during the Awards Session at the National Leadership Conference.</p>
                            <p> Having trouble with the BPA Cares Awards? Visit our<a target="_blank" rel="noopener noreferrer" href="http://www.bpa.org/service/caresfaq">Frequently Asked Questions Page.</a></p>
                        </div>
                        <div className="col-md-6">
                            <h2> Eligibility</h2>
                            <p> Any member in good standing with Business Professionals of America, including advisors, attending the National Leadership Conference may earn the BPA Merit Scholar award by achieving a minimum of 90% on an objective test (true/false and multiple choice questions). This general contest is not part of the competitive events program; the BPA Merit Scholar award is part of the BPA Cares program offered to members.</p>
                            <p> The test will be developed annually by the National Center. Resources used will be the BPA Cares Handbook, the Torch Awards Handbook, and <a target="_blank" rel="noopener noreferrer" href="www.bpa.org">www.bpa.org.</a></p>
                            <p> An application is not required for this award. The award is given by the National Center to those individuals meeting the criteria</p>
                        </div>
                    </div>
                    <NonDiscrimination/>
                </div>
            </div>
        );
    }
}
