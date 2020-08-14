
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from "./Components/GoalItem"
import GoalForm from "./Components/GoalForm"

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  

  const handleSubmit = (goalTitle) => { // we get goalTitle from GoalForm component
    setCourseGoals([...courseGoals, {
      key: Math.random().toString(), value: goalTitle
    }]) // we create a new array and add all elements from the old array, then we add a new element which is the goal
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <GoalForm handleSubmit={handleSubmit}/>
      </View>
        <FlatList
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem title={itemData.item.value}/>
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
