import React from 'react';

import { create } from 'react-test-renderer';

import Loader from './';


describe('Loader component', () => {
    describe('When the component is rendered', () => {
        it('Should loader is rendered correctly', () => {
            const wrapper = create(<Loader />);
            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    })
});