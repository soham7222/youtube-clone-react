import axios from 'axios';
import { API_KEY } from '../assets/creds/API_KEY'

export const searchVideos = async (searchTerm, pageToken) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${searchTerm}&key=${API_KEY}&pageToken=${pageToken}`);
        const videos = response.data.items.map((item) => ({
            id: item.id.videoId,
            channelName: item.snippet.channelTitle,
            title: item.snippet.title,
            publishTime: item.snippet.publishTime,
            image: item.snippet.thumbnails.high
        }));
        return { videos: videos, pageToken: response.data.nextPageToken };
    } catch (error) {
        console.error('Error searching for videos:', error);
        return [];
    }
};
