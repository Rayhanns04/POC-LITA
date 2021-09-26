import React from "react";
import { StyleSheet, Image } from "react-native";
import { SIZES } from "../constants";

const CarouselItem = ({ item }) => {
	return (
		<Image
			source={item.url}
			style={{
				width: SIZES.width / 1.1,
				height: SIZES.width / 3.5,
			}}
		/>
	);
};

export default CarouselItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
});
