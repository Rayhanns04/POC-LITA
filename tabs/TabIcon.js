import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, Animated } from "react-native";
import { COLORS, SIZES } from "../constants";

const TabIcon = ({ focused, icon, title }) => {
	const [size, setSize] = useState(1);
	const scaleProgress = useRef(new Animated.Value(0)).current;

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

	return (
		<View
			style={{
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
	);
};

export default TabIcon;
