import React from 'react';
import { useParams } from 'react-router-dom';

const VideoDetail = () => {
	const { id } = useParams();
	return <div>{id}</div>;
};

export default VideoDetail;
