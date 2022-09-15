import React from "react";
import Image from "next/image";
let arr1 = [1, 2, 3, 4];
let arr2: number[] = [];

let randNum = () => {
	if (arr2.length >= 4) arr2 = [];

	let num = Math.floor(Math.random() * arr1.length);

	if (arr2.includes(arr1[num])) randNum();
	else arr2.push(arr1[num]);

	return num;
};

const randomGif = () => {
	if (arr1.length === 0) {
		while (arr1.length <= 3) {
			arr1.push(arr1.length + 1);
		}
		arr2.splice(0, 4);
	}
	const rand = randNum();
	let final = arr1[rand];
	arr2.push(final);
	arr1 = arr1.filter((item) => item !== final);
	return final;
};

const GifHolder = () => {
	const [num, setNum] = React.useState(() => 1);

	return (
		<>
			<Image
				src={`/chicken/0${num}.gif`}
				alt="Moving Image"
				width={400}
				height={400}
			/>
		</>
	);
};

export default GifHolder;
