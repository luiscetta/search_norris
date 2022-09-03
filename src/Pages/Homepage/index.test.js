/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import axios from 'axios';
import { create, act } from 'react-test-renderer';

import { CustomHttpError } from '../../utils/Errors';
import Homepage from './';
import { JSDOM } from 'jsdom';


function MockedComponent({ id, className, children }) {
    return (<div id={id} className={className}>{children}</div>)
};

jest.mock('../../components/searchResult', () => MockedComponent);
jest.mock('../../components/searchInput', () => MockedComponent);

jest.mock('axios', () => ({
    get: jest.fn()
}));


describe('Home page test', () => {
    let windowSpy;

    beforeAll(() => {
        windowSpy = jest.spyOn(global, 'window', 'get');   
    });

    afterAll(() => {
        windowSpy.mockRestore();
    });

    const fakeData = {
        data: {
            result: [
                {
                    id: 1,
                    value: 'text'
                }
            ]
        }
    }

    describe('When the page is rendered', () => {
        it('Should match snapshot', () => {
            const wrapper = create(<Homepage />);
            expect(wrapper.toJSON()).toMatchSnapshot();
        });

        it('Should render the search results', async () => {
            axios.get.mockResolvedValue(fakeData);
            let wrapper;
            act(() => { wrapper = create(<Homepage />) });
            const button = wrapper.root.findByProps({ className: 'btn-search' });
            await act(async () => button.props.onClick());
            const result = await wrapper.root.findByProps({ id: 'results' });
            expect(result).toBeTruthy();
        });

        it('Should show alert on bad request', async () => {
            axios.get.mockRejectedValue(new CustomHttpError({ status: 400 }));
            const { window } = new JSDOM();
            windowSpy.mockImplementation(() => window);
            window.alert = jest.fn();

            let wrapper;
            act(() => { wrapper = create(<Homepage />) });
            const button = wrapper.root.findByProps({ className: 'btn-search' });
            await act(async () => button.props.onClick());
            expect(window.alert).toBeCalled();
        });
    });
});