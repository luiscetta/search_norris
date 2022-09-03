import React from 'react';

import { create } from 'react-test-renderer';

import SearchResults from './';


describe('Search Results component', () => {
    describe('When the component is rendered', () => {
        it('Should match snapshot', () => {
            const wrapper = create(<SearchResults />);
            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});