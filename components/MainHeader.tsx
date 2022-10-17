import React from 'react';
import styles from '../styles/mainheader.module.scss';
import GifHolder from './GifHolder';
import { RoughNotation } from 'react-rough-notation';
import { useTheme } from 'next-themes';

export function MainHeader() {
	const [hover, setHover] = React.useState(false);
	const { theme } = useTheme();

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
							display: 'block',
						}}
					>
						Hi,{' '}
					</span>
					<span
						style={{
							display: 'inline-block',
						}}
					>
						I&rsquo;m
					</span>{' '}
					<span
						style={{
							display: 'inline-block',
							cursor: 'pointer',
						}}
						onMouseEnter={onHover}
						onMouseLeave={onLeave}
					>
						<RoughNotation
							type="underline"
							show={true}
							strokeWidth={2}
							color={'tomato'}
							iterations={2}
							animationDelay={500}
						>
							Shanmukh
						</RoughNotation>
					</span>
					<span
						style={{
							display: 'inline-block',
							color: 'tomato',
						}}
					>
						.
					</span>
					<span
						style={{
							display: 'inline-block',
						}}
					>
						{hover ? <span>eth</span> : ''}
					</span>
				</h1>
				<h2>
					I&rsquo;m your friendly neighbourhood{' '}
					<RoughNotation
						type="underline"
						show={true}
						animationDelay={1500}
						color={theme === 'light' ? 'blue' : 'lightblue'}
						strokeWidth={2}
					>
						<span style={{ fontWeight: '500' }}>
							fullstack developer.
						</span>
					</RoughNotation>
					<span
						style={{
							display: 'inline-block',
							marginTop: '10px',
						}}
					>
						this is my personal website where you&rsquo;ll
						find all my works and the stuff I&rsquo;m
						currently thinking about.
					</span>
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
