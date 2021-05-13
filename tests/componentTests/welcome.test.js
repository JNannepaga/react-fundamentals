import Welcome from '../../src/Testing/welcome';
import React from 'react';
import {mount, shallow} from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let wrapper;

beforeEach(()=>{
    wrapper = shallow(<Welcome/>);
});

describe("<Welcome/> :: Rendering using StateManagement",()=>{
    
    it('Should render snapshot correctly', ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    it('Should display Welcome to  world', ()=>{
        expect(wrapper.find('h2.helloWorld').text()).toEqual('Welcome to Malips World');    
    });

    it('Should display Loader', ()=>{
        wrapper.setState({
            isLoading: true
        });
        expect(wrapper.find('h3.loader').text()).toEqual('Loading...');
    });

    it('Should display User', ()=>{
        wrapper.setState({
            isLoading: false,
            user: {
                userId: 1,
                id: 1,
                title: "test",
                completed: false
            },
            error: false,
            errMsg: ''
        });
        expect(wrapper.find('h2.userCard').text()).toEqual('Welcome test');
    });
    
    it('Should display NoUserFound if list is empty', ()=>{
        wrapper.setState({
            isLoading: false,
            user: null,
            error: false,
            errMsg: ''
        });
        expect(wrapper.find('h4.error').text()).toEqual('No Data Found');
    });

    it('Should display error message if something went wrong', ()=>{
        wrapper.setState({
            isLoading: false,
            user: null,
            error: true,
            errMsg: 'Network protocal error'
        });
        expect(wrapper.find('h3.error').text()).toEqual('Network protocal error');
    });

});

describe("<Welcome/> :: Mocking Function Calls", ()=>{
    it("Load users", async ()=>{
        
        //Mocking async function call

        const userMockData = {
            userId: 1,
            id: 1,
            title: "test",
            completed: false
        };
        const mock = new MockAdapter(axios);
        mock.onGet().reply(200, userMockData);
    
        const instance = wrapper.instance();
        await instance.setUsers();
        expect(wrapper.find('h2.userCard').text()).toContain('Welcome test');     
    })
});

describe("<Welcome/> :: React LifeCycle Events", () => {
    
    it('Should render ComponentDidMount',()=>{
        const instance = wrapper.instance();
        jest.spyOn(instance, 'setUsers');
        instance.componentDidMount();
        expect(instance.setUsers).toHaveBeenCalledTimes(1);
    });

});