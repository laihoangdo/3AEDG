import React, {PureComponent} from 'react';
import './callButton.css';
import Icofont from 'react-icofont';

export default class CallButton extends PureComponent {
    state = {};
    render() {
        return (
            <React.Fragment>
                <div className="link-text">
                    <div className="myPhone">
                        <p><Icofont icon="icofont-phone icofont-3x"/></p>
                        <span>Call</span>
                    </div>

                </div>
            </React.Fragment>
        );
    }

}