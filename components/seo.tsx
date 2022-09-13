import { DefaultSeo } from "next-seo";

const config = {
	title: "Sai Shanmukh - FullStack Developer ",
	description: "I’m a fullstack developer who loves to create stuff!",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://shanmukh.xyz",
		site_name: "Sai Shanmukh",
		images: [
			{
				url: "https://shanmukh.com/og.jpg",
				alt: "Sai Shanmukh",
			},
		],
	},
	twitter: {
		handle: "@msshanmukh",
		site: "@msshanmukh",
		cardType: "summary_large_image",
	},
};

const SEO = (): JSX.Element => {
	return <DefaultSeo {...config} />;
};

export default SEO;
