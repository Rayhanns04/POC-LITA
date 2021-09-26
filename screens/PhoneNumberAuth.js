import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	Image,
	TextInput,
} from "react-native";
import { COLORS, FONTS, ICONS, SIZES } from "../constants";
import Ripple from "react-native-material-ripple";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PhoneNumberAuth = ({ navigation }) => {
	const setToken = async () => {
		await AsyncStorage.setItem("@isLoginWithAuth", "1");
		setTimeout(() => {
			return navigation.replace("Tabs");
		}, 500);
	};

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: COLORS.white,
				paddingTop: 48,
			}}
		>
			<StatusBar style="dark" backgroundColor={COLORS.white} />

			{/* Back button */}
			<TouchableOpacity
				style={{
					flex: 0.5,
					marginLeft: SIZES.padding - 8,
					borderRadius: 999,
					borderColor: COLORS.white,
				}}
				onPress={() => navigation.goBack()}
			>
				<View
					style={{
						width: 24,
						height: 24,
					}}
				>
					<Image
						source={ICONS.ARROW_BACK}
						style={{
							width: 24,
							height: 24,
							tintColor: COLORS.black,
						}}
					/>
				</View>
			</TouchableOpacity>

			{/* Content */}
			<View
				style={{
					flex: 7,
					justifyContent: "flex-start",
					alignItems: "flex-start",
					paddingHorizontal: SIZES.padding - 8,
					marginTop: 24,
				}}
			>
				<Text
					style={{
						width: SIZES.width / 1.75,
						...FONTS.h24Bold,
					}}
				>
					<Text
						style={{
							color: COLORS.blue,
						}}
					>
						Type
					</Text>{" "}
					your phone number, at below
				</Text>

				{/* Phone number input */}
				<View
					style={{
						flexDirection: "row",
						alignItems: "flex-end",
						marginTop: 32,
					}}
				>
					<Ripple
						style={{
							borderWidth: 1,
							borderColor: COLORS.blue,
							paddingVertical: 8,
							paddingHorizontal: 16,
							borderRadius: 99,
							flexDirection: "row",
							alignItems: "center",
						}}
						onPress={() => navigation.navigate("PhoneNumberAuth")}
					>
						<Image
							source={{
								uri: "https://restcountries.com/data/png/idn.png",
							}}
							style={{
								width: 21,
								height: 15,
								marginRight: 8,
								// resizeMode: "contain",
							}}
						/>
						<Text
							style={{
								...FONTS.body6,
								color: COLORS.blue,
							}}
						>
							+62
						</Text>
					</Ripple>

					<TextInput
						style={{
							marginLeft: 24,
							flex: 1,
							borderBottomColor: COLORS.black,
							borderBottomWidth: 2,
							...FONTS.h24Bold,
						}}
						keyboardType="number-pad"
					/>
				</View>
			</View>

			{/* Next button */}
			<View
				style={{
					flex: 0.6,
					flexDirection: "row",
					justifyContent: "flex-end",
					alignItems: "flex-end",
					marginBottom: 64,
					marginHorizontal: SIZES.padding + 8,
				}}
			>
				<Ripple
					style={{
						width: 52,
						height: 52,
						marginLeft: SIZES.padding - 8,
						borderRadius: 999,
						backgroundColor: COLORS.blue,
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
					rippleContainerBorderRadius={999}
					rippleDuration={500}
					onPress={() => setToken()}
				>
					<View
						style={{
							width: 24,
							height: 24,
							borderRadius: 99,
						}}
					>
						<Image
							source={ICONS.ARROW_BACK}
							style={{
								width: 24,
								height: 24,
								tintColor: COLORS.white,
								transform: [{ rotate: "180deg" }],
							}}
						/>
					</View>
				</Ripple>
			</View>
		</SafeAreaView>
	);
};

export default PhoneNumberAuth;
