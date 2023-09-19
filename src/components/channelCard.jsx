import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import {
	demoChannelTitle,
	demoChannelUrl,
	demoProfilePicture,
} from '../utils/constants';

const ChannelCard = ({ channel }) => {
	return (
		<Link to={channel ? `channel/${channel.id.channelId}` : demoChannelUrl}>
			<Stack
				alignItems="center"
				gap="1rem">
				<Box
					sx={{
						overflow: 'hidden',
						borderRadius: '50%',
						width: '200px',
						height: '200px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<img
						style={{ objectFit: 'cover', width: '100%' }}
						src={
							channel?.snippet?.thumbnails?.medium?.url || demoProfilePicture
						}
						alt={channel?.snippet?.title || demoChannelTitle}
					/>
				</Box>
				<Stack>
					<Typography
						variant="h6"
						fontSize="1.2rem">
						{channel?.snippet?.channelTitle || demoChannelTitle}
					</Typography>
					{channel?.statistics?.subscriberCount && (
						<Typography>
							{parseInt(channel?.statistics?.subscriberCount).toLocaleString()}{' '}
							Subscribers
						</Typography>
					)}
				</Stack>
			</Stack>
		</Link>
	);
};

export default ChannelCard;
