import { FunctionComponent } from 'react';

export type RouterType = {
	path: string;
	element: FunctionComponent;
	layout?: FunctionComponent;
};
