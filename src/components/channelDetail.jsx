import React, { useEffect, useState } from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';
import { Box, Grid, Stack, Typography } from '@mui/material';
import VideoCard from './videoCard';

const Loading = () => {
	return (
		<Box sx={{ width: '100%', marginTop: '5rem', textAlign: 'center' }}>
			Loading...
		</Box>
	);
};
const ChannelDetail = () => {
	const { id } = useParams();

	const [channelDetails, setChannelDetails] = useState(null);
	const [videos, setVideos] = useState([]);
	const [more, setMore] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
			setChannelDetails(data?.items[0])
		);

		fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
			(data) => setVideos(data?.items)
		);
	}, [id]);

	useEffect(() => {
		videos == [] || channelDetails === null
			? setLoading(true)
			: setLoading(false);
	}, [videos, channelDetails]);

	return (
		<>
			{loading && <Loading />}
			{!loading && (
				<Box sx={{ maxWidth: '1400px', margin: '0.5rem auto' }}>
					<Stack
						spacing={4}
						sx={{ borderBottom: '1px solid #3e3e3e', paddingBottom: '2rem' }}>
						<Box
							sx={{
								background:
									'linear-gradient(90deg, rgba(33,3,3,1) 0%, rgba(121,9,9,1) 36%, rgba(255,0,189,1) 100%)',
								height: '30vh',
								overflow: 'hidden',
								borderRadius: '1rem',
							}}>
							{/* <img
						style={{ objectFit: 'cover', height: '100%' }}
						src={channelDetails?.brandingSettings?.image?.bannerExternalUrl}
						alt=""
					/> */}
						</Box>
						<Stack
							sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: '2rem' }}
							alignItems="center">
							<Box>
								<img
									style={{ borderRadius: '50%' }}
									src={channelDetails?.snippet?.thumbnails?.medium.url}
									alt=""
								/>
							</Box>
							<Stack
								spacing={2}
								sx={{
									alignItems: { xs: 'center', md: 'unset' },
									textAlign: { xs: 'center', md: 'unset' },
								}}>
								<Typography
									variant="h1"
									sx={{ fontSize: '3rem', fontWeight: 'bold' }}>
									{channelDetails?.brandingSettings?.channel?.title}
								</Typography>
								<Typography sx={{ color: '#aaa' }}>
									{channelDetails?.snippet?.customUrl} ‧{' '}
									{parseInt(
										channelDetails?.statistics?.subscriberCount
									).toLocaleString()}{' '}
									Subscribers ‧{' '}
									{parseInt(
										channelDetails?.statistics?.videoCount
									).toLocaleString()}{' '}
									videos
								</Typography>
								<Typography sx={{ color: '#aaa' }}>
									{channelDetails?.brandingSettings?.channel?.description ==
									undefined
										? ''
										: !more
										? channelDetails?.brandingSettings?.channel?.description.slice(
												0,
												250
										  )
										: channelDetails?.brandingSettings?.channel?.description}
									{channelDetails?.brandingSettings?.channel?.description ==
									undefined
										? ''
										: channelDetails?.brandingSettings?.channel?.description
												.length > 250 && !more
										? '...'
										: ''}{' '}
									{channelDetails?.brandingSettings?.channel?.description ==
									undefined
										? ''
										: channelDetails?.brandingSettings?.channel?.description
												.length > 250 && (
												<span
													style={{ cursor: 'pointer', userSelect: 'none' }}
													onClick={() => {
														setMore(!more);
													}}>
													Show {more ? 'less' : 'more'}
												</span>
										  )}
								</Typography>
							</Stack>
						</Stack>
					</Stack>
					<Box sx={{ paddingTop: '2rem' }}>
						<Grid
							container
							width="100%"
							sx={{ paddingLeft: { xs: '42px', md: 'unset' } }}
							spacing={4}>
							{videos.map((video, idx) => (
								<Grid
									item
									xs={12}
									md={4}
									lg={3}
									key={idx}>
									<VideoCard video={video} />
								</Grid>
							))}
						</Grid>
					</Box>
				</Box>
			)}
		</>
	);
};

export default ChannelDetail;
