import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import {
	demoChannelUrl,
	demoThumbnailUrl,
	demoVideoTitle,
	demoVideoUrl,
} from '../utils/constants';
import styled from 'styled-components';

const StyledChannelTitle = styled(Typography)`
	&& {
		fontsize: 0.8rem;
		fontweight: bold;
		color: #929292;
		transition-duration: 0.2s;
	}

	&&:hover {
		color: white;
	}
`;
const VideoCard = ({ video }) => {
	return (
		<Link to={video ? `video/${video.id.videoId}` : demoVideoUrl}>
			<Stack sx={{ gap: '1rem' }}>
				<Box width="100%">
					<img
						style={{
							objectFit: 'cover',
							width: '100%',
							borderRadius: '1rem',
						}}
						src={video?.snippet?.thumbnails?.medium?.url || demoThumbnailUrl}
						alt={video?.snippet?.title}
					/>
				</Box>
				<Box>
					<Typography
						variant="h6"
						fontSize="1.2rem">
						{video?.snippet?.title.slice(0, 60) || demoVideoTitle}
						{video?.snippet?.title.length > 60 ? '...' : ''}
					</Typography>
					<Link
						to={
							video?.snippet?.channelId
								? `channel/${video?.snippet?.channelId}`
								: demoChannelUrl
						}>
						<StyledChannelTitle variant="body1">
							{video?.snippet?.channelTitle}
						</StyledChannelTitle>
					</Link>
					{/* <Typography
								variant="body1"
								fontSize="0.8rem"
								fontWeight="bold"
								color="#929292">
								{(new Date(video.snippet.publishTime) - new Date().getDate()) /
									365 /
									12 /
									30 /
									24 /
									60}
							</Typography> */}
				</Box>
			</Stack>
		</Link>
	);
};

export default VideoCard;
