import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Form from "../../components/Form/Form";
import List from "../../components/List/List";
import Header from "../../components/Header/Header";
import GlobalStyles from "../../syles/GlobalStyles";
function Home() {
  const [todos, setTodos] = useState({
    input: "",
    todos: [],
  });

  const onInputChange = (value) => {
    setTodos((old) => {
      return { ...old, input: value };
    });
  };

  const createTodo = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000).toString(),
      text: todos.input,
      isCompleted: false,
    };

    if (todos.input.trim() === "") {
      return;
    } else {
      setTodos((old) => {
        return { ...old, todos: [...old.todos, newTodo] };
      });
    }
  };
  const deleteTodos = (id) => {
    setTodos((old) => {
      return {
        ...old,
        todos: old.todos.filter((todo) => todo.id !== id),
      };
    });
  };
  const handleComplete = (id) => {
    let completed = todos.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos((old) => {
      return { ...old, todos: completed };
    });
    console.log(completed);
  };

  return (
    <View style={GlobalStyles.container}>
      <Header text={"My Todos"} />
      <View style={styles.form}>
        <Form
          input={todos.input}
          onInputChange={onInputChange}
          createTodo={createTodo}
        />
      </View>
      <View style={styles.todoList}>
        <List
          todos={todos.todos}
          deleteTodos={deleteTodos}
          handleComplete={handleComplete}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
export default Home;
