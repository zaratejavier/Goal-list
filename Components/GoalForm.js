import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native"

const GoalForm = props => {
  const [enteredGoal, setEnteredGoal] = useState("")

  const handleChange = (enteredText) => {  // it sets what the use enters into the courseGoals
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    // props.onAddGoal(enteredGoal)
    props.handleSubmit(enteredGoal)
    setEnteredGoal('')
  }

  return (
    <Modal visible={props.isAddMode} animationType="slide">
     <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          value={enteredGoal}
          onChangeText={handleChange} //we dont add paranthesis because we want to execute on each key stroke
          style={styles.input}
      />
      {/* enteredGoal will be sent to App.js and used in the handleSubmit function. Since we dont have that state in app.js anymore */}
        {/* <Button title="ADD" onPress={() => props.handleSubmit(enteredGoal)}/>  */}
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View> 
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
        </View>
        
      </View>
    </Modal>  
  )
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,

  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%'
  }
})
export default GoalForm