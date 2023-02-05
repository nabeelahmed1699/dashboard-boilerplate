import React from 'react';

// ** mui
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
	const navigate = useNavigate();
	return (
		<Box
			height='100%'
			display='flex'
			justifyContent='center'
			alignItems='center'
			flexDirection='column'
		>
			<Typography variant='h1'>NotFoundPage</Typography>

			<Button
				variant='contained'
				onClick={() => {
					navigate('/');
				}}
			>
				Back to home
			</Button>
		</Box>
	);
};

export default NotFoundPage;
