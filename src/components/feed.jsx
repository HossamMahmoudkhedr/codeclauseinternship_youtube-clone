import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import Videos from './videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
	const [selectedCategory, setSelectedCategory] = useState('New');
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
			setVideos(data.items);
		});
	}, [selectedCategory]);
	return (
		<Stack
			sx={{
				flexDirection: { xs: 'column', md: 'row' },
				gap: '2rem',
			}}
			spacing={4}>
			<Box
				sx={{
					width: { xs: 'auto', md: '15rem' },
					height: { xs: 'auto', md: '92vh' },
					borderRight: '1px solid #303030',
					position: 'sticky',
					top: '0',
					left: '0',
					backgroundColor: 'black',
				}}>
				<Sidebar
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
			</Box>

			<Box width="90%">
				<Stack
					direction="row"
					spacing={1}>
					<Typography
						variant="h4"
						fontWeight="bold"
						color="white">
						{selectedCategory}
					</Typography>
					<Typography
						variant="h4"
						color="#ff0000"
						alignSelf="flex-end">
						videos
					</Typography>
				</Stack>
				<Stack>
					<Videos videos={videos} />
				</Stack>
			</Box>
		</Stack>
	);
};

export default Feed;
