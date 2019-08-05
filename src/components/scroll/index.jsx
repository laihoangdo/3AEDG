import React, {PureComponent} from 'react';
import ScrollUpButton from "react-scroll-up-button";
import './scroll.css';
import CallButton from "../callButton";

export default class ScrollUpBtn extends PureComponent {
    state = {};
    render() {
        return (
            <React.Fragment>
                <div>
                <ScrollUpButton
                    // style={{
                    //     padding: 8,
                    //     width: 60,
                    //     backgroundColor: "transparent",
                    //     height: 60,
                    //     border: "none",
                    //     color: "white",
                    //     outline: 0,
                    //     background: "#03a84e",
                    //     zIndex: 9999,
                    // }}
                    ContainerClassName="AnyClassForContainer"
                    TransitionClassName="AnyClassForTransition"

                />
                    <ScrollUpButton
                        ContainerClassName="AnyClassForContainer"
                        TransitionClassName="AnyClassForTransition"

                    >
                        <CallButton/>
                    </ScrollUpButton>
                </div>
            </React.Fragment>
        );
    }
    
}