/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
//dependencias
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

//screens
import ActionRecord from "../screens/ActionRecordScreen";
import Activites from "../screens/ActivitesScreen";
import Course from "../screens/CourseScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import TitlesRecord from "../screens/TitlesRecordScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import SettingsScreen from "../screens/SettingsScreen";
import UserScreen from "../screens/UserScreen";


//components
import Header from "../components/Header";
//constants
import Colors from "../constants/Colors";
//hooks
import useColorScheme from "../hooks/useColorScheme";
//navigation
//import LinkingConfiguration from "../navigation/LinkingConfiguration";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import PointsReport from "../screens/PointsReport";
import Publication from "../screens/PublicationScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      //linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1e2d3e",
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={() => ({

          headerTitle: () => <Header />,
          headerBackVisible: false,

          gestureEnabled: false,
        })}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}

        options={() => ({
          headerTitle: () => <Header />,
          headerBackVisible: false,

        })}
      />
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={({ navigation }: RootTabScreenProps<"User">) => ({
          title: "Usuário",
          gestureEnabled: false,
        })}
      />
      <Stack.Screen
        name="Root"
        component={UserScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Opa!", gestureEnabled: false }}
      />
      <Stack.Screen
        name="ActionRecord"
        component={ActionRecord}
        options={() => ({
          headerShown: false,
          gestureEnabled: false,
        })}
      />
      <Stack.Screen
        name="Publication"
        component={Publication}
        options={() => ({
          headerShown: false,
          gestureEnabled: false,
        })}
      />
      <Stack.Screen
        name="TitlesRecord"
        component={TitlesRecord}
        options={() => ({
          headerShown: false,
          gestureEnabled: false,
        })}
      />
      <Stack.Screen
        name="PointsReport"
        component={PointsReport}
        options={() => ({
          headerTitle: () => <Header />,
          headerBackVisible: false,
        })}
      />
      <Stack.Screen
        name="Activites"
        component={Activites}
        options={() => ({
          headerTitle: () => <Header />,
          headerBackVisible: false,
        })}
      />
      <Stack.Screen
        name="Course"
        component={Course}
        options={() => ({
          headerTitle: () => <Header />,
          headerBackVisible: false,
        })}
      />

      {/* <Stack.Screen name="Home" component={HomeScreen} options={() => ({
          headerShown: false,
          headerTitle: "Home",
          headerStyle: {
            backgroundColor: "#1e2d3e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })} />

        <Stack.Screen name="User" component={UserScreen} options={() => ({
          headerShown: false,
          headerTitle: "Home",
          headerStyle: {
            backgroundColor: "#1e2d3e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })} />

         
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={({ navigation }: RootTabScreenProps<"Login">) => ({
          headerShown: false,
          
          
          headerTitle: "Home",
          headerStyle: {
            backgroundColor: "#1e2d3e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          
        })}
      /> */}

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
// const BottomTab = createBottomTabNavigator<RootTabParamList>();

// function BottomTabNavigator() {
//   const colorScheme = useColorScheme();

//   return (
//     <BottomTab.Navigator
//       initialRouteName="Login"
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme].tint,
//         headerShown: true,
//       }}
//     >
//       <BottomTab.Screen
//         name="Login"
//         component={LoginScreen}
//         options={({ navigation }: RootTabScreenProps<"Login">) => ({
//           headerShown: false,
//           tabBarIcon: ({ color }) => (
//             <TabBarIcon name="sign-in" color={color} />
//           ),
//         })}
//       />

//       <BottomTab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={({ navigation }: RootTabScreenProps<"Home">) => ({
//           tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
//           headerShown: false,
//           headerRight: () => (
//             <Pressable
//               //onPress={() => navigation.navigate("Activites")}
//               style={({ pressed }) => ({
//                 opacity: pressed ? 0.5 : 1,
//               })}
//             >
//               <FontAwesome
//                 name="info-circle"
//                 size={25}
//                 color={Colors[colorScheme].text}
//                 style={{ marginRight: 15 }}
//               />
//             </Pressable>
//           ),
//         })}
//       />

//       {/*BottomTab.Screen
//         name="Activites"
//         component={Activites}
//         options={({ navigation }: RootTabScreenProps<"Activites">) => ({
//           title: "Ações Educacionais",
//           header: (props) => <Header />,
//           tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
//         })}
//       />*/}

//       <BottomTab.Screen
//         name="User"
//         component={UserScreen}
//         options={({ navigation }: RootTabScreenProps<"User">) => ({
//           title: "Usuário",
//           tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
//           headerRight: () => (
//             <Pressable
//               //onPress={() => navigation.navigate("Settings")}
//               style={({ pressed }) => ({
//                 opacity: pressed ? 0.5 : 1,
//               })}
//             >
//               <FontAwesome
//                 name="cog"
//                 size={25}
//                 color={Colors[colorScheme].text}
//                 style={{ marginRight: 15 }}
//               />
//             </Pressable>
//           ),
//         })}
//       />
//     </BottomTab.Navigator>
//   );
// }

// /**
//  * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
//  */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>["name"];
//   color: string;
// }) {
//   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
// }

// /*<BottomTab.Screen
//         name="Chat"
//         component={Chat}
//         options={({ navigation }: RootTabScreenProps<'Chat'>) => ({
//           title: 'Chat',
//           tabBarIcon: ({ color }) => <TabBarIcon name="anchor" color={color} />,
//         })}
//       />*/
