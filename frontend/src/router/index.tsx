import Loading from 'components/Loading';
import BaseLayout from 'layout/BaseLayout';
import React, { Fragment, Suspense, useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getUserDataRequest, logout } from 'redux/action/auth';
import { decodeJWT } from 'utils/utils';
import { PrivateRouter } from './private';
import { PublicRouter } from './public';
import { RouterType } from './type';

const Router: React.FC = (): JSX.Element => {
	const dataAuthRedux = useSelector((state: RootStateOrAny) => state.AuthReducer);
	const dispatch = useDispatch();

	const checkLayout = (route: RouterType) => {
		let Layout = BaseLayout;
		if (route.layout) {
			Layout = route.layout;
		} else if (route.layout === null) {
			Layout = Fragment;
		}
		return Layout;
	};

	useEffect(() => {
		const token = localStorage.getItem('tk');
		if (token) {
			const decoded = decodeJWT(token);
			if (decoded.email) {
				dispatch(getUserDataRequest({ email: decoded.email }));
			} else {
				dispatch(logout());
			}
		}
	}, []);

	return (
		<>
			<Routes>
				{localStorage.getItem('tk') && dataAuthRedux.email
					? PrivateRouter.map((route: RouterType, index: number) => {
							const Container = route.element;
							const Layout = checkLayout(route);
							return (
								<Route
									path={route.path}
									key={index}
									element={
										<Layout>
											<Suspense fallback={<Loading />}>
												<Container />
											</Suspense>
										</Layout>
									}
								/>
							);
					  })
					: PublicRouter.map((route, index) => {
							const Container = route.element;
							const Layout = checkLayout(route);
							return (
								<Route
									path={route.path}
									key={index}
									element={
										<Layout>
											<Suspense fallback={<Loading />}>
												<Container />
											</Suspense>
										</Layout>
									}
								/>
							);
					  })}
			</Routes>
		</>
	);
};

export default Router;
