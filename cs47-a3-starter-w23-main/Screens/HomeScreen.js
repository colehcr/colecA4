import { StyleSheet, SafeAreaView, Text, Pressable, View } from "react-native";
import { useSpotifyAuth } from "../utils";
import { Themes } from "../assets/Themes";
import SpotifyAuthButton from "../components/SpotifyAuthButton";
import SongList from "../components/SongList";
import { NavigationContainer } from '@react-navigation/native';

export default function HomeScreen({navigation}) {
    // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
    const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);
  
    console.log("token", token);
    console.log("tracks", tracks);

    
    let contentDisplayed = null;
  
    if (token) {
      contentDisplayed = <SongList tracks = {tracks} navigation = {navigation} />;
    } else {
      contentDisplayed = (
        <SpotifyAuthButton authenticationFunction = {getSpotifyAuth}/>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        
        {contentDisplayed}
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Themes.colors.background,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    
    authText: {
      color: "white"
    },
    titleRow: {
      flexDirection: 'row',
      padding: 20,
      backgroundColor: 'lightblue',
      justifyContent: 'center',
      borderRadius: 10,
      marginBottom: 8,
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  
  
  
  });