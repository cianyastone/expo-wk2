import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AlbumDetail = (props) => {
  const { title, artist, image } = props.album;
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image
          style={styles.image}
          source={{
            uri: image
          }}
        />
        <View style={styles.content}>
          <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.artist}>{artist}</Text>
          </View>
        </View>
        <Image 
          style={styles.image1} 
          resizeMode="contain"
          source={ {uri: 'https://i.pinimg.com/originals/62/82/c5/6282c530fa8c4a414429d63d04b4764c.jpg'} } 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderRadius: 20,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20
  },
  content: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
  },
  section: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderRadius: 15,
    padding: 10,
  },
  image: {
    height: 300,
    width: null,
    borderRadius: 15,
  },
  text: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 40,
  },
  artist: {
    fontSize: 14,
    fontWeight: '400',
  },
  image1: {
    height: 150,
    margin: 5,
  },
});

export default AlbumDetail;