import React from "react";
import { ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { IMAGES, COLORS } from "../constants";

const SplashScreen = ({ navigation }) => {
	setTimeout(() => {
		navigation.replace("Container");
	}, 500);
	return (
		<ImageBackground
			source={IMAGES.SPLASH}
			style={{
				flex: 1,
				height: "100%",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: COLORS.blue,
			}}
			resizeMode="cover"
		>
			<StatusBar style="dark" backgroundColor={COLORS.blue} />
		</ImageBackground>
	);
};

export default SplashScreen;
