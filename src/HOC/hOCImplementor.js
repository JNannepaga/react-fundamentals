import React, { Component } from 'react';
import HigherOrderComponent from './higherOrderComponent';
import AdvertisementComponent from './advertisementComponent';
import NormalComponent from './normalComponent';

class HOCImplementor extends Component {
    render() {
        return (
            <div>
                {
                    HigherOrderComponent(AdvertisementComponent)
                }
                ===================================================
                {    
                    HigherOrderComponent(NormalComponent)
                }        
            </div>
        );
    }
}

export default HOCImplementor;