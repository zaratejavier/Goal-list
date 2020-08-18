import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from "./Components/GoalItem"
import GoalForm from "./Components/GoalForm"

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  const handleSubmit = (goalTitle) => { // we get goalTitle from GoalForm component
    setCourseGoals(currentGoals => [...currentGoals, 
      {id: Math.random().toString(), value: goalTitle}
    ]) // we create a new array and add all elements from the old array, then we add a new element which is the goal
  }

  const removeGoal = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  return (
    <View style={styles.screen}>
        <GoalForm handleSubmit={handleSubmit}/>
        <FlatList
        data={courseGoals} // we get the data that is stored in the state
        keyExtractor={(item, index) => item.id} // here we get the id from each item
          renderItem={itemData => (
            <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={removeGoal} /> // we pass all these things to GoalItem component
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
