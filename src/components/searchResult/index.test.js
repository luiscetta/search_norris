import React from 'react';

import { create } from 'react-test-renderer';

import SearchResults from './';


function MockedComponent({ autoplay, animationData, loop, style }) {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img
        autoplay={autoplay}
        loop={loop}
        animationData={animationData}
        style={style}
    />
}

jest.mock('lottie-react', () => MockedComponent);

describe('Search Results component', () => {
    const results = [
        {
            id: 1,
            value: 'text'
        },
    ];

    describe('When the component is rendered', () => {
        it('Should match snapshot - non empty state', () => {
            const wrapper = create(<SearchResults results={results} />);
            expect(wrapper.toJSON()).toMatchSnapshot();
        });

        it('Should match snapshot - non empty state feeling lucky', () => {
            const wrapper = create(<SearchResults feelingLucky={true} results={results} />);
            expect(wrapper.toJSON()).toMatchSnapshot();
        });

        it('Should match snapshot - empty state', () => {
            const wrapper = create(<SearchResults results={[]} />);
            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});