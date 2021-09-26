import React, { useEffect } from "react";
import { ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { IMAGES, COLORS } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({ navigation }) => {
	useEffect(() => {
		(async () => {
			let status = await AsyncStorage.getItem("@isLogin");
			if (status !== "1" || status === null || status === "") {
				return navigation.replace("Container");
			} else {
				setTimeout(() => {
					return navigation.replace("Tabs");
				}, 500);
			}
		})();
	}, []);
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
