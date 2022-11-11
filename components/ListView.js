import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const dummyData = [
  { title: "Devin", imgSrc: "https://picsum.photos/200" },
  { title: "Dan", imgSrc: "https://picsum.photos/200" },
  { title: "Dominic", imgSrc: "https://picsum.photos/200" },
  { title: "Jackson", imgSrc: "https://picsum.photos/200" },
  { title: "James", imgSrc: "https://picsum.photos/200" },
  { title: "Joel", imgSrc: "https://picsum.photos/200" },
  { title: "John", imgSrc: "https://picsum.photos/200" },
  { title: "Jillian", imgSrc: "https://picsum.photos/200" },
  { title: "Jimmy", imgSrc: "https://picsum.photos/200" },
  { title: "Julie", imgSrc: "https://picsum.photos/200" },
];

// List Item Component
const ListItem = ({ title = "", imgSrc }) => {
  return (
    <TouchableOpacity>
      <View style={styles.itemContainer}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: imgSrc,
          }}
        />
        <Text> {title}</Text>
      </View>
    </TouchableOpacity>
  );
};

// component List View
const FlatListView = ({ currentTab }) => {
  return (
    <View>
      {/* Here is the text you can set or get */}
      <Text style={styles.mainText}>
        Your are at <Text style={styles.tabIndex}>#{currentTab}</Text> Tab
        Currently!{" "}
      </Text>

      {/* here is the flat list (Virtual scrolling) */}
      <View style={{ paddingTop: 10, flexGrow: 1 }}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 120 }} // it is to control bottom space of flat list
          data={dummyData}
          renderItem={({ item }) => (
            <ListItem title={item.title} imgSrc={item.imgSrc} />
          )}
        />
      </View>
    </View>
  );
};

export default FlatListView;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  item: {
    fontSize: 18,
    height: 44,
  },

  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
    fontSize: 18,
    backgroundColor: "lightgray",
  },
  mainText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  tabIndex: {
    color: "red",
    fontStyle: "italic",
    fontSize: 32,
  },
});
