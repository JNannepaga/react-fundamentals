import React from 'react';
import AutoCounter from './effect/autoCounter';
import ConditionalEffectRun from './effect/conditionalEffectRun';
import DisplayToggler from './effect/displayToggler';
import FetchData from './effect/fetchData';
import MultiContextParent from './context/multiContextParent';
import PrevStateDemo from './state/prevStateDemo';
import TrackPosition from './effect/trackPosition';
import UseEffectDemo from './effect/useEffectDemo';
import UseStateArrayDemo from './state/useStateArrayDemo';
import UseStateDemo from './state/useStateDemo';
import UseStateObjectDemo from './state/useStateObjectDemo';
import ReducerDemo from './reducer/reducerDemo';
import ComplexReducerDemo from './reducer/complexReducerDemo';
import MultiReducerDemo from './reducer/multiReducers';
import BaseCounter from './reducer/ContextAPIwithReducer/baseCounter';
import FetchAPIReducer from './reducer/EffectwithReducer/fetchAPIReducer';
import MultiCompParent from './callBack/multiCompParent';
import UseMemoHook from './pureNImpure/useMemoHook';
import FocusInput from './Refs/FocusInput';
import HookTimer from './Refs/HookTimer';
import ParentDoc from './customHooks/ParentDoc';
import UserForm from './customHooks/userForm';

function HooksApp() {
    return (
        <div>
            <UseMemoHook/>
        </div>
    );
}

export default HooksApp;