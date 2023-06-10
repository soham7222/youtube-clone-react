import React from 'react';
import { render } from '@testing-library/react';
import { Preview } from '../Preview';

describe('Preview Component', () => {
    beforeEach(() => {
        jest.spyOn(global.Date, 'now').mockImplementationOnce(() =>
            new Date('2019-05-14T11:01:58.135Z').valueOf()
        );
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
    });

    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    })

    it('renders correctly', () => {
        const dom = render(<Preview
            key={1}
            image="https://blog.hubspot.com/hubfs/image8-2.jpg"
            title="Google"
            channelName="Google Channel" />)
        expect(dom).toMatchSnapshot();
    });
})