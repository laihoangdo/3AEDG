import React, {} from 'react';
import './callButton.css';
import Icofont from 'react-icofont';

export default function CallButton(){
        return (
            <React.Fragment>
                <div className="link-text">
                    <a href="tel: 0938636843" title="Liên hệ : 0938.6368.43">
                    <div className="yourPhone">
                        <p><Icofont icon="icofont-ui-dial-phone icofont-3x"/></p>
                    </div>
                    </a>
                </div>
            </React.Fragment>
        );

}