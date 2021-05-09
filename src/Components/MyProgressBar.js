import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

export const MyProgressBar = ({additionalPercent})=> {
    // const [count, setCount] = useState(0);
    // constructor() {
    //     this.state = {
    //         percentage: 0
    //     };
    // }

    // updatePercent = (val) => {
    //     this.setState({percentage: percentage + val.targ})
    // };


    return(
        <>
            <div>
                {/* <ProgressBar now={setCount(count + 1)} label={`${setCount(count + 1)}%`} animated /> */}
                <ProgressBar now={additionalPercent} label={`${additionalPercent}%`} animated />
            </div>
        </>
    );
};

export default MyProgressBar;

