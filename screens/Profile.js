import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Profile = ({ navigation }) => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<TouchableOpacity
				onPress={async () => {
					await AsyncStorage.removeItem("@isLogin");

					return navigation.navigate("Splash");
				}}
			>
				<Text>Logout</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Profile;
