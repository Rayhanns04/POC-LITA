import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	View,
	Text,
	SafeAreaView,
	FlatList,
	Image,
	ScrollView,
} from "react-native";
import PopularServiceData from "../assets/api/PopularServiceData";
import RecomendedGamersDatas from "../assets/api/RecomendedGamersDatas";
import { PopularServiceItem, RecomendedGamersItem } from "../components";
import Carousel from "../components/Carousel";
import { COLORS, IMAGES, SIZES, FONTS, ICONS } from "./../constants";

const Home = () => {
	const renderHeader = () => {
		return (
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					marginHorizontal: SIZES.padding - 6,
					marginVertical: 24,
				}}
			>
				<Text
					style={{
						...FONTS.h2Bold,
						color: COLORS.blue,
					}}
				>
					Lita
				</Text>

				<Image
					source={ICONS.SEARCH}
					style={{
						width: 28,
						height: 28,
					}}
				/>
			</View>
		);
	};

	const renderPopularService = () => {
		return (
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View>
					<View
						style={{
							flexDirection: "row",
							flexWrap: "wrap",
						}}
					>
						{PopularServiceData.map((item, i) => {
							if (i % 2 == 0) {
								return null;
							}
							return <PopularServiceItem item={item} i={i} />;
						})}
					</View>
					<View
						style={{
							flexDirection: "row",
							flexWrap: "wrap",
						}}
					>
						{PopularServiceData.map((item, i) => {
							if (i % 2 != 0) {
								return null;
							}
							return <PopularServiceItem item={item} i={i} />;
						})}
					</View>
				</View>
			</ScrollView>
		);
	};

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: COLORS.white,
				paddingTop: 40,
			}}
		>
			<StatusBar style="dark" backgroundColor={COLORS.white} />
			<FlatList
				data={RecomendedGamersDatas}
				keyExtractor={(item) => `${item.id}`}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<View>
						{/* Header */}
						{renderHeader()}

						{/* Carousel */}
						<Carousel />

						{/* Header Popular Service */}
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								paddingHorizontal: SIZES.padding - 8,
								marginBottom: 16,
							}}
						>
							<Image
								source={IMAGES.ILLUSTRATIOND}
								style={{
									width: 30,
									height: 30,
									marginRight: 16,
								}}
							/>
							<Text
								style={{
									...FONTS.h5Bold,
								}}
							>
								Popular Service
							</Text>
						</View>

						{/* Flatlist Popular Service  */}
						{renderPopularService()}

						{/* Header Recomended Gamer */}
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								paddingHorizontal: SIZES.padding - 8,
								marginBottom: 16,
								marginTop: 24,
							}}
						>
							<Image
								source={IMAGES.ILLUSTRATIONC}
								style={{
									width: 30,
									height: 30,
									marginRight: 16,
								}}
							/>
							<Text
								style={{
									...FONTS.h5Bold,
								}}
							>
								Recomended Gamers
							</Text>
						</View>
					</View>
				}
				renderItem={({ item }) => <RecomendedGamersItem item={item} />}
				ListFooterComponent={<View style={{ marginBottom: 60 }}></View>}
			/>
		</SafeAreaView>
	);
};

export default Home;
