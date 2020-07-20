import React, { FunctionComponent } from 'react';

import styles from './placeholder.module.css';

export const Placeholder: FunctionComponent = ({ children }) => (
	<div className={styles.container}>
		<span className={styles.content}>{children}</span>
	</div>
);
