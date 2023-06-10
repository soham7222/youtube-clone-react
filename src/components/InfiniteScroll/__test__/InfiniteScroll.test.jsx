import React from 'react';
import { render } from '@testing-library/react';
import InfiniteScroll from '../InfiniteScroll';

describe('InfiniteScroll Component', () => {
    beforeEach(() => {
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;
    });

    it('renders correctly', () => {
        const dom = render(<InfiniteScroll onScrollEnd={jest.fn} />)
        expect(dom).toMatchSnapshot();
    });
})

