import React, { useEffect, useRef, useState } from "react";
import {
	View,
	Text,
	Animated,
	TouchableOpacity,
	TouchableHighlight,
} from "react-native";
import { COLORS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TabIcon = ({ focused, icon, title }) => {
	const [size, setSize] = useState(1);
	const scaleProgress = useRef(new Animated.Value(0)).current;
	const navigation = useNavigation();

	const animationScale = (toValue) => {
		return Animated.spring(scaleProgress, {
			toValue,
			duration: 250,
			velocity: 10,
			useNativeDriver: true,
		}).start();
	};

	useEffect(() => {
		animationScale(size);
	}, [size]);

	useEffect(() => {
		scaleProgress.addListener(
			(value) => {
				if (focused) {
					setSize(1.1);
				} else {
					setSize(1);
				}
			},
			[size]
		);
	});

	const handleNavigation = async () => {
		let isLoginWithAuth = await AsyncStorage.getItem("@isLoginWithAuth");

		if (title === "Moment" && isLoginWithAuth === "0") {
			return navigation.navigate("Auth");
		} else if (title === "Message" && isLoginWithAuth === "0") {
			return navigation.navigate("Auth");
		} else if (title === "Profile" && isLoginWithAuth === "0") {
			return navigation.navigate("Auth");
		} else {
			navigation.navigate(`${title}`);
		}
	};

	return (
		<TouchableHighlight
			onPress={() => handleNavigation()}
			style={{
				width: "100%",
				borderRadius: 15,
			}}
			underlayColor={COLORS.lightGray3}
		>
			<View
				style={{
					// borderWidth: 1,
					// borderColor: COLORS.blue,
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Animated.Image
					source={icon}
					resizeMode="contain"
					style={{
						width: 24,
						height: 24,
						tintColor: focused ? COLORS.blue : COLORS.gray6,
						transform: [{ scale: scaleProgress }],
					}}
				/>

				<Text
					style={{
						fontFamily: focused ? "PoppinsBold" : "PoppinsRegular",
						fontSize: SIZES.body7,
						color: focused ? COLORS.blue : COLORS.gray6,
					}}
				>
					{title}
				</Text>
			</View>
		</TouchableHighlight>
	);
};

export default TabIcon;
