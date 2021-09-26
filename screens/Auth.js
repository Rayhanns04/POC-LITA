import React from "react";
import {
	View,
	Text,
	Image,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from "../constants";
import { StatusBar } from "expo-status-bar";
import ButtonSignin from "../components/ButtonSignin";
import Ripple from "react-native-material-ripple";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Auth = ({ navigation }) => {
	const setToken = async () => {
		await AsyncStorage.setItem("@isLoginWithAuth", "1");
		setTimeout(() => {
			return navigation.goBack();
		}, 500);
	};

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: COLORS.blue,
				paddingTop: 48,
			}}
		>
			<StatusBar style="light" backgroundColor={COLORS.blue} />

			{/* Back button */}
			<TouchableOpacity
				style={{
					flex: 0.8,
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
						}}
					/>
				</View>
			</TouchableOpacity>

			{/* Content Header */}
			<View
				style={{
					flex: 8,
					justifyContent: "flex-start",
					alignItems: "center",
				}}
			>
				{/* Logo */}
				<Image
					source={IMAGES.ILLUSTRATIONE}
					style={{
						width: 155,
						height: 152,
					}}
				/>
				<Text
					style={{
						...FONTS.h2Bold,
						color: COLORS.white,
						marginTop: 16,
						marginBottom: 24,
					}}
				>
					Lita
				</Text>

				{/* Short description */}
				<Text
					style={{
						...FONTS.body5,
						color: COLORS.white,
					}}
				>
					Sign in to experience full features
				</Text>

				{/* Signin Option */}
				<View
					style={{
						marginVertical: 24,
					}}
				>
					<ButtonSignin
						title="Sign in with Google"
						icon={ICONS.GOOGLE}
						iconSize={24}
						styleContainer={{
							paddingVertical: 16,
						}}
						onPressAction={() => setToken()}
					/>
					<ButtonSignin
						title="Sign in with Facebook"
						icon={ICONS.FACEBOOK}
						iconSize={24}
						styleContainer={{
							paddingVertical: 16,
							marginTop: 16,
						}}
						onPressAction={() => setToken()}
					/>
				</View>

				{/* Short description */}
				<Text
					style={{
						...FONTS.body5,
						color: COLORS.white,
					}}
				>
					Or login with
				</Text>

				{/* Login with phone number */}
				<Ripple
					style={{
						borderWidth: 1,
						borderColor: COLORS.white,
						paddingVertical: 8,
						paddingHorizontal: 16,
						borderRadius: 99,
						marginTop: 16,
					}}
					onPress={() => navigation.navigate("PhoneNumberAuth")}
				>
					<Text
						style={{
							...FONTS.body6,
							color: COLORS.white,
						}}
					>
						Login using phone number
					</Text>
				</Ripple>
			</View>
		</SafeAreaView>
	);
};

export default Auth;
