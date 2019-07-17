import React, {PureComponent} from 'react';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

export default class ScrollUpBtn extends PureComponent {
    state = {};
    render() {
        return (
            <React.Fragment>
                <ScrollUpButton
                    style={{
                        padding: 8,
                        width: 40,
                        backgroundColor: "transparent",
                        height: 40,
                        border: "2px solid black",
                        outline: 0,
                        zIndex: 9999,
                    }}
                />
            </React.Fragment>
        );
    }
    
}