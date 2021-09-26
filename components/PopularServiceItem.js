import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "./../constants";

const PopularServiceItem = ({ item, i }) => {
	return (
		<TouchableOpacity
			key={i}
			style={{
				width: 74,
				flexDirection: "column",
				alignItems: "center",
				marginHorizontal: 12,
			}}
		>
			<View
				style={{
					width: 72,
					height: 72,
					backgroundColor: COLORS.gray5,
					borderRadius: 24,
					marginBottom: 4,
				}}
			></View>

			<Text style={{ ...FONTS.body7, textAlign: "center" }}>
				{item.title}
			</Text>
		</TouchableOpacity>
	);
};

export default PopularServiceItem;
