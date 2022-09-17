import React from "react";
import loadingStyles from "../styles/loading.module.scss";
const PageInit = () => {
	return (
		<>
			<div className={loadingStyles.PageInit}>
				<div>
					<img src="/puppy/01.gif" />
				</div>
			</div>
		</>
	);
};

export default PageInit;
