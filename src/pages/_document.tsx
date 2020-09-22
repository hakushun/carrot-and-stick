import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="ja">
				<Head />
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans:wght@400;700&display=swap"
					rel="stylesheet"
				/>
				<script
					src="https://kit.fontawesome.com/1fb0847578.js"
					crossOrigin="anonymous"></script>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
