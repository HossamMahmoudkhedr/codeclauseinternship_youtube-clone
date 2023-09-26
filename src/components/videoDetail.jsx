import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Box, Stack, Typography } from '@mui/material';
import Videos from './videos';
import ReactPlayer from 'react-player';
const VideoDetail = () => {
	const { id } = useParams();
	const [videoDetails, setVideoDetails] = useState(null);
	const [videos, setVideos] = useState(null);
	useEffect(() => {
		fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
			setVideoDetails(data.items[0]);
		});

		fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}`).then((data) =>
			setVideos(data.items)
		);
	}, [id]);

	if (!videoDetails) return 'loading...';
	const {
		snippet: {
			channelTitle,
			channelId,
			localized: { title },
		},
		statistics: { viewCount, likeCount },
	} = videoDetails;

	return (
		<Box minHeight="95vh">
			<Stack
				direction={{ xs: 'column', md: 'row' }}
				padding="2rem">
				<Box width={{ xs: '100%', md: '70%' }}>
					<Box
						sx={{
							width: '100%',
							position: 'sticky',
							top: '2rem',
						}}>
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${id}`}
							className="react-player"
							width="92%"
							height="531px"
							style={{
								borderRadius: '1rem',
								overflow: 'hidden',
							}}
							controls
						/>
						<Typography
							variant="h6"
							p={2}>
							{title}
						</Typography>
						<Stack
							direction={{ xs: 'column', md: 'row' }}
							justifyContent="space-between"
							alignItems="center"
							width="92%"
							py={1}
							px={2}>
							<Link to={`/channel/${channelId}`}>
								<Typography>{channelTitle}</Typography>
							</Link>
							<Stack
								direction={{ xs: 'column', md: 'row' }}
								gap="20px"
								alignItems="center">
								<Typography
									variant="body1"
									sx={{ opacity: '0.7' }}>
									{parseInt(viewCount).toLocaleString()} Views
								</Typography>
								<Typography
									variant="body1"
									sx={{ opacity: '0.7' }}>
									{parseInt(likeCount).toLocaleString()} Likes
								</Typography>
							</Stack>
						</Stack>
					</Box>
				</Box>
				<Box
					width={{ xs: '100%', md: '30%' }}
					justifyContent="center"
					paddingRight={{ xs: '3rem', md: 'unset' }}
					alignItems="center">
					<Videos
						videos={videos}
						xs={12}
						md={12}
						lg={12}
					/>
				</Box>
			</Stack>
		</Box>
	);
};

export default VideoDetail;
