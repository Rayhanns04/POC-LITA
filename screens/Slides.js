import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	useWindowDimensions,
} from "react-native";

const Slides = () => {
	const { width } = useWindowDimensions();
	return (
		<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<View
				style={
					({
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
					},
					{ width })
				}
			>
				<Text>Holla</Text>
			</View>
			<View
				style={
					({
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
					},
					{ width })
				}
			>
				<Text>Holsla</Text>
			</View>
		</View>
	);
};

export default Slides;
