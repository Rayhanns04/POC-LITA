import React from "react";
import { View, Text, Image } from "react-native";
import { FLEXTYPE, FONTS, ICONS, IMAGES, SIZES, COLORS } from "../constants";

const RecomendedGamersItem = ({ item }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				alignItems: "flex-start",
				height: 114,
				marginBottom: SIZES.radius + 16,
				marginHorizontal: SIZES.padding - 8,
			}}
		>
			{/* Thumbnail */}
			<Image
				source={item.image}
				style={{
					width: 86,
					height: 118,
					marginRight: 20,
					borderRadius: 18,
				}}
			/>

			{/* Content */}
			<View
				style={{
					flex: 1,
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "center",
				}}
			>
				{/* header */}
				<View
					style={{
						width: "100%",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Text
						style={{
							...FONTS.h4Bold,
							width: 141,
						}}
						numberOfLines={1}
					>
						{item.fullname}
					</Text>
					<View style={{ ...FLEXTYPE.flexrow }}>
						<Image
							source={ICONS.STAR}
							style={{ width: 13, height: 13, marginRight: 5 }}
						/>
						<Text
							style={{
								marginRight: 5,
								...FONTS.h7,
							}}
						>
							{item.ratings.range}
						</Text>
						<Text
							style={{
								...FONTS.body6,
							}}
						>
							(
							{item.ratings.followers
								.toString()
								.substring(
									0,
									item.ratings.followers.toString().length - 3
								)}
							K )
						</Text>
					</View>
				</View>

				{/* name of game */}
				<View
					style={{
						...FLEXTYPE.flexrow,
					}}
				>
					<Image
						source={item.game.icon}
						style={{
							width: 30,
							height: 30,
							marginRight: 12,
						}}
					/>

					<Text
						style={{
							...FONTS.body6,
						}}
					>
						{item.game.name}
					</Text>
				</View>

				{/* description */}
				<Text
					numberOfLines={2}
					style={{
						...FONTS.body6,
						color: COLORS.gray6,
						marginTop: 2,
					}}
				>
					{item.description}
				</Text>

				{/* coin */}
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Image
						source={ICONS.COIN}
						style={{ width: 24, height: 24, marginRight: 4 }}
					/>
					<Text style={{ ...FONTS.h7, color: COLORS.yellow }}>
						{item.coin}
						<Text style={{ ...FONTS.body6, color: COLORS.black }}>
							/Match
						</Text>
					</Text>
				</View>
			</View>
		</View>
	);
};

export default RecomendedGamersItem;
