import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import Dashboard from 'src/pages/Dashboard';
import Fees from 'src/pages/Fees';
import Attendence from 'src/pages/Attendence';
import Layout from 'src/layout/index';
import NotFoundPage from 'src/pages/404';
import Login from 'src/pages/Login';

const RouterComponent = () => {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Dashboard />} />
					<Route path='/fees' element={<Fees />} />
					<Route path='/attendance' element={<Attendence />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</>
	);
};

export default RouterComponent;
