import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

// ** MUI IMPORTS
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";

// custom imports
import { GET_SOCIALPOSTS_API_HANDLER } from './redux/actions/feesActions/action';
import RouterComponent from 'src/routes';
import { AuthProvider } from './context/AuthContext';
import { theme } from './@core/theme';



function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		if (isDarkMode) {
			setIsDarkMode(false);
		} else {
			setIsDarkMode(true);

		}
	};

	const theme = createTheme({
		palette: {
			mode: isDarkMode ? 'dark' : 'light',
			// Add more theme options as needed
		},
	});
	const dispatch = useDispatch();
	// const [posts, setPosts] = useState([]);
	useEffect(() => {
		getPOsts();
	}, []);

	const getPOsts = async () => {
		const Data = await dispatch(GET_SOCIALPOSTS_API_HANDLER());
		console.log('POSTS: ', Data);
	};
	return (
		<AuthProvider>
			<ThemeProvider theme={theme}>


				<CssBaseline />
				<Suspense fallback={<div>loading...</div>}>
					<RouterComponent isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
				</Suspense>

			</ThemeProvider>
		</AuthProvider>
	);
}

export default App;
