import React from 'react';
import Counter from '../../src/Testing/counter';
import {shallow, mount} from 'enzyme';


let wrapper;

beforeEach(()=>{
    wrapper = shallow(<Counter/>); 
});

describe('<Counter/>:: Rendering',()=>{
    
    test('render snapshot correctly', ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test('should render two buttons',()=>{
        expect(wrapper.find('button')).toHaveLength(2);
        expect(wrapper.find('button.increment')).toHaveLength(1);
        expect(wrapper.find('button.decrement')).toHaveLength(1);
    }); 
    
    test('should start with count 0',()=>{
        expect(wrapper.find('h3').text()).toEqual('counter: 0');
    }); 
});

describe("<Counter/>:: Interactions",()=>{

    test('should increment by 1',()=>{
        const button = wrapper.find('button.increment');
        button.simulate('click');
        expect(wrapper.find('h3').text()).toEqual('counter: 1');
    });

    test('should decrement by 1',()=>{
        const button = wrapper.find('button.decrement');
        button.simulate('click');
        expect(wrapper.find('h3').text()).toEqual('counter: -1');
    });
});
