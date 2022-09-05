import React from 'react';

import { create } from 'react-test-renderer';

import Loader from './';


describe('Loader component', () => {
    describe('When the component is rendered', () => {
        it('Should match snapshot', () => {
            const wrapper = create(<Loader />);
            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    })
});