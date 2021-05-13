import React, { Component } from 'react';
import FragmentsDemo from './fragmentsDemo';
import ParentPureImpure from './pureNImpureComp/parentPureImpure';
import RefsDemo from './refs/RefsDemo';
import P2cParent from './compCommunication/p2cParent';
import C2pParent from './compCommunication/C2pParent';
import HOCImplementor from './HOC/hOCImplementor';
import ErrorBoundaryImpl from './ErrorBoundaries/ErrorBoundaryImpl';
import P2CParentRef from './refs/p2CParentRef';
import ForwardingRefParent from './refs/forwardingRefParent';
import PortalsComp from './Portals/portalsComp';
import ContextAPIImpl from './contextAPI/contextAPIImpl';
import RenderPropsImpl from './RenderProps/RenderPropsImpl';
import HooksApp from './Hooks/hooksApp';
import MultiCompParent from './pureNImpureComp/multiComp/multiCompParent';
import {Callbackfunc, func1} from './AsynchronousProgramming/callbackfunc';
import {DebitAmount, Login} from './AsynchronousProgramming/PromisesDemo';
import {AnalyseCustomerAccounts} from './AsynchronousProgramming/AsynAwait';
import Counter from './Testing/counter';
import Welcome from './Testing/welcome';
import {legacyLoops, complexLoop} from './Iterators/looping';
import {iteratiable_consumer} from './Iterators/iterator';
import {basicGenerator_consumer} from './Generator/sampleGenerator';
import LyfeCycleImplmnt from './LifeCycle/LyfeCycleImplmnt';
import BindingMechanism from './BindingMechanism/bindingMechanism';
class App extends Component {
    
    render() {
        console.log('xxx')
        //Callbackfunc();
        //func1(10);
        
    //     Login(4041, 'abc123').then((user)=>{

    //         DebitAmount(user).then((message) =>{
    //             console.log(`Welcome to MALIPS bank.co \n ${JSON.stringify(message)}`);
    //         }).catch((ex)=>{
    //         console.log(`Welcome to MALIPS bank.co \n ${ex}`);
            
    //         }).catch((ex)=>{
    //         console.log(`Welcome to MALIPS bank.co \n ${ex}`);
    //     });
    // });    
        //AnalyseCustomerAccounts();
        return (
            <div>
                Welcome {process.env.ENVIRONMENT}
                <BindingMechanism/>
            </div>
        );
    }
}

export default App;