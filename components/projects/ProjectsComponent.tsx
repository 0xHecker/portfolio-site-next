import React, { Suspense, useEffect, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdNorthEast } from 'react-icons/md';
import styles from '../../styles/projects/projects.module.scss';
import { projects } from '../../utils/Projects';

const ProjectsComponent = () => {
	const videoRef = useRef(null);

	const setPlayBack = () => {
		// @ts-ignore
		videoRef.current.playbackRate = 2.0;
		// @ts-ignore
		videoRef.current.muted = true;
		// @ts-ignore
		videoRef.current.play();
	};

	useEffect(() => {
		setPlayBack();
	});

	return (
		<section className={styles.projectsContainer}>
			<div className={styles.bg}></div>
			<div className="">
				<h2 className={styles.heading}>Projects</h2>
			</div>
			{/* Each project */}

			{projects.map((project) => {
				return (
					<div
						className={styles.projectMain}
						key={project.name}
					>
						<div className={styles.title}>
							<h2>{project.name}</h2>
							<p>{project.descreption}</p>
						</div>
						{/* after heading */}
						<div className={styles.contentContainer}>
							<div className={styles.videoContainer}>
								<video
									className={styles.video}
									autoPlay
									loop
									ref={videoRef}
									onCanPlay={() => setPlayBack()}
								>
									<source src={project.videoSrc} />
								</video>
							</div>

							{/* Links Container */}
							<div className={styles.linksContainer}>
								<div className={styles.tags}>
									<div className={styles.h3ele}>
										<h3>Built with:</h3>
									</div>

									<div className={styles.tagElements}>
										{project.tags.map((t) => (
											<div key={t} className={styles.tag}>
												{t}
											</div>
										))}
									</div>
								</div>

								{/* Redirects */}
								<div className={styles.links}>
									<div className={styles.link}>
										<a
											href={project.links[0] as string}
											rel="noreferrer"
											target={'_blank'}
										>
											Source Code&nbsp;
											<span
												style={{ fontWeight: 'bolder' }}
											>
												↗︎
											</span>
										</a>
									</div>
									<div className={styles.link}>
										<a
											href={project.links[1] as string}
											rel="noreferrer"
											target={'_blank'}
										>
											Live&nbsp;
											<span
												style={{ fontWeight: 'bolder' }}
											>
												↗︎
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
			<div>
				<h2></h2>
			</div>

			<div className={styles.github}>
				<span>More projects on</span>
				<a
					target="_blank"
					href="https://github.com/0xHecker"
					rel="noopener noreferrer"
					className={styles.iconName}
				>
					Github <strong>↗︎</strong>
				</a>
			</div>
		</section>
	);
};

export default ProjectsComponent;

{
	/* 
	<Image
		// src="https://res.cloudinary.com/dhysgd2qs/image/upload/fl_lossy/v1665938177/icons/nextjs-icon_hwou3l.svg"
		src={'/icons/nextjs-icon.svg'}
		alt="Next.js"
		width={'26px'}
		height={'26px'}
	/>
	 */
}
