import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native"

const GoalForm = props => {
  const [enteredGoal, setEnteredGoal] = useState("")

  const handleChange = (enteredText) => {  // it sets what the use enters into the courseGoals
    setEnteredGoal(enteredText)
  }

  return (
     <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          value={enteredGoal}
          onChangeText={handleChange} //we dont add paranthesis because we want to execute on each key stroke
          style={styles.input}
      />
      {/* enteredGoal will be sent to App.js and used in the handleSubmit function. Since we dont have that state in app.js anymore */}
        <Button title="ADD" onPress={() => props.handleSubmit(enteredGoal)}/> 
      </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
})
export default GoalForm