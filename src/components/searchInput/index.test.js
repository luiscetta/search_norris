import React from 'react';

import { act, create } from 'react-test-renderer';

import SearchInput from './';


jest.mock('axios', () => ({
    get: jest.fn(),
}));


describe('SearchInput component', () => {
    describe('When the component is rendered', () => {

        it('Should match snapshot', () => {
            const wrapper = create(<SearchInput />);
            expect(wrapper.toJSON()).toMatchSnapshot();
        });

        // it('Should change content correctly', () => {
        //     let wrapper;
        //     act(() => { wrapper = create(<SearchInput />) });
        //     const input = wrapper.root.findByProps({ className: 'search-input' });
        //     act((e) => input.props.onChange({}));
        //     expect(wrapper.toJSON()).toMatchSnapshot();
        // });

    })
});