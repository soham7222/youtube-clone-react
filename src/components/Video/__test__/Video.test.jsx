import React from 'react';
import { render } from '@testing-library/react';
import { Video } from '../Video';

describe('Video Component', () => {
    beforeEach(() => {
        jest.spyOn(global.Date, 'now').mockImplementationOnce(() =>
            new Date('2019-05-14T11:01:58.135Z').valueOf()
        );
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
    });

    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    })

    const videos = [{
        id: 1,
        channelName: "channel 1",
        title: "title 1",
        publishTime: "11:45 PM",
        image: "https://blog.hubspot.com/hubfs/image8-2.jpg"
    }, {
        id: 1,
        channelName: "channel 2",
        title: "title 2",
        publishTime: "11:45 PM",
        image: "https://blog.hubspot.com/hubfs/image8-2.jpg"
    }];

    it('renders correctly', () => {
        const dom = render(<Video videos={videos} />)
        expect(dom).toMatchSnapshot();
    });
})