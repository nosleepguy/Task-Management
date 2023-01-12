import React from 'react';
import { RouterType } from 'router/type';

const Login = React.lazy(() => import('container/Login'));
const Register = React.lazy(() => import('container/Register'));
const NotFound = React.lazy(() => import('components/NotFound'));

export const PublicRouter: RouterType[] = [
	{
		path: '/',
		element: Login,
	},
	{
		path: '/login',
		element: Login,
	},
	{
		path: '/register',
		element: Register,
	},
	{
		path: '*',
		element: NotFound,
	},
];
