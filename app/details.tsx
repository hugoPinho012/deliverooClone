import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import ParallaxScrollView from "./../Components/ParallaxScrollview";
import Colors from "../constants/Colors";
import { restaurant } from "../assets/data/restaurant";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const details = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: Colors.primary,
      headerLeft: () => (
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name={"ios-arrow-back"} size={24} color={Colors.primary} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={styles.bar}>
          <TouchableOpacity style={styles.roundButton}>
            <Ionicons name={"share-outline"} size={24} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton}>
            <Ionicons
              name={"search-outline"}
              size={24}
              color={Colors.primary}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  return (
    <>
      <ParallaxScrollView
        backgroundColor={"#fff"}
        parallaxHeaderHeight={250}
        stickyHeaderHeight={100}
        renderBackground={() => (
          <Image
            source={restaurant.img}
            style={{ height: 300, width: "100%" }}
          />
        )}
        contentBackgroundColor={Colors.lightGrey}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}> {restaurant.name}</Text>
          </View>
        )}
        style={{ flex: 1 }}
      >
        <View style={styles.detailsContainer}>
          <Text>Parallax boi</Text>
        </View>
      </ParallaxScrollView>
    </>
  );
};

export default details;

const styles = StyleSheet.create({
  detailsContainer: { backgroundColor: Colors.lightGrey },
  stickySection: {
    backgroundColor: "#fff",
    marginLeft: 70,
    height: 100,
    justifyContent: "flex-end",
  },
  stickySectionText: { fontSize: 20, margin: 10 },
  roundButton: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});
