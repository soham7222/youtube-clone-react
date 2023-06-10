import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';
import { Dashboard } from '../Dashboard';
import axios from "axios";
import { mockResponse } from "../../../mock/mockResponse"

jest.mock("axios");

describe('Dashboard Component', () => {
    beforeEach(() => {
        jest.spyOn(global.Date, 'now').mockImplementationOnce(() =>
            new Date('2019-05-14T11:01:58.135Z').valueOf()
        );
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;
    });

    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    })

    it('renders correctly', () => {
        const dom = render(<Dashboard />)
        expect(dom).toMatchSnapshot();
    });

    it("when input has been given and submit clicked it render the videos", async () => {
        axios.get.mockResolvedValueOnce({ data: mockResponse });
        const { getByTestId, getByText } = render(<Dashboard />);
        const searchInput = getByTestId("search-input-textbox");

        act(() => {
            fireEvent.change(searchInput, { target: { value: "test" } });
            fireEvent.submit(getByTestId("search-input-form"));
        })
        await waitFor(() => {
            expect(getByText("jaanvi patel")).toBeInTheDocument()
            expect(getByText("Good Mythical Morning")).toBeInTheDocument()
        });
        expect(axios.get).toHaveBeenCalledTimes(1);
    });
})