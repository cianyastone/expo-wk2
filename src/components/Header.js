import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <Image source = {require('../../img/冰球樂團.png')} resizeMode={'contain'} style={styles.imageStyle}/>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "rgb(244, 239, 250)",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    shadowColor: "#000",
    shadowOffset: { width: 0, height:5 },
    shadowOpacity: 0.4,
    // Android Only
    elevation: 4
  },
  textStyle: {
    fontSize: 20
  },
  imageStyle: {
    height: 40,
  },
});

export default Header;
