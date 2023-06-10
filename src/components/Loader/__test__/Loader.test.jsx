import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from '../Loader';

it('Loader renders correctly', () => {
    const dom = render(<Loader />)
    expect(dom).toMatchSnapshot();
});