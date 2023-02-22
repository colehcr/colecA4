import { FlatList, Text, StyleSheet, View, Image} from "react-native"
import SongBoxes from "./SongBoxes";
import { Themes } from "../assets/Themes";
import { millisToMinutesAndSeconds } from "../utils";



const SongList = ({tracks, navigation}) => {
  const renderSongBox = ({ item, index }) => (
    <SongBoxes
      id={index + 1}
      name={item.songTitle}
      //color={item.color}
      imageUrl={item.imageUrl}
      album = {item.albumName}
      duration = {millisToMinutesAndSeconds(item.duration)}  
      artist={item.songArtists[0].name}
      navigation={navigation}
      previewUrl = {item.previewUrl}
      externalUrl = {item.externalUrl}

    />
  );

    return (
        
    <View>   
        <View style={styles.titleRow}>
        <Image style={{width: 30, height: 30, marginRight: 12}} source={require('../assets/spotify-logo.png')}/>
            <Text style={styles.titleText}>My Top Tracks</Text>
        </View>
        <FlatList 
            data = {tracks}
            renderItem={(item) => renderSongBox(item, navigation)}
            navigation={navigation}
            //    console.log(item);
            //    return <Text style = {{color: "white"}}>{item.songTitle}</Text>;
            //}}
            
            keyExtractor={(item) => item.id}

        />
    </View> 
    );
};

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
      //backgroundColor: 'lightblue',
      justifyContent: 'center',
      borderRadius: 10,
      marginBottom: 8,
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: "white",
    },
  
    image: {
        margin: 10,
        width: 100,
        height: 100
    },
  
  });

export default SongList