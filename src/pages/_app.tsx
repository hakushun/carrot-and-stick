import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { useStore } from '../redux/store';

import '../components/stylesheets/reset.scss';
import '../components/stylesheets/global.scss';

export default function App({
	Component,
	pageProps,
}: AppProps): React.ReactElement {
	const store = useStore(pageProps.initialReduxState);

	/* eslint-disable react/jsx-props-no-spreading */
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
