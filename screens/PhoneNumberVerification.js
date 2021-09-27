import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	Image,
	TextInput,
	ToastAndroid,
} from "react-native";
import { COLORS, FONTS, ICONS, SIZES } from "../constants";
import Ripple from "react-native-material-ripple";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PhoneNumberVerification = ({ navigation, route }) => {
	const { phone } = route.params;
	const [otp, setOtp] = useState({
		first: "",
		second: "",
		third: "",
		fourth: "",
	});

	const phoneSplit = phone
		.toString()
		.replace(/(\d{3})(\d{4})(\d{4})/, "$1 $2 $3");

	const firstNum = useRef();
	const secondNum = useRef();
	const thirdNum = useRef();
	const fourthNum = useRef();

	const setToken = async () => {
		if (otp.fourth !== "") {
			await AsyncStorage.setItem("@isLoginWithAuth", "1");
			setTimeout(() => {
				return navigation.replace("Tabs");
			}, 500);
		} else {
			return ToastAndroid.showWithGravity(
				"Did you get OTP code ?",
				ToastAndroid.SHORT,
				ToastAndroid.TOP
			);
		}
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
			<View
				style={{
					flex: 0.5,
					flexDirection: "row",
					alignItems: "center",
					marginLeft: SIZES.padding - 8,
					borderRadius: 999,
				}}
			>
				<TouchableOpacity
					style={{
						borderRadius: 999,
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

				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text
						style={{
							...FONTS.h5Bold,
						}}
					>
						Enter Verification Code (OTP)
					</Text>
				</View>
			</View>

			{/* Content */}
			<View
				style={{
					flex: 7,
					justifyContent: "flex-start",
					alignItems: "center",
					paddingHorizontal: SIZES.padding - 8,
					marginTop: 24,
				}}
			>
				{/* Short description */}
				<Text
					style={{
						width: SIZES.width / 1.7,
						...FONTS.body4,
						textAlign: "center",
					}}
				>
					Verification Code (OTP) has been sent via{" "}
					<Text
						style={{
							...FONTS.h6Bold,
							color: COLORS.blue,
						}}
					>
						Whatsapp
					</Text>
					to
				</Text>

				{/* Phone number */}
				<Text
					style={{
						...FONTS.h2Bold,
						marginTop: 16,
					}}
				>
					+62 {phoneSplit}
				</Text>

				{/* Input Verification Code */}
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						marginTop: 24,
					}}
				>
					<TextInput
						maxLength={1}
						ref={firstNum}
						style={{
							borderWidth: 2,
							borderColor: COLORS.blue,
							...FONTS.h24Bold,
							// paddingHorizontal: 16,
							// paddingVertical: 16,
							backgroundColor: "#F2F2F2F2",
							marginHorizontal: 5,
							width: 65,
							height: 65,
							textAlign: "center",
							borderRadius: 15,
						}}
						// onChangeText={setPhoneNumber}
						// value={phoneNumber}
						onChangeText={(text) => {
							setOtp({ ...otp, first: text });
							text && secondNum.current.focus();
						}}
						keyboardType="number-pad"
					/>
					<TextInput
						maxLength={1}
						ref={secondNum}
						style={{
							borderWidth: 2,
							borderColor: COLORS.blue,
							...FONTS.h24Bold,
							// paddingHorizontal: 16,
							// paddingVertical: 16,
							backgroundColor: "#F2F2F2F2",
							marginHorizontal: 5,
							width: 65,
							height: 65,
							textAlign: "center",
							borderRadius: 15,
						}}
						// onChangeText={setPhoneNumber}
						// value={phoneNumber}
						onChangeText={(text) => {
							setOtp({ ...otp, second: text });
							text
								? thirdNum.current.focus()
								: firstNum.current.focus();
						}}
						keyboardType="number-pad"
					/>
					<TextInput
						maxLength={1}
						ref={thirdNum}
						style={{
							borderWidth: 2,
							borderColor: COLORS.blue,
							...FONTS.h24Bold,
							// paddingHorizontal: 16,
							// paddingVertical: 16,
							backgroundColor: "#F2F2F2F2",
							marginHorizontal: 5,
							width: 65,
							height: 65,
							textAlign: "center",
							borderRadius: 15,
						}}
						// onChangeText={setPhoneNumber}
						// value={phoneNumber}
						onChangeText={(text) => {
							setOtp({ ...otp, third: text });
							text
								? fourthNum.current.focus()
								: secondNum.current.focus();
						}}
						keyboardType="number-pad"
					/>
					<TextInput
						maxLength={1}
						ref={fourthNum}
						style={{
							borderWidth: 2,
							borderColor: COLORS.blue,
							...FONTS.h24Bold,
							// paddingHorizontal: 16,
							// paddingVertical: 16,
							backgroundColor: "#F2F2F2F2",
							marginHorizontal: 5,
							width: 65,
							height: 65,
							textAlign: "center",
							borderRadius: 15,
						}}
						// onChangeText={setPhoneNumber}
						// value={phoneNumber}
						onChangeText={(text) => {
							setOtp({ ...otp, fourth: text });
							!text && thirdNum.current.focus();
						}}
						keyboardType="number-pad"
					/>
				</View>

				{/* Resend */}
				<Text
					style={{
						...FONTS.h5Bold,
						color: COLORS.blue,
						marginTop: 16,
					}}
				>
					Resend
				</Text>
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

export default PhoneNumberVerification;
