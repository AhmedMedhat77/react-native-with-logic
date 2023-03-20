import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";
export default function Item(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text
          style={{
            ...styles.text,
            textDecorationLine: props.isCompleted ? "line-through" : "none",
          }}
        >
          {props?.text}
        </Text>
        <View style={{ flexDirection: "row-reverse" }}>
          <TouchableNativeFeedback onPress={() => props.deleteTodos(props.id)}>
            <FontAwesome.Button
              name="close"
              backgroundColor="white"
              iconStyle={{
                color: "red",
                height: "100%",
                textAlign: "right",
              }}
            />
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => {
              props.handleComplete(props.id);
            }}
          >
            <FontAwesome.Button
              name="check"
              backgroundColor="white"
              iconStyle={{
                color: "green",
                height: "100%",
                textAlign: "right",
              }}
            />
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 5,
    maxWidth: "100%",
    padding: 10,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    maxWidth: "80%",
  },
});
