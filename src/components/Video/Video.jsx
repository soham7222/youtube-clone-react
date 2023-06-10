import React from 'react'
import { PreviewComponent } from './Preview'
import "./Video.css"

export const Video = (props) => {
    return (
        <div data-testid="video_grid" className="video_grid">{
            props.videos?.map((item, index) => (
                <PreviewComponent key={index} image={item.image.url} title={item.title} channelName={item.channelName} publishTime={item.publishTime} />
            ))}
        </div>
    )
}
