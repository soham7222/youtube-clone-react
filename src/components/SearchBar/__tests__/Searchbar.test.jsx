import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Searchbar } from '../Searchbar';

describe("Searchbar", () => {
    it('renders correctly', () => {
        const dom = render(<Searchbar search={jest.fn()} />)
        expect(dom).toMatchSnapshot();
    });

    it("when input has been given and submit clicked it should trigger search method", () => {
        const mockFn = jest.fn()
        const { getByTestId } = render(<Searchbar search={mockFn} />);
        const searchInput = getByTestId("search-input-textbox");

        fireEvent.change(searchInput, { target: { value: "equal experts" } });
        fireEvent.submit(getByTestId("search-input-form"));
        expect(mockFn).toBeCalledTimes(1)
    });
})

