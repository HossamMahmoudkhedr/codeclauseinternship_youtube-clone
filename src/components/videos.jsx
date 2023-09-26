import { Grid } from '@mui/material';
import React from 'react';

import VideoCard from './videoCard';
import ChannelCard from './channelCard';
import styled from 'styled-components';

const StyledGridContainer = styled(Grid)`
	margin: 0.5rem 0 0 0;
	padding: 1rem;

	@media (max-width: 768px) {
		&& {
			margin: 0.5rem auto;
		}
	}
`;

const Videos = ({ videos, xs, md, lg }) => {
	if (!videos) return 'loading...';
	return (
		<StyledGridContainer
			container
			spacing={4}>
			{videos.map((item) => (
				<Grid
					item
					xs={xs || 12}
					md={md || 6}
					lg={lg || 4}>
					{(item.id.videoId || item.id.playlistId) && (
						<VideoCard
							video={item}
							key={item.id.videoId}
						/>
					)}
					{item.id.channelId && (
						<ChannelCard
							channel={item}
							key={item.id.channelId}
						/>
					)}
				</Grid>
			))}
		</StyledGridContainer>
	);
};

export default Videos;
