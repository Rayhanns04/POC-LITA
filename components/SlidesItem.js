import React from "react";
import {
	View,
	Text,
	useWindowDimensions,
	Image,
	StyleSheet,
} from "react-native";
import { FLEXTYPE, FONTS, SIZES } from "./../constants/theme";

const SlidesItem = ({ item }) => {
	const { width } = useWindowDimensions();

	return (
		<View style={[styles.container, { width }]}>
			<Image
				source={item.image}
				style={{
					justifyContent: "center",
					width: 207,
					height: 200,
					marginBottom: 24,
					resizeMode: "contain",
				}}
			/>

			<View style={{ width: SIZES.width / 1.5 }}>
				<Text style={{ ...FONTS.h24Bold, textAlign: "center" }}>
					{item.title}
				</Text>
			</View>
		</View>
	);
};

export default SlidesItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
});
