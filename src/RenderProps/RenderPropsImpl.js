import React, { Component } from 'react';
import ClickCounter from './ClickCounter';
import Counter from './counter';
import HoverCounter from './HoverCounter';
import RenderProps from './RenderProps';

class RenderPropsImpl extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Counter render = 
                {
                    (count, counterHandler) => 
                            <ClickCounter count={count} counterHandler = {counterHandler}/>
                }/>
                <Counter render = 
                {
                    (count, counterHandler) => 
                            <HoverCounter count={count} counterHandler = {counterHandler}/>
                }/>
                
                <RenderProps render={(loggedIn) => loggedIn ? 'Joe__' : 'admin'}/>
            </div>
        );
    }
}

export default RenderPropsImpl;