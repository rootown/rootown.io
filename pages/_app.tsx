import { AppProps } from 'next/app';
import React from 'react';

import '../styles.css';

export const Rootown = ({ Component, pageProps }: AppProps) => (
	<Component {...pageProps} />
);

export default Rootown;
