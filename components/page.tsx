import { ReactNode } from "react";
import NavBar from "components/NavBar";
import Link from "next/link";
import PageTransition from "components/pagetransition";
import styles from "./page.module.scss";

type PageProps = {
	children: ReactNode;
};

const Page = ({ children }: PageProps): JSX.Element => (
	<div className={styles.container}>
		<NavBar />
		<main className={styles.main}>
			<PageTransition>{children}</PageTransition>
		</main>
		<footer className={styles.footer}>
			<p className={styles.copyright}>
				&copy; Sai Shanmukh {new Date().getFullYear()}
			</p>
		</footer>
	</div>
);

export default Page;
