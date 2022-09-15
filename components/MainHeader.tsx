import React from "react";
import styles from "../styles/mainheader.module.scss";
import GifHolder from "./GifHolder";

export function MainHeader() {
	const [hover, setHover] = React.useState(false);
	const onHover = () => {
		setHover(true);
	};

	const onLeave = () => {
		setHover(false);
	};
	return (
		<header className={styles.header}>
			<div className={styles.header__content}>
				<img id="bg1" src="/blob_bg.png" alt="" />
				<h1>
					<span
						style={{
							display: "block",
						}}
					>
						Hi,{" "}
					</span>
					<span
						style={{
							display: "inline-block",
						}}
					>
						I&rsquo;m
					</span>{" "}
					<span
						style={{
							display: "inline-block",
							cursor: "pointer",
						}}
						onMouseEnter={onHover}
						onMouseLeave={onLeave}
					>
						Shanmukh
					</span>
					<span
						style={{
							display: "inline-block",
							color: "tomato",
						}}
					>
						.
					</span>
					<span
						style={{
							display: "inline-block",
						}}
					>
						{hover ? <span>eth</span> : ""}
					</span>
				</h1>
				<h2>
					I&rsquo;m a fullstack developer. this is my personal website where
					you&rsquo;ll find all my works and stuff I&rsquo;m currently thinking
					about
				</h2>
			</div>
			<div className={styles.header__gifcontainer}>
				<div className={styles.header__gif}>
					<GifHolder />
				</div>
			</div>
		</header>
	);
}
