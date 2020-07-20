/* eslint react/no-danger: 0 */

import Head from 'next/head';
import React, { FunctionComponent } from 'react';

import { Placeholder } from '../components/placeholder';

export const Index: FunctionComponent = () => (
	<>
		<Head>
			<title>rootown.io</title>
			<script
				async
				src="https://www.googletagmanager.com/gtag/js?id=UA-172924304-1"
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag() {
							dataLayer.push(arguments);
						}
						gtag('js', new Date());
						gtag('config', 'UA-172924304-1');`,
				}}
			/>
		</Head>
		<Placeholder>
			<b>root</b>own.io
		</Placeholder>
	</>
);

export default Index;
