import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<link href="https://github.com/0xHecker" rel="me" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
