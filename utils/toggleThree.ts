import { variants } from "../components/ToggleTheme";

let final = 0;
export const toggleThree = () => {
	if (final == 0) {
		return variants[final++];
	}
	if (final == 3) {
		final = 0;
	}
	return variants[final++];
};
