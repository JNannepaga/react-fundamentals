import React from 'react';
import Counter1 from './counter1';
import Counter2 from './counter2';
import DocTitle1 from './DocTitle1';
import DocTitle2 from './DocTitle2';

function ParentDoc(props) {
    return (
        <div>
            {/* <DocTitle1/>
            <DocTitle2/> */}
            <Counter1/>
            <Counter2/>
        </div>
    );
}

export default ParentDoc;