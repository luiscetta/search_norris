import React from 'react';

import { create } from 'react-test-renderer';

import SearchInput from './';


describe('SearchInput component', () => {
    describe('When the component is rendered', () => {

        it('Should match snapshot', () => {
            const wrapper = create(<SearchInput />);
            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    })
});