import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, ICONS, SIZES } from "../constants";
import { Home, Message, Moment, Profile } from "../screens";
import TabIcon from "./TabIcon";

const Tab = createBottomTabNavigator();

const Tabs = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					height: 60,
					elevation: 0,
					backgroundColor: COLORS.white,
					borderTopColor: COLORS.transparent,
					paddingHorizontal: SIZES.padding - 8,
					borderTopWidth: 1,
					borderTopColor: COLORS.lightGray3,
				},
			}}
			initialRouteName={"Home"}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon
							icon={ICONS.HOME}
							focused={focused}
							title="Home"
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Moment"
				component={Moment}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon
							icon={ICONS.MOMENT}
							focused={focused}
							title="Moment"
						/>
					),
				}}
			/>

			<Tab.Screen
				name="Message"
				component={Message}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon
							icon={ICONS.MESSAGE}
							focused={focused}
							title="Message"
						/>
					),
				}}
			/>

			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon
							icon={ICONS.PROFILE}
							focused={focused}
							title="Profile"
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default Tabs;
