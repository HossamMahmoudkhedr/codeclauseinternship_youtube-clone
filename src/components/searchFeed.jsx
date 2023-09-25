import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Videos from './videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
	const [videos, setVideos] = useState([]);

	const { searchTerm } = useParams();
	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
			setVideos(data.items);
		});
	}, [searchTerm]);
	return (
		<Stack>
			<Box
				width="90%"
				paddingLeft="1rem">
				<Stack
					direction="row"
					paddingLeft="1rem"
					spacing={1}>
					<Typography
						variant="h4"
						fontWeight="bold"
						color="white">
						Search results for:
					</Typography>
					<Typography
						variant="h4"
						color="#ff0000"
						alignSelf="flex-end">
						{searchTerm}
					</Typography>
					<Typography
						variant="h4"
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

export default SearchFeed;
