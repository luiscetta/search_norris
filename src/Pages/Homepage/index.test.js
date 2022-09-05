/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import axios from 'axios';
import { create, act } from 'react-test-renderer';

import { CustomHttpError } from '../../utils/Errors';
import { ErrorToast } from '../../utils/Toaster';
import Homepage from './';


function MockedSearchResult({ id, className, children }) {
    return (<div id={id} className={className}>{children}</div>)
};

function MockedSearchInput({ value, onChange }) {
    return <input className="search-input" value={value} onChange={onChange} />;
}


jest.mock('../../utils/Toaster', () => ({
    ErrorToast: jest.fn()
}));
jest.mock('../../components/searchResult', () => MockedSearchResult);
jest.mock('../../components/searchInput', () => MockedSearchInput);

jest.mock('axios', () => ({
    get: jest.fn()
}));


describe('Home page test', () => {
    const searchFakeData = {
        data: {
            result: [
                {
                    id: 1,
                    value: 'text'
                }
            ]
        }
    }

    const randomFakeData = {
        data: {
            id: 1,
            value: 'text2'
        }
    };


    describe('When the page is rendered', () => {
        it('Should match snapshot', () => {
            const wrapper = create(<Homepage />);
            expect(wrapper.toJSON()).toMatchSnapshot();
        });

        it('Should render the search results', async () => {
            axios.get.mockResolvedValue(searchFakeData);
            let wrapper;
            act(() => { wrapper = create(<Homepage />) });
            const button = wrapper.root.findByProps({ className: 'btn-search' });
            await act(async () => button.props.onClick());
            const result = await wrapper.root.findByProps({ id: 'results' });
            expect(result).toBeTruthy();
        });

        it('Should correctly set search text', async () => {
            axios.get.mockResolvedValue(searchFakeData);
            let wrapper;
            act(() => { wrapper = create(<Homepage />) });
            const input = wrapper.root.findByProps({ className: 'search-input' });
            act(() => input.props.onChange({ target: { value: 'text' } }));
            const button = wrapper.root.findByProps({ className: 'btn-search' });
            await act(async () => button.props.onClick());
            expect(axios.get).toBeCalledWith('https://api.chucknorris.io/jokes/search?query=text');
        });


        it('Should show alert on bad request', async () => {
            axios.get.mockRejectedValue(new CustomHttpError({ status: 400 }));
            let wrapper;
            act(() => { wrapper = create(<Homepage />) });
            const button = wrapper.root.findByProps({ className: 'btn-search' });
            await act(async () => button.props.onClick());
            expect(ErrorToast).toBeCalledWith('Your search must have at least 3 characters, please!');
        });

        it('Should show alert on generic error - search results', async () => {
            axios.get.mockRejectedValue(new CustomHttpError({ status: 500 }));
            let wrapper;
            act(() => { wrapper = create(<Homepage />) });
            const button = wrapper.root.findByProps({ className: 'btn-search' });
            await act(async () => button.props.onClick());
            expect(ErrorToast).toBeCalledWith('Unexpected error');
        });

        it('Should render the random results', async () => {
            axios.get.mockResolvedValue(randomFakeData);
            let wrapper;
            act(() => { wrapper = create(<Homepage />) });
            const button = wrapper.root.findByProps({ className: 'btn-lucky' });
            await act(async () => button.props.onClick());
            const random = await wrapper.root.findByProps({ id: 'results' });
            expect(random).toBeTruthy();
        });

        it('Should show alert on generic error - random results', async () => {
            axios.get.mockRejectedValue(new CustomHttpError({ status: 500 }));
            let wrapper;
            act(() => { wrapper = create(<Homepage />) });
            const button = wrapper.root.findByProps({ className: 'btn-lucky' });
            await act(async () => button.props.onClick());
            expect(ErrorToast).toBeCalledWith('Unexpected error');
        });

    });
});