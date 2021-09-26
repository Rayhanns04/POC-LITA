import React, { useRef, useState } from "react";
import { COLORS, SIZES, FONTS } from "./../constants/theme";
import {
	TouchableOpacity,
	SafeAreaView,
	FlatList,
	Animated,
	View,
	Text,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import onboardingdata from "../assets/api/onboardingdata";
import SlidesItem from "../components/SlidesItem";
import Paginator from "./../components/Paginator";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Container = ({ navigation }) => {
	const [currrentIndex, setCurrentIndex] = useState(0);
	const scrollX = useRef(new Animated.Value(0)).current;
	const slidesRef = useRef(null);

	const viewableItemsChanged = useRef(({ viewableItems }) => {
		setCurrentIndex(viewableItems[0].index);
	}).current;
	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

	return (
		<SafeAreaView
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: COLORS.white,
				paddingBottom: 42,
			}}
		>
			<StatusBar style="dark" />
			<View style={{ flex: 3 }}>
				<FlatList
					data={onboardingdata}
					keyExtractor={(item) => `${item.id}`}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => <SlidesItem item={item} />}
					horizontal
					pagingEnabled
					bounces={false}
					onScroll={Animated.event(
						[
							{
								nativeEvent: {
									contentOffset: {
										x: scrollX,
									},
								},
							},
						],
						{
							useNativeDriver: false,
						}
					)}
					ref={slidesRef}
					scrollEventThrottle={32}
					onViewableItemsChanged={viewableItemsChanged}
					viewabilityConfig={viewConfig}
				/>
			</View>
			<Paginator
				data={onboardingdata}
				scrollX={scrollX}
				outputRange={[
					COLORS.lightGray3,
					COLORS.blue,
					COLORS.lightGray3,
				]}
				dotStyle={{
					height: 10,
					marginHorizontal: 8,
				}}
				outputRangeDotWidth={[10, 24, 10]}
			/>

			<TouchableOpacity
				style={{
					width: SIZES.width / 1.2,
					paddingVertical: 13,
					borderWidth: 1,
					borderColor: COLORS.blue,
					borderRadius: 15,
				}}
				onPress={async () => {
					await AsyncStorage.setItem("@isLogin", "1");
					await AsyncStorage.setItem("@isLoginWithAuth", "0");
					navigation.navigate("Home");
				}}
			>
				<Text
					style={{
						...FONTS.h6,
						textAlign: "center",
						color: COLORS.blue,
					}}
				>
					{currrentIndex == 2 ? "Start" : "Skip"}
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default Container;
