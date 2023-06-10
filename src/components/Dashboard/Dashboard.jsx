import React, { useState } from 'react'
import { VedioComponent } from "../Video"
import { Searchbar } from '../SearchBar/Searchbar'
import "./Dashboard.css"
import { searchVideos } from "../../Service/YoutubeSearch"
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';
import { Loader } from '../Loader/Loader'

export const Dashboard = () => {
    const [videos, setVideos] = useState([])
    const [nextPageToken, setNextPageToken] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [isScrollLoading, setIsScrollLoading] = useState(false)

    const onSearch = async (searchValue) => {
        setVideos([]);
        setIsLoading(true)
        setSearchValue(searchValue)
        const { videos, pageToken } = await searchVideos(searchValue, nextPageToken)
        setNextPageToken(pageToken);
        setVideos(videos);
        setIsLoading(false)
    }

    const onScroll = async () => {
        if (videos?.length > 0) {
            setIsScrollLoading(true)
            const { videos, pageToken } = await searchVideos(searchValue, nextPageToken)
            setNextPageToken(pageToken);
            setVideos(prevItems => [...prevItems, ...videos]);
            setIsScrollLoading(false)
        }
    }

    return (
        <div className='dashboard_content'>
            <Searchbar search={onSearch} />
            <InfiniteScroll onScrollEnd={onScroll}>
                <VedioComponent videos={videos} />
                {
                    isScrollLoading ? <div className='dashboard_content_loader'>
                        <div className="loader"></div>
                        <div className="loader"></div>
                        <div className="loader"></div>
                    </div> : <></>
                }
            </InfiniteScroll>
            {
                isLoading ? <Loader /> : <></>
            }
        </div>)
}
