import React from "react";
import { View, Animated, useWindowDimensions } from "react-native";

const Paginator = ({
	data,
	scrollX,
	containerStyles,
	outputRange,
	dotStyle,
	outputRangeDotWidth,
}) => {
	const { width } = useWindowDimensions();

	return (
		<View
			style={{
				flexDirection: "row",
				height: 20,
				marginBottom: 15,
				...containerStyles,
			}}
		>
			{data.map((_, i) => {
				const inputRange = [
					(i - 1) * width,
					i * width,
					(i + 1) * width,
				];

				const dotWidth = scrollX.interpolate({
					inputRange,
					outputRange: outputRangeDotWidth,
					extrapolate: "clamp",
				});

				const dotColor = scrollX.interpolate({
					inputRange,
					outputRange,
					extrapolate: "clamp",
				});

				return (
					<Animated.View
						style={{
							...dotStyle,
							width: dotWidth,
							borderRadius: 5,
							backgroundColor: dotColor,
						}}
						key={i.toString()}
					/>
				);
			})}
		</View>
	);
};

export default Paginator;
