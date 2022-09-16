import React from "react";
import Image from "next/image";
import { randomGif } from "../utils/randomGif";

const GifHolder = () => {
	const [num, setNum] = React.useState(() => 1);
	let randImg = `/chicken/0${num}.gif`;
	return (
		<>
			<div
				onClick={() => {
					setNum(randomGif());
				}}
			>
				<Image src={randImg} alt="Moving Image" width={400} height={400} />
			</div>
		</>
	);
};

export default GifHolder;
