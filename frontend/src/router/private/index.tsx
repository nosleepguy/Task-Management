import { lazy } from 'react';
import { RouterType } from 'router/type';
const HomePage = lazy(() => import('pages/Home'));
const AddTaskPage = lazy(() => import('pages/AddTask'));
const ManageLabelPage = lazy(() => import('pages/ManageLabel'));
const NotFound = lazy(() => import('components/NotFound'));

export const PrivateRouter: RouterType[] = [
	{
		path: '/',
		element: HomePage,
	},
	{
		path: '/add-task',
		element: AddTaskPage,
	},
	{
		path: '/manage-label',
		element: ManageLabelPage,
	},
	{
		path: '*',
		element: NotFound,
	},
];
