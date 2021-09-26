import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen, Slides, Auth, PhoneNumberAuth } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import Container from "./screens/Container";
import Tabs from "./tabs/Tabs";

const Stack = createStackNavigator();

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	const loadFonts = async () => {
		await Font.loadAsync({
			PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
			PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
			PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
		});

		return setFontsLoaded(true);
	};

	useEffect(() => {
		loadFonts();
	}, []);

	if (fontsLoaded) {
		return (
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: true,
					}}
					initialRouteName={"Splash"}
				>
					<Stack.Screen
						name="Splash"
						component={SplashScreen}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="Container"
						component={Container}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="Tabs"
						component={Tabs}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="Auth"
						component={Auth}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="PhoneNumberAuth"
						component={PhoneNumberAuth}
						options={{
							headerShown: false,
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	} else {
		return <AppLoading />;
	}
}
