import React, {PureComponent} from 'react';
import './callButton.css';
import Icofont from 'react-icofont';

export default class CallButton extends PureComponent {
    state = {};
    render() {
        return (
            <React.Fragment>
                <div className="link-text">
                    <a href="tel: 0972268792" title="Liên hệ">
                    <div className="yourPhone">
                        <p><Icofont icon="icofont-phone icofont-3x"/></p>
                        <span>Call</span>
                    </div>
                        <p className="phone-number">0938.6368.43</p>
                    </a>

                </div>
            </React.Fragment>
        );
    }

}