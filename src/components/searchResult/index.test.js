import React from 'react';

import { create } from 'react-test-renderer';

import SearchResults from './';

function MockedResults() {
    return <div id="results"/>;
}

describe('Search Results component', () => {
    describe('When the component is rendered', () => {
        it('Should match snapshot', () => {
            const wrapper = create(<SearchResults results={MockedResults} />);
            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});