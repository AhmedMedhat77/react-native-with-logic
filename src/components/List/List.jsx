import { FlatList, StyleSheet, View } from "react-native";
import Item from "../Item/Item";
export default function List(props) {
  console.log(props);
  return (
    <View style={styles.todos}>
      <FlatList
        data={props?.todos}
        keyExtractor={props?.todos.id}
        renderItem={({ item }) => (
          <Item
            text={item.text}
            isCompleted={item.isCompleted}
            deleteTodos={props.deleteTodos}
            handleComplete={props.handleComplete}
            id={item.id}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todos: {
    width: "100%",
    marginTop: 10,
    // height: "100%",
    
    padding: 10,
    flexGrow: 1,
    backgroundColor: "red",
  },
});
