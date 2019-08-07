import React, {PureComponent} from 'react';
import './loading.css';

export default class Loading extends PureComponent {
    render() {
        return (
            // #fc0904
            <div className="divLoader">
                <svg className="svgLoader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="10em" height="10em">
                    <path fill="#fc0904"
                          d="" />
                </svg>
            </div>
        )
    }

}