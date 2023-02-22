import { StyleSheet, SafeAreaView, Text, Pressable, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import SongList from "./components/SongList";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./Screens/HomeScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import PreviewScreen from "./Screens/PreviewScreen";
import { WebView } from "react-native-webview"

const Stack = createStackNavigator();
import 'react-native-gesture-handler';

export default function App() {
  return <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name = "HomeScreen" component = {HomeScreen} />
        <Stack.Screen name = "DetailsScreen" component={DetailsScreen}
        options={{
          title: 'Song details',
          headerStyle: {
            backgroundColor: Themes.colors.background,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen name = "PreviewScreen" component={PreviewScreen}
        options={{
          title: 'Song preview',
          headerStyle: {
            backgroundColor: Themes.colors.background,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        
      </Stack.Navigator>
  </NavigationContainer>
}
