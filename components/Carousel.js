import React, { useRef, useState, useEffect } from "react";
import { View, FlatList, Animated } from "react-native";
import CarouselItem from "./CarouselItem";
import { COLORS, SIZES } from "../constants/index";
import Paginator from "../components/Paginator";
import carouselsdata from "../assets/api/carouselsdata";

const Carousel = () => {
	const [newLayout, setNewLayout] = useState({
		x: 0,
		y: 0,
		width: 0,
		height: 0,
	});

	const [currentIndex, setCurrentIndex] = useState(0);
	const scrollX = useRef(new Animated.Value(0)).current;
	const slidesRef = useRef(null);

	const viewableItemsChanged = useRef(({ viewableItems }) => {
		setCurrentIndex(viewableItems[0].index);
	}).current;
	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

	// To get view width & height
	// console.log(newLayout);

	function findDimensions(layout) {
		const { x, y, width, height } = layout;

		return setNewLayout({ x: x, y: y, width: width, height: height });
	}

	return (
		<View
			style={{
				flex: 1,
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				marginBottom: 24,
			}}
		>
			<FlatList
				data={carouselsdata}
				keyExtractor={(item) => `${item.id}`}
				showsHorizontalScrollIndicator={false}
				horizontal
				pagingEnabled
				bounces={false}
				onLayout={(event) => findDimensions(event.nativeEvent.layout)}
				style={{
					position: "relative",
					width: SIZES.width / 1.1,
				}}
				contentContainerStyle={{
					borderRadius: 105,
				}}
				ref={slidesRef}
				scrollEventThrottle={32}
				onViewableItemsChanged={viewableItemsChanged}
				viewabilityConfig={viewConfig}
				renderItem={({ item }) => (
					<CarouselItem newLayout={newLayout} item={item} />
				)}
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
			/>

			{/* reusable Paginator */}
			<Paginator
				data={carouselsdata}
				scrollX={scrollX}
				containerStyles={{
					position: "absolute",
					bottom: -16,
					right: 35,
				}}
				outputRange={[COLORS.white, COLORS.yellow, COLORS.white]}
				outputRangeDotWidth={[8, 24, 8]}
				dotStyle={{
					height: 8,
					marginHorizontal: 4,
				}}
			/>
		</View>
	);
};

export default Carousel;
