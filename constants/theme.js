import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
	black: "#020202",

	blue: "#6C3AFE",
	blue2: "#AAB2FB",
	blue3: "#3C1DA1",
	blue4: "#3FBCFC",
	yellow: "#FBBC68",
	red: "#FF3B30",
	green: "#328863",

	white: "#fff",
	white2: "#F9F9F9",
	white3: "#E1E1E1",
	gray: "#777777",
	gray2: "#F8F8F8",
	gray3: "#F5F5F5",
	gray4: "#F1F1F1",
	gray5: "#D3D3D3",
	gray6: "#C4C4C4",
	lightGray: "#DCE0EC",
	lightGray2: "#757575",
	lightGray3: "#B9C1D9",
	lightGray3: "#E8E8E8",

	transparentBlack1: "rgba(2, 2, 2, 0.1)",
	transparentBlack3: "rgba(2, 2, 2, 0.3)",
	transparentBlack5: "rgba(2, 2, 2, 0.5)",
	transparentBlack7: "rgba(2, 2, 2, 0.7)",
	transparentBlack9: "rgba(2, 2, 2, 0.9)",

	transparentGray: "rgba(77,77,77, 0.8)",
	transparentDarkGray: "rgba(20,20,20, 0.9)",

	transparent: "transparent",
};

export const SIZES = {
	// global sizes
	base: 10,
	font: 14,
	radius: 12,
	padding: 24,

	// font sizes
	largeTitle: 40,
	h1: 30,
	h2: 28,
	h24: 24,
	h3: 22,
	h4: 16,
	h5: 18,
	h6: 14,
	h7: 12,
	h8: 10,
	bodyLarge: 40,
	body1: 30,
	body2: 28,
	body3: 22,
	body4: 16,
	body5: 14,
	body6: 12,
	body7: 10,

	// app dimensions
	width,
	height,
};

const REGULAR = "PoppinsRegular";
const MEDIUM = "PoppinsMedium";
const BOLD = "PoppinsBold";

export const FONTS = {
	largeTitle: {
		fontFamily: `${MEDIUM}`,
		fontSize: SIZES.largeTitle,
	},
	largeTitleBold: {
		fontFamily: `${BOLD}`,
		fontSize: SIZES.largeTitle,
	},
	h1: {
		fontFamily: `${MEDIUM}`,
		fontSize: SIZES.h1,
		lineHeight: 36,
	},
	h1Bold: {
		fontFamily: `${BOLD}`,
		fontSize: SIZES.h1,
		lineHeight: 36,
	},
	h2: {
		fontFamily: `${MEDIUM}`,
		fontSize: SIZES.h2,
		lineHeight: 30,
	},
	h2Bold: {
		fontFamily: `${BOLD}`,
		fontSize: SIZES.h2,
		lineHeight: 30,
	},
	h3: {
		fontFamily: `${MEDIUM}`,
		fontSize: SIZES.h3,
		lineHeight: 28,
	},
	h3Bold: {
		fontFamily: `${BOLD}`,
		fontSize: SIZES.h3,
		lineHeight: 28,
	},
	h4: {
		fontFamily: `${MEDIUM}`,
		fontSize: SIZES.h4,
		lineHeight: 22,
	},
	h4Bold: {
		fontFamily: `${BOLD}`,
		fontSize: SIZES.h4,
		lineHeight: 22,
	},
	h24Bold: {
		fontFamily: `${BOLD}`,
		fontSize: SIZES.h24,
		lineHeight: 26,
	},
	h5: {
		fontFamily: `${MEDIUM}`,
		fontSize: SIZES.h5,
		lineHeight: 27,
	},
	h5Bold: {
		fontFamily: `${BOLD}`,
		fontSize: SIZES.h5,
		lineHeight: 27,
	},
	h6: {
		fontFamily: `${MEDIUM}`,
		fontSize: SIZES.h6,
		lineHeight: 22,
	},
	h6Bold: {
		fontFamily: `${BOLD}`,
		fontSize: SIZES.h6,
		lineHeight: 22,
	},
	h7: {
		fontFamily: `${BOLD}`,
		fontSize: SIZES.h7,
		lineHeight: 18,
	},
	h8Bold: {
		fontFamily: `${BOLD}`,
		fontSize: SIZES.h8,
		lineHeight: 15,
	},
	// Body
	bodyLarge: {
		fontFamily: `${REGULAR}`,
		fontSize: SIZES.bodyLarge,
		lineHeight: 36,
	},
	body1: {
		fontFamily: `${REGULAR}`,
		fontSize: SIZES.body1,
		lineHeight: 36,
	},
	body2: {
		fontFamily: `${REGULAR}`,
		fontSize: SIZES.body2,
		lineHeight: 30,
	},
	body3: {
		fontFamily: `${REGULAR}`,
		fontSize: SIZES.body3,
		lineHeight: 22,
	},
	body4: {
		fontFamily: `${REGULAR}`,
		fontSize: SIZES.body4,
		lineHeight: 22,
	},
	body5: {
		fontFamily: `${REGULAR}`,
		fontSize: SIZES.body5,
		lineHeight: 22,
	},
	body6: {
		fontFamily: `${REGULAR}`,
		fontSize: SIZES.body6,
		lineHeight: 18,
	},
	body7: {
		fontFamily: `${REGULAR}`,
		fontSize: SIZES.body7,
		lineHeight: 16,
	},
};

export const FLEXTYPE = {
	flexrow: {
		flexDirection: "row",
		alignItems: "center",
	},
	default: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
};

const appTheme = { COLORS, FONTS, SIZES, FLEXTYPE };

export default appTheme;
