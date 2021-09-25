import React from "react";
import { View, Text, Animated, useWindowDimensions } from "react-native";
import { COLORS } from "./../constants/theme";

const Paginator = ({ data, scrollX }) => {
	const { width } = useWindowDimensions();
	return (
		<View style={{ flexDirection: "row", height: 20, marginBottom: 15 }}>
			{data.map((_, i) => {
				const inputRange = [
					(i - 1) * width,
					i * width,
					(i + 1) * width,
				];

				const dotWidth = scrollX.interpolate({
					inputRange,
					outputRange: [10, 24, 10],
					extrapolate: "clamp",
				});

				const dotColor = scrollX.interpolate({
					inputRange,
					outputRange: [
						COLORS.lightGray3,
						COLORS.blue,
						COLORS.lightGray3,
					],
					extrapolate: "clamp",
				});

				return (
					<Animated.View
						style={{
							width: dotWidth,
							height: 10,
							borderRadius: 5,
							backgroundColor: dotColor,
							marginHorizontal: 8,
						}}
						key={i.toString()}
					/>
				);
			})}
		</View>
	);
};

export default Paginator;
