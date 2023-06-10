import React from 'react'
import "./Preview.css"

export const Preview = (props) => {
    const titleEl = document.createElement('div');
    titleEl.innerHTML = props.title;
    const plainTitle = titleEl.innerText;

    const getDuration = () => {
        const targetDate = new Date(props.publishTime);
        const currentDate = new Date(Date.now());
        const timeDiff = Math.abs(targetDate.getTime() - currentDate.getTime());
        const closestDuration = Math.round(timeDiff / (1000 * 60 * 60 * 24));
        if (closestDuration > 365) {
            const year = Math.round(closestDuration / 365)
            if (Math.round(closestDuration / 365) > 1) {
                return year + " years ago"
            } else {
                return year + " year ago"
            }
        }

        if (closestDuration > 30) {
            const month = Math.round(closestDuration / 30)
            if (Math.round(closestDuration / 365) > 1) {
                return month + " months ago"
            } else {
                return month + " month ago"
            }
        }

        if (closestDuration == 0) {
            const minutes = Math.round(timeDiff / (1000 * 60 * 60))
            return minutes + " minutes ago"
        }

        return closestDuration + " days ago"
    }



    return (
        <div className="video_preview">
            <div className="video_image">
                <img className="video_preview_image" src={props.image} />
                <div className="video_timestamp">
                    <span>{Math.floor(Math.random() * 60) + 1}:{Math.floor(Math.random() * 60) + 10}</span>
                </div>
            </div>
            <div className="video_info">
                <div className="video_channel_logo">
                    {props.channelName.slice(0, 2).toUpperCase()}
                </div>
                <div>
                    <div title={props.title} className="video_info_title">{plainTitle}</div>
                    <div className="video_basic_info">
                        <div className="video_channel">{props.channelName}</div>
                        <div className="video_view_time">{Math.floor(Math.random() * 20) + 1}k views ● {getDuration()}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
