import React from 'react';

import { create } from 'react-test-renderer';

import Layout from './';

function MockedRouter({ children }) {
    return <div>{children}</div>
}

jest.mock('react-router-dom', () => ({
    BrowserRouter: MockedRouter,
    Route: MockedRouter,
    Routes: MockedRouter,
}));


describe('Layout component', () => {
    describe('When the component is rendered', () => {
        it('Should match snapshot', () => {
            const wrapper = create(<Layout />);
            expect(wrapper.toJSON()).toMatchSnapshot();
        })
    })
});