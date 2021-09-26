import React from "react";
import { Text, Image } from "react-native";
import { COLORS, FONTS, ICONS, SIZES } from "../constants";
import Ripple from "react-native-material-ripple";
import PropTypes from "prop-types";

const ButtonSignin = ({
	title,
	icon,
	onPressAction,
	styleContainer,
	iconSize,
}) => {
	console.log(onPressAction);
	return (
		<Ripple
			onPress={onPressAction}
			style={{
				position: "relative",
				width: SIZES.width / 1.1,
				borderRadius: 15,
				flexDirection: "row",
				alignItems: "center",
				backgroundColor: COLORS.white,
				...styleContainer,
				paddingHorizontal: 16,
			}}
		>
			<Image
				source={icon}
				style={{
					width: iconSize,
					height: iconSize,
				}}
			/>

			<Text
				style={{
					...FONTS.h6Bold,
					color: COLORS.black,
					flex: 1,
					textAlign: "center",
				}}
			>
				{title}
			</Text>
		</Ripple>
	);
};

ButtonSignin.propTypes = {
	title: PropTypes.string.isRequired,
	iconSize: PropTypes.number.isRequired,
	icon: PropTypes.node.isRequired,
	// onPressAction: PropTypes.func,
	styleContainer: PropTypes.object,
};

export default ButtonSignin;
