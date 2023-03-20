import { StyleSheet, TextInput, View, Button } from "react-native";

export default function Form(props) {
  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.formInput}
        placeholder="Add Todo"
        onChangeText={(v) => props.onInputChange(v)}
      />
      <Button title={"Add"} onPress={props.createTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 10,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  formInput: {
    flex: 3,
    padding: 8,
    fontSize: 18,
    textDecorationLine: "none",
    color: "#222",
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
    borderRadius:10
  },
});
