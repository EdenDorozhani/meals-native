import { FlatList, StyleSheet, Text, View } from "react-native";
import DetailItem from "../DetailItem";

const DetailsList = ({ details, listTitle }) => {
  const headerComponent = () => {
    return (
      <View style={styles.headerComponentContainer}>
        <Text style={styles.headerComponent}>{listTitle}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={details}
      renderItem={({ item }) => <DetailItem text={item} />}
      keyExtractor={() => Math.random()}
      ListHeaderComponent={headerComponent}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default DetailsList;

const styles = StyleSheet.create({
  headerComponentContainer: {
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: "white",
  },
  headerComponent: {
    color: "white",
  },
  listContainer: {
    width: "80%",
    alignSelf: "center",
    gap: 5,
  },
});
